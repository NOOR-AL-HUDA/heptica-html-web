var configuration = { rendererBaseUrl: "https://renderer.apester.com" };
try {
  (function () {
    !(function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var r = (n[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
      }
      var n = {};
      (t.m = e),
        (t.c = n),
        (t.i = function (e) {
          return e;
        }),
        (t.d = function (e, n, i) {
          t.o(e, n) ||
            Object.defineProperty(e, n, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (t.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = "https://static.apester.com/"),
        t((t.s = 158));
    })([
      function (e, t, n) {
        (function (t, n) {
          !(function (t, n) {
            e.exports = n();
          })(0, function () {
            "use strict";
            function e(e) {
              var t = typeof e;
              return null !== e && ("object" === t || "function" === t);
            }
            function i(e) {
              return "function" == typeof e;
            }
            function r(e) {
              U = e;
            }
            function o(e) {
              F = e;
            }
            function a() {
              return void 0 !== j
                ? function () {
                    j(l);
                  }
                : s();
            }
            function s() {
              var e = setTimeout;
              return function () {
                return e(l, 1);
              };
            }
            function l() {
              for (var e = 0; e < V; e += 2) {
                (0, G[e])(G[e + 1]), (G[e] = void 0), (G[e + 1] = void 0);
              }
              V = 0;
            }
            function c(e, t) {
              var n = this,
                i = new this.constructor(d);
              void 0 === i[K] && A(i);
              var r = n._state;
              if (r) {
                var o = arguments[r - 1];
                F(function () {
                  return T(r, i, o, n._result);
                });
              } else w(n, i, e, t);
              return i;
            }
            function u(e) {
              var t = this;
              if (e && "object" == typeof e && e.constructor === t) return e;
              var n = new t(d);
              return y(n, e), n;
            }
            function d() {}
            function p() {
              return new TypeError("You cannot resolve a promise with itself");
            }
            function f() {
              return new TypeError(
                "A promises callback cannot return that same promise."
              );
            }
            function h(e, t, n, i) {
              try {
                e.call(t, n, i);
              } catch (e) {
                return e;
              }
            }
            function m(e, t, n) {
              F(function (e) {
                var i = !1,
                  r = h(
                    n,
                    t,
                    function (n) {
                      i || ((i = !0), t !== n ? y(e, n) : b(e, n));
                    },
                    function (t) {
                      i || ((i = !0), E(e, t));
                    },
                    "Settle: " + (e._label || " unknown promise")
                  );
                !i && r && ((i = !0), E(e, r));
              }, e);
            }
            function v(e, t) {
              t._state === J
                ? b(e, t._result)
                : t._state === X
                ? E(e, t._result)
                : w(
                    t,
                    void 0,
                    function (t) {
                      return y(e, t);
                    },
                    function (t) {
                      return E(e, t);
                    }
                  );
            }
            function g(e, t, n) {
              t.constructor === e.constructor &&
              n === c &&
              t.constructor.resolve === u
                ? v(e, t)
                : void 0 === n
                ? b(e, t)
                : i(n)
                ? m(e, t, n)
                : b(e, t);
            }
            function y(t, n) {
              if (t === n) E(t, p());
              else if (e(n)) {
                var i = void 0;
                try {
                  i = n.then;
                } catch (e) {
                  return void E(t, e);
                }
                g(t, n, i);
              } else b(t, n);
            }
            function _(e) {
              e._onerror && e._onerror(e._result), I(e);
            }
            function b(e, t) {
              e._state === Z &&
                ((e._result = t),
                (e._state = J),
                0 !== e._subscribers.length && F(I, e));
            }
            function E(e, t) {
              e._state === Z && ((e._state = X), (e._result = t), F(_, e));
            }
            function w(e, t, n, i) {
              var r = e._subscribers,
                o = r.length;
              (e._onerror = null),
                (r[o] = t),
                (r[o + J] = n),
                (r[o + X] = i),
                0 === o && e._state && F(I, e);
            }
            function I(e) {
              var t = e._subscribers,
                n = e._state;
              if (0 !== t.length) {
                for (
                  var i = void 0, r = void 0, o = e._result, a = 0;
                  a < t.length;
                  a += 3
                )
                  (i = t[a]), (r = t[a + n]), i ? T(n, i, r, o) : r(o);
                e._subscribers.length = 0;
              }
            }
            function T(e, t, n, r) {
              var o = i(n),
                a = void 0,
                s = void 0,
                l = !0;
              if (o) {
                try {
                  a = n(r);
                } catch (e) {
                  (l = !1), (s = e);
                }
                if (t === a) return void E(t, f());
              } else a = r;
              t._state !== Z ||
                (o && l
                  ? y(t, a)
                  : !1 === l
                  ? E(t, s)
                  : e === J
                  ? b(t, a)
                  : e === X && E(t, a));
            }
            function O(e, t) {
              try {
                t(
                  function (t) {
                    y(e, t);
                  },
                  function (t) {
                    E(e, t);
                  }
                );
              } catch (t) {
                E(e, t);
              }
            }
            function S() {
              return Q++;
            }
            function A(e) {
              (e[K] = Q++),
                (e._state = void 0),
                (e._result = void 0),
                (e._subscribers = []);
            }
            function P() {
              return new Error("Array Methods must be provided an Array");
            }
            function k(e) {
              return new $(this, e).promise;
            }
            function C(e) {
              var t = this;
              return new t(
                D(e)
                  ? function (n, i) {
                      for (var r = e.length, o = 0; o < r; o++)
                        t.resolve(e[o]).then(n, i);
                    }
                  : function (e, t) {
                      return t(
                        new TypeError("You must pass an array to race.")
                      );
                    }
              );
            }
            function N(e) {
              var t = this,
                n = new t(d);
              return E(n, e), n;
            }
            function M() {
              throw new TypeError(
                "You must pass a resolver function as the first argument to the promise constructor"
              );
            }
            function R() {
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              );
            }
            function L() {
              var e = void 0;
              if (void 0 !== n) e = n;
              else if ("undefined" != typeof self) e = self;
              else
                try {
                  e = Function("return this")();
                } catch (e) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var t = e.Promise;
              if (t) {
                var i = null;
                try {
                  i = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if ("[object Promise]" === i && !t.cast) return;
              }
              e.Promise = ee;
            }
            var x = void 0;
            x = Array.isArray
              ? Array.isArray
              : function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
            var D = x,
              V = 0,
              j = void 0,
              U = void 0,
              F = function (e, t) {
                (G[V] = e), (G[V + 1] = t), 2 === (V += 2) && (U ? U(l) : q());
              },
              B = "undefined" != typeof window ? window : void 0,
              W = B || {},
              z = W.MutationObserver || W.WebKitMutationObserver,
              Y =
                "undefined" == typeof self &&
                void 0 !== t &&
                "[object process]" === {}.toString.call(t),
              H =
                "undefined" != typeof Uint8ClampedArray &&
                "undefined" != typeof importScripts &&
                "undefined" != typeof MessageChannel,
              G = new Array(1e3),
              q = void 0;
            q = Y
              ? (function () {
                  return function () {
                    return t.nextTick(l);
                  };
                })()
              : z
              ? (function () {
                  var e = 0,
                    t = new z(l),
                    n = document.createTextNode("");
                  return (
                    t.observe(n, { characterData: !0 }),
                    function () {
                      n.data = e = ++e % 2;
                    }
                  );
                })()
              : H
              ? (function () {
                  var e = new MessageChannel();
                  return (
                    (e.port1.onmessage = l),
                    function () {
                      return e.port2.postMessage(0);
                    }
                  );
                })()
              : void 0 === B
              ? (function () {
                  try {
                    var e = Function("return this")().require("vertx");
                    return (j = e.runOnLoop || e.runOnContext), a();
                  } catch (e) {
                    return s();
                  }
                })()
              : s();
            var K = Math.random().toString(36).substring(2),
              Z = void 0,
              J = 1,
              X = 2,
              Q = 0,
              $ = (function () {
                function e(e, t) {
                  (this._instanceConstructor = e),
                    (this.promise = new e(d)),
                    this.promise[K] || A(this.promise),
                    D(t)
                      ? ((this.length = t.length),
                        (this._remaining = t.length),
                        (this._result = new Array(this.length)),
                        0 === this.length
                          ? b(this.promise, this._result)
                          : ((this.length = this.length || 0),
                            this._enumerate(t),
                            0 === this._remaining &&
                              b(this.promise, this._result)))
                      : E(this.promise, P());
                }
                return (
                  (e.prototype._enumerate = function (e) {
                    for (var t = 0; this._state === Z && t < e.length; t++)
                      this._eachEntry(e[t], t);
                  }),
                  (e.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor,
                      i = n.resolve;
                    if (i === u) {
                      var r = void 0,
                        o = void 0,
                        a = !1;
                      try {
                        r = e.then;
                      } catch (e) {
                        (a = !0), (o = e);
                      }
                      if (r === c && e._state !== Z)
                        this._settledAt(e._state, t, e._result);
                      else if ("function" != typeof r)
                        this._remaining--, (this._result[t] = e);
                      else if (n === ee) {
                        var s = new n(d);
                        a ? E(s, o) : g(s, e, r), this._willSettleAt(s, t);
                      } else
                        this._willSettleAt(
                          new n(function (t) {
                            return t(e);
                          }),
                          t
                        );
                    } else this._willSettleAt(i(e), t);
                  }),
                  (e.prototype._settledAt = function (e, t, n) {
                    var i = this.promise;
                    i._state === Z &&
                      (this._remaining--,
                      e === X ? E(i, n) : (this._result[t] = n)),
                      0 === this._remaining && b(i, this._result);
                  }),
                  (e.prototype._willSettleAt = function (e, t) {
                    var n = this;
                    w(
                      e,
                      void 0,
                      function (e) {
                        return n._settledAt(J, t, e);
                      },
                      function (e) {
                        return n._settledAt(X, t, e);
                      }
                    );
                  }),
                  e
                );
              })(),
              ee = (function () {
                function e(t) {
                  (this[K] = S()),
                    (this._result = this._state = void 0),
                    (this._subscribers = []),
                    d !== t &&
                      ("function" != typeof t && M(),
                      this instanceof e ? O(this, t) : R());
                }
                return (
                  (e.prototype.catch = function (e) {
                    return this.then(null, e);
                  }),
                  (e.prototype.finally = function (e) {
                    var t = this,
                      n = t.constructor;
                    return i(e)
                      ? t.then(
                          function (t) {
                            return n.resolve(e()).then(function () {
                              return t;
                            });
                          },
                          function (t) {
                            return n.resolve(e()).then(function () {
                              throw t;
                            });
                          }
                        )
                      : t.then(e, e);
                  }),
                  e
                );
              })();
            return (
              (ee.prototype.then = c),
              (ee.all = k),
              (ee.race = C),
              (ee.resolve = u),
              (ee.reject = N),
              (ee._setScheduler = r),
              (ee._setAsap = o),
              (ee._asap = F),
              (ee.polyfill = L),
              (ee.Promise = ee),
              ee
            );
          });
        }.call(t, n(64), n(38)));
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        }
        function r() {
          var e = !1;
          return (
            (function (t) {
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                t
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  t.substr(0, 4)
                )) &&
                (e = !0);
            })(navigator.userAgent || navigator.vendor || window.opera),
            e
          );
        }
        function o() {
          return window.innerWidth - document.documentElement.clientWidth;
        }
        function a() {
          var e = r(navigator.userAgent || navigator.vendor || window.opera),
            t = (0, q.isWebview)(
              navigator.userAgent || navigator.vendor || window.opera
            );
          return (
            (e ? "mobile" : "desktop") + (t ? "-webview" : "")
          ).toLowerCase();
        }
        function s() {
          return (
            (window.pmc_adm_gpt && window.pmc_adm_gpt.is_direct_sold) ||
            !![]
              .concat(
                i(
                  document.querySelectorAll(
                    "div.pmc-frontend-components.badges-sponsored-content"
                  )
                )
              )
              .find(function (e) {
                return "branded content" === e.innerText.toLowerCase();
              }) ||
            -1 !== X.indexOf((0, G.extractCanonicalUrlOrHref)())
          );
        }
        function l() {
          return [
            "fansided.com",
            "www.mentalfloss.com",
            "www.floor8.com",
            "www.12up.com",
            "www.90min.com",
            "www.dbltap.com",
          ].includes(window.document.domain);
        }
        function c() {
          return (window.location.href || "").match(
            /indiewire.com|variety.com|rollingstone.com|hollywoodlife.com|goldderby.com|footwearnews.com|tvline.com|qmerce.github.io|pmcqa/g
          );
        }
        function u() {
          return ee || (ee = new Date().getSeconds()), ee;
        }
        function d(e, t) {
          var n = t.createElement("link");
          n.setAttribute("rel", "preconnect"),
            n.setAttribute("href", e),
            n.setAttribute("crossorigin", ""),
            t.getElementsByTagName("head")[0].appendChild(n);
        }
        function p() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }
        function f() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.height,
            n = e.width,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = i.height,
            o = i.width;
          return t === r && n === o;
        }
        function h() {
          return (0, q.getMobileOperatingSystem)(
            navigator.userAgent || navigator.vendor || window.opera
          );
        }
        function m() {
          var e = navigator.userAgent,
            t = e.indexOf("MSIE ") > -1 || e.indexOf("Trident/") > -1,
            n = e.indexOf("Edge/"),
            i = n > -1,
            r = !0;
          if (i) {
            parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) <= 17 &&
              (r = !1);
          }
          return !t && r;
        }
        function v() {
          var e =
            (window.document.location && window.document.location.origin) || "";
          return e.match(
            /(renderer.stg.apester.com)|(renderer.apester.com)|(renderer.qmerce.com)|(renderer.apester.local.com)|(player.apester.local.com)/
          )
            ? encodeURIComponent(window.document.referrer)
            : encodeURIComponent(
                "" +
                  e +
                  (window.document.location &&
                    window.document.location.pathname)
              );
        }
        function g(e) {
          var t = [];
          return (
            Object.keys(e).forEach(function (n) {
              t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            }),
            t.join("&")
          );
        }
        function y() {
          return Q || (Q = p());
        }
        function _() {
          return (Q = p());
        }
        function b(e) {
          return (
            e && (e.hasAttribute("preview") || e.hasAttribute("data-preview"))
          );
        }
        function E(e, t, n) {
          var i = e.clientWidth,
            r = void 0,
            o = void 0;
          if ($)
            (r = i),
              r > 600
                ? ((r = 600), (o = Math.ceil(r * n)))
                : r > 320 && ((r = 320), (o = 179));
          else {
            var a = "story" === t ? 400 : 600;
            (r = i < a ? i : a), (o = Math.ceil(r * n));
          }
          return (
            0 === r && ((r = 320), (o = 179)),
            (o && 0 !== o) || (o = 179),
            { width: r, height: o }
          );
        }
        function w(e, t) {
          return {
            marginBelow: e && t ? 10 : 5,
            marginAbove: e && !t ? 10 : 5,
          };
        }
        function I(e) {
          var t = window.location.href;
          e = e.replace(/[\[\]]/g, "\\$&");
          var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            i = n.exec(t);
          return i
            ? i[2]
              ? decodeURIComponent(i[2].replace(/\+/g, " "))
              : ""
            : null;
        }
        function T() {
          return {
            trackingEnabled: "true" === I("trackingEnabled") || !0,
            advertisingId: I("advertisingId") || "",
            bundleId: I("bundleId") || "",
            appName: I("appName") || "",
            appStoreUrl: I("appStoreUrl") || "",
            appVersion:
              I("appVersion") || I("apesterInappAndroidSDK") || void 0,
            sdkVersion:
              I("sdkVersion") || I("apesterInappAndroidSDK") || void 0,
            gdprString: I("gdprString"),
          };
        }
        function O(e) {
          c() &&
            window.top.addEventListener("message", function t(n) {
              n &&
                n.data &&
                n.data.type === te &&
                (e(), window.top.removeEventListener(te, t));
            });
        }
        function S() {
          return ie && "ios" === h();
        }
        function A() {
          return ie && "android" === h();
        }
        function P(e, t) {
          if (!e()) return !1;
          var n = T(),
            i = n.sdkVersion;
          return !i || i < t;
        }
        function k() {
          return P(
            S,
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Z.MIN_IOS_SDK_VERSION_IN_UNIT_VIDEO_ADS
          );
        }
        function C(e) {
          return !ne && P(A, e);
        }
        function N() {
          return (
            k(K.MIN_IOS_SDK_VERSION_CO_VIDEO_ADS) ||
            C(K.MIN_ANDROID_SDK_VERSION_CO_VIDEO_ADS)
          );
        }
        function M(e) {
          (e.style.pointerEvents = "none"),
            (e.style.position = "relative"),
            (e.style.width = "1px"),
            (e.style.height = "1px");
        }
        function R(e, t) {
          var n = t.width,
            i = t.height;
          (e.style.position = "relative"),
            (e.style.pointerEvents = "auto"),
            (e.style.width = n + "px"),
            (e.style.height = i + "px");
        }
        function L(e, t, n) {
          var i = {};
          return (
            (i.reason = oe(e === H.default.START)),
            (i.companionCustomParam = n ? "" + t.detail.cpm : "0"),
            (i.monBidder = n ? "" + t.detail.bidder : "" + t.advertiserId),
            (i.monTriggerType = e),
            z({}, i)
          );
        }
        function x(e) {
          if (e && e.companionOptions && e.companionOptions.settings) {
            var t = e.companionOptions.video || {},
              n = t.companion,
              i = t.companion_below,
              r = t.enabled,
              o = n || {},
              a = o.enabled,
              s = i || {},
              l = s.enabled;
            return r && (a || l) && !re();
          }
          return !1;
        }
        function D() {
          var e = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
          return !!e && parseInt(e[1]) <= 70;
        }
        function V(e, t) {
          return e ? [0, 0] : t ? [10, 10] : [20, 20];
        }
        function j(e, t) {
          e.style.height = t + "px";
        }
        function U() {
          return "true" === I("apesterDebug");
        }
        function F(e) {
          var t = e || {},
            n = t.campaignData;
          if (n && n.companionOptions && n.companionOptions.settings) {
            var i = e.campaignData.companionOptions,
              r = i.enabled,
              o = i.settings.bannerAdProvider;
            return r && "minuteMedia" === o;
          }
          return !1;
        }
        function B(e) {
          return Object.entries(e).reduce(function (e, t) {
            var n = W(t, 2),
              i = n[0],
              r = n[1];
            return void 0 === r ? e : ((e[i] = r), e);
          }, {});
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getInstanceId =
            t.createCompanionReportObj =
            t.getPixelAmountFromViewabilityOptions =
            t.getReasonReport =
            t.safePostMessageToIframe =
            t.isPMCDisabledAds =
            t.extractTextFromHtmlStr =
            t.isApesterInapp =
            t.isTimeDomain =
            t.KILL_APESTER_ADS_EVENT =
            t.isMobile =
              void 0);
        var W = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          z =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        (t.getScrollBarWidth = o),
          (t.getPlatform = a),
          (t.isPMCExcludePage = s),
          (t.isMinuteMediaOwnedDomain = l),
          (t.isPmcGroupDomain = c),
          (t.getSessionSeconds = u),
          (t.preconnect = d),
          (t.createUuid = p),
          (t.isAdsSizeEqual = f),
          (t.getOS = h),
          (t.isStripSupported = m),
          (t.getPageUrl = v),
          (t.encodeQueryParameters = g),
          (t.getSessionId = y),
          (t.regenerateSession = _),
          (t.isPreviewMode = b),
          (t.getCompanionVideoAdSize = E),
          (t.getVideoAdMargin = w),
          (t.getUrlParameterByName = I),
          (t.getMobileInAppParams = T),
          (t.listenToKillPMCAdsEvent = O),
          (t.isIOSInApp = S),
          (t.isAndroidInApp = A),
          (t.isIOSInAppMonetizationBlocked = k),
          (t.isAndroidInAppMonetizationBlocked = C),
          (t.isInAppCompanionVideoAdsBlocked = N),
          (t.hideCompanionPlayer = M),
          (t.showCompanionPlayer = R),
          (t.getCustomDisplayReportParams = L),
          (t.isVideoEnabled = x),
          (t.isFirefoxLessThan70 = D),
          (t.getCompanionMargin = V),
          (t.changeHeight = j),
          (t.isLogDebugMode = U),
          (t.isMinuteMediaCompanion = F),
          (t.filterUndefinedValuesInObject = B);
        var Y = n(13),
          H = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(Y),
          G = n(4),
          q = n(45),
          K = n(74),
          Z = n(2),
          J = ["www.nme.com"],
          X = [
            "https://www.rollingstone.com/music/music-news/jennifer-nettles-country-women-shaping-future-968026/",
            "https://www.rollingstone.com/tv/tv-news/retta-good-girls-parks-rec-tv-968741/",
            "https://www.rollingstone.com/music/music-news/lauren-jauregui-interview-women-shaping-future-968864/",
            "https://www.rollingstone.com/culture/culture-news/women-shaping-future-josee-grace-potter-katori-hall-966844/",
          ],
          Q = void 0,
          $ = (t.isMobile = r()),
          ee = void 0,
          te = (t.KILL_APESTER_ADS_EVENT = "kill_apester_ads_event"),
          ne =
            ((t.isTimeDomain = function (e) {
              return J.includes && J.includes(e);
            }),
            -1 !== window.location.href.indexOf("in-app-unit-detached")),
          ie = (t.isApesterInapp = (function () {
            return (
              (window.location.href || "").match(
                new RegExp("https://faststrip.apester.com", "g")
              ) || ne
            );
          })()),
          re =
            ((t.extractTextFromHtmlStr = function (e) {
              var t = document.createElement("span");
              return (t.innerHTML = e), t.textContent || t.innerText;
            }),
            (t.isPMCDisabledAds = function () {
              return c() && s();
            })),
          oe =
            ((t.safePostMessageToIframe = function (e, t) {
              e && e.contentWindow && e.contentWindow.postMessage(t, "*");
            }),
            (t.getReasonReport = function (e, t) {
              return t
                ? Z.MON_START_REASONS.MIDROLL
                : e
                ? Z.MON_START_REASONS.IDLE
                : Z.MON_START_REASONS.IDLE_LOOP;
            }));
        (t.getPixelAmountFromViewabilityOptions = function (e, t, n) {
          var i = void 0;
          if (e && t && n) {
            var r = e.companion,
              o = e.video,
              a = "companion" === n ? r : o;
            i = ["sr", "sr_v2"].includes(t) ? a.va : a.da;
          }
          return i;
        }),
          (t.createCompanionReportObj = function (e, t, n) {
            var i =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              r =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : void 0,
              o = t.interactionId,
              a = t.publisherId,
              s = t.campaignData.companionCampaignOptions,
              l = s.companionCampaignId,
              c = {
                monType: e,
                monTriggerType: i ? H.default.START : H.default.REFRESH,
                publisherId: a,
                companionCampaignId: l,
                interactionId: o,
                isStrip: "" + n,
                reason: oe(i),
                consentString: r,
              };
            return z({}, c);
          }),
          (t.getInstanceId = function (e) {
            return (
              !!e.getAttribute("data-instance-id") &&
              e.getAttribute("data-instance-id")
            );
          });
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = "https://static.apester.com/js/assets";
        (t.VIDEO_ASPECT_RATIO = 1.77777778),
          (t.MAX_Z_INDEX_FULLSCREEN = 2147483647),
          (t.DESKTOP_STORY_HEIGHT = 640),
          (t.MAX_Z_INDEX = 2147483644),
          (t.HEADER_HEIGHT = 65),
          (t.FOOTER_HEIGHT = 50),
          (t.MONETIZATION_EVENTS = {
            player_mon_impression_pending: "player_mon_impression_pending",
            player_mon_loading_pending: "player_mon_loading_pending",
            player_mon_loading_pass: "player_mon_loading_pass",
            player_mon_impression: "player_mon_impression",
            player_mon_playing: "player_mon_playing",
            player_mon_loading_impression_failed:
              "player_mon_loading_impression_failed",
            player_mon_stopped: "player_mon_stopped",
            player_mon_loading_failed: "player_mon_loading_failed",
            player_mon_skipped: "player_mon_skipped",
            player_mon_viewable_start: "player_mon_viewable_start",
            player_mon_viewable_complete: "player_mon_viewable_complete",
          }),
          (t.ENGINE_NAME_TO_ICON_URL_MAP = {
            story: i + "/icon-story.svg",
            poll: i + "/icon-poll.svg",
            "multi poll two": i + "/icon-poll.svg",
            quiz: i + "/icon-quiz.svg",
            "multi trivia two": i + "/icon-quiz.svg",
            personality: i + "/icon-personality.svg",
            "personality quiz two": i + "/icon-personality.svg",
            gallery: i + "/icon-gallery.svg",
            "video trivia": i + "/icon-video.svg",
          }),
          (t.APESTER_INAPP_VIEWABILITY = "apester_view_status_change"),
          (t.MON_STOP_REASONS = {
            VIDEO_AD: "VIDEO_AD",
            VIDEO_AD_IN_BG: "VIDEO_AD_IN_BG",
            END: "END",
            SKIP: "SKIP",
            VIEWABILITY: "VIEWABILITY",
            RUNTIME_ERROR: "RUNTIME_ERROR",
            CLOSE_STRIP: "CLOSE_STRIP",
          }),
          (t.MON_START_REASONS = {
            IDLE: "IDLE",
            MIDROLL: "MIDROLL",
            IDLE_LOOP: "IDLE_LOOP",
          }),
          (t.PLAYER_TYPES = { DISPLAY: "da", VIDEO: "va" }),
          (t.LOAD_PLAYER_ON = {
            NEAR: "near",
            VIEW: "view",
            LOAD: "load",
            ENGAGE: "engage",
          }),
          (t.VIEWABILITY = {
            THRESHOLDS: {
              ON_FULL_VIEW: 1,
              ON_80_PERCENT: 0.8,
              ON_50_PERCENT: 0.5,
              ON_10_PERCENT: 0.1,
            },
            DEFAULTS: {
              DISPLAY_TIME_IN_VIEW: 8,
              DISPLAY_TIME_BETWEEN_ADS: 30,
              DISTANCE_FROM_VIEWPORT: "200px 0px 200px 0px",
              DISTANCE_FROM_VIEWPORT_TOP: 200,
              DISTANCE_FROM_VIEWPORT_BOTTOM: 200,
              DISTANCE_FROM_VIEWPORT_LEFT: 0,
              DISTANCE_FROM_VIEWPORT_RIGHT: 0,
            },
          }),
          (t.APESTER_LOGO_URL = i + "/logo-white.svg"),
          (t.INTERSECTION_OBSERVER_POLYFILL_URL =
            "https://static.apester.com/js/lib/intersection-observer.js"),
          (t.GERMAN_PUBLISHERS = {
            "5f22a068350c9cabe1eb443e": !0,
            "5ad092c7e16efe17aa4fb822": !0,
            "5de7851072793266fd04a0ce": !0,
            "5d8488205f9d7beb2b9f9fcf": !0,
            "5d8488892853884ab8e400e3": !0,
            "5d8488cd4625b3568f5f15e5": !0,
            "5d8489314644baefe5491828": !0,
            "5d84898c5f9d7b34899f9fd1": !0,
            "5d8489d44644ba54d949182a": !0,
            "5d848a625f9d7b299c9f9fd3": !0,
            "5d848a9a4644ba7c3349182c": !0,
            "5d848ae34625b31bbd5f15ea": !0,
            "5e2597979915bfea17104606": !0,
            "58c551f76a67357e3b4aa944": !0,
          }),
          (t.MIN_IOS_SDK_VERSION_IN_UNIT_VIDEO_ADS = "2.8.3"),
          (t.BOTTOM_AD_ENGINE_DENYLIST = [
            "story",
            "video trivia",
            "video-personality",
          ]);
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          Y = e.toString();
        }
        function r(e) {
          var t = (0, j.getSessionId)();
          return {
            consumerSessionId: t,
            sessionId: t,
            language: e.navigator.userLanguage || e.navigator.language,
            referrer: encodeURIComponent(e.document.location.href),
            current_url: e.location.href,
            screenHeight: "" + e.screen.height,
            screenWidth: "" + e.screen.width,
          };
        }
        function o(e) {
          e &&
            e.data &&
            "ape_sessionId" === e.data.type &&
            ((z = e.data.sessionId), window.removeEventListener("message", o));
        }
        function a(e) {
          switch (e) {
            case B.EVENTS_TYPES.apester_component_position:
            case B.EVENTS_TYPES.apester_sdk_loaded:
            case B.EVENTS_TYPES.apester_sdk_strip_timeout:
            case B.EVENTS_TYPES.apester_sdk_display_ready:
            case B.EVENTS_TYPES.apester_sdk_display_failed:
            case B.EVENTS_TYPES.apester_sdk_perf_monitor:
            case B.EVENTS_TYPES.article_exclude:
            case B.EVENTS_TYPES.GDPR_timeout:
            case B.EVENTS_TYPES.GDPR_success:
            case B.EVENTS_TYPES.GDPR_success_V:
            case B.EVENTS_TYPES.GDPR_cookie_success:
            case B.EVENTS_TYPES.GDPR_cookie_success_V:
            case B.EVENTS_TYPES.GDPR_failure:
            case B.EVENTS_TYPES.CCPA_timeout:
            case B.EVENTS_TYPES.CCPA_success:
            case B.EVENTS_TYPES.CCPA_failure:
            case B.EVENTS_TYPES.privacy_not_apply:
            case B.EVENTS_TYPES.tcf_v2_probe:
            case F.MONETIZATION_EVENTS.player_mon_impression_pending:
            case F.MONETIZATION_EVENTS.player_mon_loading_pending:
            case F.MONETIZATION_EVENTS.player_mon_loading_pass:
            case F.MONETIZATION_EVENTS.player_mon_impression:
            case F.MONETIZATION_EVENTS.player_mon_playing:
            case F.MONETIZATION_EVENTS.player_mon_loading_impression_failed:
            case F.MONETIZATION_EVENTS.player_mon_stopped:
            case F.MONETIZATION_EVENTS.player_mon_loading_failed:
            case F.MONETIZATION_EVENTS.player_mon_skipped:
            case F.MONETIZATION_EVENTS.player_mon_viewable_start:
            case F.MONETIZATION_EVENTS.player_mon_viewable_complete:
              return {
                eventCategory: "publish",
                eventType: "engagement",
                eventElement: "action",
              };
            default:
              return { eventCategory: "publish", eventType: "default" };
          }
        }
        function s(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : r(window),
            i = arguments[3],
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 6,
            s = x(
              {},
              t,
              {
                sdkVersion: "4.4.49",
                sdkType: "s",
                canonicalUrl: H,
                hasAdBlock: Y,
                performanceTimestamp:
                  "" + (0, U.getCurrentPerformanceTimestamp)(),
              },
              a(e)
            ),
            l = { sessionId: z, event: e, properties: s, metadata: n };
          return D.eventDispatcher.dispatch(l, i, o).catch(function (e) {});
        }
        function l(e, t, n, i) {
          if ("none" !== e.parentNode.style.display) {
            var r = e.closest("body") ? e.closest("body") : e.closest("html"),
              o = e.getBoundingClientRect(),
              a = {
                channelId: n,
                interactionId: i,
                componentType: t,
                screenHeight: window.screen.height.toString(),
                screenWidth: window.screen.width.toString(),
                pageHeight: r.getBoundingClientRect().height.toString(),
                pageWidth: r.getBoundingClientRect().width.toString(),
                pixelsLeft: o.left.toString(),
                pixelsTop: (o.top - r.getBoundingClientRect().top).toString(),
                componentHeight: o.height.toString(),
                componentWidth: o.width.toString(),
              };
            s(B.EVENTS_TYPES.apester_component_position, a);
          }
        }
        function c() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return JSON.stringify(
            e &&
              e.map(function (e) {
                return { article_tag: e };
              })
          );
        }
        function u(e) {
          if (!e) return null;
          var t = new Date(e).getTime();
          return Math.round(t / 1e3).toString();
        }
        function d(e) {
          s(F.MONETIZATION_EVENTS.player_mon_viewable_start, e);
        }
        function p(e) {
          s(F.MONETIZATION_EVENTS.player_mon_viewable_complete, e);
        }
        function f() {
          var e = (0, W.isArticlePage)(),
            t = { isArticle: e.toString() };
          if (e) {
            var n = (0, W.extractTags)();
            n && n.length > 0 && (t.articleTags = c(n)),
              (t.articleImage = (0, W.extractImage)()),
              (t.articleTitle = (0, W.extractTitle)()),
              (t.articleDescription = (0, W.extractDescription)());
            var i = (0, W.extractPublishedTime)(),
              r = (0, W.extractModifiedTime)();
            (t.articlePublishedTime = u(i)),
              (t.articleModifiedTime = u(r)),
              (0, W.addPropsForSpecialWebsites)(t);
          }
          s(B.EVENTS_TYPES.apester_sdk_loaded, t, void 0, !1);
        }
        function h() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          s(B.EVENTS_TYPES.apester_sdk_strip_timeout, e, void 0, !0);
        }
        function m(e) {
          var t = {
            embedType: e.embedType,
            interactionId: e.interactionId,
            publisherId: e.publisherId,
            creatorId: e.userId,
            engine: e.layout && e.layout.directive,
          };
          s(B.EVENTS_TYPES.apester_sdk_display_ready, t, void 0, !0);
        }
        function v(e, t) {
          var n = {};
          t
            ? ((n.channelToken = e), (n.embedType = "playlist"))
            : ((n.interactionId = e), (n.embedType = "editorial")),
            s(B.EVENTS_TYPES.apester_sdk_display_failed, n, void 0, !1);
        }
        function g() {
          s(B.EVENTS_TYPES.article_exclude, {});
        }
        function y(e, t, n) {
          var i = {
            publisherId: e,
            companionCampaignId: t,
            monType: n,
            isStrip: !0,
            reason: "SKIP",
            monProvider: "co",
          };
          s(F.MONETIZATION_EVENTS.player_mon_stopped, i);
        }
        function _(e, t) {
          s(e, t);
        }
        function b(e, t) {
          (t.monProvider = "co"), s(e, t);
        }
        function E(e) {
          b(F.MONETIZATION_EVENTS.player_mon_impression, e);
        }
        function w(e) {
          b(F.MONETIZATION_EVENTS.player_mon_impression_pending, e);
        }
        function I(e) {
          b(F.MONETIZATION_EVENTS.player_mon_loading_pending, e);
        }
        function T(e) {
          b(F.MONETIZATION_EVENTS.player_mon_loading_impression_failed, e);
        }
        function O(e) {
          b(F.MONETIZATION_EVENTS.player_mon_loading_pass, e);
        }
        function S(e) {
          b(F.MONETIZATION_EVENTS.player_mon_loading_failed, e);
        }
        function A(e) {
          b(F.MONETIZATION_EVENTS.player_mon_stopped, e);
        }
        function P(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          s(B.EVENTS_TYPES.GDPR_success, { publisherId: e }),
            s("" + B.EVENTS_TYPES.GDPR_success_V + t, { publisherId: e });
        }
        function k(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          s(B.EVENTS_TYPES.GDPR_cookie_success, { publisherId: e }),
            s("" + B.EVENTS_TYPES.GDPR_cookie_success_V + t, {
              publisherId: e,
            });
        }
        function C(e) {
          s(B.EVENTS_TYPES.GDPR_failure, { publisherId: e });
        }
        function N(e) {
          s(B.EVENTS_TYPES.CCPA_success, { publisherId: e });
        }
        function M(e) {
          s(B.EVENTS_TYPES.CCPA_failure, { publisherId: e });
        }
        function R(e) {
          s(B.EVENTS_TYPES.privacy_not_apply, { publisherId: e });
        }
        function L() {
          s(B.EVENTS_TYPES.tcf_v2_probe, {});
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var x =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
        (t.setHasAdblock = i),
          (t.metadataFactory = r),
          (t.sendLog = s),
          (t.sendPositionLog = l),
          (t.trackViewabilityMeasurmentStart = d),
          (t.trackViewabilityMeasurmentCompleted = p),
          (t.sendLoadedEvent = f),
          (t.sendStripTimeout = h),
          (t.sendDisplayReadyEvent = m),
          (t.sendDisplayFailedEvent = v),
          (t.sendArticeExclude = g),
          (t.slidingAdSkipped = y),
          (t.monetizationEvent = _),
          (t.companionImpression = E),
          (t.companionImpressionPending = w),
          (t.companionLoadingPending = I),
          (t.companionImpressionFailed = T),
          (t.companionLoadingSuccess = O),
          (t.companionLoadingFailed = S),
          (t.companionImpressionStopped = A),
          (t.trackGdprSuccess = P),
          (t.trackGdprCookieSuccess = k),
          (t.trackGdprFailure = C),
          (t.trackCcpaSuccess = N),
          (t.trackCcpaFailure = M),
          (t.trackPrivacyNotApply = R),
          (t.trackTCFv2Probe = L),
          n(100);
        var D = n(28),
          V = n(4),
          j = n(1),
          U = n(14),
          F = n(2),
          B = n(40),
          W = n(107);
        n(104);
        var z = void 0,
          Y = void 0,
          H = (0, V.extractCanonicalUrlOrHref)();
        window.addEventListener("message", o);
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e) {
          return e.querySelector("link[rel='canonical']")
            ? e
                .querySelector("link[rel='canonical']")
                .getAttribute("href")
                .trim()
            : void 0;
        }
        function o() {
          var e = document.createElement("a");
          return (
            (e.href = r(window.document) || window.location.hostname),
            e.hostname.trim()
          );
        }
        function a() {
          return r(document) || document.location.href;
        }
        function s(e) {
          var t = (0, h.map)(function (t) {
            var n = e.getElementsByTagName(t);
            return (0, h.toArray)(n);
          })(["interaction", "apester-media"]);
          return (0, h.filter)(function (e) {
            return e.length;
          })(t);
        }
        function l(e) {
          var t = (0, h.map)(function (t) {
            var n = e.getElementsByClassName(t);
            return (0, h.toArray)(n);
          })(["apester-media"]);
          return (0, h.filter)(function (e) {
            return e.length;
          })(t);
        }
        function c(e) {
          var t = s(e),
            n = l(e),
            i = (0, h.concat)(n)(t);
          return (0, h.flattenArray)(i);
        }
        function u(e) {
          var t = e.getElementsByClassName("apester-strip");
          return (0, h.toArray)(t);
        }
        function d(e) {
          return u(e);
        }
        function p(e) {
          var t = e.getElementsByClassName("apester-board");
          return (0, h.toArray)(t);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var f = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        (t.extractHostnameFromCanonicalUrlOrWindow = o),
          (t.extractCanonicalUrlOrHref = a),
          (t.getInteractionElements = c),
          (t.getStripElements = d),
          (t.getBoardElements = p);
        var h = n(32),
          m = (function () {
            function e() {
              i(this, e), (this.canonicalUrl_ = void 0);
            }
            return (
              f(e, [
                {
                  key: "canonicalUrl",
                  get: function () {
                    return this.canonicalUrl_ || a();
                  },
                },
              ]),
              e
            );
          })();
        t.default = m;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t, n, i) {
          var o = this;
          return new r(function (r, a) {
            if (e.document.getElementById(i))
              return void r.bind(o, "script already loaded");
            var s = e.document.createElement("script");
            (s.src = t),
              i && (s.id = i),
              (s.onload = r.bind(o, s)),
              (s.onerror = a.bind(o, s)),
              n ? n.appendChild(s) : e.document.body.appendChild(s);
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadScript = i);
        var r = "undefined" == typeof Promise ? n(0).Promise : Promise;
      },
      function (e, t, n) {
        (function (t) {
          var n = function (e) {
            return e && e.Math == Math && e;
          };
          e.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof t && t) ||
            Function("return this")();
        }.call(t, n(38)));
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getInExpConsentConfiguration =
            t.getIdleOptions =
            t.loadApesterFonts =
            t.extractVideoCampaignIdFromModel =
            t.extractViewabilityOptions =
            t.getAdContainerSizeAndPosition =
            t.getVideoAdSize =
            t.getInteractionSize =
              void 0);
        var r = n(2),
          o = n(1),
          a = (t.getInteractionSize = function (e) {
            var t = e.data.size;
            return o.isMobile ? t.mobile || t : t.desktop || t;
          }),
          s = (t.getVideoAdSize = function (e, t) {
            var n = a(e),
              i = n.width,
              o = t ? t.getBoundingClientRect().width : i,
              s = Math.min(i, o);
            return { width: s, height: s / r.VIDEO_ASPECT_RATIO };
          }),
          l =
            ((t.getAdContainerSizeAndPosition = function (e, t, n, r) {
              var a = r && !o.isMobile,
                s =
                  e && !a
                    ? [].concat(i(n.parentNode.childNodes)).find(function (e) {
                        return [].concat(i(e.classList)).find(function (e) {
                          return "fullscreen" === e;
                        });
                      })
                    : t,
                l = s.getBoundingClientRect(),
                c = l.width,
                u = l.height,
                d = void 0,
                p = void 0,
                f = void 0;
              if (a) {
                (f =
                  "calc(50% - " +
                  (c / 2 - (0, o.getScrollBarWidth)() / 2) +
                  "px)"),
                  (p = "50%"),
                  (d = "translateY(-50%)");
              } else (f = e ? 0 : null), (p = e ? 0 : null);
              return {
                width: c + "px",
                height: u + "px",
                left: f,
                transform: d,
                top: p,
                position: e ? "fixed" : "absolute",
              };
            }),
            (t.extractViewabilityOptions = function (e) {
              if (e.campaignData && e.campaignData.viewabilityOptions)
                return e.campaignData.viewabilityOptions;
            }),
            (t.extractVideoCampaignIdFromModel = function (e) {
              if (e.campaignData && e.campaignData.videoCampaignOptions)
                return e.campaignData.videoCampaignOptions.videoCampaignId;
            })),
          c = (t.loadApesterFonts = function () {
            var e = document.head,
              t = document.createElement("link");
            (t.type = "text/css"),
              (t.rel = "stylesheet"),
              (t.href = "https://static.apester.com/fonts/fonts.general.css"),
              e.appendChild(t);
          }),
          u =
            ((t.getIdleOptions = function (e) {
              var t = "da" === e.player.type,
                n = e.requests.find(function (e) {
                  return "idle" === e.type;
                });
              return n
                ? { maxAds: n.options.count, requestTimeout: n.options.timeout }
                : { maxAds: t ? 1 : 5, requestTimeout: t ? 30 : 0 };
            }),
            (t.getInExpConsentConfiguration = function (e) {
              if (e.campaignData && e.campaignData.videoCampaignOptions)
                return e.campaignData.videoCampaignOptions
                  .consentConfigurations;
            }));
        t.default = {
          getInteractionSize: a,
          getVideoAdSize: s,
          extractVideoCampaignIdFromModel: l,
          loadApesterFonts: c,
          getInExpConsentConfiguration: u,
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getPauseVideoWhenOutOfViewObserver =
            t.setLoadTriggerPromise =
            t.getViewabilityObserver =
            t.getIntersactionObserverRootMarginString =
              void 0);
        var i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          o = n(5),
          a = n(2),
          s = "undefined" == typeof Promise ? n(0).Promise : Promise,
          l = "undefined" != typeof IntersectionObserver,
          c = {
            timeInView: 0,
            distanceFromViewport: "0px",
            threshold: a.VIEWABILITY.THRESHOLDS.ON_10_PERCENT,
            destroyObserverOnEnter: !0,
            onExit: function () {},
            onEnter: function () {},
            onCompleted: function () {},
            inViewTimeout: void 0,
          },
          u = (t.getIntersactionObserverRootMarginString = function () {
            return (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.VIEWABILITY.DEFAULTS.DISTANCE_FROM_VIEWPORT_TOP) +
              "px " +
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.VIEWABILITY.DEFAULTS.DISTANCE_FROM_VIEWPORT_RIGHT) +
              "px " +
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : a.VIEWABILITY.DEFAULTS.DISTANCE_FROM_VIEWPORT_BOTTOM) +
              "px " +
              (arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.VIEWABILITY.DEFAULTS.DISTANCE_FROM_VIEWPORT_LEFT) +
              "px"
            );
          }),
          d = function (e, t, n, i) {
            r(n, 1)[0].isIntersecting
              ? (t.onEnter(),
                (t.inViewTimeout = setTimeout(function () {
                  e(),
                    t.destroyObserverOnEnter && i.disconnect(),
                    t.onCompleted();
                }, t.timeInView)))
              : (t.onExit(), clearTimeout(t.inViewTimeout));
          },
          p = function (e, t, n, i, r) {
            var o = new IntersectionObserver(function (n, i) {
              d(r ? function () {} : e, t, n, i);
            }, n);
            if ((o.observe(i), r)) return e(o);
          },
          f = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = i({}, c, t),
              o = {
                threshold: r.threshold,
                rootMargin: r.distanceFromViewport,
              };
            return new s(function (t) {
              return p(t, r, o, e, n);
            });
          },
          h = (t.getViewabilityObserver = function () {
            return new s(function (e) {
              if (l) return void e(f);
              (0, o.loadScript)(
                window,
                a.INTERSECTION_OBSERVER_POLYFILL_URL
              ).then(function () {
                return e(f);
              });
            });
          });
        (t.setLoadTriggerPromise = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.type,
            o = n.configuration,
            l =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            c = void 0,
            d = { threshold: a.VIEWABILITY.THRESHOLDS.ON_10_PERCENT },
            p = { threshold: 0, distanceFromViewport: u() };
          switch (r) {
            case a.LOAD_PLAYER_ON.VIEW:
              c = e(t, i({}, d, l));
              break;
            case a.LOAD_PLAYER_ON.NEAR:
              var f = o.pixelsFromUnit,
                h = u(f, 0, f, 0);
              c = e(t, i({}, p, l, { distanceFromViewport: h }));
              break;
            case a.LOAD_PLAYER_ON.LOAD:
            case a.LOAD_PLAYER_ON.ENGAGE:
            default:
              c = s.resolve();
          }
          return c;
        }),
          (t.getPauseVideoWhenOutOfViewObserver = function (e, t, n) {
            if (n) {
              var i = function (e) {
                var n = e.data;
                if (
                  n &&
                  n.type &&
                  n.type === a.APESTER_INAPP_VIEWABILITY &&
                  t &&
                  !t.disposed
                ) {
                  n.isVisible ? t.play() : t.pause();
                }
              };
              return (
                window.addEventListener("message", i),
                window.__apesterIsVisible &&
                  !window.__apesterIsVisible() &&
                  t.pause(),
                s.resolve({
                  disconnect: function () {
                    return window.removeEventListener("message", i);
                  },
                })
              );
            }
            var r = {
              destroyObserverOnEnter: !1,
              onExit: function () {
                t.pause();
              },
              onEnter: function () {
                t.play();
              },
            };
            return h().then(function (t) {
              return t(e, r, !0);
            });
          });
        t.default = h;
      },
      function (e, t, n) {
        "use strict";
        function i() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        function r() {
          return (
            i() +
            i() +
            "-" +
            i() +
            "-" +
            i() +
            "-" +
            i() +
            "-" +
            i() +
            i() +
            i()
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.s4 = i),
          (t.guid = r);
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getConsent = void 0);
        var r = n(26),
          o = n(69),
          a = i(o),
          s = n(67),
          l = i(s),
          c = n(3),
          u = "undefined" == typeof Promise ? n(0).Promise : Promise,
          d = void 0,
          p = void 0,
          f = void 0,
          h = { gdpr: { gdpr: 0, gdprString: "" }, inAppMacros: {} },
          m = function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return t >= r.BG_CONSENT_LOOP_MAX_RETRIES
              ? f
              : d.getConsent().then(function (n) {
                  return (
                    n
                      ? ((p[d.constructor.CONSENT_TYPE.toLowerCase()] = n),
                        (f = u.resolve(p)),
                        d.trackSuccess(),
                        d.destroy())
                      : setTimeout(function () {
                          e((t += 1));
                        }, r.BG_CONSENT_LOOP_TIMEOUT),
                    f
                  );
                });
          },
          v = void 0,
          g = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.CONSENT_BAILOUT_TIMEOUT;
            return new u(function (t) {
              v = setTimeout(function () {
                (v = void 0), d.trackFailure(), t();
              }, e);
            });
          },
          y = function (e) {
            return u.race([m(), g(e)]).then(function () {
              return v && window.clearTimeout(v), p;
            });
          },
          _ = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = e.gdpr,
              r = e.ccpa,
              o = n.timeoutForRetrieval;
            (p = {
              gdpr: i
                ? a.default.DEFAULT_CONSENT
                : a.default.CONSENT_DOES_NOT_APPLY,
              ccpa: r
                ? l.default.DEFAULT_CONSENT
                : l.default.CONSENT_DOES_NOT_APPLY,
            }),
              i || r
                ? ((d = i ? new a.default(t) : new l.default(t)), (f = y(o)))
                : ((0, c.trackPrivacyNotApply)(t), (f = u.resolve(p)));
          },
          b = void 0,
          E = (t.getConsent = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {
                      timeoutForRetrieval: r.CONSENT_BAILOUT_TIMEOUT,
                      shouldRetrieveConsent: !0,
                    },
              i = n.shouldRetrieveConsent;
            return void 0 === i || i
              ? (b || (_(t, e, n), (b = !0)), f)
              : u.resolve(h);
          });
        t.default = E;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.syncAdBelowOpen = function (e, t) {
          window.postMessage(
            { type: "apester_ad_open", size: { width: e, height: t } },
            "*"
          );
        }),
          (t.syncAdBelowClosed = function () {
            window.postMessage({ type: "apester_ad_closed" }, "*");
          }),
          (t.syncAdsCompleted = function () {
            window.postMessage({ type: "apester_ads_completed" }, "*");
          });
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          var t = void 0;
          return (
            (t =
              "rtk" === e.monType || "gpt" === e.monType
                ? u
                : o.isMobile
                ? d
                : p),
            (t.onEnter = function () {
              return (0, s.trackViewabilityMeasurmentStart)(e);
            }),
            (t.onCompleted = function () {
              return (0, s.trackViewabilityMeasurmentCompleted)(e);
            }),
            t
          );
        }
        function r(e, t) {
          var n = i(t);
          return (0, c.default)().then(function (t) {
            return t(e, n, !0);
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
        var o = n(1),
          a = n(2),
          s = n(3),
          l = n(8),
          c = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(l),
          u = {
            threshold: a.VIEWABILITY.THRESHOLDS.ON_50_PERCENT,
            timeInView: 1e3,
          },
          d = {
            threshold: a.VIEWABILITY.THRESHOLDS.ON_80_PERCENT,
            timeInView: 5e3,
          },
          p = {
            threshold: a.VIEWABILITY.THRESHOLDS.ON_50_PERCENT,
            timeInView: 2e3,
          };
      },
      function (e, t, n) {
        "use strict";
        e.exports = { START: "start", REFRESH: "refresh" };
      },
      function (e, t, n) {
        "use strict";
        function i() {
          var e = window.performance,
            t = -1;
          return e && (t = e.now()), t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendPerformanceLog = void 0);
        var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
        t.getCurrentPerformanceTimestamp = i;
        var o = n(3),
          a = n(28),
          s = n(9),
          l = n(4),
          c = n(40),
          u = (0, l.extractCanonicalUrlOrHref)();
        t.sendPerformanceLog = (function () {
          var e = (0, s.guid)(),
            t = function () {};
          return (
            (0, a.passThrottle)(!0) &&
              (t = function (t, n) {
                var a = r(
                  {
                    sdkVersion: "4.4.49",
                    sdkType: "s",
                    logSessionId: e,
                    action: t,
                  },
                  n,
                  {
                    performanceTimestamp: "" + i(),
                    readyState: document.readyState,
                    canonicalUrl: u,
                  }
                );
                return (0, o.sendLog)(
                  c.EVENTS_TYPES.apester_sdk_perf_monitor,
                  a,
                  void 0,
                  !0
                );
              }),
            t
          );
        })();
      },
      function (e, t, n) {
        var i = n(16),
          r = n(35),
          o = n(48);
        e.exports = i
          ? function (e, t, n) {
              return r.f(e, t, o(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      function (e, t, n) {
        var i = n(17);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      function (e, t) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return n.call(e, t);
        };
      },
      function (e, t) {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BaseElement = void 0);
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(1),
          a = "undefined" == typeof Promise ? n(0).Promise : Promise;
        t.BaseElement = (function () {
          function e(t, n) {
            i(this, e),
              (this.layer = t),
              (this.params = n),
              (this.abstractType = n.type),
              (this.type = n.provider.type),
              (this.version = n.provider.version),
              (this.options = n.provider.options),
              (this.isMobile = o.isMobile),
              (this.element = t.element),
              (this.layoutWidth_ = -1),
              (this.inViewport_ = !1),
              (this.win = this.element.ownerDocument.defaultView),
              (this.preconnect = null),
              (this.config = null),
              (this.resources_ = null);
          }
          return (
            r(e, [
              { key: "closeUnit", value: function () {} },
              {
                key: "getResources",
                value: function () {
                  return this.resources_;
                },
              },
              {
                key: "getLayoutWidth",
                value: function () {
                  return this.layoutWidth_;
                },
              },
              {
                key: "isInViewport",
                value: function () {
                  return this.inViewport_;
                },
              },
              { key: "createdCallback", value: function () {} },
              {
                key: "firstAttachedCallback",
                value: function () {
                  this.parent = this.element.parentElement;
                },
              },
              { key: "buildCallback", value: function () {} },
              {
                key: "preconnectCallback",
                value: function (e) {
                  return a.resolve();
                },
              },
              { key: "detachedCallback", value: function () {} },
              {
                key: "createPlaceholderCallback",
                value: function () {
                  return null;
                },
              },
              {
                key: "layoutCallback",
                value: function () {
                  return a.resolve();
                },
              },
              {
                key: "firstLayoutCompleted",
                value: function () {
                  this.togglePlaceholder(!1);
                },
              },
              { key: "viewportCallback", value: function (e) {} },
              { key: "pauseCallback", value: function () {} },
              { key: "resumeCallback", value: function () {} },
              {
                key: "playCallback",
                value: function () {
                  return a.resolve();
                },
              },
              {
                key: "engagementCallback",
                value: function () {
                  return a.reject();
                },
              },
              {
                key: "unlayoutCallback",
                value: function () {
                  return !1;
                },
              },
              {
                key: "loadPromise",
                value: (function (e) {
                  function t(t, n) {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function (e, t) {
                  return loadPromise(e, t);
                }),
              },
              {
                key: "getPlaceholder",
                value: function () {
                  return this.element.getPlaceholder();
                },
              },
              { key: "togglePlaceholder", value: function (e) {} },
              {
                key: "getFallback",
                value: function () {
                  return this.element.getFallback();
                },
              },
              {
                key: "remove",
                value: function () {
                  this.element.remove();
                },
              },
              {
                key: "toggleFallback",
                value: function (e) {
                  this.element.toggleFallback(e);
                },
              },
              {
                key: "registerEvent",
                value: function (e, t) {
                  console.log("Register event not implemented");
                },
              },
            ]),
            e
          );
        })();
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function a(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        function s(e, t) {
          var n = c(e);
          return (function (e) {
            function n(e) {
              return (
                r(this, n),
                o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
              );
            }
            return (
              a(n, e),
              d(n, [
                {
                  key: "elementName",
                  value: function () {
                    return t;
                  },
                },
              ]),
              n
            );
          })(n);
        }
        function l(e, t) {
          var n = e.createElement("img");
          switch (t) {
            case "strip":
              v.isMobile &&
                ((n.src = m.default), n.classList.add("strip-loader-mobile")),
                n.classList.add("strip-loader");
              break;
            case "interaction":
            default:
              (n.src = f.default), n.classList.add("interaction-loader");
          }
          return n;
        }
        function c(e) {
          if (e.APESTER.BaseCustomElementClass)
            return e.APESTER.BaseCustomElementClass;
          var t = (function () {
            function t(n) {
              r(this, t),
                (this.params = n),
                (this.element = e.document.createElement("apester-layer")),
                this.createdCallback();
            }
            return (
              d(t, [
                {
                  key: "createdCallback",
                  value: function () {
                    (this.built_ = !1),
                      (this.readyState = "loading"),
                      (this.resources_ = null),
                      (this.layout_ = null),
                      (this.layoutWidth_ = -1),
                      (this.layoutCount_ = 0),
                      (this.isFirstLayoutCompleted_ = !0),
                      (this.isInViewport_ = !1),
                      (this.loadingState_ = void 0),
                      (this.loadingContainer_ = null),
                      (this.loadingElement_ = null);
                    var e = g[this.elementName()];
                    (this.implementation_ = new e(this, this.params)),
                      this.implementation_.createdCallback(),
                      (this.actionQueue_ = []);
                  },
                },
                {
                  key: "getAbstractType",
                  value: function () {
                    return this.implementation_.abstractType;
                  },
                },
                {
                  key: "getType",
                  value: function () {
                    return this.implementation_.type;
                  },
                },
                {
                  key: "getVersion",
                  value: function () {
                    return this.implementation_.version;
                  },
                },
                { key: "elementName", value: function () {} },
                {
                  key: "getResources",
                  value: function () {
                    return this.resources_;
                  },
                },
                {
                  key: "isBuilt",
                  value: function () {
                    return this.built_;
                  },
                },
                {
                  key: "build",
                  value: function () {
                    if (!this.isBuilt()) {
                      try {
                        this.implementation_.buildCallback(),
                          this.preconnect(!1),
                          (this.built_ = !0),
                          this.element.classList.add("apester-layer"),
                          "board" === this.params.type &&
                            this.element.classList.add("board-scroll");
                      } catch (e) {
                        return void console.error(e);
                      }
                      this.built_ &&
                        this.isInViewport_ &&
                        this.updateInViewport_(!0);
                    }
                  },
                },
                {
                  key: "preconnect",
                  value: function (e) {
                    e && this.implementation_.preconnectCallback(e);
                  },
                },
                {
                  key: "updateLayoutBox",
                  value: function (e) {
                    (this.layoutWidth_ = e.width),
                      this.isLoadingEnabled_() &&
                        (this.isInViewport_ && this.toggleLoading_(!0),
                        this.prepareLoading_());
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    this.implementation_.firstAttachedCallback();
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    this.implementation_.detachedCallback();
                  },
                },
                {
                  key: "dispatchCustomEvent",
                  value: function (e, t) {
                    var n = t || {},
                      i = this.element.ownerDocument.defaultView,
                      r = i.document.createEvent("Event");
                    (r.data = n),
                      r.initEvent(e, !0, !0),
                      this.element.dispatchEvent(r);
                  },
                },
                {
                  key: "createPlaceholder",
                  value: function () {
                    return this.implementation_.createPlaceholderCallback();
                  },
                },
                { key: "getLayoutBox", value: function () {} },
                { key: "getResourceId", value: function () {} },
                {
                  key: "layoutCallback",
                  value: function () {
                    var e = this;
                    if (this.isBuilt()) {
                      var t = this.implementation_.layoutCallback();
                      return (
                        this.preconnect(!0),
                        this.element.classList.add("apester-layout"),
                        t.then(
                          function () {
                            (e.readyState = "complete"),
                              e.layoutCount_++,
                              e.toggleLoading_(!1, !0),
                              e.isFirstLayoutCompleted_ &&
                                (e.implementation_.firstLayoutCompleted(),
                                (e.isFirstLayoutCompleted_ = !1));
                          },
                          function (t) {
                            throw (
                              (e.layoutCount_++, e.toggleLoading_(!1, !0), t)
                            );
                          }
                        )
                      );
                    }
                  },
                },
                {
                  key: "viewportCallback",
                  value: function (e) {
                    (this.isInViewport_ = e),
                      0 == this.layoutCount_ && (e || this.toggleLoading_(!1)),
                      this.isBuilt() && this.updateInViewport_(e);
                  },
                },
                {
                  key: "updateInViewport_",
                  value: function (e) {
                    (this.implementation_.inViewport_ = e),
                      this.implementation_.viewportCallback(e);
                  },
                },
                {
                  key: "pauseCallback",
                  value: function () {
                    this.isBuilt() && this.implementation_.pauseCallback();
                  },
                },
                {
                  key: "resumeCallback",
                  value: function () {
                    this.isBuilt() && this.implementation_.resumeCallback();
                  },
                },
                {
                  key: "playCallback",
                  value: function () {
                    return this.implementation_.playCallback();
                  },
                },
                {
                  key: "engagementCallback",
                  value: function () {
                    return this.implementation_.engagementCallback();
                  },
                },
                {
                  key: "unlayoutCallback",
                  value: function () {
                    if (!this.isBuilt()) return !1;
                    var e = this.implementation_.unlayoutCallback();
                    return (
                      e &&
                        ((this.layoutCount_ = 0),
                        (this.isFirstLayoutCompleted_ = !0)),
                      e
                    );
                  },
                },
                {
                  key: "unlayoutOnPause",
                  value: function () {
                    return this.implementation_.unlayoutOnPause();
                  },
                },
                {
                  key: "enqueAction",
                  value: function (e) {
                    assertNotTemplate(this),
                      this.isBuilt()
                        ? this.executionAction_(e, !1)
                        : dev().assert(this.actionQueue_).push(e);
                  },
                },
                {
                  key: "dequeueActions_",
                  value: function () {
                    var e = this;
                    if (this.actionQueue_) {
                      var t = dev().assert(this.actionQueue_);
                      (this.actionQueue_ = null),
                        t.forEach(function (t) {
                          e.executionAction_(t, !0);
                        });
                    }
                  },
                },
                {
                  key: "executionAction_",
                  value: function (e, t) {
                    try {
                      this.implementation_.executeAction(e, t);
                    } catch (t) {
                      rethrowAsync(
                        "Action execution failed:",
                        t,
                        e.target.tagName,
                        e.method
                      );
                    }
                  },
                },
                {
                  key: "getPlaceholder",
                  value: function () {
                    return parent.lastElementChild;
                  },
                },
                {
                  key: "togglePlaceholder",
                  value: function (e) {
                    if ((assertNotTemplate(this), e)) {
                      var t = this.getPlaceholder();
                      t && t.classList.remove("apester-hidden");
                    } else
                      for (
                        var n = dom.childElementsByAttr(this, "placeholder"),
                          i = 0;
                        i < n.length;
                        i++
                      )
                        n[i].classList.add("apester-hidden");
                  },
                },
                {
                  key: "isLoadingEnabled_",
                  value: function () {
                    return !(
                      this.layoutWidth_ < 100 ||
                      this.layoutCount_ < 0 ||
                      "stripPWA" === this.params.provider.type
                    );
                  },
                },
                {
                  key: "prepareLoading_",
                  value: function () {
                    if (!this.loadingContainer_) {
                      var e = this.element.ownerDocument,
                        t = -1 !== window.location.href.indexOf("7days"),
                        n = e.createElement("div");
                      n.classList.add("apester-loading-container");
                      var i = "";
                      (i = t
                        ? e.createElement("span")
                        : l(e, this.params.type)),
                        v.isMobile &&
                          (n.classList.add("apester-loading-container-mobile"),
                          n.appendChild(i)),
                        this.element.appendChild(n),
                        (this.loadingContainer_ = n),
                        (this.loadingElement_ = i);
                    }
                  },
                },
                {
                  key: "toggleLoading_",
                  value: function (e, t) {
                    var n = this;
                    if (
                      ((this.loadingState_ = e), e || this.loadingContainer_)
                    ) {
                      if (e && !this.isLoadingEnabled_())
                        return void (this.loadingState_ = !1);
                      !(function () {
                        var e = n.loadingState_;
                        if (
                          (e && !n.isLoadingEnabled_() && (e = !1),
                          e && n.prepareLoading_(),
                          n.loadingContainer_ &&
                            (n.loadingContainer_.classList.toggle(
                              "apester-hidden",
                              !e
                            ),
                            n.loadingElement_.classList.toggle(
                              "apester-active",
                              e
                            ),
                            !e && t))
                        ) {
                          n.loadingContainer_;
                          (n.loadingContainer_ = null),
                            (n.loadingElement_ = null);
                        }
                      })();
                    }
                  },
                },
                {
                  key: "registerEvent",
                  value: function (e, t) {
                    this.implementation_.registerEvent(e, t);
                  },
                },
                {
                  key: "closeUnit",
                  value: function () {
                    this.implementation_.closeUnit();
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    this.implementation_.remove();
                  },
                },
              ]),
              t
            );
          })();
          return (
            (e.APESTER.BaseCustomElementClass = t),
            e.APESTER.BaseCustomElementClass
          );
        }
        function u(e, t, n) {
          g[t] = n;
          var i = s(e, t);
          window.APESTER[t] = i;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var d = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        t.registerElement = u;
        var p = n(118),
          f = i(p),
          h = n(120),
          m = i(h),
          v = n(1),
          g = {};
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          return e.getAttribute("adunit") || t;
        }
        function r() {
          var e = {
            initMethod: g,
            displayMethod: E,
            getSizesList: function (e) {
              return e.settings
                ? e.settings.options.bannerSizes.map(function (e) {
                    var t = e.split("x"),
                      n = a(t, 2),
                      i = n[0],
                      r = n[1];
                    return { w: parseInt(i), h: parseInt(r) };
                  })
                : [];
            },
          };
          return (
            ((0, l.isMinuteMediaOwnedDomain)() || (0, l.isLogDebugMode)()) &&
              (e = {
                initMethod: v,
                displayMethod: b,
                getSizesList: function (e) {
                  return e.settings
                    ? e.settings.options.bannerSizes.map(function (e) {
                        return e.split("x").map(function (e) {
                          return parseInt(e, 10);
                        });
                      })
                    : [];
                },
              }),
            e
          );
        }
        function o(e, t, n, i) {
          return new p(function (r, o) {
            var a = document.getElementById("inunit-ad-iframe");
            a && a.remove();
            var s = i.join(","),
              c = {
                channelId: t,
                refresh: !0,
                adUnit: n,
                refreshSeconds: 30,
                adSizes: s,
              },
              u = Math.max.apply(
                null,
                i.map(function (e) {
                  return e.split("x")[0];
                })
              ),
              d = Math.max.apply(
                null,
                i.map(function (e) {
                  return e.split("x")[1];
                })
              ),
              p = document.createElement("iframe");
            p.setAttribute("frameborder", "0"),
              p.setAttribute("id", "inunit-ad-iframe"),
              p.setAttribute("title", "InUnit Ad IFrame"),
              p.setAttribute("allowtransparency", "true"),
              (p.style.marginTop = "190px"),
              (p.style.width = u + "px"),
              (p.style.height = d + "px"),
              (p.src =
                "https://www.kicker.de/apester-stories-inapp?" +
                (0, l.encodeQueryParameters)(c)),
              (p.onload = function () {
                setTimeout(r, 2500);
              }),
              document.getElementById(e).appendChild(p);
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.displayBrowsi =
            t.initBrowsi =
            t.createInstreamOnUnitContainer =
            t.getInStreamOnUnitContainerCSS =
            t.CHANNELS_PREVENTED_FROM_LOADING_BROWSI =
            t.MINUTE_MEDIA_AD_SERVED_EVENT =
            t.BROWSI_AD_SERVED_EVENT =
              void 0);
        var a = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        (t.selectAdUnit = i),
          (t.getMinuteMediaAdProvider = r),
          (t.setupInAppKickerIFrame = o);
        var l = n(1),
          c = n(5),
          u = n(43),
          d = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(u),
          p = "undefined" == typeof Promise ? n(0).Promise : Promise,
          f = (t.BROWSI_AD_SERVED_EVENT = "browsiAdImpression"),
          h = (t.MINUTE_MEDIA_AD_SERVED_EVENT = "displayManagerAdImpression"),
          m = (t.CHANNELS_PREVENTED_FROM_LOADING_BROWSI = [
            "5eb2e7d1b3bcec5f6cdf78a5",
            "5e84c6649096d9672365c2e3",
            "5e84c67501045df1650d7d53",
          ]),
          v =
            ((t.getInStreamOnUnitContainerCSS = function (e, t, n) {
              var i = ["ar", "he"],
                r = { overflow: "hidden", position: "absolute" };
              return (
                (r = l.isMobile
                  ? s({}, r, { width: 170, height: 130, bottom: -15, right: 1 })
                  : e
                  ? s({}, r, { width: 350, height: 230, bottom: 1, right: 1 })
                  : s({}, r, { width: 240, height: 140, bottom: 1, right: 1 })),
                i.includes(n) && ((r.right = void 0), (r.left = 1)),
                Object.entries(r).forEach(function (e) {
                  var t = a(e, 2),
                    n = t[0],
                    i = t[1];
                  r[n] = Number.isInteger(i) ? i + "px" : i;
                }),
                r
              );
            }),
            (t.createInstreamOnUnitContainer = function (e) {
              var t = document.createElement("div");
              (0, l.isTimeDomain)(window.document.domain) &&
                t.classList.add("apester-element"),
                Object.entries(e).forEach(function (e) {
                  var n = a(e, 2),
                    i = n[0],
                    r = n[1];
                  t.style[i] = r;
                });
              var n = (0, d.default)(!0);
              return (
                (n.style.top = "20px"),
                (n.style.right = "0px"),
                (n.style.opacity = 1),
                (n.style.lineHeight = ""),
                (n.style.backgroundColor = "transparent"),
                (t.closeButton = n),
                t.appendChild(n),
                t
              );
            }),
            function (e) {
              return new p(function (e, t) {
                return window.mmDisplayManager
                  ? e()
                  : ((window.mmDisplayManager = { cmd: [] }),
                    (0, c.loadScript)(
                      window,
                      "https://assets.minutemediacdn.com/prebid/display-manager-core-1.0.0.js",
                      void 0,
                      "APESTER_MINUTE_MEDIA"
                    )
                      .then(e)
                      .catch(t));
              });
            }),
          g = (t.initBrowsi = function (e) {
            return new p(function (t, n) {
              return window.browsitag ||
                ((window.browsitag = {}),
                (window.browsitag.cmd = []),
                m.includes(e))
                ? t()
                : (0, c.loadScript)(
                    window,
                    "https://middycdn-a.akamaihd.net/master/apester.js",
                    void 0,
                    "APESTER_MINUTE_MEDIA"
                  )
                    .then(t)
                    .catch(n);
            });
          }),
          y = function (e, t, n, i, r) {
            return function o(a) {
              a.detail.id === t || a.detail.elementId === t
                ? (clearTimeout(n), window.top.removeEventListener(e, o), i())
                : r();
            };
          },
          _ = function (e) {
            var t = document.getElementById(e);
            if (!t) return "";
            t.innerHTML = "";
            var n = e + "-child",
              i = document.createElement("div");
            return i.setAttribute("id", n), t.appendChild(i), n;
          },
          b = function (e, t, n, i, r, o) {
            var a =
                arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : [],
              s = _(e);
            s || o();
            var c = setTimeout(function () {
              o();
            }, 2e4);
            window.top.addEventListener(h, y(h, s, c, r, o));
            var u = {
                refresh: !0,
                refreshInterval: 12e3,
                viewableThreshold: 80,
                refreshLimit: 30,
              },
              d = (0, l.isLogDebugMode)()
                ? "mentalfloss"
                : window.document.domain
                    .replace(/^www\./, "")
                    .replace(/\.com/, "");
            window.mmDisplayManager.cmd.push(function () {
              return window.mmDisplayManager.setSettings({ siteName: d });
            }),
              window.mmDisplayManager.cmd.push(function () {
                return window.mmDisplayManager.insertPlacement(s, a, n, u);
              });
          },
          E = (t.displayBrowsi = function (e, t, n, i, r, o) {
            var a =
                arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : [],
              s = _(e);
            s || o();
            var c = setTimeout(function () {
              o();
            }, 2e4);
            window.top.addEventListener(f, y(f, s, c, r, o)),
              (0, l.isLogDebugMode)() &&
                console.log(
                  "[Apester] pushing into browsi stack.\n    elementId: " +
                    s +
                    "\n     refresh: " +
                    i +
                    "\n      keyValues: [{ key: 'apesterChannelId', value: " +
                    t +
                    "}]\n      adUnit: " +
                    n +
                    "\n      sizes: " +
                    a
                      .map(function (e) {
                        return JSON.stringify(e);
                      })
                      .join(", ") +
                    " "
                ),
              window.browsitag.cmd.push(function () {
                (0, l.isLogDebugMode)() &&
                  console.log(
                    "[Apester] calling browsi display function:\n      window.browsitag.display('" +
                      s +
                      "', " +
                      JSON.stringify({
                        refresh: i,
                        keyValues: [{ key: "apesterChannelId", value: t }],
                        adUnit: n,
                        sizes: a,
                      })
                  ),
                  window.browsitag.display(s, {
                    refresh: i,
                    keyValues: [{ key: "apesterChannelId", value: t }],
                    adUnit: n,
                    sizes: a,
                  });
              });
          });
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = "undefined" == typeof Promise ? n(0).Promise : Promise,
          s = (function () {
            function e(t) {
              i(this, e),
                (this.events = {
                  READY_STATE_CHANGE: "readystatechange",
                  LOAD_START: "loadstart",
                  PROGRESS: "progress",
                  ABORT: "abort",
                  ERROR: "error",
                  LOAD: "load",
                  TIMEOUT: "timeout",
                  LOAD_END: "loadend",
                }),
                (this.opts = t);
            }
            return (
              o(e, [
                {
                  key: "send",
                  value: function (e, t, n, i) {
                    var r = this;
                    return new a(function (o, a) {
                      var s = new XMLHttpRequest(),
                        l = i || {},
                        c = t || "GET";
                      s.open(c, e),
                        (void 0 !== l.disableContentType &&
                          l.disableContentType) ||
                          s.setRequestHeader(
                            "Content-Type",
                            r.opts.contentType ||
                              "application/json;charset=UTF-8"
                          ),
                        l.apesterOrigin &&
                          s.setRequestHeader("X-Ape-Origin", l.apesterOrigin),
                        r.opts.headers &&
                          Object.keys(r.opts.header).forEach(function (e) {
                            var t = r.opts.headers[e];
                            s.setRequestHeader(e, t);
                          }),
                        (s.withCredentials = (i || {}).withCredentials || !1),
                        (n = n ? r.parseData(n) : null),
                        s.addEventListener(r.events.LOAD, function () {
                          if (200 == s.status || 0 == s.status) {
                            var e = "";
                            s.responseText &&
                              (e = r.opts.json
                                ? JSON.parse(s.responseText)
                                : s.responseText),
                              o(e, s);
                          } else a(r.reject(s));
                        }),
                        s.addEventListener(r.events.ABORT, function () {
                          return a(r.reject(s));
                        }),
                        s.addEventListener(r.events.ERROR, function () {
                          return a(r.reject(s));
                        }),
                        s.addEventListener(r.events.TIMEOUT, function () {
                          return a(r.reject(s));
                        }),
                        n ? s.send(n) : s.send();
                    });
                  },
                },
                {
                  key: "reject",
                  value: function (e) {
                    var t = "";
                    return (
                      e.responseText &&
                        (t = this.opts.json
                          ? JSON.parse(e.responseText)
                          : e.responseText),
                      t
                    );
                  },
                },
                {
                  key: "parseData",
                  value: function (e) {
                    if ("application/json" == this.opts.contentType)
                      return JSON.stringify(e);
                    var t = [];
                    return (
                      "string" ==
                        (void 0 === e ? "undefined" : r(e)).toLowerCase() ||
                      "number" ==
                        (void 0 === e ? "undefined" : r(e)).toLowerCase()
                        ? t.push(e)
                        : Object.keys(e).forEach(function (n) {
                            t.push(
                              encodeURIComponent(n) +
                                "=" +
                                encodeURIComponent(e[n])
                            );
                          }),
                      t.join("&")
                    );
                  },
                },
                {
                  key: "get",
                  value: function (e, t) {
                    return this.send(e, "GET", null, t);
                  },
                },
                {
                  key: "post",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { withCredentials: !0 };
                    return this.send(e, "POST", t, n);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    return this.send(e, "DELETE");
                  },
                },
                {
                  key: "put",
                  value: function (e, t) {
                    return this.send(e, "PUT", t);
                  },
                },
              ]),
              e
            );
          })();
        t.default = new s({});
      },
      function (e, t, n) {
        var i = n(19);
        e.exports = function (e) {
          if (!i(e)) throw TypeError(String(e) + " is not an object");
          return e;
        };
      },
      function (e, t, n) {
        var i = n(135),
          r = n(147);
        (e.exports = function (e, t) {
          return r[e] || (r[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.4.1",
          mode: i ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.CONSENT_BAILOUT_TIMEOUT = 8e3),
          (t.BG_CONSENT_LOOP_MAX_RETRIES = 4),
          (t.BG_CONSENT_LOOP_TIMEOUT = 2500);
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CONSENT_V2_RESPONSE_TIMEOUT =
            t.CMP_LOCATE_TIMEOUT =
            t.CMP_LOCATE_MAX_RETRIES =
            t.CONSENT_V2_COOKIE_NAME =
              void 0);
        var i = n(26),
          r =
            ((t.CONSENT_V2_COOKIE_NAME = "euconsent-v2"),
            (t.CMP_LOCATE_MAX_RETRIES = 5));
        (t.CMP_LOCATE_TIMEOUT = i.CONSENT_BAILOUT_TIMEOUT / r),
          (t.CONSENT_V2_RESPONSE_TIMEOUT = 1500);
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          return t &&
            null != t &&
            void 0 !== t &&
            0 != t.length &&
            "undefined" !== t
            ? t
            : void 0;
        }
        function o(e) {
          return f.reject(e);
        }
        function a(e) {
          var t = JSON.stringify(e, r);
          return d.default.post("https://events.apester.com/event", t);
        }
        function s(e) {
          return a(e);
        }
        function l(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 60,
            n = (0, p.getSessionSeconds)();
          return !e || n % t == 0;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.eventDispatcher = t.EventDispatcher = void 0);
        var c = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        t.passThrottle = l;
        var u = n(23),
          d = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(u),
          p = n(1),
          f = "undefined" == typeof Promise ? n(0).Promise : Promise,
          h = (t.EventDispatcher = (function () {
            function e() {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              i(this, e), (this.enabled_ = t);
            }
            return (
              c(e, [
                {
                  key: "dispatch",
                  value: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 6,
                      i = void 0;
                    if (this.enabled_) {
                      i = l(t, n)
                        ? s(e)
                        : o("THROTTLE: event not send to save resources.");
                    } else i = o("not sending event on preview mode");
                    return i;
                  },
                },
                {
                  key: "enabled",
                  get: function () {
                    return this.enabled_;
                  },
                  set: function (e) {
                    "boolean" == typeof e && (this.enabled_ = e);
                  },
                },
              ]),
              e
            );
          })());
        t.eventDispatcher = new h();
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createGPTSlot = t.waitForGPTRdy = void 0);
        var i = n(4),
          r = (t.waitForGPTRdy = function e(t, n, i) {
            if (window.googletag && window.googletag.apiReady) t();
            else if (i <= 0) n("Googletag wasn't ready.");
            else {
              var r = i - 1;
              setTimeout(function () {
                return e(t, n, r);
              }, 200);
            }
          }),
          o = (t.createGPTSlot = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r = arguments[3],
              o = arguments[4],
              a = (0, i.extractHostnameFromCanonicalUrlOrWindow)(),
              s = window.googletag.defineSlot(r, o, e);
            return (
              s
                .addService(window.googletag.pubads())
                .setTargeting("apester_channel_id", n)
                .setTargeting("apester_domain", a),
              t && t.collapseEmpty && s.setCollapseEmptyDiv(t.collapseEmpty),
              window.googletag.enableServices(),
              s
            );
          });
        t.default = { waitForGPTRdy: r, createGPTSlot: o };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(2),
          r = {
            SPONSORED_AD: "Sponsored Ad",
            SPONSORED: "Sponsored",
            AD_IN: "Ad in",
            PENDING: "Pending",
            UP_NEXT: "Up next",
          },
          o = {
            SPONSORED_AD: "Anzeige",
            SPONSORED: "Anzeige",
            AD_IN: "Anzeige in",
            PENDING: "Gleich",
            UP_NEXT: "Es folgt",
          };
        t.default = function (e) {
          return i.GERMAN_PUBLISHERS[e.publisherId] ? o : r;
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initJita = t.onJitaReady = void 0);
        var i = n(4),
          r = n(5),
          o = n(1),
          a = "undefined" == typeof Promise ? n(0).Promise : Promise,
          s = (t.onJitaReady = function (e, t, n, r) {
            try {
              n.canonical_domain = (0,
              i.extractHostnameFromCanonicalUrlOrWindow)();
              var o = [
                  ["apester_channel_id", n.channel_id],
                  ["apester_domain", n.canonical_domain],
                ],
                a = {};
              (a["/12345678/" + r] = o),
                (window.rtkGPTSlotsTargeting = [[], a]),
                (n.ron_site = n.canonical_domain),
                (n.sub_id = n.channel_id),
                window.JITA.setCustomParameters(n),
                e();
            } catch (e) {
              console.error(
                "error in RTK companion ready handler: " + e.message
              ),
                t(e);
            }
          });
        t.initJita = function (e, t, n) {
          return new a(function (i, a) {
            if (window.jitaJS) s(i, a, t, n), i();
            else {
              (0, r.loadScript)(window, e, void 0, "APESTER_RTK");
              var l = function e() {
                s(i, a, t, n), window.top.removeEventListener("JITA_Ready", e);
              };
              window.top.addEventListener("JITA_Ready", l),
                (0, o.listenToKillPMCAdsEvent)(function () {
                  return window.top.removeEventListener("JITA_Ready", l);
                });
            }
          });
        };
        t.default = { onJitaReady: s };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return function (t) {
            return Array.prototype.map.call(t, e);
          };
        }
        function r(e) {
          return function (t) {
            return Array.prototype.filter.call(t, e);
          };
        }
        function o(e, t) {
          return function (n) {
            return Array.prototype.reduce.call(n, e, t);
          };
        }
        function a(e) {
          return function (t) {
            return Array.prototype.concat.call(t, e);
          };
        }
        function s(e) {
          return function (t) {
            return Array.prototype.some.call(t, function (t) {
              return t === e;
            });
          };
        }
        function l(e) {
          return function (t) {
            return Array.prototype.filter.call(e, function (e) {
              return !s(e)(t);
            });
          };
        }
        function c(e) {
          return o(function (e, t) {
            return h({}, e, t);
          }, {})(e);
        }
        function u(e) {
          return o(function (e, t) {
            return e.concat(Array.isArray(t) ? u(t) : t);
          }, [])(e);
        }
        function d(e) {
          return Array.prototype.slice.call(e);
        }
        function p(e, t) {
          return o(function (e, t) {
            return e && e[t] ? e[t] : null;
          }, t)(e);
        }
        function f() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return 0 === Object.keys(e).length;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
        (t.map = i),
          (t.filter = r),
          (t.reduce = o),
          (t.concat = a),
          (t.includes = s),
          (t.diff = l),
          (t.flattenObject = c),
          (t.flattenArray = u),
          (t.toArray = d),
          (t.objectSafeAccess = p),
          (t.isEmpty = f);
      },
      function (e, t) {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      function (e, t) {
        e.exports = {};
      },
      function (e, t, n) {
        var i = n(16),
          r = n(52),
          o = n(24),
          a = n(60),
          s = Object.defineProperty;
        t.f = i
          ? s
          : function (e, t, n) {
              if ((o(e), (t = a(t, !0)), o(n), r))
                try {
                  return s(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      function (e, t, n) {
        var i = n(6),
          r = n(15);
        e.exports = function (e, t) {
          try {
            r(i, e, t);
          } catch (n) {
            i[e] = t;
          }
          return t;
        };
      },
      function (e, t, n) {
        var i = n(53),
          r = n(56);
        e.exports = function (e) {
          return i(r(e));
        };
      },
      function (e, t) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
          "object" == typeof window && (n = window);
        }
        e.exports = n;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createConsentObjFromString = t.locateConsentManagementFunc =
            void 0);
        var i = n(27),
          r = "undefined" == typeof Promise ? n(0).Promise : Promise;
        (t.locateConsentManagementFunc = function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return new r(function (r) {
            var o = window[t];
            o || n >= i.CMP_LOCATE_MAX_RETRIES
              ? r(o)
              : ((n += 1),
                setTimeout(function () {
                  r(e(t, n));
                }, i.CMP_LOCATE_TIMEOUT));
          });
        }),
          (t.createConsentObjFromString = function (e, t) {
            return e
              ? { gdpr: 1, gdprString: e, gdpr_consent: !!e, version: t }
              : void 0;
          });
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.EVENTS_TYPES = Object.freeze({
          apester_component_position: "apester_component_position",
          apester_sdk_loaded: "apester_sdk_loaded",
          apester_sdk_strip_timeout: "apester_sdk_strip_timeout",
          apester_sdk_display_ready: "apester_sdk_display_ready",
          apester_sdk_display_failed: "apester_sdk_display_failed",
          apester_sdk_perf_monitor: "apester_sdk_perf_monitor",
          article_exclude: "article_exclude",
          GDPR_timeout: "GDPR_timeout",
          GDPR_success: "GDPR_success",
          GDPR_success_V: "GDPR_success_V",
          GDPR_cookie_success: "GDPR_cookie_success",
          GDPR_cookie_success_V: "GDPR_cookie_success_V",
          GDPR_failure: "GDPR_failure",
          CCPA_timeout: "CCPA_timeout",
          CCPA_success: "CCPA_success",
          CCPA_failure: "CCPA_failure",
          privacy_not_apply: "privacy_not_apply",
          tcf_v2_probe: "tcf_v2_probe",
        });
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(10),
          r = n(1),
          o = n(4);
        t.default = function (e, t, n, a) {
          var s = e.interactionId,
            l = e.publisherId,
            c = e.publisher,
            u = e.campaignData;
          u = void 0 === u ? {} : u;
          var d = u.countryData;
          return (0, i.getConsent)(l, d, a).then(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = e.gdpr;
            i = void 0 === i ? {} : i;
            var a = i.gdprString,
              u = i.gdpr,
              d = i.gdpr_consent,
              p = e.ccpa,
              f = {
                param1: s,
                param2: l,
                param3: (0, r.getSessionId)(),
                param6: t,
                page_url: (0, r.getPageUrl)(),
                param8: (0, o.extractHostnameFromCanonicalUrlOrWindow)(),
              };
            if (
              (a && (f.user_consent = a),
              void 0 !== u && (f.gdpr = u),
              void 0 !== d && ((f.param4 = d), (f.param9 = d)),
              p && (f.US_PRIVACY = p),
              n && ((f.width = n.width), (f.height = n.height)),
              c &&
                c.groupId &&
                ((f.param7 = "apester.com:" + c.groupId),
                (f.schain = "1.0,1!apester.com," + c.groupId + ",1,,,")),
              r.isApesterInapp)
            ) {
              var h = (0, r.getMobileInAppParams)(),
                m = h.advertisingId,
                v = h.appName,
                g = h.bundleId,
                y = h.gdprString,
                _ = h.trackingEnabled,
                b = h.appStoreUrl;
              (f.ifa = m),
                (f.app_name = v),
                (f.bundle_id = g.replace(".universal", "")),
                (f.inApp = !0),
                (f.do_not_track = !_),
                (f.app_store_url = b),
                y &&
                  ((f.user_consent = y),
                  (f.param9 = !0),
                  (f.param4 = !0),
                  (f.gdpr = 1));
            }
            return console.log("APESTER: SR Macros", f), f;
          });
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = new Date().getTime(),
          r = function (e, t) {
            return function () {
              var n = new Date().getTime();
              n - i >= t && ((i = n), e());
            };
          },
          o = function (e, t) {
            var n = setInterval(e, t);
            window.addEventListener("message", function (i) {
              i &&
                i.data &&
                i.data.type &&
                ("fullscreen_on" === i.data.type
                  ? clearInterval(n)
                  : "fullscreen_off" === i.data.type &&
                    (n = setInterval(e, t)));
            });
          },
          a = function (e, t) {
            window.addEventListener("message", function (n) {
              n &&
                n.data &&
                n.data.type === t &&
                "function" == typeof e &&
                e(n.data);
            });
          };
        t.setRefreshHandler = function (e, t) {
          var n = void 0,
            i = t.refreshOnClick,
            s = t.autoRefresh,
            l = t.autoRefreshTime,
            c = t.lockTime;
          return (
            e &&
              ("none" !== i
                ? ((n = c), a(r(e, c), "refresh_companion_ad"))
                : s && l >= 15e3 && ((n = l), o(e, l))),
            n
          );
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = void 0;
        t.default = function (e) {
          return (
            (i && !e) ||
              ((i = document.createElement("div")),
              (i.style.width = "28px"),
              (i.style.height = "28px"),
              (i.style.color = "white"),
              (i.style.position = "absolute"),
              (i.style.top = "28px"),
              (i.style.right = "14px"),
              (i.style.textAlign = "center"),
              (i.style.borderRadius = "50%"),
              (i.style.background = "black"),
              (i.style.lineHeight = "30px"),
              (i.style.opacity = "0.55"),
              (i.style.zIndex = 100),
              (i.style.cursor = "pointer"),
              (i.id = "monetization-close-btn"),
              (i.innerHTML = "&#x2715;")),
            i
          );
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function a(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        function s(e) {
          (0, d.registerElement)(e, "RENDERER", k);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.renderer = t.rendererEventsNames = void 0);
        var l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          c = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
        t.default = s;
        var u = n(20),
          d = n(21),
          p = n(4),
          f = n(23),
          h = i(f),
          m = n(14),
          v = n(32),
          g = n(1),
          y = n(45),
          _ = i(y),
          b = n(3),
          E = "undefined" == typeof Promise ? n(0).Promise : Promise,
          w = (0, _.default)(navigator.userAgent),
          I = function (e) {
            return function () {
              e.style.minHeight = window.innerHeight + "px";
            };
          },
          T = function (e) {
            if (g.isMobile) {
              var t = e.getElementsByClassName("apester-fill-content")[0];
              t &&
                ((t.style.minHeight = window.innerHeight + "px"),
                (window.onresize = I(t)));
            }
            e.classList.add("fullscreen");
            var n =
              e.parentElement &&
              e.parentElement.getAttribute("data-manual-top");
            !g.isMobile &&
              n &&
              ((e.style.top = n + "px"),
              (e.style.height = "calc(100% - " + n + "px"));
          },
          O = function (e) {
            if (g.isMobile) {
              var t = e.getElementsByClassName("apester-fill-content")[0];
              t && ((t.style.minHeight = 0), (window.onresize = null));
            }
            e.classList.remove("fullscreen"),
              g.isMobile || ((e.style.top = 0), (e.style.height = "100%"));
          },
          S = function (e, t) {
            e.setAttribute("height", t);
          },
          A = function (e, t) {
            e.style["max-width"] = t + "px";
          },
          P = (t.rendererEventsNames = {
            SET_FULL_SCREEN: "fullscreen_on",
            REMOVE_FULL_SCREEN: "fullscreen_off",
            RESIZE_UNIT: "apester_resize_unit",
            REDIRECT_URL_LINK: "redirect_url_link",
          }),
          k = (t.renderer = (function (e) {
            function t() {
              return (
                r(this, t),
                o(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              a(t, e),
              c(t, [
                {
                  key: "buildCallback",
                  value: function () {
                    var e = this;
                    (this.rendererBaseUrl_ = "https://renderer.apester.com"),
                      (this.playerBaseUrl_ = "http://renderer.apester.com"),
                      (this.displayBaseUrl_ = "https://display.apester.com"),
                      (this.interactionId_ = this.options.interactionId),
                      (this.iframe_ = null),
                      (this.iframePromise_ = null),
                      (this.seen_ = !1),
                      (this.ready_ = !1),
                      (this.engaged_ = !1),
                      this.registerEvent(P.SET_FULL_SCREEN, function (t) {
                        w ||
                          e.interactionId_ !== t.id ||
                          "596737045cc7ece51b3602fd" === t.id ||
                          "59bbba559debe10001a82451" === t.id ||
                          T(e.element);
                      }),
                      this.registerEvent(P.REMOVE_FULL_SCREEN, function (t) {
                        w ||
                          e.interactionId_ !== t.id ||
                          "596737045cc7ece51b3602fd" === t.id ||
                          "59bbba559debe10001a82451" === t.id ||
                          O(e.element);
                      }),
                      this.registerEvent(P.RESIZE_UNIT, function (t) {
                        e.interactionId_ === t.id &&
                          t.height &&
                          S(e.iframe_, t.height, e.isStrip),
                          e.interactionId_ === t.id &&
                            t.width &&
                            A(e.iframe_, t.width);
                      }),
                      this.registerEvent(P.REDIRECT_URL_LINK, function (e) {
                        e.redirectUrl && (window.location.href = e.redirectUrl);
                      });
                  },
                },
                {
                  key: "closeUnit",
                  value: function () {
                    O(this.element);
                    var e = { type: "fullscreen_off" };
                    (0, g.safePostMessageToIframe)(this.iframe_, e);
                  },
                },
                {
                  key: "createPerformanceLog",
                  value: function () {
                    return {
                      interactionId: this.options.interactionId,
                      publisherId: this.options.channelId,
                      iframeType: this.options.iframeType,
                    };
                  },
                },
                {
                  key: "firstLayoutCompleted",
                  value: function () {
                    this.viewportCallback(this.isInViewport());
                  },
                },
                {
                  key: "constructUrlFromMedia_",
                  value: function (e) {
                    var t = (0, g.getSessionId)(),
                      n = this.options.newPlayer
                        ? this.rendererBaseUrl_ + "/v2"
                        : this.rendererBaseUrl_ + "/interaction",
                      i = this.options.monetized
                        ? "&channelId=" + this.options.channelId
                        : "",
                      r = this.options.type
                        ? "&type=" + encodeURIComponent(this.options.type)
                        : "",
                      o = this.options.iframeType
                        ? "&iframeType=" + this.options.iframeType
                        : "",
                      a = this.options.isContextualMatch
                        ? "&isContextualMatch=" + this.options.isContextualMatch
                        : "",
                      s = "&platform=" + (0, g.getPlatform)(),
                      l = this.options.isResultsScreen
                        ? "&preview=true&results=true"
                        : "",
                      c = (0, p.extractCanonicalUrlOrHref)(),
                      u = this.options.evergreen ? "&evergreen=true" : "",
                      d = this.options.autoFullscreen
                        ? "&autoFullscreen=true"
                        : "",
                      f = "&sessionId=" + t;
                    return (
                      n +
                      "/" +
                      encodeURIComponent(e) +
                      "?sdk=4.4.49s&canonicalUrl=" +
                      encodeURIComponent(c) +
                      i +
                      r +
                      o +
                      s +
                      a +
                      "\n    " +
                      u +
                      d +
                      l +
                      f
                    );
                  },
                },
                {
                  key: "constructIframe_",
                  value: function (e) {
                    var t = (0, g.getSessionId)(),
                      n = this.element.ownerDocument.createElement("iframe");
                    n.setAttribute("title", "Apester - Interactive content"),
                      n.setAttribute("frameborder", "0"),
                      n.setAttribute("allowtransparency", "true"),
                      n.setAttribute("scrolling", "no"),
                      n.setAttribute("allow", "autoplay"),
                      n.setAttribute(
                        "data-interaction-id",
                        this.interactionId_
                      ),
                      (n.name = /wpcomwidgets/.test(document.location.href)
                        ? document.referrer
                        : document.location.href),
                      n.classList.add("apester-fill-content");
                    var i = e.split("?");
                    (n.originalUrlParams = i.length > 1 ? "?" + i[1] : ""),
                      (n.strip = this.options.strip),
                      (n.instanceId = this.options.instanceId),
                      (n.stripItems = this.options.stripItems),
                      (n.matchedTags = this.options.matchedTags),
                      (n.clickMacro = this.options.clickMacro),
                      (n.externalId = this.options.externalId),
                      (n.consent = this.options.consent),
                      (n.adUnit = this.options.adUnit),
                      (n.partner = this.options.partner),
                      this.element &&
                        this.element.parentElement &&
                        ((n.customTopDesktopOffset =
                          this.element.parentElement.getAttribute(
                            "data-manual-top-desktop"
                          )),
                        (n.customTopMobileOffset =
                          this.element.parentElement.getAttribute(
                            "data-manual-top-mobile"
                          ))),
                      (n.src =
                        "friendlyIframe" === this.options.iframeType
                          ? "about:blank"
                          : this.getIframeSrc());
                    var r = this.options.iosDeviceInfo;
                    return (
                      (n.extensionData = { sessionId: t }),
                      this.options.campaignData &&
                        l(
                          n.extensionData,
                          l({}, this.options.campaignData, { iosDeviceInfo: r })
                        ),
                      n
                    );
                  },
                },
                {
                  key: "getIframeSrc",
                  value: function () {
                    var e = (0, g.getSessionId)(),
                      t = this.options.isResultsScreen
                        ? "?preview=true&results=true"
                        : "";
                    return (
                      (t += t ? "&sessionId=" + e : "?sessionId=" + e),
                      this.options.newPlayer
                        ? this.rendererBaseUrl_ +
                          "/v2/" +
                          this.interactionId_ +
                          t
                        : this.rendererBaseUrl_ +
                          "/interaction/" +
                          this.interactionId_ +
                          t
                    );
                  },
                },
                {
                  key: "getFriendlyIframePromise_",
                  value: function (e) {
                    var t = this;
                    (0, m.sendPerformanceLog)(
                      "renderer_pending",
                      this.createPerformanceLog()
                    );
                    return (function () {
                      return t.params.provider.content
                        ? E.resolve(t.params.provider.content)
                        : h.default.get(e);
                    })().then(
                      function (e) {
                        return (
                          t.iframe_.contentWindow.document.open(
                            "text/html",
                            "replace"
                          ),
                          t.iframe_.contentDocument.write(e),
                          t.iframe_.contentDocument.close(),
                          t.loadRenderer().then(
                            function () {
                              return (
                                (t.ready_ = !0),
                                (0, m.sendPerformanceLog)(
                                  "renderer_fulfilled",
                                  t.createPerformanceLog()
                                ),
                                t.iframe_
                              );
                            },
                            function () {
                              return E.reject(t.id);
                            }
                          )
                        );
                      },
                      function () {
                        return E.reject(t.id);
                      }
                    );
                  },
                },
                {
                  key: "getIframePromise_",
                  value: function () {
                    var e = this,
                      t = (0, g.getSessionId)();
                    return (
                      (0, m.sendPerformanceLog)(
                        "renderer_pending",
                        this.createPerformanceLog()
                      ),
                      this.loadRenderer().then(
                        function () {
                          (e.ready_ = !0),
                            (0, m.sendPerformanceLog)(
                              "renderer_fulfilled",
                              e.createPerformanceLog()
                            );
                          var n = {
                            type: "campaigns",
                            data: l({}, e.options.campaignData, {
                              sessionId: t,
                            }),
                          };
                          return (
                            (0, g.safePostMessageToIframe)(e.iframe_, n),
                            e.iframe_
                          );
                        },
                        function () {
                          return E.reject(e.id);
                        }
                      )
                    );
                  },
                },
                {
                  key: "isFallbackCampaign",
                  value: function () {
                    return (
                      !(
                        !this.options.campaignData ||
                        !this.options.campaignData.videoCampaignOptions
                      ) &&
                      this.options.campaignData.videoCampaignOptions.isFallback
                    );
                  },
                },
                {
                  key: "isStripRenderer",
                  value: function () {
                    return (
                      this.options.stripItems && this.options.stripItems.length
                    );
                  },
                },
                {
                  key: "layoutCallback",
                  value: function () {
                    this.options.iframeType =
                      this.isFallbackCampaign() && !this.isStripRenderer()
                        ? "iframe"
                        : "friendlyIframe";
                    var e = this.constructUrlFromMedia_(this.interactionId_);
                    return (
                      (this.iframe_ = this.constructIframe_(e)),
                      this.element.appendChild(this.iframe_),
                      (this.iframePromise_ =
                        "iframe" === this.options.iframeType
                          ? this.getIframePromise_()
                          : this.getFriendlyIframePromise_(e)),
                      this.iframePromise_.then(
                        (0, b.sendPositionLog)(
                          this.element,
                          "player",
                          this.options.channelId,
                          this.options.interactionId
                        )
                      )
                    );
                  },
                },
                {
                  key: "viewportCallback",
                  value: function (e) {
                    if (this.iframe_ && this.ready_) {
                      var t = { type: "sdkViewChange", inViewport: e };
                      (0, g.safePostMessageToIframe)(this.iframe_, t);
                    }
                  },
                },
                {
                  key: "engagementCallback",
                  value: function () {
                    var e = this;
                    return new E(function (t) {
                      e.engaged_ && t();
                      var n = function () {
                          document.activeElement === e.iframe_ &&
                            ((e.engaged_ = !0), t(), setTimeout(i, 0));
                        },
                        i = function () {
                          window.removeEventListener("blur", n);
                        };
                      window.addEventListener("blur", n);
                    });
                  },
                },
                {
                  key: "loadRenderer",
                  value: function () {
                    return new E(function (e, t) {
                      var n = void 0,
                        i = void 0,
                        r = function (t) {
                          var n = !1;
                          return (
                            "apester_interaction_loaded" ===
                              (0, v.objectSafeAccess)(["data", "type"], t) &&
                              (e(), (n = !0)),
                            n
                          );
                        };
                      (i = function (e) {
                        r(e) && n();
                      }),
                        (n = function () {
                          window.removeEventListener("message", i),
                            (i = null),
                            (r = null);
                        }),
                        window.addEventListener("message", i);
                    });
                  },
                },
                {
                  key: "registerEvent",
                  value: function (e, t) {
                    window.addEventListener("message", function (n) {
                      n && n.data && n.data.type === e && t(n.data);
                    });
                  },
                },
              ]),
              t
            );
          })(u.BaseElement));
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return !!e.match(a);
        }
        function r(e) {
          return /android/i.test(e)
            ? "android"
            : /iPad|iPhone|iPod|iOS/.test(e) && !window.MSStream
            ? "ios"
            : "unknown";
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isWebview = i),
          (t.getMobileOperatingSystem = r);
        var o = [
            "WebView",
            "(iPhone|iPod|iPad)(?!.*Safari)",
            "Android.*(wv|.0.0.0)",
            "Linux; U; Android",
          ],
          a = new RegExp("(" + o.join("|") + ")", "ig");
        t.default = i;
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t, n, i) {
          return {
            left: e,
            top: t,
            width: n,
            height: i,
            bottom: t + i,
            right: e + n,
          };
        }
        function a(e) {
          return e.getAttribute("data-fallback");
        }
        function s(e) {
          var t = e.getAttribute("margin");
          return "0" === t || Number(t) ? t : ie.isApesterInapp ? "0" : "5";
        }
        function l() {
          var e = document.querySelectorAll(
            ".field--name-field-tags > .field__items > .field__item"
          );
          return (0, ne.reduce)(function (e, t) {
            var n = t && t.textContent;
            return n && n.trim() ? e.concat(n.trim()) : e;
          }, [])(e);
        }
        function c(e) {
          return function () {
            var t = e.getAttribute("data-tags");
            return t
              ? t.split(",").map(function (e) {
                  return e.trim();
                }) || []
              : [];
          };
        }
        function u() {
          var e = document.querySelectorAll("a.entry-tag");
          return (0, ne.reduce)(function (e, t) {
            return e.concat(t.text.trim());
          }, [])(e);
        }
        function d() {
          var e = document.querySelectorAll("meta[property='article:tag']");
          return (0, ne.reduce)(function (e, t) {
            return e.concat(
              t.content.split(",").map(function (e) {
                return e.trim();
              })
            );
          }, [])(e);
        }
        function p() {
          var e = document.querySelectorAll("span.tag.separated a");
          return (0, ne.reduce)(function (e, t) {
            return e.concat(t.text.trim());
          }, [])(e);
        }
        function f() {
          var e = document.querySelectorAll("a[data-tag]");
          return (0, ne.reduce)(function (e, t) {
            return e.concat(t.getAttributeNode("data-tag").nodeValue);
          }, [])(e);
        }
        function h() {
          var e = window.location.pathname.endsWith("/") ? 2 : 1;
          return window.location.pathname
            .split("/")
            .reduce(function (t, n, i, r) {
              return (
                n &&
                  i !== r.length - e &&
                  !parseInt(n) &&
                  t.push(n.replace(/[_-]/g, " ")),
                t
              );
            }, []);
        }
        function m(e, t) {
          return function () {
            return new re(function (n, i) {
              var r = void 0;
              e.GujAd && e.GujAd.cmd && e.GujAd.cmd.push
                ? ((r = setTimeout(function () {
                    (r = null), n([]);
                  }, t)),
                  e.GujAd.cmd.push(function () {
                    if (r) {
                      clearTimeout(r);
                      var t = [];
                      try {
                        t = e.GujAd.getClient().getKeywords();
                      } catch (e) {}
                      n(t);
                    }
                  }))
                : n([]);
            });
          };
        }
        function v() {
          if (window.ipcTags && window.ipcTags.tagging) {
            return window.ipcTags.tagging
              .filter(function (e) {
                return e.includes("post_tag:");
              })
              .map(function (e) {
                return e.substr("post_tag:".length).trim().replace(/_/g, " ");
              });
          }
          return [];
        }
        function g(e, t, n) {
          return n.indexOf(e) === t;
        }
        function y() {
          var e = document.querySelectorAll(
            'meta[name="cXenseParse:cmd-productName"], meta[name="cXenseParse:cmd-productNameShort"]'
          );
          return (0, ne.filter)(function (e) {
            return e.getAttribute("content");
          })(e)
            .map(function (e) {
              return e.getAttribute("content").trim();
            })
            .filter(g);
        }
        function _() {
          return void 0 !== window.dcTags && Array.isArray(window.dcTags)
            ? (0, ne.reduce)(function (e, t) {
                return e.concat(
                  t.split(",").map(function (e) {
                    return e.trim();
                  })
                );
              }, [])(window.dcTags)
            : [];
        }
        function b() {
          var e = [
              "meta[name=keywords]",
              "meta[name=news_keywords]",
              "meta[name=NEWS_KEYWORDS]",
            ],
            t = [];
          return (
            e.forEach(function (e) {
              var n = document.querySelector(e);
              if (n) {
                var i = n.getAttribute("content");
                if (i) {
                  var r = i.split(",").map(function (e) {
                    return e.trim();
                  });
                  t = t.concat(r);
                }
              }
            }),
            t
          );
        }
        function E() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = e.map(function (e) {
              return e() || [];
            });
          return re.all(t).then(function (e) {
            var t = {};
            return (
              e.forEach(function (e) {
                e.reduce(function (e, t) {
                  return (e[t.toLowerCase().trim()] = 1), e;
                }, t);
              }),
              Object.keys(t)
            );
          });
        }
        function w(e, t) {
          var n = e.idOrToken,
            i = e.playlist,
            r = e.inative,
            o = e.distributionChannelId,
            a = e.fallback,
            s = e.renderer,
            l = e.sendUrl,
            c = e.newPlayer,
            u = encodeURIComponent(n),
            d = "",
            p = "?";
          r
            ? n
              ? ((d = "/inatives/" + n),
                (p += l ? "url=" + encodeURI(l) + "&" : ""))
              : o &&
                ((d = "/channels/" + o + "/inatives"),
                (p += l ? "url=" + encodeURI(l) + "&" : ""))
            : i && t
            ? ((t = t
                .map(function (e) {
                  return "tags=" + encodeURIComponent(e.trim());
                })
                .join("&")),
              (d = "/tokens/" + u + "/interactions/random"),
              (p += t ? t + "&" : ""),
              (p += "fallback=" + !!a + "&"),
              (p += l ? "url=" + encodeURI(l) + "&" : ""))
            : i
            ? ((d = "/tokens/" + u + "/interactions/random"),
              (p += l ? "url=" + encodeURI(l) + "&" : ""))
            : (d = "/interactions/" + u + "/display");
          var f = (0, ie.getPlatform)();
          return (
            (p += "platform=" + f),
            (p +=
              f && f.match && f.match(/mobile/)
                ? "&os=" + (0, ie.getOS)()
                : ""),
            (p += s ? "&renderer=true" : ""),
            (p += c ? "&renderer=true" : ""),
            "https://display.apester.com" + d + p
          );
        }
        function I(e) {
          return (
            e.getAttribute("data-channel-token") ||
            e.getAttribute("data-random") ||
            e.getAttribute("data-token")
          );
        }
        function T(e) {
          return (e.getAttribute("data-channel-tokens") || "").split(",");
        }
        function O(e) {
          return e.getAttribute("data-media-id") || e.getAttribute("id");
        }
        function S(e) {
          return e.getAttribute("data-campaign-id");
        }
        function A(e) {
          return e.getAttribute("data-channel-id");
        }
        function P(e) {
          return e.getAttribute("data-distribution-url");
        }
        function k(e) {
          return !!I(e);
        }
        function C(e) {
          return "true" === e.getAttribute("data-inative");
        }
        function N(e) {
          return "auto" === e.getAttribute("data-embed-mode");
        }
        function M(e) {
          return (
            !!e.getAttribute("data-player") &&
            "true" === e.getAttribute("data-player")
          );
        }
        function R(e) {
          var t = e.some(function (e) {
              return !k(e);
            }),
            n = e.some(function (e) {
              return k(e);
            }),
            i = e.some(function (e) {
              return N(e);
            });
          return n && (t || i);
        }
        function L(e) {
          return e.filter(function (e) {
            return !k(e);
          });
        }
        function x(e, t) {
          var n = JSON.parse(e),
            i = n.payload,
            r = void 0;
          return (
            t
              ? ((r = Array.isArray(i)
                  ? i[Math.floor(Math.random() * i.length)]
                  : i),
                (r.embedType = "playlist"))
              : ((r = i), (r.embedType = "editorial")),
            r
          );
        }
        function D(e, t) {
          return (
            (e = e || []),
            (t = t || ""),
            !!e.filter(function (e) {
              return new RegExp(
                "([\\s,\\.:!\\?\\-]|^)" + e + "([\\s,\\.:!\\?\\-]|$)",
                "i"
              ).test(t);
            }).length
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var V =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          j = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
        t.layoutRectLtwh = o;
        var U = n(3),
          F = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(U),
          B = n(44),
          W = i(B),
          z = n(101),
          Y = i(z),
          H = n(72),
          G = i(H),
          q = n(4),
          K = i(q),
          Z = n(23),
          J = i(Z),
          X = n(20),
          Q = n(21),
          $ = n(28),
          ee = n(106),
          te = n(14),
          ne = n(32),
          ie = n(1),
          re = "undefined" == typeof Promise ? n(0).Promise : Promise,
          oe = [
            "Awards Spotlight",
            "‘Mudbound’ Director Dee Rees",
            "Best Actor: EW picks the best Oscar winners of all time",
          ],
          ae = (function () {
            function e(t) {
              r(this, e),
                (this.apesterMedias = {
                  interactions: { elements: [], managers: [] },
                  strips: { elements: [], managers: [] },
                  boards: { elements: [], managers: [] },
                }),
                (this.disableEvents = !1),
                (this.win = t),
                (this.eventProxy = $.eventDispatcher),
                (this.unitsManagers_ = []),
                (this.crawler = new K.default()),
                (this.workQueue_ = []),
                (this.displayBaseUrl_ = "https://display.apester.com"),
                (this.registeredEvents = []),
                (this.userConsent_ = void 0),
                (this.timeout = null);
            }
            return (
              j(e, [
                {
                  key: "closeUnits",
                  value: function () {
                    this.unitsManagers_.forEach(function (e) {
                      e.closeUnits && e.closeUnits();
                    });
                  },
                },
                {
                  key: "Init",
                  value: function (e) {
                    var t = this;
                    (0, ie.preconnect)("https://display.apester.com", document),
                      (0, ie.preconnect)(
                        "https://renderer.apester.com",
                        document
                      ),
                      e &&
                        (($.eventDispatcher.enabled = e.disableEvents),
                        (this.params = e));
                    var n = document.getElementsByClassName("apester-strip")[0];
                    return (
                      n &&
                        (0, ie.isPreviewMode)(n) &&
                        ($.eventDispatcher.enabled = !1),
                      F.sendLoadedEvent(),
                      setTimeout(function () {
                        window.__tcfapi && F.trackTCFv2Probe();
                      }, 1e4),
                      (window.APESTER.reload = function () {
                        t.load(), t.process();
                      }),
                      (window.APESTER.BaseElement = X.BaseElement),
                      (window.APESTER.registerElement = Q.registerElement.bind(
                        null,
                        window
                      )),
                      (0, W.default)(window),
                      (0, Y.default)(window),
                      (0, G.default)(window),
                      window.apesterLateLoad || this.load(),
                      re.resolve()
                    );
                  },
                },
                {
                  key: "initializeResourceManager",
                  value: function (e) {
                    e &&
                      (e.Initialize(),
                      this.unitsManagers_.push(e),
                      this.registeredEvents.forEach(function (t) {
                        e.registerEvent(t.name, t.callback);
                      }));
                  },
                },
                {
                  key: "process",
                  value: function () {
                    var e = this;
                    re.all(this.workQueue_).then(function (t) {
                      (0, ne.map)(function (t) {
                        e.initializeResourceManager(t);
                      })(t);
                    }),
                      (this.workQueue_ = []);
                  },
                },
                {
                  key: "isAlsoDesktopStrip",
                  value: function (e) {
                    return (
                      "false" === e.getAttribute("is-mobile-only") ||
                      "false" === e.getAttribute("data-is-mobile-only")
                    );
                  },
                },
                {
                  key: "killPMCAds",
                  value: function () {
                    window.top.postMessage(
                      { type: ie.KILL_APESTER_ADS_EVENT },
                      "*"
                    );
                  },
                },
                {
                  key: "load",
                  value: function () {
                    var e = this,
                      t = (0, q.getInteractionElements)(document),
                      n = (0, ne.diff)(t)(
                        this.apesterMedias.interactions.elements
                      ),
                      i = "desktop" === (0, ie.getPlatform)(),
                      r = (0, ne.filter)(function (t) {
                        return !i || e.isAlsoDesktopStrip(t);
                      })((0, q.getStripElements)(document) || []),
                      o = (0, ne.diff)(r)(this.apesterMedias.strips.elements);
                    this.apesterMedias.strips.elements = (0, ne.concat)(o)(
                      this.apesterMedias.strips.elements
                    );
                    var a = (0, q.getBoardElements)(document),
                      s = (0, ne.diff)(a)(this.apesterMedias.boards.elements);
                    this.apesterMedias.boards.elements = (0, ne.concat)(s)(
                      this.apesterMedias.boards.elements
                    );
                    var l = R(t) ? L(n) : n;
                    (0, ie.isPmcGroupDomain)() &&
                      (this.pmcIntervalHandle ||
                        ((this.pmcTimeoutHandle = setTimeout(function () {
                          e.pmcIntervalHandle &&
                            clearInterval(e.pmcIntervalHandle);
                        }, 6e4)),
                        (this.pmcIntervalHandle = setInterval(function () {
                          if ((0, ie.isPMCExcludePage)()) {
                            clearInterval(e.pmcIntervalHandle),
                              clearTimeout(e.pmcTimeoutHandle);
                            (0, q.getInteractionElements)(document).forEach(
                              function (e) {
                                e.remove();
                              }
                            ),
                              e.killPMCAds(),
                              F.sendArticeExclude();
                          }
                        }, 500)))),
                      (this.apesterMedias.interactions.elements = (0,
                      ne.concat)(n)(this.apesterMedias.interactions.elements));
                    var c = this.render(l),
                      u = this.renderBoards(s);
                    if ((0, ie.isStripSupported)()) {
                      var d = this.renderStrips(o);
                      this.workQueue_ = this.workQueue_.concat(c, d, u);
                    } else this.workQueue_ = this.workQueue_.concat(c, u, []);
                  },
                },
                {
                  key: "loaded",
                  value: function () {
                    this.load(), this.process();
                  },
                },
                {
                  key: "connect_",
                  value: function (e) {
                    var t = this,
                      n = re.resolve([]),
                      i = {
                        playlist: k(e),
                        idOrToken: I(e) || O(e),
                        inative: C(e),
                        campaignId: S(e),
                        distributionChannelId: A(e),
                        renderer: !0,
                        sendUrl:
                          !(!P(e) || !this.crawler.canonicalUrl) &&
                          this.crawler.canonicalUrl,
                        newPlayer: M(e),
                      };
                    (e.style.margin = s(e) + "px auto"),
                      i.playlist &&
                        ((i.fallback = !("false" === a(e))),
                        (n = E([
                          c(e),
                          b,
                          _,
                          u,
                          d,
                          p,
                          m(this.win, 30),
                          v,
                          (window.location.href || "").match(/zerohedge.com/)
                            ? l
                            : function () {
                                return [];
                              },
                          (window.location.href || "").match(/knowyourmeme.com/)
                            ? f
                            : function () {
                                return [];
                              },
                          (window.location.href || "").match(
                            /pcgameshardware.de|pcgames.de|buffed.de/g
                          )
                            ? y
                            : function () {
                                return [];
                              },
                          h,
                        ])));
                    var r =
                      i.context && i.tags && !i.tags.length && !i.fallback;
                    (0, te.sendPerformanceLog)("display_pending", {
                      interactionId: O(e),
                      channelToken: I(e),
                    });
                    var o = i.playlist && D(oe, document.title);
                    return (
                      o && F.sendArticeExclude(),
                      n.then(function (n) {
                        return r || o
                          ? re.resolve()
                          : J.default
                              .get(w(i, n), {
                                apesterOrigin: window.location.origin,
                              })
                              .then(function (t) {
                                (0,
                                te.sendPerformanceLog)("display_fulfilled", { interactionId: O(e), channelToken: I(e) });
                                var r = x(t, i.playlist);
                                return (
                                  (r.pageTags = n),
                                  F.sendDisplayReadyEvent(r),
                                  r
                                );
                              }, F.sendDisplayFailedEvent.bind(
                                t,
                                i.idOrToken,
                                i.playlist
                              ));
                      })
                    );
                  },
                },
                {
                  key: "connectStrip_",
                  value: function (e) {
                    var t = T(e);
                    return (
                      (e.style.margin = s(e) + "px auto"),
                      (0, te.sendPerformanceLog)("display_pending", {
                        channelTokens: t,
                      }),
                      re.resolve({ channelToken: t.join(","), isPWA: !0 })
                    );
                  },
                },
                {
                  key: "connectBoard_",
                  value: function (e) {
                    var t = e.getAttribute("channel-id"),
                      n = e.getAttribute("height") || 700,
                      i = e.getAttribute("board-title") || "";
                    return re.resolve({ height: n, channelId: t, title: i });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                    return (0, ne.map)(function (t) {
                      return e.connect_(t).then(function (n) {
                        var i = void 0;
                        if (n) {
                          var r = V({}, n, e.params, {
                            consent: e.userConsent_,
                          });
                          i = new ee.ResourceManager(t, r, "renderer");
                        }
                        return i;
                      });
                    })(t);
                  },
                },
                {
                  key: "renderStrips",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                    return (0, ne.map)(function (t) {
                      return e.connectStrip_(t).then(function (e) {
                        var n = void 0;
                        return (
                          ((e && e.stripItems && e.stripItems.length) ||
                            e.isPWA) &&
                            (n = new ee.ResourceManager(
                              t,
                              {
                                isPWA: e.isPWA,
                                interactions: e.stripItems,
                                campaignData: e.campaignData,
                                channelId: e.channelId,
                                channelToken: e.channelToken,
                              },
                              "strip"
                            )),
                          n
                        );
                      });
                    })(t);
                  },
                },
                {
                  key: "renderBoards",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                    return (0, ne.map)(function (t) {
                      return e.connectBoard_(t).then(function (e) {
                        return new ee.ResourceManager(
                          t,
                          {
                            height: e.height,
                            channelId: e.channelId,
                            title: e.title,
                          },
                          "board"
                        );
                      });
                    })(t);
                  },
                },
                {
                  key: "register",
                  value: function (e, t) {
                    this.unitsManagers_.forEach(function (n) {
                      return n.registerEvent(e, t);
                    }),
                      this.registeredEvents.push({ name: e, callback: t });
                  },
                },
              ]),
              e
            );
          })();
        t.default = ae;
      },
      function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
          return n.call(e).slice(8, -1);
        };
      },
      function (e, t) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      function (e, t, n) {
        var i = n(6),
          r = n(19),
          o = i.document,
          a = r(o) && r(o.createElement);
        e.exports = function (e) {
          return a ? o.createElement(e) : {};
        };
      },
      function (e, t, n) {
        var i = n(25);
        e.exports = i("native-function-to-string", Function.toString);
      },
      function (e, t, n) {
        var i = n(145),
          r = n(6),
          o = function (e) {
            return "function" == typeof e ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2
            ? o(i[e]) || o(r[e])
            : (i[e] && i[e][t]) || (r[e] && r[e][t]);
        };
      },
      function (e, t, n) {
        var i = n(16),
          r = n(17),
          o = n(49);
        e.exports =
          !i &&
          !r(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      function (e, t, n) {
        var i = n(17),
          r = n(47),
          o = "".split;
        e.exports = i(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == r(e) ? o.call(e, "") : Object(e);
            }
          : Object;
      },
      function (e, t, n) {
        var i = n(16),
          r = n(143),
          o = n(48),
          a = n(37),
          s = n(60),
          l = n(18),
          c = n(52),
          u = Object.getOwnPropertyDescriptor;
        t.f = i
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = s(t, !0)), c))
                try {
                  return u(e, t);
                } catch (e) {}
              if (l(e, t)) return o(!r.f.call(e, t), e[t]);
            };
      },
      function (e, t, n) {
        var i = n(18),
          r = n(37),
          o = n(125).indexOf,
          a = n(34);
        e.exports = function (e, t) {
          var n,
            s = r(e),
            l = 0,
            c = [];
          for (n in s) !i(a, n) && i(s, n) && c.push(n);
          for (; t.length > l; ) i(s, (n = t[l++])) && (~o(c, n) || c.push(n));
          return c;
        };
      },
      function (e, t) {
        e.exports = function (e) {
          if (void 0 == e) throw TypeError("Can't call method on " + e);
          return e;
        };
      },
      function (e, t, n) {
        var i = n(25),
          r = n(61),
          o = i("keys");
        e.exports = function (e) {
          return o[e] || (o[e] = r(e));
        };
      },
      function (e, t) {
        var n = Math.ceil,
          i = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
        };
      },
      function (e, t, n) {
        var i = n(58),
          r = Math.min;
        e.exports = function (e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0;
        };
      },
      function (e, t, n) {
        var i = n(19);
        e.exports = function (e, t) {
          if (!i(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
            return r;
          if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e))))
            return r;
          if (
            !t &&
            "function" == typeof (n = e.toString) &&
            !i((r = n.call(e)))
          )
            return r;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (e, t) {
        var n = 0,
          i = Math.random();
        e.exports = function (e) {
          return (
            "Symbol(" +
            String(void 0 === e ? "" : e) +
            ")_" +
            (++n + i).toString(36)
          );
        };
      },
      function (e, t, n) {
        var i = n(6),
          r = n(25),
          o = n(61),
          a = n(136),
          s = i.Symbol,
          l = r("wks");
        e.exports = function (e) {
          return l[e] || (l[e] = (a && s[e]) || (a ? s : o)("Symbol." + e));
        };
      },
      function (e, t) {
        e.exports = function () {
          var e = [];
          return (
            (e.toString = function () {
              for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2]
                  ? e.push("@media " + n[2] + "{" + n[1] + "}")
                  : e.push(n[1]);
              }
              return e.join("");
            }),
            (e.i = function (t, n) {
              "string" == typeof t && (t = [[null, t, ""]]);
              for (var i = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0);
              }
              for (r = 0; r < t.length; r++) {
                var a = t[r];
                ("number" == typeof a[0] && i[a[0]]) ||
                  (n && !a[2]
                    ? (a[2] = n)
                    : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                  e.push(a));
              }
            }),
            e
          );
        };
      },
      function (e, t) {
        function n() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function r(e) {
          if (u === setTimeout) return setTimeout(e, 0);
          if ((u === n || !u) && setTimeout)
            return (u = setTimeout), setTimeout(e, 0);
          try {
            return u(e, 0);
          } catch (t) {
            try {
              return u.call(null, e, 0);
            } catch (t) {
              return u.call(this, e, 0);
            }
          }
        }
        function o(e) {
          if (d === clearTimeout) return clearTimeout(e);
          if ((d === i || !d) && clearTimeout)
            return (d = clearTimeout), clearTimeout(e);
          try {
            return d(e);
          } catch (t) {
            try {
              return d.call(null, e);
            } catch (t) {
              return d.call(this, e);
            }
          }
        }
        function a() {
          m &&
            f &&
            ((m = !1),
            f.length ? (h = f.concat(h)) : (v = -1),
            h.length && s());
        }
        function s() {
          if (!m) {
            var e = r(a);
            m = !0;
            for (var t = h.length; t; ) {
              for (f = h, h = []; ++v < t; ) f && f[v].run();
              (v = -1), (t = h.length);
            }
            (f = null), (m = !1), o(e);
          }
        }
        function l(e, t) {
          (this.fun = e), (this.array = t);
        }
        function c() {}
        var u,
          d,
          p = (e.exports = {});
        !(function () {
          try {
            u = "function" == typeof setTimeout ? setTimeout : n;
          } catch (e) {
            u = n;
          }
          try {
            d = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            d = i;
          }
        })();
        var f,
          h = [],
          m = !1,
          v = -1;
        (p.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          h.push(new l(e, t)), 1 !== h.length || m || r(s);
        }),
          (l.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (p.title = "browser"),
          (p.browser = !0),
          (p.env = {}),
          (p.argv = []),
          (p.version = ""),
          (p.versions = {}),
          (p.on = c),
          (p.addListener = c),
          (p.once = c),
          (p.off = c),
          (p.removeListener = c),
          (p.removeAllListeners = c),
          (p.emit = c),
          (p.prependListener = c),
          (p.prependOnceListener = c),
          (p.listeners = function (e) {
            return [];
          }),
          (p.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (p.cwd = function () {
            return "/";
          }),
          (p.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (p.umask = function () {
            return 0;
          });
      },
      function (e, t, n) {
        function i(e, t) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              r = h[i.id];
            if (r) {
              r.refs++;
              for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
              for (; o < i.parts.length; o++) r.parts.push(u(i.parts[o], t));
            } else {
              for (var a = [], o = 0; o < i.parts.length; o++)
                a.push(u(i.parts[o], t));
              h[i.id] = { id: i.id, refs: 1, parts: a };
            }
          }
        }
        function r(e) {
          for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var r = e[i],
              o = r[0],
              a = r[1],
              s = r[2],
              l = r[3],
              c = { css: a, media: s, sourceMap: l };
            n[o] ? n[o].parts.push(c) : t.push((n[o] = { id: o, parts: [c] }));
          }
          return t;
        }
        function o(e, t) {
          var n = v(e.insertInto);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var i = _[_.length - 1];
          if ("top" === e.insertAt)
            i
              ? i.nextSibling
                ? n.insertBefore(t, i.nextSibling)
                : n.appendChild(t)
              : n.insertBefore(t, n.firstChild),
              _.push(t);
          else {
            if ("bottom" !== e.insertAt)
              throw new Error(
                "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
              );
            n.appendChild(t);
          }
        }
        function a(e) {
          e.parentNode.removeChild(e);
          var t = _.indexOf(e);
          t >= 0 && _.splice(t, 1);
        }
        function s(e) {
          var t = document.createElement("style");
          return (e.attrs.type = "text/css"), c(t, e.attrs), o(e, t), t;
        }
        function l(e) {
          var t = document.createElement("link");
          return (
            (e.attrs.type = "text/css"),
            (e.attrs.rel = "stylesheet"),
            c(t, e.attrs),
            o(e, t),
            t
          );
        }
        function c(e, t) {
          Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n]);
          });
        }
        function u(e, t) {
          var n, i, r;
          if (t.singleton) {
            var o = y++;
            (n = g || (g = s(t))),
              (i = d.bind(null, n, o, !1)),
              (r = d.bind(null, n, o, !0));
          } else
            e.sourceMap &&
            "function" == typeof URL &&
            "function" == typeof URL.createObjectURL &&
            "function" == typeof URL.revokeObjectURL &&
            "function" == typeof Blob &&
            "function" == typeof btoa
              ? ((n = l(t)),
                (i = f.bind(null, n, t)),
                (r = function () {
                  a(n), n.href && URL.revokeObjectURL(n.href);
                }))
              : ((n = s(t)),
                (i = p.bind(null, n)),
                (r = function () {
                  a(n);
                }));
          return (
            i(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                i((e = t));
              } else r();
            }
          );
        }
        function d(e, t, n, i) {
          var r = n ? "" : i.css;
          if (e.styleSheet) e.styleSheet.cssText = E(t, r);
          else {
            var o = document.createTextNode(r),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
          }
        }
        function p(e, t) {
          var n = t.css,
            i = t.media;
          if ((i && e.setAttribute("media", i), e.styleSheet))
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
        function f(e, t, n) {
          var i = n.css,
            r = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && r;
          (t.convertToAbsoluteUrls || o) && (i = b(i)),
            r &&
              (i +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                " */");
          var a = new Blob([i], { type: "text/css" }),
            s = e.href;
          (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
        }
        var h = {},
          m = (function (e) {
            var t;
            return function () {
              return void 0 === t && (t = e.apply(this, arguments)), t;
            };
          })(function () {
            return window && document && document.all && !window.atob;
          }),
          v = (function (e) {
            var t = {};
            return function (n) {
              return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
            };
          })(function (e) {
            return document.querySelector(e);
          }),
          g = null,
          y = 0,
          _ = [],
          b = n(155);
        e.exports = function (e, t) {
          if (
            "undefined" != typeof DEBUG &&
            DEBUG &&
            "object" != typeof document
          )
            throw new Error(
              "The style-loader cannot be used in a non-browser environment"
            );
          (t = t || {}),
            (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
            void 0 === t.singleton && (t.singleton = m()),
            void 0 === t.insertInto && (t.insertInto = "head"),
            void 0 === t.insertAt && (t.insertAt = "bottom");
          var n = r(e);
          return (
            i(n, t),
            function (e) {
              for (var o = [], a = 0; a < n.length; a++) {
                var s = n[a],
                  l = h[s.id];
                l.refs--, o.push(l);
              }
              if (e) {
                i(r(e), t);
              }
              for (var a = 0; a < o.length; a++) {
                var l = o[a];
                if (0 === l.refs) {
                  for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                  delete h[l.id];
                }
              }
            }
          );
        };
        var E = (function () {
          var e = [];
          return function (t, n) {
            return (e[t] = n), e.filter(Boolean).join("\n");
          };
        })();
      },
      function (e, t, n) {
        "use strict";
        n(150);
        var i = n(46),
          r = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i),
          o = n(14),
          a = n(1);
        if (
          (n(121),
          n(154).polyfill(),
          n(151),
          (0, a.isTimeDomain)(window.document.domain) && n(122),
          !window.APESTER)
        ) {
          (0, o.sendPerformanceLog)("sdk_loaded"),
            (window.APESTER = window.APESTER || new r.default(window)),
            (0, o.sendPerformanceLog)("sdk_init");
          (
            window.apesterLoadCallback ||
            window.APESTER.Init.bind(window.APESTER)
          )(),
            (function (e) {
              if (!window.apesterLateLoad && "complete" === document.readyState)
                return void e();
              window.addEventListener(
                "load",
                function () {
                  e();
                },
                !1
              );
            })(function () {
              window.APESTER.loaded();
            }),
            window.apesterLateLoad ||
              (function (e) {
                if ("loading" !== document.readyState) return void e();
                window.addEventListener(
                  "DOMContentLoaded",
                  function () {
                    e();
                  },
                  !1
                );
              })(function () {
                window.APESTER.load(), window.APESTER.process();
              });
        }
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(1),
          a = n(3),
          s = n(68),
          l = "undefined" == typeof Promise ? n(0).Promise : Promise,
          c = {},
          u = void 0,
          d = function () {
            Object.values(c).map(function (e) {
              return window.removeEventListener("message", e);
            });
          },
          p = function (e, t, n) {
            if (!c[e]) {
              var i = function (i) {
                var r = i && i.data && i.data.__uspapiReturn;
                if (r) {
                  var o = r.callId,
                    a = r.success,
                    s = r.returnValue.uspString;
                  o === e &&
                    (window.clearInterval(t),
                    d(),
                    a ? (n(s), (u = s)) : n(void 0));
                }
              };
              (c[e] = i), window.addEventListener("message", i);
            }
          },
          f = (function () {
            function e(t) {
              i(this, e), (this.publisherId = t);
            }
            return (
              r(
                e,
                [
                  {
                    key: "getConsent",
                    value: function () {
                      return new l(function (e) {
                        if (u) e(u);
                        else
                          var t = 0,
                            n = (0, o.createUuid)(),
                            i = window.setInterval(function () {
                              t >= s.CCPA_MAX_POST_MESSAGE_ATTEMPTS
                                ? (window.clearInterval(i), e(void 0))
                                : ((t += 1),
                                  p(n, i, e),
                                  window.top.postMessage(
                                    {
                                      __uspapiCall: {
                                        callId: n,
                                        command: "getUSPData",
                                        version: 1,
                                      },
                                    },
                                    "*"
                                  ));
                            }, s.CCPA_POST_MESSAGE_INTERVAL);
                      });
                    },
                  },
                  {
                    key: "trackFailure",
                    value: function () {
                      (0, a.trackCcpaFailure)(this.publisherId);
                    },
                  },
                  {
                    key: "trackSuccess",
                    value: function () {
                      (0, a.trackCcpaSuccess)(this.publisherId);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      d();
                    },
                  },
                ],
                [
                  {
                    key: "DEFAULT_CONSENT",
                    get: function () {
                      return "1NYY";
                    },
                  },
                  {
                    key: "CONSENT_DOES_NOT_APPLY",
                    get: function () {
                      return "1---";
                    },
                  },
                  {
                    key: "CONSENT_TYPE",
                    get: function () {
                      return "ccpa";
                    },
                  },
                ]
              ),
              e
            );
          })();
        t.default = f;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CCPA_MAX_POST_MESSAGE_ATTEMPTS = t.CCPA_POST_MESSAGE_INTERVAL =
            void 0);
        var i = n(26),
          r = (t.CCPA_POST_MESSAGE_INTERVAL = 2e3);
        t.CCPA_MAX_POST_MESSAGE_ATTEMPTS = Math.round(
          i.CONSENT_BAILOUT_TIMEOUT / r
        );
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(3),
          s = n(70),
          l = i(s),
          c = n(71),
          u = i(c),
          d = "undefined" == typeof Promise ? n(0).Promise : Promise,
          p = { gdpr: 1, gdprString: void 0, gdpr_consent: void 0 },
          f = (function () {
            function e(t) {
              r(this, e), (this.publisherId = t);
            }
            return (
              o(
                e,
                [
                  {
                    key: "getConsent",
                    value: function () {
                      var e = this;
                      return new d(function (t) {
                        (0, l.default)().then(function (n) {
                          n
                            ? ((e.consentSource = "cookie"),
                              (e.consentVersion = (n || {}).version),
                              t(n))
                            : (0, u.default)().then(function (n) {
                                var i = n || void 0;
                                (e.consentVersion = (i || {}).version), t(i);
                              });
                        });
                      });
                    },
                  },
                  {
                    key: "trackFailure",
                    value: function () {
                      (0, a.trackGdprFailure)(this.publisherId);
                    },
                  },
                  {
                    key: "trackSuccess",
                    value: function () {
                      "cookie" === this.consentSource
                        ? (0, a.trackGdprCookieSuccess)(
                            this.publisherId,
                            this.consentVersion
                          )
                        : (0, a.trackGdprSuccess)(
                            this.publisherId,
                            this.consentVersion
                          );
                    },
                  },
                  { key: "destroy", value: function () {} },
                ],
                [
                  {
                    key: "DEFAULT_CONSENT",
                    get: function () {
                      return p;
                    },
                  },
                  {
                    key: "CONSENT_DOES_NOT_APPLY",
                    get: function () {
                      return { gdpr: 0 };
                    },
                  },
                  {
                    key: "CONSENT_TYPE",
                    get: function () {
                      return "gdpr";
                    },
                  },
                ]
              ),
              e
            );
          })();
        t.default = f;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(152),
          r = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i),
          o = n(27),
          a = n(39),
          s = "undefined" == typeof Promise ? n(0).Promise : Promise;
        t.default = function () {
          return new s(function (e) {
            var t = r.default.get(o.CONSENT_V2_COOKIE_NAME);
            e(t ? (0, a.createConsentObjFromString)(t, 2) : void 0);
          });
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(27),
          r = n(39),
          o = "undefined" == typeof Promise ? n(0).Promise : Promise,
          a = function (e) {
            return new o(function (t) {
              e("getTCData", 2, function (e, n) {
                t(n && e ? e.tcString : void 0);
              }),
                setTimeout(function () {
                  t(void 0);
                }, i.CONSENT_V2_RESPONSE_TIMEOUT);
            });
          };
        t.default = function () {
          return new o(function (e) {
            return (0, r.locateConsentManagementFunc)("__tcfapi").then(
              function (t) {
                t
                  ? a(t)
                      .then(function (t) {
                        e((0, r.createConsentObjFromString)(t, 2));
                      })
                      .catch(function () {
                        return e(void 0);
                      })
                  : e(void 0);
              }
            );
          });
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function o(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        function a(e) {
          (0, c.registerElement)(e, "BOARD", f);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Board = void 0);
        var s = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        t.default = a;
        var l = n(20),
          c = n(21),
          u = n(23),
          d = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(u),
          p = "undefined" == typeof Promise ? n(0).Promise : Promise,
          f = (t.Board = (function (e) {
            function t() {
              return (
                i(this, t),
                r(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(t, e),
              s(t, [
                {
                  key: "buildCallback",
                  value: function () {
                    (this.boardBaseUrl = "https://boards.apester.com"),
                      (this.channelId = this.options.channelId),
                      (this.height = this.options.height),
                      (this.boardTitle = this.options.title),
                      (this.iframe = null),
                      (this.iframePromise = null);
                  },
                },
                {
                  key: "constructUrl",
                  value: function (e) {
                    return this.boardBaseUrl + "/?channelId=" + e;
                  },
                },
                {
                  key: "constructIframe",
                  value: function () {
                    var e = this.element.ownerDocument.createElement("iframe");
                    return (
                      e.setAttribute("title", "Apester - Interactive content"),
                      e.setAttribute("board-title", this.boardTitle),
                      e.setAttribute("height", this.height),
                      e.setAttribute("id", "board"),
                      e.setAttribute("frameBorder", "0"),
                      (e.src = "about:blank"),
                      e.classList.add("apester-fill-content"),
                      e
                    );
                  },
                },
                {
                  key: "getIframePromise",
                  value: function (e) {
                    var t = this;
                    return (function () {
                      return d.default.get(e);
                    })().then(
                      function (e) {
                        t.iframe.contentWindow.document.open(
                          "text/html",
                          "replace"
                        ),
                          t.iframe.contentDocument.write(e),
                          t.iframe.contentDocument.close();
                      },
                      function () {
                        return p.reject();
                      }
                    );
                  },
                },
                {
                  key: "layoutCallback",
                  value: function () {
                    var e = this,
                      t = this.constructUrl(this.channelId);
                    return (
                      (this.iframe = this.constructIframe()),
                      (this.iframePromise = this.getIframePromise(t)),
                      this.element.appendChild(this.iframe),
                      this.iframePromise.then(function () {
                        return e.iframe;
                      })
                    );
                  },
                },
              ]),
              t
            );
          })(l.BaseElement));
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t, n) {
          n ? t.appendChild(e) : t.parentNode.insertBefore(e, t.nextSibling);
        }
        function o() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = document.createElement("div");
          return (
            e
              ? t.classList.add("sliding-container")
              : t.classList.add("apester-companion-container"),
            t
          );
        }
        function a() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = void 0;
          if (
            (e.publisher &&
              e.publisher.companion &&
              ((t = t || e.publisher.companion),
              (t = f.isMobile ? t.mobile : t.desktop)),
            e.companion &&
              ((t = t || e.companion), (t = f.isMobile ? t.mobile : t.desktop)),
            e.campaignData &&
              (t = e.campaignData.companionOptions) &&
              (t.campaignId =
                e.campaignData.companionCampaignOptions &&
                e.campaignData.companionCampaignOptions.companionCampaignId),
            !t || !t.attributes)
          )
            return t;
        }
        function s(e, t, n, i, r) {
          var o =
              window.APESTER.unitsManagers_ &&
              window.APESTER.unitsManagers_.find(function (e) {
                return "strip" === e.type;
              }),
            a = function () {
              return setTimeout(function () {
                e.load(!0), (0, g.default)(t, n, i, r);
              }, 0);
            };
          if (o && o.isInViewport_) a();
          else {
            var s = function e() {
              window.removeEventListener("mediaInView", e), a();
            };
            window.addEventListener("mediaInView", s);
          }
        }
        function l(e, t) {
          var n = "desktop" === (0, f.getPlatform)(),
            i = e.stripAdPosition,
            r = e.enabledOnStrip;
          return n && t && r && "slider" === i;
        }
        function c(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return new b(function (i, c) {
            var d = void 0;
            if (e) {
              var h = a(t);
              if (h && h.enabled) {
                var v = h.enabledOnStrip;
                if (!n || v) {
                  var g = l(h, n),
                    y = o(g),
                    E = e.ownerDocument.defaultView,
                    w = (0, m.default)(
                      t.publisherId,
                      t.campaignData.countryData
                    );
                  b
                    .all([w, (0, _.default)()])
                    .then(function (r) {
                      var o = u(r, 2),
                        a = o[0],
                        s = o[1];
                      return (
                        (d = p.default.getImplementation(E, h, t, n, e, a, s)),
                        i(d),
                        d.init()
                      );
                    })
                    .then(function (n) {
                      (0, f.isPMCDisabledAds)() ||
                        (y.appendChild(n), g ? s(d, e, y, E, t) : d.load(!0));
                    })
                    .catch(function (e) {
                      i();
                    }),
                    r(y, e, g);
                } else i();
              } else i();
            } else i();
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = (function () {
          function e(e, t) {
            var n = [],
              i = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(i = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                i = !0
              );
            } catch (e) {
              (r = !0), (o = e);
            } finally {
              try {
                !i && s.return && s.return();
              } finally {
                if (r) throw o;
              }
            }
            return n;
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })();
        t.default = c;
        var d = n(77),
          p = i(d),
          f = n(1),
          h = n(10),
          m = i(h),
          v = n(78),
          g = i(v),
          y = n(8),
          _ = i(y),
          b = "undefined" == typeof Promise ? n(0).Promise : Promise;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.MIN_IOS_SDK_VERSION_CO_VIDEO_ADS = "3.0.4"),
          (t.MIN_ANDROID_SDK_VERSION_CO_VIDEO_ADS = "1.6.3");
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t, n, i) {
          var r = document.createElement("div");
          if (i) return (r.id = b), r;
          (r.id = _ + Math.random()),
            r.classList.add("apester-companion-video"),
            (0, c.isTimeDomain)(window.document.domain) &&
              r.classList.add("apester-element");
          var o = (0, c.getVideoAdMargin)(n, t),
            a = o.marginBelow,
            s = o.marginAbove;
          return (
            (r.style.margin = s + "px auto " + a + "px"),
            (r.style.width = "1px"),
            (r.style.height = "1px"),
            (r.style.overflow = "hidden"),
            (0, c.hideCompanionPlayer)(r),
            r
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          a = n(10),
          s = n(5),
          l = n(4),
          c = n(1),
          u = n(3),
          d = n(12),
          p = i(d),
          f = n(11),
          h = n(8),
          m = n(13),
          v = i(m),
          g = "undefined" == typeof Promise ? n(0).Promise : Promise,
          y = void 0,
          _ = "apester-companion-video",
          b = c.isMobile
            ? "apester-floating-video-mobile"
            : "apester-floating-video",
          E = {
            loop: !1,
            controls: {
              ads: { sound: !0, pause: !0, progress: !0, remainigTime: !0 },
            },
          },
          w = new g(function (e) {
            var t = (0, c.getMobileInAppParams)(),
              n = t.advertisingId,
              i = t.appName,
              r = t.bundleId;
            e({
              gdpr: { gdpr: 1, gdprString: t.gdprString },
              inAppMacros: {
                "m.dnt": t.trackingEnabled ? 0 : 1,
                "m.app_name": i,
                "m.ifa": n,
                "m.bundle_id": r,
              },
            });
          });
        t.default = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = t.layout,
            d = t.publisherId,
            m = t.publisher,
            _ = t.interactionId,
            b = t.campaignData;
          if (!b || !b.companionOptions || (0, c.isPMCDisabledAds)())
            return g.resolve();
          var I = b.countryData,
            T = b.companionCampaignOptions.companionCampaignId,
            O = b.companionOptions,
            S = O.consentConfigurations,
            A = O.video;
          A = void 0 === A ? {} : A;
          var P = A.loadAdOn,
            k = A.loadAdOnProps,
            C = A.videoTag,
            N = A.enabled,
            M = A.floating;
          M = void 0 === M ? {} : M;
          var R = M.enabled,
            L = A.companion;
          L = void 0 === L ? {} : L;
          var x = L.shouldPauseWhenOutOfView,
            D = A.companion_below;
          D = void 0 === D ? {} : D;
          var V = D.enabled,
            j = D.shouldPauseWhenOutOfView;
          if (!N) return g.resolve();
          var U = !0,
            F = void 0,
            B = void 0,
            W = i && i.directive,
            z = function () {
              return (0, c.getCompanionVideoAdSize)(e, W, 9 / 16);
            },
            Y = z(),
            H = { type: P, configuration: k },
            G = V ? j : x,
            q = (0, c.createCompanionReportObj)("sr_v2", t, n, U),
            K = new r(e, V, n, R),
            Z = V || R ? e.nextSibling : e;
          return (
            e.parentNode.insertBefore(K, Z),
            (0, u.companionLoadingPending)(q),
            (c.isApesterInapp ? w : (0, a.getConsent)(d, I, S))
              .then(function (e) {
                var t = e.gdpr;
                t = void 0 === t ? {} : t;
                var n = t.gdpr,
                  i = t.gdprString,
                  r = e.inAppMacros,
                  a = void 0 === r ? {} : r;
                return (0,
                c.filterUndefinedValuesInObject)(o({ "m.dnt": 0, "m.gdpr": n, "m.page_url": (0, c.getPageUrl)(), "m.user_consent": i, "m.ua": navigator.userAgent || navigator.vendor || window.opera, "m.sub_id": _, "m.param1": _, "m.param2": d, "m.param3": (0, c.getSessionId)(), "m.param4": "apester.com:" + m.groupId, "m.param5": "1.0,1!apester.com," + m.groupId + ",1,,,", "m.param6": T, "m.param7": Y.width, "m.param8": (0, l.extractHostnameFromCanonicalUrlOrWindow)(), "m.param9": Y.height }, a));
              })
              .then(function (e) {
                var t = "_APESTER_COMPANION_SR_INIT_" + K.id,
                  n = "_APESTER_COMPANION_SR_CONFIG_" + K.id;
                window[n] = E;
                var i = o({ t: "bladex", c: K.id, config: n, callback: t }, e);
                return (
                  (0, s.loadScript)(
                    window,
                    "https://ssr.streamrail.net/js/5857d2ee263dc90002000001/" +
                      C +
                      "/player.js?" +
                      (0, c.encodeQueryParameters)(i)
                  ),
                  new g(function (e, n) {
                    window[t] = function (t, i) {
                      if (t) return void n(t);
                      (y = i), e();
                    };
                  })
                );
              })
              .then(function (e) {
                return (0, u.companionLoadingSuccess)(q);
              })
              .catch(function (e) {
                return (0, u.companionLoadingFailed)(q);
              })
              .then(function () {
                return (0, h.getViewabilityObserver)();
              })
              .then(function (e) {
                return (0, h.setLoadTriggerPromise)(e, K, H);
              })
              .then(function () {
                return (
                  (0, u.companionImpressionPending)(q),
                  (0, c.listenToKillPMCAdsEvent)(function () {
                    K.remove(), (0, f.syncAdBelowClosed)(), y.dispose();
                  }),
                  y.on("AdImpression", function () {
                    G &&
                      (F && F.disconnect(),
                      (0, h.getPauseVideoWhenOutOfViewObserver)(
                        K,
                        y,
                        c.isApesterInapp
                      ).then(function (e) {
                        F = e;
                      }));
                    var e = z();
                    (0, c.showCompanionPlayer)(K, e), y.resize();
                    var t = parseInt(K.style.marginBottom) || 0,
                      n = parseInt(K.style.marginTop) || 0;
                    (0, f.syncAdBelowOpen)(e.width, e.height + n + t),
                      (q.reason = (0, c.getReasonReport)(U)),
                      (q.monTriggerType = U
                        ? v.default.START
                        : v.default.REFRESH),
                      (0, u.companionImpression)(q),
                      (U = !1);
                    var i = K.firstElementChild || K;
                    (0, p.default)(i, q).then(function (e) {
                      B = e;
                    });
                  }),
                  y.on("AdStopped", function () {
                    F && (F.disconnect(), (F = void 0)),
                      B && (B.disconnect(), (B = void 0)),
                      (0, u.companionImpressionStopped)(q),
                      (q.reason = (0, c.getReasonReport)(U)),
                      (0, u.companionImpressionPending)(q);
                  }),
                  y.on("playerDone", function () {
                    F && (F.disconnect(), (F = void 0)),
                      B && (B.disconnect(), (B = void 0)),
                      (0, f.syncAdsCompleted)(),
                      (0, f.syncAdBelowClosed)(),
                      K.remove();
                  }),
                  {
                    Player: y,
                    remove: function () {
                      K && K.remove(), (0, f.syncAdBelowClosed)(), y.dispose();
                    },
                  }
                );
              })
              .catch(function (e) {
                (0,
                u.companionImpressionFailed)(o({}, q, { reason: "player_init_fail" }));
              })
          );
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          o = n(5),
          a = n(1),
          s = n(3),
          l = n(12),
          c = i(l),
          u = n(41),
          d = i(u),
          p = n(11),
          f = n(8),
          h = n(13),
          m = i(h),
          v = "undefined" == typeof Promise ? n(0).Promise : Promise,
          g = a.isMobile
            ? "apester-floating-video-mobile"
            : "apester-floating-video",
          y = void 0,
          _ = function (e) {
            return (
              (0, s.companionLoadingPending)(e),
              y ||
                ((y = new v(function (e) {
                  window.srAsyncInit = function () {
                    e();
                  };
                })),
                (0, o.loadScript)(
                  window,
                  "https://sdk.streamrail.com/blade/sr.bladex.js"
                )
                  .then(function (t) {
                    (0, s.companionLoadingSuccess)(e);
                  })
                  .catch(function (t) {
                    (0, s.companionLoadingFailed)(e);
                  })),
              y
            );
          },
          b = function (e) {
            var t = document.createElement("div");
            return (t.id = g), e.parentNode.insertBefore(t, e.nextSibling), t;
          },
          E = function (e, t, n, i, r) {
            var o = document.createElement("div");
            (o.id = "apester-companion-video" + Math.random()),
              o.classList.add("apester-companion-video"),
              (0, a.isTimeDomain)(window.document.domain) &&
                o.classList.add("apester-element");
            var s = (0, a.getVideoAdMargin)(i, r),
              l = s.marginBelow,
              c = s.marginAbove;
            (o.style.margin = c + "px auto " + l + "px"),
              (o.style.width = "1px"),
              (o.style.height = "1px"),
              (o.style.overflow = "hidden"),
              (0, a.hideCompanionPlayer)(o);
            var u = t ? e.nextSibling : e;
            return e.parentNode.insertBefore(o, u), o;
          },
          w = function (e, t, n) {
            var i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = arguments[4],
              l = arguments[5],
              u = e.campaignData,
              h = u.companionCampaignOptions.companionCampaignId,
              v = u.companionOptions,
              g = v.video.videoTag,
              y = v.consentConfigurations;
            return (0, d.default)(e, h, t, y).then(function (t) {
              var u = !0,
                d = void 0,
                h = void 0,
                v = (0, a.createCompanionReportObj)("sr", e, i, u),
                y = {
                  type: e.campaignData.companionOptions.video.loadAdOn,
                  configuration:
                    e.campaignData.companionOptions.video.loadAdOnProps,
                };
              return (0, f.getViewabilityObserver)()
                .then(function (e) {
                  return (0, f.setLoadTriggerPromise)(e, n, y);
                })
                .then(function () {
                  return window.SR(n.id, {
                    playerId: g,
                    apiKey: "5857d2ee263dc90002000001",
                    version: "1.0",
                    macros: t,
                  });
                })
                .then(function (e) {
                  return (
                    (0, s.companionImpressionPending)(v),
                    (0, a.isPMCDisabledAds)()
                      ? {}
                      : (e.on("AdImpression", function () {
                          l &&
                            (d && d.disconnect(),
                            (0, f.getPauseVideoWhenOutOfViewObserver)(
                              n,
                              e,
                              a.isApesterInapp
                            ).then(function (e) {
                              d = e;
                            }));
                          var t = o();
                          (0, a.showCompanionPlayer)(n, t), e.resize();
                          var i = parseInt(n.style.marginBottom) || 0,
                            r = parseInt(n.style.marginTop) || 0;
                          (0, p.syncAdBelowOpen)(t.width, t.height + r + i),
                            (v.reason = (0, a.getReasonReport)(u)),
                            (v.monTriggerType = u
                              ? m.default.START
                              : m.default.REFRESH),
                            (0, s.companionImpression)(v),
                            (u = !1);
                          var g = n.firstElementChild || n;
                          (0, c.default)(g, v).then(function (e) {
                            h = e;
                          });
                        }),
                        e.on("AdStopped", function () {
                          d && (d.disconnect(), (d = void 0)),
                            (0, s.companionImpressionStopped)(v),
                            (v.reason = (0, a.getReasonReport)(u)),
                            (0, s.companionImpressionPending)(v),
                            h && (h.disconnect(), (h = void 0));
                        }),
                        e.on("playerDone", function () {
                          d && (d.disconnect(), (d = void 0)),
                            (0, p.syncAdBelowClosed)(),
                            (0, p.syncAdsCompleted)(),
                            n.remove(),
                            h && (h.disconnect(), (h = void 0));
                        }),
                        (0, a.listenToKillPMCAdsEvent)(function () {
                          n.remove(), (0, p.syncAdBelowClosed)(), e.dispose();
                        }),
                        {
                          player: e,
                          remove: function () {
                            n && n.remove(),
                              (0, p.syncAdBelowClosed)(),
                              e.dispose();
                          },
                        })
                  );
                })
                .catch(function (e) {
                  (0,
                  s.companionImpressionFailed)(r({}, v, { reason: "player_init_fail" }));
                });
            });
          };
        t.default = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return new v(function (i) {
            if (
              t.campaignData &&
              t.campaignData.companionOptions &&
              t.campaignData.companionOptions.settings
            ) {
              var r = t.campaignData.companionOptions.video || {},
                o = r.floating,
                s = r.companion,
                l = r.companion_below,
                c = r.enabled,
                u = o || {},
                d = u.enabled,
                p = s || {},
                f = p.enabled,
                h = l || {},
                m = h.enabled,
                v = m ? l.shouldPauseWhenOutOfView : s.shouldPauseWhenOutOfView;
              if (c && (d || f || m)) {
                var g = t.layout,
                  y = g && g.directive,
                  I = function () {
                    return (0, a.getCompanionVideoAdSize)(e, y, 9 / 16);
                  },
                  T = d ? void 0 : I(),
                  O = d ? b(e) : E(e, m, 0, n, m),
                  S = (0, a.createCompanionReportObj)("sr", t, n, !0);
                return i(
                  _(S).then(function () {
                    return w(t, T, O, n, I, v);
                  })
                );
              }
              i();
            } else i();
          });
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(79),
          o = i(r),
          a = n(81),
          s = i(a),
          l = n(80),
          c = i(l);
        t.default = {
          getImplementation: function (e, t, n, i, r, a, l) {
            switch (t.settings.bannerAdProvider) {
              case "minuteMedia":
                return new c.default(e, t, n, i, r, a, l);
              case "rtk":
                return new s.default(e, t, n, i, r, a, l);
              case "gdt":
              case "gpt":
              default:
                return new o.default(e, t, n, i, r, a, l);
            }
          },
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t, n) {
          t.classList.remove(d),
            t.classList.add(u),
            setTimeout(function () {
              if (t.parentNode == e) {
                e.removeChild(t);
                var i = n.campaignData.companionOptions || {},
                  r = i.settings && i.settings.bannerAdProvider;
                (0, s.slidingAdSkipped)(n.channelId, i.campaignId, r);
              }
            }, c);
        }
        function r(e, t, n) {
          setTimeout(function () {
            i(e, t, n);
          }, l),
            t.classList.add(d);
        }
        function o(e, t, n, i, o) {
          return function a(s) {
            "rtk" === i
              ? (s.type === p && r(e, t, o),
                f.forEach(function (e) {
                  return n.removeEventListener(e, a);
                }))
              : s.isEmpty || r(e, t, o);
          };
        }
        function a(e, t, n, r) {
          var a = document.createElement("div");
          a.classList.add("close-btn"),
            (a.onclick = function () {
              i(e, t, r);
            }),
            t.appendChild(a);
          var s = r.campaignData.companionOptions || {},
            l = s.settings && s.settings.bannerAdProvider,
            c = o(e, t, n, l, r);
          "rtk" === l
            ? f.forEach(function (e) {
                return n.addEventListener(e, c);
              })
            : n.googletag.pubads().addEventListener(h, c);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
        var s = n(3),
          l = 15e3,
          c = 1e3,
          u = "sliding-out",
          d = "sliding-in",
          p = "JITA_AdServed",
          f = [p, "JITA_NoAdServed"],
          h = "slotRenderEnded";
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        }
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e) {
          var t = document.createElement("div");
          return (t.id = e), t.classList.add("apester-companion"), t;
        }
        function s(e, t, n) {
          var i = e.getAttribute("adunit");
          return i || (O(t, n) ? n.stripAUC : n.settings.slot);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          c = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          u = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          d = n(5),
          p = n(9),
          f = n(3),
          h = n(13),
          m = i(h),
          v = n(42),
          g = n(11),
          y = n(1),
          _ = n(29),
          b = n(12),
          E = i(b),
          w = n(8),
          I = "undefined" == typeof Promise ? n(0).Promise : Promise,
          T = m.default.START,
          O = function (e, t) {
            return e && t.enabledOnStrip && t.stripAUC;
          },
          S = (function () {
            function e(t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = arguments[3],
                a = arguments[4],
                l = arguments[5],
                c = arguments[6];
              o(this, e),
                (this.win = t),
                (this.adSlot = void 0),
                (this.model = i),
                (this.isStrip = r),
                (this.channelId = i.publisher
                  ? i.publisher.publisherId
                  : i.channelId || ""),
                (this.campaignId = n.campaignId),
                (this.companionModel = n);
              var u = this.companionModel.settings;
              (this.refreshCallback = this.refreshSlot),
                (this.interactionId = i.interactionId),
                (this.id = "apester-companion-" + (0, p.s4)()),
                (this.displayWrapper = void 0),
                (this.slotTag = s(a, r, n)),
                (this.bannerSizes =
                  u && O(r, n) ? u.bannerSizesStrip : u.bannerSizes),
                (this.displayElement = void 0),
                (this.inView = !1),
                (this.interactionElement = a),
                (this.viewabilityObserver = c),
                (this.reportProperties = void 0),
                (this.viewabilityTrackingObserver = void 0),
                (this.adServingCallback = function () {}),
                l.gdpr.gdpr &&
                  l.gdpr.gdprString &&
                  (this.consentString = l.gdpr.gdprString.slice(0, 10));
            }
            return (
              u(e, [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    this.displayWrapper = a(this.id);
                    var t = this.companionModel.settings,
                      n = Math.max.apply(
                        Math,
                        r(
                          this.bannerSizes.map(function (e) {
                            return e[1];
                          })
                        )
                      );
                    this.displayWrapper.style.maxHeight = n + "px";
                    var i = (0, y.getCompanionMargin)(
                        y.isApesterInapp,
                        y.isMobile
                      ),
                      o = c(i, 2),
                      s = o[0],
                      l = o[1];
                    this.displayWrapper.style.margin =
                      s + "px auto " + l + "px";
                    var u = function () {
                        return I.resolve();
                      },
                      p = this.win.googletag ? u : d.loadScript;
                    return (
                      (this.reportProperties = (0, y.createCompanionReportObj)(
                        "gpt",
                        this.model,
                        this.isStrip,
                        !0,
                        this.consentString
                      )),
                      (0, f.companionLoadingPending)(this.reportProperties),
                      p(
                        this.win,
                        "https://www.googletagservices.com/tag/js/gpt.js"
                      )
                        .then(function () {
                          return (
                            (0, f.companionLoadingSuccess)(e.reportProperties),
                            (e.win.googletag = e.win.googletag || {}),
                            (e.win.googletag.cmd = e.win.googletag.cmd || []),
                            new I(function (e, n) {
                              t.slot || n("No slot defined"),
                                (0, _.waitForGPTRdy)(e, n, 30);
                            })
                          );
                        })
                        .then(function () {
                          return e.displayWrapper;
                        })
                        .catch(function (t) {
                          (0, f.companionLoadingFailed)(e.reportProperties),
                            console.log(t);
                        })
                    );
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var t = this;
                    e &&
                      this.win.googletag.cmd.push(function () {
                        t.adSlot = (0, _.createGPTSlot)(
                          t.id,
                          t.companionModel.settings.options,
                          t.channelId,
                          t.slotTag,
                          t.bannerSizes
                        );
                      }),
                      this.win.googletag.cmd.push(function () {
                        (t.displayElement =
                          (t.displayWrapper &&
                            t.displayWrapper.firstElementChild) ||
                          t.displayWrapper),
                          (t.adServingCallback = function (e) {
                            if (e.slot === t.adSlot)
                              if (e.isEmpty)
                                (0, f.companionLoadingFailed)(
                                  t.reportProperties
                                );
                              else {
                                var n = c(e.size, 2),
                                  i = n[0],
                                  r = n[1],
                                  o = (0, y.getCompanionMargin)(
                                    y.isApesterInapp,
                                    y.isMobile
                                  ),
                                  a = c(o, 2),
                                  s = a[0];
                                a[1];
                                (0, g.syncAdBelowOpen)(i, r + s),
                                  (0, f.companionImpression)(
                                    l(
                                      {},
                                      t.reportProperties,
                                      (0, y.getCustomDisplayReportParams)(T, e)
                                    )
                                  ),
                                  t.viewabilityTrackingObserver &&
                                    (t.viewabilityTrackingObserver.disconnect(),
                                    (t.viewabilityTrackingObserver = void 0)),
                                  (0, E.default)(
                                    t.displayElement,
                                    t.reportProperties
                                  ).then(function (e) {
                                    t.viewabilityTrackingObserver = e;
                                  });
                              }
                          }),
                          t.win.googletag
                            .pubads()
                            .addEventListener(
                              "slotRenderEnded",
                              t.adServingCallback
                            ),
                          (0, y.listenToKillPMCAdsEvent)(function () {
                            t.displayWrapper &&
                              t.displayWrapper.parentNode &&
                              t.displayWrapper.parentNode.remove(),
                              window.removeEventListener(
                                "slotRenderEnded",
                                t.adServingCallback
                              );
                          }),
                          e &&
                            ((t.lastCall = new Date().getTime()),
                            (t.autoRefreshTime = (0, v.setRefreshHandler)(
                              t.refreshCallback.bind(t, !1),
                              t.companionModel.settings.options
                            )));
                        var n = {
                            destroyObserverOnEnter: !1,
                            onEnter: t.onEnterView.bind(t),
                            onExit: t.onExitView.bind(t),
                          },
                          i = {
                            type: t.companionModel.settings.options.loadAdOn,
                            configuration:
                              t.companionModel.settings.options.loadAdOnProps,
                          };
                        (0, w.setLoadTriggerPromise)(
                          t.viewabilityObserver,
                          t.displayElement,
                          i,
                          n
                        ).then(function () {
                          (t.inView = !0), t.refreshCallback(e);
                        });
                      });
                  },
                },
                {
                  key: "onEnterView",
                  value: function () {
                    this.inView = !0;
                    var e = new Date().getTime();
                    e - this.lastCall >= this.autoRefreshTime &&
                      ((this.lastCall = e), this.refreshCallback(!1));
                  },
                },
                {
                  key: "onExitView",
                  value: function () {
                    this.inView = !1;
                  },
                },
                {
                  key: "refreshSlot",
                  value: function (e) {
                    this.inView &&
                      (e && this.win.googletag.display(this.id),
                      (T = e ? m.default.START : m.default.REFRESH),
                      (this.reportProperties = (0, y.createCompanionReportObj)(
                        "gpt",
                        this.model,
                        this.isStrip,
                        Boolean(e)
                      )),
                      (0, f.companionImpressionPending)(this.reportProperties),
                      (e &&
                        !this.win.googletag.pubads().isInitialLoadDisabled()) ||
                        this.win.googletag.pubads().refresh([this.adSlot]));
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    var e = this;
                    window.removeEventListener(
                      "slotRenderEnded",
                      this.handleAdImpression
                    ),
                      this.displayWrapper &&
                        this.displayWrapper.parentNode &&
                        this.displayWrapper.parentNode.remove(),
                      this.viewabilityTrackingObserver &&
                        (this.viewabilityTrackingObserver.disconnect(),
                        (this.viewabilityTrackingObserver = void 0)),
                      window.googletag.cmd.push(function () {
                        window.googletag.destroySlots([e.adSlot]);
                      }),
                      (this.id = "apester-companion-" + (0, p.s4)());
                  },
                },
              ]),
              e
            );
          })();
        t.default = S;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e) {
          var t = document.createElement("div");
          return (t.id = e), t.classList.add("apester-companion"), t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          a = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          s = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          l = n(9),
          c = n(11),
          u = n(2),
          d = n(22),
          p = n(3),
          f = n(1),
          h = (function () {
            function e(t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                o = arguments[3],
                a = arguments[4],
                s = arguments[5];
              i(this, e),
                (this.win = t),
                (this.model = r),
                (this.isStrip = o),
                (this.companionModel = n),
                (this.channelId = r.publisherId || ""),
                (this.interactionId = r.interactionId),
                (this.campaignId = n.campaignId),
                (this.id = "apester-companion-" + (0, l.s4)()),
                (this.displayWrapper = void 0),
                (this.reportProperties = void 0),
                (this.isKickerStrip =
                  o && u.GERMAN_PUBLISHERS[this.model.publisherId]),
                (this.interactionElement = s),
                (this.adUnitCode = (0, d.selectAdUnit)(
                  s,
                  n.settings ? n.settings.tagId : ""
                ));
              var c = (0, d.getMinuteMediaAdProvider)(),
                p = c.initMethod,
                f = c.displayMethod,
                h = c.getSizesList;
              (this.sizeList = h(n)),
                (this.initMethod = p),
                (this.displayMethod = f),
                a.gdpr.gdpr &&
                  a.gdpr.gdprString &&
                  (this.consentString = a.gdpr.gdprString.slice(0, 10));
            }
            return (
              s(e, [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    this.displayWrapper = r(this.id, this.isKickerStrip);
                    var t = (0, f.getCompanionMargin)(
                        f.isApesterInapp,
                        f.isMobile
                      ),
                      n = a(t, 2),
                      i = n[0],
                      o = n[1];
                    return (
                      (this.displayWrapper.style.margin =
                        i + "px auto " + o + "px"),
                      (this.reportProperties = (0, f.createCompanionReportObj)(
                        "minuteMedia",
                        this.model,
                        this.isStrip,
                        !0,
                        this.consentString
                      )),
                      (0, p.companionLoadingPending)(this.reportProperties),
                      this.initMethod(this.channelId)
                        .then(function () {
                          return (
                            (0, p.companionLoadingSuccess)(e.reportProperties),
                            e.displayWrapper
                          );
                        })
                        .catch(function (t) {
                          (0, p.companionLoadingFailed)(e.reportProperties),
                            console.log(t);
                        })
                    );
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var t = this;
                    (this.adServingCallback = function (e) {
                      if (t.isKickerStrip) {
                        var n = a(e.size, 2),
                          i = n[0],
                          r = n[1],
                          s = (0, f.getCompanionMargin)(
                            f.isApesterInapp,
                            f.isMobile
                          ),
                          l = a(s, 1),
                          u = l[0];
                        (0, c.syncAdBelowOpen)(i, r + u);
                      }
                      (0, p.companionImpression)(o({}, t.reportProperties));
                    }),
                      (0, p.companionImpressionPending)(this.reportProperties),
                      this.displayMethod(
                        this.id,
                        this.channelId,
                        this.adUnitCode,
                        !0,
                        this.adServingCallback,
                        function () {
                          return (0, p.companionLoadingFailed)(
                            t.reportProperties
                          );
                        },
                        this.sizeList
                      ),
                      (0, f.listenToKillPMCAdsEvent)(function () {
                        t.displayWrapper &&
                          t.displayWrapper.parentNode &&
                          (t.displayWrapper.parentNode.remove(),
                          (0, c.syncAdBelowClosed)());
                      });
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    this.displayWrapper &&
                      this.displayWrapper.parentNode &&
                      (this.displayWrapper.parentNode.remove(),
                      (0, c.syncAdBelowClosed)()),
                      (this.id = "apester-companion-" + (0, l.s4)());
                  },
                },
              ]),
              e
            );
          })();
        t.default = h;
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t, n) {
          var i = document.createElement("div");
          return (
            (i.id = e),
            i.classList.add("apester-companion"),
            (i.style.maxWidth = t + "px"),
            (i.style.maxHeight = n + "px"),
            (i.style.height = "1px"),
            (i.style.margin = "0"),
            i
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          l = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          c = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          u = n(9),
          d = n(13),
          p = i(d),
          f = n(3),
          h = n(1),
          m = n(42),
          v = n(12),
          g = i(v),
          y = n(11),
          _ = n(2),
          b = n(8),
          E = n(31),
          w = "undefined" == typeof Promise ? n(0).Promise : Promise,
          I = ["JITA_AdServed", "JITA_NoAdServed"],
          T = 300,
          O = 728,
          S = 15,
          A = void 0,
          P = (function () {
            function e(t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = arguments[3],
                a = arguments[4],
                s = arguments[5],
                l = arguments[6];
              o(this, e),
                (this.win = t),
                (this.model = i),
                (this.isStrip = r),
                (this.companionModel = n),
                (this.channelId = i.publisherId || i.channelId),
                (this.interactionId = i.interactionId),
                (this.campaignId = n.campaignId),
                (this.elementId = "apester-companion-" + (0, u.s4)()),
                (this.auctionCode = n.settings.auctionCode),
                (this.scriptSrc =
                  "https://481.hostedprebid.com/" +
                  this.auctionCode +
                  "/jita.js?dfp=" +
                  (n.settings.dfp ? 1 : 0)),
                (this.adUnitCode =
                  r && n.enabledOnStrip && n.stripAUC
                    ? n.stripAUC
                    : n.settings.adUnitCode),
                (this.refreshCallback = this.refreshSlot),
                (this.maxWidth = O),
                (this.maxHeight = T + S),
                (this.displayWrapper = void 0),
                (this.displayElement = void 0),
                (this.isKickerStrip =
                  r && _.GERMAN_PUBLISHERS[this.model.publisherId]),
                (this.inView = !1),
                (this.interactionElement = a),
                (this.viewabilityObserver = l),
                (this.reportProps = {}),
                (this.viewabilityTrackingObserver = void 0),
                s.gdpr.gdpr &&
                  s.gdpr.gdprString &&
                  (this.consentString = s.gdpr.gdprString.slice(0, 10)),
                (this.adRenderedCallback = function () {});
            }
            return (
              c(e, [
                {
                  key: "getRelevantAdUnitCodes",
                  value: function () {
                    var e = this,
                      t = [this.companionModel.settings.adUnitCode];
                    return (
                      this.companionModel.stripAUC &&
                        !t.includes(this.companionModel.stripAUC) &&
                        t.push(this.companionModel.stripAUC),
                      this.model.campaignData.playerOptions &&
                      this.model.campaignData.playerOptions.length
                        ? (this.model.campaignData.playerOptions.forEach(
                            function (n) {
                              var i = n.player.provider;
                              "rtk" === i.type &&
                                i.options.auctionCode === e.auctionCode &&
                                (t.push(i.options.adUnitCode),
                                i.options.adUnitCode_interstitial &&
                                  t.push(i.options.adUnitCode_interstitial));
                            }
                          ),
                          t)
                        : t
                    );
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = this.getRelevantAdUnitCodes();
                    if (
                      ((window.rtkLazyAdUnitCodes = t.map(function (e) {
                        return "RTK_" + e;
                      })),
                      (this.reportProps = (0, h.createCompanionReportObj)(
                        "rtk",
                        this.model,
                        this.isStrip,
                        !0,
                        this.consentString
                      )),
                      (0, f.companionLoadingPending)(this.reportProps),
                      window.jitaJS)
                    )
                      return new w(function (t, n) {
                        (0, f.companionLoadingSuccess)(e.reportProps),
                          (e.displayWrapper = a(
                            e.elementId,
                            e.maxWidth,
                            e.maxHeight,
                            e.isKickerStrip
                          )),
                          t(e.displayWrapper);
                      }).catch(function (t) {
                        (0, f.companionLoadingFailed)(e.reportProps);
                      });
                    var n = {
                      channel_id: this.channelId,
                      interaction_id: this.interactionId,
                      campaign_id: this.campaignId,
                    };
                    return (0, E.initJita)(this.scriptSrc, n, this.adUnitCode)
                      .then(function () {
                        return (
                          (0, f.companionLoadingSuccess)(e.reportProps),
                          (e.displayWrapper = a(
                            e.elementId,
                            e.maxWidth,
                            e.maxHeight,
                            e.isKickerStrip
                          )),
                          e.displayWrapper
                        );
                      })
                      .catch(function (t) {
                        (0, f.companionLoadingFailed)(e.reportProps);
                      });
                  },
                },
                {
                  key: "adServingCallback",
                  value: function () {
                    var e = this;
                    return function (t) {
                      if (
                        "JITA_AdServed" === t.type &&
                        t.detail &&
                        t.detail.divId === e.elementId &&
                        t.detail.cpm &&
                        t.detail.adUnitCode === "RTK_" + e.adUnitCode
                      ) {
                        e.isKickerStrip &&
                          ((e.displayElement.style.width = void 0),
                          (e.displayElement.style.height = void 0),
                          (e.displayElement.style.maxWidth = e.maxWidth + "px"),
                          (e.displayElement.style.maxHeight =
                            e.maxHeight + "px"),
                          (e.displayElement.style.backgroundImage = ""),
                          (e.displayElement.onclick = void 0));
                        var n = (0, h.getCompanionMargin)(
                            h.isApesterInapp,
                            h.isMobile
                          ),
                          i = l(n, 2),
                          r = i[0],
                          o = i[1];
                        (e.displayWrapper.style.margin =
                          r + "px auto " + o + "px"),
                          (e.displayWrapper.style.height = "auto"),
                          (0, f.companionImpression)(
                            s(
                              {},
                              e.reportProps,
                              (0, h.getCustomDisplayReportParams)(A, t, !0)
                            )
                          ),
                          e.viewabilityTrackingObserver &&
                            (e.viewabilityTrackingObserver.disconnect(),
                            (e.viewabilityTrackingObserver = void 0)),
                          (0, g.default)(e.displayElement, e.reportProps).then(
                            function (t) {
                              e.viewabilityTrackingObserver = t;
                            }
                          ),
                          setTimeout(function () {
                            var t =
                              e.displayWrapper.firstElementChild.getBoundingClientRect();
                            (0, y.syncAdBelowOpen)(t.width, t.height + r);
                          }, 300),
                          (e.displayElement =
                            (e.displayWrapper &&
                              e.displayWrapper.firstElementChild) ||
                            e.displayWrapper);
                      } else
                        t.detail &&
                          t.detail.divId === e.elementId &&
                          (e.isKickerStrip || e.remove());
                    };
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var t = this;
                    try {
                      if (!window.jitaJS) return;
                      (this.reportProps = (0, h.createCompanionReportObj)(
                        "rtk",
                        this.model,
                        this.isStrip,
                        e
                      )),
                        (this.displayElement =
                          (this.displayWrapper &&
                            this.displayWrapper.firstElementChild) ||
                          this.displayWrapper),
                        e &&
                          ((this.lastCall = new Date().getTime()),
                          (this.autoRefreshTime = (0, m.setRefreshHandler)(
                            this.refreshCallback.bind(this, !1),
                            this.companionModel.settings.options
                          )),
                          (this.adRenderedCallback = this.adServingCallback()),
                          I.forEach(function (e) {
                            window.top.addEventListener(
                              e,
                              t.adRenderedCallback,
                              !1
                            ),
                              (0, h.listenToKillPMCAdsEvent)(function () {
                                t.displayWrapper &&
                                  t.displayWrapper.parentNode &&
                                  t.remove(),
                                  window.top.removeEventListener(
                                    e,
                                    t.adRenderedCallback,
                                    !1
                                  );
                              });
                          }));
                      var n = {
                          destroyObserverOnEnter: !1,
                          onEnter: this.onEnterView.bind(this),
                          onExit: this.onExitView.bind(this),
                        },
                        i = {
                          type: this.companionModel.settings.options.loadAdOn,
                          configuration:
                            this.companionModel.settings.options.loadAdOnProps,
                        };
                      (0, b.setLoadTriggerPromise)(
                        this.viewabilityObserver,
                        this.displayElement,
                        i,
                        n
                      ).then(function () {
                        (t.inView = !0), t.refreshCallback(!0);
                      });
                    } catch (e) {
                      console.error("Error loading RTK companion " + e.message);
                    }
                  },
                },
                {
                  key: "onEnterView",
                  value: function () {
                    this.inView = !0;
                    var e = new Date().getTime();
                    e - this.lastCall >= this.autoRefreshTime &&
                      ((this.lastCall = e), this.refreshCallback(!1));
                  },
                },
                {
                  key: "onExitView",
                  value: function () {
                    this.inView = !1;
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    var e = this;
                    window.JITA.destroySlot(this.elementId),
                      I.forEach(function (t) {
                        window.top.removeEventListener(
                          t,
                          e.adServingCallback,
                          !1
                        );
                      }),
                      this.displayWrapper &&
                        this.displayWrapper.parentNode &&
                        this.displayWrapper.parentNode.remove(),
                      this.viewabilityTrackingObserver &&
                        (this.viewabilityTrackingObserver.disconnect(),
                        (this.viewabilityTrackingObserver = void 0)),
                      (this.elementId = "apester-companion-" + (0, u.s4)());
                  },
                },
                {
                  key: "refreshSlot",
                  value: function (e) {
                    this.inView &&
                      this.displayWrapper.parentNode &&
                      this.displayWrapper.parentNode.parentNode &&
                      ((this.reportProps = (0, h.createCompanionReportObj)(
                        "rtk",
                        this.model,
                        this.isStrip,
                        Boolean(e)
                      )),
                      (A = e ? p.default.START : p.default.REFRESH),
                      (0, f.companionImpressionPending)(this.reportProps),
                      window.jitaJS.rtk.refreshAdUnits(
                        ["RTK_" + this.adUnitCode],
                        !0,
                        r({}, "RTK_" + this.adUnitCode, this.elementId)
                      ));
                  },
                },
              ]),
              e
            );
          })();
        t.default = P;
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e) {
          var t = e.layout,
            n = e.campaignData;
          return (
            n.bottomAdOptions &&
            n.bottomAdOptions.enabled &&
            !d.BOTTOM_AD_ENGINE_DENYLIST.includes(t.directive)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BOTTOM_AD_HEIGHT = void 0);
        var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        t.hasBottomAd = o;
        var s = n(9),
          l = n(3),
          c = n(1),
          u = n(7),
          d = n(2),
          p = n(83),
          f = i(p),
          h = n(85),
          m = i(h),
          v = n(84),
          g = i(v),
          y = n(10),
          _ = i(y),
          b = "undefined" == typeof Promise ? n(0).Promise : Promise,
          E = (t.BOTTOM_AD_HEIGHT = 50),
          w = (function () {
            function e(t, n, i, o) {
              switch (
                (r(this, e),
                (this.fullscreen = !1),
                (this.isStrip = Boolean(i)),
                (this.interactionModel = n),
                (this.interactionElement = t),
                (this.publisherId = this.interactionModel.publisherId),
                (this.adContainer = document.createElement("div")),
                (this.adContainer.id = "apester-bottom-ad-" + (0, s.s4)()),
                this.adContainer.classList.add("bottom-ad-container"),
                this.interactionElement.appendChild(this.adContainer),
                (this.campaignId = (0, u.extractVideoCampaignIdFromModel)(
                  this.interactionModel
                )),
                o.gdpr.gdpr &&
                  o.gdpr.gdprString &&
                  (this.consentString = o.gdpr.gdprString.slice(0, 10)),
                this.interactionModel.campaignData.bottomAdOptions.videoPlayer)
              ) {
                case "rtk":
                  this.provider = new m.default(n, t, this.adContainer);
                  break;
                case "gpt":
                  this.provider = new f.default(n, t, this.adContainer);
                  break;
                default:
                  this.provider = new g.default(n, t);
              }
            }
            return (
              a(e, [
                {
                  key: "displayAd",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    return (
                      this._report(
                        d.MONETIZATION_EVENTS.player_mon_impression_pending
                      ),
                      new b(function (n, i) {
                        e.provider
                          .load(e.adContainer.id, t)
                          .then(function () {
                            e._report(
                              d.MONETIZATION_EVENTS.player_mon_impression
                            ),
                              n();
                          })
                          .catch(function () {
                            e._report(
                              d.MONETIZATION_EVENTS
                                .player_mon_loading_impression_failed
                            ),
                              i();
                          });
                      })
                    );
                  },
                },
                {
                  key: "startEventListener",
                  value: function () {
                    var e = this;
                    window.addEventListener("message", function (t) {
                      if (t && t.data) {
                        var n = e.isStrip
                          ? t.data.instanceId
                          : t.data.initialInteractionId;
                        if (
                          !t.data.type ||
                          n === e.interactionModel.interactionId
                        )
                          switch (t.data.type) {
                            case "apester_resize_unit":
                              e.interactionFrameElement ||
                                ((e.interactionFrameElement =
                                  e.interactionElement.querySelector(
                                    ".apester-fill-content"
                                  )),
                                (0, c.safePostMessageToIframe)(
                                  e.interactionFrameElement,
                                  {
                                    type: "has_bottom_ad",
                                    adHeight: e.adContainer.offsetHeight + E,
                                  }
                                ));
                              break;
                            case "fullscreen_on":
                              (e.fullscreen = !0),
                                (e.adContainer.style.position = "fixed"),
                                (e.adContainer.style.zIndex =
                                  d.MAX_Z_INDEX_FULLSCREEN),
                                (e.adContainer.style.bottom = 0),
                                (e.adContainer.style.right = 0),
                                (0, c.safePostMessageToIframe)(
                                  e.interactionFrameElement,
                                  {
                                    type: "has_bottom_ad",
                                    adHeight: e.adContainer.offsetHeight,
                                  }
                                );
                              break;
                            case "fullscreen_off":
                              (e.fullscreen = !1),
                                (e.adContainer.style.cssText = ""),
                                (0, c.safePostMessageToIframe)(
                                  e.interactionFrameElement,
                                  { type: "has_bottom_ad" }
                                );
                          }
                      }
                    });
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    this.provider
                      .init()
                      .then(function () {
                        e._report(
                          d.MONETIZATION_EVENTS.player_mon_loading_pass
                        ),
                          e.startEventListener(),
                          e.displayAd(!0),
                          setInterval(function () {
                            e.displayAd();
                          }, 3e4);
                      })
                      .catch(function () {
                        e._report(
                          d.MONETIZATION_EVENTS.player_mon_loading_failed
                        );
                      });
                  },
                },
                {
                  key: "_report",
                  value: function (e) {
                    var t = {
                      interactionId: this.interactionModel.interactionId,
                      publisherId: this.publisherId,
                      videoCampaignId: this.campaignId,
                      monProvider: "da_bottom",
                      monType: this.provider.monType,
                      isStrip: "" + this.isStrip,
                      consentString: this.consentString,
                    };
                    (0, l.monetizationEvent)(e, t);
                  },
                },
              ]),
              e
            );
          })();
        t.default = function (e, t, n) {
          var i = t.publisherId,
            r = t.campaignData;
          return (0, _.default)(i, r.countryData).then(function (i) {
            new w(e, t, n, i).init();
          });
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e) {
          var t = document.createElement("div");
          return (t.id = e), t.classList.add("apester-bottom-ad"), t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(5),
          s = n(29),
          l = n(9),
          c = "undefined" == typeof Promise ? n(0).Promise : Promise,
          u = (function () {
            function e(t, n, o) {
              i(this, e),
                (this.monType = "gpt"),
                (this.interactionModel = t),
                (this.interactionElement = n),
                (this.options = t.campaignData.bottomAdOptions),
                (this.adElementId = "apester-bottom-ad-" + (0, l.s4)()),
                (this.adContainer = r(this.adElementId)),
                o.appendChild(this.adContainer);
            }
            return (
              o(e, [
                {
                  key: "init",
                  value: function () {
                    return new c(function (e, t) {
                      return (
                        window.googletag
                          ? function () {
                              return c.resolve();
                            }
                          : a.loadScript
                      )(
                        window,
                        "https://www.googletagservices.com/tag/js/gpt.js",
                        void 0,
                        "APESTER_GPT"
                      ).then(function () {
                        return (
                          (window.googletag = window.googletag || {}),
                          (window.googletag.cmd = window.googletag.cmd || []),
                          (0, s.waitForGPTRdy)(e, t, 20)
                        );
                      });
                    });
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    var n = this;
                    return new c(function (e, i) {
                      if (t) {
                        var r = n.interactionModel.publisherId;
                        n.adSlot = (0, s.createGPTSlot)(
                          n.adElementId,
                          {},
                          r,
                          n.options.tag,
                          [320, 50]
                        );
                      }
                      window.googletag.cmd.push(function () {
                        t && window.googletag.display(n.adElementId);
                      }),
                        (t &&
                          !window.googletag.pubads().isInitialLoadDisabled()) ||
                          window.googletag.pubads().refresh([n.adSlot]);
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.default = u;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(22),
          a = "undefined" == typeof Promise ? n(0).Promise : Promise,
          s = (function () {
            function e(t, n) {
              i(this, e),
                (this.monType = "minuteMedia"),
                (this.channelId = t.publisherId),
                (this.sizeList = [
                  { w: 320, h: 50 },
                  { w: 300, h: 50 },
                ]),
                (this.adUnitCode = t.campaignData.bottomAdOptions.tag);
            }
            return (
              r(e, [
                {
                  key: "init",
                  value: function () {
                    return (0, o.initBrowsi)(this.channelId);
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var t = this;
                    return new a(function (n, i) {
                      (0,
                      o.displayBrowsi)(e, t.channelId, t.adUnitCode, !0, n, i, t.sizeList);
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.default = s;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t, n, i, r) {
          return function o(a) {
            a.detail &&
              a.detail.divId === t &&
              a.detail.adUnitCode === "RTK_" + n &&
              ("JITA_AdServed" === a.type && a.detail.cpm
                ? i({ cpm: a.detail.cpm, bidder: a.detail.bidder })
                : r("No ad received from JITA"),
              window.top.removeEventListener(e, o));
          };
        }
        function a(e) {
          var t = document.createElement("div");
          return (t.id = e), t.classList.add("apester-bottom-ad"), t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          l = n(31),
          c = n(9),
          u = "undefined" == typeof Promise ? n(0).Promise : Promise,
          d = ["JITA_AdServed", "JITA_NoAdServed"],
          p = (function () {
            function e(t, n, i) {
              r(this, e),
                (this.monType = "rtk"),
                (this.interactionModel = t),
                (this.interactionElement = n),
                (this.campaignData = t.campaignData),
                (this.auctionCode =
                  t.campaignData.bottomAdOptions.playerProps.auctionCode),
                (this.adUnitCode = t.campaignData.bottomAdOptions.tag),
                (this.dfp = t.campaignData.bottomAdOptions.playerProps.dfp
                  ? 1
                  : 0),
                (this.adElementId = "apester-bottom-ad-" + (0, c.s4)()),
                (this.adContainer = a(this.adElementId)),
                i.appendChild(this.adContainer),
                (window.rtkLazyAdUnitCodes = ["RTK_" + this.adUnitCode]);
            }
            return (
              s(e, [
                {
                  key: "init",
                  value: function () {
                    var e = {
                      channel_id: this.interactionModel.publisherId,
                      interaction_id: this.interactionModel.interactionId,
                      campaign_id:
                        this.campaignData.videoCampaignOptions.videoCampaignId,
                    };
                    return (0, l.initJita)(
                      "https://481.hostedprebid.com/" +
                        this.auctionCode +
                        "/jita.js?dfp=" +
                        this.dfp,
                      e,
                      this.adUnitCode
                    );
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    var n = this;
                    return new u(function (e, t) {
                      d.forEach(function (i) {
                        window.top.addEventListener(
                          i,
                          o(i, n.adElementId, n.adUnitCode, e, t)
                        );
                      });
                      var r = n.adUnitCode;
                      window.jitaJS.rtk.refreshAdUnits(
                        ["RTK_" + r],
                        !0,
                        i({}, "RTK_" + r, n.adElementId)
                      );
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.default = p;
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(43),
          o = i(r),
          a = n(90),
          s = i(a),
          l = n(88),
          c = i(l),
          u = n(89),
          d = i(u),
          p = n(2),
          f = n(7),
          h = function (e, t, n, i, r) {
            var o = (0, f.getAdContainerSizeAndPosition)(i, n, e, r),
              a = o.width,
              s = o.height,
              l = o.left,
              u = o.position,
              h = o.top,
              m = o.transform;
            (e.style.width = "100%"),
              (e.style.height = "100%"),
              (e.style.position = u),
              (e.style.top = h),
              (e.style.left = l),
              (e.style.transform = m),
              (e.style.background = "#626262"),
              i &&
                ((e.style.zIndex = p.MAX_Z_INDEX_FULLSCREEN),
                (e.style.width = a),
                (e.style.height = s));
            var v = e.getBoundingClientRect(),
              g = v.height,
              y = e.embedElement.getBoundingClientRect(),
              _ = y.height,
              b = g - _ >= p.HEADER_HEIGHT,
              E = g - _ - p.HEADER_HEIGHT >= p.FOOTER_HEIGHT;
            if (b) {
              var w = (0, d.default)(t);
              (e.headerElement = w), e.appendChild(w);
            }
            if (E) {
              var I = (0, c.default)(t);
              (e.footerElement = I), e.appendChild(I);
            }
            var T = e.headerElement,
              O = e.footerElement;
            (e.style.justifyContent =
              T && O ? "space-between" : T ? "flex-start" : "center"),
              e.closeButton &&
                ((e.closeButton.style.display = "none"),
                setTimeout(function () {
                  e.closeButton.style.display = "block";
                }, 1500));
          },
          m = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : p.PLAYER_TYPES.VIDEO,
              i = (arguments[3], arguments[4], document.createElement("div"));
            (i.style.width = "1px"),
              (i.style.height = "1px"),
              (i.style.position = "relative"),
              (i.style.display = "flex"),
              (i.style.flexDirection = "column"),
              (i.style.background = "transparent"),
              (i.style.fontFamily = "LatoLatin"),
              (i.style.fontSize = "14px"),
              (i.style.lineHeight = "normal"),
              (i.style.overflow = "hidden"),
              (i.id = "monetization-ad-container");
            var r = document.createElement("div");
            if (
              ((r.id =
                "extracted-" +
                n +
                "-player-" +
                t +
                "-" +
                (Math.floor(1e4 * Math.random()) + 1)),
              r.classList.add("extracted-" + n + "-player-" + t),
              (r.style.order = 2),
              (r.style.alignSelf = "center"),
              (i.embedElement = r),
              i.appendChild(r),
              n === p.PLAYER_TYPES.VIDEO)
            )
              r.style.width = "100%";
            else {
              var a = (0, o.default)();
              (i.closeButton = a), i.appendChild(a);
              var l = (0, s.default)(i);
              (i.progressBarElement = l), i.appendChild(l);
            }
            return (
              (i.expand = function (t, n, r) {
                h(i, t, n, r, e);
              }),
              (i.hide = function () {
                i.headerElement && i.headerElement.remove(),
                  i.footerElement && i.footerElement.remove(),
                  (i.style.width = "1px"),
                  (i.style.height = "1px"),
                  (i.style.background = "transparent");
              }),
              i
            );
          };
        t.default = m;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(1),
          r = n(30),
          o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          a = n(2),
          s = "undefined" == typeof Promise ? n(0).Promise : Promise,
          l = function (e, t) {
            return new s(function (n) {
              var i = (0, o.default)(e),
                r = i.PENDING,
                a = i.AD_IN;
              t.textElement.innerHTML = a;
              var s = 3;
              t.counterElement.innerHTML = s;
              var l = setInterval(function () {
                (s -= 1),
                  s >= 1
                    ? (t.counterElement.innerHTML = s)
                    : (clearInterval(l),
                      t.counterElement.remove(),
                      (t.textElement.innerHTML = r + "..."),
                      n());
              }, 1e3);
            });
          };
        t.default = function (e, t, n) {
          var r = document.createElement("div");
          (r.style.position = t ? "fixed" : "absolute"),
            (r.style.maxWidth = "100%"),
            (r.style.height = "37px"),
            (r.style.borderTopLeftRadius = "18.5px"),
            (r.style.borderBottomLeftRadius = "18.5px"),
            (r.style.backgroundColor = "rgba(0, 0, 0, 0.85)"),
            (r.style.top = n && !i.isMobile ? "80px" : "65px"),
            (r.style.right = "0"),
            (r.style.padding = "0 20px 0 25px"),
            (r.style.color = "white"),
            (r.style.display = "flex"),
            (r.style.alignItems = "center"),
            (r.style.fontFamily = "Lato, Sans-Serif"),
            (r.style.fontSize = "16px"),
            (r.style.fontWeight = "500"),
            (r.style.letterSpacing = "0.3px"),
            (r.style.zIndex = t ? a.MAX_Z_INDEX_FULLSCREEN : a.MAX_Z_INDEX);
          var o = document.createElement("span"),
            s = document.createElement("span");
          return (
            (s.style.color = "#ffc300"),
            (s.style.fontWeight = "bold"),
            (s.style.margin = "3px"),
            r.appendChild(o),
            (r.textElement = o),
            r.appendChild(s),
            (r.counterElement = s),
            (r.countdownPromise = l(e, r)),
            r
          );
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
          o = n(30),
          a = i(o),
          s = n(2),
          l = n(119),
          c = (i(l), void 0),
          u = void 0,
          d = document.createElement("img");
        (d.alt = "Apester Logo"),
          (d.src = s.APESTER_LOGO_URL),
          (d.style.width = "56px"),
          (d.style.height = "15px"),
          (d.style.margin = "25px 10px"),
          (d.style.order = 1),
          (t.default = function (e) {
            if (!u || c !== e) {
              (c = e),
                (u = document.createElement("div")),
                (u.style.height = s.FOOTER_HEIGHT + "px"),
                (u.style.width = "100%"),
                (u.style.position = "relative"),
                (u.style.order = 2);
              var t = document.createElement("div");
              t.classList.add("extracted-ad-bg", "extracted-ad-bg-footer"),
                u.appendChild(t);
              var n = document.createElement("div");
              (n.style.top = 0),
                (n.style.width = "100%"),
                (n.style.position = "absolute"),
                (n.style.fontSize = "14px"),
                u.appendChild(n);
              var i = document.createElement("div");
              (i.style.order = 0),
                (i.style.marginRight = "10px"),
                (i.style.textAlign = "start"),
                (i.style.overflow = "hidden"),
                (i.style.padding = "10px"),
                n.appendChild(i),
                (n.style.display = "flex"),
                (n.style.justifyContent = "space-between");
              var o = document.createElement("div");
              (o.style.fontSize = "14px"),
                (o.style.fontWeight = "bold"),
                (o.style.fontStyle = "italic"),
                (o.style.color = "#ffc300"),
                (o.innerHTML = (0, a.default)(e).UP_NEXT),
                i.appendChild(o);
              var l = document.createElement("div");
              (l.style.width = "100%"),
                (l.style.fontSize = "14px"),
                (l.style.overflow = "hidden"),
                (l.style.whiteSpace = "nowrap"),
                (l.style.textOverflow = "ellipsis"),
                (l.style.fontStretch = "0.15px"),
                (l.style.color = "#FFFFFF"),
                (l.innerHTML = (0, r.extractTextFromHtmlStr)(c.title)),
                i.appendChild(l),
                n.appendChild(d);
            }
            return u;
          });
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(111),
          o = (i(r), n(112)),
          a = (i(o), n(113)),
          s = (i(a), n(114)),
          l = (i(s), n(115)),
          c = (i(l), n(116)),
          u = (i(c), n(117)),
          d = (i(u), n(30)),
          p = i(d),
          f = n(2),
          h = void 0,
          m = void 0;
        t.default = function (e) {
          if (!m || h !== e) {
            (h = e),
              (m = document.createElement("div")),
              (m.style.height = f.HEADER_HEIGHT + "px"),
              (m.style.width = "100%"),
              (m.style.order = 0),
              (m.style.overflow = "hidden");
            var t = document.createElement("div");
            t.classList.add("extracted-ad-bg", "extracted-ad-bg-header"),
              m.appendChild(t);
            var n = document.createElement("div");
            (n.style.top = "5px"), (n.style.position = "absolute");
            var i = document.createElement("div");
            (i.style.position = "relative"),
              (i.style.width = "40px"),
              (i.style.height = "40px"),
              (i.style.display = "inline-block"),
              (i.style.margin = "20px 10px 0 20px"),
              (i.style.borderRadius = "50%"),
              (i.style.background = "#000");
            var r = (h.layout || h.engine).name,
              o = document.createElement("img");
            (o.src = f.ENGINE_NAME_TO_ICON_URL_MAP[r]),
              (o.alt = r + " icon"),
              (o.style.width = "24px"),
              (o.style.height = "24px"),
              (o.style.top = "8px"),
              (o.style.left = "8px"),
              (o.style.position = "absolute"),
              i.appendChild(o),
              n.appendChild(i);
            var a = document.createElement("div");
            (a.style.position = "relative"),
              (a.style.color = "#FFFFFF"),
              (a.style.display = "inline-block"),
              (a.style.bottom = "15px"),
              (a.style.fontSize = "12px"),
              (a.innerHTML = (0, p.default)(h).SPONSORED_AD),
              n.appendChild(a),
              m.appendChild(n);
          }
          return m;
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = function e(t, n, i, r) {
          var o = r.progressBarElement.progressIndicatorElement;
          n || (n = i);
          var a = i - n;
          a < t
            ? ((o.style.transform =
                "translateX(-" + (100 - (a / t) * 100) + "%)"),
              requestAnimationFrame(function (i) {
                return e(t, n, i, r);
              }))
            : r.hide();
        };
        t.default = function (e) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.overflow = "hidden"),
            (t.style.width = "97%"),
            (t.style.height = "3px"),
            (t.style.margin = "4px 1.5%"),
            (t.style.zIndex = 100),
            (t.style.top = 0);
          var n = document.createElement("div");
          return (
            (n.style.height = "100%"),
            (n.style.background = "#ffc300"),
            (t.progressIndicatorElement = n),
            t.appendChild(n),
            (t.start = function (t) {
              requestAnimationFrame(function (n) {
                i(t, void 0, n, e);
              });
            }),
            t
          );
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(9),
          s = n(3),
          l = n(5),
          c = n(1),
          u = n(7),
          d = n(2),
          p = n(22),
          f = n(8),
          h = n(12),
          m = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(h),
          v = "undefined" == typeof Promise ? n(0).Promise : Promise,
          g = (function () {
            function e(t, n, r, o) {
              i(this, e);
              var s = o.preroll,
                l = o.loadAdOn,
                c = o.loadAdOnProps,
                d = o.anchorPlayer,
                p = o.player.provider.options.tagUrl;
              (this.tagUrl = p),
                (this.feedSequence = 0),
                (this.isUserEngaged = !1),
                (this.anchorPlayer = d),
                (this.uniquePlayerKey = "mplayer-" + (0, a.s4)()),
                (this.currentInteraction = n),
                (this.interactionModel = n),
                (this.interactionElement = t),
                (this.publisherId = n.publisherId),
                (this.publisher = this.interactionModel.publisher),
                (this.initialInteractionId = r || n.interactionId),
                (this.campaignId = (0, u.extractVideoCampaignIdFromModel)(n)),
                (this.adLoadOnConfiguration = { type: l, configuration: c }),
                s &&
                  (this.adLoadOnConfiguration = {
                    type: s.loadAdOn,
                    configuration: s.loadAdOnProps,
                  }),
                (this.isStrip = !!r),
                this.startEventListener(),
                this.isStrip || this.init();
            }
            return (
              o(e, [
                {
                  key: "playerInitHandler",
                  value: function () {
                    var e = this;
                    this.report(d.MONETIZATION_EVENTS.player_mon_loading_pass),
                      monti()
                        .initiate(this._createPlayerConfiguration())
                        .then(function (t) {
                          t.setAnchorEnabled(e.anchorPlayer),
                            t.on("adPlay", function () {
                              e.report(
                                d.MONETIZATION_EVENTS.player_mon_playing
                              );
                            }),
                            t.on("adComplete", function () {
                              e.report(
                                d.MONETIZATION_EVENTS.player_mon_stopped
                              );
                            }),
                            t.on("adImpression", function () {
                              e.report(
                                d.MONETIZATION_EVENTS.player_mon_impression
                              );
                            }),
                            t.on("ready", function () {
                              e.report(
                                d.MONETIZATION_EVENTS
                                  .player_mon_impression_pending
                              );
                            });
                          var n = void 0;
                          (0, m.default)(
                            e.adContainer,
                            e._createReportProperties()
                          ).then(function (e) {
                            n && (n.disconnect(), (n = void 0)), (n = e);
                          });
                        })
                        .catch(function (t) {
                          e.report(
                            d.MONETIZATION_EVENTS.player_mon_loading_failed
                          );
                        });
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = "story" === this.interactionModel.layout.directive,
                      n = (0, p.getInStreamOnUnitContainerCSS)(
                        this.isStrip,
                        t,
                        this.interactionModel.language
                      );
                    return (
                      (this.adContainer = (0, p.createInstreamOnUnitContainer)(
                        n
                      )),
                      setTimeout(function () {
                        e.interactionElement.appendChild(e.adContainer);
                      }, 0),
                      this.report(
                        d.MONETIZATION_EVENTS.player_mon_loading_pending
                      ),
                      (this.adContainer.closeButton.onclick = function () {
                        e.remove(!0);
                      }),
                      v
                        .all([
                          (0, f.getViewabilityObserver)(),
                          (0, l.loadScript)(
                            window,
                            "https://www.oo-syringe.com/prod/players/mplayer_wrapper_v3_latest.js",
                            this.adContainer
                          ),
                        ])
                        .then(function (t) {
                          var n = r(t, 1),
                            i = n[0];
                          return (0,
                          f.setLoadTriggerPromise)(i, e.adContainer, e.adLoadOnConfiguration);
                        })
                        .then(function () {
                          e.playerInitHandler();
                        })
                        .catch(function (t) {
                          e.report(
                            d.MONETIZATION_EVENTS.player_mon_loading_failed
                          );
                        })
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    this.interactionElement.contains(this.adContainer) &&
                      (this.adContainer.remove(),
                      e &&
                        this.report(
                          d.MONETIZATION_EVENTS.player_mon_skipped,
                          d.MON_STOP_REASONS.IDLE
                        ),
                      this.report(d.MONETIZATION_EVENTS.player_mon_stopped));
                  },
                },
                {
                  key: "report",
                  value: function (e, t) {
                    var n = this._createReportProperties();
                    t && (n.reason = t), (0, s.monetizationEvent)(e, n);
                  },
                },
                {
                  key: "startEventListener",
                  value: function () {
                    var e = this,
                      t = function (t) {
                        if (t && t.data) {
                          var n = e.isStrip
                            ? t.data.instanceId
                            : t.data.initialInteractionId;
                          if (t.data.type && n === e.initialInteractionId)
                            switch (t.data.type) {
                              case "unit_started":
                              case "click_next":
                              case "picked_answer":
                                e.isUserEngaged = !0;
                                break;
                              case "fullscreen_on":
                                e.isStrip &&
                                  !e.interactionElement.contains(
                                    e.adContainer
                                  ) &&
                                  (e.init(),
                                  c.isMobile ||
                                    (e.adContainer.style.bottom = "-15px")),
                                  (e.isFullscreen = !0),
                                  (e.isUserEngaged = !0),
                                  (e.adContainer.style.position = "fixed"),
                                  (e.adContainer.style.zIndex =
                                    d.MAX_Z_INDEX_FULLSCREEN);
                                break;
                              case "fullscreen_off":
                                e.interactionElement.contains(e.adContainer) &&
                                  ((e.adContainer.style.position = "absolute"),
                                  (e.adContainer.style.zIndex = "")),
                                  (e.isFullscreen = !1),
                                  (e.shouldPlayVideo = !1),
                                  e.isStrip && e.remove();
                                break;
                              case "move_to_next_interaction":
                                (e.feedSequence = t.data.currentFeedItemIndex),
                                  (e.currentInteraction =
                                    t.data.nextInteraction);
                            }
                        }
                      };
                    window.addEventListener("message", t);
                  },
                },
                {
                  key: "_createReportProperties",
                  value: function () {
                    return {
                      monType: "minute_media_va",
                      monProvider: "va_instream",
                      isStrip: "" + this.isStrip,
                      monPlayerId: this.placmentId,
                      publisherId: this.publisherId,
                      videoCampaignId: this.campaignId,
                      feedSequence: "" + this.feedSequence,
                      reason: (0, c.getReasonReport)(!0, this.isUserEngaged),
                      interactionId: this.currentInteraction.interactionId,
                    };
                  },
                },
                {
                  key: "_createPlayerConfiguration",
                  value: function () {
                    return {
                      player_pos: this.adContainer,
                      uniq_key: this.uniquePlayerKey,
                      content_id: "01dptcs5mb2a14mv7v",
                      content_type: "specific",
                      playback_method: "autoplay",
                      powered_by_strip: !1,
                      monetization: {
                        ad_tag: this.tagUrl,
                        ad_request_timeout: "10000",
                        midrolls: { on: [0, 5, 15, 25, 35, 45, 65, 75] },
                      },
                      anchor_options: {
                        width: "60",
                        can_close: !0,
                        orientation: "right",
                        continue_streaming: !0,
                        anchoring_appearance: "below",
                      },
                    };
                  },
                },
              ]),
              e
            );
          })();
        t.default = function (e, t, n, i) {
          return new g(e, t, n, i);
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          return 1 === e && t.PREROLL_AD_ON_CONFIG
            ? t.PREROLL_AD_ON_CONFIG
            : t.MIDROLL_AD_ON_CONFIG;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          l = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          c = n(3),
          u = n(1),
          d = n(86),
          p = i(d),
          f = n(87),
          h = i(f),
          m = n(96),
          v = i(m),
          g = n(10),
          y = i(g),
          _ = n(12),
          b = i(_),
          E = n(8),
          w = n(7),
          I = n(99),
          T = i(I),
          O = n(2),
          S = "undefined" == typeof Promise ? n(0).Promise : Promise,
          A = 0,
          P = (function () {
            function e(t, n, i, o, a) {
              r(this, e);
              var s = (0, w.extractVideoCampaignIdFromModel)(n),
                l = (0, v.default)(n, s, t),
                c = l.displayPlayer,
                u = l.videoPlayer;
              c && !i && (0, T.default)(t, n),
                (this.managerId = A + 1),
                (A = this.managerId),
                (this.viewabilityOptions = (0, w.extractViewabilityOptions)(n)),
                (this.viewabilityObserver = a),
                (this.displayPlayer = c),
                (this.videoPlayer = u),
                (this.campaignId = s),
                (this.interactionElement = t),
                (this.initialInteractionId = i || n.interactionId),
                (this.currentInteraction = n),
                (this.activeDisplayAdElement = void 0),
                (this.activeVideoAdElement = void 0),
                (this.interactionFrameElement = void 0),
                (this.isUserEngaged = !1),
                (this.isFullscreen = !1),
                (this.publisherId = n.publisherId),
                (this.feedSequence = 0),
                (this.isStrip = !!i),
                (this.shouldPlayVideo = !this.isStrip),
                (this.videoViewabilityTrackingObserver = void 0),
                (this.displayViewabilityTrackingObserver = void 0),
                (this.isPlayingVideo = !1),
                o.gdpr.gdpr &&
                  o.gdpr.gdprString &&
                  (this.consentString = o.gdpr.gdprString.slice(0, 10)),
                (0, w.loadApesterFonts)(),
                (this.displayPlayer || this.videoPlayer) &&
                  this.startEventListener(),
                this.isStrip || (this.handleDisplay(), this.handleVideo());
            }
            return (
              l(e, [
                {
                  key: "startEventListener",
                  value: function () {
                    var e = this,
                      t = function (t) {
                        var n = e.isStrip
                          ? t.data.instanceId
                          : t.data.initialInteractionId;
                        if (
                          t.data &&
                          t.data.type &&
                          n === e.initialInteractionId
                        )
                          switch (t.data.type) {
                            case "unit_started":
                            case "click_next":
                            case "picked_answer":
                              (e.isUserEngaged = !0),
                                e.userEngagedCB && e.userEngagedCB();
                              break;
                            case "fullscreen_on":
                              (e.isUserEngaged = !0),
                                e.isStrip &&
                                  !e.isFullscreen &&
                                  ((e.shouldPlayVideo = !0),
                                  e.handleDisplay(),
                                  e.handleVideo()),
                                (e.isFullscreen = !0);
                              break;
                            case "fullscreen_off":
                              (e.isFullscreen = !1),
                                (e.shouldPlayVideo = !1),
                                e.isStrip &&
                                  (e.killAd(O.PLAYER_TYPES.VIDEO),
                                  e.killAd(O.PLAYER_TYPES.DISPLAY));
                              break;
                            case "move_to_next_interaction":
                              (e.feedSequence = t.data.currentFeedItemIndex),
                                (e.currentInteraction = t.data.nextInteraction);
                          }
                      };
                    window.addEventListener("message", t);
                  },
                },
                {
                  key: "notifyMonStateToPlayer",
                  value: function (e) {
                    this.interactionFrameElement ||
                      (this.interactionFrameElement =
                        this.interactionElement.querySelector(
                          ".apester-fill-content"
                        )),
                      (0, u.safePostMessageToIframe)(
                        this.interactionFrameElement,
                        { type: e ? "mon_start" : "mon_end" }
                      );
                  },
                },
                {
                  key: "report",
                  value: function (e, t, n) {
                    var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {},
                      r = {
                        interactionId: this.currentInteraction.interactionId,
                        publisherId: this.publisherId,
                        videoCampaignId: this.campaignId,
                        monProvider: t.PROVIDER,
                        monType: t.TYPE,
                        monPlayerId: t.playerId,
                        feedSequence: "" + this.feedSequence,
                        isStrip: "" + this.isStrip,
                        reason: n,
                        monBidder: i.bidder,
                        displayCustomParamFloat: "" + i.cpm,
                        consentString: this.consentString,
                      };
                    (0, c.monetizationEvent)(e, r);
                  },
                },
                {
                  key: "killAd",
                  value: function (e, t) {
                    var n = e === O.PLAYER_TYPES.VIDEO,
                      i =
                        e === O.PLAYER_TYPES.VIDEO
                          ? this.activeVideoAdElement
                          : this.activeDisplayAdElement;
                    n && this.videoPlayer && this.videoPlayer.destroy(),
                      i &&
                        i.parentNode &&
                        (n
                          ? (this.activeVideoAdElement.remove(),
                            (this.activeVideoAdElement = void 0),
                            this.videoViewabilityTrackingObserver &&
                              (this.videoViewabilityTrackingObserver.disconnect(),
                              (this.videoViewabilityTrackingObserver = void 0)))
                          : (this.activeDisplayAdElement.hide(),
                            this.isStrip &&
                              !this.isFullscreen &&
                              clearTimeout(this.displayTimeout),
                            this.displayViewabilityTrackingObserver &&
                              (this.displayViewabilityTrackingObserver.disconnect(),
                              (this.videoViewabilityTrackingObserver =
                                void 0))),
                        t &&
                          (t === O.MON_STOP_REASONS.SKIP &&
                            this.report(
                              O.MONETIZATION_EVENTS.player_mon_skipped,
                              this.displayPlayer,
                              O.MON_STOP_REASONS.IDLE
                            ),
                          this.report(
                            O.MONETIZATION_EVENTS.player_mon_stopped,
                            this.displayPlayer,
                            t
                          )));
                  },
                },
                {
                  key: "setLoadTriggerPromise",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.type,
                      i = t.configuration,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      o = void 0,
                      a = { threshold: O.VIEWABILITY.THRESHOLDS.ON_10_PERCENT },
                      l = {
                        threshold: 0,
                        distanceFromViewport: (0,
                        E.getIntersactionObserverRootMarginString)(),
                      };
                    switch (n) {
                      case O.LOAD_PLAYER_ON.LOAD:
                        o = S.resolve();
                        break;
                      case O.LOAD_PLAYER_ON.ENGAGE:
                        o = this.isUserEngaged
                          ? S.resolve()
                          : new S(function (t) {
                              e.userEngagedCB = t;
                            });
                        break;
                      case O.LOAD_PLAYER_ON.VIEW:
                        o = this.viewabilityObserver(
                          this.interactionElement,
                          s({}, a, r)
                        );
                        break;
                      case O.LOAD_PLAYER_ON.NEAR:
                        var c = i.pixelsFromUnit,
                          u = (0, E.getIntersactionObserverRootMarginString)(
                            c,
                            0,
                            c,
                            0
                          );
                        o = this.viewabilityObserver(
                          this.interactionElement,
                          s({}, l, r, { distanceFromViewport: u })
                        );
                    }
                    return o;
                  },
                },
                {
                  key: "resizeVideoPlayer",
                  value: function () {
                    var e =
                        this.isFullscreen && u.isMobile
                          ? screen.width
                          : this.interactionElement.clientWidth,
                      t = e / O.VIDEO_ASPECT_RATIO;
                    this.videoPlayer.resize({ width: e, height: t });
                  },
                },
                {
                  key: "getReasonReport__",
                  value: function (e) {
                    return (0, u.getReasonReport)(e, this.isUserEngaged);
                  },
                },
                {
                  key: "handleVideo",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1;
                    if (this.videoPlayer) {
                      var n = !this.videoPlayer.shouldKeepContainer();
                      if (!this.activeVideoAdElement || n) {
                        var i = (0, p.default)(
                          this.isStrip,
                          this.managerId,
                          O.PLAYER_TYPES.VIDEO,
                          this.videoPlayer.TYPE,
                          this.interactionElement
                        );
                        (this.activeVideoAdElement = i),
                          this.interactionElement.appendChild(i);
                      }
                      var r = void 0,
                        a = 1 === t,
                        s = function () {
                          return e.getReasonReport__(a);
                        };
                      this.report(
                        O.MONETIZATION_EVENTS.player_mon_loading_pending,
                        this.videoPlayer,
                        s()
                      ),
                        this.videoPlayer
                          .init()
                          .then(function () {
                            e.report(
                              O.MONETIZATION_EVENTS.player_mon_loading_pass,
                              e.videoPlayer,
                              s()
                            );
                            var n = o(t, e.videoPlayer);
                            return e.setLoadTriggerPromise(n);
                          })
                          .then(function () {
                            return (
                              e.report(
                                O.MONETIZATION_EVENTS
                                  .player_mon_impression_pending,
                                e.videoPlayer,
                                s()
                              ),
                              e.videoPlayer.load(
                                e.activeVideoAdElement.embedElement.id,
                                e.currentInteraction
                              )
                            );
                          })
                          .catch(function (e) {
                            if (e)
                              throw new Error(
                                O.MONETIZATION_EVENTS.player_mon_loading_impression_failed
                              );
                            throw new Error(
                              O.MONETIZATION_EVENTS.player_mon_loading_failed
                            );
                          })
                          .then(function () {
                            return e.videoPlayer.waitForImpression();
                          })
                          .then(function () {
                            var t = e.videoPlayer.shouldUseLoadingIndicator();
                            return (
                              e.report(
                                O.MONETIZATION_EVENTS.player_mon_impression,
                                e.videoPlayer,
                                s()
                              ),
                              e.isUserEngaged && !e.activeDisplayAdElement && t
                                ? ((r = (0, h.default)(
                                    e.currentInteraction,
                                    e.isFullscreen,
                                    e.isStrip
                                  )),
                                  e.interactionElement.appendChild(r),
                                  r.countdownPromise)
                                : S.resolve()
                            );
                          })
                          .catch(function (e) {
                            var t =
                              e && e.message
                                ? e.message
                                : O.MONETIZATION_EVENTS
                                    .player_mon_loading_impression_failed;
                            throw new Error(t);
                          })
                          .then(function () {
                            if (
                              (r && r.remove(),
                              e.killAd(
                                O.PLAYER_TYPES.DISPLAY,
                                O.MON_STOP_REASONS.VIDEO_AD
                              ),
                              e.notifyMonStateToPlayer(!0),
                              !e.shouldPlayVideo)
                            )
                              return (
                                (e.shouldPlayVideo = !0),
                                O.MON_STOP_REASONS.CLOSE_STRIP
                              );
                            e.report(
                              O.MONETIZATION_EVENTS.player_mon_playing,
                              e.videoPlayer,
                              s()
                            ),
                              (e.isPlayingVideo = !0),
                              e.activeVideoAdElement.expand(
                                e.currentInteraction,
                                e.interactionElement,
                                e.isFullscreen
                              );
                            var t = {
                              interactionId: e.currentInteraction.interactionId,
                              publisherId: e.publisherId,
                              videoCampaignId: e.campaignId,
                              monType: e.videoPlayer.TYPE,
                              monProvider: e.videoPlayer.PROVIDER,
                              reason: s(),
                              pixelAmount: (0,
                              u.getPixelAmountFromViewabilityOptions)(
                                e.viewabilityOptions,
                                e.videoPlayer.TYPE,
                                "video"
                              ),
                            };
                            return (
                              (0, b.default)(e.activeVideoAdElement, t).then(
                                function (t) {
                                  e.videoViewabilityTrackingObserver &&
                                    (e.videoViewabilityTrackingObserver.disconnect(),
                                    (e.videoViewabilityTrackingObserver =
                                      void 0)),
                                    (e.videoViewabilityTrackingObserver = t);
                                }
                              ),
                              e.resizeVideoPlayer(),
                              e.videoPlayer.play()
                            );
                          })
                          .then(function (t) {
                            e.videoViewabilityTrackingObserver &&
                              (e.videoViewabilityTrackingObserver.disconnect(),
                              (e.videoViewabilityTrackingObserver = void 0)),
                              t === O.MON_STOP_REASONS.SKIP &&
                                e.report(
                                  O.MONETIZATION_EVENTS.player_mon_skipped,
                                  e.videoPlayer,
                                  s()
                                ),
                              e.report(
                                O.MONETIZATION_EVENTS.player_mon_stopped,
                                e.videoPlayer,
                                t
                              );
                          })
                          .catch(function (t) {
                            e.videoViewabilityTrackingObserver &&
                              (e.videoViewabilityTrackingObserver.disconnect(),
                              (e.videoViewabilityTrackingObserver = void 0)),
                              O.MONETIZATION_EVENTS[t.message] &&
                                e.report(t.message, e.videoPlayer, s()),
                              (e.isPlayingVideo = !1);
                          })
                          .then(function () {
                            (e.isPlayingVideo = !1),
                              e.videoPlayer.shouldKeepContainer()
                                ? e.activeVideoAdElement.hide()
                                : (e.activeVideoAdElement.remove(),
                                  (e.activeVideoAdElement = void 0)),
                              e.notifyMonStateToPlayer(!1),
                              t < e.videoPlayer.IDLE_OPTIONS.maxAds &&
                                ((e.shouldPlayVideo = !0),
                                setTimeout(function (n) {
                                  e.handleVideo(t + 1);
                                }, 1e3 *
                                  e.videoPlayer.IDLE_OPTIONS.requestTimeout));
                          });
                    }
                  },
                },
                {
                  key: "handleDisplay",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1;
                    if (this.displayPlayer && !this.isPlayingVideo) {
                      var n =
                          this.activeDisplayAdElement ||
                          (0, p.default)(
                            this.isStrip,
                            this.managerId,
                            O.PLAYER_TYPES.DISPLAY,
                            this.displayPlayer.TYPE,
                            this.interactionElement
                          ),
                        i = 1 === t;
                      i &&
                        ((this.activeDisplayAdElement = n),
                        this.interactionElement.appendChild(n));
                      var r = function () {
                        return e.getReasonReport__(i);
                      };
                      this.report(
                        O.MONETIZATION_EVENTS.player_mon_loading_pending,
                        this.displayPlayer,
                        r()
                      ),
                        this.displayPlayer
                          .init()
                          .catch(function () {
                            throw new Error(
                              O.MONETIZATION_EVENTS.player_mon_loading_failed
                            );
                          })
                          .then(function () {
                            e.report(
                              O.MONETIZATION_EVENTS.player_mon_loading_pass,
                              e.displayPlayer,
                              r()
                            );
                            var n = o(t, e.displayPlayer);
                            return e.setLoadTriggerPromise(n);
                          })
                          .then(function () {
                            return (
                              e.report(
                                O.MONETIZATION_EVENTS
                                  .player_mon_impression_pending,
                                e.displayPlayer,
                                r()
                              ),
                              e.displayPlayer.load(
                                n.embedElement.id,
                                e.currentInteraction
                              )
                            );
                          })
                          .catch(function () {
                            throw new Error(
                              O.MONETIZATION_EVENTS.player_mon_loading_impression_failed
                            );
                          })
                          .then(function (t) {
                            if (
                              (e.report(
                                O.MONETIZATION_EVENTS.player_mon_impression,
                                e.displayPlayer,
                                r(),
                                t
                              ),
                              e.isPlayingVideo)
                            )
                              return e.killAd(
                                O.PLAYER_TYPES.DISPLAY,
                                O.MON_STOP_REASONS.VIDEO_AD_IN_BG
                              );
                            e.report(
                              O.MONETIZATION_EVENTS.player_mon_playing,
                              e.displayPlayer,
                              r(),
                              t
                            );
                            var i = {
                              interactionId: e.currentInteraction.interactionId,
                              publisherId: e.publisherId,
                              videoCampaignId: e.campaignId,
                              monType: e.displayPlayer.TYPE,
                              monProvider: e.displayPlayer.PROVIDER,
                              reason: r(),
                              pixelAmount: (0,
                              u.getPixelAmountFromViewabilityOptions)(
                                e.viewabilityOptions,
                                e.displayPlayer.TYPE,
                                "video"
                              ),
                            };
                            (0, b.default)(n, i).then(function (t) {
                              e.displayViewabilityTrackingObserver &&
                                (e.displayViewabilityTrackingObserver.disconnect(),
                                (e.displayViewabilityTrackingObserver =
                                  void 0)),
                                (e.displayViewabilityTrackingObserver = t);
                            }),
                              e.notifyMonStateToPlayer(!0),
                              n.expand(
                                e.currentInteraction,
                                e.interactionElement,
                                e.isFullscreen
                              ),
                              (n.closeButton.onclick = function () {
                                e.killAd(
                                  O.PLAYER_TYPES.DISPLAY,
                                  O.MON_STOP_REASONS.SKIP
                                ),
                                  e.notifyMonStateToPlayer(!1);
                              });
                            var o = {
                              timeInView: e.displayPlayer.TIME_IN_VIEW,
                              threshold: O.VIEWABILITY.THRESHOLDS.ON_50_PERCENT,
                              onEnter: function () {
                                n.progressBarElement.start(
                                  e.displayPlayer.TIME_IN_VIEW
                                );
                              },
                              onCompleted: function () {
                                e.killAd(
                                  O.PLAYER_TYPES.DISPLAY,
                                  O.MON_STOP_REASONS.VIEWABILITY
                                ),
                                  e.notifyMonStateToPlayer(!1),
                                  e.displayViewabilityTrackingObserver &&
                                    (e.displayViewabilityTrackingObserver.disconnect(),
                                    (e.displayViewabilityTrackingObserver =
                                      void 0));
                              },
                            };
                            return e.viewabilityObserver(n, o);
                          })
                          .catch(function (t) {
                            e.displayViewabilityTrackingObserver &&
                              (e.displayViewabilityTrackingObserver.disconnect(),
                              (e.displayViewabilityTrackingObserver = void 0)),
                              O.MONETIZATION_EVENTS[t.message] &&
                                e.report(t.message, e.displayPlayer, r());
                          })
                          .then(function () {
                            t < e.displayPlayer.IDLE_OPTIONS.maxAds &&
                              (e.displayTimeout = setTimeout(function () {
                                e.handleDisplay(t + 1);
                              }, e.displayPlayer.TIME_IN_VIEW +
                                e.displayPlayer.TIME_BETWEEN_ADS));
                          });
                    }
                  },
                },
              ]),
              e
            );
          })();
        t.default = function (e, t, n) {
          var i = t.publisherId,
            r = t.campaignData,
            o = (0, y.default)(i, r.countryData),
            s = (0, E.getViewabilityObserver)();
          S.all([o, s]).then(function (i) {
            var r = a(i, 2),
              o = r[0],
              s = r[1];
            return new P(e, t, n, o, s);
          });
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(1),
          a = n(5),
          s = n(7),
          l = n(29),
          c = "undefined" == typeof Promise ? n(0).Promise : Promise,
          u = function (e, t, n) {
            var i = t.getAttribute("adunit"),
              r = (0, s.getInteractionSize)(e),
              a = r.height;
            return (
              i ||
              (o.isMobile && a >= 480 && n.interstitialPath
                ? n.interstitialPath
                : n.path)
            );
          },
          d = void 0,
          p = void 0,
          f = function (e, t) {
            var n = function n(i) {
              i.slot === e &&
                (window.removeEventListener("slotRenderEnded", n),
                i.isEmpty
                  ? p("empty slot")
                  : (window.googletag.display(t), d()));
            };
            window.googletag.pubads().addEventListener("slotRenderEnded", n);
          },
          h = (function () {
            function e(t, n, r) {
              i(this, e);
              var o = r.player;
              (this.displayPlayer = o),
                (this.interactionModel = t),
                (this.interactionElement = n),
                (this.options = o.provider.options);
            }
            return (
              r(e, [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    return new c(function (t, n) {
                      e.options.path || n("No slot defined");
                      var i = function () {
                        return c.resolve();
                      };
                      return (window.googletag ? i : a.loadScript)(
                        window,
                        "https://www.googletagservices.com/tag/js/gpt.js",
                        void 0,
                        "APESTER_GPT"
                      ).then(function () {
                        return (
                          (window.googletag = window.googletag || {}),
                          (window.googletag.cmd = window.googletag.cmd || []),
                          (0, l.waitForGPTRdy)(t, n, 20)
                        );
                      });
                    });
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    var n = this,
                      i = u(t, this.interactionElement, this.options);
                    return this.adSlot
                      ? this.refreshSlot()
                      : new c(function (t, r) {
                          (d = t),
                            (p = r),
                            window.googletag.cmd.push(function () {
                              (n.adSlot = (0, l.createGPTSlot)(
                                e,
                                {},
                                n.interactionModel.publisherId,
                                i,
                                n.options.size
                              )),
                                f(n.adSlot, e),
                                window.googletag
                                  .pubads()
                                  .isInitialLoadDisabled() &&
                                  window.googletag.pubads().refresh([n.adSlot]),
                                window.googletag.display(e);
                            });
                        });
                  },
                },
                {
                  key: "shouldUseLoadingIndicator",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "refreshSlot",
                  value: function () {
                    var e = this;
                    return new c(function (t, n) {
                      (d = t),
                        (p = n),
                        window.googletag.cmd.push(function () {
                          window.googletag.pubads().refresh([e.adSlot]);
                        });
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.default = h;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(1),
          a = n(22),
          s = "undefined" == typeof Promise ? n(0).Promise : Promise,
          l = (function () {
            function e(t, n, r, o) {
              i(this, e);
              var s = n.player,
                l = s.provider;
              l = void 0 === l ? {} : l;
              var c = l.options;
              c = void 0 === c ? {} : c;
              var u = c.tagId;
              (this.interactionModel = t),
                (this.channelId = this.interactionModel.publisherId),
                (this.interactionId = this.interactionModel.interactionId),
                (this.campaignId = r),
                (this.displayPlayer = s),
                (this.adUnitCode = (0, a.selectAdUnit)(
                  o,
                  s.provider.options.tagId
                )),
                (this.sizeList = [
                  { w: 300, h: 250 },
                  { w: 300, h: 50 },
                  { w: 300, h: 600 },
                ]),
                (this.tagId = u);
            }
            return (
              r(e, [
                {
                  key: "init",
                  value: function () {
                    return o.isApesterInapp
                      ? s.resolve()
                      : (0, a.initBrowsi)(this.channelId);
                  },
                },
                {
                  key: "load",
                  value: function (e) {
                    var t = this;
                    return o.isApesterInapp
                      ? (0, a.setupInAppKickerIFrame)(
                          e,
                          this.channelId,
                          this.tagId,
                          ["300x250", "320x480", "480x320"]
                        )
                      : new s(function (n, i) {
                          (0,
                          a.displayBrowsi)(e, t.channelId, t.adUnitCode, !1, n, i, t.sizeList);
                        });
                  },
                },
              ]),
              e
            );
          })();
        t.default = l;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(7),
          s = n(31),
          l = "undefined" == typeof Promise ? n(0).Promise : Promise,
          c = ["JITA_AdServed", "JITA_NoAdServed"],
          u = function (e, t, n, i) {
            return function r(o) {
              o.detail &&
                o.detail.divId === e &&
                o.detail.adUnitCode === t &&
                ("JITA_AdServed" === o.type && o.detail.cpm
                  ? n({ cpm: o.detail.cpm, bidder: o.detail.bidder })
                  : i(),
                c.forEach(function (e) {
                  return window.top.removeEventListener(e, r);
                }));
            };
          },
          d = function (e, t) {
            (window.rtkLazyAdUnitCodes = [
              "RTK_" + t.provider.options.adUnitCode,
            ]),
              t.provider.options.adUnitCode_interstitial &&
                window.rtkLazyAdUnitCodes.push(
                  "RTK_" + t.provider.options.adUnitCode_interstitial
                );
            var n = e.campaignData.companionOptions;
            n &&
              "rtk" === n.settings.bannerAdProvider &&
              (window.rtkLazyAdUnitCodes.push("RTK_" + n.settings.adUnitCode),
              n.stripAUC &&
                window.rtkLazyAdUnitCodes.push("RTK_" + n.stripAUC));
          },
          p = function (e, t) {
            var n = (0, a.getInteractionSize)(e),
              i = n.width,
              r = n.height;
            return i >= 320 && r >= 480
              ? t.provider.options.adUnitCode_interstitial ||
                  t.provider.options.adUnitCode
              : t.provider.options.adUnitCode;
          },
          f = (function () {
            function e(t, n, i) {
              r(this, e);
              var o = n.player;
              (this.interactionModel = t),
                (this.channelId = this.interactionModel.publisherId),
                (this.interactionId = this.interactionModel.interactionId),
                (this.campaignId = i),
                (this.displayPlayer = o),
                (this.auctionCode = o.provider.options.auctionCode),
                (this.dfp = o.provider.options.dfp ? 1 : 0),
                d(t, o);
            }
            return (
              o(e, [
                {
                  key: "init",
                  value: function () {
                    var e = {
                      channel_id: this.channelId,
                      interaction_id: this.interactionId,
                      campaign_id: this.campaignId,
                    };
                    return (0, s.initJita)(
                      "https://481.hostedprebid.com/" +
                        this.auctionCode +
                        "/jita.js?dfp=" +
                        this.dfp,
                      e,
                      p(this.interactionModel, this.displayPlayer)
                    );
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    return (
                      this.adUnitCode ||
                        (this.adUnitCode = "RTK_" + p(t, this.displayPlayer)),
                      this.refreshSlot(e)
                    );
                  },
                },
                {
                  key: "shouldUseLoadingIndicator",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "refreshSlot",
                  value: function (e) {
                    var t = this;
                    return new l(function (n, r) {
                      c.forEach(function (i) {
                        return window.top.addEventListener(
                          i,
                          u(e, t.adUnitCode, n, r)
                        );
                      }),
                        window.jitaJS.rtk.refreshAdUnits(
                          [t.adUnitCode],
                          !0,
                          i({}, t.adUnitCode, e)
                        );
                    });
                  },
                },
              ]),
              e
            );
          })();
        t.default = f;
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(98),
          o = i(r),
          a = n(97),
          s = i(a),
          l = n(95),
          c = i(l),
          u = n(93),
          d = i(u),
          p = n(94),
          f = i(p),
          h = n(7),
          m = n(2),
          v = m.PLAYER_TYPES.DISPLAY,
          g = m.PLAYER_TYPES.VIDEO,
          y = function (e, t, n, i) {
            var r = void 0;
            if (e.campaignData && e.campaignData.playerOptions) {
              var a = e.campaignData.playerOptions.find(function (e) {
                return e.shouldExtractFromUnit && e.player.type === i;
              });
              if (a) {
                switch (a.player.provider.type.toUpperCase()) {
                  case "SR_BLADE":
                  case "SR_BLADE_VIEWABILITY":
                    r = new o.default(e, a, t);
                    break;
                  case "SR_V2":
                    r = new s.default(e, a, t);
                    break;
                  case "RTK":
                    r = new c.default(e, a, t);
                    break;
                  case "GPT":
                    r = new d.default(e, n, a, t);
                    break;
                  case "MINUTE_MEDIA":
                    r = new f.default(e, a, t, n);
                }
                (r.TYPE = a.player.provider.type.toLowerCase()),
                  (r.PROVIDER = i),
                  a.preroll &&
                    (r.PREROLL_AD_ON_CONFIG = {
                      type: a.preroll.loadAdOn,
                      configuration: a.preroll.loadAdOnProps,
                    }),
                  (r.MIDROLL_AD_ON_CONFIG = {
                    type: a.loadAdOn || m.LOAD_PLAYER_ON.LOAD,
                    configuration: a.loadAdOnProps,
                  }),
                  (r.IDLE_OPTIONS = (0, h.getIdleOptions)(a)),
                  i === v &&
                    ((r.TIME_IN_VIEW =
                      1e3 *
                      (a.timeInView ||
                        m.VIEWABILITY.DEFAULTS.DISPLAY_TIME_IN_VIEW)),
                    (r.TIME_BETWEEN_ADS =
                      1e3 *
                      (r.IDLE_OPTIONS.requestTimeout ||
                        m.VIEWABILITY.DEFAULTS.DISPLAY_TIME_BETWEEN_ADS)));
              }
            }
            return r;
          };
        t.default = function (e, t, n) {
          return { displayPlayer: y(e, t, n, v), videoPlayer: y(e, t, n, g) };
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(2),
          s = n(10),
          l = n(5),
          c = n(7),
          u = n(4),
          d = n(1),
          p = "undefined" == typeof Promise ? n(0).Promise : Promise,
          f = "5857d2ee263dc90002000001",
          h = "https://ssr.streamrail.net/js",
          m = {
            loop: !1,
            controls: {
              ads: { sound: !0, pause: !0, progress: !0, remainigTime: !0 },
            },
          },
          v = new p(function (e) {
            var t = (0, d.getMobileInAppParams)(),
              n = t.advertisingId,
              i = t.appName,
              r = t.bundleId;
            e({
              gdpr: { gdpr: 1, gdprString: t.gdprString },
              inAppMacros: {
                "m.dnt": t.trackingEnabled ? 0 : 1,
                "m.app_name": i,
                "m.ifa": n,
                "m.bundle_id": r,
              },
            });
          }),
          g = (function () {
            function e(t, n, r) {
              i(this, e);
              var o = n.player.provider.options.playerId;
              (this.playerId = o),
                (this.campaignId = r),
                (this.interactionModel = t),
                (this.adSize = (0, c.getVideoAdSize)(t)),
                (this.consent = (0, c.getInExpConsentConfiguration)(t)),
                (this.scriptSrc = h + "/" + f + "/" + o + "/player.js");
            }
            return (
              o(e, [
                {
                  key: "shouldUseLoadingIndicator",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "shouldKeepContainer",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = this.interactionModel,
                      n = t.publisherId,
                      i = t.publisher,
                      o = t.interactionId,
                      a = t.campaignData;
                    a = void 0 === a ? {} : a;
                    var l = a.countryData,
                      c = d.isApesterInapp
                        ? v
                        : (0, s.getConsent)(n, l, this.consent);
                    return new p(function (t) {
                      c.then(function (a) {
                        var s = a.gdpr;
                        s = void 0 === s ? {} : s;
                        var l = s.gdpr,
                          c = s.gdprString,
                          p = a.inAppMacros,
                          f = void 0 === p ? {} : p;
                        (e.macros = (0, d.filterUndefinedValuesInObject)(
                          r(
                            {
                              "m.dnt": 0,
                              "m.gdpr": l,
                              "m.page_url": (0, d.getPageUrl)(),
                              "m.user_consent": c,
                              "m.ua":
                                navigator.userAgent ||
                                navigator.vendor ||
                                window.opera,
                              "m.sub_id": o,
                              "m.param1": o,
                              "m.param2": n,
                              "m.param3": (0, d.getSessionId)(),
                              "m.param4": "apester.com:" + i.groupId,
                              "m.param5":
                                "1.0,1!apester.com," + i.groupId + ",1,,,",
                              "m.param6": e.campaignId,
                              "m.param7": e.adSize.width,
                              "m.param8": (0,
                              u.extractHostnameFromCanonicalUrlOrWindow)(),
                              "m.param9": e.adSize.height,
                            },
                            f
                          )
                        )),
                          t();
                      });
                    });
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    var n = this;
                    return new p(function (t, i) {
                      var o = "_APESTER_SR_INIT_" + e,
                        a = "_APESTER_SR_CONFIG_" + e;
                      (window[o] = function (e, i) {
                        (n.player = i), t();
                      }),
                        (window[a] = m);
                      var s = r(
                        { t: "bladex", c: e, config: a, callback: o },
                        n.macros
                      );
                      (0, l.loadScript)(
                        window,
                        n.scriptSrc + "?" + (0, d.encodeQueryParameters)(s)
                      ).catch(i);
                    });
                  },
                },
                {
                  key: "waitForImpression",
                  value: function () {
                    var e = this;
                    return new p(function (t, n) {
                      e.player.on("playerDone", function () {
                        n();
                      }),
                        e.player.on("AdImpression", function () {
                          e.player.pause(), t();
                        });
                    });
                  },
                },
                {
                  key: "resize",
                  value: function (e) {
                    this.player.resize(e.width, e.height);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this,
                      t = void 0;
                    return new p(function (n) {
                      e.player.on(
                        "AdStopped",
                        function () {
                          (t = a.MON_STOP_REASONS.END),
                            setTimeout(function () {
                              return n(t);
                            });
                        },
                        100
                      ),
                        e.player.on("skipButtonClicked", function () {
                          t = a.MON_STOP_REASONS.SKIP;
                        }),
                        e.player.play();
                    });
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.player.dispose();
                  },
                },
              ]),
              e
            );
          })();
        t.default = g;
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = n(5),
          s = n(41),
          l = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(s),
          c = n(7),
          u = n(2),
          d = "undefined" == typeof Promise ? n(0).Promise : Promise,
          p = (function () {
            function e(t, n, r) {
              i(this, e);
              var o = n.player.provider.options.playerId;
              (this.playerId = o), (this.campaignId = r);
            }
            return (
              o(e, [
                {
                  key: "init",
                  value: function () {
                    return new d(function (e, t) {
                      if (
                        ((window.srAsyncInit = function () {
                          return e();
                        }),
                        window.SR)
                      )
                        return e();
                      (0,
                      a.loadScript)(window, "https://sdk.streamrail.com/blade/sr.bladex.js");
                    });
                  },
                },
                {
                  key: "shouldUseLoadingIndicator",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "shouldKeepContainer",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "load",
                  value: function (e, t) {
                    var n = this;
                    return new d(function (i, o) {
                      (0, l.default)(
                        t,
                        n.campaignId,
                        (0, c.getVideoAdSize)(t),
                        (0, c.getInExpConsentConfiguration)(t)
                      ).then(function (t) {
                        window
                          .SR(e, {
                            playerId: n.playerId,
                            apiKey: "5857d2ee263dc90002000001",
                            version: "1.0",
                            macros: r({}, t, {
                              breakpoint: "max",
                              breakpointFor: "vast",
                            }),
                          })
                          .then(function (e) {
                            e.pause(),
                              (n.player = e),
                              n.player.on("AdImpression", i),
                              n.player.on("playerDone", function () {
                                o(!0);
                              });
                          });
                      });
                    });
                  },
                },
                {
                  key: "waitForImpression",
                  value: function () {
                    return d.resolve();
                  },
                },
                {
                  key: "resize",
                  value: function (e) {
                    this.player.resize(e.width, e.height);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this,
                      t = void 0;
                    return new d(function (n) {
                      e.player.on(
                        "AdStopped",
                        function () {
                          (t = u.MON_STOP_REASONS.END),
                            setTimeout(function () {
                              return n(t);
                            });
                        },
                        100
                      ),
                        e.player.on("skipButtonClicked", function () {
                          t = u.MON_STOP_REASONS.SKIP;
                        }),
                        e.player.play();
                    });
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.player.dispose();
                  },
                },
              ]),
              e
            );
          })();
        t.default = p;
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          r = (t.ADL_SCRIPT_URL =
            "https://tagan.adlightning.com/apester/op.js"),
          o = function () {
            return (
              1 ===
              Array.from(document.getElementsByTagName("script")).filter(
                function (e) {
                  return e.src === "" + r;
                }
              ).length
            );
          },
          a = !1,
          s = function (e, t) {
            var n = t.publisher;
            if (!a && !o() && n && n.enableAdProtection) {
              var s = e.getElementsByTagName("apester-layer"),
                l = i(s, 1),
                c = l[0];
              if (c) {
                var u = document.createElement("script");
                (u.defer = !0),
                  (u.type = "text/javascript"),
                  (u.src = "" + r),
                  c.appendChild(u),
                  (a = !0);
              }
            }
          };
        t.default = s;
      },
      function (e, t, n) {
        "use strict";
        var i = n(3),
          r = void 0;
        !(function () {
          if (!r) {
            r = !0;
            var e = document.createElement("script");
            (e.src = "//static.apester.com/js/lib/adsbygoogle.js"),
              (e.onload = function () {
                return (0, i.setHasAdblock)(!1);
              }),
              (e.onerror = function () {
                return (0, i.setHasAdblock)(!0);
              }),
              document.head.appendChild(e);
          }
        })();
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function o(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        function a(e) {
          var t = e.getBoundingClientRect(),
            n = window.innerHeight - t.top,
            i = t.top >= 0 ? n >= 160 : t.bottom >= 160;
          return (
            t.bottom >= 0 &&
            t.right >= 0 &&
            t.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            t.left <=
              (window.innerWidth || document.documentElement.clientWidth) &&
            i
          );
        }
        function s(e) {
          (0, d.registerElement)(e, "STRIPPWA", _);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StripPWA = t.stripEventsNames = void 0);
        var l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          c = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
        t.default = s;
        var u = n(20),
          d = n(21),
          p = n(14),
          f = n(1),
          h = n(11),
          m = n(3),
          v = n(4),
          g = "undefined" == typeof Promise ? n(0).Promise : Promise,
          y = (t.stripEventsNames = {
            STRIP_OPEN_UNIT: "strip_open_unit",
            STRIP_NEXT_UNIT: "strip_next_unit",
            CLOSE_RENDERER: "fullscreen_off",
            STRIP_ITEM_LOADED: "strip_item_loaded",
            CLOSE_STRIP: "close_strip",
            STRIP_REFRESH_CONTENT: "apester_strip_refresh_content",
          }),
          _ = (t.StripPWA = (function (e) {
            function t() {
              return (
                i(this, t),
                r(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(t, e),
              c(t, [
                {
                  key: "buildCallback",
                  value: function () {
                    var e = this;
                    (this.stripPWABaseUrl_ = "https://faststrip.apester.com"),
                      (this.iframe_ = null),
                      (this.iframePromise_ = null),
                      (this.ready_ = !1),
                      (this.isRemoved = !1),
                      (this.initCampaigns = this.options.initCampaigns),
                      (this.removeStrip = this.options.removeStrip),
                      (this.interactions = this.options.interactions),
                      (this.channelId = this.options.channelId),
                      (this.channelToken = this.options.channelToken),
                      (this.isPWA = this.options.isPWA),
                      (this.rendererElement = null),
                      (this.rendererDisplays_ = !1),
                      (this.instanceId = (0, f.createUuid)()),
                      (this.stripHandshakeTimeout = void 0),
                      window.__apester_no_player_strip ||
                        (this.registerEvent(y.STRIP_OPEN_UNIT, function (t) {
                          e.loadInteraction(t);
                        }),
                        this.registerEvent(y.CLOSE_RENDERER, function (t) {
                          e.hideRenderer();
                        })),
                      this.registerEvent(y.STRIP_REFRESH_CONTENT, function (t) {
                        var n = (0, f.regenerateSession)();
                        (0, h.syncAdBelowClosed)(),
                          e.registerEvent(
                            y.STRIP_ITEM_LOADED,
                            e.stripContentLoadedCallback.bind(e),
                            !0
                          ),
                          (t.newSessionId = n),
                          (0, f.safePostMessageToIframe)(e.iframe_, t);
                      }),
                      this.registerEvent(y.STRIP_NEXT_UNIT, function (t) {
                        e.initalRendering(),
                          window.__apester_no_player_strip || e.showRenderer(),
                          (0, f.safePostMessageToIframe)(e.iframe_, t);
                      }),
                      (this.bindedViewabilityCheck =
                        this.checkIfInViewport.bind(this));
                  },
                },
                {
                  key: "loadRenderer",
                  value: function (e, t) {
                    if (
                      (window.postMessage(
                        {
                          type: "apester_strip_units",
                          firstInteraction: e,
                          stripItems: this.interactions,
                          instanceId: this.instanceId,
                        },
                        "*"
                      ),
                      !window.__apester_no_player_strip)
                    ) {
                      (this.rendererElement = document.createElement("div")),
                        this.rendererElement.setAttribute(
                          "class",
                          "apester-media"
                        ),
                        this.rendererElement.setAttribute("data-media-id", e),
                        this.rendererElement.setAttribute(
                          "data-instance-id",
                          this.instanceId
                        ),
                        this.rendererElement.setAttribute(
                          "data-auto-fullscreen",
                          !0
                        ),
                        (this.rendererElement.stripItems = this.interactions),
                        (0, f.isFirefoxLessThan70)()
                          ? ((this.rendererElement.style.visibility = "hidden"),
                            (this.rendererElement.style.height = "0"))
                          : (this.rendererElement.style.display = "none");
                      var n = this.element && this.element.parentElement;
                      n &&
                        n.hasAttribute("data-manual-top") &&
                        this.rendererElement.setAttribute(
                          "data-manual-top",
                          n.getAttribute("data-manual-top")
                        ),
                        n &&
                          n.hasAttribute("data-manual-top-desktop") &&
                          this.rendererElement.setAttribute(
                            "data-manual-top-desktop",
                            n.getAttribute("data-manual-top-desktop")
                          ),
                        n &&
                          n.hasAttribute("data-manual-top-mobile") &&
                          this.rendererElement.setAttribute(
                            "data-manual-top-mobile",
                            n.getAttribute("data-manual-top-mobile")
                          ),
                        n &&
                          n.hasAttribute("adunit") &&
                          this.rendererElement.setAttribute(
                            "adunit",
                            n.getAttribute("adunit")
                          ),
                        n &&
                          n.hasAttribute("partner") &&
                          this.rendererElement.setAttribute(
                            "partner",
                            n.getAttribute("partner")
                          ),
                        t.appendChild(this.rendererElement),
                        window.APESTER.reload();
                    }
                  },
                },
                {
                  key: "getCustomStripProps",
                  value: function (e) {
                    return {
                      paddingTop:
                        (e.hasAttribute("strip-padding-top") &&
                          e.getAttribute("strip-padding-top")) ||
                        "0",
                      paddingBottom:
                        (e.hasAttribute("strip-padding-bottom") &&
                          e.getAttribute("strip-padding-bottom")) ||
                        "0",
                      itemShape:
                        (e.hasAttribute("item-shape") &&
                          e.getAttribute("item-shape")) ||
                        "square",
                      itemSize:
                        (e.hasAttribute("item-size") &&
                          e.getAttribute("item-size")) ||
                        "medium",
                      itemTextColor:
                        (e.hasAttribute("item-text-color") &&
                          encodeURIComponent(
                            e.getAttribute("item-text-color")
                          )) ||
                        "black",
                      stripBackground:
                        (e.hasAttribute("strip-background") &&
                          encodeURIComponent(
                            e.getAttribute("strip-background")
                          )) ||
                        "transparent",
                      isPreview:
                        (e.hasAttribute("preview") &&
                          e.getAttribute("preview")) ||
                        "false",
                      headerFontFamily:
                        (e.hasAttribute("header-font-family") &&
                          e.getAttribute("header-font-family")) ||
                        "Lato",
                      headerText:
                        (e.hasAttribute("header-text") &&
                          e.getAttribute("header-text")) ||
                        "",
                      headerFontSize:
                        (e.hasAttribute("header-font-size") &&
                          e.getAttribute("header-font-size")) ||
                        "22",
                      headerFontWeight:
                        (e.hasAttribute("header-font-weight") &&
                          e.getAttribute("header-font-weight")) ||
                        "400",
                      headerFontColor:
                        (e.hasAttribute("header-font-color") &&
                          encodeURIComponent(
                            e.getAttribute("header-font-color")
                          )) ||
                        "rgba(0,0,0,1)",
                      headerLtr:
                        (e.hasAttribute("header-ltr") &&
                          e.getAttribute("header-ltr")) ||
                        "true",
                      headerProvider:
                        (e.hasAttribute("header-provider") &&
                          e.getAttribute("header-provider")) ||
                        "system",
                      horizontalHeaderPadding:
                        (e.hasAttribute("horizontal-header-padding") &&
                          e.getAttribute("horizontal-header-padding")) ||
                        "8",
                      bottomBorderWidth:
                        (e.hasAttribute("bottom-border-width") &&
                          e.getAttribute("bottom-border-width")) ||
                        "0",
                      bottomBorderColor:
                        (e.hasAttribute("bottom-border-color") &&
                          encodeURIComponent(
                            e.getAttribute("bottom-border-color")
                          )) ||
                        "black",
                      topBorderWidth:
                        (e.hasAttribute("top-border-width") &&
                          e.getAttribute("top-border-width")) ||
                        "0",
                      topBorderColor:
                        (e.hasAttribute("top-border-color") &&
                          encodeURIComponent(
                            e.getAttribute("top-border-color")
                          )) ||
                        "black",
                      thumbnailsStrokeColor:
                        (e.hasAttribute("thumbnails-stroke-color") &&
                          encodeURIComponent(
                            e.getAttribute("thumbnails-stroke-color")
                          )) ||
                        "none",
                    };
                  },
                },
                {
                  key: "initalRendering",
                  value: function () {
                    this.rendererElement &&
                      !this.rendererDisplays_ &&
                      ((this.rendererElement.style.visibility = "hidden"),
                      (this.rendererElement.style.display = "block"));
                  },
                },
                {
                  key: "showRenderer",
                  value: function () {
                    this.rendererElement &&
                      ((this.rendererDisplays_ = !0),
                      (this.rendererElement.style.visibility = "unset"),
                      (this.rendererElement.style.display = "block"),
                      this.rendererElement.children[0].classList.add(
                        "fullscreen"
                      ));
                  },
                },
                {
                  key: "loadInteraction",
                  value: function (e) {
                    this.rendererElement &&
                      (0, f.safePostMessageToIframe)(
                        this.rendererElement.querySelector(
                          "iframe.apester-fill-content"
                        ),
                        e
                      );
                  },
                },
                {
                  key: "hideRenderer",
                  value: function () {
                    this.rendererElement &&
                      ((this.rendererDisplays_ = !1),
                      (this.rendererElement.style.display = "none"),
                      this.rendererElement.children[0].classList.remove(
                        "fullscreen"
                      ));
                  },
                },
                {
                  key: "createPerformanceLog",
                  value: function () {
                    return { stripId: this.instanceId };
                  },
                },
                {
                  key: "constructIframe_",
                  value: function (e) {
                    var t = this.element.ownerDocument.createElement("iframe");
                    return (
                      t.setAttribute("title", "Apester - Interactive content"),
                      t.setAttribute("frameborder", "0"),
                      t.setAttribute("allowtransparency", "true"),
                      t.setAttribute("id", "fast-strip"),
                      (t.src = e),
                      (t.name = /wpcomwidgets/.test(document.location.href)
                        ? document.referrer
                        : document.location.href),
                      t.classList.add("apester-fill-content"),
                      t
                    );
                  },
                },
                {
                  key: "getIframePromise_",
                  value: function () {
                    var e = this;
                    return (
                      (0, p.sendPerformanceLog)(
                        "strip_pwa_pending",
                        this.createPerformanceLog()
                      ),
                      new g(function (t) {
                        e.iframe_.onload = t;
                      })
                    );
                  },
                },
                {
                  key: "removeStripComponent",
                  value: function () {
                    (this.isRemoved = !0),
                      this.removeStrip(),
                      window.postMessage(
                        {
                          type: "apester_strip_removed",
                          token: this.token,
                          instanceId: this.instanceId,
                        },
                        "*"
                      );
                  },
                },
                {
                  key: "stripContentLoadedCallback",
                  value: function (e) {
                    var t = this,
                      n = e.firstInteraction,
                      i = e.stripItems,
                      r = e.payload;
                    clearTimeout(this.stripHandshakeTimeout);
                    var o = this.element && this.element.parentElement,
                      a = this.getDataFromStripAttributes(o);
                    (r.publisherId =
                      !r.publisherId && r.channelId
                        ? r.channelId
                        : r.publisherId),
                      (this.channelId = r.publisherId),
                      (this.interactions = i),
                      this.loadRenderer(
                        n,
                        document.body,
                        this.element && this.element.parentElement
                      ),
                      r.stripItems &&
                        r.stripItems.length > 0 &&
                        ((r.interactionId = r.stripItems[0].interactionId),
                        (r.publisher = r.stripItems[0].publisher)),
                      window.__APESTER_DEFFERED_AD_LOAD &&
                      "complete" === !document.readyState
                        ? (window.onload = function () {
                            t.initCampaigns(r);
                          })
                        : this.initCampaigns(r),
                      (0, p.sendPerformanceLog)(
                        "strip_pwa_loaded",
                        this.createPerformanceLog()
                      ),
                      (0, m.sendPositionLog)(
                        this.element,
                        "strip",
                        this.options.channelToken
                      );
                    for (
                      var s = ["DOMContentLoaded", "load", "scroll", "resize"],
                        c = 0;
                      c < s.length;
                      c += 1
                    )
                      window.removeEventListener(
                        s[c],
                        this.bindedViewabilityCheck
                      ),
                        window.addEventListener(
                          s[c],
                          this.bindedViewabilityCheck
                        );
                    this.bindedViewabilityCheck(),
                      (0, f.safePostMessageToIframe)(
                        this.iframe_,
                        l({}, a, { type: "strip-data" })
                      );
                  },
                },
                {
                  key: "layoutCallback",
                  value: function () {
                    var e = this,
                      t = this.element && this.element.parentElement,
                      n = this.getCustomStripProps(t),
                      i = (0, v.extractCanonicalUrlOrHref)(),
                      r =
                        this.stripPWABaseUrl_ +
                        "?token=" +
                        this.channelToken +
                        "&itemShape=" +
                        n.itemShape +
                        "&itemSize=" +
                        n.itemSize +
                        "&itemTextColor=" +
                        n.itemTextColor +
                        "&headerFontFamily=" +
                        n.headerFontFamily +
                        "&headerText=" +
                        n.headerText +
                        "&headerFontSize=" +
                        n.headerFontSize +
                        "&headerFontWeight=" +
                        n.headerFontWeight +
                        "&headerFontColor=" +
                        n.headerFontColor +
                        "&headerLtr=" +
                        n.headerLtr +
                        "&headerProvider=" +
                        n.headerProvider +
                        "&thumbnailsStrokeColor=" +
                        n.thumbnailsStrokeColor +
                        "&stripBackground=" +
                        n.stripBackground +
                        "&paddingTop=" +
                        n.paddingTop +
                        "&paddingBottom=" +
                        n.paddingBottom +
                        "&bottomBorderWidth=" +
                        n.bottomBorderWidth +
                        "&bottomBorderColor=" +
                        n.bottomBorderColor +
                        "&topBorderWidth=" +
                        n.topBorderWidth +
                        "&topBorderColor=" +
                        n.topBorderColor +
                        "&instanceId=" +
                        this.instanceId +
                        "&sessionId=" +
                        (0, f.getSessionId)() +
                        "&canonicalUrl=" +
                        encodeURIComponent(i) +
                        "&horizontalHeaderPadding=" +
                        n.horizontalHeaderPadding;
                    return (
                      "true" === n.isPreview && (r += "&isPreview=true"),
                      (this.iframe_ = this.constructIframe_(r)),
                      (this.stripHandshakeTimeout = setTimeout(function () {
                        e.isRemoved ||
                          (e.removeStripComponent(), (0, m.sendStripTimeout)());
                      }, 3e4)),
                      this.registerEvent(
                        y.STRIP_ITEM_LOADED,
                        this.stripContentLoadedCallback.bind(this),
                        !0
                      ),
                      this.registerEvent(y.CLOSE_STRIP, function (t) {
                        e.isRemoved || e.removeStripComponent();
                      }),
                      (this.iframePromise_ = this.getIframePromise_()),
                      this.element.appendChild(this.iframe_),
                      this.iframePromise_.then(function () {
                        if (
                          ((e.ready_ = !0),
                          "ios" === (0, f.getOS)() &&
                            window.performance &&
                            2 === window.performance.navigation.type)
                        ) {
                          var t = document.getElementById("fast-strip");
                          t && (t.src = r);
                        }
                        return e.iframe_;
                      })
                    );
                  },
                },
                {
                  key: "getDataFromStripAttributes",
                  value: function (e) {
                    var t =
                      (e.hasAttribute("adunit") || void 0) &&
                      e.getAttribute("adunit");
                    return {
                      partner:
                        (e.hasAttribute("partner") || void 0) &&
                        e.getAttribute("partner"),
                      adUnit: t,
                    };
                  },
                },
                {
                  key: "registerEvent",
                  value: function (e, t) {
                    var n = this,
                      i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      r = function r(o) {
                        o.data.type !== e ||
                          (o.data.instanceId !== n.instanceId &&
                            !window.__apester_no_player_strip) ||
                          (t(o.data),
                          i && window.removeEventListener("message", r));
                      };
                    window.addEventListener("message", r);
                  },
                },
                {
                  key: "removeEvent",
                  value: function (e, t) {
                    window.removeEventListener(e, t);
                  },
                },
                {
                  key: "checkIfInViewport",
                  value: function () {
                    var e = this;
                    requestAnimationFrame(function () {
                      if (a(e.element)) {
                        (0, f.safePostMessageToIframe)(e.iframe_, {
                          type: "viewablity",
                          isInView: !0,
                        });
                        for (
                          var t = [
                              "DOMContentLoaded",
                              "load",
                              "scroll",
                              "resize",
                            ],
                            n = 0;
                          n < t.length;
                          n += 1
                        )
                          window.removeEventListener(
                            t[n],
                            e.bindedViewabilityCheck
                          );
                      }
                    });
                  },
                },
              ]),
              t
            );
          })(u.BaseElement));
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(76),
          o = i(r),
          a = n(75),
          s = i(a),
          l = n(1),
          c = void 0;
        t.default = function (e, t, n) {
          var i = void 0;
          if (
            t.campaignData &&
            t.campaignData.companionOptions &&
            t.campaignData.companionOptions.settings
          ) {
            var r = t.campaignData.companionOptions.video,
              a = void 0 === r ? {} : r,
              u = a.videoTag,
              d = a.floating,
              p = a.companion,
              f = a.provider,
              h = void 0 === f ? "" : f,
              m = a.enabled,
              v = a.companion_below,
              g = d || {},
              y = g.enabled,
              _ = p || {},
              b = _.enabled,
              E = v || {},
              w = E.enabled;
            if ("gallery" === t.layout && !y) return i;
            if (
              m &&
              u &&
              (y || b || w) &&
              !(0, l.isInAppCompanionVideoAdsBlocked)() &&
              (!y || !c)
            )
              switch (((c = c || y), h.toUpperCase())) {
                case "SR":
                  i = (0, o.default)(e, t, n);
                  break;
                case "SR_V2":
                  i = (0, s.default)(e, t, n);
              }
          }
          return i;
        };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        t.Observable = (function () {
          function e() {
            i(this, e), (this.listeners_ = []);
          }
          return (
            r(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this;
                  return (
                    this.listeners_.push(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.listeners_.indexOf(e);
                  -1 != t && this.listeners_.splice(t, 1);
                },
              },
              {
                key: "fire",
                value: function (e) {
                  for (var t = 0; t < this.listeners_.length; t++) {
                    this.listeners_[t].call(this, e);
                  }
                },
              },
            ]),
            e
          );
        })();
      },
      function (e, t, n) {
        "use strict";
        !(function () {
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
              (Element.prototype.closest = function (e) {
                var t = this;
                do {
                  if (t.matches(e)) return t;
                  t = t.parentElement || t.parentNode;
                } while (null !== t && 1 === t.nodeType);
                return null;
              }),
            String.prototype.endsWith ||
              (String.prototype.endsWith = function (e, t) {
                var n = this.toString();
                ("number" != typeof t ||
                  !isFinite(t) ||
                  Math.floor(t) !== t ||
                  t > n.length) &&
                  (t = n.length),
                  (t -= e.length);
                var i = n.indexOf(e, t);
                return -1 !== i && i === t;
              });
        })();
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Resource = t.ResourceState = void 0);
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(46),
          a = "undefined" == typeof Promise ? n(0).Promise : Promise,
          s = (t.ResourceState = {
            NOT_BUILT: 0,
            NOT_LAID_OUT: 1,
            READY_FOR_LAYOUT: 2,
            LAYOUT_SCHEDULED: 3,
            LAYOUT_COMPLETE: 4,
            LAYOUT_FAILED: 5,
          });
        t.Resource = (function () {
          function e(t, n, r, l) {
            var c = this;
            i(this, e),
              (this.id_ = t),
              (this.element = new n()),
              (this.parent = r),
              (this.hostWin = this.element.element.ownerDocument.defaultView),
              (this.resources_ = l),
              (this.owner_ = void 0),
              (this.state_ = this.element.isBuilt()
                ? s.NOT_LAID_OUT
                : s.NOT_BUILT),
              (this.layoutCount_ = 0),
              (this.layoutBox_ = (0, o.layoutRectLtwh)(-1e4, -1e4, 0, 0)),
              (this.initialLayoutBox_ = null),
              (this.isMeasureRequested_ = !1),
              (this.isInViewport_ = !1),
              (this.layoutPromise_ = null),
              (this.loadedOnce_ = !1),
              (this.loadPromiseResolve_ = null),
              (this.loadPromise_ = new a(function (e) {
                c.loadPromiseResolve_ = e;
              })),
              (this.paused_ = !1),
              this.parent.appendChild(this.element.element),
              this.element.connectedCallback();
          }
          return (
            r(e, [
              {
                key: "getId",
                value: function () {
                  return this.id_;
                },
              },
              {
                key: "getElementForResource",
                value: function () {
                  return this.element;
                },
              },
              {
                key: "getDOMElementForResource",
                value: function () {
                  return this.element.element;
                },
              },
              {
                key: "updateOwner",
                value: function (e) {
                  this.owner_ = e;
                },
              },
              {
                key: "getOwner",
                value: function () {
                  return this.owner_;
                },
              },
              {
                key: "hasOwner",
                value: function () {
                  return !!this.getOwner();
                },
              },
              {
                key: "getState",
                value: function () {
                  return this.state_;
                },
              },
              {
                key: "build",
                value: function () {
                  try {
                    this.element.build();
                  } catch (e) {
                    return void console.error("failed to build:", e);
                  }
                  this.hasBeenMeasured()
                    ? (this.state_ = s.READY_FOR_LAYOUT)
                    : (this.state_ = s.NOT_LAID_OUT);
                },
              },
              {
                key: "measure",
                value: function () {
                  this.isMeasureRequested_ = !1;
                  var e = this.resources_.getLayoutRect(this.element.element);
                  (this.layoutBox_ = e),
                    this.state_ != s.NOT_BUILT &&
                      this.state_ == s.NOT_LAID_OUT &&
                      (this.state_ = s.READY_FOR_LAYOUT),
                    this.hasBeenMeasured() || (this.initialLayoutBox_ = e),
                    this.element.updateLayoutBox(e);
                },
              },
              {
                key: "isMeasureRequested",
                value: function () {
                  return this.isMeasureRequested_;
                },
              },
              {
                key: "hasBeenMeasured",
                value: function () {
                  return !!this.initialLayoutBox_;
                },
              },
              {
                key: "requestMeasure",
                value: function () {
                  this.state_ != s.NOT_BUILT && (this.isMeasureRequested_ = !0);
                },
              },
              {
                key: "getLayoutBox",
                value: function () {
                  if (!this.isFixed_) return this.layoutBox_;
                  var e = this.resources_.getViewport();
                  return moveLayoutRect(
                    this.layoutBox_,
                    e.getScrollLeft(),
                    e.getScrollTop()
                  );
                },
              },
              {
                key: "getInitialLayoutBox",
                value: function () {
                  return this.initialLayoutBox_ || this.layoutBox_;
                },
              },
              {
                key: "isDisplayed",
                value: function () {
                  return (
                    this.layoutBox_.height > 0 && this.layoutBox_.width > 0
                  );
                },
              },
              {
                key: "layoutScheduled",
                value: function () {
                  this.state_ = s.LAYOUT_SCHEDULED;
                },
              },
              {
                key: "startLayout",
                value: function () {
                  var e = this;
                  if (this.layoutPromise_) return this.layoutPromise_;
                  this.measure(),
                    this.layoutCount_++,
                    (this.state_ = s.LAYOUT_SCHEDULED);
                  var t = void 0;
                  try {
                    t = this.element.layoutCallback();
                  } catch (e) {
                    return console.error(e), a.reject(e);
                  }
                  return (
                    (this.layoutPromise_ = t.then(
                      function () {
                        return e.layoutComplete_(!0);
                      },
                      function (t) {
                        return e.layoutComplete_(!1, t);
                      }
                    )),
                    this.layoutPromise_
                  );
                },
              },
              {
                key: "layoutComplete_",
                value: function (e, t) {
                  if (
                    (this.loadPromiseResolve_ &&
                      (this.loadPromiseResolve_(),
                      (this.loadPromiseResolve_ = null)),
                    (this.layoutPromise_ = null),
                    (this.loadedOnce_ = !0),
                    (this.state_ = e ? s.LAYOUT_COMPLETE : s.LAYOUT_FAILED),
                    !e)
                  )
                    return a.reject(t);
                },
              },
              {
                key: "isLayoutPending",
                value: function () {
                  return (
                    this.state_ != s.LAYOUT_COMPLETE &&
                    this.state_ != s.LAYOUT_FAILED
                  );
                },
              },
              {
                key: "loadedOnce",
                value: function () {
                  return this.loadPromise_;
                },
              },
              {
                key: "hasLoadedOnce",
                value: function () {
                  return this.loadedOnce_;
                },
              },
              {
                key: "isInViewport",
                value: function () {
                  return this.isInViewport_;
                },
              },
              {
                key: "setInViewport",
                value: function (e) {
                  e != this.isInViewport_ &&
                    ((this.isInViewport_ = e),
                    this.element.viewportCallback(e));
                },
              },
              {
                key: "unlayout",
                value: function () {
                  this.state_ != s.NOT_BUILT &&
                    this.state_ != s.NOT_LAID_OUT &&
                    (this.setInViewport(!1),
                    this.element.unlayoutCallback() &&
                      (this.element.togglePlaceholder(!0),
                      (this.state_ = s.NOT_LAID_OUT),
                      (this.layoutCount_ = 0),
                      (this.layoutPromise_ = null)));
                },
              },
              {
                key: "pause",
                value: function () {
                  this.state_ == s.NOT_BUILT ||
                    this.paused_ ||
                    ((this.paused_ = !0),
                    this.setInViewport(!1),
                    this.element.pauseCallback(),
                    this.element.unlayoutOnPause() && this.unlayout());
                },
              },
              {
                key: "pauseOnRemove",
                value: function () {
                  this.state_ != s.NOT_BUILT &&
                    (this.setInViewport(!1),
                    this.paused_ ||
                      ((this.paused_ = !0), this.element.pauseCallback()));
                },
              },
              {
                key: "resume",
                value: function () {
                  this.state_ != s.NOT_BUILT &&
                    this.paused_ &&
                    ((this.paused_ = !1), this.element.resumeCallback());
                },
              },
              {
                key: "play",
                value: function () {
                  var e = void 0;
                  try {
                    e = this.element.playCallback();
                  } catch (e) {
                    return a.reject(e);
                  }
                  return e;
                },
              },
              {
                key: "engage",
                value: function () {
                  var e = void 0;
                  try {
                    e = this.element.engagementCallback();
                  } catch (e) {
                    return a.reject(e);
                  }
                  return e;
                },
              },
              {
                key: "stop",
                value: function () {
                  this.element.stopCallback();
                },
              },
              {
                key: "unload",
                value: function () {
                  this.pause(), this.unlayout();
                },
              },
              {
                key: "registerEvent",
                value: function (e, t) {
                  this.element.registerEvent(e, t);
                },
              },
              {
                key: "closeUnit",
                value: function () {
                  this.element.closeUnit && this.element.closeUnit();
                },
              },
              {
                key: "remove",
                value: function () {
                  this.element.remove && this.element.remove();
                },
              },
            ]),
            e
          );
        })();
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e) {
          var t = this,
            n = !1,
            i = new k(function (i, r) {
              e.then(
                function () {
                  n || i.apply(t);
                },
                function () {
                  n || r.apply(t);
                }
              );
            });
          return (
            (i.cancel = function () {
              n = !0;
            }),
            i
          );
        }
        function a(e, t, n, i) {
          return {
            left: e,
            top: t,
            width: n,
            height: i,
            bottom: t + i,
            right: e + n,
          };
        }
        function s(e, t) {
          if ("board" === t) return e.height;
          var n = "contest-poll" === e.layout.directive,
            i = -1 !== e.layout.directive.indexOf("video");
          return (e.data.size || {}).height > 0
            ? n || i || e.data.updatedVersion >= 7
              ? (e.data.size || {}).height || 338
              : (e.data.size || {}).height - 40
            : 338;
        }
        function l(e) {
          var t = e.getBoundingClientRect(),
            n = window.innerHeight - t.top,
            i = t.top >= 0 ? n >= 160 : t.bottom >= 160;
          return (
            t.bottom >= 0 &&
            t.right >= 0 &&
            t.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            t.left <=
              (window.innerWidth || document.documentElement.clientWidth) &&
            i
          );
        }
        function c() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return JSON.stringify(
            e.map(function (e) {
              return { tag: e };
            })
          );
        }
        function u() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          return e.filter(function (e) {
            return t.some(function (t) {
              return t.toLowerCase() === e.toLowerCase();
            });
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ResourceManager = void 0);
        var d = (function () {
            function e(e, t) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          p = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
        (t.default = o), (t.layoutRectLtwh = a);
        var f = n(105),
          h = n(108),
          m = i(h),
          v = n(73),
          g = i(v),
          y = n(102),
          _ = i(y),
          b = n(92),
          E = i(b),
          w = n(44),
          I = n(2),
          T = n(82),
          O = i(T),
          S = n(91),
          A = i(S),
          P = n(1),
          k = "undefined" == typeof Promise ? n(0).Promise : Promise,
          C = function (e, t) {
            e.style["max-width"] = t + "px";
          };
        t.ResourceManager = (function () {
          function e(t, n, i) {
            var o = this;
            r(this, e),
              (this.type = i),
              (this.element = t),
              "strip" === i ||
                P.isApesterInapp ||
                (this.element.style.height = s(n, i, t) + "px"),
              (this.model_ = n),
              (this.companions_ = []),
              this.element.classList.add("apester-element"),
              (this.resources_ = []),
              (this.pass_ = null),
              (this.toggled_ = !1),
              (this.resourceIdCounter_ = 0),
              (this.addCount_ = 0),
              (this.shouldToggle_ = !1),
              (this.master_ = null),
              (this.masterActive_ = !0),
              (this.slave_ = null),
              (this.seen_ = !1),
              (this.trigger_ = {}),
              (this.trigger_.options = {});
            var a = void 0;
            this.model_.publisher && (a = this.model_.publisher.trigger),
              (this.trigger_ = this.model_.trigger || a || this.trigger_),
              window.addEventListener(
                "message",
                this.receiveMessage.bind(this)
              ),
              (this.dispatchInView = function () {
                var e = window.document.createEvent("Event");
                (e.data = { seen: o.seen_ }),
                  e.initEvent("mediaInView", !0, !0),
                  o.element.dispatchEvent(e);
              }),
              (this.predicate_ = function () {
                if (o.trigger_) {
                  var e = o.trigger_.options.duration || "4000",
                    t = parseInt(e);
                  return new k(function (e, n) {
                    setTimeout(function () {
                      e();
                    }, t);
                  });
                }
                return k.reject();
              }),
              this.trigger_ &&
                window.addEventListener("message", function (e) {
                  e &&
                    e.data &&
                    e.data.type &&
                    ("unit_engaged" === e.data.type &&
                      setTimeout(function () {
                        (o.activePredicate_ = {
                          triggerType: "unitEngaged",
                          triggerFunction: "timer",
                          triggerOptionDuration: "3000",
                          triggerOptionForceViewability:
                            "" + (o.trigger_.options.forceViewability || !1),
                        }),
                          o.updateView_();
                      }, 3e3),
                    "unit_complete" === e.data.type &&
                      setTimeout(function () {
                        (o.activePredicate_ = {
                          triggerType: "unitComplete",
                          triggerFunction: "timer",
                          triggerOptionDuration: "5000",
                          triggerOptionForceViewability:
                            "" + (o.trigger_.options.forceViewability || !1),
                        }),
                          o.updateView_();
                      }, 5e3));
                }),
              (this.viewport_ = new m.default(window)),
              (this.isInViewport_ = l(this.element)),
              this.isInViewport_ && (this.seen_ = !0),
              this.viewport_.onChanged(function () {
                return requestAnimationFrame(function () {
                  var e = l(o.element);
                  o.isInViewport_ = e;
                  for (var t = 0; t < o.resources_.length; t += 1) {
                    o.resources_[t].setInViewport(o.isInViewport_);
                  }
                  o.isInViewport_ &&
                    !o.seen_ &&
                    ((o.seen_ = !0), o.dispatchInView()),
                    e &&
                      o.master_ &&
                      o.master_.getState() ===
                        f.ResourceState.LAYOUT_COMPLETE &&
                      o.updateView_();
                });
              });
          }
          return (
            p(e, [
              {
                key: "handleStripResize",
                value: function (e) {
                  this.element.attributes["data-channel-tokens"].value ===
                    e.token &&
                    ((this.element.style.height =
                      this.resizeStrip(e.data) + "px"),
                    window.removeEventListener("message", this.receiveMessage));
                },
              },
              {
                key: "receiveMessage",
                value: function (e) {
                  e &&
                    e.data &&
                    "RESIZE_STRIP" === e.data.type &&
                    this.element.classList.contains("apester-strip") &&
                    this.handleStripResize(e.data);
                },
              },
              {
                key: "resizeStrip",
                value: function (e) {
                  return e || (P.isMobile ? 220 : 250);
                },
              },
              {
                key: "removeAllCompanionAds",
                value: function () {
                  this.companions_.forEach(function (e) {
                    e.remove && e.remove();
                  }),
                    (this.companions_ = []);
                },
              },
              {
                key: "initializeCompanionAds",
                value: function () {
                  var e = this,
                    t = "strip" === this.type;
                  if (
                    !(
                      (0, P.isPMCDisabledAds)() ||
                      (window.__noApesterAds && P.isApesterInapp) ||
                      ((0, P.isMinuteMediaCompanion)(this.model_) &&
                        window.browsiCompanionHandlededByApp)
                    )
                  ) {
                    this.removeAllCompanionAds();
                    var n =
                        (0, _.default)(this.element, this.model_) ||
                        k.resolve(),
                      i =
                        (0, g.default)(this.element, this.model_, t) ||
                        k.resolve();
                    k.all([n, i]).then(function (t) {
                      var n = d(t, 2),
                        i = n[0],
                        r = n[1];
                      r && e.companions_.push(r), i && e.companions_.push(i);
                    });
                  }
                },
              },
              {
                key: "initializeRenderer",
                value: function () {
                  var e = (0, P.getInstanceId)(this.element);
                  if (
                    (e || this.initializeCompanionAds(),
                    !(0, P.isIOSInAppMonetizationBlocked)() &&
                      (!window.__noApesterAds || !P.isApesterInapp) &&
                      this.model_.campaignData &&
                      this.model_.campaignData.playerOptions)
                  ) {
                    var t = this.model_.campaignData.playerOptions.find(
                      function (e) {
                        return (
                          e.inStreamVideo &&
                          e.player.type === I.PLAYER_TYPES.VIDEO
                        );
                      }
                    );
                    t
                      ? (0, A.default)(this.element, this.model_, e, t)
                      : this.model_.campaignData.playerOptions.length &&
                        (0, E.default)(this.element, this.model_, e),
                      (0, T.hasBottomAd)(this.model_) &&
                        (0, O.default)(this.element, this.model_, e);
                  }
                  var n = void 0;
                  this.model_.publisher &&
                    (n = this.model_.publisher.extensions || []),
                    (this.model_.publisherId =
                      this.element.getAttribute("data-channel-id") ||
                      this.model_.publisherId);
                  var i = this.model_.extensions || n || [],
                    r = !!this.element.getAttribute("data-channel-id"),
                    o =
                      !!this.element.getAttribute("data-context") &&
                      "true" === this.element.getAttribute("data-context");
                  i.unshift({
                    type: "interaction",
                    provider: {
                      type: "renderer",
                      version: "0.1.0",
                      options: { monetized: r },
                      content: this.model_.renderer,
                    },
                  });
                  for (var a = 0; a < i.length; a += 1) {
                    var s = i[a],
                      l = u(this.model_.tags, this.model_.pageTags);
                    (s.provider.options.mediaId = this.model_.interactionId),
                      (s.provider.options.interactionId =
                        this.model_.interactionId),
                      (s.provider.options.channelId = this.model_.publisherId),
                      (s.provider.options.type = this.getInteractionType(o)),
                      (s.provider.options.campaignData =
                        this.model_.campaignData),
                      (s.provider.options.isContextualMatch =
                        this.model_.isContextualMatch),
                      (s.provider.options.evergreen = this.model_.evergreen),
                      (s.provider.options.instanceId = e),
                      (s.provider.options.stripItems = this.getStripItems()),
                      (s.provider.options.autoFullscreen =
                        this.getAutoFullscreen()),
                      (s.provider.options.newPlayer =
                        this.model_.usePlayer || this.isNewPlayer()),
                      (s.provider.options.isResultsScreen =
                        this.isResultsScreen()),
                      (s.provider.options.publisher = this.model_.publisher),
                      (s.provider.options.matchedTags = c(l)),
                      (s.provider.options.consent = this.model_.consent),
                      (s.provider.options.clickMacro =
                        this.getAttributeFromTag("click-macro")),
                      (s.provider.options.partner =
                        this.getAttributeFromTag("partner")),
                      (s.provider.options.adUnit =
                        this.getAttributeFromTag("adunit")),
                      (s.provider.options.externalId =
                        this.getAttributeFromTag("external-id")),
                      (s.provider.options.iosDeviceInfo = (0,
                      P.getMobileInAppParams)()),
                      this.add(s);
                  }
                },
              },
              {
                key: "initilaizeCompanionAdsFromComponent",
                value: function (e) {
                  var t = this;
                  if (
                    !(
                      (0, P.isPMCDisabledAds)() ||
                      (window.__noApesterAds && P.isApesterInapp) ||
                      ((0, P.isMinuteMediaCompanion)(e) &&
                        window.browsiCompanionHandlededByApp)
                    )
                  ) {
                    var n = "strip" === this.type;
                    this.removeAllCompanionAds();
                    var i = (0, _.default)(this.element, e, n) || k.resolve(),
                      r = (0, g.default)(this.element, e, n) || k.resolve();
                    k.all([i, r]).then(function (e) {
                      var n = d(e, 2),
                        i = n[0],
                        r = n[1];
                      r && t.companions_.push(r), i && t.companions_.push(i);
                    });
                  }
                },
              },
              {
                key: "initializePWAStrip",
                value: function () {
                  this.model_.isPWA ||
                    (this.model_.campaignData.companionOptions &&
                      this.model_.campaignData.companionOptions
                        .enabledOnStrip &&
                      this.initializeCompanionAds()),
                    this.add({
                      type: "strip",
                      provider: {
                        type: "stripPWA",
                        version: "0.1.0",
                        options: {
                          channelToken: this.model_.channelToken,
                          isPWA: this.model_.isPWA,
                          initCampaigns:
                            this.initilaizeCompanionAdsFromComponent.bind(this),
                          removeStrip: this.remove.bind(this),
                        },
                      },
                    });
                },
              },
              {
                key: "initializeBoard",
                value: function () {
                  var e = this.model_,
                    t = e.channelId,
                    n = e.height,
                    i = e.title;
                  this.add({
                    type: "board",
                    provider: {
                      type: "board",
                      version: "0.1.0",
                      options: { channelId: t, height: n, title: i },
                    },
                  });
                },
              },
              {
                key: "Initialize",
                value: function () {
                  switch (this.type) {
                    case "strip":
                      this.initializePWAStrip();
                      break;
                    case "board":
                      this.initializeBoard();
                      break;
                    case "renderer":
                    default:
                      this.initializeRenderer();
                  }
                },
              },
              {
                key: "getInteractionType",
                value: function (e) {
                  var t = "editorial";
                  return (
                    this.isNonEditorialTag_(this.element) && (t = "playlist"),
                    e && (t = "contextual playlist"),
                    t
                  );
                },
              },
              {
                key: "getStripItems",
                value: function () {
                  return !!this.element.stripItems && this.element.stripItems;
                },
              },
              {
                key: "getAutoFullscreen",
                value: function () {
                  return (
                    !!this.element.getAttribute("data-auto-fullscreen") &&
                    this.element.getAttribute("data-auto-fullscreen")
                  );
                },
              },
              {
                key: "isNewPlayer",
                value: function () {
                  return (
                    !!this.element.getAttribute("data-player") &&
                    "true" === this.element.getAttribute("data-player")
                  );
                },
              },
              {
                key: "isResultsScreen",
                value: function () {
                  return this.element.hasAttribute("results");
                },
              },
              {
                key: "getAttributeFromTag",
                value: function (e) {
                  return this.element.getAttribute(e);
                },
              },
              {
                key: "isNonEditorialTag_",
                value: function (e) {
                  return !!(
                    e.getAttribute("data-channel-token") ||
                    e.getAttribute("data-random") ||
                    e.getAttribute("data-token")
                  );
                },
              },
              {
                key: "cycle_",
                value: function () {
                  for (var e = 0; e < this.resources_.length; e += 1) {
                    var t = this.resources_[e];
                    t &&
                      t.getState() == f.ResourceState.NOT_BUILT &&
                      this.build_(t);
                  }
                  for (var n = 0; n < this.resources_.length; n += 1) {
                    var i = this.resources_[n];
                    (i && i.getState() == f.ResourceState.NOT_BUILT) ||
                      i.hasOwner() ||
                      (((i && i.getState() == f.ResourceState.NOT_LAID_OUT) ||
                        i.isMeasureRequested()) &&
                        i.measure());
                  }
                  for (var r = 0; r < this.resources_.length; r += 1) {
                    var o = this.resources_[r];
                    (o && o.getState() != f.ResourceState.READY_FOR_LAYOUT) ||
                      o.hasOwner() ||
                      this.layout_(o);
                  }
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = function () {
                    return new APESTER[e.provider.type.toUpperCase()](e);
                  };
                  (this.addCount_ += 1),
                    this.addCount_,
                    (this.resourceIdCounter_ += 1);
                  var n = new f.Resource(
                      this.resourceIdCounter_,
                      t,
                      this.element,
                      this
                    ),
                    i = n.getDOMElementForResource();
                  1 === this.resourceIdCounter_
                    ? ((this.master_ = n), this.setActiveResource_(n))
                    : ((this.slave_ = n),
                      this.predicateToggle_(),
                      this.setInactiveResource_(n)),
                    this.updateView_(),
                    i.id || (i.id = "APESTER_" + n.getId()),
                    this.resources_.push(n),
                    this.cycle_();
                },
              },
              {
                key: "build_",
                value: function (e) {
                  var t = this;
                  e.registerEvent(
                    w.rendererEventsNames.RESIZE_UNIT,
                    function (e) {
                      t.model_.interactionId === e.id &&
                        e.height &&
                        (0, P.changeHeight)(t.element, e.height),
                        t.model_.interactionId === e.id &&
                          e.width &&
                          C(t.element, e.width),
                        (0, T.hasBottomAd)(t.model_) &&
                          (0, P.changeHeight)(
                            t.element,
                            e.height + T.BOTTOM_AD_HEIGHT
                          );
                    }
                  ),
                    e.build();
                },
              },
              {
                key: "layout_",
                value: function (e) {
                  var t = this;
                  e.startLayout()
                    .then(function () {
                      e.setInViewport(t.isInViewport_), t.updateView_();
                      var n = e.getElementForResource();
                      console.log(n.getAbstractType());
                    })
                    .catch(function (n) {
                      var i = e.getElementForResource();
                      t.hideApesterElement(i), console.log(n);
                    });
                },
              },
              {
                key: "updateView_",
                value: function () {
                  this.slave_ &&
                    this.master_ &&
                    this.master_.getState() ===
                      f.ResourceState.LAYOUT_COMPLETE &&
                    this.scheduleToggle_();
                },
              },
              {
                key: "setActiveResource_",
                value: function (e) {
                  var t = e.getDOMElementForResource();
                  t.classList.add("apester-active"),
                    t.classList.remove("apester-ready");
                },
              },
              {
                key: "setInactiveResource_",
                value: function (e) {
                  var t = e.getDOMElementForResource();
                  t.classList.remove("apester-active"),
                    t.classList.add("apester-ready");
                },
              },
              {
                key: "tryToggle",
                value: function (e) {
                  var t = this,
                    n = setInterval(function () {
                      if (!t.toggled_ && t.slave_) {
                        if (
                          (console.log("retrying..."),
                          t.slave_ &&
                            t.slave_.getState() ===
                              f.ResourceState.LAYOUT_COMPLETE)
                        )
                          return (
                            (t.toggled_ = !0),
                            clearInterval(n),
                            t.setActiveResource_(t.slave_),
                            t.setInactiveResource_(t.master_),
                            console.log("PLAYING NOW!!!"),
                            t.slave_.play().then(function () {
                              t.setActiveResource_(t.master_),
                                t.setInactiveResource_(t.slave_);
                            })
                          );
                      } else clearInterval(n);
                    }, 200);
                },
              },
              {
                key: "predicateToggle_",
                value: function () {
                  var e = this,
                    t = o(this.predicate_()),
                    n = o(this.master_.engage());
                  t.then(function () {
                    (e.activePredicate_ = {
                      triggerType: e.trigger_.type,
                      triggerFunction: e.trigger_.function,
                      triggerOptionDuration: "" + e.trigger_.options.duration,
                      triggerOptionForceViewability:
                        "" + (e.trigger_.options.forceViewability || !1),
                      iframeType:
                        e.master_ &&
                        e.master_.element.implementation_.isFriendly_
                          ? "friendlyIframe"
                          : "iframe",
                    }),
                      e.updateView_();
                  }),
                    n.then(function () {
                      t.cancel();
                    });
                },
              },
              {
                key: "scheduleToggle_",
                value: function () {
                  var e = this.activePredicate_;
                  if (!this.toggling_ && e) {
                    var t = this.trigger_.options.forceViewability;
                    (!this.isInViewport_ && t) ||
                      ((this.toggling_ = !0), this.tryToggle(e));
                  }
                },
              },
              {
                key: "getLayoutRect",
                value: function (e) {
                  var t = e.getBoundingClientRect();
                  return a(
                    Math.round(t.left),
                    Math.round(t.top),
                    Math.round(t.width),
                    Math.round(t.height)
                  );
                },
              },
              {
                key: "registerEvent",
                value: function (e, t) {
                  this.resources_.forEach(function (n) {
                    return n.registerEvent(e, t);
                  });
                },
              },
              {
                key: "remove",
                value: function () {
                  this.resources_.forEach(function (e) {
                    return e.remove && e.remove();
                  }),
                    this.element.remove();
                },
              },
              {
                key: "closeUnits",
                value: function () {
                  this.resources_.forEach(function (e) {
                    return e.closeUnit && e.closeUnit();
                  });
                },
              },
              {
                key: "hideApesterElement",
                value: function (e) {
                  e.element &&
                    e.element.parentNode &&
                    e.element.parentNode.classList &&
                    e.element.parentNode.classList.contains &&
                    (e.element.parentNode.classList.contains("apester-media") ||
                      e.element.parentNode.classList.contains(
                        "apester-element"
                      )) &&
                    (e.element.parentNode.style.display = "none");
                },
              },
            ]),
            e
          );
        })();
      },
      function (e, t, n) {
        "use strict";
        function i(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        }
        function r(e) {
          return Array.isArray(e) ? e : Array.from(e);
        }
        function o(e) {
          var t = document.head.querySelector('meta[name~="' + e + '"]');
          return t ? t.content : null;
        }
        function a(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "og",
            n = document.head.querySelector(
              '[property~="' + t + ":" + e + '"][content]'
            );
          return n ? n.content : null;
        }
        function s() {
          var e = document.head.querySelectorAll(
            '[property~="article:tag"][content]'
          );
          return e && e.length
            ? Array.prototype.slice.call(e).map(function (e) {
                return e.content;
              })
            : null;
        }
        function l() {
          var e = document.head.querySelectorAll(
            '[property~="article:published_time"][content]'
          );
          return e
            ? Array.prototype.slice.call(e).map(function (e) {
                return e.content;
              })
            : null;
        }
        function c(e) {
          var t = o(e);
          return t ? t.replace(" ", "").split(",") : null;
        }
        function u(e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              n = 0,
              o = e.length;
            n < o;
            n++
          ) {
            var a = r(e[n]),
              s = a[0],
              l = a.slice(1),
              c = s.apply(void 0, i(l));
            if (c) return c;
          }
          return t;
        }
        function d() {
          return u([[a, "type"]]);
        }
        function p() {
          var e = d(),
            t = l();
          return "article" === e || !(!t || !t.length);
        }
        function f() {
          return u([
            [a, "title", "engageya"],
            [a, "title"],
            [o, "title"],
          ]);
        }
        function h() {
          return u([
            [a, "description", "engageya"],
            [a, "description"],
            [o, "description"],
            [o, "Description"],
          ]);
        }
        function m() {
          return u([
            [a, "image", "engageya"],
            [a, "image"],
            [o, "image"],
          ]);
        }
        function v() {
          return u([
            [s],
            [c, "keywords"],
            [c, "news_keywords"],
            [c, "NEWS_KEYWORDS"],
          ]);
        }
        function g() {
          return u([
            [o, "Date"],
            [a, "published_time", "article"],
          ]);
        }
        function y() {
          return a("modified_time", "article");
        }
        function _(e) {
          var t = (0, b.extractCanonicalUrlOrHref)();
          Object.keys(E).forEach(function (n) {
            if (t.indexOf(n) > -1) {
              var i = E[n];
              Object.keys(i).forEach(function (t) {
                var n = i[t],
                  r = document.querySelector(n);
                r && (e[t] = r.textContent.trim());
              });
            }
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.extractPageType = d),
          (t.isArticlePage = p),
          (t.extractTitle = f),
          (t.extractDescription = h),
          (t.extractImage = m),
          (t.extractTags = v),
          (t.extractPublishedTime = g),
          (t.extractModifiedTime = y),
          (t.addPropsForSpecialWebsites = _);
        var b = n(4),
          E = {
            "kicker.de": {
              articleSection:
                "a.kick__navbar-main__text-link--active > span.kick__navbar-link-item__title",
              articleSubSection: "#kick__sub-head-primary > h4 > a",
              articleSubSubSection:
                "li.kick__navbar-sub__item.kick__navbar-sub__item--active > a",
            },
            "www.express.co.uk": {
              articleSection: "#breadCrumb > li:nth-child(2) > a > span",
              articleSubSection: "#breadCrumb > li:nth-child(3)  > a > span",
            },
          };
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = n(103),
          a = (function () {
            function e(t) {
              var n = this;
              i(this, e),
                (this.win = t),
                (this.changeObservable_ = new o.Observable()),
                (this.changeEventListener = function () {
                  return n.changeObservable_.fire();
                }),
                this.connect_();
            }
            return (
              r(e, [
                {
                  key: "onChanged",
                  value: function (e) {
                    return this.changeObservable_.add(e);
                  },
                },
                {
                  key: "connect_",
                  value: function () {
                    for (
                      var e = ["DOMContentLoaded", "load", "scroll", "resize"],
                        t = 0;
                      t < e.length;
                      t++
                    )
                      this.win.addEventListener(
                        e[t],
                        this.changeEventListener.bind(this),
                        !1
                      );
                  },
                },
                {
                  key: "disconnect_",
                  value: function (e) {
                    for (
                      var t = ["DOMContentLoaded", "load", "scroll", "resize"],
                        n = 0;
                      n < t.length;
                      n++
                    )
                      this.win.removeEventListener(
                        t[n],
                        this.changeEventListener.bind(this),
                        !1
                      );
                  },
                },
              ]),
              e
            );
          })();
        t.default = a;
      },
      function (e, t, n) {
        (t = e.exports = n(63)()),
          t.push([
            e.i,
            ".apester-hidden {\n  pointer-events: none;\n  animation: apester-hide 1s ease-out forwards; }\n\n@keyframes apester-hide {\n  from {\n    visibility: visible;\n    opacity: 1; }\n  to {\n    visibility: hidden;\n    opacity: 0; } }\n\n.apester-loading-container-mobile {\n  background: #ffffff; }\n\n.apester-loading-container {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  z-index: 1 !important;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5; }\n\n.apester-element {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .apester-element:not(.apester-board) {\n    max-width: 600px; }\n  .apester-element.apester-strip {\n    max-width: none; }\n    .apester-element.apester-strip[round-shape] .strip-loader {\n      display: none; }\n    .apester-element.apester-strip.apester-in-app {\n      margin: 0; }\n\n.apester-video-component {\n  width: 100%;\n  margin: 0 auto; }\n\n.apester-layer-fill {\n  width: 100% !important;\n  height: 100% !important;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.apester-active {\n  opacity: 1; }\n\n.apester-ready {\n  display: none !important;\n  opacity: 0;\n  pointer-events: none; }\n\n.apester-done {\n  opacity: 0;\n  pointer-events: none; }\n\n.apester-layer {\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: opacity 1s ease-out; }\n  .apester-layer:not(.board-scroll) {\n    overflow: hidden !important; }\n  .apester-layer.board-scroll {\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll; }\n  .apester-layer.fullscreen {\n    background: rgba(34, 36, 38, 0.97) !important;\n    position: fixed !important;\n    width: 100vw;\n    height: 100%;\n    z-index: 2147483645 !important;\n    zoom: 1;\n    -webkit-overflow-scrolling: touch !important;\n    overflow-y: auto !important; }\n\n.apester-video-component {\n  background: black; }\n\n.apester-video-component .video-js {\n  top: 50%;\n  transform: translateY(-50%); }\n\n.apester-fill-content {\n  display: block;\n  width: 1px;\n  min-width: 100%;\n  height: 100%;\n  margin: auto; }\n\n.interaction-loader {\n  position: absolute;\n  height: 100px !important;\n  width: 100px !important;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin-top: -22px; }\n\n.strip-loader {\n  position: absolute;\n  height: 251px;\n  top: 30px;\n  margin-top: -22px;\n  width: 100%;\n  background: #f5f5f5; }\n\n.strip-loader-mobile {\n  height: 204px;\n  background: transparent; }\n\n.streamrail {\n  height: 100%;\n  background: black; }\n\n.blobs {\n  filter: url(\"#goo\");\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.blob {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #ee2e3d; }\n\n.blob:nth-child(1) {\n  animation: blob-left-anim cubic-bezier(0.77, 0, 0.175, 1) 2s infinite; }\n\n.blob:nth-child(2) {\n  animation: blob-right-anim cubic-bezier(0.77, 0, 0.175, 1) 2s infinite; }\n\n@keyframes blob-left-anim {\n  0% {\n    transform: scale(1) translate(0, 0); }\n  33% {\n    transform: scale(0.55, 0.5) translate(80px, 0); }\n  66% {\n    transform: scale(0.8) translate(0, 0); }\n  100% {\n    transform: scale(1) translate(0, 0); } }\n\n@keyframes blob-right-anim {\n  0% {\n    transform: scale(1) translate(0, 0); }\n  33% {\n    transform: scale(0.55, 0.5) translate(-80px, 0); }\n  66% {\n    transform: scale(0.8) translate(0, 0); }\n  100% {\n    transform: scale(1) translate(0, 0); } }\n\n@keyframes apester {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  20% {\n    transform: scale(1);\n    opacity: 0; }\n  40% {\n    transform: scale(0.5);\n    opacity: 0; }\n  66% {\n    transform: scale(0.8);\n    opacity: 1; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n.apester {\n  position: absolute;\n  height: 28px;\n  width: 28px;\n  left: calc(50% - 14px);\n  top: calc(50% - 14px); }\n\n.apester svg {\n  height: 100%;\n  width: 100%; }\n\n.apester-companion-container {\n  display: block;\n  position: relative;\n  max-width: 728px;\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden; }\n\n.sliding-container {\n  position: absolute;\n  display: block;\n  margin: 0 auto;\n  overflow: hidden;\n  right: -300px;\n  z-index: 1000; }\n  .sliding-container.sliding-out {\n    -webkit-animation: slide-out 0.5s backwards;\n    -webkit-animation-delay: 0s;\n    animation: slide-out 0.5s backwards;\n    animation-delay: 0s; }\n  .sliding-container.sliding-in {\n    -webkit-animation: slide-in 0.5s forwards;\n    -webkit-animation-delay: 1s;\n    animation: slide-in 0.5s forwards;\n    animation-delay: 1s; }\n\n@keyframes slide-in {\n  100% {\n    right: 0; } }\n\n@keyframes slide-out {\n  0% {\n    right: 0; }\n  100% {\n    right: -300; } }\n  .sliding-container .apester-companion {\n    margin: 0 !important; }\n  .sliding-container .close-btn {\n    width: 25px;\n    height: 25px;\n    color: white;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    text-align: center;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.5); }\n    .sliding-container .close-btn:before {\n      content: 'x';\n      font-size: 15px;\n      vertical-align: middle;\n      font-family: Arial, Helvetica, sans-serif; }\n\n.apester-companion {\n  text-align: center;\n  margin: 10px auto; }\n  @media (max-width: 480px) {\n    .apester-companion {\n      margin: 20px auto; } }\n\n.strip-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: fixed;\n  background: #d8d8d8;\n  width: 100vw;\n  height: 100%;\n  animation: grow 0.75s ease-in-out; }\n  .strip-animation.shrink {\n    animation: shrink 0.75s ease-in-out forwards; }\n\n@keyframes grow {\n  from {\n    transform: scale(0.25); }\n  to {\n    transform: scale(1);\n    transform-origin: 50% 50%; } }\n\n@keyframes shrink {\n  from {\n    transform: scale(1);\n    transform-origin: 50% 50%; }\n  to {\n    transform: scale(0); } }\n\n.apester-companion-video {\n  display: block; }\n\n.extracted-ad-bg {\n  width: 100%;\n  height: 100%;\n  opacity: 0.35; }\n  .extracted-ad-bg.extracted-ad-bg-header {\n    background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0)); }\n  .extracted-ad-bg.extracted-ad-bg-footer {\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000); }\n\n.bottom-ad-container {\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  margin: 0 auto;\n  overflow: hidden; }\n  .bottom-ad-container .apester-bottom-ad {\n    margin: 0 auto;\n    max-width: 320px;\n    max-height: 50px; }\n  .bottom-ad-container.apester-bottom-ad-center-fix {\n    left: 8.5em; }\n",
            "",
          ]);
      },
      function (e, t, n) {
        (t = e.exports = n(63)()),
          t.push([
            e.i,
            "interaction.apester-element {\n  padding-top: 0 !important;\n  margin-top: 0 !important; }\n  interaction.apester-element::before {\n    content: '' !important; }\n\n#apester-companion-video.apester-element {\n  margin-bottom: 0 !important;\n  padding-bottom: 0 !important; }\n\n.apester-layer.apester-layout {\n  padding-top: 0 !important; }\n",
            "",
          ]);
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-countdown.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-gallery.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-personality.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-poll.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-quiz.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-story.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/icon-video.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/loader_100x100.gif";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/logo-white.svg";
      },
      function (e, t, n) {
        e.exports = n.p + "./js/assets/strip_loader.png";
      },
      function (e, t, n) {
        var i = n(109);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(65)(i, {});
        i.locals && (e.exports = i.locals);
      },
      function (e, t, n) {
        var i = n(110);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        n(65)(i, {});
        i.locals && (e.exports = i.locals);
      },
      function (e, t) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
          return e;
        };
      },
      function (e, t, n) {
        var i = n(62),
          r = n(138),
          o = n(15),
          a = i("unscopables"),
          s = Array.prototype;
        void 0 == s[a] && o(s, a, r(null)),
          (e.exports = function (e) {
            s[a][e] = !0;
          });
      },
      function (e, t, n) {
        var i = n(37),
          r = n(59),
          o = n(148),
          a = function (e) {
            return function (t, n, a) {
              var s,
                l = i(t),
                c = r(l.length),
                u = o(a, c);
              if (e && n != n) {
                for (; c > u; ) if ((s = l[u++]) != s) return !0;
              } else
                for (; c > u; u++)
                  if ((e || u in l) && l[u] === n) return e || u || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: a(!0), indexOf: a(!1) };
      },
      function (e, t, n) {
        var i = n(128),
          r = n(53),
          o = n(149),
          a = n(59),
          s = n(127),
          l = [].push,
          c = function (e) {
            var t = 1 == e,
              n = 2 == e,
              c = 3 == e,
              u = 4 == e,
              d = 6 == e,
              p = 5 == e || d;
            return function (f, h, m, v) {
              for (
                var g,
                  y,
                  _ = o(f),
                  b = r(_),
                  E = i(h, m, 3),
                  w = a(b.length),
                  I = 0,
                  T = v || s,
                  O = t ? T(f, w) : n ? T(f, 0) : void 0;
                w > I;
                I++
              )
                if ((p || I in b) && ((g = b[I]), (y = E(g, I, _)), e))
                  if (t) O[I] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return g;
                      case 6:
                        return I;
                      case 2:
                        l.call(O, g);
                    }
                  else if (u) return !1;
              return d ? -1 : c || u ? u : O;
            };
          };
        e.exports = {
          forEach: c(0),
          map: c(1),
          filter: c(2),
          some: c(3),
          every: c(4),
          find: c(5),
          findIndex: c(6),
        };
      },
      function (e, t, n) {
        var i = n(19),
          r = n(133),
          o = n(62),
          a = o("species");
        e.exports = function (e, t) {
          var n;
          return (
            r(e) &&
              ((n = e.constructor),
              "function" != typeof n || (n !== Array && !r(n.prototype))
                ? i(n) && null === (n = n[a]) && (n = void 0)
                : (n = void 0)),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
          );
        };
      },
      function (e, t, n) {
        var i = n(123);
        e.exports = function (e, t, n) {
          if ((i(e), void 0 === t)) return e;
          switch (n) {
            case 0:
              return function () {
                return e.call(t);
              };
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, i) {
                return e.call(t, n, i);
              };
            case 3:
              return function (n, i, r) {
                return e.call(t, n, i, r);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      function (e, t, n) {
        var i = n(18),
          r = n(144),
          o = n(54),
          a = n(35);
        e.exports = function (e, t) {
          for (var n = r(t), s = a.f, l = o.f, c = 0; c < n.length; c++) {
            var u = n[c];
            i(e, u) || s(e, u, l(t, u));
          }
        };
      },
      function (e, t, n) {
        var i = n(6),
          r = n(54).f,
          o = n(15),
          a = n(146),
          s = n(36),
          l = n(129),
          c = n(134);
        e.exports = function (e, t) {
          var n,
            u,
            d,
            p,
            f,
            h = e.target,
            m = e.global,
            v = e.stat;
          if ((n = m ? i : v ? i[h] || s(h, {}) : (i[h] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                e.noTargetGet
                  ? ((f = r(n, u)), (d = f && f.value))
                  : (d = n[u]),
                !c(m ? u : h + (v ? "." : "#") + u, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                l(p, d);
              }
              (e.sham || (d && d.sham)) && o(p, "sham", !0), a(n, u, p, e);
            }
        };
      },
      function (e, t, n) {
        var i = n(51);
        e.exports = i("document", "documentElement");
      },
      function (e, t, n) {
        var i,
          r,
          o,
          a = n(137),
          s = n(6),
          l = n(19),
          c = n(15),
          u = n(18),
          d = n(57),
          p = n(34),
          f = s.WeakMap,
          h = function (e) {
            return o(e) ? r(e) : i(e, {});
          },
          m = function (e) {
            return function (t) {
              var n;
              if (!l(t) || (n = r(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
              return n;
            };
          };
        if (a) {
          var v = new f(),
            g = v.get,
            y = v.has,
            _ = v.set;
          (i = function (e, t) {
            return _.call(v, e, t), t;
          }),
            (r = function (e) {
              return g.call(v, e) || {};
            }),
            (o = function (e) {
              return y.call(v, e);
            });
        } else {
          var b = d("state");
          (p[b] = !0),
            (i = function (e, t) {
              return c(e, b, t), t;
            }),
            (r = function (e) {
              return u(e, b) ? e[b] : {};
            }),
            (o = function (e) {
              return u(e, b);
            });
        }
        e.exports = { set: i, get: r, has: o, enforce: h, getterFor: m };
      },
      function (e, t, n) {
        var i = n(47);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      function (e, t, n) {
        var i = n(17),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var n = s[a(e)];
            return n == c || (n != l && ("function" == typeof t ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          s = (o.data = {}),
          l = (o.NATIVE = "N"),
          c = (o.POLYFILL = "P");
        e.exports = o;
      },
      function (e, t) {
        e.exports = !1;
      },
      function (e, t, n) {
        var i = n(17);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            return !String(Symbol());
          });
      },
      function (e, t, n) {
        var i = n(6),
          r = n(50),
          o = i.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(r.call(o));
      },
      function (e, t, n) {
        var i = n(24),
          r = n(139),
          o = n(33),
          a = n(34),
          s = n(131),
          l = n(49),
          c = n(57),
          u = c("IE_PROTO"),
          d = function () {},
          p = function () {
            var e,
              t = l("iframe"),
              n = o.length;
            for (
              t.style.display = "none",
                s.appendChild(t),
                t.src = String("javascript:"),
                e = t.contentWindow.document,
                e.open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                p = e.F;
              n--;

            )
              delete p.prototype[o[n]];
            return p();
          };
        (e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((d.prototype = i(e)),
                  (n = new d()),
                  (d.prototype = null),
                  (n[u] = e))
                : (n = p()),
              void 0 === t ? n : r(n, t)
            );
          }),
          (a[u] = !0);
      },
      function (e, t, n) {
        var i = n(16),
          r = n(35),
          o = n(24),
          a = n(142);
        e.exports = i
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var n, i = a(t), s = i.length, l = 0; s > l; )
                r.f(e, (n = i[l++]), t[n]);
              return e;
            };
      },
      function (e, t, n) {
        var i = n(55),
          r = n(33),
          o = r.concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, o);
          };
      },
      function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      function (e, t, n) {
        var i = n(55),
          r = n(33);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, r);
          };
      },
      function (e, t, n) {
        "use strict";
        var i = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !i.call({ 1: 2 }, 1);
        t.f = o
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      function (e, t, n) {
        var i = n(51),
          r = n(140),
          o = n(141),
          a = n(24);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = r.f(a(e)),
              n = o.f;
            return n ? t.concat(n(e)) : t;
          };
      },
      function (e, t, n) {
        e.exports = n(6);
      },
      function (e, t, n) {
        var i = n(6),
          r = n(25),
          o = n(15),
          a = n(18),
          s = n(36),
          l = n(50),
          c = n(132),
          u = c.get,
          d = c.enforce,
          p = String(l).split("toString");
        r("inspectSource", function (e) {
          return l.call(e);
        }),
          (e.exports = function (e, t, n, r) {
            var l = !!r && !!r.unsafe,
              c = !!r && !!r.enumerable,
              u = !!r && !!r.noTargetGet;
            if (
              ("function" == typeof n &&
                ("string" != typeof t || a(n, "name") || o(n, "name", t),
                (d(n).source = p.join("string" == typeof t ? t : ""))),
              e === i)
            )
              return void (c ? (e[t] = n) : s(t, n));
            l ? !u && e[t] && (c = !0) : delete e[t],
              c ? (e[t] = n) : o(e, t, n);
          })(Function.prototype, "toString", function () {
            return (
              ("function" == typeof this && u(this).source) || l.call(this)
            );
          });
      },
      function (e, t, n) {
        var i = n(6),
          r = n(36),
          o = i["__core-js_shared__"] || r("__core-js_shared__", {});
        e.exports = o;
      },
      function (e, t, n) {
        var i = n(58),
          r = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          var n = i(e);
          return n < 0 ? r(n + t, 0) : o(n, t);
        };
      },
      function (e, t, n) {
        var i = n(56);
        e.exports = function (e) {
          return Object(i(e));
        };
      },
      function (e, t, n) {
        "use strict";
        var i = n(130),
          r = n(126).find,
          o = n(124),
          a = !0;
        "find" in [] &&
          Array(1).find(function () {
            a = !1;
          }),
          i(
            { target: "Array", proto: !0, forced: a },
            {
              find: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
          o("find");
      },
      function (e, t) {
        !(function (e) {
          e.forEach(function (e) {
            e.hasOwnProperty("remove") ||
              Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  this.parentNode && this.parentNode.removeChild(this);
                },
              });
          });
        })(
          [
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ].filter(Boolean)
        );
      },
      function (e, t, n) {
        var i, r;
        !(function (o) {
          var a;
          if (
            ((i = o),
            void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) &&
              (e.exports = r),
            (a = !0),
            (e.exports = o()),
            (a = !0),
            !a)
          ) {
            var s = window.Cookies,
              l = (window.Cookies = o());
            l.noConflict = function () {
              return (window.Cookies = s), l;
            };
          }
        })(function () {
          function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) t[i] = n[i];
            }
            return t;
          }
          function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          function n(i) {
            function r() {}
            function o(t, n, o) {
              if ("undefined" != typeof document) {
                (o = e({ path: "/" }, r.defaults, o)),
                  "number" == typeof o.expires &&
                    (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                  (o.expires = o.expires ? o.expires.toUTCString() : "");
                try {
                  var a = JSON.stringify(n);
                  /^[\{\[]/.test(a) && (n = a);
                } catch (e) {}
                (n = i.write
                  ? i.write(n, t)
                  : encodeURIComponent(String(n)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (t = encodeURIComponent(String(t))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape));
                var s = "";
                for (var l in o)
                  o[l] &&
                    ((s += "; " + l),
                    !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
                return (document.cookie = t + "=" + n + s);
              }
            }
            function a(e, n) {
              if ("undefined" != typeof document) {
                for (
                  var r = {},
                    o = document.cookie ? document.cookie.split("; ") : [],
                    a = 0;
                  a < o.length;
                  a++
                ) {
                  var s = o[a].split("="),
                    l = s.slice(1).join("=");
                  n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                  try {
                    var c = t(s[0]);
                    if (((l = (i.read || i)(l, c) || t(l)), n))
                      try {
                        l = JSON.parse(l);
                      } catch (e) {}
                    if (((r[c] = l), e === c)) break;
                  } catch (e) {}
                }
                return e ? r[e] : r;
              }
            }
            return (
              (r.set = o),
              (r.get = function (e) {
                return a(e, !1);
              }),
              (r.getJSON = function (e) {
                return a(e, !0);
              }),
              (r.remove = function (t, n) {
                o(t, "", e(n, { expires: -1 }));
              }),
              (r.defaults = {}),
              (r.withConverter = n),
              r
            );
          }
          return n(function () {});
        });
      },
      function (e, t, n) {
        (function (t) {
          (function () {
            var n, i, r, o, a, s;
            "undefined" != typeof performance &&
            null !== performance &&
            performance.now
              ? (e.exports = function () {
                  return performance.now();
                })
              : void 0 !== t && null !== t && t.hrtime
              ? ((e.exports = function () {
                  return (n() - a) / 1e6;
                }),
                (i = t.hrtime),
                (n = function () {
                  var e;
                  return (e = i()), 1e9 * e[0] + e[1];
                }),
                (o = n()),
                (s = 1e9 * t.uptime()),
                (a = o - s))
              : Date.now
              ? ((e.exports = function () {
                  return Date.now() - r;
                }),
                (r = Date.now()))
              : ((e.exports = function () {
                  return new Date().getTime() - r;
                }),
                (r = new Date().getTime()));
          }.call(this));
        }.call(t, n(64)));
      },
      function (e, t, n) {
        (function (t) {
          for (
            var i = n(153),
              r = "undefined" == typeof window ? t : window,
              o = ["moz", "webkit"],
              a = "AnimationFrame",
              s = r["request" + a],
              l = r["cancel" + a] || r["cancelRequest" + a],
              c = 0;
            !s && c < o.length;
            c++
          )
            (s = r[o[c] + "Request" + a]),
              (l = r[o[c] + "Cancel" + a] || r[o[c] + "CancelRequest" + a]);
          if (!s || !l) {
            var u = 0,
              d = 0,
              p = [];
            (s = function (e) {
              if (0 === p.length) {
                var t = i(),
                  n = Math.max(0, 1e3 / 60 - (t - u));
                (u = n + t),
                  setTimeout(function () {
                    var e = p.slice(0);
                    p.length = 0;
                    for (var t = 0; t < e.length; t++)
                      if (!e[t].cancelled)
                        try {
                          e[t].callback(u);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                  }, Math.round(n));
              }
              return p.push({ handle: ++d, callback: e, cancelled: !1 }), d;
            }),
              (l = function (e) {
                for (var t = 0; t < p.length; t++)
                  p[t].handle === e && (p[t].cancelled = !0);
              });
          }
          (e.exports = function (e) {
            return s.call(r, e);
          }),
            (e.exports.cancel = function () {
              l.apply(r, arguments);
            }),
            (e.exports.polyfill = function (e) {
              e || (e = r),
                (e.requestAnimationFrame = s),
                (e.cancelAnimationFrame = l);
            });
        }.call(t, n(38)));
      },
      function (e, t) {
        e.exports = function (e) {
          var t = "undefined" != typeof window && window.location;
          if (!t) throw new Error("fixUrls requires window.location");
          if (!e || "string" != typeof e) return e;
          var n = t.protocol + "//" + t.host,
            i = n + t.pathname.replace(/\/[^\/]*$/, "/");
          return e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (e, t) {
              var r = t
                .trim()
                .replace(/^"(.*)"$/, function (e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function (e, t) {
                  return t;
                });
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))
                return e;
              var o;
              return (
                (o =
                  0 === r.indexOf("//")
                    ? r
                    : 0 === r.indexOf("/")
                    ? n + r
                    : i + r.replace(/^\.\//, "")),
                "url(" + JSON.stringify(o) + ")"
              );
            }
          );
        };
      },
      ,
      ,
      function (e, t, n) {
        e.exports = n(66);
      },
    ]);
  })();
} catch (e) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://events.apester.com/event", !0);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(
    JSON.stringify({
      event: "apester-sdk-error",
      properties: { referrer: encodeURIComponent(document.location.href) },
      metadata: {},
    })
  );
  console.error(
    "ApesterSDK had critical error, please contact us with the following error message: ",
    e
  );
}
var strict;
jQuery(document).ready(function (a) {
  function b() {
    if ("undefined" == typeof mashsb.servertime) return !0;
    var a = Number(mashsb.servertime),
      b = Math.floor(Date.now() / 1e3);
    return b > a + 30
      ? (console.log("rate limited: " + (a + 30)), !0)
      : (console.log("not rate limited: " + (a + 30)), !1);
  }
  function c() {
    return b()
      ? !1
      : void setTimeout(function () {
          "1" == mashsb.refresh && d();
        }, 6e3);
  }
  function d() {
    var a = window.location.href;
    a += a.indexOf("?") > -1 ? "&mashsb-refresh" : "?mashsb-refresh";
    var b = new XMLHttpRequest();
    b.open("GET", a, !0), b.send();
  }
  function e(a) {
    if ("undefined" != typeof mashsb && 1 == mashsb.round_shares) {
      if (a > 1e6)
        return (shares = Math.round((a / 1e6) * 10) / 10 + "M"), shares;
      if (a > 1e3)
        return (shares = Math.round((a / 1e3) * 10) / 10 + "k"), shares;
    }
    return a.toFixed(0);
  }
  (navigator.userAgent.match(/(iPhone)/i) ||
    navigator.userAgent.match(/(Android)/i)) &&
    a(".mashicon-whatsapp").show();
  a("body")
    .off("click", ".mashicon-pinterest")
    .on("click", ".mashicon-pinterest", function (b) {
      b.preventDefault(),
        console.log("preventDefault:" + b),
        (winWidth = 520),
        (winHeight = 350);
      var c = screen.height / 2 - winHeight / 2,
        d = screen.width / 2 - winWidth / 2,
        e = a(this).attr("data-mashsb-url");
      window.open(
        e,
        "sharer",
        "top=" +
          c +
          ",left=" +
          d +
          ",toolbar=0,status=0,width=" +
          winWidth +
          ",height=" +
          winHeight +
          ",resizable=yes"
      );
    }),
    "" == a(".mashsbcount").text() && a(".mashsbcount").text(0),
    c(),
    a(".onoffswitch").on("click", function () {
      var b = a(this).parents(".mashsb-container");
      b.find(".onoffswitch").hide(),
        b.find(".secondary-shares").show(),
        b.find(".onoffswitch2").show();
    }),
    a(".onoffswitch2").on("click", function () {
      var b = a(this).parents(".mashsb-container");
      b.find(".onoffswitch").show(), b.find(".secondary-shares").hide();
    }),
    "undefined" == typeof lashare_fb &&
      "undefined" != typeof mashsb &&
      a(".mashicon-facebook").click(function (b) {
        (winWidth = 520), (winHeight = 550);
        var c = screen.height / 2 - winHeight / 2,
          d = screen.width / 2 - winWidth / 2,
          e = a(this).attr("href");
        return (
          window.open(
            e,
            "sharer",
            "top=" +
              c +
              ",left=" +
              d +
              ",toolbar=0,status=0,width=" +
              winWidth +
              ",height=" +
              winHeight
          ),
          b.preventDefault(),
          !1
        );
      }),
    "undefined" != typeof mashsb &&
      a(".mashicon-twitter").click(function (b) {
        (winWidth = 520), (winHeight = 350);
        var c = screen.height / 2 - winHeight / 2,
          d = screen.width / 2 - winWidth / 2,
          e = a(this).attr("href");
        return (
          "1" === mashsb.twitter_popup &&
            window.open(
              e,
              "sharer",
              "top=" +
                c +
                ",left=" +
                d +
                ",toolbar=0,status=0,width=" +
                winWidth +
                ",height=" +
                winHeight
            ),
          b.preventDefault(),
          !1
        );
      }),
    "undefined" != typeof mashsb &&
      "content" === mashsb.subscribe &&
      (a(".mashicon-subscribe")
        .not(".trigger_active")
        .nearest(".mashsb-toggle-container")
        .hide(),
      a(".mashicon-subscribe").click(function () {
        var b = a(this);
        return (
          b.hasClass("trigger_active")
            ? (a(b).nearest(".mashsb-toggle-container").slideToggle("fast"),
              b.removeClass("trigger_active"))
            : (a(".trigger_active")
                .nearest(".mashsb-toggle-container")
                .slideToggle("slow"),
              a(".trigger_active").removeClass("trigger_active"),
              a(b).nearest(".mashsb-toggle-container").slideToggle("fast"),
              b.addClass("trigger_active")),
          !1
        );
      })),
    "undefined" != typeof mashsb &&
      "link" === mashsb.subscribe &&
      a(".mashicon-subscribe").click(function () {
        var b = mashsb.subscribe_url;
        a(this).attr("href", b);
      }),
    (function (a) {
      (a.fn.countTo = function (b) {
        return (
          (b = b || {}),
          a(this).each(function () {
            function c() {
              (k += g),
                j++,
                d(k),
                "function" == typeof e.onUpdate && e.onUpdate.call(h, k),
                j >= f &&
                  (i.removeData("countTo"),
                  clearInterval(l.interval),
                  (k = e.to),
                  "function" == typeof e.onComplete && e.onComplete.call(h, k));
            }
            function d(a) {
              var b = e.formatter.call(h, a, e);
              i.text(b);
            }
            var e = a.extend(
                {},
                a.fn.countTo.defaults,
                {
                  from: a(this).data("from"),
                  to: a(this).data("to"),
                  speed: a(this).data("speed"),
                  refreshInterval: a(this).data("refresh-interval"),
                  decimals: a(this).data("decimals"),
                },
                b
              ),
              f = Math.ceil(e.speed / e.refreshInterval),
              g = (e.to - e.from) / f,
              h = this,
              i = a(this),
              j = 0,
              k = e.from,
              l = i.data("countTo") || {};
            i.data("countTo", l),
              l.interval && clearInterval(l.interval),
              (l.interval = setInterval(c, e.refreshInterval)),
              d(k);
          })
        );
      }),
        (a.fn.countTo.defaults = {
          from: 0,
          to: 0,
          speed: 1e3,
          refreshInterval: 100,
          decimals: 0,
          formatter: e,
          onUpdate: null,
          onComplete: null,
        });
    })(jQuery),
    "undefined" != typeof mashsb &&
      1 == mashsb.animate_shares &&
      a(".mashsbcount").length &&
      a(".mashsbcount").countTo({
        from: 0,
        to: mashsb.shares,
        speed: 1e3,
        refreshInterval: 100,
      });
}),
  (function (a, b) {
    a.fn.nearest = function (c) {
      function d(b) {
        f = f ? f.add(b) : a(b);
      }
      var e,
        f,
        g,
        h,
        i,
        j = b.querySelectorAll;
      return (
        this.each(function () {
          (e = this),
            a.each(c.split(","), function () {
              if (((h = a.trim(this)), h.indexOf("#")))
                for (i = e.parentNode; i; ) {
                  if (
                    ((g = j ? i.querySelectorAll(h) : a(i).find(h)), g.length)
                  ) {
                    d(g);
                    break;
                  }
                  i = i.parentNode;
                }
              else d(j ? b.querySelectorAll(h) : a(h));
            });
        }),
        f || a()
      );
    };
  })(jQuery, document);
var wpnmObject = {
  button_html:
    '<div class="wpnm-button style-1">\n                            <div class="wpnm-slider round"></div>\n                        </div>',
  default: "",
  server_time: "1605839469",
  turn_on_time: "",
  turn_off_time: "",
};
(function ($) {
  "use strict";
  var wnmCookies = {
    setCookie: function setCookie(key, value, time, path) {
      var expires = new Date();
      expires.setTime(expires.getTime() + time);
      var pathValue = "";
      if (typeof path !== "undefined") {
        pathValue = "path=" + path + ";";
      }
      document.cookie =
        key +
        "=" +
        value +
        ";" +
        pathValue +
        "expires=" +
        expires.toUTCString();
    },
    getCookie: function getCookie(key) {
      var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
      return keyValue ? keyValue[2] : null;
    },
  };
  document.addEventListener("DOMContentLoaded", function (event) {
    wp_night_mode_default();
    wp_night_mode_element_to_button();
    wp_night_mode_button_click();
    wp_night_mode_load_cookie();
  });
  function wp_night_mode_default() {
    if (
      "1" === wpnmObject.default &&
      null === wnmCookies.getCookie("wpNightMode")
    ) {
      wnmCookies.setCookie("wpNightMode", "true", 2628000000, "/");
    }
  }
  function wp_night_mode_turn_on_time() {
    var server_time = wpnmObject.server_time;
    var turn_on_time = wpnmObject.turn_on_time;
    var turn_off_time = wpnmObject.turn_off_time;
    if (server_time >= turn_on_time && server_time <= turn_off_time) {
      wnmCookies.setCookie("wpNightMode", "true", 2628000000, "/");
    }
  }
  function wp_night_mode_element_to_button() {
    var buttonHtml = "";
    var buttonClass = document.querySelectorAll(".wp-night-mode");
    buttonHtml = wpnmObject.button_html;
    for (var i = 0; i < buttonClass.length; i++) {
      buttonClass[i].innerHTML = buttonHtml;
    }
  }
  function wp_night_mode_button_click() {
    var nightModeButton = document.querySelectorAll(".wpnm-button");
    for (var i = 0; i < nightModeButton.length; i++) {
      nightModeButton.item(i).onclick = function (event) {
        event.preventDefault();
        document.body.classList.toggle("wp-night-mode-on");
        for (var i = 0; i < nightModeButton.length; i++) {
          nightModeButton[i].classList.toggle("active");
        }
        if (this.classList.contains("active")) {
          wnmCookies.setCookie("wpNightMode", "true", 2628000000, "/");
        } else {
          wnmCookies.setCookie("wpNightMode", "false", 2628000000, "/");
        }
      };
    }
  }
  function wp_night_mode_load_cookie() {
    var nightModeButton = document.querySelectorAll(".wpnm-button");
    if ("true" === wnmCookies.getCookie("wpNightMode")) {
      document.body.classList.add("wp-night-mode-on");
      for (var i = 0; i < nightModeButton.length; i++) {
        nightModeButton[i].classList.add("active");
      }
    } else {
      document.body.classList.remove("wp-night-mode-on");
      for (var i = 0; i < nightModeButton.length; i++) {
        nightModeButton[i].classList.remove("active");
      }
    }
  }
})(jQuery);
/*! modernizr 3.3.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-flexbox-flexboxtweener-setclasses-shiv !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, a, i, s;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = C[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (s = i.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = o)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = o)),
            y.push((o ? "" : "no-") + s.join("-"));
      }
  }
  function a(e) {
    var t = x.className,
      n = Modernizr._config.classPrefix || "";
    if ((b && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      b ? (x.className.baseVal = t) : (x.className = t));
  }
  function i(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function s() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : b
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function f(e, t, n) {
    var o;
    for (var a in e)
      if (e[a] in t)
        return n === !1
          ? e[a]
          : ((o = t[e[a]]), r(o, "function") ? c(o, n || t) : o);
    return !1;
  }
  function u(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = t.body;
    return e || ((e = s(b ? "svg" : "body")), (e.fake = !0)), e;
  }
  function p(e, n, r, o) {
    var a,
      i,
      l,
      c,
      f = "modernizr",
      u = s("div"),
      p = d();
    if (parseInt(r, 10))
      for (; r--; )
        (l = s("div")), (l.id = o ? o[r] : f + (r + 1)), u.appendChild(l);
    return (
      (a = s("style")),
      (a.type = "text/css"),
      (a.id = "s" + f),
      (p.fake ? p : u).appendChild(a),
      p.appendChild(u),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(t.createTextNode(e)),
      (u.id = f),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (c = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(p)),
      (i = n(u, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (x.style.overflow = c), x.offsetHeight)
        : u.parentNode.removeChild(u),
      !!i
    );
  }
  function m(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(u(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var a = []; o--; ) a.push("(" + u(t[o]) + ":" + r + ")");
      return (
        (a = a.join(" or ")),
        p(
          "@supports (" + a + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return n;
  }
  function h(e, t, o, a) {
    function c() {
      u && (delete T.style, delete T.modElem);
    }
    if (((a = r(a, "undefined") ? !1 : a), !r(o, "undefined"))) {
      var f = m(e, o);
      if (!r(f, "undefined")) return f;
    }
    for (var u, d, p, h, g, v = ["modernizr", "tspan"]; !T.style; )
      (u = !0), (T.modElem = s(v.shift())), (T.style = T.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (
        ((h = e[d]),
        (g = T.style[h]),
        i(h, "-") && (h = l(h)),
        T.style[h] !== n)
      ) {
        if (a || r(o, "undefined")) return c(), "pfx" == t ? h : !0;
        try {
          T.style[h] = o;
        } catch (y) {}
        if (T.style[h] != g) return c(), "pfx" == t ? h : !0;
      }
    return c(), !1;
  }
  function g(e, t, n, o, a) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + w.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? h(s, t, o, a)
      : ((s = (e + " " + _.join(i + " ") + i).split(" ")), f(s, t, n));
  }
  function v(e, t, r) {
    return g(e, n, n, t, r);
  }
  var y = [],
    C = [],
    E = {
      _version: "3.3.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        C.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = E), (Modernizr = new Modernizr());
  var x = t.documentElement,
    b = "svg" === x.nodeName.toLowerCase();
  b ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = C.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = C.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (C.elements = n + " " + e),
          c(t);
      }
      function a(e) {
        var t = y[e[g]];
        return t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t;
      }
      function i(e, n, r) {
        if ((n || (n = t), u)) return n.createElement(e);
        r || (r = a(n));
        var o;
        return (
          (o = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !o.canHaveChildren || m.test(e) || o.tagUrn
            ? o
            : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), u)) return e.createDocumentFragment();
        n = n || a(e);
        for (
          var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length;
          l > i;
          i++
        )
          o.createElement(s[i]);
        return o;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return C.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(C, t.frag));
      }
      function c(e) {
        e || (e = t);
        var r = a(e);
        return (
          !C.shivCSS ||
            f ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          u || l(e, r),
          e
        );
      }
      var f,
        u,
        d = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in e),
            (u =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (f = !0), (u = !0);
        }
      })();
      var C = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: c,
        createElement: i,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = C),
        c(t),
        "object" == typeof module && module.exports && (module.exports = C);
    })("undefined" != typeof e ? e : this, t);
  var S = "Moz O ms Webkit",
    w = E._config.usePrefixes ? S.split(" ") : [];
  E._cssomPrefixes = w;
  var _ = E._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  E._domPrefixes = _;
  var N = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var T = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete T.style;
  }),
    (E.testAllProps = g),
    (E.testAllProps = v),
    Modernizr.addTest("cssanimations", v("animationName", "a", !0)),
    Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxtweener", v("flexAlign", "end", !0)),
    o(),
    a(y),
    delete E.addTest,
    delete E.addAsyncTest;
  for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();
  e.Modernizr = Modernizr;
})(window, document);
(function () {
  var l = this || self,
    m = function (a, b) {
      a = a.split(".");
      var c = l;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b);
    };
  var q = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    r = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    };
  var t = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var u = window,
    v = document,
    w = function (a, b) {
      v.addEventListener
        ? v.addEventListener(a, b, !1)
        : v.attachEvent && v.attachEvent("on" + a, b);
    };
  var x = {},
    y = function () {
      x.TAGGING = x.TAGGING || [];
      x.TAGGING[1] = !0;
    };
  var z = /:[0-9]+$/,
    A = function (a, b, c) {
      a = a.split("&");
      for (var d = 0; d < a.length; d++) {
        var e = a[d].split("=");
        if (decodeURIComponent(e[0]).replace(/\+/g, " ") === b)
          return (
            (b = e.slice(1).join("=")),
            c ? b : decodeURIComponent(b).replace(/\+/g, " ")
          );
      }
    },
    D = function (a, b) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = B(a.protocol) || B(u.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : u.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || u.location.hostname)
            .replace(z, "")
            .toLowerCase());
      return C(a, b, void 0, void 0, void 0);
    },
    C = function (a, b, c, d, e) {
      var f = B(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          d = "";
          a &&
            a.href &&
            ((d = a.href.indexOf("#")),
            (d = 0 > d ? a.href : a.href.substr(0, d)));
          a = d;
          break;
        case "protocol":
          a = f;
          break;
        case "host":
          a = a.hostname.replace(z, "").toLowerCase();
          c && (d = /^www\d*\./.exec(a)) && d[0] && (a = a.substr(d[0].length));
          break;
        case "port":
          a = String(
            Number(a.port) || ("http" == f ? 80 : "https" == f ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || y();
          a = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          a = a.split("/");
          a: if (
            ((d = d || []), (c = a[a.length - 1]), Array.prototype.indexOf)
          )
            (d = d.indexOf(c)), (d = "number" == typeof d ? d : -1);
          else {
            for (e = 0; e < d.length; e++)
              if (d[e] === c) {
                d = e;
                break a;
              }
            d = -1;
          }
          0 <= d && (a[a.length - 1] = "");
          a = a.join("/");
          break;
        case "query":
          a = a.search.replace("?", "");
          e && (a = A(a, e, void 0));
          break;
        case "extension":
          a = a.pathname.split(".");
          a = 1 < a.length ? a[a.length - 1] : "";
          a = a.split("/")[0];
          break;
        case "fragment":
          a = a.hash.replace("#", "");
          break;
        default:
          a = a && a.href;
      }
      return a;
    },
    B = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    E = function (a) {
      var b = v.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || y(), (c = "/" + c));
      a = b.hostname.replace(z, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: a,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    };
  function F() {
    for (var a = G, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function H() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var G, I;
  function J(a) {
    G = G || H();
    I = I || F();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        k = f >> 2;
      f = ((f & 3) << 4) | (g >> 4);
      g = ((g & 15) << 2) | (h >> 6);
      h &= 63;
      e || ((h = 64), d || (g = 64));
      b.push(G[k], G[f], G[g], G[h]);
    }
    return b.join("");
  }
  function K(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = I[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    G = G || H();
    I = I || F();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var L;
  var N = function () {
      var a = aa,
        b = ba,
        c = M(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        w("mousedown", d);
        w("keyup", d);
        w("submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    O = function (a, b, c, d, e) {
      a = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      M().decorators.push(a);
    },
    P = function (a, b, c) {
      for (var d = M().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            h = g.domains;
            var k = a,
              n = !!g.sameHost;
            if (h && (n || k !== v.location.hostname))
              for (var p = 0; p < h.length; p++)
                if (h[p] instanceof RegExp) {
                  if (h[p].test(k)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= k.indexOf(h[p]) ||
                  (n && 0 <= h[p].indexOf(k))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        h &&
          ((h = g.placement),
          void 0 == h && (h = g.fragment ? 2 : 1),
          h === b && q(e, g.callback()));
      }
      return e;
    },
    M = function () {
      var a = {};
      var b = u.google_tag_data;
      u.google_tag_data = void 0 === b ? a : b;
      a = u.google_tag_data;
      b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var ca = /(.*?)\*(.*?)\*(.*)/,
    da = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Q(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var S = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString() &&
            (b.push(c), b.push(J(String(d))));
        }
      a = b.join("*");
      return ["1", R(a), a].join("*");
    },
    R = function (a, b) {
      a = [
        window.navigator.userAgent,
        new Date().getTimezoneOffset(),
        window.navigator.userLanguage || window.navigator.language,
        Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*");
      if (!(b = L)) {
        b = Array(256);
        for (var c = 0; 256 > c; c++) {
          for (var d = c, e = 0; 8 > e; e++)
            d = d & 1 ? (d >>> 1) ^ 3988292384 : d >>> 1;
          b[c] = d;
        }
      }
      L = b;
      b = 4294967295;
      for (c = 0; c < a.length; c++)
        b = (b >>> 8) ^ L[(b ^ a.charCodeAt(c)) & 255];
      return ((b ^ -1) >>> 0).toString(36);
    },
    fa = function (a) {
      return function (b) {
        var c = E(u.location.href),
          d = c.search.replace("?", "");
        var e = A(d, "_gl", !0);
        b.query = T(e || "") || {};
        e = D(c, "fragment");
        var f = e.match(Q("_gl"));
        b.fragment = T((f && f[3]) || "") || {};
        a && ea(c, d, e);
      };
    };
  function U(a, b) {
    if ((a = Q(a).exec(b))) {
      var c = a[2],
        d = a[4];
      b = a[1];
      d && (b = b + c + d);
    }
    return b;
  }
  var ea = function (a, b, c) {
      function d(f, g) {
        f = U("_gl", f);
        f.length && (f = g + f);
        return f;
      }
      if (u.history && u.history.replaceState) {
        var e = Q("_gl");
        if (e.test(b) || e.test(c))
          (a = D(a, "path")),
            (b = d(b, "?")),
            (c = d(c, "#")),
            u.history.replaceState({}, void 0, "" + a + b + c);
      }
    },
    T = function (a) {
      var b = void 0 === b ? 3 : b;
      try {
        if (a) {
          a: {
            for (var c = 0; 3 > c; ++c) {
              var d = ca.exec(a);
              if (d) {
                var e = d;
                break a;
              }
              a = decodeURIComponent(a);
            }
            e = void 0;
          }
          if (e && "1" === e[1]) {
            var f = e[2],
              g = e[3];
            a: {
              for (e = 0; e < b; ++e)
                if (f === R(g, e)) {
                  var h = !0;
                  break a;
                }
              h = !1;
            }
            if (h) {
              b = {};
              var k = g ? g.split("*") : [];
              for (g = 0; g < k.length; g += 2) b[k[g]] = K(k[g + 1]);
              return b;
            }
          }
        }
      } catch (n) {}
    };
  function V(a, b, c, d) {
    function e(k) {
      k = U(a, k);
      var n = k.charAt(k.length - 1);
      k && "&" !== n && (k += "&");
      return k + h;
    }
    d = void 0 === d ? !1 : d;
    var f = da.exec(c);
    if (!f) return "";
    c = f[1];
    var g = f[2] || "";
    f = f[3] || "";
    var h = a + "=" + b;
    d ? (f = "#" + e(f.substring(1))) : (g = "?" + e(g.substring(1)));
    return "" + c + g + f;
  }
  function W(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = P(b, 1, c),
      e = P(b, 2, c);
    b = P(b, 3, c);
    r(d) && ((d = S(d)), c ? X("_gl", d, a) : Y("_gl", d, a, !1));
    !c && r(e) && ((c = S(e)), Y("_gl", c, a, !0));
    for (var f in b) b.hasOwnProperty(f) && Z(f, b[f], a);
  }
  function Z(a, b, c, d) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) return Y(a, b, c, d);
      if ("form" === c.tagName.toLowerCase()) return X(a, b, c);
    }
    if ("string" == typeof c) return V(a, b, c, d);
  }
  function Y(a, b, c, d) {
    c.href &&
      ((a = V(a, b, c.href, void 0 === d ? !1 : d)), t.test(a) && (c.href = a));
  }
  function X(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        d = c.childNodes || [];
        for (var e = !1, f = 0; f < d.length; f++) {
          var g = d[f];
          if (g.name === a) {
            g.setAttribute("value", b);
            e = !0;
            break;
          }
        }
        e ||
          ((d = v.createElement("input")),
          d.setAttribute("type", "hidden"),
          d.setAttribute("name", a),
          d.setAttribute("value", b),
          c.appendChild(d));
      } else
        "post" === d && ((a = V(a, b, c.action)), t.test(a) && (c.action = a));
    }
  }
  var aa = function (a) {
      try {
        a: {
          for (var b = 100; a && 0 < b; ) {
            if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
              var c = a;
              break a;
            }
            a = a.parentNode;
            b--;
          }
          c = null;
        }
        if (c) {
          var d = c.protocol;
          ("http:" !== d && "https:" !== d) || W(c, c.hostname);
        }
      } catch (e) {}
    },
    ba = function (a) {
      try {
        if (a.action) {
          var b = D(E(a.action), "host");
          W(a, b);
        }
      } catch (c) {}
    };
  m("google_tag_data.glBridge.auto", function (a, b, c, d) {
    N();
    O(a, b, "fragment" === c ? 2 : 1, !!d, !1);
  });
  m("google_tag_data.glBridge.passthrough", function (a, b, c) {
    N();
    O(a, [C(u.location, "host", !0)], b, !!c, !0);
  });
  m("google_tag_data.glBridge.decorate", function (a, b, c) {
    a = S(a);
    return Z("_gl", a, b, !!c);
  });
  m("google_tag_data.glBridge.generate", S);
  m("google_tag_data.glBridge.get", function (a, b) {
    var c = fa(!!b);
    b = M();
    b.data || ((b.data = { query: {}, fragment: {} }), c(b.data));
    c = {};
    if ((b = b.data)) q(c, b.query), a && q(c, b.fragment);
    return c;
  });
})(window);
(function () {
  function La(a) {
    var b = 1,
      c;
    if (a)
      for (b = 0, c = a.length - 1; 0 <= c; c--) {
        var d = a.charCodeAt(c);
        b = ((b << 6) & 268435455) + d + (d << 14);
        d = b & 266338304;
        b = 0 != d ? b ^ (d >> 21) : b;
      }
    return b;
  }
  var $c = function (a) {
    this.C = a || [];
  };
  $c.prototype.set = function (a) {
    this.C[a] = !0;
  };
  $c.prototype.encode = function () {
    for (var a = [], b = 0; b < this.C.length; b++)
      this.C[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
    for (b = 0; b < a.length; b++)
      a[b] =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          a[b] || 0
        );
    return a.join("") + "~";
  };
  var ha = window.GoogleAnalyticsObject,
    wa;
  if ((wa = void 0 != ha)) wa = -1 < (ha.constructor + "").indexOf("String");
  var ne;
  if ((ne = wa)) {
    var Ee = window.GoogleAnalyticsObject;
    ne = Ee ? Ee.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
  }
  var gb = ne || "ga",
    jd = /^(?:utma\.)?\d+\.\d+$/,
    kd = /^amp-[\w.-]{22,64}$/,
    Ba = !1;
  var vd = new $c();
  function J(a) {
    vd.set(a);
  }
  var Td = function (a) {
      a = Dd(a);
      a = new $c(a);
      for (var b = vd.C.slice(), c = 0; c < a.C.length; c++)
        b[c] = b[c] || a.C[c];
      return new $c(b).encode();
    },
    Dd = function (a) {
      a = a.get(Gd);
      ka(a) || (a = []);
      return a;
    };
  var ea = function (a) {
      return "function" == typeof a;
    },
    ka = function (a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a));
    },
    qa = function (a) {
      return void 0 != a && -1 < (a.constructor + "").indexOf("String");
    },
    D = function (a, b) {
      return 0 == a.indexOf(b);
    },
    sa = function (a) {
      return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    },
    ra = function () {
      for (
        var a =
            O.navigator.userAgent +
            (M.cookie ? M.cookie : "") +
            (M.referrer ? M.referrer : ""),
          b = a.length,
          c = O.history.length;
        0 < c;

      )
        a += c-- ^ b++;
      return [
        hd() ^ (La(a) & 2147483647),
        Math.round(new Date().getTime() / 1e3),
      ].join(".");
    },
    ta = function (a) {
      var b = M.createElement("img");
      b.width = 1;
      b.height = 1;
      b.src = a;
      return b;
    },
    ua = function () {},
    K = function (a) {
      if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
      J(28);
      return a;
    },
    L = function (a, b, c, d) {
      try {
        a.addEventListener
          ? a.addEventListener(b, c, !!d)
          : a.attachEvent && a.attachEvent("on" + b, c);
      } catch (e) {
        J(27);
      }
    },
    f = /^[\w\-:/.?=&%!\[\]]+$/,
    Nd = /^[\w+/_-]+[=]{0,2}$/,
    Id = function (a, b, c) {
      if (a) {
        var d = (M.querySelector && M.querySelector("script[nonce]")) || null;
        d = d
          ? d.nonce || (d.getAttribute && d.getAttribute("nonce")) || ""
          : "";
        if (c) {
          var e = (c = "");
          b && f.test(b) && (c = ' id="' + b + '"');
          d && Nd.test(d) && (e = ' nonce="' + d + '"');
          f.test(a) &&
            M.write("<script" + c + e + ' src="' + a + '">\x3c/script>');
        } else
          (c = M.createElement("script")),
            (c.type = "text/javascript"),
            (c.async = !0),
            (c.src = a),
            b && (c.id = b),
            d && c.setAttribute("nonce", d),
            (a = M.getElementsByTagName("script")[0]),
            a.parentNode.insertBefore(c, a);
      }
    },
    be = function (a, b) {
      return E(M.location[b ? "href" : "search"], a);
    },
    E = function (a, b) {
      return (a = a.match(
        "(?:&|#|\\?)" +
          K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") +
          "=([^&#]*)"
      )) && 2 == a.length
        ? a[1]
        : "";
    },
    xa = function () {
      var a = "" + M.location.hostname;
      return 0 == a.indexOf("www.") ? a.substring(4) : a;
    },
    de = function (a, b) {
      var c = a.indexOf(b);
      if (5 == c || 6 == c)
        if (
          ((a = a.charAt(c + b.length)),
          "/" == a || "?" == a || "" == a || ":" == a)
        )
          return !0;
      return !1;
    },
    ya = function (a, b) {
      var c = M.referrer;
      if (/^(https?|android-app):\/\//i.test(c)) {
        if (a) return c;
        a = "//" + M.location.hostname;
        if (!de(c, a))
          return b &&
            ((b = a.replace(/\./g, "-") + ".cdn.ampproject.org"), de(c, b))
            ? void 0
            : c;
      }
    },
    za = function (a, b) {
      if (1 == b.length && null != b[0] && "object" === typeof b[0])
        return b[0];
      for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
        if ("object" === typeof b[e]) {
          for (var g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
          break;
        } else e < a.length && (c[a[e]] = b[e]);
      return c;
    };
  var ee = function () {
    this.b = [];
    this.ea = {};
    this.m = {};
  };
  ee.prototype.set = function (a, b, c) {
    this.b.push(a);
    c ? (this.m[":" + a] = b) : (this.ea[":" + a] = b);
  };
  ee.prototype.get = function (a) {
    return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.ea[":" + a];
  };
  ee.prototype.map = function (a) {
    for (var b = 0; b < this.b.length; b++) {
      var c = this.b[b],
        d = this.get(c);
      d && a(c, d);
    }
  };
  var O = window,
    M = document,
    va = function (a, b) {
      return setTimeout(a, b);
    };
  var Qa = window,
    Za = document,
    G = function (a) {
      var b = Qa._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Qa["ga-disable-" + a]))
        return !0;
      try {
        var c = Qa.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (g) {}
      a = [];
      b = String(Za.cookie).split(";");
      for (c = 0; c < b.length; c++) {
        var d = b[c].split("="),
          e = d[0].replace(/^\s*|\s*$/g, "");
        e &&
          "AMP_TOKEN" == e &&
          ((d = d
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "")) && (d = decodeURIComponent(d)),
          a.push(d));
      }
      for (b = 0; b < a.length; b++) if ("$OPT_OUT" == a[b]) return !0;
      return Za.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Ca = function (a) {
      var b = [],
        c = M.cookie.split(";");
      a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
      for (var d = 0; d < c.length; d++) {
        var e = c[d].match(a);
        e && b.push(e[1]);
      }
      return b;
    },
    zc = function (a, b, c, d, e, g, ca) {
      e = G(e)
        ? !1
        : eb.test(M.location.hostname) || ("/" == c && vc.test(d))
        ? !1
        : !0;
      if (!e) return !1;
      b && 1200 < b.length && (b = b.substring(0, 1200));
      c = a + "=" + b + "; path=" + c + "; ";
      g &&
        (c +=
          "expires=" + new Date(new Date().getTime() + g).toGMTString() + "; ");
      d && "none" !== d && (c += "domain=" + d + ";");
      ca && (c += ca + ";");
      d = M.cookie;
      M.cookie = c;
      if (!(d = d != M.cookie))
        a: {
          a = Ca(a);
          for (d = 0; d < a.length; d++)
            if (b == a[d]) {
              d = !0;
              break a;
            }
          d = !1;
        }
      return d;
    },
    Cc = function (a) {
      return encodeURIComponent
        ? encodeURIComponent(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
        : a;
    },
    vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    eb = /(^|\.)doubleclick\.net$/i;
  var Fa,
    Ga,
    fb,
    Ab,
    ja = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
    Ue = /^(?:www\.|m\.|amp\.)+/,
    Ub = [],
    da = function (a) {
      if (ye(a[Kd])) {
        if (void 0 === Ab) {
          var b;
          if ((b = ((b = De.get()) && b._ga) || void 0)) (Ab = b), J(81);
        }
        if (void 0 !== Ab) return a[Q] || (a[Q] = Ab), !1;
      }
      if (a[Kd]) {
        J(67);
        if (a[ac] && "cookie" != a[ac]) return !1;
        if (void 0 !== Ab) a[Q] || (a[Q] = Ab);
        else {
          a: {
            b = String(a[W] || xa());
            var c = String(a[Yb] || "/"),
              d = Ca(String(a[U] || "_ga"));
            b = na(d, b, c);
            if (!b || jd.test(b)) b = !0;
            else if (((b = Ca("AMP_TOKEN")), 0 == b.length)) b = !0;
            else {
              if (
                1 == b.length &&
                ((b = decodeURIComponent(b[0])),
                "$RETRIEVING" == b ||
                  "$OPT_OUT" == b ||
                  "$ERROR" == b ||
                  "$NOT_FOUND" == b)
              ) {
                b = !0;
                break a;
              }
              b = !1;
            }
          }
          if (b && tc(ic, String(a[Na]))) return !0;
        }
      }
      return !1;
    },
    ic = function () {
      Z.D([ua]);
    },
    tc = function (a, b) {
      var c = Ca("AMP_TOKEN");
      if (1 < c.length) return J(55), !1;
      c = decodeURIComponent(c[0] || "");
      if ("$OPT_OUT" == c || "$ERROR" == c || G(b)) return J(62), !1;
      if (!ja.test(M.referrer) && "$NOT_FOUND" == c) return J(68), !1;
      if (void 0 !== Ab)
        return (
          J(56),
          va(function () {
            a(Ab);
          }, 0),
          !0
        );
      if (Fa) return Ub.push(a), !0;
      if ("$RETRIEVING" == c)
        return (
          J(57),
          va(function () {
            tc(a, b);
          }, 1e4),
          !0
        );
      Fa = !0;
      (c && "$" != c[0]) ||
        (xc("$RETRIEVING", 3e4), setTimeout(Mc, 3e4), (c = ""));
      return Pc(c, b) ? (Ub.push(a), !0) : !1;
    },
    Pc = function (a, b, c) {
      if (!window.JSON) return J(58), !1;
      var d = O.XMLHttpRequest;
      if (!d) return J(59), !1;
      var e = new d();
      if (!("withCredentials" in e)) return J(60), !1;
      e.open(
        "POST",
        (c || "https://ampcid.google.com/v1/publisher:getClientId") +
          "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",
        !0
      );
      e.withCredentials = !0;
      e.setRequestHeader("Content-Type", "text/plain");
      e.onload = function () {
        Fa = !1;
        if (4 == e.readyState) {
          try {
            200 != e.status && (J(61), Qc("", "$ERROR", 3e4));
            var g = JSON.parse(e.responseText);
            g.optOut
              ? (J(63), Qc("", "$OPT_OUT", 31536e6))
              : g.clientId
              ? Qc(g.clientId, g.securityToken, 31536e6)
              : !c && g.alternateUrl
              ? (Ga && clearTimeout(Ga), (Fa = !0), Pc(a, b, g.alternateUrl))
              : (J(64), Qc("", "$NOT_FOUND", 36e5));
          } catch (ca) {
            J(65), Qc("", "$ERROR", 3e4);
          }
          e = null;
        }
      };
      d = { originScope: "AMP_ECID_GOOGLE" };
      a && (d.securityToken = a);
      e.send(JSON.stringify(d));
      Ga = va(function () {
        J(66);
        Qc("", "$ERROR", 3e4);
      }, 1e4);
      return !0;
    },
    Mc = function () {
      Fa = !1;
    },
    xc = function (a, b) {
      if (void 0 === fb) {
        fb = "";
        for (var c = id(), d = 0; d < c.length; d++) {
          var e = c[d];
          if (zc("AMP_TOKEN", encodeURIComponent(a), "/", e, "", b)) {
            fb = e;
            return;
          }
        }
      }
      zc("AMP_TOKEN", encodeURIComponent(a), "/", fb, "", b);
    },
    Qc = function (a, b, c) {
      Ga && clearTimeout(Ga);
      b && xc(b, c);
      Ab = a;
      b = Ub;
      Ub = [];
      for (c = 0; c < b.length; c++) b[c](a);
    },
    ye = function (a) {
      a: {
        if (ja.test(M.referrer)) {
          var b = M.location.hostname.replace(Ue, "");
          b: {
            var c = M.referrer;
            c = c.replace(/^https?:\/\//, "");
            var d = c.replace(/^[^/]+/, "").split("/"),
              e = d[2];
            d = (d = "s" == e ? d[3] : e) ? decodeURIComponent(d) : d;
            if (!d) {
              if (0 == c.indexOf("xn--")) {
                c = "";
                break b;
              }
              (c = c.match(/(.*)\.cdn\.ampproject\.org\/?$/)) &&
                2 == c.length &&
                (d = c[1].replace(/-/g, ".").replace(/\.\./g, "-"));
            }
            c = d ? d.replace(Ue, "") : "";
          }
          (d = b === c) ||
            ((c = "." + c),
            (d = b.substring(b.length - c.length, b.length) === c));
          if (d) {
            b = !0;
            break a;
          } else J(78);
        }
        b = !1;
      }
      return b && !1 !== a;
    };
  var bd = function (a) {
      return (
        (a
          ? "https:"
          : Ba || "https:" == M.location.protocol
          ? "https:"
          : "http:") + "//egamesconsult.com/wp-json/caos/v1/proxy"
      );
    },
    Ge = function (a) {
      switch (a) {
        default:
        case 1:
          return "https://egamesconsult.com/wp-json/caos/v1/proxy/gtm/js?id=";
        case 2:
          return "https://www.googletagmanager.com/gtag/js?id=";
      }
    },
    Da = function (a) {
      this.name = "len";
      this.message = a + "-8192";
    },
    ba = function (a, b, c) {
      c = c || ua;
      if (2036 >= b.length) wc(a, b, c);
      else if (8192 >= b.length) x(a, b, c) || wd(a, b, c) || wc(a, b, c);
      else throw (ge("len", b.length), new Da(b.length));
    },
    pe = function (a, b, c, d) {
      d = d || ua;
      wd(a + "?" + b, "", d, c);
    },
    wc = function (a, b, c) {
      var d = ta(a + "?" + b);
      d.onload = d.onerror = function () {
        d.onload = null;
        d.onerror = null;
        c();
      };
    },
    wd = function (a, b, c, d) {
      var e = O.XMLHttpRequest;
      if (!e) return !1;
      var g = new e();
      if (!("withCredentials" in g)) return !1;
      a = a.replace(/^http:/, "https:");
      g.open("POST", a, !0);
      g.withCredentials = !0;
      g.setRequestHeader("Content-Type", "text/plain");
      g.onreadystatechange = function () {
        if (4 == g.readyState) {
          if (d && "text/plain" === g.getResponseHeader("Content-Type"))
            try {
              Ea(d, g.responseText, c);
            } catch (ca) {
              ge("xhr", "rsp"), c();
            }
          else c();
          g = null;
        }
      };
      g.send(b);
      return !0;
    },
    Ea = function (a, b, c) {
      if (1 > b.length) ge("xhr", "ver", "0"), c();
      else if (3 < a.count++) ge("xhr", "tmr", "" + a.count), c();
      else {
        var d = b.charAt(0);
        if ("1" === d) oc(a, b.substring(1), c);
        else if (a.V && "2" === d) {
          var e = b.substring(1).split(","),
            g = 0;
          b = function () {
            ++g === e.length && c();
          };
          for (d = 0; d < e.length; d++) oc(a, e[d], b);
        } else ge("xhr", "ver", String(b.length)), c();
      }
    },
    oc = function (a, b, c) {
      if (0 === b.length) c();
      else {
        var d = b.charAt(0);
        switch (d) {
          case "d":
            pe("https://stats.g.doubleclick.net/j/collect", a.U, a, c);
            break;
          case "g":
            wc(
              "https://www.google.%/ads/ga-audiences".replace("%", "com"),
              a.google,
              c
            );
            (b = b.substring(1)) &&
              (/^[a-z.]{1,6}$/.test(b)
                ? wc(
                    "https://www.google.%/ads/ga-audiences".replace("%", b),
                    a.google,
                    ua
                  )
                : ge("tld", "bcc", b));
            break;
          case "G":
            if (a.V) {
              a.V("G-" + b.substring(1));
              c();
              break;
            }
          case "x":
            if (a.V) {
              a.V();
              c();
              break;
            }
          default:
            ge("xhr", "brc", d), c();
        }
      }
    },
    x = function (a, b, c) {
      return O.navigator.sendBeacon
        ? O.navigator.sendBeacon(a, b)
          ? (c(), !0)
          : !1
        : !1;
    },
    ge = function (a, b, c) {
      1 <= 100 * Math.random() ||
        G("?") ||
        ((a = ["t=error", "_e=" + a, "_v=j87", "sr=1"]),
        b && a.push("_f=" + b),
        c && a.push("_m=" + K(c.substring(0, 100))),
        a.push("aip=1"),
        a.push("z=" + hd()),
        wc(bd(!0) + "/u/d", a.join("&"), ua));
    };
  var qc = function () {
      return (O.gaData = O.gaData || {});
    },
    h = function (a) {
      var b = qc();
      return (b[a] = b[a] || {});
    };
  var Ha = function () {
    this.M = [];
  };
  Ha.prototype.add = function (a) {
    this.M.push(a);
  };
  Ha.prototype.D = function (a) {
    try {
      for (var b = 0; b < this.M.length; b++) {
        var c = a.get(this.M[b]);
        c && ea(c) && c.call(O, a);
      }
    } catch (d) {}
    b = a.get(Ia);
    b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10));
  };
  function Ja(a) {
    if (100 != a.get(Ka) && La(P(a, Q)) % 1e4 >= 100 * R(a, Ka)) throw "abort";
  }
  function Ma(a) {
    if (G(P(a, Na))) throw "abort";
  }
  function Oa() {
    var a = M.location.protocol;
    if ("http:" != a && "https:" != a) throw "abort";
  }
  function Pa(a) {
    try {
      O.navigator.sendBeacon
        ? J(42)
        : O.XMLHttpRequest &&
          "withCredentials" in new O.XMLHttpRequest() &&
          J(40);
    } catch (c) {}
    a.set(ld, Td(a), !0);
    a.set(Ac, R(a, Ac) + 1);
    var b = [];
    ue.map(function (c, d) {
      d.F &&
        ((c = a.get(c)),
        void 0 != c &&
          c != d.defaultValue &&
          ("boolean" == typeof c && (c *= 1), b.push(d.F + "=" + K("" + c))));
    });
    !1 === a.get(xe) && b.push("npa=1");
    b.push("z=" + Bd());
    a.set(Ra, b.join("&"), !0);
  }
  function Sa(a) {
    var b = P(a, fa);
    !b && a.get(Vd) && (b = "beacon");
    var c = P(a, gd),
      d = P(a, oe),
      e = c || (d || bd(!1) + "") + "/collect";
    switch (P(a, ad)) {
      case "d":
        e = c || (d || bd(!1) + "") + "/j/collect";
        b = a.get(qe) || void 0;
        pe(e, P(a, Ra), b, a.Z(Ia));
        break;
      default:
        b
          ? ((c = P(a, Ra)),
            (d = (d = a.Z(Ia)) || ua),
            "image" == b
              ? wc(e, c, d)
              : ("xhr" == b && wd(e, c, d)) ||
                ("beacon" == b && x(e, c, d)) ||
                ba(e, c, d))
          : ba(e, P(a, Ra), a.Z(Ia));
    }
    e = P(a, Na);
    e = h(e);
    b = e.hitcount;
    e.hitcount = b ? b + 1 : 1;
    e.first_hit || (e.first_hit = new Date().getTime());
    e = P(a, Na);
    delete h(e).pending_experiments;
    a.set(Ia, ua, !0);
  }
  function Hc(a) {
    qc().expId && a.set(Nc, qc().expId);
    qc().expVar && a.set(Oc, qc().expVar);
    var b = P(a, Na);
    if ((b = h(b).pending_experiments)) {
      var c = [];
      for (d in b)
        b.hasOwnProperty(d) &&
          b[d] &&
          c.push(encodeURIComponent(d) + "." + encodeURIComponent(b[d]));
      var d = c.join("!");
    } else d = void 0;
    d && ((b = a.get(m)) && (d = b + "!" + d), a.set(m, d, !0));
  }
  function cd() {
    if (O.navigator && "preview" == O.navigator.loadPurpose) throw "abort";
  }
  function yd(a) {
    var b = O.gaDevIds || [];
    if (ka(b)) {
      var c = a.get("&did");
      qa(c) && 0 < c.length && (b = b.concat(c.split(",")));
      c = [];
      for (var d = 0; d < b.length; d++) {
        var e;
        a: {
          for (e = 0; e < c.length; e++)
            if (b[d] == c[e]) {
              e = !0;
              break a;
            }
          e = !1;
        }
        e || c.push(b[d]);
      }
      0 != c.length && a.set("&did", c.join(","), !0);
    }
  }
  function vb(a) {
    if (!a.get(Na)) throw "abort";
  }
  var hd = function () {
      return Math.round(2147483647 * Math.random());
    },
    Bd = function () {
      try {
        var a = new Uint32Array(1);
        O.crypto.getRandomValues(a);
        return a[0] & 2147483647;
      } catch (b) {
        return hd();
      }
    };
  function Ta(a) {
    var b = R(a, Ua);
    500 <= b && J(15);
    var c = P(a, Va);
    if ("transaction" != c && "item" != c) {
      c = R(a, Wa);
      var d = new Date().getTime(),
        e = R(a, Xa);
      0 == e && a.set(Xa, d);
      e = Math.round((2 * (d - e)) / 1e3);
      0 < e && ((c = Math.min(c + e, 20)), a.set(Xa, d));
      if (0 >= c) throw "abort";
      a.set(Wa, --c);
    }
    a.set(Ua, ++b);
  }
  var Ya = function () {
    this.data = new ee();
  };
  Ya.prototype.get = function (a) {
    var b = $a(a),
      c = this.data.get(a);
    b &&
      void 0 == c &&
      (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
    return b && b.Z ? b.Z(this, a, c) : c;
  };
  var P = function (a, b) {
      a = a.get(b);
      return void 0 == a ? "" : "" + a;
    },
    R = function (a, b) {
      a = a.get(b);
      return void 0 == a || "" === a ? 0 : Number(a);
    };
  Ya.prototype.Z = function (a) {
    return (a = this.get(a)) && ea(a) ? a : ua;
  };
  Ya.prototype.set = function (a, b, c) {
    if (a)
      if ("object" == typeof a)
        for (var d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c);
      else ab(this, a, b, c);
  };
  var ab = function (a, b, c, d) {
    if (void 0 != c)
      switch (b) {
        case Na:
          wb.test(c);
      }
    var e = $a(b);
    e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d);
  };
  var ue = new ee(),
    ve = [],
    bb = function (a, b, c, d, e) {
      this.name = a;
      this.F = b;
      this.Z = d;
      this.o = e;
      this.defaultValue = c;
    },
    $a = function (a) {
      var b = ue.get(a);
      if (!b)
        for (var c = 0; c < ve.length; c++) {
          var d = ve[c],
            e = d[0].exec(a);
          if (e) {
            b = d[1](e);
            ue.set(b.name, b);
            break;
          }
        }
      return b;
    },
    yc = function (a) {
      var b;
      ue.map(function (c, d) {
        d.F == a && (b = d);
      });
      return b && b.name;
    },
    S = function (a, b, c, d, e) {
      a = new bb(a, b, c, d, e);
      ue.set(a.name, a);
      return a.name;
    },
    cb = function (a, b) {
      ve.push([new RegExp("^" + a + "$"), b]);
    },
    T = function (a, b, c) {
      return S(a, b, c, void 0, db);
    },
    db = function () {};
  var hb = T("apiVersion", "v"),
    ib = T("clientVersion", "_v");
  S("anonymizeIp", "aip");
  var jb = S("adSenseId", "a"),
    Va = S("hitType", "t"),
    Ia = S("hitCallback"),
    Ra = S("hitPayload");
  S("nonInteraction", "ni");
  S("currencyCode", "cu");
  S("dataSource", "ds");
  var Vd = S("useBeacon", void 0, !1),
    fa = S("transport");
  S("sessionControl", "sc", "");
  S("sessionGroup", "sg");
  S("queueTime", "qt");
  var Ac = S("_s", "_s");
  S("screenName", "cd");
  var kb = S("location", "dl", ""),
    lb = S("referrer", "dr"),
    mb = S("page", "dp", "");
  S("hostname", "dh");
  var nb = S("language", "ul"),
    ob = S("encoding", "de");
  S("title", "dt", function () {
    return M.title || void 0;
  });
  cb("contentGroup([0-9]+)", function (a) {
    return new bb(a[0], "cg" + a[1]);
  });
  var pb = S("screenColors", "sd"),
    qb = S("screenResolution", "sr"),
    rb = S("viewportSize", "vp"),
    sb = S("javaEnabled", "je"),
    tb = S("flashVersion", "fl");
  S("campaignId", "ci");
  S("campaignName", "cn");
  S("campaignSource", "cs");
  S("campaignMedium", "cm");
  S("campaignKeyword", "ck");
  S("campaignContent", "cc");
  var ub = S("eventCategory", "ec"),
    xb = S("eventAction", "ea"),
    yb = S("eventLabel", "el"),
    zb = S("eventValue", "ev"),
    Bb = S("socialNetwork", "sn"),
    Cb = S("socialAction", "sa"),
    Db = S("socialTarget", "st"),
    Eb = S("l1", "plt"),
    Fb = S("l2", "pdt"),
    Gb = S("l3", "dns"),
    Hb = S("l4", "rrt"),
    Ib = S("l5", "srt"),
    Jb = S("l6", "tcp"),
    Kb = S("l7", "dit"),
    Lb = S("l8", "clt"),
    Ve = S("l9", "_gst"),
    We = S("l10", "_gbt"),
    Xe = S("l11", "_cst"),
    Ye = S("l12", "_cbt"),
    Mb = S("timingCategory", "utc"),
    Nb = S("timingVar", "utv"),
    Ob = S("timingLabel", "utl"),
    Pb = S("timingValue", "utt");
  S("appName", "an");
  S("appVersion", "av", "");
  S("appId", "aid", "");
  S("appInstallerId", "aiid", "");
  S("exDescription", "exd");
  S("exFatal", "exf");
  var Nc = S("expId", "xid"),
    Oc = S("expVar", "xvar"),
    m = S("exp", "exp"),
    Rc = S("_utma", "_utma"),
    Sc = S("_utmz", "_utmz"),
    Tc = S("_utmht", "_utmht"),
    Ua = S("_hc", void 0, 0),
    Xa = S("_ti", void 0, 0),
    Wa = S("_to", void 0, 20);
  cb("dimension([0-9]+)", function (a) {
    return new bb(a[0], "cd" + a[1]);
  });
  cb("metric([0-9]+)", function (a) {
    return new bb(a[0], "cm" + a[1]);
  });
  S("linkerParam", void 0, void 0, Bc, db);
  var Ze = T("_cd2l", void 0, !1),
    ld = S("usage", "_u"),
    Gd = S("_um");
  S(
    "forceSSL",
    void 0,
    void 0,
    function () {
      return Ba;
    },
    function (a, b, c) {
      J(34);
      Ba = !!c;
    }
  );
  var ed = S("_j1", "jid"),
    ia = S("_j2", "gjid");
  cb("\\&(.*)", function (a) {
    var b = new bb(a[0], a[1]),
      c = yc(a[0].substring(1));
    c &&
      ((b.Z = function (d) {
        return d.get(c);
      }),
      (b.o = function (d, e, g, ca) {
        d.set(c, g, ca);
      }),
      (b.F = void 0));
    return b;
  });
  var Qb = T("_oot"),
    dd = S("previewTask"),
    Rb = S("checkProtocolTask"),
    md = S("validationTask"),
    Sb = S("checkStorageTask"),
    Uc = S("historyImportTask"),
    Tb = S("samplerTask"),
    Vb = S("_rlt"),
    Wb = S("buildHitTask"),
    Xb = S("sendHitTask"),
    Vc = S("ceTask"),
    zd = S("devIdTask"),
    Cd = S("timingTask"),
    Ld = S("displayFeaturesTask"),
    oa = S("customTask"),
    ze = S("fpsCrossDomainTask"),
    V = T("name"),
    Q = T("clientId", "cid"),
    n = T("clientIdTime"),
    xd = T("storedClientId"),
    Ad = S("userId", "uid"),
    Na = T("trackingId", "tid"),
    U = T("cookieName", void 0, "_ga"),
    W = T("cookieDomain"),
    Yb = T("cookiePath", void 0, "/"),
    Zb = T("cookieExpires", void 0, 63072e3),
    Hd = T("cookieUpdate", void 0, !0),
    Be = T("cookieFlags", void 0, ""),
    $b = T("legacyCookieDomain"),
    Wc = T("legacyHistoryImport", void 0, !0),
    ac = T("storage", void 0, "cookie"),
    bc = T("allowLinker", void 0, !1),
    cc = T("allowAnchor", void 0, !0),
    Ka = T("sampleRate", "sf", 100),
    dc = T("siteSpeedSampleRate", void 0, 1),
    ec = T("alwaysSendReferrer", void 0, !1),
    I = T("_gid", "_gid"),
    la = T("_gcn"),
    Kd = T("useAmpClientId"),
    ce = T("_gclid"),
    fe = T("_gt"),
    he = T("_ge", void 0, 7776e6),
    ie = T("_gclsrc"),
    je = T("storeGac", void 0, !0),
    oe = S("_x_19"),
    Ae = S("_fplc", "_fplc"),
    F = T("_cs"),
    Je = T("_useUp", void 0, !1),
    Le = S("up", "up"),
    gd = S("transportUrl"),
    Md = S("_r", "_r"),
    Od = S("_slc", "_slc"),
    qe = S("_dp"),
    ad = S("_jt", void 0, "n"),
    Ud = S("allowAdFeatures", void 0, !0),
    xe = S("allowAdPersonalizationSignals", void 0, !0);
  function X(a, b, c, d) {
    b[a] = function () {
      try {
        return d && J(d), c.apply(this, arguments);
      } catch (e) {
        throw (ge("exc", a, e && e.name), e);
      }
    };
  }
  function fc() {
    var a, b;
    if ((b = (b = O.navigator) ? b.plugins : null) && b.length)
      for (var c = 0; c < b.length && !a; c++) {
        var d = b[c];
        -1 < d.name.indexOf("Shockwave Flash") && (a = d.description);
      }
    if (!a)
      try {
        var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        a = e.GetVariable("$version");
      } catch (g) {}
    if (!a)
      try {
        (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
          (a = "WIN 6,0,21,0"),
          (e.AllowScriptAccess = "always"),
          (a = e.GetVariable("$version"));
      } catch (g) {}
    if (!a)
      try {
        (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
          (a = e.GetVariable("$version"));
      } catch (g) {}
    a &&
      (e = a.match(/[\d]+/g)) &&
      3 <= e.length &&
      (a = e[0] + "." + e[1] + " r" + e[2]);
    return a || void 0;
  }
  var Ed = function (a) {
      if ("cookie" == a.get(ac))
        return (a = Ca("FPLC")), 0 < a.length ? a[0] : void 0;
    },
    Fe = function (a) {
      var b;
      if ((b = P(a, oe) && a.get(Ze)))
        (b = De.get(a.get(cc))), (b = !(b && b._fplc));
      b && a.set(Ae, Ed(a) || "0");
    };
  var aa = function (a) {
      var b = Math.min(R(a, dc), 100);
      return La(P(a, Q)) % 100 >= b ? !1 : !0;
    },
    gc = function (a) {
      var b = {};
      if (Ec(b) || Fc(b)) {
        var c = b[Eb];
        void 0 == c ||
          Infinity == c ||
          isNaN(c) ||
          (0 < c
            ? (Y(b, Gb),
              Y(b, Jb),
              Y(b, Ib),
              Y(b, Fb),
              Y(b, Hb),
              Y(b, Kb),
              Y(b, Lb),
              Y(b, Ve),
              Y(b, We),
              Y(b, Xe),
              Y(b, Ye),
              va(function () {
                a(b);
              }, 10))
            : L(
                O,
                "load",
                function () {
                  gc(a);
                },
                !1
              ));
      }
    },
    Ec = function (a) {
      var b = O.performance || O.webkitPerformance;
      b = b && b.timing;
      if (!b) return !1;
      var c = b.navigationStart;
      if (0 == c) return !1;
      a[Eb] = b.loadEventStart - c;
      a[Gb] = b.domainLookupEnd - b.domainLookupStart;
      a[Jb] = b.connectEnd - b.connectStart;
      a[Ib] = b.responseStart - b.requestStart;
      a[Fb] = b.responseEnd - b.responseStart;
      a[Hb] = b.fetchStart - c;
      a[Kb] = b.domInteractive - c;
      a[Lb] = b.domContentLoadedEventStart - c;
      a[Ve] = N.L - c;
      a[We] = N.ya - c;
      O.google_tag_manager &&
        O.google_tag_manager._li &&
        ((b = O.google_tag_manager._li), (a[Xe] = b.cst), (a[Ye] = b.cbt));
      return !0;
    },
    Fc = function (a) {
      if (O.top != O) return !1;
      var b = O.external,
        c = b && b.onloadT;
      b && !b.isValidLoadTime && (c = void 0);
      2147483648 < c && (c = void 0);
      0 < c && b.setPageReadyTime();
      if (void 0 == c) return !1;
      a[Eb] = c;
      return !0;
    },
    Y = function (a, b) {
      var c = a[b];
      if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0;
    },
    Fd = function (a) {
      return function (b) {
        if ("pageview" == b.get(Va) && !a.I) {
          a.I = !0;
          var c = aa(b),
            d = 0 < E(P(b, kb), "gclid").length;
          (c || d) &&
            gc(function (e) {
              c && a.send("timing", e);
              d && a.send("adtiming", e);
            });
        }
      };
    };
  var hc = !1,
    mc = function (a) {
      if ("cookie" == P(a, ac)) {
        if (a.get(Hd) || P(a, xd) != P(a, Q)) {
          var b = 1e3 * R(a, Zb);
          ma(a, Q, U, b);
          a.data.set(xd, P(a, Q));
        }
        (a.get(Hd) || uc(a) != P(a, I)) && ma(a, I, la, 864e5);
        if (a.get(je)) {
          var c = P(a, ce);
          if (c) {
            var d = Math.min(R(a, he), 1e3 * R(a, Zb));
            d = Math.min(d, 1e3 * R(a, fe) + d - new Date().getTime());
            a.data.set(he, d);
            b = {};
            var e = P(a, fe),
              g = P(a, ie),
              ca = kc(P(a, Yb)),
              l = lc(P(a, W)),
              k = P(a, Na);
            a = P(a, Be);
            g && "aw.ds" != g
              ? b && (b.ua = !0)
              : ((c = ["1", e, Cc(c)].join(".")),
                0 < d &&
                  (b && (b.ta = !0), zc("_gac_" + Cc(k), c, ca, l, k, d, a)));
            le(b);
          }
        } else J(75);
      }
    },
    ma = function (a, b, c, d) {
      var e = nd(a, b);
      if (e) {
        c = P(a, c);
        var g = kc(P(a, Yb)),
          ca = lc(P(a, W)),
          l = P(a, Be),
          k = P(a, Na);
        if ("auto" != ca) zc(c, e, g, ca, k, d, l) && (hc = !0);
        else {
          J(32);
          for (var w = id(), Ce = 0; Ce < w.length; Ce++)
            if (
              ((ca = w[Ce]),
              a.data.set(W, ca),
              (e = nd(a, b)),
              zc(c, e, g, ca, k, d, l))
            ) {
              hc = !0;
              return;
            }
          a.data.set(W, "auto");
        }
      }
    },
    uc = function (a) {
      var b = Ca(P(a, la));
      return Xd(a, b);
    },
    nc = function (a) {
      if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
    },
    Yc = function (a) {
      if (a.get(Wc)) {
        var b = P(a, W),
          c = P(a, $b) || xa(),
          d = Xc("__utma", c, b);
        d &&
          (J(19),
          a.set(Tc, new Date().getTime(), !0),
          a.set(Rc, d.R),
          (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R));
      }
    },
    nd = function (a, b) {
      b = Cc(P(a, b));
      var c = lc(P(a, W)).split(".").length;
      a = jc(P(a, Yb));
      1 < a && (c += "-" + a);
      return b ? ["GA1", c, b].join(".") : "";
    },
    Xd = function (a, b) {
      return na(b, P(a, W), P(a, Yb));
    },
    na = function (a, b, c) {
      if (!a || 1 > a.length) J(12);
      else {
        for (var d = [], e = 0; e < a.length; e++) {
          var g = a[e];
          var ca = g.split(".");
          var l = ca.shift();
          ("GA1" == l || "1" == l) && 1 < ca.length
            ? ((g = ca.shift().split("-")),
              1 == g.length && (g[1] = "1"),
              (g[0] *= 1),
              (g[1] *= 1),
              (ca = { H: g, s: ca.join(".") }))
            : (ca = kd.test(g) ? { H: [0, 0], s: g } : void 0);
          ca && d.push(ca);
        }
        if (1 == d.length) return J(13), d[0].s;
        if (0 == d.length) J(12);
        else {
          J(14);
          d = Gc(d, lc(b).split(".").length, 0);
          if (1 == d.length) return d[0].s;
          d = Gc(d, jc(c), 1);
          1 < d.length && J(41);
          return d[0] && d[0].s;
        }
      }
    },
    Gc = function (a, b, c) {
      for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
        var l = a[ca];
        l.H[c] == b
          ? d.push(l)
          : void 0 == g || l.H[c] < g
          ? ((e = [l]), (g = l.H[c]))
          : l.H[c] == g && e.push(l);
      }
      return 0 < d.length ? d : e;
    },
    lc = function (a) {
      return 0 == a.indexOf(".") ? a.substr(1) : a;
    },
    id = function () {
      var a = [],
        b = xa().split(".");
      if (4 == b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10) == c) return ["none"];
      }
      for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
      b = M.location.hostname;
      eb.test(b) || vc.test(b) || a.push("none");
      return a;
    },
    kc = function (a) {
      if (!a) return "/";
      1 < a.length &&
        a.lastIndexOf("/") == a.length - 1 &&
        (a = a.substr(0, a.length - 1));
      0 != a.indexOf("/") && (a = "/" + a);
      return a;
    },
    jc = function (a) {
      a = kc(a);
      return "/" == a ? 1 : a.split("/").length;
    },
    le = function (a) {
      a.ta && J(77);
      a.na && J(74);
      a.pa && J(73);
      a.ua && J(69);
    };
  function Xc(a, b, c) {
    "none" == b && (b = "");
    var d = [],
      e = Ca(a);
    a = "__utma" == a ? 6 : 2;
    for (var g = 0; g < e.length; g++) {
      var ca = ("" + e[g]).split(".");
      ca.length >= a && d.push({ hash: ca[0], R: e[g], O: ca });
    }
    if (0 != d.length)
      return 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0];
  }
  function Zc(a, b) {
    if (null == a) var c = (a = 1);
    else (c = La(a)), (a = La(D(a, ".") ? a.substring(1) : "." + a));
    for (var d = 0; d < b.length; d++)
      if (b[d].hash == c || b[d].hash == a) return b[d];
  }
  var Jc = new RegExp(/^https?:\/\/([^\/:]+)/),
    De = O.google_tag_data.glBridge,
    Kc = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
    od = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
  function Bc(a) {
    if (a.get(Ze)) return J(35), De.generate($e(a));
    var b = P(a, Q),
      c = P(a, I) || "";
    b = "_ga=2." + K(pa(c + b, 0) + "." + c + "-" + b);
    (a = af(a))
      ? (J(44),
        (a = "&_gac=1." + K([pa(a.qa, 0), a.timestamp, a.qa].join("."))))
      : (a = "");
    return b + a;
  }
  function Ic(a, b) {
    var c = new Date(),
      d = O.navigator,
      e = d.plugins || [];
    a = [
      a,
      d.userAgent,
      c.getTimezoneOffset(),
      c.getYear(),
      c.getDate(),
      c.getHours(),
      c.getMinutes() + b,
    ];
    for (b = 0; b < e.length; ++b) a.push(e[b].description);
    return La(a.join("."));
  }
  function pa(a, b) {
    var c = new Date(),
      d = O.navigator,
      e = c.getHours() + Math.floor((c.getMinutes() + b) / 60);
    return La(
      [
        a,
        d.userAgent,
        d.language || "",
        c.getTimezoneOffset(),
        c.getYear(),
        c.getDate() + Math.floor(e / 24),
        (24 + e) % 24,
        (60 + c.getMinutes() + b) % 60,
      ].join(".")
    );
  }
  var Dc = function (a) {
    J(48);
    this.target = a;
    this.T = !1;
  };
  Dc.prototype.ca = function (a, b) {
    if (a) {
      if (this.target.get(Ze)) return De.decorate($e(this.target), a, b);
      if (a.tagName) {
        if ("a" == a.tagName.toLowerCase()) {
          a.href && (a.href = qd(this, a.href, b));
          return;
        }
        if ("form" == a.tagName.toLowerCase()) return rd(this, a);
      }
      if ("string" == typeof a) return qd(this, a, b);
    }
  };
  var qd = function (a, b, c) {
      var d = Kc.exec(b);
      d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
      (d = od.exec(b)) &&
        3 <= d.length &&
        (b = d[1] + (d[3] ? d[2] + d[3] : ""));
      a = a.target.get("linkerParam");
      var e = b.indexOf("?");
      d = b.indexOf("#");
      c
        ? (b += (-1 == d ? "#" : "&") + a)
        : ((c = -1 == e ? "?" : "&"),
          (b =
            -1 == d
              ? b + (c + a)
              : b.substring(0, d) + c + a + b.substring(d)));
      b = b.replace(/&+_ga=/, "&_ga=");
      return (b = b.replace(/&+_gac=/, "&_gac="));
    },
    rd = function (a, b) {
      if (b && b.action)
        if ("get" == b.method.toLowerCase()) {
          a = a.target.get("linkerParam").split("&");
          for (var c = 0; c < a.length; c++) {
            var d = a[c].split("="),
              e = d[1];
            d = d[0];
            for (var g = b.childNodes || [], ca = !1, l = 0; l < g.length; l++)
              if (g[l].name == d) {
                g[l].setAttribute("value", e);
                ca = !0;
                break;
              }
            ca ||
              ((g = M.createElement("input")),
              g.setAttribute("type", "hidden"),
              g.setAttribute("name", d),
              g.setAttribute("value", e),
              b.appendChild(g));
          }
        } else "post" == b.method.toLowerCase() && (b.action = qd(a, b.action));
    };
  Dc.prototype.S = function (a, b, c) {
    function d(g) {
      try {
        g = g || O.event;
        a: {
          var ca = g.target || g.srcElement;
          for (g = 100; ca && 0 < g; ) {
            if (ca.href && ca.nodeName.match(/^a(?:rea)?$/i)) {
              var l = ca;
              break a;
            }
            ca = ca.parentNode;
            g--;
          }
          l = {};
        }
        ("http:" == l.protocol || "https:" == l.protocol) &&
          sd(a, l.hostname || "") &&
          l.href &&
          (l.href = qd(e, l.href, b));
      } catch (k) {
        J(26);
      }
    }
    var e = this;
    this.target.get(Ze)
      ? De.auto(
          function () {
            return $e(e.target);
          },
          a,
          b ? "fragment" : "",
          c
        )
      : (this.T ||
          ((this.T = !0), L(M, "mousedown", d, !1), L(M, "keyup", d, !1)),
        c &&
          L(M, "submit", function (g) {
            g = g || O.event;
            if ((g = g.target || g.srcElement) && g.action) {
              var ca = g.action.match(Jc);
              ca && sd(a, ca[1]) && rd(e, g);
            }
          }));
  };
  Dc.prototype.$ = function (a) {
    if (a) {
      var b = this,
        c = b.target.get(F);
      void 0 !== c &&
        De.passthrough(
          function () {
            if (c("analytics_storage")) return {};
            var d = {};
            return (d._ga = b.target.get(Q)), (d._up = "1"), d;
          },
          1,
          !0
        );
    }
  };
  function sd(a, b) {
    if (b == M.location.hostname) return !1;
    for (var c = 0; c < a.length; c++)
      if (a[c] instanceof RegExp) {
        if (a[c].test(b)) return !0;
      } else if (0 <= b.indexOf(a[c])) return !0;
    return !1;
  }
  function ke(a, b) {
    return (
      b != Ic(a, 0) &&
      b != Ic(a, -1) &&
      b != Ic(a, -2) &&
      b != pa(a, 0) &&
      b != pa(a, -1) &&
      b != pa(a, -2)
    );
  }
  function $e(a) {
    var b = af(a),
      c = {};
    c._ga = a.get(Q);
    c._gid = a.get(I) || void 0;
    c._gac = b ? [b.qa, b.timestamp].join(".") : void 0;
    b = a.get(Ae);
    a = Ed(a);
    return (c._fplc = b && "0" !== b ? b : a), c;
  }
  function af(a) {
    function b(e) {
      return void 0 == e || "" === e ? 0 : Number(e);
    }
    var c = a.get(ce);
    if (c && a.get(je)) {
      var d = b(a.get(fe));
      if (1e3 * d + b(a.get(he)) <= new Date().getTime()) J(76);
      else return { timestamp: d, qa: c };
    }
  }
  var p = /^(GTM|OPT)-[A-Z0-9]+$/,
    Ie = /^G-[A-Z0-9]+$/,
    q = /;_gaexp=[^;]*/g,
    r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
    Aa =
      /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
    t = function (a) {
      function b(d, e) {
        e && (c += "&" + d + "=" + K(e));
      }
      var c = Ge(a.type) + K(a.id);
      "dataLayer" != a.B && b("l", a.B);
      b("cx", a.context);
      b("t", a.target);
      b("cid", a.clientId);
      b("cidt", a.ka);
      b("gac", a.la);
      b("aip", a.ia);
      a.sync && b("m", "sync");
      b("cycle", a.G);
      a.qa && b("gclid", a.qa);
      Aa.test(M.referrer) && b("cb", String(hd()));
      return c;
    },
    He = function (a, b) {
      var c = new Date().getTime();
      O[a.B] = O[a.B] || [];
      c = { "gtm.start": c };
      a.sync || (c.event = "gtm.js");
      O[a.B].push(c);
      2 === a.type &&
        (function (d, e, g) {
          O[a.B].push(arguments);
        })("config", a.id, b);
    },
    Ke = function (a, b, c, d) {
      c = c || {};
      var e = 1;
      Ie.test(b) && (e = 2);
      var g = { id: b, type: e, B: c.dataLayer || "dataLayer", G: !1 },
        ca = void 0;
      a.get("&gtm") == b && (g.G = !0);
      1 === e
        ? ((g.ia = !!a.get("anonymizeIp")),
          (g.sync = d),
          (b = String(a.get("name"))),
          "t0" != b && (g.target = b),
          G(String(a.get("trackingId"))) ||
            ((g.clientId = String(a.get(Q))),
            (g.ka = Number(a.get(n))),
            (c = c.palindrome ? r : q),
            (c = (c = M.cookie.replace(/^|(; +)/g, ";").match(c))
              ? c.sort().join("").substring(1)
              : void 0),
            (g.la = c),
            (g.qa = E(P(a, kb), "gclid"))))
        : 2 === e &&
          ((g.context = "c"),
          (ca = {
            allow_google_signals: a.get(Ud),
            allow_ad_personalization_signals: a.get(xe),
          }));
      He(g, ca);
      return t(g);
    };
  var H = {},
    Jd = function (a, b) {
      b ||
        (b =
          (b = P(a, V)) && "t0" != b
            ? Wd.test(b)
              ? "_gat_" + Cc(P(a, Na))
              : "_gat_" + Cc(b)
            : "_gat");
      this.Y = b;
    },
    Rd = function (a, b) {
      var c = b.get(Wb);
      b.set(Wb, function (e) {
        Pd(a, e, ed);
        Pd(a, e, ia);
        var g = c(e);
        Qd(a, e);
        return g;
      });
      var d = b.get(Xb);
      b.set(Xb, function (e) {
        var g = d(e);
        if (se(e)) {
          J(80);
          var ca = { U: re(e, 1), google: re(e, 2), count: 0 };
          pe("https://stats.g.doubleclick.net/j/collect", ca.U, ca);
          e.set(ed, "", !0);
        }
        return g;
      });
    },
    Pd = function (a, b, c) {
      !1 === b.get(Ud) ||
        b.get(c) ||
        ("1" == Ca(a.Y)[0] ? b.set(c, "", !0) : b.set(c, "" + hd(), !0));
    },
    Qd = function (a, b) {
      se(b) && zc(a.Y, "1", P(b, Yb), P(b, W), P(b, Na), 6e4, P(b, Be));
    },
    se = function (a) {
      return !!a.get(ed) && !1 !== a.get(Ud);
    },
    Ne = function (a) {
      return (
        !H[P(a, Na)] &&
        void 0 === a.get("&gtm") &&
        void 0 === a.get(fa) &&
        void 0 === a.get(gd) &&
        void 0 === a.get(oe)
      );
    },
    re = function (a, b) {
      var c = new ee(),
        d = function (g) {
          $a(g).F && c.set($a(g).F, a.get(g));
        };
      d(hb);
      d(ib);
      d(Na);
      d(Q);
      d(ed);
      1 == b && (d(Ad), d(ia), d(I));
      !1 === a.get(xe) && c.set("npa", "1");
      c.set($a(ld).F, Td(a));
      var e = "";
      c.map(function (g, ca) {
        e += K(g) + "=";
        e += K("" + ca) + "&";
      });
      e += "z=" + hd();
      1 == b
        ? (e = "t=dc&aip=1&_r=3&" + e)
        : 2 == b && (e = "t=sr&aip=1&_r=4&slf_rd=1&" + e);
      return e;
    },
    Me = function (a) {
      if (Ne(a))
        return (
          (H[P(a, Na)] = !0),
          function (b) {
            if (b && !H[b]) {
              var c = Ke(a, b);
              Id(c);
              H[b] = !0;
            }
          }
        );
    },
    Wd = /^gtm\d+$/;
  var fd = function (a, b) {
    a = a.model;
    if (!a.get("dcLoaded")) {
      var c = new $c(Dd(a));
      c.set(29);
      a.set(Gd, c.C);
      b = b || {};
      var d;
      b[U] && (d = Cc(b[U]));
      b = new Jd(a, d);
      Rd(b, a);
      a.set("dcLoaded", !0);
    }
  };
  var Sd = function (a) {
    if (!a.get("dcLoaded") && "cookie" == a.get(ac)) {
      var b = new Jd(a);
      Pd(b, a, ed);
      Pd(b, a, ia);
      Qd(b, a);
      b = se(a);
      var c = Ne(a);
      b && a.set(Md, 1, !0);
      c && a.set(Od, 1, !0);
      if (b || c)
        a.set(ad, "d", !0),
          J(79),
          a.set(qe, { U: re(a, 1), google: re(a, 2), V: Me(a), count: 0 }, !0);
    }
  };
  var Lc = function () {
    var a = (O.gaGlobal = O.gaGlobal || {});
    return (a.hid = a.hid || hd());
  };
  var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
    pc = function (a) {
      function b(e, g) {
        d.model.data.set(e, g);
      }
      function c(e, g) {
        b(e, g);
        d.filters.add(e);
      }
      var d = this;
      this.model = new Ya();
      this.filters = new Ha();
      b(V, a[V]);
      b(Na, sa(a[Na]));
      b(U, a[U]);
      b(W, a[W] || xa());
      b(Yb, a[Yb]);
      b(Zb, a[Zb]);
      b(Hd, a[Hd]);
      b(Be, a[Be]);
      b($b, a[$b]);
      b(Wc, a[Wc]);
      b(bc, a[bc]);
      b(cc, a[cc]);
      b(Ka, a[Ka]);
      b(dc, a[dc]);
      b(ec, a[ec]);
      b(ac, a[ac]);
      b(Ad, a[Ad]);
      b(n, a[n]);
      b(Kd, a[Kd]);
      b(je, a[je]);
      b(Ze, a[Ze]);
      b(oe, a[oe]);
      b(Je, a[Je]);
      b(F, a[F]);
      b(hb, 1);
      b(ib, "j87");
      c(Qb, Ma);
      c(oa, ua);
      c(dd, cd);
      c(Rb, Oa);
      c(md, vb);
      c(Sb, nc);
      c(Uc, Yc);
      c(Tb, Ja);
      c(Vb, Ta);
      c(Vc, Hc);
      c(zd, yd);
      c(Ld, Sd);
      c(ze, Fe);
      c(Wb, Pa);
      c(Xb, Sa);
      c(Cd, Fd(this));
      pd(this.model);
      td(this.model, a[Q]);
      this.model.set(jb, Lc());
    };
  pc.prototype.get = function (a) {
    return this.model.get(a);
  };
  pc.prototype.set = function (a, b) {
    this.model.set(a, b);
  };
  pc.prototype.send = function (a) {
    if (!(1 > arguments.length)) {
      if ("string" === typeof arguments[0]) {
        var b = arguments[0];
        var c = [].slice.call(arguments, 1);
      } else (b = arguments[0] && arguments[0][Va]), (c = arguments);
      b &&
        ((c = za(me[b] || [], c)),
        (c[Va] = b),
        this.model.set(c, void 0, !0),
        this.filters.D(this.model),
        (this.model.data.m = {}));
    }
  };
  pc.prototype.ma = function (a, b) {
    var c = this;
    u(a, c, b) ||
      (v(a, function () {
        u(a, c, b);
      }),
      y(String(c.get(V)), a, void 0, b, !0));
  };
  var td = function (a, b) {
      var c = P(a, U);
      a.data.set(la, "_ga" == c ? "_gid" : c + "_gid");
      if ("cookie" == P(a, ac)) {
        hc = !1;
        c = Ca(P(a, U));
        c = Xd(a, c);
        if (!c) {
          c = P(a, W);
          var d = P(a, $b) || xa();
          c = Xc("__utma", d, c);
          void 0 != c ? (J(10), (c = c.O[1] + "." + c.O[2])) : (c = void 0);
        }
        c && (hc = !0);
        if ((d = c && !a.get(Hd)))
          if (((d = c.split(".")), 2 != d.length)) d = !1;
          else if ((d = Number(d[1]))) {
            var e = R(a, Zb);
            d = d + e < new Date().getTime() / 1e3;
          } else d = !1;
        d && (c = void 0);
        c &&
          (a.data.set(xd, c),
          a.data.set(Q, c),
          (c = uc(a)) && a.data.set(I, c));
        if (
          a.get(je) &&
          ((c = a.get(ce)), (d = a.get(ie)), !c || (d && "aw.ds" != d))
        ) {
          c = {};
          if (M) {
            d = [];
            e = M.cookie.split(";");
            for (
              var g = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, ca = 0;
              ca < e.length;
              ca++
            ) {
              var l = e[ca].match(g);
              l && d.push({ ja: l[1], value: l[2] });
            }
            e = {};
            if (d && d.length)
              for (g = 0; g < d.length; g++)
                ((ca = d[g].value.split(".")), "1" != ca[0] || 3 != ca.length)
                  ? c && (c.na = !0)
                  : ca[1] &&
                    (e[d[g].ja] ? c && (c.pa = !0) : (e[d[g].ja] = []),
                    e[d[g].ja].push({ timestamp: ca[1], qa: ca[2] }));
            d = e;
          } else d = {};
          d = d[P(a, Na)];
          le(c);
          d &&
            0 != d.length &&
            ((c = d[0]), a.data.set(fe, c.timestamp), a.data.set(ce, c.qa));
        }
      }
      if (a.get(Hd)) {
        c = be("_ga", !!a.get(cc));
        g = be("_gl", !!a.get(cc));
        d = De.get(a.get(cc));
        e = d._ga;
        g && 0 < g.indexOf("_ga*") && !e && J(30);
        if (b || !a.get(Je)) g = !1;
        else if (((g = a.get(F)), void 0 === g || g("analytics_storage")))
          g = !1;
        else {
          J(84);
          a.data.set(Le, 1);
          if ((g = d._up))
            (g = Jc.exec(M.referrer))
              ? ((g = g[1]),
                (ca = M.location.hostname),
                (g =
                  ca === g ||
                  0 <= ca.indexOf("." + g) ||
                  0 <= g.indexOf("." + ca)
                    ? !0
                    : !1))
              : (g = !1);
          g = g ? !0 : !1;
        }
        ca = d.gclid;
        l = d._gac;
        if (c || e || ca || l)
          if ((c && e && J(36), a.get(bc) || ye(a.get(Kd)) || g)) {
            e &&
              (J(38),
              a.data.set(Q, e),
              d._gid && (J(51), a.data.set(I, d._gid)));
            ca
              ? (J(82),
                a.data.set(ce, ca),
                d.gclsrc && a.data.set(ie, d.gclsrc))
              : l &&
                (e = l.split(".")) &&
                2 === e.length &&
                (J(37), a.data.set(ce, e[0]), a.data.set(fe, e[1]));
            if ((d = d._fplc)) J(83), a.data.set(Ae, d);
            if (c)
              b: if (((d = c.indexOf(".")), -1 == d)) J(22);
              else {
                e = c.substring(0, d);
                g = c.substring(d + 1);
                d = g.indexOf(".");
                c = g.substring(0, d);
                g = g.substring(d + 1);
                if ("1" == e) {
                  if (((d = g), ke(d, c))) {
                    J(23);
                    break b;
                  }
                } else if ("2" == e) {
                  d = g.indexOf("-");
                  e = "";
                  0 < d
                    ? ((e = g.substring(0, d)), (d = g.substring(d + 1)))
                    : (d = g.substring(1));
                  if (ke(e + d, c)) {
                    J(53);
                    break b;
                  }
                  e && (J(2), a.data.set(I, e));
                } else {
                  J(22);
                  break b;
                }
                J(11);
                a.data.set(Q, d);
                if ((c = be("_gac", !!a.get(cc))))
                  (c = c.split(".")),
                    "1" != c[0] || 4 != c.length
                      ? J(72)
                      : ke(c[3], c[1])
                      ? J(71)
                      : (a.data.set(ce, c[3]), a.data.set(fe, c[2]), J(70));
              }
          } else J(21);
      }
      b && (J(9), a.data.set(Q, K(b)));
      a.get(Q) ||
        ((b =
          (b = O.gaGlobal) && b.from_cookie && "cookie" !== P(a, ac)
            ? void 0
            : (b = b && b.vid) && -1 !== b.search(jd)
            ? b
            : void 0),
        b ? (J(17), a.data.set(Q, b)) : (J(8), a.data.set(Q, ra())));
      a.get(I) || (J(3), a.data.set(I, ra()));
      mc(a);
      b = O.gaGlobal = O.gaGlobal || {};
      c = P(a, Q);
      a = c === P(a, xd);
      if (void 0 == b.vid || (a && !b.from_cookie))
        (b.vid = c), (b.from_cookie = a);
    },
    pd = function (a) {
      var b = O.navigator,
        c = O.screen,
        d = M.location;
      a.set(lb, ya(!!a.get(ec), !!a.get(Kd)));
      if (d) {
        var e = d.pathname || "";
        "/" != e.charAt(0) && (J(31), (e = "/" + e));
        a.set(kb, d.protocol + "//" + d.hostname + e + d.search);
      }
      c && a.set(qb, c.width + "x" + c.height);
      c && a.set(pb, c.colorDepth + "-bit");
      c = M.documentElement;
      var g = (e = M.body) && e.clientWidth && e.clientHeight,
        ca = [];
      c &&
      c.clientWidth &&
      c.clientHeight &&
      ("CSS1Compat" === M.compatMode || !g)
        ? (ca = [c.clientWidth, c.clientHeight])
        : g && (ca = [e.clientWidth, e.clientHeight]);
      c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
      a.set(rb, c);
      a.set(tb, fc());
      a.set(ob, M.characterSet || M.charset);
      a.set(
        sb,
        (b && "function" === typeof b.javaEnabled && b.javaEnabled()) || !1
      );
      a.set(nb, ((b && (b.language || b.browserLanguage)) || "").toLowerCase());
      a.data.set(ce, be("gclid", !0));
      a.data.set(ie, be("gclsrc", !0));
      a.data.set(fe, Math.round(new Date().getTime() / 1e3));
      if (d && a.get(cc) && (b = M.location.hash)) {
        b = b.split(/[?&#]+/);
        d = [];
        for (c = 0; c < b.length; ++c)
          (D(b[c], "utm_id") ||
            D(b[c], "utm_campaign") ||
            D(b[c], "utm_source") ||
            D(b[c], "utm_medium") ||
            D(b[c], "utm_term") ||
            D(b[c], "utm_content") ||
            D(b[c], "gclid") ||
            D(b[c], "dclid") ||
            D(b[c], "gclsrc")) &&
            d.push(b[c]);
        0 < d.length && ((b = "#" + d.join("&")), a.set(kb, a.get(kb) + b));
      }
    },
    me = {
      pageview: [mb],
      event: [ub, xb, yb, zb],
      social: [Bb, Cb, Db],
      timing: [Mb, Nb, Pb, Ob],
    };
  var rc = function (a) {
      if ("prerender" == M.visibilityState) return !1;
      a();
      return !0;
    },
    z = function (a) {
      if (!rc(a)) {
        J(16);
        var b = !1,
          c = function () {
            if (!b && rc(a)) {
              b = !0;
              var d = c,
                e = M;
              e.removeEventListener
                ? e.removeEventListener("visibilitychange", d, !1)
                : e.detachEvent && e.detachEvent("onvisibilitychange", d);
            }
          };
        L(M, "visibilitychange", c);
      }
    };
  var te = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
    sc = function (a) {
      if (ea(a[0])) this.u = a[0];
      else {
        var b = te.exec(a[0]);
        null != b &&
          4 == b.length &&
          ((this.c = b[1] || "t0"),
          (this.K = b[2] || ""),
          (this.methodName = b[3]),
          (this.a = [].slice.call(a, 1)),
          this.K ||
            ((this.A = "create" == this.methodName),
            (this.i = "require" == this.methodName),
            (this.g = "provide" == this.methodName),
            (this.ba = "remove" == this.methodName)),
          this.i &&
            (3 <= this.a.length
              ? ((this.X = this.a[1]), (this.W = this.a[2]))
              : this.a[1] &&
                (qa(this.a[1]) ? (this.X = this.a[1]) : (this.W = this.a[1]))));
        b = a[1];
        a = a[2];
        if (!this.methodName) throw "abort";
        if (this.i && (!qa(b) || "" == b)) throw "abort";
        if (this.g && (!qa(b) || "" == b || !ea(a))) throw "abort";
        if (ud(this.c) || ud(this.K)) throw "abort";
        if (this.g && "t0" != this.c) throw "abort";
      }
    };
  function ud(a) {
    return 0 <= a.indexOf(".") || 0 <= a.indexOf(":");
  }
  var Yd, Zd, $d, A;
  Yd = new ee();
  $d = new ee();
  A = new ee();
  Zd = { ec: 45, ecommerce: 46, linkid: 47 };
  var u = function (a, b, c) {
      b == N || b.get(V);
      var d = Yd.get(a);
      if (!ea(d)) return !1;
      b.plugins_ = b.plugins_ || new ee();
      if (b.plugins_.get(a)) return !0;
      b.plugins_.set(a, new d(b, c || {}));
      return !0;
    },
    y = function (a, b, c, d, e) {
      if (!ea(Yd.get(b)) && !$d.get(b)) {
        Zd.hasOwnProperty(b) && J(Zd[b]);
        a = N.j(a);
        if (p.test(b)) {
          J(52);
          if (!a) return !0;
          c = Ke(a.model, b, d, e);
        }
        !c && Zd.hasOwnProperty(b) ? (J(39), (c = b + ".js")) : J(43);
        if (c) {
          if (a) {
            var g = a.get(oe);
            qa(g) || (g = void 0);
          }
          (c && 0 <= c.indexOf("/")) ||
            (c = (g || bd(!1)) + "/plugins/ua/" + c);
          d = ae(c);
          g = d.protocol;
          c = M.location.protocol;
          ("https:" == g || g == c || ("http:" != g ? 0 : "http:" == c)) &&
            B(d) &&
            (Id(d.url, void 0, e), $d.set(b, !0));
        }
      }
    },
    v = function (a, b) {
      var c = A.get(a) || [];
      c.push(b);
      A.set(a, c);
    },
    C = function (a, b) {
      Yd.set(a, b);
      b = A.get(a) || [];
      for (var c = 0; c < b.length; c++) b[c]();
      A.set(a, []);
    },
    B = function (a) {
      var b = ae(M.location.href);
      if (D(a.url, Ge(1)) || D(a.url, Ge(2))) return !0;
      if (a.query || 0 <= a.url.indexOf("?") || 0 <= a.path.indexOf("://"))
        return !1;
      if (a.host == b.host && a.port == b.port) return !0;
      b = "http:" == a.protocol ? 80 : 443;
      return "egamesconsult.com/wp-json/caos/v1/proxy" == a.host &&
        (a.port || b) == b &&
        D(a.path, "/plugins/")
        ? !0
        : !1;
    },
    ae = function (a) {
      function b(l) {
        var k = l.hostname || "",
          w = 0 <= k.indexOf("]");
        k = k.split(w ? "]" : ":")[0].toLowerCase();
        w && (k += "]");
        w = (l.protocol || "").toLowerCase();
        w = 1 * l.port || ("http:" == w ? 80 : "https:" == w ? 443 : "");
        l = l.pathname || "";
        D(l, "/") || (l = "/" + l);
        return [k, "" + w, l];
      }
      var c = M.createElement("a");
      c.href = M.location.href;
      var d = (c.protocol || "").toLowerCase(),
        e = b(c),
        g = c.search || "",
        ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
      D(a, "//")
        ? (a = d + a)
        : D(a, "/")
        ? (a = ca + a)
        : !a || D(a, "?")
        ? (a = ca + e[2] + (a || g))
        : 0 > a.split("/")[0].indexOf(":") &&
          (a = ca + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a);
      c.href = a;
      d = b(c);
      return {
        protocol: (c.protocol || "").toLowerCase(),
        host: d[0],
        port: d[1],
        path: d[2],
        query: c.search || "",
        url: a || "",
      };
    };
  var Z = {
    ga: function () {
      Z.f = [];
    },
  };
  Z.ga();
  Z.D = function (a) {
    var b = Z.J.apply(Z, arguments);
    b = Z.f.concat(b);
    for (
      Z.f = [];
      0 < b.length && !Z.v(b[0]) && !(b.shift(), 0 < Z.f.length);

    );
    Z.f = Z.f.concat(b);
  };
  Z.J = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++)
      try {
        var d = new sc(arguments[c]);
        d.g
          ? C(d.a[0], d.a[1])
          : (d.i && (d.ha = y(d.c, d.a[0], d.X, d.W)), b.push(d));
      } catch (e) {}
    return b;
  };
  Z.v = function (a) {
    try {
      if (a.u) a.u.call(O, N.j("t0"));
      else {
        var b = a.c == gb ? N : N.j(a.c);
        if (a.A) {
          if ("t0" == a.c && ((b = N.create.apply(N, a.a)), null === b))
            return !0;
        } else if (a.ba) N.remove(a.c);
        else if (b)
          if (a.i) {
            if ((a.ha && (a.ha = y(a.c, a.a[0], a.X, a.W)), !u(a.a[0], b, a.W)))
              return !0;
          } else if (a.K) {
            var c = a.methodName,
              d = a.a,
              e = b.plugins_.get(a.K);
            e[c].apply(e, d);
          } else b[a.methodName].apply(b, a.a);
      }
    } catch (g) {}
  };
  var N = function (a) {
    J(1);
    Z.D.apply(Z, [arguments]);
  };
  N.h = {};
  N.P = [];
  N.L = 0;
  N.ya = 0;
  N.answer = 42;
  var we = [Na, W, V];
  N.create = function (a) {
    var b = za(we, [].slice.call(arguments));
    b[V] || (b[V] = "t0");
    var c = "" + b[V];
    if (N.h[c]) return N.h[c];
    if (da(b)) return null;
    b = new pc(b);
    N.h[c] = b;
    N.P.push(b);
    c = qc().tracker_created;
    if (ea(c))
      try {
        c(b);
      } catch (d) {}
    return b;
  };
  N.remove = function (a) {
    for (var b = 0; b < N.P.length; b++)
      if (N.P[b].get(V) == a) {
        N.P.splice(b, 1);
        N.h[a] = null;
        break;
      }
  };
  N.j = function (a) {
    return N.h[a];
  };
  N.getAll = function () {
    return N.P.slice(0);
  };
  N.N = function () {
    "ga" != gb && J(49);
    var a = O[gb];
    if (!a || 42 != a.answer) {
      N.L = a && a.l;
      N.ya = 1 * new Date();
      N.loaded = !0;
      var b = (O[gb] = N);
      X("create", b, b.create);
      X("remove", b, b.remove);
      X("getByName", b, b.j, 5);
      X("getAll", b, b.getAll, 6);
      b = pc.prototype;
      X("get", b, b.get, 7);
      X("set", b, b.set, 4);
      X("send", b, b.send);
      X("requireSync", b, b.ma);
      b = Ya.prototype;
      X("get", b, b.get);
      X("set", b, b.set);
      if ("https:" != M.location.protocol && !Ba) {
        a: {
          b = M.getElementsByTagName("script");
          for (var c = 0; c < b.length && 100 > c; c++) {
            var d = b[c].src;
            if (d && 0 == d.indexOf(bd(!0) + "/analytics")) {
              b = !0;
              break a;
            }
          }
          b = !1;
        }
        b && (Ba = !0);
      }
      (O.gaplugins = O.gaplugins || {}).Linker = Dc;
      b = Dc.prototype;
      C("linker", Dc);
      X("decorate", b, b.ca, 20);
      X("autoLink", b, b.S, 25);
      X("passthrough", b, b.$, 25);
      C("displayfeatures", fd);
      C("adfeatures", fd);
      a = a && a.q;
      ka(a) ? Z.D.apply(N, a) : J(50);
    }
  };
  var Oe = N.N,
    Pe = O[gb];
  Pe && Pe.r ? Oe() : z(Oe);
  z(function () {
    Z.D(["provide", "render", ua]);
  });
})(window);
document.documentElement.className = document.documentElement.className.replace(
  "no-js",
  "js"
);
if ("undefined" != typeof localStorage) {
  var nsfwItemId = document.getElementsByName("g1:nsfw-item-id");
  (nsfwItemId =
    nsfwItemId.length > 0
      ? nsfwItemId[0].getAttribute("content")
      : "g1_nsfw_off"),
    (window.g1SwitchNSFW = function (e) {
      e
        ? (localStorage.setItem(nsfwItemId, 1),
          document.documentElement.classList.add("g1-nsfw-off"))
        : (localStorage.removeItem(nsfwItemId),
          document.documentElement.classList.remove("g1-nsfw-off"));
    });
  try {
    var nsfwmode = localStorage.getItem(nsfwItemId);
    window.g1SwitchNSFW(nsfwmode);
  } catch (e) {}
}
$MMT = window.$MMT || {};
$MMT.cmd = $MMT.cmd || [];
$MMT.cmd.push(function () {
  $MMT.display.slots.push(["5789087c-836e-48a7-8b1b-b342766c3ea8"]);
});
$MMT = window.$MMT || {};
$MMT.cmd = $MMT.cmd || [];
$MMT.cmd.push(function () {
  $MMT.display.slots.push(["47a65750-727b-4e4f-8cda-504e766f572c"]);
});
$MMT = window.$MMT || {};
$MMT.cmd = $MMT.cmd || [];
$MMT.cmd.push(function () {
  $MMT.display.slots.push(["cef3af45-b39c-4dc9-b236-0c2a146cb45c"]);
});
jQuery(document).ready(function ($) {
  $(".mpp-gutenberg-tab").on("click", function (e) {
    $(".mpp-author-tabs li").removeClass("active");
    $(this).addClass("active");
    var $tabs = $(".mpp-tab").removeClass("mpp-tab-active");
    var new_tab = $(this).data("tab");
    $("." + new_tab).addClass("mpp-tab-active");
  });
});
var wpcf7 = {
  apiSettings: {
    root: "https://egamesconsult.com/wp-json/contact-form-7/v1",
    namespace: "contact-form-7/v1",
  },
  cached: "1",
};
(function ($) {
  "use strict";
  if (typeof wpcf7 === "undefined" || wpcf7 === null) {
    return;
  }
  wpcf7 = $.extend({ cached: 0, inputs: [] }, wpcf7);
  $(function () {
    wpcf7.supportHtml5 = (function () {
      var features = {};
      var input = document.createElement("input");
      features.placeholder = "placeholder" in input;
      var inputTypes = ["email", "url", "tel", "number", "range", "date"];
      $.each(inputTypes, function (index, value) {
        input.setAttribute("type", value);
        features[value] = input.type !== "text";
      });
      return features;
    })();
    $("div.wpcf7 > form").each(function () {
      var $form = $(this);
      wpcf7.initForm($form);
      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });
  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };
  wpcf7.initForm = function (form) {
    var $form = $(form);
    wpcf7.setStatus($form, "init");
    $form.submit(function (event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $("[placeholder].placeheld", $form).each(function (i, n) {
          $(n).val("").removeClass("placeheld");
        });
      }
      if (typeof window.FormData === "function") {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });
    $(".wpcf7-submit", $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on("click", ".wpcf7-acceptance", function () {
      wpcf7.toggleSubmit($form);
    });
    $(".wpcf7-exclusive-checkbox", $form).on(
      "click",
      "input:checkbox",
      function () {
        var name = $(this).attr("name");
        $form
          .find('input:checkbox[name="' + name + '"]')
          .not(this)
          .prop("checked", !1);
      }
    );
    $(".wpcf7-list-item.has-free-text", $form).each(function () {
      var $freetext = $(":input.wpcf7-free-text", this);
      var $wrap = $(this).closest(".wpcf7-form-control");
      if ($(":checkbox, :radio", this).is(":checked")) {
        $freetext.prop("disabled", !1);
      } else {
        $freetext.prop("disabled", !0);
      }
      $wrap.on("change", ":checkbox, :radio", function () {
        var $cb = $(".has-free-text", $wrap).find(":checkbox, :radio");
        if ($cb.is(":checked")) {
          $freetext.prop("disabled", !1).focus();
        } else {
          $freetext.prop("disabled", !0);
        }
      });
    });
    if (!wpcf7.supportHtml5.placeholder) {
      $("[placeholder]", $form).each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).addClass("placeheld");
        $(this).focus(function () {
          if ($(this).hasClass("placeheld")) {
            $(this).val("").removeClass("placeheld");
          }
        });
        $(this).blur(function () {
          if ("" === $(this).val()) {
            $(this).val($(this).attr("placeholder"));
            $(this).addClass("placeheld");
          }
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: "yy-mm-dd",
          minDate: new Date($(this).attr("min")),
          maxDate: new Date($(this).attr("max")),
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr("min"),
          max: $(this).attr("max"),
          step: $(this).attr("step"),
        });
      });
    }
    wpcf7.resetCounter($form);
    $form.on("change", ".wpcf7-validates-as-url", function () {
      var val = $.trim($(this).val());
      if (
        val &&
        !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
        -1 !== val.indexOf(".")
      ) {
        val = val.replace(/^\/+/, "");
        val = "http://" + val;
      }
      $(this).val(val);
    });
  };
  wpcf7.submit = function (form) {
    if (typeof window.FormData !== "function") {
      return;
    }
    var $form = $(form);
    $(".ajax-loader", $form).addClass("is-active");
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest("div.wpcf7").attr("id"),
      status: "init",
      inputs: [],
      formData: formData,
    };
    $.each($form.serializeArray(), function (i, field) {
      if ("_wpcf7" == field.name) {
        detail.contactFormId = field.value;
      } else if ("_wpcf7_version" == field.name) {
        detail.pluginVersion = field.value;
      } else if ("_wpcf7_locale" == field.name) {
        detail.contactFormLocale = field.value;
      } else if ("_wpcf7_unit_tag" == field.name) {
        detail.unitTag = field.value;
      } else if ("_wpcf7_container_post" == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_/)) {
      } else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest("div.wpcf7"), "beforesubmit", detail);
    var ajaxSuccess = function (data, status, xhr, $form) {
      detail.id = $(data.into).attr("id");
      detail.status = data.status;
      detail.apiResponse = data;
      switch (data.status) {
        case "init":
          wpcf7.setStatus($form, "init");
          break;
        case "validation_failed":
          $.each(data.invalid_fields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $(".wpcf7-form-control", this).addClass("wpcf7-not-valid");
              $(".wpcf7-form-control", this).attr(
                "aria-describedby",
                n.error_id
              );
              $("[aria-invalid]", this).attr("aria-invalid", "true");
            });
          });
          wpcf7.setStatus($form, "invalid");
          wpcf7.triggerEvent(data.into, "invalid", detail);
          break;
        case "acceptance_missing":
          wpcf7.setStatus($form, "unaccepted");
          wpcf7.triggerEvent(data.into, "unaccepted", detail);
          break;
        case "spam":
          wpcf7.setStatus($form, "spam");
          wpcf7.triggerEvent(data.into, "spam", detail);
          break;
        case "aborted":
          wpcf7.setStatus($form, "aborted");
          wpcf7.triggerEvent(data.into, "aborted", detail);
          break;
        case "mail_sent":
          wpcf7.setStatus($form, "sent");
          wpcf7.triggerEvent(data.into, "mailsent", detail);
          break;
        case "mail_failed":
          wpcf7.setStatus($form, "failed");
          wpcf7.triggerEvent(data.into, "mailfailed", detail);
          break;
        default:
          wpcf7.setStatus(
            $form,
            "custom-" + data.status.replace(/[^0-9a-z]+/i, "-")
          );
      }
      wpcf7.refill($form, data);
      wpcf7.triggerEvent(data.into, "submit", detail);
      if ("mail_sent" == data.status) {
        $form.each(function () {
          this.reset();
        });
        wpcf7.toggleSubmit($form);
        wpcf7.resetCounter($form);
      }
      if (!wpcf7.supportHtml5.placeholder) {
        $form.find("[placeholder].placeheld").each(function (i, n) {
          $(n).val($(n).attr("placeholder"));
        });
      }
      $(".wpcf7-response-output", $form)
        .html("")
        .append(data.message)
        .slideDown("fast");
      $(".screen-reader-response", $form.closest(".wpcf7")).each(function () {
        var $response = $(this);
        $('[role="status"]', $response).html(data.message);
        if (data.invalid_fields) {
          $.each(data.invalid_fields, function (i, n) {
            if (n.idref) {
              var $li = $("<li></li>").append(
                $("<a></a>")
                  .attr("href", "#" + n.idref)
                  .append(n.message)
              );
            } else {
              var $li = $("<li></li>").append(n.message);
            }
            $li.attr("id", n.error_id);
            $("ul", $response).append($li);
          });
        }
      });
      if (data.posted_data_hash) {
        $form
          .find('input[name="_wpcf7_posted_data_hash"]')
          .first()
          .val(data.posted_data_hash);
      }
    };
    $.ajax({
      type: "POST",
      url: wpcf7.apiSettings.getRoute(
        "/contact-forms/" + wpcf7.getId($form) + "/feedback"
      ),
      data: formData,
      dataType: "json",
      processData: !1,
      contentType: !1,
    })
      .done(function (data, status, xhr) {
        ajaxSuccess(data, status, xhr, $form);
        $(".ajax-loader", $form).removeClass("is-active");
      })
      .fail(function (xhr, status, error) {
        var $e = $('<div class="ajax-error"></div>').text(error.message);
        $form.after($e);
      });
  };
  wpcf7.triggerEvent = function (target, name, detail) {
    var event = new CustomEvent("wpcf7" + name, {
      bubbles: !0,
      detail: detail,
    });
    $(target).get(0).dispatchEvent(event);
  };
  wpcf7.setStatus = function (form, status) {
    var $form = $(form);
    var prevStatus = $form.attr("data-status");
    $form.data("status", status);
    $form.addClass(status);
    $form.attr("data-status", status);
    if (prevStatus && prevStatus !== status) {
      $form.removeClass(prevStatus);
    }
  };
  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $("input:submit", $form);
    if (typeof state !== "undefined") {
      $submit.prop("disabled", !state);
      return;
    }
    if ($form.hasClass("wpcf7-acceptance-as-validation")) {
      return;
    }
    $submit.prop("disabled", !1);
    $(".wpcf7-acceptance", $form).each(function () {
      var $span = $(this);
      var $input = $("input:checkbox", $span);
      if (!$span.hasClass("optional")) {
        if (
          ($span.hasClass("invert") && $input.is(":checked")) ||
          (!$span.hasClass("invert") && !$input.is(":checked"))
        ) {
          $submit.prop("disabled", !0);
          return !1;
        }
      }
    });
  };
  wpcf7.resetCounter = function (form) {
    var $form = $(form);
    $(".wpcf7-character-count", $form).each(function () {
      var $count = $(this);
      var name = $count.attr("data-target-name");
      var down = $count.hasClass("down");
      var starting = parseInt($count.attr("data-starting-value"), 10);
      var maximum = parseInt($count.attr("data-maximum-value"), 10);
      var minimum = parseInt($count.attr("data-minimum-value"), 10);
      var updateCount = function (target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr("data-current-value", count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass("too-long");
        } else {
          $count.removeClass("too-long");
        }
        if (minimum && length < minimum) {
          $count.addClass("too-short");
        } else {
          $count.removeClass("too-short");
        }
      };
      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);
        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });
  };
  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $(".wpcf7-not-valid-tip", $target).remove();
    $("<span></span>")
      .attr({ class: "wpcf7-not-valid-tip", "aria-hidden": "true" })
      .text(message)
      .appendTo($target);
    if ($target.is(".use-floating-validation-tip *")) {
      var fadeOut = function (target) {
        $(target)
          .not(":hidden")
          .animate({ opacity: 0 }, "fast", function () {
            $(this).css({ "z-index": -100 });
          });
      };
      $target.on("mouseover", ".wpcf7-not-valid-tip", function () {
        fadeOut(this);
      });
      $target.on("focus", ":input", function () {
        fadeOut($(".wpcf7-not-valid-tip", $target));
      });
    }
  };
  wpcf7.refill = function (form, data) {
    var $form = $(form);
    var refillCaptcha = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form.find("img.wpcf7-captcha-" + i).attr("src", n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form
          .find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]')
          .attr("value", match[1]);
      });
    };
    var refillQuiz = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form
          .find(':input[name="' + i + '"]')
          .siblings("span.wpcf7-quiz-label")
          .text(n[0]);
        $form
          .find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]')
          .attr("value", n[1]);
      });
    };
    if (typeof data === "undefined") {
      $.ajax({
        type: "GET",
        url: wpcf7.apiSettings.getRoute(
          "/contact-forms/" + wpcf7.getId($form) + "/refill"
        ),
        beforeSend: function (xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();
          if (nonce) {
            xhr.setRequestHeader("X-WP-Nonce", nonce);
          }
        },
        dataType: "json",
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }
        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }
      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };
  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.siblings(".screen-reader-response").each(function () {
      $('[role="status"]', this).html("");
      $("ul", this).html("");
    });
    $(".wpcf7-not-valid-tip", $form).remove();
    $("[aria-invalid]", $form).attr("aria-invalid", "false");
    $(".wpcf7-form-control", $form).removeClass("wpcf7-not-valid");
    $(".wpcf7-response-output", $form).hide().empty();
  };
  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(
      wpcf7.apiSettings.namespace,
      wpcf7.apiSettings.namespace + path
    );
    return url;
  };
})(jQuery);
(function () {
  if (typeof window.CustomEvent === "function") return !1;
  function CustomEvent(event, params) {
    params = params || { bubbles: !1, cancelable: !1, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
"undefined" == typeof window.snax_collections && (window.snax_collections = {}),
  (function (a, b) {
    "use strict";
    b.AddPopup = function () {
      var c,
        d,
        e = {},
        f = {},
        g = {},
        h = {
          popup: "#snax-popup-add-to-collection",
          popupInner: ".snax-add-to-collection",
          leading: ".snax-collections-leading",
          searchInput: "input[name=snax-collection-search]",
          searchSubmit: "input[name=snax-collection-save]",
          searchForm: "form.snax-form-collection-search",
          items: ".snax-collections-items",
          item: ".snax-collections-item",
          itemTitle: ".snax-collection-title",
          itemTitleLink: ".snax-collection-title > a",
          publicItemTpl: ".snax-collections-item > .snax-collection-public",
          privateItemTpl: ".snax-collections-item > .snax-collection-private",
        },
        i = { popupLoading: "snax-add-to-collection-loading" };
      (e.open = function (a, b) {
        if (
          ((g = { postId: a, nonce: b }), "function" != typeof snax.openPopup)
        )
          throw new Error("openPopup() not defined!");
        d.find(h.searchInput).val(""), snax.openPopup(d);
        var c = d.find(h.popupInner),
          e = d.find(h.leading);
        c.addClass(i.popupLoading),
          e.hide(),
          j(function (a, b) {
            c.removeClass(i.popupLoading), 0 === b && e.show();
          });
      }),
        (e.close = function () {
          snax.closePopup();
        });
      var j = function (b) {
          var e = a.ajax({
            type: "GET",
            url: c.ajax_url,
            dataType: "json",
            data: { action: "snax_get_user_collections" },
          });
          e.done(function (a) {
            var c = "success" === a.status;
            if (c) {
              var e = d.find(h.items);
              e.empty();
              for (var g in a.args.list) {
                var i = a.args.list[g],
                  j = f[i.visibility].clone(),
                  k =
                    '<a href="#" data-snax-collection="' +
                    i.ID +
                    '">' +
                    i.post_title +
                    "</a>";
                j.find(h.itemTitle).html(k), e.append(j);
              }
            }
            "function" == typeof b && b(c, a.args.list.length);
          });
        },
        k = function (b, d) {
          var e = a.ajax({
            type: "POST",
            url: c.ajax_url,
            dataType: "json",
            data: {
              action: "snax_save_collection",
              security: g.nonce,
              snax_title: b,
            },
          });
          e.done(function (a) {
            var b = "success" === a.status;
            d(!!b && a.args.collection_id);
          });
        },
        l = function () {
          a(h.searchForm, d).on("submit", function (c) {
            c.preventDefault();
            var d = a(this).find(h.searchInput).val();
            e.close(),
              k(d, function (a) {
                if (!1 === a) throw new Error("Collection not saved!");
                b.addToCollection(a, g.postId, g.nonce);
              });
          });
        },
        m = function () {
          d.on("click", h.item, function (c) {
            c.preventDefault();
            var d = a(this).find("a").data("snax-collection");
            e.close(), b.addToCollection(d, g.postId, g.nonce);
          });
        },
        n = function () {
          var b = function (b) {
            var c = d.find(h.itemTitleLink);
            d.find(h.item).show(),
              0 !== b.length &&
                ((b = b.toLowerCase()),
                c.each(function () {
                  var c = a(this).text().toLowerCase();
                  -1 === c.indexOf(b) && a(this).parents(h.item).hide();
                }));
          };
          d.find(h.searchInput).on("keyup", function () {
            var c = a(this).val(),
              e = d.find(h.searchSubmit);
            c.length > 0
              ? e.removeAttr("disabled")
              : e.attr("disabled", "disabled"),
              b(c);
          });
        },
        o = function () {
          l(), m(), n();
        },
        p = function () {
          if (((d = a(h.popup)), 0 === d.length))
            throw new Error("Add collection popup not found!");
          return (
            (c = a.parseJSON(snax_collections_js_config)),
            (f.public = d.find(h.publicItemTpl).parent().detach()),
            (f.private = d.find(h.privateItemTpl).parent().detach()),
            o(),
            e
          );
        };
      return p();
    };
  })(jQuery, snax_collections),
  (function (a, b) {
    "use strict";
    var c,
      d,
      e = {
        postContainer: ".snax-post-container",
        collectionItems: ".snax-collection-items",
        collectionItem: ".snax-collection-item",
        actions: ".snax-collection-actions",
        addAction: ".snax-action-add-to-collection",
        clearAllAction: ".snax-collection-action-clear-all",
        removeCollectionAction: ".snax-collection-action-delete",
        removePostAction: ".snax-collection-action-remove-post",
        itemCount: ".snax-collection-item-count",
        featuredMedia:
          ".snax-collection-essentials .entry-featured-media .g1-frame-inner",
        meta: ".snax-collection-essentials .snax-collection-meta",
        editForm: "form.snax-edit-collection",
        cancelAction: ".snax-edit-collection-actions > a",
        mediaForm: ".snax-media-upload-form",
        titleField: "input[name=snax-title]",
        descriptionField: "textarea[name=snax-description]",
        visibilityField: "input[name=snax-visibility]",
        featuredMediaField: "input[name=snax-featured-image]",
      },
      f = {
        itemAdded: "snax-collection-item-added",
        itemAdding: "snax-collection-item-adding",
        itemRemoved: "snax-collection-item-removed",
        itemRemoving: "snax-collection-item-removing",
      };
    (b.addToCollection = function (b, d, e, f) {
      var g = a.ajax({
        type: "POST",
        url: c.ajax_url,
        dataType: "json",
        data: {
          action: "snax_add_to_collection",
          security: e,
          snax_collection: b,
          snax_post_id: d,
        },
      });
      g.done(function (a) {
        var b = "success" === a.status;
        b && snax.notifications && snax.notifications.add(a.args.html),
          "function" == typeof f && f(b);
      });
    }),
      (b.removeCollection = function (b, d, e) {
        var f = a.ajax({
          type: "POST",
          url: c.ajax_url,
          dataType: "json",
          data: {
            action: "snax_remove_collection",
            security: d,
            snax_collection_id: b,
          },
        });
        f.done(function (a) {
          var b = "success" === a.status;
          e(b);
        });
      }),
      (b.removePost = function (b, d, e, f) {
        var g = a.ajax({
          type: "POST",
          url: c.ajax_url,
          dataType: "json",
          data: {
            action: "snax_remove_post_from_collection",
            security: e,
            snax_post_id: b,
            snax_collection_id: d,
          },
        });
        g.done(function (a) {
          var b = "success" === a.status;
          f(b);
        });
      }),
      (b.clearAll = function (b, d) {
        var e = a.ajax({
          type: "POST",
          url: c.ajax_url,
          dataType: "json",
          data: {
            action: "snax_remove_all_from_collection",
            security: d,
            snax_collection_id: b,
          },
        });
        e.done(function (a) {
          var b = "success" === a.status;
          b && window.location.reload();
        });
      }),
      (b.updateCollectionFeaturedImage = function (b) {
        var d = a.ajax({
          type: "GET",
          url: c.ajax_url,
          dataType: "json",
          data: {
            action: "snax_get_collection_featured_media",
            snax_collection_id: b,
          },
        });
        d.done(function (b) {
          var c = "success" === b.status;
          if (c) {
            var d = a(e.featuredMedia),
              f = d.find("img"),
              g = a(b.args.html);
            f.attr("src") !== g.attr("src") && d.html(g);
          }
        });
      }),
      (b.updateCollectionMeta = function (b) {
        var d = a.ajax({
          type: "GET",
          url: c.ajax_url,
          dataType: "json",
          data: { action: "snax_get_collection_meta", snax_collection_id: b },
        });
        d.done(function (b) {
          var c = "success" === b.status;
          c && a(e.meta).replaceWith(b.args.html);
        });
      }),
      (b.saveCollection = function (b, d, e) {
        var f = a.ajax({
          type: "POST",
          url: c.ajax_url,
          dataType: "json",
          data: {
            action: "snax_save_collection",
            security: c.nonce,
            snax_collection_id: b,
            snax_title: d.title || "",
            snax_description: d.description || "",
            snax_visibility: d.visibility || "private",
            snax_featured_media: d.featuredMedia || "",
          },
        });
        f.done(function (a) {
          var b = "success" === a.status;
          e && e(b, a.args.collection_url);
        });
      }),
      (b.addToCollectionEvent = function () {
        a("body").on("click", e.addAction, function () {
          var e = a(this),
            g = parseInt(c.user_id, 10);
          if (!g) return void (window.location.href = e.data("snax-redirect"));
          var h = e.data("snax-collection"),
            i = e.data("snax-post"),
            j = e.data("snax-nonce");
          h &&
            i &&
            j &&
            ("custom" === h
              ? (d || (d = b.AddPopup()), d.open(i, j))
              : (e.addClass(f.itemAdding),
                b.addToCollection(h, i, j, function (a) {
                  a && (e.addClass(f.itemAdded), e.prop("disabled", !0));
                })));
        });
      }),
      (b.removeCollectionEvent = function () {
        a("body").on("click", e.removeCollectionAction, function () {
          if (confirm(c.i18n.are_you_sure_remove)) {
            var d = a(this),
              f = parseInt(c.user_id, 10);
            if (0 !== f) {
              var g = d.parents(e.actions),
                h = g.data("snax-collection"),
                i = g.data("snax-nonce");
              h &&
                i &&
                (snax.notifications && snax.notifications.add(c.i18n.removed),
                b.removeCollection(h, i, function (a) {
                  a && (window.location.href = c.home_url);
                }));
            }
          }
        });
      }),
      (b.removeFromCollectionEvent = function () {
        a("body").on("click", e.removePostAction, function () {
          var d = a(this),
            g = parseInt(c.user_id, 10);
          if (0 !== g) {
            var h = d.data("snax-post"),
              i = d.parents(e.collectionItems).data("snax-collection"),
              j = d.data("snax-nonce");
            if (h && i && j) {
              var k = d.parents(e.collectionItem);
              k.addClass(f.itemRemoving),
                b.removePost(h, i, j, function (a) {
                  a &&
                    (k.addClass(f.itemRemoved),
                    k.slideToggle(375),
                    setTimeout(function () {
                      var a = d.parents(e.postContainer).find(e.itemCount);
                      a.text(parseInt(a.text(), 10) - 1);
                    }, 375),
                    b.updateCollectionFeaturedImage(i),
                    b.updateCollectionMeta(i));
                });
            }
          }
        });
      }),
      (b.clearAllEvent = function () {
        a("body").on("click", e.clearAllAction, function () {
          if (confirm(c.i18n.are_you_sure_clear_all)) {
            var d = parseInt(c.user_id, 10);
            if (0 !== d) {
              var f = a(this).parents(e.actions),
                g = f.data("snax-collection"),
                h = f.data("snax-nonce");
              g &&
                h &&
                (snax.notifications &&
                  snax.notifications.add(c.i18n.removing_items),
                b.clearAll(g, h));
            }
          }
        });
      }),
      (b.clearPreviewEvent = function () {
        var b = a(e.editForm);
        b.find("a.snax-media-action-delete-featured")
          .parents(".snax-object-actions")
          .remove();
        var c = b
            .find("a.snax-delete-collection-image")
            .parents(".snax-object-actions")
            .hide(),
          d = b.find("#snax-featured-image");
        if (d.length > 0) {
          var f = c.clone();
          f.insertAfter(d.find(".snax-object-container")).show(),
            f.on("click", "a.snax-delete-collection-image", function (c) {
              c.preventDefault(),
                b.find(e.featuredMediaField).val(""),
                a("#snax-featured-image").empty(),
                b
                  .find(".snax-tab-content-featured-image")
                  .addClass("snax-tab-content-visible")
                  .removeClass("snax-tab-content-hidden");
            });
        }
      }),
      (b.editFormEvents = function () {
        var c = a(e.editForm),
          d = c.find(e.mediaForm);
        d.on("snaxFileUploaded", function (a, b) {
          c.find(e.featuredMediaField).val(b);
        }),
          b.clearPreviewEvent(),
          d.on("snaxPreviewLoaded", function (a, c) {
            b.clearPreviewEvent();
          }),
          c.on("submit", function (a) {
            a.preventDefault();
            var d = c.data("snax-collection"),
              f = c.find(e.titleField).val();
            if (0 === f.length) return void alert("Please fill in the title");
            var g = c.find(e.descriptionField).val(),
              h = c.find(e.visibilityField + ":checked").val(),
              i = c.find(e.featuredMediaField).val(),
              j = { title: f, description: g, visibility: h, featuredMedia: i },
              k = c.find("input[type=submit]");
            k.attr("disabled", "disabled"),
              b.saveCollection(d, j, function (a, b) {
                a ? (window.location.href = b) : k.removeAttr("disabled");
              });
          }),
          c.on("click", e.cancelAction, function () {
            a(this).css("pointerEvents", "none");
          });
      }),
      (b.bindEvents = function () {
        b.addToCollectionEvent(),
          b.removeCollectionEvent(),
          b.removeFromCollectionEvent(),
          b.clearAllEvent(),
          b.editFormEvents();
      }),
      (b.storeInHistory = function (b) {
        c.user_id <= 0 ||
          a.ajax({
            type: "POST",
            url: c.ajax_url,
            dataType: "json",
            data: {
              action: "snax_add_to_collection",
              security: c.nonce,
              snax_post_id: b,
              snax_collection: "history",
            },
          });
      }),
      (b.init = function () {
        (c = a.parseJSON(snax_collections_js_config)),
          b.bindEvents(),
          "on" === c.history && c.post_id > 0 && b.storeInHistory(c.post_id);
      }),
      a(document).ready(function () {
        b.init();
      });
  })(jQuery, snax_collections);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.5.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && typeof module.exports === "object") {
    factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.timeago = function (timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;
  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowPast: !0,
      allowFuture: !1,
      localeTitle: !1,
      cutoff: 0,
      autoDispose: !0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: "any moment now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: [],
      },
    },
    inWords: function (distanceMillis) {
      if (!this.settings.allowPast && !this.settings.allowFuture) {
        throw "timeago allowPast and allowFuture settings can not both be set to false.";
      }
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }
      if (!this.settings.allowPast && distanceMillis >= 0) {
        return this.settings.strings.inPast;
      }
      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;
      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction)
          ? stringOrFunction(number, distanceMillis)
          : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }
      var words =
        (seconds < 45 && substitute($l.seconds, Math.round(seconds))) ||
        (seconds < 90 && substitute($l.minute, 1)) ||
        (minutes < 45 && substitute($l.minutes, Math.round(minutes))) ||
        (minutes < 90 && substitute($l.hour, 1)) ||
        (hours < 24 && substitute($l.hours, Math.round(hours))) ||
        (hours < 42 && substitute($l.day, 1)) ||
        (days < 30 && substitute($l.days, Math.round(days))) ||
        (days < 45 && substitute($l.month, 1)) ||
        (days < 365 && substitute($l.months, Math.round(days / 30))) ||
        (years < 1.5 && substitute($l.year, 1)) ||
        substitute($l.years, Math.round(years));
      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) {
        separator = " ";
      }
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function (iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/, "");
      s = s.replace(/-/, "/").replace(/-/, "/");
      s = s.replace(/T/, " ").replace(/Z/, " UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
      s = s.replace(/([\+\-]\d\d)$/, " $100");
      return new Date(s);
    },
    datetime: function (elem) {
      var iso8601 = $t.isTime(elem)
        ? $(elem).attr("datetime")
        : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function (elem) {
      return $(elem).get(0).tagName.toLowerCase() === "time";
    },
  });
  var functions = {
    init: function () {
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function (timestamp) {
      var date = timestamp instanceof Date ? timestamp : $t.parse(timestamp);
      $(this).data("timeago", { datetime: date });
      if ($t.settings.localeTitle) $(this).attr("title", date.toLocaleString());
      refresh.apply(this);
    },
    updateFromDOM: function () {
      $(this).data("timeago", {
        datetime: $t.parse(
          $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title")
        ),
      });
      refresh.apply(this);
    },
    dispose: function () {
      if (this._timeagoInterval) {
        window.clearInterval(this._timeagoInterval);
        this._timeagoInterval = null;
      }
    },
  };
  $.fn.timeago = function (action, options) {
    var fn = action ? functions[action] : functions.init;
    if (!fn) {
      throw new Error("Unknown function name '" + action + "' for timeago");
    }
    this.each(function () {
      fn.call(this, options);
    });
    return this;
  };
  function refresh() {
    var $s = $t.settings;
    if ($s.autoDispose && !$.contains(document.documentElement, this)) {
      $(this).timeago("dispose");
      return this;
    }
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      if ($s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
        $(this).text(inWords(data.datetime));
      }
    }
    return this;
  }
  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if ($t.settings.localeTitle) {
        element.attr(
          "title",
          element.data("timeago").datetime.toLocaleString()
        );
      } else if (
        text.length > 0 &&
        !($t.isTime(element) && element.attr("title"))
      ) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }
  function inWords(date) {
    return $t.inWords(distance(date));
  }
  function distance(date) {
    return new Date().getTime() - date.getTime();
  }
  document.createElement("abbr");
  document.createElement("time");
});
jQuery.timeago.settings.strings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: "ago",
  suffixFromNow: "from now",
  seconds: "less than a minute",
  minute: "about a minute",
  minutes: "%d minutes",
  hour: "about an hour",
  hours: "about %d hours",
  day: "a day",
  days: "%d days",
  month: "about a month",
  months: "%d months",
  year: "about a year",
  years: "%d years",
  wordSeparator: " ",
  numbers: [],
};
var snax_front_config =
  '{"ajax_url":"https:\\/\\/egamesconsult.com\\/wp-admin\\/admin-ajax.php","site_url":"https:\\/\\/egamesconsult.com","autosave_interval":60,"use_login_recaptcha":false,"recaptcha_api_url":"https:\\/\\/www.google.com\\/recaptcha\\/api.js","recaptcha_version":"20","recaptcha_site_key":"","enable_login_popup":true,"login_url":"https:\\/\\/egamesconsult.com\\/?snax_login_popup","login_popup_url_var":"snax_login_popup","logged_in":false,"login_success_var":"snax_login_success","delete_status_var":"snax_delete_status","i18n":{"are_you_sure":"Are you sure?","recaptcha_invalid":"<strong>ERROR<\\/strong>: The reCAPTCHA you entered is incorrect.","passwords_dont_match":"Passwords don\'t match.","link_invalid":"Your password reset link appears to be invalid or expired.","password_set":"New password has been set","duplicate_comment":"Duplicate comment detected; it looks as though you&#8217;ve already said that!","comment_fail":"Comment Submission Failure","see_all_replies":"See all replies","user_is_logging":"Please wait. You are logging in&hellip;","points_singular_tpl":"<strong>%d<\\/strong> point","points_plural_tpl":"<strong>%d<\\/strong> points","popup_close_label":"Close (Esc)"}}';
if (typeof window.snax === "undefined") {
  window.snax = {};
}
(function ($, ctx) {
  "use strict";
  ctx.config = $.parseJSON(window.snax_front_config);
  if (!ctx.config) {
    throw "Snax Error: Global config is not defined!";
  }
  ctx.log = function (msg) {
    if (typeof console !== "undefined") {
      console.log(msg);
    }
  };
  ctx.inDebugMode = function () {
    return (
      typeof ctx.config.debug_mode !== "undefined" && ctx.config.debug_mode
    );
  };
  ctx.isTouchDevice = function () {
    return "ontouchstart" in window || navigator.msMaxTouchPoints;
  };
  ctx.createCookie = function (name, value, hours) {
    var expires;
    if (hours) {
      var date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    } else {
      expires = "";
    }
    document.cookie = name.concat("=", value, expires, "; path=/");
  };
  ctx.readCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i += 1) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  ctx.deleteCookie = function (name) {
    ctx.createCookie(name, "", -1);
  };
  ctx.getUrlParameter = function (param) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === param) {
        return sParameterName[1] === undefined ? !0 : sParameterName[1];
      }
    }
  };
})(jQuery, snax);
(function ($, ctx) {
  ctx.MediaItem = function (data) {
    var instance = {};
    function init() {
      data = data || {};
      data = $.extend(
        {
          type: "image",
          title: "",
          source: "",
          refLink: "",
          description: "",
          mediaId: "",
          postId: 0,
          authorId: "",
          status: "",
          parentFormat: "list",
          origin: "post",
          legal: !1,
          memeTemplate: "",
        },
        data
      );
      return instance;
    }
    instance.save = function (callback) {
      callback = callback || function () {};
      var ajaxData = {
        action: "snax_add_media_item",
        security: $("input[name=snax-add-media-item-nonce]").val(),
        snax_title: data.title,
        snax_source: data.source,
        snax_ref_link: data.refLink,
        snax_description: data.description,
        snax_media_id: data.mediaId,
        snax_post_id: data.postId,
        snax_author_id: data.authorId,
        snax_status: data.status,
        snax_parent_format: data.parentFormat,
        snax_origin: data.origin,
        snax_legal: data.legal ? "accepted" : "",
        snax_type: data.type,
        snax_meme_template: data.memeTemplate,
      };
      if (typeof ctx.saveItemImageDataFilter === "function") {
        ajaxData = ctx.saveItemImageDataFilter(ajaxData, data);
      }
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: ajaxData,
      });
      xhr.done(function (res) {
        callback(res);
      });
    };
    return init();
  };
  ctx.EmbedItem = function (data) {
    var instance = {};
    function init() {
      data = data || {};
      data = $.extend(
        {
          type: "embed",
          title: "",
          source: "",
          refLink: "",
          description: "",
          embedCode: "",
          postId: 0,
          authorId: "",
          status: "",
          parentFormat: "list",
          origin: "post",
          legal: !1,
        },
        data
      );
      return instance;
    }
    instance.save = function (callback) {
      callback = callback || function () {};
      var ajaxData = {
        action: "snax_add_embed_item",
        security: $("input[name=snax-add-embed-item-nonce]").val(),
        snax_title: data.title,
        snax_source: data.source,
        snax_ref_link: data.refLink,
        snax_embed_code: data.embedCode,
        snax_description: data.description,
        snax_post_id: data.postId,
        snax_author_id: data.authorId,
        snax_status: data.status,
        snax_parent_format: data.parentFormat,
        snax_origin: data.origin,
        snax_legal: data.legal ? "accepted" : "",
      };
      if (typeof ctx.saveItemEmbedDataFilter === "function") {
        ajaxData = ctx.saveItemEmbedDataFilter(ajaxData, data);
      }
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: ajaxData,
      });
      xhr.done(function (res) {
        callback(res);
      });
    };
    return init();
  };
  ctx.TextItem = function (data) {
    var instance = {};
    function init() {
      data = data || {};
      data = $.extend(
        {
          type: "text",
          title: "",
          refLink: "",
          description: "",
          postId: 0,
          authorId: "",
          status: "",
          parentFormat: "list",
          origin: "post",
          legal: !1,
        },
        data
      );
      return instance;
    }
    instance.save = function (callback) {
      callback = callback || function () {};
      var ajaxData = {
        action: "snax_add_text_item",
        security: $("input[name=snax-add-text-item-nonce]").val(),
        snax_title: data.title,
        snax_ref_link: data.refLink,
        snax_description: data.description,
        snax_post_id: data.postId,
        snax_author_id: data.authorId,
        snax_status: data.status,
        snax_parent_format: data.parentFormat,
        snax_origin: data.origin,
        snax_legal: data.legal ? "accepted" : "",
      };
      if (typeof ctx.saveItemTextDataFilter === "function") {
        ajaxData = ctx.saveItemTextDataFilter(ajaxData, data);
      }
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: ajaxData,
      });
      xhr.done(function (res) {
        callback(res);
      });
    };
    return init();
  };
  ctx.deleteItem = function ($link, callback) {
    callback = callback || function () {};
    var nonce = $.trim($link.attr("data-snax-nonce"));
    var itemId = parseInt($link.attr("data-snax-item-id"), 10);
    var userId = snax.currentUserId;
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_delete_item",
        security: nonce,
        snax_item_id: itemId,
        snax_user_id: userId,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.setItemAsFeatured = function ($link, callback) {
    callback = callback || function () {};
    var nonce = $.trim($link.attr("data-snax-nonce"));
    var itemId = parseInt($link.attr("data-snax-item-id"), 10);
    var userId = snax.currentUserId;
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_set_item_as_featured",
        security: nonce,
        snax_item_id: itemId,
        snax_user_id: userId,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.updateItems = function (items, callback) {
    callback = callback || function () {};
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_update_items",
        security: $("input[name=snax-frontend-submission-nonce]").val(),
        snax_items: items,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.deletePost = function ($link, callback) {
    callback = callback || function () {};
    var nonce = $.trim($link.attr("data-snax-nonce"));
    var postId = parseInt($link.attr("data-snax-post-id"), 10);
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_delete_post",
        security: nonce,
        snax_post_id: postId,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.loginRequired = function (blocked) {
    $("body").trigger("snaxLoginRequired", [blocked]);
  };
  ctx.getMediaHtmlTag = function (data, callback) {
    var xhr = $.ajax({
      type: "GET",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_load_media_tpl",
        snax_media_id: data.mediaId,
        snax_post_id: data.postId,
        snax_type: data.type,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.deleteMedia = function (data, callback) {
    callback = callback || function () {};
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_delete_media",
        security: $("input[name=snax-delete-media-nonce]").val(),
        snax_media_id: data.mediaId,
        snax_author_id: data.authorId,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.updateMediaMetadata = function (data, callback) {
    callback = callback || function () {};
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_update_media_meta",
        security: $("input[name=snax-delete-media-nonce]").val(),
        snax_media_id: data.mediaId,
        snax_parent_format: data.parentFormat,
      },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.getEmbedPreview = function (embed_code, callback) {
    var xhr = $.ajax({
      type: "POST",
      url: ctx.config.ajax_url,
      dataType: "json",
      data: { action: "snax_load_embed_tpl", snax_embed_code: embed_code },
    });
    xhr.done(function (res) {
      callback(res);
    });
  };
  ctx.displayFeedback = function (type) {
    var feedbackTypeClass = "snax-feedback-" + type;
    var $feedback = $("." + feedbackTypeClass);
    if ($feedback.length === 0) {
      return;
    }
    ctx.hideFeedback();
    $feedback.toggleClass("snax-feedback-off snax-feedback-on");
    $("body").addClass("snax-show-feedback");
  };
  ctx.hideFeedback = function () {
    $(".snax-feedback-on").toggleClass("snax-feedback-on snax-feedback-off");
    $("body").removeClass("snax-show-feedback");
  };
  ctx.isValidUrl = function (url) {
    return url.match(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    );
  };
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = { feedbackCloseButton: ".snax-close-button" };
  $(document).ready(function () {
    $(selectors.feedbackCloseButton).on("click", function (e) {
      e.preventDefault();
      snax.hideFeedback();
    });
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.resetFacebookSDK = function () {
    $("script#facebook-jssdk").remove();
    $("#fb-root").remove();
    if (window.FB) {
      delete window.FB;
    }
  };
  $("body").on("snaxBeforeNewContentReady", function (e, $newContent) {
    if ($newContent.find(".fb-video")) {
      ctx.resetFacebookSDK();
    }
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    form: ".snax-media-upload-form",
    pluploadForm: ".snax-plupload-upload-ui",
    loadFormButton: ".snax-load-form-button",
  };
  ctx.mediaUploadForm = function () {
    if (typeof snaxPlupload === "undefined") {
      return;
    }
    $(selectors.form).each(function () {
      snaxPlupload.initUploader($(this));
    });
    $(selectors.loadFormButton).on("click", function () {
      var $link = $(this);
      var $form = $link.parents(selectors.form);
      var formClass = $link.attr("data-snax-rel-class");
      $form.find("." + formClass).toggle();
      var $pluploadForm = $form.find(selectors.pluploadForm);
      $pluploadForm.toggle();
      if ($pluploadForm.is(":visible")) {
        $form.removeClass("snax-custom-form");
      } else {
        $form.addClass("snax-custom-form");
      }
    });
  };
  $(document).ready(function () {
    ctx.mediaUploadForm();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    wrapper: ".snax-time-left",
    dateWrapper: "> .snax-date-wrapper",
    date: "> .snax-date",
    timeWrapper: "> .snax-time-wrapper",
    time: "> .snax-time",
  };
  ctx.timeagoSelectors = selectors;
  ctx.dateConstans = {
    day_ms: 1000 * 60 * 60 * 24,
    month_ms: 1000 * 60 * 60 * 24 * 30,
    year_ms: 1000 * 60 * 60 * 24 * 356,
  };
  ctx.dateToTimeago = function () {
    if (!$.fn.timeago) {
      return;
    }
    var origSettings = $.extend(!0, {}, $.timeago.settings);
    $.extend($.timeago.settings, {
      cutoff: ctx.dateConstans.year_ms,
      allowFuture: !0,
    });
    $.extend($.timeago.settings.strings, { suffixFromNow: "" });
    $(selectors.wrapper).each(function () {
      var $wrapper = $(this);
      var $dateWrapper = $wrapper.find(selectors.dateWrapper);
      var $date = $dateWrapper.find(selectors.date);
      var $timeWrapper = $wrapper.find(selectors.timeWrapper);
      var $time = $timeWrapper.find(selectors.time);
      var timeLeftText = $.timeago($date.text());
      $time.text(timeLeftText);
      $dateWrapper.removeClass(".snax-date-wrapper-unfriendly");
      $timeWrapper.removeClass("snax-time-wrapper-unfriendly");
    });
    $.timeago.settings = origSettings;
  };
  $(document).ready(function () {
    ctx.dateToTimeago();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var locked = !1;
  var selectors = {
    wrapper: ".snax-voting",
    upvoteLink: ".snax-voting-upvote",
    downvoteLink: ".snax-voting-downvote",
    guestVoting: ".snax-guest-voting",
    voted: ".snax-user-voted",
    scoreWrapper: ".snax-voting-score",
    scoreValue: ".snax-voting-score strong",
  };
  var classes = { voted: "snax-user-voted" };
  ctx.votesSelectors = selectors;
  ctx.votesClasses = classes;
  ctx.votes = function () {
    $("body").on(
      "click",
      selectors.upvoteLink + ", " + selectors.downvoteLink,
      function (e) {
        e.preventDefault();
        if (locked) {
          return;
        }
        locked = !0;
        var $link = $(this);
        var voteType = $link.is(selectors.upvoteLink) ? "upvote" : "downvote";
        var $wrapper = $link.parents(selectors.wrapper);
        var nonce = $.trim($link.attr("data-snax-nonce"));
        var itemId = parseInt($link.attr("data-snax-item-id"), 10);
        var authorId = parseInt($link.attr("data-snax-author-id"), 10);
        ctx.vote(
          { itemId: itemId, authorId: authorId, type: voteType },
          nonce,
          $wrapper
        );
      }
    );
    $(selectors.wrapper).each(function () {
      var $this = $(this);
      var id = parseInt($this.attr("data-snax-item-id"), 10);
      if (id <= 0) {
        return;
      }
      var typeCookie = "snax_vote_type_" + id;
      var scoreCookie = "snax_vote_score_" + id;
      var type = ctx.readCookie(typeCookie);
      var score = ctx.readCookie(scoreCookie);
      if (!type && !score) {
        return;
      }
      if (score) {
        ctx.updateVoteScore($this.find(selectors.scoreWrapper), score);
      }
      if (type) {
        var $upVoteLink = $this.find(selectors.upvoteLink);
        var $downVoteLink = $this.find(selectors.downvoteLink);
        if ("upvote" === type) {
          $upVoteLink.addClass(classes.voted);
          $downVoteLink.removeClass(classes.voted);
        } else {
          $downVoteLink.addClass(classes.voted);
          $upVoteLink.removeClass(classes.voted);
        }
      }
    });
  };
  ctx.vote = function (data, nonce, $box) {
    var config = $.parseJSON(window.snax_front_config);
    if ($box.find(".snax-login-required").length > 0) {
      return;
    }
    if (!config) {
      ctx.log("Item voting failed. Global config is not defined!");
      return;
    }
    var $userVoted = $box.find(".snax-user-voted");
    var userUpvoted =
      $userVoted.length > 0 && $userVoted.is(".snax-voting-upvote");
    var userDownvoted =
      $userVoted.length > 0 && $userVoted.is(".snax-voting-downvote");
    var $score = $box.find(".snax-voting-score > strong");
    var score = parseInt($score.text(), 10);
    var diff = "upvote" === data.type ? 1 : -1;
    $box.find(".snax-voting-bubble").remove();
    if (
      (userUpvoted && "upvote" === data.type) ||
      (userDownvoted && "downvote" === data.type)
    ) {
      diff *= -1;
      $box.find(".snax-user-voted").removeClass("snax-user-voted");
      if ("upvote" === data.type) {
        $box
          .find(".snax-voting-upvote")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-minus-back">-1</span>'
          );
      } else {
        $box
          .find(".snax-voting-downvote")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-plus-back">+1</span>'
          );
      }
    } else if (
      (userUpvoted && "downvote" === data.type) ||
      (userDownvoted && "upvote" === data.type)
    ) {
      diff *= 2;
      $box.find(".snax-user-voted").removeClass("snax-user-voted");
      $box.find(".snax-voting-" + data.type).addClass("snax-user-voted");
      if ("upvote" === data.type) {
        $box
          .find(".snax-voting-upvote")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-plus">+2</span>'
          );
      } else {
        $box
          .find(".snax-voting-downvote")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-minus">-2</span>'
          );
      }
    } else {
      if ("upvote" === data.type) {
        $box
          .find(".snax-voting-upvote")
          .addClass("snax-user-voted")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-plus">+1</span>'
          );
      } else {
        $box
          .find(".snax-voting-downvote")
          .addClass("snax-user-voted")
          .append(
            '<span class="snax-voting-bubble snax-voting-bubble-minus">-1</span>'
          );
      }
    }
    ctx.updateVoteScore($box.find(selectors.scoreWrapper), score + diff);
    var xhr = $.ajax({
      type: "POST",
      url: config.ajax_url,
      dataType: "json",
      data: {
        action: "snax_vote_item",
        security: nonce,
        snax_item_id: data.itemId,
        snax_author_id: data.authorId,
        snax_vote_type: data.type,
        snax_user_voted: ctx.readCookie("snax_vote_type_" + data.itemId),
      },
    });
    ctx.updateVoteState(data.itemId, data.type, $box);
    xhr.done(function (res) {
      locked = !1;
    });
  };
  ctx.updateVoteState = function (itemId, type, $box) {
    var typeCookie = "snax_vote_type_" + itemId;
    var scoreCookie = "snax_vote_score_" + itemId;
    var currentValue = ctx.readCookie(typeCookie);
    $box.find(selectors.voted).removeClass(classes.voted);
    if (currentValue === type) {
      ctx.deleteCookie(typeCookie);
    } else {
      ctx.createCookie(typeCookie, type, 1);
      $box.find(".snax-voting-" + type).addClass(classes.voted);
    }
    var score = parseInt($box.find(selectors.scoreValue).text(), 10);
    ctx.createCookie(scoreCookie, score, 1);
  };
  ctx.updateVoteScore = function ($wrapper, score) {
    var scoreHtml = "";
    var $container = $wrapper.parents(".snax-voting");
    if (1 === Math.abs(score)) {
      scoreHtml = ctx.config.i18n.points_singular_tpl.replace("%d", score);
    } else {
      scoreHtml = ctx.config.i18n.points_plural_tpl.replace("%d", score);
    }
    $container.removeClass(
      "snax-voting-0 snax-voting-negative snax-voting-positive"
    );
    if (0 < score) {
      $container.addClass("snax-voting-positive");
    } else if (0 > score) {
      $container.addClass("snax-voting-negative");
    } else {
      $container.addClass("snax-voting-0");
    }
    $wrapper.html(scoreHtml);
  };
  $(document).ready(function () {
    ctx.votes();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    loginTab: ".snax-login-tab",
    loginFormWrapper: ".snax-login-form",
    loginForm: ".snax-login-form #loginform-in-popup",
    forgotTab: ".snax-forgot-pass-tab",
    forgotFormWrapper: ".snax-forgot-pass-form",
    forgotForm: ".snax-forgot-pass-form #lostpasswordform",
    gdprTab: ".snax-gdpr-tab",
    backToLoginTab: ".snax-back-to-login-tab",
    loginErrorMessage: ".snax-login-form .snax-login-error-message",
    forgotErrorMessage:
      ".snax-forgot-pass-form .snax-forgot-pass-error-message",
    forgotSuccessMessage:
      ".snax-forgot-pass-form .snax-forgot-pass-success-message",
    user: {
      loginInput: "#user_login",
      emailInput: "#user_email",
      passwordInput: "#user_pass",
    },
    forgotPasswordLink: "#snax-popup-content .snax-link-forgot-pass",
    passwordWrapper: "#snax-popup-content .login-password",
    connectWithLabel: "#snax-popup-content .wp-social-login-connect-with",
    resetTab: ".snax-reset-tab",
  };
  ctx.loginFormSelectors = selectors;
  var useReCaptcha;
  var reCaptchaToken;
  var urlAction = ctx.getUrlParameter(ctx.config.login_popup_url_var);
  ctx.loginForm = function () {
    useReCaptcha = ctx.config.use_login_recaptcha;
    $.each(selectors.user, function (id, selector) {
      var $input = $(selector);
      var $label = $input.prev("label");
      if ($label.length > 0) {
        $input.attr("placeholder", $label.text());
      }
    });
    $(selectors.passwordWrapper + " input").after(
      $(selectors.forgotPasswordLink)
    );
    $(selectors.connectWithLabel).wrapInner("<h4>");
    $(".wp-social-login-provider").on("click", function (e) {
      var $that = $(this);
      if ($(".snax-wpsl-gdpr-consent input").length > 0) {
        if (!$(".snax-wpsl-gdpr-consent input").is(":checked")) {
          e.stopPropagation();
          e.stopImmediatePropagation();
          e.preventDefault();
          handleLoginGDPR($that);
        }
      }
    });
    handleLoginAction();
    handleForgotPassAction();
    handleTabsSwitch();
    if (urlAction === "reset_password") {
      $(selectors.loginTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.resetTab)
        .removeClass("snax-tab-inactive")
        .addClass("snax-tab-active");
    }
    if (urlAction === "forgot_password") {
      $(selectors.loginTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.forgotTab)
        .removeClass("snax-tab-inactive")
        .addClass("snax-tab-active");
    }
    $("body").on("snaxPopupOpened", function (e, action) {
      if (useReCaptcha && "login" === action) {
        loadReCaptcha();
      }
    });
  };
  var handleLoginGDPR = function ($clickedProvider) {
    $(selectors.loginTab)
      .removeClass("snax-tab-active")
      .addClass("snax-tab-inactive");
    $(selectors.gdprTab)
      .removeClass("snax-tab-inactive")
      .addClass("snax-tab-active");
    $(".snax-login-gdpr-accept").on("click", function () {
      $(".snax-wpsl-gdpr-consent input").prop("checked", !0);
      $(selectors.gdprTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.loginTab)
        .removeClass("snax-tab-inactive")
        .addClass("snax-tab-active");
      var redirectTo = $clickedProvider.attr("href");
      window.location.href = redirectTo;
    });
  };
  var handleLoginAction = function () {
    $(selectors.loginForm).on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $errorMessage = $(selectors.loginErrorMessage);
      var requestData = { action: "snax_login" };
      $.each($form.serializeArray(), function (i, field) {
        requestData[field.name] = field.value;
      });
      if (ctx.config.use_login_recaptcha) {
        if (!reCaptchaToken) {
          $errorMessage.html(
            '<p class="snax-validation-tip">' +
              ctx.config.i18n.recaptcha_invalid +
              "</p>"
          );
          return;
        }
      }
      $errorMessage.html("<p>" + ctx.config.i18n.user_is_logging + "</p>");
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: requestData,
      });
      xhr.done(function (res) {
        if ("success" === res.status) {
          var redirectTo = res.args.redirect_url;
          if (!redirectTo) {
            redirectTo = window.location.href;
          }
          if (redirectTo.indexOf("?") > 0) {
            redirectTo += "&" + ctx.config.login_success_var + "=true";
          } else {
            redirectTo += "?" + ctx.config.login_success_var + "=true";
          }
          window.location.href = redirectTo;
        } else {
          if (res.message) {
            $errorMessage.html(
              '<p class="snax-validation-tip">' + res.message + "</p>"
            );
          }
          if (useReCaptcha) {
            grecaptcha.reset();
          }
        }
      });
      xhr.fail(function () {
        var reloadUrl = window.location.href;
        if (reloadUrl.indexOf("?") > 0) {
          reloadUrl += "&" + ctx.config.login_success_var + "=false";
        } else {
          reloadUrl += "?" + ctx.config.login_success_var + "=false";
        }
        window.location.href = reloadUrl;
      });
    });
  };
  var handleForgotPassAction = function () {
    $(selectors.forgotForm).on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $errorMessage = $(selectors.forgotErrorMessage);
      var $successMessage = $(selectors.forgotSuccessMessage);
      var requestData = { action: "snax_forgot_pass" };
      $.each($form.serializeArray(), function (i, field) {
        requestData[field.name] = field.value;
      });
      $errorMessage.text("");
      $successMessage.text("");
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: requestData,
      });
      xhr.done(function (res) {
        if ("success" === res.status) {
          if (res.message) {
            $successMessage.html(
              '<p class="snax-validation-tip">' + res.message + "</p>"
            );
          }
        } else {
          if (res.message) {
            $errorMessage.html(
              '<p class="snax-validation-tip">' + res.message + "</p>"
            );
          }
        }
      });
    });
  };
  var handleTabsSwitch = function () {
    $(selectors.forgotPasswordLink).on("click", function (e) {
      e.preventDefault();
      $(selectors.loginTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.forgotTab)
        .removeClass("snax-tab-inactive")
        .addClass("snax-tab-active");
    });
    $(selectors.backToLoginTab).on("click", function (e) {
      e.preventDefault();
      $(selectors.resetTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.forgotTab)
        .removeClass("snax-tab-active")
        .addClass("snax-tab-inactive");
      $(selectors.loginTab)
        .removeClass("snax-tab-inactive")
        .addClass("snax-tab-active");
    });
  };
  var loadReCaptcha = function () {
    var apiUrl = ctx.config.recaptcha_api_url;
    var ver = ctx.config.recaptcha_version;
    var siteKey = ctx.config.recaptcha_site_key;
    if (!siteKey || !apiUrl) {
      return;
    }
    var renderLoginReCaptcha = function () {
      if ("30" === ver) {
        grecaptcha.execute(siteKey, { action: "login" }).then(function (token) {
          $("#snax-login-recaptcha").html(
            '<input type="hidden" name="g-recaptcha-response" value="' +
              token +
              '">'
          );
          reCaptchaEnteredCorrectly(token);
        });
      } else {
        grecaptcha.render("snax-login-recaptcha", {
          sitekey: siteKey,
          callback: reCaptchaEnteredCorrectly,
        });
      }
    };
    if (typeof grecaptcha !== "undefined") {
      renderLoginReCaptcha();
    } else {
      window.snaxReCaptchaOnloadCallback = function () {
        renderLoginReCaptcha();
      };
      if ("30" === ver) {
        $("head").append(
          '<script src="' +
            apiUrl +
            "?onload=snaxReCaptchaOnloadCallback&render=" +
            siteKey +
            '" async defer>'
        );
      } else {
        $("head").append(
          '<script src="' +
            apiUrl +
            '?onload=snaxReCaptchaOnloadCallback&render=explicit" async defer>'
        );
      }
    }
  };
  var reCaptchaEnteredCorrectly = function (response) {
    reCaptchaToken = response;
  };
  $(document).ready(function () {
    ctx.loginForm();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.openPopup = function ($content, args, action) {
    if (!$.fn.magnificPopup) {
      return;
    }
    args = args || {};
    if (!args.tClose) {
      args.tClose = ctx.config.i18n.popup_close_label;
    }
    args.items = { src: $content, type: "inline" };
    args.callbacks = {
      open: function () {
        $("body").trigger("snaxPopupOpened", [action]);
      },
    };
    $.magnificPopup.open(args);
    if (typeof args.onClose === "function") {
      $.magnificPopup.instance.close = args.onClose;
    }
  };
  ctx.closePopup = function () {
    if (!$.fn.magnificPopup) {
      return;
    }
    $.magnificPopup.close();
  };
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    popupContent: "#snax-popup-content",
    usernameField: "#user_login",
  };
  ctx.openLoginPopup = function (onClose) {
    var $content = $(selectors.popupContent);
    var args = {};
    if (typeof onClose === "function") {
      args.onClose = onClose;
    }
    ctx.openPopup($content, args, "login");
    setTimeout(function () {
      $content.find(selectors.usernameField).focus();
    }, 100);
  };
  ctx.redirectToLoginPage = function () {
    window.location.href = ctx.config.login_url;
  };
  $(document).ready(function () {
    $("body").on("snaxLoginRequired", function (e, blocked) {
      var onClose = !1;
      if (blocked) {
        onClose = function () {
          window.location.href = ctx.config.site_url;
        };
      }
      if (ctx.config.enable_login_popup) {
        ctx.openLoginPopup(onClose);
      } else if (typeof snaxLoginRequiredHandler === "function") {
        snaxLoginRequiredHandler(onClose);
      } else {
        ctx.redirectToLoginPage();
      }
    });
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  $(document).ready(function () {
    $(".snax-login-required").click(function (e) {
      e.preventDefault();
      ctx.loginRequired();
    });
    if (
      ctx.getUrlParameter(ctx.config.login_popup_url_var) &&
      !ctx.config.logged_in
    ) {
      ctx.loginRequired();
    }
    if (ctx.forceLoginPopup) {
      ctx.loginRequired(ctx.forceLoginPopup.blocked);
    }
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    actions: ".snax-actions",
    actionsToggle: ".snax-actions-toggle",
    actionsExpanded: ".snax-actions-expanded",
  };
  var classes = { expanded: "snax-actions-expanded" };
  ctx.actionsMenuSelectors = selectors;
  ctx.actionsMenuClasses = classes;
  ctx.actionsMenu = function () {
    var $body = $("body");
    $("body").on("click", selectors.actionsToggle, function (e) {
      e.preventDefault();
      var $toggle = $(e.target);
      $toggle.parents(selectors.actions).toggleClass(classes.expanded);
    });
    $body.on("click touchstart", function (e) {
      var $activeMenu = $(e.target).parents(selectors.actions);
      $(selectors.actionsExpanded)
        .not($activeMenu)
        .removeClass(classes.expanded);
    });
  };
  $(document).ready(function () {
    ctx.actionsMenu();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var selectors = {
    wrapper: ".snax-item-share",
    toggle: ".snax-item-share-toggle",
    expandedState: ".snax-item-share-expanded",
  };
  var classes = { expanded: "snax-item-share-expanded" };
  ctx.itemShareSelectors = selectors;
  ctx.itemShareClasses = classes;
  ctx.itemShare = function () {
    $(selectors.toggle).on("click  touchstart", function (e) {
      e.preventDefault();
      $(this).parents(selectors.wrapper).addClass(classes.expanded);
    });
    $("body").on("click touchstart", function (e) {
      var $activeElem = $(e.target).parents(selectors.expandedState);
      $(selectors.expandedState).not($activeElem).removeClass(classes.expanded);
    });
  };
  $(document).ready(function () {
    if (ctx.isTouchDevice()) {
      $("body").removeClass("snax-hoverable");
    }
    ctx.itemShare();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.deleteItemModule = {};
  var c = ctx.deleteItemModule;
  var selectors = { deleteLink: ".snax-delete-item" };
  var i18n = { confirm: "Are you sure?" };
  c.selectors = selectors;
  c.i18n = i18n;
  c.init = function () {
    c.attachEventHandlers();
  };
  c.attachEventHandlers = function () {
    $(selectors.deleteLink).on("click", function (e) {
      e.preventDefault();
      if (!confirm(i18n.confirm)) {
        return;
      }
      ctx.deleteItem($(this), function (res) {
        if (res.status === "success") {
          location.href = res.args.redirect_url;
        } else {
          alert(res.message);
        }
      });
    });
  };
  $(document).ready(function () {
    c.init();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.setItemAsFeaturedModule = {};
  var c = ctx.setItemAsFeaturedModule;
  var selectors = { link: ".snax-set-item-as-featured" };
  c.selectors = selectors;
  c.init = function () {
    c.attachEventHandlers();
  };
  c.attachEventHandlers = function () {
    $(selectors.link).on("click", function (e) {
      e.preventDefault();
      ctx.setItemAsFeatured($(this), function (res) {
        if (res.status === "success") {
          location.reload();
        } else {
          alert(res.message);
        }
      });
    });
  };
  $(document).ready(function () {
    c.init();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.froalaSimple = {};
  var c = ctx.froalaSimple;
  var selectors = { froalaEditor: ".froala-editor-simple" };
  c.selectors = selectors;
  c.init = function () {
    c.attachEventHandlers();
    c.applyFroala();
  };
  c.attachEventHandlers = function () {
    $("body").on("snaxNewCardAdded", function ($card) {
      c.applyFroala();
    });
  };
  c.renderFroala = function () {
    var $textarea = $(this);
    var config = {
      key: "CMFIZJNKLDXIREJI==",
      language: c.getFroalaEditorConfig("language"),
      heightMin: 200,
      toolbarButtons: ["bold", "italic", "insertLink", "|", "undo", "redo"],
      toolbarButtonsMD: ["bold", "italic", "insertLink", "|", "undo", "redo"],
      toolbarButtonsSM: ["bold", "italic", "insertLink", "|", "undo", "redo"],
      toolbarButtonsXS: ["bold", "italic", "insertLink", "|", "undo", "redo"],
      charCounterMax: c.getFroalaEditorMaxCharacters($textarea),
    };
    if (typeof c.froalaEditorConfig === "function") {
      config = c.froalaEditorConfig(config);
    }
    if (snax.inDebugMode()) {
      snax.log(config);
    }
    $textarea.froalaEditor(config);
  };
  c.getFroalaEditorConfig = function (id) {
    var config = c.config.froala;
    if (typeof config[id] !== "undefined") {
      return config[id];
    }
    return null;
  };
  c.getFroalaEditorMaxCharacters = function ($editor) {
    var maxCharacters = parseInt($editor.attr("maxlength"), 10);
    return maxCharacters > 0 ? maxCharacters : -1;
  };
  c.applyFroala = function () {
    if (!$.fn.froalaEditor) {
      return;
    }
    $(selectors.froalaEditor).each(c.renderFroala);
  };
  $(document).ready(function () {
    if (snax.frontendSubmission) {
      c.config = snax.frontendSubmission.config;
    }
    if (snax.post) {
      c.config = snax.post.config;
    }
    if (typeof c.config === "undefined") {
      return;
    }
    c.init();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.singleItemComments = {};
  var c = ctx.singleItemComments;
  var seeMoreHtml =
    '<a class="snax-see-all-replies">' +
    ctx.config.i18n.see_all_replies +
    "</a>";
  var selectors = {
    section: ".snax-item-comments",
    topLevelComment: ".snax-item-comments .depth-1",
    moreCommentsLink: ".snax-item-comments-more-link",
    allRepliesLink: ".snax-see-all-replies",
    list: ".comment-list",
    commentForm: ".snax-item-comments .comment-form",
    textarea: ".snax-item-comments .comment-form textarea",
    submitButton: ".submit",
    cancelReply: "#cancel-comment-reply-link",
    respondSection: "#respond",
    replyLogin: ".comment-reply-login",
    respondLogin: ".snax-comment-login",
    authorFields: ".snax-item-comment-autor",
  };
  var $spinner = $('<div class="snax-upload-icon"></div>');
  c.selectors = selectors;
  c.init = function () {
    $(selectors.submitButton, selectors.commentForm).attr("disabled", !0);
    c.renderSeeMore();
    c.attachEventHandlers();
  };
  c.renderSeeMore = function () {
    $(selectors.topLevelComment).each(function (index) {
      if (
        $(".children li", this).length > 1 &&
        $(this).attr("appendedSeeMoreLink") !== "true"
      ) {
        $(this).append(seeMoreHtml);
        $(this).attr("appendedSeeMoreLink", "true");
      }
    });
    $(selectors.allRepliesLink).on("click", function (e) {
      var $parent = $(this).closest(selectors.topLevelComment);
      $(".children", $parent).addClass("children-visible");
      $(this).remove();
    });
  };
  c.overrideDefaultHandler = function () {
    if (typeof addComment === "undefined") {
      return;
    }
    addComment.moveForm = function (commId, parentId, respondId, postId) {
      var div,
        element,
        style,
        cssHidden,
        t = this,
        comm = t.I(commId),
        respond = t.I(respondId),
        cancel = respond.querySelector("#cancel-comment-reply-link"),
        parent = respond.querySelector("#comment_parent"),
        post = respond.querySelector("#comment_post_ID"),
        commentForm = respond.getElementsByTagName("form")[0];
      if (!comm || !respond || !cancel || !parent || !commentForm) {
        return;
      }
      t.respondId = respondId;
      postId = postId || !1;
      if (!t.I("wp-temp-form-div")) {
        div = document.createElement("div");
        div.id = "wp-temp-form-div";
        div.style.display = "none";
        respond.parentNode.insertBefore(div, respond);
      }
      comm.parentNode.insertBefore(respond, comm.nextSibling);
      if (post && postId) {
        post.value = postId;
      }
      parent.value = parentId;
      cancel.style.display = "";
      cancel.onclick = function () {
        var t = addComment,
          temp = t.I("wp-temp-form-div"),
          respond = t.I(t.respondId);
        if (!temp || !respond) {
          return;
        }
        parent.value = "0";
        temp.parentNode.insertBefore(respond, temp);
        temp.parentNode.removeChild(temp);
        this.style.display = "none";
        this.onclick = null;
        return !1;
      };
      try {
        for (var i = 0; i < commentForm.elements.length; i++) {
          element = commentForm.elements[i];
          cssHidden = !1;
          if ("getComputedStyle" in window) {
            style = window.getComputedStyle(element);
          } else if (document.documentElement.currentStyle) {
            style = element.currentStyle;
          }
          if (
            (element.offsetWidth <= 0 && element.offsetHeight <= 0) ||
            style.visibility === "hidden"
          ) {
            cssHidden = !0;
          }
          if ("hidden" === element.type || element.disabled || cssHidden) {
            continue;
          }
          element.focus();
          break;
        }
      } catch (er) {}
      return !1;
    };
    addComment.I = function (id) {
      return document.getElementById(id);
    };
  };
  c.attachEventHandlers = function () {
    var loadMoreComments = function ($section) {
      var $that = $(selectors.moreCommentsLink, $section);
      var postId = $section.attr("data-snax-post-id");
      var loadedPages = parseInt($section.attr("data-snax-loaded-pages"), 10);
      var $list = $(selectors.list, $section);
      var requestData = {
        action: "snax_load_more_item_comments",
        snax_item_id: postId,
        loaded_pages: loadedPages,
      };
      $spinner.appendTo($list);
      var xhr = $.ajax({
        type: "POST",
        url: ctx.config.ajax_url,
        dataType: "json",
        data: requestData,
      });
      xhr.done(function (res) {
        if ("success" === res.status) {
          $spinner.remove();
          if (res.args.html) {
            $list.append(res.args.html);
            removeDuplicateComments($list);
            maybeRemoveSeeMoreLink($list, $that);
            c.renderSeeMore();
            $section.attr("data-snax-loaded-pages", loadedPages + 1);
            addComment.init();
          }
        }
      });
    };
    var removeDuplicateComments = function ($list) {
      var seen = {};
      $(selectors.topLevelComment, $list).each(function (index) {
        var id = $(this).attr("id");
        if (seen[id]) {
          $(this).remove();
        } else {
          seen[id] = !0;
        }
      });
    };
    var maybeRemoveSeeMoreLink = function ($list, $link) {
      var topLevels = $(".depth-1", $list).length;
      var topLevelComments = parseInt(
        $list.attr("data-snax-top-level-comments"),
        10
      );
      if (topLevels >= topLevelComments) {
        $link.remove();
      }
    };
    $(selectors.moreCommentsLink).on("click", function (e) {
      e.preventDefault();
      var $section = $(this).closest(selectors.section);
      loadMoreComments($section);
    });
    $(selectors.commentForm).on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var url = $form.attr("action");
      var commentParent = "0";
      var $textarea = $("textarea", $form);
      var $section = $form.closest(selectors.section);
      var $list = $(selectors.list, $section);
      var $respondSection = $form.closest(selectors.respondSection);
      var $cancelButton = $(selectors.cancelReply, $respondSection);
      var $submitButton = $(selectors.submitButton, $form);
      var requestData = {};
      $.each($form.serializeArray(), function (i, field) {
        requestData[field.name] = field.value;
      });
      requestData.is_ajax_item_comment_form = !0;
      commentParent = requestData.comment_parent;
      if (commentParent === "0") {
        $spinner.prependTo($list);
      } else {
        var $commentParent = $("#comment-" + commentParent);
        var $commentParentChildren = $(
          "#comment-" + commentParent + "> .children"
        );
        if (!$commentParentChildren.length) {
          $commentParent.append('<ul class="children"></ul>');
          $commentParentChildren = $(
            "#comment-" + commentParent + "> .children"
          );
        }
        $spinner.prependTo($commentParentChildren);
      }
      var xhr = $.ajax({ type: "POST", url: url, data: requestData });
      xhr.done(function (res) {
        $textarea.val("");
        $cancelButton.trigger("click");
        $submitButton.attr("disabled", !0);
        if (res.indexOf('<body id="error-page">') != -1) {
          res = $(res).filter("p")[1];
        }
        $spinner.replaceWith(res);
        if (commentParent !== "0") {
          var $parent = $commentParentChildren.closest(
            selectors.topLevelComment
          );
          $(".children", $parent).addClass("children-visible");
        }
      });
      xhr.fail(function (jqXHR, textStatus) {
        if (jqXHR.status === 409) {
          alert(ctx.config.i18n.duplicate_comment);
        } else {
          alert(ctx.config.i18n.comment_fail);
        }
        $spinner.remove();
      });
    });
    var validateForm = function ($form) {
      var $submitButton = $(selectors.submitButton, $form);
      var $author = $(selectors.authorFields, $form);
      var $input = $("textarea", $form);
      var disable = !1;
      if ($author.length > 0) {
        var $authorName = $("#author", $author);
        var $authorMail = $("#email", $author);
        if ($authorName.val() === "" || $authorMail.val() === "") {
          disable = !0;
        }
      }
      if ($input.val() === "") {
        disable = !0;
      }
      $submitButton.attr("disabled", disable);
    };
    $(selectors.textarea).keyup(function () {
      var $parent = $(this).closest(selectors.commentForm);
      var $author = $(selectors.authorFields, $parent);
      while (
        $(this).outerHeight() <
        this.scrollHeight +
          parseFloat($(this).css("borderTopWidth")) +
          parseFloat($(this).css("borderBottomWidth"))
      ) {
        $(this).height($(this).height() + 1);
      }
      if ($(this).val()) {
        $author.show();
        $parent
          .removeClass("snax-comment-form-collapsed")
          .addClass("snax-comment-form-extended");
      } else {
        $author.hide();
        $parent
          .removeClass("snax-comment-form-extended")
          .addClass("snax-comment-form-collapsed");
      }
      validateForm($parent);
    });
    $(selectors.authorFields).keyup(function () {
      var $parent = $(this).closest(selectors.commentForm);
      validateForm($parent);
    });
    $(selectors.replyLogin).click(function (e) {
      e.preventDefault();
      ctx.loginRequired();
    });
    $(selectors.respondLogin).click(function (e) {
      e.preventDefault();
      ctx.loginRequired();
    });
  };
  $(document).ready(function () {
    c.init();
    c.overrideDefaultHandler();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.deletePostModule = {};
  var c = ctx.deletePostModule;
  var selectors = { deleteLink: ".snax-delete-post" };
  c.selectors = selectors;
  c.init = function () {
    c.attachEventHandlers();
  };
  c.attachEventHandlers = function () {
    $(selectors.deleteLink).on("click", function (e) {
      e.preventDefault();
      var $link = $(this);
      if (!confirm(ctx.config.i18n.are_you_sure)) {
        return;
      }
      var $item = $link.parents(".g1-collection-item");
      if ($item.length === 0) {
        var $item = $link.parents("article.post");
      }
      $item.addClass("snax-post-removing");
      ctx.deletePost($link, function (res) {
        if (res.status === "success") {
          var redirectUrl = $link.attr("href");
          if (redirectUrl.length > 0) {
            var queryVarDelimiter = redirectUrl.indexOf("?") === -1 ? "?" : "&";
            window.location.href =
              redirectUrl +
              queryVarDelimiter +
              ctx.config.delete_status_var +
              "=success";
          } else {
            $item.addClass("snax-post-removed");
            $item.slideToggle(750);
            setTimeout(function () {
              snax.notifications.add(res.message);
            }, 1500);
          }
        } else {
          ctx.notifications.add(res.message);
        }
      });
    });
  };
  $(document).ready(function () {
    c.init();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  ctx.passwordReset = {};
  var c = ctx.passwordReset;
  var selectors = {
    resetPasswordForm: "#snax_reset_password_form",
    newPassword: "#snax_reset_password_form #new_password",
    repeatPassword: "#snax_reset_password_form #repeat_password",
    cookieName: "#snax_reset_password_form .rp-cookie-name",
    cookieValue: "#snax_reset_password_form .rp-cookie_value",
    resetErrorMessage:
      "#snax_reset_password_form  .snax-reset-pass-error-message",
    resetSuccessMessage:
      "#snax_reset_password_form  .snax-reset-pass-success-message",
  };
  c.selectors = selectors;
  c.init = function () {
    c.attachEventHandlers();
  };
  c.attachEventHandlers = function () {
    c.matchPasswords();
    c.handleForm();
  };
  c.matchPasswords = function () {
    var $newPassword = $(selectors.newPassword),
      $repeatPassword = $(selectors.repeatPassword);
    $repeatPassword.on("change", function (e) {
      if ($newPassword.val() !== $repeatPassword.val()) {
        $repeatPassword
          .get(0)
          .setCustomValidity(ctx.config.i18n.passwords_dont_match);
      } else {
        $repeatPassword.get(0).setCustomValidity("");
      }
    });
  };
  c.handleForm = function () {
    var $form = $(selectors.resetPasswordForm),
      $cookieName = $(selectors.cookieName),
      $cookieValue = $(selectors.cookieValue),
      $newPassword = $(selectors.newPassword),
      $errorMessage = $(selectors.resetErrorMessage),
      $successMessage = $(selectors.resetSuccessMessage);
    $form.on("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      $errorMessage.text("");
      $successMessage.text("");
      ctx.createCookie($cookieName.val(), $cookieValue.val(), 24);
      var xhr = $.ajax({
        type: "POST",
        url: $form.attr("action") + "?action=resetpass",
        data: $form.serialize(),
      });
      xhr.done(function (res) {
        if ($(".reset-pass", res).length) {
          $successMessage.html(
            '<p class="snax-validation-tip">' +
              ctx.config.i18n.password_set +
              "</p>"
          );
        }
        if ($("#login_error", res).length) {
          $errorMessage.html(
            '<p class="snax-validation-tip">' +
              ctx.config.i18n.link_invalid +
              "</p>"
          );
        }
      });
      return !1;
    });
  };
  $(document).ready(function () {
    if ($(selectors.resetPasswordForm).length) {
      c.init();
    }
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var useReCaptcha;
  var reCaptchaToken;
  ctx.registerForm = function () {
    useReCaptcha = ctx.config.use_login_recaptcha;
    if (useReCaptcha && $("#buddypress #register-page").length > 0) {
      loadReCaptcha();
      $("#signup_submit").attr("disabled", !0);
    }
  };
  var loadReCaptcha = function () {
    var apiUrl = ctx.config.recaptcha_api_url;
    var ver = ctx.config.recaptcha_version;
    var siteKey = ctx.config.recaptcha_site_key;
    if (!siteKey || !apiUrl) {
      return;
    }
    var renderLoginReCaptcha = function () {
      if ("30" === ver) {
        grecaptcha.execute(siteKey, { action: "login" }).then(function (token) {
          $("#snax-register-recaptcha").html(
            '<input type="hidden" name="g-recaptcha-response" value="' +
              token +
              '">'
          );
          reCaptchaEnteredCorrectly(token);
        });
      } else {
        grecaptcha.render("snax-register-recaptcha", {
          sitekey: siteKey,
          callback: reCaptchaEnteredCorrectly,
        });
      }
    };
    if (typeof grecaptcha !== "undefined") {
      renderLoginReCaptcha();
    } else {
      window.snaxReCaptchaOnloadCallback = function () {
        renderLoginReCaptcha();
      };
      if ("30" === ver) {
        $("head").append(
          '<script src="' +
            apiUrl +
            "?onload=snaxReCaptchaOnloadCallback&render=" +
            siteKey +
            '" async defer>'
        );
      } else {
        $("head").append(
          '<script src="' +
            apiUrl +
            '?onload=snaxReCaptchaOnloadCallback&render=explicit" async defer>'
        );
      }
    }
  };
  var reCaptchaEnteredCorrectly = function (response) {
    reCaptchaToken = response;
    $("#signup_submit").attr("disabled", !1);
  };
  $(document).ready(function () {
    ctx.registerForm();
  });
})(jQuery, snax);
(function ($, ctx) {
  "use strict";
  var api = {};
  var timeout = 5000;
  var $notifications = !1;
  var $notificationTpl = !1;
  var selectors = {
    notifications: ".snax-notifications",
    notification: ".snax-notification",
    notificationText: ".snax-notification-text",
    notificationClose: ".snax-notification-close",
  };
  var classes = { on: "snax-notifications-on", off: "snax-notifications-off" };
  api.add = function (html) {
    var $notification = $notificationTpl.clone(!0);
    $notification.find(selectors.notificationText).html(html);
    $notification.on("click", selectors.notificationClose, function () {
      api.remove($notification);
    });
    setTimeout(function () {
      api.remove($notification);
    }, timeout);
    $notifications.prepend($notification);
    $notifications.removeClass(classes.off).addClass(classes.on);
  };
  api.remove = function ($notification) {
    $notification.addClass("snax-notification-removed");
    setTimeout(function () {
      $notification.remove();
      if (api.isQueueEmpty()) {
        $notifications.removeClass(classes.on).addClass(classes.off);
      }
    }, 5000);
  };
  api.isQueueEmpty = function () {
    return $notifications.find(selectors.notification).length === 0;
  };
  var initNotifications = function () {
    $notifications = $(selectors.notifications);
    if ($notifications.length === 0) {
      return;
    }
    $notificationTpl = $notifications.find(selectors.notification).detach();
    ctx.notifications = api;
  };
  $(document).ready(function () {
    initNotifications();
  });
})(jQuery, snax);
(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".snax-gdpr-consent-form").each(function () {
      var $form = $(this);
      var $links = $form.parent().find(".snax-social-login-links");
      var $link;
      var toggleVisiblity = function () {
        $form.toggleClass(
          "snax-gdpr-consent-form-hidden snax-gdpr-consent-form-visible"
        );
        $links.toggleClass(
          "snax-social-login-links-visible snax-social-login-links-hidden"
        );
      };
      $links.on("click", "a.snax-social-login", function (e) {
        e.preventDefault();
        $link = $(this);
        toggleVisiblity();
      });
      $form.on("click", ".snax-slog-gdpr-accept", function (e) {
        e.preventDefault();
        window.location.href = $link.attr("href");
      });
      $form.on("click", ".snax-slog-gdpr-cancel", function (e) {
        e.preventDefault();
        toggleVisiblity();
      });
    });
  });
})(jQuery);
("use strict");
var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      (descriptor.enumerable = descriptor.enumerable || !1),
        (descriptor.configurable = !0),
        "value" in descriptor && (descriptor.writable = !0),
        Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    return (
      protoProps && defineProperties(Constructor.prototype, protoProps),
      staticProps && defineProperties(Constructor, staticProps),
      Constructor
    );
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var RocketBrowserCompatibilityChecker = (function () {
  function RocketBrowserCompatibilityChecker(options) {
    _classCallCheck(this, RocketBrowserCompatibilityChecker),
      (this.passiveSupported = !1),
      this._checkPassiveOption(this),
      (this.options = !!this.passiveSupported && options);
  }
  return (
    _createClass(RocketBrowserCompatibilityChecker, [
      {
        key: "_checkPassiveOption",
        value: function (self) {
          try {
            var options = {
              get passive() {
                return !(self.passiveSupported = !0);
              },
            };
            window.addEventListener("test", null, options),
              window.removeEventListener("test", null, options);
          } catch (err) {
            self.passiveSupported = !1;
          }
        },
      },
      {
        key: "initRequestIdleCallback",
        value: function () {
          !1 in window &&
            (window.requestIdleCallback = function (cb) {
              var start = Date.now();
              return setTimeout(function () {
                cb({
                  didTimeout: !1,
                  timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start));
                  },
                });
              }, 1);
            }),
            !1 in window &&
              (window.cancelIdleCallback = function (id) {
                return clearTimeout(id);
              });
        },
      },
      {
        key: "isDataSaverModeOn",
        value: function () {
          return (
            "connection" in navigator && !0 === navigator.connection.saveData
          );
        },
      },
      {
        key: "supportsLinkPrefetch",
        value: function () {
          var elem = document.createElement("link");
          return (
            elem.relList &&
            elem.relList.supports &&
            elem.relList.supports("prefetch") &&
            window.IntersectionObserver &&
            "isIntersecting" in IntersectionObserverEntry.prototype
          );
        },
      },
      {
        key: "isSlowConnection",
        value: function () {
          return (
            "connection" in navigator &&
            "effectiveType" in navigator.connection &&
            ("2g" === navigator.connection.effectiveType ||
              "slow-2g" === navigator.connection.effectiveType)
          );
        },
      },
    ]),
    RocketBrowserCompatibilityChecker
  );
})();
("use strict");
var _createClass = (function () {
  function i(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  return function (e, t, r) {
    return t && i(e.prototype, t), r && i(e, r), e;
  };
})();
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var RocketLazyLoadScripts = (function () {
  function r(e, t) {
    _classCallCheck(this, r),
      (this.attrName = "data-rocketlazyloadscript"),
      (this.browser = t),
      (this.options = this.browser.options),
      (this.triggerEvents = e),
      (this.userEventListener = this.triggerListener.bind(this));
  }
  return (
    _createClass(
      r,
      [
        {
          key: "init",
          value: function () {
            this._addEventListener(this);
          },
        },
        {
          key: "reset",
          value: function () {
            this._removeEventListener(this);
          },
        },
        {
          key: "_addEventListener",
          value: function (t) {
            this.triggerEvents.forEach(function (e) {
              return window.addEventListener(e, t.userEventListener, t.options);
            });
          },
        },
        {
          key: "_removeEventListener",
          value: function (t) {
            this.triggerEvents.forEach(function (e) {
              return window.removeEventListener(
                e,
                t.userEventListener,
                t.options
              );
            });
          },
        },
        {
          key: "_loadScriptSrc",
          value: function () {
            var r = this;
            document
              .querySelectorAll("script[" + this.attrName + "]")
              .forEach(function (e) {
                var t = e.getAttribute(r.attrName);
                e.setAttribute("src", t), e.removeAttribute(r.attrName);
              }),
              this.reset();
          },
        },
        {
          key: "triggerListener",
          value: function () {
            this._loadScriptSrc(), this._removeEventListener(this);
          },
        },
      ],
      [
        {
          key: "run",
          value: function () {
            if (RocketBrowserCompatibilityChecker) {
              new r(
                ["keydown", "mouseover", "touchmove", "touchstart"],
                new RocketBrowserCompatibilityChecker({ passive: !0 })
              ).init();
            }
          },
        },
      ]
    ),
    r
  );
})();
RocketLazyLoadScripts.run();
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 25));
})({
  1: function (e, t, n) {
    !(function (t, n) {
      var i = (function (e, t, n) {
        "use strict";
        var i, r;
        if (
          ((function () {
            var t,
              n = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125,
              };
            for (t in ((r = e.lazySizesConfig || e.lazysizesConfig || {}), n))
              t in r || (r[t] = n[t]);
          })(),
          !t || !t.getElementsByClassName)
        )
          return { init: function () {}, cfg: r, noSupport: !0 };
        var a = t.documentElement,
          o = e.HTMLPictureElement,
          s = e.addEventListener.bind(e),
          l = e.setTimeout,
          u = e.requestAnimationFrame || l,
          c = e.requestIdleCallback,
          d = /^picture$/i,
          f = ["load", "error", "lazyincluded", "_lazyloaded"],
          y = {},
          g = Array.prototype.forEach,
          v = function (e, t) {
            return (
              y[t] || (y[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
              y[t].test(e.getAttribute("class") || "") && y[t]
            );
          },
          m = function (e, t) {
            v(e, t) ||
              e.setAttribute(
                "class",
                (e.getAttribute("class") || "").trim() + " " + t
              );
          },
          p = function (e, t) {
            var n;
            (n = v(e, t)) &&
              e.setAttribute(
                "class",
                (e.getAttribute("class") || "").replace(n, " ")
              );
          },
          h = function (e, t, n) {
            var i = n ? "addEventListener" : "removeEventListener";
            n && h(e, t),
              f.forEach(function (n) {
                e[i](n, t);
              });
          },
          z = function (e, n, r, a, o) {
            var s = t.createEvent("Event");
            return (
              r || (r = {}),
              (r.instance = i),
              s.initEvent(n, !a, !o),
              (s.detail = r),
              e.dispatchEvent(s),
              s
            );
          },
          b = function (t, n) {
            var i;
            !o && (i = e.picturefill || r.pf)
              ? (n &&
                  n.src &&
                  !t.getAttribute("srcset") &&
                  t.setAttribute("srcset", n.src),
                i({ reevaluate: !0, elements: [t] }))
              : n && n.src && (t.src = n.src);
          },
          A = function (e, t) {
            return (getComputedStyle(e, null) || {})[t];
          },
          C = function (e, t, n) {
            for (
              n = n || e.offsetWidth;
              n < r.minSize && t && !e._lazysizesWidth;

            )
              (n = t.offsetWidth), (t = t.parentNode);
            return n;
          },
          E =
            ((ye = []),
            (ge = []),
            (ve = ye),
            (me = function () {
              var e = ve;
              for (ve = ye.length ? ge : ye, de = !0, fe = !1; e.length; )
                e.shift()();
              de = !1;
            }),
            (pe = function (e, n) {
              de && !n
                ? e.apply(this, arguments)
                : (ve.push(e), fe || ((fe = !0), (t.hidden ? l : u)(me)));
            }),
            (pe._lsFlush = me),
            pe),
          _ = function (e, t) {
            return t
              ? function () {
                  E(e);
                }
              : function () {
                  var t = this,
                    n = arguments;
                  E(function () {
                    e.apply(t, n);
                  });
                };
          },
          M = function (e) {
            var t,
              i,
              r = function () {
                (t = null), e();
              },
              a = function () {
                var e = n.now() - i;
                e < 99 ? l(a, 99 - e) : (c || r)(r);
              };
            return function () {
              (i = n.now()), t || (t = l(a, 99));
            };
          },
          w =
            ((U = /^img$/i),
            (G = /^iframe$/i),
            (J = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent)),
            (K = 0),
            (Q = 0),
            (V = -1),
            (X = function (e) {
              Q--, (!e || Q < 0 || !e.target) && (Q = 0);
            }),
            (Y = function (e) {
              return (
                null == I && (I = "hidden" == A(t.body, "visibility")),
                I ||
                  !(
                    "hidden" == A(e.parentNode, "visibility") &&
                    "hidden" == A(e, "visibility")
                  )
              );
            }),
            (Z = function (e, n) {
              var i,
                r = e,
                o = Y(e);
              for (
                k -= n, q += n, H -= n, $ += n;
                o && (r = r.offsetParent) && r != t.body && r != a;

              )
                (o = (A(r, "opacity") || 1) > 0) &&
                  "visible" != A(r, "overflow") &&
                  ((i = r.getBoundingClientRect()),
                  (o =
                    $ > i.left &&
                    H < i.right &&
                    q > i.top - 1 &&
                    k < i.bottom + 1));
              return o;
            }),
            (ee = function () {
              var e,
                n,
                o,
                s,
                l,
                u,
                c,
                d,
                f,
                y,
                g,
                v,
                m = i.elements;
              if ((F = r.loadMode) && Q < 8 && (e = m.length)) {
                for (n = 0, V++; n < e; n++)
                  if (m[n] && !m[n]._lazyRace)
                    if (!J || (i.prematureUnveil && i.prematureUnveil(m[n])))
                      se(m[n]);
                    else if (
                      (((d = m[n].getAttribute("data-expand")) &&
                        (u = 1 * d)) ||
                        (u = K),
                      y ||
                        ((y =
                          !r.expand || r.expand < 1
                            ? a.clientHeight > 500 && a.clientWidth > 500
                              ? 500
                              : 370
                            : r.expand),
                        (i._defEx = y),
                        (g = y * r.expFactor),
                        (v = r.hFac),
                        (I = null),
                        K < g && Q < 1 && V > 2 && F > 2 && !t.hidden
                          ? ((K = g), (V = 0))
                          : (K = F > 1 && V > 1 && Q < 6 ? y : 0)),
                      f !== u &&
                        ((j = innerWidth + u * v),
                        (D = innerHeight + u),
                        (c = -1 * u),
                        (f = u)),
                      (o = m[n].getBoundingClientRect()),
                      (q = o.bottom) >= c &&
                        (k = o.top) <= D &&
                        ($ = o.right) >= c * v &&
                        (H = o.left) <= j &&
                        (q || $ || H || k) &&
                        (r.loadHidden || Y(m[n])) &&
                        ((P && Q < 3 && !d && (F < 3 || V < 4)) || Z(m[n], u)))
                    ) {
                      if ((se(m[n]), (l = !0), Q > 9)) break;
                    } else
                      !l &&
                        P &&
                        !s &&
                        Q < 4 &&
                        V < 4 &&
                        F > 2 &&
                        (W[0] || r.preloadAfterLoad) &&
                        (W[0] ||
                          (!d &&
                            (q ||
                              $ ||
                              H ||
                              k ||
                              "auto" != m[n].getAttribute(r.sizesAttr)))) &&
                        (s = W[0] || m[n]);
                s && !l && se(s);
              }
            }),
            (te = (function (e) {
              var t,
                i = 0,
                a = r.throttleDelay,
                o = r.ricTimeout,
                s = function () {
                  (t = !1), (i = n.now()), e();
                },
                u =
                  c && o > 49
                    ? function () {
                        c(s, { timeout: o }),
                          o !== r.ricTimeout && (o = r.ricTimeout);
                      }
                    : _(function () {
                        l(s);
                      }, !0);
              return function (e) {
                var r;
                (e = !0 === e) && (o = 33),
                  t ||
                    ((t = !0),
                    (r = a - (n.now() - i)) < 0 && (r = 0),
                    e || r < 9 ? u() : l(u, r));
              };
            })(ee)),
            (ne = function (e) {
              var t = e.target;
              t._lazyCache
                ? delete t._lazyCache
                : (X(e),
                  m(t, r.loadedClass),
                  p(t, r.loadingClass),
                  h(t, re),
                  z(t, "lazyloaded"));
            }),
            (ie = _(ne)),
            (re = function (e) {
              ie({ target: e.target });
            }),
            (ae = function (e) {
              var t,
                n = e.getAttribute(r.srcsetAttr);
              (t =
                r.customMedia[
                  e.getAttribute("data-media") || e.getAttribute("media")
                ]) && e.setAttribute("media", t),
                n && e.setAttribute("srcset", n);
            }),
            (oe = _(function (e, t, n, i, a) {
              var o, s, u, c, f, y;
              (f = z(e, "lazybeforeunveil", t)).defaultPrevented ||
                (i && (n ? m(e, r.autosizesClass) : e.setAttribute("sizes", i)),
                (s = e.getAttribute(r.srcsetAttr)),
                (o = e.getAttribute(r.srcAttr)),
                a && (c = (u = e.parentNode) && d.test(u.nodeName || "")),
                (y = t.firesLoad || ("src" in e && (s || o || c))),
                (f = { target: e }),
                m(e, r.loadingClass),
                y && (clearTimeout(B), (B = l(X, 2500)), h(e, re, !0)),
                c && g.call(u.getElementsByTagName("source"), ae),
                s
                  ? e.setAttribute("srcset", s)
                  : o &&
                    !c &&
                    (G.test(e.nodeName)
                      ? (function (e, t) {
                          try {
                            e.contentWindow.location.replace(t);
                          } catch (n) {
                            e.src = t;
                          }
                        })(e, o)
                      : (e.src = o)),
                a && (s || c) && b(e, { src: o })),
                e._lazyRace && delete e._lazyRace,
                p(e, r.lazyClass),
                E(function () {
                  var t = e.complete && e.naturalWidth > 1;
                  (y && !t) ||
                    (t && m(e, "ls-is-cached"),
                    ne(f),
                    (e._lazyCache = !0),
                    l(function () {
                      "_lazyCache" in e && delete e._lazyCache;
                    }, 9)),
                    "lazy" == e.loading && Q--;
                }, !0);
            })),
            (se = function (e) {
              if (!e._lazyRace) {
                var t,
                  n = U.test(e.nodeName),
                  i =
                    n &&
                    (e.getAttribute(r.sizesAttr) || e.getAttribute("sizes")),
                  a = "auto" == i;
                ((!a && P) ||
                  !n ||
                  (!e.getAttribute("src") && !e.srcset) ||
                  e.complete ||
                  v(e, r.errorClass) ||
                  !v(e, r.lazyClass)) &&
                  ((t = z(e, "lazyunveilread").detail),
                  a && x.updateElem(e, !0, e.offsetWidth),
                  (e._lazyRace = !0),
                  Q++,
                  oe(e, t, a, i, n));
              }
            }),
            (le = M(function () {
              (r.loadMode = 3), te();
            })),
            (ue = function () {
              3 == r.loadMode && (r.loadMode = 2), le();
            }),
            (ce = function () {
              P ||
                (n.now() - R < 999
                  ? l(ce, 999)
                  : ((P = !0), (r.loadMode = 3), te(), s("scroll", ue, !0)));
            }),
            {
              _: function () {
                (R = n.now()),
                  (i.elements = t.getElementsByClassName(r.lazyClass)),
                  (W = t.getElementsByClassName(
                    r.lazyClass + " " + r.preloadClass
                  )),
                  s("scroll", te, !0),
                  s("resize", te, !0),
                  s("pageshow", function (e) {
                    if (e.persisted) {
                      var n = t.querySelectorAll("." + r.loadingClass);
                      n.length &&
                        n.forEach &&
                        u(function () {
                          n.forEach(function (e) {
                            e.complete && se(e);
                          });
                        });
                    }
                  }),
                  e.MutationObserver
                    ? new MutationObserver(te).observe(a, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      })
                    : (a.addEventListener("DOMNodeInserted", te, !0),
                      a.addEventListener("DOMAttrModified", te, !0),
                      setInterval(te, 999)),
                  s("hashchange", te, !0),
                  [
                    "focus",
                    "mouseover",
                    "click",
                    "load",
                    "transitionend",
                    "animationend",
                  ].forEach(function (e) {
                    t.addEventListener(e, te, !0);
                  }),
                  /d$|^c/.test(t.readyState)
                    ? ce()
                    : (s("load", ce),
                      t.addEventListener("DOMContentLoaded", te),
                      l(ce, 2e4)),
                  i.elements.length ? (ee(), E._lsFlush()) : te();
              },
              checkElems: te,
              unveil: se,
              _aLSL: ue,
            }),
          x =
            ((L = _(function (e, t, n, i) {
              var r, a, o;
              if (
                ((e._lazysizesWidth = i),
                (i += "px"),
                e.setAttribute("sizes", i),
                d.test(t.nodeName || ""))
              )
                for (
                  a = 0, o = (r = t.getElementsByTagName("source")).length;
                  a < o;
                  a++
                )
                  r[a].setAttribute("sizes", i);
              n.detail.dataAttr || b(e, n.detail);
            })),
            (O = function (e, t, n) {
              var i,
                r = e.parentNode;
              r &&
                ((n = C(e, r, n)),
                (i = z(e, "lazybeforesizes", { width: n, dataAttr: !!t }))
                  .defaultPrevented ||
                  ((n = i.detail.width) &&
                    n !== e._lazysizesWidth &&
                    L(e, r, i, n)));
            }),
            (T = M(function () {
              var e,
                t = S.length;
              if (t) for (e = 0; e < t; e++) O(S[e]);
            })),
            {
              _: function () {
                (S = t.getElementsByClassName(r.autosizesClass)),
                  s("resize", T);
              },
              checkElems: T,
              updateElem: O,
            }),
          N = function () {
            !N.i && t.getElementsByClassName && ((N.i = !0), x._(), w._());
          };
        var S, L, O, T;
        var W,
          P,
          B,
          F,
          R,
          j,
          D,
          k,
          H,
          $,
          q,
          I,
          U,
          G,
          J,
          K,
          Q,
          V,
          X,
          Y,
          Z,
          ee,
          te,
          ne,
          ie,
          re,
          ae,
          oe,
          se,
          le,
          ue,
          ce;
        var de, fe, ye, ge, ve, me, pe;
        return (
          l(function () {
            r.init && N();
          }),
          (i = {
            cfg: r,
            autoSizer: x,
            loader: w,
            init: N,
            uP: b,
            aC: m,
            rC: p,
            hC: v,
            fire: z,
            gW: C,
            rAF: E,
          })
        );
      })(t, t.document, Date);
      (t.lazySizes = i), e.exports && (e.exports = i);
    })("undefined" != typeof window ? window : {});
  },
  25: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(1);
    n.n(i).a.init();
  },
}); /*! This file is auto-generated */
window.addComment = (function (f) {
  var v,
    I,
    C,
    h = f.document,
    E = {
      commentReplyClass: "comment-reply-link",
      commentReplyTitleId: "reply-title",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID",
    },
    e = f.MutationObserver || f.WebKitMutationObserver || f.MozMutationObserver,
    i = "querySelector" in h && "addEventListener" in f,
    n = !!h.documentElement.dataset;
  function t() {
    d(),
      (function () {
        if (!e) return;
        new e(o).observe(h.body, { childList: !0, subtree: !0 });
      })();
  }
  function d(e) {
    if (i && ((v = b(E.cancelReplyId)), (I = b(E.commentFormId)), v)) {
      v.addEventListener("touchstart", l), v.addEventListener("click", l);
      var t = function (e) {
        if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode)
          return (
            I.removeEventListener("keydown", t),
            e.preventDefault(),
            I.submit.click(),
            !1
          );
      };
      I && I.addEventListener("keydown", t);
      for (
        var n,
          d = (function (e) {
            var t,
              n = E.commentReplyClass;
            (e && e.childNodes) || (e = h);
            t = h.getElementsByClassName
              ? e.getElementsByClassName(n)
              : e.querySelectorAll("." + n);
            return t;
          })(e),
          o = 0,
          r = d.length;
        o < r;
        o++
      )
        (n = d[o]).addEventListener("touchstart", a),
          n.addEventListener("click", a);
    }
  }
  function l(e) {
    var t = b(E.temporaryFormId);
    if (t && C) {
      b(E.parentIdFieldId).value = "0";
      var n = t.textContent;
      t.parentNode.replaceChild(C, t), (this.style.display = "none");
      var d = b(E.commentReplyTitleId),
        o = d && d.firstChild,
        r = o && o.nextSibling;
      o &&
        o.nodeType === Node.TEXT_NODE &&
        n &&
        (r &&
          "A" === r.nodeName &&
          r.id !== E.cancelReplyId &&
          (r.style.display = ""),
        (o.textContent = n)),
        e.preventDefault();
    }
  }
  function a(e) {
    var t = b(E.commentReplyTitleId),
      n = t && t.firstChild.textContent,
      d = this,
      o = m(d, "belowelement"),
      r = m(d, "commentid"),
      i = m(d, "respondelement"),
      l = m(d, "postid"),
      a = m(d, "replyto") || n;
    o &&
      r &&
      i &&
      l &&
      !1 === f.addComment.moveForm(o, r, i, l, a) &&
      e.preventDefault();
  }
  function o(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void d();
  }
  function m(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function b(e) {
    return h.getElementById(e);
  }
  return (
    i && "loading" !== h.readyState
      ? t()
      : i && f.addEventListener("DOMContentLoaded", t, !1),
    {
      init: d,
      moveForm: function (e, t, n, d, o) {
        var r = b(e);
        C = b(n);
        var i,
          l,
          a,
          m = b(E.parentIdFieldId),
          c = b(E.postIdFieldId),
          s = b(E.commentReplyTitleId),
          y = s && s.firstChild,
          u = y && y.nextSibling;
        if (r && C && m) {
          void 0 === o && (o = y && y.textContent),
            (function (e) {
              var t = E.temporaryFormId,
                n = b(t),
                d = b(E.commentReplyTitleId),
                o = d ? d.firstChild.textContent : "";
              if (n) return;
              ((n = h.createElement("div")).id = t),
                (n.style.display = "none"),
                (n.textContent = o),
                e.parentNode.insertBefore(n, e);
            })(C),
            d && c && (c.value = d),
            (m.value = t),
            (v.style.display = ""),
            r.parentNode.insertBefore(C, r.nextSibling),
            y &&
              y.nodeType === Node.TEXT_NODE &&
              (u &&
                "A" === u.nodeName &&
                u.id !== E.cancelReplyId &&
                (u.style.display = "none"),
              (y.textContent = o)),
            (v.onclick = function () {
              return !1;
            });
          try {
            for (var p = 0; p < I.elements.length; p++)
              if (
                ((i = I.elements[p]),
                (l = !1),
                "getComputedStyle" in f
                  ? (a = f.getComputedStyle(i))
                  : h.documentElement.currentStyle && (a = i.currentStyle),
                ((i.offsetWidth <= 0 && i.offsetHeight <= 0) ||
                  "hidden" === a.visibility) &&
                  (l = !0),
                "hidden" !== i.type && !i.disabled && !l)
              ) {
                i.focus();
                break;
              }
          } catch (e) {}
          return !1;
        }
      },
    }
  );
})(window);
/*!
 * Stickyfill – `position: sticky` polyfill
 * v. 2.0.3 | https://github.com/wilddeer/stickyfill
 * MIT License
 */
!(function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function e(a) {
    return parseFloat(a) || 0;
  }
  function f(a) {
    for (var b = 0; a; ) (b += a.offsetTop), (a = a.offsetParent);
    return b;
  }
  function g() {
    function c() {
      a.pageXOffset != k.left
        ? ((k.top = a.pageYOffset), (k.left = a.pageXOffset), n.refreshAll())
        : a.pageYOffset != k.top &&
          ((k.top = a.pageYOffset),
          (k.left = a.pageXOffset),
          l.forEach(function (a) {
            return a._recalcPosition();
          }));
    }
    function d() {
      f = setInterval(function () {
        l.forEach(function (a) {
          return a._fastCheck();
        });
      }, 500);
    }
    function e() {
      clearInterval(f);
    }
    c(),
      a.addEventListener("scroll", c),
      a.addEventListener("resize", n.refreshAll),
      a.addEventListener("orientationchange", n.refreshAll);
    var f = void 0,
      g = void 0,
      h = void 0;
    "hidden" in b
      ? ((g = "hidden"), (h = "visibilitychange"))
      : "webkitHidden" in b &&
        ((g = "webkitHidden"), (h = "webkitvisibilitychange")),
      h
        ? (b[g] || d(),
          b.addEventListener(h, function () {
            b[g] ? e() : d();
          }))
        : d();
  }
  var h = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    i = !1;
  a.getComputedStyle
    ? !(function () {
        var a = b.createElement("div");
        ["", "-webkit-", "-moz-", "-ms-"].some(function (b) {
          try {
            a.style.position = b + "sticky";
          } catch (a) {}
          return "" != a.style.position;
        }) && (i = !0);
      })()
    : (i = !0);
  var j = "undefined" != typeof ShadowRoot,
    k = { top: null, left: null },
    l = [],
    m = (function () {
      function g(a) {
        if ((c(this, g), !(a instanceof HTMLElement)))
          throw new Error("First argument must be HTMLElement");
        if (
          l.some(function (b) {
            return b._node === a;
          })
        )
          throw new Error("Stickyfill is already applied to this node");
        (this._node = a),
          (this._stickyMode = null),
          (this._active = !1),
          l.push(this),
          this.refresh();
      }
      return (
        h(g, [
          {
            key: "refresh",
            value: function () {
              if (!i && !this._removed) {
                this._active && this._deactivate();
                var c = this._node,
                  g = getComputedStyle(c),
                  h = {
                    top: g.top,
                    display: g.display,
                    marginTop: g.marginTop,
                    marginBottom: g.marginBottom,
                    marginLeft: g.marginLeft,
                    marginRight: g.marginRight,
                    cssFloat: g.cssFloat,
                  };
                if (
                  !isNaN(parseFloat(h.top)) &&
                  "table-cell" != h.display &&
                  "none" != h.display
                ) {
                  this._active = !0;
                  var k = c.parentNode,
                    l = j && k instanceof ShadowRoot ? k.host : k,
                    m = c.getBoundingClientRect(),
                    n = l.getBoundingClientRect(),
                    o = getComputedStyle(l);
                  (this._parent = {
                    node: l,
                    styles: { position: l.style.position },
                    offsetHeight: l.offsetHeight,
                  }),
                    (this._offsetToWindow = {
                      left: m.left,
                      right: b.documentElement.clientWidth - m.right,
                    }),
                    (this._offsetToParent = {
                      top: m.top - n.top - e(o.borderTopWidth),
                      left: m.left - n.left - e(o.borderLeftWidth),
                      right: -m.right + n.right - e(o.borderRightWidth),
                    }),
                    (this._styles = {
                      position: c.style.position,
                      top: c.style.top,
                      bottom: c.style.bottom,
                      left: c.style.left,
                      right: c.style.right,
                      width: c.style.width,
                      marginTop: c.style.marginTop,
                      marginLeft: c.style.marginLeft,
                      marginRight: c.style.marginRight,
                    });
                  var p = e(h.top);
                  this._limits = {
                    start: m.top + a.pageYOffset - p,
                    end:
                      n.top +
                      a.pageYOffset +
                      l.offsetHeight -
                      e(o.borderBottomWidth) -
                      c.offsetHeight -
                      p -
                      e(h.marginBottom),
                  };
                  var q = o.position;
                  "absolute" != q &&
                    "relative" != q &&
                    (l.style.position = "relative"),
                    this._recalcPosition();
                  var r = (this._clone = {});
                  (r.node = b.createElement("div")),
                    d(r.node.style, {
                      width: m.right - m.left + "px",
                      height: m.bottom - m.top + "px",
                      marginTop: h.marginTop,
                      marginBottom: h.marginBottom,
                      marginLeft: h.marginLeft,
                      marginRight: h.marginRight,
                      cssFloat: h.cssFloat,
                      padding: 0,
                      border: 0,
                      borderSpacing: 0,
                      fontSize: "1em",
                      position: "static",
                    }),
                    k.insertBefore(r.node, c),
                    (r.docOffsetTop = f(r.node));
                }
              }
            },
          },
          {
            key: "_recalcPosition",
            value: function () {
              if (this._active && !this._removed) {
                var a =
                  k.top <= this._limits.start
                    ? "start"
                    : k.top >= this._limits.end
                    ? "end"
                    : "middle";
                if (this._stickyMode != a) {
                  switch (a) {
                    case "start":
                      d(this._node.style, {
                        position: "absolute",
                        left: this._offsetToParent.left + "px",
                        right: this._offsetToParent.right + "px",
                        top: this._offsetToParent.top + "px",
                        bottom: "auto",
                        width: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                      });
                      break;
                    case "middle":
                      d(this._node.style, {
                        position: "fixed",
                        left: this._offsetToWindow.left + "px",
                        right: this._offsetToWindow.right + "px",
                        top: this._styles.top,
                        bottom: "auto",
                        width: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                      });
                      break;
                    case "end":
                      d(this._node.style, {
                        position: "absolute",
                        left: this._offsetToParent.left + "px",
                        right: this._offsetToParent.right + "px",
                        top: "auto",
                        bottom: 0,
                        width: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                      });
                  }
                  this._stickyMode = a;
                }
              }
            },
          },
          {
            key: "_fastCheck",
            value: function () {
              this._active &&
                !this._removed &&
                (Math.abs(f(this._clone.node) - this._clone.docOffsetTop) > 1 ||
                  Math.abs(
                    this._parent.node.offsetHeight - this._parent.offsetHeight
                  ) > 1) &&
                this.refresh();
            },
          },
          {
            key: "_deactivate",
            value: function () {
              var a = this;
              this._active &&
                !this._removed &&
                (this._clone.node.parentNode.removeChild(this._clone.node),
                delete this._clone,
                d(this._node.style, this._styles),
                delete this._styles,
                l.some(function (b) {
                  return (
                    b !== a && b._parent && b._parent.node === a._parent.node
                  );
                }) || d(this._parent.node.style, this._parent.styles),
                delete this._parent,
                (this._stickyMode = null),
                (this._active = !1),
                delete this._offsetToWindow,
                delete this._offsetToParent,
                delete this._limits);
            },
          },
          {
            key: "remove",
            value: function () {
              var a = this;
              this._deactivate(),
                l.some(function (b, c) {
                  if (b._node === a._node) return l.splice(c, 1), !0;
                }),
                (this._removed = !0);
            },
          },
        ]),
        g
      );
    })(),
    n = {
      stickies: l,
      Sticky: m,
      addOne: function (a) {
        if (!(a instanceof HTMLElement)) {
          if (!a.length || !a[0]) return;
          a = a[0];
        }
        for (var b = 0; b < l.length; b++) if (l[b]._node === a) return l[b];
        return new m(a);
      },
      add: function (a) {
        if ((a instanceof HTMLElement && (a = [a]), a.length)) {
          for (
            var b = [],
              c = function (c) {
                var d = a[c];
                return d instanceof HTMLElement
                  ? l.some(function (a) {
                      if (a._node === d) return b.push(a), !0;
                    })
                    ? "continue"
                    : void b.push(new m(d))
                  : (b.push(void 0), "continue");
              },
              d = 0;
            d < a.length;
            d++
          ) {
            c(d);
          }
          return b;
        }
      },
      refreshAll: function () {
        l.forEach(function (a) {
          return a.refresh();
        });
      },
      removeOne: function (a) {
        if (!(a instanceof HTMLElement)) {
          if (!a.length || !a[0]) return;
          a = a[0];
        }
        l.some(function (b) {
          if (b._node === a) return b.remove(), !0;
        });
      },
      remove: function (a) {
        if ((a instanceof HTMLElement && (a = [a]), a.length))
          for (
            var b = function (b) {
                var c = a[b];
                l.some(function (a) {
                  if (a._node === c) return a.remove(), !0;
                });
              },
              c = 0;
            c < a.length;
            c++
          )
            b(c);
      },
      removeAll: function () {
        for (; l.length; ) l[0].remove();
      },
    };
  i || g(),
    "undefined" != typeof module && module.exports
      ? (module.exports = n)
      : (a.Stickyfill = n);
})(window, document);
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  function b() {}
  function c() {
    try {
      return document.activeElement;
    } catch (a) {}
  }
  function d(a, b) {
    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return !0;
    return !1;
  }
  function e(a, b, c) {
    return a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent
      ? a.attachEvent("on" + b, c)
      : void 0;
  }
  function f(a, b) {
    var c;
    a.createTextRange
      ? ((c = a.createTextRange()), c.move("character", b), c.select())
      : a.selectionStart && (a.focus(), a.setSelectionRange(b, b));
  }
  function g(a, b) {
    try {
      return (a.type = b), !0;
    } catch (c) {
      return !1;
    }
  }
  function h(a, b) {
    if (a && a.getAttribute(B)) b(a);
    else
      for (
        var c,
          d = a ? a.getElementsByTagName("input") : N,
          e = a ? a.getElementsByTagName("textarea") : O,
          f = d ? d.length : 0,
          g = e ? e.length : 0,
          h = f + g,
          i = 0;
        h > i;
        i++
      )
        (c = f > i ? d[i] : e[i - f]), b(c);
  }
  function i(a) {
    h(a, k);
  }
  function j(a) {
    h(a, l);
  }
  function k(a, b) {
    var c = !!b && a.value !== b,
      d = a.value === a.getAttribute(B);
    if ((c || d) && "true" === a.getAttribute(C)) {
      a.removeAttribute(C),
        (a.value = a.value.replace(a.getAttribute(B), "")),
        (a.className = a.className.replace(A, ""));
      var e = a.getAttribute(I);
      parseInt(e, 10) >= 0 &&
        (a.setAttribute("maxLength", e), a.removeAttribute(I));
      var f = a.getAttribute(D);
      return f && (a.type = f), !0;
    }
    return !1;
  }
  function l(a) {
    var b = a.getAttribute(B);
    if ("" === a.value && b) {
      a.setAttribute(C, "true"), (a.value = b), (a.className += " " + z);
      var c = a.getAttribute(I);
      c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));
      var d = a.getAttribute(D);
      return (
        d
          ? (a.type = "text")
          : "password" === a.type &&
            g(a, "text") &&
            a.setAttribute(D, "password"),
        !0
      );
    }
    return !1;
  }
  function m(a) {
    return function () {
      P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C)
        ? f(a, 0)
        : k(a);
    };
  }
  function n(a) {
    return function () {
      l(a);
    };
  }
  function o(a) {
    return function () {
      i(a);
    };
  }
  function p(a) {
    return function (b) {
      return (
        (v = a.value),
        "true" === a.getAttribute(C) &&
        v === a.getAttribute(B) &&
        d(x, b.keyCode)
          ? (b.preventDefault && b.preventDefault(), !1)
          : void 0
      );
    };
  }
  function q(a) {
    return function () {
      k(a, v), "" === a.value && (a.blur(), f(a, 0));
    };
  }
  function r(a) {
    return function () {
      a === c() &&
        a.value === a.getAttribute(B) &&
        "true" === a.getAttribute(C) &&
        f(a, 0);
    };
  }
  function s(a) {
    var b = a.form;
    b &&
      "string" == typeof b &&
      ((b = document.getElementById(b)),
      b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))),
      e(a, "focus", m(a)),
      e(a, "blur", n(a)),
      P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))),
      a.setAttribute(F, "true"),
      a.setAttribute(B, T),
      (P || a !== c()) && l(a);
  }
  var t = document.createElement("input"),
    u = void 0 !== t.placeholder;
  if (
    ((a.Placeholders = {
      nativeSupport: u,
      disable: u ? b : i,
      enable: u ? b : j,
    }),
    !u)
  ) {
    var v,
      w = [
        "text",
        "search",
        "url",
        "tel",
        "email",
        "password",
        "number",
        "textarea",
      ],
      x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      y = "#ccc",
      z = "placeholdersjs",
      A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"),
      B = "data-placeholder-value",
      C = "data-placeholder-active",
      D = "data-placeholder-type",
      E = "data-placeholder-submit",
      F = "data-placeholder-bound",
      G = "data-placeholder-focus",
      H = "data-placeholder-live",
      I = "data-placeholder-maxlength",
      J = 100,
      K = document.getElementsByTagName("head")[0],
      L = document.documentElement,
      M = a.Placeholders,
      N = document.getElementsByTagName("input"),
      O = document.getElementsByTagName("textarea"),
      P = "false" === L.getAttribute(G),
      Q = "false" !== L.getAttribute(H),
      R = document.createElement("style");
    R.type = "text/css";
    var S = document.createTextNode("." + z + " {color:" + y + ";}");
    R.styleSheet ? (R.styleSheet.cssText = S.nodeValue) : R.appendChild(S),
      K.insertBefore(R, K.firstChild);
    for (var T, U, V = 0, W = N.length + O.length; W > V; V++)
      (U = V < N.length ? N[V] : O[V - N.length]),
        (T = U.attributes.placeholder),
        T && ((T = T.nodeValue), T && d(w, U.type) && s(U));
    var X = setInterval(function () {
      for (var a = 0, b = N.length + O.length; b > a; a++)
        (U = a < N.length ? N[a] : O[a - N.length]),
          (T = U.attributes.placeholder),
          T
            ? ((T = T.nodeValue),
              T &&
                d(w, U.type) &&
                (U.getAttribute(F) || s(U),
                (T !== U.getAttribute(B) ||
                  ("password" === U.type && !U.getAttribute(D))) &&
                  ("password" === U.type &&
                    !U.getAttribute(D) &&
                    g(U, "text") &&
                    U.setAttribute(D, "password"),
                  U.value === U.getAttribute(B) && (U.value = T),
                  U.setAttribute(B, T))))
            : U.getAttribute(C) && (k(U), U.removeAttribute(B));
      Q || clearInterval(X);
    }, J);
    e(a, "beforeunload", function () {
      M.disable();
    });
  }
})(this),
  (function (a, b) {
    "use strict";
    var c = a.fn.val,
      d = a.fn.prop;
    b.Placeholders.nativeSupport ||
      ((a.fn.val = function (a) {
        var b = c.apply(this, arguments),
          d = this.eq(0).data("placeholder-value");
        return void 0 === a && this.eq(0).data("placeholder-active") && b === d
          ? ""
          : b;
      }),
      (a.fn.prop = function (a, b) {
        return void 0 === b &&
          this.eq(0).data("placeholder-active") &&
          "value" === a
          ? ""
          : d.apply(this, arguments);
      }));
  })(
    jQuery,
    this
  ); /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia ||
  (window.matchMedia = (function () {
    "use strict";
    var styleMedia = window.styleMedia || window.media;
    if (!styleMedia) {
      var style = document.createElement("style"),
        script = document.getElementsByTagName("script")[0],
        info = null;
      style.type = "text/css";
      style.id = "matchmediajs-test";
      script.parentNode.insertBefore(style, script);
      info =
        ("getComputedStyle" in window &&
          window.getComputedStyle(style, null)) ||
        style.currentStyle;
      styleMedia = {
        matchMedium: function (media) {
          var text =
            "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }
          return info.width === "1px";
        },
      };
    }
    return function (media) {
      return {
        matches: styleMedia.matchMedium(media || "all"),
        media: media || "all",
      };
    };
  })()); /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function () {
  if (window.matchMedia && window.matchMedia("all").addListener) {
    return !1;
  }
  var localMatchMedia = window.matchMedia,
    hasMediaQueries = localMatchMedia("only all").matches,
    isListening = !1,
    timeoutID = 0,
    queries = [],
    handleChange = function (evt) {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(function () {
        for (var i = 0, il = queries.length; i < il; i++) {
          var mql = queries[i].mql,
            listeners = queries[i].listeners || [],
            matches = localMatchMedia(mql.media).matches;
          if (matches !== mql.matches) {
            mql.matches = matches;
            for (var j = 0, jl = listeners.length; j < jl; j++) {
              listeners[j].call(window, mql);
            }
          }
        }
      }, 30);
    };
  window.matchMedia = function (media) {
    var mql = localMatchMedia(media),
      listeners = [],
      index = 0;
    mql.addListener = function (listener) {
      if (!hasMediaQueries) {
        return;
      }
      if (!isListening) {
        isListening = !0;
        window.addEventListener("resize", handleChange, !0);
      }
      if (index === 0) {
        index = queries.push({ mql: mql, listeners: listeners });
      }
      listeners.push(listener);
    };
    mql.removeListener = function (listener) {
      for (var i = 0, il = listeners.length; i < il; i++) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
        }
      }
    };
    return mql;
  };
})();
/*! Picturefill - v2.3.1 - 2015-04-09
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia ||
  (window.matchMedia = (function () {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
      var b = document.createElement("style"),
        c = document.getElementsByTagName("script")[0],
        d = null;
      (b.type = "text/css"),
        (b.id = "matchmediajs-test"),
        c.parentNode.insertBefore(b, c),
        (d =
          ("getComputedStyle" in window && window.getComputedStyle(b, null)) ||
          b.currentStyle),
        (a = {
          matchMedium: function (a) {
            var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
            return (
              b.styleSheet ? (b.styleSheet.cssText = c) : (b.textContent = c),
              "1px" === d.width
            );
          },
        });
    }
    return function (b) {
      return { matches: a.matchMedium(b || "all"), media: b || "all" };
    };
  })()),
  (function (a, b, c) {
    "use strict";
    function d(b) {
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = b)
        : "function" == typeof define &&
          define.amd &&
          define("picturefill", function () {
            return b;
          }),
        "object" == typeof a && (a.picturefill = b);
    }
    function e(a) {
      var b,
        c,
        d,
        e,
        f,
        i = a || {};
      b = i.elements || g.getAllElements();
      for (var j = 0, k = b.length; k > j; j++)
        if (
          ((c = b[j]),
          (d = c.parentNode),
          (e = void 0),
          (f = void 0),
          "IMG" === c.nodeName.toUpperCase() &&
            (c[g.ns] || (c[g.ns] = {}), i.reevaluate || !c[g.ns].evaluated))
        ) {
          if (d && "PICTURE" === d.nodeName.toUpperCase()) {
            if ((g.removeVideoShim(d), (e = g.getMatch(c, d)), e === !1))
              continue;
          } else e = void 0;
          ((d && "PICTURE" === d.nodeName.toUpperCase()) ||
            (!g.sizesSupported && c.srcset && h.test(c.srcset))) &&
            g.dodgeSrcset(c),
            e
              ? ((f = g.processSourceSet(e)), g.applyBestCandidate(f, c))
              : ((f = g.processSourceSet(c)),
                (void 0 === c.srcset || c[g.ns].srcset) &&
                  g.applyBestCandidate(f, c)),
            (c[g.ns].evaluated = !0);
        }
    }
    function f() {
      function c() {
        clearTimeout(d), (d = setTimeout(h, 60));
      }
      g.initTypeDetects(), e();
      var d,
        f = setInterval(function () {
          return (
            e(),
            /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(f) : void 0
          );
        }, 250),
        h = function () {
          e({ reevaluate: !0 });
        };
      a.addEventListener
        ? a.addEventListener("resize", c, !1)
        : a.attachEvent && a.attachEvent("onresize", c);
    }
    if (a.HTMLPictureElement) return void d(function () {});
    b.createElement("picture");
    var g = a.picturefill || {},
      h = /\s+\+?\d+(e\d+)?w/;
    (g.ns = "picturefill"),
      (function () {
        (g.srcsetSupported = "srcset" in c),
          (g.sizesSupported = "sizes" in c),
          (g.curSrcSupported = "currentSrc" in c);
      })(),
      (g.trim = function (a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
      }),
      (g.makeUrl = (function () {
        var a = b.createElement("a");
        return function (b) {
          return (a.href = b), a.href;
        };
      })()),
      (g.restrictsMixedContent = function () {
        return "https:" === a.location.protocol;
      }),
      (g.matchesMedia = function (b) {
        return a.matchMedia && a.matchMedia(b).matches;
      }),
      (g.getDpr = function () {
        return a.devicePixelRatio || 1;
      }),
      (g.getWidthFromLength = function (a) {
        var c;
        if (
          !a ||
          a.indexOf("%") > -1 != !1 ||
          !(parseFloat(a) > 0 || a.indexOf("calc(") > -1)
        )
          return !1;
        (a = a.replace("vw", "%")),
          g.lengthEl ||
            ((g.lengthEl = b.createElement("div")),
            (g.lengthEl.style.cssText =
              "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),
            (g.lengthEl.className = "helper-from-picturefill-js")),
          (g.lengthEl.style.width = "0px");
        try {
          g.lengthEl.style.width = a;
        } catch (d) {}
        return (
          b.body.appendChild(g.lengthEl),
          (c = g.lengthEl.offsetWidth),
          0 >= c && (c = !1),
          b.body.removeChild(g.lengthEl),
          c
        );
      }),
      (g.detectTypeSupport = function (b, c) {
        var d = new a.Image();
        return (
          (d.onerror = function () {
            (g.types[b] = !1), e();
          }),
          (d.onload = function () {
            (g.types[b] = 1 === d.width), e();
          }),
          (d.src = c),
          "pending"
        );
      }),
      (g.types = g.types || {}),
      (g.initTypeDetects = function () {
        (g.types["image/jpeg"] = !0),
          (g.types["image/gif"] = !0),
          (g.types["image/png"] = !0),
          (g.types["image/svg+xml"] = b.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#Image",
            "1.1"
          )),
          (g.types["image/webp"] = g.detectTypeSupport(
            "image/webp",
            "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
          ));
      }),
      (g.verifyTypeSupport = function (a) {
        var b = a.getAttribute("type");
        if (null === b || "" === b) return !0;
        var c = g.types[b];
        return "string" == typeof c && "pending" !== c
          ? ((g.types[b] = g.detectTypeSupport(b, c)), "pending")
          : "function" == typeof c
          ? (c(), "pending")
          : c;
      }),
      (g.parseSize = function (a) {
        var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
        return { media: b && b[1], length: b && b[2] };
      }),
      (g.findWidthFromSourceSize = function (c) {
        for (
          var d, e = g.trim(c).split(/\s*,\s*/), f = 0, h = e.length;
          h > f;
          f++
        ) {
          var i = e[f],
            j = g.parseSize(i),
            k = j.length,
            l = j.media;
          if (k && (!l || g.matchesMedia(l)) && (d = g.getWidthFromLength(k)))
            break;
        }
        return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth);
      }),
      (g.parseSrcset = function (a) {
        for (var b = []; "" !== a; ) {
          a = a.replace(/^\s+/g, "");
          var c,
            d = a.search(/\s/g),
            e = null;
          if (-1 !== d) {
            c = a.slice(0, d);
            var f = c.slice(-1);
            if (
              (("," === f || "" === c) &&
                ((c = c.replace(/,+$/, "")), (e = "")),
              (a = a.slice(d + 1)),
              null === e)
            ) {
              var g = a.indexOf(",");
              -1 !== g
                ? ((e = a.slice(0, g)), (a = a.slice(g + 1)))
                : ((e = a), (a = ""));
            }
          } else (c = a), (a = "");
          (c || e) && b.push({ url: c, descriptor: e });
        }
        return b;
      }),
      (g.parseDescriptor = function (a, b) {
        var c,
          d = b || "100vw",
          e = a && a.replace(/(^\s+|\s+$)/g, ""),
          f = g.findWidthFromSourceSize(d);
        if (e)
          for (var h = e.split(" "), i = h.length - 1; i >= 0; i--) {
            var j = h[i],
              k = j && j.slice(j.length - 1);
            if (("h" !== k && "w" !== k) || g.sizesSupported) {
              if ("x" === k) {
                var l = j && parseFloat(j, 10);
                c = l && !isNaN(l) ? l : 1;
              }
            } else c = parseFloat(parseInt(j, 10) / f);
          }
        return c || 1;
      }),
      (g.getCandidatesFromSourceSet = function (a, b) {
        for (
          var c = g.parseSrcset(a), d = [], e = 0, f = c.length;
          f > e;
          e++
        ) {
          var h = c[e];
          d.push({
            url: h.url,
            resolution: g.parseDescriptor(h.descriptor, b),
          });
        }
        return d;
      }),
      (g.dodgeSrcset = function (a) {
        a.srcset &&
          ((a[g.ns].srcset = a.srcset),
          (a.srcset = ""),
          a.setAttribute("data-pfsrcset", a[g.ns].srcset));
      }),
      (g.processSourceSet = function (a) {
        var b = a.getAttribute("srcset"),
          c = a.getAttribute("sizes"),
          d = [];
        return (
          "IMG" === a.nodeName.toUpperCase() &&
            a[g.ns] &&
            a[g.ns].srcset &&
            (b = a[g.ns].srcset),
          b && (d = g.getCandidatesFromSourceSet(b, c)),
          d
        );
      }),
      (g.backfaceVisibilityFix = function (a) {
        var b = a.style || {},
          c = "webkitBackfaceVisibility" in b,
          d = b.zoom;
        c && ((b.zoom = ".999"), (c = a.offsetWidth), (b.zoom = d));
      }),
      (g.setIntrinsicSize = (function () {
        var c = {},
          d = function (a, b, c) {
            b && a.setAttribute("width", parseInt(b / c, 10));
          };
        return function (e, f) {
          var h;
          e[g.ns] &&
            !a.pfStopIntrinsicSize &&
            (void 0 === e[g.ns].dims &&
              (e[g.ns].dims =
                e.getAttribute("width") || e.getAttribute("height")),
            e[g.ns].dims ||
              (f.url in c
                ? d(e, c[f.url], f.resolution)
                : ((h = b.createElement("img")),
                  (h.onload = function () {
                    if (((c[f.url] = h.width), !c[f.url]))
                      try {
                        b.body.appendChild(h),
                          (c[f.url] = h.width || h.offsetWidth),
                          b.body.removeChild(h);
                      } catch (a) {}
                    e.src === f.url && d(e, c[f.url], f.resolution),
                      (e = null),
                      (h.onload = null),
                      (h = null);
                  }),
                  (h.src = f.url))));
        };
      })()),
      (g.applyBestCandidate = function (a, b) {
        var c, d, e;
        a.sort(g.ascendingSort), (d = a.length), (e = a[d - 1]);
        for (var f = 0; d > f; f++)
          if (((c = a[f]), c.resolution >= g.getDpr())) {
            e = c;
            break;
          }
        e &&
          ((e.url = g.makeUrl(e.url)),
          b.src !== e.url &&
            (g.restrictsMixedContent() &&
            "http:" === e.url.substr(0, "http:".length).toLowerCase()
              ? void 0 !== window.console &&
                console.warn("Blocked mixed content image " + e.url)
              : ((b.src = e.url),
                g.curSrcSupported || (b.currentSrc = b.src),
                g.backfaceVisibilityFix(b))),
          g.setIntrinsicSize(b, e));
      }),
      (g.ascendingSort = function (a, b) {
        return a.resolution - b.resolution;
      }),
      (g.removeVideoShim = function (a) {
        var b = a.getElementsByTagName("video");
        if (b.length) {
          for (var c = b[0], d = c.getElementsByTagName("source"); d.length; )
            a.insertBefore(d[0], c);
          c.parentNode.removeChild(c);
        }
      }),
      (g.getAllElements = function () {
        for (
          var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length;
          e > d;
          d++
        ) {
          var f = c[d];
          ("PICTURE" === f.parentNode.nodeName.toUpperCase() ||
            null !== f.getAttribute("srcset") ||
            (f[g.ns] && null !== f[g.ns].srcset)) &&
            a.push(f);
        }
        return a;
      }),
      (g.getMatch = function (a, b) {
        for (var c, d = b.childNodes, e = 0, f = d.length; f > e; e++) {
          var h = d[e];
          if (1 === h.nodeType) {
            if (h === a) return c;
            if ("SOURCE" === h.nodeName.toUpperCase()) {
              null !== h.getAttribute("src") &&
                void 0 !== typeof console &&
                console.warn(
                  "The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`."
                );
              var i = h.getAttribute("media");
              if (h.getAttribute("srcset") && (!i || g.matchesMedia(i))) {
                var j = g.verifyTypeSupport(h);
                if (j === !0) {
                  c = h;
                  break;
                }
                if ("pending" === j) return !1;
              }
            }
          }
        }
        return c;
      }),
      f(),
      (e._ = g),
      d(e);
  })(window, window.document, new window.Image()); /*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.SuperGif = factory();
  }
})(this, function () {
  var bitsToNum = function (ba) {
    return ba.reduce(function (s, n) {
      return s * 2 + n;
    }, 0);
  };
  var byteToBitArr = function (bite) {
    var a = [];
    for (var i = 7; i >= 0; i--) {
      a.push(!!(bite & (1 << i)));
    }
    return a;
  };
  var Stream = function (data) {
    this.data = data;
    this.len = this.data.length;
    this.pos = 0;
    this.readByte = function () {
      if (this.pos >= this.data.length) {
        throw new Error("Attempted to read past end of stream.");
      }
      if (data instanceof Uint8Array) return data[this.pos++];
      else return data.charCodeAt(this.pos++) & 0xff;
    };
    this.readBytes = function (n) {
      var bytes = [];
      for (var i = 0; i < n; i++) {
        bytes.push(this.readByte());
      }
      return bytes;
    };
    this.read = function (n) {
      var s = "";
      for (var i = 0; i < n; i++) {
        s += String.fromCharCode(this.readByte());
      }
      return s;
    };
    this.readUnsigned = function () {
      var a = this.readBytes(2);
      return (a[1] << 8) + a[0];
    };
  };
  var lzwDecode = function (minCodeSize, data) {
    var pos = 0;
    var readCode = function (size) {
      var code = 0;
      for (var i = 0; i < size; i++) {
        if (data.charCodeAt(pos >> 3) & (1 << (pos & 7))) {
          code |= 1 << i;
        }
        pos++;
      }
      return code;
    };
    var output = [];
    var clearCode = 1 << minCodeSize;
    var eoiCode = clearCode + 1;
    var codeSize = minCodeSize + 1;
    var dict = [];
    var clear = function () {
      dict = [];
      codeSize = minCodeSize + 1;
      for (var i = 0; i < clearCode; i++) {
        dict[i] = [i];
      }
      dict[clearCode] = [];
      dict[eoiCode] = null;
    };
    var code;
    var last;
    while (!0) {
      last = code;
      code = readCode(codeSize);
      if (code === clearCode) {
        clear();
        continue;
      }
      if (code === eoiCode) break;
      if (code < dict.length) {
        if (last !== clearCode) {
          dict.push(dict[last].concat(dict[code][0]));
        }
      } else {
        if (code !== dict.length) throw new Error("Invalid LZW code.");
        dict.push(dict[last].concat(dict[last][0]));
      }
      output.push.apply(output, dict[code]);
      if (dict.length === 1 << codeSize && codeSize < 12) {
        codeSize++;
      }
    }
    return output;
  };
  var parseGIF = function (st, handler) {
    handler || (handler = {});
    var parseCT = function (entries) {
      var ct = [];
      for (var i = 0; i < entries; i++) {
        ct.push(st.readBytes(3));
      }
      return ct;
    };
    var readSubBlocks = function () {
      var size, data;
      data = "";
      do {
        size = st.readByte();
        data += st.read(size);
      } while (size !== 0);
      return data;
    };
    var parseHeader = function () {
      var hdr = {};
      hdr.sig = st.read(3);
      hdr.ver = st.read(3);
      if (hdr.sig !== "GIF") throw new Error("Not a GIF file.");
      hdr.width = st.readUnsigned();
      hdr.height = st.readUnsigned();
      var bits = byteToBitArr(st.readByte());
      hdr.gctFlag = bits.shift();
      hdr.colorRes = bitsToNum(bits.splice(0, 3));
      hdr.sorted = bits.shift();
      hdr.gctSize = bitsToNum(bits.splice(0, 3));
      hdr.bgColor = st.readByte();
      hdr.pixelAspectRatio = st.readByte();
      if (hdr.gctFlag) {
        hdr.gct = parseCT(1 << (hdr.gctSize + 1));
      }
      handler.hdr && handler.hdr(hdr);
    };
    var parseExt = function (block) {
      var parseGCExt = function (block) {
        var blockSize = st.readByte();
        var bits = byteToBitArr(st.readByte());
        block.reserved = bits.splice(0, 3);
        block.disposalMethod = bitsToNum(bits.splice(0, 3));
        block.userInput = bits.shift();
        block.transparencyGiven = bits.shift();
        block.delayTime = st.readUnsigned();
        block.transparencyIndex = st.readByte();
        block.terminator = st.readByte();
        handler.gce && handler.gce(block);
      };
      var parseComExt = function (block) {
        block.comment = readSubBlocks();
        handler.com && handler.com(block);
      };
      var parsePTExt = function (block) {
        var blockSize = st.readByte();
        block.ptHeader = st.readBytes(12);
        block.ptData = readSubBlocks();
        handler.pte && handler.pte(block);
      };
      var parseAppExt = function (block) {
        var parseNetscapeExt = function (block) {
          var blockSize = st.readByte();
          block.unknown = st.readByte();
          block.iterations = st.readUnsigned();
          block.terminator = st.readByte();
          handler.app && handler.app.NETSCAPE && handler.app.NETSCAPE(block);
        };
        var parseUnknownAppExt = function (block) {
          block.appData = readSubBlocks();
          handler.app &&
            handler.app[block.identifier] &&
            handler.app[block.identifier](block);
        };
        var blockSize = st.readByte();
        block.identifier = st.read(8);
        block.authCode = st.read(3);
        switch (block.identifier) {
          case "NETSCAPE":
            parseNetscapeExt(block);
            break;
          default:
            parseUnknownAppExt(block);
            break;
        }
      };
      var parseUnknownExt = function (block) {
        block.data = readSubBlocks();
        handler.unknown && handler.unknown(block);
      };
      block.label = st.readByte();
      switch (block.label) {
        case 0xf9:
          block.extType = "gce";
          parseGCExt(block);
          break;
        case 0xfe:
          block.extType = "com";
          parseComExt(block);
          break;
        case 0x01:
          block.extType = "pte";
          parsePTExt(block);
          break;
        case 0xff:
          block.extType = "app";
          parseAppExt(block);
          break;
        default:
          block.extType = "unknown";
          parseUnknownExt(block);
          break;
      }
    };
    var parseImg = function (img) {
      var deinterlace = function (pixels, width) {
        var newPixels = new Array(pixels.length);
        var rows = pixels.length / width;
        var cpRow = function (toRow, fromRow) {
          var fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);
          newPixels.splice.apply(
            newPixels,
            [toRow * width, width].concat(fromPixels)
          );
        };
        var offsets = [0, 4, 2, 1];
        var steps = [8, 8, 4, 2];
        var fromRow = 0;
        for (var pass = 0; pass < 4; pass++) {
          for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {
            cpRow(toRow, fromRow);
            fromRow++;
          }
        }
        return newPixels;
      };
      img.leftPos = st.readUnsigned();
      img.topPos = st.readUnsigned();
      img.width = st.readUnsigned();
      img.height = st.readUnsigned();
      var bits = byteToBitArr(st.readByte());
      img.lctFlag = bits.shift();
      img.interlaced = bits.shift();
      img.sorted = bits.shift();
      img.reserved = bits.splice(0, 2);
      img.lctSize = bitsToNum(bits.splice(0, 3));
      if (img.lctFlag) {
        img.lct = parseCT(1 << (img.lctSize + 1));
      }
      img.lzwMinCodeSize = st.readByte();
      var lzwData = readSubBlocks();
      img.pixels = lzwDecode(img.lzwMinCodeSize, lzwData);
      if (img.interlaced) {
        img.pixels = deinterlace(img.pixels, img.width);
      }
      handler.img && handler.img(img);
    };
    var parseBlock = function () {
      var block = {};
      block.sentinel = st.readByte();
      switch (String.fromCharCode(block.sentinel)) {
        case "!":
          block.type = "ext";
          parseExt(block);
          break;
        case ",":
          block.type = "img";
          parseImg(block);
          break;
        case ";":
          block.type = "eof";
          handler.eof && handler.eof(block);
          break;
        default:
          throw new Error("Unknown block: 0x" + block.sentinel.toString(16));
      }
      if (block.type !== "eof") setTimeout(parseBlock, 0);
    };
    var parse = function () {
      parseHeader();
      setTimeout(parseBlock, 0);
    };
    parse();
  };
  var SuperGif = function (opts) {
    var options = {
      vp_l: 0,
      vp_t: 0,
      vp_w: null,
      vp_h: null,
      c_w: null,
      c_h: null,
    };
    for (var i in opts) {
      options[i] = opts[i];
    }
    if (options.vp_w && options.vp_h) options.is_vp = !0;
    var stream;
    var hdr;
    var loadError = null;
    var loading = !1;
    var transparency = null;
    var delay = null;
    var disposalMethod = null;
    var disposalRestoreFromIdx = 0;
    var lastDisposalMethod = null;
    var frame = null;
    var lastImg = null;
    var playing = !0;
    var forward = !0;
    var ctx_scaled = !1;
    var frames = [];
    var frameOffsets = [];
    var gif = options.gif;
    if (typeof options.auto_play == "undefined")
      options.auto_play =
        !gif.getAttribute("rel:auto_play") ||
        gif.getAttribute("rel:auto_play") == "1";
    var onEndListener = options.hasOwnProperty("on_end")
      ? options.on_end
      : null;
    var loopDelay = options.hasOwnProperty("loop_delay")
      ? options.loop_delay
      : 0;
    var overrideLoopMode = options.hasOwnProperty("loop_mode")
      ? options.loop_mode
      : "auto";
    var drawWhileLoading = options.hasOwnProperty("draw_while_loading")
      ? options.draw_while_loading
      : !0;
    var showProgressBar = drawWhileLoading
      ? options.hasOwnProperty("show_progress_bar")
        ? options.show_progress_bar
        : !0
      : !1;
    var clear = function () {
      transparency = null;
      delay = null;
      lastDisposalMethod = disposalMethod;
      disposalMethod = null;
      frame = null;
    };
    var doParse = function () {
      try {
        parseGIF(stream, handler);
      } catch (err) {
        doLoadError("parse");
      }
    };
    var doText = function (text) {
      toolbar.innerHTML = text;
      toolbar.style.visibility = "visible";
    };
    var setSizes = function (w, h) {
      canvas.width = w * get_canvas_scale();
      canvas.height = h * get_canvas_scale();
      toolbar.style.minWidth = w * get_canvas_scale() + "px";
      tmpCanvas.width = w;
      tmpCanvas.height = h;
      tmpCanvas.style.width = w + "px";
      tmpCanvas.style.height = h + "px";
      tmpCanvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
    };
    var setFrameOffset = function (frame, offset) {
      if (!frameOffsets[frame]) {
        frameOffsets[frame] = offset;
        return;
      }
      if (typeof offset.x !== "undefined") {
        frameOffsets[frame].x = offset.x;
      }
      if (typeof offset.y !== "undefined") {
        frameOffsets[frame].y = offset.y;
      }
    };
    var doShowProgress = function (pos, length, draw) {
      if (draw && showProgressBar) {
        var height = 25;
        var left, mid, top, width;
        if (options.is_vp) {
          if (!ctx_scaled) {
            top = options.vp_t + options.vp_h - height;
            height = height;
            left = options.vp_l;
            mid = left + (pos / length) * options.vp_w;
            width = canvas.width;
          } else {
            top = (options.vp_t + options.vp_h - height) / get_canvas_scale();
            height = height / get_canvas_scale();
            left = options.vp_l / get_canvas_scale();
            mid = left + (pos / length) * (options.vp_w / get_canvas_scale());
            width = canvas.width / get_canvas_scale();
          }
          if (!1) {
            if (!ctx_scaled) {
              var l = options.vp_l,
                t = options.vp_t;
              var w = options.vp_w,
                h = options.vp_h;
            } else {
              var l = options.vp_l / get_canvas_scale(),
                t = options.vp_t / get_canvas_scale();
              var w = options.vp_w / get_canvas_scale(),
                h = options.vp_h / get_canvas_scale();
            }
            ctx.rect(l, t, w, h);
            ctx.stroke();
          }
        } else {
          top =
            (canvas.height - height) / (ctx_scaled ? get_canvas_scale() : 1);
          mid =
            ((pos / length) * canvas.width) /
            (ctx_scaled ? get_canvas_scale() : 1);
          width = canvas.width / (ctx_scaled ? get_canvas_scale() : 1);
          height /= ctx_scaled ? get_canvas_scale() : 1;
        }
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillRect(mid, top, width - mid, height);
        ctx.fillStyle = "rgba(255,0,22,.8)";
        ctx.fillRect(0, top, mid, height);
      }
    };
    var doLoadError = function (originOfError) {
      var drawError = function () {
        ctx.fillStyle = "black";
        ctx.fillRect(
          0,
          0,
          options.c_w ? options.c_w : hdr.width,
          options.c_h ? options.c_h : hdr.height
        );
        ctx.strokeStyle = "`red`";
        ctx.lineWidth = 3;
        ctx.moveTo(0, 0);
        ctx.lineTo(
          options.c_w ? options.c_w : hdr.width,
          options.c_h ? options.c_h : hdr.height
        );
        ctx.moveTo(0, options.c_h ? options.c_h : hdr.height);
        ctx.lineTo(options.c_w ? options.c_w : hdr.width, 0);
        ctx.stroke();
      };
      loadError = originOfError;
      hdr = { width: gif.width, height: gif.height };
      frames = [];
      drawError();
    };
    var doHdr = function (_hdr) {
      hdr = _hdr;
      setSizes(hdr.width, hdr.height);
    };
    var doGCE = function (gce) {
      pushFrame();
      clear();
      transparency = gce.transparencyGiven ? gce.transparencyIndex : null;
      delay = gce.delayTime;
      disposalMethod = gce.disposalMethod;
    };
    var pushFrame = function () {
      if (!frame) return;
      frames.push({
        data: frame.getImageData(0, 0, hdr.width, hdr.height),
        delay: delay,
      });
      frameOffsets.push({ x: 0, y: 0 });
    };
    var doImg = function (img) {
      if (!frame) frame = tmpCanvas.getContext("2d");
      var currIdx = frames.length;
      var ct = img.lctFlag ? img.lct : hdr.gct;
      if (currIdx > 0) {
        if (lastDisposalMethod === 3) {
          frame.putImageData(frames[disposalRestoreFromIdx].data, 0, 0);
        } else {
          disposalRestoreFromIdx = currIdx - 1;
        }
        if (lastDisposalMethod === 2) {
          frame.clearRect(
            lastImg.leftPos,
            lastImg.topPos,
            lastImg.width,
            lastImg.height
          );
        }
      }
      var imgData = frame.getImageData(
        img.leftPos,
        img.topPos,
        img.width,
        img.height
      );
      var cdd = imgData.data;
      img.pixels.forEach(function (pixel, i) {
        if (pixel !== transparency) {
          cdd[i * 4 + 0] = ct[pixel][0];
          cdd[i * 4 + 1] = ct[pixel][1];
          cdd[i * 4 + 2] = ct[pixel][2];
          cdd[i * 4 + 3] = 255;
        }
      });
      imgData.data.set(cdd);
      frame.putImageData(imgData, img.leftPos, img.topPos);
      if (!ctx_scaled) {
        ctx.scale(get_canvas_scale(), get_canvas_scale());
        ctx_scaled = !0;
      }
      if (drawWhileLoading) ctx.drawImage(tmpCanvas, 0, 0);
      lastImg = img;
    };
    var player = (function () {
      var i = -1;
      var iterationCount = 0;
      var showingInfo = !1;
      var pinned = !1;
      var getNextFrameNo = function () {
        var delta = forward ? 1 : -1;
        return (i + delta + frames.length) % frames.length;
      };
      var stepFrame = function (amount) {
        i = i + amount;
        putFrame();
      };
      var completeLoop = function () {
        if (onEndListener !== null) onEndListener(gif);
        iterationCount++;
      };
      var step = (function () {
        var stepping = !1;
        var doStep = function () {
          stepping = playing;
          if (!stepping) return;
          stepFrame(1);
          var delay = frames[i].delay * 10;
          if (!delay) delay = 100;
          var nextFrameNo = getNextFrameNo();
          if (nextFrameNo === 0) {
            delay += loopDelay;
            setTimeout(completeLoop, delay - 1);
          }
          if (
            overrideLoopMode !== !1 ||
            nextFrameNo !== 0 ||
            iterationCount < 0
          )
            setTimeout(doStep, delay);
        };
        return function () {
          if (!stepping) setTimeout(doStep, 0);
        };
      })();
      var putFrame = function () {
        var offset;
        i = parseInt(i, 10);
        if (i > frames.length - 1) {
          i = 0;
        }
        if (i < 0) {
          i = 0;
        }
        offset = frameOffsets[i];
        tmpCanvas
          .getContext("2d")
          .putImageData(frames[i].data, offset.x, offset.y);
        ctx.globalCompositeOperation = "copy";
        ctx.drawImage(tmpCanvas, 0, 0);
      };
      var play = function () {
        playing = !0;
        step();
      };
      var pause = function () {
        playing = !1;
      };
      return {
        init: function () {
          if (loadError) return;
          if (!(options.c_w && options.c_h)) {
            ctx.scale(get_canvas_scale(), get_canvas_scale());
          }
          if (options.auto_play) {
            step();
          } else {
            i = 0;
            putFrame();
          }
        },
        step: step,
        play: play,
        pause: pause,
        playing: playing,
        move_relative: stepFrame,
        current_frame: function () {
          return i;
        },
        length: function () {
          return frames.length;
        },
        move_to: function (frame_idx) {
          i = frame_idx;
          putFrame();
        },
      };
    })();
    var doDecodeProgress = function (draw) {
      doShowProgress(stream.pos, stream.data.length, draw);
    };
    var doNothing = function () {};
    var withProgress = function (fn, draw) {
      return function (block) {
        fn(block);
        doDecodeProgress(draw);
      };
    };
    var handler = {
      hdr: withProgress(doHdr),
      gce: withProgress(doGCE),
      com: withProgress(doNothing),
      app: { NETSCAPE: withProgress(doNothing) },
      img: withProgress(doImg, !0),
      eof: function (block) {
        pushFrame();
        doDecodeProgress(!1);
        if (!(options.c_w && options.c_h)) {
          canvas.width = hdr.width * get_canvas_scale();
          canvas.height = hdr.height * get_canvas_scale();
        }
        player.init();
        loading = !1;
        if (load_callback) {
          load_callback(gif);
        }
      },
    };
    var init = function () {
      var parent = gif.parentNode;
      var div = document.createElement("div");
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      toolbar = document.createElement("div");
      tmpCanvas = document.createElement("canvas");
      div.width = canvas.width = gif.width;
      div.height = canvas.height = gif.height;
      toolbar.style.minWidth = gif.width + "px";
      div.className = "jsgif";
      toolbar.className = "jsgif_toolbar";
      div.appendChild(canvas);
      div.appendChild(toolbar);
      parent.insertBefore(div, gif);
      parent.removeChild(gif);
      if (options.c_w && options.c_h) setSizes(options.c_w, options.c_h);
      initialized = !0;
    };
    var get_canvas_scale = function () {
      var scale;
      if (options.max_width && hdr && hdr.width > options.max_width) {
        scale = options.max_width / hdr.width;
      } else {
        scale = 1;
      }
      return scale;
    };
    var canvas, ctx, toolbar, tmpCanvas;
    var initialized = !1;
    var load_callback = !1;
    var load_setup = function (callback) {
      if (loading) return !1;
      if (callback) load_callback = callback;
      else load_callback = !1;
      loading = !0;
      frames = [];
      clear();
      disposalRestoreFromIdx = 0;
      lastDisposalMethod = null;
      frame = null;
      lastImg = null;
      return !0;
    };
    return {
      play: player.play,
      pause: player.pause,
      move_relative: player.move_relative,
      move_to: player.move_to,
      get_playing: function () {
        return player.playing;
      },
      get_canvas: function () {
        return canvas;
      },
      get_canvas_scale: function () {
        return get_canvas_scale();
      },
      get_loading: function () {
        return loading;
      },
      get_auto_play: function () {
        return options.auto_play;
      },
      get_length: function () {
        return player.length();
      },
      get_current_frame: function () {
        return player.current_frame();
      },
      load_url: function (src, callback) {
        if (!load_setup(callback)) return;
        var h = new XMLHttpRequest();
        h.overrideMimeType("text/plain; charset=x-user-defined");
        h.onloadstart = function () {
          if (!initialized) init();
        };
        h.onload = function (e) {
          stream = new Stream(h.responseText);
          setTimeout(doParse, 0);
        };
        h.onprogress = function (e) {
          if (e.lengthComputable) doShowProgress(e.loaded, e.total, !0);
        };
        h.onerror = function () {
          doLoadError("xhr");
        };
        h.open("GET", src, !0);
        h.send();
      },
      load: function (callback) {
        this.load_url(
          gif.getAttribute("rel:animated_src") || gif.src,
          callback
        );
      },
      load_raw: function (arr, callback) {
        if (!load_setup(callback)) return;
        if (!initialized) init();
        stream = new Stream(arr);
        setTimeout(doParse, 0);
      },
      set_frame_offset: setFrameOffset,
    };
  };
  return SuperGif;
});
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (a, b, c) {
  var d = window.matchMedia;
  "undefined" != typeof module && module.exports
    ? (module.exports = c(d))
    : "function" == typeof define && define.amd
    ? define(function () {
        return (b[a] = c(d));
      })
    : (b[a] = c(d));
})("enquire", this, function (a) {
  "use strict";
  function b(a, b) {
    var c,
      d = 0,
      e = a.length;
    for (d; e > d && ((c = b(a[d], d)), c !== !1); d++);
  }
  function c(a) {
    return "[object Array]" === Object.prototype.toString.apply(a);
  }
  function d(a) {
    return "function" == typeof a;
  }
  function e(a) {
    (this.options = a), !a.deferSetup && this.setup();
  }
  function f(b, c) {
    (this.query = b),
      (this.isUnconditional = c),
      (this.handlers = []),
      (this.mql = a(b));
    var d = this;
    (this.listener = function (a) {
      (d.mql = a), d.assess();
    }),
      this.mql.addListener(this.listener);
  }
  function g() {
    if (!a)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}), (this.browserIsIncapable = !a("only all").matches);
  }
  return (
    (e.prototype = {
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (a) {
        return this.options === a || this.options.match === a;
      },
    }),
    (f.prototype = {
      addHandler: function (a) {
        var b = new e(a);
        this.handlers.push(b), this.matches() && b.on();
      },
      removeHandler: function (a) {
        var c = this.handlers;
        b(c, function (b, d) {
          return b.equals(a) ? (b.destroy(), !c.splice(d, 1)) : void 0;
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        b(this.handlers, function (a) {
          a.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var a = this.matches() ? "on" : "off";
        b(this.handlers, function (b) {
          b[a]();
        });
      },
    }),
    (g.prototype = {
      register: function (a, e, g) {
        var h = this.queries,
          i = g && this.browserIsIncapable;
        return (
          h[a] || (h[a] = new f(a, i)),
          d(e) && (e = { match: e }),
          c(e) || (e = [e]),
          b(e, function (b) {
            d(b) && (b = { match: b }), h[a].addHandler(b);
          }),
          this
        );
      },
      unregister: function (a, b) {
        var c = this.queries[a];
        return (
          c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])),
          this
        );
      },
    }),
    new g()
  );
});
var bimber_front_config =
  '{"ajax_url":"https:\\/\\/egamesconsult.com\\/wp-admin\\/admin-ajax.php","timeago":"on","sharebar":"off","i18n":{"menu":{"go_to":"Go to"},"newsletter":{"subscribe_mail_subject_tpl":"Check out this great article: %subject%"},"bp_profile_nav":{"more_link":"More"}},"comment_types":["wp"],"auto_load_limit":"0","auto_play_videos":false,"use_gif_player":true,"setTargetBlank":true,"useWaypoints":true,"stack":"food"}';
(function ($) {
  "use strict";
  var config = $.parseJSON(bimber_front_config);
  var g1 = { config: config };
  g1.getWindowWidth = function () {
    if (typeof window.innerWidth !== "undefined") {
      return window.innerWidth;
    }
    return $(window).width();
  };
  g1.isDesktopDevice = function () {
    return g1.getWindowWidth() > g1.getDesktopBreakpoint();
  };
  g1.getDesktopBreakpoint = function () {
    var desktopBreakPoint = $("#g1-breakpoint-desktop").css("min-width");
    if (!desktopBreakPoint) {
      return 9999;
    }
    desktopBreakPoint = parseInt(desktopBreakPoint, 10);
    if (desktopBreakPoint === 0) {
      return 9999;
    }
    return desktopBreakPoint;
  };
  g1.isTouchDevice = function () {
    return "ontouchstart" in window || navigator.msMaxTouchPoints;
  };
  g1.isStickySupported = function () {
    var prefixes = ["", "-webkit-", "-moz-", "-ms-"];
    var block = document.createElement("div");
    var supported = !1;
    var i;
    for (i = prefixes.length - 1; i >= 0; i--) {
      try {
        block.style.position = prefixes[i] + "sticky";
      } catch (e) {}
      if (block.style.position !== "") {
        supported = !0;
      }
    }
    return supported;
  };
  g1.isRTL = function () {
    return $("body").is(".rtl");
  };
  g1.log = function (data) {
    if (window.bimberDebugMode && typeof console !== "undefined") {
      console.log(data);
    }
  };
  g1.createCookie = function (name, value, time) {
    var expires;
    if (time) {
      var date = new Date();
      var ms = time;
      if (typeof time === "object") {
        ms = time.value;
        switch (time.type) {
          case "days":
            ms = ms * 24 * 60 * 60 * 1000;
            break;
        }
      }
      date.setTime(date.getTime() + ms);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };
  g1.readCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i += 1) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  g1.removeCookie = function (name) {
    createCookie(name, "", -1);
  };
  window.g1 = g1;
})(jQuery);
(function ($) {
  "use strict";
  g1.uiHelpers = function () {
    if (g1.isTouchDevice()) {
      $("body").removeClass("g1-hoverable");
    }
    var mc4wpClasses = ["g1-box", "g1-box-tpl-frame", "g1-newsletter"];
    var mc4wpBackgroundClasses = ["g1-box-background"];
    if ("original-2018" === g1.config.stack || "food" === g1.config.stack) {
      mc4wpBackgroundClasses.push("g1-current-background");
    }
    if ("miami" === g1.config.stack || "music" === g1.config.stack) {
      mc4wpClasses.push("g1-dark");
    }
    $(".widget_mc4wp_form_widget")
      .addClass(mc4wpClasses.join(" "))
      .wrapInner('<div class="g1-box-inner"></div>')
      .prepend('<div class="g1-box-icon"></div>')
      .append('<div class="' + mc4wpBackgroundClasses.join(" ") + '"></div>');
    var bbPressBackgroundClasses = ["g1-box-background"];
    if ("original-2018" === g1.config.stack || "food" === g1.config.stack) {
      bbPressBackgroundClasses.push("g1-current-background");
    }
    $(".bbp_widget_login")
      .addClass("g1-box g1-box-tpl-frame")
      .wrapInner('<div class="g1-box-inner"></div>')
      .append('<div class="' + bbPressBackgroundClasses.join(" ") + '"></div>');
    $(".g1-drop-the-search").on("click", ".g1-drop-toggle", function (e) {
      e.preventDefault();
      $(".g1-drop-the-search input.search-field").focus();
    });
    $(".search-submit").on("click", function (e) {
      var $form = $(this).closest("form");
      var $input = $("input.search-field", $form);
      if (!$input.val()) {
        e.preventDefault();
      }
    });
    $("#buddypress .load-more").click(function () {
      var i = 0;
      var intervalID = setInterval(function () {
        $("body").trigger("g1PageHeightChanged");
        i++;
        if (i === 5) {
          window.clearInterval(intervalID);
        }
      }, 1000);
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.resetFacebookSDK = function () {
    $("script#facebook-jssdk").remove();
    $("#fb-root").remove();
    if (window.FB) {
      delete window.FB;
    }
  };
  $("body").on("g1BeforeNewContentReady", function (e, $newContent) {
    if ($newContent.find(".fb-video").length > 0) {
      g1.resetFacebookSDK();
    }
  });
})(jQuery);
(function ($) {
  "use strict";
  var loading = !1;
  var startingUrl = window.location.href;
  var setTargetBlank = g1.config.setTargetBlank;
  var useWaypoints = g1.config.useWaypoints;
  g1.loadMoreButton = function () {
    $(".g1-load-more").on("click", function (e) {
      if (loading) {
        return;
      }
      loading = !0;
      e.preventDefault();
      var $button = $(this);
      var $collectionMore = $button.parents(".g1-collection-more");
      var url = $button.attr("data-g1-next-page-url");
      var $endMessage = $(".g1-pagination-end");
      $collectionMore.addClass("g1-collection-more-loading");
      var xhr = $.get(url);
      xhr.done(function (data) {
        var collectionSelector =
          "#primary > .g1-collection .g1-collection-items";
        var $resCollectionItems = $(data)
          .find(collectionSelector)
          .find(".g1-collection-item");
        var $resButton = $(data).find(".g1-load-more");
        var $collection = $(collectionSelector);
        $resCollectionItems.addClass("g1-collection-item-added");
        var $insta = $(
          'script[src="//platform.instagram.com/en_US/embeds.js"]'
        );
        if (window.wp && typeof window.wp.mediaelement === "undefined") {
          var matches = data.match(/<script(.|\n)*?<\/script>/g);
          var mejsCode = "";
          matches.forEach(function (match) {
            if (
              match.indexOf("mejs") > 0 ||
              match.indexOf("mediaelement") > 0
            ) {
              match = match.replace("<script", "<script async");
              mejsCode += match;
            }
          });
          matches = data.match(/<link(.|\n)*?\/>/g);
          matches.forEach(function (match) {
            if (
              match.indexOf("mejs") > 0 ||
              match.indexOf("mediaelement") > 0
            ) {
              mejsCode += match;
            }
          });
          $collection.after(mejsCode);
        }
        if (setTargetBlank) {
          $("a", $resCollectionItems).attr("target", "_blank");
        }
        var $collection_waypoint =
          '<span class="bimber-collection-waypoint" data-bimber-archive-url="' +
          url +
          '"></span>';
        $collection.append($collection_waypoint);
        $collection.append($resCollectionItems);
        if (typeof ga !== "undefined" && typeof ga.getAll !== "undefined") {
          ga("create", ga.getAll()[0].get("trackingId"), "auto");
          ga("set", { page: url });
          ga("send", "pageview");
        }
        if ($insta.length > 0) {
          window.instgrm.Embeds.process();
        }
        if (window.wp && typeof window.wp.mediaelement !== "undefined") {
          window.wp.mediaelement.initialize();
        }
        $("body").trigger("g1PageHeightChanged");
        $("body").trigger("g1NewContentLoaded", [$resCollectionItems]);
        if ($resButton.length > 0) {
          $button.attr(
            "data-g1-next-page-url",
            $resButton.attr("data-g1-next-page-url")
          );
        } else {
          $collectionMore.remove();
        }
        if (typeof g1.autoPlayVideo === "function") {
          g1.autoPlayVideo();
        }
        if (useWaypoints) {
          $(".bimber-collection-waypoint").waypoint(
            function (direction) {
              var $waypoint = $(this.element);
              if ("up" === direction) {
                var $waypointUp = $waypoint.prevAll(
                  ".bimber-collection-waypoint"
                );
                if ($waypointUp.length > 0) {
                  $waypoint = $($waypointUp[0]);
                } else {
                  window.history.replaceState({}, "", startingUrl);
                  return;
                }
              }
              var waypointUrl = $waypoint.attr("data-bimber-archive-url");
              var currentUrl = window.location.href;
              if (waypointUrl !== currentUrl) {
                window.history.replaceState({}, "", waypointUrl);
              }
            },
            { offset: "-5%" }
          );
        }
      });
      xhr.fail(function () {
        $button.addClass("g1-info-error");
        $button.remove();
        $endMessage.show();
      });
      xhr.always(function () {
        $collectionMore.removeClass("g1-collection-more-loading");
        loading = !1;
      });
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.infiniteScrollConfig = { offset: "150%" };
  var triggeredByClick = !1;
  g1.infiniteScroll = function () {
    $(".g1-collection-more.infinite-scroll").each(function () {
      var $this = $(this);
      if ($this.is(".on-demand") && !triggeredByClick) {
        return !1;
      }
      $this.waypoint(
        function (direction) {
          if ("down" === direction) {
            $this.find(".g1-load-more").trigger("click");
          }
        },
        { offset: g1.infiniteScrollConfig.offset }
      );
    });
  };
  $("body").on("g1NewContentLoaded", function () {
    triggeredByClick = !0;
    g1.infiniteScroll();
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.dateToTimeago = function () {
    if (!$.fn.timeago) {
      return;
    }
    $("time.entry-date, .comment-metadata time, time.snax-item-date").timeago();
    $("body").on("g1NewContentLoaded", function (e, $newContent) {
      if ($newContent) {
        $newContent
          .find("time.entry-date, .comment-metadata time, time.snax-item-date")
          .timeago();
      }
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = { toggle: ".g1-hamburger" };
  g1.globalCanvasSelectors = selectors;
  var canvas;
  g1.canvas = function () {
    canvas = Canvas();
    g1.canvasInstance = canvas;
    $(selectors.toggle).on("click", function (e) {
      e.preventDefault();
      canvas.toggle();
    });
  };
  function Canvas() {
    var that = {};
    var listeners = { open: [], close: [] };
    var currentContent = "";
    var currentScroll = 0;
    var _clientY;
    var init = function () {
      var $overlay = $(".g1-canvas-overlay");
      $overlay.on("click", that.toggle);
      $(".g1-canvas").on("toggle-canvas", function () {
        that.toggle();
      });
      $(".g1-canvas .g1-canvas-toggle").on("click", that.toggle);
      if ($("html.g1-off-outside").length) {
        enquire.register("screen and ( min-width: 700px )", {
          match: function () {
            that.close();
          },
        });
      }
      if ($("html.g1-off-inside").length) {
        enquire.register("screen and ( max-width: 1024px )", {
          match: function () {
            that.close();
          },
        });
      }
      return that;
    };
    that.getContent = function () {
      return $(".g1-canvas-global .g1-canvas-content");
    };
    that.captureClientY = function (event) {
      _clientY = event.targetTouches[0].clientY;
    };
    that.disableCanvasScroll = function (e) {
      var _element = $(".g1-canvas");
      var clientY = e.targetTouches[0].clientY - _clientY;
      if (_element.scrollTop === 0 && clientY > 0) {
        alert("top scroll");
        e.preventDefault();
        e.stopPropagation();
        return !1;
      }
      if (
        _element.scrollHeight - _element.scrollTop <= _element.clientHeight &&
        clientY < 0
      ) {
        alert("bottom scroll");
        e.preventDefault();
        e.stopPropagation();
        return !1;
      }
    };
    that.disableBodyScroll = function (e) {};
    that.open = function (content) {
      $(".g1-canvas-background[data-bg]:not(.lazyloaded)").addClass("lazyload");
      window.requestAnimationFrame(function () {
        var breakpoint = $(document).width();
        var cssClass =
          breakpoint >= 1025 ? "g1-off-global-desktop" : "g1-off-global";
        $("html").addClass(cssClass);
        currentContent = content;
        var $canvas = $(".g1-canvas-global");
        if (content) {
          if (typeof content === "string") {
            $canvas.find(".g1-canvas-content").html(content);
          } else {
            $canvas.find(".g1-canvas-content").empty().append(content);
          }
          $canvas.find(".g1-canvas-content").trigger("g1-new-content");
        }
        that.notify("open");
      });
    };
    that.close = function () {
      window.requestAnimationFrame(function () {
        $("html").removeClass("g1-off-global g1-off-global-desktop");
        that.notify("close");
      });
    };
    that.toggle = function (e) {
      if (e) {
        e.preventDefault();
      }
      if ($("html").is(".g1-off-global, .g1-off-global-desktop")) {
        that.close();
      } else {
        that.open(null);
      }
    };
    that.notify = function (eventType) {
      var callbacks = listeners[eventType];
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](that.getContent());
      }
    };
    that.on = function (eventType, listener, priority) {
      listeners[eventType][priority] = listener;
    };
    return init();
  }
})(jQuery);
(function ($) {
  "use strict";
  var $waypointElem = !1;
  var selectors = {
    stickyWidgetWrapper: ".g1-sticky-widget-wrapper",
    stickyWidget: ".g1-sticky-widget",
    widget: ".widget",
    content: "#primary .entry-content",
  };
  var sidebarSelectors = ["#secondary", "#tertiary"];
  g1.stickyTopOffsetSelectors = [
    "#wpadminbar",
    ".g1-iframe-bar",
    ".g1-sharebar-loaded",
    ".g1-sticky-top-wrapper",
  ];
  g1.resetStickyElements = function () {
    $(selectors.stickyWidgetWrapper).css("height", "");
    $(selectors.stickyWidget).css("position", "block");
  };
  g1.stickySidebar = function () {
    if (!g1.isDesktopDevice()) {
      g1.resetStickyElements();
      return;
    }
    var $widgets = $(selectors.stickyWidget);
    if ($widgets.length === 0) {
      return;
    }
    var topOffset = 0;
    $(g1.stickyTopOffsetSelectors).each(function () {
      var $element = $(this);
      if ($element.length > 0 && $element.is(":visible")) {
        topOffset += parseInt($element.outerHeight(), 10);
      }
    });
    $widgets.each(function () {
      var $widget = $(this);
      var top = parseInt($widget.css("top"), 10);
      if (topOffset > 0) {
        top += topOffset;
        $widget.css("top", top + "px");
      }
    });
    if (typeof Stickyfill !== "undefined") {
      Stickyfill.add($widgets);
    }
    var adjustLastWidgetHeight = function (isVariableContent) {
      $(sidebarSelectors).each(function () {
        var $sidebar = $(this);
        var $widgets = $sidebar.children(
          selectors.widget + "," + selectors.stickyWidgetWrapper
        );
        var $lastWidget = $widgets.last();
        if ($lastWidget.is(selectors.stickyWidgetWrapper)) {
          $lastWidget.css("height", "");
          var sidebarHeight;
          if (isVariableContent) {
            sidebarHeight = parseInt($(selectors.content).outerHeight(), 10);
          } else {
            sidebarHeight = parseInt($sidebar.outerHeight(), 10);
          }
          var widgetsHeight = 0;
          $widgets.each(function () {
            widgetsHeight += parseInt($(this).outerHeight(!0), 10);
          });
          if (widgetsHeight < sidebarHeight) {
            var diffHeight = sidebarHeight - widgetsHeight;
            var lastWidgetHeight = parseInt($lastWidget.css("height"), 10);
            lastWidgetHeight += diffHeight;
            $lastWidget.css("height", lastWidgetHeight + "px");
          }
          $waypointElem = $lastWidget;
        }
      });
    };
    var $body = $("body");
    var isVariableContent = $body.is(".single");
    adjustLastWidgetHeight(isVariableContent);
    $body.on("g1NewContentLoaded g1PageHeightChanged", function (e) {
      adjustLastWidgetHeight();
    });
    if (!1 !== $waypointElem) {
      $waypointElem.waypoint(
        function (direction) {
          if ("down" === direction) {
            adjustLastWidgetHeight();
          }
        },
        { offset: "bottom-in-view" }
      );
    }
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = [
    "#wpadminbar",
    ".g1-iframe-bar",
    ".g1-sharebar-loaded",
    ".g1-sticky-top-wrapper",
  ];
  g1.stickyElementsTopOffsetSelectors = selectors;
  g1.stickyPosition = function ($context) {
    $context = $context || $("body");
    var $stickyTop = $(".g1-sticky-top-wrapper");
    if ($stickyTop.length > 0 && !$stickyTop.is(".g1-loaded")) {
      var disableStickyHeader = !1;
      var isDesktop = g1.getWindowWidth() > 800;
      var sharebarLoaded =
        $(".g1-sharebar-loaded").length > 0 || $(".essb_topbar").length > 0;
      if (sharebarLoaded && isDesktop) {
        disableStickyHeader = !0;
      }
      if (disableStickyHeader) {
        $stickyTop.removeClass("g1-sticky-top-wrapper");
      } else {
        if (!g1.isStickySupported()) {
          Stickyfill.add($stickyTop);
        }
        $stickyTop.addClass("g1-loaded");
      }
    }
    var topOffset = 0;
    for (var i = 0; i < selectors.length; i++) {
      var $elem = $(selectors[i]);
      if ($elem.length > 0 && $elem.is(":visible")) {
        topOffset += $elem.outerHeight();
      }
    }
    $context
      .find(".g1-wrapper-with-stickies > .entry-actions")
      .each(function () {
        var $this = $(this);
        $this.css("top", topOffset);
        Stickyfill.add($this);
      });
    Stickyfill.add($(".snax-form-frontend .snax-form-side"));
    $context
      .find(
        ".entry-tpl-index-stickies > .entry-actions, .entry-tpl-feat-stickies .entry-actions"
      )
      .each(function () {
        var $this = $(this);
        $this.css("top", topOffset + 10);
        Stickyfill.add($this);
      });
  };
  $("body").on("g1NewContentLoaded", function (e, $newContent) {
    if ($newContent) {
      g1.stickyPosition($newContent);
    }
  });
})(jQuery);
(function ($) {
  "use strict";
  var selectors = {
    drop: ".g1-drop",
    dropExpanded: ".g1-drop-expanded",
    dropToggle: ".g1-drop-toggle",
  };
  var classes = { dropExpanded: "g1-drop-expanded" };
  g1.droppableElements = function () {
    $("body").on("click touchstart", function (e) {
      var $activeDrop = $(e.target).parents(".g1-drop-expanded");
      $(selectors.dropExpanded)
        .not($activeDrop)
        .removeClass(classes.dropExpanded);
    });
    if (g1.isTouchDevice()) {
      $("body").on("click", selectors.drop, function (e) {
        var $drop = $(this);
        if ($drop.is(selectors.dropExpanded)) {
          var $clickedElement = $(e.target);
          var toggleClicked =
            $clickedElement.parents(selectors.dropToggle).length > 0;
          if (toggleClicked) {
            $drop.removeClass(classes.dropExpanded);
            e.preventDefault();
          }
        } else {
          $drop.addClass(classes.dropExpanded);
          e.preventDefault();
        }
      });
    } else {
      $(selectors.dropToggle).on("click", function () {});
    }
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.snax = function () {
    var $body = $("body");
    $body.on("snaxFullFormLoaded", function (e, $post) {
      $post
        .find(".g1-button-m.g1-button-solid")
        .removeClass("g1-button-m  g1-button-solid")
        .addClass("g1-button-s  g1-button-simple");
      $post
        .find(".g1-beta.g1-beta-1st")
        .removeClass("g1-beta g1-beta-1st")
        .addClass("g1-gamma g1-gamma-1st");
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.mediaAce = function () {
    $("body").on("g1NewContentLoaded", function () {
      $("body").trigger("maceLoadYoutube");
    });
    $(document).on("lazybeforeunveil", function (e) {
      var $target = $(e.target);
      var targetSrc = $target.attr("data-src");
      if (targetSrc && targetSrc.endsWith(".gif")) {
        $target.on("load", function () {
          $target.addClass("g1-enable-gif-player");
          setTimeout(function () {
            if (typeof g1.gifPlayer === "function") {
              g1.gifPlayer($target.parent());
            }
          }, 100);
        });
      }
    });
    $(document).on("bimberGifPlayerLoaded", function (e, $canvasWrapper) {
      if ($canvasWrapper.hasClass("lazyloading")) {
        $canvasWrapper.removeClass("lazyloading");
        $canvasWrapper.addClass("lazyloaded");
      }
    });
  };
})(jQuery);
(function (context, $, i18n) {
  "use strict";
  $(document).ready(function () {
    PrimaryMenu();
  });
  function PrimaryMenu() {
    var that = {};
    that.init = function () {
      that.registerEventsHandlers();
      $(".menu-item-has-children > a, .menu-item-g1-mega > a").append(
        '<span class="g1-link-toggle"></span>'
      );
      return that;
    };
    that.registerEventsHandlers = function () {
      that.handleMenuItemClick();
      that.handleMenuItemFocusOut();
    };
    that.handleMenuItemFocusOut = function () {
      $("body").on("click", function (e) {
        if ($(e.target).parents(".mtm-drop-expanded").length === 0) {
          if ($(e.target).parents(".g1-menu-h").length) {
            that.collapseAllOpenedSubmenus();
          }
        }
      });
    };
    that.handleMenuItemClick = function () {
      $(".g1-primary-nav, .g1-secondary-nav").on(
        "click",
        ".menu-item > a",
        function (e) {
          var $menu = $(this).parents(".g1-primary-nav");
          if ($menu.length === 0) {
            $menu = $(this).parents(".g1-secondary-nav");
          }
          var isSimpleList =
            $menu.is("#g1-canvas-primary-nav") ||
            $menu.is("#g1-canvas-secondary-nav");
          if (g1.isTouchDevice() || isSimpleList) {
            that.handleMenuTouchEvent($(this), e);
          }
        }
      );
    };
    that.handleMenuTouchEvent = function ($link, event) {
      var $li = $link.parent("li");
      that.collapseAllOpenedSubmenus($li);
      if ($li.hasClass("menu-item-has-children")) {
        event.preventDefault();
        var $helper = $li.find("ul.sub-menu:first > li.g1-menu-item-helper");
        if ($helper.length === 0) {
          var href = $link.attr("href");
          var anchor =
            i18n.go_to +
            ' <span class="mtm-item-helper-title">' +
            $link.html() +
            "</span>";
          $helper = $(
            '<li class="menu-item g1-menu-item-helper"><a class="mtm-link" href="' +
              href +
              '"><span class="mtm-link-text"><span class="mtm-link-title">' +
              anchor +
              "</span></span></a></li>"
          );
          $li.find("ul.sub-menu:first").prepend($helper);
        }
        if (!$li.is(".mtm-drop-expanded")) {
          $li.find(".mtm-drop-expanded .g1-menu-item-helper").remove();
          $li.addClass("mtm-drop-expanded");
        } else {
          $li.find(".mtm-drop-expanded").removeClass("mtm-drop-expanded");
          $li.removeClass("mtm-drop-expanded");
        }
      }
    };
    that.collapseAllOpenedSubmenus = function ($currentItem) {
      if ($currentItem) {
        var $currentMenu = $currentItem.parents("nav");
        var $topLevelLi = $currentItem.parents("li.menu-item");
        if ($topLevelLi.length === 0) {
          $currentMenu
            .find(".mtm-drop-expanded")
            .not($currentItem)
            .removeClass("mtm-drop-expanded");
        } else {
          $topLevelLi
            .siblings("li")
            .find(".mtm-drop-expanded")
            .removeClass("mtm-drop-expanded");
        }
        $("nav")
          .not($currentMenu)
          .find(".mtm-drop-expanded")
          .removeClass("mtm-drop-expanded");
      } else {
        $(".mtm-drop-expanded").removeClass("mtm-drop-expanded");
      }
    };
    return that.init();
  }
})(window, jQuery, g1.config.i18n.menu);
(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();
(function ($) {
  "use strict";
  g1.popup = function () {
    var HTMLBase = $("html"),
      Popup = $(".g1-popup-newsletter"),
      PopupCookie = g1.readCookie("g1_popup_disabled"),
      PopupCloser = $(".g1-popup-base, .g1-popup-closer");
    if (PopupCookie) {
      HTMLBase.addClass("exit-intent-disabled");
    }
    if (Popup.length <= 0) {
      return;
    }
    $(document).on("mouseleave", function (e) {
      if (
        e.clientY < 10 &&
        !HTMLBase.hasClass("exit-intent-disabled") &&
        !HTMLBase.hasClass("g1-slideup-visible")
      ) {
        HTMLBase.addClass("g1-popup-ready");
        setTimeout(function () {
          HTMLBase.addClass("g1-popup-visible").addClass(
            "exit-intent-disabled"
          );
        }, 50);
      }
    });
    PopupCloser.on("click", function (e) {
      e.preventDefault();
      HTMLBase.removeClass("g1-popup-visible");
      g1.createCookie("g1_popup_disabled", 1, 24 * 60 * 60 * 1000);
    });
  };
  g1.slideup = function () {
    var HTMLBase = $("html"),
      Slideup = $(".g1-slideup-newsletter"),
      SlideupCloser = $(".g1-slideup-newsletter-closer"),
      SlideupCookie = g1.readCookie("g1_slideup_disabled"),
      ScrollPositon = $(document).scrollTop(),
      ScrollTarget = $(".single-post article .entry-content"),
      ScrollTargetOffset = ScrollTarget.offset(),
      ScrollTargetHeight = ScrollTarget.height(),
      ShowOn = 50;
    SlideupCloser.on("click", function (e) {
      e.preventDefault();
      HTMLBase.removeClass("g1-slideup-visible").addClass(
        "slideup-intent-disabled"
      );
      g1.createCookie("g1_slideup_disabled", 1, 24 * 60 * 60 * 1000);
    });
    if (SlideupCookie) {
      HTMLBase.addClass("slideup-intent-disabled");
    }
    if (Slideup.length <= 0) {
      return;
    }
    if (ScrollTarget.length <= 0) {
      return;
    }
    $(window).on("scroll", function () {
      ScrollPositon = $(document).scrollTop();
      ScrollTargetOffset = ScrollTarget.offset();
      ScrollTargetHeight = ScrollTarget.height();
      if (
        ((ScrollPositon - ScrollTargetOffset.top) / ScrollTargetHeight).toFixed(
          6
        ) *
          100 >=
          ShowOn &&
        !HTMLBase.hasClass("slideup-intent-disabled") &&
        !HTMLBase.hasClass("g1-popup-visible")
      ) {
        HTMLBase.addClass("g1-slideup-visible");
      }
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".wp-social-login-provider-list").on("click", function () {
      if ($(this).hasClass("wp-social-login-provider-list-active")) {
        return;
      }
      $(".snax-wpsl-gdpr-consent").addClass("snax-wpsl-gdpr-consent-blink");
      setTimeout(function () {
        $(".snax-wpsl-gdpr-consent").removeClass(
          "snax-wpsl-gdpr-consent-blink"
        );
      }, 2000);
    });
    $(".snax-wpsl-gdpr-consent input").on("click", function () {
      var enabled = $(this).is(":checked");
      if (enabled) {
        $(".wp-social-login-provider-list").addClass(
          "wp-social-login-provider-list-active"
        );
      } else {
        $(".wp-social-login-provider-list").removeClass(
          "wp-social-login-provider-list-active"
        );
      }
    });
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.updatePostViews = function (nonce, postId) {
    $.ajax({
      type: "POST",
      url: g1.config.ajax_url,
      data: { action: "update_views_ajax", wpp_id: postId, token: nonce },
    });
  };
  $(".bimber-count-view").on("click", function () {
    var postId;
    var $body = $("body");
    if ($body.is(".single-format-link")) {
      var res = $body.attr("class").match(/postid-(\d+)/);
      if (res) {
        postId = res[1];
      }
    } else {
      var $article = $(this).parents("article.format-link");
      if ($article.length > 0) {
        postId = $article.attr("class").match(/post\-(\d+)/)[1];
      }
    }
    if (postId) {
      $.ajax({
        type: "POST",
        url: g1.config.ajax_url,
        data: {
          action: "update_views_ajax",
          wpp_id: postId,
          token: g1.config.wpp.token,
        },
      });
    }
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.flickity = function () {
    var FlickitySpots = $(
      ".adace-shop-the-post-wrap.carousel-wrap .woocommerce .products, .g1-products-widget-carousel .product_list_widget"
    );
    FlickitySpots.each(function () {
      if ($(this).hasClass(".flickity-enabled")) {
        return;
      }
      var ThisFlickityItems = $(this).children(),
        ThisFlickityItemsWidth =
          ThisFlickityItems.outerWidth() * ThisFlickityItems.length,
        ThisFlickityArgs = {
          cellAlign: "left",
          wrapAround: !0,
          prevNextButtons: !0,
          pageDots: !1,
          groupCells: !0,
          rightToLeft: g1.isRTL(),
          imagesLoaded: !0,
        };
      if (ThisFlickityItemsWidth <= $(this).outerWidth()) {
        ThisFlickityArgs.cellAlign = "center";
        ThisFlickityArgs.wrapAround = !1;
      } else {
        var ThisRequiredNumber =
          Math.round($(this).outerWidth() / ThisFlickityItems.outerWidth()) *
          ThisFlickityItems.length;
        while (ThisFlickityItems.length < ThisRequiredNumber) {
          $(this).append(ThisFlickityItems.clone(!0));
          ThisFlickityItems = $(this).children();
        }
      }
      $(this).flickity(ThisFlickityArgs);
    });
  };
  $("body").on("g1NewContentLoaded", function () {
    g1.flickity();
  });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    var selectors = ["#wpadminbar", ".g1-iframe-bar", ".g1-sticky-top-wrapper"];
    var applyOffset = function () {
      var topOffset = 0;
      for (var i = 0; i < selectors.length; i++) {
        var $elem = $(selectors[i]);
        if ($elem.length > 0 && $elem.is(":visible")) {
          topOffset += $elem.outerHeight();
        }
      }
      var cssRule =
        "html.g1-off-inside.g1-off-global-desktop .g1-canvas {top:" +
        topOffset +
        "px;";
      $("#g1-canvas-js-css").remove();
      $("head").append('<style id="g1-canvas-js-css">' + cssRule + "</style>");
      $("html.g1-off-inside .g1-canvas")
        .removeClass("g1-canvas-no-js")
        .addClass("g1-canvas-js");
    };
    $("body").on("g1PageHeightChanged", function (e) {
      applyOffset();
    });
    $("html.g1-off-inside .g1-canvas.g1-canvas-no-js").each(function () {
      applyOffset();
    });
  });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    g1.uiHelpers();
    if (g1.config.timeago === "on") {
      g1.dateToTimeago();
    }
    g1.loadMoreButton();
    g1.infiniteScroll();
    g1.stickyPosition();
    g1.droppableElements();
    g1.canvas();
    g1.snax();
    g1.mediaAce();
    g1.flickity();
    g1.popup();
    g1.slideup();
    g1.stickySidebar();
  });
})(jQuery);
(function ($) {
  "use strict";
  var isEnabled = g1.config.use_gif_player;
  g1.gifPlayer = function ($scope) {
    if (!isEnabled) {
      return;
    }
    if (!$scope) {
      $scope = $("body");
    }
    if (typeof XMLHttpRequest.prototype.overrideMimeType === "undefined") {
      return;
    }
    g1.gifPlayerIncludeSelectors = [
      '.entry-content img.aligncenter[src$=".gif"]',
      '.entry-content .aligncenter img[src$=".gif"]',
      "img.g1-enable-gif-player",
      '.entry-featured-media-main img[src$=".gif"]',
      '.entry-tpl-stream .entry-featured-media img[src$=".gif"]',
      '.entry-tpl-grid-l .entry-featured-media img[src$=".gif"]',
    ];
    g1.gifPlayerExcludeSelectors = [".ajax-loader", ".g1-disable-gif-player"];
    $(g1.gifPlayerIncludeSelectors.join(","), $scope)
      .not(g1.gifPlayerExcludeSelectors.join(","))
      .each(function () {
        var $img = $(this);
        var imgClasses = $img.attr("class");
        var imgSrc = $img.attr("src");
        if (-1 !== imgSrc.indexOf("http")) {
          if (
            imgSrc.indexOf(location.hostname) === -1 &&
            !$img.is(".g1-enable-gif-player")
          ) {
            return;
          }
        }
        var gifObj = new SuperGif({ gif: this, auto_play: 0 });
        var $gitIndicator = $('<span class="g1-indicator-gif g1-loading">');
        gifObj.load(function () {
          var frames = gifObj.get_length();
          var $canvasWrapper = $(gifObj.get_canvas()).parent();
          if (frames > 1) {
            var isPlaying = !1;
            var playGif = function () {
              gifObj.play();
              isPlaying = !0;
              $gitIndicator.addClass("g1-indicator-gif-playing");
            };
            var pauseGif = function () {
              gifObj.pause();
              isPlaying = !1;
              $gitIndicator.removeClass("g1-indicator-gif-playing");
            };
            if (!g1.isTouchDevice()) {
              $canvasWrapper.on("click", function (e) {
                e.preventDefault();
                if (isPlaying) {
                  pauseGif();
                } else {
                  playGif();
                }
              });
            } else {
              $canvasWrapper.on("hover", function () {
                playGif();
              });
            }
            $canvasWrapper.on("bimberPlayGif", playGif);
            $canvasWrapper.on("bimberPauseGif", pauseGif);
            $gitIndicator.toggleClass("g1-loading g1-loaded");
            $(document).trigger("bimberGifPlayerLoaded", [$canvasWrapper]);
          } else {
            $gitIndicator.remove();
          }
        });
        var $canvasWrapper = $(gifObj.get_canvas()).parent();
        $canvasWrapper
          .addClass(imgClasses + " g1-enable-share-links")
          .attr("data-img-src", imgSrc)
          .append($gitIndicator);
      });
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.mp4Player = function () {
    if (typeof mejs === "undefined") {
      return;
    }
    g1.mp4PlayerIncludeSelectors = [
      ".entry-content .mace-video",
      ".entry-featured-media .mace-video",
      ".g1-enable-mp4-player",
    ];
    g1.mp4PlayerExcludeSelectors = [".g1-disable-mp4-player"];
    $(g1.mp4PlayerIncludeSelectors.join(","))
      .not(g1.mp4PlayerExcludeSelectors.join(","))
      .each(function () {
        var $video = $(this);
        var $mejsContainer = $video.parents(".mejs-container");
        var playerId;
        var player;
        $mejsContainer.find(".mejs-controls").remove();
        $video.attr("loop", "true");
        $mejsContainer.hover(
          function () {
            if (!player) {
              playerId = $mejsContainer.attr("id");
              player = mejs.players[playerId];
            }
            if (player) {
              player.play();
            }
          },
          function () {}
        );
      });
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = {
    videoPost:
      ".archive-body-stream .entry-tpl-stream .entry-featured-media:not(.entry-media-nsfw-embed)",
    videoWrapper: ".g1-fluid-wrapper-inner",
    videoIframe: ".g1-fluid-wrapper-inner iframe",
    maceButton: ".g1-fluid-wrapper-inner .mace-play-button",
    embedly: ".embedly-card iframe",
    mejs: ".mejs-video",
    mejsButton: ".mejs-video .mejs-overlay-button",
    mejsPause: ".mejs-video .mejs-pause",
    mejsPlay: ".mejs-video .mejs-play",
    mejsMute: ".mejs-video .mejs-mute button",
    jsgif: ".jsgif",
    html5Video: ".snax-native-video",
  };
  g1.isAutoPlayEnabled = g1.config.auto_play_videos && !g1.isTouchDevice();
  var playingIds = [];
  var playingQueue = [];
  var playedIds = [];
  g1.autoPlayVideo = function () {
    if (!g1.isAutoPlayEnabled) {
      return;
    }
    var addToQueue = function (element) {
      var postId = $(element).parents("article").attr("id");
      playingQueue.push(element);
      playingIds.push(postId);
      playedIds.push(postId);
    };
    var getFromQueue = function () {
      var element = playingQueue.pop();
      var postId = $(element).parents("article").attr("id");
      var index = playingIds.indexOf(postId);
      if (index > -1) {
        playingIds.splice(index, 1);
      }
      return element;
    };
    var pauseAllVideos = function () {
      if (playingQueue.length === 0) {
        return;
      }
      g1.log("Pause all videos");
      g1.log(playingQueue);
      while (playingQueue.length > 0) {
        var element = getFromQueue();
        pause(element);
      }
    };
    var play = function (element) {
      var postId = $(element).parents("article").attr("id");
      var $iframe = $(selectors.videoIframe, element);
      var $embedly = $(selectors.embedly, element);
      var $mace = $(selectors.maceButton, element);
      var $mejs = $(selectors.mejsButton, element);
      var $jsgif = $(selectors.jsgif, element);
      var $html5 = $(selectors.html5Video, element);
      var videosInPost =
        $iframe.length +
        $embedly.length +
        $mace.length +
        $mejs.length +
        $jsgif.length +
        $html5.length;
      if (videosInPost > 0) {
        pauseAllVideos();
      } else {
        return;
      }
      if ($iframe.length > 0) {
        var iframesrc = !1;
        if ($iframe.attr("data-src")) {
          iframesrc = $iframe.attr("data-src");
        } else {
          iframesrc = $iframe.attr("src");
        }
        if (iframesrc) {
          var separator = "?";
          if (iframesrc.indexOf("?") > 0) {
            separator = "&";
          }
          if (iframesrc.indexOf("youtu") > 0) {
            if (-1 !== playedIds.indexOf(postId)) {
              $iframe[0].contentWindow.postMessage(
                JSON.stringify({
                  event: "command",
                  func: "playVideo",
                  args: "",
                }),
                "*"
              );
            } else {
              $iframe.on("load", function () {
                $iframe[0].contentWindow.postMessage(
                  JSON.stringify({ event: "command", func: "mute", args: "" }),
                  "*"
                );
              });
              $iframe.attr(
                "src",
                iframesrc + separator + "autoplay=1&enablejsapi=1"
              );
            }
          }
          if (iframesrc.indexOf("dailymotion") > 0) {
            if (-1 !== playedIds.indexOf(postId)) {
              $iframe[0].contentWindow.postMessage("play", "*");
            } else {
              $iframe.attr(
                "src",
                iframesrc + separator + "autoplay=1&api=postMessage&mute=1"
              );
            }
          }
          if (iframesrc.indexOf("vimeo") > 0) {
            if (-1 !== playedIds.indexOf(postId)) {
              $iframe[0].contentWindow.postMessage(
                JSON.stringify({ method: "play" }),
                "*"
              );
            } else {
              $iframe.on("load", function () {
                $iframe[0].contentWindow.postMessage(
                  JSON.stringify({ method: "setVolume", value: 0 }),
                  "*"
                );
              });
              $iframe.attr(
                "src",
                iframesrc + separator + "autoplay=1&autopause=0"
              );
            }
          }
        }
      }
      if (typeof embedly !== "undefined") {
        if ($embedly.length > 0) {
          embedly("player", function (player) {
            if ($embedly[0] === $(player.frame.elem)[0]) {
              player.play();
              player.mute();
            } else {
              player.pause();
            }
          });
        } else {
          embedly("player", function (player) {
            player.pause();
          });
        }
      }
      if ($mace.length > 0) {
        var $maceWrapper = $mace.parent();
        $maceWrapper.on("maceIframeLoaded", function (e, $iframe) {
          $iframe[0].contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "mute", args: "" }),
            "*"
          );
        });
        $mace.trigger("click");
      }
      if ($mejs.length > 0) {
        $mejs.trigger("click");
        var playerId = $mejs.parents(".mejs-container").attr("id");
        if (playerId && mejs && typeof mejs.players !== "undefined") {
          var player = mejs.players[playerId];
          player.setVolume(0);
        }
      }
      if ($jsgif.length > 0) {
        setTimeout(function () {
          $jsgif.trigger("bimberPlayGif");
        }, 500);
      }
      if ($html5.length > 0) {
        $html5[0].play();
      }
      addToQueue(element);
    };
    var pause = function (element) {
      var $triggerediframe = $(selectors.videoIframe, element);
      if ($triggerediframe.length > 0) {
        var iframesrc = !1;
        if ($triggerediframe.attr("data-src")) {
          iframesrc = $triggerediframe.attr("data-src");
        } else {
          iframesrc = $triggerediframe.attr("src");
        }
        if (iframesrc) {
          if (iframesrc.indexOf("youtu") > 0) {
            $triggerediframe[0].contentWindow.postMessage(
              JSON.stringify({
                event: "command",
                func: "pauseVideo",
                args: "",
              }),
              "*"
            );
          }
          if (iframesrc.indexOf("dailymotion") > 0) {
            $triggerediframe[0].contentWindow.postMessage("pause", "*");
          }
          if (iframesrc.indexOf("vimeo") > 0) {
            $triggerediframe[0].contentWindow.postMessage(
              JSON.stringify({ method: "pause" }),
              "*"
            );
          }
        }
      }
      if (typeof embedly !== "undefined") {
        var $embedly = $(selectors.embedly, element);
        if ($embedly.length > 0) {
          embedly("player", function (player) {
            if ($embedly[0] === $(player.frame.elem)[0]) {
              player.pause();
            }
          });
        }
      }
      $(selectors.mejsPause, element).trigger("click");
      var $jsgif = $(selectors.jsgif, element);
      $jsgif.trigger("bimberPauseGif");
      var $html5 = $(selectors.html5Video, element);
      if ($html5.length > 0) {
        $html5[0].pause();
      }
    };
    var canBeAutoPlayed = function (postId) {
      return g1.isAutoPlayEnabled && -1 !== playingIds.indexOf(postId);
    };
    var bindEvents = function () {
      var scrollEvents = 0;
      var allowPlaying = !1;
      $(document).scroll(function () {
        scrollEvents++;
        if (scrollEvents > 5) {
          allowPlaying = !0;
        }
      });
      $(selectors.videoPost).waypoint(
        function (direction) {
          if ("down" === direction) {
            if (allowPlaying) {
              g1.log("Play video (enter, direction: down)");
              play(this.element);
            }
          }
        },
        { offset: "bottom-in-view" }
      );
      $(selectors.videoPost).waypoint(
        function (direction) {
          if ("up" === direction) {
            if (allowPlaying) {
              g1.log("Play video (enter, direction: up)");
              play(this.element);
            }
          }
        },
        { offset: "0" }
      );
      $(selectors.videoPost).waypoint(
        function (direction) {
          if ("down" === direction) {
            g1.log("Pause (exit, direction: down)");
            pause(this.element);
          }
        },
        {
          offset: function () {
            return -Math.round(this.element.clientHeight / 2);
          },
        }
      );
      $(selectors.videoPost).waypoint(
        function (direction) {
          if ("up" === direction) {
            g1.log("Pause (exit, direction: up)");
            pause(this.element);
          }
        },
        {
          offset: function () {
            var viewportHeight = Math.max(
              document.documentElement.clientHeight,
              window.innerHeight || 0
            );
            return viewportHeight - Math.round(this.element.clientHeight / 2);
          },
        }
      );
      $(document).on("bimberGifPlayerLoaded", function (e, $canvasWrapper) {
        var postId = $canvasWrapper.parents("article").attr("id");
        if (canBeAutoPlayed(postId)) {
          $canvasWrapper.trigger("bimberPlayGif");
        }
      });
    };
    bindEvents();
  };
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    g1.gifPlayer();
    g1.autoPlayVideo();
  });
  $(window).load(function () {
    g1.mp4Player();
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.customShareButtons = function () {
    openCustomSharesInNewWindow();
  };
  function openCustomSharesInNewWindow() {
    $(".mashicon-pinterest, .mashicon-google").click(function (e) {
      var winWidth = 750;
      var winHeight = 550;
      var winTop = screen.height / 2 - winHeight / 2;
      var winLeft = screen.width / 2 - winWidth / 2;
      var url = $(this).attr("href");
      if ("#" === url) {
        url = $(this).attr("data-mashsb-url");
      }
      window.open(
        url,
        "sharer",
        "top=" +
          winTop +
          ",left=" +
          winLeft +
          ",toolbar=0,status=0,width=" +
          winWidth +
          ",height=" +
          winHeight
      );
      e.preventDefault();
    });
  }
  $("body").on("g1NewContentLoaded", function () {
    if (typeof lashare_fb == "undefined" && typeof mashsb !== "undefined") {
      $(".mashicon-facebook").click(function (mashfb) {
        var winWidth = 520;
        var winHeight = 550;
        var winTop = screen.height / 2 - winHeight / 2;
        var winLeft = screen.width / 2 - winWidth / 2;
        var url = $(this).attr("href");
        window.open(
          url,
          "sharer",
          "top=" +
            winTop +
            ",left=" +
            winLeft +
            ",toolbar=0,status=0,width=" +
            winWidth +
            ",height=" +
            winHeight
        );
        mashfb.preventDefault(mashfb);
        return !1;
      });
    }
    if (typeof mashsb !== "undefined") {
      $(".mashicon-twitter").click(function (e) {
        var winWidth = 520;
        var winHeight = 350;
        var winTop = screen.height / 2 - winHeight / 2;
        var winLeft = screen.width / 2 - winWidth / 2;
        var url = $(this).attr("href");
        if (mashsb.twitter_popup === "1") {
          window.open(
            url,
            "sharer",
            "top=" +
              winTop +
              ",left=" +
              winLeft +
              ",toolbar=0,status=0,width=" +
              winWidth +
              ",height=" +
              winHeight
          );
        }
        e.preventDefault();
        return !1;
      });
    }
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.customizeShareButtons = function () {
    overrideOnOffSwitch();
    subscribeViaMailbox();
  };
  function overrideOnOffSwitch() {
    var $onoffswitch = $(".onoffswitch");
    var $onoffswitch2 = $(".onoffswitch2");
    $onoffswitch.off("click");
    $onoffswitch2.off("click");
    $onoffswitch.on("click", function () {
      var $container = $(this).parents(".mashsb-container");
      $(".onoffswitch", $container).hide();
      $(".secondary-shares", $container).show();
      $(".onoffswitch2", $container).show();
    });
    $onoffswitch2.on("click", function () {
      var $container = $(this).parents(".mashsb-container");
      $(".onoffswitch", $container).show();
      $(".secondary-shares", $container).hide();
    });
  }
  function subscribeViaMailbox() {
    if (typeof mashsb !== "undefined" && mashsb.subscribe === "content") {
      return;
    }
    if (typeof mashsb !== "undefined" && mashsb.subscribe_url !== "") {
      return;
    }
    $("a.mashicon-subscribe").each(function () {
      var $link = $(this);
      if ($link.attr("href") === "#") {
        $link.off("click");
        var postTitle = $("head > title").text();
        var postUrl = location.href;
        var subject =
          g1.config.i18n.newsletter.subscribe_mail_subject_tpl.replace(
            "%subject%",
            postTitle
          );
        var body = postTitle + "%0A%0A" + postUrl;
        var mailTo = "mailto:?subject={subject}&body={body}";
        mailTo = mailTo.replace("{subject}", subject);
        mailTo = mailTo.replace("{body}", body);
        $link.attr("href", mailTo);
      }
    });
  }
})(jQuery);
(function ($) {
  "use strict";
  g1.shareBarTopOffsetSelectors = ["#wpadminbar"];
  g1.shareBar = function () {
    var $shareBar = g1.activateShareBar();
    $("body").on("g1PageHeightChanged", function () {
      if ($shareBar !== !1) {
        g1.updateShareBarPosition($shareBar);
      }
    });
    enquire.register("screen and ( min-width: 801px )", {
      match: function () {
        if ($shareBar !== !1) {
          g1.updateShareBarPosition($shareBar);
        }
      },
      unmatch: function () {
        if ($shareBar !== !1) {
          g1.updateShareBarPosition($shareBar);
        }
      },
    });
  };
  g1.activateShareBar = function () {
    var $shareBar = $(".g1-sharebar");
    var $shareButtons = $(".mashsb-main:first");
    if ($shareBar.length === 0 || $shareButtons.length === 0) {
      return !1;
    }
    var $shareBarInner = $shareBar.find(".g1-sharebar-inner");
    if (!$shareBar.is(".g1-sharebar-loaded")) {
      var $clonedShareButtons = $shareButtons.clone(!0);
      if (
        typeof mashsb !== "undefined" &&
        mashsb.animate_shares === "1" &&
        $clonedShareButtons.find(".mashsbcount").length
      ) {
        $clonedShareButtons.find(".mashsbcount").text(mashsb.shares);
      }
      $shareBarInner.append($clonedShareButtons);
      $shareBar.addClass("g1-sharebar-loaded");
      g1.updateShareBarPosition($shareBar);
    }
    new Waypoint({
      element: $("body"),
      handler: function (direction) {
        if (direction === "down") {
          $shareBar.addClass("g1-sharebar-on");
          $shareBar.removeClass("g1-sharebar-off");
        } else {
          $shareBar.removeClass("g1-sharebar-on");
          $shareBar.addClass("g1-sharebar-off");
        }
      },
      offset: function () {
        return -100;
      },
    });
    return $shareBar;
  };
  g1.updateShareBarPosition = function ($shareBar) {
    var shareBarWidth = parseInt($shareBar.outerWidth(), 10);
    var cssMediaQueryBreakpoint = 800;
    if (shareBarWidth <= cssMediaQueryBreakpoint) {
      $shareBar.css("top", "");
    } else {
      var top = 0;
      for (var i = 0; i < g1.shareBarTopOffsetSelectors.length; i++) {
        var $element = $(g1.shareBarTopOffsetSelectors[i]);
        if ($element.length > 0 && $element.is(":visible")) {
          top += parseInt($element.outerHeight(), 10);
        }
      }
      $shareBar.css("top", top + "px");
    }
  };
})(jQuery);
(function ($) {
  "use strict";
  g1.loadNextPostConfig = { offset: "500%" };
  var selectors = {
    button: ".bimber-load-next-post",
    urlWaypoint: ".bimber-url-waypoint",
    elementButton: ".g1-auto-load-button",
  };
  g1.loadNextPost = function () {
    var mainUrl = window.location.href;
    var autoLoadLimit = g1.config.auto_load_limit;
    var loadedPosts = 0;
    var loadNextEvent = function (e) {
      e.preventDefault();
      if (autoLoadLimit > 0 && loadedPosts >= autoLoadLimit) {
        $(this).remove();
        return;
      }
      var $button = $(this);
      var template = "classic";
      if ($("#secondary").length === 0) {
        template = "row";
      }
      $button.css("position", "relative");
      $button.addClass("g1-collection-more-loading");
      var postUrl = $("a", this).attr("href");
      var gaPostUrl = $("a", this).attr("data-bimber-analytics-href");
      var url = postUrl + "?bimber_auto_load_next_post_template=" + template;
      $("a", this).remove();
      var xhr = $.get(url);
      loadedPosts += 1;
      xhr.done(function (data) {
        var $html = $($.parseHTML(data, document, !0));
        var $content = $html.find("#content");
        var title = $($content.find(".entry-title")[0]).text();
        $content.find("#secondary").remove();
        var $insta = $(
          'script[src="//platform.instagram.com/en_US/embeds.js"]'
        );
        if (typeof window.wp.mediaelement === "undefined") {
          var matches = data.match(/<script(.|\n)*?<\/script>/g);
          var mejsCode = "";
          matches.forEach(function (match) {
            if (
              match.indexOf("mejs") > 0 ||
              match.indexOf("mediaelement") > 0
            ) {
              match = match.replace("<script", "<script async");
              mejsCode += match;
            }
          });
          matches = data.match(/<link(.|\n)*?\/>/g);
          matches.forEach(function (match) {
            if (
              match.indexOf("mejs") > 0 ||
              match.indexOf("mediaelement") > 0
            ) {
              mejsCode += match;
            }
          });
          $button.after(mejsCode);
        }
        $button.before('<div class="g1-divider"></div>');
        $("body").trigger("g1BeforeNewContentReady", [$content]);
        var $scope = $($content.html()).insertAfter($button);
        if ($insta.length > 0) {
          window.instgrm.Embeds.process();
        }
        $button.remove();
        $("body").trigger("g1NewContentLoaded", [$scope]);
        if (typeof window.wp.mediaelement !== "undefined") {
          window.wp.mediaelement.initialize();
        }
        if (typeof ga !== "undefined" && typeof ga.getAll !== "undefined") {
          ga("create", ga.getAll()[0].get("trackingId"), "auto");
          ga("set", { page: gaPostUrl, title: title });
          ga("send", "pageview");
        }
        var $nonce = $html.find("#bimber-wpp-nonce");
        if ($nonce.length > 0) {
          var nonce = $nonce.attr("data-bimber-wpp-nonce");
          var postId = $nonce.attr("data-bimber-wpp-id");
          g1.updatePostViews(nonce, postId);
        }
        bindEvents();
      });
      xhr.always(function () {
        $button.removeClass("g1-collection-more-loading");
      });
    };
    var bindEvents = function () {
      $(selectors.button).click(loadNextEvent);
      $(selectors.elementButton).click(function () {
        window.history.replaceState({}, "", mainUrl);
      });
      $(selectors.button).waypoint(
        function (direction) {
          if ("down" === direction) {
            $(selectors.button).trigger("click");
          }
        },
        { offset: g1.loadNextPostConfig.offset }
      );
      $(selectors.urlWaypoint).waypoint(function (direction) {
        var $waypoint = $(this.element);
        if ("up" === direction) {
          var $waypointUp = $waypoint
            .parent("article")
            .prev(".bimber-url-waypoint");
          if ($waypointUp.length > 0) {
            $waypoint = $waypointUp;
          }
        }
        var url = $waypoint.attr("data-bimber-post-url");
        var title = $waypoint.attr("data-bimber-post-title");
        var currentUrl = window.location.href;
        if (url !== currentUrl) {
          var $article = $waypoint.next("article");
          var $mashShare = $(".mashsb-container", $article);
          var $shareBar = $(".g1-sharebar .g1-sharebar-inner");
          if ($mashShare.length > 0 && $.trim($shareBar.html())) {
            $shareBar.html($mashShare[0].outerHTML);
          }
          var $essbShare = $(".essb_topbar_inner", $article);
          var $essbBar = $(".essb_topbar_inner");
          if ($essbShare.length > 0 && $.trim($essbBar.html())) {
            $essbBar.html($essbShare[0].outerHTML);
          }
          g1.customizeShareButtons();
          window.history.replaceState({}, "", url);
          document.title = title;
        }
      });
    };
    bindEvents();
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = {
    wrapper: ".g1-comments",
    tabs: ".g1-tab-items > li",
    tab: ".g1-tab-item",
    currentTab: ".g1-tab-item-current",
    commentType: ".g1-comment-type",
  };
  var classes = {
    currentTab: "g1-tab-item-current",
    currentType: "g1-tab-pane-current",
    type: "g1-tab-pane",
    loading: "g1-loading",
    loaded: "g1-loaded",
  };
  var $wrapper;
  g1.comments = function () {
    $wrapper = $(selectors.wrapper);
    if ($wrapper.length === 0) {
      return;
    }
    g1.facebookComments();
    g1.disqusComments();
    initTabs();
  };
  var initTabs = function () {
    var $tabs = $wrapper.find(selectors.tabs);
    var currentType = $tabs
      .filter(selectors.currentTab)
      .attr("data-bimber-type");
    if (!currentType) {
      var types = g1.config.comment_types;
      if (types && types.length > 0) {
        currentType = types[0];
      } else {
        currentType = "wp";
      }
    }
    $wrapper.find(selectors.commentType).each(function () {
      var $type = $(this);
      $type.addClass(classes.type);
    });
    if ("dsq" === currentType) {
      setTimeout(function () {
        selectTab(currentType);
      }, 1000);
    } else {
      selectTab(currentType);
    }
    $tabs.on("click", function () {
      var type = $(this).attr("data-bimber-type");
      selectTab(type);
    });
  };
  var selectTab = function (type) {
    var $tab = $wrapper.find(selectors.tab + "-" + type);
    var $type = $wrapper.find(selectors.commentType + "-" + type);
    if ("fb" === type) {
      if (!$type.hasClass(classes.loaded)) {
        $type.addClass(classes.loading);
      }
    }
    $wrapper.find(selectors.commentType).removeClass(classes.currentType);
    $type.addClass(classes.currentType);
    $type.trigger("loadComments");
    $wrapper.find(selectors.tabs).removeClass(classes.currentTab);
    $tab.addClass(classes.currentTab);
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = {
    wrapper: ".g1-comment-type-fb",
    counter: ".g1-comment-count",
    list: ".g1-comment-list",
    tab: ".g1-comments .g1-tab-item-fb",
  };
  var classes = { loading: "g1-loading", loaded: "g1-loaded" };
  var $wrapper;
  var loaded = !1;
  g1.facebookComments = function () {
    $wrapper = $(selectors.wrapper);
    if (!$wrapper.is(".g1-on-demand")) {
      loaded = !0;
    }
    if ($wrapper.length > 0) {
      init();
      return $wrapper;
    } else {
      return !1;
    }
  };
  var init = function () {
    var origFbAsyncInit = window.fbAsyncInit;
    window.fbAsyncInit = function () {
      if (typeof FB === "undefined") {
        return;
      }
      FB.Event.subscribe("xfbml.render", function () {
        $wrapper.removeClass(classes.loading);
        $wrapper.addClass(classes.loaded);
        var $counter = $wrapper.find(selectors.counter);
        var url = $counter
          .find(".fb_comments_count")
          .attr("data-bimber-graph-api-url");
        FB.api("/" + url, "GET", { fields: "engagement" }, function (response) {
          if (response.engagement) {
            var count = response.engagement.comment_plugin_count;
            $(".fb_comments_count").html(count);
          }
        });
        var realCount = parseInt(
          $counter.find(".fb_comments_count").text(),
          10
        );
        var postCount = parseInt(
          $counter.attr("data-bimber-fb-comment-count"),
          10
        );
        if (realCount !== postCount) {
          save(realCount);
        }
      });
      FB.Event.subscribe("comment.create", function () {
        changeCommentsNumber(1);
      });
      FB.Event.subscribe("comment.remove", function () {
        changeCommentsNumber(-1);
      });
      if (typeof origFbAsyncInit === "function") {
        origFbAsyncInit();
      }
    };
    $wrapper.on("loadComments", function () {
      if (loaded) {
        return;
      }
      $wrapper.addClass(classes.loading);
      loadComments(function (html) {
        g1.resetFacebookSDK();
        $wrapper.find(selectors.list).html(html);
        $wrapper.removeClass(classes.loading);
      });
    });
  };
  var changeCommentsNumber = function (diff) {
    var $counter = $wrapper.find(selectors.counter);
    var postCount = parseInt($counter.attr("data-bimber-fb-comment-count"), 10);
    postCount += diff;
    $wrapper.find(".fb_comments_count").text(postCount);
    $counter.attr("data-bimber-fb-comment-count", postCount);
    var $postCommentCount = $wrapper
      .parents("#content")
      .find(".entry-comments-link strong");
    var postCommentCount = parseInt($postCommentCount.text(), 10);
    $postCommentCount.text(postCommentCount + diff);
    var $fbCount = $(selectors.tab).find("a > span");
    if ($fbCount.length > 0) {
      var fbCount = parseInt($fbCount.text(), 10);
      $fbCount.text(fbCount + diff);
    }
    save(postCount);
  };
  var save = function (newCount) {
    var postId = $wrapper.find(selectors.counter).attr("data-bimber-post-id");
    var nonce = $wrapper.find(selectors.counter).attr("data-bimber-nonce");
    $.ajax({
      type: "POST",
      url: g1.config.ajax_url,
      dataType: "json",
      data: {
        action: "bimber_update_fb_comment_count",
        post_id: postId,
        security: nonce,
        count: newCount,
      },
    });
  };
  var loadComments = function (callback) {
    var postId = $wrapper.find(selectors.counter).attr("data-bimber-post-id");
    var xhr = $.ajax({
      type: "GET",
      url: g1.config.ajax_url,
      data: { action: "bimber_load_fbcommentbox", post_id: postId },
    });
    xhr.done(function (res) {
      callback(res);
      loaded = !0;
    });
  };
})(jQuery);
(function ($) {
  "use strict";
  var selectors = {
    wrapper: ".g1-comment-type-dsq",
    counter: ".g1-comment-count",
    list: ".g1-comment-list",
    tab: ".g1-comments .g1-tab-item-dsq",
  };
  var classes = { loading: "g1-loading" };
  var $wrapper;
  var loaded = !1;
  g1.disqusComments = function () {
    $wrapper = $(selectors.wrapper);
    if ($wrapper.length > 0) {
      init();
      return $wrapper;
    } else {
      return !1;
    }
  };
  var init = function () {
    var origDsqConfig = window.disqus_config;
    window.disqus_config = function () {
      if (typeof origDsqConfig === "function") {
        origDsqConfig();
        $wrapper.removeClass(classes.loading);
        loaded = !0;
      }
      var $counter = $wrapper.find(selectors.counter);
      var realCount = parseInt(
        $counter.find(".disqus-comment-count").text(),
        10
      );
      var postCount = parseInt(
        $counter.attr("data-bimber-dsq-comment-count"),
        10
      );
      if (realCount !== postCount) {
        save(realCount);
      }
      this.callbacks.onNewComment = [
        function () {
          changeCommentsNumber(1);
        },
      ];
    };
    $wrapper.on("loadComments", function () {
      if (loaded) {
        return;
      }
      $wrapper.addClass(classes.loading);
      loadComments();
    });
  };
  var changeCommentsNumber = function (diff) {
    var $counter = $wrapper.find(selectors.counter);
    var postCount = parseInt(
      $counter.attr("data-bimber-dsq-comment-count"),
      10
    );
    postCount += diff;
    $wrapper.find(".disqus-comment-count").text(postCount);
    $counter.attr("data-bimber-dsq-comment-count", postCount);
    var $postCommentCount = $wrapper
      .parents("#content")
      .find(".entry-comments-link strong");
    var postCommentCount = parseInt($postCommentCount.text(), 10);
    $postCommentCount.text(postCommentCount + diff);
    var $dsqCount = $(selectors.tab).find("a > span");
    if ($dsqCount.length > 0) {
      var dsqCount = parseInt($dsqCount.text(), 10);
      $dsqCount.text(dsqCount + diff);
    }
    save(postCount);
  };
  var save = function (newCount) {
    var postId = $wrapper.find(selectors.counter).attr("data-bimber-post-id");
    var nonce = $wrapper.find(selectors.counter).attr("data-bimber-nonce");
    $.ajax({
      type: "POST",
      url: g1.config.ajax_url,
      dataType: "json",
      data: {
        action: "bimber_dsq_update_comment_count",
        post_id: postId,
        security: nonce,
        count: newCount,
      },
    });
  };
  var loadComments = function () {
    var dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = !0;
    dsq.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(dsq);
  };
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    g1.customShareButtons();
    g1.customizeShareButtons();
    if (g1.config.sharebar === "on") {
      g1.shareBar();
    }
    g1.comments();
    g1.loadNextPost();
  });
})(jQuery); /*! This file is auto-generated */
!(function (d, l) {
  "use strict";
  var e = !1,
    o = !1;
  if (l.querySelector) if (d.addEventListener) e = !0;
  if (((d.wp = d.wp || {}), !d.wp.receiveEmbedMessage))
    if (
      ((d.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t)
          if (t.secret || t.message || t.value)
            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
              var r,
                a,
                i,
                s,
                n,
                o = l.querySelectorAll(
                  'iframe[data-secret="' + t.secret + '"]'
                ),
                c = l.querySelectorAll(
                  'blockquote[data-secret="' + t.secret + '"]'
                );
              for (r = 0; r < c.length; r++) c[r].style.display = "none";
              for (r = 0; r < o.length; r++)
                if (((a = o[r]), e.source === a.contentWindow)) {
                  if ((a.removeAttribute("style"), "height" === t.message)) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                    else if (~~i < 200) i = 200;
                    a.height = i;
                  }
                  if ("link" === t.message)
                    if (
                      ((s = l.createElement("a")),
                      (n = l.createElement("a")),
                      (s.href = a.getAttribute("src")),
                      (n.href = t.value),
                      n.host === s.host)
                    )
                      if (l.activeElement === a) d.top.location.href = t.value;
                }
            }
      }),
      e)
    )
      d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
        l.addEventListener("DOMContentLoaded", t, !1),
        d.addEventListener("load", t, !1);
  function t() {
    if (!o) {
      o = !0;
      var e,
        t,
        r,
        a,
        i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        s = !!navigator.userAgent.match(/Trident.*rv:11\./),
        n = l.querySelectorAll("iframe.wp-embedded-content");
      for (t = 0; t < n.length; t++) {
        if (!(r = n[t]).getAttribute("data-secret"))
          (a = Math.random().toString(36).substr(2, 10)),
            (r.src += "#?secret=" + a),
            r.setAttribute("data-secret", a);
        if (i || s)
          (e = r.cloneNode(!0)).removeAttribute("security"),
            r.parentNode.replaceChild(e, r);
      }
    }
  }
})(window, document);
(function ($) {
  "use strict";
  g1.skinSwitcher = function () {
    if (typeof g1SwitchSkin === "undefined") {
      return;
    }
    $(".g1-drop-the-skin").each(function () {
      var $this = $(this);
      var $skinItemId = $('meta[name="g1:skin-item-id"]');
      var skinItemId =
        $skinItemId.length > 0 ? $skinItemId.attr("content") : "g1_skin";
      if (localStorage.getItem(skinItemId)) {
        if ($this.is(".g1-drop-the-skin-light")) {
          $this
            .removeClass("g1-drop-nojs g1-drop-the-skin-light")
            .addClass("g1-drop-the-skin-dark");
        } else {
          $this
            .removeClass("g1-drop-nojs g1-drop-the-skin-dark")
            .addClass("g1-drop-the-skin-light");
        }
      } else {
        $this.removeClass("g1-drop-nojs");
      }
    });
    $("body").on("click", ".g1-drop-the-skin", function () {
      var $this = $(this);
      $this.addClass("g1-drop-the-skin-anim");
      if ($this.is(".g1-drop-the-skin-light")) {
        $this
          .removeClass("g1-drop-the-skin-light")
          .addClass("g1-drop-the-skin-dark");
        g1SwitchSkin("dark");
      } else {
        $this
          .removeClass("g1-drop-the-skin-dark")
          .addClass("g1-drop-the-skin-light");
        g1SwitchSkin("light");
      }
    });
  };
  $(document).ready(function () {
    g1.skinSwitcher();
  });
})(jQuery);
(function ($) {
  "use strict";
  g1.backToTop = function () {
    var $scrollToTop = $(".g1-back-to-top");
    toggleVisibility($scrollToTop);
    $scrollToTop.on("click", function (e) {
      e.preventDefault();
      var multipier = 200;
      var durationRange = { min: 200, max: 1000 };
      var winHeight = $(window).height();
      var docHeight = $(document).height();
      var proportion = Math.floor(docHeight / winHeight);
      var duration = proportion * multipier;
      if (duration < durationRange.min) {
        duration = durationRange.min;
      }
      if (duration > durationRange.max) {
        duration = durationRange.max;
      }
      $("html, body").animate({ scrollTop: 0 }, duration);
    });
    $(window).scroll(function () {
      window.requestAnimationFrame(function () {
        toggleVisibility($scrollToTop);
      });
    });
  };
  function toggleVisibility($scrollToTop) {
    if ($(window).scrollTop() > 240) {
      $scrollToTop
        .addClass("g1-back-to-top-on")
        .removeClass("g1-back-to-top-off");
    } else {
      $scrollToTop
        .addClass("g1-back-to-top-off")
        .removeClass("g1-back-to-top-on");
    }
  }
  $(document).ready(function () {
    g1.backToTop();
  });
})(jQuery);
const loadScriptsTimer = setTimeout(loadScripts, 10 * 1000);
const userInteractionEvents = [
  "mouseover",
  "keydown",
  "touchmove",
  "touchstart",
];
userInteractionEvents.forEach(function (event) {
  window.addEventListener(event, triggerScriptLoader, { passive: !0 });
});
function triggerScriptLoader() {
  loadScripts();
  clearTimeout(loadScriptsTimer);
  userInteractionEvents.forEach(function (event) {
    window.removeEventListener(event, triggerScriptLoader, { passive: !0 });
  });
}
function loadScripts() {
  document
    .querySelectorAll("script[data-type='lazy']")
    .forEach(function (elem) {
      elem.setAttribute("src", elem.getAttribute("data-src"));
    });
}
