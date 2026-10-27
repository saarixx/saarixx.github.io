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


















( () => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 197468, e => {
        e.i(920449),
        e.i(649557),
        e.i(543482),
        e.i(457505),
        e.i(622515),
        e.i(844003),
        e.i(328556),
        e.i(71729),
        e.i(746707),
        e.i(967235),
        e.s([])
    }
    , 85477, e => {
        e.i(886918),
        e.i(861774),
        e.i(911095),
        e.i(539634),
        e.i(430277),
        e.i(23087),
        e.i(104329),
        e.i(974373),
        e.i(942791),
        e.i(444959),
        e.i(156446),
        e.s([])
    }
    , 898368, e => {
        e.i(676764),
        e.i(4598),
        e.i(54967),
        e.i(953850),
        e.i(751079),
        e.i(82785),
        e.i(890436),
        e.i(293158),
        e.i(343975),
        e.i(471678),
        e.i(176721),
        e.i(551433),
        e.i(350786),
        e.i(394784),
        e.i(987399),
        e.i(27513),
        e.i(696781),
        e.i(808257),
        e.i(994479),
        e.i(776149),
        e.i(907120),
        e.i(961968),
        e.i(125693),
        e.i(704694),
        e.i(939819),
        e.i(563461),
        e.i(299947),
        e.s([])
    }
    , 740221, e => {
        var t = e.i(958947)
          , s = e.i(349769)
          , a = e.i(413738)
          , i = e.i(407313)
          , r = e.i(380799);
        e.i(10913),
        e.i(927371);
        var n = e.i(468972)
          , l = e.i(441408);
        e.s(["ContentEditor", 0, function({value: e, loader: o, onSubmit: c, onCommit: d, labels: u={}, slots: m}) {
            let[h,f] = (0,
            n.useState)(e)
              , [p,x] = (0,
            n.useState)(!1)
              , [g,v] = (0,
            n.useState)(!1)
              , [j,b] = (0,
            n.useState)(!1)
              , [y,N] = (0,
            n.useState)()
              , k = (0,
            r.d)(y)
              , w = (0,
            n.useRef)(o);
            (0,
            n.useEffect)( () => {
                w.current && (x(!0),
                w.current().then(e => f(e)).finally( () => x(!1)))
            }
            , []);
            let I = (0,
            n.useCallback)( () => {
                v(!0),
                N(void 0),
                c(h).then(e => d?.(e)).catch(e => N(e instanceof Error ? e : Error(String(e)))).finally( () => v(!1))
            }
            , [c, d, h])
              , C = m.preview
              , S = m.form;
            return C ? (0,
            l.jsxs)("div", {
                className: "flex h-full",
                children: [(0,
                l.jsxs)("div", {
                    className: (0,
                    t.c)("shrink-0 flex-col overflow-y-auto bg-card p-4 sm:p-6 xl:flex xl:w-1/2 xl:max-w-4xl", j ? "hidden" : "flex w-full"),
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex-1",
                        children: (0,
                        l.jsx)(S, {
                            value: h,
                            onValueChange: f,
                            disabled: p || g,
                            errors: k
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: "sticky bottom-0 flex justify-end gap-2 bg-card pt-4",
                        children: [(0,
                        l.jsx)(i.K, {
                            className: "xl:hidden",
                            onClick: () => b(!0),
                            disabled: p,
                            children: (0,
                            l.jsx)(a.f, {
                                label: u.preview ?? (0,
                                s.y)("content_editor.preview_button")
                            })
                        }), (0,
                        l.jsx)(i.K, {
                            variant: "primary",
                            onClick: I,
                            disabled: g || p,
                            children: (0,
                            l.jsx)(a.f, {
                                label: u.submit ?? (0,
                                s.y)("content_editor.save_button")
                            })
                        })]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: (0,
                    t.c)("flex-col overflow-hidden bg-card xl:flex xl:flex-1 xl:border-l", j ? "flex w-full" : "hidden"),
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex-1 overflow-auto",
                        children: (0,
                        l.jsx)(C, {
                            value: h,
                            loading: p
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex justify-end gap-2 p-4 sm:p-6 xl:hidden",
                        children: [(0,
                        l.jsx)(i.K, {
                            onClick: () => b(!1),
                            children: (0,
                            l.jsx)(a.f, {
                                label: u.back ?? (0,
                                s.y)("content_editor.back_button")
                            })
                        }), (0,
                        l.jsx)(i.K, {
                            variant: "primary",
                            onClick: I,
                            disabled: g || p,
                            children: (0,
                            l.jsx)(a.f, {
                                label: u.submit ?? (0,
                                s.y)("content_editor.save_button")
                            })
                        })]
                    })]
                })]
            }) : (0,
            l.jsx)("div", {
                className: "flex h-full overflow-y-auto bg-card",
                children: (0,
                l.jsxs)("div", {
                    className: "flex flex-col flex-1 mx-auto w-full max-w-4xl p-4 sm:p-6",
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex-1",
                        children: (0,
                        l.jsx)(S, {
                            value: h,
                            onValueChange: f,
                            disabled: p || g,
                            errors: k
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "sticky bottom-0 flex justify-end gap-2 bg-card pt-4",
                        children: (0,
                        l.jsx)(i.K, {
                            variant: "primary",
                            onClick: I,
                            disabled: g || p,
                            children: (0,
                            l.jsx)(a.f, {
                                label: u.submit ?? (0,
                                s.y)("content_editor.save_button")
                            })
                        })
                    })]
                })
            })
        }
        ])
    }
    , 133907, e => {
        var t = e.i(109181)
          , s = e.i(299947)
          , a = e.i(149615)
          , i = e.i(967235);
        e.i(197468),
        e.i(898368),
        e.i(706761);
        var r = e.i(529767)
          , n = e.i(441408)
          , l = e.i(170588)
          , o = e.i(883253);
        e.s(["ContentPreview", 0, function({content: e, url: c, loading: d, skeleton: u, className: m}) {
            let h = (0,
            r.r)("content_preview")
              , f = (0,
            i.useDataLoader)( (t, {abort: s}) => new o.RenderService(t,c).RenderContent({
                content: e
            }, {
                signal: s.signal
            }).then( ({render: e}) => e), [c, e], {
                debounce: 500
            });
            return d || f.loading && !f.value ? u || null : f.error ? (0,
            n.jsx)(t.f, {
                error: f.error,
                className: "p-6"
            }) : f.value?.children ? (0,
            n.jsx)(s.Document, {
                node: f.value,
                className: m
            }) : (0,
            n.jsx)(a.f, {
                illustration: l.f,
                title: h("empty_title"),
                description: h("empty_message"),
                className: "h-full"
            })
        }
        ])
    }
    , 10744, e => {
        var t = e.i(407313)
          , s = e.i(417912)
          , a = e.i(420261)
          , i = e.i(229859)
          , r = e.i(702624)
          , n = e.i(529767)
          , l = e.i(441408)
          , o = e.i(324715)
          , c = e.i(385437)
          , d = e.i(867061);
        e.i(698720);
        var u = e.i(261436);
        e.s(["LanguagePicker", 0, function({locales: e, labelled: m=!1}) {
            let h = (0,
            n.r)("language_picker")
              , f = (0,
            r.X)()
              , p = (0,
            u.useCookies)()
              , x = (0,
            o.useRouter)();
            return (0,
            l.jsxs)(s.DropdownMenu, {
                children: [(0,
                l.jsx)(s.DropdownMenuTrigger, {
                    asChild: !0,
                    children: m ? (0,
                    l.jsxs)(t.K, {
                        variant: "link",
                        className: "px-0 text-[12.5px] text-foreground no-underline hover:no-underline",
                        children: [(0,
                        a.k)(f)?.native ?? f, (0,
                        l.jsx)(c.f, {
                            className: "size-3.5"
                        })]
                    }) : (0,
                    l.jsx)(t.K, {
                        variant: "ghost",
                        size: "icon-lg",
                        "aria-label": h("label"),
                        children: (0,
                        l.jsx)(d.f, {
                            className: "size-4"
                        })
                    })
                }), (0,
                l.jsx)(s.DropdownMenuContent, {
                    align: "end",
                    children: e.map(e => (0,
                    l.jsx)(s.DropdownMenuItem, {
                        onSelect: () => {
                            (0,
                            i.f)(p, e, window.location.hostname),
                            x.refresh()
                        }
                        ,
                        "data-active": e === f,
                        children: (0,
                        a.k)(e)?.native ?? e
                    }, e))
                })]
            })
        }
        ])
    }
    , 152746, 314882, 74071, 440223, e => {
        e.i(117382),
        e.i(10744);
        var t = e.i(811669);
        e.i(529767);
        var s = e.i(441408)
          , a = e.i(958947);
        let i = {
            sm: "max-w-[48rem]",
            md: "max-w-[60rem]",
            lg: "max-w-[72rem]",
            full: ""
        };
        e.s(["f", 0, function({children: e, width: t="lg", className: r}) {
            return (0,
            s.jsx)("div", {
                className: (0,
                a.c)("mx-auto flex w-full flex-col gap-6 px-6 py-10", i[t], r),
                children: e
            })
        }
        ], 314882);
        var r = e.i(463029);
        function n({children: e, asChild: t=!1, className: i}) {
            return (0,
            s.jsx)(t ? r.M : "h1", {
                className: (0,
                a.c)("font-semibold text-3xl tracking-tight", i),
                children: e
            })
        }
        e.s(["f", 0, n], 74071);
        var l = e.i(413738)
          , o = e.i(614987)
          , c = e.i(468972);
        e.s(["f", 0, function({title: e, description: a, breadcrumbs: i=[]}) {
            return (0,
            s.jsxs)("header", {
                className: "flex flex-col gap-2",
                children: [i.length > 0 && (0,
                s.jsx)(o.b, {
                    children: (0,
                    s.jsx)(o.A, {
                        children: i.map( (e, a) => (0,
                        s.jsxs)(c.Fragment, {
                            children: [a > 0 && (0,
                            s.jsx)(o.C, {}), (0,
                            s.jsx)(o.U, {
                                children: e.href ? (0,
                                s.jsx)(o.g, {
                                    asChild: !0,
                                    children: (0,
                                    s.jsx)(t.default, {
                                        href: e.href,
                                        children: (0,
                                        s.jsx)(l.f, {
                                            label: e.label
                                        })
                                    })
                                }) : (0,
                                s.jsx)(o.l, {
                                    children: (0,
                                    s.jsx)(l.f, {
                                        label: e.label
                                    })
                                })
                            })]
                        }, e.href ?? a))
                    })
                }), (0,
                s.jsx)(n, {
                    children: e
                }), a && (0,
                s.jsx)("p", {
                    className: "text-muted-foreground",
                    children: a
                })]
            })
        }
        ], 440223),
        e.i(296152),
        e.i(63352),
        e.i(684717),
        e.s([], 152746)
    }
    , 296152, e => {
        var t = e.i(413738)
          , s = e.i(407313)
          , a = e.i(417912)
          , i = e.i(420261)
          , r = e.i(229859)
          , n = e.i(811669)
          , l = e.i(702624)
          , o = e.i(529767)
          , c = e.i(441408)
          , d = e.i(324715)
          , u = e.i(385437)
          , m = e.i(867061);
        e.i(698720);
        var h = e.i(261436);
        e.s(["SiteFooter", 0, function({title: e, subtitle: f, links: p=[], locales: x}) {
            let g = (0,
            o.r)("site_footer")
              , v = (0,
            l.X)()
              , j = (0,
            h.useCookies)()
              , b = (0,
            d.useRouter)();
            return (0,
            c.jsx)("footer", {
                className: "border-t",
                children: (0,
                c.jsxs)("div", {
                    className: "flex w-full flex-col items-start gap-x-7 gap-y-3 p-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center",
                    children: [(0,
                    c.jsx)("span", {
                        className: "text-foreground",
                        children: e
                    }), f && (0,
                    c.jsx)("span", {
                        children: f
                    }), p.map(e => (0,
                    c.jsx)(n.default, {
                        href: e.href,
                        target: e.external ? "_blank" : void 0,
                        rel: e.external ? "noreferrer noopener" : void 0,
                        className: "transition-colors hover:text-foreground",
                        children: (0,
                        c.jsx)(t.f, {
                            label: e.label
                        })
                    }, e.href)), (0,
                    c.jsx)(n.default, {
                        href: "https://support.eolymp.com/legal/terms",
                        className: "transition-colors hover:text-foreground",
                        children: g("terms_link")
                    }), (0,
                    c.jsx)(n.default, {
                        href: "https://support.eolymp.com/legal/privacy",
                        className: "transition-colors hover:text-foreground",
                        children: g("privacy_link")
                    }), (0,
                    c.jsx)(n.default, {
                        href: "https://support.eolymp.com",
                        className: "transition-colors hover:text-foreground",
                        children: g("help_link")
                    }), (0,
                    c.jsx)("div", {
                        className: "-ml-2.5 sm:-mr-2.5 sm:ml-auto",
                        children: (0,
                        c.jsxs)(a.DropdownMenu, {
                            children: [(0,
                            c.jsx)(a.DropdownMenuTrigger, {
                                asChild: !0,
                                children: (0,
                                c.jsxs)(s.K, {
                                    variant: "ghost",
                                    size: "sm",
                                    "aria-label": g("language_label"),
                                    children: [(0,
                                    c.jsx)(m.f, {
                                        className: "hidden sm:block"
                                    }), (0,
                                    i.k)(v)?.native ?? v, (0,
                                    c.jsx)(u.f, {})]
                                })
                            }), (0,
                            c.jsx)(a.DropdownMenuContent, {
                                align: "end",
                                children: x.map(e => (0,
                                c.jsx)(a.DropdownMenuItem, {
                                    onSelect: () => {
                                        (0,
                                        r.f)(j, e, window.location.hostname),
                                        b.refresh()
                                    }
                                    ,
                                    "data-active": e === v,
                                    children: (0,
                                    i.k)(e)?.native ?? e
                                }, e))
                            })]
                        })
                    })]
                })
            })
        }
        ])
    }
    , 63352, e => {
        var t = e.i(958947)
          , s = e.i(413738)
          , a = e.i(407313)
          , i = e.i(689320)
          , r = e.i(811669)
          , n = e.i(529767)
          , l = e.i(441408)
          , o = e.i(324715)
          , c = e.i(432732);
        let d = {
            name: "menu",
            size: 24,
            node: [["path", {
                d: "M4 5h16",
                key: "1tepv9"
            }], ["path", {
                d: "M4 12h16",
                key: "1lakjw"
            }], ["path", {
                d: "M4 19h16",
                key: "1djgab"
            }]]
        };
        d.node;
        let u = (0,
        c.f)(d);
        var m = e.i(378995);
        function h(e, t) {
            return void 0 !== t.active ? t.active : "/" === t.href ? "/" === e : e === t.href || e.startsWith(`${t.href}/`)
        }
        e.s(["SiteHeader", 0, function({title: e, logo: c, nav: d=[], actions: f}) {
            let p = (0,
            n.r)("site_header")
              , x = (0,
            o.usePathname)();
            return (0,
            l.jsx)("header", {
                className: "fixed inset-x-0 top-0 z-40 border-b bg-background/[0.7] backdrop-blur-[14px]",
                children: (0,
                l.jsxs)("div", {
                    className: "flex h-16 w-full items-center gap-3 px-4 lg:gap-8",
                    children: [d.length > 0 && (0,
                    l.jsx)("div", {
                        className: "lg:hidden",
                        children: (0,
                        l.jsxs)(i.Sheet, {
                            children: [(0,
                            l.jsx)(i.SheetTrigger, {
                                asChild: !0,
                                children: (0,
                                l.jsx)(a.K, {
                                    variant: "ghost",
                                    size: "icon",
                                    "aria-label": p("menu_button"),
                                    children: (0,
                                    l.jsx)(u, {})
                                })
                            }), (0,
                            l.jsxs)(i.SheetContent, {
                                side: "left",
                                children: [(0,
                                l.jsx)(i.SheetHeader, {
                                    children: (0,
                                    l.jsx)(i.SheetTitle, {
                                        children: e
                                    })
                                }), (0,
                                l.jsx)("nav", {
                                    "aria-label": p("nav_label"),
                                    className: "flex flex-col gap-1 p-4",
                                    children: d.map(e => (0,
                                    l.jsx)(i.SheetClose, {
                                        asChild: !0,
                                        children: (0,
                                        l.jsx)(r.default, {
                                            href: e.href,
                                            target: e.external ? "_blank" : void 0,
                                            rel: e.external ? "noreferrer noopener" : void 0,
                                            className: (0,
                                            t.c)("rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", h(x, e) && "text-foreground"),
                                            children: (0,
                                            l.jsx)(s.f, {
                                                label: e.label
                                            })
                                        })
                                    }, e.href))
                                })]
                            })]
                        })
                    }), (0,
                    l.jsxs)(r.default, {
                        href: "/",
                        className: "flex min-w-0 items-center gap-3",
                        children: [c && (0,
                        l.jsx)("span", {
                            className: (0,
                            t.c)("size-9 shrink-0 items-center justify-center", d.length > 0 ? "hidden lg:flex" : "flex"),
                            children: (0,
                            l.jsx)(m.default, {
                                src: c,
                                alt: "",
                                width: 32,
                                height: 28,
                                unoptimized: !0,
                                className: "h-7 w-8 object-contain"
                            })
                        }), (0,
                        l.jsx)("span", {
                            className: "truncate text-[16px] font-semibold tracking-tight",
                            children: e
                        })]
                    }), d.length > 0 && (0,
                    l.jsx)("nav", {
                        "aria-label": p("nav_label"),
                        className: "hidden items-center gap-7 text-sm lg:flex",
                        children: d.map(e => (0,
                        l.jsx)(r.default, {
                            href: e.href,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noreferrer noopener" : void 0,
                            className: (0,
                            t.c)("font-medium text-muted-foreground transition-colors hover:text-foreground", h(x, e) && "text-foreground"),
                            children: (0,
                            l.jsx)(s.f, {
                                label: e.label
                            })
                        }, e.href))
                    }), (0,
                    l.jsx)("div", {
                        className: "ml-auto flex shrink-0 items-center gap-3",
                        children: f
                    })]
                })
            })
        }
        ], 63352)
    }
    , 684717, e => {
        var t = e.i(407313)
          , s = e.i(587255)
          , a = e.i(417912)
          , i = e.i(529767)
          , r = e.i(441408)
          , n = e.i(776693)
          , l = e.i(347605)
          , o = e.i(890629);
        e.s(["UserMenu", 0, function({user: e, signInHref: c, signOutHref: d, children: u}) {
            let m = (0,
            i.r)("user_menu");
            return e ? (0,
            r.jsxs)(a.DropdownMenu, {
                children: [(0,
                r.jsxs)(a.DropdownMenuTrigger, {
                    "aria-label": m("account_button"),
                    className: "relative cursor-pointer rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                    children: [(0,
                    r.jsxs)(s.Avatar, {
                        className: "size-8",
                        children: [(0,
                        r.jsx)(s.AvatarImage, {
                            src: e.picture
                        }), (0,
                        r.jsx)(s.AvatarFallback, {
                            children: (0,
                            r.jsx)(o.f, {
                                className: "size-4"
                            })
                        })]
                    }), e.warning && (0,
                    r.jsx)("span", {
                        className: "absolute -right-0.5 -bottom-0.5 grid size-4 place-items-center rounded-full bg-destructive text-white",
                        children: (0,
                        r.jsx)(l.f, {
                            className: "size-2.5"
                        })
                    })]
                }), (0,
                r.jsxs)(a.DropdownMenuContent, {
                    align: "end",
                    children: [(0,
                    r.jsx)(a.DropdownMenuLabel, {
                        children: (0,
                        r.jsxs)("span", {
                            className: "flex items-center gap-3",
                            children: [(0,
                            r.jsxs)(s.Avatar, {
                                className: "size-10",
                                children: [(0,
                                r.jsx)(s.AvatarImage, {
                                    src: e.picture
                                }), (0,
                                r.jsx)(s.AvatarFallback, {
                                    children: (0,
                                    r.jsx)(o.f, {
                                        className: "size-5"
                                    })
                                })]
                            }), (0,
                            r.jsxs)("span", {
                                className: "grid",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "max-w-40 truncate",
                                    children: e.name
                                }), e.description && e.description !== e.name && (0,
                                r.jsx)("span", {
                                    className: "max-w-40 truncate text-xs font-normal text-muted-foreground",
                                    children: e.description
                                })]
                            })]
                        })
                    }), (0,
                    r.jsx)(a.DropdownMenuSeparator, {}), u, u && (0,
                    r.jsx)(a.DropdownMenuSeparator, {}), (0,
                    r.jsx)(a.DropdownMenuItem, {
                        asChild: !0,
                        children: (0,
                        r.jsxs)("a", {
                            href: d,
                            children: [(0,
                            r.jsx)(n.f, {}), m("sign_out_button")]
                        })
                    })]
                })]
            }) : (0,
            r.jsx)(t.K, {
                variant: "primary",
                size: "sm",
                asChild: !0,
                children: (0,
                r.jsx)("a", {
                    href: c,
                    children: m("sign_in_button")
                })
            })
        }
        ])
    }
    , 988676, e => {
        var t = e.i(958947)
          , s = e.i(413738)
          , a = e.i(563111)
          , i = e.i(291475)
          , r = e.i(811669)
          , n = e.i(468972)
          , l = e.i(441408)
          , o = e.i(299096)
          , c = e.i(432732);
        let d = {
            name: "trending-down",
            size: 24,
            node: [["path", {
                d: "M16 17h6v-6",
                key: "t6n2it"
            }], ["path", {
                d: "m22 17-8.5-8.5-5 5L2 7",
                key: "x473p"
            }]]
        };
        d.node;
        let u = (0,
        c.f)(d)
          , m = {
            name: "trending-up",
            size: 24,
            node: [["path", {
                d: "M16 7h6v6",
                key: "box55l"
            }], ["path", {
                d: "m22 7-8.5 8.5-5-5L2 17",
                key: "1t1m79"
            }]]
        };
        m.node;
        let h = (0,
        c.f)(m)
          , f = "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
        e.s(["StatCard", 0, function({label: e, variant: c="solid", icon: d, trend: m, change: p, action: x, payload: g, children: v}) {
            let j = (0,
            n.useContext)(a.R)
              , b = (0,
            t.c)((0,
            i.d)({
                variant: c
            }), "gap-2 overflow-hidden")
              , y = "number" == typeof p ? p : void 0
              , N = m ?? y
              , k = void 0 !== N ? N > 0 ? {
                icon: h,
                className: "text-green-600"
            } : N < 0 ? {
                icon: u,
                className: "text-red-500"
            } : {
                icon: o.f,
                className: "text-muted-foreground"
            } : null
              , w = k?.icon ?? null
              , I = k?.className ?? "text-muted-foreground"
              , C = void 0 !== y ? 0 !== y ? y > 0 ? `+${y}` : String(y) : null : p ?? null
              , S = (0,
            l.jsxs)(i.O, {
                children: [(0,
                l.jsxs)("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [(0,
                        l.jsx)("div", {
                            className: "text-2xl font-medium tabular-nums whitespace-nowrap",
                            children: v
                        }), w && (0,
                        l.jsx)(w, {
                            className: (0,
                            t.c)("size-5 shrink-0", I)
                        }), null != C && (0,
                        l.jsx)("span", {
                            className: (0,
                            t.c)("text-sm font-medium tabular-nums whitespace-nowrap", I),
                            children: C
                        })]
                    }), d && (0,
                    l.jsx)(d, {
                        className: "size-5 text-muted-foreground shrink-0 mt-1"
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "mt-1 text-sm text-muted-foreground whitespace-nowrap",
                    children: (0,
                    l.jsx)(s.f, {
                        label: e
                    })
                })]
            });
            return x?.type === "link" ? (0,
            l.jsx)(r.default, {
                href: "function" == typeof x.href ? x.href(g) : x.href,
                target: x.target,
                "data-slot": "stat-card",
                className: (0,
                t.c)(b, f),
                children: S
            }) : x ? (0,
            l.jsx)("button", {
                type: "button",
                onClick: () => {
                    if ("callback" === x.type)
                        return void x.callback(null, g);
                    if ("dialog" === x.type) {
                        if (!j)
                            throw Error("StatCard: dialog action requires a DialogProvider ancestor");
                        j.open(x.dialog, g, {
                            onClose: async e => {
                                null !== e && x.onCommit && await x.onCommit(e),
                                x.onClose && await x.onClose(e)
                            }
                        })
                    }
                }
                ,
                "data-slot": "stat-card",
                className: (0,
                t.c)(b, f, "text-left w-full"),
                children: S
            }) : (0,
            l.jsx)(i.N, {
                variant: c,
                className: "gap-2 overflow-hidden",
                children: S
            })
        }
        , "StatRow", 0, function({className: e, children: s, ...a}) {
            return (0,
            l.jsx)("div", {
                className: (0,
                t.c)("@container", e),
                ...a,
                children: (0,
                l.jsx)("div", {
                    "data-slot": "stat-row",
                    className: "grid gap-4 grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-[repeat(auto-fit,minmax(calc(25%-0.75rem),1fr))]",
                    children: s
                })
            })
        }
        ], 988676)
    }
    , 176619, e => {
        var t = e.i(468972)
          , s = e.i(324715);
        e.s(["useQueryState", 0, function(e) {
            let a = (0,
            s.usePathname)()
              , i = (0,
            s.useSearchParams)()
              , r = (0,
            s.useRouter)()
              , n = (0,
            t.useCallback)(t => {
                let s = new URLSearchParams(i);
                t ? s.set(e, t) : s.delete(e);
                let n = s.toString();
                r.replace(n ? `${a}?${n}` : a, {
                    scroll: !1
                })
            }
            , [e, i, a, r]);
            return [i.get(e), n]
        }
        ])
    }
    , 706761, e => {
        e.i(109181),
        e.i(149615),
        e.i(958947),
        e.i(413738),
        e.i(307280),
        e.i(441408),
        e.i(999041),
        e.s([], 706761)
    }
    , 673407, e => {
        e.i(704697),
        e.i(874974),
        e.i(982097),
        e.i(532265),
        e.s([])
    }
    , 704697, 733041, e => {
        var t = e.i(441408)
          , s = e.i(432732);
        let a = {
            name: "star",
            size: 24,
            node: [["path", {
                d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
                key: "r04s7s"
            }]]
        };
        a.node;
        let i = (0,
        s.f)(a);
        e.s(["f", 0, i], 733041);
        let r = {
            2: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    d: "M4.21094 12.9992V14.9992H15.7909V12.9992H4.21094Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21102 11.7296V8.73017C5.85345 7.63521 10.001 5 10.001 5C10.001 5 14.1486 7.63521 15.791 8.73017V11.7296L10.001 7.99961L4.21102 11.7296Z"
                })]
            }),
            3: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    d: "M4.21094 14.4992V16.4986H15.7909V14.4992H4.21094Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21094 11.4992V13.4992H15.7909V11.4992H4.21094Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21102 10.2296V7.23017C5.85345 6.13521 10.001 3.5 10.001 3.5C10.001 3.5 14.1486 6.13521 15.791 7.23017V10.2296L10.001 6.49961L4.21102 10.2296Z"
                })]
            }),
            4: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    d: "M4.21094 5.73017V8.72961L10.0009 4.99961L15.7909 8.72961V5.73017C14.1485 4.63521 10.0009 2 10.0009 2C10.0009 2 5.85337 4.63521 4.21094 5.73017Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21094 10V12H15.7909V10H4.21094Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21094 13V14.9994H15.7909V13H4.21094Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.21094 17.9994V16H15.7909V17.9994H4.21094Z"
                })]
            }),
            7: (0,
            t.jsx)("path", {
                d: "M5 10L10 5L15 10L10 15L5 10Z"
            }),
            8: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    d: "M4 6.73017V9.72961L9.79 5.99961L15.58 9.72961V6.73017C13.9376 5.63521 9.79 3 9.79 3C9.79 3 5.64243 5.63521 4 6.73017Z"
                }), (0,
                t.jsx)("path", {
                    d: "M4.79 12.5L9.79 7.5L14.79 12.5L9.79 17.5L4.79 12.5Z"
                })]
            }),
            9: (0,
            t.jsx)("path", {
                d: "M10.5536 5.27191C10.3476 4.77655 9.64584 4.77655 9.43981 5.27191L8.26509 8.09627L5.21595 8.34072C4.68117 8.38359 4.46433 9.05097 4.87177 9.39999L7.19489 11.39L6.48514 14.3654C6.36066 14.8873 6.92837 15.2997 7.38622 15.0201L9.9967 13.4256L12.6072 15.0201C13.065 15.2997 13.6327 14.8873 13.5083 14.3654L12.7985 11.39L15.1216 9.39999C15.5291 9.05097 15.3122 8.38359 14.7774 8.34072L11.7283 8.09627L10.5536 5.27191Z"
            }),
            10: (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("path", {
                    d: "M4.21094 9.11926V6.11982C5.85337 5.02486 10.0009 2.38965 10.0009 2.38965C10.0009 2.38965 14.1485 5.02486 15.7909 6.11982V9.11926L10.0009 5.38926L4.21094 9.11926Z"
                }), (0,
                t.jsx)("path", {
                    d: "M9.43981 7.76117C9.64584 7.26581 10.3476 7.26581 10.5536 7.76117L11.7283 10.5855L14.7774 10.83C15.3122 10.8728 15.5291 11.5402 15.1216 11.8893L12.7985 13.8792L13.5083 16.8547C13.6327 17.3765 13.065 17.789 12.6072 17.5094L9.9967 15.9149L7.38622 17.5094C6.92837 17.789 6.36066 17.3765 6.48514 16.8547L7.19489 13.8792L4.87177 11.8893C4.46433 11.5402 4.68117 10.8728 5.21595 10.83L8.26509 10.5855L9.43981 7.76117Z"
                })]
            })
        }
          , n = {
            1: 2,
            2: 3,
            3: 4,
            4: 2,
            5: 3,
            6: 4,
            7: 7,
            8: 8,
            9: 9,
            10: 10
        };
        e.s(["RatingIcon", 0, function({level: e}) {
            if (11 === e)
                return (0,
                t.jsx)(i, {
                    className: "size-4 shrink-0",
                    fill: "currentColor",
                    strokeWidth: 0
                });
            let s = r[n[e ?? 0] ?? 2];
            return (0,
            t.jsx)("svg", {
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                role: "presentation",
                className: "size-4 shrink-0",
                children: s
            })
        }
        ], 704697)
    }
    , 982097, e => {
        var t = e.i(958947)
          , s = e.i(704697)
          , a = e.i(874974)
          , i = e.i(441408);
        e.s(["RatingLabel", 0, function({rating: e, level: r, mark: n="end", className: l}) {
            if (!e)
                return null;
            let o = "none" === n ? null : (0,
            i.jsx)(s.RatingIcon, {
                level: r
            });
            return (0,
            i.jsxs)("span", {
                "data-slot": "rating-label",
                className: (0,
                t.c)("inline-flex items-center gap-1 text-sm font-medium", l),
                style: {
                    color: (0,
                    a.f)(r)
                },
                children: ["start" === n && o, e, "end" === n && o]
            })
        }
        ])
    }
    , 874974, e => {
        let t = {
            4: "var(--color-green-500, #00c950)",
            5: "var(--color-green-500, #00c950)",
            6: "var(--color-green-500, #00c950)",
            7: "var(--color-blue-500, #2b7fff)",
            8: "var(--color-blue-500, #2b7fff)",
            9: "var(--color-yellow-500, #f0b100)",
            10: "var(--color-yellow-500, #f0b100)",
            11: "var(--destructive)"
        };
        e.s(["f", 0, function(e) {
            return null != e && t[e] || "var(--muted-foreground)"
        }
        ])
    }
    , 532265, e => {
        var t = e.i(958947)
          , s = e.i(349769)
          , a = e.i(413738)
          , i = e.i(874974)
          , r = e.i(441408);
        let n = [(0,
        s.y)("rating.title_level_0"), (0,
        s.y)("rating.title_level_1"), (0,
        s.y)("rating.title_level_2"), (0,
        s.y)("rating.title_level_3"), (0,
        s.y)("rating.title_level_4"), (0,
        s.y)("rating.title_level_5"), (0,
        s.y)("rating.title_level_6"), (0,
        s.y)("rating.title_level_7"), (0,
        s.y)("rating.title_level_8"), (0,
        s.y)("rating.title_level_9"), (0,
        s.y)("rating.title_level_10"), (0,
        s.y)("rating.title_level_11")];
        function l(e) {
            return null == e ? void 0 : n[e]
        }
        e.s(["RATING_TITLES", 0, n, "RatingTitle", 0, function({level: e, className: s}) {
            let n = l(e);
            return n ? (0,
            r.jsx)("span", {
                "data-slot": "rating-title",
                className: (0,
                t.c)("text-sm font-medium", s),
                style: {
                    color: (0,
                    i.f)(e)
                },
                children: (0,
                r.jsx)(a.f, {
                    label: n
                })
            }) : null
        }
        , "ratingTitle", 0, l])
    }
    , 515895, (e, t, s) => {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.ShoppingService = void 0,
        s.ShoppingService = class {
            constructor(e, t="https://api.eolymp.com") {
                this.cli = e,
                this.url = t
            }
            DescribeShoppingCart(e, t) {
                return this.cli.call("GET", this.url + "/store/cart", e, t)
            }
            CreateShoppingCartItem(e, t) {
                return this.cli.call("POST", this.url + "/store/cart/items", e, t)
            }
            UpdateShoppingCartItem(e, t) {
                let s = "/store/cart/items/" + encodeURIComponent(e.itemId || "");
                return delete e.itemId,
                this.cli.call("PUT", this.url + s, e, t)
            }
            DeleteShoppingCartItem(e, t) {
                let s = "/store/cart/items/" + encodeURIComponent(e.itemId || "");
                return delete e.itemId,
                this.cli.call("DELETE", this.url + s, e, t)
            }
            UpdateShippingAddress(e, t) {
                return this.cli.call("POST", this.url + "/store/cart/shipping-address", e, t)
            }
            UpdateBillingAddress(e, t) {
                return this.cli.call("POST", this.url + "/store/cart/billing-address", e, t)
            }
            UpdateShippingMethod(e, t) {
                return this.cli.call("POST", this.url + "/store/cart/shipping-method", e, t)
            }
            ListShippingMethods(e, t) {
                return this.cli.call("GET", this.url + "/store/cart/shipping-methods", e, t)
            }
            PlaceOrder(e, t) {
                return this.cli.call("POST", this.url + "/store/cart:order", e, t)
            }
        }
    }
    , 883253, (e, t, s) => {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.RenderService = void 0,
        s.RenderService = class {
            constructor(e, t="https://api.eolymp.com") {
                this.cli = e,
                this.url = t
            }
            RenderContent(e, t) {
                return this.cli.call("POST", this.url + "/content:render", e, t)
            }
            RenderFigure(e, t) {
                return this.cli.call("POST", this.url + "/figures:render", e, t)
            }
        }
    }
    , 627778, (e, t, s) => {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.ParticipantService = void 0,
        s.ParticipantService = class {
            constructor(e, t="https://api.eolymp.com") {
                this.cli = e,
                this.url = t
            }
            AssignParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
            EnableParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "") + "/enable";
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("POST", this.url + s, e, t)
            }
            DisableParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "") + "/disable";
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("POST", this.url + s, e, t)
            }
            UpdateParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "");
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("PUT", this.url + s, e, t)
            }
            DisqualifyParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "") + "/disqualify";
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("POST", this.url + s, e, t)
            }
            DeleteParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "");
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("DELETE", this.url + s, e, t)
            }
            DescribeParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "");
                return delete e.contestId,
                delete e.participantId,
                this.cli.call("GET", this.url + s, e, t)
            }
            ListParticipants(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants";
                return delete e.contestId,
                this.cli.call("GET", this.url + s, e, t)
            }
            WatchParticipant(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/participants/" + encodeURIComponent(e.participantId || "") + "/watch";
                return delete e.contestId,
                delete e.participantId,
                this.cli.stream("GET", this.url + s, e, t)
            }
            JoinContest(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/join";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
            DescribeViewer(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/introspect";
                return delete e.contestId,
                this.cli.call("GET", this.url + s, e, t)
            }
            StartContest(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/start";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
            PauseContest(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/pause";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
            FinishContest(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/finish";
                return delete e.contestId,
                this.cli.call("GET", this.url + s, e, t)
            }
            RequestProctoring(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/proctoring";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
        }
    }
    , 562519, (e, t, s) => {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.RegistrationService = void 0,
        s.RegistrationService = class {
            constructor(e, t="https://api.eolymp.com") {
                this.cli = e,
                this.url = t
            }
            DescribeRegistration(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/registration";
                return delete e.contestId,
                this.cli.call("GET", this.url + s, e, t)
            }
            SubmitRegistration(e, t) {
                let s = "/contests/" + encodeURIComponent(e.contestId || "") + "/registration";
                return delete e.contestId,
                this.cli.call("POST", this.url + s, e, t)
            }
        }
    }
    , 153679, e => {
        var t = e.i(432732);
        let s = {
            name: "coins",
            size: 24,
            node: [["path", {
                d: "M13.744 17.736a6 6 0 1 1-7.48-7.48",
                key: "bq4yh3"
            }], ["path", {
                d: "M15 6h1v4",
                key: "11y1tn"
            }], ["path", {
                d: "m6.134 14.768.866-.5 2 3.464",
                key: "17snzx"
            }], ["circle", {
                cx: "16",
                cy: "8",
                r: "6",
                key: "14bfc9"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 153679)
    }
    , 170588, e => {
        var t = e.i(432732);
        let s = {
            name: "file-text",
            size: 24,
            node: [["path", {
                d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
                key: "1oefj6"
            }], ["path", {
                d: "M14 2v5a1 1 0 0 0 1 1h5",
                key: "wfsgrz"
            }], ["path", {
                d: "M10 9H8",
                key: "b1mrlr"
            }], ["path", {
                d: "M16 13H8",
                key: "t4e002"
            }], ["path", {
                d: "M16 17H8",
                key: "z1uh3a"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 170588)
    }
    , 867061, e => {
        var t = e.i(432732);
        let s = {
            name: "languages",
            size: 24,
            node: [["path", {
                d: "m5 8 6 6",
                key: "1wu5hv"
            }], ["path", {
                d: "m4 14 6-6 2-3",
                key: "1k1g8d"
            }], ["path", {
                d: "M2 5h12",
                key: "or177f"
            }], ["path", {
                d: "M7 2h1",
                key: "1t2jsx"
            }], ["path", {
                d: "m22 22-5-10-5 10",
                key: "don7ne"
            }], ["path", {
                d: "M14 18h6",
                key: "1m8k6r"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 867061)
    }
    , 731334, e => {
        var t = e.i(510559);
        e.s(["f", () => t.f])
    }
    , 776693, e => {
        var t = e.i(432732);
        let s = {
            name: "log-out",
            size: 24,
            node: [["path", {
                d: "m16 17 5-5-5-5",
                key: "1bji2h"
            }], ["path", {
                d: "M21 12H9",
                key: "dn1m92"
            }], ["path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                key: "1uf3rs"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 776693)
    }
    , 756892, e => {
        var t = e.i(834959);
        e.s(["f", () => t.f])
    }
    , 359343, e => {
        var t = e.i(432732);
        let s = {
            name: "package",
            size: 24,
            node: [["path", {
                d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
                key: "1a0edw"
            }], ["path", {
                d: "M12 22V12",
                key: "d0xqtd"
            }], ["polyline", {
                points: "3.29 7 12 12 20.71 7",
                key: "ousv84"
            }], ["path", {
                d: "m7.5 4.27 9 5.15",
                key: "1c824w"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 359343)
    }
    , 498530, e => {
        var t = e.i(432732);
        let s = {
            name: "play",
            size: 24,
            node: [["path", {
                d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
                key: "10ikf1"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 498530)
    }
    , 751914, e => {
        var t = e.i(432732);
        let s = {
            name: "receipt",
            size: 24,
            node: [["path", {
                d: "M12 17V7",
                key: "pyj7ub"
            }], ["path", {
                d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",
                key: "1elt7d"
            }], ["path", {
                d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
                key: "ycz6yz"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 751914)
    }
    , 761732, e => {
        var t = e.i(432732);
        let s = {
            name: "settings",
            size: 24,
            node: [["path", {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw"
            }], ["circle", {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 761732)
    }
    , 68441, e => {
        var t = e.i(432732);
        let s = {
            name: "shopping-bag",
            size: 24,
            node: [["path", {
                d: "M16 10a4 4 0 0 1-8 0",
                key: "1ltviw"
            }], ["path", {
                d: "M3.103 6.034h17.794",
                key: "awc11p"
            }], ["path", {
                d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
                key: "o988cm"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 68441)
    }
    , 187264, e => {
        var t = e.i(432732);
        let s = {
            name: "shopping-cart",
            size: 24,
            node: [["path", {
                d: "m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",
                key: "uebgi3"
            }], ["path", {
                d: "M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",
                key: "1j7c9p"
            }], ["circle", {
                cx: "18",
                cy: "20",
                r: "2",
                key: "t9985n"
            }], ["circle", {
                cx: "8",
                cy: "20",
                r: "2",
                key: "ckkr5m"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 187264)
    }
    , 741758, e => {
        var t = e.i(432732);
        let s = {
            name: "tag",
            size: 24,
            node: [["path", {
                d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
                key: "vktsd0"
            }], ["circle", {
                cx: "7.5",
                cy: "7.5",
                r: ".5",
                fill: "currentColor",
                key: "kqv944"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 741758)
    }
    , 347605, e => {
        var t = e.i(111172);
        e.s(["f", () => t.f])
    }
    , 944354, e => {
        var t = e.i(432732);
        let s = {
            name: "trophy",
            size: 24,
            node: [["path", {
                d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
                key: "pwuv1l"
            }], ["path", {
                d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
                key: "1y54w1"
            }], ["path", {
                d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
                key: "e30mpu"
            }], ["path", {
                d: "M4 22h16",
                key: "57wxv0"
            }], ["path", {
                d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
                key: "1mhfuq"
            }], ["path", {
                d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
                key: "i0yafy"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 944354)
    }
    , 890629, e => {
        var t = e.i(432732);
        let s = {
            name: "user",
            size: 24,
            node: [["path", {
                d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                key: "975kel"
            }], ["circle", {
                cx: "12",
                cy: "7",
                r: "4",
                key: "17ys0d"
            }]]
        };
        s.node;
        let a = (0,
        t.f)(s);
        e.s(["f", 0, a], 890629)
    }
    , 983906, e => {
        var t = e.i(195500);
        e.s(["default", () => t.Image])
    }
    , 490013, e => {
        var t = e.i(441408);
        e.i(85477);
        var s = e.i(886918);
        e.i(568677);
        var a = e.i(413738);
        e.i(132104);
        var i = e.i(82810)
          , r = e.i(753989);
        e.i(927371);
        var n = e.i(407313)
          , l = e.i(291475)
          , o = e.i(417912)
          , c = e.i(472319)
          , d = e.i(761732)
          , u = e.i(324715)
          , m = e.i(529767)
          , h = e.i(468972)
          , f = e.i(931112)
          , p = e.i(485620)
          , x = e.i(294818);
        function g({value: e, skeleton: s, contest: a, format: i}) {
            if (s)
                return (0,
                t.jsx)(p.f, {
                    className: "mx-auto h-4 w-12"
                });
            let r = e.contests.find(e => e.contestId === a.contestId);
            return r ? (0,
            t.jsxs)("div", {
                className: "text-center text-sm",
                children: [(0,
                t.jsx)("div", {
                    className: r.counted ? "font-semibold" : "text-muted-foreground",
                    children: Math.round(100 * r.score) / 100
                }), "ICPC" === i && !!r.penalty && (0,
                t.jsxs)("div", {
                    className: "text-xs text-muted-foreground",
                    children: [Math.round(r.penalty), "'"]
                })]
            }) : (0,
            t.jsx)("span", {
                className: "text-muted-foreground",
                children: "—"
            })
        }
        var v = e.i(349769)
          , j = e.i(125763);
        function b({value: e, skeleton: s}) {
            return (0,
            t.jsx)("div", {
                className: "flex items-center gap-3 py-2",
                children: s ? (0,
                t.jsx)(p.f, {
                    className: "h-4 w-32"
                }) : e.member ? (0,
                t.jsx)(j.f, {
                    member: e.member
                }) : (0,
                t.jsx)("span", {
                    className: "truncate text-sm font-medium",
                    children: e.displayName
                })
            })
        }
        var y = e.i(453746);
        function N({value: e, skeleton: s}) {
            if (s)
                return (0,
                t.jsx)(p.f, {
                    className: "mx-auto h-4 w-8"
                });
            if (!e.rank)
                return (0,
                t.jsx)("span", {
                    className: "text-muted-foreground",
                    children: "—"
                });
            let {rank: a, rankLength: i} = e;
            return (0,
            t.jsx)("span", {
                className: "font-medium",
                children: i > 1 ? `${a}–${a + i - 1}` : a
            })
        }
        function k({value: e, skeleton: s, format: a}) {
            return s ? (0,
            t.jsx)(p.f, {
                className: "mx-auto h-4 w-12"
            }) : (0,
            t.jsxs)("div", {
                className: "text-center text-sm",
                children: [(0,
                t.jsx)("div", {
                    className: "font-semibold",
                    children: Math.round(100 * e.score) / 100
                }), "ICPC" === a && !!e.penalty && (0,
                t.jsxs)("div", {
                    className: "text-xs text-muted-foreground",
                    children: [Math.round(e.penalty), "'"]
                })]
            })
        }
        function w(e, ...t) {
            return [e, ...t].join("_").replace(/[^A-Za-z0-9_-]/g, "_")
        }
        var I = e.i(458122);
        e.i(402092);
        var C = e.i(76881);
        e.i(835496);
        var S = e.i(741758);
        function _(e) {
            return `a_${e}`.replace(/[^A-Za-z0-9_-]/g, "_")
        }
        function M(e) {
            return "NUMBER" === e
        }
        let A = ["eq", "neq", "contains", "starts"]
          , z = ["eq", "neq", "gt", "gte", "lt", "lte"];
        e.i(337989).W;
        let L = `
  query ListScoreboardRows($id: ID!, $mode: String, $first: Int, $offset: Int, $filters: CombinedScoreboardRowFilter) {
    scoreboard(id: $id) {
      rows(mode: $mode, first: $first, offset: $offset, filters: $filters) {
        totalCount
        nodes {
          memberId
          displayName
          member {
            id
            displayName
            level
            account {
              ... on CommunityUser {
                nickname
                picture
              }
            }
          }
          rank
          rankLength
          score
          penalty
          contests {
            contestId
            score
            penalty
            counted
            problems {
              problemId
              score
              percentage
              attempts
              time
              pending
              changed
              firstToSolve
            }
          }
          attributes {
            attributeKey
            type
            string
            number

            country {
              id
              name
              flagUrl
            }

            region {
              id
              name
              flagUrl
            }
          }
        }
      }
    }
  }
`;
        e.s(["ScoreboardTable", 0, function({scoreboard: e}) {
            let j = (0,
            m.r)()
              , E = (0,
            u.useSearchParams)()
              , R = (0,
            u.usePathname)()
              , $ = (0,
            u.useRouter)()
              , D = (0,
            h.useMemo)( () => (function(e) {
                let t = {};
                for (let s of e) {
                    let e = s.label || s.attributeKey;
                    if ("COUNTRY" === s.type) {
                        t[_(s.attributeKey)] = {
                            type: "enum",
                            label: e,
                            icon: S.f,
                            autocompleter: I.f
                        };
                        continue
                    }
                    if ("REGION" === s.type) {
                        let a = s.constraints.filter(e => e.startsWith("country:")).map(e => e.replace("country:", ""));
                        t[_(s.attributeKey)] = {
                            type: "enum",
                            label: e,
                            icon: S.f,
                            autocompleter: () => (0,
                            C.f)(a.length > 0 ? a : void 0)
                        };
                        continue
                    }
                    if ("CHOICE" === s.type && s.choices.length > 0) {
                        t[_(s.attributeKey)] = {
                            type: "enum",
                            label: e,
                            icon: S.f,
                            choices: s.choices.map(e => ({
                                label: e,
                                value: e
                            }))
                        };
                        continue
                    }
                    t[_(s.attributeKey)] = {
                        type: M(s.type) ? "int" : "string",
                        label: e,
                        icon: S.f
                    }
                }
                return t
            }
            )(e.filters), [e.filters])
              , T = (0,
            r.useRequestQuery)({
                size: 100,
                filters: D
            })
              , P = e.modes
              , U = E.get("mode") ?? ""
              , O = P.includes(U) ? U : P[0] ?? ""
              , V = E.has("auto-refresh")
              , q = (0,
            h.useMemo)( () => (function(e, t) {
                let s = [];
                for (let a of e) {
                    let e = t[_(a.attributeKey)];
                    if (!e)
                        continue;
                    let i = M(a.type)
                      , r = i ? z : A
                      , n = Object.fromEntries(Object.entries(e).filter( ([e]) => r.includes(e)));
                    0 !== Object.keys(n).length && s.push({
                        attributeKey: a.attributeKey,
                        [i ? "number" : "string"]: n
                    })
                }
                return s
            }
            )(e.filters, T.filters), [e.filters, T.filters])
              , H = (0,
            i.useGraphQLListSource)(L, {
                query: T,
                variables: {
                    id: e.id,
                    mode: O || void 0,
                    filters: q.length > 0 ? {
                        attributes: q
                    } : void 0
                },
                extract: e => {
                    let t = e.scoreboard?.rows;
                    if (t)
                        return {
                            totalCount: t.totalCount,
                            nodes: t.nodes.map(e => ({
                                ...e,
                                id: e.memberId
                            }))
                        }
                }
            })
              , K = (0,
            h.useEffectEvent)( () => H.refetch?.());
            (0,
            h.useEffect)( () => {
                if (!V)
                    return;
                let e = setInterval(K, 1e4);
                return () => clearInterval(e)
            }
            , [V]);
            let F = (0,
            h.useMemo)( () => (function(e, s) {
                let a = e.format
                  , i = {
                    rank: {
                        id: "rank",
                        label: (0,
                        v.y)("scoreboard.rank_label"),
                        width: 80,
                        align: "center",
                        render: N
                    },
                    name: {
                        id: "name",
                        label: (0,
                        v.y)("scoreboard.participant_label"),
                        render: b
                    }
                };
                for (let s of e.attributes) {
                    let e = w("attribute", s.attributeKey);
                    i[e] = function(e, s) {
                        return {
                            id: e,
                            label: s.label || s.attributeKey,
                            width: 160,
                            render: ({value: e, skeleton: a}) => {
                                if (a)
                                    return (0,
                                    t.jsx)(p.f, {
                                        className: "h-4 w-24"
                                    });
                                let i = e.attributes.find(e => e.attributeKey === s.attributeKey);
                                if (i?.country)
                                    return (0,
                                    t.jsx)(x.l, {
                                        country: i.country
                                    });
                                if (i?.region)
                                    return (0,
                                    t.jsx)(x.z, {
                                        region: i.region
                                    });
                                let r = i?.string ?? (i?.number == null ? "" : String(i.number));
                                return r ? (0,
                                t.jsx)("span", {
                                    children: r
                                }) : (0,
                                t.jsx)("span", {
                                    className: "text-muted-foreground",
                                    children: "—"
                                })
                            }
                        }
                    }(e, s)
                }
                let r = e.contests.length > 1;
                for (let n of e.contests) {
                    for (let e of n.problems) {
                        let s = w("problem", n.contestId, e.problemId);
                        i[s] = function(e, s, a, i, r=!0) {
                            let n = a.title || String.fromCharCode(65 + a.index);
                            return {
                                id: e,
                                label: r ? `${s.index + 1}${n}` : n,
                                width: 80,
                                align: "center",
                                render: ({value: e, skeleton: r}) => {
                                    if (r)
                                        return (0,
                                        t.jsx)(p.f, {
                                            className: "mx-auto h-5 w-12"
                                        });
                                    let n = e.contests.find(e => e.contestId === s.contestId)?.problems.find(e => e.problemId === a.problemId);
                                    return n ? (0,
                                    t.jsx)(y.f, {
                                        score: n,
                                        format: i
                                    }) : (0,
                                    t.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: "—"
                                    })
                                }
                            }
                        }(s, n, e, a, r)
                    }
                    if (r) {
                        let e = w("contest", n.contestId);
                        i[e] = function(e, s, a, i) {
                            return {
                                id: e,
                                label: a,
                                width: 140,
                                align: "center",
                                render: e => (0,
                                t.jsx)(g, {
                                    ...e,
                                    contest: s,
                                    format: i
                                })
                            }
                        }(e, n, n.label || s(n.index + 1), a)
                    }
                }
                return i.score = {
                    id: "score",
                    label: (0,
                    v.y)("scoreboard.score_label"),
                    width: 90,
                    align: "center",
                    render: e => (0,
                    t.jsx)(k, {
                        ...e,
                        format: a
                    })
                },
                i
            }
            )(e, e => j("scoreboard.round_label", {
                index: e
            })), [e, j]);
            return (0,
            t.jsx)(l.N, {
                className: "overflow-hidden p-0",
                children: (0,
                t.jsx)(s.DataTable, {
                    className: "[&_[data-slot=toolbar]]:px-4",
                    columns: F,
                    filters: D,
                    query: T,
                    data: H,
                    pagination: "offset",
                    customizable: !0,
                    slots: {
                        toolbar: (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(0,
                            t.jsxs)(o.DropdownMenu, {
                                children: [(0,
                                t.jsx)(o.DropdownMenuTrigger, {
                                    asChild: !0,
                                    children: (0,
                                    t.jsx)(n.K, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-7",
                                        "aria-label": j("action.view_options_button"),
                                        children: (0,
                                        t.jsx)(d.f, {
                                            className: "size-4"
                                        })
                                    })
                                }), (0,
                                t.jsx)(o.DropdownMenuContent, {
                                    align: "end",
                                    children: (0,
                                    t.jsx)(o.DropdownMenuCheckboxItem, {
                                        checked: V,
                                        onCheckedChange: e => {
                                            let t = new URLSearchParams(E);
                                            e ? t.set("auto-refresh", "1") : t.delete("auto-refresh");
                                            let s = t.toString();
                                            $.replace(R + (s ? `?${s}` : ""))
                                        }
                                        ,
                                        children: j("scoreboard.auto_refresh_option")
                                    })
                                })]
                            }), P.length > 1 && (0,
                            t.jsx)(c.Tabs, {
                                value: O,
                                onValueChange: e => {
                                    let t = new URLSearchParams(E);
                                    t.delete("page"),
                                    e === P[0] ? t.delete("mode") : t.set("mode", e);
                                    let s = t.toString();
                                    $.push(R + (s ? `?${s}` : ""))
                                }
                                ,
                                children: (0,
                                t.jsx)(c.TabsList, {
                                    children: f.f.filter(e => P.includes(e.value)).map(e => (0,
                                    t.jsx)(c.TabsTrigger, {
                                        value: e.value,
                                        children: (0,
                                        t.jsx)(a.f, {
                                            label: e.label
                                        })
                                    }, e.value))
                                })
                            })]
                        })
                    }
                })
            })
        }
        ], 490013)
    }
    , 125763, e => {
        var t = e.i(441408);
        e.i(673407);
        var s = e.i(704697)
          , a = e.i(874974);
        e.i(927371);
        var i = e.i(587255)
          , r = e.i(958947)
          , n = e.i(811669);
        e.s(["f", 0, function({member: e, avatar: l=!0, link: o=!0, className: c}) {
            let d = e?.displayName || e?.account?.nickname;
            if (!d)
                return null;
            let u = (0,
            r.c)("inline-flex min-w-0 items-center gap-1.5 text-sm font-medium text-foreground", c)
              , m = e?.level ? {
                color: (0,
                a.f)(e.level)
            } : void 0
              , h = (0,
            t.jsxs)(t.Fragment, {
                children: [l && (0,
                t.jsxs)(i.Avatar, {
                    className: "size-5",
                    children: [(0,
                    t.jsx)(i.AvatarImage, {
                        src: e?.account?.picture,
                        alt: ""
                    }), (0,
                    t.jsx)(i.AvatarFallback, {
                        className: "text-[10px]",
                        children: d.slice(0, 1).toUpperCase()
                    })]
                }), (0,
                t.jsxs)("span", {
                    className: "inline-flex min-w-0 items-center gap-1.5",
                    style: m,
                    children: [(0,
                    t.jsx)("span", {
                        className: "truncate",
                        children: d
                    }), e?.level ? (0,
                    t.jsx)(s.RatingIcon, {
                        level: e.level
                    }) : null]
                })]
            })
              , f = e?.account?.nickname;
            return f && o ? (0,
            t.jsx)(n.default, {
                href: `/users/${f}`,
                className: u,
                children: h
            }) : (0,
            t.jsx)("span", {
                className: u,
                children: h
            })
        }
        ])
    }
    , 723155, e => {
        var t = e.i(441408);
        e.i(197468);
        var s = e.i(920449);
        e.i(808174);
        var a = e.i(760248);
        e.i(40197);
        var i = e.i(211008);
        e.i(927371);
        var r = e.i(407313)
          , n = e.i(627778)
          , l = e.i(562519)
          , o = e.i(234435)
          , c = e.i(731334)
          , d = e.i(498530)
          , u = e.i(435922)
          , m = e.i(811669)
          , h = e.i(324715)
          , f = e.i(529767)
          , p = e.i(468972)
          , x = e.i(254040)
          , g = e.i(341981)
          , v = e.i(335820);
        e.i(10913);
        var j = e.i(274495);
        function b({value: e, onValueChange: s, disabled: a, errors: i}) {
            return (0,
            t.jsx)("div", {
                className: "space-y-6",
                children: e.attributes.map(r => (0,
                t.jsx)(j.Y, {
                    attribute: r,
                    value: e.values[r.key ?? ""],
                    onValueChange: t => s({
                        ...e,
                        values: {
                            ...e.values,
                            [r.key ?? ""]: t
                        }
                    }),
                    disabled: a,
                    errors: i?.subset(r.key ?? "")
                }, r.key))
            })
        }
        function y({payload: e, open: a, onClose: r}) {
            let n = (0,
            f.r)()
              , o = (0,
            s.useClient)()
              , c = (0,
            i.useSpace)()
              , d = async t => (await new l.RegistrationService(o,c.url).SubmitRegistration({
                contestId: e.contestId,
                values: Object.values(t.values)
            }),
            !0);
            return (0,
            t.jsx)(v.FormDialog, {
                open: a,
                title: n("contest.join_title"),
                description: n("contest.join_message"),
                labels: {
                    submit: n("action.join_button")
                },
                value: {
                    attributes: e.attributes,
                    values: Object.fromEntries(e.values.map(e => [e.attributeKey ?? "", e]))
                },
                slots: {
                    form: b
                },
                onClose: r,
                onSubmit: d
            })
        }
        e.s(["f", 0, function({contest: e, size: v="lg", variant: j="primary", icon: b=!0, className: N, onChange: k}) {
            let w = (0,
            f.r)()
              , {user: I} = (0,
            g.useSession)()
              , C = (0,
            s.useClient)()
              , S = (0,
            i.useSpace)()
              , _ = (0,
            h.useRouter)()
              , M = (0,
            a.useDialogs)()
              , [A,z] = (0,
            p.useState)(!1)
              , L = e.slug || e.id
              , E = `/compete/${L}`
              , R = e.allowFollowup || e.allowUpsolve
              , $ = async () => {
                z(!0);
                try {
                    await new n.ParticipantService(C,S.url).StartContest({
                        contestId: e.id
                    }),
                    _.push(E)
                } catch (e) {
                    x.c.error(e instanceof Error ? e.message : String(e)),
                    z(!1)
                }
            }
              , D = async () => {
                z(!0);
                try {
                    let t = await new l.RegistrationService(C,S.url).DescribeRegistration({
                        contestId: e.id
                    });
                    if (t.attributes?.length) {
                        if (!await M.open(y, {
                            contestId: e.id,
                            attributes: t.attributes,
                            values: t.values ?? []
                        }))
                            return
                    } else
                        await new l.RegistrationService(C,S.url).SubmitRegistration({
                            contestId: e.id
                        });
                    k ? await k() : _.refresh(),
                    ("OPEN" === e.status || "SCHEDULED" !== e.status && R) && _.push(E)
                } catch (e) {
                    x.c.error(e instanceof Error ? e.message : String(e))
                } finally {
                    z(!1)
                }
            }
            ;
            if (!I.sub)
                return (0,
                t.jsx)(r.K, {
                    asChild: !0,
                    variant: "outline",
                    size: v,
                    className: N,
                    children: (0,
                    t.jsxs)(m.default, {
                        href: `/signin?return_path=${encodeURIComponent(`/contests/${L}`)}`,
                        children: [b && (0,
                        t.jsx)(o.f, {}), w("action.signin_button")]
                    })
                });
            switch (e.viewer?.status) {
            case "WAITING":
                return (0,
                t.jsx)(r.K, {
                    asChild: !0,
                    variant: j,
                    size: v,
                    className: N,
                    children: (0,
                    t.jsxs)(m.default, {
                        href: E,
                        children: [b && (0,
                        t.jsx)(o.f, {}), w("action.open_button")]
                    })
                });
            case "COMPLETE":
            case "BLOCKED":
                return null;
            case "READY":
                return (0,
                t.jsxs)(r.K, {
                    variant: j,
                    size: v,
                    className: N,
                    disabled: A,
                    onClick: $,
                    children: [A ? (0,
                    t.jsx)(c.f, {
                        className: "animate-spin"
                    }) : b && (0,
                    t.jsx)(d.f, {}), w("action.start_button")]
                });
            case "ACTIVE":
            case "PAUSED":
                return (0,
                t.jsx)(r.K, {
                    asChild: !0,
                    variant: j,
                    size: v,
                    className: N,
                    children: (0,
                    t.jsxs)(m.default, {
                        href: E,
                        children: [b && (0,
                        t.jsx)(d.f, {}), w("action.continue_button")]
                    })
                });
            case "UPSOLVE":
                return (0,
                t.jsx)(r.K, {
                    asChild: !0,
                    variant: j,
                    size: v,
                    className: N,
                    children: (0,
                    t.jsxs)(m.default, {
                        href: E,
                        children: [b && (0,
                        t.jsx)(d.f, {}), w("contest.status_upsolve")]
                    })
                })
            }
            return ("SCHEDULED" === e.status || "OPEN" === e.status || "FROZEN" === e.status) && "PRIVATE" !== e.visibility || ("COMPLETE" === e.status || "FINALIZED" === e.status) && R ? (0,
            t.jsxs)(r.K, {
                variant: j,
                size: v,
                className: N,
                disabled: A,
                onClick: D,
                children: [A ? (0,
                t.jsx)(c.f, {
                    className: "animate-spin"
                }) : b && (0,
                t.jsx)(u.f, {}), w("action.join_button")]
            }) : null
        }
        ], 723155)
    }
    , 703297, e => {
        var t = e.i(441408);
        e.i(927371);
        var s = e.i(587255)
          , a = e.i(407313)
          , i = e.i(291475)
          , r = e.i(958947)
          , n = e.i(374496)
          , l = e.i(944354)
          , o = e.i(811669)
          , c = e.i(529767)
          , d = e.i(723155)
          , u = e.i(236792)
          , m = e.i(923860);
        let h = {
            compact: {
                card: "gap-4 pt-4 pb-4",
                inset: "px-4",
                tile: "size-10",
                icon: "size-5",
                title: "text-base",
                status: "text-xs"
            },
            full: {
                card: "min-h-72 gap-3 pt-6 pb-6",
                inset: "px-6",
                tile: "size-14",
                icon: "size-7",
                title: "text-lg",
                status: "text-sm"
            }
        };
        e.s(["f", 0, function({contest: e, variant: f="compact", onChange: p}) {
            let x = (0,
            c.r)()
              , g = (0,
            c.B)()
              , v = h[f]
              , j = `/contests/${e.slug || e.id}`
              , b = (0,
            t.jsxs)(s.Avatar, {
                className: (0,
                r.c)("shrink-0 rounded-md bg-card", "full" === f && "shadow-md ring-[3px] ring-card", v.tile),
                children: [(0,
                t.jsx)(s.AvatarImage, {
                    src: e.imageUrl,
                    alt: "",
                    className: "object-cover"
                }), (0,
                t.jsx)(s.AvatarFallback, {
                    className: "rounded-[inherit]",
                    children: (0,
                    t.jsx)(l.f, {
                        className: (0,
                        r.c)("text-muted-foreground", v.icon)
                    })
                })]
            });
            if ("compact" === f)
                return (0,
                t.jsxs)(i.N, {
                    interactive: !0,
                    className: (0,
                    r.c)("h-full", v.card),
                    children: [(0,
                    t.jsx)(i.Y, {
                        className: v.inset,
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [b, (0,
                            t.jsxs)("div", {
                                className: "min-w-0",
                                children: [(0,
                                t.jsx)(i.w, {
                                    className: v.title,
                                    children: (0,
                                    t.jsx)(o.default, {
                                        href: j,
                                        className: "block truncate after:absolute after:inset-0",
                                        children: e.name
                                    })
                                }), (0,
                                t.jsx)(m.f, {
                                    contest: e,
                                    className: v.status
                                })]
                            })]
                        })
                    }), (0,
                    t.jsx)(i.S, {
                        className: (0,
                        r.c)("gap-1.5 text-xs text-muted-foreground", v.inset),
                        children: e.startsAt && (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)(n.f, {
                                className: "size-3.5 shrink-0"
                            }), (0,
                            t.jsx)("time", {
                                dateTime: e.startsAt,
                                className: "truncate",
                                children: g.dateTime(new Date(e.startsAt), {
                                    dateStyle: "medium",
                                    timeStyle: "short"
                                })
                            })]
                        })
                    })]
                });
            let y = (0,
            u.f)(e.classification?.series?.id || e.name);
            return (0,
            t.jsxs)(i.N, {
                interactive: !0,
                className: (0,
                r.c)("h-full", v.card),
                children: [(0,
                t.jsx)(i.v, {
                    className: "aspect-auto h-16",
                    children: (0,
                    t.jsx)("div", {
                        className: "cover-tint size-full",
                        style: {
                            "--cover-hue": y
                        }
                    })
                }), (0,
                t.jsx)(i.Y, {
                    className: (0,
                    r.c)("relative -mt-10", v.inset),
                    children: b
                }), (0,
                t.jsxs)(i.O, {
                    className: (0,
                    r.c)("flex flex-1 flex-col", v.inset),
                    children: [e.startsAt && (0,
                    t.jsxs)("p", {
                        className: "flex items-center gap-1.5 text-sm font-medium text-primary",
                        children: [(0,
                        t.jsx)(n.f, {
                            className: "size-4 shrink-0"
                        }), (0,
                        t.jsx)("time", {
                            dateTime: e.startsAt,
                            children: g.dateTime(new Date(e.startsAt), {
                                dateStyle: "long",
                                timeStyle: "short"
                            })
                        })]
                    }), (0,
                    t.jsx)(i.w, {
                        className: (0,
                        r.c)("mt-2", v.title),
                        children: (0,
                        t.jsx)(o.default, {
                            href: j,
                            className: "block truncate after:absolute after:inset-0",
                            children: e.name
                        })
                    }), (0,
                    t.jsx)(m.f, {
                        contest: e,
                        className: v.status
                    })]
                }), (0,
                t.jsxs)(i.S, {
                    className: (0,
                    r.c)("gap-1", v.inset),
                    children: [(0,
                    t.jsx)(d.f, {
                        contest: e,
                        size: "sm",
                        variant: "outline",
                        className: "relative z-10",
                        onChange: p
                    }), (0,
                    t.jsx)(a.K, {
                        asChild: !0,
                        variant: "ghost",
                        size: "sm",
                        className: "relative z-10",
                        children: (0,
                        t.jsx)(o.default, {
                            href: j,
                            children: x("action.see_more_button")
                        })
                    })]
                })]
            })
        }
        ], 703297)
    }
    , 923860, e => {
        var t = e.i(441408);
        e.i(568677);
        var s = e.i(349769)
          , a = e.i(958947)
          , i = e.i(529767)
          , r = e.i(468972);
        let n = {
            live: "text-green-600 dark:text-green-500",
            upcoming: "text-blue-600 dark:text-blue-500",
            attention: "text-amber-600 dark:text-amber-500",
            virtual: "text-fuchsia-600 dark:text-fuchsia-500",
            done: "text-muted-foreground",
            blocked: "text-destructive"
        };
        e.s(["f", 0, function({contest: e, className: l}) {
            let o = (0,
            i.r)()
              , c = function(e) {
                let t = e.viewer?.unofficial ? [{
                    key: (0,
                    s.y)("contest.status_unofficial"),
                    tone: "done"
                }] : [];
                switch (e.viewer?.status) {
                case "WAITING":
                    return [{
                        key: (0,
                        s.y)("contest.status_scheduled"),
                        tone: "upcoming"
                    }, ...t];
                case "READY":
                    return [{
                        key: (0,
                        s.y)("contest.status_ready"),
                        tone: "live"
                    }, ...t];
                case "ACTIVE":
                    return [{
                        key: (0,
                        s.y)("contest.status_active"),
                        tone: "live"
                    }, ...t];
                case "PAUSED":
                    return [{
                        key: (0,
                        s.y)("contest.status_paused"),
                        tone: "attention"
                    }, ...t];
                case "UPSOLVE":
                    return [{
                        key: (0,
                        s.y)("contest.status_upsolve"),
                        tone: "attention"
                    }, ...t];
                case "BLOCKED":
                    return [{
                        key: (0,
                        s.y)("contest.status_blocked"),
                        tone: "blocked"
                    }, ...t];
                case "COMPLETE":
                    return [{
                        key: (0,
                        s.y)("contest.status_finished"),
                        tone: "done"
                    }, ...t]
                }
                switch (e.status) {
                case "SCHEDULED":
                    return [{
                        key: (0,
                        s.y)("contest.status_scheduled"),
                        tone: "upcoming"
                    }];
                case "OPEN":
                    return [{
                        key: (0,
                        s.y)("contest.status_open"),
                        tone: "live"
                    }];
                case "FROZEN":
                    return [{
                        key: (0,
                        s.y)("contest.status_frozen"),
                        tone: "attention"
                    }];
                case "SUSPENDED":
                    return [{
                        key: (0,
                        s.y)("contest.status_suspended"),
                        tone: "blocked"
                    }];
                case "COMPLETE":
                case "FINALIZED":
                    if (e.allowFollowup)
                        return [{
                            key: (0,
                            s.y)("contest.status_virtual"),
                            tone: "virtual"
                        }];
                    if (e.allowUpsolve)
                        return [{
                            key: (0,
                            s.y)("contest.status_upsolve"),
                            tone: "attention"
                        }];
                    return [{
                        key: (0,
                        s.y)("contest.status_finished"),
                        tone: "done"
                    }]
                }
                return []
            }(e);
            return 0 === c.length ? null : (0,
            t.jsx)("p", {
                className: (0,
                a.c)("truncate font-semibold", l),
                children: c.map( (e, s) => (0,
                t.jsxs)(r.Fragment, {
                    children: [s > 0 && (0,
                    t.jsx)("span", {
                        className: "px-1.5 text-muted-foreground",
                        children: "•"
                    }), (0,
                    t.jsx)("span", {
                        className: n[e.tone],
                        children: o(e.key)
                    })]
                }, e.key))
            })
        }
        ])
    }
    , 453746, e => {
        var t = e.i(441408)
          , s = e.i(958947);
        function a(e) {
            return (e.pending ?? 0) > 0 || !!e.changed
        }
        function i(e, t=!1) {
            if (a(e))
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
            let s = e.percentage >= 1;
            return s && e.firstToSolve ? "bg-green-600 text-white dark:bg-green-600 dark:text-white" : s ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : t ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
        }
        e.s(["f", 0, function({score: e, format: r}) {
            if ("ICPC" === r) {
                let r = !e || 0 === e.attempts && e.percentage <= 0;
                if (!e || r && !a(e))
                    return (0,
                    t.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "—"
                    });
                let n = e.percentage >= 1;
                return (0,
                t.jsxs)("div", {
                    className: (0,
                    s.c)("inline-flex flex-col items-center rounded px-2 py-0.5 text-xs", i(e)),
                    children: [r ? null : n ? (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsxs)("span", {
                            children: [Math.floor((e.time ?? 0) / 60), "'"]
                        }), e.attempts > 0 && (0,
                        t.jsxs)("span", {
                            className: "opacity-70",
                            children: ["+", e.attempts]
                        })]
                    }) : (0,
                    t.jsxs)("span", {
                        children: ["−", e.attempts]
                    }), a(e) && (0,
                    t.jsxs)("span", {
                        className: "opacity-70",
                        children: ["?", e.pending || ""]
                    })]
                })
            }
            let n = !e || !e.score && !e.attempts;
            if (!e || n && !a(e))
                return (0,
                t.jsx)("span", {
                    className: "text-muted-foreground",
                    children: "—"
                });
            let l = e.percentage > 0 && e.percentage < 1;
            return (0,
            t.jsxs)("div", {
                className: (0,
                s.c)("inline-flex items-center gap-1 rounded px-2 py-0.5 text-sm font-medium", i(e, l)),
                children: [!n && (".,." + Math.round(100 * e.score) / 100 + " " + (e.attempts + (e.percentage == 1)) + " " + e.solvedIn), a(e) && (0,
                t.jsxs)("span", {
                    className: "text-xs opacity-70",
                    children: ["?", e.pending || ""]
                })]
            })
        }
        ])
    }
    , 931112, e => {
        e.i(568677);
        var t = e.i(349769);
        let s = [{
            value: "MAIN",
            label: (0,
            t.y)("contest.mode_main_label"),
            variant: "neutral"
        }, {
            value: "FROZEN",
            label: (0,
            t.y)("contest.mode_frozen_label"),
            variant: "neutral"
        }, {
            value: "UPSOLVE",
            label: (0,
            t.y)("contest.mode_upsolve_label"),
            variant: "neutral"
        }, {
            value: "VIRTUAL",
            label: (0,
            t.y)("contest.mode_virtual_label"),
            variant: "neutral"
        }];
        e.s(["f", 0, s])
    }
    , 476910, e => {
        var t = e.i(441408);
        e.i(152746);
        var s = e.i(296152);
        e.i(40197);
        var a = e.i(211008)
          , i = e.i(529767)
          , r = e.i(72534);
        e.s(["SiteFooter", 0, function({locales: e, about: n}) {
            let l = (0,
            i.r)()
              , o = (0,
            a.useSpace)()
              , c = (0,
            r.useNavigation)();
            return (0,
            t.jsx)(s.SiteFooter, {
                title: "basecamp" === o.key ? "Eolymp" : o.name || o.key || "",
                subtitle: o.affiliation || void 0,
                links: n ? [...c, {
                    href: "/about",
                    label: l("nav.about_label")
                }] : c,
                locales: e
            })
        }
        ])
    }
    , 587668, e => {
        var t = e.i(441408);
        e.i(152746);
        var s = e.i(63352);
        e.i(40197);
        var a = e.i(211008)
          , i = e.i(341981);
        e.i(673407);
        var r = e.i(982097)
          , n = e.i(811669);
        function l({member: e}) {
            if (!e?.rating)
                return null;
            let s = (0,
            t.jsx)(r.RatingLabel, {
                rating: e.rating,
                level: e.level
            })
              , a = e.user?.nickname;
            return a ? (0,
            t.jsx)(n.default, {
                href: `/users/${a}/rating`,
                children: s
            }) : s
        }
        e.i(927371);
        var o = e.i(866719)
          , c = e.i(407313)
          , d = e.i(187264)
          , u = e.i(529767)
          , m = e.i(737833);
        function h() {
            let e = (0,
            u.r)()
              , {count: s, setOpen: a} = (0,
            m.useCart)();
            return (0,
            t.jsxs)(c.K, {
                variant: "ghost",
                size: "icon",
                className: "relative",
                "aria-label": e("store.cart_title"),
                onClick: () => a(!0),
                children: [(0,
                t.jsx)(d.f, {}), s > 0 && (0,
                t.jsx)(o.t, {
                    className: "absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 py-0 text-[10px] leading-none",
                    children: s
                })]
            })
        }
        var f = e.i(72534)
          , p = e.i(777800);
        e.s(["SiteHeader", 0, function() {
            let e = (0,
            a.useSpace)()
              , {member: r} = (0,
            i.useSession)()
              , n = (0,
            f.useNavigation)()
              , o = !r && "PRIVATE" === e.visibility;
            return (0,
            t.jsx)(s.SiteHeader, {
                title: "basecamp" === e.key ? "Eolymp" : e.name || e.key || "",
                logo: e.image || void 0,
                nav: o ? [] : n,
                actions: (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)(l, {
                        member: r
                    }), e.features?.includes("MERCHANDISE_STORE") && (0,
                    t.jsx)(h, {}), (0,
                    t.jsx)(p.f, {})]
                })
            })
        }
        ], 587668)
    }
    , 777800, e => {
        var t = e.i(441408);
        e.i(152746);
        var s = e.i(684717);
        e.i(40197);
        var a = e.i(211008);
        e.i(927371);
        var i = e.i(417912)
          , r = e.i(958947)
          , n = e.i(432732);
        let l = {
            name: "circle-user",
            size: 24,
            node: [["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }], ["circle", {
                cx: "12",
                cy: "10",
                r: "3",
                key: "ilqhr7"
            }], ["path", {
                d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
                key: "154egf"
            }]],
            aliases: ["user-circle"]
        };
        l.node;
        let o = (0,
        n.f)(l);
        var c = e.i(153679)
          , d = e.i(751914)
          , u = e.i(761732);
        let m = {
            name: "square-pen",
            size: 24,
            node: [["path", {
                d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                key: "1m0v6g"
            }], ["path", {
                d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
                key: "ohrbg2"
            }]],
            aliases: ["pen-box", "edit", "pen-square"]
        };
        m.node;
        let h = (0,
        n.f)(m);
        var f = e.i(347605)
          , p = e.i(811669)
          , x = e.i(324715)
          , g = e.i(529767)
          , v = e.i(341981)
          , j = e.i(111832);
        e.s(["f", 0, function() {
            let e = (0,
            g.r)()
              , n = (0,
            a.useSpace)()
              , l = (0,
            x.usePathname)()
              , {member: m} = (0,
            v.useSession)()
              , {membersCanCreatePosts: b} = (0,
            j.useDiscussionConfig)()
              , y = `/signin?${new URLSearchParams({
                return_path: l
            })}`;
            if (!m)
                return (0,
                t.jsx)(s.UserMenu, {
                    signInHref: y,
                    signOutHref: "/signout"
                });
            let N = m.user?.emailRestricted
              , k = `/users/${encodeURIComponent(m.user?.nickname ?? "")}`
              , w = new Set(n.features);
            return (0,
            t.jsxs)(s.UserMenu, {
                user: {
                    name: m.user?.name || m.displayName || "",
                    description: m.displayName,
                    picture: m.user?.picture,
                    warning: N
                },
                signInHref: y,
                signOutHref: "/signout",
                children: [(0,
                t.jsx)(i.DropdownMenuItem, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(p.default, {
                        href: k,
                        children: [(0,
                        t.jsx)(o, {}), e("nav.profile_label")]
                    })
                }), b && (0,
                t.jsx)(i.DropdownMenuItem, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(p.default, {
                        href: `${k}/posts`,
                        children: [(0,
                        t.jsx)(h, {}), e("nav.my_posts_label")]
                    })
                }), w.has("MERCHANDISE_STORE") && (0,
                t.jsx)(i.DropdownMenuItem, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(p.default, {
                        href: "/store/orders",
                        children: [(0,
                        t.jsx)(d.f, {}), e("nav.my_orders_label")]
                    })
                }), w.has("MEMBER_CREDITS") && (0,
                t.jsx)(i.DropdownMenuItem, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(p.default, {
                        href: "/mints",
                        children: [(0,
                        t.jsx)(c.f, {}), e("nav.mints_label")]
                    })
                }), (0,
                t.jsx)(i.DropdownMenuItem, {
                    asChild: !0,
                    children: (0,
                    t.jsxs)(p.default, {
                        href: "/settings",
                        className: (0,
                        r.c)(N && "text-destructive"),
                        children: [N ? (0,
                        t.jsx)(f.f, {}) : (0,
                        t.jsx)(u.f, {}), e("nav.settings_label")]
                    })
                })]
            })
        }
        ], 777800)
    }
    , 131484, e => {
        var t = e.i(441408)
          , s = e.i(958947)
          , a = e.i(468972)
          , i = e.i(703297);
        e.i(927371);
        var r = e.i(587255)
          , n = e.i(291475)
          , l = e.i(944354)
          , o = e.i(811669)
          , c = e.i(529767)
          , d = e.i(923860);
        function u(e) {
            return Math.max(0, Math.floor((new Date(e).getTime() - Date.now()) / 1e3))
        }
        function m(e) {
            return String(e).padStart(2, "0")
        }
        function h({contest: e}) {
            let s = (0,
            c.r)()
              , i = (0,
            c.B)()
              , [f,p] = (0,
            a.useState)( () => u(e.endsAt));
            (0,
            a.useEffect)( () => {
                p(u(e.endsAt));
                let t = setInterval( () => p(u(e.endsAt)), 1e3);
                return () => clearInterval(t)
            }
            , [e.endsAt]);
            let x = Math.floor(f / 86400)
              , g = x > 0 ? i.number(x, {
                style: "unit",
                unit: "day",
                unitDisplay: "long"
            }) : `${m(Math.floor(f / 3600))}:${m(Math.floor(f % 3600 / 60))}:${m(f % 60)}`;
            return (0,
            t.jsx)(n.N, {
                interactive: !!e.contest,
                className: "py-4",
                children: (0,
                t.jsx)("div", {
                    className: "px-4",
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [(0,
                        t.jsxs)(r.Avatar, {
                            className: "size-10 shrink-0 rounded-md bg-card",
                            children: [(0,
                            t.jsx)(r.AvatarImage, {
                                src: e.imageUrl,
                                alt: "",
                                className: "object-cover"
                            }), (0,
                            t.jsx)(r.AvatarFallback, {
                                className: "rounded-[inherit]",
                                children: (0,
                                t.jsx)(l.f, {
                                    className: "size-5 text-muted-foreground"
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3",
                            children: [(0,
                            t.jsx)(n.w, {
                                className: "text-base",
                                children: e.contest ? (0,
                                t.jsx)(o.default, {
                                    href: `/contests/${e.contest.slug || e.contest.id}`,
                                    className: "block truncate after:absolute after:inset-0",
                                    children: e.name
                                }) : (0,
                                t.jsx)("span", {
                                    className: "block truncate",
                                    children: e.name
                                })
                            }), (0,
                            t.jsx)("p", {
                                suppressHydrationWarning: !0,
                                className: "text-right text-base leading-none font-semibold tabular-nums",
                                children: g
                            }), (0,
                            t.jsx)("div", {
                                className: "min-w-0",
                                children: e.contest ? (0,
                                t.jsx)(d.f, {
                                    contest: e.contest,
                                    className: "text-xs"
                                }) : (0,
                                t.jsx)("p", {
                                    className: "truncate text-xs font-semibold text-green-600 dark:text-green-500",
                                    children: s("contest.status_active")
                                })
                            }), (0,
                            t.jsx)("p", {
                                className: "text-right text-xs text-muted-foreground",
                                children: s("compete.time_left_label")
                            })]
                        })]
                    })
                })
            })
        }
        let f = "3rem";
        function p({contests: e}) {
            let r = (0,
            a.useRef)(null)
              , [n,l] = (0,
            a.useState)({
                before: !1,
                after: !1
            });
            (0,
            a.useEffect)( () => {
                let e = r.current;
                if (!e)
                    return;
                let t = () => {
                    let t = e.scrollWidth - e.clientWidth - e.scrollLeft;
                    l({
                        before: e.scrollLeft > 1,
                        after: t > 1
                    })
                }
                ;
                t(),
                e.addEventListener("scroll", t, {
                    passive: !0
                });
                let s = new ResizeObserver(t);
                return s.observe(e),
                () => {
                    e.removeEventListener("scroll", t),
                    s.disconnect()
                }
            }
            , []);
            let o = e.filter(e => null !== e.contest);
            if (0 === o.length)
                return null;
            let c = o.length <= 3
              , d = `linear-gradient(to right, ${n.before ? "transparent" : "black"}, black ${f}, black calc(100% - ${f}), ${n.after ? "transparent" : "black"})`;
            return (0,
            t.jsx)("div", {
                ref: r,
                className: "-my-4 snap-x snap-mandatory overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                style: {
                    maskImage: d,
                    WebkitMaskImage: d
                },
                children: (0,
                t.jsx)("div", {
                    className: (0,
                    s.c)("flex gap-3", c ? "w-full" : "w-max"),
                    children: o.map(e => (0,
                    t.jsx)("div", {
                        className: (0,
                        s.c)("snap-start", c ? "min-w-72 flex-1" : "w-72 shrink-0"),
                        children: e.contest && (0,
                        t.jsx)(i.f, {
                            contest: e.contest
                        })
                    }, e.contestId))
                })
            })
        }
        e.s(["ScoreboardContests", 0, function({contests: e}) {
            let[s,i] = (0,
            a.useState)( () => Date.now())
              , r = Math.min(...e.flatMap(e => [new Date(e.startsAt).getTime(), new Date(e.endsAt).getTime()]).filter(e => e > s));
            (0,
            a.useEffect)( () => {
                if (!Number.isFinite(r))
                    return;
                let e = setTimeout( () => i(Math.max(Date.now(), r)), Math.min(r - Date.now(), 0x7fffffff));
                return () => clearTimeout(e)
            }
            , [r]);
            let n = e.filter(e => new Date(e.startsAt).getTime() <= s && s < new Date(e.endsAt).getTime()).sort( (e, t) => e.startsAt.localeCompare(t.startsAt) || e.endsAt.localeCompare(t.endsAt))[0];
            return n ? (0,
            t.jsx)(h, {
                contest: n
            }) : (0,
            t.jsx)(p, {
                contests: e
            })
        }
        ], 131484)
    }
    , 737833, e => {
        e.s(["CartProvider", () => E, "cartLines", () => z, "useCart", () => R], 737833);
        var t = e.i(441408);
        e.i(197468);
        var s = e.i(920449);
        e.i(40197);
        var a = e.i(211008)
          , i = e.i(515895)
          , r = e.i(702624)
          , n = e.i(468972)
          , l = e.i(888034)
          , o = e.i(341981);
        e.i(706761);
        var c = e.i(149615);
        e.i(927371);
        var d = e.i(407313)
          , u = e.i(689320)
          , m = e.i(485620)
          , h = e.i(756892)
          , f = e.i(359343)
          , p = e.i(435922)
          , x = e.i(68441)
          , g = e.i(42625)
          , v = e.i(983906)
          , j = e.i(811669)
          , b = e.i(324715)
          , y = e.i(529767)
          , N = e.i(873946)
          , k = e.i(236792);
        function w() {
            let e = (0,
            y.r)()
              , {lines: s, subtotal: a, currency: i, loading: r, open: l, setOpen: o} = R()
              , h = (0,
            b.usePathname)();
            return (0,
            n.useEffect)( () => {
                h && o(!1)
            }
            , [h, o]),
            (0,
            t.jsx)(u.Sheet, {
                open: l,
                onOpenChange: o,
                children: (0,
                t.jsxs)(u.SheetContent, {
                    side: "right",
                    className: "flex w-full flex-col gap-0 sm:max-w-md",
                    children: [(0,
                    t.jsx)(u.SheetHeader, {
                        children: (0,
                        t.jsx)(u.SheetTitle, {
                            children: e("store.cart_title")
                        })
                    }), r && 0 === s.length ? (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-4 px-6",
                        children: [(0,
                        t.jsx)(m.f, {
                            variant: "rounded",
                            className: "h-20 w-full"
                        }), (0,
                        t.jsx)(m.f, {
                            variant: "rounded",
                            className: "h-20 w-full"
                        })]
                    }) : 0 === s.length ? (0,
                    t.jsx)(c.f, {
                        illustration: x.f,
                        title: e("store.cart_empty_title"),
                        description: e("store.cart_empty_message"),
                        action: {
                            type: "link",
                            href: "/store",
                            label: e("store.continue_shopping_button")
                        }
                    }) : (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsx)("div", {
                            className: "flex flex-1 flex-col gap-4 overflow-y-auto px-6 pb-4",
                            children: s.map(e => (0,
                            t.jsx)(I, {
                                line: e
                            }, e.id))
                        }), (0,
                        t.jsxs)(u.SheetFooter, {
                            className: "gap-5 px-6 pb-6",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center justify-between font-medium",
                                    children: [(0,
                                    t.jsx)("span", {
                                        children: e("store.subtotal_label")
                                    }), (0,
                                    t.jsx)(N.A, {
                                        price: a,
                                        currency: i
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-muted-foreground text-xs",
                                    children: e("store.checkout_calculated_caption")
                                })]
                            }), (0,
                            t.jsx)(d.K, {
                                asChild: !0,
                                variant: "primary",
                                size: "lg",
                                className: "w-full",
                                children: (0,
                                t.jsx)(j.default, {
                                    href: "/store/checkout",
                                    onClick: () => o(!1),
                                    children: e("store.checkout_button")
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        function I({line: e}) {
            let s = (0,
            y.r)()
              , {currency: a, update: i, remove: r, setOpen: n} = R();
            return (0,
            t.jsxs)("div", {
                className: "flex h-20 gap-4",
                children: [(0,
                t.jsx)(j.default, {
                    href: `/store/products/${e.productId}`,
                    onClick: () => n(!1),
                    className: "cover-tint relative size-20 shrink-0 overflow-hidden rounded-md bg-muted",
                    style: {
                        "--cover-hue": (0,
                        k.f)(e.productId)
                    },
                    children: e.image ? (0,
                    t.jsx)(v.default, {
                        src: e.image,
                        alt: "",
                        fill: !0,
                        sizes: "5rem",
                        className: "object-cover"
                    }) : (0,
                    t.jsx)(f.f, {
                        className: "absolute inset-0 m-auto size-6 text-muted-foreground"
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-1",
                    children: [(0,
                    t.jsx)(j.default, {
                        href: `/store/products/${e.productId}`,
                        onClick: () => n(!1),
                        className: "truncate font-medium text-sm",
                        children: e.name
                    }), e.variantLabel && (0,
                    t.jsx)("span", {
                        className: "text-muted-foreground text-xs",
                        children: e.variantLabel
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-2 flex items-center gap-1",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-stretch overflow-hidden rounded-sm border",
                            children: [(0,
                            t.jsx)(d.K, {
                                variant: "ghost",
                                size: "icon-sm",
                                className: "size-[26px] rounded-none",
                                "aria-label": s("store.decrease_quantity_label"),
                                onClick: () => i(e, e.quantity - 1),
                                children: (0,
                                t.jsx)(h.f, {
                                    className: "size-3"
                                })
                            }), (0,
                            t.jsx)("span", {
                                className: "flex min-w-6 items-center justify-center px-1 text-xs tabular-nums",
                                children: e.quantity
                            }), (0,
                            t.jsx)(d.K, {
                                variant: "ghost",
                                size: "icon-sm",
                                className: "size-[26px] rounded-none",
                                "aria-label": s("store.increase_quantity_label"),
                                onClick: () => i(e, e.quantity + 1),
                                children: (0,
                                t.jsx)(p.f, {
                                    className: "size-3"
                                })
                            })]
                        }), (0,
                        t.jsx)(d.K, {
                            variant: "ghost",
                            size: "icon-sm",
                            className: "size-[26px] rounded-sm",
                            "aria-label": s("store.remove_item_label"),
                            onClick: () => r(e),
                            children: (0,
                            t.jsx)(g.f, {
                                className: "size-3"
                            })
                        })]
                    })]
                }), (0,
                t.jsx)(N.A, {
                    price: e.totalAmount,
                    currency: a,
                    className: "shrink-0 text-sm"
                })]
            })
        }
        let C = "eolymp:cart";
        function S(e) {
            return `eolymp.store.cart.${e}`
        }
        function _(e) {
            try {
                let t = window.localStorage.getItem(S(e))
                  , s = t ? JSON.parse(t) : [];
                return Array.isArray(s) ? s.filter(e => e.productId && e.quantity > 0) : []
            } catch {
                return []
            }
        }
        function M(e, t) {
            try {
                window.localStorage.setItem(S(e), JSON.stringify(t))
            } catch {}
            window.dispatchEvent(new Event(C))
        }
        var A = e.i(178626);
        function z(e) {
            return e.map(e => ({
                id: e.id,
                productId: e.product?.id ?? "",
                variantId: e.variant?.id ?? "",
                variantLabel: Object.values(e.variant?.values ?? {}).join(", "),
                name: e.product?.name ?? "",
                image: e.product?.images?.[0] ?? "",
                quantity: e.quantity,
                unitAmount: e.unitAmount,
                totalAmount: e.totalAmount
            }))
        }
        let L = (0,
        n.createContext)(null);
        function E({children: e}) {
            let c = (0,
            r.X)()
              , d = (0,
            a.useSpace)()
              , u = (0,
            s.useClient)()
              , {member: m} = (0,
            o.useSession)()
              , h = !!m?.id
              , f = d.id ?? ""
              , [p,x] = (0,
            n.useState)(!1)
              , [g,v] = (0,
            n.useState)([])
              , [j,b] = (0,
            l.t)({
                query: A.G,
                variables: {
                    member: m?.id ?? "",
                    locale: c
                },
                pause: !h || !d.features?.includes("MERCHANDISE_STORE"),
                requestPolicy: "cache-and-network"
            });
            (0,
            n.useEffect)( () => {
                let e = () => v(_(f));
                return e(),
                window.addEventListener(C, e),
                window.addEventListener("storage", e),
                () => {
                    window.removeEventListener(C, e),
                    window.removeEventListener("storage", e)
                }
            }
            , [f]);
            let y = j.data?.store.cart ?? null
              , N = (0,
            n.useCallback)( () => b({
                requestPolicy: "network-only"
            }), [b])
              , k = h ? z(y?.items ?? []) : g.map(e => ({
                id: e.id,
                productId: e.productId,
                variantId: e.variantId,
                variantLabel: e.variantLabel,
                name: e.name,
                image: e.image,
                quantity: e.quantity,
                unitAmount: e.unitAmount,
                totalAmount: e.unitAmount * e.quantity
            }))
              , I = () => new i.ShoppingService(u,d.url)
              , S = async e => {
                h ? (await I().CreateShoppingCartItem({
                    productId: e.productId,
                    variantId: e.variantId,
                    quantity: e.quantity
                }),
                N()) : function(e, t) {
                    let s = _(e)
                      , a = s.find(e => e.productId === t.productId && e.variantId === t.variantId);
                    if (a) {
                        a.quantity += t.quantity,
                        M(e, s);
                        return
                    }
                    M(e, [...s, {
                        ...t,
                        id: `${t.productId}:${t.variantId}`
                    }])
                }(f, e),
                x(!0)
            }
              , R = async (e, t) => {
                if (!h) {
                    var s;
                    let a;
                    return void (s = e.id,
                    a = _(f).map(e => e.id === s ? {
                        ...e,
                        quantity: t
                    } : e).filter(e => e.quantity > 0),
                    M(f, a))
                }
                await I().UpdateShoppingCartItem({
                    itemId: e.id,
                    quantity: t
                }),
                N()
            }
              , $ = async e => {
                if (!h) {
                    var t;
                    return void (t = e.id,
                    M(f, _(f).filter(e => e.id !== t)))
                }
                await I().DeleteShoppingCartItem({
                    itemId: e.id
                }),
                N()
            }
              , D = {
                cart: y,
                lines: k,
                count: k.reduce( (e, t) => e + t.quantity, 0),
                subtotal: h ? y?.totalAmount ?? 0 : k.reduce( (e, t) => e + t.totalAmount, 0),
                currency: y?.currency || g[0]?.currency || "",
                creditValue: y?.creditValue ?? 0,
                balance: j.data?.member?.credits?.balance ?? 0,
                signedIn: h,
                loading: h && j.fetching,
                open: p,
                setOpen: x,
                add: S,
                update: R,
                remove: $,
                refresh: N
            };
            return (0,
            t.jsxs)(L.Provider, {
                value: D,
                children: [e, (0,
                t.jsx)(w, {})]
            })
        }
        function R() {
            let e = (0,
            n.useContext)(L);
            if (!e)
                throw Error("useCart must be used inside the store");
            return e
        }
    }
    , 873946, e => {
        var t = e.i(441408);
        e.i(568677);
        var s = e.i(987681)
          , a = e.i(958947)
          , i = e.i(529767);
        e.s(["p", 0, function({credits: e, className: s}) {
            let r = (0,
            i.r)();
            return 0 === e ? null : (0,
            t.jsxs)("span", {
                className: (0,
                a.c)("text-muted-foreground tabular-nums", s),
                children: ["/ ", r("store.mints_price_label", {
                    count: e
                })]
            })
        }
        , "A", 0, function({price: e, currency: i, className: r}) {
            return (0,
            t.jsx)("span", {
                className: (0,
                a.c)("font-semibold text-primary tabular-nums", r),
                children: (0,
                t.jsx)(s.FormatMoney, {
                    value: e,
                    currency: i,
                    minor: !0
                })
            })
        }
        ])
    }
    , 294818, e => {
        var t = e.i(441408)
          , s = e.i(983906);
        e.s(["l", 0, function({country: e}) {
            return (0,
            t.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [(0,
                t.jsx)(s.default, {
                    src: e.flagUrl,
                    alt: "",
                    width: 24,
                    height: 16,
                    className: "h-4 w-6 rounded-xs object-cover"
                }), (0,
                t.jsx)("span", {
                    className: "truncate",
                    children: e.name
                })]
            })
        }
        , "z", 0, function({region: e}) {
            return (0,
            t.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [(0,
                t.jsx)(s.default, {
                    src: e.flagUrl,
                    alt: "",
                    width: 24,
                    height: 16,
                    className: "h-4 w-6 rounded-xs object-cover"
                }), (0,
                t.jsx)("span", {
                    className: "truncate",
                    children: e.name
                })]
            })
        }
        ])
    }
    , 337989, e => {
        let t = `
  fragment ContestFields on JudgeContest {
    id
    url
    slug
    visibility
    name
    imageUrl
    status
    startsAt
    allowUpsolve
    allowFollowup
    classification {
      series {
        id
      }
    }
    viewer {
      status
      unofficial
    }
  }
`
          , s = `
  ${t}

  query ListContests(
    $first: Int
    $offset: Int
    $after: String
    $search: String
    $filters: JudgeContestFilter
    $sort: String
    $order: Direction
  ) {
    contests(
      first: $first
      offset: $offset
      after: $after
      search: $search
      filters: $filters
      sort: $sort
      order: $order
      extra: ["CLASSIFICATION"]
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...ContestFields
      }
    }
  }
`
          , a = `
  query ListScoreboard($id: ID!, $mode: String, $first: Int, $offset: Int) {
    contest(id: $id) {
      scoreboard {
        modes
        columns {
          id
          type
          title
        }
        rows(mode: $mode, first: $first, offset: $offset) {
          totalCount
          nodes {
            id
            rank
            rankLength
            score
            penalty
            medal
            unofficial
            disqualified
            member(extra: ["RANK"]) {
              id
              displayName
              level
              account {
                ... on CommunityUser {
                  nickname
                  picture
                }
              }
            }
            values {
              columnId
              ... on ContestScoreboardProblemScore {
                score
                penalty
                attempts
                time
                percentage
                pending
                changed
                firstToSolve
              }
              ... on ContestScoreboardAttributeValue {
                string
                number

                country {
                  id
                  name
                  flagUrl
                }

                region {
                  id
                  name
                  flagUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
        e.s(["W", 0, t, "t", 0, s, "b", 0, a])
    }
    , 236792, e => {
        e.s(["f", 0, function(e) {
            let t = 0;
            for (let s of e)
                t = (31 * t + s.charCodeAt(0)) % 360;
            return t
        }
        ])
    }
    , 178626, e => {
        let t = `
  query ListProducts($locale: String, $first: Int, $offset: Int, $search: String) {
    store {
      products(locale: $locale, first: $first, offset: $offset, search: $search) {
        totalCount
        nodes {
          id
          name
          images
          currency
          price
          creditPrice
          outOfStock
        }
      }
    }
  }
`
          , s = `
  query ListShippingMethods($country: String!) {
    store {
      shippingMethods(country: $country) {
        id
        name
        cost
        minOrderValue
      }
    }
  }
`
          , a = `
  query DescribeCart($member: ID!, $locale: String!, $country: String, $shippingMethodId: ID) {
    member(id: $member) {
      id
      credits {
        balance
      }
    }
    store {
      cart(country: $country, shippingMethodId: $shippingMethodId) {
        id
        currency
        totalAmount
        shippingAmount
        discountAmount
        taxAmount
        grandTotal
        creditValue
        creditAmount
        creditDiscount
        payableAmount
        shippingMethodId
        shippingAddress {
          name
          phone
          country
          state
          city
          line1
          line2
          houseNumber
          postalCode
        }
        items {
          id
          quantity
          unitAmount
          totalAmount
          product(locale: $locale) {
            id
            name
            images
          }
          variant {
            id
            values
          }
        }
      }
    }
  }
`
          , i = `
  query ListOrders($first: Int, $offset: Int, $search: String) {
    store {
      orders(first: $first, offset: $offset, search: $search) {
        totalCount
        nodes {
          id
          reference
          status
          paymentStatus
          createdAt
          items {
            id
            name
            imageUrl
          }
        }
      }
    }
  }
`
          , r = `
  query DescribeOrder($order: ID!) {
    store {
      order(id: $order) {
        id
        reference
        status
        paymentStatus
        createdAt
        trackingLink
        currency
        totalAmount
        shippingAmount
        discountAmount
        taxAmount
        grandTotal
        creditAmount
        creditDiscount
        payableAmount
        shippingAddress {
          name
          phone
          country
          state
          city
          line1
          line2
          houseNumber
          postalCode
        }
        items {
          id
          name
          imageUrl
          quantityOrdered
          unitAmount
          totalAmount
          product {
            id
          }
          variant {
            id
            values
          }
        }
      }
    }
  }
`;
        e.s(["G", 0, a, "l", 0, r, "E", 0, i, "S", 0, t, "D", 0, s])
    }
    ])
}
)();
