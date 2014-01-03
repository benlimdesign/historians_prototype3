$(document).ready(function () {
alert("test2");
var C = $(window).width() - m;
var u = $(window).height();
var O = 1200;

$.Shortcuts.add({
        type: "down",
        mask: "down",
        handler: function () {
            keytotal = $(".key").length;
            if (z > -1 && z < (keytotal - 1)) {
                z++;
                $.scrollTo(".key:eq(" + z + ")", P, {
                    easing: "easeInOutQuart",
                    offset: 10,
                    axis: "y",
                    onAfter: function () {
                        F()
                    }
                })
            }
			alert("keke");
        }
    }).start();

function B() {
        if (C < O) {
            R()
        } else {
			alert("test");
            $("#header").removeClass("header-state");
            if (N == true) {
                N = false;
                $("#header").stop().animate({
                    paddingTop: 42
                }, P, J, function () {
                    N = true
                })
            }
            s = $("#header h1 img").attr("src");
            s = s.replace("logo-small.png", "logo.png");
            $("#header h1 img").attr("src", s);
            src = $("#header .symbol img").attr("src");
            src = src.replace("symbol-min.gif", "symbol.gif");
            $("#header .symbol img").attr("src", src)
        }
    }
    function R() {
        $("#header").addClass("header-state");
        if (N == true) {
            N = false;
            $("#header").stop().animate({
                paddingTop: 0
            }, P, J, function () {
                N = true
            })
        }
        s = $("#header h1 img").attr("src");
        s = s.replace("logo.png", "logo-small.png");
        $("#header h1 img").attr("src", s);
        src = $("#header .symbol img").attr("src");
        src = src.replace("symbol.gif", "symbol-min.gif");
        $("#header .symbol img").attr("src", src)
    }
	function S() {
        I = true;
        v()
    }
	$(window).resize(function () {
        u = $(window).height();
        C = $(window).width() - m;
    });
});