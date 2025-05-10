// SX
let neededScoreUpdatesNum = 0;
let finishScoreUpdateTimeoutId = 0;

function updateScore() {
    neededScoreUpdatesNum = 20;
    if (finishScoreUpdateTimeoutId == 0) {
        finishScoreUpdateTimeoutId = setInterval(finishScoreUpdate, 10);
    }
}

function finishScoreUpdate() {
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
      const text = span.textContent.trim();
      if (text.startsWith('.,.')) {
        const numbers = text.replace('.,.', '').trim().split(/\s+/);
        if (numbers.length === 3) {
          let [main, sub1, sub2] = numbers;
          if (sub2 == 0) {
            sub2 = "&nbsp;";
          } else {
            sub2 = Number(sub2);
            sub2 = Math.floor(sub2 / 3600) + ":" + (Math.floor(sub2 / 60) % 60).toString().padStart(2, "0");
          }

          // Create new HTML structure
          const container = document.createElement('div');
          container.className = 'formatted-container';

          const mainDiv = document.createElement('div');
          mainDiv.className = 'main-number';
          mainDiv.textContent = main;

          const sideDiv = document.createElement('div');
          sideDiv.className = 'side-numbers';
          sideDiv.innerHTML = `<div>${sub1}</div><div>${sub2}</div>`;

          container.appendChild(mainDiv);
          container.appendChild(sideDiv);

          // Replace span content
          span.innerHTML = '';
          span.appendChild(container);
        }
      }
    });
    fixTableNumberAlignment();
    neededScoreUpdatesNum--;
    if (neededScoreUpdatesNum <= 0 && finishScoreUpdateTimeoutId != 0) {
        clearTimeout(finishScoreUpdateTimeoutId);
        finishScoreUpdateTimeoutId = 0;
    }
}

function fixTableNumberAlignment() {
    const tds = document.getElementsByTagName('td');
    
    const numberRegex = /^\d+$/;
    
    for (let td of tds) {
        if (td.children.length === 1 && td.children[0].tagName === 'SPAN') {
            const span = td.children[0];
            if (numberRegex.test(span.textContent.trim())) {
                td.style.textAlign = 'center';
            }
        }
    }
}



try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
        , t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "3fe2db31-41ce-437c-be9e-65862b336a86",
        e._sentryDebugIdIdentifier = "sentry-dbid-3fe2db31-41ce-437c-be9e-65862b336a86")
} catch (e) { }
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5033], {
    5279: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        var a = r(12115);
        let n = a.forwardRef(function (e, t) {
            let { title: r, titleId: n, ...o } = e;
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": n
            }, o), r ? a.createElement("title", {
                id: n
            }, r) : null, a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            }))
        })
    }
    ,
    10101: (e, t, r) => {
        r.d(t, {
            A: () => o
        }),
            r(12115);
        var a = r(76856)
            , n = r(95155);
        let o = (0,
            a.A)((0,
                n.jsx)("path", {
                    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                }), "KeyboardArrowRight")
    }
    ,
    17261: (e, t, r) => {
        r.r(t),
            r.d(t, {
                default: () => i,
                useRtl: () => l
            });
        var a = r(12115)
            , n = r(95155);
        let o = a.createContext()
            , l = () => {
                let e = a.useContext(o);
                return null != e && e
            }
            , i = function (e) {
                let { value: t, ...r } = e;
                return (0,
                    n.jsx)(o.Provider, {
                        value: null == t || t,
                        ...r
                    })
            }
    }
    ,
    32128: (e, t, r) => {
        r.d(t, {
            A: () => l,
            f: () => o
        });
        var a = r(57692)
            , n = r(81112);
        function o(e) {
            return (0,
                n.Ay)("MuiListItemIcon", e)
        }
        let l = (0,
            a.A)("MuiListItemIcon", ["root", "alignItemsFlexStart"])
    }
    ,
    34438: (e, t, r) => {
        r.d(t, {
            A: () => h
        });
        var a = r(12115)
            , n = r(52596)
            , o = r(81112)
            , l = r(15386)
            , i = r(65438)
            , s = r(65706)
            , d = r(54750)
            , c = r(74291)
            , u = r(95155);
        let p = (0,
            c.A)()
            , m = (0,
                d.A)("div", {
                    name: "MuiContainer",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let { ownerState: r } = e;
                        return [t.root, t[`maxWidth${(0,
                            i.A)(String(r.maxWidth))}`], r.fixed && t.fixed, r.disableGutters && t.disableGutters]
                    }
                })
            , f = e => (0,
                s.default)({
                    props: e,
                    name: "MuiContainer",
                    defaultTheme: p
                })
            , v = (e, t) => {
                let { classes: r, fixed: a, disableGutters: n, maxWidth: s } = e
                    , d = {
                        root: ["root", s && `maxWidth${(0,
                            i.A)(String(s))}`, a && "fixed", n && "disableGutters"]
                    };
                return (0,
                    l.A)(d, e => (0,
                        o.Ay)(t, e), r)
            }
            ;
        function h(e = {}) {
            let { createStyledComponent: t = m, useThemeProps: r = f, componentName: o = "MuiContainer" } = e
                , l = t(({ theme: e, ownerState: t }) => ({
                    width: "100%",
                    marginLeft: "auto",
                    boxSizing: "border-box",
                    marginRight: "auto",
                    ...!t.disableGutters && {
                        paddingLeft: e.spacing(2),
                        paddingRight: e.spacing(2),
                        [e.breakpoints.up("sm")]: {
                            paddingLeft: e.spacing(3),
                            paddingRight: e.spacing(3)
                        }
                    }
                }), ({ theme: e, ownerState: t }) => t.fixed && Object.keys(e.breakpoints.values).reduce((t, r) => {
                    let a = e.breakpoints.values[r];
                    return 0 !== a && (t[e.breakpoints.up(r)] = {
                        maxWidth: `${a}${e.breakpoints.unit}`
                    }),
                        t
                }
                    , {}), ({ theme: e, ownerState: t }) => ({
                        ..."xs" === t.maxWidth && {
                            [e.breakpoints.up("xs")]: {
                                maxWidth: Math.max(e.breakpoints.values.xs, 444)
                            }
                        },
                        ...t.maxWidth && "xs" !== t.maxWidth && {
                            [e.breakpoints.up(t.maxWidth)]: {
                                maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`
                            }
                        }
                    }));
            return a.forwardRef(function (e, t) {
                let a = r(e)
                    , { className: i, component: s = "div", disableGutters: d = !1, fixed: c = !1, maxWidth: p = "lg", classes: m, ...f } = a
                    , h = {
                        ...a,
                        component: s,
                        disableGutters: d,
                        fixed: c,
                        maxWidth: p
                    }
                    , g = v(h, o);
                return (0,
                    u.jsx)(l, {
                        as: s,
                        ownerState: h,
                        className: (0,
                            n.A)(g.root, i),
                        ref: t,
                        ...f
                    })
            })
        }
    }
    ,
    36054: (e, t, r) => {
        r.r(t),
            r.d(t, {
                default: () => c,
                unstable_createUseMediaQuery: () => d
            });
        var a, n = r(12115), o = r(80536), l = r(61101), i = r(7934);
        let s = {
            ...a || (a = r.t(n, 2))
        }.useSyncExternalStore;
        function d() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , { themeId: t } = e;
            return function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , a = (0,
                        i.default)();
                a && t && (a = a[t] || a);
                let d = "undefined" != typeof window && void 0 !== window.matchMedia
                    , { defaultMatches: c = !1, matchMedia: u = d ? window.matchMedia : null, ssrMatchMedia: p = null, noSsr: m = !1 } = (0,
                        l.A)({
                            name: "MuiUseMediaQuery",
                            props: r,
                            theme: a
                        })
                    , f = "function" == typeof e ? e(a) : e;
                return (void 0 !== s ? function (e, t, r, a, o) {
                    let l = n.useCallback(() => t, [t])
                        , i = n.useMemo(() => {
                            if (o && r)
                                return () => r(e).matches;
                            if (null !== a) {
                                let { matches: t } = a(e);
                                return () => t
                            }
                            return l
                        }
                            , [l, e, a, o, r])
                        , [d, c] = n.useMemo(() => {
                            if (null === r)
                                return [l, () => () => { }
                                ];
                            let t = r(e);
                            return [() => t.matches, e => (t.addEventListener("change", e),
                                () => {
                                    t.removeEventListener("change", e)
                                }
                            )]
                        }
                            , [l, r, e]);
                    return s(c, d, i)
                }
                    : function (e, t, r, a, l) {
                        let [i, s] = n.useState(() => l && r ? r(e).matches : a ? a(e).matches : t);
                        return (0,
                            o.default)(() => {
                                if (!r)
                                    return;
                                let t = r(e)
                                    , a = () => {
                                        s(t.matches)
                                    }
                                    ;
                                return a(),
                                    t.addEventListener("change", a),
                                    () => {
                                        t.removeEventListener("change", a)
                                    }
                            }
                                , [e, r]),
                            i
                    }
                )(f = f.replace(/^@media( ?)/m, ""), c, u, p, m)
            }
        }
        let c = d()
    }
    ,
    42417: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        var a = r(12115);
        let n = a.forwardRef(function (e, t) {
            let { title: r, titleId: n, ...o } = e;
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": n
            }, o), r ? a.createElement("title", {
                id: n
            }, r) : null, a.createElement("path", {
                fillRule: "evenodd",
                d: "M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z",
                clipRule: "evenodd"
            }))
        })
    }
    ,
    45613: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        var a = r(12115);
        let n = a.forwardRef(function (e, t) {
            let { title: r, titleId: n, ...o } = e;
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": n
            }, o), r ? a.createElement("title", {
                id: n
            }, r) : null, a.createElement("path", {
                fillRule: "evenodd",
                d: "M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z",
                clipRule: "evenodd"
            }))
        })
    }
    ,
    49900: (e, t, r) => {
        r.d(t, {
            A: () => o
        }),
            r(12115);
        var a = r(76856)
            , n = r(95155);
        let o = (0,
            a.A)((0,
                n.jsx)("path", {
                    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                }), "KeyboardArrowLeft")
    }
    ,
    50095: (e, t, r) => {
        r.d(t, {
            default: () => C
        });
        var a = r(12115)
            , n = r(52596)
            , o = r(15386)
            , l = r(78894)
            , i = r(71171)
            , s = r(35881)
            , d = r(74409)
            , c = r(82700)
            , u = r(45115)
            , p = r(86764)
            , m = r(31947)
            , f = r(90701)
            , v = r(41090)
            , h = r(32128)
            , g = r(63488)
            , b = r(57692)
            , y = r(81112);
        function x(e) {
            return (0,
                y.Ay)("MuiMenuItem", e)
        }
        let M = (0,
            b.A)("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
        var w = r(95155);
        let E = e => {
            let { disabled: t, dense: r, divider: a, disableGutters: n, selected: l, classes: i } = e
                , s = (0,
                    o.A)({
                        root: ["root", r && "dense", t && "disabled", !n && "gutters", a && "divider", l && "selected"]
                    }, x, i);
            return {
                ...i,
                ...s
            }
        }
            , A = (0,
                s.default)(p.default, {
                    shouldForwardProp: e => (0,
                        i.A)(e) || "classes" === e,
                    name: "MuiMenuItem",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let { ownerState: r } = e;
                        return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters]
                    }
                })((0,
                    d.A)(e => {
                        let { theme: t } = e;
                        return {
                            ...t.typography.body1,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            position: "relative",
                            textDecoration: "none",
                            minHeight: 48,
                            paddingTop: 6,
                            paddingBottom: 6,
                            boxSizing: "border-box",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                textDecoration: "none",
                                backgroundColor: (t.vars || t).palette.action.hover,
                                "@media (hover: none)": {
                                    backgroundColor: "transparent"
                                }
                            },
                            ["&.".concat(M.selected)]: {
                                backgroundColor: t.vars ? "rgba(".concat(t.vars.palette.primary.mainChannel, " / ").concat(t.vars.palette.action.selectedOpacity, ")") : (0,
                                    l.X4)(t.palette.primary.main, t.palette.action.selectedOpacity),
                                ["&.".concat(M.focusVisible)]: {
                                    backgroundColor: t.vars ? "rgba(".concat(t.vars.palette.primary.mainChannel, " / calc(").concat(t.vars.palette.action.selectedOpacity, " + ").concat(t.vars.palette.action.focusOpacity, "))") : (0,
                                        l.X4)(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
                                }
                            },
                            ["&.".concat(M.selected, ":hover")]: {
                                backgroundColor: t.vars ? "rgba(".concat(t.vars.palette.primary.mainChannel, " / calc(").concat(t.vars.palette.action.selectedOpacity, " + ").concat(t.vars.palette.action.hoverOpacity, "))") : (0,
                                    l.X4)(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
                                "@media (hover: none)": {
                                    backgroundColor: t.vars ? "rgba(".concat(t.vars.palette.primary.mainChannel, " / ").concat(t.vars.palette.action.selectedOpacity, ")") : (0,
                                        l.X4)(t.palette.primary.main, t.palette.action.selectedOpacity)
                                }
                            },
                            ["&.".concat(M.focusVisible)]: {
                                backgroundColor: (t.vars || t).palette.action.focus
                            },
                            ["&.".concat(M.disabled)]: {
                                opacity: (t.vars || t).palette.action.disabledOpacity
                            },
                            ["& + .".concat(v.A.root)]: {
                                marginTop: t.spacing(1),
                                marginBottom: t.spacing(1)
                            },
                            ["& + .".concat(v.A.inset)]: {
                                marginLeft: 52
                            },
                            ["& .".concat(g.A.root)]: {
                                marginTop: 0,
                                marginBottom: 0
                            },
                            ["& .".concat(g.A.inset)]: {
                                paddingLeft: 36
                            },
                            ["& .".concat(h.A.root)]: {
                                minWidth: 36
                            },
                            variants: [{
                                props: e => {
                                    let { ownerState: t } = e;
                                    return !t.disableGutters
                                }
                                ,
                                style: {
                                    paddingLeft: 16,
                                    paddingRight: 16
                                }
                            }, {
                                props: e => {
                                    let { ownerState: t } = e;
                                    return t.divider
                                }
                                ,
                                style: {
                                    borderBottom: "1px solid ".concat((t.vars || t).palette.divider),
                                    backgroundClip: "padding-box"
                                }
                            }, {
                                props: e => {
                                    let { ownerState: t } = e;
                                    return !t.dense
                                }
                                ,
                                style: {
                                    [t.breakpoints.up("sm")]: {
                                        minHeight: "auto"
                                    }
                                }
                            }, {
                                props: e => {
                                    let { ownerState: t } = e;
                                    return t.dense
                                }
                                ,
                                style: {
                                    minHeight: 32,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    ...t.typography.body2,
                                    ["& .".concat(h.A.root, " svg")]: {
                                        fontSize: "1.25rem"
                                    }
                                }
                            }]
                        }
                    }
                    ))
            , C = a.forwardRef(function (e, t) {
                let r;
                let o = (0,
                    c.b)({
                        props: e,
                        name: "MuiMenuItem"
                    })
                    , { autoFocus: l = !1, component: i = "li", dense: s = !1, divider: d = !1, disableGutters: p = !1, focusVisibleClassName: v, role: h = "menuitem", tabIndex: g, className: b, ...y } = o
                    , x = a.useContext(u.A)
                    , M = a.useMemo(() => ({
                        dense: s || x.dense || !1,
                        disableGutters: p
                    }), [x.dense, s, p])
                    , C = a.useRef(null);
                (0,
                    m.A)(() => {
                        l && C.current && C.current.focus()
                    }
                        , [l]);
                let k = {
                    ...o,
                    dense: M.dense,
                    divider: d,
                    disableGutters: p
                }
                    , R = E(o)
                    , S = (0,
                        f.A)(C, t);
                return o.disabled || (r = void 0 !== g ? g : -1),
                    (0,
                        w.jsx)(u.A.Provider, {
                            value: M,
                            children: (0,
                                w.jsx)(A, {
                                    ref: S,
                                    role: h,
                                    tabIndex: r,
                                    component: i,
                                    focusVisibleClassName: (0,
                                        n.A)(R.focusVisible, v),
                                    className: (0,
                                        n.A)(R.root, b),
                                    ...y,
                                    ownerState: k,
                                    classes: R
                                })
                        })
            })
    }
    ,
    51228: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        var a = r(12115);
        let n = a.forwardRef(function (e, t) {
            let { title: r, titleId: n, ...o } = e;
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": n
            }, o), r ? a.createElement("title", {
                id: n
            }, r) : null, a.createElement("path", {
                fillRule: "evenodd",
                d: "M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z",
                clipRule: "evenodd"
            }))
        })
    }
    ,
    63488: (e, t, r) => {
        r.d(t, {
            A: () => l,
            b: () => o
        });
        var a = r(57692)
            , n = r(81112);
        function o(e) {
            return (0,
                n.Ay)("MuiListItemText", e)
        }
        let l = (0,
            a.A)("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"])
    }
    ,
    76904: (e, t, r) => {
        r.d(t, {
            Qt: () => u,
            rX: () => p
        });
        var a = r(9670)
            , n = r(26096)
            , o = r(35881)
            , l = r(12115)
            , i = r(1035);
        function s(e) {
            var t = Math.floor(e / 60) % 60
                , r = Math.floor(e / 3600) % 24
                , a = Math.floor(e / 86400)
                , n = function (e) {
                    return e.toString().padStart(2, "0")
                };
            return a ? "".concat(a, "d ").concat(n(r), ":").concat(n(t)) : "".concat(n(r), ":").concat(n(t))
        }
        var d = (0,
            o.default)("div")(function (e) {
                var t = e.percentage
                    , r = e.theme;
                return {
                    padding: "4px",
                    backgroundColor: 1 === t ? r.vars.palette.scoreboard.solved : r.vars.palette.scoreboard.attempted,
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                    minHeight: "28px"
                }
            });
        function c(e) {
            var t = e.breakdown
                , r = (0,
                    i.useIntl)();
            if (!t || 0 == t.attempts && t.percentage <= 0)
                return l.createElement(l.Fragment, null, "—");
            if (t.percentage < 1)
                return l.createElement(d, {
                    percentage: null == t ? void 0 : t.percentage
                }, l.createElement(a.default, {
                    variant: "bodyMedium",
                    color: "surface.onSurface"
                }, l.createElement(i.FormattedMessage, {
                    id: "label.n_tries",
                    defaultMessage: "{count, plural, =0 {none} one {# try} other {# tries}}",
                    values: {
                        count: t.attempts
                    }
                })));
            var o = s(t.solvedIn)
                , c = Math.max(0, t.penalty - Math.ceil(t.solvedIn / 60))
                , u = r.formatMessage({
                    id: "label.n_tries",
                    defaultMessage: "{count, plural, =0 {none} one {# try} other {# tries}}"
                }, {
                    count: t.attempts + 1
                });
            return l.createElement(n.default, {
                title: "".concat(o).concat(c ? " + ".concat(s(60 * c)) : "", " (").concat(u, ")")
            }, l.createElement(d, {
                percentage: null == t ? void 0 : t.percentage
            }, l.createElement(a.default, {
                variant: "bodyMedium",
                color: "surface.onSurface",
                component: "h2"
            }, o), l.createElement(a.default, {
                variant: "bodySmall",
                color: "surface.onSurface",
                component: "h3"
            }, l.createElement(i.FormattedMessage, {
                id: "label.n_tries",
                defaultMessage: "{count, plural, =0 {none} one {# try} other {# tries}}",
                values: {
                    count: t.attempts + 1
                }
            }))))
        }

        // SX
        function u(e) {
            var t = e.breakdown;
            updateScore();
            return "ICPC" === e.format ? l.createElement(c, {
                breakdown: t
            }) : (null == t ? void 0 : t.score || t.attempts) ? l.createElement(d, {
                percentage: null == t ? void 0 : t.percentage
            }, l.createElement(a.default, {
                variant: "bodyMedium",
                color: "surface.onSurface"
            }, ".,." + Math.round(100 * t.score) / 100 + " " + (t.attempts + (t.percentage == 1)) + " " + t.solvedIn)) : l.createElement(l.Fragment, null, "—")
        }

        function p(e) {
            var t = e.score
                , r = e.penalty;
            return "ICPC" === e.format ? l.createElement(l.Fragment, null, l.createElement(a.default, {
                variant: "bodyMedium",
                color: "surface.onSurface",
                component: "div",
                sx: {
                    fontWeight: 700
                }
            }, Math.round(100 * t) / 100), l.createElement(a.default, {
                component: "div"
            }, r && Math.round(100 * r) / 100)) : l.createElement(a.default, {
                variant: "bodyMedium",
                color: "surface.onSurface"
            }, Math.round(100 * t) / 100)
        }
    }
    ,
    81158: (e, t, r) => {
        r.d(t, {
            default: () => i
        });
        var a = r(34438)
            , n = r(39571)
            , o = r(35881)
            , l = r(82700);
        let i = (0,
            a.A)({
                createStyledComponent: (0,
                    o.default)("div", {
                        name: "MuiContainer",
                        slot: "Root",
                        overridesResolver: (e, t) => {
                            let { ownerState: r } = e;
                            return [t.root, t["maxWidth".concat((0,
                                n.A)(String(r.maxWidth)))], r.fixed && t.fixed, r.disableGutters && t.disableGutters]
                        }
                    }),
                useThemeProps: e => (0,
                    l.b)({
                        props: e,
                        name: "MuiContainer"
                    })
            })
    }
    ,
    91360: (e, t, r) => {
        r.d(t, {
            ErrorBoundary: () => l
        });
        var a = r(12115);
        let n = (0,
            a.createContext)(null)
            , o = {
                didCatch: !1,
                error: null
            };
        class l extends a.Component {
            static getDerivedStateFromError(e) {
                return {
                    didCatch: !0,
                    error: e
                }
            }
            resetErrorBoundary() {
                let { error: e } = this.state;
                if (null !== e) {
                    for (var t, r, a = arguments.length, n = Array(a), l = 0; l < a; l++)
                        n[l] = arguments[l];
                    null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
                        args: n,
                        reason: "imperative-api"
                    }),
                        this.setState(o)
                }
            }
            componentDidCatch(e, t) {
                var r, a;
                null === (r = (a = this.props).onError) || void 0 === r || r.call(a, e, t)
            }
            componentDidUpdate(e, t) {
                let { didCatch: r } = this.state
                    , { resetKeys: a } = this.props;
                if (r && null !== t.error && function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
                }(e.resetKeys, a)) {
                    var n, l;
                    null === (n = (l = this.props).onReset) || void 0 === n || n.call(l, {
                        next: a,
                        prev: e.resetKeys,
                        reason: "keys"
                    }),
                        this.setState(o)
                }
            }
            render() {
                let { children: e, fallbackRender: t, FallbackComponent: r, fallback: o } = this.props
                    , { didCatch: l, error: i } = this.state
                    , s = e;
                if (l) {
                    let e = {
                        error: i,
                        resetErrorBoundary: this.resetErrorBoundary
                    };
                    if ("function" == typeof t)
                        s = t(e);
                    else if (r)
                        s = (0,
                            a.createElement)(r, e);
                    else if (void 0 !== o)
                        s = o;
                    else
                        throw i
                }
                return (0,
                    a.createElement)(n.Provider, {
                        value: {
                            didCatch: l,
                            error: i,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, s)
            }
            constructor(e) {
                super(e),
                    this.resetErrorBoundary = this.resetErrorBoundary.bind(this),
                    this.state = o
            }
        }
    }
}]);
