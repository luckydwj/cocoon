(() => {
  var e = {
      426: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          c = n.n(a),
          s = n(626),
          i = n.n(s),
          u = new URL(n(857), n.b),
          l = c()(o()),
          p = i()(u);
        l.push([
          e.id,
          `@font-face {\n    font-family: 'MyFont';\n    src: url(${p}) format("ttf");\n    font-weight: 600;\n    font-style: normal;     \n}\n.hello{\n    color: red;\n    font-family: 'MyFont';\n}`,
          "",
        ]);
        const d = l;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var i = this[s][0];
                  null != i && (c[i] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && c[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      626: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      522: (e) => {
        e.exports = [
          ["to", "from", "heading", "body"],
          ["Mary", "John", "Reminder", "Call Cindy on Tuesday"],
          ["Zoe", "Bill", "Reminder", "Buy orange juice"],
          ["Autumn", "Lindsey", "Letter", "I miss you"],
        ];
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, c = [], s = 0; s < e.length; s++) {
            var i = e[s],
              u = r.base ? i[0] + r.base : i[0],
              l = a[u] || 0,
              p = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var d = n(p),
              f = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            c.push(p);
          }
          return c;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var s = n(a[c]);
              t[s].references--;
            }
            for (var i = r(e, o), u = 0; u < a.length; u++) {
              var l = n(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = i;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      267: (e) => {
        e.exports = {
          note: {
            to: ["Mary"],
            from: ["John"],
            heading: ["Reminder"],
            body: ["Call Cindy on Tuesday"],
          },
        };
      },
      857: (e, t, n) => {
        "use strict";
        e.exports = n.p + "a27eec77292c75f788cc.ttf";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        a = n(569),
        c = n.n(a),
        s = n(565),
        i = n.n(s),
        u = n(216),
        l = n.n(u),
        p = n(589),
        d = n.n(p),
        f = n(426),
        m = {};
      (m.styleTagTransform = d()),
        (m.setAttributes = i()),
        (m.insert = c().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = l()),
        t()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      var h = n(267),
        v = n.n(h),
        y = n(522),
        g = n.n(y);
      const b = JSON.parse(
          '{"T":"TOML Example","c":{"u2":"Tom Preston-Werner"}}'
        ),
        T = JSON.parse('{"T":"YAML Example","c":{"u2":"Tom Preston-Werner"}}'),
        x = JSON.parse('{"T":"JSON5 Example","c":{"u2":"Tom Preston-Werner"}}');
      console.log("========="),
        console.log(b.T),
        console.log(b.c.u2),
        console.log(T.T),
        console.log(T.c.u2),
        console.log(x.T),
        console.log(x.c.u2),
        document.body.appendChild(
          (function () {
            const e = document.createElement("div");
            return (
              (e.innerHTML = "hello webapck"),
              console.log("====data==", "hello world export"),
              e.classList.add("hello"),
              console.log(v()),
              console.log(g()),
              e
            );
          })()
        );
    })();
})();
