(function () {
  var data = {
    resource: {
      version: "1",
      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };
  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ca(a) };
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ha = ka.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = fa,
    ma = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.jj = b.prototype;
    },
    pa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = {},
    sa = function (a, b) {
      ra[a] = ra[a] || [];
      ra[a][b] = !0;
    },
    ta = function (a) {
      for (var b = [], c = ra[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var ua = function () {},
    va = function (a) {
      return "function" == typeof a;
    },
    g = function (a) {
      return "string" == typeof a;
    },
    wa = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    xa = function (a) {
      var b = "[object Array]" == Object.prototype.toString.call(Object(a));
      Array.isArray
        ? Array.isArray(a) !== b && sa("TAGGING", 4)
        : sa("TAGGING", 5);
      return b;
    },
    ya = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    za = function (a, b) {
      if (a && xa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ba = function (a, b) {
      if (!wa(a) || !wa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ga = function (a, b) {
      for (var c = new Da(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ja = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (xa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Pa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Qa = function () {
      return new Date(Date.now());
    },
    Ra = function () {
      return Qa().getTime();
    },
    Da = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Da.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Da.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Sa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ta = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ua = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Va = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Wa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Xa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ya = /^\w{1,9}$/,
    Za = function (a) {
      var b = [];
      Ja(a, function (c, d) {
        Ya.test(c) && d && b.push(c);
      });
      return b.join(",");
    };
  var $a,
    ab = function () {
      if (void 0 === $a) {
        var a = null,
          b = pa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            pa.console && pa.console.error(c.message);
          }
          $a = a;
        } else $a = a;
      }
      return $a;
    };
  var eb = function (a, b) {
    this.o = b === bb ? a : "";
  };
  eb.prototype.toString = function () {
    return this.o + "";
  };
  var bb = {};
  var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var gb;
  a: {
    var hb = pa.navigator;
    if (hb) {
      var mb = hb.userAgent;
      if (mb) {
        gb = mb;
        break a;
      }
    }
    gb = "";
  }
  var nb = function (a) {
    return -1 != gb.indexOf(a);
  };
  var ob = {},
    pb = function (a, b, c) {
      this.o = c === ob ? a : "";
    };
  pb.prototype.toString = function () {
    return this.o.toString();
  };
  var qb = function (a) {
      return a instanceof pb && a.constructor === pb
        ? a.o
        : "type_error:SafeHtml";
    },
    rb = function (a) {
      var b = ab(),
        c = b ? b.createHTML(a) : a;
      return new pb(c, null, ob);
    },
    sb = new pb((pa.trustedTypes && pa.trustedTypes.emptyHTML) || "", 0, ob);
  var tb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ub = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var vb = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = qb(sb);
      return !c.parentElement;
    }),
    wb = function (a, b) {
      if (vb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = qb(b);
    };
  var m = window,
    A = document,
    xb = navigator,
    yb = A.currentScript && A.currentScript.src,
    zb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Ab = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Bb = function (a, b, c) {
      var d = A.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      var e,
        f = ab(),
        h = f ? f.createScriptURL(a) : a;
      e = new eb(h, bb);
      d.src =
        e instanceof eb && e.constructor === eb
          ? e.o
          : "type_error:TrustedResourceUrl";
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window)
          .document,
        p =
          null === (l = n.querySelector) || void 0 === l
            ? void 0
            : l.call(n, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        d.setAttribute("nonce", k);
      Ab(d, b);
      c && (d.onerror = c);
      var q = A.getElementsByTagName("script")[0] || A.body || A.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Cb = function () {
      if (yb) {
        var a = yb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Gb = function (a, b) {
      var c = A.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (A.body && A.body.lastChild) || A.body || A.head;
      d.parentNode.insertBefore(c, d);
      Ab(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Hb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Ib = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Jb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    F = function (a) {
      m.setTimeout(a, 0);
    },
    Kb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Lb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Mb = function (a) {
      var b = A.createElement("div"),
        c = rb("A<div>" + a + "</div>");
      wb(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Nb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Ob = function (a) {
      (xb.sendBeacon && xb.sendBeacon(a)) || Hb(a);
    },
    Tb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ub = function (a) {
      var b = A.featurePolicy;
      return b && va(b.features) ? -1 !== b.features().indexOf(a) : !1;
    };
  var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Wb = function (a) {
      if (null == a) return String(a);
      var b = Vb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Yb = function (a) {
      if (!a || "object" != Wb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Xb(a, "constructor") &&
          !Xb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xb(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == Wb(a) ? [] : {}),
        d;
      for (d in a)
        if (Xb(a, d)) {
          var e = a[d];
          "array" == Wb(e)
            ? ("array" != Wb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Yb(e)
            ? (Yb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Zb = function (a) {
    if (void 0 === a || xa(a) || Yb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var $b = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Ig: a("consent"),
      Jg: a("consent_always_fire"),
      Re: a("convert_case_to"),
      Se: a("convert_false_to"),
      Te: a("convert_null_to"),
      Ue: a("convert_true_to"),
      Ve: a("convert_undefined_to"),
      Ti: a("debug_mode_metadata"),
      jb: a("function"),
      wh: a("instance_name"),
      yh: a("live_only"),
      zh: a("malware_disabled"),
      Ah: a("metadata"),
      Wi: a("original_activity_id"),
      Xi: a("original_vendor_template_id"),
      Ch: a("once_per_event"),
      yf: a("once_per_load"),
      Zi: a("priority_override"),
      $i: a("respected_consent_types"),
      Cf: a("setup_tags"),
      Df: a("tag_id"),
      Ef: a("teardown_tags"),
    };
  })();
  var wc;
  var Dc = [],
    Ec = [],
    Fc = [],
    Gc = [],
    Hc = [],
    Ic = {},
    Jc,
    Kc,
    Lc,
    Mc = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = Ic[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf("vtp_"))
            d && b && b.Pf && b.Pf(a[f]),
              (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === $b.Jg.toString() && a[f]) {
          }
      d && b && b.Of && (e.vtp_gtmCachedValues = b.Of);
      return void 0 !== d ? d(e) : wc(c, e, b);
    },
    Oc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Nc(a[e], b, c));
      return d;
    },
    Nc = function (a, b, c) {
      if (xa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Nc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Dc[f];
            if (!h || b.ve(h)) return;
            c[f] = !0;
            try {
              var k = Oc(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Mc(k, b);
              Lc && (d = Lc.Rh(d, k));
            } catch (y) {
              b.fg && b.fg(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Nc(a[l], b, c)] = Nc(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Nc(a[p], b, c);
              Kc && (n = n || q === Kc.Rc);
              d.push(q);
            }
            return Kc && n ? Kc.Uh(d) : d.join("");
          case "escape":
            d = Nc(a[1], b, c);
            if (Kc && xa(a[1]) && "macro" === a[1][0] && Kc.li(a))
              return Kc.Ci(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) ac[a[r]] && (d = ac[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Gc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { Yf: a[2], index: u });
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t["function"] = a[1];
            var v = Pc(t, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Pc = function (a, b, c) {
      try {
        return Jc(Oc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Sc = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Qc(a), f = 0; f < Ec.length; f++) {
        var h = Ec[f],
          k = Rc(h, e);
        if (k) {
          for (var l = h.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(h.block || []);
        } else null === k && b(h.block || []);
      }
      for (var p = [], q = 0; q < Gc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Rc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var k = b(f[h]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Qc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Pc(Fc[c], a));
        return b[c];
      };
    };
  var Tc = {
    Rh: function (a, b) {
      b[$b.Re] &&
        "string" === typeof a &&
        (a = 1 == b[$b.Re] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty($b.Te) && null === a && (a = b[$b.Te]);
      b.hasOwnProperty($b.Ve) && void 0 === a && (a = b[$b.Ve]);
      b.hasOwnProperty($b.Ue) && !0 === a && (a = b[$b.Ue]);
      b.hasOwnProperty($b.Se) && !1 === a && (a = b[$b.Se]);
      return a;
    },
  };
  var K = {
    Yb: "_ee",
    Xc: "_syn_or_mod",
    aj: "_uei",
    Qd: "_eu",
    Yi: "_pci",
    xb: "event_callback",
    Gc: "event_timeout",
    Ca: "gtag.config",
    Ka: "gtag.get",
    va: "purchase",
    vb: "refund",
    $a: "begin_checkout",
    sb: "add_to_cart",
    tb: "remove_from_cart",
    Sg: "view_cart",
    Xe: "add_to_wishlist",
    Ja: "view_item",
    Ob: "view_promotion",
    Cc: "select_promotion",
    ud: "select_item",
    ub: "view_item_list",
    We: "add_payment_info",
    Rg: "add_shipping_info",
    Ma: "value_key",
    Ua: "value_callback",
    Da: "allow_ad_personalization_signals",
    Ub: "restricted_data_processing",
    Pb: "allow_google_signals",
    Ga: "cookie_expires",
    Qb: "cookie_update",
    Wb: "session_duration",
    Lc: "session_engaged_time",
    Oa: "user_properties",
    na: "transport_url",
    R: "ads_data_redaction",
    wa: "user_data",
    Rb: "first_party_collection",
    D: "ad_storage",
    H: "analytics_storage",
    Pe: "region",
    Qe: "wait_for_update",
    Fa: "conversion_linker",
    Ea: "conversion_cookie_prefix",
    fa: "value",
    da: "currency",
    sf: "trip_type",
    X: "items",
    jf: "passengers",
    wd: "allow_custom_scripts",
    Bb: "session_id",
    qf: "quantity",
    ib: "transaction_id",
    fb: "language",
    Fc: "country",
    Dc: "allow_enhanced_conversions",
    Bd: "aw_merchant_id",
    zd: "aw_feed_country",
    Ad: "aw_feed_language",
    yd: "discount",
    af: "developer_id",
    Nc: "delivery_postal_code",
    Hd: "estimated_delivery_date",
    Fd: "shipping",
    Od: "new_customer",
    Cd: "customer_lifetime_value",
    Gd: "enhanced_conversions",
    wb: "page_view",
    ma: "linker",
    P: "domains",
    zb: "decorate_forms",
    ff: "enhanced_conversions_automatic_settings",
    ah: "auto_detection_enabled",
  };
  (K.Ye = "user_engagement"),
    (K.Mg = "app_remove"),
    (K.Ng = "app_store_refund"),
    (K.Og = "app_store_subscription_cancel"),
    (K.Pg = "app_store_subscription_convert"),
    (K.Qg = "app_store_subscription_renew"),
    (K.Tg = "first_open"),
    (K.Ug = "first_visit"),
    (K.Vg = "in_app_purchase"),
    (K.Wg = "session_start"),
    (K.Xg = "user_data_login"),
    (K.Yg = "user_data_logout"),
    (K.Zg = "allow_display_features"),
    (K.ab = "client_id"),
    (K.la = "cookie_domain"),
    (K.Ec = "cookie_name"),
    (K.cb = "cookie_path"),
    (K.La = "cookie_flags"),
    (K.$e = "custom_map"),
    (K.Ld = "groups"),
    (K.Ui = "non_interaction"),
    (K.Ab = "page_location"),
    (K.hf = "page_path"),
    (K.Va = "page_referrer"),
    (K.Pd = "page_title"),
    (K.Vb = "send_page_view"),
    (K.hb = "send_to"),
    (K.Kc = "session_engaged"),
    (K.Ic = "_logged_in_state"),
    (K.Mc = "session_number"),
    (K.sh = "tracking_id"),
    (K.Na = "url_passthrough"),
    (K.yb = "accept_incoming"),
    (K.Tb = "url_position"),
    (K.nf = "phone_conversion_number"),
    (K.kf = "phone_conversion_callback"),
    (K.lf = "phone_conversion_css_class"),
    (K.pf = "phone_conversion_options"),
    (K.oh = "phone_conversion_ids"),
    (K.nh = "phone_conversion_country_code"),
    (K.Ze = "aw_remarketing"),
    (K.xd = "aw_remarketing_only"),
    (K.vd = "gclid"),
    (K.$g = "auid"),
    (K.fh = "affiliation"),
    (K.ef = "tax"),
    (K.Ed = "list_name"),
    (K.df = "checkout_step"),
    (K.cf = "checkout_option"),
    (K.gh = "coupon"),
    (K.hh = "promotions"),
    (K.Cb = "user_id"),
    (K.ph = "retoken"),
    (K.ca = "cookie_prefix"),
    (K.bf = "disable_merchant_reported_purchases"),
    (K.eh = "dc_natural_search"),
    (K.dh = "dc_custom_params"),
    (K.lh = "method"),
    (K.rh = "search_term"),
    (K.bh = "content_type"),
    (K.mh = "optimize_id"),
    (K.ih = "experiments"),
    (K.Sb = "google_signals"),
    (K.Kd = "google_tld"),
    (K.Oc = "update"),
    (K.Jd = "firebase_id"),
    (K.Hc = "ga_restrict_domain"),
    (K.Id = "event_settings"),
    (K.Dd = "dynamic_event_settings"),
    (K.Xb = "user_data_settings"),
    (K.qh = "screen_name"),
    (K.kh = "_x_19"),
    (K.eb = "_ecid"),
    (K.jh = "_x_20"),
    (K.Nd = "internal_traffic_results"),
    (K.rf = "traffic_type"),
    (K.Jc = "referral_exclusion_definition"),
    (K.Md = "ignore_referrer");
  K.vf = [
    K.va,
    K.vb,
    K.$a,
    K.sb,
    K.tb,
    K.Sg,
    K.Xe,
    K.Ja,
    K.Ob,
    K.Cc,
    K.ub,
    K.ud,
    K.We,
    K.Rg,
  ];
  K.uf = [K.Da, K.Pb, K.Qb];
  K.wf = [K.Ga, K.Gc, K.Wb, K.Lc];
  var wd = function (a) {
    sa("GTM", a);
  };
  var xd = function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  };
  var yd = new xd(1936, !0),
    zd = new xd(1933);
  var Bd = function () {
    var a = Ad;
    if (a.te && a.hasOwnProperty("te")) return a.te;
    var b = new a();
    return (a.te = b);
  };
  var Ad = function () {
      var a = {};
      this.o = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.s = function () {
        a[zd.o] = !0;
      };
    },
    Id = function (a) {
      return Bd().o(a.o, a.defaultValue);
    };
  var Jd = [];
  function Kd() {
    var a = zb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Ld,
        update: Md,
        addListener: Nd,
        notifyListeners: Od,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }
  function Ld(a, b, c, d, e, f) {
    var h = Kd();
    h.active = !0;
    h.usedDefault = !0;
    if (void 0 != b) {
      var k = h.entries,
        l = k[a] || {},
        n = l.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = r;
        q &&
          m.setTimeout(function () {
            k[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Pd(a), Od(), sa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Md(a, b) {
    var c = Kd();
    c.active = !0;
    if (void 0 != b) {
      var d = Qd(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var h = Qd(a);
      f.quiet ? ((f.quiet = !1), Pd(a)) : h !== d && Pd(a);
    }
  }
  function Nd(a, b) {
    Jd.push({ he: a, bi: b });
  }
  function Pd(a) {
    for (var b = 0; b < Jd.length; ++b) {
      var c = Jd[b];
      xa(c.he) && -1 !== c.he.indexOf(a) && (c.jg = !0);
    }
  }
  function Od(a) {
    for (var b = 0; b < Jd.length; ++b) {
      var c = Jd[b];
      if (c.jg) {
        c.jg = !1;
        try {
          c.bi({ Qh: a });
        } catch (d) {}
      }
    }
  }
  var Qd = function (a) {
      var b = Kd().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Rd = function (a) {
      return (Kd().entries[a] || {}).initial;
    },
    Sd = function (a) {
      return !(Kd().entries[a] || {}).quiet;
    },
    Td = function () {
      return Id(zd) ? Kd().active : !1;
    },
    Ud = function () {
      return Kd().usedDefault;
    },
    Vd = function (a, b) {
      Kd().addListener(a, b);
    },
    Wd = function (a) {
      Kd().notifyListeners(a);
    },
    Xd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Sd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Vd(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Yd = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var k = d[h];
          !1 === Qd(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Vd(d, function (f) {
          var h = c();
          0 < h.length && ((f.he = h), a(f));
        });
    };
  function Zd(a) {
    for (var b = [], c = 0; c < $d.length; c++) {
      var d = a($d[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var $d = [K.D, K.H],
    ae = function (a) {
      var b = a[K.Pe];
      b && wd(40);
      var c = a[K.Qe];
      c && wd(41);
      for (
        var d = xa(b) ? b : [b], e = { Kb: 0 };
        e.Kb < d.length;
        e = { Kb: e.Kb }, ++e.Kb
      )
        Ja(
          a,
          (function (f) {
            return function (h, k) {
              if (h !== K.Pe && h !== K.Qe) {
                var l = d[f.Kb];
                Kd().set(h, k, l, "US", "", c);
              }
            };
          })(e)
        );
    },
    be = function (a, b) {
      Ja(a, function (c, d) {
        Kd().update(c, d);
      });
      Wd(b);
    },
    L = function (a) {
      var b = Qd(a);
      return void 0 != b ? b : !0;
    },
    ce = function () {
      return "G1" + Zd(Qd);
    },
    de = function (a, b) {
      Yd(a, b);
    },
    ee = function (a, b) {
      Xd(a, b);
    };
  var ge = function (a) {
      return fe ? A.querySelectorAll(a) : null;
    },
    he = function (a, b) {
      if (!fe) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!A.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    ie = !1;
  if (A.querySelectorAll)
    try {
      var je = A.querySelectorAll(":root");
      je && 1 == je.length && je[0] == A.documentElement && (ie = !0);
    } catch (a) {}
  var fe = ie;
  var ke,
    le = !1;
  var me = function (a) {
    if (A.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
      return !0;
    var c = m.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        h = e.filter;
      if (h) {
        var k = h.indexOf("opacity(");
        0 <= k &&
          ((h = h.substring(k + 8, h.indexOf(")", k))),
          "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = Math.min(h, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
  };
  var ve = /:[0-9]+$/,
    we = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    ze = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = xe(a.protocol) || xe(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(ve, "")
            .toLowerCase());
      return ye(a, b, c, d, e);
    },
    ye = function (a, b, c, d, e) {
      var f,
        h = xe(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ae(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(ve, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || sa("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= ya(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = we(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    xe = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ae = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Be = function (a) {
      var b = A.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || sa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(ve, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ce = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Be(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        k = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === k[0] && (k = k.substring(1));
      h = c(h);
      k = c(k);
      "" !== h && (h = "?" + h);
      "" !== k && (k = "#" + k);
      var l = "" + f + h + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var Le = {},
    Me = !0,
    Ne = !1;
  Le.Gg = "true";
  var Oe = function (a) {
    if ("false" === Le.Gg || !Me) return !1;
    if (Ne) return !0;
    var b,
      c = "AW-" + a;
    if (!le) {
      le = !0;
      ke = ke || {};
    }
    b = ke[c];
    return !!b && !!b.preAutoPii;
  };
  var Pe = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Qe = new RegExp(/@(gmail|googlemail)\./i),
    Re = new RegExp(/support|noreply/i),
    Se = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
    Te = ["BR"],
    Ue = {};
  function Ve(a) {
    var b;
    if (a === A.body) b = "body";
    else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var h = 0; h < f.childElementCount; h++)
                if (f.children[h] === a) {
                  e = h + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = Ve(a.parentElement) + ">:nth-child(" + e + ")";
        } else d = "";
        c = d;
      }
      b = c;
    }
    return b;
  }
  function We(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }
  function Xe(a) {
    if (0 == a.length) return null;
    var b;
    b = We(a, function (c) {
      return !Re.test(c.sa);
    });
    b = We(b, function (c) {
      return "INPUT" === c.element.tagName.toUpperCase();
    });
    b = We(b, function (c) {
      return !me(c.element);
    });
    return b[0];
  }
  var Ye = function (a) {
      a = a || { qe: !0, se: !0 };
      a.Xa = a.Xa || { email: !0, phone: !0, Mf: !0 };
      var b,
        c = a,
        d = !!c.qe + "." + !!c.se;
      c && c.dd && c.dd.length && (d += "." + c.dd.join("."));
      c && c.Xa && (d += "." + c.Xa.email + "." + c.Xa.phone + "." + c.Xa.Mf);
      b = d;
      var e = Ue[b];
      if (e && 200 > Ra() - e.timestamp) return e.result;
      var f;
      var h = [],
        k = A.body;
      if (k) {
        for (
          var l = k.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (!(0 <= Se.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= Te.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || h.push(p);
          }
        }
        f = { elements: h, status: 1e4 < l.length ? "2" : "1" };
      } else f = { elements: h, status: "4" };
      var u = f,
        t = u.status,
        v;
      if (a.Xa && a.Xa.email) {
        for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
          var z = w[x],
            B = z.textContent;
          z.value && (B = z.value);
          if (B) {
            var D = B.match(Pe);
            if (D) {
              var C = D[0],
                E;
              if (m.location) {
                var G = ye(m.location, "host", !0);
                E = 0 <= C.toLowerCase().indexOf(G);
              } else E = !1;
              E || y.push({ element: z, sa: C });
            }
          }
        }
        var P;
        var M = a && a.dd;
        if (M && 0 !== M.length) {
          for (var N = [], S = 0; S < y.length; S++) {
            for (var T = !0, I = 0; I < M.length; I++) {
              var Q = M[I];
              if (Q && he(y[S].element, Q)) {
                T = !1;
                break;
              }
            }
            T && N.push(y[S]);
          }
          P = N;
        } else P = y;
        v = Xe(P);
        10 < y.length && (t = "3");
      }
      var V = [];
      if (v) {
        var J = v.element,
          Y = { sa: v.sa, tagName: J.tagName, type: 1 };
        a.qe && (Y.querySelector = Ve(J));
        a.se && (Y.isVisible = !me(J));
        V.push(Y);
      }
      var ia = { elements: V, status: t };
      Ue[b] = { timestamp: Ra(), result: ia };
      return ia;
    },
    Ze = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.sa.length + ":" + Qe.test(a.sa)
      );
    };
  var $e = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    af = function (a) {
      return void 0 === a || null === a ? "" : g(a) ? Pa(String(a)) : "e0";
    },
    cf = function (a) {
      return a.replace(bf, "");
    },
    ef = function (a) {
      return df(a.replace(/\s/g, ""));
    },
    df = function (a) {
      return Pa(a.replace(ff, "").toLowerCase());
    },
    hf = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return gf.test(a) ? a : "e0";
    },
    kf = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (jf.test(c)) return c;
      }
      return "e0";
    },
    nf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && lf(d.name)
            ? mf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function () {
          c([], []);
        });
    },
    mf = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = of(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return m
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    of = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    ff = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    jf = /^\S+@\S+\.\S+$/,
    gf = /^\+\d{11,15}$/,
    bf = /[.~]/g,
    pf = {},
    qf =
      ((pf.email = "em"),
      (pf.phone_number = "pn"),
      (pf.first_name = "fn"),
      (pf.last_name = "ln"),
      (pf.street = "sa"),
      (pf.city = "ct"),
      (pf.region = "rg"),
      (pf.country = "co"),
      (pf.postal_code = "pc"),
      (pf.error_code = "ec"),
      pf),
    rf = function (a, b, c) {
      function d(t, v, w) {
        var y = t[v];
        xa(y) || (y = [y]);
        for (var x = 0; x < y.length; ++x) {
          var z = af(y[x]);
          "" !== z && h.push({ name: v, value: w(z), index: void 0 });
        }
      }
      function e(t, v, w, y) {
        var x = af(t[v]);
        "" !== x && h.push({ name: v, value: w(x), index: y });
      }
      function f(t) {
        return function (v) {
          wd(64);
          return t(v);
        };
      }
      var h = [],
        k = [];
      if ("https:" === m.location.protocol) {
        var l = function (t, v) {
          var w = t[v];
          xa(w) || (w = [w]);
          for (var y = 0; y < w.length; ++y) {
            var x = af(w[y]);
            if ("" !== x) return x;
          }
          return null;
        };
        d(a, "email", kf);
        var n = l(a, "email");
        if (n)
          for (var p = 0; p < b.length; p++)
            k.push(b[p].sa.toLowerCase() === n.toLowerCase());
        d(a, "phone_number", hf);
        d(a, "first_name", f(ef));
        d(a, "last_name", f(ef));
        var q = a.home_address || {};
        d(q, "street", f(df));
        d(q, "city", f(df));
        d(q, "postal_code", f(cf));
        d(q, "region", f(df));
        d(q, "country", f(cf));
        var r = a.address || {};
        xa(r) || (r = [r]);
        for (var u = 0; u < r.length; u++)
          e(r[u], "first_name", ef, u),
            e(r[u], "last_name", ef, u),
            e(r[u], "street", df, u),
            e(r[u], "city", df, u),
            e(r[u], "postal_code", cf, u),
            e(r[u], "region", df, u),
            e(r[u], "country", cf, u);
        nf(h, k, c);
      } else
        h.push({ name: "error_code", value: "e3", index: void 0 }), c(h, k);
    },
    sf = function (a, b) {
      rf(a, [], function (c, d) {
        for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
          var h = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = qf[h];
          n &&
            k &&
            (!lf(h) || $e(k)) &&
            (void 0 !== l && (n += l), e.push(n + "." + k));
        }
        b(encodeURIComponent(e.join("~")), d);
      });
    },
    tf = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            rf(a, b, function (d, e) {
              for (var f = ["tv.1"], h = 0; h < d.length; ++h) {
                var k = d[h].name,
                  l = d[h].value,
                  n = d[h].index,
                  p = qf[k];
                p &&
                  l &&
                  (!lf(k) || $e(l)) &&
                  (void 0 !== n && (p += n), f.push(p + "." + l));
              }
              c({ qc: encodeURIComponent(f.join("~")), cc: e });
            });
          });
        } catch (c) {}
    },
    lf = function (a) {
      return (
        -1 !==
        ["email", "phone_number", "first_name", "last_name", "street"].indexOf(
          a
        )
      );
    };
  var uf = {},
    vf = null,
    wf = Math.random();
  uf.M = "UA-126207330-4";
  uf.Wc = "7s0";
  uf.Vi = "";
  uf.Lg =
    "ChEI8IyZiAYQ1/Tb9rr+1cTvARInAOC7KmY9R6+sruNfHXb3cPkbhyxpGtPMyETrw+5+Vm6fmefuqndmGgJV5w\x3d\x3d";
  var xf = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    yf = { __paused: !0, __tg: !0 },
    zf;
  for (zf in xf) xf.hasOwnProperty(zf) && (yf[zf] = !0);
  var Af = "www.googletagmanager.com/gtm.js";
  Af = "www.googletagmanager.com/gtag/js";
  var Bf = Af,
    Cf = Na(""),
    Df = null,
    Ef = null,
    Ff = "https://www.googletagmanager.com/a?id=" + uf.M + "&cv=1",
    Gf = {},
    Hf = {},
    If = function () {
      var a = vf.sequence || 1;
      vf.sequence = a + 1;
      return a;
    };
  uf.Kg = "";
  var Jf = {},
    Kf = new Da(),
    Lf = {},
    Mf = {},
    Pf = {
      name: "dataLayer",
      set: function (a, b) {
        H(Xa(a, b), Lf);
        Nf();
      },
      get: function (a) {
        return Of(a, 2);
      },
      reset: function () {
        Kf = new Da();
        Lf = {};
        Nf();
      },
    },
    Of = function (a, b) {
      return 2 != b ? Kf.get(a) : Qf(a);
    },
    Qf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Lf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== ya(b, d)) return;
      }
      return d;
    },
    Rf = function (a, b) {
      Mf.hasOwnProperty(a) || (Kf.set(a, b), H(Xa(a, b), Lf), Nf());
    },
    Nf = function (a) {
      Ja(Mf, function (b, c) {
        Kf.set(b, c);
        H(Xa(b, void 0), Lf);
        H(Xa(b, c), Lf);
        a && delete Mf[b];
      });
    },
    Tf = function (a, b, c) {
      Jf[a] = Jf[a] || {};
      Jf[a][b] = Sf(b, c);
    },
    Sf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Qf(a) : Kf.get(a);
      "array" === Wb(d) || "object" === Wb(d) ? (c = H(d)) : (c = d);
      return c;
    },
    Uf = function (a, b) {
      if (Jf[a]) return Jf[a][b];
    },
    Vf = function (a, b) {
      Jf[a] && delete Jf[a][b];
    };
  var Wf = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var h = e.split(","), k = 0; k < h.length; k++) {
            var l = h[k].trim();
            if (l) {
              if (0 === l.indexOf("dataLayer.")) f = Of(l.substring(10));
              else {
                var n = l.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && fe) {
          var q = ge(e);
          q && 0 < q.length && (f = Lb(q[0]) || Pa(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    Xf = function (a) {
      if (a) {
        var b = {};
        Wf(b, "email", a.email);
        Wf(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          Wf(e, "first_name", c[d].first_name);
          Wf(e, "last_name", c[d].last_name);
          Wf(e, "street", c[d].street);
          Wf(e, "city", c[d].city);
          Wf(e, "region", c[d].region);
          Wf(e, "country", c[d].country);
          Wf(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    Yf = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return Xf(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Ye({
                  qe: !1,
                  se: !1,
                  dd: c.exclude_element_selectors,
                  Xa: { email: !!c.email, phone: !!c.phone, Mf: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var h = d[f];
                  if (1 === h.type) {
                    e.email = h.sa;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    Zf = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic":
          return Xf(a[K.ff]);
      }
    };
  var $f = {},
    ag = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === $f[a] && ($f[a] = Math.floor(Math.random() * b));
      return $f[a];
    };
  function bg(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        k = h[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }
  function cg(a) {
    return "null" !== a.origin;
  }
  var fg = function (a, b, c, d) {
      return dg(d) ? bg(a, String(b || eg()), c) : [];
    },
    ig = function (a, b, c, d, e) {
      if (dg(e)) {
        var f = gg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = hg(
            f,
            function (h) {
              return h.cd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = hg(
            f,
            function (h) {
              return h.sc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function jg(a, b, c, d) {
    var e = eg(),
      f = window;
    cg(f) && (f.document.cookie = a);
    var h = eg();
    return e != h || (void 0 != c && 0 <= fg(b, h, !1, d).indexOf(c));
  }
  var ng = function (a, b, c) {
      function d(u, t, v) {
        if (null == v) return delete h[t], u;
        h[t] = v;
        return u + "; " + t + "=" + v;
      }
      function e(u, t) {
        if (null == t) return delete h[t], u;
        h[t] = !0;
        return u + "; " + t;
      }
      if (!dg(c.Ra)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = kg(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.fj);
      f = d(f, "samesite", c.gj);
      c.ij && (f = e(f, "secure"));
      var l = c.domain;
      if ("auto" === l) {
        for (var n = lg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!mg(q, c.path) && jg(r, a, b, c.Ra)) return 0;
        }
        return 1;
      }
      l && "none" !== l && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return mg(l, c.path) ? 1 : jg(f, a, b, c.Ra) ? 0 : 1;
    },
    og = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return ng(a, b, c);
    };
  function hg(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function gg(a, b, c) {
    for (var d = [], e = fg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        k = h.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: h.join("."), cd: 1 * l[0] || 1, sc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var kg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    pg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    sg = /(^|\.)doubleclick\.net$/i,
    mg = function (a, b) {
      return (
        sg.test(window.document.location.hostname) || ("/" === b && pg.test(a))
      );
    },
    eg = function () {
      return cg(window) ? window.document.cookie : "";
    },
    lg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      sg.test(e) || pg.test(e) || a.push("none");
      return a;
    },
    dg = function (a) {
      if (!Id(zd) || !a || !Td()) return !0;
      if (!Sd(a)) return !1;
      var b = Qd(a);
      return null == b ? !0 : !!b;
    };
  var tg = function () {
      return [
        Math.round(2147483647 * Math.random()),
        Math.round(Ra() / 1e3),
      ].join(".");
    },
    wg = function (a, b, c, d, e) {
      var f = ug(b);
      return ig(a, f, vg(c), d, e);
    },
    xg = function (a, b, c, d) {
      var e = "" + ug(c),
        f = vg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    ug = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    vg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function yg(a, b, c) {
    var d,
      e = Number(null != a.mb ? a.mb : void 0);
    0 !== e && (d = new Date((b || Ra()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var zg = ["1"],
    Ag = {},
    Eg = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Bg(a.prefix);
      if (!Ag[c] && !Cg(c, a.path, a.domain) && b) {
        var d = Bg(a.prefix),
          e = tg();
        if (0 === Dg(d, e, a)) {
          var f = zb("google_tag_data", {});
          f._gcl_au ? sa("GTM", 57) : (f._gcl_au = e);
        }
        Cg(c, a.path, a.domain);
      }
    };
  function Dg(a, b, c) {
    var d = xg(b, "1", c.domain, c.path),
      e = yg(c);
    e.Ra = "ad_storage";
    return og(a, d, e);
  }
  function Cg(a, b, c) {
    var d = wg(a, b, c, zg, "ad_storage");
    d && (Ag[a] = d);
    return d;
  }
  function Bg(a) {
    return (a || "_gcl") + "_au";
  }
  var Fg = function (a) {
    for (
      var b = [],
        c = A.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ke: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, k) {
      return k.timestamp - h.timestamp;
    });
    return b;
  };
  function Gg(a, b) {
    var c = Fg(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ke] || (d[c[e].Ke] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), Aa: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].Ke].push(h);
      }
    }
    return d;
  }
  function Hg() {
    for (var a = Ig, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Jg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ig, Kg;
  function Lg(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Kg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    Ig = Ig || Jg();
    Kg = Kg || Hg();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var Mg;
  var Qg = function () {
      var a = Ng,
        b = Og,
        c = Pg(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Ib(A, "mousedown", d);
        Ib(A, "keyup", d);
        Ib(A, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Rg = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Pg().decorators.push(f);
    },
    Sg = function (a, b, c) {
      for (var d = Pg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k;
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              n = a,
              p = !!h.sameHost;
            if (l && (p || n !== A.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ua(e, h.callback());
        }
      }
      return e;
    },
    Pg = function () {
      var a = zb("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var Tg = /(.*?)\*(.*?)\*(.*)/,
    Ug = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Vg = /^(?:www\.|m\.|amp\.)+/,
    Wg = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Xg(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Zg = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (
            void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString()
          ) {
            b.push(c);
            var e = b,
              f = e.push,
              h,
              k = String(d);
            Ig = Ig || Jg();
            Kg = Kg || Hg();
            for (var l = [], n = 0; n < k.length; n += 3) {
              var p = n + 1 < k.length,
                q = n + 2 < k.length,
                r = k.charCodeAt(n),
                u = p ? k.charCodeAt(n + 1) : 0,
                t = q ? k.charCodeAt(n + 2) : 0,
                v = r >> 2,
                w = ((r & 3) << 4) | (u >> 4),
                y = ((u & 15) << 2) | (t >> 6),
                x = t & 63;
              q || ((x = 64), p || (y = 64));
              l.push(Ig[v], Ig[w], Ig[y], Ig[x]);
            }
            h = l.join("");
            f.call(e, h);
          }
        }
      var z = b.join("*");
      return ["1", Yg(z), z].join("*");
    },
    Yg = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Mg)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[f] = h;
        }
        d = e;
      }
      Mg = d;
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ Mg[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    ah = function () {
      return function (a) {
        var b = Be(m.location.href),
          c = b.search.replace("?", ""),
          d = we(c, "_gl", !0) || "";
        a.query = $g(d) || {};
        var e = ze(b, "fragment").match(Xg("_gl"));
        a.fragment = $g((e && e[3]) || "") || {};
      };
    },
    bh = function (a) {
      var b = ah(),
        c = Pg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    $g = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = Tg.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var n = h[2], p = 0; p < b; ++p)
                if (n === Yg(k, p)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var q = {}, r = k ? k.split("*") : [], u = 0;
                u < r.length;
                u += 2
              )
                q[r[u]] = Lg(r[u + 1]);
              return q;
            }
          }
        }
      } catch (t) {}
    };
  function ch(a, b, c, d) {
    function e(p) {
      var q = p,
        r = Xg(a).exec(q),
        u = q;
      if (r) {
        var t = r[2],
          v = r[4];
        u = r[1];
        v && (u = u + t + v);
      }
      p = u;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Wg.exec(c);
    if (!f) return "";
    var h = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + h + k + l;
  }
  function dh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Sg(b, 1, c),
      e = Sg(b, 2, c),
      f = Sg(b, 3, c);
    if (Va(d)) {
      var h = Zg(d);
      c ? eh("_gl", h, a) : fh("_gl", h, a, !1);
    }
    if (!c && Va(e)) {
      var k = Zg(e);
      fh("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              fh(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              eh(n, p, q);
              break a;
            }
          }
          "string" == typeof q && ch(n, p, q, void 0);
        }
  }
  function fh(a, b, c, d) {
    if (c.href) {
      var e = ch(a, b, c.href, void 0 === d ? !1 : d);
      fb.test(e) && (c.href = e);
    }
  }
  function eh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = A.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = ch(a, b, c.action);
        fb.test(n) && (c.action = n);
      }
    }
  }
  var Ng = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || dh(e, e.hostname);
        }
      } catch (h) {}
    },
    Og = function (a) {
      try {
        if (a.action) {
          var b = ze(Be(a.action), "host");
          dh(a, b);
        }
      } catch (c) {}
    },
    gh = function (a, b, c, d) {
      Qg();
      Rg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    hh = function (a, b) {
      Qg();
      Rg(a, [ye(m.location, "host", !0)], b, !0, !0);
    },
    ih = function () {
      var a = A.location.hostname,
        b = Ug.exec(A.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(Vg, ""),
        l = e.replace(Vg, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    jh = function (a, b) {
      return !1 === a ? !1 : a || b || ih();
    };
  var kh = {};
  var lh = /^\w+$/,
    mh = /^[\w-]+$/,
    nh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    oh = function () {
      if (!Id(zd) || !Td()) return !0;
      var a = Qd("ad_storage");
      return null == a ? !0 : !!a;
    },
    ph = function (a, b) {
      Sd("ad_storage")
        ? oh()
          ? a()
          : Yd(a, "ad_storage")
        : b
        ? sa("TAGGING", 3)
        : Xd(
            function () {
              ph(a, !0);
            },
            ["ad_storage"]
          );
    },
    rh = function (a) {
      return qh(a).map(function (b) {
        return b.Aa;
      });
    },
    qh = function (a) {
      var b = [];
      if (!cg(m) || !A.cookie) return b;
      var c = fg(a, A.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { zc: d.zc }, e++) {
        var f = sh(c[e]);
        if (null != f) {
          var h = f,
            k = h.version;
          d.zc = h.Aa;
          var l = h.timestamp,
            n = h.labels,
            p = za(
              b,
              (function (q) {
                return function (r) {
                  return r.Aa === q.zc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = th(p.labels, n || [])))
            : b.push({ version: k, Aa: d.zc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return uh(b);
    };
  function th(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function vh(a) {
    return a && "string" == typeof a && a.match(lh) ? a : "_gcl";
  }
  var xh = function () {
      var a = Be(m.location.href),
        b = ze(a, "query", !1, void 0, "gclid"),
        c = ze(a, "query", !1, void 0, "gclsrc"),
        d = ze(a, "query", !1, void 0, "wbraid"),
        e = ze(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || we(f, "gclid", void 0);
        c = c || we(f, "gclsrc", void 0);
        d = d || we(f, "wbraid", void 0);
      }
      return wh(b, c, e, d);
    },
    wh = function (a, b, c, d) {
      var e = {},
        f = function (h, k) {
          e[k] || (e[k] = []);
          e[k].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && mh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(mh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    zh = function (a) {
      var b = xh();
      ph(function () {
        yh(b, a);
      });
    };
  function yh(a, b, c, d) {
    function e(p, q) {
      var r = Ah(p, f);
      r && (og(r, q, h), (k = !0));
    }
    b = b || {};
    d = d || [];
    var f = vh(b.prefix);
    c = c || Ra();
    var h = yg(b, c, !0);
    h.Ra = "ad_storage";
    var k = !1,
      l = Math.round(c / 1e3),
      n = function (p) {
        var q = ["GCL", l, p];
        0 < d.length && q.push(d.join("."));
        return q.join(".");
      };
    a.aw && e("aw", n(a.aw[0]));
    a.dc && e("dc", n(a.dc[0]));
    a.gf && e("gf", n(a.gf[0]));
    a.ha && e("ha", n(a.ha[0]));
    a.gp && e("gp", n(a.gp[0]));
    (void 0 == kh.enable_gbraid_cookie_write
      ? 0
      : kh.enable_gbraid_cookie_write) &&
      !k &&
      a.gb &&
      e("gb", n(a.gb[0]));
  }
  var Ch = function (a, b) {
      var c = bh(!0);
      ph(function () {
        for (var d = vh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== nh[f]) {
            var h = Ah(f, d),
              k = c[h];
            if (k) {
              var l = Math.min(Bh(k), Ra()),
                n;
              b: {
                var p = l;
                if (cg(m))
                  for (
                    var q = fg(h, A.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Bh(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = yg(b, l, !0);
                u.Ra = "ad_storage";
                og(h, k, u);
              }
            }
          }
        }
        yh(wh(c.gclid, c.gclsrc), b);
      });
    },
    Ah = function (a, b) {
      var c = nh[a];
      if (void 0 !== c) return b + c;
    },
    Bh = function (a) {
      return 0 !== Dh(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function sh(a) {
    var b = Dh(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Dh(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !mh.test(a[2])
      ? []
      : a;
  }
  var Eh = function (a, b, c, d, e) {
      if (xa(b) && cg(m)) {
        var f = vh(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Ah(a[l], f);
              if (n) {
                var p = fg(n, A.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        ph(function () {
          gh(h, b, c, d);
        });
      }
    },
    uh = function (a) {
      return a.filter(function (b) {
        return mh.test(b.Aa);
      });
    },
    Fh = function (a, b) {
      if (cg(m)) {
        for (var c = vh(b.prefix), d = {}, e = 0; e < a.length; e++)
          nh[a[e]] && (d[a[e]] = nh[a[e]]);
        ph(function () {
          Ja(d, function (f, h) {
            var k = fg(c + h, A.cookie, void 0, "ad_storage");
            k.sort(function (u, t) {
              return Bh(t) - Bh(u);
            });
            if (k.length) {
              var l = k[0],
                n = Bh(l),
                p = 0 !== Dh(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Dh(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              yh(q, b, n, p);
            }
          });
        });
      }
    };
  function Gh(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Hh = function (a) {
    function b(e, f, h) {
      h && (e[f] = h);
    }
    if (Td()) {
      var c = xh();
      if (Gh(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        hh(function () {
          return d;
        }, 3);
        hh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Ih(a, b) {
    var c = vh(b),
      d = Ah(a, c);
    if (!d) return 0;
    for (var e = qh(d), f = 0, h = 0; h < e.length; h++)
      f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Jh(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Kh = /^\d+\.fls\.doubleclick\.net$/;
  function Lh(a, b) {
    Sd(K.D)
      ? L(K.D)
        ? a()
        : Yd(a, K.D)
      : b
      ? wd(42)
      : ee(
          function () {
            Lh(a, !0);
          },
          [K.D]
        );
  }
  function Mh(a) {
    var b = Be(m.location.href),
      c = ze(b, "host", !1);
    if (c && c.match(Kh)) {
      var d = ze(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function Nh(a, b, c) {
    if ("aw" === a || "dc" === a || "gb" === a) {
      var d = Mh("gcl" + a);
      if (d) return d.split(".");
    }
    var e = vh(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !L(K.D) && c,
        h;
      h = xh()[a] || [];
      if (0 < h.length) return f ? ["0"] : h;
    }
    var k = Ah(a, e);
    return k ? rh(k) : [];
  }
  var Oh = function (a, b) {
      return Nh("aw", a, b);
    },
    Ph = function (a, b) {
      return Nh("dc", a, b);
    };
  function Qh(a) {
    var b = [];
    Ja(a, function (c, d) {
      d = uh(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Aa);
      e.length && b.push(c + ":" + e.join(","));
    });
    return b.join(";");
  }
  var Rh = function (a) {
      var b = Mh("gac");
      return b
        ? !L(K.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Qh(oh() ? Gg() : {});
    },
    Sh = function (a) {
      var b = Mh("gacgb");
      return b
        ? !L(K.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Qh(oh() ? Gg("_gac_gb", !0) : {});
    },
    Th = function (a, b) {
      var c = xh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        h = c.gclsrc || "aw";
      !e ||
        ("aw.ds" !== h && "aw" !== h && "ds" !== h) ||
        d.push({ Aa: e, ke: h });
      f && d.push({ Aa: f, ke: "ds" });
      Lh(function () {
        Eg(b);
        var k = Ag[Bg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (
            var n = (vf.joined_auid = vf.joined_auid || {}), p = 0;
            p < d.length;
            p++
          ) {
            var q = d[p],
              r = q.Aa,
              u = q.ke,
              t = (b.prefix || "_gcl") + "." + u + "." + r;
            if (!n[t]) {
              var v = "https://adservice.google.com/pagead/regclk";
              v =
                "gb" === u
                  ? v + "?gbraid=" + r + "&auid=" + k
                  : v + "?gclid=" + r + "&auid=" + k + "&gclsrc=" + u;
              Ob(v);
              l = n[t] = !0;
            }
          }
        null == a && (a = l);
        var w = !0;
        w = !1;
        if (w && a && k) {
          var y = Bg(b.prefix),
            x = Ag[y];
          x && Dg(y, x, b);
        }
      });
    },
    Uh = function (a) {
      var b;
      if (Mh("gclaw") || Mh("gac") || 0 < (xh().aw || []).length) b = !1;
      else {
        var c;
        if (0 < (xh().gb || []).length) c = !0;
        else {
          var d = Math.max(Ih("aw", a), Jh(oh() ? Gg() : {}));
          c = Math.max(Ih("gb", a), Jh(oh() ? Gg("_gac_gb", !0) : {})) > d;
        }
        b = c;
      }
      return b;
    };
  var Vh = /[A-Z]+/,
    Wh = /\s/,
    Xh = function (a) {
      if (g(a) && ((a = Pa(a)), !Wh.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Vh.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], N: d };
          }
        }
      }
    },
    Zh = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Xh(a[c]);
        d && (b[d.id] = d);
      }
      Yh(b);
      var e = [];
      Ja(b, function (f, h) {
        e.push(h);
      });
      return e;
    };
  function Yh(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var $h = function () {
    var a = !1;
    return a;
  };
  var bi = function (a, b, c, d) {
      return (2 === ai() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    ai = function () {
      var a = Cb(),
        b;
      if (1 === a)
        a: {
          var c = Bf;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              h = A.getElementsByTagName("script"),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var di = function (a, b, c) {
      if (m[a.functionName]) return b.ze && F(b.ze), m[a.functionName];
      var d = ci();
      m[a.functionName] = d;
      if (a.Zc)
        for (var e = 0; e < a.Zc.length; e++) m[a.Zc[e]] = m[a.Zc[e]] || ci();
      a.gd && void 0 === m[a.gd] && (m[a.gd] = c);
      Bb(bi("https://", "http://", a.He), b.ze, b.zi);
      return d;
    },
    ci = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    ei = {
      functionName: "_googWcmImpl",
      gd: "_googWcmAk",
      He: "www.gstatic.com/wcm/loader.js",
    },
    fi = {
      functionName: "_gaPhoneImpl",
      gd: "ga_wpid",
      He: "www.gstatic.com/gaphone/loader.js",
    },
    gi = { Hg: "", Dh: "5" },
    hi = {
      functionName: "_googCallTrackingImpl",
      Zc: [fi.functionName, ei.functionName],
      He:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (gi.Hg || gi.Dh) +
        ".js",
    },
    ii = {},
    ji = function (a, b, c, d) {
      wd(22);
      if (c) {
        d = d || {};
        var e = di(ei, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Pa && (f.autoreplace = c);
        e(2, d.Pa, f, c, 0, Qa(), d.options);
      }
    },
    ki = function (a, b, c, d) {
      wd(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Qa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f];
          ii[h.id] ||
            (h && "AW" === h.prefix && !e.adData && 2 <= h.N.length
              ? ((e.adData = { ak: h.N[0], cl: h.N[1] }), (ii[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.containerId }), (ii[h.id] = !0)));
        }
        (e.gaData || e.adData) && di(hi, d)(d.Pa, e, d.options);
      }
    },
    li = function () {
      var a = !1;
      return a;
    },
    mi = function (a, b) {
      if (a)
        if ($h()) {
        } else {
          if (g(a)) {
            var c = Xh(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(K.oh);
          if (f && xa(f)) {
            d = [];
            for (var h = 0; h < f.length; h++) {
              var k = Xh(f[h]);
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(K.nf),
              n;
            if (l) {
              xa(l) ? (n = l) : (n = [l]);
              var p = b.getWithConfig(K.kf),
                q = b.getWithConfig(K.lf),
                r = b.getWithConfig(K.pf),
                u = b.getWithConfig(K.nh),
                t = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) ki(d, n[w], u, { Pa: t, options: r });
                  else if ("AW" === a.prefix && a.N[1])
                    li()
                      ? ki([a], n[w], u || "US", { Pa: t, options: r })
                      : ji(a.N[0], a.N[1], n[w], { Pa: t, options: r });
                  else if ("UA" === a.prefix)
                    if (li()) ki([a], n[w], u || "US", { Pa: t });
                    else {
                      var y = a.containerId,
                        x = n[w],
                        z = { Pa: t };
                      wd(23);
                      if (x) {
                        z = z || {};
                        var B = di(fi, z, y),
                          D = {};
                        void 0 !== z.Pa ? (D.receiver = z.Pa) : (D.replace = x);
                        D.ga_wpid = y;
                        D.destination = x;
                        B(2, Qa(), D);
                      }
                    }
            }
          }
        }
    };
  var ni = function (a, b) {
    var c = a ? Zf(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? tf(c, b).then(function (e) {
              e.ee = d;
              return e;
            })
          : Promise.resolve({ qc: "", cc: [], ee: d });
      } catch (e) {}
  };
  var oi = function (a) {
      if (L(K.D)) return a;
      a = a.replace(/&url=([^&#]+)/, function (b, c) {
        var d = Ce(decodeURIComponent(c));
        return "&url=" + encodeURIComponent(d);
      });
      a = a.replace(/&ref=([^&#]+)/, function (b, c) {
        var d = Ce(decodeURIComponent(c));
        return "&ref=" + encodeURIComponent(d);
      });
      return a;
    },
    pi = function () {
      var a;
      if (!(a = Cf)) {
        var b;
        if (!0 === m._gtmdgs) b = !0;
        else {
          var c = (xb && xb.userAgent) || "";
          b =
            0 > c.indexOf("Safari") ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
            11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "")
              ? !1
              : !0;
        }
        a = !b;
      }
      if (a) return -1;
      var d = Ma("1");
      return ag(1, 100) < d ? ag(2, 2) : -1;
    },
    qi = function (a) {
      var b;
      if (!a || !a.length) return;
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d];
        e && e.estimated_delivery_date
          ? c.push("" + e.estimated_delivery_date)
          : c.push("");
      }
      b = c.join(",");
      return b;
    };
  var ri = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    si = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    ti = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ui =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var vi = function () {
      var a = !1;
      a = !0;
      return a;
    },
    xi = function (a) {
      var b = Of("gtm.allowlist") || Of("gtm.whitelist");
      b && wd(9);
      vi() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Wa(Oa(b), si),
        d = Of("gtm.blocklist") || Of("gtm.blacklist");
      d || ((d = Of("tagTypeBlacklist")) && wd(3));
      d ? wd(8) : (d = []);
      wi() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= ya(Oa(d), "google") && wd(2);
      var e = d && Wa(Oa(d), ti),
        f = {};
      return function (h) {
        var k = h && h[$b.jb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Hf[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > ya(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > ya(c, l[q])) {
                      wd(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= ya(e, k);
          if (u) r = u;
          else {
            var t = Ga(e, l || []);
            t && wd(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= ya(l, "sandboxedScripts")) ||
          (c && -1 !== ya(c, "sandboxedScripts")) ||
          (v = Ga(e, ui));
        return (f[k] = v);
      };
    },
    wi = function () {
      return ri.test(m.location && m.location.hostname);
    };
  var yi = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    zi = function (a) {
      var b = vf.zones;
      return b ? b.checkState(uf.M, a) : yi;
    },
    Ai = function (a) {
      var b = vf.zones;
      !b && a && (b = vf.zones = a());
      return b;
    };
  var Bi = function () {},
    Ci = function () {};
  var Di = !1,
    Ei = 0,
    Fi = [];
  function Gi(a) {
    if (!Di) {
      var b = A.createEventObject,
        c = "complete" == A.readyState,
        d = "interactive" == A.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Di = !0;
        for (var e = 0; e < Fi.length; e++) F(Fi[e]);
      }
      Fi.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function Hi() {
    if (!Di && 140 > Ei) {
      Ei++;
      try {
        A.documentElement.doScroll("left"), Gi();
      } catch (a) {
        m.setTimeout(Hi, 50);
      }
    }
  }
  var Ii = function (a) {
    Di ? a() : Fi.push(a);
  };
  var Ki = function (a, b) {
      this.o = !1;
      this.F = [];
      this.O = { tags: [] };
      this.aa = !1;
      this.s = this.C = 0;
      Ji(this, a, b);
    },
    Li = function (a, b, c, d) {
      if (yf.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Yb(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.O.tags.push(e) - 1;
    },
    Mi = function (a, b, c, d) {
      var e = a.O.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ni = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Ji = function (a, b, c) {
      va(b) && Oi(a, b);
      c &&
        m.setTimeout(function () {
          return Ni(a);
        }, Number(c));
    },
    Oi = function (a, b) {
      var c = Ta(function () {
        return F(function () {
          b(uf.M, a.O);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Pi = function (a) {
      a.C++;
      return Ta(function () {
        a.s++;
        a.aa && a.s >= a.C && Ni(a);
      });
    };
  var Qi = function () {
      function a(d) {
        return !wa(d) || 0 > d ? 0 : d;
      }
      if (!vf._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = wa(Pf.get("gtm.start")) ? Pf.get("gtm.start") : 0;
        vf._li = { cst: a(c - b), cbt: a(Ef - b) };
      }
    },
    Ri = function (a) {
      m.performance && m.performance.mark(uf.M + "_" + a + "_start");
    },
    Si = function (a) {
      if (m.performance) {
        var b = uf.M + "_" + a + "_start",
          c = uf.M + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = vf._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (vf._p = e));
        return d.duration;
      }
    },
    Ti = function () {
      if (m.performance && m.performance.now) {
        var a = vf._p || {};
        a.PAGEVIEW = m.performance.now();
        vf._p = a;
      }
    };
  var Ui = {},
    Vi = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    Wi = !1;
  var Xi = function (a) {
      m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
      var b = m.GoogleAnalyticsObject;
      if (m[b]) m.hasOwnProperty(b) || wd(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Qa());
        m[b] = c;
      }
      Qi();
      return m[b];
    },
    $i = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = Vi();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    },
    aj = function (a) {
      if (!Td()) return;
      var b = Vi();
      b(a + "require", "linker");
      b(a + "linker:passthrough", !0);
    };
  var cj = function (a) {},
    bj = function () {
      return m.GoogleAnalyticsObject || "ga";
    },
    dj = function (a, b) {
      return function () {
        var c = Vi(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > h.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var kj = function (a) {},
    oj = function (a) {},
    pj = function () {
      return (
        "&tc=" +
        Gc.filter(function (a) {
          return a;
        }).length
      );
    },
    sj = function () {
      2022 <= qj().length && rj();
    },
    tj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    vj = function () {
      uj || (uj = m.setTimeout(rj, 500));
    },
    rj = function () {
      uj && (m.clearTimeout(uj), (uj = void 0));
      void 0 === wj ||
        (xj[wj] && !yj && !zj) ||
        (Aj[wj] || Bj.mi() || 0 >= Cj--
          ? (wd(1), (Aj[wj] = !0))
          : (Bj.Hi(),
            Hb(qj(!0)),
            (xj[wj] = !0),
            (Dj = Ej = Fj = zj = yj = "")));
    },
    qj = function (a) {
      var b = wj;
      if (void 0 === b) return "";
      var c = ta("GTM"),
        d = ta("TAGGING");
      return [
        Gj,
        xj[b] ? "" : "&es=1",
        Hj[b],
        kj(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        pj(),
        yj,
        zj,
        Fj,
        Ej,
        oj(a),
        Dj,
        "&z=0",
      ].join("");
    },
    Jj = function () {
      Gj = Ij();
    },
    Ij = function () {
      return [Ff, "&v=3&t=t", "&pid=" + Ba(), "&rv=" + uf.Wc].join("");
    },
    nj = ["L", "S", "Y"],
    jj = ["S", "E"],
    Kj = { sampleRate: "0.005000", Dg: "", Cg: Number("5") },
    Lj =
      0 <= A.location.search.indexOf("?gtm_latency=") ||
      0 <= A.location.search.indexOf("&gtm_latency="),
    Mj;
  if (!(Mj = Lj)) {
    var Nj = Math.random(),
      Oj = Kj.sampleRate;
    Mj = Nj < Oj;
  }
  var Pj = Mj,
    Qj = {
      label: uf.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Gj = Ij(),
    xj = {},
    yj = "",
    zj = "",
    Dj = "",
    Ej = "",
    mj = {},
    lj = !1,
    ij = {},
    Rj = {},
    Fj = "",
    wj = void 0,
    Hj = {},
    Aj = {},
    uj = void 0,
    Sj = 5;
  0 < Kj.Cg && (Sj = Kj.Cg);
  var Bj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        mi: function () {
          return c < a ? !1 : Ra() - d[c % a] < b;
        },
        Hi: function () {
          var f = c++ % a;
          d[f] = Ra();
        },
      };
    })(Sj, 1e3),
    Cj = 1e3,
    Uj = function (a, b) {
      if (Pj && !Aj[a] && wj !== a) {
        rj();
        wj = a;
        Dj = yj = "";
        Hj[a] = "&e=" + tj(b) + "&eid=" + a;
        vj();
      }
    },
    Vj = function (a, b, c, d) {
      if (Pj && b) {
        var e,
          f = String(b[$b.jb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var h = c + e;
        if (!Aj[a]) {
          a !== wj && (rj(), (wj = a));
          yj = yj ? yj + "." + h : "&tr=" + h;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (Ic[k] ? "1" : "2") + e;
          Dj = Dj ? Dj + "." + l : "&ti=" + l;
          vj();
          sj();
        }
      }
    };
  var ck = function (a, b, c) {
      if (Pj && !Aj[a]) {
        a !== wj && (rj(), (wj = a));
        var d = c + b;
        zj = zj ? zj + "." + d : "&epr=" + d;
        vj();
        sj();
      }
    },
    dk = function (a, b, c) {};
  function ek(a, b, c, d) {
    var e = Gc[a],
      f = fk(a, b, c, d);
    if (!f) return null;
    var h = Nc(e[$b.Cf], c, []);
    if (h && h.length) {
      var k = h[0];
      f = ek(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.Yf ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function fk(a, b, c, d) {
    function e() {
      if (f[$b.zh]) k();
      else {
        var w = Oc(f, c, []);
        var y = w[$b.Ig];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!L(y[x])) {
              k();
              return;
            }
        var z = Li(c.kb, String(f[$b.jb]), Number(f[$b.Df]), w[$b.Ah]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Ra() - C;
            Vj(c.id, Gc[a], "5", E);
            Mi(c.kb, z, "success", E);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Ra() - C;
            Vj(c.id, Gc[a], "6", E);
            Mi(c.kb, z, "failure", E);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        Vj(c.id, f, "1");
        var D = function () {
          var E = Ra() - C;
          Vj(c.id, f, "7", E);
          Mi(c.kb, z, "exception", E);
          B || ((B = !0), k());
        };
        var C = Ra();
        try {
          Mc(w, c);
        } catch (E) {
          D(E);
        }
      }
    }
    var f = Gc[a],
      h = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.ve(f)) return null;
    var n = Nc(f[$b.Ef], c, []);
    if (n && n.length) {
      var p = n[0],
        q = ek(p.index, { onSuccess: h, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      h = q;
      k = 2 === p.Yf ? l : q;
    }
    if (f[$b.yf] || f[$b.Ch]) {
      var r = f[$b.yf] ? Hc : c.Oi,
        u = h,
        t = k;
      if (!r[a]) {
        e = Ta(e);
        var v = gk(a, r, e);
        h = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function gk(a, b, c) {
    var d = [],
      e = [];
    b[a] = hk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ik;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = jk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function hk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ik(a) {
    a();
  }
  function jk(a, b) {
    b();
  }
  var mk = function (a, b) {
    for (var c = [], d = 0; d < Gc.length; d++)
      if (a[d]) {
        var e = Gc[d];
        var f = Pi(b.kb);
        try {
          var h = ek(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = Ic[p];
            l.call(k, { wg: n, kg: q ? q.priorityOverride || 0 : 0, ai: h });
          } else kk(d, b), f();
        } catch (t) {
          f();
        }
      }
    var r = b.kb;
    r.aa = !0;
    r.s >= r.C && Ni(r);
    c.sort(lk);
    for (var u = 0; u < c.length; u++) c[u].ai();
    return 0 < c.length;
  };
  function lk(a, b) {
    var c,
      d = b.kg,
      e = a.kg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.wg,
        k = b.wg;
      f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
  }
  function kk(a, b) {
    if (!Pj) return;
    var c = function (d) {
      var e = b.ve(Gc[d]) ? "3" : "4",
        f = Nc(Gc[d][$b.Cf], b, []);
      f && f.length && c(f[0].index);
      Vj(b.id, Gc[d], e);
      var h = Nc(Gc[d][$b.Ef], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var nk = !1,
    tk = function (a) {
      var b = Ra(),
        c = a["gtm.uniqueEventId"],
        d = a.event;
      if ("gtm.js" === d) {
        if (nk) return !1;
        nk = !0;
      }
      var h = zi(c),
        k = !1;
      if (!h.active) {
        if ("gtm.js" !== d) return !1;
        k = !0;
        h = zi(Number.MAX_SAFE_INTEGER);
      }
      Uj(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
        id: c,
        name: d,
        ve: xi(h.isAllowed),
        Oi: [],
        fg: function () {
          wd(6);
        },
        Pf: ok(c),
        kb: new Ki(p, n),
      };
      q.Of = pk();
      qk(c, q.kb);
      var r = Sc(q);
      k && (r = rk(r));
      var u = mk(r, q);
      ("gtm.js" !== d && "gtm.sync" !== d) || cj(uf.M);
      switch (d) {
        case "gtm.init":
          u && wd(20);
      }
      return sk(r, u);
    };
  function ok(a) {
    return function (b) {
      Pj && (Zb(b) || dk(a, "input", b));
    };
  }
  function qk(a, b) {
    Tf(a, "event", 1);
    Tf(a, "ecommerce", 1);
    Tf(a, "gtm");
    Tf(a, "eventModel");
  }
  function pk() {
    var a = {};
    a.event = Sf("event", 1);
    a.ecommerce = Sf("ecommerce", 1);
    a.gtm = Sf("gtm");
    a.eventModel = Sf("eventModel");
    return a;
  }
  function rk(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && xf[String(Gc[c][$b.jb])] && (b[c] = !0);
    return b;
  }
  function sk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Gc[c] && !yf[String(Gc[c][$b.jb])]) return !0;
    return !1;
  }
  function uk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Be("" + c + b).href;
    }
  }
  function vk(a, b) {
    return wk() ? uk(a, b) : void 0;
  }
  function wk() {
    var a = !1;
    return a;
  }
  var xk = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    yk = function (a) {
      var b = new xk();
      b.eventModel = a;
      return b;
    },
    zk = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Ak = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    Bk = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Ck = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Dk = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Ek = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    Fk = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Gk = function (a, b) {
      a.onFailure = b;
      return a;
    };
  xk.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Hk = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Ik = function (a, b) {
      function c(f) {
        Yb(f) &&
          Ja(f, function (h, k) {
            e = !0;
            d[h] = k;
          });
      }
      var d = {},
        e = !1;
      c(a.globalConfig[b]);
      c(a.remoteConfig[b]);
      c(a.containerConfig[b]);
      c(a.targetConfig[b]);
      c(a.eventModel[b]);
      return e ? d : void 0;
    };
  var Jk;
  if (3 === uf.Wc.length) Jk = "g";
  else {
    var Kk = "G";
    Kk = "g";
    Jk = Kk;
  }
  var Lk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Jk,
      OPT: "o",
    },
    Mk = function (a) {
      var b = uf.M.split("-"),
        c = b[0].toUpperCase(),
        d = Lk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === uf.Wc.length) {
        var h = "w";
        h = $h() ? "s" : "o";
        f = "2" + h;
      } else f = "";
      return f + d + uf.Wc + e;
    };
  function Nk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Ok = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  var Pk = function () {
    return nb("iPhone") && !nb("iPod") && !nb("iPad");
  };
  nb("Opera");
  nb("Trident") || nb("MSIE");
  nb("Edge");
  !nb("Gecko") ||
    (-1 != gb.toLowerCase().indexOf("webkit") && !nb("Edge")) ||
    nb("Trident") ||
    nb("MSIE") ||
    nb("Edge");
  -1 != gb.toLowerCase().indexOf("webkit") && !nb("Edge") && nb("Mobile");
  nb("Macintosh");
  nb("Windows");
  nb("Linux") || nb("CrOS");
  var Qk = pa.navigator || null;
  Qk && (Qk.appVersion || "").indexOf("X11");
  nb("Android");
  Pk();
  nb("iPad");
  nb("iPod");
  Pk() || nb("iPad") || nb("iPod");
  gb.toLowerCase().indexOf("kaios");
  var Rk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
          e = !1;
        }
        if (e) return c;
        var f;
        a: {
          try {
            var h = c.parent;
            if (h && h != c) {
              f = h;
              break a;
            }
          } catch (k) {}
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Sk = function (a) {
      var b = A;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement("meta");
      b.head.appendChild(c);
      c.httpEquiv = "origin-trial";
      c.content = a;
      return c;
    };
  var Tk = function () {};
  var Uk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Vk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.aa = 0;
      this.O = void 0 === b ? 500 : b;
      this.C = null;
    };
  ma(Vk, Tk);
  var Xk = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Wk(a);
  };
  Vk.prototype.addEventListener = function (a) {
    var b = {},
      c = ub(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.O &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.O));
    var e = function (f, h) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Uk(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), h || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Yk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Vk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Yk(this, "removeEventListener", null, a.listenerId);
  };
  var $k = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === h && (k = 1))
        : 3 === c && ((k = 1), 1 === h && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Zk(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n &&
            "1" === b &&
            a.purposeOneTreatment &&
            ("DE" === a.publisherCC || (Id(yd) && "CH" === a.publisherCC))
              ? !0
              : n && Zk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Zk(a.purpose.legitimateInterests, b) &&
                Zk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Zk = function (a, b) {
      return !(!a || !a[b]);
    },
    Yk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Wk(a)) {
        al(a);
        var f = ++a.aa;
        a.F[f] = c;
        if (a.o) {
          var h = {};
          a.o.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Wk = function (a) {
      if (a.o) return a.o;
      a.o = Rk(a.s, "__tcfapiLocator");
      return a.o;
    },
    al = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Ok(a.s, a.C));
    };
  var bl = !0;
  bl = !1;
  var cl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    dl = Nk("", 550),
    el = Nk("", 500);
  function fl() {
    var a = vf.tcf || {};
    return (vf.tcf = a);
  }
  var gl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Ra();
    },
    hl = function (a) {},
    il = function (a) {},
    ol = function () {
      var a = fl(),
        b = new Vk(m, bl ? 3e3 : -1),
        c = new gl(b, a);
      if (
        (jl()
          ? !0 === m.gtag_enable_tcf_support
          : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ("function" === typeof m.__tcfapi || Xk(b))
      ) {
        a.active = !0;
        a.uc = {};
        kl();
        var d = null;
        bl
          ? (d = m.setTimeout(function () {
              ll(a);
              ml(a);
              d = null;
            }, el))
          : (a.tcString = "tcunavailable");
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) ll(a), ml(a), hl(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = nl()), b.removeEventListener(e);
              else if (
                "tcloaded" === e.eventStatus ||
                "useractioncomplete" === e.eventStatus ||
                "cmpuishown" === e.eventStatus
              ) {
                var h = {},
                  k;
                for (k in cl)
                  if (cl.hasOwnProperty(k))
                    if ("1" === k) {
                      var l,
                        n = e,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      var q;
                      var r = n;
                      !1 === r.gdprApplies
                        ? (q = !0)
                        : (void 0 === r.internalErrorState &&
                            (r.internalErrorState = Uk(r)),
                          (q =
                            "error" === r.cmpStatus ||
                            0 !== r.internalErrorState ||
                            ("loaded" === r.cmpStatus &&
                              ("tcloaded" === r.eventStatus ||
                                "useractioncomplete" === r.eventStatus))
                              ? !0
                              : !1));
                      l = q
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : $k(n, "1", 0)
                        : !1;
                      h["1"] = l;
                    } else h[k] = $k(e, k, cl[k]);
                f = h;
              }
              f &&
                ((a.tcString = e.tcString || "tcempty"),
                (a.uc = f),
                ml(a),
                hl(c));
            }
          }),
            il(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), ll(a), ml(a);
        }
      }
    };
  function ll(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    bl && (a.uc = nl());
  }
  function kl() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = dl), a);
    ae(b);
  }
  var jl = function () {
    var a = !1;
    a = !0;
    return a;
  };
  function nl() {
    var a = {},
      b;
    for (b in cl) cl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function ml(a) {
    var b = {},
      c = ((b.ad_storage = a.uc["1"] ? "granted" : "denied"), b);
    pl();
    be(c, 0);
  }
  var ql = function () {
      var a = fl();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    pl = function () {
      var a = fl();
      return a.active ? a.tcString || "" : "";
    },
    rl = function () {
      var a = fl();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    sl = function (a) {
      if (!cl.hasOwnProperty(String(a))) return !0;
      var b = fl();
      return b.active && b.uc ? !!b.uc[String(a)] : !0;
    };
  function tl(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = uf.Lg || m._CONSENT_MODE_SALT,
      d;
    if (a) {
      var e;
      if (c) {
        var f = b + a + c,
          h = 1,
          k,
          l,
          n;
        if (f)
          for (h = 0, l = f.length - 1; 0 <= l; l--)
            (n = f.charCodeAt(l)),
              (h = ((h << 6) & 268435455) + n + (n << 14)),
              (k = h & 266338304),
              (h = 0 != k ? h ^ (k >> 21) : h);
        e = String(h);
      } else e = "0";
      d = e;
    } else d = "";
    return d;
  }
  function ul(a) {
    function b(t) {
      var v;
      vf.reported_gclid || (vf.reported_gclid = {});
      v = vf.reported_gclid;
      var w;
      w =
        !h || (Td() && !L(K.D))
          ? l + (t ? "gcu" : "gcs")
          : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
      if (!v[w]) {
        v[w] = !0;
        var y = [],
          x = {},
          z = function (M, N) {
            N && (y.push(M + "=" + encodeURIComponent(N)), (x[M] = !0));
          },
          B = "https://www.google.com";
        if (Td()) {
          var D = L(K.D);
          z("gcs", ce());
          t && z("gcu", "1");
          Ud() && z("gcd", "G1" + Zd(Rd));
          vf.dedupe_gclid || (vf.dedupe_gclid = "" + tg());
          z("rnd", vf.dedupe_gclid);
          if ((!l || (n && "aw.ds" !== n)) && L(K.D)) {
            var C = rh("_gcl_aw");
            z("gclaw", C.join("."));
          }
          z("url", String(m.location).split(/[?#]/)[0]);
          z("dclid", vl(d, p));
          var E = !1;
          E = !0;
          D || (!d && !E) || (B = "https://pagead2.googlesyndication.com");
        }
        z("gdpr_consent", pl()), z("gdpr", rl());
        "1" === bh(!1)._up && z("gtm_up", "1");
        z("gclid", vl(d, l));
        z("gclsrc", n);
        if (
          !(x.gclid || x.dclid || x.gclaw) &&
          (z("gbraid", vl(d, q)), !x.gbraid && Td() && L(K.D))
        ) {
          var G = rh("_gcl_gb");
          z("gclgb", G.join("."));
        }
        z("gtm", Mk(!e));
        h && L(K.D) && (Eg(f || {}), z("auid", Ag[Bg(f.prefix)] || ""));
        a.Uf && z("did", a.Uf);
        var P = B + "/pagead/landing?" + y.join("&");
        Ob(P);
      }
    }
    var c = !!a.fe,
      d = !!a.qa,
      e = a.T,
      f = void 0 === a.ad ? {} : a.ad,
      h = void 0 === a.hd ? !0 : a.hd,
      k = xh(),
      l = k.gclid || "",
      n = k.gclsrc,
      p = k.dclid || "",
      q = k.gbraid || "",
      r = !c && ((!l || (n && "aw.ds" !== n) ? !1 : !0) || q),
      u = Td();
    if (r || u)
      u
        ? ee(
            function () {
              b();
              L(K.D) ||
                de(function (t) {
                  return b(!0, t.Qh);
                }, K.D);
            },
            [K.D]
          )
        : b();
  }
  function vl(a, b) {
    var c = a && !L(K.D);
    return b && c ? "0" : b;
  }
  var wl = function () {
      this.o = {};
    },
    xl = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    yl = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b]);
        })
        .join("&");
    },
    Al = function (a, b, c, d) {};
  var Cl = !1,
    Dl = Number("200");
  function El() {
    if (!m.Promise) return !1;
    va(A.interestCohort) ||
      Cl ||
      ((Cl = !0),
      Sk(
        "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      ));
    return va(A.interestCohort);
  }
  function Fl() {
    var a = vf.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Ra() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        A.interestCohort().then(function (e) {
          vf.floc = { ts: Ra(), floc: e };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, Dl);
        }),
      ]).catch(function () {});
    } catch (e) {
      return;
    }
    return d;
  }
  var Gl = ["aw", "dc", "gb"];
  function Hl(a, b, c, d) {
    var e = a.Bg,
      f = a.callback,
      h = a.gg;
    if ("function" === typeof f)
      if (e === K.vd && void 0 === h) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === K.$g ? (Eg(b, !1), f(Ag[Bg(b.prefix)])) : f(h);
  }
  function Il(a, b) {
    var c = a.Rf,
      d = a.eg,
      e = a.yg;
    if (a.Gb) {
      var f = void 0 === c ? !0 : !!c;
      jh(d[K.yb], !!d[K.P]) && Ch(Gl, b);
      zh(b);
      Fh(Gl, b);
      Th(f, b);
    }
    d[K.P] && Eh(Gl, d[K.P], d[K.Tb], !!d[K.zb], b.prefix);
    e && Hh(["aw", "dc", "gb"]);
  }
  var Cm = function () {
      var a = !0;
      (sl(7) && sl(9) && sl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Bm() && (a = !1);
      return a;
    },
    Bm = function () {
      var a = !0;
      (sl(3) && sl(4)) || (a = !1);
      return a;
    };
  var Gm = function (a, b) {
      var c = b.getWithConfig(K.Ma),
        d = b.getWithConfig(K.Ua),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        Dm.hasOwnProperty(c)
          ? (f = Dm[c])
          : Em.hasOwnProperty(c) && (f = Em[c]);
        1 === f && (f = Fm(c));
        g(f)
          ? Vi()(function () {
              var h = Vi().getByName(a).get(f);
              d(h);
            })
          : d(void 0);
      } else d(e);
    },
    Hm = function (a, b) {
      var c = a[K.Tb];
      $i(
        b + ".",
        a[K.P] || "",
        void 0 === c ? !!a.use_anchor : "fragment" === c,
        !!a[K.zb]
      );
    },
    Lm = function (a, b, c) {
      if (Td() && (!c.isGtmEvent || !Im[a])) {
        var d = !L(K.H),
          e = function () {
            var f,
              h,
              k = Vi(),
              l = Jm(a, b, "", c),
              n,
              p = l.za._useUp;
            if (c.isGtmEvent || Km(b, l.za)) {
              var q = !0;
              if (c.isGtmEvent) {
                f = "gtm" + If();
                h = { name: f };
                h = H(l.za, h);
                q = !1;
                q = !0;
              }
              q &&
                k(function () {
                  var u = k.getByName(b);
                  u && (n = u.get("clientId"));
                  c.isGtmEvent || k.remove(b);
                });
              k("create", a, c.isGtmEvent ? h : l.za);
              d &&
                L(K.H) &&
                ((d = !1),
                k(function () {
                  var u = k.getByName(c.isGtmEvent ? f : b);
                  !u ||
                    (u.get("clientId") == n && p) ||
                    (c.isGtmEvent ? (l.hc["&gcu"] = "1") : (l.ja["&gcu"] = "1"),
                    u.set(l.hc),
                    c.isGtmEvent
                      ? u.send("pageview")
                      : u.send("pageview", l.ja));
                }));
              c.isGtmEvent &&
                k(function () {
                  k.remove(f);
                });
            }
          };
        Yd(e, K.H);
        Yd(e, K.D);
        c.isGtmEvent && (Im[a] = !0);
      }
    },
    Tm = function (a, b, c) {
      function d() {
        var D = c.getWithConfig("custom_map");
        f(function () {
          if (!c.isGtmEvent && Yb(D)) {
            var C = r.ja,
              E = h().getByName(k),
              G;
            for (G in D)
              if (
                D.hasOwnProperty(G) &&
                /^(dimension|metric)\d+$/.test(G) &&
                void 0 != D[G]
              ) {
                var P = E.get(Fm(D[G]));
                Mm(C, G, P);
              }
          }
        });
      }
      var e =
          "/leagueoflegend/wp-content/cache/busting/google-tracking/ga-025480759f536e68bdd754e900ce36ac.js",
        f = c.isGtmEvent ? Xi(c.getWithConfig("gaFunctionName")) : Xi();
      if (va(f)) {
        var h = Vi,
          k;
        c.isGtmEvent
          ? (k = c.getWithConfig("name"))
          : (k = "gtag_" + a.split("-").join("_"));
        var l = function (D) {
            var C = [].slice.call(arguments, 0);
            C[0] = k + "." + C[0];
            f.apply(window, C);
          },
          n = function () {
            var D = function (M, N) {
                for (var S = 0; N && S < N.length; S++) l(M, N[S]);
              },
              C = c.isGtmEvent,
              E = C ? Nm(r) : Om(b, c);
            if (E) {
              l("require", "ec", "ec.js");
              C && E.Tf && l("set", "&cu", E.Tf);
              var G = E.action;
              if (C || "impressions" === G)
                if ((D("ec:addImpression", E.ii), !C)) return;
              if ("promo_click" === G || "promo_view" === G || (C && E.Ee)) {
                var P = E.Ee;
                D("ec:addPromo", P);
                if (P && 0 < P.length && "promo_click" === G) {
                  C ? l("ec:setAction", G, E.Fb) : l("ec:setAction", G);
                  return;
                }
                if (!C) return;
              }
              "promo_view" !== G &&
                "impressions" !== G &&
                (D("ec:addProduct", E.Ib), l("ec:setAction", G, E.Fb));
            }
          },
          p = function (D) {
            if (D) {
              var C = {};
              if (Yb(D))
                for (var E in Pm) Pm.hasOwnProperty(E) && Qm(Pm[E], E, D[E], C);
              l("require", "linkid", C);
            }
          },
          q = function () {
            if ($h()) {
            } else {
              var D = c.getWithConfig(K.mh);
              D &&
                (l("require", D, { dataLayer: "dataLayer" }),
                l("require", "render"));
            }
          },
          r = Jm(a, k, b, c),
          u = function (D, C, E) {
            E && (C = "" + C);
            r.ja[D] = C;
          };
        !c.isGtmEvent &&
          Km(k, r.za) &&
          (f(function () {
            h() && h().remove(k);
          }),
          (Rm[k] = !1));
        f("create", a, r.za);
        if (r.za._x_19 && !c.isGtmEvent) {
          var t = vk(r.za._x_19, "/analytics.js");
          t && (e = t);
        }
        if (c.isGtmEvent ? r.hc._x_19 : r.za._x_19) {
          var v = c.isGtmEvent ? r.hc._x_20 : r.za._x_20;
          v && !Rm[k] && ((Rm[k] = !0), f(dj(k, v)));
        }
        c.isGtmEvent
          ? (r.enableRecaptcha && l("require", "recaptcha", "recaptcha.js"),
            r.enableLinkId && l("require", "linkid", "linkid.js"))
          : (d(), p(r.linkAttribution));
        var w = r[K.ma];
        w && w[K.P] && Hm(w, k);
        l("set", r.hc);
        c.isGtmEvent && Td() && Lm(a, k, c);
        b === K.wb
          ? c.isGtmEvent
            ? (n(), l("send", "pageview"), r.za._useUp && aj(k + "."))
            : (q(), l("send", "pageview", r.ja))
          : b === K.Ca
          ? (q(),
            mi(a, c),
            c.getWithConfig(K.Na) && (Hh(["aw", "dc"]), aj(k + ".")),
            0 != r.sendPageView && l("send", "pageview", r.ja),
            Lm(a, k, c))
          : b === K.Ka
          ? Gm(k, c)
          : "screen_view" === b
          ? l("send", "screenview", r.ja)
          : "timing_complete" === b
          ? ((r.ja.hitType = "timing"),
            u("timingCategory", r.eventCategory, !0),
            c.isGtmEvent
              ? u("timingVar", r.timingVar, !0)
              : u("timingVar", r.name, !0),
            u("timingValue", Ma(r.value)),
            void 0 !== r.eventLabel && u("timingLabel", r.eventLabel, !0),
            l("send", r.ja))
          : "exception" === b
          ? l("send", "exception", r.ja)
          : "optimize.callback" === b ||
            ("" === b && c.isGtmEvent) ||
            ("track_social" === b && c.isGtmEvent
              ? ((r.ja.hitType = "social"),
                u("socialNetwork", r.socialNetwork, !0),
                u("socialAction", r.socialAction, !0),
                u("socialTarget", r.socialTarget, !0))
              : ((c.isGtmEvent ||
                  0 <=
                    ya(
                      [
                        K.ub,
                        "select_content",
                        K.Ja,
                        K.sb,
                        K.tb,
                        K.$a,
                        "set_checkout_option",
                        K.va,
                        K.vb,
                        K.Ob,
                        "checkout_progress",
                      ],
                      b
                    )) &&
                  n(),
                (r.ja.hitType = "event"),
                u("eventCategory", r.eventCategory, !0),
                u("eventAction", r.eventAction || b, !0),
                void 0 !== r.eventLabel && u("eventLabel", r.eventLabel, !0),
                void 0 !== r.value && u("eventValue", Ma(r.value))),
            l("send", r.ja));
        var y = !1;
        var x = Sm;
        y && (x = c.getContainerTypeLoaded("UA"));
        if (!x && !c.isGtmEvent) {
          Sm = !0;
          y && c.setContainerTypeLoaded("UA", !0);
          Qi();
          var z = function () {
              y && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            B = function () {
              h().loaded || z();
            };
          $h() ? F(B) : Bb(e, B, z);
        }
      } else F(c.onFailure);
    },
    Um = function (a, b, c, d) {
      ee(
        function () {
          Tm(a, b, d);
        },
        [K.H, K.D]
      );
    },
    Wm = function (a) {
      function b(e) {
        function f(k, l) {
          for (var n = 0; n < l.length; n++) {
            var p = l[n];
            if (e[p]) {
              h[k] = e[p];
              break;
            }
          }
        }
        var h = H(e);
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return h;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Yb(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    Xm = function (a) {
      return L(a);
    },
    Sm,
    Rm = {},
    Im = {},
    Dm = {
      client_id: 1,
      client_storage: "storage",
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      cookie_flags: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: "storeGac",
    },
    Ym = {
      name: !0,
      clientId: !0,
      sampleRate: !0,
      siteSpeedSampleRate: !0,
      alwaysSendReferrer: !0,
      allowAnchor: !0,
      allowLinker: !0,
      cookieName: !0,
      cookieDomain: !0,
      cookieExpires: !0,
      cookiePath: !0,
      cookieUpdate: !0,
      cookieFlags: !0,
      legacyCookieDomain: !0,
      legacyHistoryImport: !0,
      storage: !0,
      useAmpClientId: !0,
      storeGac: !0,
      _cd2l: !0,
      _useUp: !0,
      _cs: !0,
    },
    Zm = { anonymize_ip: 1 },
    Em = {
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: "campaignName",
        source: "campaignSource",
        medium: "campaignMedium",
        term: "campaignKeyword",
        content: "campaignContent",
        id: "campaignId",
      },
      currency: "currencyCode",
      description: "exDescription",
      fatal: "exFatal",
      language: 1,
      non_interaction: 1,
      page_hostname: "hostname",
      page_referrer: "referrer",
      page_path: "page",
      page_location: "location",
      page_title: "title",
      screen_name: 1,
      transport_type: "transport",
      user_id: 1,
    },
    $m = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1,
    },
    an = {
      eventCategory: !0,
      eventAction: !0,
      eventLabel: !0,
      timingVar: !0,
      value: !0,
      socialNetwork: !0,
      socialAction: !0,
      socialTarget: !0,
      gaFunctionName: !0,
      enableLinkId: !0,
      enableRecaptcha: !0,
      linker: !0,
      gtmEcommerceData: !0,
    },
    Vm = [
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ],
    Pm = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
    bn = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1,
    },
    Qm = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (bn[b] && (c = Na(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Fm(b)] = c;
        else if (g(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Fm = function (a) {
      return a && g(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    cn = function (a) {
      var b = "general";
      0 <=
      ya(
        [
          K.We,
          K.sb,
          K.Xe,
          K.$a,
          "checkout_progress",
          K.va,
          K.vb,
          K.tb,
          "set_checkout_option",
        ],
        a
      )
        ? (b = "ecommerce")
        : 0 <=
          ya(
            "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
              " "
            ),
            a
          )
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Mm = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    dn = function (a) {
      if (xa(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Jm = function (a, b, c, d) {
      function e(P, M) {
        void 0 !== M && (l[P] = M);
      }
      var f = function (P) {
          return d.getWithConfig(P);
        },
        h = {},
        k = {},
        l = {},
        n = {},
        p = dn(f(K.ih));
      !d.isGtmEvent && p && Mm(k, "exp", p);
      Td() && (n._cs = Xm);
      var q = f("custom_map");
      if (!d.isGtmEvent && Yb(q))
        for (var r in q)
          if (
            q.hasOwnProperty(r) &&
            /^(dimension|metric)\d+$/.test(r) &&
            void 0 != q[r]
          ) {
            var u = f(String(q[r]));
            void 0 !== u && Mm(k, r, u);
          }
      for (var t = Hk(d), v = 0; v < t.length; ++v) {
        var w = t[v];
        if (d.isGtmEvent) {
          var y = f(w);
          an.hasOwnProperty(w)
            ? (h[w] = y)
            : Ym.hasOwnProperty(w)
            ? (n[w] = y)
            : "currencyCode" != w && (l[w] = y);
        } else {
          var x = "developer_id" != w ? f(w) : Ik(d, w);
          if ($m.hasOwnProperty(w)) Qm($m[w], w, x, h);
          else if (Zm.hasOwnProperty(w)) Qm(Zm[w], w, x, l);
          else if (Em.hasOwnProperty(w)) Qm(Em[w], w, x, k);
          else if (Dm.hasOwnProperty(w)) Qm(Dm[w], w, x, n);
          else if (/^(dimension|metric|content_group)\d+$/.test(w))
            Qm(1, w, x, k);
          else if ("developer_id" === w) {
            var z = Za(x);
            z && (k["&did"] = z);
          } else w === K.ca && 0 > ya(t, K.Ec) && (n.cookieName = x + "_ga");
        }
      }
      (!1 !== f(K.Zg) && !1 !== f(K.Pb) && Cm()) || (l.allowAdFeatures = !1);
      if (!1 === f(K.Da) || !Bm()) {
        var B = d.isGtmEvent
          ? "allowAdPersonalizationSignals"
          : "allowAdFeatures";
        B = "allowAdPersonalizationSignals";
        l[B] = !1;
      }
      !d.isGtmEvent && f(K.Na) && (n._useUp = !0);
      if (d.isGtmEvent)
        l.hitCallback = function () {
          va(l.hitCallback) && l.hitCallback();
          d.onSuccess();
        };
      else {
        Mm(n, "cookieDomain", "auto");
        Mm(l, "forceSSL", !0);
        Mm(h, "eventCategory", cn(c));
        0 <=
          ya(
            [
              "view_item",
              "view_item_list",
              "view_promotion",
              "view_search_results",
            ],
            c
          ) && Mm(k, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c
          ? Mm(h, "eventLabel", f(K.lh))
          : "search" === c || "view_search_results" === c
          ? Mm(h, "eventLabel", f(K.rh))
          : "select_content" === c && Mm(h, "eventLabel", f(K.bh));
        var D = h[K.ma] || {},
          C = D[K.yb];
        C || (0 != C && D[K.P])
          ? (n.allowLinker = !0)
          : !1 === C && Mm(n, "useAmpClientId", !1);
        k.hitCallback = d.onSuccess;
        n.name = b;
      }
      l["&gtm"] = Mk(!0);
      Td() &&
        ((l["&gcs"] = ce()),
        L(K.H) || (n.storage = "none"),
        L(K.D) || ((l.allowAdFeatures = !1), (n.storeGac = !1)));
      var E = f(K.na) || f(K.kh) || Of("gtag.remote_config." + a + ".url", 2),
        G = f(K.jh) || Of("gtag.remote_config." + a + ".dualId", 2);
      if (E) {
        d.isGtmEvent || (n._x_19 = E);
      }
      G && !d.isGtmEvent && (n._x_20 = G);
      h.ja = k;
      h.hc = l;
      h.za = n;
      return h;
    },
    Nm = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      c.currencyCode = b.currencyCode;
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.impressions = "impressions" === b.translateIfKeyEquals ? Wm(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.promotions = "promoView" === b.translateIfKeyEquals ? Wm(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.promotions = "promoClick" === b.translateIfKeyEquals ? Wm(f) : f;
        c.actionField = b.promoClick.actionField;
        return c;
      }
      for (var h in b)
        if (
          b.hasOwnProperty(h) &&
          "translateIfKeyEquals" !== h &&
          "impressions" !== h &&
          "promoView" !== h &&
          "promoClick" !== h &&
          "currencyCode" !== h
        ) {
          c.action = h;
          var k = b[h].products;
          c.products = "products" === b.translateIfKeyEquals ? Wm(k) : k;
          c.actionField = b[h].actionField;
          break;
        }
      return c;
    },
    Om = function (a, b) {
      function c(u) {
        return {
          id: d(K.ib),
          affiliation: d(K.fh),
          revenue: d(K.fa),
          tax: d(K.ef),
          shipping: d(K.Fd),
          coupon: d(K.gh),
          list: d(K.Ed) || u,
        };
      }
      for (
        var d = function (u) {
            return b.getWithConfig(u);
          },
          e = d(K.X),
          f,
          h = 0;
        e && h < e.length && !(f = e[h][K.Ed]);
        h++
      );
      var k = d("custom_map");
      if (Yb(k))
        for (var l = 0; e && l < e.length; ++l) {
          var n = e[l],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != k[p] &&
              Mm(n, p, n[k[p]]);
        }
      var q = null,
        r = d(K.hh);
      a === K.va || a === K.vb
        ? (q = { action: a, Fb: c(), Ib: Wm(e) })
        : a === K.sb
        ? (q = { action: "add", Ib: Wm(e) })
        : a === K.tb
        ? (q = { action: "remove", Ib: Wm(e) })
        : a === K.Ja
        ? (q = { action: "detail", Fb: c(f), Ib: Wm(e) })
        : a === K.ub
        ? (q = { action: "impressions", ii: Wm(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Ee: Wm(r) })
        : "select_content" === a && r && 0 < r.length
        ? (q = { action: "promo_click", Ee: Wm(r) })
        : "select_content" === a
        ? (q = { action: "click", Fb: { list: d(K.Ed) || f }, Ib: Wm(e) })
        : a === K.$a || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            Ib: Wm(e),
            Fb: { step: a === K.$a ? 1 : d(K.df), option: d(K.cf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            Fb: { step: d(K.df), option: d(K.cf) },
          });
      q && (q.Tf = d(K.da));
      return q;
    },
    en = {},
    Km = function (a, b) {
      var c = en[a];
      en[a] = H(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var fn = !1;
  var gn = !1;
  gn = !0;
  function hn() {
    var a = vf;
    return (a.gcq = a.gcq || new jn());
  }
  var kn = function (a, b, c) {
      hn().register(a, b, c);
    },
    ln = function (a, b, c, d) {
      hn().push("event", [b, a], c, d);
    },
    mn = function (a, b) {
      hn().push("config", [a], b);
    },
    nn = function (a, b, c, d) {
      hn().push("get", [a, b], c, d);
    },
    on = {},
    pn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    qn = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.T = c || "";
      this.o = d;
      this.s = e;
    },
    jn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = { AW: !1, UA: !1 };
      this.enableDeferrableCommandAfterConfig = fn;
    },
    rn = function (a, b) {
      var c = Xh(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new pn());
    },
    sn = function (a, b, c) {
      if (b) {
        var d = Xh(b);
        if (d && 1 === rn(a, b).status) {
          rn(a, b).status = 2;
          var e = {};
          Pj &&
            (e.timeoutId = m.setTimeout(function () {
              wd(38);
              vj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          on[d.containerId] = Ra();
          if ($h()) {
          } else {
            var h =
                "/gtag/js?id=" +
                encodeURIComponent(d.containerId) +
                "&l=dataLayer&cx=c",
              k =
                ("http:" != m.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + h),
              l = vk(c, h) || k;
            Bb(l);
          }
        }
      }
    },
    tn = function (a, b, c, d) {
      if (d.T) {
        var e = rn(a, d.T),
          f = e.C;
        if (f) {
          var h = H(c),
            k = H(e.targetConfig[d.T]),
            l = H(e.containerConfig),
            n = H(e.remoteConfig),
            p = H(a.C),
            q = Of("gtm.uniqueEventId"),
            r = Xh(d.T).prefix,
            u = Ta(function () {
              var v = h[K.xb];
              v && F(v);
            }),
            t = Fk(
              Ek(
                Gk(
                  Dk(Ck(Bk(Ak(zk(yk(h), k), l), n), p), function () {
                    ck(q, r, "2");
                    gn && u();
                  }),
                  function () {
                    ck(q, r, "3");
                    gn && u();
                  }
                ),
                function (v, w) {
                  a.F[v] = w;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            ck(q, r, "1");
            f(d.T, b, d.C, t);
          } catch (v) {
            ck(q, r, "4");
          }
        }
      }
    };
  jn.prototype.register = function (a, b, c) {
    var d = rn(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      if (c) {
        H(d.remoteConfig, c);
        d.remoteConfig = c;
      }
      var e = Xh(a),
        f = on[e.containerId];
      if (void 0 !== f) {
        var h = vf[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        vf[e.containerId]._spx && (k = k.toLowerCase());
        var l = Of("gtm.uniqueEventId"),
          n = k,
          p = Ra() - h;
        if (Pj && !Aj[l]) {
          l !== wj && (rj(), (wj = l));
          var q = n + "." + Math.floor(h - f) + "." + Math.floor(p);
          Ej = Ej ? Ej + "," + q : "&cl=" + q;
        }
        delete on[e.containerId];
      }
      this.flush();
    }
  };
  jn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Ra() / 1e3);
    sn(this, c, b[0][K.na] || this.C[K.na]);
    fn && c && rn(this, c).o && (d = !1);
    this.o.push(new qn(a, e, c, b, d));
    d || this.flush();
  };
  jn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Ra() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new qn(a, d, c, b, !1))
      : this.o.push(new qn(a, d, c, b, !1));
  };
  jn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        fn
          ? !f.T || rn(this, f.T).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== rn(this, f.T).status && !a) {
              fn && this.o.push.apply(this.o, c);
              return;
            }
            Pj && m.clearTimeout(f.o[0].timeoutId);
            break;
          case "set":
            Ja(f.o[0], function (r, u) {
              H(Xa(r, u), b.C);
            });
            break;
          case "config":
            e.Ia = {};
            Ja(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Xa(u, t), r.Ia);
                };
              })(e)
            );
            var h = !!e.Ia[K.Oc];
            delete e.Ia[K.Oc];
            var k = rn(this, f.T),
              l = Xh(f.T),
              n = l.containerId === l.id;
            h || (n ? (k.containerConfig = {}) : (k.targetConfig[f.T] = {}));
            (k.o && h) || tn(this, K.Ca, e.Ia, f);
            k.o = !0;
            delete e.Ia[K.Yb];
            n ? H(e.Ia, k.containerConfig) : H(e.Ia, k.targetConfig[f.T]);
            fn && (d = !0);
            break;
          case "event":
            e.yc = {};
            Ja(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Xa(u, t), r.yc);
                };
              })(e)
            );
            tn(this, f.o[1], e.yc, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.Ma] = f.o[0]), (p[K.Ua] = f.o[1]), p);
            tn(this, K.Ka, q, f);
        }
        this.o.shift();
        un(this, f);
      }
      e = { Ia: e.Ia, yc: e.yc };
    }
    fn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var un = function (a, b) {
    if ("require" !== b.type)
      if (b.T)
        for (
          var c = a.getCommandListeners(b.T)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var h = f.s[b.type] || [], k = 0; k < h.length; k++) h[k]();
          }
  };
  jn.prototype.getRemoteConfig = function (a) {
    return rn(this, a).remoteConfig;
  };
  jn.prototype.getCommandListeners = function (a) {
    return rn(this, a).s;
  };
  var vn = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Tb(a, "className"),
        "gtm.elementId": a["for"] || Kb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Tb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Tb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    wn = function (a) {
      vf.hasOwnProperty("autoEventsSettings") || (vf.autoEventsSettings = {});
      var b = vf.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    xn = function (a, b, c) {
      wn(a)[b] = c;
    },
    yn = function (a, b, c, d) {
      var e = wn(a),
        f = Sa(e, b, d);
      e[b] = c(f);
    },
    zn = function (a, b, c) {
      var d = wn(a);
      return Sa(d, b, c);
    };
  var An = ["input", "select", "textarea"],
    Bn = ["button", "hidden", "image", "reset", "submit"],
    Cn = function (a) {
      var b = a.tagName.toLowerCase();
      return !za(An, function (c) {
        return c === b;
      }) ||
        ("input" === b &&
          za(Bn, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Dn = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : A.getElementById(a.form)
        : Nb(a, ["form"], 100);
    },
    En = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var h = a.elements[e];
        if (Cn(h)) {
          if (h.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Fn = !!m.MutationObserver,
    Gn = void 0,
    Hn = function (a) {
      if (!Gn) {
        var b = function () {
          var c = A.body;
          if (c)
            if (Fn)
              new MutationObserver(function () {
                for (var e = 0; e < Gn.length; e++) F(Gn[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Ib(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  F(function () {
                    d = !1;
                    for (var e = 0; e < Gn.length; e++) F(Gn[e]);
                  }));
              });
            }
        };
        Gn = [];
        A.body ? b() : F(b);
      }
      Gn.push(a);
    };
  var Jn = !1,
    Kn = [];
  function Ln() {
    if (!Jn) {
      Jn = !0;
      for (var a = 0; a < Kn.length; a++) F(Kn[a]);
    }
  }
  var Mn = function (a) {
    Jn ? F(a) : Kn.push(a);
  };
  function Nn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var On = new Da();
  function Pn(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = On.get(e);
      f || ((f = new RegExp(b, d)), On.set(e, f));
      return f.test(a);
    } catch (h) {
      return !1;
    }
  }
  function Qn(a, b) {
    function c(h) {
      var k = Be(h),
        l = ze(k, "protocol"),
        n = ze(k, "host", !0),
        p = ze(k, "port"),
        q = ze(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == p) ||
        ("https" == l && "443" == p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Rn(a) {
    return Sn(a) ? 1 : 0;
  }
  function Sn(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && xa(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H({ arg1: c[d], any_of: void 0 }, e);
        if (Rn(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) {
            var h = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var k = 0; k < h.length; k++)
                if (b[h[k]]) {
                  f = b[h[k]](c);
                  break a;
                }
            } catch (n) {}
          }
          f = !1;
        }
        return f;
      case "_ew":
        return Nn(b, c);
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var l;
        l = String(b).split(",");
        return 0 <= ya(l, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Pn(b, c, a.ignore_case);
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return Qn(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  var Tn = {},
    Un = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++)
        (Tn[b[c]] = Tn[b[c]] || []), Tn[b[c]].push(a);
    },
    Vn = function (a) {
      Ja(Tn, function (b, c) {
        var d = ya(c, a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Wn = "HA GF G UA AW DC".split(" "),
    Xn = !1;
  Xn = !0;
  var Yn = !1,
    Zn = !1;
  function $n(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = H(b)),
      b[K.xb] && (c.eventCallback = b[K.xb]),
      b[K.Gc] && (c.eventTimeout = b[K.Gc]));
    return c;
  }
  function ao(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: If() });
    return a["gtm.uniqueEventId"];
  }
  function bo() {
    Yn ||
      vf.gtagRegistered ||
      ((Yn = vf.gtagRegistered = !0),
      (vf.addTargetToGroup = function (a) {
        Un(a, "default");
      }));
    return Yn;
  }
  var co = {
      config: function (a) {
        var b,
          c = ao(a);
        if (2 > a.length || !g(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !Yb(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = Xh(a[1]);
        if (!e) return;
        Vn(e.id);
        Un(e.id, d[K.Ld] || "default");
        delete d[K.Ld];
        Zn || wd(43);
        if (bo() && -1 !== ya(Wn, e.prefix)) {
          "G" === e.prefix && (d[K.Yb] = !0);
          Xn && delete d[K.xb];
          mn(d, e.id);
          return;
        }
        Rf("gtag.targets." + e.id, void 0);
        Rf("gtag.targets." + e.id, H(d));
        var f = {};
        f[K.hb] = e.id;
        b = $n(K.Ca, f);
        b["gtm.uniqueEventId"] = c;
        return b;
      },
      consent: function (a) {
        function b() {
          bo() && H(a[2], { subcommand: a[1] });
        }
        if (3 === a.length) {
          wd(39);
          var c = If(),
            d = a[1];
          "default" === d
            ? (b(), ae(a[2]))
            : "update" === d && (b(), be(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && g(b)) {
          var c;
          if (2 < a.length) {
            if ((!Yb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = $n(b, c),
            e = ao(a);
          d["gtm.uniqueEventId"] = e;
          var f;
          var h = c && c[K.hb];
          void 0 === h && ((h = Of(K.hb, 2)), void 0 === h && (h = "default"));
          if (g(h) || xa(h)) {
            for (
              var k = h.toString().replace(/\s+/g, "").split(","),
                l = [],
                n = 0;
              n < k.length;
              n++
            )
              if (0 <= k[n].indexOf("-")) l.push(k[n]);
              else {
                var p = Tn[k[n]];
                p && p.length && (l = l.concat(p));
              }
            f = Zh(l);
          } else f = void 0;
          var q = f;
          if (!q) return;
          for (var r = bo(), u = [], t = 0; r && t < q.length; t++) {
            var v = q[t];
            if (-1 !== ya(Wn, v.prefix)) {
              var w = H(c);
              "G" === v.prefix && (w[K.Yb] = !0);
              Xn && delete w[K.xb];
              ln(b, w, v.id);
            }
            u.push(v.id);
          }
          d.eventModel = d.eventModel || {};
          0 < q.length
            ? (d.eventModel[K.hb] = u.join())
            : delete d.eventModel[K.hb];
          Zn || wd(43);
          return d;
        }
      },
      get: function (a) {
        wd(53);
        if (4 !== a.length || !g(a[1]) || !g(a[2]) || !va(a[3])) return;
        var b = Xh(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        Zn || wd(43);
        if (!bo() || -1 === ya(Wn, b.prefix)) return;
        If();
        var e = {};
        Bi(H(((e[K.Ma] = c), (e[K.Ua] = d), e)));
        nn(
          c,
          function (f) {
            F(function () {
              return d(f);
            });
          },
          b.id
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          Zn = !0;
          bo();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = ao(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Yb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}),
            Yb(a[2]) || xa(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if ((If(), bo())) {
            H(b);
            var c = H(b);
            hn().push("set", [c]);
          }
          b._clear = !0;
          return b;
        }
      },
    },
    eo = { policy: !0 };
  var fo = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    ho = function (a) {
      var b = go(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var yo = function (a) {
    if (xo(a)) return a;
    this.o = a;
  };
  yo.prototype.gi = function () {
    return this.o;
  };
  var xo = function (a) {
    return !a || "object" !== Wb(a) || Yb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  yo.prototype.getUntrustedUpdateValue = yo.prototype.gi;
  var zo = [],
    Ao = !1,
    Bo = !1,
    Co = !1,
    Do = function (a) {
      return m["dataLayer"].push(a);
    },
    Eo = function (a) {
      var b = vf["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };
  function Fo(a) {
    var b = a._clear;
    Ja(a, function (d, e) {
      "_clear" !== d && (b && Rf(d, void 0), Rf(d, e));
    });
    Df || (Df = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = If()), (a["gtm.uniqueEventId"] = c), Rf("gtm.uniqueEventId", c));
    return tk(a);
  }
  function Go() {
    var a = zo[0];
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Ho() {
    for (var a = !1; !Co && 0 < zo.length; ) {
      if (!Bo && Go()) {
        var b = {};
        zo.unshift(((b.event = "gtm.init"), b));
        Bo = !0;
      }
      if (!Ao && Go()) {
        var c = {};
        zo.unshift(((c.event = "gtm.init_consent"), c));
        Ao = !0;
      }
      Co = !0;
      delete Lf.eventModel;
      Nf();
      var d = zo.shift();
      if (null != d) {
        var e = xo(d);
        if (e) {
          var f = d;
          d = xo(f) ? f.getUntrustedUpdateValue() : void 0;
          for (
            var h = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              k = 0;
            k < h.length;
            k++
          ) {
            var l = h[k],
              n = Of(l, 1);
            if (xa(n) || Yb(n)) n = H(n);
            Mf[l] = n;
          }
        }
        try {
          if (va(d))
            try {
              d.call(Pf);
            } catch (y) {}
          else if (xa(d)) {
            var p = d;
            if (g(p[0])) {
              var q = p[0].split("."),
                r = q.pop(),
                u = p.slice(1),
                t = Of(q.join("."), 2);
              if (void 0 !== t && null !== t)
                try {
                  t[r].apply(t, u);
                } catch (y) {}
            }
          } else {
            if (La(d)) {
              a: {
                var v = d;
                if (v.length && g(v[0])) {
                  var w = co[v[0]];
                  if (w && (!e || !eo[v[0]])) {
                    d = w(v);
                    break a;
                  }
                }
                d = void 0;
              }
              if (!d) {
                Co = !1;
                continue;
              }
            }
            a = Fo(d) || a;
          }
        } finally {
          e && Nf(!0);
        }
      }
      Co = !1;
    }
    return !a;
  }
  function Io() {
    var b = Ho();
    try {
      fo(m["dataLayer"], uf.M);
    } catch (c) {}
    return b;
  }
  var Ko = function () {
      var a = zb("dataLayer", []),
        b = zb("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Ii(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Mn(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < vf.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new yo(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var h = c.apply(a, e);
        zo.push.apply(zo, e);
        if (300 < this.length) for (wd(4); 300 < this.length; ) this.shift();
        var k = "boolean" !== typeof h || h;
        return Ho() && k;
      };
      var d = a.slice(0);
      zo.push.apply(zo, d);
      if (Jo()) {
        F(Io);
      }
    },
    Jo = function () {
      var a = !0;
      return a;
    };
  var Lo = {};
  Lo.Rc = new String("undefined");
  var Mo = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Lo.Rc ? b : a[d]);
      return c.join("");
    };
  };
  Mo.prototype.toString = function () {
    return this.o("undefined");
  };
  Mo.prototype.valueOf = Mo.prototype.toString;
  Lo.Eh = Mo;
  Lo.Zd = {};
  Lo.Uh = function (a) {
    return new Mo(a);
  };
  var No = {};
  Lo.Ii = function (a, b) {
    var c = If();
    No[c] = [a, b];
    return c;
  };
  Lo.Sf = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = No[c];
      if (d && "function" === typeof d[b]) d[b]();
      No[c] = void 0;
    };
  };
  Lo.li = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Lo.Ci = function (a) {
    if (a === Lo.Rc) return a;
    var b = If();
    Lo.Zd[b] = a;
    return 'google_tag_manager["' + uf.M + '"].macro(' + b + ")";
  };
  Lo.yi = function (a, b, c) {
    a instanceof Lo.Eh && ((a = a.o(Lo.Ii(b, c))), (b = ua));
    return { hi: a, onSuccess: b };
  };
  var Yo = m.clearTimeout,
    Zo = m.setTimeout,
    R = function (a, b, c) {
      if ($h()) {
        b && F(b);
      } else return Bb(a, b, c);
    },
    $o = function () {
      return new Date();
    },
    ap = function () {
      return m.location.href;
    },
    bp = function (a) {
      return ze(Be(a), "fragment");
    },
    cp = function (a) {
      return Ae(Be(a));
    },
    dp = function (a, b) {
      return Of(a, b || 2);
    },
    ep = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Do(a)))
        : (d = Do(a));
      return d;
    },
    fp = function (a, b) {
      m[a] = b;
    },
    U = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    gp = function (a, b, c) {
      return fg(a, b, void 0 === c ? !0 : !!c);
    },
    hp = function (a, b, c) {
      return 0 === og(a, b, c);
    },
    ip = function (a, b) {
      if ($h()) {
        b && F(b);
      } else Gb(a, b);
    },
    jp = function (a) {
      return !!zn(a, "init", !1);
    },
    kp = function (a) {
      xn(a, "init", !0);
    },
    lp = function (a) {
      var b = Bf + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      R(bi("https://", "http://", b));
    },
    mp = function (a, b, c) {
      Pj && (Zb(a) || dk(c, b, a));
    };
  var np = Lo.yi;
  var Kp = encodeURI,
    W = encodeURIComponent,
    Lp = Hb;
  var Mp = function (a, b) {
    if (!a) return !1;
    var c = ze(Be(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Np = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  function tr() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var ur = function () {
      var a = tr();
      a.hid = a.hid || Ba();
      return a.hid;
    },
    vr = function (a, b) {
      var c = tr();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Wr = function () {
    if (va(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && /^[\da-zA-Z-]{1,20}$/.test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var qs = window,
    rs = document,
    ss = function (a) {
      var b = qs._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === qs["ga-disable-" + a]))
        return !0;
      try {
        var c = qs.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = bg("AMP_TOKEN", String(rs.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return rs.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var ts = {};
  function ws(a) {
    delete a.eventModel[K.Yb];
    ys(a.eventModel);
  }
  var ys = function (a) {
    Ja(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.Oa] || {};
    Ja(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var Bs = function (a, b, c) {
      ln(b, c, a);
    },
    Cs = function (a, b, c) {
      ln(b, c, a, !0);
    },
    Gs = function (a, b) {};
  function Ds(a, b) {}
  var X = { g: {} };
  (X.g.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.h = "e";
        X.__e.m = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(Uf(a.vtp_gtmEventId, "event"));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();
  (X.g.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.h = "v";
        X.__v.m = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = dp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        mp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.g.rep = ["google"]),
    (function () {
      (function (a) {
        X.__rep = a;
        X.__rep.h = "rep";
        X.__rep.m = !0;
        X.__rep.priorityOverride = 0;
      })(function (a) {
        var b;
        switch (Xh(a.vtp_containerId).prefix) {
          case "AW":
            b = $l;
            break;
          case "DC":
            b = nm;
            break;
          case "GF":
            b = sm;
            break;
          case "HA":
            b = xm;
            break;
          case "UA":
            b = Um;
            break;
          default:
            F(a.vtp_gtmOnFailure);
            return;
        }
        F(a.vtp_gtmOnSuccess);
        kn(a.vtp_containerId, b, a.vtp_remoteConfig || {});
      });
    })();
  (X.g.cid = ["google"]),
    (function () {
      (function (a) {
        X.__cid = a;
        X.__cid.h = "cid";
        X.__cid.m = !0;
        X.__cid.priorityOverride = 0;
      })(function () {
        return uf.M;
      });
    })();
  (X.g.get = ["google"]),
    (function () {
      (function (a) {
        X.__get = a;
        X.__get.h = "get";
        X.__get.m = !0;
        X.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? Cs
          : Bs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();
  (X.g.gtagua = ["google"]),
    (function () {
      (function (a) {
        X.__gtagua = a;
        X.__gtagua.h = "gtagua";
        X.__gtagua.m = !0;
        X.__gtagua.priorityOverride = 0;
      })(function (a) {
        F(a.vtp_gtmOnSuccess);
      });
    })();
  var Hs = {};
  (Hs.macro = function (a) {
    if (Lo.Zd.hasOwnProperty(a)) return Lo.Zd[a];
  }),
    (Hs.onHtmlSuccess = Lo.Sf(!0)),
    (Hs.onHtmlFailure = Lo.Sf(!1));
  Hs.dataLayer = Pf;
  Hs.callback = function (a) {
    Gf.hasOwnProperty(a) && va(Gf[a]) && Gf[a]();
    delete Gf[a];
  };
  Hs.bootstrap = 0;
  Hs._spx = !1;
  function Is() {
    vf[uf.M] = Hs;
    Ua(Hf, X.g);
    Kc = Kc || Lo;
    Lc = Tc;
  }
  function Js() {
    var a = !1;
    a && Ri("INIT");
    Bd().s();
    vf = m.google_tag_manager = m.google_tag_manager || {};
    ol();
    kh.enable_gbraid_cookie_write = !0;
    if (vf[uf.M]) {
      var b = vf.zones;
      b && b.unregisterChild(uf.M);
    } else {
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        Dc.push(d[e]);
      for (var f = c.tags || [], h = 0; h < f.length; h++) Gc.push(f[h]);
      for (var k = c.predicates || [], l = 0; l < k.length; l++) Fc.push(k[l]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        Ec.push(r);
      }
      Ic = X;
      Jc = Rn;
      Is();
      Ko();
      Di = !1;
      Ei = 0;
      if (
        ("interactive" == A.readyState && !A.createEventObject) ||
        "complete" == A.readyState
      )
        Gi();
      else {
        Ib(A, "DOMContentLoaded", Gi);
        Ib(A, "readystatechange", Gi);
        if (A.createEventObject && A.documentElement.doScroll) {
          var t = !0;
          try {
            t = !m.frameElement;
          } catch (z) {}
          t && Hi();
        }
        Ib(m, "load", Gi);
      }
      Jn = !1;
      "complete" === A.readyState ? Ln() : Ib(m, "load", Ln);
      Pj && m.setInterval(Jj, 864e5);
      Ef = new Date().getTime();
      Hs.bootstrap = Ef;
      if (a) {
        var x = Si("INIT");
      }
    }
  }
  (function (a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (A.referrer) {
        var c = Be(A.referrer);
        b = "cct.google" === ye(c, "host");
      }
      if (!b) {
        var d = fg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((m["__TAGGY_INSTALLED"] = !0),
        Bb("https://cct.google/taggy/agent.js"));
    }
    var f = function () {
        var n = m["google.tagmanager.debugui2.queue"];
        n ||
          ((n = []),
          (m["google.tagmanager.debugui2.queue"] = n),
          Bb("https://www.googletagmanager.com/debug/bootstrap"));
        var p = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: yb, containerProduct: "GTM", debug: !1 },
        };
        p.data.resume = function () {
          a();
        };
        p.data.containerProduct = "OGT";
        uf.Kg && (p.data.initialPublish = !0);
        n.push(p);
      },
      h = "x" === ze(m.location, "query", !1, void 0, "gtm_debug");
    if (!h && A.referrer) {
      var k = Be(A.referrer);
      h = "tagassistant.google.com" === ye(k, "host");
    }
    if (!h) {
      var l = fg("__TAG_ASSISTANT");
      h = l.length && l[0].length;
    }
    m.__TAG_ASSISTANT_API && (h = !0);
    h && yb ? f() : a();
  })(Js);
})();
