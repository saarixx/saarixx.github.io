var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
//var cors_api_url = 'https://crossorigin.me/';
//var cors_api_url = '';
function doCORSRequest(options, processResult) {
    var x = new XMLHttpRequest();
    x.open("GET", cors_api_url + options.url);
    x.onload = x.onerror = function () {
        processResult(x.status, x.responseText || '');
    };
    x.send(options.data);
}

var desiredProjectsNum = 210;
var pagesNum = 19;
var threadsNum = 2;

var attemptIndex = 0;
var finished = false;
var stop = false;
var nextPageIndex = 0;
var finishedThreadsNum = 0;

$(function () {
    for (var i = 0; i < threadsNum; i++) {
        requestNextPage();
    }
});

var projects = [];

function requestNextPage() {
    nextPageIndex++;
    if (nextPageIndex > pagesNum) {
        nextPageIndex = 1;
    }

    attemptIndex++;
    $("#status").html("Зачекайте. Завантажується сторінка номер " + attemptIndex
        + "...<br>"
        + "Знайдено проектів: " + projects.length + " з " + desiredProjectsNum);
    var url = "https://adm.dniprorada.gov.ua/projects?type=3&range=50000%3A1000000?page="
        + nextPageIndex;
    doCORSRequest({
        method: 'GET',
        url: url
    }, processResult);
}

function processResult(status, result) {
    if (finished) {
        return;
    }
    if (status == 200) {
        var resultDOM = $(result);

        resultDOM.find(".project-card").each(function (index, element) {
            var name = $(element).find("h1 a").text().trim();
            var desc = $(element).find(".desc").text().trim();
            var cost = Number($(element).find(".sum").text().replace(/ /g, "").replace("грн.", ""));
            var votesNum = Number($(element).find(".total").text().trim());
            console.log(votesNum + " / " + cost + " / " + desc + " / " + name);
            projects.push({
                name: name,
                desc: desc,
                cost: cost,
                votesNum: votesNum
            });
        }, this);
        removeDuplicateProjects();
    }
    if (result == '' || status != 200) {
        finishedThreadsNum++;
        if (finishedThreadsNum != threadsNum) {
            return;
        }
        stop = true;
    }
    var finish = finished || stop || (projects.length == desiredProjectsNum);
    if (finish) {
        if (!finished) {
            finished = true;
            $("#status").text("Знайдено проектів: " + projects.length);
            $("#stop-button").hide();
            processFoundProjects();
        }
    } else {
        requestNextPage();
    }
}

function compareProjectsByVotes(project1, project2) {
    return project2.votesNum - project1.votesNum;
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function shortStr(str) {
    if (str.length > 200) {
        return str.substr(0, 200) + "...";
    }
    return str;
}

function removeDuplicateProjects() {
    var names = {};
    var newList = [];
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (names.hasOwnProperty(project.name)) {
            continue;
        }
        names[project.name] = "";
        newList.push(project);
    }
    projects = newList;
}

function processFoundProjects() {
    projects.sort(compareProjectsByVotes);
    for (var passIndex = 0; passIndex < 2; passIndex++) {
        var budgetSum = 0;
        var order = 0;
        var projectsDiv = passIndex == 0 ? $("#large-projects")
            : $("#small-projects");
        for (var i = 0; i < projects.length; i++) {
            var project = projects[i];
            if (passIndex == 0 && project.cost < 200000
                || passIndex == 1 && project.cost >= 200000) {
                continue;
            }
            order++;
            budgetSum += project.cost;
            var selectedProjectClass = project.name.includes("172") ? " project-selected" : "";
            projectsDiv.append("<div class='project" + selectedProjectClass + "'>"
                + "<p class='project-order'>#" + order + "</p>"
                + "<p class='project-votes'>" + project.votesNum + "</p>"
                + "<p class='project-cost'>" + formatNumber(project.cost) + "</p>"
                + "<p class='project-cost-sum'>" + formatNumber(budgetSum) + "</p>"
                + "<p class='project-name'>" + project.name + "</p>"
                + "<p class='project-desc'>" + shortStr(project.desc) + "</p>"
                + "</div>");
        }
    }
}