!(function () {
  function o() {
    return (
      console.log("navigator.platform", navigator.platform),
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
        "Macintosh",
        "MacIntel",
        "MacPPC",
        "Mac68K",
        "Mac68K",
      ].some(function (o) {
        return navigator.platform === o;
      })
    );
  }
  window.vitBack = function (n) {
    !(function (n) {
      if (
        1 ===
          ((e = "frame"),
          (t = window.location.search),
          (t = t.match(new RegExp("[?&]{1}(?:" + e + "=([^&$#=]+))")))
            ? t[1]
            : "") ||
        (function () {
          try {
            return (
              window != window.top ||
              document != top.document ||
              self.location != top.location
            );
          } catch (o) {
            return !0;
          }
        })()
      )
        return;
      var e, t;
      let a = new URL(location.href);
      (n = n.replace(/{([^}]*)}/gm, function (o, n) {
        return a.searchParams.has(n) ? a.searchParams.get(n) : "";
      })),
        console.log(n);
      var i = document.createElement("iframe");
      if (
        ((i.style.width = "100%"),
        (i.id = "newsFrame"),
        (i.name = "newsFrame"),
        (i.style.height = "100vh"),
        (i.style.position = "fixed"),
        (i.style.top = 0),
        (i.style.left = 0),
        (i.style.border = "none"),
        (i.style.zIndex = 999997),
        (i.style.display = "none"),
        (i.style.backgroundColor = "#fff"),
        document.body.append(i),
        o())
      )
        for (var r = 0; 20 > r; ++r)
          window.history.pushState({ EVENT: "MIXER" }, "", window.location);
      else
        (c = function () {
          for (var o = 0; 20 > o; ++o)
            window.history.pushState({ EVENT: "MIXER" }, "", window.location);
        }),
          (l = setInterval(function () {
            var o = document.createElement("audio"),
              n = o.play();
            n instanceof Promise
              ? (o.paused || (clearInterval(l), c()),
                n.then(function (o) {}).catch(function (o) {}))
              : o.paused || (clearInterval(l), c());
          }, 100));
      var c, l;
      (window.onpopstate = function (e) {
        if (!window.has_hash) {
          console.log("t.state", e.state);
          var t = n;
          if (
            (console.log("backLink", t),
            console.log("isIos", o()),
            !o() && !e.state)
          )
            return;
          (document.body.style.overflow = "hidden"),
            (i.style.display = "block"),
            document
              .querySelectorAll("body > *:not(#newsFrame)")
              .forEach(function (o) {
                o.setAttribute("style", "display:none;");
              }),
            console.log("back url in frame", t),
            frames.newsFrame.window.location.replace(t),
            !1;
        }
      }),
        (window.onhashchange = function (o) {
          window.has_hash = !!window.location.hash;
        });
    })(n);
  };
})(window);
