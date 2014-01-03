var monkey = monkey || {};
monkey.Nav = function () {
    var y = $(document),
        r = $(window),
        a = $(document.body),
        I = $("header");
    $("header nav .logo");
    var z = $("header nav a"),
        l = $(".lab-link span"),
        v = $(".panel-wrapper .panel"),
        w = $(".panel-wrapper a"),
        e = $(".panel-wrapper"),
        k = $(".panels"),
        h = $(".article"),
        s = $(".blocker"),
        t = $(".arrow-wrapper");
    $("a");
    var C = $("a.postlink"),
        j = $(".close"),
        g = $(".article-background"),
        c = $(".content-background"),
        f = $(".next-button"),
        d = $(".next-button a"),
        J = $("header .about"),
        m = $("header .contact"),
        R = "navy blue red lime green purple orange".split(" "),
        p = 0,
        n = null,
        A = {}, D = "left",
        E = 0,
        S = !1,
        L = "",
        u = r.width(),
        T = !1,
        M = 0,
        F, G, ia = function () {
            if ("/" === location.pathname) K();
            else {
                D = "left";
                var b = location.pathname;
                if (b !== n) {
                    for (var a = w.length; - 1 < --a;) - 1 < w[a].href.indexOf(b) ? (D = "right", a = -1) : -1 < w[a].href.indexOf(n) && (D = "left", a = -1);
                    n = b;
                    A[n] ? "left" === D ? N() : O() : B(n, "left" === D ? N : O)
                }
            }
        }, P = function () {
            u = r.width();
            if (400 < u) {
                a.mousewheel(aa);
                E = 320 * v.length;
                k.css("width", E);
                for (var b = e.length, q = 0; q < b; ++q) $(e[q]).css("left", 320 * q)
            } else {
                0 < a.scrollLeft() && a.scrollLeft(0);
                a.unmousewheel(aa);
                k.attr("style", "");
                b = e.length;
                for (q = 0; q < b; ++q) $(e[q]).attr("style", "")
            }
        }, x = function (b) {
            for (var a = R.length; - 1 < --a;) if (-1 < b.indexOf(R[a])) return R[a];
            return ""
        }, B = function (b, a) {
            $.ajax(b).done(function (g) {
                if ("/" === b) ba($(g).find(".panels"));
                else if (-1 < b.indexOf("/page/")) {
                    var c = $(g).find(".panel-bg"),
                        j = $(g).find(".panel-wrapper");
                    g = $(g).find(".next-button a");
                    f.removeClass("loading");
                    g = g.attr("href");
                    d.attr("href", g);
                    k.append(c).append(j);
                    v = $(".panel-wrapper .panel");
                    w = $(".panel-wrapper a");
                    e = $(".panel-wrapper");
                    e.hover(U, V);
                    w.on("click", W);
                    P();
                    S = void 0 === g
                } else c = $(g).find("#content"), A[b] = c.length ? c[0] : "<h1>Hmmm... we seem to have a little problem here!</h1>", null !== a && "function" === typeof a && a(b)
            })
        }, H = function (b) {
            b && b.preventDefault();
            z.removeClass("selected");
            v.removeClass("header");
            a.removeClass("header");
            h.removeClass("header");
            I.removeClass("expand");
            k.removeClass("tint");
            s.removeClass("show");
            a.removeClass("fixed");
            m.addClass("instant");
            J.addClass("instant");
            setTimeout(function () {
                var b = $(".article .blocker.block");
                b.hasClass("show") || b.removeClass("block")
            }, 350)
        }, X = function (b, g) {
            setTimeout(function () {
                0 === g && a.scrollLeft(0);
                b.addClass("transition");
                b.css({
                    top: 0
                });
                setTimeout(function () {
                    a.removeClass("intro");
                    setTimeout(function () {
                        s.removeClass("intro")
                    }, 500)
                }, 1050)
            }, 1E3 + 90 * g)
        }, K = function () {
            a.hasClass("header") ? H() : k.hasClass("hide") ? 0 === e.length ? ($(h.find(".content")).removeClass("show"), c.removeClass("show"), $(".arrow-wrapper").addClass("hide"), j.addClass("hide"), $(".loading-wrapper").addClass("show"), setTimeout(function () {
                window.scrollTo(0,
                    0);
                $(".loading-wrapper").hasClass("show") && $(".loading").addClass("show")
            }, 350), a.addClass("fixed"), B("/", ba)) : (a.removeClass("show-article").removeClass("fixed"), $(h.find(".content")).removeClass("show"), c.removeClass("show"), $(".arrow-wrapper").addClass("hide"), j.addClass("hide"), setTimeout(ja, 350)) : (p = 0, 400 < u ? 0 === a.scrollLeft() ? a.hasClass("lab") ? ca() : da() : a.animate({
                scrollLeft: p
            }, 600, "easeOutSine") : a.animate({
                scrollTop: p
            }, 600, "easeOutSine"))
        }, ba = function (b) {
            k.html($(b[0]).html());
            v = $(".panel-wrapper .panel");
            w = $(".panel-wrapper a");
            e = $(".panel-wrapper");
            k = $(".panels");
            s = $(".blocker");
            $("a");
            d = $(".next-button a");
            P();
            e.hover(U, V);
            w.on("click", W);
            s.on("click", H);
            $(".loading").hasClass("show") ? ($(".loading").removeClass("show"), setTimeout(function () {
                $(".loading-wrapper").removeClass("show");
                K()
            }, 350)) : ($(".loading-wrapper").removeClass("show"), K())
        }, U = function () {
            if (!T && !$(this).hasClass("selected") && !a.hasClass("header")) {
                k.addClass("tint");
                for (var b = e.length; - 1 < --b;) e[b] === this && (0 < b && $(e[b - 1]).addClass("shrink-right"),
                        b < e.length - 1 && $(e[b + 1]).addClass("shrink-left"), b = -1)
            }
        }, V = function () {
            !$(this).hasClass("selected") && !a.hasClass("header") && (e.removeClass("shrink-right").removeClass("shrink-left"), k.removeClass("tint"))
        }, ka = function () {
            a.scrollLeft(0);
            k.addClass("hide");
            h.removeClass("hide");
            void 0 !== A[n] ? setTimeout(ea, 10) : (B(n, ea), $(".loading-wrapper").addClass("show"), setTimeout(function () {
                $(".loading").addClass("show")
            }, 10))
        }, aa = function (b, g) {
            a.hasClass("show-article") || (this.scrollLeft -= 30 * g, b.preventDefault())
        },
        Y = function () {
            $commentsWrapper = $("#comments-form");
            $commentForm = $("#commentform");
            $commentsSubmit = $("#target-submit");
            $commentsAuthor = $("#commentform #author");
            $commentsEmail = $("#commentform #email");
            $commentsContent = $("#commentform #comment");
            $("#commentform input").focus(function () {
                $(this).removeClass("inputError")
            });
            $commentsContent.focus(function () {
                $commentsContent.removeClass("inputError")
            });
            $leaveComment = $(".leave-comment");
            $leaveComment.click(function () {
                $commentsWrapper.hasClass("show") ? la() &&
                    $commentsSubmit.trigger("click") : ($leaveComment.text("Post comment"), $commentsWrapper.addClass("show"), setTimeout(function () {
                    a.animate({
                        scrollTop: $commentForm.offset().top - 70
                    }, 300, "easeOutSine")
                }, 300), $commentForm.ajaxForm({
                    success: function (b) {
                        var a = $(b).find("#comments ol li");

                        a.length && (a = $(a[0]).addClass("hide"), $("#comments ol").prepend(a), setTimeout(function () {
                            a.removeClass("hide")
                        }, 50))
                    },
                    clearForm: !0
                }))
            });
            try {
                twttr.widgets.load()
            } catch (b) {}
            try {
                gapi.plusone.go()
            } catch (g) {}
            try {
                FB.XFBML.parse()
            } catch (c) {}
            C =
                $("a.postlink");
            C.on("click", fa)
        }, la = function () {
            return a.hasClass("logged-in") ? !0 : 0 == $commentsAuthor.val().split(" ").join("").length ? ($commentsAuthor.addClass("inputError"), !1) : 0 == $commentsEmail.val().split(" ").join("").length ? ($commentsEmail.addClass("inputError"), !1) : 0 == $commentsContent.val().split(" ").join("").length ? ($commentsContent.addClass("inputError"), !1) : !0
        }, fa = function (b) {
            G && (b.preventDefault(), n = b.currentTarget.href, history.pushState(null, null, n), _gaq.push(["_trackPageview", window.location.pathname.substr(1)]),
                D = $(this).hasClass("previous") ? "left" : "right", A[n] ? "left" === D ? N() : O() : B(n, "left" === D ? N : O))
        }, N = function () {
            ga("hide-right", "hide-left")
        }, O = function () {
            ga("hide-left", "hide-right")
        }, ga = function (b, q) {
            g.css("top", r.scrollTop() + "px");
            var f = $(h.find(".content"));
            f.addClass(b);
            c.addClass(b);
            j.addClass(b);
            $(A[n]).find(".content");
            setTimeout(function () {
                var a = $(h.find(".content .wrapper"));
                a.html("");
                a.append(A[n]);
                Z(a);
                window.scrollTo(0, 0);
                g.css("top", "0px");
                var d = $(".panel-wrapper.selected");
                d.removeClass("selected").removeClass("bringToTop");
                400 > u || setTimeout(function () {
                    d.attr("style", "");
                    for (var b = 0; b < e.length; ++b) $(e[b]).css("left", 320 * b);
                    $(d.find(".panel")).attr("style", "");
                    setTimeout(function () {
                        var b = f.find(".post").attr("id");
                        d = $(".panel-wrapper." + b);
                        if (0 !== d.length) {
                            d.addClass("selected").addClass("bringToTop");
                            var b = r.width(),
                                a = -(parseInt(d.css("left"), 10) - p);
                            d.css({
                                "margin-left": a,
                                width: b,
                                "z-index": 3
                            });
                            $(d.find(".panel")).css({
                                left: -1 * a
                            })
                        }
                    }, 10)
                }, 10);
                f.removeClass(b).addClass("instant").addClass(q);
                c.removeClass(b).addClass("instant").addClass(q);
                j.removeClass(b).addClass("instant").addClass(q);
                setTimeout(function () {
                    f.removeClass("instant").removeClass(q);
                    c.removeClass("instant").removeClass(q);
                    j.removeClass("instant").removeClass(q);
                    Y()
                }, 10)
            }, 450);
            var d = $(A[n]).find(".color");
            g.removeClass(x(g.attr("class"))).addClass(x(d.attr("class")));
            a.removeClass(x(a.attr("class"))).addClass(x(d.attr("class")))
        }, W = function (b) {
            if (G) {
                b.preventDefault();
                n = b.currentTarget.href;
                history.pushState(null, null, n);
                a.addClass("show-article");
                b = $(this).parent();
                e.removeClass("shrink-right").removeClass("shrink-left").removeClass("bringToTop");
                k.removeClass("tint");
                a.addClass("fixed");
                var c = x(b.attr("class"));
                g.removeClass(x(g.attr("class")));
                g.addClass(c);
                a.removeClass(x(a.attr("class")));
                a.addClass(c);
                b.addClass("selected").addClass("bringToTop");
                v.addClass("hide");
                p = 400 < u ? a.scrollLeft() : a.scrollTop();
                if (400 < u) {
                    var c = r.width(),
                        d = -(b.position().left - p);
                    b.css({
                        "margin-left": d,
                        width: c,
                        "z-index": 3
                    });
                    $(b.find(".panel")).css({
                        left: -1 * d
                    })
                }
                setTimeout(ka, 350);
                void 0 ===
                    A[n] && B(n);
                f.removeClass("show")
            }
        }, ja = function () {
            $(".loading").removeClass("show");
            var b = $(".panel-wrapper.selected");
            b.removeClass("selected");
            k.removeClass("hide");
            0 === b.length ? (h.addClass("fade-out"), setTimeout(function () {
                h.addClass("hide").removeClass("fade-out")
            }, 350)) : h.addClass("hide");
            setTimeout(function () {
                b.attr("style", "");
                if (400 < u) for (var a = e.length, g = 0; g < a; ++g) $(e[g]).css("left", 320 * g);
                $(b.find(".panel")).attr("style", "");
                v.removeClass("hide")
            }, 10);
            400 < u ? a.scrollLeft(p) : a.scrollTop(p)
        },
        ea = function () {
            a.removeClass("fixed");
            a.scrollTop(0);
            $(".loading").removeClass("show");
            setTimeout(function () {
                $(".loading-wrapper").removeClass("show");
                j.removeClass("hide")
            }, 550);
            $(h.find(".content")).addClass("show");
            c.addClass("show");
            var b = $(h.find(".content .wrapper"));
            b.html("");
            b.append(A[n]);
            Z(b);
            Y()
        }, Z = function (b) {
            var a = b.find(".newer-older .older a")[0];
            (b = b.find(".newer-older .newer a")[0]) ? $(".arrow-wrapper.previous").removeClass("hide").attr("href", b.href) : $(".arrow-wrapper.previous").addClass("hide");
            a ? ($(".arrow-wrapper.next").removeClass("hide").attr("href", a.href), B(a.href, ma)) : b && ($(".arrow-wrapper.next").addClass("hide"), B(b.href, ha))
        }, ma = function (b) {
            b = $(A[b]).find(".color");
            if (b.length) {
                var a = $(".arrow-wrapper.next .bg");
                a.removeClass(x(a.attr("class"))).addClass(x(b.attr("class")))
            }(b = $(h.find(".content .wrapper")).find(".newer-older .newer a")[0]) && B(b.href, ha)
        }, ha = function (b) {
            b = $(A[b]).find(".color");
            if (b.length) {
                var a = $(".arrow-wrapper.previous .bg");
                a.removeClass(x(a.attr("class"))).addClass(x(b.attr("class")))
            }
        },
        da = function () {
            var b = (new Date).getTime();
            if (!(a.hasClass("lab") || 300 > b - M)) {
                M = b;
                a.addClass("white");
                l.text("Blog");
                f.removeClass("show");
                k.css("width", "100%");
                setTimeout(function () {
                    a.addClass("lab").addClass("lab-transition")
                }, 50);
                for (var b = e.length, g = 0; g < b; ++g) na(g);
                if (void 0 === F || null === F) F = new ColorWall;
                F.start();
                _gaq.push(["_trackPageview", "lab-coming-soon"]);
                a.removeClass(x(a.attr("class")))
            }
        }, ca = function () {
            var b = (new Date).getTime();
            if (a.hasClass("lab") && !(300 > b - M)) {
                M = b;
                a.removeClass("lab");
                l.text("Lab");
                s.addClass("lab");
                for (var b = e.length, g = 0; g < b; ++g) oa(g, Math.floor(u / 320))
            }
        }, na = function (b) {
            setTimeout(function () {
                $(e[b]).css("top", "100%")
            }, 100 * b)
        }, oa = function (b, g) {
            setTimeout(function () {
                $(e[b]).css("top", "0");
                b === g && setTimeout(function () {
                    a.hasClass("lab") || (a.removeClass("white").removeClass("lab-transition"), k.css("width", E), s.removeClass("lab"), e.css("top", "0"), F && F.stop())
                }, 350)
            }, 100 * b)
        };
    G = Modernizr.history;
    E = 320 * v.length;
    k.css("width", E);
    e.hover(U, V);
    w.on("click", W);
    z.on("click", function (b) {
        b && b.preventDefault();
        b = $(this).attr("href");
        "/" === b && a.hasClass("header") ? H() : "/" === b ? (history.pushState(null, null, "/"), K()) : "lab" === b ? a.hasClass("lab") ? ca() : da() : a.hasClass("header") && b != L ? (z.removeClass("selected"), $(this).addClass("selected"), L = b, "about" === b ? (J.removeClass("instant").removeClass("hide"), m.removeClass("instant").addClass("hide")) : (m.removeClass("instant").removeClass("hide"), J.removeClass("instant").addClass("hide"))) : a.hasClass("header") && b == L ? H() : (L = b, z.removeClass("selected"),
            $(this).addClass("selected"), v.addClass("header"), a.addClass("header"), h.addClass("header"), f.removeClass("show"), I.addClass("expand"), k.addClass("tint"), s.addClass("show").addClass("block"), a.addClass("fixed"), "about" === b ? (J.removeClass("hide"), m.addClass("hide")) : (m.removeClass("hide"), J.addClass("hide")))
    });
    s.on("click", H);
    t.on("click", fa);
    t.hover(function () {
        if (!(T || 920 > u)) {
            var b = $(this).hasClass("previous") ? "push-right" : "push-left";
            $(h.find(".content")).addClass(b);
            c.addClass(b)
        }
    }, function () {
        $(h.find(".content")).removeClass("push-right").removeClass("push-left");
        c.removeClass("push-right").removeClass("push-left")
    });
    d.on("click", function (b) {
        G && (b.preventDefault(), 400 < u ? a.animate({
            scrollLeft: p + 480
        }, 300, "easeOutSine") : a.animate({
            scrollTop: p + 0.5 * r.height()
        }, 300, "easeOutSine"))
    });
    y.ajaxError(function () {});
    j.on("click", function (b) {
        G && "/" === $(this).attr("href") && (b.preventDefault(), history.pushState(null, null, "/"), K())
    });
    y = _.throttle(P, 30);
    r.resize(y);
    y = _.throttle(function () {
        if (a.hasClass("intro")) a.scrollLeft(0);
        else {
            var b;
            if (b = !a.hasClass("show-article")) if (b = !S) b = 400 < u ? a.scrollLeft() + r.width() >= E : a.scrollTop() + 50 >= k.height() - r.height();
            b ? (S = !0, f.addClass("show"), G && (f.addClass("loading"), a.hasClass("header") && H(), p = 400 < u ? a.scrollLeft() : a.scrollTop(), B(d.attr("href")))) : (b = 400 < u ? f.hasClass("show") && a.scrollLeft() >= p + 320 : f.hasClass("show") && a.scrollTop() >= p + 320, b && f.removeClass("show"))
        }
    }, 30);
    r.scroll(y);
    if (T = !! ("ontouchstart" in window) || !! ("onmsgesturechange" in window)) {
        a.addClass("touch");
        var Q = $(".follow-wrapper");
        Q.click(function () {
            Q.hasClass("show") ?
                Q.removeClass("show") : Q.addClass("show")
        })
    }
    window.addEventListener("load", function () {
        setTimeout(function () {
            window.addEventListener("popstate", ia)
        }, 0)
    });
    $(h.find(".content"));
    if (a.hasClass("home")) {
        s.addClass("intro");
        y = e.length;
        for (t = 0; t < y; ++t) $(e[t]).css("left", 320 * t), X($(e[t]), t, t === y - 1)
    } else a.addClass("show-article"), X = $(h.find(".content .wrapper")), Z(X), c.addClass("show"), $(h.find(".content")).addClass("show"), setTimeout(function () {
            j.removeClass("hide")
        }, 550), Y();
    P()
};
ColorWall = function () {
    function y(a) {
        s = a.pageX;
        t = a.pageY
    }
    function r() {
        z.width = 10;
        z.height = 10;
        v = $(window).width();
        w = $(window).height();
        z.width = v;
        z.height = w;
        e = 40;
        k = Math.ceil(8 * e);
        C = [];
        for (var a = Math.ceil(v / e), c = Math.ceil(w / e), f = [], d = 0; d <= a; d++) {
            f[d] = [];
            for (var h = 0; h <= c; h++) {
                var m = {};
                m.x = m.ox = e * d;
                m.y = m.oy = e * h;
                C[C.length] = m;
                f[d][h] = m
            }
        }
        j = [];
        for (a = 0; a < f.length - 1; a++) {
            c = f[a].length - 1;
            for (d = 0; d < c; d++) {
                m = {};
                m.tl = f[a][d];
                m.tr = f[a][d + 1];
                m.br = f[a + 1][d + 1];
                m.bl = f[a + 1][d];
                m.color = "#" + (16777216 * Math.random() | 0).toString(16);
                var h = m,
                    l = 8 + Math.round(30 * Math.random()),
                    p = "rgb(" + (l + 15) + ", " + (l + 15) + ", " + (l + 15) + ")";
                h.color1 = "rgb(" + l + ", " + l + ", " + l + ")";
                h.color2 = p;
                j[j.length] = m
            }
        }
    }
    function a() {
        for (var a = C.length; - 1 < --a;) {
            var c = C[a],
                f = void 0,
                f = s - c.ox,
                d = t - c.oy,
                f = Math.sqrt(f * f + d * d);
            if (!(0 == f || f > k && c.x == c.ox && c.y == c.oy)) {
                var e = void 0,
                    h = void 0;
                f <= k ? (d = 180 * Math.asin(d / f) / Math.PI, s < c.ox && (d = 180 - d), d = 270 - d, e = Math.sin(d / 180 * Math.PI), d = Math.cos(d / 180 * Math.PI), f = k - 8 * (k / f - 1), f = Math.max(0.25 * k, f), e = s + e * f, h = t + d * f, f = 0.35) : (e = c.ox, h = c.oy, f = 0.1);
                c.x != e && (c.x += (e - c.x) * f);
                c.y != h && (c.y += (h - c.y) * f);
                Math.abs(c.x - e) < I && (c.x = e);
                Math.abs(c.y - h) < I && (c.y = h)
            }
        }
        l.clearRect(0, 0, v, w);
        for (a = j.length; - 1 < --a;) c = l.createLinearGradient(j[a].tl.x, j[a].tl.y, j[a].br.x, j[a].br.y), c.addColorStop(0, j[a].color1), c.addColorStop(1, j[a].color2), l.fillStyle = c, l.beginPath(), l.moveTo(j[a].tl.x, j[a].tl.y), l.lineTo(j[a].tr.x, j[a].tr.y), l.lineTo(j[a].br.x, j[a].br.y), l.lineTo(j[a].bl.x, j[a].bl.y), l.lineTo(j[a].tl.x, j[a].tl.y), l.closePath(), l.fill()
    }
    var I = 0.1,
        z, l, v, w, e, k, h, s =
            0,
        t = 0,
        C = [],
        j = [];
    z = document.getElementById("canvas");
    l = z.getContext("2d");
    return {
        start: function () {
            r();
            $(window).on("resize", r);
            $(window).on("mousemove", y);
            h = setInterval(a, 1E3 / 30)
        },
        stop: function () {
            $(window).off("resize", r);
            $(window).off("mousemove", y);
            h && clearInterval(h)
        }
    }
};
$(document).ready(function () {
    new monkey.Nav
});