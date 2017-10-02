//var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
//var cors_api_url = 'https://crossorigin.me/';
var cors_api_url = '';
function doCORSRequest(options, processResult) {
    var x = new XMLHttpRequest();
    x.open("GET", cors_api_url + options.url);
    x.onload = x.onerror = function () {
        processResult(x.status, x.responseText || '');
    };
    x.send(options.data);
}

// var METHOD = 1; // Parse project listings
var METHOD = 2; // Parse individual project pages
// var METHOD = 3; // Mock projects for testing purposes

var maxProjectCode = 298;
var desiredProjectsNum = 209;
var pagesNum = 19;
var threadsNum = 40;
var failAmount = 8000000;

var attemptIndex = 0;
var finished = false;
var stop = false;
var nextPageIndex = 0;
var finishedThreadsNum = 0;
var finishedProjectCodesNum = 0;

$(function () {
    if (METHOD == 1) {
        for (var i = 0; i < threadsNum; i++) {
            requestNextPage();
        }
    } else if (METHOD == 2) {
        for (var i = 1; i <= maxProjectCode; i++) {
            requestPage(i);
        }
    } else {
        initTestProjects();
    }
});

var projects = [];

/* METHOD 1 */

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
            var name = $(resultDOM).find("h1 a").text().trim();
            var desc = $(resultDOM).find(".desc").text().trim();
            var cost = Number($(resultDOM).find(".sum").text().replace(/ /g, "").replace("грн.", ""));
            var votesNum = Number($(resultDOM).find(".total").text().trim());
            // console.log(votesNum + " / " + cost + " / " + desc + " / " + name);
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
            doOnRetrievalFinish();
        }
    } else {
        requestNextPage();
    }
}

/* METHOD 2 */

function requestPage(code) {
    var url = "https://adm.dniprorada.gov.ua/projects/show/" + code;
    doCORSRequest({
        method: 'GET',
        url: url
    }, function (status, result) {
        processProjectPage(code, status, result);
    });
}

function processProjectPage(code, status, result) {
    if (finished) {
        return;
    }
    finishedProjectCodesNum++;
    $("#status").html("Зачекайте. Обробляється сторінка " + finishedProjectCodesNum
        + " з " + maxProjectCode + "...<br>"
        + "Знайдено активних проектів: " + projects.length);
    if (status == 200) {
        var resultDOM = $(result);

        var isActive = resultDOM.find("span.status-3").length > 0;
        if (!isActive) {
            return;
        }

        var name = resultDOM.find("section.project-info h1").clone().children().remove().end().text().trim();
        var desc = resultDOM.find("div.desc p").text().trim();
        var cost = Number(resultDOM.find("div.amount strong").text().replace(/ /g, "").replace("грн.", ""));
        var votesNum = Number(resultDOM.find(".supported .num").text().trim());
        //console.log(votesNum + " / " + cost + " / " + desc + " / " + name);
        projects.push({
            name: name,
            desc: desc,
            cost: cost,
            votesNum: votesNum,
            code: code
        });

        var timeLeft = resultDOM.find(".time-left .num").text().trim();
        if (timeLeft != "") {
            $("#time-left").text("До закінчення голосування залишилось " + timeLeft);
        }

        removeDuplicateProjects();
    }

    if (finishedProjectCodesNum == maxProjectCode || stop) {
        doOnRetrievalFinish();
    }
}

/* PROCESSING RESULTS */

function doOnRetrievalFinish() {
    if (!finished) {
        finished = true;
        $("#status").text("Знайдено проектів: " + projects.length);
        $("#stop-button").hide();
        processFoundProjects();
    }
}

function compareProjectsByVotes(project1, project2) {
    return project2.votesNum - project1.votesNum;
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function shortStr(str) {
    var maxLen = 150;
    if (str.length > maxLen) {
        return str.substr(0, maxLen) + "...";
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
            var failedProjectClass = budgetSum > failAmount ? " project-failed" : "";
            projectsDiv.append("<div class='project" + selectedProjectClass + failedProjectClass + "'>"
                + "<div class='project-order'>" + order + "</div>"
                + "<div class='project-votes'><i class='fa fa-thumbs-up' aria-hidden='true'></i> " + project.votesNum + "</div>"
                + "<div class='project-cost'><i class='fa fa-money' aria-hidden='true'></i> " + formatNumber(project.cost) + " (∑ " + formatNumber(budgetSum) + ")</div>"
                + "<div class='project-code'>#" + project.code + "</div>"
                + "<div class='project-name'>" + project.name + "</div>"
                + "<div class='project-desc'>" + project.desc + "</div>"
                + "<div class='project-fading'></div>"
                + "</div>");
        }
    }
}