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
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = ea,
    ma = function (a, b) {
      a.prototype = ba(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Wj = b.prototype;
    },
    na = this || self,
    oa = function (a) {
      return a;
    };
  var pa = function () {},
    ra = function (a) {
      return "function" == typeof a;
    },
    k = function (a) {
      return "string" == typeof a;
    },
    sa = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    ta = Array.isArray,
    ua = function (a, b) {
      if (a && ta(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    wa = function (a, b) {
      if (!sa(a) || !sa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Aa = function (a, b) {
      for (var c = new za(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ba = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ca = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Da = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ea = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Fa = function (a) {
      var b = [];
      if (ta(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ga = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ha = function () {
      return new Date(Date.now());
    },
    Ia = function () {
      return Ha().getTime();
    },
    za = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  za.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  za.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ja = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ka = function (a) {
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
    La = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ma = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Na = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Oa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Qa = /^\w{1,9}$/,
    Ra = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ba(a, function (d, e) {
        Qa.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var Sa,
    Ta = function () {
      if (void 0 === Sa) {
        var a = null,
          b = na.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: oa,
              createScript: oa,
              createScriptURL: oa,
            });
          } catch (c) {
            na.console && na.console.error(c.message);
          }
          Sa = a;
        } else Sa = a;
      }
      return Sa;
    };
  var Va = function (a, b) {
    this.m = b === Ua ? a : "";
  };
  Va.prototype.toString = function () {
    return this.m + "";
  };
  var Ua = {};
  var Wa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Xa() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Ya(a) {
    return -1 != Xa().indexOf(a);
  }
  var Za = {},
    $a = function (a, b, c) {
      this.m = c === Za ? a : "";
    };
  $a.prototype.toString = function () {
    return this.m.toString();
  };
  var ab = function (a) {
      return a instanceof $a && a.constructor === $a
        ? a.m
        : "type_error:SafeHtml";
    },
    bb = function (a) {
      var b = Ta(),
        c = b ? b.createHTML(a) : a;
      return new $a(c, null, Za);
    };
  function cb(a) {
    if (null !== a && void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeStyleSheet.");
    }
  }
  var B = window,
    G = document,
    db = navigator,
    eb = G.currentScript && G.currentScript.src,
    fb = function (a, b) {
      var c = B[a];
      B[a] = void 0 === c ? b : c;
      return B[a];
    },
    gb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    hb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    ib = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function jb(a, b, c) {
    b &&
      Ba(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var mb = function (a, b, c, d) {
      var e = G.createElement("script");
      jb(e, d, hb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = Ta(),
        l = g ? g.createScriptURL(a) : a;
      f = new Va(l, Ua);
      e.src =
        f instanceof Va && f.constructor === Va
          ? f.m
          : "type_error:TrustedResourceUrl";
      var m,
        n,
        p = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
          .document,
        q =
          null === (n = p.querySelector) || void 0 === n
            ? void 0
            : n.call(p, "script[nonce]");
      (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", m);
      gb(e, b);
      c && (e.onerror = c);
      var t = G.getElementsByTagName("script")[0] || G.body || G.head;
      t.parentNode.insertBefore(e, t);
      return e;
    },
    nb = function () {
      if (eb) {
        var a = eb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    ob = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = G.createElement("iframe")), (g = !0));
      jb(f, c, ib);
      d &&
        Ba(d, function (m, n) {
          f.dataset[m] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var l = (G.body && G.body.lastChild) || G.body || G.head;
        l.parentNode.insertBefore(f, l);
      }
      gb(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    pb = function (a, b, c) {
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
    qb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    rb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      B.setTimeout(a, 0);
    },
    sb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    tb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    ub = function (a) {
      var b = G.createElement("div"),
        c = b,
        d = bb("A<div>" + a + "</div>");
      cb(c);
      c.innerHTML = ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    vb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    wb = function (a) {
      var b;
      try {
        b = db.sendBeacon && db.sendBeacon(a);
      } catch (c) {}
      b || pb(a);
    },
    xb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    yb = function (a) {
      var b = G.featurePolicy;
      return b && ra(b.allowsFeature) ? b.allowsFeature(a) : !1;
    };
  var zb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ab = function (a) {
      if (null == a) return String(a);
      var b = zb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Bb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Cb = function (a) {
      if (!a || "object" != Ab(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Bb(a, "constructor") &&
          !Bb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Bb(a, b);
    },
    Db = function (a, b) {
      var c = b || ("array" == Ab(a) ? [] : {}),
        d;
      for (d in a)
        if (Bb(a, d)) {
          var e = a[d];
          "array" == Ab(e)
            ? ("array" != Ab(c[d]) && (c[d] = []), (c[d] = Db(e, c[d])))
            : Cb(e)
            ? (Cb(c[d]) || (c[d] = {}), (c[d] = Db(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Eb = function (a) {
    if (void 0 === a || ta(a) || Cb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Fb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      ih: a("consent"),
      jh: a("consent_always_fire"),
      jf: a("convert_case_to"),
      kf: a("convert_false_to"),
      lf: a("convert_null_to"),
      nf: a("convert_true_to"),
      pf: a("convert_undefined_to"),
      Ij: a("debug_mode_metadata"),
      sb: a("function"),
      Th: a("instance_name"),
      Xh: a("live_only"),
      Yh: a("malware_disabled"),
      Zh: a("metadata"),
      di: a("original_activity_id"),
      Lj: a("original_vendor_template_id"),
      Kj: a("once_on_load"),
      ci: a("once_per_event"),
      Vf: a("once_per_load"),
      Nj: a("priority_override"),
      Oj: a("respected_consent_types"),
      Zf: a("setup_tags"),
      $f: a("tag_id"),
      ag: a("teardown_tags"),
    };
  })();
  var cc;
  var dc = [],
    ec = [],
    fc = [],
    gc = [],
    hc = [],
    jc = {},
    kc,
    lc,
    mc,
    nc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = jc[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.mg && d.mg(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Fb.jh.toString() && a[g]) {
          }
      e && d && d.lg && (f.vtp_gtmCachedValues = d.lg);
      return void 0 !== e ? e(f) : cc(c, f, b);
    },
    pc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = oc(a[e], b, c));
      return d;
    },
    oc = function (a, b, c) {
      if (ta(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(oc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = dc[f];
            if (!g || b.Pe(g)) return;
            c[f] = !0;
            try {
              var l = pc(g, b, c);
              l.vtp_gtmEventId = b.id;
              d = nc(l, { event: b, index: f, type: 2 });
              mc && (d = mc.si(d, l));
            } catch (A) {
              b.Fg && b.Fg(A, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var m = 1; m < a.length; m += 2)
              d[oc(a[m], b, c)] = oc(a[m + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = oc(a[p], b, c);
              lc && (n = n || q === lc.dd);
              d.push(q);
            }
            return lc && n ? lc.yi(d) : d.join("");
          case "escape":
            d = oc(a[1], b, c);
            if (lc && ta(a[1]) && "macro" === a[1][0] && lc.Si(a))
              return lc.ij(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Gb[a[t]] && (d = Gb[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!gc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { rg: a[2], index: u });
          case "zb":
            var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            r["function"] = a[1];
            var v = qc(r, b, c),
              z = !!a[4];
            return z || 2 !== v ? z !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    qc = function (a, b, c) {
      try {
        return kc(pc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var tc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = rc(a), f = 0; f < ec.length; f++) {
        var g = ec[f],
          l = sc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < gc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    sc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    rc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = qc(fc[c], a));
        return b[c];
      };
    };
  var uc = {
    si: function (a, b) {
      b[Fb.jf] &&
        "string" === typeof a &&
        (a = 1 == b[Fb.jf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Fb.lf) && null === a && (a = b[Fb.lf]);
      b.hasOwnProperty(Fb.pf) && void 0 === a && (a = b[Fb.pf]);
      b.hasOwnProperty(Fb.nf) && !0 === a && (a = b[Fb.nf]);
      b.hasOwnProperty(Fb.kf) && !1 === a && (a = b[Fb.kf]);
      return a;
    },
  };
  var K = {
    Mb: "_ee",
    ld: "_syn_or_mod",
    Pj: "_uei",
    qc: "_eu",
    Mj: "_pci",
    Jb: "event_callback",
    Vc: "event_timeout",
    Aa: "gtag.config",
    Oa: "gtag.get",
    ya: "purchase",
    Gb: "refund",
    nb: "begin_checkout",
    Db: "add_to_cart",
    Eb: "remove_from_cart",
    sh: "view_cart",
    rf: "add_to_wishlist",
    za: "view_item",
    Fb: "view_promotion",
    Nd: "select_promotion",
    Md: "select_item",
    ob: "view_item_list",
    qf: "add_payment_info",
    rh: "add_shipping_info",
    Ra: "value_key",
    cb: "value_callback",
    U: "allow_ad_personalization_signals",
    jc: "restricted_data_processing",
    $b: "allow_google_signals",
    qa: "cookie_expires",
    Ib: "cookie_update",
    kc: "session_duration",
    Zc: "session_engaged_time",
    Tc: "engagement_time_msec",
    Da: "user_properties",
    ra: "transport_url",
    T: "ads_data_redaction",
    sa: "user_data",
    fc: "first_party_collection",
    C: "ad_storage",
    M: "analytics_storage",
    ff: "region",
    hf: "wait_for_update",
    oa: "conversion_linker",
    Ga: "conversion_cookie_prefix",
    ia: "value",
    ca: "currency",
    Rf: "trip_type",
    X: "items",
    Gf: "passengers",
    Qd: "allow_custom_scripts",
    rb: "session_id",
    Lf: "quantity",
    hb: "transaction_id",
    fb: "language",
    Sc: "country",
    Rc: "allow_enhanced_conversions",
    Vd: "aw_merchant_id",
    Td: "aw_feed_country",
    Ud: "aw_feed_language",
    Sd: "discount",
    Z: "developer_id",
    $c: "delivery_postal_code",
    ae: "estimated_delivery_date",
    Zd: "shipping",
    he: "new_customer",
    Wd: "customer_lifetime_value",
    $d: "enhanced_conversions",
    Zb: "page_view",
    ka: "linker",
    N: "domains",
    Lb: "decorate_forms",
    Cf: "enhanced_conversions_automatic_settings",
    zh: "auto_detection_enabled",
    Df: "ga_temp_client_id",
    Od: "user_engagement",
    mh: "app_remove",
    nh: "app_store_refund",
    oh: "app_store_subscription_cancel",
    ph: "app_store_subscription_convert",
    qh: "app_store_subscription_renew",
    th: "first_open",
    uh: "first_visit",
    vh: "in_app_purchase",
    wh: "session_start",
    xh: "allow_display_features",
    ac: "campaign",
    sf: "campaign_content",
    tf: "campaign_id",
    uf: "campaign_medium",
    vf: "campaign_name",
    wf: "campaign_source",
    xf: "campaign_term",
    $a: "client_id",
    ja: "cookie_domain",
    Hb: "cookie_name",
    ab: "cookie_path",
    Ha: "cookie_flags",
    bc: "custom_map",
    de: "groups",
    Ff: "non_interaction",
    Sa: "page_location",
    ie: "page_path",
    Ia: "page_referrer",
    ic: "page_title",
    la: "send_page_view",
    qb: "send_to",
    mc: "session_engaged",
    cc: "euid_logged_in_state",
    nc: "session_number",
    Ph: "tracking_id",
    ib: "url_passthrough",
    Kb: "accept_incoming",
    hc: "url_position",
    Jf: "phone_conversion_number",
    Hf: "phone_conversion_callback",
    If: "phone_conversion_css_class",
    Kf: "phone_conversion_options",
    Kh: "phone_conversion_ids",
    Jh: "phone_conversion_country_code",
    Pa: "aw_remarketing",
    Rd: "aw_remarketing_only",
    Pd: "gclid",
    yh: "auid",
    Eh: "affiliation",
    Bf: "tax",
    Yd: "list_name",
    Af: "checkout_step",
    zf: "checkout_option",
    Fh: "coupon",
    Gh: "promotions",
    Ca: "user_id",
    Nh: "retoken",
    Ba: "cookie_prefix",
    yf: "disable_merchant_reported_purchases",
    Dh: "dc_natural_search",
    Ch: "dc_custom_params",
    Ef: "method",
    Oh: "search_term",
    Bh: "content_type",
    Ih: "optimize_id",
    Hh: "experiments",
    eb: "google_signals",
  };
  K.Xc = "google_tld";
  K.ad = "update";
  K.be = "firebase_id";
  K.ce = "ga_restrict_domain";
  K.Uc = "event_settings";
  K.Xd = "dynamic_event_settings";
  K.oc = "user_data_settings";
  K.Nf = "screen_name";
  K.Of = "screen_resolution";
  K.pb = "_x_19";
  K.Qa = "enhanced_client_id";
  K.Wc = "_x_20";
  K.fe = "internal_traffic_results";
  K.Qf = "traffic_type";
  K.Yc = "referral_exclusion_definition";
  K.ee = "ignore_referrer";
  K.Ah = "content_group";
  K.fa = "allow_interest_groups";
  var Vc = {};
  K.Tf = Object.freeze(
    ((Vc[K.qf] = 1),
    (Vc[K.rh] = 1),
    (Vc[K.Db] = 1),
    (Vc[K.Eb] = 1),
    (Vc[K.sh] = 1),
    (Vc[K.nb] = 1),
    (Vc[K.Md] = 1),
    (Vc[K.ob] = 1),
    (Vc[K.Nd] = 1),
    (Vc[K.Fb] = 1),
    (Vc[K.ya] = 1),
    (Vc[K.Gb] = 1),
    (Vc[K.za] = 1),
    (Vc[K.rf] = 1),
    Vc)
  );
  K.ke = Object.freeze([K.U, K.$b, K.Ib]);
  K.ai = Object.freeze([].concat(K.ke));
  K.me = Object.freeze([K.qa, K.Vc, K.kc, K.Zc, K.Tc]);
  K.bi = Object.freeze([].concat(K.me));
  var Wc = {};
  K.Jd = ((Wc[K.C] = "1"), (Wc[K.M] = "2"), Wc);
  var Yc = { xi: "US", pj: "" };
  var Zc = {},
    $c = function (a, b) {
      Zc[a] = Zc[a] || [];
      Zc[a][b] = !0;
    },
    cd = function (a) {
      for (var b = [], c = Zc[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    dd = function () {
      for (var a = [], b = Zc.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var ed = function (a) {
    $c("GTM", a);
  };
  var fd = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var hd = function () {
    var a = gd,
      b = "Ne";
    if (a.Ne && a.hasOwnProperty(b)) return a.Ne;
    var c = new a();
    a.Ne = c;
    a.hasOwnProperty(b);
    return c;
  };
  var gd = function () {
    var a = {};
    this.m = function () {
      var b = fd.m,
        c = fd.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[fd.m] = !0;
    };
  };
  var id = [];
  function jd() {
    var a = fb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: kd,
        update: ld,
        addListener: md,
        notifyListeners: nd,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function kd(a, b, c, d, e, f) {
    var g = jd();
    !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q &&
          B.setTimeout(function () {
            l[a] === t &&
              t.quiet &&
              ((t.quiet = !1), od(a), nd(), $c("TAGGING", 2));
          }, f);
      }
    }
  }
  function ld(a, b) {
    var c = jd();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = pd(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = pd(a);
      f.quiet ? ((f.quiet = !1), od(a)) : g !== d && od(a);
    }
  }
  function md(a, b) {
    id.push({ Ee: a, Fi: b });
  }
  function od(a) {
    for (var b = 0; b < id.length; ++b) {
      var c = id[b];
      ta(c.Ee) && -1 !== c.Ee.indexOf(a) && (c.Lg = !0);
    }
  }
  function nd(a) {
    for (var b = 0; b < id.length; ++b) {
      var c = id[b];
      if (c.Lg) {
        c.Lg = !1;
        try {
          c.Fi({ consentEventId: a });
        } catch (d) {}
      }
    }
  }
  var pd = function (a) {
      var b = jd();
      b.accessedAny = !0;
      var c = b.entries[a] || {};
      return void 0 !== c.update ? c.update : c.initial;
    },
    qd = function (a) {
      var b = jd();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    rd = function (a) {
      var b = jd();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    sd = function () {
      if (!hd().m()) return !1;
      var a = jd();
      a.accessedAny = !0;
      return a.active;
    },
    td = function () {
      var a = jd();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    ud = function (a, b) {
      jd().addListener(a, b);
    },
    wd = function (a) {
      jd().notifyListeners(a);
    },
    xd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!rd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ud(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    yd = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === pd(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        ud(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ee = g), a(f));
        });
    };
  function zd() {}
  function Ad() {}
  function Bd(a) {
    for (var b = [], c = 0; c < Cd.length; c++) {
      var d = a(Cd[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Cd = [K.C, K.M],
    Dd = function (a) {
      var b = a[K.ff];
      b && ed(40);
      var c = a[K.hf];
      c && ed(41);
      for (
        var d = ta(b) ? b : [b], e = { Xb: 0 };
        e.Xb < d.length;
        e = { Xb: e.Xb }, ++e.Xb
      )
        Ba(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== K.ff && g !== K.hf) {
                var m = d[f.Xb],
                  n = Yc.xi,
                  p = Yc.pj;
                jd().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    Ed = 0,
    Fd = function (a, b) {
      Ba(a, function (e, f) {
        jd().update(e, f);
      });
      wd(b);
      var c = Ia(),
        d = c - Ed;
      Ed && 0 <= d && 1e3 > d && ed(66);
      Ed = c;
    },
    Gd = function (a) {
      var b = pd(a);
      return void 0 != b ? b : !0;
    },
    Hd = function () {
      return "G1" + Bd(pd);
    },
    Id = function () {
      return "G1" + Bd(qd);
    },
    Jd = function (a, b) {
      yd(a, b);
    },
    Kd = function (a, b) {
      xd(a, b);
    };
  var Md = function (a) {
      return Ld ? G.querySelectorAll(a) : null;
    },
    Nd = function (a, b) {
      if (!Ld) return null;
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
      if (!G.documentElement.contains(d)) return null;
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
    Od = !1;
  if (G.querySelectorAll)
    try {
      var Pd = G.querySelectorAll(":root");
      Pd && 1 == Pd.length && Pd[0] == G.documentElement && (Od = !0);
    } catch (a) {}
  var Ld = Od;
  var ie = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    je = function (a) {
      var b = new ie();
      b.eventModel = a;
      return b;
    },
    ke = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    le = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    qe = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    re = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    se = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    te = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    ue = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    ve = function (a, b) {
      a.onFailure = b;
      return a;
    };
  ie.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  var we = function (a) {
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
    xe = function (a, b, c) {
      function d(g) {
        Cb(g) &&
          Ba(g, function (l, m) {
            f = !0;
            e[l] = m;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.remoteConfig[b]),
        d(a.globalConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    },
    ye = function (a) {
      var b = [K.ac, K.sf, K.tf, K.uf, K.vf, K.wf, K.xf],
        c = {},
        d = !1,
        e = function (f) {
          for (var g = 0; g < b.length; g++)
            void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
          return d;
        };
      if (
        e(a.eventModel) ||
        e(a.targetConfig) ||
        e(a.containerConfig) ||
        e(a.globalConfig)
      )
        return c;
      e(a.remoteConfig);
      return c;
    },
    ze = function (a) {
      var b = [],
        c;
      for (c in a.eventModel)
        c !== K.Mb &&
          a.eventModel.hasOwnProperty(c) &&
          void 0 !== a.eventModel[c] &&
          b.push(c);
      return b;
    };
  var M = {},
    R = (B.google_tag_manager = B.google_tag_manager || {}),
    Ae = Math.random();
  M.J = "UA-126207330-4";
  M.jd = "290";
  M.W = "dataLayer";
  M.lh =
    "ChEIgK+YkAYQ/Y/gvLvdldSrARInAH4IAwHFexhdmUgHbeSXGTcCnlpjaq8pd6zisQx39zZamBlRC0/OGgLbjw\x3d\x3d";
  var Be = {
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
    Ce = { __paused: !0, __tg: !0 },
    De;
  for (De in Be) Be.hasOwnProperty(De) && (Ce[De] = !0);
  M.Kd = "www.googletagmanager.com";
  var Ee,
    Fe = M.Kd + "/gtm.js";
  Fe = M.Kd + "/gtag/js";
  Ee = Fe;
  var Ge = Ea(""),
    He = null,
    Ie = null,
    Je = "https://www.googletagmanager.com/a?id=" + M.J + "&cv=1",
    Ke = {},
    Le = {},
    Me = function () {
      var a = R.sequence || 1;
      R.sequence = a + 1;
      return a;
    };
  M.kh = "";
  var Ne = "";
  M.kd = Ne;
  var Oe = new za(),
    Pe = {},
    Qe = {},
    Te = {
      name: M.W,
      set: function (a, b) {
        Db(Oa(a, b), Pe);
        Re();
      },
      get: function (a) {
        return Se(a, 2);
      },
      reset: function () {
        Oe = new za();
        Pe = {};
        Re();
      },
    },
    Se = function (a, b) {
      return 2 != b ? Oe.get(a) : Ue(a);
    },
    Ue = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Pe, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ve = function (a, b) {
      Qe.hasOwnProperty(a) || (Oe.set(a, b), Db(Oa(a, b), Pe), Re());
    },
    Re = function (a) {
      Ba(Qe, function (b, c) {
        Oe.set(b, c);
        Db(Oa(b, void 0), Pe);
        Db(Oa(b, c), Pe);
        a && delete Qe[b];
      });
    },
    We = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ue(a) : Oe.get(a);
      "array" === Ab(d) || "object" === Ab(d) ? (c = Db(d)) : (c = d);
      return c;
    };
  var Xe,
    Ye = !1,
    Ze = function (a) {
      if (!Ye) {
        Ye = !0;
        Xe = Xe || {};
      }
      return Xe[a];
    };
  var $e = function (a) {
    if (G.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle)
      return !0;
    var c = B.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var l = g.indexOf("opacity(");
        0 <= l &&
          ((g = g.substring(l + 8, g.indexOf(")", l))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = B.getComputedStyle(d, null));
    }
    return !1;
  };
  var jf = /:[0-9]+$/,
    kf = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    nf = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = lf(a.protocol) || lf(B.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : B.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || B.location.hostname)
            .replace(jf, "")
            .toLowerCase());
      return mf(a, b, c, d, e);
    },
    mf = function (a, b, c, d, e) {
      var f,
        g = lf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = of(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(jf, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || $c("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = kf(f, e, void 0));
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
    lf = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    of = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    pf = function (a) {
      var b = G.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || $c("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(jf, "");
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
    qf = function (a) {
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
        e = pf(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var rf = {};
  var Kf = {},
    Lf = function (a, b) {
      if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a))
        return B._gtmexpgrp[a];
      void 0 === Kf[a] && (Kf[a] = Math.floor(Math.random() * b));
      return Kf[a];
    };
  var Mf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 != c ? b ^ (c >> 21) : b);
    return b;
  };
  var Nf = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Of = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Pf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Qf(a) {
    return "null" !== a.origin;
  }
  var Tf = function (a, b, c, d) {
      return Rf(d) ? Nf(a, String(b || Sf()), c) : [];
    },
    Wf = function (a, b, c, d, e) {
      if (Rf(e)) {
        var f = Uf(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Vf(
            f,
            function (g) {
              return g.sd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Vf(
            f,
            function (g) {
              return g.Fc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Xf(a, b, c, d) {
    var e = Sf(),
      f = window;
    Qf(f) && (f.document.cookie = a);
    var g = Sf();
    return e != g || (void 0 != c && 0 <= Tf(b, g, !1, d).indexOf(c));
  }
  var eg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!Rf(c.Va)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = bg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.Sj);
      f = d(f, "samesite", c.Uj);
      c.Vj && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = cg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!dg(q, c.path) && Xf(t, a, b, c.Va)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return dg(m, c.path) ? 1 : Xf(f, a, b, c.Va) ? 0 : 1;
    },
    fg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return eg(a, b, c);
    };
  function Vf(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Uf(a, b, c) {
    for (var d = [], e = Tf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), sd: 1 * m[0] || 1, Fc: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var bg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    gg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    hg = /(^|\.)doubleclick\.net$/i,
    dg = function (a, b) {
      return (
        hg.test(window.document.location.hostname) || ("/" === b && gg.test(a))
      );
    },
    Sf = function () {
      return Qf(window) ? window.document.cookie : "";
    },
    cg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      hg.test(e) || gg.test(e) || a.push("none");
      return a;
    },
    Rf = function (a) {
      if (!hd().m() || !a || !sd()) return !0;
      if (!rd(a)) return !1;
      var b = pd(a);
      return null == b ? !0 : !!b;
    };
  var ig = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Mf(a) & 2147483647)) : String(b);
    },
    jg = function (a) {
      return [ig(a), Math.round(Ia() / 1e3)].join(".");
    },
    mg = function (a, b, c, d, e) {
      var f = kg(b);
      return Wf(a, f, lg(c), d, e);
    },
    ng = function (a, b, c, d) {
      var e = "" + kg(c),
        f = lg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    kg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    lg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function og(a, b, c) {
    var d,
      e = Number(null != a.xb ? a.xb : void 0);
    0 !== e && (d = new Date((b || Ia()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var pg = ["1"],
    qg = {},
    rg = {},
    vg = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = sg(a.prefix);
      if (!qg[c] && !tg(c, a.path, a.domain) && b) {
        var d = sg(a.prefix),
          e = jg();
        if (0 === ug(d, e, a)) {
          var f = fb("google_tag_data", {});
          f._gcl_au ? $c("GTM", 57) : (f._gcl_au = e);
        }
        tg(c, a.path, a.domain);
      }
    };
  function ug(a, b, c, d) {
    var e = ng(b, "1", c.domain, c.path),
      f = og(c, d);
    f.Va = "ad_storage";
    return fg(a, e, f);
  }
  function tg(a, b, c) {
    var d = mg(a, b, c, pg, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((qg[a] = e.slice(0, 2).join(".")),
        (rg[a] = { id: e.slice(2, 4).join("."), Cg: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (rg[a] = { id: e.slice(0, 2).join("."), Cg: Number(e[2]) || 0 })
      : (qg[a] = d);
    return !0;
  }
  function sg(a) {
    return (a || "_gcl") + "_au";
  }
  var wg = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
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
          bf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function xg(a, b) {
    var c = wg(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].bf] || (d[c[e].bf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), va: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].bf].push(g);
      }
    }
    return d;
  }
  function yg() {
    for (var a = zg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ag() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var zg, Bg;
  function Cg(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Bg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    zg = zg || Ag();
    Bg = Bg || yg();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Dg;
  var Hg = function () {
      var a = Eg,
        b = Fg,
        c = Gg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        qb(G, "mousedown", d);
        qb(G, "keyup", d);
        qb(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Ig = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Gg().decorators.push(f);
    },
    Jg = function (a, b, c) {
      for (var d = Gg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== G.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && La(e, g.callback());
        }
      }
      return e;
    };
  function Gg() {
    var a = fb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Kg = /(.*?)\*(.*?)\*(.*)/,
    Lg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Mg = /^(?:www\.|m\.|amp\.)+/,
    Ng = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Og(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Qg = function (a) {
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
            g,
            l = String(d);
          zg = zg || Ag();
          Bg = Bg || yg();
          for (var m = [], n = 0; n < l.length; n += 3) {
            var p = n + 1 < l.length,
              q = n + 2 < l.length,
              t = l.charCodeAt(n),
              u = p ? l.charCodeAt(n + 1) : 0,
              r = q ? l.charCodeAt(n + 2) : 0,
              v = t >> 2,
              z = ((t & 3) << 4) | (u >> 4),
              A = ((u & 15) << 2) | (r >> 6),
              y = r & 63;
            q || ((y = 64), p || (A = 64));
            m.push(zg[v], zg[z], zg[A], zg[y]);
          }
          g = m.join("");
          f.call(e, g);
        }
      }
    var w = b.join("*");
    return ["1", Pg(w), w].join("*");
  };
  function Pg(a, b) {
    var c = [
        B.navigator.userAgent,
        new Date().getTimezoneOffset(),
        db.userLanguage || db.language,
        Math.floor(Ia() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Dg)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Dg = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Dg[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Rg() {
    return function (a) {
      var b = pf(B.location.href),
        c = b.search.replace("?", ""),
        d = kf(c, "_gl", !0) || "";
      a.query = Sg(d) || {};
      var e = nf(b, "fragment").match(Og("_gl"));
      a.fragment = Sg((e && e[3]) || "") || {};
    };
  }
  function Tg(a, b) {
    var c = Og(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Ug = function (a, b) {
      b || (b = "_gl");
      var c = Ng.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Tg(b, (c[2] || "").slice(1)),
        f = Tg(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Vg = function (a) {
      var b = Rg(),
        c = Gg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (La(d, e.query), a && La(d, e.fragment));
      return d;
    },
    Sg = function (a) {
      try {
        var b = Wg(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Cg(d[e + 1]);
            c[f] = g;
          }
          $c("TAGGING", 6);
          return c;
        }
      } catch (l) {
        $c("TAGGING", 8);
      }
    };
  function Wg(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Kg.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Pg(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        $c("TAGGING", 7);
      }
    }
  }
  function Xg(a, b, c, d) {
    function e(p) {
      p = Tg(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Ng.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function Yg(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Jg(b, 1, c),
      e = Jg(b, 2, c),
      f = Jg(b, 3, c);
    if (Ma(d)) {
      var g = Qg(d);
      c ? Zg("_gl", g, a) : $g("_gl", g, a, !1);
    }
    if (!c && Ma(e)) {
      var l = Qg(e);
      $g("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              $g(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Zg(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Xg(n, p, q, void 0);
        }
  }
  function $g(a, b, c, d) {
    if (c.href) {
      var e = Xg(a, b, c.href, void 0 === d ? !1 : d);
      Wa.test(e) && (c.href = e);
    }
  }
  function Zg(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = G.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Xg(a, b, c.action);
        Wa.test(n) && (c.action = n);
      }
    }
  }
  function Eg(a) {
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
        ("http:" !== f && "https:" !== f) || Yg(e, e.hostname);
      }
    } catch (g) {}
  }
  function Fg(a) {
    try {
      if (a.action) {
        var b = nf(pf(a.action), "host");
        Yg(a, b);
      }
    } catch (c) {}
  }
  var ah = function (a, b, c, d) {
      Hg();
      Ig(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    bh = function (a, b) {
      Hg();
      Ig(a, [mf(B.location, "host", !0)], b, !0, !0);
    },
    ch = function () {
      var a = G.location.hostname,
        b = Lg.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Mg, ""),
        m = e.replace(Mg, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    dh = function (a, b) {
      return !1 === a ? !1 : a || b || ch();
    };
  var eh = {};
  var fh = /^\w+$/,
    gh = /^[\w-]+$/,
    hh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    ih = function () {
      if (!hd().m() || !sd()) return !0;
      var a = pd("ad_storage");
      return null == a ? !0 : !!a;
    },
    jh = function (a, b) {
      rd("ad_storage")
        ? ih()
          ? a()
          : yd(a, "ad_storage")
        : b
        ? $c("TAGGING", 3)
        : xd(
            function () {
              jh(a, !0);
            },
            ["ad_storage"]
          );
    },
    lh = function (a) {
      return kh(a).map(function (b) {
        return b.va;
      });
    },
    kh = function (a) {
      var b = [];
      if (!Qf(B) || !G.cookie) return b;
      var c = Tf(a, G.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Nc: d.Nc }, e++) {
        var f = mh(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.Nc = g.va;
          var m = g.timestamp,
            n = g.labels,
            p = ua(
              b,
              (function (q) {
                return function (t) {
                  return t.va === q.Nc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = nh(p.labels, n || [])))
            : b.push({ version: l, va: d.Nc, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return oh(b);
    };
  function nh(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function ph(a) {
    return a && "string" == typeof a && a.match(fh) ? a : "_gcl";
  }
  var rh = function () {
      var a = pf(B.location.href),
        b = nf(a, "query", !1, void 0, "gclid"),
        c = nf(a, "query", !1, void 0, "gclsrc"),
        d = nf(a, "query", !1, void 0, "wbraid"),
        e = nf(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || kf(f, "gclid", void 0);
        c = c || kf(f, "gclsrc", void 0);
        d = d || kf(f, "wbraid", void 0);
      }
      return qh(b, c, e, d);
    },
    qh = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && gh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(gh))
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
    th = function (a) {
      var b = rh();
      jh(function () {
        sh(b, !1, a);
      });
    };
  function sh(a, b, c, d, e) {
    function f(z, A) {
      var y = uh(z, g);
      y && (fg(y, A, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = ph(c.prefix);
    d = d || Ia();
    var l = og(c, d, !0);
    l.Va = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (z) {
        var A = ["GCL", n, z];
        0 < e.length && A.push(e.join("."));
        return A.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == eh.enable_gbraid_cookie_write
        ? 0
        : eh.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        t = uh("gb", g),
        u = !1;
      if (!b)
        for (var r = kh(t), v = 0; v < r.length; v++)
          r[v].va === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var wh = function (a, b) {
      var c = Vg(!0);
      jh(function () {
        for (var d = ph(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== hh[f]) {
            var g = uh(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(vh(l), Ia()),
                n;
              b: {
                var p = m;
                if (Qf(B))
                  for (
                    var q = Tf(g, G.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (vh(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = og(b, m, !0);
                u.Va = "ad_storage";
                fg(g, l, u);
              }
            }
          }
        }
        sh(qh(c.gclid, c.gclsrc), !1, b);
      });
    },
    uh = function (a, b) {
      var c = hh[a];
      if (void 0 !== c) return b + c;
    },
    vh = function (a) {
      return 0 !== xh(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function mh(a) {
    var b = xh(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          va: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function xh(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !gh.test(a[2])
      ? []
      : a;
  }
  var yh = function (a, b, c, d, e) {
      if (ta(b) && Qf(B)) {
        var f = ph(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = uh(a[m], f);
              if (n) {
                var p = Tf(n, G.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        jh(function () {
          ah(g, b, c, d);
        });
      }
    },
    oh = function (a) {
      return a.filter(function (b) {
        return gh.test(b.va);
      });
    },
    zh = function (a, b) {
      if (Qf(B)) {
        for (var c = ph(b.prefix), d = {}, e = 0; e < a.length; e++)
          hh[a[e]] && (d[a[e]] = hh[a[e]]);
        jh(function () {
          Ba(d, function (f, g) {
            var l = Tf(c + g, G.cookie, void 0, "ad_storage");
            l.sort(function (u, r) {
              return vh(r) - vh(u);
            });
            if (l.length) {
              var m = l[0],
                n = vh(m),
                p = 0 !== xh(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== xh(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              sh(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ah(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Bh = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (sd()) {
      var c = rh();
      if (Ah(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        bh(function () {
          return d;
        }, 3);
        bh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Ch(a, b) {
    var c = ph(b),
      d = uh(a, c);
    if (!d) return 0;
    for (var e = kh(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Dh(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Zh = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    $h = {
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
    ai = {
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
    bi =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var ci = function () {
      var a = !1;
      a = !0;
      return a;
    },
    ei = function (a) {
      var b = Se("gtm.allowlist") || Se("gtm.whitelist");
      b && ed(9);
      ci() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Na(Fa(b), $h),
        d = Se("gtm.blocklist") || Se("gtm.blacklist");
      d || ((d = Se("tagTypeBlacklist")) && ed(3));
      d ? ed(8) : (d = []);
      di() &&
        ((d = Fa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Fa(d).indexOf("google") && ed(2);
      var e = d && Na(Fa(d), ai),
        f = {};
      return function (g) {
        var l = g && g[Fb.sb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Le[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      ed(11);
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
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = Aa(e, m || []);
            r && ed(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Aa(e, bi));
        return (f[l] = v);
      };
    },
    di = function () {
      return Zh.test(B.location && B.location.hostname);
    };
  var fi = !1,
    gi = 0,
    hi = [];
  function ii(a) {
    if (!fi) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        fi = !0;
        for (var e = 0; e < hi.length; e++) H(hi[e]);
      }
      hi.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function ji() {
    if (!fi && 140 > gi) {
      gi++;
      try {
        G.documentElement.doScroll("left"), ii();
      } catch (a) {
        B.setTimeout(ji, 50);
      }
    }
  }
  var ki = function (a) {
    fi ? a() : hi.push(a);
  };
  var mi = function (a, b) {
      this.m = !1;
      this.D = [];
      this.I = { tags: [] };
      this.V = !1;
      this.o = this.s = 0;
      li(this, a, b);
    },
    ni = function (a, b, c, d) {
      if (Ce.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Cb(d) && (e = Db(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    oi = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    pi = function (a) {
      if (!a.m) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.D.length = 0;
      }
    },
    li = function (a, b, c) {
      ra(b) && qi(a, b);
      c &&
        B.setTimeout(function () {
          return pi(a);
        }, Number(c));
    },
    qi = function (a, b) {
      var c = Ka(function () {
        return H(function () {
          b(M.J, a.I);
        });
      });
      a.m ? c() : a.D.push(c);
    },
    ri = function (a) {
      a.s++;
      return Ka(function () {
        a.o++;
        a.V && a.o >= a.s && pi(a);
      });
    };
  var si = function () {
      function a(d) {
        return !sa(d) || 0 > d ? 0 : d;
      }
      if (!R._li && B.performance && B.performance.timing) {
        var b = B.performance.timing.navigationStart,
          c = sa(Te.get("gtm.start")) ? Te.get("gtm.start") : 0;
        R._li = { cst: a(c - b), cbt: a(Ie - b) };
      }
    },
    ti = function (a) {
      B.performance && B.performance.mark(M.J + "_" + a + "_start");
    },
    ui = function (a) {
      if (B.performance) {
        var b = M.J + "_" + a + "_start",
          c = M.J + "_" + a + "_duration";
        B.performance.measure(c, b);
        var d = B.performance.getEntriesByName(c)[0];
        B.performance.clearMarks(b);
        B.performance.clearMeasures(c);
        var e = R._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (R._p = e));
        return d.duration;
      }
    },
    vi = function () {
      if (B.performance && B.performance.now) {
        var a = R._p || {};
        a.PAGEVIEW = B.performance.now();
        R._p = a;
      }
    };
  var wi = {},
    xi = function () {
      return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject];
    },
    yi = !1;
  var zi = function (a) {
      B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
      var b = B.GoogleAnalyticsObject;
      if (B[b]) B.hasOwnProperty(b) || ed(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ha());
        B[b] = c;
      }
      si();
      return B[b];
    },
    Ai = function (a) {
      if (sd()) {
        var b = xi();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Bi() {
    return B.GoogleAnalyticsObject || "ga";
  }
  var Ci = function (a) {},
    Di = function (a, b) {
      return function () {
        var c = xi(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Ki = function (a) {},
    Oi = function (a) {},
    Pi = function () {
      return (
        "&tc=" +
        gc.filter(function (a) {
          return a;
        }).length
      );
    },
    bj = function () {
      2022 <= $i().length && aj();
    },
    cj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    ej = function () {
      dj || (dj = B.setTimeout(aj, 500));
    },
    aj = function () {
      dj && (B.clearTimeout(dj), (dj = void 0));
      void 0 === fj ||
        (gj[fj] && !hj && !ij) ||
        (jj[fj] || kj.Ti() || 0 >= lj--
          ? (ed(1), (jj[fj] = !0))
          : (kj.qj(),
            pb($i(!0)),
            (gj[fj] = !0),
            (mj = nj = oj = ij = hj = "")));
    },
    $i = function (a) {
      var b = fj;
      if (void 0 === b) return "";
      var c = cd("GTM"),
        d = cd("TAGGING");
      return [
        pj,
        gj[b] ? "" : "&es=1",
        qj[b],
        Ki(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        Pi(),
        hj,
        ij,
        oj,
        nj,
        Oi(a),
        mj,
        "&z=0",
      ].join("");
    },
    sj = function () {
      pj = rj();
    },
    rj = function () {
      return [Je, "&v=3&t=t", "&pid=" + wa(), "&rv=" + M.jd].join("");
    },
    Ni = ["L", "S", "Y"],
    Ji = ["S", "E"],
    tj = { sampleRate: "0.005000", eh: "", dh: Number("5") },
    uj =
      0 <= G.location.search.indexOf("?gtm_latency=") ||
      0 <= G.location.search.indexOf("&gtm_latency="),
    vj;
  if (!(vj = uj)) {
    var wj = Math.random(),
      xj = tj.sampleRate;
    vj = wj < xj;
  }
  var yj = vj,
    zj = {
      label: M.J + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    pj = rj(),
    gj = {},
    hj = "",
    ij = "",
    mj = "",
    nj = "",
    Mi = {},
    Li = !1,
    Ii = {},
    Aj = {},
    oj = "",
    fj = void 0,
    qj = {},
    jj = {},
    dj = void 0,
    Bj = 5;
  0 < tj.dh && (Bj = tj.dh);
  var kj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Ti: function () {
          return c < a ? !1 : Ia() - d[c % a] < b;
        },
        qj: function () {
          var f = c++ % a;
          d[f] = Ia();
        },
      };
    })(Bj, 1e3),
    lj = 1e3,
    Dj = function (a, b) {
      if (yj && !jj[a] && fj !== a) {
        aj();
        fj = a;
        mj = hj = "";
        qj[a] = "&e=" + cj(b) + "&eid=" + a;
        ej();
      }
    },
    Ej = function (a, b, c, d) {
      if (yj && b) {
        var e,
          f = String(b[Fb.sb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!jj[a]) {
          a !== fj && (aj(), (fj = a));
          hj = hj ? hj + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l)
            throw Error("Error: No function name given for function call.");
          var m = (jc[l] ? "1" : "2") + e;
          mj = mj ? mj + "." + m : "&ti=" + m;
          ej();
          bj();
        }
      }
    };
  var Lj = function (a, b, c) {
      if (yj && !jj[a]) {
        a !== fj && (aj(), (fj = a));
        var d = c + b;
        ij = ij ? ij + "." + d : "&epr=" + d;
        ej();
        bj();
      }
    },
    Mj = function (a, b, c) {};
  function Nj(a, b, c, d) {
    var e = gc[a],
      f = Oj(a, b, c, d);
    if (!f) return null;
    var g = oc(e[Fb.Zf], c, []);
    if (g && g.length) {
      var l = g[0];
      f = Nj(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.rg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Oj(a, b, c, d) {
    function e() {
      if (f[Fb.Yh]) l();
      else {
        var z = pc(f, c, []);
        var A = z[Fb.ih];
        if (null != A)
          for (var y = 0; y < A.length; y++)
            if (!Gd(A[y])) {
              l();
              return;
            }
        var w = ni(c.Qb, String(f[Fb.sb]), Number(f[Fb.$f]), z[Fb.Zh]),
          x = !1;
        z.vtp_gtmOnSuccess = function () {
          if (!x) {
            x = !0;
            var F = Ia() - D;
            Ej(c.id, gc[a], "5", F);
            oi(c.Qb, w, "success", F);
            g();
          }
        };
        z.vtp_gtmOnFailure = function () {
          if (!x) {
            x = !0;
            var F = Ia() - D;
            Ej(c.id, gc[a], "6", F);
            oi(c.Qb, w, "failure", F);
            l();
          }
        };
        z.vtp_gtmTagId = f.tag_id;
        z.vtp_gtmEventId = c.id;
        Ej(c.id, f, "1");
        var C = function () {
          var F = Ia() - D;
          Ej(c.id, f, "7", F);
          oi(c.Qb, w, "exception", F);
          x || ((x = !0), l());
        };
        var D = Ia();
        try {
          nc(z, { event: c, index: a, type: 1 });
        } catch (F) {
          C(F);
        }
      }
    }
    var f = gc[a],
      g = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Pe(f)) return null;
    var n = oc(f[Fb.ag], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Nj(p.index, { onSuccess: g, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.rg ? m : q;
    }
    if (f[Fb.Vf] || f[Fb.ci]) {
      var t = f[Fb.Vf] ? hc : c.Cj,
        u = g,
        r = l;
      if (!t[a]) {
        e = Ka(e);
        var v = Pj(a, t, e);
        g = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function Pj(a, b, c) {
    var d = [],
      e = [];
    b[a] = Qj(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Rj;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Sj;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Qj(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Rj(a) {
    a();
  }
  function Sj(a, b) {
    b();
  }
  var Tj = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    Uj = function (a) {
      var b = R.zones;
      return b ? b.checkState(M.J, a) : Tj;
    },
    Vj = function (a) {
      var b = R.zones;
      !b && a && (b = R.zones = a());
      return b;
    };
  var Yj = function (a, b) {
    for (var c = [], d = 0; d < gc.length; d++)
      if (a[d]) {
        var e = gc[d];
        var f = ri(b.Qb);
        try {
          var g = Nj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = jc[p];
            m.call(l, {
              Wg: n,
              Mg: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Wj(d, b), f();
        } catch (r) {
          f();
        }
      }
    var t = b.Qb;
    t.V = !0;
    t.o >= t.s && pi(t);
    c.sort(Xj);
    for (var u = 0; u < c.length; u++) c[u].execute();
    return 0 < c.length;
  };
  function Xj(a, b) {
    var c,
      d = b.Mg,
      e = a.Mg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Wg,
        l = b.Wg;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function Wj(a, b) {
    if (!yj) return;
    var c = function (d) {
      var e = b.Pe(gc[d]) ? "3" : "4",
        f = oc(gc[d][Fb.Zf], b, []);
      f && f.length && c(f[0].index);
      Ej(b.id, gc[d], e);
      var g = oc(gc[d][Fb.ag], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Zj = !1;
  var ek = function (a) {
    var b = Ia(),
      c = a["gtm.uniqueEventId"],
      d = a.event;
    if ("gtm.js" === d) {
      if (Zj) return !1;
      Zj = !0;
    }
    var g = Uj(c),
      l = !1;
    if (!g.active) {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      l = !0;
      g = Uj(Number.MAX_SAFE_INTEGER);
    }
    Dj(c, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = m;
    var q = {
        id: c,
        name: d,
        Pe: ei(g.isAllowed),
        Cj: [],
        Fg: function () {
          ed(6);
        },
        lg: ak(),
        mg: bk(c),
        Qb: new mi(p, n),
      },
      t = tc(q);
    l && (t = ck(t));
    var u = Yj(t, q);
    ("gtm.js" !== d && "gtm.sync" !== d) || Ci(M.J);
    return dk(t, u);
  };
  function bk(a) {
    return function (b) {
      yj && (Eb(b) || Mj(a, "input", b));
    };
  }
  function ak() {
    var a = {};
    a.event = We("event", 1);
    a.ecommerce = We("ecommerce", 1);
    a.gtm = We("gtm");
    a.eventModel = We("eventModel");
    return a;
  }
  function ck(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        Be[String(gc[c][Fb.sb])] && (b[c] = !0);
        void 0 !== gc[c][Fb.di] && (b[c] = !0);
      }
    return b;
  }
  function dk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && gc[c] && !Ce[String(gc[c][Fb.sb])]) return !0;
    return !1;
  }
  function fk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return pf("" + c + b).href;
    }
  }
  function gk(a, b) {
    return hk() ? fk(a, b) : void 0;
  }
  function hk() {
    var a = !1;
    return a;
  }
  function ik() {
    return !!M.kd && "SGTM_TOKEN" !== M.kd.replaceAll("@@", "");
  }
  var jk = function () {
    var a = !1;
    return a;
  };
  var kk;
  if (3 === M.jd.length) kk = "g";
  else {
    var lk = "G";
    lk = "g";
    kk = lk;
  }
  var mk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: kk,
      OPT: "o",
    },
    nk = function (a) {
      var b = M.J.split("-"),
        c = b[0].toUpperCase(),
        d = mk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === M.jd.length) {
        var g = "w";
        g = jk() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + M.jd + e;
    };
  function ok(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var pk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function qk() {
    return Ya("iPhone") && !Ya("iPod") && !Ya("iPad");
  }
  Ya("Opera");
  Ya("Trident") || Ya("MSIE");
  Ya("Edge");
  !Ya("Gecko") ||
    (-1 != Xa().toLowerCase().indexOf("webkit") && !Ya("Edge")) ||
    Ya("Trident") ||
    Ya("MSIE") ||
    Ya("Edge");
  -1 != Xa().toLowerCase().indexOf("webkit") && !Ya("Edge") && Ya("Mobile");
  Ya("Macintosh");
  Ya("Windows");
  Ya("Linux") || Ya("CrOS");
  var rk = na.navigator || null;
  rk && (rk.appVersion || "").indexOf("X11");
  Ya("Android");
  qk();
  Ya("iPad");
  Ya("iPod");
  qk() || Ya("iPad") || Ya("iPod");
  Xa().toLowerCase().indexOf("kaios");
  var sk = function (a) {
    if (!a || !G.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var tk = function () {};
  var uk = function (a) {
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
    vk = function (a, b) {
      this.o = a;
      this.m = null;
      this.D = {};
      this.V = 0;
      this.I = void 0 === b ? 500 : b;
      this.s = null;
    };
  ma(vk, tk);
  vk.prototype.addEventListener = function (a) {
    var b = {},
      c = Pf(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.I &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.I));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = uk(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      wk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  vk.prototype.removeEventListener = function (a) {
    a && a.listenerId && wk(this, "removeEventListener", null, a.listenerId);
  };
  var yk = function (a, b, c) {
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
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = xk(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && xk(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? xk(a.purpose.legitimateInterests, b) &&
                xk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    xk = function (a, b) {
      return !(!a || !a[b]);
    },
    wk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (zk(a)) {
        Ak(a);
        var f = ++a.V;
        a.D[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    zk = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    Ak = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.D[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        pk(a.o, a.s));
    };
  var Bk = !0;
  Bk = !1;
  var Ck = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Dk = ok("", 550),
    Ek = ok("", 500);
  function Fk() {
    var a = R.tcf || {};
    return (R.tcf = a);
  }
  var Kk = function () {
    var a = Fk(),
      b = new vk(B, Bk ? 3e3 : -1);
    if (
      !0 === B.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof B.__tcfapi ||
        "function" === typeof b.o.__tcfapi ||
        null != zk(b))
    ) {
      a.active = !0;
      a.Hc = {};
      Gk();
      var c = null;
      Bk
        ? (c = B.setTimeout(function () {
            Hk(a);
            Ik(a);
            c = null;
          }, Ek))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Hk(a), Ik(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Jk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Ck)
                if (Ck.hasOwnProperty(g))
                  if ("1" === g) {
                    var l = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var p = l;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = uk(p)),
                        (n =
                          "error" === p.cmpStatus ||
                          0 !== p.internalErrorState ||
                          ("loaded" === p.cmpStatus &&
                            ("tcloaded" === p.eventStatus ||
                              "useractioncomplete" === p.eventStatus))
                            ? !0
                            : !1));
                    f["1"] = n
                      ? !1 === l.gdprApplies ||
                        "tcunavailable" === l.tcString ||
                        (void 0 === l.gdprApplies && !m) ||
                        "string" !== typeof l.tcString ||
                        !l.tcString.length
                        ? !0
                        : yk(l, "1", 0)
                      : !1;
                  } else f[g] = yk(d, g, Ck[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Hc = e), Ik(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Hk(a), Ik(a);
      }
    }
  };
  function Hk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Bk && (a.Hc = Jk());
  }
  function Gk() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Dk), a);
    Dd(b);
  }
  function Jk() {
    var a = {},
      b;
    for (b in Ck) Ck.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Ik(a) {
    var b = {},
      c = ((b.ad_storage = a.Hc["1"] ? "granted" : "denied"), b);
    Fd(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Lk() });
  }
  var Lk = function () {
      var a = Fk();
      return a.active ? a.tcString || "" : "";
    },
    Mk = function () {
      var a = Fk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Nk = function (a) {
      if (!Ck.hasOwnProperty(String(a))) return !0;
      var b = Fk();
      return b.active && b.Hc ? !!b.Hc[String(a)] : !0;
    };
  var Uk = !1;
  var Vk = function () {
      this.m = {};
    },
    Wk = function (a, b, c) {
      null != c && (a.m[b] = c);
    },
    Xk = function (a) {
      return Object.keys(a.m)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
        })
        .join("&");
    },
    Zk = function (a, b, c, d, e) {};
  var al = /[A-Z]+/,
    bl = /\s/,
    cl = function (a) {
      if (k(a)) {
        a = Ga(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (al.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (bl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], K: d };
          }
        }
      }
    },
    el = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = cl(a[c]);
        d && (b[d.id] = d);
      }
      dl(b);
      var e = [];
      Ba(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function dl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var gl = function (a, b, c, d) {
      return (2 === fl() || d || "http:" != B.location.protocol ? a : b) + c;
    },
    fl = function () {
      var a = nb(),
        b;
      if (1 === a)
        a: {
          var c = Ee;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = G.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var il = function (a, b, c) {
      if (B[a.functionName]) return b.Ve && H(b.Ve), B[a.functionName];
      var d = hl();
      B[a.functionName] = d;
      if (a.od)
        for (var e = 0; e < a.od.length; e++) B[a.od[e]] = B[a.od[e]] || hl();
      a.Ad && void 0 === B[a.Ad] && (B[a.Ad] = c);
      mb(gl("https://", "http://", a.af), b.Ve, b.dj);
      return d;
    },
    hl = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    jl = {
      functionName: "_googWcmImpl",
      Ad: "_googWcmAk",
      af: "www.gstatic.com/wcm/loader.js",
    },
    kl = {
      functionName: "_gaPhoneImpl",
      Ad: "ga_wpid",
      af: "www.gstatic.com/gaphone/loader.js",
    },
    ll = { hh: "", ei: "5" },
    ml = {
      functionName: "_googCallTrackingImpl",
      od: [kl.functionName, jl.functionName],
      af:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (ll.hh || ll.ei) +
        ".js",
    },
    nl = {},
    ol = function (a, b, c, d) {
      ed(22);
      if (c) {
        d = d || {};
        var e = il(jl, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Ua && (f.autoreplace = c);
        e(2, d.Ua, f, c, 0, Ha(), d.options);
      }
    },
    pl = function (a, b, c, d) {
      ed(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ha(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          nl[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
              ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (nl[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (nl[g.id] = !0)));
        }
        (e.gaData || e.adData) && il(ml, d)(d.Ua, e, d.options);
      }
    },
    ql = function () {
      var a = !1;
      return a;
    },
    rl = function (a, b) {
      if (a)
        if (jk()) {
        } else {
          if (k(a)) {
            var c = cl(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(K.Kh);
          if (f && ta(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = cl(f[g]);
              l &&
                (d.push(l),
                (a.id === l.id ||
                  (a.id === a.containerId &&
                    a.containerId === l.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var m = b.getWithConfig(K.Jf),
              n;
            if (m) {
              ta(m) ? (n = m) : (n = [m]);
              var p = b.getWithConfig(K.Hf),
                q = b.getWithConfig(K.If),
                t = b.getWithConfig(K.Kf),
                u = b.getWithConfig(K.Jh),
                r = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var z = 0; z < n.length; z++)
                if (z < v)
                  if (d) pl(d, n[z], u, { Ua: r, options: t });
                  else if ("AW" === a.prefix && a.K[1])
                    ql()
                      ? pl([a], n[z], u || "US", { Ua: r, options: t })
                      : ol(a.K[0], a.K[1], n[z], { Ua: r, options: t });
                  else if ("UA" === a.prefix)
                    if (ql()) pl([a], n[z], u || "US", { Ua: r });
                    else {
                      var A = a.containerId,
                        y = n[z],
                        w = { Ua: r };
                      ed(23);
                      if (y) {
                        w = w || {};
                        var x = il(kl, w, A),
                          C = {};
                        void 0 !== w.Ua ? (C.receiver = w.Ua) : (C.replace = y);
                        C.ga_wpid = A;
                        C.destination = y;
                        x(2, Ha(), C);
                      }
                    }
            }
          }
        }
    };
  var zl = !1;
  function Al() {
    if (ra(db.joinAdInterestGroup)) return !0;
    zl || (sk(""), (zl = !0));
    return ra(db.joinAdInterestGroup);
  }
  function Bl(a, b) {
    var c = void 0;
    try {
      c = G.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ia() - d) {
        $c("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          G.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          $c("TAGGING", 10);
          return;
        }
      } catch (e) {}
    ob(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ia() },
      c
    );
  }
  var xm = function () {
      var a = !0;
      (Nk(7) && Nk(9) && Nk(10)) || (a = !1);
      return a;
    },
    ym = function () {
      var a = !0;
      (Nk(3) && Nk(4)) || (a = !1);
      return a;
    };
  var Cm = function (a, b) {
      var c = b.getWithConfig(K.Ra),
        d = b.getWithConfig(K.cb),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        zm.hasOwnProperty(c)
          ? (f = zm[c])
          : Am.hasOwnProperty(c) && (f = Am[c]);
        1 === f && (f = Bm(c));
        k(f)
          ? xi()(function () {
              var g = xi().getByName(a).get(f);
              d(g);
            })
          : d(void 0);
      } else d(e);
    },
    Dm = function (a, b) {
      var c = a[K.hc],
        d = b + ".",
        e = a[K.N] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[K.Lb];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = xi();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, g);
    },
    Hm = function (a, b, c) {
      if (sd() && (!c.isGtmEvent || !Em[a])) {
        var d = !Gd(K.M),
          e = function (f) {
            var g,
              l,
              m = xi(),
              n = Fm(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || Gm(b, n.createOnlyFields)) {
              var t = !0;
              if (c.isGtmEvent) {
                g = "gtm" + Me();
                l = n.createOnlyFields;
                n.gtmTrackerName && (l.name = g);
                t = !1;
                t = !0;
              }
              t &&
                m(function () {
                  var r = m.getByName(b);
                  r && (p = r.get("clientId"));
                  c.isGtmEvent || m.remove(b);
                });
              m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
              d &&
                Gd(K.M) &&
                ((d = !1),
                m(function () {
                  var r = xi().getByName(c.isGtmEvent ? g : b);
                  !r ||
                    (r.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = K.Jd[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = K.Jd[f])),
                    r.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? r.send("pageview")
                      : r.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        Jd(function () {
          return e(K.M);
        }, K.M);
        Jd(function () {
          return e(K.C);
        }, K.C);
        c.isGtmEvent && (Em[a] = !0);
      }
    },
    Im = function (a, b) {
      ik() && b && (a[K.pb] = b);
    },
    Rm = function (a, b, c) {
      function d() {
        var J = c.getWithConfig(K.bc);
        l(function () {
          if (!c.isGtmEvent && Cb(J)) {
            var I = r.fieldsToSend,
              O = m().getByName(n),
              N;
            for (N in J)
              if (
                J.hasOwnProperty(N) &&
                /^(dimension|metric)\d+$/.test(N) &&
                void 0 != J[N]
              ) {
                var L = O.get(Bm(J[N]));
                Jm(I, N, L);
              }
          }
        });
      }
      function e() {
        if (r.displayfeatures) {
          var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: J });
        }
      }
      var f = a,
        g =
          "/leagueoflegend/wp-content/cache/busting/google-tracking/ga-d40531c5e99a6f84e42535859476fe35.js",
        l = c.isGtmEvent ? zi(c.getWithConfig("gaFunctionName")) : zi();
      if (ra(l)) {
        var m = xi,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (J) {
            var I = [].slice.call(arguments, 0);
            I[0] = n ? n + "." + I[0] : "" + I[0];
            l.apply(window, I);
          },
          q = function (J) {
            var I = function (S, qa) {
                for (var va = 0; qa && va < qa.length; va++) p(S, qa[va]);
              },
              O = c.isGtmEvent,
              N = O ? Km(r) : Lm(b, c);
            if (N) {
              var L = {};
              Im(L, J);
              p("require", "ec", "ec.js", L);
              O && N.Fe && p("set", "&cu", N.Fe);
              var Q = N.action;
              if (O || "impressions" === Q)
                if ((I("ec:addImpression", N.Bg), !O)) return;
              if ("promo_click" === Q || "promo_view" === Q || (O && N.Gc)) {
                var da = N.Gc;
                I("ec:addPromo", da);
                if (da && 0 < da.length && "promo_click" === Q) {
                  O ? p("ec:setAction", Q, N.jb) : p("ec:setAction", Q);
                  return;
                }
                if (!O) return;
              }
              "promo_view" !== Q &&
                "impressions" !== Q &&
                (I("ec:addProduct", N.yb), p("ec:setAction", Q, N.jb));
            }
          },
          t = function (J) {
            if (J) {
              var I = {};
              if (Cb(J))
                for (var O in Mm) Mm.hasOwnProperty(O) && Nm(Mm[O], O, J[O], I);
              Im(I, A);
              p("require", "linkid", I);
            }
          },
          u = function () {
            if (jk()) {
            } else {
              var J = c.getWithConfig(K.Ih);
              J &&
                (p("require", J, { dataLayer: M.W }), p("require", "render"));
            }
          },
          r = Fm(n, b, c),
          v = function (J, I, O) {
            O && (I = "" + I);
            r.fieldsToSend[J] = I;
          };
        !c.isGtmEvent &&
          Gm(n, r.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (Om[n] = !1));
        l("create", f, r.createOnlyFields);
        if (r.createOnlyFields[K.pb] && !c.isGtmEvent) {
          var z = gk(r.createOnlyFields[K.pb], "/analytics.js");
          z && (g = z);
        }
        var A = c.isGtmEvent ? r.fieldsToSet[K.pb] : r.createOnlyFields[K.pb];
        if (A) {
          var y = c.isGtmEvent ? r.fieldsToSet[K.Wc] : r.createOnlyFields[K.Wc];
          y && !Om[n] && ((Om[n] = !0), l(Di(n, y)));
        }
        c.isGtmEvent
          ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), t(r.linkAttribution));
        var w = r[K.ka];
        w && w[K.N] && Dm(w, n);
        p("set", r.fieldsToSet);
        if (c.isGtmEvent) {
          if (r.enableLinkId) {
            var x = {};
            Im(x, A);
            p("require", "linkid", "linkid.js", x);
          }
          sd() && Hm(f, n, c);
        }
        if (b === K.Zb)
          if (c.isGtmEvent) {
            e();
            if (r.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(A);
            p("send", "pageview");
            r.createOnlyFields._useUp && Ai(n + ".");
          } else u(), p("send", "pageview", r.fieldsToSend);
        else
          b === K.Aa
            ? (u(),
              rl(f, c),
              c.getWithConfig(K.ib) && (Bh(["aw", "dc"]), Ai(n + ".")),
              0 != r.sendPageView && p("send", "pageview", r.fieldsToSend),
              Hm(f, n, c),
              !c.isGtmEvent &&
                0 < ze(c).length &&
                (ed(68), 1 < R.configCount && ed(69)))
            : b === K.Oa
            ? Cm(n, c)
            : "screen_view" === b
            ? p("send", "screenview", r.fieldsToSend)
            : "timing_complete" === b
            ? ((r.fieldsToSend.hitType = "timing"),
              v("timingCategory", r.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", r.timingVar, !0)
                : v("timingVar", r.name, !0),
              v("timingValue", Da(r.value)),
              void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
              p("send", r.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", r.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((r.fieldsToSend.hitType = "social"),
                  v("socialNetwork", r.socialNetwork, !0),
                  v("socialAction", r.socialAction, !0),
                  v("socialTarget", r.socialTarget, !0))
                : ((c.isGtmEvent || Pm[b]) && q(A),
                  c.isGtmEvent && e(),
                  (r.fieldsToSend.hitType = "event"),
                  v("eventCategory", r.eventCategory, !0),
                  v("eventAction", r.eventAction || b, !0),
                  void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                  void 0 !== r.value && v("eventValue", Da(r.value))),
              p("send", r.fieldsToSend));
        var D = !1;
        var F = Qm;
        D && (F = c.getContainerTypeLoaded("UA"));
        if (!F && !c.isGtmEvent) {
          Qm = !0;
          D && c.setContainerTypeLoaded("UA", !0);
          si();
          var E = function () {
              D && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            P = function () {
              m().loaded || E();
            };
          jk() ? H(P) : mb(g, P, E);
        }
      } else H(c.onFailure);
    },
    Sm = function (a, b, c, d) {
      Kd(
        function () {
          Rm(a, b, d);
        },
        [K.M, K.C]
      );
    },
    Um = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var t = 0; t < q.length; t++) {
            var u = q[t];
            if (f[u]) {
              m[p] = f[u];
              break;
            }
          }
        }
        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var p = "", q = 0; q < Tm.length; q++)
              void 0 !== f[Tm[q]] && (p && (p += "/"), (p += f[Tm[q]]));
            p && (m.category = p);
          }
        }
        var m = Db(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            l();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && Cb(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    Vm = function (a) {
      return Gd(a);
    },
    Wm = !1;
  var Qm,
    Om = {},
    Em = {},
    Xm = {},
    zm = Object.freeze(
      ((Xm.client_storage = "storage"),
      (Xm.sample_rate = 1),
      (Xm.site_speed_sample_rate = 1),
      (Xm.store_gac = 1),
      (Xm.use_amp_client_id = 1),
      (Xm[K.$a] = 1),
      (Xm[K.oa] = "storeGac"),
      (Xm[K.ja] = 1),
      (Xm[K.qa] = 1),
      (Xm[K.Ha] = 1),
      (Xm[K.Hb] = 1),
      (Xm[K.ab] = 1),
      (Xm[K.Ib] = 1),
      Xm)
    ),
    Ym = {},
    Zm = Object.freeze(
      ((Ym._cs = 1),
      (Ym._useUp = 1),
      (Ym.allowAnchor = 1),
      (Ym.allowLinker = 1),
      (Ym.alwaysSendReferrer = 1),
      (Ym.clientId = 1),
      (Ym.cookieDomain = 1),
      (Ym.cookieExpires = 1),
      (Ym.cookieFlags = 1),
      (Ym.cookieName = 1),
      (Ym.cookiePath = 1),
      (Ym.cookieUpdate = 1),
      (Ym.legacyCookieDomain = 1),
      (Ym.legacyHistoryImport = 1),
      (Ym.name = 1),
      (Ym.sampleRate = 1),
      (Ym.siteSpeedSampleRate = 1),
      (Ym.storage = 1),
      (Ym.storeGac = 1),
      (Ym.useAmpClientId = 1),
      (Ym._cd2l = 1),
      Ym)
    ),
    $m = Object.freeze({ anonymize_ip: 1 }),
    an = {},
    Am = Object.freeze(
      ((an.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (an.app_id = 1),
      (an.app_installer_id = 1),
      (an.app_name = 1),
      (an.app_version = 1),
      (an.description = "exDescription"),
      (an.fatal = "exFatal"),
      (an.language = 1),
      (an.page_hostname = "hostname"),
      (an.transport_type = "transport"),
      (an[K.ca] = "currencyCode"),
      (an[K.Ff] = 1),
      (an[K.Sa] = "location"),
      (an[K.ie] = "page"),
      (an[K.Ia] = "referrer"),
      (an[K.ic] = "title"),
      (an[K.Nf] = 1),
      (an[K.Ca] = 1),
      an)
    ),
    bn = {},
    cn = Object.freeze(
      ((bn.content_id = 1),
      (bn.event_action = 1),
      (bn.event_category = 1),
      (bn.event_label = 1),
      (bn.link_attribution = 1),
      (bn.name = 1),
      (bn[K.ka] = 1),
      (bn[K.Ef] = 1),
      (bn[K.la] = 1),
      (bn[K.ia] = 1),
      bn)
    ),
    dn = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    Tm = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    en = {},
    Mm = Object.freeze(
      ((en.levels = 1), (en[K.qa] = "duration"), (en[K.Hb] = 1), en)
    ),
    fn = {},
    gn = Object.freeze(
      ((fn.anonymize_ip = 1),
      (fn.fatal = 1),
      (fn.send_page_view = 1),
      (fn.store_gac = 1),
      (fn.use_amp_client_id = 1),
      (fn[K.oa] = 1),
      (fn[K.Ff] = 1),
      fn)
    ),
    Nm = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (gn[b] && (c = Ea(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Bm(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Bm = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    hn = {},
    Pm = Object.freeze(
      ((hn.checkout_progress = 1),
      (hn.select_content = 1),
      (hn.set_checkout_option = 1),
      (hn[K.Db] = 1),
      (hn[K.Eb] = 1),
      (hn[K.nb] = 1),
      (hn[K.ob] = 1),
      (hn[K.Fb] = 1),
      (hn[K.ya] = 1),
      (hn[K.Gb] = 1),
      (hn[K.za] = 1),
      hn)
    ),
    jn = {},
    kn = Object.freeze(
      ((jn.checkout_progress = 1),
      (jn.set_checkout_option = 1),
      (jn[K.qf] = 1),
      (jn[K.Db] = 1),
      (jn[K.Eb] = 1),
      (jn[K.nb] = 1),
      (jn[K.ya] = 1),
      (jn[K.Gb] = 1),
      (jn[K.rf] = 1),
      jn)
    ),
    ln = {},
    mn = Object.freeze(
      ((ln.generate_lead = 1),
      (ln.login = 1),
      (ln.search = 1),
      (ln.select_content = 1),
      (ln.share = 1),
      (ln.sign_up = 1),
      (ln.view_search_results = 1),
      (ln[K.ob] = 1),
      (ln[K.Fb] = 1),
      (ln[K.za] = 1),
      ln)
    ),
    nn = function (a) {
      var b = "general";
      kn[a]
        ? (b = "ecommerce")
        : mn[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    on = {},
    pn = Object.freeze(
      ((on.view_search_results = 1),
      (on[K.ob] = 1),
      (on[K.Fb] = 1),
      (on[K.za] = 1),
      on)
    ),
    Jm = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    qn = function (a) {
      if (ta(a)) {
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
    Fm = function (a, b, c) {
      var d = function (P) {
          return c.getWithConfig(P);
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = qn(d(K.Hh));
      !c.isGtmEvent && m && Jm(f, "exp", m);
      g["&gtm"] = nk(!0);
      sd() && (l._cs = Vm);
      var n = d(K.bc);
      if (!c.isGtmEvent && Cb(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && Jm(f, p, q);
          }
      for (var t = we(c), u = 0; u < t.length; ++u) {
        var r = t[u];
        if (c.isGtmEvent) {
          var v = d(r);
          dn.hasOwnProperty(r)
            ? (e[r] = v)
            : Zm.hasOwnProperty(r)
            ? (l[r] = v)
            : (g[r] = v);
        } else {
          var z = void 0;
          z = r !== K.Z ? d(r) : xe(c, r);
          if (cn.hasOwnProperty(r)) Nm(cn[r], r, z, e);
          else if ($m.hasOwnProperty(r)) Nm($m[r], r, z, g);
          else if (Am.hasOwnProperty(r)) Nm(Am[r], r, z, f);
          else if (zm.hasOwnProperty(r)) Nm(zm[r], r, z, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(r))
            Nm(1, r, z, f);
          else if (r === K.Z) {
            if (!Wm) {
              var A = Ra(z);
              A && (f["&did"] = A);
            }
            var y = void 0,
              w = void 0;
            b === K.Aa
              ? (y = Ra(xe(c, r), "."))
              : ((y = Ra(xe(c, r, 1), ".")), (w = Ra(xe(c, r, 2), ".")));
            y && (f["&gdid"] = y);
            w && (f["&edid"] = w);
          } else
            r === K.Ba && 0 > t.indexOf(K.Hb) && (l.cookieName = z + "_ga");
        }
      }
      (!1 !== d(K.xh) && !1 !== d(K.$b) && xm()) || (g.allowAdFeatures = !1);
      (!1 !== d(K.U) && ym()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(K.ib) && (l._useUp = !0);
      if (c.isGtmEvent) {
        l.name = l.name || e.gtmTrackerName;
        var x = g.hitCallback;
        g.hitCallback = function () {
          ra(x) && x();
          c.onSuccess();
        };
      } else {
        Jm(l, "cookieDomain", "auto");
        Jm(g, "forceSSL", !0);
        Jm(e, "eventCategory", nn(b));
        pn[b] && Jm(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? Jm(e, "eventLabel", d(K.Ef))
          : "search" === b || "view_search_results" === b
          ? Jm(e, "eventLabel", d(K.Oh))
          : "select_content" === b && Jm(e, "eventLabel", d(K.Bh));
        var C = e[K.ka] || {},
          D = C[K.Kb];
        D || (0 != D && C[K.N])
          ? (l.allowLinker = !0)
          : !1 === D && Jm(l, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        l.name = a;
      }
      sd() &&
        ((g["&gcs"] = Hd()),
        Gd(K.M) || (l.storage = "none"),
        Gd(K.C) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
      var F = d(K.ra) || d(K.pb),
        E = d(K.Wc);
      F && (c.isGtmEvent || (l[K.pb] = F), (l._cd2l = !0));
      E && !c.isGtmEvent && (l[K.Wc] = E);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e;
    },
    Km = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Fe = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Bg = "impressions" === b.translateIfKeyEquals ? Um(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Gc = "promoView" === b.translateIfKeyEquals ? Um(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Gc = "promoClick" === b.translateIfKeyEquals ? Um(f, !0) : f;
        c.jb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var l = b[g].products;
          c.yb = "products" === b.translateIfKeyEquals ? Um(l, !0) : l;
          c.jb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Lm = function (a, b) {
      function c(u) {
        return {
          id: d(K.hb),
          affiliation: d(K.Eh),
          revenue: d(K.ia),
          tax: d(K.Bf),
          shipping: d(K.Zd),
          coupon: d(K.Fh),
          list: d(K.Yd) || u,
        };
      }
      for (
        var d = function (u) {
            return b.getWithConfig(u);
          },
          e = d(K.X),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][K.Yd]);
        g++
      );
      var l = d(K.bc);
      if (Cb(l))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in l)
            l.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != l[p] &&
              Jm(n, p, n[l[p]]);
        }
      var q = null,
        t = d(K.Gh);
      a === K.ya || a === K.Gb
        ? (q = { action: a, jb: c(), yb: Um(e) })
        : a === K.Db
        ? (q = { action: "add", yb: Um(e) })
        : a === K.Eb
        ? (q = { action: "remove", yb: Um(e) })
        : a === K.za
        ? (q = { action: "detail", jb: c(f), yb: Um(e) })
        : a === K.ob
        ? (q = { action: "impressions", Bg: Um(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Gc: Um(t) })
        : "select_content" === a && t && 0 < t.length
        ? (q = { action: "promo_click", Gc: Um(t) })
        : "select_content" === a
        ? (q = { action: "click", jb: { list: d(K.Yd) || f }, yb: Um(e) })
        : a === K.nb || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            yb: Um(e),
            jb: { step: a === K.nb ? 1 : d(K.Af), option: d(K.zf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            jb: { step: d(K.Af), option: d(K.zf) },
          });
      q && (q.Fe = d(K.ca));
      return q;
    },
    rn = {},
    Gm = function (a, b) {
      var c = rn[a];
      rn[a] = Db(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function sn() {
    return (R.gcq = R.gcq || new tn());
  }
  var un = function (a, b, c) {
      sn().register(a, b, c);
    },
    vn = function (a, b, c, d) {
      sn().push("event", [b, a], c, d);
    },
    wn = function (a, b) {
      sn().push("config", [a], b);
    },
    xn = function (a, b, c, d) {
      sn().push("get", [a, b], c, d);
    },
    yn = {},
    zn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.m = !1;
    },
    An = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.R = c || "";
      this.m = d;
      this.o = e;
    },
    tn = function () {
      this.o = {};
      this.s = {};
      this.m = [];
      this.D = { AW: !1, UA: !1 };
    },
    Bn = function (a, b) {
      var c = cl(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new zn());
    },
    Cn = function (a, b, c) {
      if (b) {
        var d = cl(b);
        if (d && 1 === Bn(a, b).status) {
          Bn(a, b).status = 2;
          var e = {};
          yj &&
            (e.timeoutId = B.setTimeout(function () {
              ed(38);
              ej();
            }, 3e3));
          a.push("require", [e], d.containerId);
          yn[d.containerId] = Ia();
          if (jk()) {
          } else {
            var g =
              "/gtag/js?id=" +
              encodeURIComponent(d.containerId) +
              "&l=" +
              M.W +
              "&cx=c";
            ik() && (g += "&sign=" + M.kd);
            var l =
                ("http:" != B.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + g),
              m = gk(c, g) || l;
            mb(m);
          }
        }
      }
    },
    Dn = function (a, b, c, d) {
      if (d.R) {
        var e = Bn(a, d.R),
          f = e.s;
        if (f) {
          var g = Db(c),
            l = Db(e.targetConfig[d.R]),
            m = Db(e.containerConfig),
            n = Db(e.remoteConfig),
            p = Db(a.s),
            q = Se("gtm.uniqueEventId"),
            t = cl(d.R).prefix,
            u = Ka(function () {
              var v = g[K.Jb];
              v && H(v);
            }),
            r = ue(
              te(
                ve(
                  se(qe(re(le(ke(je(g), l), m), n), p), function () {
                    Lj(q, t, "2");
                    u();
                  }),
                  function () {
                    Lj(q, t, "3");
                    u();
                  }
                ),
                function (v, z) {
                  a.D[v] = z;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            Lj(q, t, "1");
            f(d.R, b, d.s, r);
          } catch (v) {
            Lj(q, t, "4");
          }
        }
      }
    };
  tn.prototype.register = function (a, b, c) {
    var d = Bn(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (Db(d.remoteConfig, c), (d.remoteConfig = c));
      var e = cl(a),
        f = yn[e.containerId];
      if (void 0 !== f) {
        var g = R[e.containerId].bootstrap,
          l = e.prefix.toUpperCase();
        R[e.containerId]._spx && (l = l.toLowerCase());
        var m = Se("gtm.uniqueEventId"),
          n = l,
          p = Ia() - g;
        if (yj && !jj[m]) {
          m !== fj && (aj(), (fj = m));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          nj = nj ? nj + "," + q : "&cl=" + q;
        }
        delete yn[e.containerId];
      }
      this.flush();
    }
  };
  tn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Ia() / 1e3);
    Cn(this, c, b[0][K.ra] || this.s[K.ra]);
    c && Bn(this, c).m && (d = !1);
    this.m.push(new An(a, e, c, b, d));
    d || this.flush();
  };
  tn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Ia() / 1e3);
    0 < this.m.length
      ? this.m.splice(1, 0, new An(a, d, c, b, !1))
      : this.m.push(new An(a, d, c, b, !1));
  };
  tn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
      var f = this.m[0];
      if (f.o)
        !f.R || Bn(this, f.R).m ? ((f.o = !1), this.m.push(f)) : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Bn(this, f.R).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            yj && B.clearTimeout(f.m[0].timeoutId);
            break;
          case "set":
            Ba(f.m[0], function (t, u) {
              Db(Oa(t, u), b.s);
            });
            break;
          case "config":
            e.Na = {};
            Ba(
              f.m[0],
              (function (t) {
                return function (u, r) {
                  Db(Oa(u, r), t.Na);
                };
              })(e)
            );
            var g = !!e.Na[K.ad];
            delete e.Na[K.ad];
            var l = Bn(this, f.R),
              m = cl(f.R),
              n = m.containerId === m.id;
            g || (n ? (l.containerConfig = {}) : (l.targetConfig[f.R] = {}));
            (l.m && g) || Dn(this, K.Aa, e.Na, f);
            l.m = !0;
            delete e.Na[K.Mb];
            n ? Db(e.Na, l.containerConfig) : Db(e.Na, l.targetConfig[f.R]);
            d = !0;
            break;
          case "event":
            e.Mc = {};
            Ba(
              f.m[0],
              (function (t) {
                return function (u, r) {
                  Db(Oa(u, r), t.Mc);
                };
              })(e)
            );
            Dn(this, f.m[1], e.Mc, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.Ra] = f.m[0]), (p[K.cb] = f.m[1]), p);
            Dn(this, K.Oa, q, f);
        }
        this.m.shift();
        En(this, f);
      }
      e = { Na: e.Na, Mc: e.Mc };
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var En = function (a, b) {
    if ("require" !== b.type)
      if (b.R)
        for (
          var c = a.getCommandListeners(b.R)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]();
          }
  };
  tn.prototype.getRemoteConfig = function (a) {
    return Bn(this, a).remoteConfig;
  };
  tn.prototype.getCommandListeners = function (a) {
    return Bn(this, a).o;
  };
  var Fn = {},
    Gn = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Fn[b[c]] || [];
        Fn[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Hn = function (a) {
      Ba(Fn, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var In = "HA GF G UA AW DC".split(" "),
    Jn = !1,
    Kn = !1,
    Ln = 0;
  function Mn(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = Db(b)),
      b[K.Jb] && (c.eventCallback = b[K.Jb]),
      b[K.Vc] && (c.eventTimeout = b[K.Vc]));
    return c;
  }
  function Nn(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Me() });
    return a["gtm.uniqueEventId"];
  }
  function On() {
    if (!Jn && !R.gtagRegistered) {
      Jn = R.gtagRegistered = !0;
      R.addTargetToGroup = function (c) {
        Gn(c, "default");
      };
      var a = R.pendingDefaultTargets;
      delete R.pendingDefaultTargets;
      if (ta(a)) for (var b = 0; b < a.length; ++b) Gn(a[b], "default");
    }
    return Jn;
  }
  var Pn = {
      config: function (a) {
        var b,
          c = Nn(a);
        if (2 > a.length || !k(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !Cb(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = cl(a[1]);
        if (!e) return;
        Hn(e.id);
        Gn(e.id, d[K.de] || "default");
        delete d[K.de];
        Kn || ed(43);
        if (On() && -1 !== In.indexOf(e.prefix)) {
          "G" === e.prefix && (d[K.Mb] = !0);
          delete d[K.Jb];
          e.id === e.containerId && (R.configCount = ++Ln);
          wn(d, e.id);
          return;
        }
        Ve("gtag.targets." + e.id, void 0);
        Ve("gtag.targets." + e.id, Db(d));
        var f = {};
        f[K.qb] = e.id;
        b = Mn(K.Aa, f);
        b["gtm.uniqueEventId"] = c;
        return b;
      },
      consent: function (a) {
        if (3 === a.length) {
          ed(39);
          var b = Me(),
            c = a[1];
          "default" === c ? Dd(a[2]) : "update" === c && Fd(a[2], b);
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && k(b)) {
          var c;
          if (2 < a.length) {
            if ((!Cb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = Mn(b, c),
            e = Nn(a);
          d["gtm.uniqueEventId"] = e;
          if ("optimize.callback" === b)
            return (d.eventModel = d.eventModel || {}), d;
          var f;
          var g = c && c[K.qb];
          void 0 === g && ((g = Se(K.qb, 2)), void 0 === g && (g = "default"));
          if (k(g) || ta(g)) {
            for (
              var l = g.toString().replace(/\s+/g, "").split(","),
                m = [],
                n = 0;
              n < l.length;
              n++
            )
              if (0 <= l[n].indexOf("-")) m.push(l[n]);
              else {
                var p = Fn[l[n]];
                p && p.length && (m = m.concat(p));
              }
            f = el(m);
          } else f = void 0;
          var q = f;
          if (!q) return;
          for (var t = On(), u = [], r = 0; t && r < q.length; r++) {
            var v = q[r];
            if (-1 !== In.indexOf(v.prefix)) {
              var z = Db(c);
              "G" === v.prefix && (z[K.Mb] = !0);
              delete z[K.Jb];
              vn(b, z, v.id);
            }
            u.push(v.id);
          }
          d.eventModel = d.eventModel || {};
          0 < q.length
            ? (d.eventModel[K.qb] = u.join())
            : delete d.eventModel[K.qb];
          Kn || ed(43);
          return d;
        }
      },
      get: function (a) {
        ed(53);
        if (4 !== a.length || !k(a[1]) || !k(a[2]) || !ra(a[3])) return;
        var b = cl(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        Kn || ed(43);
        if (!On() || -1 === In.indexOf(b.prefix)) return;
        Me();
        var e = {};
        zd(Db(((e[K.Ra] = c), (e[K.cb] = d), e)));
        xn(
          c,
          function (f) {
            H(function () {
              return d(f);
            });
          },
          b.id
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          Kn = !0;
          On();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = Nn(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Cb(a[1])
          ? (b = Db(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((b = {}),
            Cb(a[2]) || ta(a[2]) ? (b[a[1]] = Db(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if ((Me(), Db(b), On())) {
            var c = Db(b);
            sn().push("set", [c]);
          }
          b._clear = !0;
          return b;
        }
      },
    },
    Qn = { policy: !0 };
  var Rn = function () {
    this.m = [];
    this.o = [];
  };
  Rn.prototype.push = function (a, b, c) {
    var d = {
      debugContext: c,
      message: a,
      notBeforeEventId: b,
      priorityId: this.m.length + 1,
    };
    this.m.push(d);
    for (var e = 0; e < this.o.length; e++)
      try {
        this.o[e](d);
      } catch (f) {}
  };
  Rn.prototype.Eg = function (a) {
    this.o.push(a);
  };
  Rn.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Rn.prototype.get = Rn.prototype.get;
  Rn.prototype.listen = Rn.prototype.Eg;
  Rn.prototype.push = Rn.prototype.push;
  function Sn(a, b) {
    return (
      a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
    );
  }
  var Tn = function (a) {
      var b = B[M.W].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Un = function (a) {
      var b = B[M.W],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Vn = !1,
    Wn = [];
  function Xn() {
    if (!Vn) {
      Vn = !0;
      for (var a = 0; a < Wn.length; a++) H(Wn[a]);
    }
  }
  var Yn = function (a) {
    Vn ? H(a) : Wn.push(a);
  };
  var Ao = function (a) {
    if (zo(a)) return a;
    this.m = a;
  };
  Ao.prototype.Li = function () {
    return this.m;
  };
  var zo = function (a) {
    return !a || "object" !== Ab(a) || Cb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Ao.prototype.getUntrustedMessageValue = Ao.prototype.Li;
  var Bo = 0,
    Co,
    Do = {},
    Eo = [],
    Fo = [],
    Go = !1,
    Ho = !1,
    Io = function (a) {
      return B[M.W].push(a);
    },
    Jo = function (a, b) {
      var c = R[M.W],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = B.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (B.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Ko(a) {
    var b = a._clear;
    Ba(a, function (d, e) {
      "_clear" !== d && (b && Ve(d, void 0), Ve(d, e));
    });
    He || (He = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Me()), (a["gtm.uniqueEventId"] = c), Ve("gtm.uniqueEventId", c));
    return ek(a);
  }
  function Lo(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ca(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Mo() {
    for (var a = !1; !Ho && (0 < Eo.length || 0 < Fo.length); ) {
      if (!Go && Lo(Eo[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Eo[0]["gtm.uniqueEventId"];
        f &&
          ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Eo.unshift(c, e);
        Go = !0;
      }
      Ho = !0;
      delete Pe.eventModel;
      Re();
      var g = null,
        l = void 0;
      null == g && (g = Eo.shift());
      if (null != g) {
        var n = zo(g);
        if (n) {
          var p = g;
          g = zo(p) ? p.getUntrustedMessageValue() : void 0;
          for (
            var q = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              t = 0;
            t < q.length;
            t++
          ) {
            var u = q[t],
              r = Se(u, 1);
            if (ta(r) || Cb(r)) r = Db(r);
            Qe[u] = r;
          }
        }
        try {
          if (ra(g))
            try {
              g.call(Te);
            } catch (E) {}
          else if (ta(g)) {
            var v = g;
            if (k(v[0])) {
              var z = v[0].split("."),
                A = z.pop(),
                y = v.slice(1),
                w = Se(z.join("."), 2);
              if (null != w)
                try {
                  w[A].apply(w, y);
                } catch (E) {}
            }
          } else {
            if (Ca(g)) {
              a: {
                var x = g,
                  C = l;
                if (x.length && k(x[0])) {
                  var D = Pn[x[0]];
                  if (D && (!n || !Qn[x[0]])) {
                    g = D(x, C);
                    break a;
                  }
                }
                g = void 0;
              }
              if (!g) {
                Ho = !1;
                continue;
              }
            }
            a = Ko(g) || a;
          }
        } finally {
          n && Re(!0);
        }
      }
      Ho = !1;
    }
    return !a;
  }
  function Oo() {
    var b = Mo();
    try {
      Tn(M.J);
    } catch (c) {}
    return b;
  }
  var Ro = function () {
    var a = fb(M.W, []),
      b = fb("google_tag_manager", {});
    b = b[M.W] = b[M.W] || {};
    ki(function () {
      b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
    });
    Yn(function () {
      b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function () {
      var e;
      if (0 < R.SANDBOXED_JS_SEMAPHORE) {
        e = [];
        for (var f = 0; f < arguments.length; f++) e[f] = new Ao(arguments[f]);
      } else e = [].slice.call(arguments, 0);
      Eo.push.apply(Eo, e);
      var g = c.apply(a, e);
      if (300 < this.length) for (ed(4); 300 < this.length; ) this.shift();
      var l = "boolean" !== typeof g || g;
      return Mo() && l;
    };
    var d = a.slice(0);
    Eo.push.apply(Eo, d);
    if (Po()) {
      H(Oo);
    }
  };
  var Po = function () {
    var a = !0;
    return a;
  };
  function So(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ia();
    return b < c + 3e5 && b > c - 9e5;
  }
  var To = function (a) {
    R.addTargetToGroup
      ? R.addTargetToGroup(a)
      : ((R.pendingDefaultTargets = R.pendingDefaultTargets || []),
        R.pendingDefaultTargets.push(a));
  };
  var Uo = { Kg: "UA-126207330-4" };
  var Vo = {};
  Vo.dd = new String("undefined");
  var vp = B.clearTimeout,
    wp = B.setTimeout,
    T = function (a, b, c, d) {
      if (jk()) {
        b && H(b);
      } else return mb(a, b, c, d);
    },
    xp = function () {
      return new Date();
    },
    yp = function () {
      return B.location.href;
    },
    zp = function (a) {
      return nf(pf(a), "fragment");
    },
    Ap = function (a) {
      return of(pf(a));
    },
    Bp = function (a, b) {
      return Se(a, b || 2);
    },
    Cp = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Io(a)))
        : (d = Io(a));
      return d;
    },
    Dp = function (a, b) {
      B[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === B[a] || (c && !B[a])) && (B[a] = b);
      return B[a];
    },
    Ep = function (a, b, c) {
      return Tf(a, b, void 0 === c ? !0 : !!c);
    },
    Fp = function (a, b, c) {
      return 0 === fg(a, b, c);
    },
    Gp = function (a, b) {
      if (jk()) {
        b && H(b);
      } else ob(a, b);
    },
    Hp = function (a) {
      return !!bp(a, "init", !1);
    },
    Ip = function (a) {
      $o(a, "init", !0);
    },
    Jp = function (a) {
      var b = Ee,
        c = "?id=" + encodeURIComponent(a) + "&l=" + M.W;
      ik() &&
        ((c += "&sign=" + M.kd),
        eb && (b = eb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
      var d = gl("https://", "http://", b + c);
      T(d);
    },
    Kp = function (a, b, c) {
      yj && (Eb(a) || Mj(c, b, a));
    };
  var hq = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function iq(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var jq = new za();
  function kq(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = jq.get(e);
      f || ((f = new RegExp(b, d)), jq.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function lq(a, b) {
    function c(g) {
      var l = pf(g),
        m = nf(l, "protocol"),
        n = nf(l, "host", !0),
        p = nf(l, "port"),
        q = nf(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function mq(a) {
    return nq(a) ? 1 : 0;
  }
  function nq(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Db(a, {});
        Db({ arg1: c[d], any_of: void 0 }, e);
        if (mq(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < hq.length; g++) {
                var l = hq[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return iq(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return kq(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return lq(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  var sq = function (a, b, c) {
      this.D = a;
      this.eventName = b;
      this.m = c;
      this.o = {};
      this.metadata = {};
    },
    tq = function (a, b, c) {
      var d = a.m.getWithConfig(b);
      void 0 !== d ? (a.o[b] = d) : void 0 !== c && (a.o[b] = c);
    };
  Object.freeze(["config", "event", "get", "set"]);
  var uq = encodeURI,
    Y = encodeURIComponent,
    vq = pb;
  var wq = function (a, b) {
    if (!a) return !1;
    var c = nf(pf(a), "host");
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
  var xq = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  function Tr() {
    return (B.gaGlobal = B.gaGlobal || {});
  }
  var Ur = function () {
      var a = Tr();
      a.hid = a.hid || wa();
      return a.hid;
    },
    Vr = function (a, b) {
      var c = Tr();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var ws = function () {
    if (ra(B.__uspapi)) {
      var a = "";
      try {
        B.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Vs = window,
    Ws = document,
    Xs = function (a) {
      var b = Vs._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Vs["ga-disable-" + a]))
        return !0;
      try {
        var c = Vs.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Nf("AMP_TOKEN", String(Ws.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Ws.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Ys = {};
  function et(a) {
    delete a.eventModel[K.Mb];
    it(a.eventModel);
  }
  var it = function (a) {
    Ba(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.Da] || {};
    Ba(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var xt = function (a, b, c) {
      vn(b, c, a);
    },
    yt = function (a, b, c) {
      vn(b, c, a, !0);
    },
    At = function (a, b) {};
  function zt(a, b) {}
  var Z = { g: {} };
  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.g.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.h = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Bp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Kp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (Z.g.rep = ["google"]),
    (function () {
      (function (a) {
        Z.__rep = a;
        Z.__rep.h = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
      })(function (a) {
        var b;
        switch (cl(a.vtp_containerId).prefix) {
          case "AW":
            b = Xl;
            break;
          case "DC":
            b = jm;
            break;
          case "GF":
            b = om;
            break;
          case "HA":
            b = tm;
            break;
          case "UA":
            b = Sm;
            break;
          default:
            H(a.vtp_gtmOnFailure);
            return;
        }
        H(a.vtp_gtmOnSuccess);
        un(a.vtp_containerId, b, a.vtp_remoteConfig || {});
      });
    })();
  (Z.g.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.h = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
      })(function () {
        return M.J;
      });
    })();
  (Z.g.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.h = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? yt
          : xt)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();
  var Bt = {};
  Bt.dataLayer = Te;
  Bt.callback = function (a) {
    Ke.hasOwnProperty(a) && ra(Ke[a]) && Ke[a]();
    delete Ke[a];
  };
  Bt.bootstrap = 0;
  Bt._spx = !1;
  (function (a) {
    if (!B["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (G.referrer) {
        var c = pf(G.referrer);
        b = "cct.google" === mf(c, "host");
      }
      if (!b) {
        var d = Tf("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((B["__TAGGY_INSTALLED"] = !0),
        mb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var t = "GTM",
          u = "GTM";
        (t = "OGT"), (u = "GTAG");
        var r = B["google.tagmanager.debugui2.queue"];
        r ||
          ((r = []),
          (B["google.tagmanager.debugui2.queue"] = r),
          mb(
            "https://" +
              M.Kd +
              "/debug/bootstrap?id=" +
              M.J +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              nk()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: eb, containerProduct: t, debug: !1, id: M.J },
        };
        v.data.resume = function () {
          a();
        };
        M.kh && (v.data.initialPublish = !0);
        r.push(v);
      },
      g = void 0,
      l = nf(B.location, "query", !1, void 0, "gtm_debug");
    So(l) && (g = 2);
    if (!g && G.referrer) {
      var m = pf(G.referrer);
      "tagassistant.google.com" === mf(m, "host") && (g = 3);
    }
    if (!g) {
      var n = Tf("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = G.documentElement.getAttribute("data-tag-assistant-present");
      So(p) && (g = 5);
    }
    g && eb ? f(g) : a();
  })(function () {
    var a = !1;
    a && ti("INIT");
    hd().o();
    Kk();
    eh.enable_gbraid_cookie_write = !0;
    var b = !!R[M.J];
    if (b) {
      var c = R.zones;
      c && c.unregisterChild(M.J);
    } else {
      for (
        var g = data.resource || {}, l = g.macros || [], m = 0;
        m < l.length;
        m++
      )
        dc.push(l[m]);
      for (var n = g.tags || [], p = 0; p < n.length; p++) gc.push(n[p]);
      for (var q = g.predicates || [], t = 0; t < q.length; t++) fc.push(q[t]);
      for (var u = g.rules || [], r = 0; r < u.length; r++) {
        for (var v = u[r], z = {}, A = 0; A < v.length; A++)
          z[v[A][0]] = Array.prototype.slice.call(v[A], 1);
        ec.push(z);
      }
      jc = Z;
      kc = mq;
      R[M.J] = Bt;
      La(Le, Z.g);
      mc = uc;
      Ro();
      fi = !1;
      gi = 0;
      if (
        ("interactive" == G.readyState && !G.createEventObject) ||
        "complete" == G.readyState
      )
        ii();
      else {
        qb(G, "DOMContentLoaded", ii);
        qb(G, "readystatechange", ii);
        if (G.createEventObject && G.documentElement.doScroll) {
          var y = !0;
          try {
            y = !B.frameElement;
          } catch (F) {}
          y && ji();
        }
        qb(B, "load", ii);
      }
      Vn = !1;
      "complete" === G.readyState ? Xn() : qb(B, "load", Xn);
      yj && B.setInterval(sj, 864e5);
      Ie = Ia();
      Bt.bootstrap = Ie;
      if (a) {
        var D = ui("INIT");
      }
    }
  });
})();
