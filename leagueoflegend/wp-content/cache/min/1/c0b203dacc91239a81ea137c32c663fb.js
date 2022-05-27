var jnews_ajax_url = "/?ajax-request=jnews";
var wpnmObject = {
  button_html:
    '<div class="wpnm-button style-1">\n                            <div class="wpnm-slider round"></div>\n                        </div>',
  default: "",
  server_time: "1612067531",
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
var jfla = ["view_counter"];
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
RocketLazyLoadScripts.run(); /*! This file is auto-generated */
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
var mejsL10n = {
  language: "en",
  strings: {
    "mejs.download-file": "Download File",
    "mejs.install-flash":
      "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
    "mejs.fullscreen": "Fullscreen",
    "mejs.play": "Play",
    "mejs.pause": "Pause",
    "mejs.time-slider": "Time Slider",
    "mejs.time-help-text":
      "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
    "mejs.live-broadcast": "Live Broadcast",
    "mejs.volume-help-text":
      "Use Up/Down Arrow keys to increase or decrease volume.",
    "mejs.unmute": "Unmute",
    "mejs.mute": "Mute",
    "mejs.volume-slider": "Volume Slider",
    "mejs.video-player": "Video Player",
    "mejs.audio-player": "Audio Player",
    "mejs.captions-subtitles": "Captions/Subtitles",
    "mejs.captions-chapters": "Chapters",
    "mejs.none": "None",
    "mejs.afrikaans": "Afrikaans",
    "mejs.albanian": "Albanian",
    "mejs.arabic": "Arabic",
    "mejs.belarusian": "Belarusian",
    "mejs.bulgarian": "Bulgarian",
    "mejs.catalan": "Catalan",
    "mejs.chinese": "Chinese",
    "mejs.chinese-simplified": "Chinese (Simplified)",
    "mejs.chinese-traditional": "Chinese (Traditional)",
    "mejs.croatian": "Croatian",
    "mejs.czech": "Czech",
    "mejs.danish": "Danish",
    "mejs.dutch": "Dutch",
    "mejs.english": "English",
    "mejs.estonian": "Estonian",
    "mejs.filipino": "Filipino",
    "mejs.finnish": "Finnish",
    "mejs.french": "French",
    "mejs.galician": "Galician",
    "mejs.german": "German",
    "mejs.greek": "Greek",
    "mejs.haitian-creole": "Haitian Creole",
    "mejs.hebrew": "Hebrew",
    "mejs.hindi": "Hindi",
    "mejs.hungarian": "Hungarian",
    "mejs.icelandic": "Icelandic",
    "mejs.indonesian": "Indonesian",
    "mejs.irish": "Irish",
    "mejs.italian": "Italian",
    "mejs.japanese": "Japanese",
    "mejs.korean": "Korean",
    "mejs.latvian": "Latvian",
    "mejs.lithuanian": "Lithuanian",
    "mejs.macedonian": "Macedonian",
    "mejs.malay": "Malay",
    "mejs.maltese": "Maltese",
    "mejs.norwegian": "Norwegian",
    "mejs.persian": "Persian",
    "mejs.polish": "Polish",
    "mejs.portuguese": "Portuguese",
    "mejs.romanian": "Romanian",
    "mejs.russian": "Russian",
    "mejs.serbian": "Serbian",
    "mejs.slovak": "Slovak",
    "mejs.slovenian": "Slovenian",
    "mejs.spanish": "Spanish",
    "mejs.swahili": "Swahili",
    "mejs.swedish": "Swedish",
    "mejs.tagalog": "Tagalog",
    "mejs.thai": "Thai",
    "mejs.turkish": "Turkish",
    "mejs.ukrainian": "Ukrainian",
    "mejs.vietnamese": "Vietnamese",
    "mejs.welsh": "Welsh",
    "mejs.yiddish": "Yiddish",
  },
};
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!(function r(a, s, l) {
  function d(n, e) {
    if (!s[n]) {
      if (!a[n]) {
        var t = "function" == typeof require && require;
        if (!e && t) return t(n, !0);
        if (u) return u(n, !0);
        var o = new Error("Cannot find module '" + n + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
      }
      var i = (s[n] = { exports: {} });
      a[n][0].call(
        i.exports,
        function (e) {
          var t = a[n][1][e];
          return d(t || e);
        },
        i,
        i.exports,
        r,
        a,
        s,
        l
      );
    }
    return s[n].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    d(l[e]);
  return d;
})(
  {
    1: [function (e, t, n) {}, {}],
    2: [
      function (i, r, e) {
        (function (e) {
          var t,
            n = void 0 !== e ? e : "undefined" != typeof window ? window : {},
            o = i(1);
          "undefined" != typeof document
            ? (t = document)
            : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = o),
            (r.exports = t);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { 1: 1 },
    ],
    3: [
      function (e, n, t) {
        (function (e) {
          var t;
          (t =
            "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {}),
            (n.exports = t);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (e, n, t) {
        !(function (e) {
          var t = setTimeout;
          function o() {}
          function r(e) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              d(e, this);
          }
          function i(n, o) {
            for (; 3 === n._state; ) n = n._value;
            0 !== n._state
              ? ((n._handled = !0),
                r._immediateFn(function () {
                  var e = 1 === n._state ? o.onFulfilled : o.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(n._value);
                    } catch (e) {
                      return void s(o.promise, e);
                    }
                    a(o.promise, t);
                  } else (1 === n._state ? a : s)(o.promise, n._value);
                }))
              : n._deferreds.push(o);
          }
          function a(t, e) {
            try {
              if (e === t)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof r)
                  return (t._state = 3), (t._value = e), void l(t);
                if ("function" == typeof n)
                  return void d(
                    ((o = n),
                    (i = e),
                    function () {
                      o.apply(i, arguments);
                    }),
                    t
                  );
              }
              (t._state = 1), (t._value = e), l(t);
            } catch (e) {
              s(t, e);
            }
            var o, i;
          }
          function s(e, t) {
            (e._state = 2), (e._value = t), l(e);
          }
          function l(e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              r._immediateFn(function () {
                e._handled || r._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
              i(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d(e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), a(t, e));
                },
                function (e) {
                  n || ((n = !0), s(t, e));
                }
              );
            } catch (e) {
              if (n) return;
              (n = !0), s(t, e);
            }
          }
          (r.prototype.catch = function (e) {
            return this.then(null, e);
          }),
            (r.prototype.then = function (e, t) {
              var n = new this.constructor(o);
              return (
                i(
                  this,
                  new (function (e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null),
                      (this.onRejected = "function" == typeof t ? t : null),
                      (this.promise = n);
                  })(e, t, n)
                ),
                n
              );
            }),
            (r.all = function (e) {
              var s = Array.prototype.slice.call(e);
              return new r(function (o, i) {
                if (0 === s.length) return o([]);
                var r = s.length;
                function a(t, e) {
                  try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                      var n = e.then;
                      if ("function" == typeof n)
                        return void n.call(
                          e,
                          function (e) {
                            a(t, e);
                          },
                          i
                        );
                    }
                    (s[t] = e), 0 == --r && o(s);
                  } catch (e) {
                    i(e);
                  }
                }
                for (var e = 0; e < s.length; e++) a(e, s[e]);
              });
            }),
            (r.resolve = function (t) {
              return t && "object" == typeof t && t.constructor === r
                ? t
                : new r(function (e) {
                    e(t);
                  });
            }),
            (r.reject = function (n) {
              return new r(function (e, t) {
                t(n);
              });
            }),
            (r.race = function (i) {
              return new r(function (e, t) {
                for (var n = 0, o = i.length; n < o; n++) i[n].then(e, t);
              });
            }),
            (r._immediateFn =
              ("function" == typeof setImmediate &&
                function (e) {
                  setImmediate(e);
                }) ||
              function (e) {
                t(e, 0);
              }),
            (r._unhandledRejectionFn = function (e) {
              "undefined" != typeof console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", e);
            }),
            (r._setImmediateFn = function (e) {
              r._immediateFn = e;
            }),
            (r._setUnhandledRejectionFn = function (e) {
              r._unhandledRejectionFn = e;
            }),
            void 0 !== n && n.exports
              ? (n.exports = r)
              : e.Promise || (e.Promise = r);
        })(this);
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          a =
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
          i = e(7),
          r = (o = i) && o.__esModule ? o : { default: o },
          s = e(15),
          l = e(27);
        var d = {
          lang: "en",
          en: s.EN,
          language: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (null != t && t.length) {
              if ("string" != typeof t[0])
                throw new TypeError("Language code must be a string value");
              if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0]))
                throw new TypeError(
                  "Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters"
                );
              (d.lang = t[0]),
                void 0 === d[t[0]]
                  ? ((t[1] =
                      null !== t[1] && void 0 !== t[1] && "object" === a(t[1])
                        ? t[1]
                        : {}),
                    (d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]))
                  : null !== t[1] &&
                    void 0 !== t[1] &&
                    "object" === a(t[1]) &&
                    (d[t[0]] = t[1]);
            }
            return d.lang;
          },
          t: function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ("string" == typeof e && e.length) {
              var n = void 0,
                o = void 0,
                i = d.language(),
                r = function (e, t, n) {
                  return "object" !== (void 0 === e ? "undefined" : a(e)) ||
                    "number" != typeof t ||
                    "number" != typeof n
                    ? e
                    : [
                        function () {
                          return arguments.length <= 1 ? void 0 : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 !==
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            11 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              12 ===
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              (0 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : [3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <=
                                4
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            100 ==
                            1
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                              2
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                3 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                4
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 1
                            ? void 0
                            : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                7
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : 6 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                11
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 5
                            ? void 0
                            : arguments[5];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : 3 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <=
                                10
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : 11 <=
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100
                            ? arguments.length <= 5
                              ? void 0
                              : arguments[5]
                            : arguments.length <= 6
                            ? void 0
                            : arguments[6];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              (1 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  11)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 10 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 ==
                              2
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 11 !==
                            (arguments.length <= 0 ? void 0 : arguments[0]) &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 ==
                              1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 8 !==
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              11 !==
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 3 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                      ][n].apply(null, [t].concat(e));
                };
              return (
                void 0 !== d[i] &&
                  ((n = d[i][e]),
                  null !== t &&
                    "number" == typeof t &&
                    ((o = d[i]["mejs.plural-form"]),
                    (n = r.apply(null, [n, t, o])))),
                !n &&
                  d.en &&
                  ((n = d.en[e]),
                  null !== t &&
                    "number" == typeof t &&
                    ((o = d.en["mejs.plural-form"]),
                    (n = r.apply(null, [n, t, o])))),
                (n = n || e),
                null !== t && "number" == typeof t && (n = n.replace("%1", t)),
                (0, l.escapeHTML)(n)
              );
            }
            return e;
          },
        };
        (r.default.i18n = d),
          "undefined" != typeof mejsL10n &&
            r.default.i18n.language(mejsL10n.language, mejsL10n.strings),
          (n.default = d);
      },
      { 15: 15, 27: 27, 7: 7 },
    ],
    6: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var L =
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
          F = o(e(3)),
          j = o(e(2)),
          I = o(e(7)),
          M = e(27),
          O = e(28),
          D = e(8),
          R = e(25);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = function e(t, n, o) {
          var c = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var f = this;
          (o = Array.isArray(o) ? o : null),
            (f.defaults = {
              renderers: [],
              fakeNodeName: "mediaelementwrapper",
              pluginPath: "build/",
              shimScriptAccess: "sameDomain",
            }),
            (n = Object.assign(f.defaults, n)),
            (f.mediaElement = j.default.createElement(n.fakeNodeName));
          var i = t,
            r = !1;
          if (
            ("string" == typeof t
              ? (f.mediaElement.originalNode = j.default.getElementById(t))
              : (i = (f.mediaElement.originalNode = t).id),
            void 0 === f.mediaElement.originalNode ||
              null === f.mediaElement.originalNode)
          )
            return null;
          (f.mediaElement.options = n),
            (i = i || "mejs_" + Math.random().toString().slice(2)),
            f.mediaElement.originalNode.setAttribute("id", i + "_from_mejs");
          var a = f.mediaElement.originalNode.tagName.toLowerCase();
          -1 < ["video", "audio"].indexOf(a) &&
            !f.mediaElement.originalNode.getAttribute("preload") &&
            f.mediaElement.originalNode.setAttribute("preload", "none"),
            f.mediaElement.originalNode.parentNode.insertBefore(
              f.mediaElement,
              f.mediaElement.originalNode
            ),
            f.mediaElement.appendChild(f.mediaElement.originalNode);
          var s = function (t, e) {
              if (
                "https:" === F.default.location.protocol &&
                0 === t.indexOf("http:") &&
                R.IS_IOS &&
                -1 < I.default.html5media.mediaTypes.indexOf(e)
              ) {
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (4 === this.readyState && 200 === this.status) {
                    var e = (
                      F.default.URL || F.default.webkitURL
                    ).createObjectURL(this.response);
                    return (
                      f.mediaElement.originalNode.setAttribute("src", e), e
                    );
                  }
                  return t;
                }),
                  n.open("GET", t),
                  (n.responseType = "blob"),
                  n.send();
              }
              return t;
            },
            l = void 0;
          if (null !== o) l = o;
          else if (null !== f.mediaElement.originalNode)
            switch (
              ((l = []), f.mediaElement.originalNode.nodeName.toLowerCase())
            ) {
              case "iframe":
                l.push({
                  type: "",
                  src: f.mediaElement.originalNode.getAttribute("src"),
                });
                break;
              case "audio":
              case "video":
                var d = f.mediaElement.originalNode.children.length,
                  u = f.mediaElement.originalNode.getAttribute("src");
                if (u) {
                  var p = f.mediaElement.originalNode,
                    m = (0, O.formatType)(u, p.getAttribute("type"));
                  l.push({ type: m, src: s(u, m) });
                }
                for (var h = 0; h < d; h++) {
                  var v = f.mediaElement.originalNode.children[h];
                  if ("source" === v.tagName.toLowerCase()) {
                    var g = v.getAttribute("src"),
                      y = (0, O.formatType)(g, v.getAttribute("type"));
                    l.push({ type: y, src: s(g, y) });
                  }
                }
            }
          (f.mediaElement.id = i),
            (f.mediaElement.renderers = {}),
            (f.mediaElement.events = {}),
            (f.mediaElement.promises = []),
            (f.mediaElement.renderer = null),
            (f.mediaElement.rendererName = null),
            (f.mediaElement.changeRenderer = function (e, t) {
              var n = c,
                o = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
              if (
                void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                n.mediaElement.renderer.name === e
              )
                return (
                  n.mediaElement.renderer.pause(),
                  n.mediaElement.renderer.stop &&
                    n.mediaElement.renderer.stop(),
                  n.mediaElement.renderer.show(),
                  n.mediaElement.renderer.setSrc(o),
                  !0
                );
              void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                (n.mediaElement.renderer.pause(),
                n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                n.mediaElement.renderer.hide());
              var i = n.mediaElement.renderers[e],
                r = null;
              if (null != i)
                return (
                  i.show(),
                  i.setSrc(o),
                  (n.mediaElement.renderer = i),
                  (n.mediaElement.rendererName = e),
                  !0
                );
              for (
                var a = n.mediaElement.options.renderers.length
                    ? n.mediaElement.options.renderers
                    : D.renderer.order,
                  s = 0,
                  l = a.length;
                s < l;
                s++
              ) {
                var d = a[s];
                if (d === e) {
                  r = D.renderer.renderers[d];
                  var u = Object.assign(r.options, n.mediaElement.options);
                  return (
                    ((i = r.create(n.mediaElement, u, t)).name = e),
                    (n.mediaElement.renderers[r.name] = i),
                    (n.mediaElement.renderer = i),
                    (n.mediaElement.rendererName = e),
                    i.show(),
                    !0
                  );
                }
              }
              return !1;
            }),
            (f.mediaElement.setSize = function (e, t) {
              void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer &&
                f.mediaElement.renderer.setSize(e, t);
            }),
            (f.mediaElement.generateError = function (e, t) {
              (e = e || ""), (t = Array.isArray(t) ? t : []);
              var n = (0, M.createEvent)("error", f.mediaElement);
              (n.message = e),
                (n.urls = t),
                f.mediaElement.dispatchEvent(n),
                (r = !0);
            });
          var E = I.default.html5media.properties,
            b = I.default.html5media.methods,
            S = function (t, e, n, o) {
              var i = t[e];
              Object.defineProperty(t, e, {
                get: function () {
                  return n.apply(t, [i]);
                },
                set: function (e) {
                  return (i = o.apply(t, [e]));
                },
              });
            },
            x = function (e) {
              if ("src" !== e) {
                var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                  n = function () {
                    return void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer &&
                      "function" == typeof f.mediaElement.renderer["get" + t]
                      ? f.mediaElement.renderer["get" + t]()
                      : null;
                  },
                  o = function (e) {
                    void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer &&
                      "function" == typeof f.mediaElement.renderer["set" + t] &&
                      f.mediaElement.renderer["set" + t](e);
                  };
                S(f.mediaElement, e, n, o),
                  (f.mediaElement["get" + t] = n),
                  (f.mediaElement["set" + t] = o);
              }
            },
            w = function () {
              return void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer
                ? f.mediaElement.renderer.getSrc()
                : null;
            },
            P = function (e) {
              var t = [];
              if ("string" == typeof e)
                t.push({ src: e, type: e ? (0, O.getTypeFromFile)(e) : "" });
              else if (
                "object" === (void 0 === e ? "undefined" : L(e)) &&
                void 0 !== e.src
              ) {
                var n = (0, O.absolutizeUrl)(e.src),
                  o = e.type,
                  i = Object.assign(e, {
                    src: n,
                    type:
                      ("" !== o && null != o) || !n
                        ? o
                        : (0, O.getTypeFromFile)(n),
                  });
                t.push(i);
              } else if (Array.isArray(e))
                for (var r = 0, a = e.length; r < a; r++) {
                  var s = (0, O.absolutizeUrl)(e[r].src),
                    l = e[r].type,
                    d = Object.assign(e[r], {
                      src: s,
                      type:
                        ("" !== l && null != l) || !s
                          ? l
                          : (0, O.getTypeFromFile)(s),
                    });
                  t.push(d);
                }
              var u = D.renderer.select(
                  t,
                  f.mediaElement.options.renderers.length
                    ? f.mediaElement.options.renderers
                    : []
                ),
                c = void 0;
              if (
                (f.mediaElement.paused ||
                  null == f.mediaElement.src ||
                  "" === f.mediaElement.src ||
                  (f.mediaElement.pause(),
                  (c = (0, M.createEvent)("pause", f.mediaElement)),
                  f.mediaElement.dispatchEvent(c)),
                (f.mediaElement.originalNode.src = t[0].src || ""),
                null !== u || !t[0].src)
              )
                return !(null == t[0].src || "" === t[0].src)
                  ? f.mediaElement.changeRenderer(u.rendererName, t)
                  : null;
              f.mediaElement.generateError("No renderer found", t);
            },
            T = function (e, t) {
              try {
                if (
                  "play" !== e ||
                  ("native_dash" !== f.mediaElement.rendererName &&
                    "native_hls" !== f.mediaElement.rendererName &&
                    "vimeo_iframe" !== f.mediaElement.rendererName)
                )
                  f.mediaElement.renderer[e](t);
                else {
                  var n = f.mediaElement.renderer[e](t);
                  n &&
                    "function" == typeof n.then &&
                    n.catch(function () {
                      f.mediaElement.paused &&
                        setTimeout(function () {
                          var e = f.mediaElement.renderer.play();
                          void 0 !== e &&
                            e.catch(function () {
                              f.mediaElement.renderer.paused ||
                                f.mediaElement.renderer.pause();
                            });
                        }, 150);
                    });
                }
              } catch (e) {
                f.mediaElement.generateError(e, l);
              }
            },
            C = function (o) {
              f.mediaElement[o] = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (
                  void 0 !== f.mediaElement.renderer &&
                    null !== f.mediaElement.renderer &&
                    "function" == typeof f.mediaElement.renderer[o] &&
                    (f.mediaElement.promises.length
                      ? Promise.all(f.mediaElement.promises)
                          .then(function () {
                            T(o, t);
                          })
                          .catch(function (e) {
                            f.mediaElement.generateError(e, l);
                          })
                      : T(o, t)),
                  null
                );
              };
            };
          S(f.mediaElement, "src", w, P),
            (f.mediaElement.getSrc = w),
            (f.mediaElement.setSrc = P);
          for (var k = 0, _ = E.length; k < _; k++) x(E[k]);
          for (var N = 0, A = b.length; N < A; N++) C(b[N]);
          return (
            (f.mediaElement.addEventListener = function (e, t) {
              (f.mediaElement.events[e] = f.mediaElement.events[e] || []),
                f.mediaElement.events[e].push(t);
            }),
            (f.mediaElement.removeEventListener = function (e, t) {
              if (!e) return (f.mediaElement.events = {}), !0;
              var n = f.mediaElement.events[e];
              if (!n) return !0;
              if (!t) return (f.mediaElement.events[e] = []), !0;
              for (var o = 0; o < n.length; o++)
                if (n[o] === t)
                  return f.mediaElement.events[e].splice(o, 1), !0;
              return !1;
            }),
            (f.mediaElement.dispatchEvent = function (e) {
              var t = f.mediaElement.events[e.type];
              if (t) for (var n = 0; n < t.length; n++) t[n].apply(null, [e]);
            }),
            (f.mediaElement.destroy = function () {
              var e = f.mediaElement.originalNode.cloneNode(!0),
                t = f.mediaElement.parentElement;
              e.removeAttribute("id"),
                e.remove(),
                f.mediaElement.remove(),
                t.appendChild(e);
            }),
            l.length && (f.mediaElement.src = l),
            f.mediaElement.promises.length
              ? Promise.all(f.mediaElement.promises)
                  .then(function () {
                    f.mediaElement.options.success &&
                      f.mediaElement.options.success(
                        f.mediaElement,
                        f.mediaElement.originalNode
                      );
                  })
                  .catch(function () {
                    r &&
                      f.mediaElement.options.error &&
                      f.mediaElement.options.error(
                        f.mediaElement,
                        f.mediaElement.originalNode
                      );
                  })
              : (f.mediaElement.options.success &&
                  f.mediaElement.options.success(
                    f.mediaElement,
                    f.mediaElement.originalNode
                  ),
                r &&
                  f.mediaElement.options.error &&
                  f.mediaElement.options.error(
                    f.mediaElement,
                    f.mediaElement.originalNode
                  )),
            f.mediaElement
          );
        };
        (F.default.MediaElement = i),
          (I.default.MediaElement = i),
          (n.default = i);
      },
      { 2: 2, 25: 25, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    7: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          i = e(3);
        var r = {
          version: "4.2.16",
          html5media: {
            properties: [
              "volume",
              "src",
              "currentTime",
              "muted",
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
              "currentSrc",
              "preload",
              "bufferedBytes",
              "bufferedTime",
              "initialTime",
              "startOffsetTime",
              "defaultPlaybackRate",
              "playbackRate",
              "played",
              "autoplay",
              "loop",
              "controls",
            ],
            readOnlyProperties: [
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
            ],
            methods: ["load", "play", "pause", "canPlayType"],
            events: [
              "loadstart",
              "durationchange",
              "loadedmetadata",
              "loadeddata",
              "progress",
              "canplay",
              "canplaythrough",
              "suspend",
              "abort",
              "error",
              "emptied",
              "stalled",
              "play",
              "playing",
              "pause",
              "waiting",
              "seeking",
              "seeked",
              "timeupdate",
              "ended",
              "ratechange",
              "volumechange",
            ],
            mediaTypes: [
              "audio/mp3",
              "audio/ogg",
              "audio/oga",
              "audio/wav",
              "audio/x-wav",
              "audio/wave",
              "audio/x-pn-wav",
              "audio/mpeg",
              "audio/mp4",
              "video/mp4",
              "video/webm",
              "video/ogg",
              "video/ogv",
            ],
          },
        };
        (((o = i) && o.__esModule ? o : { default: o }).default.mejs = r),
          (n.default = r);
      },
      { 3: 3 },
    ],
    8: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.renderer = void 0);
        var o,
          i =
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
          r = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          a = e(7),
          s = (o = a) && o.__esModule ? o : { default: o };
        var l = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.renderers = {}),
                (this.order = []);
            }
            return (
              r(e, [
                {
                  key: "add",
                  value: function (e) {
                    if (void 0 === e.name)
                      throw new TypeError(
                        "renderer must contain at least `name` property"
                      );
                    (this.renderers[e.name] = e), this.order.push(e.name);
                  },
                },
                {
                  key: "select",
                  value: function (e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      n = t.length;
                    if (((t = t.length ? t : this.order), !n)) {
                      var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                        i = function (e) {
                          for (var t = 0, n = o.length; t < n; t++)
                            if (o[t].test(e)) return t;
                          return o.length;
                        };
                      t.sort(function (e, t) {
                        return i(e) - i(t);
                      });
                    }
                    for (var r = 0, a = t.length; r < a; r++) {
                      var s = t[r],
                        l = this.renderers[s];
                      if (null != l)
                        for (var d = 0, u = e.length; d < u; d++)
                          if (
                            "function" == typeof l.canPlayType &&
                            "string" == typeof e[d].type &&
                            l.canPlayType(e[d].type)
                          )
                            return { rendererName: l.name, src: e[d].src };
                    }
                    return null;
                  },
                },
                {
                  key: "order",
                  set: function (e) {
                    if (!Array.isArray(e))
                      throw new TypeError("order must be an array of strings.");
                    this._order = e;
                  },
                  get: function () {
                    return this._order;
                  },
                },
                {
                  key: "renderers",
                  set: function (e) {
                    if (
                      null !== e &&
                      "object" !== (void 0 === e ? "undefined" : i(e))
                    )
                      throw new TypeError(
                        "renderers must be an array of objects."
                      );
                    this._renderers = e;
                  },
                  get: function () {
                    return this._renderers;
                  },
                },
              ]),
              e
            );
          })(),
          d = (n.renderer = new l());
        s.default.Renderers = d;
      },
      { 7: 7 },
    ],
    9: [
      function (e, t, n) {
        "use strict";
        var f = a(e(3)),
          p = a(e(2)),
          i = a(e(5)),
          o = e(16),
          r = a(o),
          m = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(25)),
          h = e(27),
          v = e(26),
          g = e(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          usePluginFullScreen: !0,
          fullscreenText: null,
          useFakeFullscreen: !1,
        }),
          Object.assign(r.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (n) {
              if (n.isVideo) {
                (n.isInIframe =
                  f.default.location !== f.default.parent.location),
                  n.detectFullscreenMode();
                var o = this,
                  e = (0, h.isString)(o.options.fullscreenText)
                    ? o.options.fullscreenText
                    : i.default.t("mejs.fullscreen"),
                  t = p.default.createElement("div");
                if (
                  ((t.className =
                    o.options.classPrefix +
                    "button " +
                    o.options.classPrefix +
                    "fullscreen-button"),
                  (t.innerHTML =
                    '<button type="button" aria-controls="' +
                    o.id +
                    '" title="' +
                    e +
                    '" aria-label="' +
                    e +
                    '" tabindex="0"></button>'),
                  o.addControlElement(t, "fullscreen"),
                  t.addEventListener("click", function () {
                    (m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN) ||
                    n.isFullScreen
                      ? n.exitFullScreen()
                      : n.enterFullScreen();
                  }),
                  (n.fullscreenBtn = t),
                  o.options.keyActions.push({
                    keys: [70],
                    action: function (e, t, n, o) {
                      o.ctrlKey ||
                        (void 0 !== e.enterFullScreen &&
                          (e.isFullScreen
                            ? e.exitFullScreen()
                            : e.enterFullScreen()));
                    },
                  }),
                  (o.exitFullscreenCallback = function (e) {
                    var t = e.which || e.keyCode || 0;
                    o.options.enableKeyboard &&
                      27 === t &&
                      ((m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN) ||
                        o.isFullScreen) &&
                      n.exitFullScreen();
                  }),
                  o.globalBind("keydown", o.exitFullscreenCallback),
                  (o.normalHeight = 0),
                  (o.normalWidth = 0),
                  m.HAS_TRUE_NATIVE_FULLSCREEN)
                ) {
                  n.globalBind(m.FULLSCREEN_EVENT_NAME, function () {
                    n.isFullScreen &&
                      (m.isFullScreen()
                        ? ((n.isNativeFullScreen = !0), n.setControlsSize())
                        : ((n.isNativeFullScreen = !1), n.exitFullScreen()));
                  });
                }
              }
            },
            cleanfullscreen: function (e) {
              e.exitFullScreen(),
                e.globalUnbind("keydown", e.exitFullscreenCallback);
            },
            detectFullscreenMode: function () {
              var e =
                  null !== this.media.rendererName &&
                  /(native|html5)/i.test(this.media.rendererName),
                t = "";
              return (
                m.HAS_TRUE_NATIVE_FULLSCREEN && e
                  ? (t = "native-native")
                  : m.HAS_TRUE_NATIVE_FULLSCREEN && !e
                  ? (t = "plugin-native")
                  : this.usePluginFullScreen &&
                    m.SUPPORT_POINTER_EVENTS &&
                    (t = "plugin-click"),
                (this.fullscreenMode = t)
              );
            },
            enterFullScreen: function () {
              var o = this,
                e =
                  null !== o.media.rendererName &&
                  /(html5|native)/i.test(o.media.rendererName),
                t = getComputedStyle(o.getElement(o.container));
              if (o.isVideo)
                if (
                  !1 === o.options.useFakeFullscreen &&
                  m.IS_IOS &&
                  m.HAS_IOS_FULLSCREEN &&
                  "function" ==
                    typeof o.media.originalNode.webkitEnterFullscreen &&
                  o.media.originalNode.canPlayType(
                    (0, g.getTypeFromFile)(o.media.getSrc())
                  )
                )
                  o.media.originalNode.webkitEnterFullscreen();
                else {
                  if (
                    ((0, v.addClass)(
                      p.default.documentElement,
                      o.options.classPrefix + "fullscreen"
                    ),
                    (0, v.addClass)(
                      o.getElement(o.container),
                      o.options.classPrefix + "container-fullscreen"
                    ),
                    (o.normalHeight = parseFloat(t.height)),
                    (o.normalWidth = parseFloat(t.width)),
                    ("native-native" !== o.fullscreenMode &&
                      "plugin-native" !== o.fullscreenMode) ||
                      (m.requestFullScreen(o.getElement(o.container)),
                      o.isInIframe &&
                        setTimeout(function e() {
                          if (o.isNativeFullScreen) {
                            var t =
                                f.default.innerWidth ||
                                p.default.documentElement.clientWidth ||
                                p.default.body.clientWidth,
                              n = screen.width;
                            0.002 * n < Math.abs(n - t)
                              ? o.exitFullScreen()
                              : setTimeout(e, 500);
                          }
                        }, 1e3)),
                    (o.getElement(o.container).style.width = "100%"),
                    (o.getElement(o.container).style.height = "100%"),
                    (o.containerSizeTimeout = setTimeout(function () {
                      (o.getElement(o.container).style.width = "100%"),
                        (o.getElement(o.container).style.height = "100%"),
                        o.setControlsSize();
                    }, 500)),
                    e)
                  )
                    (o.node.style.width = "100%"),
                      (o.node.style.height = "100%");
                  else
                    for (
                      var n = o
                          .getElement(o.container)
                          .querySelectorAll("embed, object, video"),
                        i = n.length,
                        r = 0;
                      r < i;
                      r++
                    )
                      (n[r].style.width = "100%"), (n[r].style.height = "100%");
                  o.options.setDimensions &&
                    "function" == typeof o.media.setSize &&
                    o.media.setSize(screen.width, screen.height);
                  for (
                    var a = o.getElement(o.layers).children,
                      s = a.length,
                      l = 0;
                    l < s;
                    l++
                  )
                    (a[l].style.width = "100%"), (a[l].style.height = "100%");
                  o.fullscreenBtn &&
                    ((0, v.removeClass)(
                      o.fullscreenBtn,
                      o.options.classPrefix + "fullscreen"
                    ),
                    (0, v.addClass)(
                      o.fullscreenBtn,
                      o.options.classPrefix + "unfullscreen"
                    )),
                    o.setControlsSize(),
                    (o.isFullScreen = !0);
                  var d = Math.min(
                      screen.width / o.width,
                      screen.height / o.height
                    ),
                    u = o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "captions-text"
                      );
                  u &&
                    ((u.style.fontSize = 100 * d + "%"),
                    (u.style.lineHeight = "normal"),
                    (o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "captions-position"
                      ).style.bottom =
                      (screen.height - o.normalHeight) / 2 -
                      o.getElement(o.controls).offsetHeight / 2 +
                      d +
                      15 +
                      "px"));
                  var c = (0, h.createEvent)(
                    "enteredfullscreen",
                    o.getElement(o.container)
                  );
                  o.getElement(o.container).dispatchEvent(c);
                }
            },
            exitFullScreen: function () {
              var e = this,
                t =
                  null !== e.media.rendererName &&
                  /(native|html5)/i.test(e.media.rendererName);
              if (e.isVideo) {
                if (
                  (clearTimeout(e.containerSizeTimeout),
                  m.HAS_TRUE_NATIVE_FULLSCREEN &&
                    (m.IS_FULLSCREEN || e.isFullScreen) &&
                    m.cancelFullScreen(),
                  (0, v.removeClass)(
                    p.default.documentElement,
                    e.options.classPrefix + "fullscreen"
                  ),
                  (0, v.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "container-fullscreen"
                  ),
                  e.options.setDimensions)
                ) {
                  if (
                    ((e.getElement(e.container).style.width =
                      e.normalWidth + "px"),
                    (e.getElement(e.container).style.height =
                      e.normalHeight + "px"),
                    t)
                  )
                    (e.node.style.width = e.normalWidth + "px"),
                      (e.node.style.height = e.normalHeight + "px");
                  else
                    for (
                      var n = e
                          .getElement(e.container)
                          .querySelectorAll("embed, object, video"),
                        o = n.length,
                        i = 0;
                      i < o;
                      i++
                    )
                      (n[i].style.width = e.normalWidth + "px"),
                        (n[i].style.height = e.normalHeight + "px");
                  "function" == typeof e.media.setSize &&
                    e.media.setSize(e.normalWidth, e.normalHeight);
                  for (
                    var r = e.getElement(e.layers).children,
                      a = r.length,
                      s = 0;
                    s < a;
                    s++
                  )
                    (r[s].style.width = e.normalWidth + "px"),
                      (r[s].style.height = e.normalHeight + "px");
                }
                e.fullscreenBtn &&
                  ((0, v.removeClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + "unfullscreen"
                  ),
                  (0, v.addClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + "fullscreen"
                  )),
                  e.setControlsSize(),
                  (e.isFullScreen = !1);
                var l = e
                  .getElement(e.container)
                  .querySelector("." + e.options.classPrefix + "captions-text");
                l &&
                  ((l.style.fontSize = ""),
                  (l.style.lineHeight = ""),
                  (e
                    .getElement(e.container)
                    .querySelector(
                      "." + e.options.classPrefix + "captions-position"
                    ).style.bottom = ""));
                var d = (0, h.createEvent)(
                  "exitedfullscreen",
                  e.getElement(e.container)
                );
                e.getElement(e.container).dispatchEvent(d);
              }
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 5: 5 },
    ],
    10: [
      function (e, t, n) {
        "use strict";
        var c = r(e(2)),
          o = e(16),
          i = r(o),
          f = r(e(5)),
          p = e(27),
          m = e(26);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, { playText: null, pauseText: null }),
          Object.assign(i.default.prototype, {
            buildplaypause: function (e, t, n, o) {
              var i = this,
                r = i.options,
                a = (0, p.isString)(r.playText)
                  ? r.playText
                  : f.default.t("mejs.play"),
                s = (0, p.isString)(r.pauseText)
                  ? r.pauseText
                  : f.default.t("mejs.pause"),
                l = c.default.createElement("div");
              (l.className =
                i.options.classPrefix +
                "button " +
                i.options.classPrefix +
                "playpause-button " +
                i.options.classPrefix +
                "play"),
                (l.innerHTML =
                  '<button type="button" aria-controls="' +
                  i.id +
                  '" title="' +
                  a +
                  '" aria-label="' +
                  s +
                  '" tabindex="0"></button>'),
                l.addEventListener("click", function () {
                  i.paused ? i.play() : i.pause();
                });
              var d = l.querySelector("button");
              function u(e) {
                "play" === e
                  ? ((0, m.removeClass)(l, i.options.classPrefix + "play"),
                    (0, m.removeClass)(l, i.options.classPrefix + "replay"),
                    (0, m.addClass)(l, i.options.classPrefix + "pause"),
                    d.setAttribute("title", s),
                    d.setAttribute("aria-label", s))
                  : ((0, m.removeClass)(l, i.options.classPrefix + "pause"),
                    (0, m.removeClass)(l, i.options.classPrefix + "replay"),
                    (0, m.addClass)(l, i.options.classPrefix + "play"),
                    d.setAttribute("title", a),
                    d.setAttribute("aria-label", a));
              }
              i.addControlElement(l, "playpause"),
                u("pse"),
                o.addEventListener("loadedmetadata", function () {
                  -1 === o.rendererName.indexOf("flash") && u("pse");
                }),
                o.addEventListener("play", function () {
                  u("play");
                }),
                o.addEventListener("playing", function () {
                  u("play");
                }),
                o.addEventListener("pause", function () {
                  u("pse");
                }),
                o.addEventListener("ended", function () {
                  e.options.loop ||
                    ((0, m.removeClass)(l, i.options.classPrefix + "pause"),
                    (0, m.removeClass)(l, i.options.classPrefix + "play"),
                    (0, m.addClass)(l, i.options.classPrefix + "replay"),
                    d.setAttribute("title", a),
                    d.setAttribute("aria-label", a));
                });
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 27: 27, 5: 5 },
    ],
    11: [
      function (e, t, n) {
        "use strict";
        var p = r(e(2)),
          o = e(16),
          i = r(o),
          m = r(e(5)),
          y = e(25),
          E = e(30),
          b = e(26);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          enableProgressTooltip: !0,
          useSmoothHover: !0,
          forceLive: !1,
        }),
          Object.assign(i.default.prototype, {
            buildprogress: function (h, s, e, d) {
              var u = 0,
                v = !1,
                c = !1,
                g = this,
                t = h.options.autoRewind,
                n = h.options.enableProgressTooltip
                  ? '<span class="' +
                    g.options.classPrefix +
                    'time-float"><span class="' +
                    g.options.classPrefix +
                    'time-float-current">00:00</span><span class="' +
                    g.options.classPrefix +
                    'time-float-corner"></span></span>'
                  : "",
                o = p.default.createElement("div");
              (o.className = g.options.classPrefix + "time-rail"),
                (o.innerHTML =
                  '<span class="' +
                  g.options.classPrefix +
                  "time-total " +
                  g.options.classPrefix +
                  'time-slider"><span class="' +
                  g.options.classPrefix +
                  'time-buffering"></span><span class="' +
                  g.options.classPrefix +
                  'time-loaded"></span><span class="' +
                  g.options.classPrefix +
                  'time-current"></span><span class="' +
                  g.options.classPrefix +
                  'time-hovered no-hover"></span><span class="' +
                  g.options.classPrefix +
                  'time-handle"><span class="' +
                  g.options.classPrefix +
                  'time-handle-content"></span></span>' +
                  n +
                  "</span>"),
                g.addControlElement(o, "progress"),
                g.options.keyActions.push(
                  {
                    keys: [37, 227],
                    action: function (e) {
                      if (!isNaN(e.duration) && 0 < e.duration) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + g.options.classPrefix + "time-total"
                          );
                        t && t.focus();
                        var n = Math.max(
                          e.currentTime -
                            e.options.defaultSeekBackwardInterval(e),
                          0
                        );
                        e.paused || e.pause(),
                          setTimeout(function () {
                            e.setCurrentTime(n);
                          }, 0),
                          setTimeout(function () {
                            e.play();
                          }, 0);
                      }
                    },
                  },
                  {
                    keys: [39, 228],
                    action: function (e) {
                      if (!isNaN(e.duration) && 0 < e.duration) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + g.options.classPrefix + "time-total"
                          );
                        t && t.focus();
                        var n = Math.min(
                          e.currentTime +
                            e.options.defaultSeekForwardInterval(e),
                          e.duration
                        );
                        e.paused || e.pause(),
                          setTimeout(function () {
                            e.setCurrentTime(n);
                          }, 0),
                          setTimeout(function () {
                            e.play();
                          }, 0);
                      }
                    },
                  }
                ),
                (g.rail = s.querySelector(
                  "." + g.options.classPrefix + "time-rail"
                )),
                (g.total = s.querySelector(
                  "." + g.options.classPrefix + "time-total"
                )),
                (g.loaded = s.querySelector(
                  "." + g.options.classPrefix + "time-loaded"
                )),
                (g.current = s.querySelector(
                  "." + g.options.classPrefix + "time-current"
                )),
                (g.handle = s.querySelector(
                  "." + g.options.classPrefix + "time-handle"
                )),
                (g.timefloat = s.querySelector(
                  "." + g.options.classPrefix + "time-float"
                )),
                (g.timefloatcurrent = s.querySelector(
                  "." + g.options.classPrefix + "time-float-current"
                )),
                (g.slider = s.querySelector(
                  "." + g.options.classPrefix + "time-slider"
                )),
                (g.hovered = s.querySelector(
                  "." + g.options.classPrefix + "time-hovered"
                )),
                (g.buffer = s.querySelector(
                  "." + g.options.classPrefix + "time-buffering"
                )),
                (g.newTime = 0),
                (g.forcedHandlePause = !1),
                (g.setTransformStyle = function (e, t) {
                  (e.style.transform = t),
                    (e.style.webkitTransform = t),
                    (e.style.MozTransform = t),
                    (e.style.msTransform = t),
                    (e.style.OTransform = t);
                }),
                (g.buffer.style.display = "none");
              var i = function (e) {
                  var t = getComputedStyle(g.total),
                    n = (0, b.offset)(g.total),
                    o = g.total.offsetWidth,
                    i =
                      void 0 !== t.webkitTransform
                        ? "webkitTransform"
                        : void 0 !== t.mozTransform
                        ? "mozTransform "
                        : void 0 !== t.oTransform
                        ? "oTransform"
                        : void 0 !== t.msTransform
                        ? "msTransform"
                        : "transform",
                    r =
                      "WebKitCSSMatrix" in window
                        ? "WebKitCSSMatrix"
                        : "MSCSSMatrix" in window
                        ? "MSCSSMatrix"
                        : "CSSMatrix" in window
                        ? "CSSMatrix"
                        : void 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    d = void 0;
                  if (
                    ((d =
                      e.originalEvent && e.originalEvent.changedTouches
                        ? e.originalEvent.changedTouches[0].pageX
                        : e.changedTouches
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    g.getDuration())
                  ) {
                    if (
                      (d < n.left
                        ? (d = n.left)
                        : d > o + n.left && (d = o + n.left),
                      (a = (l = d - n.left) / o),
                      (g.newTime = a * g.getDuration()),
                      v &&
                        null !== g.getCurrentTime() &&
                        g.newTime.toFixed(4) !==
                          g.getCurrentTime().toFixed(4) &&
                        (g.setCurrentRailHandle(g.newTime),
                        g.updateCurrent(g.newTime)),
                      !y.IS_IOS && !y.IS_ANDROID)
                    ) {
                      if (
                        (l < 0 && (l = 0),
                        g.options.useSmoothHover &&
                          null !== r &&
                          void 0 !== window[r])
                      ) {
                        var u = new window[r](getComputedStyle(g.handle)[i])
                            .m41,
                          c =
                            l / parseFloat(getComputedStyle(g.total).width) -
                            u / parseFloat(getComputedStyle(g.total).width);
                        (g.hovered.style.left = u + "px"),
                          g.setTransformStyle(g.hovered, "scaleX(" + c + ")"),
                          g.hovered.setAttribute("pos", l),
                          0 <= c
                            ? (0, b.removeClass)(g.hovered, "negative")
                            : (0, b.addClass)(g.hovered, "negative");
                      }
                      if (g.timefloat) {
                        var f = g.timefloat.offsetWidth / 2,
                          p = mejs.Utils.offset(g.getElement(g.container)),
                          m = getComputedStyle(g.timefloat);
                        (s =
                          d - p.left < g.timefloat.offsetWidth
                            ? f
                            : d - p.left >=
                              g.getElement(g.container).offsetWidth - f
                            ? g.total.offsetWidth - f
                            : l),
                          (0, b.hasClass)(
                            g.getElement(g.container),
                            g.options.classPrefix + "long-video"
                          ) &&
                            (s +=
                              parseFloat(m.marginLeft) / 2 +
                              g.timefloat.offsetWidth / 2),
                          (g.timefloat.style.left = s + "px"),
                          (g.timefloatcurrent.innerHTML = (0,
                          E.secondsToTimeCode)(
                            g.newTime,
                            h.options.alwaysShowHours,
                            h.options.showTimecodeFrameCount,
                            h.options.framesPerSecond,
                            h.options.secondsDecimalLength,
                            h.options.timeFormat
                          )),
                          (g.timefloat.style.display = "block");
                      }
                    }
                  } else
                    y.IS_IOS ||
                      y.IS_ANDROID ||
                      !g.timefloat ||
                      ((s =
                        g.timefloat.offsetWidth + o >=
                        g.getElement(g.container).offsetWidth
                          ? g.timefloat.offsetWidth / 2
                          : 0),
                      (g.timefloat.style.left = s + "px"),
                      (g.timefloat.style.left = s + "px"),
                      (g.timefloat.style.display = "block"));
                },
                f = function () {
                  1e3 <= new Date() - u && g.play();
                };
              g.slider.addEventListener("focus", function () {
                h.options.autoRewind = !1;
              }),
                g.slider.addEventListener("blur", function () {
                  h.options.autoRewind = t;
                }),
                g.slider.addEventListener("keydown", function (e) {
                  if (
                    (1e3 <= new Date() - u && (c = g.paused),
                    g.options.enableKeyboard && g.options.keyActions.length)
                  ) {
                    var t = e.which || e.keyCode || 0,
                      n = g.getDuration(),
                      o = h.options.defaultSeekForwardInterval(d),
                      i = h.options.defaultSeekBackwardInterval(d),
                      r = g.getCurrentTime(),
                      a = g
                        .getElement(g.container)
                        .querySelector(
                          "." + g.options.classPrefix + "volume-slider"
                        );
                    if (38 === t || 40 === t) {
                      a && (a.style.display = "block"),
                        g.isVideo && (g.showControls(), g.startControlsTimer());
                      var s =
                          38 === t
                            ? Math.min(g.volume + 0.1, 1)
                            : Math.max(g.volume - 0.1, 0),
                        l = s <= 0;
                      return g.setVolume(s), void g.setMuted(l);
                    }
                    switch ((a && (a.style.display = "none"), t)) {
                      case 37:
                        g.getDuration() !== 1 / 0 && (r -= i);
                        break;
                      case 39:
                        g.getDuration() !== 1 / 0 && (r += o);
                        break;
                      case 36:
                        r = 0;
                        break;
                      case 35:
                        r = n;
                        break;
                      case 13:
                      case 32:
                        return void (
                          y.IS_FIREFOX && (g.paused ? g.play() : g.pause())
                        );
                      default:
                        return;
                    }
                    (r = r < 0 || isNaN(r) ? 0 : n <= r ? n : Math.floor(r)),
                      (u = new Date()),
                      c || h.pause(),
                      setTimeout(function () {
                        g.setCurrentTime(r);
                      }, 0),
                      r < g.getDuration() && !c && setTimeout(f, 1100),
                      h.showControls(),
                      e.preventDefault(),
                      e.stopPropagation();
                  }
                });
              var r = ["mousedown", "touchstart"];
              g.slider.addEventListener("dragstart", function () {
                return !1;
              });
              for (var a = 0, l = r.length; a < l; a++)
                g.slider.addEventListener(
                  r[a],
                  function (e) {
                    if (
                      ((g.forcedHandlePause = !1),
                      g.getDuration() !== 1 / 0 &&
                        (1 === e.which || 0 === e.which))
                    ) {
                      g.paused || (g.pause(), (g.forcedHandlePause = !0)),
                        (v = !0),
                        i(e);
                      for (
                        var t = ["mouseup", "touchend"], n = 0, o = t.length;
                        n < o;
                        n++
                      )
                        g.getElement(g.container).addEventListener(
                          t[n],
                          function (e) {
                            var t = e.target;
                            (t === g.slider ||
                              t.closest(
                                "." + g.options.classPrefix + "time-slider"
                              )) &&
                              i(e);
                          }
                        );
                      g.globalBind("mouseup.dur touchend.dur", function () {
                        v &&
                          null !== g.getCurrentTime() &&
                          g.newTime.toFixed(4) !==
                            g.getCurrentTime().toFixed(4) &&
                          (g.setCurrentTime(g.newTime),
                          g.setCurrentRailHandle(g.newTime),
                          g.updateCurrent(g.newTime)),
                          g.forcedHandlePause && (g.slider.focus(), g.play()),
                          (g.forcedHandlePause = !1),
                          (v = !1),
                          g.timefloat && (g.timefloat.style.display = "none");
                      });
                    }
                  },
                  !(!y.SUPPORT_PASSIVE_EVENT || "touchstart" !== r[a]) && {
                    passive: !0,
                  }
                );
              g.slider.addEventListener("mouseenter", function (e) {
                e.target === g.slider &&
                  g.getDuration() !== 1 / 0 &&
                  (g
                    .getElement(g.container)
                    .addEventListener("mousemove", function (e) {
                      var t = e.target;
                      (t === g.slider ||
                        t.closest(
                          "." + g.options.classPrefix + "time-slider"
                        )) &&
                        i(e);
                    }),
                  !g.timefloat ||
                    y.IS_IOS ||
                    y.IS_ANDROID ||
                    (g.timefloat.style.display = "block"),
                  g.hovered &&
                    !y.IS_IOS &&
                    !y.IS_ANDROID &&
                    g.options.useSmoothHover &&
                    (0, b.removeClass)(g.hovered, "no-hover"));
              }),
                g.slider.addEventListener("mouseleave", function () {
                  g.getDuration() !== 1 / 0 &&
                    (v ||
                      (g.timefloat && (g.timefloat.style.display = "none"),
                      g.hovered &&
                        g.options.useSmoothHover &&
                        (0, b.addClass)(g.hovered, "no-hover")));
                }),
                (g.broadcastCallback = function (e) {
                  var t,
                    n,
                    o,
                    i,
                    r = s.querySelector(
                      "." + g.options.classPrefix + "broadcast"
                    );
                  if (g.options.forceLive || g.getDuration() === 1 / 0) {
                    if (!r && g.options.forceLive) {
                      var a = p.default.createElement("span");
                      (a.className = g.options.classPrefix + "broadcast"),
                        (a.innerText = m.default.t("mejs.live-broadcast")),
                        (g.slider.style.display = "none"),
                        g.rail.appendChild(a);
                    }
                  } else
                    r && ((g.slider.style.display = ""), r.remove()),
                      h.setProgressRail(e),
                      g.forcedHandlePause || h.setCurrentRail(e),
                      (t = g.getCurrentTime()),
                      (n = m.default.t("mejs.time-slider")),
                      (o = (0, E.secondsToTimeCode)(
                        t,
                        h.options.alwaysShowHours,
                        h.options.showTimecodeFrameCount,
                        h.options.framesPerSecond,
                        h.options.secondsDecimalLength,
                        h.options.timeFormat
                      )),
                      (i = g.getDuration()),
                      g.slider.setAttribute("role", "slider"),
                      (g.slider.tabIndex = 0),
                      d.paused
                        ? (g.slider.setAttribute("aria-label", n),
                          g.slider.setAttribute("aria-valuemin", 0),
                          g.slider.setAttribute(
                            "aria-valuemax",
                            isNaN(i) ? 0 : i
                          ),
                          g.slider.setAttribute("aria-valuenow", t),
                          g.slider.setAttribute("aria-valuetext", o))
                        : (g.slider.removeAttribute("aria-label"),
                          g.slider.removeAttribute("aria-valuemin"),
                          g.slider.removeAttribute("aria-valuemax"),
                          g.slider.removeAttribute("aria-valuenow"),
                          g.slider.removeAttribute("aria-valuetext"));
                }),
                d.addEventListener("progress", g.broadcastCallback),
                d.addEventListener("timeupdate", g.broadcastCallback),
                d.addEventListener("play", function () {
                  g.buffer.style.display = "none";
                }),
                d.addEventListener("playing", function () {
                  g.buffer.style.display = "none";
                }),
                d.addEventListener("seeking", function () {
                  g.buffer.style.display = "";
                }),
                d.addEventListener("seeked", function () {
                  g.buffer.style.display = "none";
                }),
                d.addEventListener("pause", function () {
                  g.buffer.style.display = "none";
                }),
                d.addEventListener("waiting", function () {
                  g.buffer.style.display = "";
                }),
                d.addEventListener("loadeddata", function () {
                  g.buffer.style.display = "";
                }),
                d.addEventListener("canplay", function () {
                  g.buffer.style.display = "none";
                }),
                d.addEventListener("error", function () {
                  g.buffer.style.display = "none";
                }),
                g
                  .getElement(g.container)
                  .addEventListener("controlsresize", function (e) {
                    g.getDuration() !== 1 / 0 &&
                      (h.setProgressRail(e),
                      g.forcedHandlePause || h.setCurrentRail(e));
                  });
            },
            cleanprogress: function (e, t, n, o) {
              o.removeEventListener("progress", e.broadcastCallback),
                o.removeEventListener("timeupdate", e.broadcastCallback),
                e.rail && e.rail.remove();
            },
            setProgressRail: function (e) {
              var t = this,
                n = void 0 !== e ? e.detail.target || e.target : t.media,
                o = null;
              n &&
              n.buffered &&
              0 < n.buffered.length &&
              n.buffered.end &&
              t.getDuration()
                ? (o = n.buffered.end(n.buffered.length - 1) / t.getDuration())
                : n &&
                  void 0 !== n.bytesTotal &&
                  0 < n.bytesTotal &&
                  void 0 !== n.bufferedBytes
                ? (o = n.bufferedBytes / n.bytesTotal)
                : e &&
                  e.lengthComputable &&
                  0 !== e.total &&
                  (o = e.loaded / e.total),
                null !== o &&
                  ((o = Math.min(1, Math.max(0, o))),
                  t.loaded &&
                    t.setTransformStyle(t.loaded, "scaleX(" + o + ")"));
            },
            setCurrentRailHandle: function (e) {
              this.setCurrentRailMain(this, e);
            },
            setCurrentRail: function () {
              this.setCurrentRailMain(this);
            },
            setCurrentRailMain: function (e, t) {
              if (void 0 !== e.getCurrentTime() && e.getDuration()) {
                var n = void 0 === t ? e.getCurrentTime() : t;
                if (e.total && e.handle) {
                  var o = parseFloat(getComputedStyle(e.total).width),
                    i = Math.round((o * n) / e.getDuration()),
                    r = i - Math.round(e.handle.offsetWidth / 2);
                  if (
                    ((r = r < 0 ? 0 : r),
                    e.setTransformStyle(e.current, "scaleX(" + i / o + ")"),
                    e.setTransformStyle(e.handle, "translateX(" + r + "px)"),
                    e.options.useSmoothHover &&
                      !(0, b.hasClass)(e.hovered, "no-hover"))
                  ) {
                    var a = parseInt(e.hovered.getAttribute("pos"), 10),
                      s = (a = isNaN(a) ? 0 : a) / o - r / o;
                    (e.hovered.style.left = r + "px"),
                      e.setTransformStyle(e.hovered, "scaleX(" + s + ")"),
                      0 <= s
                        ? (0, b.removeClass)(e.hovered, "negative")
                        : (0, b.addClass)(e.hovered, "negative");
                  }
                }
              }
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 30: 30, 5: 5 },
    ],
    12: [
      function (e, t, n) {
        "use strict";
        var a = r(e(2)),
          o = e(16),
          i = r(o),
          s = e(30),
          l = e(26);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          duration: 0,
          timeAndDurationSeparator: "<span> | </span>",
        }),
          Object.assign(i.default.prototype, {
            buildcurrent: function (e, t, n, o) {
              var i = this,
                r = a.default.createElement("div");
              (r.className = i.options.classPrefix + "time"),
                r.setAttribute("role", "timer"),
                r.setAttribute("aria-live", "off"),
                (r.innerHTML =
                  '<span class="' +
                  i.options.classPrefix +
                  'currenttime">' +
                  (0, s.secondsToTimeCode)(
                    0,
                    e.options.alwaysShowHours,
                    e.options.showTimecodeFrameCount,
                    e.options.framesPerSecond,
                    e.options.secondsDecimalLength,
                    e.options.timeFormat
                  ) +
                  "</span>"),
                i.addControlElement(r, "current"),
                e.updateCurrent(),
                (i.updateTimeCallback = function () {
                  i.controlsAreVisible && e.updateCurrent();
                }),
                o.addEventListener("timeupdate", i.updateTimeCallback);
            },
            cleancurrent: function (e, t, n, o) {
              o.removeEventListener("timeupdate", e.updateTimeCallback);
            },
            buildduration: function (e, t, n, o) {
              var i = this;
              if (
                t.lastChild.querySelector(
                  "." + i.options.classPrefix + "currenttime"
                )
              )
                t.querySelector(
                  "." + i.options.classPrefix + "time"
                ).innerHTML +=
                  i.options.timeAndDurationSeparator +
                  '<span class="' +
                  i.options.classPrefix +
                  'duration">' +
                  (0, s.secondsToTimeCode)(
                    i.options.duration,
                    i.options.alwaysShowHours,
                    i.options.showTimecodeFrameCount,
                    i.options.framesPerSecond,
                    i.options.secondsDecimalLength,
                    i.options.timeFormat
                  ) +
                  "</span>";
              else {
                t.querySelector("." + i.options.classPrefix + "currenttime") &&
                  (0, l.addClass)(
                    t.querySelector("." + i.options.classPrefix + "currenttime")
                      .parentNode,
                    i.options.classPrefix + "currenttime-container"
                  );
                var r = a.default.createElement("div");
                (r.className =
                  i.options.classPrefix +
                  "time " +
                  i.options.classPrefix +
                  "duration-container"),
                  (r.innerHTML =
                    '<span class="' +
                    i.options.classPrefix +
                    'duration">' +
                    (0, s.secondsToTimeCode)(
                      i.options.duration,
                      i.options.alwaysShowHours,
                      i.options.showTimecodeFrameCount,
                      i.options.framesPerSecond,
                      i.options.secondsDecimalLength,
                      i.options.timeFormat
                    ) +
                    "</span>"),
                  i.addControlElement(r, "duration");
              }
              (i.updateDurationCallback = function () {
                i.controlsAreVisible && e.updateDuration();
              }),
                o.addEventListener("timeupdate", i.updateDurationCallback);
            },
            cleanduration: function (e, t, n, o) {
              o.removeEventListener("timeupdate", e.updateDurationCallback);
            },
            updateCurrent: function () {
              var e = this,
                t = e.getCurrentTime();
              isNaN(t) && (t = 0);
              var n = (0, s.secondsToTimeCode)(
                t,
                e.options.alwaysShowHours,
                e.options.showTimecodeFrameCount,
                e.options.framesPerSecond,
                e.options.secondsDecimalLength,
                e.options.timeFormat
              );
              5 < n.length
                ? (0, l.addClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  )
                : (0, l.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  ),
                e
                  .getElement(e.controls)
                  .querySelector("." + e.options.classPrefix + "currenttime") &&
                  (e
                    .getElement(e.controls)
                    .querySelector(
                      "." + e.options.classPrefix + "currenttime"
                    ).innerText = n);
            },
            updateDuration: function () {
              var e = this,
                t = e.getDuration();
              void 0 !== e.media &&
                (isNaN(t) || t === 1 / 0 || t < 0) &&
                (e.media.duration = e.options.duration = t = 0),
                0 < e.options.duration && (t = e.options.duration);
              var n = (0, s.secondsToTimeCode)(
                t,
                e.options.alwaysShowHours,
                e.options.showTimecodeFrameCount,
                e.options.framesPerSecond,
                e.options.secondsDecimalLength,
                e.options.timeFormat
              );
              5 < n.length
                ? (0, l.addClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  )
                : (0, l.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  ),
                e
                  .getElement(e.controls)
                  .querySelector("." + e.options.classPrefix + "duration") &&
                  0 < t &&
                  (e
                    .getElement(e.controls)
                    .querySelector(
                      "." + e.options.classPrefix + "duration"
                    ).innerHTML = n);
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 30: 30 },
    ],
    13: [
      function (e, t, n) {
        "use strict";
        var L = r(e(2)),
          d = r(e(7)),
          F = r(e(5)),
          o = e(16),
          i = r(o),
          m = e(30),
          j = e(27),
          I = e(26);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          startLanguage: "",
          tracksText: null,
          chaptersText: null,
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: "",
        }),
          Object.assign(i.default.prototype, {
            hasChapters: !1,
            buildtracks: function (o, e, t, n) {
              if (
                (this.findTracks(),
                o.tracks.length || (o.trackFiles && 0 !== !o.trackFiles.length))
              ) {
                var i = this,
                  r = i.options.tracksAriaLive
                    ? ' role="log" aria-live="assertive" aria-atomic="false"'
                    : "",
                  a = (0, j.isString)(i.options.tracksText)
                    ? i.options.tracksText
                    : F.default.t("mejs.captions-subtitles"),
                  s = (0, j.isString)(i.options.chaptersText)
                    ? i.options.chaptersText
                    : F.default.t("mejs.captions-chapters"),
                  l =
                    null === o.trackFiles
                      ? o.tracks.length
                      : o.trackFiles.length;
                if (i.domNode.textTracks)
                  for (var d = i.domNode.textTracks.length - 1; 0 <= d; d--)
                    i.domNode.textTracks[d].mode = "hidden";
                i.cleartracks(o),
                  (o.captions = L.default.createElement("div")),
                  (o.captions.className =
                    i.options.classPrefix +
                    "captions-layer " +
                    i.options.classPrefix +
                    "layer"),
                  (o.captions.innerHTML =
                    '<div class="' +
                    i.options.classPrefix +
                    "captions-position " +
                    i.options.classPrefix +
                    'captions-position-hover"' +
                    r +
                    '><span class="' +
                    i.options.classPrefix +
                    'captions-text"></span></div>'),
                  (o.captions.style.display = "none"),
                  t.insertBefore(o.captions, t.firstChild),
                  (o.captionsText = o.captions.querySelector(
                    "." + i.options.classPrefix + "captions-text"
                  )),
                  (o.captionsButton = L.default.createElement("div")),
                  (o.captionsButton.className =
                    i.options.classPrefix +
                    "button " +
                    i.options.classPrefix +
                    "captions-button"),
                  (o.captionsButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    i.id +
                    '" title="' +
                    a +
                    '" aria-label="' +
                    a +
                    '" tabindex="0"></button><div class="' +
                    i.options.classPrefix +
                    "captions-selector " +
                    i.options.classPrefix +
                    'offscreen"><ul class="' +
                    i.options.classPrefix +
                    'captions-selector-list"><li class="' +
                    i.options.classPrefix +
                    'captions-selector-list-item"><input type="radio" class="' +
                    i.options.classPrefix +
                    'captions-selector-input" name="' +
                    o.id +
                    '_captions" id="' +
                    o.id +
                    '_captions_none" value="none" checked disabled><label class="' +
                    i.options.classPrefix +
                    "captions-selector-label " +
                    i.options.classPrefix +
                    'captions-selected" for="' +
                    o.id +
                    '_captions_none">' +
                    F.default.t("mejs.none") +
                    "</label></li></ul></div>"),
                  i.addControlElement(o.captionsButton, "tracks"),
                  (o.captionsButton.querySelector(
                    "." + i.options.classPrefix + "captions-selector-input"
                  ).disabled = !1),
                  (o.chaptersButton = L.default.createElement("div")),
                  (o.chaptersButton.className =
                    i.options.classPrefix +
                    "button " +
                    i.options.classPrefix +
                    "chapters-button"),
                  (o.chaptersButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    i.id +
                    '" title="' +
                    s +
                    '" aria-label="' +
                    s +
                    '" tabindex="0"></button><div class="' +
                    i.options.classPrefix +
                    "chapters-selector " +
                    i.options.classPrefix +
                    'offscreen"><ul class="' +
                    i.options.classPrefix +
                    'chapters-selector-list"></ul></div>');
                for (var u = 0, c = 0; c < l; c++) {
                  var f = o.tracks[c].kind;
                  o.tracks[c].src.trim() &&
                    ("subtitles" === f || "captions" === f
                      ? u++
                      : "chapters" !== f ||
                        e.querySelector(
                          "." + i.options.classPrefix + "chapter-selector"
                        ) ||
                        o.captionsButton.parentNode.insertBefore(
                          o.chaptersButton,
                          o.captionsButton
                        ));
                }
                (o.trackToLoad = -1),
                  (o.selectedTrack = null),
                  (o.isLoadingTrack = !1);
                for (var p = 0; p < l; p++) {
                  var m = o.tracks[p].kind;
                  !o.tracks[p].src.trim() ||
                    ("subtitles" !== m && "captions" !== m) ||
                    o.addTrackButton(
                      o.tracks[p].trackId,
                      o.tracks[p].srclang,
                      o.tracks[p].label
                    );
                }
                o.loadNextTrack();
                var h = ["mouseenter", "focusin"],
                  v = ["mouseleave", "focusout"];
                if (i.options.toggleCaptionsButtonWhenOnlyOne && 1 === u)
                  o.captionsButton.addEventListener("click", function (e) {
                    var t = "none";
                    null === o.selectedTrack && (t = o.tracks[0].trackId);
                    var n = e.keyCode || e.which;
                    o.setTrack(t, void 0 !== n);
                  });
                else {
                  for (
                    var g = o.captionsButton.querySelectorAll(
                        "." + i.options.classPrefix + "captions-selector-label"
                      ),
                      y =
                        o.captionsButton.querySelectorAll("input[type=radio]"),
                      E = 0,
                      b = h.length;
                    E < b;
                    E++
                  )
                    o.captionsButton.addEventListener(h[E], function () {
                      (0,
                      I.removeClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen");
                    });
                  for (var S = 0, x = v.length; S < x; S++)
                    o.captionsButton.addEventListener(v[S], function () {
                      (0,
                      I.addClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen");
                    });
                  for (var w = 0, P = y.length; w < P; w++)
                    y[w].addEventListener("click", function (e) {
                      var t = e.keyCode || e.which;
                      o.setTrack(this.value, void 0 !== t);
                    });
                  for (var T = 0, C = g.length; T < C; T++)
                    g[T].addEventListener("click", function (e) {
                      var t = (0, I.siblings)(this, function (e) {
                          return "INPUT" === e.tagName;
                        })[0],
                        n = (0, j.createEvent)("click", t);
                      t.dispatchEvent(n), e.preventDefault();
                    });
                  o.captionsButton.addEventListener("keydown", function (e) {
                    e.stopPropagation();
                  });
                }
                for (var k = 0, _ = h.length; k < _; k++)
                  o.chaptersButton.addEventListener(h[k], function () {
                    this.querySelector(
                      "." + i.options.classPrefix + "chapters-selector-list"
                    ).children.length &&
                      (0, I.removeClass)(
                        this.querySelector(
                          "." + i.options.classPrefix + "chapters-selector"
                        ),
                        i.options.classPrefix + "offscreen"
                      );
                  });
                for (var N = 0, A = v.length; N < A; N++)
                  o.chaptersButton.addEventListener(v[N], function () {
                    (0,
                    I.addClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen");
                  });
                o.chaptersButton.addEventListener("keydown", function (e) {
                  e.stopPropagation();
                }),
                  o.options.alwaysShowControls
                    ? (0, I.addClass)(
                        o
                          .getElement(o.container)
                          .querySelector(
                            "." + i.options.classPrefix + "captions-position"
                          ),
                        i.options.classPrefix + "captions-position-hover"
                      )
                    : (o
                        .getElement(o.container)
                        .addEventListener("controlsshown", function () {
                          (0,
                          I.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover");
                        }),
                      o
                        .getElement(o.container)
                        .addEventListener("controlshidden", function () {
                          n.paused ||
                            (0, I.removeClass)(
                              o
                                .getElement(o.container)
                                .querySelector(
                                  "." +
                                    i.options.classPrefix +
                                    "captions-position"
                                ),
                              i.options.classPrefix + "captions-position-hover"
                            );
                        })),
                  n.addEventListener("timeupdate", function () {
                    o.displayCaptions();
                  }),
                  "" !== o.options.slidesSelector &&
                    ((o.slidesContainer = L.default.querySelectorAll(
                      o.options.slidesSelector
                    )),
                    n.addEventListener("timeupdate", function () {
                      o.displaySlides();
                    }));
              }
            },
            cleartracks: function (e) {
              e &&
                (e.captions && e.captions.remove(),
                e.chapters && e.chapters.remove(),
                e.captionsText && e.captionsText.remove(),
                e.captionsButton && e.captionsButton.remove(),
                e.chaptersButton && e.chaptersButton.remove());
            },
            rebuildtracks: function () {
              var e = this;
              e.findTracks(),
                e.buildtracks(
                  e,
                  e.getElement(e.controls),
                  e.getElement(e.layers),
                  e.media
                );
            },
            findTracks: function () {
              var e = this,
                t =
                  null === e.trackFiles
                    ? e.node.querySelectorAll("track")
                    : e.trackFiles,
                n = t.length;
              e.tracks = [];
              for (var o = 0; o < n; o++) {
                var i = t[o],
                  r = i.getAttribute("srclang").toLowerCase() || "",
                  a =
                    e.id +
                    "_track_" +
                    o +
                    "_" +
                    i.getAttribute("kind") +
                    "_" +
                    r;
                e.tracks.push({
                  trackId: a,
                  srclang: r,
                  src: i.getAttribute("src"),
                  kind: i.getAttribute("kind"),
                  label: i.getAttribute("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
              }
            },
            setTrack: function (e, t) {
              for (
                var n = this,
                  o = n.captionsButton.querySelectorAll('input[type="radio"]'),
                  i = n.captionsButton.querySelectorAll(
                    "." + n.options.classPrefix + "captions-selected"
                  ),
                  r = n.captionsButton.querySelector(
                    'input[value="' + e + '"]'
                  ),
                  a = 0,
                  s = o.length;
                a < s;
                a++
              )
                o[a].checked = !1;
              for (var l = 0, d = i.length; l < d; l++)
                (0, I.removeClass)(
                  i[l],
                  n.options.classPrefix + "captions-selected"
                );
              r.checked = !0;
              for (
                var u = (0, I.siblings)(r, function (e) {
                    return (0,
                    I.hasClass)(e, n.options.classPrefix + "captions-selector-label");
                  }),
                  c = 0,
                  f = u.length;
                c < f;
                c++
              )
                (0, I.addClass)(
                  u[c],
                  n.options.classPrefix + "captions-selected"
                );
              if ("none" === e)
                (n.selectedTrack = null),
                  (0, I.removeClass)(
                    n.captionsButton,
                    n.options.classPrefix + "captions-enabled"
                  );
              else
                for (var p = 0, m = n.tracks.length; p < m; p++) {
                  var h = n.tracks[p];
                  if (h.trackId === e) {
                    null === n.selectedTrack &&
                      (0, I.addClass)(
                        n.captionsButton,
                        n.options.classPrefix + "captions-enabled"
                      ),
                      (n.selectedTrack = h),
                      n.captions.setAttribute("lang", n.selectedTrack.srclang),
                      n.displayCaptions();
                    break;
                  }
                }
              var v = (0, j.createEvent)("captionschange", n.media);
              (v.detail.caption = n.selectedTrack),
                n.media.dispatchEvent(v),
                t ||
                  setTimeout(function () {
                    n.getElement(n.container).focus();
                  }, 500);
            },
            loadNextTrack: function () {
              var e = this;
              e.trackToLoad++,
                e.trackToLoad < e.tracks.length
                  ? ((e.isLoadingTrack = !0), e.loadTrack(e.trackToLoad))
                  : ((e.isLoadingTrack = !1), e.checkForTracks());
            },
            loadTrack: function (e) {
              var t = this,
                n = t.tracks[e];
              void 0 === n ||
                (void 0 === n.src && "" === n.src) ||
                (0, I.ajax)(
                  n.src,
                  "text",
                  function (e) {
                    (n.entries =
                      "string" == typeof e && /<tt\s+xml/gi.exec(e)
                        ? d.default.TrackFormatParser.dfxp.parse(e)
                        : d.default.TrackFormatParser.webvtt.parse(e)),
                      (n.isLoaded = !0),
                      t.enableTrackButton(n),
                      t.loadNextTrack(),
                      "slides" === n.kind
                        ? t.setupSlides(n)
                        : "chapters" !== n.kind ||
                          t.hasChapters ||
                          (t.drawChapters(n), (t.hasChapters = !0));
                  },
                  function () {
                    t.removeTrackButton(n.trackId), t.loadNextTrack();
                  }
                );
            },
            enableTrackButton: function (e) {
              var t = this,
                n = e.srclang,
                o = L.default.getElementById("" + e.trackId);
              if (o) {
                var i = e.label;
                "" === i && (i = F.default.t(d.default.language.codes[n]) || n),
                  (o.disabled = !1);
                for (
                  var r = (0, I.siblings)(o, function (e) {
                      return (0,
                      I.hasClass)(e, t.options.classPrefix + "captions-selector-label");
                    }),
                    a = 0,
                    s = r.length;
                  a < s;
                  a++
                )
                  r[a].innerHTML = i;
                if (t.options.startLanguage === n) {
                  o.checked = !0;
                  var l = (0, j.createEvent)("click", o);
                  o.dispatchEvent(l);
                }
              }
            },
            removeTrackButton: function (e) {
              var t = L.default.getElementById("" + e);
              if (t) {
                var n = t.closest("li");
                n && n.remove();
              }
            },
            addTrackButton: function (e, t, n) {
              var o = this;
              "" === n && (n = F.default.t(d.default.language.codes[t]) || t),
                (o.captionsButton.querySelector("ul").innerHTML +=
                  '<li class="' +
                  o.options.classPrefix +
                  'captions-selector-list-item"><input type="radio" class="' +
                  o.options.classPrefix +
                  'captions-selector-input" name="' +
                  o.id +
                  '_captions" id="' +
                  e +
                  '" value="' +
                  e +
                  '" disabled><label class="' +
                  o.options.classPrefix +
                  'captions-selector-label"for="' +
                  e +
                  '">' +
                  n +
                  " (loading)</label></li>");
            },
            checkForTracks: function () {
              var e = this,
                t = !1;
              if (e.options.hideCaptionsButtonWhenEmpty) {
                for (var n = 0, o = e.tracks.length; n < o; n++) {
                  var i = e.tracks[n].kind;
                  if (
                    ("subtitles" === i || "captions" === i) &&
                    e.tracks[n].isLoaded
                  ) {
                    t = !0;
                    break;
                  }
                }
                (e.captionsButton.style.display = t ? "" : "none"),
                  e.setControlsSize();
              }
            },
            displayCaptions: function () {
              if (void 0 !== this.tracks) {
                var e = this,
                  t = e.selectedTrack;
                if (null !== t && t.isLoaded) {
                  var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                  if (-1 < n) {
                    var o = t.entries[n].text;
                    return (
                      "function" == typeof e.options.captionTextPreprocessor &&
                        (o = e.options.captionTextPreprocessor(o)),
                      (e.captionsText.innerHTML = (function (e) {
                        var t = L.default.createElement("div");
                        t.innerHTML = e;
                        for (
                          var n = t.getElementsByTagName("script"),
                            o = n.length;
                          o--;

                        )
                          n[o].remove();
                        for (
                          var i = t.getElementsByTagName("*"),
                            r = 0,
                            a = i.length;
                          r < a;
                          r++
                        )
                          for (
                            var s = i[r].attributes,
                              l = Array.prototype.slice.call(s),
                              d = 0,
                              u = l.length;
                            d < u;
                            d++
                          )
                            l[d].name.startsWith("on") ||
                            l[d].value.startsWith("javascript")
                              ? i[r].remove()
                              : "style" === l[d].name &&
                                i[r].removeAttribute(l[d].name);
                        return t.innerHTML;
                      })(o)),
                      (e.captionsText.className =
                        e.options.classPrefix +
                        "captions-text " +
                        (t.entries[n].identifier || "")),
                      (e.captions.style.display = ""),
                      void (e.captions.style.height = "0px")
                    );
                  }
                  e.captions.style.display = "none";
                } else e.captions.style.display = "none";
              }
            },
            setupSlides: function (e) {
              (this.slides = e),
                (this.slides.entries.imgs = [this.slides.entries.length]),
                this.showSlide(0);
            },
            showSlide: function (e) {
              var i = this,
                r = this;
              if (void 0 !== r.tracks && void 0 !== r.slidesContainer) {
                var t = r.slides.entries[e].text,
                  n = r.slides.entries[e].imgs;
                if (void 0 === n || void 0 === n.fadeIn) {
                  var a = L.default.createElement("img");
                  (a.src = t),
                    a.addEventListener("load", function () {
                      var e = i,
                        t = (0, I.siblings)(e, function (e) {
                          return t(e);
                        });
                      (e.style.display = "none"),
                        (r.slidesContainer.innerHTML += e.innerHTML),
                        (0, I.fadeIn)(r.slidesContainer.querySelector(a));
                      for (var n = 0, o = t.length; n < o; n++)
                        (0, I.fadeOut)(t[n], 400);
                    }),
                    (r.slides.entries[e].imgs = n = a);
                } else if (!(0, I.visible)(n)) {
                  var o = (0, I.siblings)(self, function (e) {
                    return o(e);
                  });
                  (0, I.fadeIn)(r.slidesContainer.querySelector(n));
                  for (var s = 0, l = o.length; s < l; s++)
                    (0, I.fadeOut)(o[s]);
                }
              }
            },
            displaySlides: function () {
              if (void 0 !== this.slides) {
                var e = this.slides,
                  t = this.searchTrackPosition(
                    e.entries,
                    this.media.currentTime
                  );
                -1 < t && this.showSlide(t);
              }
            },
            drawChapters: function (e) {
              var r = this,
                t = e.entries.length;
              if (t) {
                r.chaptersButton.querySelector("ul").innerHTML = "";
                for (var n = 0; n < t; n++)
                  r.chaptersButton.querySelector("ul").innerHTML +=
                    '<li class="' +
                    r.options.classPrefix +
                    'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' +
                    r.options.classPrefix +
                    'captions-selector-input" name="' +
                    r.id +
                    '_chapters" id="' +
                    r.id +
                    "_chapters_" +
                    n +
                    '" value="' +
                    e.entries[n].start +
                    '" disabled><label class="' +
                    r.options.classPrefix +
                    'chapters-selector-label"for="' +
                    r.id +
                    "_chapters_" +
                    n +
                    '">' +
                    e.entries[n].text +
                    "</label></li>";
                for (
                  var o = r.chaptersButton.querySelectorAll(
                      'input[type="radio"]'
                    ),
                    i = r.chaptersButton.querySelectorAll(
                      "." + r.options.classPrefix + "chapters-selector-label"
                    ),
                    a = 0,
                    s = o.length;
                  a < s;
                  a++
                )
                  (o[a].disabled = !1),
                    (o[a].checked = !1),
                    o[a].addEventListener("click", function (e) {
                      var t = r.chaptersButton.querySelectorAll("li"),
                        n = (0, I.siblings)(this, function (e) {
                          return (0,
                          I.hasClass)(e, r.options.classPrefix + "chapters-selector-label");
                        })[0];
                      (this.checked = !0),
                        this.parentNode.setAttribute("aria-checked", !0),
                        (0, I.addClass)(
                          n,
                          r.options.classPrefix + "chapters-selected"
                        ),
                        (0, I.removeClass)(
                          r.chaptersButton.querySelector(
                            "." + r.options.classPrefix + "chapters-selected"
                          ),
                          r.options.classPrefix + "chapters-selected"
                        );
                      for (var o = 0, i = t.length; o < i; o++)
                        t[o].setAttribute("aria-checked", !1);
                      void 0 === (e.keyCode || e.which) &&
                        setTimeout(function () {
                          r.getElement(r.container).focus();
                        }, 500),
                        r.media.setCurrentTime(parseFloat(this.value)),
                        r.media.paused && r.media.play();
                    });
                for (var l = 0, d = i.length; l < d; l++)
                  i[l].addEventListener("click", function (e) {
                    var t = (0, I.siblings)(this, function (e) {
                        return "INPUT" === e.tagName;
                      })[0],
                      n = (0, j.createEvent)("click", t);
                    t.dispatchEvent(n), e.preventDefault();
                  });
              }
            },
            searchTrackPosition: function (e, t) {
              for (
                var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0;
                n <= o;

              ) {
                if (
                  ((r = e[(i = (n + o) >> 1)].start),
                  (a = e[i].stop),
                  r <= t && t < a)
                )
                  return i;
                r < t ? (n = i + 1) : t < r && (o = i - 1);
              }
              return -1;
            },
          }),
          (d.default.language = {
            codes: {
              af: "mejs.afrikaans",
              sq: "mejs.albanian",
              ar: "mejs.arabic",
              be: "mejs.belarusian",
              bg: "mejs.bulgarian",
              ca: "mejs.catalan",
              zh: "mejs.chinese",
              "zh-cn": "mejs.chinese-simplified",
              "zh-tw": "mejs.chines-traditional",
              hr: "mejs.croatian",
              cs: "mejs.czech",
              da: "mejs.danish",
              nl: "mejs.dutch",
              en: "mejs.english",
              et: "mejs.estonian",
              fl: "mejs.filipino",
              fi: "mejs.finnish",
              fr: "mejs.french",
              gl: "mejs.galician",
              de: "mejs.german",
              el: "mejs.greek",
              ht: "mejs.haitian-creole",
              iw: "mejs.hebrew",
              hi: "mejs.hindi",
              hu: "mejs.hungarian",
              is: "mejs.icelandic",
              id: "mejs.indonesian",
              ga: "mejs.irish",
              it: "mejs.italian",
              ja: "mejs.japanese",
              ko: "mejs.korean",
              lv: "mejs.latvian",
              lt: "mejs.lithuanian",
              mk: "mejs.macedonian",
              ms: "mejs.malay",
              mt: "mejs.maltese",
              no: "mejs.norwegian",
              fa: "mejs.persian",
              pl: "mejs.polish",
              pt: "mejs.portuguese",
              ro: "mejs.romanian",
              ru: "mejs.russian",
              sr: "mejs.serbian",
              sk: "mejs.slovak",
              sl: "mejs.slovenian",
              es: "mejs.spanish",
              sw: "mejs.swahili",
              sv: "mejs.swedish",
              tl: "mejs.tagalog",
              th: "mejs.thai",
              tr: "mejs.turkish",
              uk: "mejs.ukrainian",
              vi: "mejs.vietnamese",
              cy: "mejs.welsh",
              yi: "mejs.yiddish",
            },
          }),
          (d.default.TrackFormatParser = {
            webvtt: {
              pattern:
                /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
              parse: function (e) {
                for (
                  var t = e.split(/\r?\n/),
                    n = [],
                    o = void 0,
                    i = void 0,
                    r = void 0,
                    a = 0,
                    s = t.length;
                  a < s;
                  a++
                ) {
                  if ((o = this.pattern.exec(t[a])) && a < t.length) {
                    for (
                      0 <= a - 1 && "" !== t[a - 1] && (r = t[a - 1]),
                        i = t[++a],
                        a++;
                      "" !== t[a] && a < t.length;

                    )
                      (i = i + "\n" + t[a]), a++;
                    (i =
                      null === i
                        ? ""
                        : i
                            .trim()
                            .replace(
                              /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                              "<a href='$1' target='_blank'>$1</a>"
                            )),
                      n.push({
                        identifier: r,
                        start:
                          0 === (0, m.convertSMPTEtoSeconds)(o[1])
                            ? 0.2
                            : (0, m.convertSMPTEtoSeconds)(o[1]),
                        stop: (0, m.convertSMPTEtoSeconds)(o[3]),
                        text: i,
                        settings: o[5],
                      });
                  }
                  r = "";
                }
                return n;
              },
            },
            dfxp: {
              parse: function (e) {
                var t = (e = $(e).filter("tt")).firstChild,
                  n = t.querySelectorAll("p"),
                  o = e.getElementById("" + t.attr("style")),
                  i = [],
                  r = void 0;
                if (o.length) {
                  o.removeAttribute("id");
                  var a = o.attributes;
                  if (a.length) {
                    r = {};
                    for (var s = 0, l = a.length; s < l; s++)
                      r[a[s].name.split(":")[1]] = a[s].value;
                  }
                }
                for (var d = 0, u = n.length; d < u; d++) {
                  var c = void 0,
                    f = { start: null, stop: null, style: null, text: null };
                  if (
                    (n.eq(d).attr("begin") &&
                      (f.start = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d).attr("begin")
                      )),
                    !f.start &&
                      n.eq(d - 1).attr("end") &&
                      (f.start = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d - 1).attr("end")
                      )),
                    n.eq(d).attr("end") &&
                      (f.stop = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d).attr("end")
                      )),
                    !f.stop &&
                      n.eq(d + 1).attr("begin") &&
                      (f.stop = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d + 1).attr("begin")
                      )),
                    r)
                  )
                    for (var p in ((c = ""), r)) c += p + ":" + r[p] + ";";
                  c && (f.style = c),
                    0 === f.start && (f.start = 0.2),
                    (f.text = n
                      .eq(d)
                      .innerHTML.trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                    i.push(f);
                }
                return i;
              },
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 27: 27, 30: 30, 5: 5, 7: 7 },
    ],
    14: [
      function (e, t, n) {
        "use strict";
        var x = r(e(2)),
          o = e(16),
          i = r(o),
          w = r(e(5)),
          P = e(25),
          T = e(27),
          C = e(26);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          muteText: null,
          unmuteText: null,
          allyVolumeControlText: null,
          hideVolumeOnTouchDevices: !0,
          audioVolume: "horizontal",
          videoVolume: "vertical",
          startVolume: 0.8,
        }),
          Object.assign(i.default.prototype, {
            buildvolume: function (e, t, n, o) {
              if (
                (!P.IS_ANDROID && !P.IS_IOS) ||
                !this.options.hideVolumeOnTouchDevices
              ) {
                var a = this,
                  s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                  r = (0, T.isString)(a.options.muteText)
                    ? a.options.muteText
                    : w.default.t("mejs.mute"),
                  l = (0, T.isString)(a.options.unmuteText)
                    ? a.options.unmuteText
                    : w.default.t("mejs.unmute"),
                  i = (0, T.isString)(a.options.allyVolumeControlText)
                    ? a.options.allyVolumeControlText
                    : w.default.t("mejs.volume-help-text"),
                  d = x.default.createElement("div");
                if (
                  ((d.className =
                    a.options.classPrefix +
                    "button " +
                    a.options.classPrefix +
                    "volume-button " +
                    a.options.classPrefix +
                    "mute"),
                  (d.innerHTML =
                    "horizontal" === s
                      ? '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        r +
                        '" aria-label="' +
                        r +
                        '" tabindex="0"></button>'
                      : '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        r +
                        '" aria-label="' +
                        r +
                        '" tabindex="0"></button><a href="javascript:void(0);" class="' +
                        a.options.classPrefix +
                        'volume-slider" aria-label="' +
                        w.default.t("mejs.volume-slider") +
                        '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' +
                        a.options.classPrefix +
                        'offscreen">' +
                        i +
                        '</span><div class="' +
                        a.options.classPrefix +
                        'volume-total"><div class="' +
                        a.options.classPrefix +
                        'volume-current"></div><div class="' +
                        a.options.classPrefix +
                        'volume-handle"></div></div></a>'),
                  a.addControlElement(d, "volume"),
                  a.options.keyActions.push(
                    {
                      keys: [38],
                      action: function (e) {
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-slider"
                          );
                        t && t.matches(":focus") && (t.style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer());
                        var n = Math.min(e.volume + 0.1, 1);
                        e.setVolume(n), 0 < n && e.setMuted(!1);
                      },
                    },
                    {
                      keys: [40],
                      action: function (e) {
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-slider"
                          );
                        t && (t.style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer());
                        var n = Math.max(e.volume - 0.1, 0);
                        e.setVolume(n), n <= 0.1 && e.setMuted(!0);
                      },
                    },
                    {
                      keys: [77],
                      action: function (e) {
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-slider"
                          );
                        t && (t.style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer()),
                          e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
                      },
                    }
                  ),
                  "horizontal" === s)
                ) {
                  var u = x.default.createElement("a");
                  (u.className =
                    a.options.classPrefix + "horizontal-volume-slider"),
                    (u.href = "javascript:void(0);"),
                    u.setAttribute(
                      "aria-label",
                      w.default.t("mejs.volume-slider")
                    ),
                    u.setAttribute("aria-valuemin", 0),
                    u.setAttribute("aria-valuemax", 100),
                    u.setAttribute("aria-valuenow", 100),
                    u.setAttribute("role", "slider"),
                    (u.innerHTML +=
                      '<span class="' +
                      a.options.classPrefix +
                      'offscreen">' +
                      i +
                      '</span><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-total"><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-current"></div><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-handle"></div></div>'),
                    d.parentNode.insertBefore(u, d.nextSibling);
                }
                var c = !1,
                  f = !1,
                  p = !1,
                  m =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-slider"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-slider"
                          ),
                  h =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-total"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-total"
                          ),
                  v =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-current"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-current"
                          ),
                  g =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-handle"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-handle"
                          ),
                  y = function (e) {
                    if (null !== e && !isNaN(e) && void 0 !== e) {
                      if (((e = Math.max(0, e)), 0 === (e = Math.min(e, 1)))) {
                        (0, C.removeClass)(d, a.options.classPrefix + "mute"),
                          (0, C.addClass)(d, a.options.classPrefix + "unmute");
                        var t = d.firstElementChild;
                        t.setAttribute("title", l),
                          t.setAttribute("aria-label", l);
                      } else {
                        (0, C.removeClass)(d, a.options.classPrefix + "unmute"),
                          (0, C.addClass)(d, a.options.classPrefix + "mute");
                        var n = d.firstElementChild;
                        n.setAttribute("title", r),
                          n.setAttribute("aria-label", r);
                      }
                      var o = 100 * e + "%",
                        i = getComputedStyle(g);
                      "vertical" === s
                        ? ((v.style.bottom = 0),
                          (v.style.height = o),
                          (g.style.bottom = o),
                          (g.style.marginBottom =
                            -parseFloat(i.height) / 2 + "px"))
                        : ((v.style.left = 0),
                          (v.style.width = o),
                          (g.style.left = o),
                          (g.style.marginLeft =
                            -parseFloat(i.width) / 2 + "px"));
                    }
                  },
                  E = function (e) {
                    var t = (0, C.offset)(h),
                      n = getComputedStyle(h);
                    p = !0;
                    var o = null;
                    if ("vertical" === s) {
                      var i = parseFloat(n.height);
                      if (
                        ((o = (i - (e.pageY - t.top)) / i),
                        0 === t.top || 0 === t.left)
                      )
                        return;
                    } else {
                      var r = parseFloat(n.width);
                      o = (e.pageX - t.left) / r;
                    }
                    (o = Math.max(0, o)),
                      (o = Math.min(o, 1)),
                      y(o),
                      a.setMuted(0 === o),
                      a.setVolume(o),
                      e.preventDefault(),
                      e.stopPropagation();
                  },
                  b = function () {
                    a.muted
                      ? (y(0),
                        (0, C.removeClass)(d, a.options.classPrefix + "mute"),
                        (0, C.addClass)(d, a.options.classPrefix + "unmute"))
                      : (y(o.volume),
                        (0, C.removeClass)(d, a.options.classPrefix + "unmute"),
                        (0, C.addClass)(d, a.options.classPrefix + "mute"));
                  };
                e
                  .getElement(e.container)
                  .addEventListener("keydown", function (e) {
                    !!e.target.closest(
                      "." + a.options.classPrefix + "container"
                    ) ||
                      "vertical" !== s ||
                      (m.style.display = "none");
                  }),
                  d.addEventListener("mouseenter", function (e) {
                    e.target === d &&
                      ((m.style.display = "block"),
                      (f = !0),
                      e.preventDefault(),
                      e.stopPropagation());
                  }),
                  d.addEventListener("focusin", function () {
                    (m.style.display = "block"), (f = !0);
                  }),
                  d.addEventListener("focusout", function (e) {
                    (e.relatedTarget &&
                      (!e.relatedTarget ||
                        e.relatedTarget.matches(
                          "." + a.options.classPrefix + "volume-slider"
                        ))) ||
                      "vertical" !== s ||
                      (m.style.display = "none");
                  }),
                  d.addEventListener("mouseleave", function () {
                    (f = !1),
                      c || "vertical" !== s || (m.style.display = "none");
                  }),
                  d.addEventListener("focusout", function () {
                    f = !1;
                  }),
                  d.addEventListener("keydown", function (e) {
                    if (
                      a.options.enableKeyboard &&
                      a.options.keyActions.length
                    ) {
                      var t = e.which || e.keyCode || 0,
                        n = o.volume;
                      switch (t) {
                        case 38:
                          n = Math.min(n + 0.1, 1);
                          break;
                        case 40:
                          n = Math.max(0, n - 0.1);
                          break;
                        default:
                          return !0;
                      }
                      (c = !1),
                        y(n),
                        o.setVolume(n),
                        e.preventDefault(),
                        e.stopPropagation();
                    }
                  }),
                  d
                    .querySelector("button")
                    .addEventListener("click", function () {
                      o.setMuted(!o.muted);
                      var e = (0, T.createEvent)("volumechange", o);
                      o.dispatchEvent(e);
                    }),
                  m.addEventListener("dragstart", function () {
                    return !1;
                  }),
                  m.addEventListener("mouseover", function () {
                    f = !0;
                  }),
                  m.addEventListener("focusin", function () {
                    (m.style.display = "block"), (f = !0);
                  }),
                  m.addEventListener("focusout", function () {
                    (f = !1),
                      c || "vertical" !== s || (m.style.display = "none");
                  }),
                  m.addEventListener("mousedown", function (e) {
                    E(e),
                      a.globalBind("mousemove.vol", function (e) {
                        var t = e.target;
                        c &&
                          (t === m ||
                            t.closest(
                              "vertical" === s
                                ? "." + a.options.classPrefix + "volume-slider"
                                : "." +
                                    a.options.classPrefix +
                                    "horizontal-volume-slider"
                            )) &&
                          E(e);
                      }),
                      a.globalBind("mouseup.vol", function () {
                        (c = !1),
                          f || "vertical" !== s || (m.style.display = "none");
                      }),
                      (c = !0),
                      e.preventDefault(),
                      e.stopPropagation();
                  }),
                  o.addEventListener("volumechange", function (e) {
                    var t;
                    c || b(),
                      (t = Math.floor(100 * o.volume)),
                      m.setAttribute("aria-valuenow", t),
                      m.setAttribute("aria-valuetext", t + "%");
                  });
                var S = !1;
                o.addEventListener("rendererready", function () {
                  p ||
                    setTimeout(function () {
                      (S = !0),
                        (0 === e.options.startVolume || o.originalNode.muted) &&
                          (o.setMuted(!0), (e.options.startVolume = 0)),
                        o.setVolume(e.options.startVolume),
                        a.setControlsSize();
                    }, 250);
                }),
                  o.addEventListener("loadedmetadata", function () {
                    setTimeout(function () {
                      p ||
                        S ||
                        ((0 === e.options.startVolume ||
                          o.originalNode.muted) &&
                          o.setMuted(!0),
                        o.setVolume(e.options.startVolume),
                        a.setControlsSize()),
                        (S = !1);
                    }, 250);
                  }),
                  (0 === e.options.startVolume || o.originalNode.muted) &&
                    (o.setMuted(!0), (e.options.startVolume = 0), b()),
                  a
                    .getElement(a.container)
                    .addEventListener("controlsresize", function () {
                      b();
                    });
              }
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 27: 27, 5: 5 },
    ],
    15: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.EN = {
          "mejs.plural-form": 1,
          "mejs.download-file": "Download File",
          "mejs.install-flash":
            "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
          "mejs.fullscreen": "Fullscreen",
          "mejs.play": "Play",
          "mejs.pause": "Pause",
          "mejs.time-slider": "Time Slider",
          "mejs.time-help-text":
            "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
          "mejs.live-broadcast": "Live Broadcast",
          "mejs.volume-help-text":
            "Use Up/Down Arrow keys to increase or decrease volume.",
          "mejs.unmute": "Unmute",
          "mejs.mute": "Mute",
          "mejs.volume-slider": "Volume Slider",
          "mejs.video-player": "Video Player",
          "mejs.audio-player": "Audio Player",
          "mejs.captions-subtitles": "Captions/Subtitles",
          "mejs.captions-chapters": "Chapters",
          "mejs.none": "None",
          "mejs.afrikaans": "Afrikaans",
          "mejs.albanian": "Albanian",
          "mejs.arabic": "Arabic",
          "mejs.belarusian": "Belarusian",
          "mejs.bulgarian": "Bulgarian",
          "mejs.catalan": "Catalan",
          "mejs.chinese": "Chinese",
          "mejs.chinese-simplified": "Chinese (Simplified)",
          "mejs.chinese-traditional": "Chinese (Traditional)",
          "mejs.croatian": "Croatian",
          "mejs.czech": "Czech",
          "mejs.danish": "Danish",
          "mejs.dutch": "Dutch",
          "mejs.english": "English",
          "mejs.estonian": "Estonian",
          "mejs.filipino": "Filipino",
          "mejs.finnish": "Finnish",
          "mejs.french": "French",
          "mejs.galician": "Galician",
          "mejs.german": "German",
          "mejs.greek": "Greek",
          "mejs.haitian-creole": "Haitian Creole",
          "mejs.hebrew": "Hebrew",
          "mejs.hindi": "Hindi",
          "mejs.hungarian": "Hungarian",
          "mejs.icelandic": "Icelandic",
          "mejs.indonesian": "Indonesian",
          "mejs.irish": "Irish",
          "mejs.italian": "Italian",
          "mejs.japanese": "Japanese",
          "mejs.korean": "Korean",
          "mejs.latvian": "Latvian",
          "mejs.lithuanian": "Lithuanian",
          "mejs.macedonian": "Macedonian",
          "mejs.malay": "Malay",
          "mejs.maltese": "Maltese",
          "mejs.norwegian": "Norwegian",
          "mejs.persian": "Persian",
          "mejs.polish": "Polish",
          "mejs.portuguese": "Portuguese",
          "mejs.romanian": "Romanian",
          "mejs.russian": "Russian",
          "mejs.serbian": "Serbian",
          "mejs.slovak": "Slovak",
          "mejs.slovenian": "Slovenian",
          "mejs.spanish": "Spanish",
          "mejs.swahili": "Swahili",
          "mejs.swedish": "Swedish",
          "mejs.tagalog": "Tagalog",
          "mejs.thai": "Thai",
          "mejs.turkish": "Turkish",
          "mejs.ukrainian": "Ukrainian",
          "mejs.vietnamese": "Vietnamese",
          "mejs.welsh": "Welsh",
          "mejs.yiddish": "Yiddish",
        };
      },
      {},
    ],
    16: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.config = void 0);
        var i =
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
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          S = r(e(3)),
          x = r(e(2)),
          f = r(e(7)),
          d = r(e(6)),
          a = r(e(17)),
          u = r(e(5)),
          w = e(25),
          m = e(27),
          c = e(30),
          p = e(28),
          P = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(26));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (f.default.mepIndex = 0), (f.default.players = {});
        var s = (n.config = {
          poster: "",
          showPosterWhenEnded: !1,
          showPosterWhenPaused: !1,
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 40,
          defaultSeekBackwardInterval: function (e) {
            return 0.05 * e.getDuration();
          },
          defaultSeekForwardInterval: function (e) {
            return 0.05 * e.getDuration();
          },
          setDimensions: !0,
          audioWidth: -1,
          audioHeight: -1,
          loop: !1,
          autoRewind: !0,
          enableAutosize: !0,
          timeFormat: "",
          alwaysShowHours: !1,
          showTimecodeFrameCount: !1,
          framesPerSecond: 25,
          alwaysShowControls: !1,
          hideVideoControlsOnLoad: !1,
          hideVideoControlsOnPause: !1,
          clickToPlayPause: !0,
          controlsTimeoutDefault: 1500,
          controlsTimeoutMouseEnter: 2500,
          controlsTimeoutMouseLeave: 1e3,
          iPadUseNativeControls: !1,
          iPhoneUseNativeControls: !1,
          AndroidUseNativeControls: !1,
          features: [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
          ],
          useDefaultControls: !1,
          isVideo: !0,
          stretching: "auto",
          classPrefix: "mejs__",
          enableKeyboard: !0,
          pauseOtherPlayers: !0,
          secondsDecimalLength: 0,
          customError: null,
          keyActions: [
            {
              keys: [32, 179],
              action: function (e) {
                w.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause());
              },
            },
          ],
        });
        f.default.MepDefaults = s;
        var l = (function () {
          function r(e, t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var n = this,
              o = "string" == typeof e ? x.default.getElementById(e) : e;
            if (!(n instanceof r)) return new r(o, t);
            if (((n.node = n.media = o), n.node)) {
              if (n.media.player) return n.media.player;
              if (
                ((n.hasFocus = !1),
                (n.controlsAreVisible = !0),
                (n.controlsEnabled = !0),
                (n.controlsTimer = null),
                (n.currentMediaTime = 0),
                (n.proxy = null),
                void 0 === t)
              ) {
                var i = n.node.getAttribute("data-mejsoptions");
                t = i ? JSON.parse(i) : {};
              }
              return (
                (n.options = Object.assign({}, s, t)),
                n.options.loop && !n.media.getAttribute("loop")
                  ? ((n.media.loop = !0), (n.node.loop = !0))
                  : n.media.loop && (n.options.loop = !0),
                n.options.timeFormat ||
                  ((n.options.timeFormat = "mm:ss"),
                  n.options.alwaysShowHours &&
                    (n.options.timeFormat = "hh:mm:ss"),
                  n.options.showTimecodeFrameCount &&
                    (n.options.timeFormat += ":ff")),
                (0, c.calculateTimeFormat)(
                  0,
                  n.options,
                  n.options.framesPerSecond || 25
                ),
                (n.id = "mep_" + f.default.mepIndex++),
                (f.default.players[n.id] = n).init(),
                n
              );
            }
          }
          return (
            o(r, [
              {
                key: "getElement",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "init",
                value: function () {
                  var n = this,
                    e = Object.assign({}, n.options, {
                      success: function (e, t) {
                        n._meReady(e, t);
                      },
                      error: function (e) {
                        n._handleError(e);
                      },
                    }),
                    t = n.node.tagName.toLowerCase();
                  if (
                    ((n.isDynamic =
                      "audio" !== t && "video" !== t && "iframe" !== t),
                    (n.isVideo = n.isDynamic
                      ? n.options.isVideo
                      : "audio" !== t && n.options.isVideo),
                    (n.mediaFiles = null),
                    (n.trackFiles = null),
                    (w.IS_IPAD && n.options.iPadUseNativeControls) ||
                      (w.IS_IPHONE && n.options.iPhoneUseNativeControls))
                  )
                    n.node.setAttribute("controls", !0),
                      w.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
                  else if (
                    (!n.isVideo &&
                      (n.isVideo ||
                        (!n.options.features.length &&
                          !n.options.useDefaultControls))) ||
                    (w.IS_ANDROID && n.options.AndroidUseNativeControls)
                  )
                    n.isVideo ||
                      n.options.features.length ||
                      n.options.useDefaultControls ||
                      (n.node.style.display = "none");
                  else {
                    n.node.removeAttribute("controls");
                    var o = n.isVideo
                        ? u.default.t("mejs.video-player")
                        : u.default.t("mejs.audio-player"),
                      i = x.default.createElement("span");
                    if (
                      ((i.className = n.options.classPrefix + "offscreen"),
                      (i.innerText = o),
                      n.media.parentNode.insertBefore(i, n.media),
                      (n.container = x.default.createElement("div")),
                      (n.getElement(n.container).id = n.id),
                      (n.getElement(n.container).className =
                        n.options.classPrefix +
                        "container " +
                        n.options.classPrefix +
                        "container-keyboard-inactive " +
                        n.media.className),
                      (n.getElement(n.container).tabIndex = 0),
                      n
                        .getElement(n.container)
                        .setAttribute("role", "application"),
                      n.getElement(n.container).setAttribute("aria-label", o),
                      (n.getElement(n.container).innerHTML =
                        '<div class="' +
                        n.options.classPrefix +
                        'inner"><div class="' +
                        n.options.classPrefix +
                        'mediaelement"></div><div class="' +
                        n.options.classPrefix +
                        'layers"></div><div class="' +
                        n.options.classPrefix +
                        'controls"></div></div>'),
                      n
                        .getElement(n.container)
                        .addEventListener("focus", function (e) {
                          if (
                            !n.controlsAreVisible &&
                            !n.hasFocus &&
                            n.controlsEnabled
                          ) {
                            n.showControls(!0);
                            var t = (0, m.isNodeAfter)(
                              e.relatedTarget,
                              n.getElement(n.container)
                            )
                              ? "." +
                                n.options.classPrefix +
                                "controls ." +
                                n.options.classPrefix +
                                "button:last-child > button"
                              : "." +
                                n.options.classPrefix +
                                "playpause-button > button";
                            n.getElement(n.container).querySelector(t).focus();
                          }
                        }),
                      n.node.parentNode.insertBefore(
                        n.getElement(n.container),
                        n.node
                      ),
                      n.options.features.length ||
                        n.options.useDefaultControls ||
                        ((n.getElement(n.container).style.background =
                          "transparent"),
                        (n
                          .getElement(n.container)
                          .querySelector(
                            "." + n.options.classPrefix + "controls"
                          ).style.display = "none")),
                      n.isVideo &&
                        "fill" === n.options.stretching &&
                        !P.hasClass(
                          n.getElement(n.container).parentNode,
                          n.options.classPrefix + "fill-container"
                        ))
                    ) {
                      n.outerContainer = n.media.parentNode;
                      var r = x.default.createElement("div");
                      (r.className = n.options.classPrefix + "fill-container"),
                        n
                          .getElement(n.container)
                          .parentNode.insertBefore(
                            r,
                            n.getElement(n.container)
                          ),
                        r.appendChild(n.getElement(n.container));
                    }
                    w.IS_ANDROID &&
                      P.addClass(
                        n.getElement(n.container),
                        n.options.classPrefix + "android"
                      ),
                      w.IS_IOS &&
                        P.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "ios"
                        ),
                      w.IS_IPAD &&
                        P.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "ipad"
                        ),
                      w.IS_IPHONE &&
                        P.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "iphone"
                        ),
                      P.addClass(
                        n.getElement(n.container),
                        n.isVideo
                          ? n.options.classPrefix + "video"
                          : n.options.classPrefix + "audio"
                      ),
                      n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "mediaelement"
                        )
                        .appendChild(n.node),
                      ((n.media.player = n).controls = n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "controls"
                        )),
                      (n.layers = n
                        .getElement(n.container)
                        .querySelector("." + n.options.classPrefix + "layers"));
                    var a = n.isVideo ? "video" : "audio",
                      s = a.substring(0, 1).toUpperCase() + a.substring(1);
                    0 < n.options[a + "Width"] ||
                    -1 < n.options[a + "Width"].toString().indexOf("%")
                      ? (n.width = n.options[a + "Width"])
                      : "" !== n.node.style.width && null !== n.node.style.width
                      ? (n.width = n.node.style.width)
                      : n.node.getAttribute("width")
                      ? (n.width = n.node.getAttribute("width"))
                      : (n.width = n.options["default" + s + "Width"]),
                      0 < n.options[a + "Height"] ||
                      -1 < n.options[a + "Height"].toString().indexOf("%")
                        ? (n.height = n.options[a + "Height"])
                        : "" !== n.node.style.height &&
                          null !== n.node.style.height
                        ? (n.height = n.node.style.height)
                        : n.node.getAttribute("height")
                        ? (n.height = n.node.getAttribute("height"))
                        : (n.height = n.options["default" + s + "Height"]),
                      (n.initialAspectRatio =
                        n.height >= n.width
                          ? n.width / n.height
                          : n.height / n.width),
                      n.setPlayerSize(n.width, n.height),
                      (e.pluginWidth = n.width),
                      (e.pluginHeight = n.height);
                  }
                  if (
                    ((f.default.MepDefaults = e),
                    new d.default(n.media, e, n.mediaFiles),
                    void 0 !== n.getElement(n.container) &&
                      n.options.features.length &&
                      n.controlsAreVisible &&
                      !n.options.hideVideoControlsOnLoad)
                  ) {
                    var l = (0, m.createEvent)(
                      "controlsshown",
                      n.getElement(n.container)
                    );
                    n.getElement(n.container).dispatchEvent(l);
                  }
                },
              },
              {
                key: "showControls",
                value: function (e) {
                  var i = this;
                  if (
                    ((e = void 0 === e || e),
                    !i.controlsAreVisible && i.isVideo)
                  ) {
                    if (e)
                      !(function () {
                        P.fadeIn(i.getElement(i.controls), 200, function () {
                          P.removeClass(
                            i.getElement(i.controls),
                            i.options.classPrefix + "offscreen"
                          );
                          var e = (0, m.createEvent)(
                            "controlsshown",
                            i.getElement(i.container)
                          );
                          i.getElement(i.container).dispatchEvent(e);
                        });
                        for (
                          var n = i
                              .getElement(i.container)
                              .querySelectorAll(
                                "." + i.options.classPrefix + "control"
                              ),
                            e = function (e, t) {
                              P.fadeIn(n[e], 200, function () {
                                P.removeClass(
                                  n[e],
                                  i.options.classPrefix + "offscreen"
                                );
                              });
                            },
                            t = 0,
                            o = n.length;
                          t < o;
                          t++
                        )
                          e(t);
                      })();
                    else {
                      P.removeClass(
                        i.getElement(i.controls),
                        i.options.classPrefix + "offscreen"
                      ),
                        (i.getElement(i.controls).style.display = ""),
                        (i.getElement(i.controls).style.opacity = 1);
                      for (
                        var t = i
                            .getElement(i.container)
                            .querySelectorAll(
                              "." + i.options.classPrefix + "control"
                            ),
                          n = 0,
                          o = t.length;
                        n < o;
                        n++
                      )
                        P.removeClass(
                          t[n],
                          i.options.classPrefix + "offscreen"
                        ),
                          (t[n].style.display = "");
                      var r = (0, m.createEvent)(
                        "controlsshown",
                        i.getElement(i.container)
                      );
                      i.getElement(i.container).dispatchEvent(r);
                    }
                    (i.controlsAreVisible = !0), i.setControlsSize();
                  }
                },
              },
              {
                key: "hideControls",
                value: function (e, t) {
                  var i = this;
                  if (
                    ((e = void 0 === e || e),
                    !0 === t ||
                      !(
                        !i.controlsAreVisible ||
                        i.options.alwaysShowControls ||
                        (i.paused &&
                          4 === i.readyState &&
                          ((!i.options.hideVideoControlsOnLoad &&
                            i.currentTime <= 0) ||
                            (!i.options.hideVideoControlsOnPause &&
                              0 < i.currentTime))) ||
                        (i.isVideo &&
                          !i.options.hideVideoControlsOnLoad &&
                          !i.readyState) ||
                        i.ended
                      ))
                  ) {
                    if (e)
                      !(function () {
                        P.fadeOut(i.getElement(i.controls), 200, function () {
                          P.addClass(
                            i.getElement(i.controls),
                            i.options.classPrefix + "offscreen"
                          ),
                            (i.getElement(i.controls).style.display = "");
                          var e = (0, m.createEvent)(
                            "controlshidden",
                            i.getElement(i.container)
                          );
                          i.getElement(i.container).dispatchEvent(e);
                        });
                        for (
                          var n = i
                              .getElement(i.container)
                              .querySelectorAll(
                                "." + i.options.classPrefix + "control"
                              ),
                            e = function (e, t) {
                              P.fadeOut(n[e], 200, function () {
                                P.addClass(
                                  n[e],
                                  i.options.classPrefix + "offscreen"
                                ),
                                  (n[e].style.display = "");
                              });
                            },
                            t = 0,
                            o = n.length;
                          t < o;
                          t++
                        )
                          e(t);
                      })();
                    else {
                      P.addClass(
                        i.getElement(i.controls),
                        i.options.classPrefix + "offscreen"
                      ),
                        (i.getElement(i.controls).style.display = ""),
                        (i.getElement(i.controls).style.opacity = 0);
                      for (
                        var n = i
                            .getElement(i.container)
                            .querySelectorAll(
                              "." + i.options.classPrefix + "control"
                            ),
                          o = 0,
                          r = n.length;
                        o < r;
                        o++
                      )
                        P.addClass(n[o], i.options.classPrefix + "offscreen"),
                          (n[o].style.display = "");
                      var a = (0, m.createEvent)(
                        "controlshidden",
                        i.getElement(i.container)
                      );
                      i.getElement(i.container).dispatchEvent(a);
                    }
                    i.controlsAreVisible = !1;
                  }
                },
              },
              {
                key: "startControlsTimer",
                value: function (e) {
                  var t = this;
                  (e = void 0 !== e ? e : t.options.controlsTimeoutDefault),
                    t.killControlsTimer("start"),
                    (t.controlsTimer = setTimeout(function () {
                      t.hideControls(), t.killControlsTimer("hide");
                    }, e));
                },
              },
              {
                key: "killControlsTimer",
                value: function () {
                  null !== this.controlsTimer &&
                    (clearTimeout(this.controlsTimer),
                    delete this.controlsTimer,
                    (this.controlsTimer = null));
                },
              },
              {
                key: "disableControls",
                value: function () {
                  this.killControlsTimer(),
                    (this.controlsEnabled = !1),
                    this.hideControls(!1, !0);
                },
              },
              {
                key: "enableControls",
                value: function () {
                  (this.controlsEnabled = !0), this.showControls(!1);
                },
              },
              {
                key: "_setDefaultPlayer",
                value: function () {
                  var e = this;
                  e.proxy && e.proxy.pause(),
                    (e.proxy = new a.default(e)),
                    e.media.addEventListener("loadedmetadata", function () {
                      0 < e.getCurrentTime() &&
                        0 < e.currentMediaTime &&
                        (e.setCurrentTime(e.currentMediaTime),
                        w.IS_IOS || w.IS_ANDROID || e.play());
                    });
                },
              },
              {
                key: "_meReady",
                value: function (e, t) {
                  var n = this,
                    o = t.getAttribute("autoplay"),
                    i = !(null == o || "false" === o),
                    r =
                      null !== e.rendererName &&
                      /(native|html5)/i.test(n.media.rendererName);
                  if (
                    (n.getElement(n.controls) && n.enableControls(),
                    n.getElement(n.container) &&
                      n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "overlay-play"
                        ) &&
                      (n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "overlay-play"
                        ).style.display = ""),
                    !n.created)
                  ) {
                    if (
                      ((n.created = !0),
                      (n.media = e),
                      (n.domNode = t),
                      !(
                        (w.IS_ANDROID && n.options.AndroidUseNativeControls) ||
                        (w.IS_IPAD && n.options.iPadUseNativeControls) ||
                        (w.IS_IPHONE && n.options.iPhoneUseNativeControls)
                      ))
                    ) {
                      if (
                        !n.isVideo &&
                        !n.options.features.length &&
                        !n.options.useDefaultControls
                      )
                        return (
                          i && r && n.play(),
                          void (
                            n.options.success &&
                            ("string" == typeof n.options.success
                              ? S.default[n.options.success](
                                  n.media,
                                  n.domNode,
                                  n
                                )
                              : n.options.success(n.media, n.domNode, n))
                          )
                        );
                      if (
                        ((n.featurePosition = {}),
                        n._setDefaultPlayer(),
                        n.buildposter(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.buildkeyboard(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.buildoverlays(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.options.useDefaultControls)
                      ) {
                        var a = [
                          "playpause",
                          "current",
                          "progress",
                          "duration",
                          "tracks",
                          "volume",
                          "fullscreen",
                        ];
                        n.options.features = a.concat(
                          n.options.features.filter(function (e) {
                            return -1 === a.indexOf(e);
                          })
                        );
                      }
                      n.buildfeatures(
                        n,
                        n.getElement(n.controls),
                        n.getElement(n.layers),
                        n.media
                      );
                      var s = (0, m.createEvent)(
                        "controlsready",
                        n.getElement(n.container)
                      );
                      n.getElement(n.container).dispatchEvent(s),
                        n.setPlayerSize(n.width, n.height),
                        n.setControlsSize(),
                        n.isVideo &&
                          ((n.clickToPlayPauseCallback = function () {
                            if (n.options.clickToPlayPause) {
                              var e = n
                                  .getElement(n.container)
                                  .querySelector(
                                    "." +
                                      n.options.classPrefix +
                                      "overlay-button"
                                  ),
                                t = e.getAttribute("aria-pressed");
                              n.paused && t
                                ? n.pause()
                                : n.paused
                                ? n.play()
                                : n.pause(),
                                e.setAttribute("aria-pressed", !t),
                                n.getElement(n.container).focus();
                            }
                          }),
                          n.createIframeLayer(),
                          n.media.addEventListener(
                            "click",
                            n.clickToPlayPauseCallback
                          ),
                          (!w.IS_ANDROID && !w.IS_IOS) ||
                          n.options.alwaysShowControls
                            ? (n
                                .getElement(n.container)
                                .addEventListener("mouseenter", function () {
                                  n.controlsEnabled &&
                                    (n.options.alwaysShowControls ||
                                      (n.killControlsTimer("enter"),
                                      n.showControls(),
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseEnter
                                      )));
                                }),
                              n
                                .getElement(n.container)
                                .addEventListener("mousemove", function () {
                                  n.controlsEnabled &&
                                    (n.controlsAreVisible || n.showControls(),
                                    n.options.alwaysShowControls ||
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseEnter
                                      ));
                                }),
                              n
                                .getElement(n.container)
                                .addEventListener("mouseleave", function () {
                                  n.controlsEnabled &&
                                    (n.paused ||
                                      n.options.alwaysShowControls ||
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseLeave
                                      ));
                                }))
                            : n.node.addEventListener(
                                "touchstart",
                                function () {
                                  n.controlsAreVisible
                                    ? n.hideControls(!1)
                                    : n.controlsEnabled && n.showControls(!1);
                                },
                                !!w.SUPPORT_PASSIVE_EVENT && { passive: !0 }
                              ),
                          n.options.hideVideoControlsOnLoad &&
                            n.hideControls(!1),
                          n.options.enableAutosize &&
                            n.media.addEventListener(
                              "loadedmetadata",
                              function (e) {
                                var t =
                                  void 0 !== e
                                    ? e.detail.target || e.target
                                    : n.media;
                                n.options.videoHeight <= 0 &&
                                  !n.domNode.getAttribute("height") &&
                                  !n.domNode.style.height &&
                                  null !== t &&
                                  !isNaN(t.videoHeight) &&
                                  (n.setPlayerSize(t.videoWidth, t.videoHeight),
                                  n.setControlsSize(),
                                  n.media.setSize(t.videoWidth, t.videoHeight));
                              }
                            )),
                        n.media.addEventListener("play", function () {
                          for (var e in ((n.hasFocus = !0), f.default.players))
                            if (f.default.players.hasOwnProperty(e)) {
                              var t = f.default.players[e];
                              t.id === n.id ||
                                !n.options.pauseOtherPlayers ||
                                t.paused ||
                                t.ended ||
                                !0 ===
                                  t.options.ignorePauseOtherPlayersOption ||
                                (t.pause(), (t.hasFocus = !1));
                            }
                          w.IS_ANDROID ||
                            w.IS_IOS ||
                            n.options.alwaysShowControls ||
                            !n.isVideo ||
                            n.hideControls();
                        }),
                        n.media.addEventListener("ended", function () {
                          if (n.options.autoRewind)
                            try {
                              n.setCurrentTime(0),
                                setTimeout(function () {
                                  var e = n
                                    .getElement(n.container)
                                    .querySelector(
                                      "." +
                                        n.options.classPrefix +
                                        "overlay-loading"
                                    );
                                  e &&
                                    e.parentNode &&
                                    (e.parentNode.style.display = "none");
                                }, 20);
                            } catch (e) {}
                          "function" == typeof n.media.renderer.stop
                            ? n.media.renderer.stop()
                            : n.pause(),
                            n.setProgressRail && n.setProgressRail(),
                            n.setCurrentRail && n.setCurrentRail(),
                            n.options.loop
                              ? n.play()
                              : !n.options.alwaysShowControls &&
                                n.controlsEnabled &&
                                n.showControls();
                        }),
                        n.media.addEventListener("loadedmetadata", function () {
                          (0, c.calculateTimeFormat)(
                            n.getDuration(),
                            n.options,
                            n.options.framesPerSecond || 25
                          ),
                            n.updateDuration && n.updateDuration(),
                            n.updateCurrent && n.updateCurrent(),
                            n.isFullScreen ||
                              (n.setPlayerSize(n.width, n.height),
                              n.setControlsSize());
                        });
                      var l = null;
                      n.media.addEventListener("timeupdate", function () {
                        isNaN(n.getDuration()) ||
                          l === n.getDuration() ||
                          ((l = n.getDuration()),
                          (0, c.calculateTimeFormat)(
                            l,
                            n.options,
                            n.options.framesPerSecond || 25
                          ),
                          n.updateDuration && n.updateDuration(),
                          n.updateCurrent && n.updateCurrent(),
                          n.setControlsSize());
                      }),
                        n
                          .getElement(n.container)
                          .addEventListener("click", function (e) {
                            P.addClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                "container-keyboard-inactive"
                            );
                          }),
                        n
                          .getElement(n.container)
                          .addEventListener("focusin", function (e) {
                            P.removeClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                "container-keyboard-inactive"
                            ),
                              !n.isVideo ||
                                w.IS_ANDROID ||
                                w.IS_IOS ||
                                !n.controlsEnabled ||
                                n.options.alwaysShowControls ||
                                (n.killControlsTimer("enter"),
                                n.showControls(),
                                n.startControlsTimer(
                                  n.options.controlsTimeoutMouseEnter
                                ));
                          }),
                        n
                          .getElement(n.container)
                          .addEventListener("focusout", function (e) {
                            setTimeout(function () {
                              e.relatedTarget &&
                                n.keyboardAction &&
                                !e.relatedTarget.closest(
                                  "." + n.options.classPrefix + "container"
                                ) &&
                                ((n.keyboardAction = !1),
                                !n.isVideo ||
                                  n.options.alwaysShowControls ||
                                  n.paused ||
                                  n.startControlsTimer(
                                    n.options.controlsTimeoutMouseLeave
                                  ));
                            }, 0);
                          }),
                        setTimeout(function () {
                          n.setPlayerSize(n.width, n.height),
                            n.setControlsSize();
                        }, 0),
                        (n.globalResizeCallback = function () {
                          n.isFullScreen ||
                            (w.HAS_TRUE_NATIVE_FULLSCREEN &&
                              x.default.webkitIsFullScreen) ||
                            n.setPlayerSize(n.width, n.height),
                            n.setControlsSize();
                        }),
                        n.globalBind("resize", n.globalResizeCallback);
                    }
                    i && r && n.play(),
                      n.options.success &&
                        ("string" == typeof n.options.success
                          ? S.default[n.options.success](n.media, n.domNode, n)
                          : n.options.success(n.media, n.domNode, n));
                  }
                },
              },
              {
                key: "_handleError",
                value: function (e, t, n) {
                  var o = this,
                    i = o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-play"
                      );
                  i && (i.style.display = "none"),
                    o.options.error && o.options.error(e, t, n),
                    o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "cannotplay"
                      ) &&
                      o
                        .getElement(o.container)
                        .querySelector(
                          "." + o.options.classPrefix + "cannotplay"
                        )
                        .remove();
                  var r = x.default.createElement("div");
                  (r.className = o.options.classPrefix + "cannotplay"),
                    (r.style.width = "100%"),
                    (r.style.height = "100%");
                  var a =
                      "function" == typeof o.options.customError
                        ? o.options.customError(o.media, o.media.originalNode)
                        : o.options.customError,
                    s = "";
                  if (!a) {
                    var l = o.media.originalNode.getAttribute("poster");
                    if (
                      (l &&
                        (s =
                          '<img src="' +
                          l +
                          '" alt="' +
                          f.default.i18n.t("mejs.download-file") +
                          '">'),
                      e.message && (a = "<p>" + e.message + "</p>"),
                      e.urls)
                    )
                      for (var d = 0, u = e.urls.length; d < u; d++) {
                        var c = e.urls[d];
                        a +=
                          '<a href="' +
                          c.src +
                          '" data-type="' +
                          c.type +
                          '"><span>' +
                          f.default.i18n.t("mejs.download-file") +
                          ": " +
                          c.src +
                          "</span></a>";
                      }
                  }
                  a &&
                    o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ) &&
                    ((r.innerHTML = a),
                    (o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ).innerHTML = "" + s + r.outerHTML),
                    (o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ).parentNode.style.display = "block")),
                    o.controlsEnabled && o.disableControls();
                },
              },
              {
                key: "setPlayerSize",
                value: function (e, t) {
                  var n = this;
                  if (!n.options.setDimensions) return !1;
                  switch (
                    (void 0 !== e && (n.width = e),
                    void 0 !== t && (n.height = t),
                    n.options.stretching)
                  ) {
                    case "fill":
                      n.isVideo
                        ? n.setFillMode()
                        : n.setDimensions(n.width, n.height);
                      break;
                    case "responsive":
                      n.setResponsiveMode();
                      break;
                    case "none":
                      n.setDimensions(n.width, n.height);
                      break;
                    default:
                      !0 === n.hasFluidMode()
                        ? n.setResponsiveMode()
                        : n.setDimensions(n.width, n.height);
                  }
                },
              },
              {
                key: "hasFluidMode",
                value: function () {
                  var e = this;
                  return (
                    -1 !== e.height.toString().indexOf("%") ||
                    (e.node &&
                      e.node.style.maxWidth &&
                      "none" !== e.node.style.maxWidth &&
                      e.node.style.maxWidth !== e.width) ||
                    (e.node &&
                      e.node.currentStyle &&
                      "100%" === e.node.currentStyle.maxWidth)
                  );
                },
              },
              {
                key: "setResponsiveMode",
                value: function () {
                  var e,
                    o = this,
                    t = (function () {
                      for (var t = void 0, n = o.getElement(o.container); n; ) {
                        try {
                          if (
                            w.IS_FIREFOX &&
                            "html" === n.tagName.toLowerCase() &&
                            S.default.self !== S.default.top &&
                            null !== S.default.frameElement
                          )
                            return S.default.frameElement;
                          t = n.parentElement;
                        } catch (e) {
                          t = n.parentElement;
                        }
                        if (t && P.visible(t)) return t;
                        n = t;
                      }
                      return null;
                    })(),
                    n = t
                      ? getComputedStyle(t, null)
                      : getComputedStyle(x.default.body, null),
                    i = o.isVideo
                      ? o.node.videoWidth && 0 < o.node.videoWidth
                        ? o.node.videoWidth
                        : o.node.getAttribute("width")
                        ? o.node.getAttribute("width")
                        : o.options.defaultVideoWidth
                      : o.options.defaultAudioWidth,
                    r = o.isVideo
                      ? o.node.videoHeight && 0 < o.node.videoHeight
                        ? o.node.videoHeight
                        : o.node.getAttribute("height")
                        ? o.node.getAttribute("height")
                        : o.options.defaultVideoHeight
                      : o.options.defaultAudioHeight,
                    a =
                      ((e = 1),
                      o.isVideo &&
                        ((e =
                          o.node.videoWidth &&
                          0 < o.node.videoWidth &&
                          o.node.videoHeight &&
                          0 < o.node.videoHeight
                            ? o.height >= o.width
                              ? o.node.videoWidth / o.node.videoHeight
                              : o.node.videoHeight / o.node.videoWidth
                            : o.initialAspectRatio),
                        (isNaN(e) || e < 0.01 || 100 < e) && (e = 1)),
                      e),
                    s = parseFloat(n.height),
                    l = void 0,
                    d = parseFloat(n.width);
                  if (
                    ((l = o.isVideo
                      ? "100%" === o.height
                        ? parseFloat((d * r) / i, 10)
                        : o.height >= o.width
                        ? parseFloat(d / a, 10)
                        : parseFloat(d * a, 10)
                      : r),
                    isNaN(l) && (l = s),
                    0 < o.getElement(o.container).parentNode.length &&
                      "body" ===
                        o
                          .getElement(o.container)
                          .parentNode.tagName.toLowerCase() &&
                      ((d =
                        S.default.innerWidth ||
                        x.default.documentElement.clientWidth ||
                        x.default.body.clientWidth),
                      (l =
                        S.default.innerHeight ||
                        x.default.documentElement.clientHeight ||
                        x.default.body.clientHeight)),
                    l && d)
                  ) {
                    (o.getElement(o.container).style.width = d + "px"),
                      (o.getElement(o.container).style.height = l + "px"),
                      (o.node.style.width = "100%"),
                      (o.node.style.height = "100%"),
                      o.isVideo && o.media.setSize && o.media.setSize(d, l);
                    for (
                      var u = o.getElement(o.layers).children,
                        c = 0,
                        f = u.length;
                      c < f;
                      c++
                    )
                      (u[c].style.width = "100%"), (u[c].style.height = "100%");
                  }
                },
              },
              {
                key: "setFillMode",
                value: function () {
                  var e = this,
                    t =
                      S.default.self !== S.default.top &&
                      null !== S.default.frameElement,
                    n = (function () {
                      for (var t = void 0, n = e.getElement(e.container); n; ) {
                        try {
                          if (
                            w.IS_FIREFOX &&
                            "html" === n.tagName.toLowerCase() &&
                            S.default.self !== S.default.top &&
                            null !== S.default.frameElement
                          )
                            return S.default.frameElement;
                          t = n.parentElement;
                        } catch (e) {
                          t = n.parentElement;
                        }
                        if (t && P.visible(t)) return t;
                        n = t;
                      }
                      return null;
                    })(),
                    o = n
                      ? getComputedStyle(n, null)
                      : getComputedStyle(x.default.body, null);
                  "none" !== e.node.style.height &&
                    e.node.style.height !== e.height &&
                    (e.node.style.height = "auto"),
                    "none" !== e.node.style.maxWidth &&
                      e.node.style.maxWidth !== e.width &&
                      (e.node.style.maxWidth = "none"),
                    "none" !== e.node.style.maxHeight &&
                      e.node.style.maxHeight !== e.height &&
                      (e.node.style.maxHeight = "none"),
                    e.node.currentStyle &&
                      ("100%" === e.node.currentStyle.height &&
                        (e.node.currentStyle.height = "auto"),
                      "100%" === e.node.currentStyle.maxWidth &&
                        (e.node.currentStyle.maxWidth = "none"),
                      "100%" === e.node.currentStyle.maxHeight &&
                        (e.node.currentStyle.maxHeight = "none")),
                    t ||
                      parseFloat(o.width) ||
                      (n.style.width = e.media.offsetWidth + "px"),
                    t ||
                      parseFloat(o.height) ||
                      (n.style.height = e.media.offsetHeight + "px"),
                    (o = getComputedStyle(n));
                  var i = parseFloat(o.width),
                    r = parseFloat(o.height);
                  e.setDimensions("100%", "100%");
                  var a = e
                    .getElement(e.container)
                    .querySelector("." + e.options.classPrefix + "poster>img");
                  a && (a.style.display = "");
                  for (
                    var s = e
                        .getElement(e.container)
                        .querySelectorAll("object, embed, iframe, video"),
                      l = e.height,
                      d = e.width,
                      u = i,
                      c = (l * i) / d,
                      f = (d * r) / l,
                      p = r,
                      m = i < f == !1,
                      h = m ? Math.floor(u) : Math.floor(f),
                      v = m ? Math.floor(c) : Math.floor(p),
                      g = m ? i + "px" : h + "px",
                      y = m ? v + "px" : r + "px",
                      E = 0,
                      b = s.length;
                    E < b;
                    E++
                  )
                    (s[E].style.height = y),
                      (s[E].style.width = g),
                      e.media.setSize && e.media.setSize(g, y),
                      (s[E].style.marginLeft = Math.floor((i - h) / 2) + "px"),
                      (s[E].style.marginTop = 0);
                },
              },
              {
                key: "setDimensions",
                value: function (e, t) {
                  var n = this;
                  (e =
                    (0, m.isString)(e) && -1 < e.indexOf("%")
                      ? e
                      : parseFloat(e) + "px"),
                    (t =
                      (0, m.isString)(t) && -1 < t.indexOf("%")
                        ? t
                        : parseFloat(t) + "px"),
                    (n.getElement(n.container).style.width = e),
                    (n.getElement(n.container).style.height = t);
                  for (
                    var o = n.getElement(n.layers).children,
                      i = 0,
                      r = o.length;
                    i < r;
                    i++
                  )
                    (o[i].style.width = e), (o[i].style.height = t);
                },
              },
              {
                key: "setControlsSize",
                value: function () {
                  var t = this;
                  if (P.visible(t.getElement(t.container)))
                    if (t.rail && P.visible(t.rail)) {
                      for (
                        var e = t.total
                            ? getComputedStyle(t.total, null)
                            : null,
                          n = e
                            ? parseFloat(e.marginLeft) +
                              parseFloat(e.marginRight)
                            : 0,
                          o = getComputedStyle(t.rail),
                          i =
                            parseFloat(o.marginLeft) +
                            parseFloat(o.marginRight),
                          r = 0,
                          a = P.siblings(t.rail, function (e) {
                            return e !== t.rail;
                          }),
                          s = a.length,
                          l = 0;
                        l < s;
                        l++
                      )
                        r += a[l].offsetWidth;
                      (r += n + (0 === n ? 2 * i : i) + 1),
                        (t.getElement(t.container).style.minWidth = r + "px");
                      var d = (0, m.createEvent)(
                        "controlsresize",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(d);
                    } else {
                      for (
                        var u = t.getElement(t.controls).children,
                          c = 0,
                          f = 0,
                          p = u.length;
                        f < p;
                        f++
                      )
                        c += u[f].offsetWidth;
                      t.getElement(t.container).style.minWidth = c + "px";
                    }
                },
              },
              {
                key: "addControlElement",
                value: function (e, t) {
                  var n = this;
                  if (void 0 !== n.featurePosition[t]) {
                    var o = n.getElement(n.controls).children[
                      n.featurePosition[t] - 1
                    ];
                    o.parentNode.insertBefore(e, o.nextSibling);
                  } else {
                    n.getElement(n.controls).appendChild(e);
                    for (
                      var i = n.getElement(n.controls).children,
                        r = 0,
                        a = i.length;
                      r < a;
                      r++
                    )
                      if (e === i[r]) {
                        n.featurePosition[t] = r;
                        break;
                      }
                  }
                },
              },
              {
                key: "createIframeLayer",
                value: function () {
                  var t = this;
                  if (
                    t.isVideo &&
                    null !== t.media.rendererName &&
                    -1 < t.media.rendererName.indexOf("iframe") &&
                    !x.default.getElementById(t.media.id + "-iframe-overlay")
                  ) {
                    var e = x.default.createElement("div"),
                      n = x.default.getElementById(
                        t.media.id + "_" + t.media.rendererName
                      );
                    (e.id = t.media.id + "-iframe-overlay"),
                      (e.className = t.options.classPrefix + "iframe-overlay"),
                      e.addEventListener("click", function (e) {
                        t.options.clickToPlayPause &&
                          (t.paused ? t.play() : t.pause(),
                          e.preventDefault(),
                          e.stopPropagation());
                      }),
                      n.parentNode.insertBefore(e, n);
                  }
                },
              },
              {
                key: "resetSize",
                value: function () {
                  var e = this;
                  setTimeout(function () {
                    e.setPlayerSize(e.width, e.height), e.setControlsSize();
                  }, 50);
                },
              },
              {
                key: "setPoster",
                value: function (e) {
                  var t = this;
                  if (t.getElement(t.container)) {
                    var n = t
                      .getElement(t.container)
                      .querySelector("." + t.options.classPrefix + "poster");
                    n ||
                      (((n = x.default.createElement("div")).className =
                        t.options.classPrefix +
                        "poster " +
                        t.options.classPrefix +
                        "layer"),
                      t.getElement(t.layers).appendChild(n));
                    var o = n.querySelector("img");
                    !o &&
                      e &&
                      (((o = x.default.createElement("img")).className =
                        t.options.classPrefix + "poster-img"),
                      (o.width = "100%"),
                      (o.height = "100%"),
                      (n.style.display = ""),
                      n.appendChild(o)),
                      e
                        ? (o.setAttribute("src", e),
                          (n.style.backgroundImage = 'url("' + e + '")'),
                          (n.style.display = ""))
                        : o
                        ? ((n.style.backgroundImage = "none"),
                          (n.style.display = "none"),
                          o.remove())
                        : (n.style.display = "none");
                  } else
                    ((w.IS_IPAD && t.options.iPadUseNativeControls) ||
                      (w.IS_IPHONE && t.options.iPhoneUseNativeControls) ||
                      (w.IS_ANDROID && t.options.AndroidUseNativeControls)) &&
                      (t.media.originalNode.poster = e);
                },
              },
              {
                key: "changeSkin",
                value: function (e) {
                  var t = this;
                  (t.getElement(t.container).className =
                    t.options.classPrefix + "container " + e),
                    t.setPlayerSize(t.width, t.height),
                    t.setControlsSize();
                },
              },
              {
                key: "globalBind",
                value: function (e, n) {
                  var o = this.node ? this.node.ownerDocument : x.default;
                  if ((e = (0, m.splitEvents)(e, this.id)).d)
                    for (
                      var t = e.d.split(" "), i = 0, r = t.length;
                      i < r;
                      i++
                    )
                      t[i].split(".").reduce(function (e, t) {
                        return o.addEventListener(t, n, !1), t;
                      }, "");
                  if (e.w)
                    for (
                      var a = e.w.split(" "), s = 0, l = a.length;
                      s < l;
                      s++
                    )
                      a[s].split(".").reduce(function (e, t) {
                        return S.default.addEventListener(t, n, !1), t;
                      }, "");
                },
              },
              {
                key: "globalUnbind",
                value: function (e, n) {
                  var o = this.node ? this.node.ownerDocument : x.default;
                  if ((e = (0, m.splitEvents)(e, this.id)).d)
                    for (
                      var t = e.d.split(" "), i = 0, r = t.length;
                      i < r;
                      i++
                    )
                      t[i].split(".").reduce(function (e, t) {
                        return o.removeEventListener(t, n, !1), t;
                      }, "");
                  if (e.w)
                    for (
                      var a = e.w.split(" "), s = 0, l = a.length;
                      s < l;
                      s++
                    )
                      a[s].split(".").reduce(function (e, t) {
                        return S.default.removeEventListener(t, n, !1), t;
                      }, "");
                },
              },
              {
                key: "buildfeatures",
                value: function (e, t, n, o) {
                  for (
                    var i = 0, r = this.options.features.length;
                    i < r;
                    i++
                  ) {
                    var a = this.options.features[i];
                    if (this["build" + a])
                      try {
                        this["build" + a](e, t, n, o);
                      } catch (e) {
                        console.error("error building " + a, e);
                      }
                  }
                },
              },
              {
                key: "buildposter",
                value: function (e, t, n, o) {
                  var i = this,
                    r = x.default.createElement("div");
                  (r.className =
                    i.options.classPrefix +
                    "poster " +
                    i.options.classPrefix +
                    "layer"),
                    n.appendChild(r);
                  var a = o.originalNode.getAttribute("poster");
                  "" !== e.options.poster &&
                    (a && w.IS_IOS && o.originalNode.removeAttribute("poster"),
                    (a = e.options.poster)),
                    a
                      ? i.setPoster(a)
                      : null !== i.media.renderer &&
                        "function" == typeof i.media.renderer.getPosterUrl
                      ? i.setPoster(i.media.renderer.getPosterUrl())
                      : (r.style.display = "none"),
                    o.addEventListener("play", function () {
                      r.style.display = "none";
                    }),
                    o.addEventListener("playing", function () {
                      r.style.display = "none";
                    }),
                    e.options.showPosterWhenEnded &&
                      e.options.autoRewind &&
                      o.addEventListener("ended", function () {
                        r.style.display = "";
                      }),
                    o.addEventListener("error", function () {
                      r.style.display = "none";
                    }),
                    e.options.showPosterWhenPaused &&
                      o.addEventListener("pause", function () {
                        e.ended || (r.style.display = "");
                      });
                },
              },
              {
                key: "buildoverlays",
                value: function (t, e, n, o) {
                  if (t.isVideo) {
                    var i = this,
                      r = x.default.createElement("div"),
                      a = x.default.createElement("div"),
                      s = x.default.createElement("div");
                    (r.style.display = "none"),
                      (r.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer"),
                      (r.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-loading"><span class="' +
                        i.options.classPrefix +
                        'overlay-loading-bg-img"></span></div>'),
                      n.appendChild(r),
                      (a.style.display = "none"),
                      (a.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer"),
                      (a.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-error"></div>'),
                      n.appendChild(a),
                      (s.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer " +
                        i.options.classPrefix +
                        "overlay-play"),
                      (s.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-button" role="button" tabindex="0" aria-label="' +
                        u.default.t("mejs.play") +
                        '" aria-pressed="false"></div>'),
                      s.addEventListener("click", function () {
                        if (i.options.clickToPlayPause) {
                          var e = i
                              .getElement(i.container)
                              .querySelector(
                                "." + i.options.classPrefix + "overlay-button"
                              ),
                            t = e.getAttribute("aria-pressed");
                          i.paused ? i.play() : i.pause(),
                            e.setAttribute("aria-pressed", !!t),
                            i.getElement(i.container).focus();
                        }
                      }),
                      s.addEventListener("keydown", function (e) {
                        var t = e.keyCode || e.which || 0;
                        if (13 === t || (w.IS_FIREFOX && 32 === t)) {
                          var n = (0, m.createEvent)("click", s);
                          return s.dispatchEvent(n), !1;
                        }
                      }),
                      n.appendChild(s),
                      null !== i.media.rendererName &&
                        ((/(youtube|facebook)/i.test(i.media.rendererName) &&
                          !(
                            i.media.originalNode.getAttribute("poster") ||
                            t.options.poster ||
                            ("function" ==
                              typeof i.media.renderer.getPosterUrl &&
                              i.media.renderer.getPosterUrl())
                          )) ||
                          w.IS_STOCK_ANDROID ||
                          i.media.originalNode.getAttribute("autoplay")) &&
                        (s.style.display = "none");
                    var l = !1;
                    o.addEventListener("play", function () {
                      (s.style.display = "none"),
                        (r.style.display = "none"),
                        (a.style.display = "none"),
                        (l = !1);
                    }),
                      o.addEventListener("playing", function () {
                        (s.style.display = "none"),
                          (r.style.display = "none"),
                          (a.style.display = "none"),
                          (l = !1);
                      }),
                      o.addEventListener("seeking", function () {
                        (s.style.display = "none"),
                          (r.style.display = ""),
                          (l = !1);
                      }),
                      o.addEventListener("seeked", function () {
                        (s.style.display =
                          i.paused && !w.IS_STOCK_ANDROID ? "" : "none"),
                          (r.style.display = "none"),
                          (l = !1);
                      }),
                      o.addEventListener("pause", function () {
                        (r.style.display = "none"),
                          w.IS_STOCK_ANDROID || l || (s.style.display = ""),
                          (l = !1);
                      }),
                      o.addEventListener("waiting", function () {
                        (r.style.display = ""), (l = !1);
                      }),
                      o.addEventListener("loadeddata", function () {
                        (r.style.display = ""),
                          w.IS_ANDROID &&
                            (o.canplayTimeout = setTimeout(function () {
                              if (x.default.createEvent) {
                                var e = x.default.createEvent("HTMLEvents");
                                return (
                                  e.initEvent("canplay", !0, !0),
                                  o.dispatchEvent(e)
                                );
                              }
                            }, 300)),
                          (l = !1);
                      }),
                      o.addEventListener("canplay", function () {
                        (r.style.display = "none"),
                          clearTimeout(o.canplayTimeout),
                          (l = !1);
                      }),
                      o.addEventListener("error", function (e) {
                        i._handleError(e, i.media, i.node),
                          (r.style.display = "none"),
                          (s.style.display = "none"),
                          (l = !0);
                      }),
                      o.addEventListener("loadedmetadata", function () {
                        i.controlsEnabled || i.enableControls();
                      }),
                      o.addEventListener("keydown", function (e) {
                        i.onkeydown(t, o, e), (l = !1);
                      });
                  }
                },
              },
              {
                key: "buildkeyboard",
                value: function (o, e, t, i) {
                  var r = this;
                  r
                    .getElement(r.container)
                    .addEventListener("keydown", function () {
                      r.keyboardAction = !0;
                    }),
                    (r.globalKeydownCallback = function (e) {
                      var t = x.default.activeElement.closest(
                          "." + r.options.classPrefix + "container"
                        ),
                        n = r.media.closest(
                          "." + r.options.classPrefix + "container"
                        );
                      return (
                        (r.hasFocus = !(!t || !n || t.id !== n.id)),
                        r.onkeydown(o, i, e)
                      );
                    }),
                    (r.globalClickCallback = function (e) {
                      r.hasFocus = !!e.target.closest(
                        "." + r.options.classPrefix + "container"
                      );
                    }),
                    r.globalBind("keydown", r.globalKeydownCallback),
                    r.globalBind("click", r.globalClickCallback);
                },
              },
              {
                key: "onkeydown",
                value: function (e, t, n) {
                  if (e.hasFocus && e.options.enableKeyboard)
                    for (var o = 0, i = e.options.keyActions.length; o < i; o++)
                      for (
                        var r = e.options.keyActions[o],
                          a = 0,
                          s = r.keys.length;
                        a < s;
                        a++
                      )
                        if (n.keyCode === r.keys[a])
                          return (
                            r.action(e, t, n.keyCode, n),
                            n.preventDefault(),
                            void n.stopPropagation()
                          );
                  return !0;
                },
              },
              {
                key: "play",
                value: function () {
                  this.proxy.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.proxy.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.proxy.load();
                },
              },
              {
                key: "setCurrentTime",
                value: function (e) {
                  this.proxy.setCurrentTime(e);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.proxy.currentTime;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.proxy.duration;
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.proxy.volume = e;
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.proxy.getVolume();
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  this.proxy.setMuted(e);
                },
              },
              {
                key: "setSrc",
                value: function (e) {
                  this.controlsEnabled || this.enableControls(),
                    this.proxy.setSrc(e);
                },
              },
              {
                key: "getSrc",
                value: function () {
                  return this.proxy.getSrc();
                },
              },
              {
                key: "canPlayType",
                value: function (e) {
                  return this.proxy.canPlayType(e);
                },
              },
              {
                key: "remove",
                value: function () {
                  var l = this,
                    d = l.media.rendererName,
                    u = l.media.originalNode.src;
                  for (var e in l.options.features) {
                    var t = l.options.features[e];
                    if (l["clean" + t])
                      try {
                        l["clean" + t](
                          l,
                          l.getElement(l.layers),
                          l.getElement(l.controls),
                          l.media
                        );
                      } catch (e) {
                        console.error("error cleaning " + t, e);
                      }
                  }
                  var n = l.node.getAttribute("width"),
                    o = l.node.getAttribute("height");
                  (n ? -1 === n.indexOf("%") && (n += "px") : (n = "auto"),
                  o ? -1 === o.indexOf("%") && (o += "px") : (o = "auto"),
                  (l.node.style.width = n),
                  (l.node.style.height = o),
                  l.setPlayerSize(0, 0),
                  l.isDynamic
                    ? l
                        .getElement(l.container)
                        .parentNode.insertBefore(
                          l.node,
                          l.getElement(l.container)
                        )
                    : (function () {
                        l.node.setAttribute("controls", !0),
                          l.node.setAttribute(
                            "id",
                            l.node
                              .getAttribute("id")
                              .replace("_" + d, "")
                              .replace("_from_mejs", "")
                          );
                        var e = l
                          .getElement(l.container)
                          .querySelector(
                            "." + l.options.classPrefix + "poster>img"
                          );
                        (e && l.node.setAttribute("poster", e.src),
                        delete l.node.autoplay,
                        l.node.setAttribute("src", ""),
                        "" !== l.media.canPlayType((0, p.getTypeFromFile)(u)) &&
                          l.node.setAttribute("src", u),
                        d && -1 < d.indexOf("iframe")) &&
                          x.default
                            .getElementById(l.media.id + "-iframe-overlay")
                            .remove();
                        var i = l.node.cloneNode();
                        if (
                          ((i.style.display = ""),
                          l
                            .getElement(l.container)
                            .parentNode.insertBefore(
                              i,
                              l.getElement(l.container)
                            ),
                          l.node.remove(),
                          l.mediaFiles)
                        )
                          for (var t = 0, n = l.mediaFiles.length; t < n; t++) {
                            var o = x.default.createElement("source");
                            o.setAttribute("src", l.mediaFiles[t].src),
                              o.setAttribute("type", l.mediaFiles[t].type),
                              i.appendChild(o);
                          }
                        if (l.trackFiles)
                          for (
                            var r = function (e, t) {
                                var n = l.trackFiles[e],
                                  o = x.default.createElement("track");
                                (o.kind = n.kind),
                                  (o.label = n.label),
                                  (o.srclang = n.srclang),
                                  (o.src = n.src),
                                  i.appendChild(o),
                                  o.addEventListener("load", function () {
                                    (this.mode = "showing"),
                                      (i.textTracks[e].mode = "showing");
                                  });
                              },
                              a = 0,
                              s = l.trackFiles.length;
                            a < s;
                            a++
                          )
                            r(a);
                        delete l.node, delete l.mediaFiles, delete l.trackFiles;
                      })(),
                  l.media.renderer &&
                    "function" == typeof l.media.renderer.destroy &&
                    l.media.renderer.destroy(),
                  delete f.default.players[l.id],
                  "object" === i(l.getElement(l.container))) &&
                    (l
                      .getElement(l.container)
                      .parentNode.querySelector(
                        "." + l.options.classPrefix + "offscreen"
                      )
                      .remove(),
                    l.getElement(l.container).remove());
                  l.globalUnbind("resize", l.globalResizeCallback),
                    l.globalUnbind("keydown", l.globalKeydownCallback),
                    l.globalUnbind("click", l.globalClickCallback),
                    delete l.media.player;
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.proxy.paused;
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.proxy.muted;
                },
                set: function (e) {
                  this.setMuted(e);
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.proxy.ended;
                },
              },
              {
                key: "readyState",
                get: function () {
                  return this.proxy.readyState;
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  this.setCurrentTime(e);
                },
                get: function () {
                  return this.getCurrentTime();
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.getDuration();
                },
              },
              {
                key: "volume",
                set: function (e) {
                  this.setVolume(e);
                },
                get: function () {
                  return this.getVolume();
                },
              },
              {
                key: "src",
                set: function (e) {
                  this.setSrc(e);
                },
                get: function () {
                  return this.getSrc();
                },
              },
            ]),
            r
          );
        })();
        (S.default.MediaElementPlayer = l),
          (f.default.MediaElementPlayer = l),
          (n.default = l);
      },
      {
        17: 17,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        30: 30,
        5: 5,
        6: 6,
        7: 7,
      },
    ],
    17: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          i = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          r = e(3),
          a = (o = r) && o.__esModule ? o : { default: o };
        var s = (function () {
          function e(t) {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (this.media = t.media),
              (this.isVideo = t.isVideo),
              (this.classPrefix = t.options.classPrefix),
              (this.createIframeLayer = function () {
                return t.createIframeLayer();
              }),
              (this.setPoster = function (e) {
                return t.setPoster(e);
              }),
              this
            );
          }
          return (
            i(e, [
              {
                key: "play",
                value: function () {
                  this.media.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.media.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.isLoaded || this.media.load(), (this.isLoaded = !0);
                },
              },
              {
                key: "setCurrentTime",
                value: function (e) {
                  this.media.setCurrentTime(e);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.media.currentTime;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  var e = this.media.getDuration();
                  return (
                    e === 1 / 0 &&
                      this.media.seekable &&
                      this.media.seekable.length &&
                      (e = this.media.seekable.end(0)),
                    e
                  );
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.media.setVolume(e);
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.media.getVolume();
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  this.media.setMuted(e);
                },
              },
              {
                key: "setSrc",
                value: function (e) {
                  var t = this,
                    n = document.getElementById(t.media.id + "-iframe-overlay");
                  n && n.remove(),
                    t.media.setSrc(e),
                    t.createIframeLayer(),
                    null !== t.media.renderer &&
                      "function" == typeof t.media.renderer.getPosterUrl &&
                      t.setPoster(t.media.renderer.getPosterUrl());
                },
              },
              {
                key: "getSrc",
                value: function () {
                  return this.media.getSrc();
                },
              },
              {
                key: "canPlayType",
                value: function (e) {
                  return this.media.canPlayType(e);
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.media.paused;
                },
              },
              {
                key: "muted",
                set: function (e) {
                  this.setMuted(e);
                },
                get: function () {
                  return this.media.muted;
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.media.ended;
                },
              },
              {
                key: "readyState",
                get: function () {
                  return this.media.readyState;
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  this.setCurrentTime(e);
                },
                get: function () {
                  return this.getCurrentTime();
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.getDuration();
                },
              },
              {
                key: "remainingTime",
                get: function () {
                  return this.getDuration() - this.currentTime();
                },
              },
              {
                key: "volume",
                set: function (e) {
                  this.setVolume(e);
                },
                get: function () {
                  return this.getVolume();
                },
              },
              {
                key: "src",
                set: function (e) {
                  this.setSrc(e);
                },
                get: function () {
                  return this.getSrc();
                },
              },
            ]),
            e
          );
        })();
        (n.default = s), (a.default.DefaultPlayer = s);
      },
      { 3: 3 },
    ],
    18: [
      function (e, t, n) {
        "use strict";
        a(e(3));
        var o,
          i = a(e(7)),
          r = a(e(16));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        "undefined" != typeof jQuery
          ? (i.default.$ = jQuery)
          : "undefined" != typeof Zepto
          ? (i.default.$ = Zepto)
          : "undefined" != typeof ender && (i.default.$ = ender),
          void 0 !== (o = i.default.$) &&
            ((o.fn.mediaelementplayer = function (e) {
              return (
                !1 === e
                  ? this.each(function () {
                      var e = o(this).data("mediaelementplayer");
                      e && e.remove(), o(this).removeData("mediaelementplayer");
                    })
                  : this.each(function () {
                      o(this).data(
                        "mediaelementplayer",
                        new r.default(this, e)
                      );
                    }),
                this
              );
            }),
            o(document).ready(function () {
              o(
                "." + i.default.MepDefaults.classPrefix + "player"
              ).mediaelementplayer();
            }));
      },
      { 16: 16, 3: 3, 7: 7 },
    ],
    19: [
      function (e, t, n) {
        "use strict";
        var b =
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
          S = a(e(3)),
          x = a(e(7)),
          w = e(8),
          P = e(27),
          o = e(28),
          i = e(25),
          r = e(26);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var T = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof dashjs
                  ? (T.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      T._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.dashjs.org/latest/dash.all.min.js"),
                    (T.promise =
                      T.promise || (0, r.loadScript)(e.options.path)),
                    T.promise.then(function () {
                      T._createPlayer(e);
                    })),
                T.promise
              );
            },
            _createPlayer: function (e) {
              var t = dashjs.MediaPlayer().create();
              return S.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_dash",
            options: {
              prefix: "native_dash",
              dash: {
                path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                debug: !1,
                drm: {},
                robustnessLevel: "",
              },
            },
            canPlayType: function (e) {
              return (
                i.HAS_MSE &&
                -1 < ["application/dash+xml"].indexOf(e.toLowerCase())
              );
            },
            create: function (s, l, e) {
              var t = s.originalNode,
                r = s.id + "_" + l.prefix,
                a = t.autoplay,
                n = t.children,
                d = null,
                u = null;
              t.removeAttribute("type");
              for (var o = 0, i = n.length; o < i; o++)
                n[o].removeAttribute("type");
              (d = t.cloneNode(!0)), (l = Object.assign(l, s.options));
              for (
                var c = x.default.html5media.properties,
                  f = x.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  p = function (e) {
                    var t = (0, P.createEvent)(e.type, s);
                    s.dispatchEvent(t);
                  },
                  m = function (i) {
                    var e =
                      "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    (d["get" + e] = function () {
                      return null !== u ? d[i] : null;
                    }),
                      (d["set" + e] = function (e) {
                        if (
                          -1 ===
                          x.default.html5media.readOnlyProperties.indexOf(i)
                        )
                          if ("src" === i) {
                            var t =
                              "object" ===
                                (void 0 === e ? "undefined" : b(e)) && e.src
                                ? e.src
                                : e;
                            if (((d[i] = t), null !== u)) {
                              u.reset();
                              for (var n = 0, o = f.length; n < o; n++)
                                d.removeEventListener(f[n], p);
                              (u = T._createPlayer({ options: l.dash, id: r })),
                                e &&
                                  "object" ===
                                    (void 0 === e ? "undefined" : b(e)) &&
                                  "object" === b(e.drm) &&
                                  (u.setProtectionData(e.drm),
                                  (0, P.isString)(l.dash.robustnessLevel) &&
                                    l.dash.robustnessLevel &&
                                    u
                                      .getProtectionController()
                                      .setRobustnessLevel(
                                        l.dash.robustnessLevel
                                      )),
                                u.attachSource(t),
                                a && u.play();
                            }
                          } else d[i] = e;
                      });
                  },
                  h = 0,
                  v = c.length;
                h < v;
                h++
              )
                m(c[h]);
              if (
                ((S.default["__ready__" + r] = function (e) {
                  s.dashPlayer = u = e;
                  for (
                    var t, n = dashjs.MediaPlayer.events, o = 0, i = f.length;
                    o < i;
                    o++
                  )
                    "loadedmetadata" === (t = f[o]) &&
                      (u.initialize(),
                      u.attachView(d),
                      u.setAutoPlay(!1),
                      "object" !== b(l.dash.drm) ||
                        x.default.Utils.isObjectEmpty(l.dash.drm) ||
                        (u.setProtectionData(l.dash.drm),
                        (0, P.isString)(l.dash.robustnessLevel) &&
                          l.dash.robustnessLevel &&
                          u
                            .getProtectionController()
                            .setRobustnessLevel(l.dash.robustnessLevel)),
                      u.attachSource(d.getSrc())),
                      d.addEventListener(t, p);
                  var r = function (e) {
                    if ("error" === e.type.toLowerCase())
                      s.generateError(e.message, d.src), console.error(e);
                    else {
                      var t = (0, P.createEvent)(e.type, s);
                      (t.data = e), s.dispatchEvent(t);
                    }
                  };
                  for (var a in n)
                    n.hasOwnProperty(a) &&
                      u.on(n[a], function (e) {
                        return r(e);
                      });
                }),
                e && 0 < e.length)
              )
                for (var g = 0, y = e.length; g < y; g++)
                  if (w.renderer.renderers[l.prefix].canPlayType(e[g].type)) {
                    d.setAttribute("src", e[g].src),
                      void 0 !== e[g].drm && (l.dash.drm = e[g].drm);
                    break;
                  }
              d.setAttribute("id", r),
                t.parentNode.insertBefore(d, t),
                (t.autoplay = !1),
                (t.style.display = "none"),
                (d.setSize = function (e, t) {
                  return (
                    (d.style.width = e + "px"), (d.style.height = t + "px"), d
                  );
                }),
                (d.hide = function () {
                  return d.pause(), (d.style.display = "none"), d;
                }),
                (d.show = function () {
                  return (d.style.display = ""), d;
                }),
                (d.destroy = function () {
                  null !== u && u.reset();
                });
              var E = (0, P.createEvent)("rendererready", d);
              return (
                s.dispatchEvent(E),
                s.promises.push(T.load({ options: l.dash, id: r })),
                d
              );
            },
          };
        o.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".mpd")
            ? "application/dash+xml"
            : null;
        }),
          w.renderer.add(s);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    20: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PluginDetector = void 0);
        var d =
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
          C = o(e(3)),
          k = o(e(2)),
          _ = o(e(7)),
          N = o(e(5)),
          A = e(8),
          L = e(27),
          F = e(25),
          j = e(28);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (n.PluginDetector = {
          plugins: [],
          hasPluginVersion: function (e, t) {
            var n = r.plugins[e];
            return (
              (t[1] = t[1] || 0),
              (t[2] = t[2] || 0),
              n[0] > t[0] ||
                (n[0] === t[0] && n[1] > t[1]) ||
                (n[0] === t[0] && n[1] === t[1] && n[2] >= t[2])
            );
          },
          addPlugin: function (e, t, n, o, i) {
            r.plugins[e] = r.detectPlugin(t, n, o, i);
          },
          detectPlugin: function (e, t, n, o) {
            var i = [0, 0, 0],
              r = void 0,
              a = void 0;
            if (
              null !== F.NAV.plugins &&
              void 0 !== F.NAV.plugins &&
              "object" === d(F.NAV.plugins[e])
            ) {
              if (
                (r = F.NAV.plugins[e].description) &&
                (void 0 === F.NAV.mimeTypes ||
                  !F.NAV.mimeTypes[t] ||
                  F.NAV.mimeTypes[t].enabledPlugin)
              )
                for (
                  var s = 0,
                    l = (i = r
                      .replace(e, "")
                      .replace(/^\s+/, "")
                      .replace(/\sr/gi, ".")
                      .split(".")).length;
                  s < l;
                  s++
                )
                  i[s] = parseInt(i[s].match(/\d+/), 10);
            } else if (void 0 !== C.default.ActiveXObject)
              try {
                (a = new ActiveXObject(n)) && (i = o(a));
              } catch (e) {}
            return i;
          },
        });
        r.addPlugin(
          "flash",
          "Shockwave Flash",
          "application/x-shockwave-flash",
          "ShockwaveFlash.ShockwaveFlash",
          function (e) {
            var t = [],
              n = e.GetVariable("$version");
            return (
              n &&
                ((n = n.split(" ")[1].split(",")),
                (t = [
                  parseInt(n[0], 10),
                  parseInt(n[1], 10),
                  parseInt(n[2], 10),
                ])),
              t
            );
          }
        );
        var i = {
          create: function (e, t, n) {
            var r = {},
              o = !1;
            (r.options = t),
              (r.id = e.id + "_" + r.options.prefix),
              (r.mediaElement = e),
              (r.flashState = {}),
              (r.flashApi = null),
              (r.flashApiStack = []);
            for (
              var i = _.default.html5media.properties,
                a = function (t) {
                  r.flashState[t] = null;
                  var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                  (r["get" + e] = function () {
                    if (null !== r.flashApi) {
                      if ("function" == typeof r.flashApi["get_" + t]) {
                        var e = r.flashApi["get_" + t]();
                        return "buffered" === t
                          ? {
                              start: function () {
                                return 0;
                              },
                              end: function () {
                                return e;
                              },
                              length: 1,
                            }
                          : e;
                      }
                      return null;
                    }
                    return null;
                  }),
                    (r["set" + e] = function (e) {
                      if (
                        ("src" === t && (e = (0, j.absolutizeUrl)(e)),
                        null !== r.flashApi &&
                          void 0 !== r.flashApi["set_" + t])
                      )
                        try {
                          r.flashApi["set_" + t](e);
                        } catch (e) {}
                      else
                        r.flashApiStack.push({
                          type: "set",
                          propName: t,
                          value: e,
                        });
                    });
                },
                s = 0,
                l = i.length;
              s < l;
              s++
            )
              a(i[s]);
            var d = _.default.html5media.methods,
              u = function (e) {
                r[e] = function () {
                  if (o)
                    if (null !== r.flashApi) {
                      if (r.flashApi["fire_" + e])
                        try {
                          r.flashApi["fire_" + e]();
                        } catch (e) {}
                    } else
                      r.flashApiStack.push({ type: "call", methodName: e });
                };
              };
            d.push("stop");
            for (var c = 0, f = d.length; c < f; c++) u(d[c]);
            for (var p = ["rendererready"], m = 0, h = p.length; m < h; m++) {
              var v = (0, L.createEvent)(p[m], r);
              e.dispatchEvent(v);
            }
            (C.default["__ready__" + r.id] = function () {
              if (
                ((r.flashReady = !0),
                (r.flashApi = k.default.getElementById("__" + r.id)),
                r.flashApiStack.length)
              )
                for (var e = 0, t = r.flashApiStack.length; e < t; e++) {
                  var n = r.flashApiStack[e];
                  if ("set" === n.type) {
                    var o = n.propName,
                      i = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                    r["set" + i](n.value);
                  } else "call" === n.type && r[n.methodName]();
                }
            }),
              (C.default["__event__" + r.id] = function (e, t) {
                var n = (0, L.createEvent)(e, r);
                if (t)
                  try {
                    (n.data = JSON.parse(t)), (n.details.data = JSON.parse(t));
                  } catch (e) {
                    n.message = t;
                  }
                r.mediaElement.dispatchEvent(n);
              }),
              (r.flashWrapper = k.default.createElement("div")),
              -1 ===
                ["always", "sameDomain"].indexOf(r.options.shimScriptAccess) &&
                (r.options.shimScriptAccess = "sameDomain");
            var g = e.originalNode.autoplay,
              y = [
                "uid=" + r.id,
                "autoplay=" + g,
                "allowScriptAccess=" + r.options.shimScriptAccess,
                "preload=" + (e.originalNode.getAttribute("preload") || ""),
              ],
              E =
                null !== e.originalNode &&
                "video" === e.originalNode.tagName.toLowerCase(),
              b = E ? e.originalNode.height : 1,
              S = E ? e.originalNode.width : 1;
            e.originalNode.getAttribute("src") &&
              y.push("src=" + e.originalNode.getAttribute("src")),
              !0 === r.options.enablePseudoStreaming &&
                (y.push(
                  "pseudostreamstart=" +
                    r.options.pseudoStreamingStartQueryParam
                ),
                y.push("pseudostreamtype=" + r.options.pseudoStreamingType)),
              r.options.streamDelimiter &&
                y.push(
                  "streamdelimiter=" +
                    encodeURIComponent(r.options.streamDelimiter)
                ),
              r.options.proxyType && y.push("proxytype=" + r.options.proxyType),
              e.appendChild(r.flashWrapper),
              (e.originalNode.style.display = "none");
            var x = [];
            if (F.IS_IE || F.IS_EDGE) {
              var w = k.default.createElement("div");
              r.flashWrapper.appendChild(w),
                (x = F.IS_EDGE
                  ? [
                      'type="application/x-shockwave-flash"',
                      'data="' +
                        r.options.pluginPath +
                        r.options.filename +
                        '"',
                      'id="__' + r.id + '"',
                      'width="' + S + '"',
                      'height="' + b + "'\"",
                    ]
                  : [
                      'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                      'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',
                      'id="__' + r.id + '"',
                      'width="' + S + '"',
                      'height="' + b + '"',
                    ]),
                E || x.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                (w.outerHTML =
                  "<object " +
                  x.join(" ") +
                  '><param name="movie" value="' +
                  r.options.pluginPath +
                  r.options.filename +
                  "?x=" +
                  new Date() +
                  '" /><param name="flashvars" value="' +
                  y.join("&amp;") +
                  '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
                  r.options.shimScriptAccess +
                  '" /><param name="allowFullScreen" value="true" /><div>' +
                  N.default.t("mejs.install-flash") +
                  "</div></object>");
            } else
              (x = [
                'id="__' + r.id + '"',
                'name="__' + r.id + '"',
                'play="true"',
                'loop="false"',
                'quality="high"',
                'bgcolor="#000000"',
                'wmode="transparent"',
                'allowScriptAccess="' + r.options.shimScriptAccess + '"',
                'allowFullScreen="true"',
                'type="application/x-shockwave-flash"',
                'pluginspage="//www.macromedia.com/go/getflashplayer"',
                'src="' + r.options.pluginPath + r.options.filename + '"',
                'flashvars="' + y.join("&") + '"',
              ]),
                E
                  ? (x.push('width="' + S + '"'), x.push('height="' + b + '"'))
                  : x.push(
                      'style="position: fixed; left: -9999em; top: -9999em;"'
                    ),
                (r.flashWrapper.innerHTML = "<embed " + x.join(" ") + ">");
            if (
              ((r.flashNode = r.flashWrapper.lastChild),
              (r.hide = function () {
                (o = !1), E && (r.flashNode.style.display = "none");
              }),
              (r.show = function () {
                (o = !0), E && (r.flashNode.style.display = "");
              }),
              (r.setSize = function (e, t) {
                (r.flashNode.style.width = e + "px"),
                  (r.flashNode.style.height = t + "px"),
                  null !== r.flashApi &&
                    "function" == typeof r.flashApi.fire_setSize &&
                    r.flashApi.fire_setSize(e, t);
              }),
              (r.destroy = function () {
                r.flashNode.remove();
              }),
              n && 0 < n.length)
            )
              for (var P = 0, T = n.length; P < T; P++)
                if (A.renderer.renderers[t.prefix].canPlayType(n[P].type)) {
                  r.setSrc(n[P].src);
                  break;
                }
            return r;
          },
        };
        if (r.hasPluginVersion("flash", [10, 0, 0])) {
          j.typeChecks.push(function (e) {
            return (e = e.toLowerCase()).startsWith("rtmp")
              ? ~e.indexOf(".mp3")
                ? "audio/rtmp"
                : "video/rtmp"
              : /\.og(a|g)/i.test(e)
              ? "audio/ogg"
              : ~e.indexOf(".m3u8")
              ? "application/x-mpegURL"
              : ~e.indexOf(".mpd")
              ? "application/dash+xml"
              : ~e.indexOf(".flv")
              ? "video/flv"
              : null;
          });
          var a = {
            name: "flash_video",
            options: {
              prefix: "flash_video",
              filename: "mediaelement-flash-video.swf",
              enablePseudoStreaming: !1,
              pseudoStreamingStartQueryParam: "start",
              pseudoStreamingType: "byte",
              proxyType: "",
              streamDelimiter: "",
            },
            canPlayType: function (e) {
              return ~[
                "video/mp4",
                "video/rtmp",
                "audio/rtmp",
                "rtmp/mp4",
                "audio/mp4",
                "video/flv",
                "video/x-flv",
              ].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(a);
          var s = {
            name: "flash_hls",
            options: {
              prefix: "flash_hls",
              filename: "mediaelement-flash-video-hls.swf",
            },
            canPlayType: function (e) {
              return ~[
                "application/x-mpegurl",
                "application/vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(s);
          var l = {
            name: "flash_dash",
            options: {
              prefix: "flash_dash",
              filename: "mediaelement-flash-video-mdash.swf",
            },
            canPlayType: function (e) {
              return ~["application/dash+xml"].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(l);
          var u = {
            name: "flash_audio",
            options: {
              prefix: "flash_audio",
              filename: "mediaelement-flash-audio.swf",
            },
            canPlayType: function (e) {
              return ~["audio/mp3"].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(u);
          var c = {
            name: "flash_audio_ogg",
            options: {
              prefix: "flash_audio_ogg",
              filename: "mediaelement-flash-audio-ogg.swf",
            },
            canPlayType: function (e) {
              return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(
                e.toLowerCase()
              );
            },
            create: i.create,
          };
          A.renderer.add(c);
        }
      },
      { 2: 2, 25: 25, 27: 27, 28: 28, 3: 3, 5: 5, 7: 7, 8: 8 },
    ],
    21: [
      function (e, t, n) {
        "use strict";
        var y =
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
          E = a(e(3)),
          b = a(e(7)),
          S = e(8),
          x = e(27),
          o = e(25),
          i = e(28),
          r = e(26);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var w = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof flvjs
                  ? (w.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      w._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.jsdelivr.net/npm/flv.js@latest"),
                    (w.promise =
                      w.promise || (0, r.loadScript)(e.options.path)),
                    w.promise.then(function () {
                      w._createPlayer(e);
                    })),
                w.promise
              );
            },
            _createPlayer: function (e) {
              (flvjs.LoggingControl.enableDebug = e.options.debug),
                (flvjs.LoggingControl.enableVerbose = e.options.debug);
              var t = flvjs.createPlayer(e.options, e.configs);
              return E.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_flv",
            options: {
              prefix: "native_flv",
              flv: {
                path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
                cors: !0,
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                o.HAS_MSE &&
                -1 < ["video/x-flv", "video/flv"].indexOf(e.toLowerCase())
              );
            },
            create: function (s, a, e) {
              var t = s.originalNode,
                l = s.id + "_" + a.prefix,
                d = null,
                u = null;
              (d = t.cloneNode(!0)), (a = Object.assign(a, s.options));
              for (
                var n = b.default.html5media.properties,
                  c = b.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  f = function (e) {
                    var t = (0, x.createEvent)(e.type, s);
                    s.dispatchEvent(t);
                  },
                  o = function (r) {
                    var e =
                      "" + r.substring(0, 1).toUpperCase() + r.substring(1);
                    (d["get" + e] = function () {
                      return null !== u ? d[r] : null;
                    }),
                      (d["set" + e] = function (e) {
                        if (
                          -1 ===
                          b.default.html5media.readOnlyProperties.indexOf(r)
                        )
                          if ("src" === r) {
                            if (
                              ((d[r] =
                                "object" ===
                                  (void 0 === e ? "undefined" : y(e)) && e.src
                                  ? e.src
                                  : e),
                              null !== u)
                            ) {
                              var t = { type: "flv" };
                              (t.url = e),
                                (t.cors = a.flv.cors),
                                (t.debug = a.flv.debug),
                                (t.path = a.flv.path);
                              var n = a.flv.configs;
                              u.destroy();
                              for (var o = 0, i = c.length; o < i; o++)
                                d.removeEventListener(c[o], f);
                              (u = w._createPlayer({
                                options: t,
                                configs: n,
                                id: l,
                              })).attachMediaElement(d),
                                u.load();
                            }
                          } else d[r] = e;
                      });
                  },
                  i = 0,
                  r = n.length;
                i < r;
                i++
              )
                o(n[i]);
              if (
                ((E.default["__ready__" + l] = function (e) {
                  s.flvPlayer = u = e;
                  for (var t, i = flvjs.Events, n = 0, o = c.length; n < o; n++)
                    "loadedmetadata" === (t = c[n]) &&
                      (u.unload(),
                      u.detachMediaElement(),
                      u.attachMediaElement(d),
                      u.load()),
                      d.addEventListener(t, f);
                  var r = function (o) {
                    i.hasOwnProperty(o) &&
                      u.on(i[o], function () {
                        for (
                          var e = arguments.length, t = Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return (function (e, t) {
                          if ("error" === e) {
                            var n = t[0] + ": " + t[1] + " " + t[2].msg;
                            s.generateError(n, d.src);
                          } else {
                            var o = (0, x.createEvent)(e, s);
                            (o.data = t), s.dispatchEvent(o);
                          }
                        })(i[o], t);
                      });
                  };
                  for (var a in i) r(a);
                }),
                e && 0 < e.length)
              )
                for (var p = 0, m = e.length; p < m; p++)
                  if (S.renderer.renderers[a.prefix].canPlayType(e[p].type)) {
                    d.setAttribute("src", e[p].src);
                    break;
                  }
              d.setAttribute("id", l),
                t.parentNode.insertBefore(d, t),
                (t.autoplay = !1),
                (t.style.display = "none");
              var h = { type: "flv" };
              (h.url = d.src),
                (h.cors = a.flv.cors),
                (h.debug = a.flv.debug),
                (h.path = a.flv.path);
              var v = a.flv.configs;
              (d.setSize = function (e, t) {
                return (
                  (d.style.width = e + "px"), (d.style.height = t + "px"), d
                );
              }),
                (d.hide = function () {
                  return null !== u && u.pause(), (d.style.display = "none"), d;
                }),
                (d.show = function () {
                  return (d.style.display = ""), d;
                }),
                (d.destroy = function () {
                  null !== u && u.destroy();
                });
              var g = (0, x.createEvent)("rendererready", d);
              return (
                s.dispatchEvent(g),
                s.promises.push(w.load({ options: h, configs: v, id: l })),
                d
              );
            },
          };
        i.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null;
        }),
          S.renderer.add(s);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    22: [
      function (e, t, n) {
        "use strict";
        var y =
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
          E = a(e(3)),
          b = a(e(7)),
          S = e(8),
          x = e(27),
          o = e(25),
          i = e(28),
          r = e(26);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var w = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof Hls
                  ? (w.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      w._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.jsdelivr.net/npm/hls.js@latest"),
                    (w.promise =
                      w.promise || (0, r.loadScript)(e.options.path)),
                    w.promise.then(function () {
                      w._createPlayer(e);
                    })),
                w.promise
              );
            },
            _createPlayer: function (e) {
              var t = new Hls(e.options);
              return E.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_hls",
            options: {
              prefix: "native_hls",
              hls: {
                path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
                autoStartLoad: !1,
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                o.HAS_MSE &&
                -1 <
                  [
                    "application/x-mpegurl",
                    "application/vnd.apple.mpegurl",
                    "audio/mpegurl",
                    "audio/hls",
                    "video/hls",
                  ].indexOf(e.toLowerCase())
              );
            },
            create: function (d, i, u) {
              var e = d.originalNode,
                r = d.id + "_" + i.prefix,
                t = e.getAttribute("preload"),
                n = e.autoplay,
                c = null,
                f = null,
                p = 0,
                m = u.length;
              (f = e.cloneNode(!0)),
                ((i = Object.assign(i, d.options)).hls.autoStartLoad =
                  (t && "none" !== t) || n);
              for (
                var o = b.default.html5media.properties,
                  h = b.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  v = function (e) {
                    var t = (0, x.createEvent)(e.type, d);
                    d.dispatchEvent(t);
                  },
                  a = function (o) {
                    var e =
                      "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                    (f["get" + e] = function () {
                      return null !== c ? f[o] : null;
                    }),
                      (f["set" + e] = function (e) {
                        if (
                          -1 ===
                          b.default.html5media.readOnlyProperties.indexOf(o)
                        )
                          if ("src" === o) {
                            if (
                              ((f[o] =
                                "object" ===
                                  (void 0 === e ? "undefined" : y(e)) && e.src
                                  ? e.src
                                  : e),
                              null !== c)
                            ) {
                              c.destroy();
                              for (var t = 0, n = h.length; t < n; t++)
                                f.removeEventListener(h[t], v);
                              (c = w._createPlayer({
                                options: i.hls,
                                id: r,
                              })).loadSource(e),
                                c.attachMedia(f);
                            }
                          } else f[o] = e;
                      });
                  },
                  s = 0,
                  l = o.length;
                s < l;
                s++
              )
                a(o[s]);
              if (
                ((E.default["__ready__" + r] = function (e) {
                  d.hlsPlayer = c = e;
                  for (
                    var i = Hls.Events,
                      t = function (e) {
                        if ("loadedmetadata" === e) {
                          var t = d.originalNode.src;
                          c.detachMedia(), c.loadSource(t), c.attachMedia(f);
                        }
                        f.addEventListener(e, v);
                      },
                      n = 0,
                      o = h.length;
                    n < o;
                    n++
                  )
                    t(h[n]);
                  var s = void 0,
                    l = void 0,
                    r = function (o) {
                      i.hasOwnProperty(o) &&
                        c.on(i[o], function () {
                          for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return (function (e, t) {
                            if (
                              "hlsError" === e &&
                              (console.warn(t), (t = t[1]).fatal)
                            )
                              switch (t.type) {
                                case "mediaError":
                                  var n = new Date().getTime();
                                  if (!s || 3e3 < n - s)
                                    (s = new Date().getTime()),
                                      c.recoverMediaError();
                                  else if (!l || 3e3 < n - l)
                                    (l = new Date().getTime()),
                                      console.warn(
                                        "Attempting to swap Audio Codec and recover from media error"
                                      ),
                                      c.swapAudioCodec(),
                                      c.recoverMediaError();
                                  else {
                                    var o =
                                      "Cannot recover, last media error recovery failed";
                                    d.generateError(o, f.src), console.error(o);
                                  }
                                  break;
                                case "networkError":
                                  if ("manifestLoadError" === t.details)
                                    if (p < m && void 0 !== u[p + 1])
                                      f.setSrc(u[p++].src), f.load(), f.play();
                                    else {
                                      var i = "Network error";
                                      d.generateError(i, u), console.error(i);
                                    }
                                  else {
                                    var r = "Network error";
                                    d.generateError(r, u), console.error(r);
                                  }
                                  break;
                                default:
                                  c.destroy();
                              }
                            else {
                              var a = (0, x.createEvent)(e, d);
                              (a.data = t), d.dispatchEvent(a);
                            }
                          })(i[o], t);
                        });
                    };
                  for (var a in i) r(a);
                }),
                0 < m)
              )
                for (; p < m; p++)
                  if (S.renderer.renderers[i.prefix].canPlayType(u[p].type)) {
                    f.setAttribute("src", u[p].src);
                    break;
                  }
              "auto" === t ||
                n ||
                (f.addEventListener("play", function () {
                  null !== c && c.startLoad();
                }),
                f.addEventListener("pause", function () {
                  null !== c && c.stopLoad();
                })),
                f.setAttribute("id", r),
                e.parentNode.insertBefore(f, e),
                (e.autoplay = !1),
                (e.style.display = "none"),
                (f.setSize = function (e, t) {
                  return (
                    (f.style.width = e + "px"), (f.style.height = t + "px"), f
                  );
                }),
                (f.hide = function () {
                  return f.pause(), (f.style.display = "none"), f;
                }),
                (f.show = function () {
                  return (f.style.display = ""), f;
                }),
                (f.destroy = function () {
                  null !== c && (c.stopLoad(), c.destroy());
                });
              var g = (0, x.createEvent)("rendererready", f);
              return (
                d.dispatchEvent(g),
                d.promises.push(w.load({ options: i.hls, id: r })),
                f
              );
            },
          };
        i.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".m3u8")
            ? "application/x-mpegURL"
            : null;
        }),
          S.renderer.add(s);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    23: [
      function (e, t, n) {
        "use strict";
        var o = r(e(3)),
          g = r(e(2)),
          y = r(e(7)),
          E = e(8),
          b = e(27),
          i = e(25);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = {
          name: "html5",
          options: { prefix: "html5" },
          canPlayType: function (e) {
            var t = g.default.createElement("video");
            return (i.IS_ANDROID && /\/mp(3|4)$/i.test(e)) ||
              (~[
                "application/x-mpegurl",
                "vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].indexOf(e.toLowerCase()) &&
                i.SUPPORTS_NATIVE_HLS)
              ? "yes"
              : t.canPlayType
              ? t.canPlayType(e.toLowerCase()).replace(/no/, "")
              : "";
          },
          create: function (n, e, t) {
            var o = n.id + "_" + e.prefix,
              i = !1,
              r = null;
            void 0 === n.originalNode || null === n.originalNode
              ? ((r = g.default.createElement("audio")), n.appendChild(r))
              : (r = n.originalNode),
              r.setAttribute("id", o);
            for (
              var a = y.default.html5media.properties,
                s = function (t) {
                  var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                  (r["get" + e] = function () {
                    return r[t];
                  }),
                    (r["set" + e] = function (e) {
                      -1 ===
                        y.default.html5media.readOnlyProperties.indexOf(t) &&
                        (r[t] = e);
                    });
                },
                l = 0,
                d = a.length;
              l < d;
              l++
            )
              s(a[l]);
            for (
              var u,
                c = y.default.html5media.events
                  .concat(["click", "mouseover", "mouseout"])
                  .filter(function (e) {
                    return "error" !== e;
                  }),
                f = 0,
                p = c.length;
              f < p;
              f++
            )
              (u = c[f]),
                r.addEventListener(u, function (e) {
                  if (i) {
                    var t = (0, b.createEvent)(e.type, e.target);
                    n.dispatchEvent(t);
                  }
                });
            (r.setSize = function (e, t) {
              return (r.style.width = e + "px"), (r.style.height = t + "px"), r;
            }),
              (r.hide = function () {
                return (i = !1), (r.style.display = "none"), r;
              }),
              (r.show = function () {
                return (i = !0), (r.style.display = ""), r;
              });
            var m = 0,
              h = t.length;
            if (0 < h)
              for (; m < h; m++)
                if (E.renderer.renderers[e.prefix].canPlayType(t[m].type)) {
                  r.setAttribute("src", t[m].src);
                  break;
                }
            r.addEventListener("error", function (e) {
              e &&
                e.target &&
                e.target.error &&
                4 === e.target.error.code &&
                i &&
                (m < h && void 0 !== t[m + 1]
                  ? ((r.src = t[m++].src), r.load(), r.play())
                  : n.generateError(
                      "Media error: Format(s) not supported or source(s) not found",
                      t
                    ));
            });
            var v = (0, b.createEvent)("rendererready", r);
            return n.dispatchEvent(v), r;
          },
        };
        (o.default.HtmlMediaElement = y.default.HtmlMediaElement = a),
          E.renderer.add(a);
      },
      { 2: 2, 25: 25, 27: 27, 3: 3, 7: 7, 8: 8 },
    ],
    24: [
      function (e, t, n) {
        "use strict";
        var w = a(e(3)),
          P = a(e(2)),
          T = a(e(7)),
          o = e(8),
          C = e(27),
          i = e(28),
          r = e(26);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var k = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function (e) {
              (k.isLoaded = "undefined" != typeof YT && YT.loaded),
                k.isLoaded
                  ? k.createIframe(e)
                  : (k.loadIframeApi(), k.iframeQueue.push(e));
            },
            loadIframeApi: function () {
              k.isIframeStarted ||
                ((0, r.loadScript)("https://www.youtube.com/player_api"),
                (k.isIframeStarted = !0));
            },
            iFrameReady: function () {
              for (
                k.isLoaded = !0, k.isIframeLoaded = !0;
                0 < k.iframeQueue.length;

              ) {
                var e = k.iframeQueue.pop();
                k.createIframe(e);
              }
            },
            createIframe: function (e) {
              return new YT.Player(e.containerId, e);
            },
            getYouTubeId: function (e) {
              var t = "";
              return (
                0 < e.indexOf("?")
                  ? "" === (t = k.getYouTubeIdFromParam(e)) &&
                    (t = k.getYouTubeIdFromUrl(e))
                  : (t = k.getYouTubeIdFromUrl(e)),
                (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
              );
            },
            getYouTubeIdFromParam: function (e) {
              if (null == e || !e.trim().length) return null;
              for (
                var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length;
                o < i;
                o++
              ) {
                var r = t[o].split("=");
                if ("v" === r[0]) {
                  n = r[1];
                  break;
                }
              }
              return n;
            },
            getYouTubeIdFromUrl: function (e) {
              return null != e && e.trim().length
                ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1)
                : null;
            },
            getYouTubeNoCookieUrl: function (e) {
              if (
                null == e ||
                !e.trim().length ||
                -1 === e.indexOf("//www.youtube")
              )
                return e;
              var t = e.split("/");
              return (
                (t[2] = t[2].replace(".com", "-nocookie.com")), t.join("/")
              );
            },
          },
          s = {
            name: "youtube_iframe",
            options: {
              prefix: "youtube_iframe",
              youtube: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                end: 0,
                loop: 0,
                modestbranding: 0,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                start: 0,
                iv_load_policy: 3,
                nocookie: !1,
                imageQuality: null,
              },
            },
            canPlayType: function (e) {
              return ~["video/youtube", "video/x-youtube"].indexOf(
                e.toLowerCase()
              );
            },
            create: function (m, n, o) {
              var h = {},
                v = [],
                g = null,
                r = !0,
                a = !1,
                y = null;
              (h.options = n),
                (h.id = m.id + "_" + n.prefix),
                (h.mediaElement = m);
              for (
                var e = T.default.html5media.properties,
                  t = function (i) {
                    var e =
                      "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    (h["get" + e] = function () {
                      if (null !== g) {
                        switch (i) {
                          case "currentTime":
                            return g.getCurrentTime();
                          case "duration":
                            return g.getDuration();
                          case "volume":
                            return g.getVolume() / 100;
                          case "playbackRate":
                            return g.getPlaybackRate();
                          case "paused":
                            return r;
                          case "ended":
                            return a;
                          case "muted":
                            return g.isMuted();
                          case "buffered":
                            var e = g.getVideoLoadedFraction(),
                              t = g.getDuration();
                            return {
                              start: function () {
                                return 0;
                              },
                              end: function () {
                                return e * t;
                              },
                              length: 1,
                            };
                          case "src":
                            return g.getVideoUrl();
                          case "readyState":
                            return 4;
                        }
                        return null;
                      }
                      return null;
                    }),
                      (h["set" + e] = function (e) {
                        if (null !== g)
                          switch (i) {
                            case "src":
                              var t = "string" == typeof e ? e : e[0].src,
                                n = k.getYouTubeId(t);
                              m.originalNode.autoplay
                                ? g.loadVideoById(n)
                                : g.cueVideoById(n);
                              break;
                            case "currentTime":
                              g.seekTo(e);
                              break;
                            case "muted":
                              e ? g.mute() : g.unMute(),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("volumechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "volume":
                              e,
                                g.setVolume(100 * e),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("volumechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "playbackRate":
                              g.setPlaybackRate(e),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("ratechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "readyState":
                              var o = (0, C.createEvent)("canplay", h);
                              m.dispatchEvent(o);
                          }
                        else v.push({ type: "set", propName: i, value: e });
                      });
                  },
                  i = 0,
                  s = e.length;
                i < s;
                i++
              )
                t(e[i]);
              for (
                var l = T.default.html5media.methods,
                  d = function (e) {
                    h[e] = function () {
                      if (null !== g)
                        switch (e) {
                          case "play":
                            return (r = !1), g.playVideo();
                          case "pause":
                            return (r = !0), g.pauseVideo();
                          case "load":
                            return null;
                        }
                      else v.push({ type: "call", methodName: e });
                    };
                  },
                  u = 0,
                  c = l.length;
                u < c;
                u++
              )
                d(l[u]);
              var f = P.default.createElement("div");
              (f.id = h.id),
                h.options.youtube.nocookie &&
                  (m.originalNode.src = k.getYouTubeNoCookieUrl(o[0].src)),
                m.originalNode.parentNode.insertBefore(f, m.originalNode),
                (m.originalNode.style.display = "none");
              var p = "audio" === m.originalNode.tagName.toLowerCase(),
                E = p ? "1" : m.originalNode.height,
                b = p ? "1" : m.originalNode.width,
                S = k.getYouTubeId(o[0].src),
                x = {
                  id: h.id,
                  containerId: f.id,
                  videoId: S,
                  height: E,
                  width: b,
                  playerVars: Object.assign(
                    {
                      controls: 0,
                      rel: 0,
                      disablekb: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      html5: 1,
                      iv_load_policy: 3,
                    },
                    h.options.youtube
                  ),
                  origin: w.default.location.host,
                  events: {
                    onReady: function (e) {
                      if (
                        ((m.youTubeApi = g = e.target),
                        (m.youTubeState = { paused: !0, ended: !1 }),
                        v.length)
                      )
                        for (var t = 0, n = v.length; t < n; t++) {
                          var o = v[t];
                          if ("set" === o.type) {
                            var i = o.propName,
                              r =
                                "" +
                                i.substring(0, 1).toUpperCase() +
                                i.substring(1);
                            h["set" + r](o.value);
                          } else "call" === o.type && h[o.methodName]();
                        }
                      (y = g.getIframe()), m.originalNode.muted && g.mute();
                      for (
                        var a = ["mouseover", "mouseout"],
                          s = function (e) {
                            var t = (0, C.createEvent)(e.type, h);
                            m.dispatchEvent(t);
                          },
                          l = 0,
                          d = a.length;
                        l < d;
                        l++
                      )
                        y.addEventListener(a[l], s, !1);
                      for (
                        var u = [
                            "rendererready",
                            "loadedmetadata",
                            "loadeddata",
                            "canplay",
                          ],
                          c = 0,
                          f = u.length;
                        c < f;
                        c++
                      ) {
                        var p = (0, C.createEvent)(u[c], h);
                        m.dispatchEvent(p);
                      }
                    },
                    onStateChange: function (e) {
                      var t = [];
                      switch (e.data) {
                        case -1:
                          (t = ["loadedmetadata"]), (r = !0), (a = !1);
                          break;
                        case 0:
                          (t = ["ended"]),
                            (r = !1),
                            (a = !h.options.youtube.loop),
                            h.options.youtube.loop || h.stopInterval();
                          break;
                        case 1:
                          (t = ["play", "playing"]),
                            (a = r = !1),
                            h.startInterval();
                          break;
                        case 2:
                          (t = ["pause"]), (r = !0), (a = !1), h.stopInterval();
                          break;
                        case 3:
                          (t = ["progress"]), (a = !1);
                          break;
                        case 5:
                          (t = ["loadeddata", "loadedmetadata", "canplay"]),
                            (r = !0),
                            (a = !1);
                      }
                      for (var n = 0, o = t.length; n < o; n++) {
                        var i = (0, C.createEvent)(t[n], h);
                        m.dispatchEvent(i);
                      }
                    },
                    onError: function (e) {
                      return (function (e) {
                        var t = "";
                        switch (e.data) {
                          case 2:
                            t =
                              "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
                            break;
                          case 5:
                            t =
                              "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                            break;
                          case 100:
                            t =
                              "The video requested was not found. Either video has been removed or has been marked as private.";
                            break;
                          case 101:
                          case 105:
                            t =
                              "The owner of the requested video does not allow it to be played in embedded players.";
                            break;
                          default:
                            t = "Unknown error.";
                        }
                        m.generateError("Code " + e.data + ": " + t, o);
                      })(e);
                    },
                  },
                };
              return (
                (p || m.originalNode.hasAttribute("playsinline")) &&
                  (x.playerVars.playsinline = 1),
                m.originalNode.controls && (x.playerVars.controls = 1),
                m.originalNode.autoplay && (x.playerVars.autoplay = 1),
                m.originalNode.loop && (x.playerVars.loop = 1),
                ((x.playerVars.loop && 1 === parseInt(x.playerVars.loop, 10)) ||
                  -1 < m.originalNode.src.indexOf("loop=")) &&
                  !x.playerVars.playlist &&
                  -1 === m.originalNode.src.indexOf("playlist=") &&
                  (x.playerVars.playlist = k.getYouTubeId(m.originalNode.src)),
                k.enqueueIframe(x),
                (h.onEvent = function (e, t, n) {
                  null != n && (m.youTubeState = n);
                }),
                (h.setSize = function (e, t) {
                  null !== g && g.setSize(e, t);
                }),
                (h.hide = function () {
                  h.stopInterval(), h.pause(), y && (y.style.display = "none");
                }),
                (h.show = function () {
                  y && (y.style.display = "");
                }),
                (h.destroy = function () {
                  g.destroy();
                }),
                (h.interval = null),
                (h.startInterval = function () {
                  h.interval = setInterval(function () {
                    var e = (0, C.createEvent)("timeupdate", h);
                    m.dispatchEvent(e);
                  }, 250);
                }),
                (h.stopInterval = function () {
                  h.interval && clearInterval(h.interval);
                }),
                (h.getPosterUrl = function () {
                  var e = n.youtube.imageQuality,
                    t = k.getYouTubeId(m.originalNode.src);
                  return e &&
                    -1 <
                      [
                        "default",
                        "hqdefault",
                        "mqdefault",
                        "sddefault",
                        "maxresdefault",
                      ].indexOf(e) &&
                    t
                    ? "https://img.youtube.com/vi/" + t + "/" + e + ".jpg"
                    : "";
                }),
                h
              );
            },
          };
        (w.default.onYouTubePlayerAPIReady = function () {
          k.iFrameReady();
        }),
          i.typeChecks.push(function (e) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(e)
              ? "video/x-youtube"
              : null;
          }),
          o.renderer.add(s);
      },
      { 2: 2, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    25: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.cancelFullScreen =
            n.requestFullScreen =
            n.isFullScreen =
            n.FULLSCREEN_EVENT_NAME =
            n.HAS_NATIVE_FULLSCREEN_ENABLED =
            n.HAS_TRUE_NATIVE_FULLSCREEN =
            n.HAS_IOS_FULLSCREEN =
            n.HAS_MS_NATIVE_FULLSCREEN =
            n.HAS_MOZ_NATIVE_FULLSCREEN =
            n.HAS_WEBKIT_NATIVE_FULLSCREEN =
            n.HAS_NATIVE_FULLSCREEN =
            n.SUPPORTS_NATIVE_HLS =
            n.SUPPORT_PASSIVE_EVENT =
            n.SUPPORT_POINTER_EVENTS =
            n.HAS_MSE =
            n.IS_STOCK_ANDROID =
            n.IS_SAFARI =
            n.IS_FIREFOX =
            n.IS_CHROME =
            n.IS_EDGE =
            n.IS_IE =
            n.IS_ANDROID =
            n.IS_IOS =
            n.IS_IPOD =
            n.IS_IPHONE =
            n.IS_IPAD =
            n.UA =
            n.NAV =
              void 0);
        var i = a(e(3)),
          r = a(e(2)),
          o = a(e(7));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        for (
          var s = (n.NAV = i.default.navigator),
            l = (n.UA = s.userAgent.toLowerCase()),
            d = (n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream),
            u = (n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream),
            c = (n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream),
            f =
              ((n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream),
              (n.IS_ANDROID = /android/i.test(l))),
            p = (n.IS_IE = /(trident|microsoft)/i.test(s.appName)),
            m = (n.IS_EDGE =
              ("msLaunchUri" in s) && !("documentMode" in r.default)),
            h = (n.IS_CHROME = /chrome/i.test(l)),
            v = (n.IS_FIREFOX = /firefox/i.test(l)),
            g = (n.IS_SAFARI = /safari/i.test(l) && !h),
            y = (n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(
              l
            )),
            E = (n.HAS_MSE = ("MediaSource" in i.default)),
            b = (n.SUPPORT_POINTER_EVENTS = (function () {
              var e = r.default.createElement("x"),
                t = r.default.documentElement,
                n = i.default.getComputedStyle;
              if (!("pointerEvents" in e.style)) return !1;
              (e.style.pointerEvents = "auto"),
                (e.style.pointerEvents = "x"),
                t.appendChild(e);
              var o = n && "auto" === (n(e, "") || {}).pointerEvents;
              return e.remove(), !!o;
            })()),
            S = (n.SUPPORT_PASSIVE_EVENT = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                i.default.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })()),
            x = ["source", "track", "audio", "video"],
            w = void 0,
            P = 0,
            T = x.length;
          P < T;
          P++
        )
          w = r.default.createElement(x[P]);
        var C = (n.SUPPORTS_NATIVE_HLS = g || (p && /edge/i.test(l))),
          k = void 0 !== w.webkitEnterFullscreen,
          _ = void 0 !== w.requestFullscreen;
        k && /mac os x 10_5/i.test(l) && (k = _ = !1);
        var N = void 0 !== w.webkitRequestFullScreen,
          A = void 0 !== w.mozRequestFullScreen,
          L = void 0 !== w.msRequestFullscreen,
          F = N || A || L,
          j = F,
          I = "",
          M = void 0,
          O = void 0,
          D = void 0;
        A
          ? (j = r.default.mozFullScreenEnabled)
          : L && (j = r.default.msFullscreenEnabled),
          h && (k = !1),
          F &&
            (N
              ? (I = "webkitfullscreenchange")
              : A
              ? (I = "fullscreenchange")
              : L && (I = "MSFullscreenChange"),
            (n.isFullScreen = M =
              function () {
                return A
                  ? r.default.mozFullScreen
                  : N
                  ? r.default.webkitIsFullScreen
                  : L
                  ? null !== r.default.msFullscreenElement
                  : void 0;
              }),
            (n.requestFullScreen = O =
              function (e) {
                N
                  ? e.webkitRequestFullScreen()
                  : A
                  ? e.mozRequestFullScreen()
                  : L && e.msRequestFullscreen();
              }),
            (n.cancelFullScreen = D =
              function () {
                N
                  ? r.default.webkitCancelFullScreen()
                  : A
                  ? r.default.mozCancelFullScreen()
                  : L && r.default.msExitFullscreen();
              }));
        var R = (n.HAS_NATIVE_FULLSCREEN = _),
          V = (n.HAS_WEBKIT_NATIVE_FULLSCREEN = N),
          H = (n.HAS_MOZ_NATIVE_FULLSCREEN = A),
          U = (n.HAS_MS_NATIVE_FULLSCREEN = L),
          q = (n.HAS_IOS_FULLSCREEN = k),
          B = (n.HAS_TRUE_NATIVE_FULLSCREEN = F),
          z = (n.HAS_NATIVE_FULLSCREEN_ENABLED = j),
          W = (n.FULLSCREEN_EVENT_NAME = I);
        (n.isFullScreen = M),
          (n.requestFullScreen = O),
          (n.cancelFullScreen = D),
          (o.default.Features = o.default.Features || {}),
          (o.default.Features.isiPad = d),
          (o.default.Features.isiPod = c),
          (o.default.Features.isiPhone = u),
          (o.default.Features.isiOS =
            o.default.Features.isiPhone || o.default.Features.isiPad),
          (o.default.Features.isAndroid = f),
          (o.default.Features.isIE = p),
          (o.default.Features.isEdge = m),
          (o.default.Features.isChrome = h),
          (o.default.Features.isFirefox = v),
          (o.default.Features.isSafari = g),
          (o.default.Features.isStockAndroid = y),
          (o.default.Features.hasMSE = E),
          (o.default.Features.supportsNativeHLS = C),
          (o.default.Features.supportsPointerEvents = b),
          (o.default.Features.supportsPassiveEvent = S),
          (o.default.Features.hasiOSFullScreen = q),
          (o.default.Features.hasNativeFullscreen = R),
          (o.default.Features.hasWebkitNativeFullScreen = V),
          (o.default.Features.hasMozNativeFullScreen = H),
          (o.default.Features.hasMsNativeFullScreen = U),
          (o.default.Features.hasTrueNativeFullScreen = B),
          (o.default.Features.nativeFullScreenEnabled = z),
          (o.default.Features.fullScreenEventName = W),
          (o.default.Features.isFullScreen = M),
          (o.default.Features.requestFullScreen = O),
          (o.default.Features.cancelFullScreen = D);
      },
      { 2: 2, 3: 3, 7: 7 },
    ],
    26: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.removeClass = n.addClass = n.hasClass = void 0),
          (n.loadScript = a),
          (n.offset = s),
          (n.toggleClass = h),
          (n.fadeOut = v),
          (n.fadeIn = g),
          (n.siblings = y),
          (n.visible = E),
          (n.ajax = b);
        var l = r(e(3)),
          i = r(e(2)),
          o = r(e(7));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(o) {
          return new Promise(function (e, t) {
            var n = i.default.createElement("script");
            (n.src = o),
              (n.async = !0),
              (n.onload = function () {
                n.remove(), e();
              }),
              (n.onerror = function () {
                n.remove(), t();
              }),
              i.default.head.appendChild(n);
          });
        }
        function s(e) {
          var t = e.getBoundingClientRect(),
            n = l.default.pageXOffset || i.default.documentElement.scrollLeft,
            o = l.default.pageYOffset || i.default.documentElement.scrollTop;
          return { top: t.top + o, left: t.left + n };
        }
        var d = void 0,
          u = void 0,
          c = void 0;
        "classList" in i.default.documentElement
          ? ((d = function (e, t) {
              return void 0 !== e.classList && e.classList.contains(t);
            }),
            (u = function (e, t) {
              return e.classList.add(t);
            }),
            (c = function (e, t) {
              return e.classList.remove(t);
            }))
          : ((d = function (e, t) {
              return new RegExp("\\b" + t + "\\b").test(e.className);
            }),
            (u = function (e, t) {
              f(e, t) || (e.className += " " + t);
            }),
            (c = function (e, t) {
              e.className = e.className.replace(
                new RegExp("\\b" + t + "\\b", "g"),
                ""
              );
            }));
        var f = (n.hasClass = d),
          p = (n.addClass = u),
          m = (n.removeClass = c);
        function h(e, t) {
          f(e, t) ? m(e, t) : p(e, t);
        }
        function v(i) {
          var r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            a = arguments[2];
          i.style.opacity || (i.style.opacity = 1);
          var s = null;
          l.default.requestAnimationFrame(function e(t) {
            var n = t - (s = s || t),
              o = parseFloat(1 - n / r, 2);
            (i.style.opacity = o < 0 ? 0 : o),
              r < n
                ? a && "function" == typeof a && a()
                : l.default.requestAnimationFrame(e);
          });
        }
        function g(i) {
          var r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            a = arguments[2];
          i.style.opacity || (i.style.opacity = 0);
          var s = null;
          l.default.requestAnimationFrame(function e(t) {
            var n = t - (s = s || t),
              o = parseFloat(n / r, 2);
            (i.style.opacity = 1 < o ? 1 : o),
              r < n
                ? a && "function" == typeof a && a()
                : l.default.requestAnimationFrame(e);
          });
        }
        function y(e, t) {
          var n = [];
          for (
            e = e.parentNode.firstChild;
            (t && !t(e)) || n.push(e), (e = e.nextSibling);

          );
          return n;
        }
        function E(e) {
          return void 0 !== e.getClientRects && "function" === e.getClientRects
            ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            : !(!e.offsetWidth && !e.offsetHeight);
        }
        function b(e, t, n, o) {
          var i = l.default.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP"),
            r = "application/x-www-form-urlencoded; charset=UTF-8",
            a = !1,
            s = "*/".concat("*");
          switch (t) {
            case "text":
              r = "text/plain";
              break;
            case "json":
              r = "application/json, text/javascript";
              break;
            case "html":
              r = "text/html";
              break;
            case "xml":
              r = "application/xml, text/xml";
          }
          "application/x-www-form-urlencoded" !== r &&
            (s = r + ", */*; q=0.01"),
            i &&
              (i.open("GET", e, !0),
              i.setRequestHeader("Accept", s),
              (i.onreadystatechange = function () {
                if (!a && 4 === i.readyState)
                  if (200 === i.status) {
                    a = !0;
                    var e = void 0;
                    switch (t) {
                      case "json":
                        e = JSON.parse(i.responseText);
                        break;
                      case "xml":
                        e = i.responseXML;
                        break;
                      default:
                        e = i.responseText;
                    }
                    n(e);
                  } else "function" == typeof o && o(i.status);
              }),
              i.send());
        }
        (o.default.Utils = o.default.Utils || {}),
          (o.default.Utils.offset = s),
          (o.default.Utils.hasClass = f),
          (o.default.Utils.addClass = p),
          (o.default.Utils.removeClass = m),
          (o.default.Utils.toggleClass = h),
          (o.default.Utils.fadeIn = g),
          (o.default.Utils.fadeOut = v),
          (o.default.Utils.siblings = y),
          (o.default.Utils.visible = E),
          (o.default.Utils.ajax = b),
          (o.default.Utils.loadScript = a);
      },
      { 2: 2, 3: 3, 7: 7 },
    ],
    27: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.escapeHTML = a),
          (n.debounce = s),
          (n.isObjectEmpty = l),
          (n.splitEvents = d),
          (n.createEvent = u),
          (n.isNodeAfter = c),
          (n.isString = f);
        var o,
          i = e(7),
          r = (o = i) && o.__esModule ? o : { default: o };
        function a(e) {
          if ("string" != typeof e)
            throw new Error("Argument passed must be a string");
          var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
          return e.replace(/[&<>"]/g, function (e) {
            return t[e];
          });
        }
        function s(o, i) {
          var r = this,
            a = arguments,
            s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
          if ("function" != typeof o)
            throw new Error("First argument must be a function");
          if ("number" != typeof i)
            throw new Error("Second argument must be a numeric value");
          var l = void 0;
          return function () {
            var e = r,
              t = a,
              n = s && !l;
            clearTimeout(l),
              (l = setTimeout(function () {
                (l = null), s || o.apply(e, t);
              }, i)),
              n && o.apply(e, t);
          };
        }
        function l(e) {
          return Object.getOwnPropertyNames(e).length <= 0;
        }
        function d(e, n) {
          var o =
              /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
            i = { d: [], w: [] };
          return (
            (e || "").split(" ").forEach(function (e) {
              var t = e + (n ? "." + n : "");
              t.startsWith(".")
                ? (i.d.push(t), i.w.push(t))
                : i[o.test(e) ? "w" : "d"].push(t);
            }),
            (i.d = i.d.join(" ")),
            (i.w = i.w.join(" ")),
            i
          );
        }
        function u(e, t) {
          if ("string" != typeof e)
            throw new Error("Event name must be a string");
          var n = e.match(/([a-z]+\.([a-z]+))/i),
            o = { target: t };
          return (
            null !== n && ((e = n[1]), (o.namespace = n[2])),
            new window.CustomEvent(e, { detail: o })
          );
        }
        function c(e, t) {
          return !!(e && t && 2 & e.compareDocumentPosition(t));
        }
        function f(e) {
          return "string" == typeof e;
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.escapeHTML = a),
          (r.default.Utils.debounce = s),
          (r.default.Utils.isObjectEmpty = l),
          (r.default.Utils.splitEvents = d),
          (r.default.Utils.createEvent = u),
          (r.default.Utils.isNodeAfter = c),
          (r.default.Utils.isString = f);
      },
      { 7: 7 },
    ],
    28: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.typeChecks = void 0),
          (n.absolutizeUrl = l),
          (n.formatType = d),
          (n.getMimeFromType = u),
          (n.getTypeFromFile = c),
          (n.getExtension = f),
          (n.normalizeExtension = p);
        var o,
          i = e(7),
          r = (o = i) && o.__esModule ? o : { default: o },
          a = e(27);
        var s = (n.typeChecks = []);
        function l(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          var t = document.createElement("div");
          return (
            (t.innerHTML = '<a href="' + (0, a.escapeHTML)(e) + '">x</a>'),
            t.firstChild.href
          );
        }
        function d(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
          return e && !t ? c(e) : t;
        }
        function u(e) {
          if ("string" != typeof e)
            throw new Error("`type` argument must be a string");
          return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e;
        }
        function c(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          for (var t = 0, n = s.length; t < n; t++) {
            var o = s[t](e);
            if (o) return o;
          }
          var i = p(f(e)),
            r = "video/mp4";
          return (
            i &&
              (~[
                "mp4",
                "m4v",
                "ogg",
                "ogv",
                "webm",
                "flv",
                "mpeg",
                "mov",
              ].indexOf(i)
                ? (r = "video/" + i)
                : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) &&
                  (r = "audio/" + i)),
            r
          );
        }
        function f(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          var t = e.split("?")[0].split("\\").pop().split("/").pop();
          return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : "";
        }
        function p(e) {
          if ("string" != typeof e)
            throw new Error("`extension` argument must be a string");
          switch (e) {
            case "mp4":
            case "m4v":
              return "mp4";
            case "webm":
            case "webma":
            case "webmv":
              return "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return "ogg";
            default:
              return e;
          }
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.typeChecks = s),
          (r.default.Utils.absolutizeUrl = l),
          (r.default.Utils.formatType = d),
          (r.default.Utils.getMimeFromType = u),
          (r.default.Utils.getTypeFromFile = c),
          (r.default.Utils.getExtension = f),
          (r.default.Utils.normalizeExtension = p);
      },
      { 27: 27, 7: 7 },
    ],
    29: [
      function (e, t, n) {
        "use strict";
        var o,
          i = a(e(2)),
          r = a(e(4));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        if (
          ([
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("remove") ||
              Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  this.parentNode.removeChild(this);
                },
              });
          }),
          (function () {
            if ("function" == typeof window.CustomEvent) return;
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = i.default.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            (e.prototype = window.Event.prototype), (window.CustomEvent = e);
          })(),
          "function" != typeof Object.assign &&
            (Object.assign = function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
                var i = arguments[n];
                if (null !== i)
                  for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
              }
              return t;
            }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (e, t) {
              return (t = t || 0), this.substr(t, e.length) === e;
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (e) {
                for (
                  var t = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(e),
                    n = t.length - 1;
                  0 <= --n && t.item(n) !== this;

                );
                return -1 < n;
              }),
          window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function (e) {
              var t = (this.document || this.ownerDocument).querySelectorAll(e),
                n = void 0,
                o = this;
              do {
                for (n = t.length; 0 <= --n && t.item(n) !== o; );
              } while (n < 0 && (o = o.parentElement));
              return o;
            }),
          (function () {
            for (
              var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
              t < e.length && !window.requestAnimationFrame;
              ++t
            )
              (window.requestAnimationFrame =
                window[e[t] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[e[t] + "CancelAnimationFrame"] ||
                  window[e[t] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e) {
                var t = new Date().getTime(),
                  n = Math.max(0, 16 - (t - i)),
                  o = window.setTimeout(function () {
                    e(t + n);
                  }, n);
                return (i = t + n), o;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          /firefox/i.test(navigator.userAgent))
        ) {
          var s = window.getComputedStyle;
          window.getComputedStyle = function (e, t) {
            var n = s(e, t);
            return null === n ? { getPropertyValue: function () {} } : n;
          };
        }
        window.Promise || (window.Promise = r.default),
          (o = window.Node || window.Element) &&
            o.prototype &&
            null === o.prototype.children &&
            Object.defineProperty(o.prototype, "children", {
              get: function () {
                for (
                  var e = 0, t = void 0, n = this.childNodes, o = [];
                  (t = n[e++]);

                )
                  1 === t.nodeType && o.push(t);
                return o;
              },
            });
      },
      { 2: 2, 4: 4 },
    ],
    30: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isDropFrame = C),
          (n.secondsToTimeCode = a),
          (n.timeCodeToSeconds = s),
          (n.calculateTimeFormat = l),
          (n.convertSMPTEtoSeconds = d);
        var o,
          i = e(7),
          r = (o = i) && o.__esModule ? o : { default: o };
        function C() {
          return !(
            (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 25) %
              1 ==
            0
          );
        }
        function a(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            o =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : 25,
            i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            r =
              5 < arguments.length && void 0 !== arguments[5]
                ? arguments[5]
                : "hh:mm:ss";
          e = !e || "number" != typeof e || e < 0 ? 0 : e;
          var a = Math.round(0.066666 * o),
            s = Math.round(o),
            l = 24 * Math.round(3600 * o),
            d = Math.round(600 * o),
            u = C(o) ? ";" : ":",
            c = void 0,
            f = void 0,
            p = void 0,
            m = void 0,
            h = Math.round(e * o);
          if (C(o)) {
            h < 0 && (h = l + h);
            var v = (h %= l) % d;
            (h += 9 * a * Math.floor(h / d)),
              a < v && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
            var g = Math.floor(h / s);
            (c = Math.floor(Math.floor(g / 60) / 60)),
              (f = Math.floor(g / 60) % 60),
              (p = n ? g % 60 : Math.floor((h / s) % 60).toFixed(i));
          } else
            (c = Math.floor(e / 3600) % 24),
              (f = Math.floor(e / 60) % 60),
              (p = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(i));
          (c = c <= 0 ? 0 : c),
            (p = 60 === (p = p <= 0 ? 0 : p) ? 0 : p),
            (f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f);
          for (var y = r.split(":"), E = {}, b = 0, S = y.length; b < S; ++b) {
            for (var x = "", w = 0, P = y[b].length; w < P; w++)
              x.indexOf(y[b][w]) < 0 && (x += y[b][w]);
            ~["f", "s", "m", "h"].indexOf(x) && (E[x] = y[b].length);
          }
          var T = t || 0 < c ? (c < 10 && 1 < E.h ? "0" + c : c) + ":" : "";
          return (
            (T += (f < 10 && 1 < E.m ? "0" + f : f) + ":"),
            (T += "" + (p < 10 && 1 < E.s ? "0" + p : p)),
            n &&
              (T +=
                (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 && E.f
                  ? u + "0" + m
                  : "" + u + m),
            T
          );
        }
        function s(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
          if ("string" != typeof e)
            throw new TypeError("Time must be a string");
          if (
            (0 < e.indexOf(";") && (e = e.replace(";", ":")),
            !/\d{2}(\:\d{2}){0,3}/i.test(e))
          )
            throw new TypeError("Time code must have the format `00:00:00`");
          var n = e.split(":"),
            o = void 0,
            i = 0,
            r = 0,
            a = 0,
            s = 0,
            l = 0,
            d = Math.round(0.066666 * t),
            u = Math.round(t),
            c = 3600 * u,
            f = 60 * u;
          switch (n.length) {
            default:
            case 1:
              a = parseInt(n[0], 10);
              break;
            case 2:
              (r = parseInt(n[0], 10)), (a = parseInt(n[1], 10));
              break;
            case 3:
              (i = parseInt(n[0], 10)),
                (r = parseInt(n[1], 10)),
                (a = parseInt(n[2], 10));
              break;
            case 4:
              (i = parseInt(n[0], 10)),
                (r = parseInt(n[1], 10)),
                (a = parseInt(n[2], 10)),
                (s = parseInt(n[3], 10));
          }
          return (
            (o = C(t)
              ? c * i +
                f * r +
                u * a +
                s -
                d * ((l = 60 * i + r) - Math.floor(l / 10))
              : (c * i + f * r + t * a + s) / t),
            parseFloat(o.toFixed(3))
          );
        }
        function l(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
          e = !e || "number" != typeof e || e < 0 ? 0 : e;
          for (
            var o = Math.floor(e / 3600) % 24,
              i = Math.floor(e / 60) % 60,
              r = Math.floor(e % 60),
              a = [
                [Math.floor(((e % 1) * n).toFixed(3)), "f"],
                [r, "s"],
                [i, "m"],
                [o, "h"],
              ],
              s = t.timeFormat,
              l = s[1] === s[0],
              d = l ? 2 : 1,
              u = s.length < d ? s[d] : ":",
              c = s[0],
              f = !1,
              p = 0,
              m = a.length;
            p < m;
            p++
          )
            if (~s.indexOf(a[p][1])) f = !0;
            else if (f) {
              for (var h = !1, v = p; v < m; v++)
                if (0 < a[v][0]) {
                  h = !0;
                  break;
                }
              if (!h) break;
              l || (s = c + s),
                (s = a[p][1] + u + s),
                l && (s = a[p][1] + s),
                (c = a[p][1]);
            }
          t.timeFormat = s;
        }
        function d(e) {
          if ("string" != typeof e)
            throw new TypeError("Argument must be a string value");
          for (
            var t = ~(e = e.replace(",", ".")).indexOf(".")
                ? e.split(".")[1].length
                : 0,
              n = 0,
              o = 1,
              i = 0,
              r = (e = e.split(":").reverse()).length;
            i < r;
            i++
          )
            (o = 1), 0 < i && (o = Math.pow(60, i)), (n += Number(e[i]) * o);
          return Number(n.toFixed(t));
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.secondsToTimeCode = a),
          (r.default.Utils.timeCodeToSeconds = s),
          (r.default.Utils.calculateTimeFormat = l),
          (r.default.Utils.convertSMPTEtoSeconds = d);
      },
      { 7: 7 },
    ],
  },
  {},
  [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]
);
!(function (e, a) {
  void 0 === mejs.plugins &&
    ((mejs.plugins = {}),
    (mejs.plugins.silverlight = []),
    mejs.plugins.silverlight.push({ types: [] })),
    (mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
      getTypeFromFile: mejs.Utils.getTypeFromFile,
    }),
    void 0 === mejs.MediaFeatures && (mejs.MediaFeatures = mejs.Features),
    void 0 === mejs.Utility && (mejs.Utility = mejs.Utils);
  var t = MediaElementPlayer.prototype.init;
  MediaElementPlayer.prototype.init = function () {
    (this.options.classPrefix = "mejs-"),
      (this.$media = this.$node = a(this.node)),
      t.call(this);
  };
  var i = MediaElementPlayer.prototype._meReady;
  (MediaElementPlayer.prototype._meReady = function () {
    (this.container = a(this.container)),
      (this.controls = a(this.controls)),
      (this.layers = a(this.layers)),
      i.apply(this, arguments);
  }),
    (MediaElementPlayer.prototype.getElement = function (e) {
      return void 0 !== a && e instanceof a ? e[0] : e;
    }),
    (MediaElementPlayer.prototype.buildfeatures = function (e, t, i, s) {
      for (
        var r = [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
          ],
          l = 0,
          n = this.options.features.length;
        l < n;
        l++
      ) {
        var o = this.options.features[l];
        if (this["build" + o])
          try {
            -1 === r.indexOf(o)
              ? this["build" + o](e, a(t), a(i), s)
              : this["build" + o](e, t, i, s);
          } catch (e) {
            console.error("error building " + o, e);
          }
      }
    });
})(window, jQuery);
var _wpmejsSettings = {
  pluginPath: "/wp-includes/js/mediaelement/",
  classPrefix: "mejs-",
  stretching: "responsive",
};
!(function (e, n) {
  (e.wp = e.wp || {}),
    (e.wp.mediaelement = new (function () {
      var e = {};
      return {
        initialize: function () {
          "undefined" != typeof _wpmejsSettings &&
            (e = n.extend(!0, {}, _wpmejsSettings)),
            (e.classPrefix = "mejs-"),
            (e.success =
              e.success ||
              function (e) {
                var n, t;
                e.rendererName &&
                  -1 !== e.rendererName.indexOf("flash") &&
                  ((n =
                    e.attributes.autoplay && "false" !== e.attributes.autoplay),
                  (t = e.attributes.loop && "false" !== e.attributes.loop),
                  n &&
                    e.addEventListener(
                      "canplay",
                      function () {
                        e.play();
                      },
                      !1
                    ),
                  t &&
                    e.addEventListener(
                      "ended",
                      function () {
                        e.play();
                      },
                      !1
                    ));
              }),
            (e.customError = function (e, n) {
              if (
                -1 !== e.rendererName.indexOf("flash") ||
                -1 !== e.rendererName.indexOf("flv")
              )
                return (
                  '<a href="' +
                  n.src +
                  '">' +
                  mejsL10n.strings["mejs.download-file"] +
                  "</a>"
                );
            }),
            n(".wp-audio-shortcode, .wp-video-shortcode")
              .not(".mejs-container")
              .filter(function () {
                return !n(this).parent().hasClass("mejs-mediaelement");
              })
              .mediaelementplayer(e);
        },
      };
    })()),
    n(e.wp.mediaelement.initialize);
})(window, jQuery); /*! This file is auto-generated */
!(function (a) {
  a.fn.hoverIntent = function (e, t, n) {
    var o,
      r,
      v,
      i,
      u = { interval: 100, sensitivity: 6, timeout: 0 };
    u =
      "object" == typeof e
        ? a.extend(u, e)
        : a.isFunction(t)
        ? a.extend(u, { over: e, out: t, selector: n })
        : a.extend(u, { over: e, out: e, selector: t });
    function s(e) {
      (o = e.pageX), (r = e.pageY);
    }
    function h(e) {
      var t = a.extend({}, e),
        n = this;
      n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
        "mouseenter" === e.type
          ? ((v = t.pageX),
            (i = t.pageY),
            a(n).on("mousemove.hoverIntent", s),
            n.hoverIntent_s ||
              (n.hoverIntent_t = setTimeout(function () {
                I(t, n);
              }, u.interval)))
          : (a(n).off("mousemove.hoverIntent", s),
            n.hoverIntent_s &&
              (n.hoverIntent_t = setTimeout(function () {
                !(function (e, t) {
                  (t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
                    (t.hoverIntent_s = !1),
                    u.out.apply(t, [e]);
                })(t, n);
              }, u.timeout)));
    }
    var I = function (e, t) {
      if (
        ((t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
        Math.sqrt((v - o) * (v - o) + (i - r) * (i - r)) < u.sensitivity)
      )
        return (
          a(t).off("mousemove.hoverIntent", s),
          (t.hoverIntent_s = !0),
          u.over.apply(t, [e])
        );
      (v = o),
        (i = r),
        (t.hoverIntent_t = setTimeout(function () {
          I(e, t);
        }, u.interval));
    };
    return this.on(
      { "mouseenter.hoverIntent": h, "mouseleave.hoverIntent": h },
      u.selector
    );
  };
})(jQuery); /*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
var jnewsoption = {
  login_reload:
    "https://egamesconsult.com/explained-changing-your-name-in-league-of-legends",
  popup_script: "magnific",
  single_gallery: "",
  ismobile: "",
  isie: "",
  sidefeed_ajax: "",
  language: "en_US",
  module_prefix: "jnews_module_ajax_",
  live_search: "1",
  postid: "9369",
  isblog: "1",
  admin_bar: "0",
  follow_video: "",
  follow_position: "top_right",
  rtl: "0",
  gif: "",
  lang: {
    invalid_recaptcha: "Invalid Recaptcha!",
    empty_username: "Please enter your username!",
    empty_email: "Please enter your email!",
    empty_password: "Please enter your password!",
  },
  recaptcha: "0",
  site_slug: "/",
  site_domain: "egamesconsult.com",
  zoom_button: "1",
};
!(function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var o = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.d = function (t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 1));
})([
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e, i) {
    i(2),
      i(3),
      i(4),
      i(6),
      i(7),
      i(8),
      i(9),
      i(10),
      i(11),
      i(12),
      i(13),
      i(14),
      i(15),
      i(16),
      i(17),
      i(18),
      i(19),
      i(20),
      i(21),
      i(22),
      i(23),
      i(24),
      i(25),
      i(26),
      i(27),
      i(28),
      i(29),
      i(30),
      i(31);
  },
  function (t, e, i) {
    var n,
      o,
      s,
      a,
      r,
      l,
      c,
      d,
      h,
      u,
      p,
      n,
      f,
      n,
      g,
      m,
      n,
      _,
      n,
      g,
      v,
      n,
      g,
      y,
      n,
      g,
      w,
      n,
      g,
      b,
      n,
      g,
      x,
      n,
      g,
      j,
      n,
      o;
    !(function (s, a) {
      (n = [i(0)]),
        void 0 !==
          (o = function (t) {
            return a(s, t);
          }.apply(e, n)) && (t.exports = o);
    })(window, function (t, e) {
      "use strict";
      function i(i, s, r) {
        function l(t, e, n) {
          var o,
            s = "$()." + i + '("' + e + '")';
          return (
            t.each(function (t, l) {
              var c = r.data(l, i);
              if (!c)
                return void a(
                  i + " not initialized. Cannot call methods, i.e. " + s
                );
              var d = c[e];
              if (!d || "_" == e.charAt(0))
                return void a(s + " is not a valid method");
              var h = d.apply(c, n);
              o = void 0 === o ? h : o;
            }),
            void 0 !== o ? o : t
          );
        }
        function c(t, e) {
          t.each(function (t, n) {
            var o = r.data(n, i);
            o ? (o.option(e), o._init()) : ((o = new s(n, e)), r.data(n, i, o));
          });
        }
        (r = r || e || t.jQuery) &&
          (s.prototype.option ||
            (s.prototype.option = function (t) {
              r.isPlainObject(t) &&
                (this.options = r.extend(!0, this.options, t));
            }),
          (r.fn[i] = function (t) {
            if ("string" == typeof t) {
              return l(this, t, o.call(arguments, 1));
            }
            return c(this, t), this;
          }),
          n(r));
      }
      function n(t) {
        !t || (t && t.bridget) || (t.bridget = i);
      }
      var o = Array.prototype.slice,
        s = t.console,
        a =
          void 0 === s
            ? function () {}
            : function (t) {
                s.error(t);
              };
      return n(e || t.jQuery), i;
    }),
      (function (t, e) {
        (a = e),
          (r = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }),
          (s = "function" == typeof a ? a.call(r.exports, i, r.exports, r) : a),
          (r.loaded = !0),
          void 0 === s && (s = r.exports);
      })("undefined" != typeof window && window, function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.on = function (t, e) {
            if (t && e) {
              var i = (this._events = this._events || {}),
                n = (i[t] = i[t] || []);
              return -1 == n.indexOf(e) && n.push(e), this;
            }
          }),
          (e.once = function (t, e) {
            if (t && e) {
              this.on(t, e);
              var i = (this._onceEvents = this._onceEvents || {});
              return ((i[t] = i[t] || {})[e] = !0), this;
            }
          }),
          (e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              var n = i.indexOf(e);
              return -1 != n && i.splice(n, 1), this;
            }
          }),
          (e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
              (i = i.slice(0)), (e = e || []);
              for (
                var n = this._onceEvents && this._onceEvents[t], o = 0;
                o < i.length;
                o++
              ) {
                var s = i[o];
                n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
              }
              return this;
            }
          }),
          (e.allOff = function () {
            delete this._events, delete this._onceEvents;
          }),
          t
        );
      }),
      (function (t, e) {
        (c = e),
          (d = { id: "get-size/get-size", exports: {}, loaded: !1 }),
          (l = "function" == typeof c ? c.call(d.exports, i, d.exports, d) : c),
          (d.loaded = !0),
          void 0 === l && (l = d.exports);
      })(window, function () {
        "use strict";
        function t(t) {
          var e = parseFloat(t);
          return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        function e() {}
        function i() {
          for (
            var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0,
              },
              e = 0;
            e < c;
            e++
          ) {
            t[l[e]] = 0;
          }
          return t;
        }
        function n(t) {
          var e = getComputedStyle(t);
          return (
            e ||
              r(
                "Style returned " +
                  e +
                  ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
              ),
            e
          );
        }
        function o() {
          if (!d) {
            d = !0;
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style.boxSizing = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            (a = 200 == Math.round(t(o.width))),
              (s.isBoxSizeOuter = a),
              i.removeChild(e);
          }
        }
        function s(e) {
          if (
            (o(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType)
          ) {
            var s = n(e);
            if ("none" == s.display) return i();
            var r = {};
            (r.width = e.offsetWidth), (r.height = e.offsetHeight);
            for (
              var d = (r.isBorderBox = "border-box" == s.boxSizing), h = 0;
              h < c;
              h++
            ) {
              var u = l[h],
                p = s[u],
                f = parseFloat(p);
              r[u] = isNaN(f) ? 0 : f;
            }
            var g = r.paddingLeft + r.paddingRight,
              m = r.paddingTop + r.paddingBottom,
              _ = r.marginLeft + r.marginRight,
              v = r.marginTop + r.marginBottom,
              y = r.borderLeftWidth + r.borderRightWidth,
              w = r.borderTopWidth + r.borderBottomWidth,
              b = d && a,
              x = t(s.width);
            !1 !== x && (r.width = x + (b ? 0 : g + y));
            var j = t(s.height);
            return (
              !1 !== j && (r.height = j + (b ? 0 : m + w)),
              (r.innerWidth = r.width - (g + y)),
              (r.innerHeight = r.height - (m + w)),
              (r.outerWidth = r.width + _),
              (r.outerHeight = r.height + v),
              r
            );
          }
        }
        var a,
          r =
            "undefined" == typeof console
              ? e
              : function (t) {
                  console.error(t);
                },
          l = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth",
          ],
          c = l.length,
          d = !1;
        return s;
      }),
      (function (t, e) {
        "use strict";
        (u = e),
          (p = {
            id: "desandro-matches-selector/matches-selector",
            exports: {},
            loaded: !1,
          }),
          (h = "function" == typeof u ? u.call(p.exports, i, p.exports, p) : u),
          (p.loaded = !0),
          void 0 === h && (h = p.exports);
      })(window, function () {
        "use strict";
        var t = (function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
              o = n + "MatchesSelector";
            if (t[o]) return o;
          }
        })();
        return function (e, i) {
          return e[t](i);
        };
      }),
      (function (t, i) {
        (n = [h]),
          (f = function (e) {
            return i(t, e);
          }.apply(e, n));
      })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        }),
          (i.modulo = function (t, e) {
            return ((t % e) + e) % e;
          });
        var n = Array.prototype.slice;
        (i.makeArray = function (t) {
          return Array.isArray(t)
            ? t
            : null === t || void 0 === t
            ? []
            : "object" == typeof t && "number" == typeof t.length
            ? n.call(t)
            : [t];
        }),
          (i.removeFrom = function (t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1);
          }),
          (i.getParent = function (t, i) {
            for (; t.parentNode && t != document.body; )
              if (((t = t.parentNode), e(t, i))) return t;
          }),
          (i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t;
          }),
          (i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var o = [];
            return (
              t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                  if (!n) return void o.push(t);
                  e(t, n) && o.push(t);
                  for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                    o.push(i[s]);
                }
              }),
              o
            );
          }),
          (i.debounceMethod = function (t, e, i) {
            i = i || 100;
            var n = t.prototype[e],
              o = e + "Timeout";
            t.prototype[e] = function () {
              var t = this[o];
              clearTimeout(t);
              var e = arguments,
                s = this;
              this[o] = setTimeout(function () {
                n.apply(s, e), delete s[o];
              }, i);
            };
          }),
          (i.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e
              ? setTimeout(t)
              : document.addEventListener("DOMContentLoaded", t);
          }),
          (i.toDashed = function (t) {
            return t
              .replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i;
              })
              .toLowerCase();
          });
        var o = t.console;
        return (
          (i.htmlInit = function (e, n) {
            i.docReady(function () {
              var s = i.toDashed(n),
                a = "data-" + s,
                r = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + s),
                c = i.makeArray(r).concat(i.makeArray(l)),
                d = a + "-options",
                h = t.jQuery;
              c.forEach(function (t) {
                var i,
                  s = t.getAttribute(a) || t.getAttribute(d);
                try {
                  i = s && JSON.parse(s);
                } catch (e) {
                  return void (
                    o &&
                    o.error(
                      "Error parsing " + a + " on " + t.className + ": " + e
                    )
                  );
                }
                var r = new e(t, i);
                h && h.data(t, n, r);
              });
            });
          }),
          i
        );
      }),
      (function (t, i) {
        (n = [s, l]), (g = i), (m = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t, e) {
        "use strict";
        function i(t) {
          for (var e in t) return !1;
          return null, !0;
        }
        function n(t, e) {
          t &&
            ((this.element = t),
            (this.layout = e),
            (this.position = { x: 0, y: 0 }),
            this._create());
        }
        var o = document.documentElement.style,
          s =
            "string" == typeof o.transition ? "transition" : "WebkitTransition",
          a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
          r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend",
          }[s],
          l = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay",
          },
          c = (n.prototype = Object.create(t.prototype));
        (c.constructor = n),
          (c._create = function () {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
              this.css({ position: "absolute" });
          }),
          (c.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
          }),
          (c.getSize = function () {
            this.size = e(this.element);
          }),
          (c.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
              e[l[i] || i] = t[i];
            }
          }),
          (c.getPosition = function () {
            var t = getComputedStyle(this.element),
              e = this.layout._getOption("originLeft"),
              i = this.layout._getOption("originTop"),
              n = t[e ? "left" : "right"],
              o = t[i ? "top" : "bottom"],
              s = parseFloat(n),
              a = parseFloat(o),
              r = this.layout.size;
            -1 != n.indexOf("%") && (s = (s / 100) * r.width),
              -1 != o.indexOf("%") && (a = (a / 100) * r.height),
              (s = isNaN(s) ? 0 : s),
              (a = isNaN(a) ? 0 : a),
              (s -= e ? r.paddingLeft : r.paddingRight),
              (a -= i ? r.paddingTop : r.paddingBottom),
              (this.position.x = s),
              (this.position.y = a);
          }),
          (c.layoutPosition = function () {
            var t = this.layout.size,
              e = {},
              i = this.layout._getOption("originLeft"),
              n = this.layout._getOption("originTop"),
              o = i ? "paddingLeft" : "paddingRight",
              s = i ? "left" : "right",
              a = i ? "right" : "left",
              r = this.position.x + t[o];
            (e[s] = this.getXValue(r)), (e[a] = "");
            var l = n ? "paddingTop" : "paddingBottom",
              c = n ? "top" : "bottom",
              d = n ? "bottom" : "top",
              h = this.position.y + t[l];
            (e[c] = this.getYValue(h)),
              (e[d] = ""),
              this.css(e),
              this.emitEvent("layout", [this]);
          }),
          (c.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e
              ? (t / this.layout.size.width) * 100 + "%"
              : t + "px";
          }),
          (c.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e
              ? (t / this.layout.size.height) * 100 + "%"
              : t + "px";
          }),
          (c._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
              n = this.position.y,
              o = t == this.position.x && e == this.position.y;
            if ((this.setPosition(t, e), o && !this.isTransitioning))
              return void this.layoutPosition();
            var s = t - i,
              a = e - n,
              r = {};
            (r.transform = this.getTranslate(s, a)),
              this.transition({
                to: r,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              });
          }),
          (c.getTranslate = function (t, e) {
            var i = this.layout._getOption("originLeft"),
              n = this.layout._getOption("originTop");
            return (
              (t = i ? t : -t),
              (e = n ? e : -e),
              "translate3d(" + t + "px, " + e + "px, 0)"
            );
          }),
          (c.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition();
          }),
          (c.moveTo = c._transitionTo),
          (c.setPosition = function (t, e) {
            (this.position.x = parseFloat(t)),
              (this.position.y = parseFloat(e));
          }),
          (c._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
          }),
          (c.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
              (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
              this.css(t.from);
              this.element.offsetHeight;
              null;
            }
            this.enableTransition(t.to),
              this.css(t.to),
              (this.isTransitioning = !0);
          });
        var d =
          "opacity," +
          (function (t) {
            return t.replace(/([A-Z])/g, function (t) {
              return "-" + t.toLowerCase();
            });
          })(a);
        (c.enableTransition = function () {
          if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            (t = "number" == typeof t ? t + "ms" : t),
              this.css({
                transitionProperty: d,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0,
              }),
              this.element.addEventListener(r, this, !1);
          }
        }),
          (c.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t);
          }),
          (c.onotransitionend = function (t) {
            this.ontransitionend(t);
          });
        var h = { "-webkit-transform": "transform" };
        (c.ontransitionend = function (t) {
          if (t.target === this.element) {
            var e = this._transn,
              n = h[t.propertyName] || t.propertyName;
            if (
              (delete e.ingProperties[n],
              i(e.ingProperties) && this.disableTransition(),
              n in e.clean &&
                ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
              n in e.onEnd)
            ) {
              e.onEnd[n].call(this), delete e.onEnd[n];
            }
            this.emitEvent("transitionEnd", [this]);
          }
        }),
          (c.disableTransition = function () {
            this.removeTransitionStyles(),
              this.element.removeEventListener(r, this, !1),
              (this.isTransitioning = !1);
          }),
          (c._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e);
          });
        var u = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: "",
        };
        return (
          (c.removeTransitionStyles = function () {
            this.css(u);
          }),
          (c.stagger = function (t) {
            (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
          }),
          (c.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.css({ display: "" }),
              this.emitEvent("remove", [this]);
          }),
          (c.remove = function () {
            return s && parseFloat(this.layout.options.transitionDuration)
              ? (this.once("transitionEnd", function () {
                  this.removeElem();
                }),
                void this.hide())
              : void this.removeElem();
          }),
          (c.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
              e = {};
            (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
              this.onRevealTransitionEnd),
              this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e,
              });
          }),
          (c.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal");
          }),
          (c.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i;
          }),
          (c.hide = function () {
            (this.isHidden = !0), this.css({ display: "" });
            var t = this.layout.options,
              e = {};
            (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
              this.onHideTransitionEnd),
              this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e,
              });
          }),
          (c.onHideTransitionEnd = function () {
            this.isHidden &&
              (this.css({ display: "none" }), this.emitEvent("hide"));
          }),
          (c.destroy = function () {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
            });
          }),
          n
        );
      }),
      (function (t, i) {
        "use strict";
        (n = [s, l, f, m]),
          (_ = function (e, n, o, s) {
            return i(t, e, n, o, s);
          }.apply(e, n));
      })(window, function (t, e, i, n, o) {
        "use strict";
        function s(t, e) {
          var i = n.getQueryElement(t);
          if (!i)
            return void (
              l &&
              l.error(
                "Bad element for " +
                  this.constructor.namespace +
                  ": " +
                  (i || t)
              )
            );
          (this.element = i),
            c && (this.$element = c(this.element)),
            (this.options = n.extend({}, this.constructor.defaults)),
            this.option(e);
          var o = ++h;
          (this.element.outlayerGUID = o),
            (u[o] = this),
            this._create(),
            this._getOption("initLayout") && this.layout();
        }
        function a(t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            e
          );
        }
        function r(t) {
          if ("number" == typeof t) return t;
          var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
          return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0;
        }
        var l = t.console,
          c = t.jQuery,
          d = function () {},
          h = 0,
          u = {};
        (s.namespace = "outlayer"),
          (s.Item = o),
          (s.defaults = {
            containerStyle: { position: "relative" },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
          });
        var p = s.prototype;
        n.extend(p, e.prototype),
          (p.option = function (t) {
            n.extend(this.options, t);
          }),
          (p._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e]
              ? this.options[e]
              : this.options[t];
          }),
          (s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer",
          }),
          (p._create = function () {
            this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              n.extend(this.element.style, this.options.containerStyle),
              this._getOption("resize") && this.bindResize();
          }),
          (p.reloadItems = function () {
            this.items = this._itemize(this.element.children);
          }),
          (p._itemize = function (t) {
            for (
              var e = this._filterFindItemElements(t),
                i = this.constructor.Item,
                n = [],
                o = 0;
              o < e.length;
              o++
            ) {
              var s = e[o],
                a = new i(s, this);
              n.push(a);
            }
            return n;
          }),
          (p._filterFindItemElements = function (t) {
            return n.filterFindElements(t, this.options.itemSelector);
          }),
          (p.getItemElements = function () {
            return this.items.map(function (t) {
              return t.element;
            });
          }),
          (p.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
              e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), (this._isLayoutInited = !0);
          }),
          (p._init = p.layout),
          (p._resetLayout = function () {
            this.getSize();
          }),
          (p.getSize = function () {
            this.size = i(this.element);
          }),
          (p._getMeasurement = function (t, e) {
            var n,
              o = this.options[t];
            o
              ? ("string" == typeof o
                  ? (n = this.element.querySelector(o))
                  : o instanceof HTMLElement && (n = o),
                (this[t] = n ? i(n)[e] : o))
              : (this[t] = 0);
          }),
          (p.layoutItems = function (t, e) {
            (t = this._getItemsForLayout(t)),
              this._layoutItems(t, e),
              this._postLayout();
          }),
          (p._getItemsForLayout = function (t) {
            return t.filter(function (t) {
              return !t.isIgnored;
            });
          }),
          (p._layoutItems = function (t, e) {
            if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
              var i = [];
              t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
              }, this),
                this._processLayoutQueue(i);
            }
          }),
          (p._getItemLayoutPosition = function () {
            return { x: 0, y: 0 };
          }),
          (p._processLayoutQueue = function (t) {
            this.updateStagger(),
              t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e);
              }, this);
          }),
          (p.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t
              ? void (this.stagger = 0)
              : ((this.stagger = r(t)), this.stagger);
          }),
          (p._positionItem = function (t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
          }),
          (p._postLayout = function () {
            this.resizeContainer();
          }),
          (p.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
              var t = this._getContainerSize();
              t &&
                (this._setContainerMeasure(t.width, !0),
                this._setContainerMeasure(t.height, !1));
            }
          }),
          (p._getContainerSize = d),
          (p._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
              var i = this.size;
              i.isBorderBox &&
                (t += e
                  ? i.paddingLeft +
                    i.paddingRight +
                    i.borderLeftWidth +
                    i.borderRightWidth
                  : i.paddingBottom +
                    i.paddingTop +
                    i.borderTopWidth +
                    i.borderBottomWidth),
                (t = Math.max(t, 0)),
                (this.element.style[e ? "width" : "height"] = t + "px");
            }
          }),
          (p._emitCompleteOnItems = function (t, e) {
            function i() {
              o.dispatchEvent(t + "Complete", null, [e]);
            }
            function n() {
              ++a == s && i();
            }
            var o = this,
              s = e.length;
            if (!e || !s) return void i();
            var a = 0;
            e.forEach(function (e) {
              e.once(t, n);
            });
          }),
          (p.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if ((this.emitEvent(t, n), c))
              if (((this.$element = this.$element || c(this.element)), e)) {
                var o = c.Event(e);
                (o.type = t), this.$element.trigger(o, i);
              } else this.$element.trigger(t, i);
          }),
          (p.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0);
          }),
          (p.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored;
          }),
          (p.stamp = function (t) {
            (t = this._find(t)) &&
              ((this.stamps = this.stamps.concat(t)),
              t.forEach(this.ignore, this));
          }),
          (p.unstamp = function (t) {
            (t = this._find(t)) &&
              t.forEach(function (t) {
                n.removeFrom(this.stamps, t), this.unignore(t);
              }, this);
          }),
          (p._find = function (t) {
            if (t)
              return (
                "string" == typeof t && (t = this.element.querySelectorAll(t)),
                (t = n.makeArray(t))
              );
          }),
          (p._manageStamps = function () {
            this.stamps &&
              this.stamps.length &&
              (this._getBoundingRect(),
              this.stamps.forEach(this._manageStamp, this));
          }),
          (p._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
              e = this.size;
            this._boundingRect = {
              left: t.left + e.paddingLeft + e.borderLeftWidth,
              top: t.top + e.paddingTop + e.borderTopWidth,
              right: t.right - (e.paddingRight + e.borderRightWidth),
              bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
            };
          }),
          (p._manageStamp = d),
          (p._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
              n = this._boundingRect,
              o = i(t);
            return {
              left: e.left - n.left - o.marginLeft,
              top: e.top - n.top - o.marginTop,
              right: n.right - e.right - o.marginRight,
              bottom: n.bottom - e.bottom - o.marginBottom,
            };
          }),
          (p.handleEvent = n.handleEvent),
          (p.bindResize = function () {
            t.addEventListener("resize", this), (this.isResizeBound = !0);
          }),
          (p.unbindResize = function () {
            t.removeEventListener("resize", this), (this.isResizeBound = !1);
          }),
          (p.onresize = function () {
            this.resize();
          }),
          n.debounceMethod(s, "onresize", 100),
          (p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (p.needsResizeLayout = function () {
            var t = i(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth;
          }),
          (p.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e;
          }),
          (p.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e));
          }),
          (p.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
              var i = this.items.slice(0);
              (this.items = e.concat(i)),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i);
            }
          }),
          (p.reveal = function (t) {
            if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
              var e = this.updateStagger();
              t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
              });
            }
          }),
          (p.hide = function (t) {
            if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
              var e = this.updateStagger();
              t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
              });
            }
          }),
          (p.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e);
          }),
          (p.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e);
          }),
          (p.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
              var i = this.items[e];
              if (i.element == t) return i;
            }
          }),
          (p.getItems = function (t) {
            t = n.makeArray(t);
            var e = [];
            return (
              t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i);
              }, this),
              e
            );
          }),
          (p.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
              e &&
                e.length &&
                e.forEach(function (t) {
                  t.remove(), n.removeFrom(this.items, t);
                }, this);
          }),
          (p.destroy = function () {
            var t = this.element.style;
            (t.height = ""),
              (t.position = ""),
              (t.width = ""),
              this.items.forEach(function (t) {
                t.destroy();
              }),
              this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e],
              delete this.element.outlayerGUID,
              c && c.removeData(this.element, this.constructor.namespace);
          }),
          (s.data = function (t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && u[e];
          }),
          (s.create = function (t, e) {
            var i = a(s);
            return (
              (i.defaults = n.extend({}, s.defaults)),
              n.extend(i.defaults, e),
              (i.compatOptions = n.extend({}, s.compatOptions)),
              (i.namespace = t),
              (i.data = s.data),
              (i.Item = a(o)),
              n.htmlInit(i, t),
              c && c.bridget && c.bridget(t, i),
              i
            );
          });
        var f = { ms: 1, s: 1e3 };
        return (s.Item = o), s;
      }),
      (function (t, i) {
        (n = [_]), (g = i), (v = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t) {
        "use strict";
        function e() {
          t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
          n = i._create;
        (i._create = function () {
          (this.id = this.layout.itemGUID++),
            n.call(this),
            (this.sortData = {});
        }),
          (i.updateSortData = function () {
            if (!this.isIgnored) {
              (this.sortData.id = this.id),
                (this.sortData["original-order"] = this.id),
                (this.sortData.random = Math.random());
              var t = this.layout.options.getSortData,
                e = this.layout._sorters;
              for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this);
              }
            }
          });
        var o = i.destroy;
        return (
          (i.destroy = function () {
            o.apply(this, arguments), this.css({ display: "" });
          }),
          e
        );
      }),
      (function (t, i) {
        (n = [l, _]), (g = i), (y = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t, e) {
        "use strict";
        function i(t) {
          (this.isotope = t),
            t &&
              ((this.options = t.options[this.namespace]),
              (this.element = t.element),
              (this.items = t.filteredItems),
              (this.size = t.size));
        }
        var n = i.prototype;
        return (
          [
            "_resetLayout",
            "_getItemLayoutPosition",
            "_manageStamp",
            "_getContainerSize",
            "_getElementOffset",
            "needsResizeLayout",
            "_getOption",
          ].forEach(function (t) {
            n[t] = function () {
              return e.prototype[t].apply(this.isotope, arguments);
            };
          }),
          (n.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element);
            return (
              this.isotope.size &&
              e &&
              e.innerHeight != this.isotope.size.innerHeight
            );
          }),
          (n._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments);
          }),
          (n.getColumnWidth = function () {
            this.getSegmentSize("column", "Width");
          }),
          (n.getRowHeight = function () {
            this.getSegmentSize("row", "Height");
          }),
          (n.getSegmentSize = function (t, e) {
            var i = t + e,
              n = "outer" + e;
            if ((this._getMeasurement(i, n), !this[i])) {
              var o = this.getFirstItemSize();
              this[i] = (o && o[n]) || this.isotope.size["inner" + e];
            }
          }),
          (n.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element);
          }),
          (n.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments);
          }),
          (n.getSize = function () {
            this.isotope.getSize(), (this.size = this.isotope.size);
          }),
          (i.modes = {}),
          (i.create = function (t, e) {
            function o() {
              i.apply(this, arguments);
            }
            return (
              (o.prototype = Object.create(n)),
              (o.prototype.constructor = o),
              e && (o.options = e),
              (o.prototype.namespace = t),
              (i.modes[t] = o),
              o
            );
          }),
          i
        );
      }),
      (function (t, i) {
        (n = [_, l]), (g = i), (w = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return (
          (n._resetLayout = function () {
            this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns(),
              (this.colYs = []);
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            (this.maxY = 0), (this.horizontalColIndex = 0);
          }),
          (n.measureColumns = function () {
            if ((this.getContainerWidth(), !this.columnWidth)) {
              var t = this.items[0],
                i = t && t.element;
              this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
            }
            var n = (this.columnWidth += this.gutter),
              o = this.containerWidth + this.gutter,
              s = o / n,
              a = n - (o % n),
              r = a && a < 1 ? "round" : "floor";
            (s = Math[r](s)), (this.cols = Math.max(s, 1));
          }),
          (n.getContainerWidth = function () {
            var t = this._getOption("fitWidth"),
              i = t ? this.element.parentNode : this.element,
              n = e(i);
            this.containerWidth = n && n.innerWidth;
          }),
          (n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
              i = e && e < 1 ? "round" : "ceil",
              n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (
              var o = this.options.horizontalOrder
                  ? "_getHorizontalColPosition"
                  : "_getTopColPosition",
                s = this[o](n, t),
                a = { x: this.columnWidth * s.col, y: s.y },
                r = s.y + t.size.outerHeight,
                l = n + s.col,
                c = s.col;
              c < l;
              c++
            )
              this.colYs[c] = r;
            return a;
          }),
          (n._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
              i = Math.min.apply(Math, e);
            return { col: e.indexOf(i), y: i };
          }),
          (n._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
              e[n] = this._getColGroupY(n, t);
            return e;
          }),
          (n._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i);
          }),
          (n._getHorizontalColPosition = function (t, e) {
            var i = this.horizontalColIndex % this.cols;
            i = t > 1 && i + t > this.cols ? 0 : i;
            var n = e.size.outerWidth && e.size.outerHeight;
            return (
              (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
              { col: i, y: this._getColGroupY(i, t) }
            );
          }),
          (n._manageStamp = function (t) {
            var i = e(t),
              n = this._getElementOffset(t),
              o = this._getOption("originLeft"),
              s = o ? n.left : n.right,
              a = s + i.outerWidth,
              r = Math.floor(s / this.columnWidth);
            r = Math.max(0, r);
            var l = Math.floor(a / this.columnWidth);
            (l -= a % this.columnWidth ? 0 : 1),
              (l = Math.min(this.cols - 1, l));
            for (
              var c = this._getOption("originTop"),
                d = (c ? n.top : n.bottom) + i.outerHeight,
                h = r;
              h <= l;
              h++
            )
              this.colYs[h] = Math.max(d, this.colYs[h]);
          }),
          (n._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = { height: this.maxY };
            return (
              this._getOption("fitWidth") &&
                (t.width = this._getContainerFitWidth()),
              t
            );
          }),
          (n._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
            return (this.cols - t) * this.columnWidth - this.gutter;
          }),
          (n.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth;
          }),
          i
        );
      }),
      (function (t, i) {
        (n = [y, w]), (g = i), (b = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
          n = i.prototype,
          o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
        var a = n.measureColumns;
        n.measureColumns = function () {
          (this.items = this.isotope.filteredItems), a.call(this);
        };
        var r = n._getOption;
        return (
          (n._getOption = function (t) {
            return "fitWidth" == t
              ? void 0 !== this.options.isFitWidth
                ? this.options.isFitWidth
                : this.options.fitWidth
              : r.apply(this.isotope, arguments);
          }),
          i
        );
      }),
      (function (t, i) {
        (n = [y]), (g = i), (x = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
          i = e.prototype;
        return (
          (i._resetLayout = function () {
            (this.x = 0),
              (this.y = 0),
              (this.maxY = 0),
              this._getMeasurement("gutter", "outerWidth");
          }),
          (i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
              i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x &&
              e + this.x > i &&
              ((this.x = 0), (this.y = this.maxY));
            var n = { x: this.x, y: this.y };
            return (
              (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
              (this.x += e),
              n
            );
          }),
          (i._getContainerSize = function () {
            return { height: this.maxY };
          }),
          e
        );
      }),
      (function (t, i) {
        (n = [y]), (g = i), (j = "function" == typeof g ? g.apply(e, n) : g);
      })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
          i = e.prototype;
        return (
          (i._resetLayout = function () {
            this.y = 0;
          }),
          (i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e =
                (this.isotope.size.innerWidth - t.size.outerWidth) *
                this.options.horizontalAlignment,
              i = this.y;
            return (this.y += t.size.outerHeight), { x: e, y: i };
          }),
          (i._getContainerSize = function () {
            return { height: this.y };
          }),
          e
        );
      }),
      (function (i, s) {
        (n = [_, l, h, f, v, y, b, x, j]),
          void 0 !==
            (o = function (t, e, n, o, a, r) {
              return s(i, t, e, n, o, a, r);
            }.apply(e, n)) && (t.exports = o);
      })(window, function (t, e, i, n, o, s, a) {
        function r(t, e) {
          return function (i, n) {
            for (var o = 0; o < t.length; o++) {
              var s = t[o],
                a = i.sortData[s],
                r = n.sortData[s];
              if (a > r || a < r) {
                var l = void 0 !== e[s] ? e[s] : e,
                  c = l ? 1 : -1;
                return (a > r ? 1 : -1) * c;
              }
            }
            return 0;
          };
        }
        var l = t.jQuery,
          c = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return t.replace(/^\s+|\s+$/g, "");
              },
          d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0,
          });
        (d.Item = s), (d.LayoutMode = a);
        var h = d.prototype;
        (h._create = function () {
          (this.itemGUID = 0),
            (this._sorters = {}),
            this._getSorters(),
            e.prototype._create.call(this),
            (this.modes = {}),
            (this.filteredItems = this.items),
            (this.sortHistory = ["original-order"]);
          for (var t in a.modes) this._initLayoutMode(t);
        }),
          (h.reloadItems = function () {
            (this.itemGUID = 0), e.prototype.reloadItems.call(this);
          }),
          (h._itemize = function () {
            for (
              var t = e.prototype._itemize.apply(this, arguments), i = 0;
              i < t.length;
              i++
            ) {
              t[i].id = this.itemGUID++;
            }
            return this._updateItemsSortData(t), t;
          }),
          (h._initLayoutMode = function (t) {
            var e = a.modes[t],
              i = this.options[t] || {};
            (this.options[t] = e.options ? o.extend(e.options, i) : i),
              (this.modes[t] = new e(this));
          }),
          (h.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout")
              ? void this.arrange()
              : void this._layout();
          }),
          (h._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(this.filteredItems, t),
              (this._isLayoutInited = !0);
          }),
          (h.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            (this.filteredItems = e.matches),
              this._bindArrangeComplete(),
              this._isInstant
                ? this._noTransition(this._hideReveal, [e])
                : this._hideReveal(e),
              this._sort(),
              this._layout();
          }),
          (h._init = h.arrange),
          (h._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide);
          }),
          (h._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
              e = void 0 !== t ? t : !this._isLayoutInited;
            return (this._isInstant = e), e;
          }),
          (h._bindArrangeComplete = function () {
            function t() {
              e &&
                i &&
                n &&
                o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
            }
            var e,
              i,
              n,
              o = this;
            this.once("layoutComplete", function () {
              (e = !0), t();
            }),
              this.once("hideComplete", function () {
                (i = !0), t();
              }),
              this.once("revealComplete", function () {
                (n = !0), t();
              });
          }),
          (h._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (
              var i = [], n = [], o = [], s = this._getFilterTest(e), a = 0;
              a < t.length;
              a++
            ) {
              var r = t[a];
              if (!r.isIgnored) {
                var l = s(r);
                l && i.push(r),
                  l && r.isHidden ? n.push(r) : l || r.isHidden || o.push(r);
              }
            }
            return { matches: i, needReveal: n, needHide: o };
          }),
          (h._getFilterTest = function (t) {
            return l && this.options.isJQueryFiltering
              ? function (e) {
                  return l(e.element).is(t);
                }
              : "function" == typeof t
              ? function (e) {
                  return t(e.element);
                }
              : function (e) {
                  return n(e.element, t);
                };
          }),
          (h.updateSortData = function (t) {
            var e;
            t
              ? ((t = o.makeArray(t)), (e = this.getItems(t)))
              : (e = this.items),
              this._getSorters(),
              this._updateItemsSortData(e);
          }),
          (h._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
              var i = t[e];
              this._sorters[e] = u(i);
            }
          }),
          (h._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
              t[i].updateSortData();
            }
          });
        var u = (function () {
          function t(t) {
            if ("string" != typeof t) return t;
            var i = c(t).split(" "),
              n = i[0],
              o = n.match(/^\[(.+)\]$/),
              s = o && o[1],
              a = e(s, n),
              r = d.sortDataParsers[i[1]];
            return (t = r
              ? function (t) {
                  return t && r(a(t));
                }
              : function (t) {
                  return t && a(t);
                });
          }
          function e(t, e) {
            return t
              ? function (e) {
                  return e.getAttribute(t);
                }
              : function (t) {
                  var i = t.querySelector(e);
                  return i && i.textContent;
                };
          }
          return t;
        })();
        (d.sortDataParsers = {
          parseInt: function (t) {
            return parseInt(t, 10);
          },
          parseFloat: function (t) {
            return parseFloat(t);
          },
        }),
          (h._sort = function () {
            if (this.options.sortBy) {
              var t = o.makeArray(this.options.sortBy);
              this._getIsSameSortBy(t) ||
                (this.sortHistory = t.concat(this.sortHistory));
              var e = r(this.sortHistory, this.options.sortAscending);
              this.filteredItems.sort(e);
            }
          }),
          (h._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
              if (t[e] != this.sortHistory[e]) return !1;
            return !0;
          }),
          (h._mode = function () {
            var t = this.options.layoutMode,
              e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return (e.options = this.options[t]), e;
          }),
          (h._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout();
          }),
          (h._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t);
          }),
          (h._manageStamp = function (t) {
            this._mode()._manageStamp(t);
          }),
          (h._getContainerSize = function () {
            return this._mode()._getContainerSize();
          }),
          (h.needsResizeLayout = function () {
            return this._mode().needsResizeLayout();
          }),
          (h.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
              var i = this._filterRevealAdded(e);
              this.filteredItems = this.filteredItems.concat(i);
            }
          }),
          (h.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
              this._resetLayout(), this._manageStamps();
              var i = this._filterRevealAdded(e);
              this.layoutItems(this.filteredItems),
                (this.filteredItems = i.concat(this.filteredItems)),
                (this.items = e.concat(this.items));
            }
          }),
          (h._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return (
              this.hide(e.needHide),
              this.reveal(e.matches),
              this.layoutItems(e.matches, !0),
              e.matches
            );
          }),
          (h.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
              var i,
                n,
                o = e.length;
              for (i = 0; i < o; i++)
                (n = e[i]), this.element.appendChild(n.element);
              var s = this._filter(e).matches;
              for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
              for (this.arrange(), i = 0; i < o; i++)
                delete e[i].isLayoutInstant;
              this.reveal(s);
            }
          });
        var p = h.remove;
        return (
          (h.remove = function (t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, n = 0; i && n < i; n++) {
              var s = e[n];
              o.removeFrom(this.filteredItems, s);
            }
          }),
          (h.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) {
              this.items[t].sortData.random = Math.random();
            }
            (this.options.sortBy = "random"), this._sort(), this._layout();
          }),
          (h._noTransition = function (t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return (this.options.transitionDuration = i), n;
          }),
          (h.getFilteredItemElements = function () {
            return this.filteredItems.map(function (t) {
              return t.element;
            });
          }),
          d
        );
      });
  },
  function (t, e) {
    !(function (e, i) {
      var n = (function (t, e) {
        "use strict";
        if (e.getElementsByClassName) {
          var i,
            n = e.documentElement,
            o = t.Date,
            s = t.HTMLPictureElement,
            a = t.addEventListener,
            r = t.setTimeout,
            l = t.requestAnimationFrame || r,
            c = t.requestIdleCallback,
            d = /^picture$/i,
            h = ["load", "error", "lazyincluded", "_lazyloaded"],
            u = {},
            p = Array.prototype.forEach,
            f = function (t, e) {
              return (
                u[e] || (u[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                u[e].test(t.getAttribute("class") || "") && u[e]
              );
            },
            g = function (t, e) {
              f(t, e) ||
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").trim() + " " + e
                );
            },
            m = function (t, e) {
              var i;
              (i = f(t, e)) &&
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").replace(i, " ")
                );
            },
            _ = function (t, e, i) {
              var n = i ? "addEventListener" : "removeEventListener";
              i && _(t, e),
                h.forEach(function (i) {
                  t[n](i, e);
                });
            },
            v = function (t, i, n, o, s) {
              var a = e.createEvent("CustomEvent");
              return (
                a.initCustomEvent(i, !o, !s, n || {}), t.dispatchEvent(a), a
              );
            },
            y = function (e, n) {
              var o;
              !s && (o = t.picturefill || i.pf)
                ? o({ reevaluate: !0, elements: [e] })
                : n && n.src && (e.src = n.src);
            },
            w = function (t, e) {
              return (getComputedStyle(t, null) || {})[e];
            },
            b = function (t, e, n) {
              for (
                n = n || t.offsetWidth;
                n < i.minSize && e && !t._lazysizesWidth;

              )
                (n = e.offsetWidth), (e = e.parentNode);
              return n;
            },
            x = (function () {
              var t,
                i,
                n = [],
                o = [],
                s = function () {
                  var e = n;
                  for (n = o, t = !0, i = !1; e.length; ) e.shift()();
                  t = !1;
                },
                a = function (o, a) {
                  t && !a
                    ? o.apply(this, arguments)
                    : (n.push(o), i || ((i = !0), (e.hidden ? r : l)(s)));
                };
              return (a._lsFlush = s), a;
            })(),
            j = function (t, e) {
              return e
                ? function () {
                    x(t);
                  }
                : function () {
                    var e = this,
                      i = arguments;
                    x(function () {
                      t.apply(e, i);
                    });
                  };
            },
            C = function (t) {
              var e,
                i = 0,
                n = 66,
                s = function () {
                  (e = !1), (i = o.now()), t();
                },
                a = c
                  ? function () {
                      c(s, { timeout: n }), 66 !== n && (n = 66);
                    }
                  : j(function () {
                      r(s);
                    }, !0);
              return function (t) {
                var s;
                (t = !0 === t) && (n = 44),
                  e ||
                    ((e = !0),
                    (s = 125 - (o.now() - i)),
                    s < 0 && (s = 0),
                    t || (s < 9 && c) ? a() : r(a, s));
              };
            },
            k = function (t) {
              var e,
                i,
                n = function () {
                  (e = null), t();
                },
                s = function () {
                  var t = o.now() - i;
                  t < 99 ? r(s, 99 - t) : (c || n)(n);
                };
              return function () {
                (i = o.now()), e || (e = r(s, 99));
              };
            },
            z = (function () {
              function s(t) {
                return (
                  !!t.complete &&
                  (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
                );
              }
              var l,
                c,
                h,
                u,
                b,
                z,
                S,
                I,
                E,
                P,
                A,
                O,
                M,
                D,
                L,
                H,
                B = /^img$/i,
                W = /^iframe$/i,
                N = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                $ = 0,
                R = 0,
                F = -1,
                q = function (t) {
                  R--,
                    t && t.target && _(t.target, q),
                    (!t || R < 0 || !t.target) && (R = 0);
                },
                Y = function (t, i) {
                  var o,
                    s = t,
                    a =
                      "hidden" == w(e.body, "visibility") ||
                      "hidden" != w(t, "visibility");
                  for (
                    P -= i, M += i, A -= i, O += i;
                    a && (s = s.offsetParent) && s != e.body && s != n;

                  )
                    (a = (w(s, "opacity") || 1) > 0) &&
                      "visible" != w(s, "overflow") &&
                      ((o = s.getBoundingClientRect()),
                      (a =
                        O > o.left &&
                        A < o.right &&
                        M > o.top - 1 &&
                        P < o.bottom + 1));
                  return a;
                },
                Q = function () {
                  var t, o, s, a, r, d, u, p, f;
                  if ((b = i.loadMode) && R < 8 && (t = l.length)) {
                    (o = 0),
                      F++,
                      null == L &&
                        ("expand" in i ||
                          (i.expand =
                            n.clientHeight > 500 && n.clientWidth > 500
                              ? 500
                              : 370),
                        (D = i.expand),
                        (L = D * i.expFactor)),
                      $ < L && R < 1 && F > 2 && b > 2 && !e.hidden
                        ? (($ = L), (F = 0))
                        : ($ = b > 1 && F > 1 && R < 6 ? D : 0);
                    for (; o < t; o++)
                      if (l[o] && !l[o]._lazyRace)
                        if (N)
                          if (
                            (((p = l[o].getAttribute("data-expand")) &&
                              (d = 1 * p)) ||
                              (d = $),
                            f !== d &&
                              ((I = innerWidth + d * H),
                              (E = innerHeight + d),
                              (u = -1 * d),
                              (f = d)),
                            (s = l[o].getBoundingClientRect()),
                            (M = s.bottom) >= u &&
                              (P = s.top) <= E &&
                              (O = s.right) >= u * H &&
                              (A = s.left) <= I &&
                              (M || O || A || P) &&
                              ((h && R < 3 && !p && (b < 3 || F < 4)) ||
                                Y(l[o], d)))
                          ) {
                            if ((tt(l[o]), (r = !0), R > 9)) break;
                          } else
                            !r &&
                              h &&
                              !a &&
                              R < 4 &&
                              F < 4 &&
                              b > 2 &&
                              (c[0] || i.preloadAfterLoad) &&
                              (c[0] ||
                                (!p &&
                                  (M ||
                                    O ||
                                    A ||
                                    P ||
                                    "auto" !=
                                      l[o].getAttribute(i.sizesAttr)))) &&
                              (a = c[0] || l[o]);
                        else tt(l[o]);
                    a && !r && tt(a);
                  }
                  G();
                },
                U = C(Q),
                X = function (t) {
                  g(t, i.loadedClass),
                    m(t, i.loadingClass),
                    m(t, i.afterLoadedClass);
                },
                Z = function (t) {
                  g(t.target, i.afterLoadedClass), G();
                },
                G = function () {
                  if (S.length > 0)
                    for (
                      var t, e, n = i.animateExpand, o = 0, s = 0;
                      s < S.length;
                      s++
                    ) {
                      var a = S[s],
                        r = a.getAttribute("data-animate");
                      r && (n = r),
                        (t = S[s].getBoundingClientRect()),
                        e !== n &&
                          ((I = innerWidth + n * H),
                          (E = innerHeight + n),
                          (o = -1 * n),
                          (e = n)),
                        (M = t.bottom) >= o &&
                          (P = t.top) <= E &&
                          (O = t.right) >= o * H &&
                          (A = t.left) <= I &&
                          (M || O || A || P) &&
                          f(a, i.afterLoadedClass) &&
                          X(a);
                    }
                },
                V = function (t, e) {
                  try {
                    t.contentWindow.location.replace(e);
                  } catch (i) {
                    t.src = e;
                  }
                },
                K = function (t) {
                  var e,
                    n,
                    o = t.getAttribute(i.srcsetAttr);
                  (e =
                    i.customMedia[
                      t.getAttribute("data-media") || t.getAttribute("media")
                    ]) && t.setAttribute("media", e),
                    o && t.setAttribute("srcset", o),
                    e &&
                      ((n = t.parentNode),
                      n.insertBefore(t.cloneNode(), t),
                      n.removeChild(t));
                },
                J = j(function (t, e, n, o, a) {
                  var l, c, h, f, w, b;
                  (w = v(t, "lazybeforeunveil", e)).defaultPrevented ||
                    (o &&
                      (n ? g(t, i.autosizesClass) : t.setAttribute("sizes", o)),
                    (c = t.getAttribute(i.srcsetAttr)),
                    (l = t.getAttribute(i.srcAttr)),
                    a &&
                      ((h = t.parentNode), (f = h && d.test(h.nodeName || ""))),
                    (b = e.firesLoad || ("src" in t && (c || l || f))),
                    (w = { target: t }),
                    b &&
                      (_(t, q, !0),
                      clearTimeout(u),
                      (u = r(q, 2500)),
                      g(t, i.loadingClass),
                      _(t, Z, !0)),
                    f && p.call(h.getElementsByTagName("source"), K),
                    c
                      ? t.setAttribute("srcset", c)
                      : l && !f && (W.test(t.nodeName) ? V(t, l) : (t.src = l)),
                    (c || f) && y(t, { src: l })),
                    t._lazyRace && delete t._lazyRace,
                    m(t, i.lazyClass),
                    x(function () {
                      (b && !s(t)) || (b ? q(w) : R--);
                    }, !0);
                }),
                tt = function (t) {
                  var e,
                    n = B.test(t.nodeName),
                    o =
                      n &&
                      (t.getAttribute(i.sizesAttr) || t.getAttribute("sizes")),
                    s = "auto" == o;
                  ((!s && h) ||
                    !n ||
                    (!t.src && !t.srcset) ||
                    t.complete ||
                    f(t, i.errorClass)) &&
                    ((e = v(t, "lazyunveilread").detail),
                    s && T.updateElem(t, !0, t.offsetWidth),
                    (t._lazyRace = !0),
                    R++,
                    J(t, e, s, o, n));
                },
                et = function () {
                  if (!h) {
                    if (o.now() - z < 999) return void r(et, 999);
                    var t = k(function () {
                      (i.loadMode = 3), U();
                    });
                    (h = !0),
                      (i.loadMode = 3),
                      U(),
                      a(
                        "scroll",
                        function () {
                          3 == i.loadMode && (i.loadMode = 2), t();
                        },
                        !0
                      );
                  }
                };
              return {
                _: function () {
                  (z = o.now()),
                    (l = e.getElementsByClassName(i.lazyClass)),
                    (S = e.getElementsByClassName(i.afterLoadedClass)),
                    (c = e.getElementsByClassName(
                      i.lazyClass + " " + i.preloadClass
                    )),
                    (H = i.hFac),
                    a("scroll", U, !0),
                    a("resize", U, !0),
                    t.MutationObserver
                      ? new MutationObserver(U).observe(n, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (n.addEventListener("DOMNodeInserted", U, !0),
                        n.addEventListener("DOMAttrModified", U, !0),
                        setInterval(U, 999)),
                    a("hashchange", U, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                      "webkitAnimationEnd",
                    ].forEach(function (t) {
                      e.addEventListener(t, U, !0);
                    }),
                    /d$|^c/.test(e.readyState)
                      ? et()
                      : (a("load", et),
                        e.addEventListener("DOMContentLoaded", U),
                        r(et, 2e4)),
                    l.length ? (Q(), x._lsFlush()) : U();
                },
                checkElems: U,
                unveil: tt,
              };
            })(),
            T = (function () {
              var t,
                n = j(function (t, e, i, n) {
                  var o, s, a;
                  if (
                    ((t._lazysizesWidth = n),
                    (n += "px"),
                    t.setAttribute("sizes", n),
                    d.test(e.nodeName || ""))
                  )
                    for (
                      o = e.getElementsByTagName("source"), s = 0, a = o.length;
                      s < a;
                      s++
                    )
                      o[s].setAttribute("sizes", n);
                  i.detail.dataAttr || y(t, i.detail);
                }),
                o = function (t, e, i) {
                  var o,
                    s = t.parentNode;
                  s &&
                    ((i = b(t, s, i)),
                    (o = v(t, "lazybeforesizes", { width: i, dataAttr: !!e })),
                    o.defaultPrevented ||
                      ((i = o.detail.width) &&
                        i !== t._lazysizesWidth &&
                        n(t, s, o, i)));
                },
                s = function () {
                  var e,
                    i = t.length;
                  if (i) for (e = 0; e < i; e++) o(t[e]);
                },
                r = k(s);
              return {
                _: function () {
                  (t = e.getElementsByClassName(i.autosizesClass)),
                    a("resize", r);
                },
                checkElems: r,
                updateElem: o,
              };
            })(),
            S = function () {
              S.i || ((S.i = !0), T._(), z._());
            };
          return (
            (function () {
              var e,
                n = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  afterLoadedClass: "afterloading",
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
                  animateExpand: 0,
                };
              i = t.lazySizesConfig || t.lazysizesConfig || {};
              for (e in n) e in i || (i[e] = n[e]);
              (t.lazySizesConfig = i),
                r(function () {
                  i.init && S();
                });
            })(),
            {
              cfg: i,
              autoSizer: T,
              loader: z,
              init: S,
              uP: y,
              aC: g,
              rC: m,
              hC: f,
              fire: v,
              gW: b,
              rAF: x,
            }
          );
        }
      })(e, e.document);
      (e.lazySizes = n), "object" == typeof t && t.exports && (t.exports = n);
    })(window);
  },
  function (t, e, i) {
    !(function (e, n) {
      "use strict";
      var o = function () {
        n(e.lazySizes), e.removeEventListener("lazyunveilread", o, !0);
      };
      (n = n.bind(null, e, e.document)),
        "object" == typeof t && t.exports
          ? n(i(5))
          : e.lazySizes
          ? o()
          : e.addEventListener("lazyunveilread", o, !0);
    })(window, function (t, e, i) {
      "use strict";
      if (t.addEventListener) {
        var n = /\s+/g,
          o = /\s*\|\s+|\s+\|\s*/g,
          s = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
          a = /\(|\)|'/,
          r = { contain: 1, cover: 1 },
          l = function (t) {
            var e = i.gW(t, t.parentNode);
            return (
              (!t._lazysizesWidth || e > t._lazysizesWidth) &&
                (t._lazysizesWidth = e),
              t._lazysizesWidth
            );
          },
          c = function (t) {
            var e;
            return (
              (e = (
                getComputedStyle(t) || { getPropertyValue: function () {} }
              ).getPropertyValue("background-size")),
              !r[e] &&
                r[t.style.backgroundSize] &&
                (e = t.style.backgroundSize),
              e
            );
          },
          d = function (t, i, a) {
            var r = e.createElement("picture"),
              l = i.getAttribute(lazySizesConfig.sizesAttr),
              c = i.getAttribute("data-ratio"),
              d = i.getAttribute("data-optimumx");
            i._lazybgset &&
              i._lazybgset.parentNode == i &&
              i.removeChild(i._lazybgset),
              Object.defineProperty(a, "_lazybgset", {
                value: i,
                writable: !0,
              }),
              Object.defineProperty(i, "_lazybgset", {
                value: r,
                writable: !0,
              }),
              (t = t.replace(n, " ").split(o)),
              (r.style.display = "none"),
              (a.className = lazySizesConfig.lazyClass),
              1 != t.length || l || (l = "auto"),
              t.forEach(function (t) {
                var i = e.createElement("source");
                l && "auto" != l && i.setAttribute("sizes", l),
                  t.match(s) &&
                    (i.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1),
                    RegExp.$2 &&
                      i.setAttribute(
                        "media",
                        lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2
                      )),
                  r.appendChild(i);
              }),
              l &&
                (a.setAttribute(lazySizesConfig.sizesAttr, l),
                i.removeAttribute(lazySizesConfig.sizesAttr),
                i.removeAttribute("sizes")),
              d && a.setAttribute("data-optimumx", d),
              c && a.setAttribute("data-ratio", c),
              r.appendChild(a),
              i.appendChild(r);
          },
          h = function (t) {
            if (t.target._lazybgset) {
              var e = t.target,
                n = e._lazybgset,
                o = e.currentSrc || e.src;
              o &&
                (n.style.backgroundImage =
                  "url(" + (a.test(o) ? JSON.stringify(o) : o) + ")"),
                e._lazybgsetLoading &&
                  (i.fire(n, "_lazyloaded", {}, !1, !0),
                  delete e._lazybgsetLoading);
            }
          };
        addEventListener("lazybeforeunveil", function (t) {
          var n, o, s;
          !t.defaultPrevented &&
            (n = t.target.getAttribute("data-bgset")) &&
            ((s = t.target),
            (o = e.createElement("img")),
            (o.alt = ""),
            (o._lazybgsetLoading = !0),
            (t.detail.firesLoad = !0),
            d(n, s, o),
            setTimeout(function () {
              i.loader.unveil(o),
                i.rAF(function () {
                  i.fire(o, "_lazyloaded", {}, !0, !0),
                    o.complete && h({ target: o });
                });
            }));
        }),
          e.addEventListener("load", h, !0),
          t.addEventListener(
            "lazybeforesizes",
            function (t) {
              if (
                t.detail.instance == i &&
                t.target._lazybgset &&
                t.detail.dataAttr
              ) {
                var e = t.target._lazybgset,
                  n = c(e);
                r[n] &&
                  ((t.target._lazysizesParentFit = n),
                  i.rAF(function () {
                    t.target.setAttribute("data-parent-fit", n),
                      t.target._lazysizesParentFit &&
                        delete t.target._lazysizesParentFit;
                  }));
              }
            },
            !0
          ),
          e.documentElement.addEventListener("lazybeforesizes", function (t) {
            !t.defaultPrevented &&
              t.target._lazybgset &&
              t.detail.instance == i &&
              (t.detail.width = l(t.target._lazybgset));
          });
      }
    });
  },
  function (t, e) {
    t.exports = lazySizes;
  },
  function (t, e) {
    !(function (t, e, i, n) {
      function o(e, i) {
        (this.settings = null),
          (this.options = t.extend({}, o.Defaults, i)),
          (this.$element = t(e)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"],
            },
          }),
          t.each(
            ["onResize", "onThrottledResize"],
            t.proxy(function (e, i) {
              this._handlers[i] = t.proxy(this[i], this);
            }, this)
          ),
          t.each(
            o.Plugins,
            t.proxy(function (t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                this
              );
            }, this)
          ),
          t.each(
            o.Workers,
            t.proxy(function (e, i) {
              this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      (o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
      }),
        (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (o.Type = { Event: "event", State: "state" }),
        (o.Plugins = {}),
        (o.Workers = [
          {
            filter: ["width", "settings"],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              t.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              this.$stage.children(".cloned").remove();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = {
                  width: "auto",
                  "margin-left": n ? e : "",
                  "margin-right": n ? "" : e,
                };
              !i && this.$stage.children().css(o), (t.css = o);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                s = [];
              for (t.items = { merge: !1, width: e }; n--; )
                (i = this._mergers[n]),
                  (i =
                    (this.settings.mergeFit &&
                      Math.min(i, this.settings.items)) ||
                    i),
                  (t.items.merge = i > 1 || t.items.merge),
                  (s[n] = o ? e * i : this._items[n].width());
              this._widths = s;
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                a = n.loop && i.length ? (n.rewind ? o : Math.max(o, s)) : 0,
                r = "",
                l = "";
              for (a /= 2; a--; )
                e.push(this.normalize(e.length / 2, !0)),
                  (r += i[e[e.length - 1]][0].outerHTML),
                  e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                  (l = i[e[e.length - 1]][0].outerHTML + l);
              (this._clones = e),
                t(r).addClass("cloned").appendTo(this.$stage),
                t(l).addClass("cloned").prependTo(this.$stage);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              for (
                var t = this.settings.rtl ? 1 : -1,
                  e = this._clones.length + this._items.length,
                  i = -1,
                  n = 0,
                  o = 0,
                  s = [];
                ++i < e;

              )
                (n = s[i - 1] || 0),
                  (o = this._widths[this.relative(i)] + this.settings.margin),
                  s.push(n + o * t);
              this._coordinates = s;
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  "padding-left": t || "",
                  "padding-right": t || "",
                };
              this.$stage.css(i);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
              if (i && t.items.merge)
                for (; e--; )
                  (t.css.width = this._widths[this.relative(e)]),
                    n.eq(e).css(t.css);
              else i && ((t.css.width = t.items.width), n.css(t.css));
            },
          },
          {
            filter: ["items"],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              (t.current = t.current
                ? this.$stage.children().index(t.current)
                : 0),
                (t.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), t.current)
                )),
                this.reset(t.current);
            },
          },
          {
            filter: ["position"],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ["width", "position", "items", "settings"],
            run: function () {
              var t,
                e,
                i,
                n,
                o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                a = this.coordinates(this.current()) + s,
                r = a + this.width() * o,
                l = [];
              for (i = 0, n = this._coordinates.length; i < n; i++)
                (t = this._coordinates[i - 1] || 0),
                  (e = Math.abs(this._coordinates[i]) + s * o),
                  ((this.op(t, "<=", a) && this.op(t, ">", r)) ||
                    (this.op(e, "<", a) && this.op(e, ">", r))) &&
                    l.push(i);
              this.$stage.children(".active").removeClass("active"),
                this.$stage
                  .children(":eq(" + l.join("), :eq(") + ")")
                  .addClass("active"),
                this.settings.center &&
                  (this.$stage.children(".center").removeClass("center"),
                  this.$stage.children().eq(this.current()).addClass("center"));
            },
          },
        ]),
        (o.prototype.initialize = function () {
          if (
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading"))
          ) {
            var e, i, n;
            (e = this.$element.find("img")),
              (i = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : void 0),
              (n = this.$element.children(i).width()),
              e.length && n <= 0 && this.preloadAutoWidthImages(e);
          }
          this.$element.addClass(this.options.loadingClass),
            (this.$stage = t(
              "<" +
                this.settings.stageElement +
                ' class="' +
                this.settings.stageClass +
                '"/>'
            ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
            this.$element.append(this.$stage.parent()),
            this.replace(this.$element.children().not(this.$stage.parent())),
            this.$element.is(":visible")
              ? this.refresh()
              : this.invalidate("width"),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized");
        }),
        (o.prototype.setup = function () {
          var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
          i
            ? (t.each(i, function (t) {
                t <= e && t > n && (n = Number(t));
              }),
              (o = t.extend({}, this.options, i[n])),
              delete o.responsive,
              o.responsiveClass &&
                this.$element.attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        "(" + this.options.responsiveClass + "-)\\S+\\s",
                        "g"
                      ),
                      "$1" + n
                    )
                ))
            : (o = t.extend({}, this.options)),
            (null !== this.settings && this._breakpoint === n) ||
              (this.trigger("change", {
                property: { name: "settings", value: o },
              }),
              (this._breakpoint = n),
              (this.settings = o),
              this.invalidate("settings"),
              this.trigger("changed", {
                property: { name: "settings", value: this.settings },
              }));
        }),
        (o.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (o.prototype.prepare = function (e) {
          var i = this.trigger("prepare", { content: e });
          return (
            i.data ||
              (i.data = t("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(e)),
            this.trigger("prepared", { content: i.data }),
            i.data
          );
        }),
        (o.prototype.update = function () {
          for (
            var e = 0,
              i = this._pipe.length,
              n = t.proxy(function (t) {
                return this[t];
              }, this._invalidated),
              o = {};
            e < i;

          )
            (this._invalidated.all ||
              t.grep(this._pipe[e].filter, n).length > 0) &&
              this._pipe[e].run(o),
              e++;
          (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (o.prototype.width = function (t) {
          switch ((t = t || o.Width.Default)) {
            case o.Width.Inner:
            case o.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                2 * this.settings.stagePadding +
                this.settings.margin
              );
          }
        }),
        (o.prototype.refresh = function () {
          this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
        }),
        (o.prototype.onThrottledResize = function () {
          e.clearTimeout(this.resizeTimer),
            (this.resizeTimer = e.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (o.prototype.onResize = function () {
          return (
            !!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.$element.is(":visible") &&
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))
          );
        }),
        (o.prototype.registerEventHandlers = function () {
          t.support.transition &&
            this.$stage.on(
              t.support.transition.end + ".owl.core",
              t.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
              this.on(e, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                "mousedown.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                "touchstart.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "touchcancel.owl.core",
                t.proxy(this.onDragEnd, this)
              ));
        }),
        (o.prototype.onDragStart = function (e) {
          var n = null;
          3 !== e.which &&
            (t.support.transform
              ? ((n = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(",")),
                (n = {
                  x: n[16 === n.length ? 12 : 4],
                  y: n[16 === n.length ? 13 : 5],
                }))
              : ((n = this.$stage.position()),
                (n = {
                  x: this.settings.rtl
                    ? n.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : n.left,
                  y: n.top,
                })),
            this.is("animating") &&
              (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
              this.invalidate("position")),
            this.$element.toggleClass(
              this.options.grabClass,
              "mousedown" === e.type
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = t(e.target)),
            (this._drag.stage.start = n),
            (this._drag.stage.current = n),
            (this._drag.pointer = this.pointer(e)),
            t(i).on(
              "mouseup.owl.core touchend.owl.core",
              t.proxy(this.onDragEnd, this)
            ),
            t(i).one(
              "mousemove.owl.core touchmove.owl.core",
              t.proxy(function (e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on(
                  "mousemove.owl.core touchmove.owl.core",
                  t.proxy(this.onDragMove, this)
                ),
                  (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                    (e.preventDefault(),
                    this.enter("dragging"),
                    this.trigger("drag"));
              }, this)
            ));
        }),
        (o.prototype.onDragMove = function (t) {
          var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, o);
          this.is("dragging") &&
            (t.preventDefault(),
            this.settings.loop
              ? ((e = this.coordinates(this.minimum())),
                (i = this.coordinates(this.maximum() + 1) - e),
                (s.x = ((((s.x - e) % i) + i) % i) + e))
              : ((e = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (i = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (n = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
                (s.x = Math.max(Math.min(s.x, e + n), i + n))),
            (this._drag.stage.current = s),
            this.animate(s.x));
        }),
        (o.prototype.onDragEnd = function (e) {
          var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            s = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
          t(i).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(o.x, 0 !== n.x ? s : this._drag.direction)
              ),
              this.invalidate("position"),
              this.update(),
              (this._drag.direction = s),
              (Math.abs(n.x) > 3 ||
                new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one("click.owl.core", function () {
                  return !1;
                })),
            this.is("dragging") &&
              (this.leave("dragging"), this.trigger("dragged"));
        }),
        (o.prototype.closest = function (e, i) {
          var n = -1,
            o = this.width(),
            s = this.coordinates();
          return (
            this.settings.freeDrag ||
              t.each(
                s,
                t.proxy(function (t, a) {
                  return (
                    e > a - 30 && e < a + 30
                      ? (n = t)
                      : this.op(e, "<", a) &&
                        this.op(e, ">", s[t + 1] || a - o) &&
                        (n = "left" === i ? t + 1 : t),
                    -1 === n
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(e, ">", s[this.minimum()])
                ? (n = e = this.minimum())
                : this.op(e, "<", s[this.maximum()]) &&
                  (n = e = this.maximum())),
            n
          );
        }),
        (o.prototype.animate = function (e) {
          var i = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
            i && (this.enter("animating"), this.trigger("translate")),
            t.support.transform3d && t.support.transition
              ? this.$stage.css({
                  transform: "translate3d(" + e + "px,0px,0px)",
                  transition: this.speed() / 1e3 + "s",
                })
              : i
              ? this.$stage.animate(
                  { left: e + "px" },
                  this.speed(),
                  this.settings.fallbackEasing,
                  t.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: e + "px" });
        }),
        (o.prototype.is = function (t) {
          return this._states.current[t] && this._states.current[t] > 0;
        }),
        (o.prototype.current = function (t) {
          if (void 0 === t) return this._current;
          if (0 !== this._items.length) {
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger("change", {
                property: { name: "position", value: t },
              });
              void 0 !== e.data && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }
        }),
        (o.prototype.invalidate = function (e) {
          return (
            "string" === t.type(e) &&
              ((this._invalidated[e] = !0),
              this.is("valid") && this.leave("valid")),
            t.map(this._invalidated, function (t, e) {
              return e;
            })
          );
        }),
        (o.prototype.reset = function (t) {
          void 0 !== (t = this.normalize(t)) &&
            ((this._speed = 0),
            (this._current = t),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(t)),
            this.release(["translate", "translated"]));
        }),
        (o.prototype.normalize = function (e, i) {
          var n = this._items.length,
            o = i ? 0 : this._clones.length;
          return (
            !t.isNumeric(e) || n < 1
              ? (e = void 0)
              : (e < 0 || e >= n + o) &&
                (e = ((((e - o / 2) % n) + n) % n) + o / 2),
            e
          );
        }),
        (o.prototype.relative = function (t) {
          return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (o.prototype.maximum = function (t) {
          var e,
            i = this.settings,
            n = this._coordinates.length,
            o = Math.abs(this._coordinates[n - 1]) - this._width,
            s = -1;
          if (i.loop) n = this._clones.length / 2 + this._items.length - 1;
          else if (i.autoWidth || i.merge)
            for (; n - s > 1; )
              Math.abs(this._coordinates[(e = (n + s) >> 1)]) < o
                ? (s = e)
                : (n = e);
          else
            n = i.center
              ? this._items.length - 1
              : this._items.length - i.items;
          return t && (n -= this._clones.length / 2), Math.max(n, 0);
        }),
        (o.prototype.minimum = function (t) {
          return t ? 0 : this._clones.length / 2;
        }),
        (o.prototype.items = function (t) {
          return void 0 === t
            ? this._items.slice()
            : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (o.prototype.mergers = function (t) {
          return void 0 === t
            ? this._mergers.slice()
            : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (o.prototype.clones = function (e) {
          var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function (t) {
              return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
            };
          return void 0 === e
            ? t.map(this._clones, function (t, e) {
                return o(e);
              })
            : t.map(this._clones, function (t, i) {
                return t === e ? o(i) : null;
              });
        }),
        (o.prototype.speed = function (t) {
          return void 0 !== t && (this._speed = t), this._speed;
        }),
        (o.prototype.coordinates = function (e) {
          var i = null;
          return void 0 === e
            ? t.map(
                this._coordinates,
                t.proxy(function (t, e) {
                  return this.coordinates(e);
                }, this)
              )
            : (this.settings.center
                ? ((i = this._coordinates[e]),
                  (i +=
                    ((this.width() - i + (this._coordinates[e - 1] || 0)) / 2) *
                    (this.settings.rtl ? -1 : 1)))
                : (i = this._coordinates[e - 1] || 0),
              i);
        }),
        (o.prototype.duration = function (t, e, i) {
          return (
            Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed)
          );
        }),
        (o.prototype.to = function (t, e) {
          var i = this.current(),
            n = null,
            o = t - this.relative(i),
            s = (o > 0) - (o < 0),
            a = this._items.length,
            r = this.minimum(),
            l = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(o) > a / 2 &&
                (o += -1 * s * a),
              (t = i + o),
              (n = ((((t - r) % a) + a) % a) + r) !== t &&
                n - o <= l &&
                n - o > 0 &&
                ((i = n - o), (t = n), this.reset(i)))
            : this.settings.rewind
            ? ((l += 1), (t = ((t % l) + l) % l))
            : (t = Math.max(r, Math.min(l, t))),
            this.speed(this.duration(i, t, e)),
            this.current(t),
            this.$element.is(":visible") && this.update();
        }),
        (o.prototype.next = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (o.prototype.prev = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (o.prototype.onTransitionEnd = function (t) {
          if (
            void 0 !== t &&
            (t.stopPropagation(),
            (t.target || t.srcElement || t.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave("animating"), this.trigger("translated");
        }),
        (o.prototype.viewport = function () {
          var n;
          if (this.options.responsiveBaseElement !== e)
            n = t(this.options.responsiveBaseElement).width();
          else if (e.innerWidth) n = e.innerWidth;
          else {
            if (!i.documentElement || !i.documentElement.clientWidth)
              throw "Can not detect viewport width.";
            n = i.documentElement.clientWidth;
          }
          return n;
        }),
        (o.prototype.replace = function (e) {
          this.$stage.empty(),
            (this._items = []),
            e && (e = e instanceof jQuery ? e : t(e)),
            this.settings.nestedItemSelector &&
              (e = e.find("." + this.settings.nestedItemSelector)),
            e
              .filter(function () {
                return 1 === this.nodeType;
              })
              .each(
                t.proxy(function (t, e) {
                  (e = this.prepare(e)),
                    this.$stage.append(e),
                    this._items.push(e),
                    this._mergers.push(
                      1 *
                        e
                          .find("[data-merge]")
                          .andSelf("[data-merge]")
                          .attr("data-merge") || 1
                    );
                }, this)
              ),
            this.reset(
              t.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate("items");
        }),
        (o.prototype.add = function (e, i) {
          var n = this.relative(this._current);
          (i = void 0 === i ? this._items.length : this.normalize(i, !0)),
            (e = e instanceof jQuery ? e : t(e)),
            this.trigger("add", { content: e, position: i }),
            (e = this.prepare(e)),
            0 === this._items.length || i === this._items.length
              ? (0 === this._items.length && this.$stage.append(e),
                0 !== this._items.length && this._items[i - 1].after(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find("[data-merge]")
                      .andSelf("[data-merge]")
                      .attr("data-merge") || 1
                ))
              : (this._items[i].before(e),
                this._items.splice(i, 0, e),
                this._mergers.splice(
                  i,
                  0,
                  1 *
                    e
                      .find("[data-merge]")
                      .andSelf("[data-merge]")
                      .attr("data-merge") || 1
                )),
            this._items[n] && this.reset(this._items[n].index()),
            this.invalidate("items"),
            this.trigger("added", { content: e, position: i });
        }),
        (o.prototype.remove = function (t) {
          void 0 !== (t = this.normalize(t, !0)) &&
            (this.trigger("remove", { content: this._items[t], position: t }),
            this._items[t].remove(),
            this._items.splice(t, 1),
            this._mergers.splice(t, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: t }));
        }),
        (o.prototype.preloadAutoWidthImages = function (e) {
          e.each(
            t.proxy(function (e, i) {
              this.enter("pre-loading"),
                (i = t(i)),
                t(new Image())
                  .one(
                    "load",
                    t.proxy(function (t) {
                      i.attr("src", t.target.src),
                        i.css("opacity", 1),
                        this.leave("pre-loading"),
                        !this.is("pre-loading") &&
                          !this.is("initializing") &&
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    "src",
                    i.attr("src") ||
                      i.attr("data-src") ||
                      i.attr("data-src-retina")
                  );
            }, this)
          );
        }),
        (o.prototype.destroy = function () {
          this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            t(i).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (e.clearTimeout(this.resizeTimer),
              this.off(e, "resize", this._handlers.onThrottledResize));
          for (var n in this._plugins) this._plugins[n].destroy();
          this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                    ""
                  )
              )
              .removeData("owl.carousel");
        }),
        (o.prototype.op = function (t, e, i) {
          var n = this.settings.rtl;
          switch (e) {
            case "<":
              return n ? t > i : t < i;
            case ">":
              return n ? t < i : t > i;
            case ">=":
              return n ? t <= i : t >= i;
            case "<=":
              return n ? t >= i : t <= i;
          }
        }),
        (o.prototype.on = function (t, e, i, n) {
          t.addEventListener
            ? t.addEventListener(e, i, n)
            : t.attachEvent && t.attachEvent("on" + e, i);
        }),
        (o.prototype.off = function (t, e, i, n) {
          t.removeEventListener
            ? t.removeEventListener(e, i, n)
            : t.detachEvent && t.detachEvent("on" + e, i);
        }),
        (o.prototype.trigger = function (e, i, n, s, a) {
          var r = {
              item: { count: this._items.length, index: this.current() },
            },
            l = t.camelCase(
              t
                .grep(["on", e, n], function (t) {
                  return t;
                })
                .join("-")
                .toLowerCase()
            ),
            c = t.Event(
              [e, "owl", n || "carousel"].join(".").toLowerCase(),
              t.extend({ relatedTarget: this }, r, i)
            );
          return (
            this._supress[e] ||
              (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(c);
              }),
              this.register({ type: o.Type.Event, name: e }),
              this.$element.trigger(c),
              this.settings &&
                "function" == typeof this.settings[l] &&
                this.settings[l].call(this, c)),
            c
          );
        }),
        (o.prototype.enter = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              void 0 === this._states.current[e] &&
                (this._states.current[e] = 0),
                this._states.current[e]++;
            }, this)
          );
        }),
        (o.prototype.leave = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              this._states.current[e]--;
            }, this)
          );
        }),
        (o.prototype.register = function (e) {
          if (e.type === o.Type.Event) {
            if (
              (t.event.special[e.name] || (t.event.special[e.name] = {}),
              !t.event.special[e.name].owl)
            ) {
              var i = t.event.special[e.name]._default;
              (t.event.special[e.name]._default = function (t) {
                return !i ||
                  !i.apply ||
                  (t.namespace && -1 !== t.namespace.indexOf("owl"))
                  ? t.namespace && t.namespace.indexOf("owl") > -1
                  : i.apply(this, arguments);
              }),
                (t.event.special[e.name].owl = !0);
            }
          } else
            e.type === o.Type.State &&
              (this._states.tags[e.name]
                ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                    e.tags
                  ))
                : (this._states.tags[e.name] = e.tags),
              (this._states.tags[e.name] = t.grep(
                this._states.tags[e.name],
                t.proxy(function (i, n) {
                  return t.inArray(i, this._states.tags[e.name]) === n;
                }, this)
              )));
        }),
        (o.prototype.suppress = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              this._supress[e] = !0;
            }, this)
          );
        }),
        (o.prototype.release = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              delete this._supress[e];
            }, this)
          );
        }),
        (o.prototype.pointer = function (t) {
          var i = { x: null, y: null };
          return (
            (t = t.originalEvent || t || e.event),
            (t =
              t.touches && t.touches.length
                ? t.touches[0]
                : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t),
            t.pageX
              ? ((i.x = t.pageX), (i.y = t.pageY))
              : ((i.x = t.clientX), (i.y = t.clientY)),
            i
          );
        }),
        (o.prototype.difference = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
        (t.fn.owlCarousel = function (e) {
          var i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var n = t(this),
              s = n.data("owl.carousel");
            s ||
              ((s = new o(this, "object" == typeof e && e)),
              n.data("owl.carousel", s),
              t.each(
                [
                  "next",
                  "prev",
                  "to",
                  "destroy",
                  "refresh",
                  "replace",
                  "add",
                  "remove",
                ],
                function (e, i) {
                  s.register({ type: o.Type.Event, name: i }),
                    s.$element.on(
                      i + ".owl.carousel.core",
                      t.proxy(function (t) {
                        t.stopPropagation(),
                          t.namespace &&
                            t.relatedTarget !== this &&
                            (this.suppress([i]),
                            s[i].apply(this, [].slice.call(arguments, 1)),
                            this.release([i]));
                      }, s)
                    );
                }
              )),
              "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i);
          });
        }),
        (t.fn.owlCarousel.Constructor = o);
    })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this._core = e),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (o.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.$element.is(":visible")),
              (this._interval = e.setInterval(
                t.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (o.prototype.refresh = function () {
            this._core.$element.is(":visible") !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass("owl-hidden", !this._visible),
              this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
          }),
          (o.prototype.destroy = function () {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this._core = e),
            (this._loaded = []),
            (this._handlers = {
              "initialized.owl.carousel change.owl.carousel": t.proxy(function (
                e
              ) {
                if (
                  e.namespace &&
                  this._core.settings &&
                  this._core.settings.lazyLoad &&
                  ((e.property && "position" == e.property.name) ||
                    "initialized" == e.type)
                )
                  for (
                    var i = this._core.settings,
                      n = (i.center && Math.ceil(i.items / 2)) || i.items,
                      o = (i.center && -1 * n) || 0,
                      s =
                        ((e.property && e.property.value) ||
                          this._core.current()) + o,
                      a = this._core.clones().length,
                      r = t.proxy(function (t, e) {
                        this.load(e);
                      }, this);
                    o++ < n;

                  )
                    this.load(a / 2 + this._core.relative(s)),
                      a && t.each(this._core.clones(this._core.relative(s)), r),
                      s++;
              },
              this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (o.Defaults = { lazyLoad: !1 }),
          (o.prototype.load = function (i) {
            var n = this._core.$stage.children().eq(i),
              o = n && n.find(".owl-lazy");
            !o ||
              t.inArray(n.get(0), this._loaded) > -1 ||
              (o.each(
                t.proxy(function (i, n) {
                  var o,
                    s = t(n),
                    a =
                      (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                      s.attr("data-src");
                  this._core.trigger("load", { element: s, url: a }, "lazy"),
                    s.is("img")
                      ? s
                          .one(
                            "load.owl.lazy",
                            t.proxy(function () {
                              s.css("opacity", 1),
                                this._core.trigger(
                                  "loaded",
                                  { element: s, url: a },
                                  "lazy"
                                );
                            }, this)
                          )
                          .attr("src", a)
                      : ((o = new Image()),
                        (o.onload = t.proxy(function () {
                          s.css({
                            "background-image": "url(" + a + ")",
                            opacity: "1",
                          }),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: a },
                              "lazy"
                            );
                        }, this)),
                        (o.src = a));
                }, this)
              ),
              this._loaded.push(n.get(0)));
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this._core = e),
            (this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  "position" == t.property.name &&
                  this.update();
              }, this),
              "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  t.element
                    .closest("." + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
          (o.prototype.update = function () {
            var e = this._core._current,
              i = e + this._core.settings.items,
              n = this._core.$stage.children().toArray().slice(e, i);
            (heights = []),
              (maxheight = 0),
              t.each(n, function (e, i) {
                heights.push(t(i).height());
              }),
              (maxheight = Math.max.apply(null, heights)),
              this._core.$stage
                .parent()
                .height(maxheight)
                .addClass(this._core.settings.autoHeightClass);
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this._core = e),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"],
                  });
              }, this),
              "resize.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  t.preventDefault();
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.is("resizing") &&
                  this._core.$stage.find(".cloned .owl-video-frame").remove();
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "position" === t.property.name &&
                  this._playing &&
                  this.stop();
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content).find(".owl-video");
                  i.length &&
                    (i.css("display", "none"), this.fetch(i, t(e.content)));
                }
              }, this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              "click.owl.video",
              ".owl-video-play-icon",
              t.proxy(function (t) {
                this.play(t);
              }, this)
            );
        };
        (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (o.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
              n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
              o = t.attr("data-width") || this._core.settings.videoWidth,
              s = t.attr("data-height") || this._core.settings.videoHeight,
              a = t.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if (
              ((n = a.match(
                /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
              )),
              n[3].indexOf("youtu") > -1)
            )
              i = "youtube";
            else {
              if (!(n[3].indexOf("vimeo") > -1))
                throw new Error("Video URL not supported.");
              i = "vimeo";
            }
            (n = n[6]),
              (this._videos[a] = { type: i, id: n, width: o, height: s }),
              e.attr("data-video", a),
              this.thumbnail(t, this._videos[a]);
          }),
          (o.prototype.thumbnail = function (e, i) {
            var n,
              o,
              s,
              a =
                i.width && i.height
                  ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
                  : "",
              r = e.find("img"),
              l = "src",
              c = "",
              d = this._core.settings,
              h = function (t) {
                (o = '<div class="owl-video-play-icon"></div>'),
                  (n = d.lazyLoad
                    ? '<div class="owl-video-tn ' +
                      c +
                      '" ' +
                      l +
                      '="' +
                      t +
                      '"></div>'
                    : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                      t +
                      ')"></div>'),
                  e.after(n),
                  e.after(o);
              };
            if (
              (e.wrap('<div class="owl-video-wrapper"' + a + "></div>"),
              this._core.settings.lazyLoad &&
                ((l = "data-src"), (c = "owl-lazy")),
              r.length)
            )
              return h(r.attr(l)), r.remove(), !1;
            "youtube" === i.type
              ? ((s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                h(s))
              : "vimeo" === i.type &&
                t.ajax({
                  type: "GET",
                  url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (s = t[0].thumbnail_large), h(s);
                  },
                });
          }),
          (o.prototype.stop = function () {
            this._core.trigger("stop", null, "video"),
              this._playing.find(".owl-video-frame").remove(),
              this._playing.removeClass("owl-video-playing"),
              (this._playing = null),
              this._core.leave("playing"),
              this._core.trigger("stopped", null, "video");
          }),
          (o.prototype.play = function (e) {
            var i,
              n = t(e.target),
              o = n.closest("." + this._core.settings.itemClass),
              s = this._videos[o.attr("data-video")],
              a = s.width || "100%",
              r = s.height || this._core.$stage.height();
            this._playing ||
              (this._core.enter("playing"),
              this._core.trigger("play", null, "video"),
              (o = this._core.items(this._core.relative(o.index()))),
              this._core.reset(o.index()),
              "youtube" === s.type
                ? (i =
                    '<iframe width="' +
                    a +
                    '" height="' +
                    r +
                    '" src="//www.youtube.com/embed/' +
                    s.id +
                    "?autoplay=1&v=" +
                    s.id +
                    '" frameborder="0" allowfullscreen></iframe>')
                : "vimeo" === s.type &&
                  (i =
                    '<iframe src="//player.vimeo.com/video/' +
                    s.id +
                    '?autoplay=1" width="' +
                    a +
                    '" height="' +
                    r +
                    '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
              t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
                o.find(".owl-video")
              ),
              (this._playing = o.addClass("owl-video-playing")));
          }),
          (o.prototype.isInFullScreen = function () {
            var e =
              i.fullscreenElement ||
              i.mozFullScreenElement ||
              i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame");
          }),
          (o.prototype.destroy = function () {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Video = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this.core = e),
            (this.core.options = t.extend({}, o.Defaults, this.core.options)),
            (this.swapping = !0),
            (this.previous = void 0),
            (this.next = void 0),
            (this.handlers = {
              "change.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "position" == t.property.name &&
                  ((this.previous = this.core.current()),
                  (this.next = t.property.value));
              }, this),
              "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                t.proxy(function (t) {
                  t.namespace && (this.swapping = "translated" == t.type);
                }, this),
              "translate.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this.swapping &&
                  (this.core.options.animateOut ||
                    this.core.options.animateIn) &&
                  this.swap();
              }, this),
            }),
            this.core.$element.on(this.handlers);
        };
        (o.Defaults = { animateOut: !1, animateIn: !1 }),
          (o.prototype.swap = function () {
            if (
              1 === this.core.settings.items &&
              t.support.animation &&
              t.support.transition
            ) {
              this.core.speed(0);
              var e,
                i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                a = this.core.settings.animateOut;
              this.core.current() !== this.previous &&
                (a &&
                  ((e =
                    this.core.coordinates(this.previous) -
                    this.core.coordinates(this.next)),
                  n
                    .one(t.support.animation.end, i)
                    .css({ left: e + "px" })
                    .addClass("animated owl-animated-out")
                    .addClass(a)),
                s &&
                  o
                    .one(t.support.animation.end, i)
                    .addClass("animated owl-animated-in")
                    .addClass(s));
            }
          }),
          (o.prototype.clear = function (e) {
            t(e.target)
              .css({ left: "" })
              .removeClass("animated owl-animated-out owl-animated-in")
              .removeClass(this.core.settings.animateIn)
              .removeClass(this.core.settings.animateOut),
              this.core.onTransitionEnd();
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        var o = function (e) {
          (this._core = e),
            (this._interval = null),
            (this._paused = !1),
            (this._handlers = {
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "settings" === t.property.name &&
                  (this._core.settings.autoplay ? this.play() : this.stop());
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play();
              }, this),
              "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i);
              }, this),
              "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop();
              }, this),
              "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = t.extend({}, o.Defaults, this._core.options));
        };
        (o.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
          (o.prototype.play = function (n, o) {
            (this._paused = !1),
              this._core.is("rotating") ||
                (this._core.enter("rotating"),
                (this._interval = e.setInterval(
                  t.proxy(function () {
                    this._paused ||
                      this._core.is("busy") ||
                      this._core.is("interacting") ||
                      i.hidden ||
                      this._core.next(o || this._core.settings.autoplaySpeed);
                  }, this),
                  n || this._core.settings.autoplayTimeout
                )));
          }),
          (o.prototype.stop = function () {
            this._core.is("rotating") &&
              (e.clearInterval(this._interval), this._core.leave("rotating"));
          }),
          (o.prototype.pause = function () {
            this._core.is("rotating") && (this._paused = !0);
          }),
          (o.prototype.destroy = function () {
            var t, e;
            this.stop();
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        "use strict";
        var o = function (e) {
          (this._core = e),
            (this._initialized = !1),
            (this._pages = []),
            (this._controls = {}),
            (this._templates = []),
            (this.$element = this._core.$element),
            (this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to,
            }),
            (this._handlers = {
              "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.push(
                    '<div class="' +
                      this._core.settings.dotClass +
                      '">' +
                      t(e.content)
                        .find("[data-dot]")
                        .andSelf("[data-dot]")
                        .attr("data-dot") +
                      "</div>"
                  );
              }, this),
              "added.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 0, this._templates.pop());
              }, this),
              "remove.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 1);
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw();
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  !this._initialized &&
                  (this._core.trigger("initialize", null, "navigation"),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  (this._initialized = !0),
                  this._core.trigger("initialized", null, "navigation"));
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._initialized &&
                  (this._core.trigger("refresh", null, "navigation"),
                  this.update(),
                  this.draw(),
                  this._core.trigger("refreshed", null, "navigation"));
              }, this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this.$element.on(this._handlers);
        };
        (o.Defaults = {
          nav: !1,
          navText: ["prev", "next"],
          navSpeed: !1,
          navElement: "div",
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
        }),
          (o.prototype.initialize = function () {
            var e,
              i = this._core.settings;
            (this._controls.$relative = (
              i.navContainer
                ? t(i.navContainer)
                : t("<div>")
                    .addClass(i.navContainerClass)
                    .appendTo(this.$element)
            ).addClass("disabled")),
              (this._controls.$previous = t("<" + i.navElement + ">")
                .addClass(i.navClass[0])
                .html(i.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.prev(i.navSpeed);
                  }, this)
                )),
              (this._controls.$next = t("<" + i.navElement + ">")
                .addClass(i.navClass[1])
                .html(i.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.next(i.navSpeed);
                  }, this)
                )),
              i.dotsData ||
                (this._templates = [
                  t("<div>")
                    .addClass(i.dotClass)
                    .append(t("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                i.dotsContainer
                  ? t(i.dotsContainer)
                  : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "div",
                t.proxy(function (e) {
                  var n = t(e.target).parent().is(this._controls.$absolute)
                    ? t(e.target).index()
                    : t(e.target).parent().index();
                  e.preventDefault(), this.to(n, i.dotsSpeed);
                }, this)
              );
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
          }),
          (o.prototype.destroy = function () {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (o.prototype.update = function () {
            var t,
              e,
              i,
              n = this._core.clones().length / 2,
              o = n + this._core.items().length,
              s = this._core.maximum(!0),
              a = this._core.settings,
              r =
                a.center || a.autoWidth || a.dotsData
                  ? 1
                  : a.dotsEach || a.items;
            if (
              ("page" !== a.slideBy &&
                (a.slideBy = Math.min(a.slideBy, a.items)),
              a.dots || "page" == a.slideBy)
            )
              for (this._pages = [], t = n, e = 0, i = 0; t < o; t++) {
                if (e >= r || 0 === e) {
                  if (
                    (this._pages.push({
                      start: Math.min(s, t - n),
                      end: t - n + r - 1,
                    }),
                    Math.min(s, t - n) === s)
                  )
                    break;
                  (e = 0), ++i;
                }
                e += this._core.mergers(this._core.relative(t));
              }
          }),
          (o.prototype.draw = function () {
            var e,
              i = this._core.settings,
              n = this._core.items().length <= i.items,
              o = this._core.relative(this._core.current()),
              s = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n),
              i.nav &&
                (this._controls.$previous.toggleClass(
                  "disabled",
                  !s && o <= this._core.minimum(!0)
                ),
                this._controls.$next.toggleClass(
                  "disabled",
                  !s && o >= this._core.maximum(!0)
                )),
              this._controls.$absolute.toggleClass("disabled", !i.dots || n),
              i.dots &&
                ((e =
                  this._pages.length -
                  this._controls.$absolute.children().length),
                i.dotsData && 0 !== e
                  ? this._controls.$absolute.html(this._templates.join(""))
                  : e > 0
                  ? this._controls.$absolute.append(
                      new Array(e + 1).join(this._templates[0])
                    )
                  : e < 0 &&
                    this._controls.$absolute.children().slice(e).remove(),
                this._controls.$absolute.find(".active").removeClass("active"),
                this._controls.$absolute
                  .children()
                  .eq(t.inArray(this.current(), this._pages))
                  .addClass("active"));
          }),
          (o.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
              index: t.inArray(this.current(), this._pages),
              count: this._pages.length,
              size:
                i &&
                (i.center || i.autoWidth || i.dotsData
                  ? 1
                  : i.dotsEach || i.items),
            };
          }),
          (o.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t
              .grep(
                this._pages,
                t.proxy(function (t, i) {
                  return t.start <= e && t.end >= e;
                }, this)
              )
              .pop();
          }),
          (o.prototype.getPosition = function (e) {
            var i,
              n,
              o = this._core.settings;
            return (
              "page" == o.slideBy
                ? ((i = t.inArray(this.current(), this._pages)),
                  (n = this._pages.length),
                  e ? ++i : --i,
                  (i = this._pages[((i % n) + n) % n].start))
                : ((i = this._core.relative(this._core.current())),
                  (n = this._core.items().length),
                  e ? (i += o.slideBy) : (i -= o.slideBy)),
              i
            );
          }),
          (o.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
          }),
          (o.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
          }),
          (o.prototype.to = function (e, i, n) {
            var o;
            n
              ? t.proxy(this._overrides.to, this._core)(e, i)
              : ((o = this._pages.length),
                t.proxy(this._overrides.to, this._core)(
                  this._pages[((e % o) + o) % o].start,
                  i
                ));
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        "use strict";
        var o = function (i) {
          (this._core = i),
            (this._hashes = {}),
            (this.$element = this._core.$element),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace &&
                  "URLHash" === this._core.settings.startPosition &&
                  t(e).trigger("hashchange.owl.navigation");
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content)
                    .find("[data-hash]")
                    .andSelf("[data-hash]")
                    .attr("data-hash");
                  if (!i) return;
                  this._hashes[i] = e.content;
                }
              }, this),
              "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                  var n = this._core.items(
                      this._core.relative(this._core.current())
                    ),
                    o = t
                      .map(this._hashes, function (t, e) {
                        return t === n ? e : null;
                      })
                      .join();
                  if (!o || e.location.hash.slice(1) === o) return;
                  e.location.hash = o;
                }
              }, this),
            }),
            (this._core.options = t.extend({}, o.Defaults, this._core.options)),
            this.$element.on(this._handlers),
            t(e).on(
              "hashchange.owl.navigation",
              t.proxy(function (t) {
                var i = e.location.hash.substring(1),
                  n = this._core.$stage.children(),
                  o = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== o &&
                  o !== this._core.current() &&
                  this._core.to(this._core.relative(o), !1, !0);
              }, this)
            );
        };
        (o.Defaults = { URLhashListener: !1 }),
          (o.prototype.destroy = function () {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers)
              this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this))
              "function" != typeof this[n] && (this[n] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, n) {
        function o(e, i) {
          var o = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
          return (
            t.each((e + " " + r.join(s + " ") + s).split(" "), function (t, e) {
              if (a[e] !== n) return (o = !i || e), !1;
            }),
            o
          );
        }
        function s(t) {
          return o(t, !0);
        }
        var a = t("<support>").get(0).style,
          r = "Webkit Moz O ms".split(" "),
          l = {
            transition: {
              end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend",
              },
            },
            animation: {
              end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend",
              },
            },
          },
          c = {
            csstransforms: function () {
              return !!o("transform");
            },
            csstransforms3d: function () {
              return !!o("perspective");
            },
            csstransitions: function () {
              return !!o("transition");
            },
            cssanimations: function () {
              return !!o("animation");
            },
          };
        c.csstransitions() &&
          ((t.support.transition = new String(s("transition"))),
          (t.support.transition.end = l.transition.end[t.support.transition])),
          c.cssanimations() &&
            ((t.support.animation = new String(s("animation"))),
            (t.support.animation.end = l.animation.end[t.support.animation])),
          c.csstransforms() &&
            ((t.support.transform = new String(s("transform"))),
            (t.support.transform3d = c.csstransforms3d()));
      })(window.Zepto || window.jQuery, window, document);
  },
  function (t, e) {
    !(function (t, e) {
      "use strict";
      var i = (function () {
        var i = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows",
          },
          n = (function () {
            var e = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
              navigator.userAgent
            );
            return (
              e && t("html").css("cursor", "pointer").on("click", t.noop), e
            );
          })(),
          o = (function () {
            var t = document.documentElement.style;
            return (
              "behavior" in t &&
              "fill" in t &&
              /iemobile/i.test(navigator.userAgent)
            );
          })(),
          s = (function () {
            return !!e.PointerEvent;
          })(),
          a = function (t, e, n) {
            var o,
              s = i.menuClass;
            e.cssArrows && (s += " " + i.menuArrowClass),
              (o = n ? "addClass" : "removeClass"),
              t[o](s);
          },
          r = function (e, n) {
            return e
              .find("li." + n.pathClass)
              .slice(0, n.pathLevels)
              .addClass(n.hoverClass + " " + i.bcClass)
              .filter(function () {
                return t(this).children(n.popUpSelector).hide().show().length;
              })
              .removeClass(n.pathClass);
          },
          l = function (t, e) {
            var n = e ? "addClass" : "removeClass";
            t.children("a")[n](i.anchorClass);
          },
          c = function (t) {
            var e = t.css("ms-touch-action"),
              i = t.css("touch-action");
            (i = i || e),
              (i = "pan-y" === i ? "auto" : "pan-y"),
              t.css({ "ms-touch-action": i, "touch-action": i });
          },
          d = function (t) {
            return t.closest("." + i.menuClass);
          },
          h = function (t) {
            return d(t).data("sfOptions");
          },
          u = function () {
            var e = t(this),
              i = h(e);
            clearTimeout(i.sfTimer),
              e.siblings().superfish("hide").end().superfish("show");
          },
          p = function (e) {
            (e.retainPath = t.inArray(this[0], e.$path) > -1),
              this.superfish("hide"),
              this.parents("." + e.hoverClass).length ||
                (e.onIdle.call(d(this)),
                e.$path.length && t.proxy(u, e.$path)());
          },
          f = function () {
            var e = t(this),
              i = h(e);
            n
              ? t.proxy(p, e, i)()
              : (clearTimeout(i.sfTimer),
                (i.sfTimer = setTimeout(t.proxy(p, e, i), i.delay)));
          },
          g = function (e) {
            var i = t(this),
              n = h(i),
              o = i.siblings(e.data.popUpSelector);
            if (!1 === n.onHandleTouch.call(o)) return this;
            o.length > 0 &&
              o.is(":hidden") &&
              (i.one("click.superfish", !1),
              "MSPointerDown" === e.type || "pointerdown" === e.type
                ? i.trigger("focus")
                : t.proxy(u, i.parent("li"))());
          },
          m = function (e, i) {
            var a = "li:has(" + i.popUpSelector + ")";
            t.fn.hoverIntent && !i.disableHI
              ? e.hoverIntent(u, f, a)
              : e
                  .on("mouseenter.superfish", a, u)
                  .on("mouseleave.superfish", a, f);
            var r = "MSPointerDown.superfish";
            s && (r = "pointerdown.superfish"),
              n || (r += " touchend.superfish"),
              o && (r += " mousedown.superfish"),
              e
                .on("focusin.superfish", "li", u)
                .on("focusout.superfish", "li", f)
                .on(r, "a", i, g);
          };
        return {
          hide: function (e) {
            if (this.length) {
              var i = this,
                n = h(i);
              if (!n) return this;
              var o = !0 === n.retainPath ? n.$path : "",
                s = i
                  .find("li." + n.hoverClass)
                  .add(this)
                  .not(o)
                  .removeClass(n.hoverClass)
                  .children(n.popUpSelector),
                a = n.speedOut;
              if (
                (e && (s.show(), (a = 0)),
                (n.retainPath = !1),
                !1 === n.onBeforeHide.call(s))
              )
                return this;
              "slide" === n.animationType
                ? s.stop(!0, !0).fadeOut(n.animationOut, function () {
                    var e = t(this);
                    n.onHide.call(e);
                  })
                : "fade" === n.animationType
                ? s.stop(!0, !0).fadeOut(n.animationOut, function () {
                    var e = t(this);
                    n.onHide.call(e);
                  })
                : "animateTransform" === n.animationType
                ? s.stop(!0, !0).hide(0, function () {
                    var e = t(this);
                    n.onHide.call(e);
                  })
                : "none" === n.animationType
                ? s.stop(!0, !0).hide(0, function () {
                    var e = t(this);
                    n.onShow.call(e);
                  })
                : s.stop(!0, !0).animate(n.animationOut, a, function () {
                    var e = t(this);
                    n.onHide.call(e);
                  });
            }
            return this;
          },
          show: function () {
            var e = h(this);
            if (!e) return this;
            var i = this.addClass(e.hoverClass),
              n = i.children(e.popUpSelector);
            return !1 === e.onBeforeShow.call(n)
              ? this
              : ("slide" === e.animationType
                  ? n.stop(!0, !0).slideDown(e.speed, function () {
                      var i = t(this);
                      e.onShow.call(i);
                    })
                  : "fade" === e.animationType
                  ? n.stop(!0, !0).fadeIn(e.speed, function () {
                      var i = t(this);
                      e.onShow.call(i);
                    })
                  : "animateTransform" === e.animationType
                  ? n
                      .stop(!0, !0)
                      .css({
                        display: "block",
                        transform: "translate(0, -10px)",
                        opacity: 0,
                      })
                      .transition(
                        { opacity: 1, y: 0 },
                        e.speed,
                        "ease",
                        function () {
                          var i = t(this);
                          e.onShow.call(i);
                        }
                      )
                  : "none" === e.animationType
                  ? n.stop(!0, !0).show(0, function () {
                      var i = t(this);
                      e.onShow.call(i);
                    })
                  : n.stop(!0, !0).animate(e.animation, e.speed, function () {
                      e.onShow.call(n);
                    }),
                this);
          },
          destroy: function () {
            return this.each(function () {
              var e,
                n = t(this),
                o = n.data("sfOptions");
              if (!o) return !1;
              (e = n.find(o.popUpSelector).parent("li")),
                clearTimeout(o.sfTimer),
                a(n, o),
                l(e),
                c(n),
                n.off(".superfish").off(".hoverIntent"),
                e.children(o.popUpSelector).attr("style", function (t, e) {
                  return e.replace(/display[^;]+;?/g, "");
                }),
                o.$path
                  .removeClass(o.hoverClass + " " + i.bcClass)
                  .addClass(o.pathClass),
                n.find("." + o.hoverClass).removeClass(o.hoverClass),
                o.onDestroy.call(n),
                n.removeData("sfOptions");
            });
          },
          init: function (e) {
            return this.each(function () {
              var n = t(this);
              if (n.data("sfOptions")) return !1;
              var o = t.extend({}, t.fn.superfish.defaults, e),
                s = n.find(o.popUpSelector).parent("li");
              (o.$path = r(n, o)),
                n.data("sfOptions", o),
                a(n, o, !0),
                l(s, !0),
                c(n),
                m(n, o),
                s.not("." + i.bcClass).superfish("hide", !0),
                o.onInit.call(this);
            });
          },
        };
      })();
      (t.fn.superfish = function (e, n) {
        return i[e]
          ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? t.error("Method " + e + " does not exist on jQuery.fn.superfish")
          : i.init.apply(this, arguments);
      }),
        (t.fn.superfish.defaults = {
          popUpSelector: "ul,.sf-mega",
          hoverClass: "sfHover",
          pathClass: "overrideThisToUse",
          pathLevels: 1,
          delay: 800,
          animationType: "animate",
          animation: { opacity: "show" },
          animationOut: { opacity: "hide" },
          speed: "normal",
          speedOut: "fast",
          cssArrows: !0,
          disableHI: !1,
          onInit: t.noop,
          onBeforeShow: t.noop,
          onShow: t.noop,
          onBeforeHide: t.noop,
          onHide: t.noop,
          onIdle: t.noop,
          onDestroy: t.noop,
          onHandleTouch: t.noop,
        });
    })(jQuery, window);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      t.fn.theiaStickySidebar = function (e) {
        function i(e, i) {
          return (
            !0 === e.initialized ||
            (!(t("body").width() < e.minWidth) && (n(e, i), !0))
          );
        }
        function n(e, i) {
          (e.initialized = !0),
            t("head").append(
              t(
                '<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
              )
            ),
            i.each(function () {
              function i() {
                (o.fixedScrollTop = 0),
                  o.sidebar.css({ "min-height": "1px" }),
                  o.stickySidebar.css({ position: "static", width: "" });
              }
              function n(e) {
                var i = e.height();
                return (
                  e.children().each(function () {
                    i = Math.max(i, t(this).height());
                  }),
                  i
                );
              }
              var o = {};
              (o.sidebar = t(this)),
                (o.options = e || {}),
                (o.container = t(o.options.containerSelector)),
                0 == o.container.size() && (o.container = o.sidebar.parent()),
                o.sidebar.parents().css("-webkit-transform", "none"),
                o.sidebar.css({
                  position: "relative",
                  overflow: "visible",
                  "-webkit-box-sizing": "border-box",
                  "-moz-box-sizing": "border-box",
                  "box-sizing": "border-box",
                }),
                (o.stickySidebar = o.sidebar.find(".theiaStickySidebar")),
                0 == o.stickySidebar.length &&
                  (o.sidebar.find("script").remove(),
                  (o.stickySidebar = t("<div>").addClass("theiaStickySidebar")),
                  t(o.sidebar.children(e.wrap)).each(function (i, n) {
                    t(n).is(e.exclude) || o.stickySidebar.append(n);
                  }),
                  o.sidebar.append(
                    t("<div>")
                      .addClass("jegStickyHolder")
                      .append(o.stickySidebar)
                  )),
                (o.marginTop = parseInt(o.sidebar.css("margin-top"))),
                (o.marginBottom = parseInt(o.sidebar.css("margin-bottom"))),
                (o.paddingTop = parseInt(o.sidebar.css("padding-top"))),
                (o.paddingBottom = parseInt(o.sidebar.css("padding-bottom")));
              var a = o.stickySidebar.offset().top,
                r = o.stickySidebar.outerHeight();
              o.stickySidebar.css("padding-top", 1),
                o.stickySidebar.css("padding-bottom", 1),
                (a -= o.stickySidebar.offset().top),
                (r = o.stickySidebar.outerHeight() - r - a),
                0 == a
                  ? (o.stickySidebar.css("padding-top", 0),
                    (o.stickySidebarPaddingTop = 0))
                  : (o.stickySidebarPaddingTop = 1),
                0 == r
                  ? (o.stickySidebar.css("padding-bottom", 0),
                    (o.stickySidebarPaddingBottom = 0))
                  : (o.stickySidebarPaddingBottom = 1),
                (o.previousScrollTop = null),
                (o.fixedScrollTop = 0),
                i(),
                (o.onScroll = function (o) {
                  if (e.active) {
                    if (!o.stickySidebar.is(":visible")) return;
                    if (t("body").width() < o.options.minWidth) return void i();
                    if (o.sidebar.outerWidth(!0) + 50 > o.container.width())
                      return void i();
                    var s = t(document).scrollTop(),
                      a = "static";
                    if (
                      s >=
                      o.container.offset().top +
                        (o.paddingTop +
                          o.marginTop -
                          o.options.additionalMarginTop)
                    ) {
                      var r,
                        l = o.paddingTop + o.marginTop + e.additionalMarginTop,
                        c =
                          o.paddingBottom +
                          o.marginBottom +
                          e.additionalMarginBottom,
                        d = o.container.offset().top,
                        h = o.container.offset().top + n(o.container),
                        u = 0 + e.additionalMarginTop;
                      r =
                        o.stickySidebar.outerHeight() + l + c <
                        t(window).height()
                          ? u + o.stickySidebar.outerHeight()
                          : t(window).height() -
                            o.marginBottom -
                            o.paddingBottom -
                            e.additionalMarginBottom;
                      var p = d - s + o.paddingTop + o.marginTop,
                        f = h - s - o.paddingBottom - o.marginBottom,
                        g = o.stickySidebar.offset().top - s,
                        m = o.previousScrollTop - s;
                      "fixed" == o.stickySidebar.css("position") &&
                        "modern" == o.options.sidebarBehavior &&
                        (g += m),
                        "legacy" == o.options.sidebarBehavior &&
                          ((g = r - o.stickySidebar.outerHeight()),
                          (g = Math.max(g, r - o.stickySidebar.outerHeight()))),
                        (g =
                          m > 0
                            ? Math.min(g, u)
                            : Math.max(g, r - o.stickySidebar.outerHeight())),
                        (g = Math.max(g, p)),
                        (g = Math.min(g, f - o.stickySidebar.outerHeight()));
                      var _ =
                        o.container.height() == o.stickySidebar.outerHeight();
                      a =
                        (_ || g != u) &&
                        (_ || g != r - o.stickySidebar.outerHeight())
                          ? s + g - o.sidebar.offset().top - o.paddingTop <=
                            e.additionalMarginTop
                            ? "static"
                            : "absolute"
                          : "fixed";
                    }
                  } else a = "static";
                  if ("fixed" == a)
                    o.stickySidebar.css({
                      position: "fixed",
                      width: o.sidebar.width(),
                      top: g,
                      left:
                        o.sidebar.offset().left +
                        parseInt(o.sidebar.css("padding-left")),
                    });
                  else if ("absolute" == a) {
                    var v = {};
                    "absolute" != o.stickySidebar.css("position") &&
                      ((v.position = "absolute"),
                      (v.top =
                        s +
                        g -
                        o.sidebar.offset().top -
                        o.stickySidebarPaddingTop -
                        o.stickySidebarPaddingBottom)),
                      (v.width = o.sidebar.width()),
                      (v.left = ""),
                      o.stickySidebar.css(v);
                  } else "static" == a && i();
                  "static" != a &&
                    1 == o.options.updateSidebarHeight &&
                    o.sidebar.css({
                      "min-height":
                        o.stickySidebar.outerHeight() +
                        o.stickySidebar.offset().top -
                        o.sidebar.offset().top +
                        o.paddingBottom,
                    }),
                    (o.previousScrollTop = s);
                }),
                o.onScroll(o),
                t(document).scroll(
                  (function (t) {
                    return function () {
                      t.onScroll(t);
                    };
                  })(o)
                ),
                t(window).resize(
                  (function (t) {
                    return function () {
                      t.stickySidebar.css({ position: "static" }),
                        t.onScroll(t);
                    };
                  })(o)
                ),
                t(window).bind(
                  "jnews_additional_sticky_margin",
                  function (t, i) {
                    (e.additionalMarginTop = i + s),
                      (o.options.additionalMarginTop = i + s);
                  }
                );
            });
        }
        var o = {
          containerSelector: "",
          additionalMarginTop: 0,
          additionalMarginBottom: 0,
          updateSidebarHeight: !0,
          minWidth: 0,
          sidebarBehavior: "modern",
          wrap: "",
          exclude: ".elementor-element-overlay, .ui-resizable-handle",
          active: !0,
        };
        (e = t.extend(o, e)),
          (e.additionalMarginTop = parseInt(e.additionalMarginTop) || 0),
          (e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0);
        var s = e.additionalMarginTop;
        !(function (e, n) {
          i(e, n) ||
            (console.log(
              "TST: Body width smaller than options.minWidth. Init is delayed."
            ),
            t(document).scroll(
              (function (e, n) {
                return function (o) {
                  i(e, n) && t(this).unbind(o);
                };
              })(e, n)
            ),
            t(window).resize(
              (function (e, n) {
                return function (o) {
                  i(e, n) && t(this).unbind(o);
                };
              })(e, n)
            ));
        })(e, this),
          t(this).bind("theiaStickySidebarDeactivate", function () {
            e.active = !1;
          }),
          t(this).bind("theiaStickySidebarActivate", function () {
            e.active = !0;
          });
      };
    })(jQuery);
  },
  function (t, e) {
    !(function () {
      "use strict";
      function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element)
          throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler)
          throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
          (this.options = t.Adapter.extend({}, t.defaults, n)),
          (this.element = this.options.element),
          (this.adapter = new t.Adapter(this.element)),
          (this.callback = n.handler),
          (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
          (this.enabled = this.options.enabled),
          (this.triggerPoint = null),
          (this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis,
          })),
          (this.context = t.Context.findOrCreateByElement(
            this.options.context
          )),
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
          this.context.remove(this),
            this.group.remove(this),
            delete i[this.key];
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
          for (var n in i) e.push(i[n]);
          for (var o = 0, s = e.length; o < s; o++) e[o][t]();
        }),
        (t.destroyAll = function () {
          t.invokeAll("destroy");
        }),
        (t.disableAll = function () {
          t.invokeAll("disable");
        }),
        (t.enableAll = function () {
          t.Context.refreshAll();
          for (var e in i) i[e].enabled = !0;
          return this;
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
            (this.Adapter = o.Adapter),
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
            (n[t.waypointContextKey] = this),
            (i += 1),
            o.windowContext ||
              ((o.windowContext = !0), (o.windowContext = new e(window))),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler();
        }
        var i = 0,
          n = {},
          o = window.Waypoint,
          s = window.onload;
        (e.prototype.add = function (t) {
          var e = t.options.horizontal ? "horizontal" : "vertical";
          (this.waypoints[e][t.key] = t), this.refresh();
        }),
          (e.prototype.checkEmpty = function () {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
              e = this.Adapter.isEmptyObject(this.waypoints.vertical),
              i = this.element == this.element.window;
            t &&
              e &&
              !i &&
              (this.adapter.off(".waypoints"), delete n[this.key]);
          }),
          (e.prototype.createThrottledResizeHandler = function () {
            function t() {
              e.handleResize(), (e.didResize = !1);
            }
            var e = this;
            this.adapter.on("resize.waypoints", function () {
              e.didResize || ((e.didResize = !0), o.requestAnimationFrame(t));
            });
          }),
          (e.prototype.createThrottledScrollHandler = function () {
            function t() {
              e.handleScroll(), (e.didScroll = !1);
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function () {
              (e.didScroll && !o.isTouch) ||
                ((e.didScroll = !0), o.requestAnimationFrame(t));
            });
          }),
          (e.prototype.handleResize = function () {
            o.Context.refreshAll();
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
              var n = e[i],
                o = n.newScroll > n.oldScroll,
                s = o ? n.forward : n.backward;
              for (var a in this.waypoints[i]) {
                var r = this.waypoints[i][a];
                if (null !== r.triggerPoint) {
                  var l = n.oldScroll < r.triggerPoint,
                    c = n.newScroll >= r.triggerPoint,
                    d = l && c,
                    h = !l && !c;
                  (d || h) && (r.queueTrigger(s), (t[r.group.id] = r.group));
                }
              }
            }
            for (var u in t) t[u].flushTriggers();
            this.oldScroll = {
              x: e.horizontal.newScroll,
              y: e.vertical.newScroll,
            };
          }),
          (e.prototype.innerHeight = function () {
            return this.element == this.element.window
              ? o.viewportHeight()
              : this.adapter.innerHeight();
          }),
          (e.prototype.remove = function (t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty();
          }),
          (e.prototype.innerWidth = function () {
            return this.element == this.element.window
              ? o.viewportWidth()
              : this.adapter.innerWidth();
          }),
          (e.prototype.destroy = function () {
            var t = [];
            for (var e in this.waypoints)
              for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, o = t.length; n < o; n++) t[n].destroy();
          }),
          (e.prototype.refresh = function () {
            var t,
              e = this.element == this.element.window,
              i = e ? void 0 : this.adapter.offset(),
              n = {};
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
            for (var s in t) {
              var a = t[s];
              for (var r in this.waypoints[s]) {
                var l,
                  c,
                  d,
                  h,
                  u,
                  p = this.waypoints[s][r],
                  f = p.options.offset,
                  g = p.triggerPoint,
                  m = 0,
                  _ = null == g;
                p.element !== p.element.window &&
                  (m = p.adapter.offset()[a.offsetProp]),
                  "function" == typeof f
                    ? (f = f.apply(p))
                    : "string" == typeof f &&
                      ((f = parseFloat(f)),
                      p.options.offset.indexOf("%") > -1 &&
                        (f = Math.ceil((a.contextDimension * f) / 100))),
                  (l = a.contextScroll - a.contextOffset),
                  (p.triggerPoint = Math.floor(m + l - f)),
                  (c = g < a.oldScroll),
                  (d = p.triggerPoint >= a.oldScroll),
                  (h = c && d),
                  (u = !c && !d),
                  !_ && h
                    ? (p.queueTrigger(a.backward), (n[p.group.id] = p.group))
                    : !_ && u
                    ? (p.queueTrigger(a.forward), (n[p.group.id] = p.group))
                    : _ &&
                      a.oldScroll >= p.triggerPoint &&
                      (p.queueTrigger(a.forward), (n[p.group.id] = p.group));
              }
            }
            return (
              o.requestAnimationFrame(function () {
                for (var t in n) n[t].flushTriggers();
              }),
              this
            );
          }),
          (e.findOrCreateByElement = function (t) {
            return e.findByElement(t) || new e(t);
          }),
          (e.refreshAll = function () {
            for (var t in n) n[t].refresh();
          }),
          (e.findByElement = function (t) {
            return n[t.waypointContextKey];
          }),
          (window.onload = function () {
            s && s(), e.refreshAll();
          }),
          (o.requestAnimationFrame = function (e) {
            (
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              t
            ).call(window, e);
          }),
          (o.Context = e);
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
            (n[this.axis][this.name] = this);
        }
        var n = { vertical: {}, horizontal: {} },
          o = window.Waypoint;
        (i.prototype.add = function (t) {
          this.waypoints.push(t);
        }),
          (i.prototype.clearTriggerQueues = function () {
            this.triggerQueues = { up: [], down: [], left: [], right: [] };
          }),
          (i.prototype.flushTriggers = function () {
            for (var i in this.triggerQueues) {
              var n = this.triggerQueues[i],
                o = "up" === i || "left" === i;
              n.sort(o ? e : t);
              for (var s = 0, a = n.length; s < a; s += 1) {
                var r = n[s];
                (r.options.continuous || s === n.length - 1) && r.trigger([i]);
              }
            }
            this.clearTriggerQueues();
          }),
          (i.prototype.next = function (e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints);
            return i === this.waypoints.length - 1
              ? null
              : this.waypoints[i + 1];
          }),
          (i.prototype.previous = function (e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null;
          }),
          (i.prototype.queueTrigger = function (t, e) {
            this.triggerQueues[e].push(t);
          }),
          (i.prototype.remove = function (t) {
            var e = o.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1);
          }),
          (i.prototype.first = function () {
            return this.waypoints[0];
          }),
          (i.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1];
          }),
          (i.findOrCreate = function (t) {
            return n[t.axis][t.name] || new i(t);
          }),
          (o.Group = i);
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
          e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
            t[n] = e[n];
          }),
          i.adapters.push({ name: "jquery", Adapter: t }),
          (i.Adapter = t);
      })(),
      (function () {
        "use strict";
        function t(t) {
          return function () {
            var i = [],
              n = arguments[0];
            return (
              t.isFunction(arguments[0]) &&
                ((n = t.extend({}, arguments[1])), (n.handler = arguments[0])),
              this.each(function () {
                var o = t.extend({}, n, { element: this });
                "string" == typeof o.context &&
                  (o.context = t(this).closest(o.context)[0]),
                  i.push(new e(o));
              }),
              i
            );
          };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
          window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
      })();
  },
  function (t, e, i) {
    var n, o, s;
    !(function (a) {
      "use strict";
      (o = [i(0)]),
        (n = a),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(function (t) {
      "use strict";
      function e(e) {
        return (
          !e.nodeName ||
          -1 !==
            t.inArray(e.nodeName.toLowerCase(), [
              "iframe",
              "#document",
              "html",
              "body",
            ])
        );
      }
      function i(e) {
        return t.isFunction(e) || t.isPlainObject(e) ? e : { top: e, left: e };
      }
      var n = (t.scrollTo = function (e, i, n) {
        return t(window).scrollTo(e, i, n);
      });
      return (
        (n.defaults = { axis: "xy", duration: 0, limit: !0 }),
        (t.fn.scrollTo = function (o, s, a) {
          "object" == typeof s && ((a = s), (s = 0)),
            "function" == typeof a && (a = { onAfter: a }),
            "max" === o && (o = 9e9),
            (a = t.extend({}, n.defaults, a)),
            (s = s || a.duration);
          var r = a.queue && a.axis.length > 1;
          return (
            r && (s /= 2),
            (a.offset = i(a.offset)),
            (a.over = i(a.over)),
            this.each(function () {
              function l(e) {
                var i = t.extend({}, a, {
                  queue: !0,
                  duration: s,
                  complete:
                    e &&
                    function () {
                      e.call(h, p, a);
                    },
                });
                u.animate(f, i);
              }
              if (null !== o) {
                var c,
                  d = e(this),
                  h = d ? this.contentWindow || window : this,
                  u = t(h),
                  p = o,
                  f = {};
                switch (typeof p) {
                  case "number":
                  case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                      p = i(p);
                      break;
                    }
                    p = d ? t(p) : t(p, h);
                  case "object":
                    if (0 === p.length) return;
                    (p.is || p.style) && (c = (p = t(p)).offset());
                }
                var g = (t.isFunction(a.offset) && a.offset(h, p)) || a.offset;
                t.each(a.axis.split(""), function (t, e) {
                  var i = "x" === e ? "Left" : "Top",
                    o = i.toLowerCase(),
                    s = "scroll" + i,
                    m = u[s](),
                    _ = n.max(h, e);
                  if (c)
                    (f[s] = c[o] + (d ? 0 : m - u.offset()[o])),
                      a.margin &&
                        ((f[s] -= parseInt(p.css("margin" + i), 10) || 0),
                        (f[s] -=
                          parseInt(p.css("border" + i + "Width"), 10) || 0)),
                      (f[s] += g[o] || 0),
                      a.over[o] &&
                        (f[s] +=
                          p["x" === e ? "width" : "height"]() * a.over[o]);
                  else {
                    var v = p[o];
                    f[s] =
                      v.slice && "%" === v.slice(-1)
                        ? (parseFloat(v) / 100) * _
                        : v;
                  }
                  a.limit &&
                    /^\d+$/.test(f[s]) &&
                    (f[s] = f[s] <= 0 ? 0 : Math.min(f[s], _)),
                    !t &&
                      a.axis.length > 1 &&
                      (m === f[s]
                        ? (f = {})
                        : r && (l(a.onAfterFirst), (f = {})));
                }),
                  l(a.onAfter);
              }
            })
          );
        }),
        (n.max = function (i, n) {
          var o = "x" === n ? "Width" : "Height",
            s = "scroll" + o;
          if (!e(i)) return i[s] - t(i)[o.toLowerCase()]();
          var a = "client" + o,
            r = i.ownerDocument || i.document,
            l = r.documentElement,
            c = r.body;
          return Math.max(l[s], c[s]) - Math.min(l[a], c[a]);
        }),
        (t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop =
          {
            get: function (e) {
              return t(e.elem)[e.prop]();
            },
            set: function (e) {
              var i = this.get(e);
              if (e.options.interrupt && e._last && e._last !== i)
                return t(e.elem).stop();
              var n = Math.round(e.now);
              i !== n && (t(e.elem)[e.prop](n), (e._last = this.get(e)));
            },
          }),
        n
      );
    });
  },
  function (t, e) {
    !(function (t) {
      var e = t(window),
        i = e.height();
      e.resize(function () {
        i = e.height();
      }),
        (t.fn.parallax = function (n, o, s) {
          function a() {
            var s = e.scrollTop();
            c.each(function () {
              var e = t(this),
                a = e.offset().top;
              a + r(e) < s ||
                a > s + i ||
                c.css(
                  "backgroundPosition",
                  n + " " + Math.round((l - s) * o) + "px"
                );
            });
          }
          var r,
            l,
            c = t(this);
          c.each(function () {
            l = c.offset().top;
          }),
            (r = s
              ? function (t) {
                  return t.outerHeight(!0);
                }
              : function (t) {
                  return t.height();
                }),
            (arguments.length < 1 || null === n) && (n = "50%"),
            (arguments.length < 2 || null === o) && (o = 0.1),
            (arguments.length < 3 || null === s) && (s = !0),
            e.bind("scroll", a).resize(a),
            a();
        });
    })(jQuery);
  },
  function (t, e, i) {
    var n, o, s;
    !(function (a) {
      (o = [i(0)]),
        (n = a),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(function (t) {
      function e(e, n) {
        var o = this;
        (o.options = t.extend({}, i, n)),
          (o.navigation = t(e)),
          (o.document = t(document)),
          (o.window = t(window)),
          "" == o.options.parent &&
            (this.options.parent = this.navigation.parent()),
          (o.nav_open = !1),
          (o.parent_full_width = 0),
          (o.radCoef = 180 / Math.PI),
          (o.sTouch = { x: 0, y: 0 }),
          (o.cTouch = { x: 0, y: 0 }),
          (o.sTime = 0),
          (o.nav_position = 0),
          (o.percent_open = 0),
          (o.nav_moving = !1),
          o.init();
      }
      var i = {
        parent: "",
        toggle_icon_class: "okayNav__menu-toggle",
        toggle_icon_content: "<span /><span /><span />",
        align_right: !0,
        swipe_enabled: !0,
        threshold: 50,
        resize_delay: 10,
        beforeOpen: function () {},
        afterOpen: function () {},
        beforeClose: function () {},
        afterClose: function () {},
        itemHidden: function () {},
        itemDisplayed: function () {},
      };
      (e.prototype = {
        init: function () {
          var e = this;
          t("body").addClass("okayNav-loaded"),
            e.navigation
              .addClass("okayNav loaded")
              .children("ul")
              .addClass("okayNav__nav--visible"),
            e.options.align_right
              ? e.navigation
                  .append(
                    '<ul class="okayNav__nav--invisible transition-enabled nav-right" />'
                  )
                  .append(
                    '<a href="#" class="' +
                      e.options.toggle_icon_class +
                      ' okay-invisible">' +
                      e.options.toggle_icon_content +
                      "</a>"
                  )
              : e.navigation
                  .prepend(
                    '<ul class="okayNav__nav--invisible transition-enabled nav-left" />'
                  )
                  .prepend(
                    '<a href="#" class="' +
                      e.options.toggle_icon_class +
                      ' okay-invisible">' +
                      e.options.toggle_icon_content +
                      "</a>"
                  ),
            (e.nav_visible = e.navigation.children(".okayNav__nav--visible")),
            (e.nav_invisible = e.navigation.children(
              ".okayNav__nav--invisible"
            )),
            (e.toggle_icon = e.navigation.children(
              "." + e.options.toggle_icon_class
            )),
            (e.toggle_icon_width = e.toggle_icon.outerWidth(!0)),
            (e.default_width = e.getChildrenWidth(e.navigation)),
            (e.parent_full_width = t(e.options.parent).outerWidth(!0)),
            (e.last_visible_child_width = 0),
            e.initEvents(),
            e.nav_visible
              .contents()
              .filter(function () {
                return (this.nodeType =
                  Node.TEXT_NODE && !1 === /\S/.test(this.nodeValue));
              })
              .remove(),
            1 == e.options.swipe_enabled && e.initSwipeEvents();
        },
        initEvents: function () {
          var e = this;
          e.options.parent.on("click.okayNav", function (i) {
            var n = t(i.target);
            !0 === e.nav_open &&
              0 == n.closest(".okayNav").length &&
              e.closeInvisibleNav(),
              n.hasClass(e.options.toggle_icon_class) &&
                (i.preventDefault(), e.toggleInvisibleNav());
          }),
            t(document).on("mouseup.okayNav", function (i) {
              t(i.target);
              !t(i.target).parents(".okayNav").length > 0 &&
                e.closeInvisibleNav();
            });
          var i = e._debounce(function () {
            e.recalcNav();
          }, e.options.recalc_delay);
          e.window.on("load.okayNav ready.okayNav resize.okayNav", i),
            t(document).on("ready.okayNav", i),
            i();
        },
        initSwipeEvents: function () {
          var e = this;
          e.document
            .on("touchstart.okayNav", function (i) {
              if (
                (e.nav_invisible.removeClass("transition-enabled"),
                1 == i.originalEvent.touches.length)
              ) {
                var n = i.originalEvent.touches[0];
                ((n.pageX < 25 && 0 == e.options.align_right) ||
                  (n.pageX > t(e.options.parent).outerWidth(!0) - 25 &&
                    1 == e.options.align_right) ||
                  !0 === e.nav_open) &&
                  ((e.sTouch.x = e.cTouch.x = n.pageX),
                  (e.sTouch.y = e.cTouch.y = n.pageY),
                  (e.sTime = Date.now()));
              }
            })
            .on("touchmove.okayNav", function (t) {
              var i = t.originalEvent.touches[0];
              e._triggerMove(i.pageX, i.pageY), (e.nav_moving = !0);
            })
            .on("touchend.okayNav", function (t) {
              (e.sTouch = { x: 0, y: 0 }),
                (e.cTouch = { x: 0, y: 0 }),
                (e.sTime = 0),
                e.percent_open > 100 - e.options.threshold
                  ? ((e.nav_position = 0), e.closeInvisibleNav())
                  : 1 == e.nav_moving &&
                    ((e.nav_position = e.nav_invisible.width()),
                    e.openInvisibleNav()),
                (e.nav_moving = !1),
                e.nav_invisible.addClass("transition-enabled");
            });
        },
        _getDirection: function (t) {
          return this.options.align_right ? (t > 0 ? -1 : 1) : t < 0 ? -1 : 1;
        },
        _triggerMove: function (t, e) {
          var i = this;
          (i.cTouch.x = t), (i.cTouch.y = e);
          var n = Date.now(),
            o = i.cTouch.x - i.sTouch.x,
            s = i.cTouch.y - i.sTouch.y,
            a = s * s,
            r = Math.sqrt(o * o + a),
            l = Math.sqrt(a),
            c = Math.asin(Math.sin(l / r)) * i.radCoef;
          i.sTime;
          if (((i.sTouch.x = t), (i.sTouch.y = e), c < 20)) {
            var d = i._getDirection(o),
              h = i.nav_position + d * r,
              u = i.nav_invisible.width(),
              p = 0;
            h < 0 ? (p = -h) : h > u && (p = u - h);
            var f = u - (i.nav_position + d * r + p),
              g = (f / u) * 100;
            (i.nav_position += d * r + p), (i.percent_open = g);
          }
        },
        getParent: function () {
          return this.options.parent;
        },
        getVisibleNav: function () {
          return this.nav_visible;
        },
        getInvisibleNav: function () {
          return this.nav_invisible;
        },
        getNavToggleIcon: function () {
          return this.toggle_icon;
        },
        _debounce: function (t, e, i) {
          var n;
          return function () {
            var o = this,
              s = arguments,
              a = function () {
                (n = null), i || t.apply(o, s);
              },
              r = i && !n;
            clearTimeout(n), (n = setTimeout(a, e)), r && t.apply(o, s);
          };
        },
        openInvisibleNav: function () {
          var t = this;
          t.options.enable_swipe || t.options.beforeOpen.call(),
            t.toggle_icon.addClass("icon--active"),
            t.nav_invisible.addClass("nav-open"),
            (t.nav_open = !0),
            t.options.afterOpen.call();
        },
        closeInvisibleNav: function () {
          var t = this;
          t.options.enable_swipe || t.options.beforeClose.call(),
            t.toggle_icon.removeClass("icon--active"),
            t.nav_invisible.removeClass("nav-open"),
            (t.nav_open = !1),
            t.options.afterClose.call();
        },
        toggleInvisibleNav: function () {
          var t = this;
          t.nav_open ? t.closeInvisibleNav() : t.openInvisibleNav();
        },
        getChildrenWidth: function (e) {
          for (var i = 0, n = t(e).children(), o = 0; o < n.length; o++)
            i += t(n[o]).outerWidth(!0);
          return i;
        },
        getVisibleItemCount: function () {
          return t("li", this.nav_visible).length;
        },
        getHiddenItemCount: function () {
          return t("li", this.nav_invisible).length;
        },
        recalcNav: function () {
          var e = this,
            i = t(e.options.parent).outerWidth(!0),
            n = e.getChildrenWidth(e.options.parent),
            o = e.navigation.outerWidth(!0),
            s = e.getVisibleItemCount(),
            a = e.nav_visible.outerWidth(!0) + e.toggle_icon_width,
            r = n + e.last_visible_child_width + e.toggle_icon_width;
          if (i > n - o + e.default_width)
            return (
              e._expandAllItems(), void e.toggle_icon.addClass("okay-invisible")
            );
          s > 0 && o <= a && i <= r && e._collapseNavItem(),
            i > r + e.toggle_icon_width + 15 && e._expandNavItem(),
            0 == e.getHiddenItemCount()
              ? e.toggle_icon.addClass("okay-invisible")
              : e.toggle_icon.removeClass("okay-invisible");
        },
        _collapseNavItem: function () {
          var e = this,
            i = t("li:last-child", e.nav_visible);
          (e.last_visible_child_width = i.outerWidth(!0)),
            e.document.trigger("okayNav:collapseItem", i),
            i.detach().prependTo(e.nav_invisible),
            e.options.itemHidden.call(),
            e.recalcNav();
        },
        _expandNavItem: function () {
          var e = this,
            i = t("li:first-child", e.nav_invisible);
          e.document.trigger("okayNav:expandItem", i),
            i.detach().appendTo(e.nav_visible),
            e.options.itemDisplayed.call();
        },
        _expandAllItems: function () {
          var e = this;
          t("li", e.nav_invisible).detach().appendTo(e.nav_visible),
            e.options.itemDisplayed.call();
        },
        _collapseAllItems: function () {
          var e = this;
          t("li", e.nav_visible).detach().appendTo(e.nav_invisible),
            e.options.itemHidden.call();
        },
        destroy: function () {
          var e = this;
          t("li", e.nav_invisible).appendTo(e.nav_visible),
            e.nav_invisible.remove(),
            e.nav_visible.removeClass("okayNav__nav--visible"),
            e.toggle_icon.remove(),
            e.document.unbind(".okayNav"),
            e.window.unbind(".okayNav");
        },
      }),
        (t.fn.okayNav = function (i) {
          var n = arguments;
          if (void 0 === i || "object" == typeof i)
            return this.each(function () {
              t.data(this, "plugin_okayNav") ||
                t.data(this, "plugin_okayNav", new e(this, i));
            });
          if ("string" == typeof i && "_" !== i[0] && "init" !== i) {
            var o;
            return (
              this.each(function () {
                var s = t.data(this, "plugin_okayNav");
                s instanceof e &&
                  "function" == typeof s[i] &&
                  (o = s[i].apply(s, Array.prototype.slice.call(n, 1))),
                  "destroy" === i && t.data(this, "plugin_okayNav", null);
              }),
              void 0 !== o ? o : this
            );
          }
        });
    });
  },
  function (t, e, i) {
    var n, o, s;
    !(function (a) {
      (o = [i(0)]),
        (n = a),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(function (t) {
      function e(e) {
        var a = e || window.event,
          r = l.call(arguments, 1),
          c = 0,
          h = 0,
          u = 0,
          p = 0,
          f = 0,
          g = 0;
        if (
          ((e = t.event.fix(a)),
          (e.type = "mousewheel"),
          "detail" in a && (u = -1 * a.detail),
          "wheelDelta" in a && (u = a.wheelDelta),
          "wheelDeltaY" in a && (u = a.wheelDeltaY),
          "wheelDeltaX" in a && (h = -1 * a.wheelDeltaX),
          "axis" in a &&
            a.axis === a.HORIZONTAL_AXIS &&
            ((h = -1 * u), (u = 0)),
          (c = 0 === u ? h : u),
          "deltaY" in a && ((u = -1 * a.deltaY), (c = u)),
          "deltaX" in a && ((h = a.deltaX), 0 === u && (c = -1 * h)),
          0 !== u || 0 !== h)
        ) {
          if (1 === a.deltaMode) {
            var m = t.data(this, "mousewheel-line-height");
            (c *= m), (u *= m), (h *= m);
          } else if (2 === a.deltaMode) {
            var _ = t.data(this, "mousewheel-page-height");
            (c *= _), (u *= _), (h *= _);
          }
          if (
            ((p = Math.max(Math.abs(u), Math.abs(h))),
            (!s || p < s) && ((s = p), n(a, p) && (s /= 40)),
            n(a, p) && ((c /= 40), (h /= 40), (u /= 40)),
            (c = Math[c >= 1 ? "floor" : "ceil"](c / s)),
            (h = Math[h >= 1 ? "floor" : "ceil"](h / s)),
            (u = Math[u >= 1 ? "floor" : "ceil"](u / s)),
            d.settings.normalizeOffset && this.getBoundingClientRect)
          ) {
            var v = this.getBoundingClientRect();
            (f = e.clientX - v.left), (g = e.clientY - v.top);
          }
          return (
            (e.deltaX = h),
            (e.deltaY = u),
            (e.deltaFactor = s),
            (e.offsetX = f),
            (e.offsetY = g),
            (e.deltaMode = 0),
            r.unshift(e, c, h, u),
            o && clearTimeout(o),
            (o = setTimeout(i, 200)),
            (t.event.dispatch || t.event.handle).apply(this, r)
          );
        }
      }
      function i() {
        s = null;
      }
      function n(t, e) {
        return (
          d.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        );
      }
      var o,
        s,
        a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        r =
          "onwheel" in document || document.documentMode >= 9
            ? ["wheel"]
            : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
      if (t.event.fixHooks)
        for (var c = a.length; c; )
          t.event.fixHooks[a[--c]] = t.event.mouseHooks;
      var d = (t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
          if (this.addEventListener)
            for (var i = r.length; i; ) this.addEventListener(r[--i], e, !1);
          else this.onmousewheel = e;
          t.data(this, "mousewheel-line-height", d.getLineHeight(this)),
            t.data(this, "mousewheel-page-height", d.getPageHeight(this));
        },
        teardown: function () {
          if (this.removeEventListener)
            for (var i = r.length; i; ) this.removeEventListener(r[--i], e, !1);
          else this.onmousewheel = null;
          t.removeData(this, "mousewheel-line-height"),
            t.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function (e) {
          var i = t(e),
            n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
          return (
            n.length || (n = t("body")),
            parseInt(n.css("fontSize"), 10) ||
              parseInt(i.css("fontSize"), 10) ||
              16
          );
        },
        getPageHeight: function (e) {
          return t(e).height();
        },
        settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
      });
      t.fn.extend({
        mousewheel: function (t) {
          return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
        },
        unmousewheel: function (t) {
          return this.unbind("mousewheel", t);
        },
      });
    });
  },
  function (t, e, i) {
    var n, o, s;
    !(function (a) {
      (o = [i(0)]),
        (n = a),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(function (t) {
      (t.fn.jScrollPane = function (e) {
        function i(e, i) {
          function n(i) {
            var s,
              r,
              c,
              d,
              h,
              f,
              g = !1,
              m = !1;
            if (((W = i), void 0 === N))
              (h = e.scrollTop()),
                (f = e.scrollLeft()),
                e.css({ overflow: "hidden", padding: 0 }),
                ($ = e.innerWidth() + _t),
                (R = e.innerHeight()),
                e.width($),
                (N = t('<div class="jspPane" />')
                  .css("padding", mt)
                  .append(e.children())),
                (F = t('<div class="jspContainer" />')
                  .css({ width: $ + "px", height: R + "px" })
                  .append(N)
                  .appendTo(e));
            else {
              if (
                (e.css("width", ""),
                (g = W.stickToBottom && z()),
                (m = W.stickToRight && T()),
                (d = e.innerWidth() + _t != $ || e.outerHeight() != R),
                d &&
                  (($ = e.innerWidth() + _t),
                  (R = e.innerHeight()),
                  F.css({ width: $ + "px", height: R + "px" })),
                !d && vt == q && N.outerHeight() == Y)
              )
                return void e.width($);
              (vt = q),
                N.css("width", ""),
                e.width($),
                F.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
            }
            N.css("overflow", "auto"),
              (q = i.contentWidth ? i.contentWidth : N.width()),
              (Y = N[0].scrollHeight),
              N.css("overflow", ""),
              (Q = q / $),
              (U = Y / R),
              (X = U > 1),
              (Z = Q > 1),
              Z || X
                ? (e.addClass("jspScrollable"),
                  (s = W.maintainPosition && (K || et)),
                  s && ((r = C()), (c = k())),
                  o(),
                  a(),
                  l(),
                  s && (x(m ? q - $ : r, !1), b(g ? Y - R : c, !1)),
                  P(),
                  S(),
                  H(),
                  W.enableKeyboardNavigation && O(),
                  W.clickOnTrack && u(),
                  D(),
                  W.hijackInternalLinks && L())
                : (e.removeClass("jspScrollable"),
                  N.css({ top: 0, left: 0, width: F.width() - _t }),
                  I(),
                  A(),
                  M(),
                  p()),
              W.autoReinitialise && !gt
                ? (gt = setInterval(function () {
                    n(W);
                  }, W.autoReinitialiseDelay))
                : !W.autoReinitialise && gt && clearInterval(gt),
              h && e.scrollTop(0) && b(h, !1),
              f && e.scrollLeft(0) && x(f, !1),
              e.trigger("jsp-initialised", [Z || X]);
          }
          function o() {
            X &&
              (F.append(
                t('<div class="jspVerticalBar" />').append(
                  t('<div class="jspCap jspCapTop" />'),
                  t('<div class="jspTrack" />').append(
                    t('<div class="jspDrag" />').append(
                      t('<div class="jspDragTop" />'),
                      t('<div class="jspDragBottom" />')
                    )
                  ),
                  t('<div class="jspCap jspCapBottom" />')
                )
              ),
              (it = F.find(">.jspVerticalBar")),
              (nt = it.find(">.jspTrack")),
              (G = nt.find(">.jspDrag")),
              W.showArrows &&
                ((rt = t('<a class="jspArrow jspArrowUp" />')
                  .bind("mousedown.jsp", d(0, -1))
                  .bind("click.jsp", E)),
                (lt = t('<a class="jspArrow jspArrowDown" />')
                  .bind("mousedown.jsp", d(0, 1))
                  .bind("click.jsp", E)),
                W.arrowScrollOnHover &&
                  (rt.bind("mouseover.jsp", d(0, -1, rt)),
                  lt.bind("mouseover.jsp", d(0, 1, lt))),
                c(nt, W.verticalArrowPositions, rt, lt)),
              (st = R),
              F.find(
                ">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow"
              ).each(function () {
                st -= t(this).outerHeight();
              }),
              G.hover(
                function () {
                  G.addClass("jspHover");
                },
                function () {
                  G.removeClass("jspHover");
                }
              ).bind("mousedown.jsp", function (e) {
                t("html").bind("dragstart.jsp selectstart.jsp", E),
                  G.addClass("jspActive");
                var i = e.pageY - G.position().top;
                return (
                  t("html")
                    .bind("mousemove.jsp", function (t) {
                      g(t.pageY - i, !1);
                    })
                    .bind("mouseup.jsp mouseleave.jsp", f),
                  !1
                );
              }),
              s());
          }
          function s() {
            nt.height(st + "px"),
              (K = 0),
              (ot = W.verticalGutter + nt.outerWidth()),
              N.width($ - ot - _t);
            try {
              0 === it.position().left && N.css("margin-left", ot + "px");
            } catch (t) {}
          }
          function a() {
            Z &&
              (F.append(
                t('<div class="jspHorizontalBar" />').append(
                  t('<div class="jspCap jspCapLeft" />'),
                  t('<div class="jspTrack" />').append(
                    t('<div class="jspDrag" />').append(
                      t('<div class="jspDragLeft" />'),
                      t('<div class="jspDragRight" />')
                    )
                  ),
                  t('<div class="jspCap jspCapRight" />')
                )
              ),
              (ct = F.find(">.jspHorizontalBar")),
              (dt = ct.find(">.jspTrack")),
              (J = dt.find(">.jspDrag")),
              W.showArrows &&
                ((pt = t('<a class="jspArrow jspArrowLeft" />')
                  .bind("mousedown.jsp", d(-1, 0))
                  .bind("click.jsp", E)),
                (ft = t('<a class="jspArrow jspArrowRight" />')
                  .bind("mousedown.jsp", d(1, 0))
                  .bind("click.jsp", E)),
                W.arrowScrollOnHover &&
                  (pt.bind("mouseover.jsp", d(-1, 0, pt)),
                  ft.bind("mouseover.jsp", d(1, 0, ft))),
                c(dt, W.horizontalArrowPositions, pt, ft)),
              J.hover(
                function () {
                  J.addClass("jspHover");
                },
                function () {
                  J.removeClass("jspHover");
                }
              ).bind("mousedown.jsp", function (e) {
                t("html").bind("dragstart.jsp selectstart.jsp", E),
                  J.addClass("jspActive");
                var i = e.pageX - J.position().left;
                return (
                  t("html")
                    .bind("mousemove.jsp", function (t) {
                      _(t.pageX - i, !1);
                    })
                    .bind("mouseup.jsp mouseleave.jsp", f),
                  !1
                );
              }),
              (ht = F.innerWidth()),
              r());
          }
          function r() {
            F.find(
              ">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow"
            ).each(function () {
              ht -= t(this).outerWidth();
            }),
              dt.width(ht + "px"),
              (et = 0);
          }
          function l() {
            if (Z && X) {
              var e = dt.outerHeight(),
                i = nt.outerWidth();
              (st -= e),
                t(ct)
                  .find(">.jspCap:visible,>.jspArrow")
                  .each(function () {
                    ht += t(this).outerWidth();
                  }),
                (ht -= i),
                (R -= i),
                ($ -= e),
                dt
                  .parent()
                  .append(
                    t('<div class="jspCorner" />').css("width", e + "px")
                  ),
                s(),
                r();
            }
            Z && N.width(F.outerWidth() - _t + "px"),
              (Y = N.outerHeight()),
              (U = Y / R),
              Z &&
                ((ut = Math.ceil((1 / Q) * ht)),
                ut > W.horizontalDragMaxWidth
                  ? (ut = W.horizontalDragMaxWidth)
                  : ut < W.horizontalDragMinWidth &&
                    (ut = W.horizontalDragMinWidth),
                J.width(ut + "px"),
                (tt = ht - ut),
                v(et)),
              X &&
                ((at = Math.ceil((1 / U) * st)),
                at > W.verticalDragMaxHeight
                  ? (at = W.verticalDragMaxHeight)
                  : at < W.verticalDragMinHeight &&
                    (at = W.verticalDragMinHeight),
                G.height(at + "px"),
                (V = st - at),
                m(K));
          }
          function c(t, e, i, n) {
            var o,
              s = "before",
              a = "after";
            "os" == e &&
              (e = /Mac/.test(navigator.platform) ? "after" : "split"),
              e == s ? (a = e) : e == a && ((s = e), (o = i), (i = n), (n = o)),
              t[s](i)[a](n);
          }
          function d(t, e, i) {
            return function () {
              return h(t, e, this, i), this.blur(), !1;
            };
          }
          function h(e, i, n, o) {
            n = t(n).addClass("jspActive");
            var s,
              a,
              r = !0,
              l = function () {
                0 !== e && yt.scrollByX(e * W.arrowButtonSpeed),
                  0 !== i && yt.scrollByY(i * W.arrowButtonSpeed),
                  (a = setTimeout(l, r ? W.initialDelay : W.arrowRepeatFreq)),
                  (r = !1);
              };
            l(),
              (s = o ? "mouseout.jsp" : "mouseup.jsp"),
              (o = o || t("html")),
              o.bind(s, function () {
                n.removeClass("jspActive"),
                  a && clearTimeout(a),
                  (a = null),
                  o.unbind(s);
              });
          }
          function u() {
            p(),
              X &&
                nt.bind("mousedown.jsp", function (e) {
                  if (
                    void 0 === e.originalTarget ||
                    e.originalTarget == e.currentTarget
                  ) {
                    var i,
                      n = t(this),
                      o = n.offset(),
                      s = e.pageY - o.top - K,
                      a = !0,
                      r = function () {
                        var t = n.offset(),
                          o = e.pageY - t.top - at / 2,
                          c = R * W.scrollPagePercent,
                          d = (V * c) / (Y - R);
                        if (s < 0) K - d > o ? yt.scrollByY(-c) : g(o);
                        else {
                          if (!(s > 0)) return void l();
                          K + d < o ? yt.scrollByY(c) : g(o);
                        }
                        (i = setTimeout(
                          r,
                          a ? W.initialDelay : W.trackClickRepeatFreq
                        )),
                          (a = !1);
                      },
                      l = function () {
                        i && clearTimeout(i),
                          (i = null),
                          t(document).unbind("mouseup.jsp", l);
                      };
                    return r(), t(document).bind("mouseup.jsp", l), !1;
                  }
                }),
              Z &&
                dt.bind("mousedown.jsp", function (e) {
                  if (
                    void 0 === e.originalTarget ||
                    e.originalTarget == e.currentTarget
                  ) {
                    var i,
                      n = t(this),
                      o = n.offset(),
                      s = e.pageX - o.left - et,
                      a = !0,
                      r = function () {
                        var t = n.offset(),
                          o = e.pageX - t.left - ut / 2,
                          c = $ * W.scrollPagePercent,
                          d = (tt * c) / (q - $);
                        if (s < 0) et - d > o ? yt.scrollByX(-c) : _(o);
                        else {
                          if (!(s > 0)) return void l();
                          et + d < o ? yt.scrollByX(c) : _(o);
                        }
                        (i = setTimeout(
                          r,
                          a ? W.initialDelay : W.trackClickRepeatFreq
                        )),
                          (a = !1);
                      },
                      l = function () {
                        i && clearTimeout(i),
                          (i = null),
                          t(document).unbind("mouseup.jsp", l);
                      };
                    return r(), t(document).bind("mouseup.jsp", l), !1;
                  }
                });
          }
          function p() {
            dt && dt.unbind("mousedown.jsp"), nt && nt.unbind("mousedown.jsp");
          }
          function f() {
            t("html").unbind(
              "dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"
            ),
              G && G.removeClass("jspActive"),
              J && J.removeClass("jspActive");
          }
          function g(i, n) {
            if (X) {
              i < 0 ? (i = 0) : i > V && (i = V);
              var o = new t.Event("jsp-will-scroll-y");
              if ((e.trigger(o, [i]), !o.isDefaultPrevented())) {
                var s = i || 0,
                  a = 0 === s,
                  r = s == V,
                  l = i / V,
                  c = -l * (Y - R);
                void 0 === n && (n = W.animateScroll),
                  n
                    ? yt.animate(G, "top", i, m, function () {
                        e.trigger("jsp-user-scroll-y", [-c, a, r]);
                      })
                    : (G.css("top", i),
                      m(i),
                      e.trigger("jsp-user-scroll-y", [-c, a, r]));
              }
            }
          }
          function m(t) {
            void 0 === t && (t = G.position().top),
              F.scrollTop(0),
              (K = t || 0);
            var i = 0 === K,
              n = K == V,
              o = t / V,
              s = -o * (Y - R);
            (wt == i && xt == n) ||
              ((wt = i),
              (xt = n),
              e.trigger("jsp-arrow-change", [wt, xt, bt, jt])),
              y(i, n),
              N.css("top", s),
              e.trigger("jsp-scroll-y", [-s, i, n]).trigger("scroll");
          }
          function _(i, n) {
            if (Z) {
              i < 0 ? (i = 0) : i > tt && (i = tt);
              var o = new t.Event("jsp-will-scroll-x");
              if ((e.trigger(o, [i]), !o.isDefaultPrevented())) {
                var s = i || 0,
                  a = 0 === s,
                  r = s == tt,
                  l = i / tt,
                  c = -l * (q - $);
                void 0 === n && (n = W.animateScroll),
                  n
                    ? yt.animate(J, "left", i, v, function () {
                        e.trigger("jsp-user-scroll-x", [-c, a, r]);
                      })
                    : (J.css("left", i),
                      v(i),
                      e.trigger("jsp-user-scroll-x", [-c, a, r]));
              }
            }
          }
          function v(t) {
            void 0 === t && (t = J.position().left),
              F.scrollTop(0),
              (et = t || 0);
            var i = 0 === et,
              n = et == tt,
              o = t / tt,
              s = -o * (q - $);
            (bt == i && jt == n) ||
              ((bt = i),
              (jt = n),
              e.trigger("jsp-arrow-change", [wt, xt, bt, jt])),
              w(i, n),
              N.css("left", s),
              e.trigger("jsp-scroll-x", [-s, i, n]).trigger("scroll");
          }
          function y(t, e) {
            W.showArrows &&
              (rt[t ? "addClass" : "removeClass"]("jspDisabled"),
              lt[e ? "addClass" : "removeClass"]("jspDisabled"));
          }
          function w(t, e) {
            W.showArrows &&
              (pt[t ? "addClass" : "removeClass"]("jspDisabled"),
              ft[e ? "addClass" : "removeClass"]("jspDisabled"));
          }
          function b(t, e) {
            g((t / (Y - R)) * V, e);
          }
          function x(t, e) {
            _((t / (q - $)) * tt, e);
          }
          function j(e, i, n) {
            var o,
              s,
              a,
              r,
              l,
              c,
              d,
              h,
              u,
              p = 0,
              f = 0;
            try {
              o = t(e);
            } catch (t) {
              return;
            }
            for (
              s = o.outerHeight(),
                a = o.outerWidth(),
                F.scrollTop(0),
                F.scrollLeft(0);
              !o.is(".jspPane");

            )
              if (
                ((p += o.position().top),
                (f += o.position().left),
                (o = o.offsetParent()),
                /^body|html$/i.test(o[0].nodeName))
              )
                return;
            (r = k()),
              (c = r + R),
              p < r || i
                ? (h = p - W.horizontalGutter)
                : p + s > c && (h = p - R + s + W.horizontalGutter),
              isNaN(h) || b(h, n),
              (l = C()),
              (d = l + $),
              f < l || i
                ? (u = f - W.horizontalGutter)
                : f + a > d && (u = f - $ + a + W.horizontalGutter),
              isNaN(u) || x(u, n);
          }
          function C() {
            return -N.position().left;
          }
          function k() {
            return -N.position().top;
          }
          function z() {
            var t = Y - R;
            return t > 20 && t - k() < 10;
          }
          function T() {
            var t = q - $;
            return t > 20 && t - C() < 10;
          }
          function S() {
            F.unbind(kt).bind(kt, function (t, e, i, n) {
              et || (et = 0), K || (K = 0);
              var o = et,
                s = K,
                a = t.deltaFactor || W.mouseWheelSpeed;
              return yt.scrollBy(i * a, -n * a, !1), o == et && s == K;
            });
          }
          function I() {
            F.unbind(kt);
          }
          function E() {
            return !1;
          }
          function P() {
            N.find(":input,a")
              .unbind("focus.jsp")
              .bind("focus.jsp", function (t) {
                j(t.target, !1);
              });
          }
          function A() {
            N.find(":input,a").unbind("focus.jsp");
          }
          function O() {
            function i() {
              var t = et,
                e = K;
              switch (n) {
                case 40:
                  yt.scrollByY(W.keyboardSpeed, !1);
                  break;
                case 38:
                  yt.scrollByY(-W.keyboardSpeed, !1);
                  break;
                case 34:
                case 32:
                  yt.scrollByY(R * W.scrollPagePercent, !1);
                  break;
                case 33:
                  yt.scrollByY(-R * W.scrollPagePercent, !1);
                  break;
                case 39:
                  yt.scrollByX(W.keyboardSpeed, !1);
                  break;
                case 37:
                  yt.scrollByX(-W.keyboardSpeed, !1);
              }
              return (o = t != et || e != K);
            }
            var n,
              o,
              s = [];
            Z && s.push(ct[0]),
              X && s.push(it[0]),
              N.bind("focus.jsp", function () {
                e.focus();
              }),
              e
                .attr("tabindex", 0)
                .unbind("keydown.jsp keypress.jsp")
                .bind("keydown.jsp", function (e) {
                  if (
                    e.target === this ||
                    (s.length && t(e.target).closest(s).length)
                  ) {
                    var a = et,
                      r = K;
                    switch (e.keyCode) {
                      case 40:
                      case 38:
                      case 34:
                      case 32:
                      case 33:
                      case 39:
                      case 37:
                        (n = e.keyCode), i();
                        break;
                      case 35:
                        b(Y - R), (n = null);
                        break;
                      case 36:
                        b(0), (n = null);
                    }
                    return !(o = (e.keyCode == n && a != et) || r != K);
                  }
                })
                .bind("keypress.jsp", function (e) {
                  if (
                    (e.keyCode == n && i(),
                    e.target === this ||
                      (s.length && t(e.target).closest(s).length))
                  )
                    return !o;
                }),
              W.hideFocus
                ? (e.css("outline", "none"),
                  "hideFocus" in F[0] && e.attr("hideFocus", !0))
                : (e.css("outline", ""),
                  "hideFocus" in F[0] && e.attr("hideFocus", !1));
          }
          function M() {
            e
              .attr("tabindex", "-1")
              .removeAttr("tabindex")
              .unbind("keydown.jsp keypress.jsp"),
              N.unbind(".jsp");
          }
          function D() {
            if (location.hash && location.hash.length > 1) {
              var e,
                i,
                n = escape(location.hash.substr(1));
              try {
                e = t("#" + n + ', a[name="' + n + '"]');
              } catch (t) {
                return;
              }
              e.length &&
                N.find(n) &&
                (0 === F.scrollTop()
                  ? (i = setInterval(function () {
                      F.scrollTop() > 0 &&
                        (j(e, !0),
                        t(document).scrollTop(F.position().top),
                        clearInterval(i));
                    }, 50))
                  : (j(e, !0), t(document).scrollTop(F.position().top)));
            }
          }
          function L() {
            t(document.body).data("jspHijack") ||
              (t(document.body).data("jspHijack", !0),
              t(document.body).delegate('a[href*="#"]', "click", function (e) {
                var i,
                  n,
                  o,
                  s,
                  a,
                  r,
                  l = this.href.substr(0, this.href.indexOf("#")),
                  c = location.href;
                if (
                  (-1 !== location.href.indexOf("#") &&
                    (c = location.href.substr(0, location.href.indexOf("#"))),
                  l === c)
                ) {
                  i = escape(this.href.substr(this.href.indexOf("#") + 1));
                  try {
                    n = t("#" + i + ', a[name="' + i + '"]');
                  } catch (t) {
                    return;
                  }
                  n.length &&
                    ((o = n.closest(".jspScrollable")),
                    (s = o.data("jsp")),
                    s.scrollToElement(n, !0),
                    o[0].scrollIntoView &&
                      ((a = t(window).scrollTop()),
                      ((r = n.offset().top) < a ||
                        r > a + t(window).height()) &&
                        o[0].scrollIntoView()),
                    e.preventDefault());
                }
              }));
          }
          function H() {
            var t,
              e,
              i,
              n,
              o,
              s = !1;
            F.unbind(
              "touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick"
            )
              .bind("touchstart.jsp", function (a) {
                var r = a.originalEvent.touches[0];
                (t = C()),
                  (e = k()),
                  (i = r.pageX),
                  (n = r.pageY),
                  (o = !1),
                  (s = !0);
              })
              .bind("touchmove.jsp", function (a) {
                if (s) {
                  var r = a.originalEvent.touches[0],
                    l = et,
                    c = K;
                  return (
                    yt.scrollTo(t + i - r.pageX, e + n - r.pageY),
                    (o =
                      o ||
                      Math.abs(i - r.pageX) > 5 ||
                      Math.abs(n - r.pageY) > 5),
                    l == et && c == K
                  );
                }
              })
              .bind("touchend.jsp", function (t) {
                s = !1;
              })
              .bind("click.jsp-touchclick", function (t) {
                if (o) return (o = !1), !1;
              });
          }
          function B() {
            var t = k(),
              i = C();
            e.removeClass("jspScrollable").unbind(".jsp"),
              N.unbind(".jsp"),
              e.replaceWith(Ct.append(N.children())),
              Ct.scrollTop(t),
              Ct.scrollLeft(i),
              gt && clearInterval(gt);
          }
          var W,
            N,
            $,
            R,
            F,
            q,
            Y,
            Q,
            U,
            X,
            Z,
            G,
            V,
            K,
            J,
            tt,
            et,
            it,
            nt,
            ot,
            st,
            at,
            rt,
            lt,
            ct,
            dt,
            ht,
            ut,
            pt,
            ft,
            gt,
            mt,
            _t,
            vt,
            yt = this,
            wt = !0,
            bt = !0,
            xt = !1,
            jt = !1,
            Ct = e.clone(!1, !1).empty(),
            kt = t.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
          "border-box" === e.css("box-sizing")
            ? ((mt = 0), (_t = 0))
            : ((mt =
                e.css("paddingTop") +
                " " +
                e.css("paddingRight") +
                " " +
                e.css("paddingBottom") +
                " " +
                e.css("paddingLeft")),
              (_t =
                (parseInt(e.css("paddingLeft"), 10) || 0) +
                (parseInt(e.css("paddingRight"), 10) || 0))),
            t.extend(yt, {
              reinitialise: function (e) {
                (e = t.extend({}, W, e)), n(e);
              },
              scrollToElement: function (t, e, i) {
                j(t, e, i);
              },
              scrollTo: function (t, e, i) {
                x(t, i), b(e, i);
              },
              scrollToX: function (t, e) {
                x(t, e);
              },
              scrollToY: function (t, e) {
                b(t, e);
              },
              scrollToPercentX: function (t, e) {
                x(t * (q - $), e);
              },
              scrollToPercentY: function (t, e) {
                b(t * (Y - R), e);
              },
              scrollBy: function (t, e, i) {
                yt.scrollByX(t, i), yt.scrollByY(e, i);
              },
              scrollByX: function (t, e) {
                _(
                  ((C() + Math[t < 0 ? "floor" : "ceil"](t)) / (q - $)) * tt,
                  e
                );
              },
              scrollByY: function (t, e) {
                g(((k() + Math[t < 0 ? "floor" : "ceil"](t)) / (Y - R)) * V, e);
              },
              positionDragX: function (t, e) {
                _(t, e);
              },
              positionDragY: function (t, e) {
                g(t, e);
              },
              animate: function (t, e, i, n, o) {
                var s = {};
                (s[e] = i),
                  t.animate(s, {
                    duration: W.animateDuration,
                    easing: W.animateEase,
                    queue: !1,
                    step: n,
                    complete: o,
                  });
              },
              getContentPositionX: function () {
                return C();
              },
              getContentPositionY: function () {
                return k();
              },
              getContentWidth: function () {
                return q;
              },
              getContentHeight: function () {
                return Y;
              },
              getPercentScrolledX: function () {
                return C() / (q - $);
              },
              getPercentScrolledY: function () {
                return k() / (Y - R);
              },
              getIsScrollableH: function () {
                return Z;
              },
              getIsScrollableV: function () {
                return X;
              },
              getContentPane: function () {
                return N;
              },
              scrollToBottom: function (t) {
                g(V, t);
              },
              hijackInternalLinks: t.noop,
              destroy: function () {
                B();
              },
            }),
            n(i);
        }
        return (
          (e = t.extend({}, t.fn.jScrollPane.defaults, e)),
          t.each(
            ["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"],
            function () {
              e[this] = e[this] || e.speed;
            }
          ),
          this.each(function () {
            var n = t(this),
              o = n.data("jsp");
            o
              ? o.reinitialise(e)
              : (t("script", n)
                  .filter('[type="text/javascript"],:not([type])')
                  .remove(),
                (o = new i(n, e)),
                n.data("jsp", o));
          })
        );
      }),
        (t.fn.jScrollPane.defaults = {
          showArrows: !1,
          maintainPosition: !0,
          stickToBottom: !1,
          stickToRight: !1,
          clickOnTrack: !0,
          autoReinitialise: !1,
          autoReinitialiseDelay: 500,
          verticalDragMinHeight: 0,
          verticalDragMaxHeight: 99999,
          horizontalDragMinWidth: 0,
          horizontalDragMaxWidth: 99999,
          contentWidth: void 0,
          animateScroll: !1,
          animateDuration: 300,
          animateEase: "linear",
          hijackInternalLinks: !1,
          verticalGutter: 4,
          horizontalGutter: 4,
          mouseWheelSpeed: 3,
          arrowButtonSpeed: 0,
          arrowRepeatFreq: 50,
          arrowScrollOnHover: !1,
          trackClickSpeed: 0,
          trackClickRepeatFreq: 70,
          verticalArrowPositions: "split",
          horizontalArrowPositions: "split",
          enableKeyboardNavigation: !0,
          hideFocus: !1,
          keyboardSpeed: 0,
          initialDelay: 300,
          speed: 30,
          scrollPagePercent: 0.8,
        });
    });
  },
  function (t, e) {
    !(function (e, i, n) {
      function o(t, e) {
        return typeof t === e;
      }
      function s(t) {
        var e = T.className,
          i = C._config.classPrefix || "";
        if ((S && (e = e.baseVal), C._config.enableJSClass)) {
          var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
          e = e.replace(n, "$1" + i + "js$2");
        }
        C._config.enableClasses &&
          ((e += " " + i + t.join(" " + i)),
          S ? (T.className.baseVal = e) : (T.className = e));
      }
      function a(t, e) {
        if ("object" == typeof t) for (var i in t) P(t, i) && a(i, t[i]);
        else {
          t = t.toLowerCase();
          var n = t.split("."),
            o = C[n[0]];
          if ((2 == n.length && (o = o[n[1]]), void 0 !== o)) return C;
          (e = "function" == typeof e ? e() : e),
            1 == n.length
              ? (C[n[0]] = e)
              : (!C[n[0]] ||
                  C[n[0]] instanceof Boolean ||
                  (C[n[0]] = new Boolean(C[n[0]])),
                (C[n[0]][n[1]] = e)),
            s([(e && 0 != e ? "" : "no-") + n.join("-")]),
            C._trigger(t, e);
        }
        return C;
      }
      function r() {
        return "function" != typeof i.createElement
          ? i.createElement(arguments[0])
          : S
          ? i.createElementNS.call(
              i,
              "http://www.w3.org/2000/svg",
              arguments[0]
            )
          : i.createElement.apply(i, arguments);
      }
      function l(t) {
        return t
          .replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase();
          })
          .replace(/^-/, "");
      }
      function c(t, e) {
        return !!~("" + t).indexOf(e);
      }
      function d() {
        var t = i.body;
        return t || ((t = r(S ? "svg" : "body")), (t.fake = !0)), t;
      }
      function h(t, e, n, o) {
        var s,
          a,
          l,
          c,
          h = "modernizr",
          u = r("div"),
          p = d();
        if (parseInt(n, 10))
          for (; n--; )
            (l = r("div")), (l.id = o ? o[n] : h + (n + 1)), u.appendChild(l);
        return (
          (s = r("style")),
          (s.type = "text/css"),
          (s.id = "s" + h),
          (p.fake ? p : u).appendChild(s),
          p.appendChild(u),
          s.styleSheet
            ? (s.styleSheet.cssText = t)
            : s.appendChild(i.createTextNode(t)),
          (u.id = h),
          p.fake &&
            ((p.style.background = ""),
            (p.style.overflow = "hidden"),
            (c = T.style.overflow),
            (T.style.overflow = "hidden"),
            T.appendChild(p)),
          (a = e(u, t)),
          p.fake
            ? (p.parentNode.removeChild(p),
              (T.style.overflow = c),
              T.offsetHeight)
            : u.parentNode.removeChild(u),
          !!a
        );
      }
      function u(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      function p(t, e, i) {
        var n;
        for (var s in t)
          if (t[s] in e)
            return !1 === i
              ? t[s]
              : ((n = e[t[s]]), o(n, "function") ? u(n, i || e) : n);
        return !1;
      }
      function f(t) {
        return t
          .replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase();
          })
          .replace(/^ms-/, "-ms-");
      }
      function g(t, i, n) {
        var o;
        if ("getComputedStyle" in e) {
          o = getComputedStyle.call(e, t, i);
          var s = e.console;
          if (null !== o) n && (o = o.getPropertyValue(n));
          else if (s) {
            var a = s.error ? "error" : "log";
            s[a].call(
              s,
              "getComputedStyle returning null, its possible modernizr test results are inaccurate"
            );
          }
        } else o = !i && t.currentStyle && t.currentStyle[n];
        return o;
      }
      function m(t, i) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
          for (; o--; ) if (e.CSS.supports(f(t[o]), i)) return !0;
          return !1;
        }
        if ("CSSSupportsRule" in e) {
          for (var s = []; o--; ) s.push("(" + f(t[o]) + ":" + i + ")");
          return (
            (s = s.join(" or ")),
            h(
              "@supports (" + s + ") { #modernizr { position: absolute; } }",
              function (t) {
                return "absolute" == g(t, null, "position");
              }
            )
          );
        }
        return n;
      }
      function _(t, e, i, s) {
        function a() {
          h && (delete Q.style, delete Q.modElem);
        }
        if (((s = !o(s, "undefined") && s), !o(i, "undefined"))) {
          var d = m(t, i);
          if (!o(d, "undefined")) return d;
        }
        for (
          var h, u, p, f, g, _ = ["modernizr", "tspan", "samp"];
          !Q.style && _.length;

        )
          (h = !0), (Q.modElem = r(_.shift())), (Q.style = Q.modElem.style);
        for (p = t.length, u = 0; p > u; u++)
          if (
            ((f = t[u]),
            (g = Q.style[f]),
            c(f, "-") && (f = l(f)),
            Q.style[f] !== n)
          ) {
            if (s || o(i, "undefined")) return a(), "pfx" != e || f;
            try {
              Q.style[f] = i;
            } catch (t) {}
            if (Q.style[f] != g) return a(), "pfx" != e || f;
          }
        return a(), !1;
      }
      function v(t, e, i, n, s) {
        var a = t.charAt(0).toUpperCase() + t.slice(1),
          r = (t + " " + F.join(a + " ") + a).split(" ");
        return o(e, "string") || o(e, "undefined")
          ? _(r, e, n, s)
          : ((r = (t + " " + E.join(a + " ") + a).split(" ")), p(r, e, i));
      }
      function y(t, e) {
        var i = t.deleteDatabase(e);
        (i.onsuccess = function () {
          a("indexeddb.deletedatabase", !0);
        }),
          (i.onerror = function () {
            a("indexeddb.deletedatabase", !1);
          });
      }
      function w(t, e, i) {
        return v(t, n, n, e, i);
      }
      var b = [],
        x = [],
        j = {
          _version: "3.5.0",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0,
          },
          _q: [],
          on: function (t, e) {
            var i = this;
            setTimeout(function () {
              e(i[t]);
            }, 0);
          },
          addTest: function (t, e, i) {
            x.push({ name: t, fn: e, options: i });
          },
          addAsyncTest: function (t) {
            x.push({ name: null, fn: t });
          },
        },
        C = function () {};
      (C.prototype = j),
        (C = new C()),
        C.addTest("applicationcache", "applicationCache" in e),
        C.addTest("geolocation", "geolocation" in navigator),
        C.addTest("history", function () {
          var t = navigator.userAgent;
          return (
            ((-1 === t.indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone") ||
              "file:" === location.protocol) &&
            e.history &&
            "pushState" in e.history
          );
        }),
        C.addTest("postmessage", "postMessage" in e),
        C.addTest(
          "svg",
          !!i.createElementNS &&
            !!i.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect
        );
      var k = !1;
      try {
        k = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
      } catch (t) {}
      C.addTest("websockets", k),
        C.addTest("localstorage", function () {
          var t = "modernizr";
          try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
          } catch (t) {
            return !1;
          }
        }),
        C.addTest("sessionstorage", function () {
          var t = "modernizr";
          try {
            return (
              sessionStorage.setItem(t, t), sessionStorage.removeItem(t), !0
            );
          } catch (t) {
            return !1;
          }
        }),
        C.addTest("websqldatabase", "openDatabase" in e),
        C.addTest("webworkers", "Worker" in e);
      var z = j._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
      j._prefixes = z;
      var T = i.documentElement,
        S = "svg" === T.nodeName.toLowerCase();
      S ||
        (function (e, i) {
          function n(t, e) {
            var i = t.createElement("p"),
              n = t.getElementsByTagName("head")[0] || t.documentElement;
            return (
              (i.innerHTML = "x<style>" + e + "</style>"),
              n.insertBefore(i.lastChild, n.firstChild)
            );
          }
          function o() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t;
          }
          function s(t, e) {
            var i = y.elements;
            "string" != typeof i && (i = i.join(" ")),
              "string" != typeof t && (t = t.join(" ")),
              (y.elements = i + " " + t),
              d(e);
          }
          function a(t) {
            var e = v[t[m]];
            return e || ((e = {}), _++, (t[m] = _), (v[_] = e)), e;
          }
          function r(t, e, n) {
            if ((e || (e = i), u)) return e.createElement(t);
            n || (n = a(e));
            var o;
            return (
              (o = n.cache[t]
                ? n.cache[t].cloneNode()
                : g.test(t)
                ? (n.cache[t] = n.createElem(t)).cloneNode()
                : n.createElem(t)),
              !o.canHaveChildren || f.test(t) || o.tagUrn
                ? o
                : n.frag.appendChild(o)
            );
          }
          function l(t, e) {
            if ((t || (t = i), u)) return t.createDocumentFragment();
            e = e || a(t);
            for (
              var n = e.frag.cloneNode(), s = 0, r = o(), l = r.length;
              l > s;
              s++
            )
              n.createElement(r[s]);
            return n;
          }
          function c(t, e) {
            e.cache ||
              ((e.cache = {}),
              (e.createElem = t.createElement),
              (e.createFrag = t.createDocumentFragment),
              (e.frag = e.createFrag())),
              (t.createElement = function (i) {
                return y.shivMethods ? r(i, t, e) : e.createElem(i);
              }),
              (t.createDocumentFragment = Function(
                "h,f",
                "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                  o()
                    .join()
                    .replace(/[\w\-:]+/g, function (t) {
                      return (
                        e.createElem(t),
                        e.frag.createElement(t),
                        'c("' + t + '")'
                      );
                    }) +
                  ");return n}"
              )(y, e.frag));
          }
          function d(t) {
            t || (t = i);
            var e = a(t);
            return (
              !y.shivCSS ||
                h ||
                e.hasCSS ||
                (e.hasCSS = !!n(
                  t,
                  "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
                )),
              u || c(t, e),
              t
            );
          }
          var h,
            u,
            p = e.html5 || {},
            f =
              /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            g =
              /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            m = "_html5shiv",
            _ = 0,
            v = {};
          !(function () {
            try {
              var t = i.createElement("a");
              (t.innerHTML = "<xyz></xyz>"),
                (h = "hidden" in t),
                (u =
                  1 == t.childNodes.length ||
                  (function () {
                    i.createElement("a");
                    var t = i.createDocumentFragment();
                    return (
                      void 0 === t.cloneNode ||
                      void 0 === t.createDocumentFragment ||
                      void 0 === t.createElement
                    );
                  })());
            } catch (t) {
              (h = !0), (u = !0);
            }
          })();
          var y = {
            elements:
              p.elements ||
              "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== p.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== p.shivMethods,
            type: "default",
            shivDocument: d,
            createElement: r,
            createDocumentFragment: l,
            addElements: s,
          };
          (e.html5 = y),
            d(i),
            "object" == typeof t && t.exports && (t.exports = y);
        })(void 0 !== e ? e : this, i);
      var I = "Moz O ms Webkit",
        E = j._config.usePrefixes ? I.toLowerCase().split(" ") : [];
      j._domPrefixes = E;
      var P;
      !(function () {
        var t = {}.hasOwnProperty;
        P =
          o(t, "undefined") || o(t.call, "undefined")
            ? function (t, e) {
                return e in t && o(t.constructor.prototype[e], "undefined");
              }
            : function (e, i) {
                return t.call(e, i);
              };
      })(),
        (j._l = {}),
        (j.on = function (t, e) {
          this._l[t] || (this._l[t] = []),
            this._l[t].push(e),
            C.hasOwnProperty(t) &&
              setTimeout(function () {
                C._trigger(t, C[t]);
              }, 0);
        }),
        (j._trigger = function (t, e) {
          if (this._l[t]) {
            var i = this._l[t];
            setTimeout(function () {
              var t;
              for (t = 0; t < i.length; t++) (0, i[t])(e);
            }, 0),
              delete this._l[t];
          }
        }),
        C._q.push(function () {
          j.addTest = a;
        });
      var A = (function () {
        function t(t, i) {
          var o;
          return (
            !!t &&
            ((i && "string" != typeof i) || (i = r(i || "div")),
            (t = "on" + t),
            (o = t in i),
            !o &&
              e &&
              (i.setAttribute || (i = r("div")),
              i.setAttribute(t, ""),
              (o = "function" == typeof i[t]),
              i[t] !== n && (i[t] = n),
              i.removeAttribute(t)),
            o)
          );
        }
        var e = !("onblur" in i.documentElement);
        return t;
      })();
      (j.hasEvent = A),
        C.addTest("hashchange", function () {
          return (
            !1 !== A("hashchange", e) &&
            (i.documentMode === n || i.documentMode > 7)
          );
        }),
        C.addTest("audio", function () {
          var t = r("audio"),
            e = !1;
          try {
            (e = !!t.canPlayType) &&
              ((e = new Boolean(e)),
              (e.ogg = t
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, "")),
              (e.mp3 = t
                .canPlayType('audio/mpeg; codecs="mp3"')
                .replace(/^no$/, "")),
              (e.opus =
                t.canPlayType('audio/ogg; codecs="opus"') ||
                t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
              (e.wav = t
                .canPlayType('audio/wav; codecs="1"')
                .replace(/^no$/, "")),
              (e.m4a = (
                t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")
              ).replace(/^no$/, "")));
          } catch (t) {}
          return e;
        }),
        C.addTest("canvas", function () {
          var t = r("canvas");
          return !(!t.getContext || !t.getContext("2d"));
        }),
        C.addTest("canvastext", function () {
          return (
            !1 !== C.canvas &&
            "function" == typeof r("canvas").getContext("2d").fillText
          );
        }),
        C.addTest("video", function () {
          var t = r("video"),
            e = !1;
          try {
            (e = !!t.canPlayType) &&
              ((e = new Boolean(e)),
              (e.ogg = t
                .canPlayType('video/ogg; codecs="theora"')
                .replace(/^no$/, "")),
              (e.h264 = t
                .canPlayType('video/mp4; codecs="avc1.42E01E"')
                .replace(/^no$/, "")),
              (e.webm = t
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                .replace(/^no$/, "")),
              (e.vp9 = t
                .canPlayType('video/webm; codecs="vp9"')
                .replace(/^no$/, "")),
              (e.hls = t
                .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
                .replace(/^no$/, "")));
          } catch (t) {}
          return e;
        }),
        C.addTest("webgl", function () {
          var t = r("canvas"),
            i =
              "probablySupportsContext" in t
                ? "probablySupportsContext"
                : "supportsContext";
          return i in t
            ? t[i]("webgl") || t[i]("experimental-webgl")
            : "WebGLRenderingContext" in e;
        }),
        C.addTest("cssgradients", function () {
          for (
            var t, e = "background-image:", i = "", n = 0, o = z.length - 1;
            o > n;
            n++
          )
            (t = 0 === n ? "to " : ""),
              (i +=
                e + z[n] + "linear-gradient(" + t + "left top, #9f9, white);");
          C._config.usePrefixes &&
            (i +=
              e +
              "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
          var s = r("a"),
            a = s.style;
          return (
            (a.cssText = i), ("" + a.backgroundImage).indexOf("gradient") > -1
          );
        }),
        C.addTest("multiplebgs", function () {
          var t = r("a").style;
          return (
            (t.cssText =
              "background:url(https://),url(https://),red url(https://)"),
            /(url\s*\(.*?){3}/.test(t.background)
          );
        }),
        C.addTest("opacity", function () {
          var t = r("a").style;
          return (t.cssText = z.join("opacity:.55;")), /^0.55$/.test(t.opacity);
        }),
        C.addTest("rgba", function () {
          var t = r("a").style;
          return (
            (t.cssText = "background-color:rgba(150,255,150,.5)"),
            ("" + t.backgroundColor).indexOf("rgba") > -1
          );
        }),
        C.addTest("inlinesvg", function () {
          var t = r("div");
          return (
            (t.innerHTML = "<svg/>"),
            "http://www.w3.org/2000/svg" ==
              ("undefined" != typeof SVGRect &&
                t.firstChild &&
                t.firstChild.namespaceURI)
          );
        });
      var O = r("input"),
        M =
          "autocomplete autofocus list placeholder max min multiple pattern required step".split(
            " "
          ),
        D = {};
      C.input = (function (t) {
        for (var i = 0, n = t.length; n > i; i++) D[t[i]] = !!(t[i] in O);
        return (
          D.list && (D.list = !(!r("datalist") || !e.HTMLDataListElement)), D
        );
      })(M);
      var L =
          "search tel url email datetime date month week time datetime-local number range color".split(
            " "
          ),
        H = {};
      (C.inputtypes = (function (t) {
        for (var e, o, s, a = t.length, r = 0; a > r; r++)
          O.setAttribute("type", (e = t[r])),
            (s = "text" !== O.type && "style" in O),
            s &&
              ((O.value = "1)"),
              (O.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(e) && O.style.WebkitAppearance !== n
                ? (T.appendChild(O),
                  (o = i.defaultView),
                  (s =
                    o.getComputedStyle &&
                    "textfield" !==
                      o.getComputedStyle(O, null).WebkitAppearance &&
                    0 !== O.offsetHeight),
                  T.removeChild(O))
                : /^(search|tel)$/.test(e) ||
                  (s = /^(url|email)$/.test(e)
                    ? O.checkValidity && !1 === O.checkValidity()
                    : "1)" != O.value)),
            (H[t[r]] = !!s);
        return H;
      })(L)),
        C.addTest("hsla", function () {
          var t = r("a").style;
          return (
            (t.cssText = "background-color:hsla(120,40%,100%,.5)"),
            c(t.backgroundColor, "rgba") || c(t.backgroundColor, "hsla")
          );
        });
      var B = "CSS" in e && "supports" in e.CSS,
        W = "supportsCSS" in e;
      C.addTest("supports", B || W);
      var N = {}.toString;
      C.addTest("svgclippaths", function () {
        return (
          !!i.createElementNS &&
          /SVGClipPath/.test(
            N.call(i.createElementNS("http://www.w3.org/2000/svg", "clipPath"))
          )
        );
      }),
        C.addTest("smil", function () {
          return (
            !!i.createElementNS &&
            /SVGAnimate/.test(
              N.call(i.createElementNS("http://www.w3.org/2000/svg", "animate"))
            )
          );
        });
      var $ = (function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t
          ? function (e) {
              var i = t(e);
              return (i && i.matches) || !1;
            }
          : function (t) {
              var i = !1;
              return (
                h(
                  "@media " + t + " { #modernizr { position: absolute; } }",
                  function (t) {
                    i =
                      "absolute" ==
                      (e.getComputedStyle
                        ? e.getComputedStyle(t, null)
                        : t.currentStyle
                      ).position;
                  }
                ),
                i
              );
            };
      })();
      j.mq = $;
      var R = (j.testStyles = h);
      !(function () {
        var t = navigator.userAgent,
          e = t.match(/w(eb)?osbrowser/gi),
          i =
            t.match(/windows phone/gi) &&
            t.match(/iemobile\/([0-9])+/gi) &&
            parseFloat(RegExp.$1) >= 9;
        return e || i;
      })()
        ? R(
            '@font-face {font-family:"font";src:url("https://")}',
            function (t, e) {
              var n = i.getElementById("smodernizr"),
                o = n.sheet || n.styleSheet,
                s = o
                  ? o.cssRules && o.cssRules[0]
                    ? o.cssRules[0].cssText
                    : o.cssText || ""
                  : "",
                a = /src/i.test(s) && 0 === s.indexOf(e.split(" ")[0]);
              C.addTest("fontface", a);
            }
          )
        : C.addTest("fontface", !1),
        R(
          '#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',
          function (t) {
            C.addTest("generatedcontent", t.offsetHeight >= 6);
          }
        );
      var F = j._config.usePrefixes ? I.split(" ") : [];
      j._cssomPrefixes = F;
      var q = function (t) {
        var i,
          o = z.length,
          s = e.CSSRule;
        if (void 0 === s) return n;
        if (!t) return !1;
        if (
          ((t = t.replace(/^@/, "")),
          (i = t.replace(/-/g, "_").toUpperCase() + "_RULE") in s)
        )
          return "@" + t;
        for (var a = 0; o > a; a++) {
          var r = z[a];
          if (r.toUpperCase() + "_" + i in s)
            return "@-" + r.toLowerCase() + "-" + t;
        }
        return !1;
      };
      j.atRule = q;
      var Y = { elem: r("modernizr") };
      C._q.push(function () {
        delete Y.elem;
      });
      var Q = { style: Y.elem.style };
      C._q.unshift(function () {
        delete Q.style;
      });
      var U = (j.testProp = function (t, e, i) {
        return _([t], n, e, i);
      });
      C.addTest("textshadow", U("textShadow", "1px 1px")), (j.testAllProps = v);
      var X = (j.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@")
          ? q(t)
          : (-1 != t.indexOf("-") && (t = l(t)), e ? v(t, e, i) : v(t, "pfx"));
      });
      C.addAsyncTest(function () {
        var t;
        try {
          t = X("indexedDB", e);
        } catch (t) {}
        if (t) {
          var i = "modernizr-" + Math.random(),
            n = t.open(i);
          (n.onerror = function () {
            n.error && "InvalidStateError" === n.error.name
              ? a("indexeddb", !1)
              : (a("indexeddb", !0), y(t, i));
          }),
            (n.onsuccess = function () {
              a("indexeddb", !0), y(t, i);
            });
        } else a("indexeddb", !1);
      }),
        (j.testAllProps = w),
        C.addTest("cssanimations", w("animationName", "a", !0)),
        C.addTest("backgroundsize", w("backgroundSize", "100%", !0)),
        C.addTest("borderimage", w("borderImage", "url() 1", !0)),
        C.addTest("borderradius", w("borderRadius", "0px", !0)),
        (function () {
          C.addTest("csscolumns", function () {
            var t = !1,
              e = w("columnCount");
            try {
              (t = !!e) && (t = new Boolean(t));
            } catch (t) {}
            return t;
          });
          for (
            var t,
              e,
              i = [
                "Width",
                "Span",
                "Fill",
                "Gap",
                "Rule",
                "RuleColor",
                "RuleStyle",
                "RuleWidth",
                "BreakBefore",
                "BreakAfter",
                "BreakInside",
              ],
              n = 0;
            n < i.length;
            n++
          )
            (t = i[n].toLowerCase()),
              (e = w("column" + i[n])),
              ("breakbefore" === t ||
                "breakafter" === t ||
                "breakinside" == t) &&
                (e = e || w(i[n])),
              C.addTest("csscolumns." + t, e);
        })(),
        C.addTest("boxshadow", w("boxShadow", "1px 1px", !0)),
        C.addTest("flexbox", w("flexBasis", "1px", !0)),
        C.addTest("cssreflections", w("boxReflect", "above", !0)),
        C.addTest("csstransforms", function () {
          return (
            -1 === navigator.userAgent.indexOf("Android 2.") &&
            w("transform", "scale(1)", !0)
          );
        }),
        C.addTest("csstransforms3d", function () {
          var t = !!w("perspective", "1px", !0),
            e = C._config.usePrefixes;
          if (t && (!e || "webkitPerspective" in T.style)) {
            var i;
            C.supports
              ? (i = "@supports (perspective: 1px)")
              : ((i = "@media (transform-3d)"),
                e && (i += ",(-webkit-transform-3d)")),
              (i +=
                "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
              R("#modernizr{width:0;height:0}" + i, function (e) {
                t = 7 === e.offsetWidth && 18 === e.offsetHeight;
              });
          }
          return t;
        }),
        C.addTest("csstransitions", w("transition", "all", !0)),
        (function () {
          var t, e, i, n, s, a, r;
          for (var l in x)
            if (x.hasOwnProperty(l)) {
              if (
                ((t = []),
                (e = x[l]),
                e.name &&
                  (t.push(e.name.toLowerCase()),
                  e.options && e.options.aliases && e.options.aliases.length))
              )
                for (i = 0; i < e.options.aliases.length; i++)
                  t.push(e.options.aliases[i].toLowerCase());
              for (
                n = o(e.fn, "function") ? e.fn() : e.fn, s = 0;
                s < t.length;
                s++
              )
                (a = t[s]),
                  (r = a.split(".")),
                  1 === r.length
                    ? (C[r[0]] = n)
                    : (!C[r[0]] ||
                        C[r[0]] instanceof Boolean ||
                        (C[r[0]] = new Boolean(C[r[0]])),
                      (C[r[0]][r[1]] = n)),
                  b.push((n ? "" : "no-") + r.join("-"));
            }
        })(),
        s(b),
        delete j.addTest,
        delete j.addAsyncTest;
      for (var Z = 0; Z < C._q.length; Z++) C._q[Z]();
      e.Modernizr = C;
    })(window, document);
  },
  function (t, e) {
    !(function (t, e) {
      "use strict";
      var i = function (t, e, i) {
        var n;
        return function () {
          function o() {
            i || t.apply(s, a), (n = null);
          }
          var s = this,
            a = arguments;
          n ? clearTimeout(n) : i && t.apply(s, a),
            (n = setTimeout(o, e || 50));
        };
      };
      jQuery.fn[e] = function (t) {
        return t ? this.bind("resize", i(t)) : this.trigger(e);
      };
    })(jQuery, "smartresize");
  },
  function (t, e) {
    (function () {
      var t,
        e,
        i,
        n,
        o,
        s = function (t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        },
        a = {}.hasOwnProperty,
        r = function (t, e) {
          function i() {
            this.constructor = t;
          }
          for (var n in e) a.call(e, n) && (t[n] = e[n]);
          return (
            (i.prototype = e.prototype),
            (t.prototype = new i()),
            (t.__super__ = e.prototype),
            t
          );
        };
      (n = (function () {
        function t() {
          (this.options_index = 0), (this.parsed = []);
        }
        return (
          (t.prototype.add_node = function (t) {
            return "OPTGROUP" === t.nodeName.toUpperCase()
              ? this.add_group(t)
              : this.add_option(t);
          }),
          (t.prototype.add_group = function (t) {
            var e, i, n, o, s, a;
            for (
              e = this.parsed.length,
                this.parsed.push({
                  array_index: e,
                  group: !0,
                  label: this.escapeExpression(t.label),
                  title: t.title ? t.title : void 0,
                  children: 0,
                  disabled: t.disabled,
                  classes: t.className,
                }),
                s = t.childNodes,
                a = [],
                n = 0,
                o = s.length;
              n < o;
              n++
            )
              (i = s[n]), a.push(this.add_option(i, e, t.disabled));
            return a;
          }),
          (t.prototype.add_option = function (t, e, i) {
            if ("OPTION" === t.nodeName.toUpperCase())
              return (
                "" !== t.text
                  ? (null != e && (this.parsed[e].children += 1),
                    this.parsed.push({
                      array_index: this.parsed.length,
                      options_index: this.options_index,
                      value: t.value,
                      text: t.text,
                      html: t.innerHTML,
                      title: t.title ? t.title : void 0,
                      selected: t.selected,
                      disabled: !0 === i ? i : t.disabled,
                      group_array_index: e,
                      group_label: null != e ? this.parsed[e].label : null,
                      classes: t.className,
                      style: t.style.cssText,
                    }))
                  : this.parsed.push({
                      array_index: this.parsed.length,
                      options_index: this.options_index,
                      empty: !0,
                    }),
                (this.options_index += 1)
              );
          }),
          (t.prototype.escapeExpression = function (t) {
            var e, i;
            return null == t || !1 === t
              ? ""
              : /[\&\<\>\"\'\`]/.test(t)
              ? ((e = {
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;",
                }),
                (i = /&(?!\w+;)|[\<\>\"\'\`]/g),
                t.replace(i, function (t) {
                  return e[t] || "&amp;";
                }))
              : t;
          }),
          t
        );
      })()),
        (n.select_to_array = function (t) {
          var e, i, o, s, a;
          for (i = new n(), a = t.childNodes, o = 0, s = a.length; o < s; o++)
            (e = a[o]), i.add_node(e);
          return i.parsed;
        }),
        (e = (function () {
          function t(e, i) {
            (this.form_field = e),
              (this.options = null != i ? i : {}),
              (this.label_click_handler = s(this.label_click_handler, this)),
              t.browser_is_supported() &&
                ((this.is_multiple = this.form_field.multiple),
                this.set_default_text(),
                this.set_default_values(),
                this.setup(),
                this.set_up_html(),
                this.register_observers(),
                this.on_ready());
          }
          return (
            (t.prototype.set_default_values = function () {
              var t = this;
              return (
                (this.click_test_action = function (e) {
                  return t.test_active_click(e);
                }),
                (this.activate_action = function (e) {
                  return t.activate_field(e);
                }),
                (this.active_field = !1),
                (this.mouse_on_container = !1),
                (this.results_showing = !1),
                (this.result_highlighted = null),
                (this.is_rtl =
                  this.options.rtl ||
                  /\bchosen-rtl\b/.test(this.form_field.className)),
                (this.allow_single_deselect =
                  null != this.options.allow_single_deselect &&
                  null != this.form_field.options[0] &&
                  "" === this.form_field.options[0].text &&
                  this.options.allow_single_deselect),
                (this.disable_search_threshold =
                  this.options.disable_search_threshold || 0),
                (this.disable_search = this.options.disable_search || !1),
                (this.enable_split_word_search =
                  null == this.options.enable_split_word_search ||
                  this.options.enable_split_word_search),
                (this.group_search =
                  null == this.options.group_search ||
                  this.options.group_search),
                (this.search_contains = this.options.search_contains || !1),
                (this.single_backstroke_delete =
                  null == this.options.single_backstroke_delete ||
                  this.options.single_backstroke_delete),
                (this.max_selected_options =
                  this.options.max_selected_options || 1 / 0),
                (this.inherit_select_classes =
                  this.options.inherit_select_classes || !1),
                (this.display_selected_options =
                  null == this.options.display_selected_options ||
                  this.options.display_selected_options),
                (this.display_disabled_options =
                  null == this.options.display_disabled_options ||
                  this.options.display_disabled_options),
                (this.include_group_label_in_selected =
                  this.options.include_group_label_in_selected || !1),
                (this.max_shown_results =
                  this.options.max_shown_results || Number.POSITIVE_INFINITY),
                (this.case_sensitive_search =
                  this.options.case_sensitive_search || !1),
                (this.hide_results_on_select =
                  null == this.options.hide_results_on_select ||
                  this.options.hide_results_on_select)
              );
            }),
            (t.prototype.set_default_text = function () {
              return (
                this.form_field.getAttribute("data-placeholder")
                  ? (this.default_text =
                      this.form_field.getAttribute("data-placeholder"))
                  : this.is_multiple
                  ? (this.default_text =
                      this.options.placeholder_text_multiple ||
                      this.options.placeholder_text ||
                      t.default_multiple_text)
                  : (this.default_text =
                      this.options.placeholder_text_single ||
                      this.options.placeholder_text ||
                      t.default_single_text),
                (this.default_text = this.escape_html(this.default_text)),
                (this.results_none_found =
                  this.form_field.getAttribute("data-no_results_text") ||
                  this.options.no_results_text ||
                  t.default_no_result_text)
              );
            }),
            (t.prototype.choice_label = function (t) {
              return this.include_group_label_in_selected &&
                null != t.group_label
                ? "<b class='group-name'>" + t.group_label + "</b>" + t.html
                : t.html;
            }),
            (t.prototype.mouse_enter = function () {
              return (this.mouse_on_container = !0);
            }),
            (t.prototype.mouse_leave = function () {
              return (this.mouse_on_container = !1);
            }),
            (t.prototype.input_focus = function (t) {
              var e = this;
              if (this.is_multiple) {
                if (!this.active_field)
                  return setTimeout(function () {
                    return e.container_mousedown();
                  }, 50);
              } else if (!this.active_field) return this.activate_field();
            }),
            (t.prototype.input_blur = function (t) {
              var e = this;
              if (!this.mouse_on_container)
                return (
                  (this.active_field = !1),
                  setTimeout(function () {
                    return e.blur_test();
                  }, 100)
                );
            }),
            (t.prototype.label_click_handler = function (t) {
              return this.is_multiple
                ? this.container_mousedown(t)
                : this.activate_field();
            }),
            (t.prototype.results_option_build = function (t) {
              var e, i, n, o, s, a, r;
              for (
                e = "", o = 0, r = this.results_data, s = 0, a = r.length;
                s < a &&
                ((i = r[s]),
                (n = ""),
                (n = i.group
                  ? this.result_add_group(i)
                  : this.result_add_option(i)),
                "" !== n && (o++, (e += n)),
                (null != t ? t.first : void 0) &&
                  (i.selected && this.is_multiple
                    ? this.choice_build(i)
                    : i.selected &&
                      !this.is_multiple &&
                      this.single_set_selected_text(this.choice_label(i))),
                !(o >= this.max_shown_results));
                s++
              );
              return e;
            }),
            (t.prototype.result_add_option = function (t) {
              var e, i;
              return t.search_match && this.include_option_in_results(t)
                ? ((e = []),
                  t.disabled ||
                    (t.selected && this.is_multiple) ||
                    e.push("active-result"),
                  !t.disabled ||
                    (t.selected && this.is_multiple) ||
                    e.push("disabled-result"),
                  t.selected && e.push("result-selected"),
                  null != t.group_array_index && e.push("group-option"),
                  "" !== t.classes && e.push(t.classes),
                  (i = document.createElement("li")),
                  (i.className = e.join(" ")),
                  (i.style.cssText = t.style),
                  i.setAttribute("data-option-array-index", t.array_index),
                  (i.innerHTML = t.search_text),
                  t.title && (i.title = t.title),
                  this.outerHTML(i))
                : "";
            }),
            (t.prototype.result_add_group = function (t) {
              var e, i;
              return (t.search_match || t.group_match) && t.active_options > 0
                ? ((e = []),
                  e.push("group-result"),
                  t.classes && e.push(t.classes),
                  (i = document.createElement("li")),
                  (i.className = e.join(" ")),
                  (i.innerHTML = t.search_text),
                  t.title && (i.title = t.title),
                  this.outerHTML(i))
                : "";
            }),
            (t.prototype.results_update_field = function () {
              if (
                (this.set_default_text(),
                this.is_multiple || this.results_reset_cleanup(),
                this.result_clear_highlight(),
                this.results_build(),
                this.results_showing)
              )
                return this.winnow_results();
            }),
            (t.prototype.reset_single_select_options = function () {
              var t, e, i, n, o;
              for (
                n = this.results_data, o = [], e = 0, i = n.length;
                e < i;
                e++
              )
                (t = n[e]),
                  t.selected ? o.push((t.selected = !1)) : o.push(void 0);
              return o;
            }),
            (t.prototype.results_toggle = function () {
              return this.results_showing
                ? this.results_hide()
                : this.results_show();
            }),
            (t.prototype.results_search = function (t) {
              return this.results_showing
                ? this.winnow_results()
                : this.results_show();
            }),
            (t.prototype.winnow_results = function () {
              var t, e, i, n, o, s, a, r, l, c, d, h;
              for (
                this.no_results_clear(),
                  o = 0,
                  a = this.get_search_text(),
                  t = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                  n = this.get_search_regex(t),
                  e = this.get_highlight_regex(t),
                  h = this.results_data,
                  c = 0,
                  d = h.length;
                c < d;
                c++
              )
                (i = h[c]),
                  (i.search_match = !1),
                  (s = null),
                  this.include_option_in_results(i) &&
                    (i.group && ((i.group_match = !1), (i.active_options = 0)),
                    null != i.group_array_index &&
                      this.results_data[i.group_array_index] &&
                      ((s = this.results_data[i.group_array_index]),
                      0 === s.active_options && s.search_match && (o += 1),
                      (s.active_options += 1)),
                    (i.search_text = i.group ? i.label : i.html),
                    (i.group && !this.group_search) ||
                      ((i.search_match = this.search_string_match(
                        i.search_text,
                        n
                      )),
                      i.search_match && !i.group && (o += 1),
                      i.search_match
                        ? (a.length &&
                            ((r = i.search_text.search(e)),
                            (l =
                              i.search_text.substr(0, r + a.length) +
                              "</em>" +
                              i.search_text.substr(r + a.length)),
                            (i.search_text =
                              l.substr(0, r) + "<em>" + l.substr(r))),
                          null != s && (s.group_match = !0))
                        : null != i.group_array_index &&
                          this.results_data[i.group_array_index].search_match &&
                          (i.search_match = !0)));
              return (
                this.result_clear_highlight(),
                o < 1 && a.length
                  ? (this.update_results_content(""), this.no_results(a))
                  : (this.update_results_content(this.results_option_build()),
                    this.winnow_results_set_highlight())
              );
            }),
            (t.prototype.get_search_regex = function (t) {
              var e, i;
              return (
                (e = this.search_contains ? "" : "^"),
                (i = this.case_sensitive_search ? "" : "i"),
                new RegExp(e + t, i)
              );
            }),
            (t.prototype.get_highlight_regex = function (t) {
              var e, i;
              return (
                (e = this.search_contains ? "" : "\\b"),
                (i = this.case_sensitive_search ? "" : "i"),
                new RegExp(e + t, i)
              );
            }),
            (t.prototype.search_string_match = function (t, e) {
              var i, n, o, s;
              if (e.test(t)) return !0;
              if (
                this.enable_split_word_search &&
                (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) &&
                ((n = t.replace(/\[|\]/g, "").split(" ")), n.length)
              )
                for (o = 0, s = n.length; o < s; o++)
                  if (((i = n[o]), e.test(i))) return !0;
            }),
            (t.prototype.choices_count = function () {
              var t, e, i, n;
              if (null != this.selected_option_count)
                return this.selected_option_count;
              for (
                this.selected_option_count = 0,
                  n = this.form_field.options,
                  e = 0,
                  i = n.length;
                e < i;
                e++
              )
                (t = n[e]), t.selected && (this.selected_option_count += 1);
              return this.selected_option_count;
            }),
            (t.prototype.choices_click = function (t) {
              if (
                (t.preventDefault(),
                this.activate_field(),
                !this.results_showing && !this.is_disabled)
              )
                return this.results_show();
            }),
            (t.prototype.keydown_checker = function (t) {
              var e, i;
              switch (
                ((e = null != (i = t.which) ? i : t.keyCode),
                this.search_field_scale(),
                8 !== e && this.pending_backstroke && this.clear_backstroke(),
                e)
              ) {
                case 8:
                  this.backstroke_length = this.get_search_field_value().length;
                  break;
                case 9:
                  this.results_showing &&
                    !this.is_multiple &&
                    this.result_select(t),
                    (this.mouse_on_container = !1);
                  break;
                case 13:
                case 27:
                  this.results_showing && t.preventDefault();
                  break;
                case 32:
                  this.disable_search && t.preventDefault();
                  break;
                case 38:
                  t.preventDefault(), this.keyup_arrow();
                  break;
                case 40:
                  t.preventDefault(), this.keydown_arrow();
              }
            }),
            (t.prototype.keyup_checker = function (t) {
              var e, i;
              switch (
                ((e = null != (i = t.which) ? i : t.keyCode),
                this.search_field_scale(),
                e)
              ) {
                case 8:
                  this.is_multiple &&
                  this.backstroke_length < 1 &&
                  this.choices_count() > 0
                    ? this.keydown_backstroke()
                    : this.pending_backstroke ||
                      (this.result_clear_highlight(), this.results_search());
                  break;
                case 13:
                  t.preventDefault(),
                    this.results_showing && this.result_select(t);
                  break;
                case 27:
                  this.results_showing && this.results_hide();
                  break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                  break;
                default:
                  this.results_search();
              }
            }),
            (t.prototype.clipboard_event_checker = function (t) {
              var e = this;
              if (!this.is_disabled)
                return setTimeout(function () {
                  return e.results_search();
                }, 50);
            }),
            (t.prototype.container_width = function () {
              return null != this.options.width
                ? this.options.width
                : this.form_field.offsetWidth + "px";
            }),
            (t.prototype.include_option_in_results = function (t) {
              return (
                !(
                  this.is_multiple &&
                  !this.display_selected_options &&
                  t.selected
                ) &&
                !(!this.display_disabled_options && t.disabled) &&
                !t.empty
              );
            }),
            (t.prototype.search_results_touchstart = function (t) {
              return (
                (this.touch_started = !0), this.search_results_mouseover(t)
              );
            }),
            (t.prototype.search_results_touchmove = function (t) {
              return (this.touch_started = !1), this.search_results_mouseout(t);
            }),
            (t.prototype.search_results_touchend = function (t) {
              if (this.touch_started) return this.search_results_mouseup(t);
            }),
            (t.prototype.outerHTML = function (t) {
              var e;
              return t.outerHTML
                ? t.outerHTML
                : ((e = document.createElement("div")),
                  e.appendChild(t),
                  e.innerHTML);
            }),
            (t.prototype.get_single_html = function () {
              return (
                '<a class="chosen-single chosen-default">\n  <span>' +
                this.default_text +
                '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
              );
            }),
            (t.prototype.get_multi_html = function () {
              return (
                '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' +
                this.default_text +
                '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
              );
            }),
            (t.prototype.get_no_results_html = function (t) {
              return (
                '<li class="no-results">\n  ' +
                this.results_none_found +
                " <span>" +
                t +
                "</span>\n</li>"
              );
            }),
            (t.browser_is_supported = function () {
              return "Microsoft Internet Explorer" === window.navigator.appName
                ? document.documentMode >= 8
                : !(
                    /iP(od|hone)/i.test(window.navigator.userAgent) ||
                    /IEMobile/i.test(window.navigator.userAgent) ||
                    /Windows Phone/i.test(window.navigator.userAgent) ||
                    /BlackBerry/i.test(window.navigator.userAgent) ||
                    /BB10/i.test(window.navigator.userAgent) ||
                    /Android.*Mobile/i.test(window.navigator.userAgent)
                  );
            }),
            (t.default_multiple_text = "Select Some Options"),
            (t.default_single_text = "Select an Option"),
            (t.default_no_result_text = "No results match"),
            t
          );
        })()),
        (t = jQuery),
        t.fn.extend({
          chosen: function (n) {
            return e.browser_is_supported()
              ? this.each(function (e) {
                  var o, s;
                  if (((o = t(this)), (s = o.data("chosen")), "destroy" === n))
                    return void (s instanceof i && s.destroy());
                  s instanceof i || o.data("chosen", new i(this, n));
                })
              : this;
          },
        }),
        (i = (function (e) {
          function i() {
            return (o = i.__super__.constructor.apply(this, arguments));
          }
          return (
            r(i, e),
            (i.prototype.setup = function () {
              return (
                (this.form_field_jq = t(this.form_field)),
                (this.current_selectedIndex = this.form_field.selectedIndex)
              );
            }),
            (i.prototype.set_up_html = function () {
              var e, i;
              return (
                (e = ["chosen-container"]),
                e.push(
                  "chosen-container-" + (this.is_multiple ? "multi" : "single")
                ),
                this.inherit_select_classes &&
                  this.form_field.className &&
                  e.push(this.form_field.className),
                this.is_rtl && e.push("chosen-rtl"),
                (i = { class: e.join(" "), title: this.form_field.title }),
                this.form_field.id.length &&
                  (i.id =
                    this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
                (this.container = t("<div />", i)),
                this.container.width(this.container_width()),
                this.is_multiple
                  ? this.container.html(this.get_multi_html())
                  : this.container.html(this.get_single_html()),
                this.form_field_jq.hide().after(this.container),
                (this.dropdown = this.container
                  .find("div.chosen-drop")
                  .first()),
                (this.search_field = this.container.find("input").first()),
                (this.search_results = this.container
                  .find("ul.chosen-results")
                  .first()),
                this.search_field_scale(),
                (this.search_no_results = this.container
                  .find("li.no-results")
                  .first()),
                this.is_multiple
                  ? ((this.search_choices = this.container
                      .find("ul.chosen-choices")
                      .first()),
                    (this.search_container = this.container
                      .find("li.search-field")
                      .first()))
                  : ((this.search_container = this.container
                      .find("div.chosen-search")
                      .first()),
                    (this.selected_item = this.container
                      .find(".chosen-single")
                      .first())),
                this.results_build(),
                this.set_tab_index(),
                this.set_label_behavior()
              );
            }),
            (i.prototype.on_ready = function () {
              return this.form_field_jq.trigger("chosen:ready", {
                chosen: this,
              });
            }),
            (i.prototype.register_observers = function () {
              var t = this;
              return (
                this.container.bind("touchstart.chosen", function (e) {
                  t.container_mousedown(e);
                }),
                this.container.bind("touchend.chosen", function (e) {
                  t.container_mouseup(e);
                }),
                this.container.bind("mousedown.chosen", function (e) {
                  t.container_mousedown(e);
                }),
                this.container.bind("mouseup.chosen", function (e) {
                  t.container_mouseup(e);
                }),
                this.container.bind("mouseenter.chosen", function (e) {
                  t.mouse_enter(e);
                }),
                this.container.bind("mouseleave.chosen", function (e) {
                  t.mouse_leave(e);
                }),
                this.search_results.bind("mouseup.chosen", function (e) {
                  t.search_results_mouseup(e);
                }),
                this.search_results.bind("mouseover.chosen", function (e) {
                  t.search_results_mouseover(e);
                }),
                this.search_results.bind("mouseout.chosen", function (e) {
                  t.search_results_mouseout(e);
                }),
                this.search_results.bind(
                  "mousewheel.chosen DOMMouseScroll.chosen",
                  function (e) {
                    t.search_results_mousewheel(e);
                  }
                ),
                this.search_results.bind("touchstart.chosen", function (e) {
                  t.search_results_touchstart(e);
                }),
                this.search_results.bind("touchmove.chosen", function (e) {
                  t.search_results_touchmove(e);
                }),
                this.search_results.bind("touchend.chosen", function (e) {
                  t.search_results_touchend(e);
                }),
                this.form_field_jq.bind("chosen:updated.chosen", function (e) {
                  t.results_update_field(e);
                }),
                this.form_field_jq.bind("chosen:activate.chosen", function (e) {
                  t.activate_field(e);
                }),
                this.form_field_jq.bind("chosen:open.chosen", function (e) {
                  t.container_mousedown(e);
                }),
                this.form_field_jq.bind("chosen:close.chosen", function (e) {
                  t.close_field(e);
                }),
                this.search_field.bind("blur.chosen", function (e) {
                  t.input_blur(e);
                }),
                this.search_field.bind("keyup.chosen", function (e) {
                  t.keyup_checker(e);
                }),
                this.search_field.bind("keydown.chosen", function (e) {
                  t.keydown_checker(e);
                }),
                this.search_field.bind("focus.chosen", function (e) {
                  t.input_focus(e);
                }),
                this.search_field.bind("cut.chosen", function (e) {
                  t.clipboard_event_checker(e);
                }),
                this.search_field.bind("paste.chosen", function (e) {
                  t.clipboard_event_checker(e);
                }),
                this.is_multiple
                  ? this.search_choices.bind("click.chosen", function (e) {
                      t.choices_click(e);
                    })
                  : this.container.bind("click.chosen", function (t) {
                      t.preventDefault();
                    })
              );
            }),
            (i.prototype.destroy = function () {
              return (
                t(this.container[0].ownerDocument).unbind(
                  "click.chosen",
                  this.click_test_action
                ),
                this.form_field_label.length > 0 &&
                  this.form_field_label.unbind("click.chosen"),
                this.search_field[0].tabIndex &&
                  (this.form_field_jq[0].tabIndex =
                    this.search_field[0].tabIndex),
                this.container.remove(),
                this.form_field_jq.removeData("chosen"),
                this.form_field_jq.show()
              );
            }),
            (i.prototype.search_field_disabled = function () {
              return (
                (this.is_disabled =
                  this.form_field.disabled ||
                  this.form_field_jq.parents("fieldset").is(":disabled")),
                this.container.toggleClass("chosen-disabled", this.is_disabled),
                (this.search_field[0].disabled = this.is_disabled),
                this.is_multiple ||
                  this.selected_item.unbind(
                    "focus.chosen",
                    this.activate_field
                  ),
                this.is_disabled
                  ? this.close_field()
                  : this.is_multiple
                  ? void 0
                  : this.selected_item.bind("focus.chosen", this.activate_field)
              );
            }),
            (i.prototype.container_mousedown = function (e) {
              var i;
              if (!this.is_disabled)
                return (
                  !e ||
                    ("mousedown" !== (i = e.type) && "touchstart" !== i) ||
                    this.results_showing ||
                    e.preventDefault(),
                  null != e && t(e.target).hasClass("search-choice-close")
                    ? void 0
                    : (this.active_field
                        ? this.is_multiple ||
                          !e ||
                          (t(e.target)[0] !== this.selected_item[0] &&
                            !t(e.target).parents("a.chosen-single").length) ||
                          (e.preventDefault(), this.results_toggle())
                        : (this.is_multiple && this.search_field.val(""),
                          t(this.container[0].ownerDocument).bind(
                            "click.chosen",
                            this.click_test_action
                          ),
                          this.results_show()),
                      this.activate_field())
                );
            }),
            (i.prototype.container_mouseup = function (t) {
              if ("ABBR" === t.target.nodeName && !this.is_disabled)
                return this.results_reset(t);
            }),
            (i.prototype.search_results_mousewheel = function (t) {
              var e;
              if (
                (t.originalEvent &&
                  (e =
                    t.originalEvent.deltaY ||
                    -t.originalEvent.wheelDelta ||
                    t.originalEvent.detail),
                null != e)
              )
                return (
                  t.preventDefault(),
                  "DOMMouseScroll" === t.type && (e *= 40),
                  this.search_results.scrollTop(
                    e + this.search_results.scrollTop()
                  )
                );
            }),
            (i.prototype.blur_test = function (t) {
              if (
                !this.active_field &&
                this.container.hasClass("chosen-container-active")
              )
                return this.close_field();
            }),
            (i.prototype.close_field = function () {
              return (
                t(this.container[0].ownerDocument).unbind(
                  "click.chosen",
                  this.click_test_action
                ),
                (this.active_field = !1),
                this.results_hide(),
                this.container.removeClass("chosen-container-active"),
                this.clear_backstroke(),
                this.show_search_field_default(),
                this.search_field_scale(),
                this.search_field.blur()
              );
            }),
            (i.prototype.activate_field = function () {
              if (!this.is_disabled)
                return (
                  this.container.addClass("chosen-container-active"),
                  (this.active_field = !0),
                  this.search_field.val(this.search_field.val()),
                  this.search_field.focus()
                );
            }),
            (i.prototype.test_active_click = function (e) {
              var i;
              return (
                (i = t(e.target).closest(".chosen-container")),
                i.length && this.container[0] === i[0]
                  ? (this.active_field = !0)
                  : this.close_field()
              );
            }),
            (i.prototype.results_build = function () {
              return (
                (this.parsing = !0),
                (this.selected_option_count = null),
                (this.results_data = n.select_to_array(this.form_field)),
                this.is_multiple
                  ? this.search_choices.find("li.search-choice").remove()
                  : this.is_multiple ||
                    (this.single_set_selected_text(),
                    this.disable_search ||
                    this.form_field.options.length <=
                      this.disable_search_threshold
                      ? ((this.search_field[0].readOnly = !0),
                        this.container.addClass(
                          "chosen-container-single-nosearch"
                        ))
                      : ((this.search_field[0].readOnly = !1),
                        this.container.removeClass(
                          "chosen-container-single-nosearch"
                        ))),
                this.update_results_content(
                  this.results_option_build({ first: !0 })
                ),
                this.search_field_disabled(),
                this.show_search_field_default(),
                this.search_field_scale(),
                (this.parsing = !1)
              );
            }),
            (i.prototype.result_do_highlight = function (t) {
              var e, i, n, o, s;
              if (t.length) {
                if (
                  (this.result_clear_highlight(),
                  (this.result_highlight = t),
                  this.result_highlight.addClass("highlighted"),
                  (n = parseInt(this.search_results.css("maxHeight"), 10)),
                  (s = this.search_results.scrollTop()),
                  (o = n + s),
                  (i =
                    this.result_highlight.position().top +
                    this.search_results.scrollTop()),
                  (e = i + this.result_highlight.outerHeight()) >= o)
                )
                  return this.search_results.scrollTop(e - n > 0 ? e - n : 0);
                if (i < s) return this.search_results.scrollTop(i);
              }
            }),
            (i.prototype.result_clear_highlight = function () {
              return (
                this.result_highlight &&
                  this.result_highlight.removeClass("highlighted"),
                (this.result_highlight = null)
              );
            }),
            (i.prototype.results_show = function () {
              return this.is_multiple &&
                this.max_selected_options <= this.choices_count()
                ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this,
                  }),
                  !1)
                : (this.container.addClass("chosen-with-drop"),
                  (this.results_showing = !0),
                  this.search_field.focus(),
                  this.search_field.val(this.get_search_field_value()),
                  this.winnow_results(),
                  this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this,
                  }));
            }),
            (i.prototype.update_results_content = function (t) {
              return this.search_results.html(t);
            }),
            (i.prototype.results_hide = function () {
              return (
                this.results_showing &&
                  (this.result_clear_highlight(),
                  this.container.removeClass("chosen-with-drop"),
                  this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this,
                  })),
                (this.results_showing = !1)
              );
            }),
            (i.prototype.set_tab_index = function (t) {
              var e;
              if (this.form_field.tabIndex)
                return (
                  (e = this.form_field.tabIndex),
                  (this.form_field.tabIndex = -1),
                  (this.search_field[0].tabIndex = e)
                );
            }),
            (i.prototype.set_label_behavior = function () {
              if (
                ((this.form_field_label = this.form_field_jq.parents("label")),
                !this.form_field_label.length &&
                  this.form_field.id.length &&
                  (this.form_field_label = t(
                    "label[for='" + this.form_field.id + "']"
                  )),
                this.form_field_label.length > 0)
              )
                return this.form_field_label.bind(
                  "click.chosen",
                  this.label_click_handler
                );
            }),
            (i.prototype.show_search_field_default = function () {
              return this.is_multiple &&
                this.choices_count() < 1 &&
                !this.active_field
                ? (this.search_field.val(this.default_text),
                  this.search_field.addClass("default"))
                : (this.search_field.val(""),
                  this.search_field.removeClass("default"));
            }),
            (i.prototype.search_results_mouseup = function (e) {
              var i;
              if (
                ((i = t(e.target).hasClass("active-result")
                  ? t(e.target)
                  : t(e.target).parents(".active-result").first()),
                i.length)
              )
                return (
                  (this.result_highlight = i),
                  this.result_select(e),
                  this.search_field.focus()
                );
            }),
            (i.prototype.search_results_mouseover = function (e) {
              var i;
              if (
                (i = t(e.target).hasClass("active-result")
                  ? t(e.target)
                  : t(e.target).parents(".active-result").first())
              )
                return this.result_do_highlight(i);
            }),
            (i.prototype.search_results_mouseout = function (e) {
              if (t(e.target).hasClass("active-result"))
                return this.result_clear_highlight();
            }),
            (i.prototype.choice_build = function (e) {
              var i,
                n,
                o = this;
              return (
                (i = t("<li />", { class: "search-choice" }).html(
                  "<span>" + this.choice_label(e) + "</span>"
                )),
                e.disabled
                  ? i.addClass("search-choice-disabled")
                  : ((n = t("<a />", {
                      class: "search-choice-close",
                      "data-option-array-index": e.array_index,
                    })),
                    n.bind("click.chosen", function (t) {
                      return o.choice_destroy_link_click(t);
                    }),
                    i.append(n)),
                this.search_container.before(i)
              );
            }),
            (i.prototype.choice_destroy_link_click = function (e) {
              if ((e.preventDefault(), e.stopPropagation(), !this.is_disabled))
                return this.choice_destroy(t(e.target));
            }),
            (i.prototype.choice_destroy = function (t) {
              if (
                this.result_deselect(
                  t[0].getAttribute("data-option-array-index")
                )
              )
                return (
                  this.active_field
                    ? this.search_field.focus()
                    : this.show_search_field_default(),
                  this.is_multiple &&
                    this.choices_count() > 0 &&
                    this.get_search_field_value().length < 1 &&
                    this.results_hide(),
                  t.parents("li").first().remove(),
                  this.search_field_scale()
                );
            }),
            (i.prototype.results_reset = function () {
              if (
                (this.reset_single_select_options(),
                (this.form_field.options[0].selected = !0),
                this.single_set_selected_text(),
                this.show_search_field_default(),
                this.results_reset_cleanup(),
                this.trigger_form_field_change(),
                this.active_field)
              )
                return this.results_hide();
            }),
            (i.prototype.results_reset_cleanup = function () {
              return (
                (this.current_selectedIndex = this.form_field.selectedIndex),
                this.selected_item.find("abbr").remove()
              );
            }),
            (i.prototype.result_select = function (t) {
              var e, i;
              if (this.result_highlight)
                return (
                  (e = this.result_highlight),
                  this.result_clear_highlight(),
                  this.is_multiple &&
                  this.max_selected_options <= this.choices_count()
                    ? (this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this,
                      }),
                      !1)
                    : (this.is_multiple
                        ? e.removeClass("active-result")
                        : this.reset_single_select_options(),
                      e.addClass("result-selected"),
                      (i =
                        this.results_data[
                          e[0].getAttribute("data-option-array-index")
                        ]),
                      (i.selected = !0),
                      (this.form_field.options[i.options_index].selected = !0),
                      (this.selected_option_count = null),
                      this.is_multiple
                        ? this.choice_build(i)
                        : this.single_set_selected_text(this.choice_label(i)),
                      (this.is_multiple &&
                        (!this.hide_results_on_select ||
                          t.metaKey ||
                          t.ctrlKey)) ||
                        (this.results_hide(), this.show_search_field_default()),
                      (this.is_multiple ||
                        this.form_field.selectedIndex !==
                          this.current_selectedIndex) &&
                        this.trigger_form_field_change({
                          selected:
                            this.form_field.options[i.options_index].value,
                        }),
                      (this.current_selectedIndex =
                        this.form_field.selectedIndex),
                      t.preventDefault(),
                      this.search_field_scale())
                );
            }),
            (i.prototype.single_set_selected_text = function (t) {
              return (
                null == t && (t = this.default_text),
                t === this.default_text
                  ? this.selected_item.addClass("chosen-default")
                  : (this.single_deselect_control_build(),
                    this.selected_item.removeClass("chosen-default")),
                this.selected_item.find("span").html(t)
              );
            }),
            (i.prototype.result_deselect = function (t) {
              var e;
              return (
                (e = this.results_data[t]),
                !this.form_field.options[e.options_index].disabled &&
                  ((e.selected = !1),
                  (this.form_field.options[e.options_index].selected = !1),
                  (this.selected_option_count = null),
                  this.result_clear_highlight(),
                  this.results_showing && this.winnow_results(),
                  this.trigger_form_field_change({
                    deselected: this.form_field.options[e.options_index].value,
                  }),
                  this.search_field_scale(),
                  !0)
              );
            }),
            (i.prototype.single_deselect_control_build = function () {
              if (this.allow_single_deselect)
                return (
                  this.selected_item.find("abbr").length ||
                    this.selected_item
                      .find("span")
                      .first()
                      .after('<abbr class="search-choice-close"></abbr>'),
                  this.selected_item.addClass("chosen-single-with-deselect")
                );
            }),
            (i.prototype.get_search_field_value = function () {
              return this.search_field.val();
            }),
            (i.prototype.get_search_text = function () {
              return this.escape_html(t.trim(this.get_search_field_value()));
            }),
            (i.prototype.escape_html = function (e) {
              return t("<div/>").text(e).html();
            }),
            (i.prototype.winnow_results_set_highlight = function () {
              var t, e;
              if (
                ((e = this.is_multiple
                  ? []
                  : this.search_results.find(".result-selected.active-result")),
                null !=
                  (t = e.length
                    ? e.first()
                    : this.search_results.find(".active-result").first()))
              )
                return this.result_do_highlight(t);
            }),
            (i.prototype.no_results = function (t) {
              var e;
              return (
                (e = this.get_no_results_html(t)),
                this.search_results.append(e),
                this.form_field_jq.trigger("chosen:no_results", {
                  chosen: this,
                })
              );
            }),
            (i.prototype.no_results_clear = function () {
              return this.search_results.find(".no-results").remove();
            }),
            (i.prototype.keydown_arrow = function () {
              var t;
              return this.results_showing && this.result_highlight
                ? (t = this.result_highlight
                    .nextAll("li.active-result")
                    .first())
                  ? this.result_do_highlight(t)
                  : void 0
                : this.results_show();
            }),
            (i.prototype.keyup_arrow = function () {
              var t;
              return this.results_showing || this.is_multiple
                ? this.result_highlight
                  ? ((t = this.result_highlight.prevAll("li.active-result")),
                    t.length
                      ? this.result_do_highlight(t.first())
                      : (this.choices_count() > 0 && this.results_hide(),
                        this.result_clear_highlight()))
                  : void 0
                : this.results_show();
            }),
            (i.prototype.keydown_backstroke = function () {
              var t;
              return this.pending_backstroke
                ? (this.choice_destroy(
                    this.pending_backstroke.find("a").first()
                  ),
                  this.clear_backstroke())
                : ((t = this.search_container
                    .siblings("li.search-choice")
                    .last()),
                  t.length && !t.hasClass("search-choice-disabled")
                    ? ((this.pending_backstroke = t),
                      this.single_backstroke_delete
                        ? this.keydown_backstroke()
                        : this.pending_backstroke.addClass(
                            "search-choice-focus"
                          ))
                    : void 0);
            }),
            (i.prototype.clear_backstroke = function () {
              return (
                this.pending_backstroke &&
                  this.pending_backstroke.removeClass("search-choice-focus"),
                (this.pending_backstroke = null)
              );
            }),
            (i.prototype.search_field_scale = function () {
              var e, i, n, o, s, a, r, l;
              if (this.is_multiple) {
                for (
                  o = {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px",
                    display: "none",
                    whiteSpace: "pre",
                  },
                    s = [
                      "fontSize",
                      "fontStyle",
                      "fontWeight",
                      "fontFamily",
                      "lineHeight",
                      "textTransform",
                      "letterSpacing",
                    ],
                    r = 0,
                    l = s.length;
                  r < l;
                  r++
                )
                  (n = s[r]), (o[n] = this.search_field.css(n));
                return (
                  (i = t("<div />").css(o)),
                  i.text(this.get_search_field_value()),
                  t("body").append(i),
                  (a = i.width() + 25),
                  i.remove(),
                  (e = this.container.outerWidth()),
                  (a = Math.min(e - 10, a)),
                  this.search_field.width(a)
                );
              }
            }),
            (i.prototype.trigger_form_field_change = function (t) {
              return (
                this.form_field_jq.trigger("input", t),
                this.form_field_jq.trigger("change", t)
              );
            }),
            i
          );
        })(e));
    }.call(this));
  },
  function (t, e) {
    !(function (t) {
      var e,
        i,
        n,
        o,
        s,
        a,
        r = function () {},
        l = !!window.jQuery,
        c = t(window),
        d = function (t, i) {
          e.ev.on("mfp" + t + ".mfp", i);
        },
        h = function (e, i, n, o) {
          var s = document.createElement("div");
          return (
            (s.className = "mfp-" + e),
            n && (s.innerHTML = n),
            o ? i && i.appendChild(s) : ((s = t(s)), i && s.appendTo(i)),
            s
          );
        },
        u = function (i, n) {
          e.ev.triggerHandler("mfp" + i, n),
            e.st.callbacks &&
              ((i = i.charAt(0).toLowerCase() + i.slice(1)),
              e.st.callbacks[i] &&
                e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
        },
        p = function (i) {
          return (
            (i === a && e.currTemplate.closeBtn) ||
              ((e.currTemplate.closeBtn = t(
                e.st.closeMarkup.replace("%title%", e.st.tClose)
              )),
              (a = i)),
            e.currTemplate.closeBtn
          );
        },
        f = function () {
          t.magnificPopup.instance ||
            ((e = new r()), e.init(), (t.magnificPopup.instance = e));
        },
        g = function () {
          var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== t.transition) return !0;
          for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
          return !1;
        };
      (r.prototype = {
        constructor: r,
        init: function () {
          var i = navigator.appVersion;
          (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
            (e.isAndroid = /android/gi.test(i)),
            (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
            (e.supportsTransition = g()),
            (e.probablyMobile =
              e.isAndroid ||
              e.isIOS ||
              /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                navigator.userAgent
              )),
            (n = t(document)),
            (e.popupsCache = {});
        },
        open: function (i) {
          var o;
          if (!1 === i.isObj) {
            (e.items = i.items.toArray()), (e.index = 0);
            var a,
              r = i.items;
            for (o = 0; o < r.length; o++)
              if (((a = r[o]), a.parsed && (a = a.el[0]), a === i.el[0])) {
                e.index = o;
                break;
              }
          } else
            (e.items = t.isArray(i.items) ? i.items : [i.items]),
              (e.index = i.index || 0);
          if (e.isOpen) return void e.updateItemHTML();
          (e.types = []),
            (s = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = n),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = h("bg").on("click.mfp", function () {
                e.close();
              })),
              (e.wrap = h("wrap")
                .attr("tabindex", -1)
                .on("click.mfp", function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = h("container", e.wrap))),
            (e.contentContainer = h("content")),
            e.st.preloader &&
              (e.preloader = h("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (o = 0; o < l.length; o++) {
            var f = l[o];
            (f = f.charAt(0).toUpperCase() + f.slice(1)), e["init" + f].call(e);
          }
          u("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (d("MarkupParse", function (t, e, i, n) {
                    i.close_replaceWith = p(n.type);
                  }),
                  (s += " mfp-close-btn-in"))
                : e.wrap.append(p())),
            e.st.alignTop && (s += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: c.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: n.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              n.on("keyup.mfp", function (t) {
                27 === t.keyCode && e.close();
              }),
            c.on("resize.mfp", function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (s += " mfp-auto-cursor"),
            s && e.wrap.addClass(s);
          var g = (e.wH = c.height()),
            m = {};
          if (e.fixedContentPos && e._hasScrollBar(g)) {
            var _ = e._getScrollbarSize();
            _ && (m.marginRight = _);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (m.overflow = "hidden"));
          var v = e.st.mainClass;
          return (
            e.isIE7 && (v += " mfp-ie7"),
            v && e._addClassToMFP(v),
            e.updateItemHTML(),
            u("BuildControls"),
            t("html").css(m),
            e.bgOverlay
              .add(e.wrap)
              .prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP("mfp-ready"), e._setFocus())
                : e.bgOverlay.addClass("mfp-ready"),
                n.on("focusin.mfp", e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(g),
            u("Open"),
            i
          );
        },
        close: function () {
          e.isOpen &&
            (u("BeforeClose"),
            (e.isOpen = !1),
            e.st.removalDelay && !e.isLowIE && e.supportsTransition
              ? (e._addClassToMFP("mfp-removing"),
                setTimeout(function () {
                  e._close();
                }, e.st.removalDelay))
              : e._close());
        },
        _close: function () {
          u("Close");
          var i = "mfp-removing mfp-ready ";
          if (
            (e.bgOverlay.detach(),
            e.wrap.detach(),
            e.container.empty(),
            e.st.mainClass && (i += e.st.mainClass + " "),
            e._removeClassFromMFP(i),
            e.fixedContentPos)
          ) {
            var o = { marginRight: "" };
            e.isIE7 ? t("body, html").css("overflow", "") : (o.overflow = ""),
              t("html").css(o);
          }
          n.off("keyup.mfp focusin.mfp"),
            e.ev.off(".mfp"),
            e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            e.bgOverlay.attr("class", "mfp-bg"),
            e.container.attr("class", "mfp-container"),
            !e.st.showCloseBtn ||
              (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
              (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
            e.st.autoFocusLast &&
              e._lastFocusedEl &&
              t(e._lastFocusedEl).focus(),
            (e.currItem = null),
            (e.content = null),
            (e.currTemplate = null),
            (e.prevHeight = 0),
            u("AfterClose");
        },
        updateSize: function (t) {
          if (e.isIOS) {
            var i = document.documentElement.clientWidth / window.innerWidth,
              n = window.innerHeight * i;
            e.wrap.css("height", n), (e.wH = n);
          } else e.wH = t || c.height();
          e.fixedContentPos || e.wrap.css("height", e.wH), u("Resize");
        },
        updateItemHTML: function () {
          var i = e.items[e.index];
          e.contentContainer.detach(),
            e.content && e.content.detach(),
            i.parsed || (i = e.parseEl(e.index));
          var n = i.type;
          if (
            (u("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
            (e.currItem = i),
            !e.currTemplate[n])
          ) {
            var s = !!e.st[n] && e.st[n].markup;
            u("FirstMarkupParse", s), (e.currTemplate[n] = !s || t(s));
          }
          o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
          var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](
            i,
            e.currTemplate[n]
          );
          e.appendContent(a, n),
            (i.preloaded = !0),
            u("Change", i),
            (o = i.type),
            e.container.prepend(e.contentContainer),
            u("AfterChange");
        },
        appendContent: function (t, i) {
          (e.content = t),
            t
              ? e.st.showCloseBtn &&
                e.st.closeBtnInside &&
                !0 === e.currTemplate[i]
                ? e.content.find(".mfp-close").length || e.content.append(p())
                : (e.content = t)
              : (e.content = ""),
            u("BeforeAppend"),
            e.container.addClass("mfp-" + i + "-holder"),
            e.contentContainer.append(e.content);
        },
        parseEl: function (i) {
          var n,
            o = e.items[i];
          if (
            (o.tagName
              ? (o = { el: t(o) })
              : ((n = o.type), (o = { data: o, src: o.src })),
            o.el)
          ) {
            for (var s = e.types, a = 0; a < s.length; a++)
              if (o.el.hasClass("mfp-" + s[a])) {
                n = s[a];
                break;
              }
            (o.src = o.el.attr("data-mfp-src")),
              o.src || (o.src = o.el.attr("href"));
          }
          return (
            (o.type = n || e.st.type || "inline"),
            (o.index = i),
            (o.parsed = !0),
            (e.items[i] = o),
            u("ElementParse", o),
            e.items[i]
          );
        },
        addGroup: function (t, i) {
          var n = function (n) {
            (n.mfpEl = this), e._openClick(n, t, i);
          };
          i || (i = {});
          var o = "click.magnificPopup";
          (i.mainEl = t),
            i.items
              ? ((i.isObj = !0), t.off(o).on(o, n))
              : ((i.isObj = !1),
                i.delegate
                  ? t.off(o).on(o, i.delegate, n)
                  : ((i.items = t), t.off(o).on(o, n)));
        },
        _openClick: function (i, n, o) {
          if (
            (void 0 !== o.midClick
              ? o.midClick
              : t.magnificPopup.defaults.midClick) ||
            !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
          ) {
            var s =
              void 0 !== o.disableOn
                ? o.disableOn
                : t.magnificPopup.defaults.disableOn;
            if (s)
              if (t.isFunction(s)) {
                if (!s.call(e)) return !0;
              } else if (c.width() < s) return !0;
            i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
              (o.el = t(i.mfpEl)),
              o.delegate && (o.items = n.find(o.delegate)),
              e.open(o);
          }
        },
        updateStatus: function (t, n) {
          if (e.preloader) {
            i !== t && e.container.removeClass("mfp-s-" + i),
              n || "loading" !== t || (n = e.st.tLoading);
            var o = { status: t, text: n };
            u("UpdateStatus", o),
              (t = o.status),
              (n = o.text),
              e.preloader.html(n),
              e.preloader.find("a").on("click", function (t) {
                t.stopImmediatePropagation();
              }),
              e.container.addClass("mfp-s-" + t),
              (i = t);
          }
        },
        _checkIfClose: function (i) {
          if (!t(i).hasClass("mfp-prevent-close")) {
            var n = e.st.closeOnContentClick,
              o = e.st.closeOnBgClick;
            if (n && o) return !0;
            if (
              !e.content ||
              t(i).hasClass("mfp-close") ||
              (e.preloader && i === e.preloader[0])
            )
              return !0;
            if (i === e.content[0] || t.contains(e.content[0], i)) {
              if (n) return !0;
            } else if (o && t.contains(document, i)) return !0;
            return !1;
          }
        },
        _addClassToMFP: function (t) {
          e.bgOverlay.addClass(t), e.wrap.addClass(t);
        },
        _removeClassFromMFP: function (t) {
          this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
        },
        _hasScrollBar: function (t) {
          return (
            (e.isIE7 ? n.height() : document.body.scrollHeight) >
            (t || c.height())
          );
        },
        _setFocus: function () {
          (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
        },
        _onFocusIn: function (i) {
          if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
            return e._setFocus(), !1;
        },
        _parseMarkup: function (e, i, n) {
          var o;
          n.data && (i = t.extend(n.data, i)),
            u("MarkupParse", [e, i, n]),
            t.each(i, function (i, n) {
              if (void 0 === n || !1 === n) return !0;
              if (((o = i.split("_")), o.length > 1)) {
                var s = e.find(".mfp-" + o[0]);
                if (s.length > 0) {
                  var a = o[1];
                  "replaceWith" === a
                    ? s[0] !== n[0] && s.replaceWith(n)
                    : "img" === a
                    ? s.is("img")
                      ? s.attr("src", n)
                      : s.replaceWith(
                          t("<img>")
                            .attr("src", n)
                            .attr("class", s.attr("class"))
                        )
                    : s.attr(o[1], n);
                }
              } else e.find(".mfp-" + i).html(n);
            });
        },
        _getScrollbarSize: function () {
          if (void 0 === e.scrollbarSize) {
            var t = document.createElement("div");
            (t.style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
              document.body.appendChild(t),
              (e.scrollbarSize = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t);
          }
          return e.scrollbarSize;
        },
      }),
        (t.magnificPopup = {
          instance: null,
          proto: r.prototype,
          modules: [],
          open: function (e, i) {
            return (
              f(),
              (e = e ? t.extend(!0, {}, e) : {}),
              (e.isObj = !0),
              (e.index = i || 0),
              this.instance.open(e)
            );
          },
          close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
          },
          registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options),
              t.extend(this.proto, i.proto),
              this.modules.push(e);
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
        (t.fn.magnificPopup = function (i) {
          f();
          var n = t(this);
          if ("string" == typeof i)
            if ("open" === i) {
              var o,
                s = l ? n.data("magnificPopup") : n[0].magnificPopup,
                a = parseInt(arguments[1], 10) || 0;
              s.items
                ? (o = s.items[a])
                : ((o = n),
                  s.delegate && (o = o.find(s.delegate)),
                  (o = o.eq(a))),
                e._openClick({ mfpEl: o }, n, s);
            } else
              e.isOpen &&
                e[i].apply(e, Array.prototype.slice.call(arguments, 1));
          else
            (i = t.extend(!0, {}, i)),
              l ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
              e.addGroup(n, i);
          return n;
        });
      var m,
        _,
        v,
        y = function () {
          v && (_.after(v.addClass(m)).detach(), (v = null));
        };
      t.magnificPopup.registerModule("inline", {
        options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found",
        },
        proto: {
          initInline: function () {
            e.types.push("inline"),
              d("Close.inline", function () {
                y();
              });
          },
          getInline: function (i, n) {
            if ((y(), i.src)) {
              var o = e.st.inline,
                s = t(i.src);
              if (s.length) {
                var a = s[0].parentNode;
                a &&
                  a.tagName &&
                  (_ || ((m = o.hiddenClass), (_ = h(m)), (m = "mfp-" + m)),
                  (v = s.after(_).detach().removeClass(m))),
                  e.updateStatus("ready");
              } else e.updateStatus("error", o.tNotFound), (s = t("<div>"));
              return (i.inlineElement = s), s;
            }
            return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
          },
        },
      });
      var w,
        b = function () {
          w && t(document.body).removeClass(w);
        },
        x = function () {
          b(), e.req && e.req.abort();
        };
      t.magnificPopup.registerModule("ajax", {
        options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
          initAjax: function () {
            e.types.push("ajax"),
              (w = e.st.ajax.cursor),
              d("Close.ajax", x),
              d("BeforeChange.ajax", x);
          },
          getAjax: function (i) {
            w && t(document.body).addClass(w), e.updateStatus("loading");
            var n = t.extend(
              {
                url: i.src,
                success: function (n, o, s) {
                  var a = { data: n, xhr: s };
                  u("ParseAjax", a),
                    e.appendContent(t(a.data), "ajax"),
                    (i.finished = !0),
                    b(),
                    e._setFocus(),
                    setTimeout(function () {
                      e.wrap.addClass("mfp-ready");
                    }, 16),
                    e.updateStatus("ready"),
                    u("AjaxContentAdded");
                },
                error: function () {
                  b(),
                    (i.finished = i.loadError = !0),
                    e.updateStatus(
                      "error",
                      e.st.ajax.tError.replace("%url%", i.src)
                    );
                },
              },
              e.st.ajax.settings
            );
            return (e.req = t.ajax(n)), "";
          },
        },
      });
      var j,
        C = function (i) {
          if (i.data && void 0 !== i.data.title) return i.data.title;
          var n = e.st.image.titleSrc;
          if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || "";
          }
          return "";
        };
      t.magnificPopup.registerModule("image", {
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
            var i = e.st.image,
              n = ".image";
            e.types.push("image"),
              d("Open" + n, function () {
                "image" === e.currItem.type &&
                  i.cursor &&
                  t(document.body).addClass(i.cursor);
              }),
              d("Close" + n, function () {
                i.cursor && t(document.body).removeClass(i.cursor),
                  c.off("resize.mfp");
              }),
              d("Resize" + n, e.resizeImage),
              e.isLowIE && d("AfterChange", e.resizeImage);
          },
          resizeImage: function () {
            var t = e.currItem;
            if (t && t.img && e.st.image.verticalFit) {
              var i = 0;
              e.isLowIE &&
                (i =
                  parseInt(t.img.css("padding-top"), 10) +
                  parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", e.wH - i);
            }
          },
          _onImageHasSize: function (t) {
            t.img &&
              ((t.hasSize = !0),
              j && clearInterval(j),
              (t.isCheckingImgSize = !1),
              u("ImageHasSize", t),
              t.imgHidden &&
                (e.content && e.content.removeClass("mfp-loading"),
                (t.imgHidden = !1)));
          },
          findImageSize: function (t) {
            var i = 0,
              n = t.img[0],
              o = function (s) {
                j && clearInterval(j),
                  (j = setInterval(function () {
                    if (n.naturalWidth > 0) return void e._onImageHasSize(t);
                    i > 200 && clearInterval(j),
                      i++,
                      3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500);
                  }, s));
              };
            o(1);
          },
          getImage: function (i, n) {
            var o = 0,
              s = function () {
                i &&
                  (i.img[0].complete
                    ? (i.img.off(".mfploader"),
                      i === e.currItem &&
                        (e._onImageHasSize(i), e.updateStatus("ready")),
                      (i.hasSize = !0),
                      (i.loaded = !0),
                      u("ImageLoadComplete"))
                    : (o++, o < 200 ? setTimeout(s, 100) : a()));
              },
              a = function () {
                i &&
                  (i.img.off(".mfploader"),
                  i === e.currItem &&
                    (e._onImageHasSize(i),
                    e.updateStatus("error", r.tError.replace("%url%", i.src))),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  (i.loadError = !0));
              },
              r = e.st.image,
              l = n.find(".mfp-img");
            if (l.length) {
              var c = document.createElement("img");
              (c.className = "mfp-img"),
                i.el &&
                  i.el.find("img").length &&
                  (c.alt = i.el.find("img").attr("alt")),
                (i.img = t(c).on("load.mfploader", s).on("error.mfploader", a)),
                (c.src = i.src),
                l.is("img") && (i.img = i.img.clone()),
                (c = i.img[0]),
                c.naturalWidth > 0
                  ? (i.hasSize = !0)
                  : c.width || (i.hasSize = !1);
            }
            return (
              e._parseMarkup(n, { title: C(i), img_replaceWith: i.img }, i),
              e.resizeImage(),
              i.hasSize
                ? (j && clearInterval(j),
                  i.loadError
                    ? (n.addClass("mfp-loading"),
                      e.updateStatus("error", r.tError.replace("%url%", i.src)))
                    : (n.removeClass("mfp-loading"), e.updateStatus("ready")),
                  n)
                : (e.updateStatus("loading"),
                  (i.loading = !0),
                  i.hasSize ||
                    ((i.imgHidden = !0),
                    n.addClass("mfp-loading"),
                    e.findImageSize(i)),
                  n)
            );
          },
        },
      });
      var k,
        z = function () {
          return (
            void 0 === k &&
              (k = void 0 !== document.createElement("p").style.MozTransform),
            k
          );
        };
      t.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (t) {
            return t.is("img") ? t : t.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var t,
              i = e.st.zoom,
              n = ".zoom";
            if (i.enabled && e.supportsTransition) {
              var o,
                s,
                a = i.duration,
                r = function (t) {
                  var e = t
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                    o = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    s = "transition";
                  return (
                    (o["-webkit-" + s] =
                      o["-moz-" + s] =
                      o["-o-" + s] =
                      o[s] =
                        n),
                    e.css(o),
                    e
                  );
                },
                l = function () {
                  e.content.css("visibility", "visible");
                };
              d("BuildControls" + n, function () {
                if (e._allowZoom()) {
                  if (
                    (clearTimeout(o),
                    e.content.css("visibility", "hidden"),
                    !(t = e._getItemToZoom()))
                  )
                    return void l();
                  (s = r(t)),
                    s.css(e._getOffset()),
                    e.wrap.append(s),
                    (o = setTimeout(function () {
                      s.css(e._getOffset(!0)),
                        (o = setTimeout(function () {
                          l(),
                            setTimeout(function () {
                              s.remove(),
                                (t = s = null),
                                u("ZoomAnimationEnded");
                            }, 16);
                        }, a));
                    }, 16));
                }
              }),
                d("BeforeClose" + n, function () {
                  if (e._allowZoom()) {
                    if ((clearTimeout(o), (e.st.removalDelay = a), !t)) {
                      if (!(t = e._getItemToZoom())) return;
                      s = r(t);
                    }
                    s.css(e._getOffset(!0)),
                      e.wrap.append(s),
                      e.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        s.css(e._getOffset());
                      }, 16);
                  }
                }),
                d("Close" + n, function () {
                  e._allowZoom() && (l(), s && s.remove(), (t = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === e.currItem.type;
          },
          _getItemToZoom: function () {
            return !!e.currItem.hasSize && e.currItem.img;
          },
          _getOffset: function (i) {
            var n;
            n = i
              ? e.currItem.img
              : e.st.zoom.opener(e.currItem.el || e.currItem);
            var o = n.offset(),
              s = parseInt(n.css("padding-top"), 10),
              a = parseInt(n.css("padding-bottom"), 10);
            o.top -= t(window).scrollTop() - s;
            var r = {
              width: n.width(),
              height: (l ? n.innerHeight() : n[0].offsetHeight) - a - s,
            };
            return (
              z()
                ? (r["-moz-transform"] = r.transform =
                    "translate(" + o.left + "px," + o.top + "px)")
                : ((r.left = o.left), (r.top = o.top)),
              r
            );
          },
        },
      });
      var T = function (t) {
        if (e.currTemplate.iframe) {
          var i = e.currTemplate.iframe.find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
      t.magnificPopup.registerModule("iframe", {
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
            e.types.push("iframe"),
              d("BeforeChange", function (t, e, i) {
                e !== i && ("iframe" === e ? T() : "iframe" === i && T(!0));
              }),
              d("Close.iframe", function () {
                T();
              });
          },
          getIframe: function (i, n) {
            var o = i.src,
              s = e.st.iframe;
            t.each(s.patterns, function () {
              if (o.indexOf(this.index) > -1)
                return (
                  this.id &&
                    (o =
                      "string" == typeof this.id
                        ? o.substr(
                            o.lastIndexOf(this.id) + this.id.length,
                            o.length
                          )
                        : this.id.call(this, o)),
                  (o = this.src.replace("%id%", o)),
                  !1
                );
            });
            var a = {};
            return (
              s.srcAction && (a[s.srcAction] = o),
              e._parseMarkup(n, a, i),
              e.updateStatus("ready"),
              n
            );
          },
        },
      });
      var S = function (t) {
          var i = e.items.length;
          return t > i - 1 ? t - i : t < 0 ? i + t : t;
        },
        I = function (t, e, i) {
          return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
        };
      t.magnificPopup.registerModule("gallery", {
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
            var i = e.st.gallery,
              o = ".mfp-gallery";
            if (((e.direction = !0), !i || !i.enabled)) return !1;
            (s += " mfp-gallery"),
              d("Open" + o, function () {
                i.navigateByImgClick &&
                  e.wrap.on("click" + o, ".mfp-img", function () {
                    if (e.items.length > 1) return e.next(), !1;
                  }),
                  n.on("keydown" + o, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              d("UpdateStatus" + o, function (t, i) {
                i.text &&
                  (i.text = I(i.text, e.currItem.index, e.items.length));
              }),
              d("MarkupParse" + o, function (t, n, o, s) {
                var a = e.items.length;
                o.counter = a > 1 ? I(i.tCounter, s.index, a) : "";
              }),
              d("BuildControls" + o, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                  var n = i.arrowMarkup,
                    o = (e.arrowLeft = t(
                      n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                    ).addClass("mfp-prevent-close")),
                    s = (e.arrowRight = t(
                      n
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass("mfp-prevent-close"));
                  o.on("click", function () {
                    e.prev();
                  }),
                    s.on("click", function () {
                      e.next();
                    }),
                    e.container.append(o.add(s));
                }
              }),
              d("Change" + o, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              d("Close" + o, function () {
                n.off(o),
                  e.wrap.off("click" + o),
                  (e.arrowRight = e.arrowLeft = null);
              });
          },
          next: function () {
            (e.direction = !0), (e.index = S(e.index + 1)), e.updateItemHTML();
          },
          prev: function () {
            (e.direction = !1), (e.index = S(e.index - 1)), e.updateItemHTML();
          },
          goTo: function (t) {
            (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
          },
          preloadNearbyImages: function () {
            var t,
              i = e.st.gallery.preload,
              n = Math.min(i[0], e.items.length),
              o = Math.min(i[1], e.items.length);
            for (t = 1; t <= (e.direction ? o : n); t++)
              e._preloadItem(e.index + t);
            for (t = 1; t <= (e.direction ? n : o); t++)
              e._preloadItem(e.index - t);
          },
          _preloadItem: function (i) {
            if (((i = S(i)), !e.items[i].preloaded)) {
              var n = e.items[i];
              n.parsed || (n = e.parseEl(i)),
                u("LazyLoad", n),
                "image" === n.type &&
                  (n.img = t('<img class="mfp-img" />')
                    .on("load.mfploader", function () {
                      n.hasSize = !0;
                    })
                    .on("error.mfploader", function () {
                      (n.hasSize = !0),
                        (n.loadError = !0),
                        u("LazyLoadError", n);
                    })
                    .attr("src", n.src)),
                (n.preloaded = !0);
            }
          },
        },
      });
      t.magnificPopup.registerModule("retina", {
        options: {
          replaceSrc: function (t) {
            return t.src.replace(/\.\w+$/, function (t) {
              return "@2x" + t;
            });
          },
          ratio: 1,
        },
        proto: {
          initRetina: function () {
            if (window.devicePixelRatio > 1) {
              var t = e.st.retina,
                i = t.ratio;
              (i = isNaN(i) ? i() : i),
                i > 1 &&
                  (d("ImageHasSize.retina", function (t, e) {
                    e.img.css({
                      "max-width": e.img[0].naturalWidth / i,
                      width: "100%",
                    });
                  }),
                  d("ElementParse.retina", function (e, n) {
                    n.src = t.replaceSrc(n, i);
                  }));
            }
          },
        },
      }),
        f();
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      t.fn.jnewsgif = function (e) {
        var i = {};
        return (
          (e = e ? t.extend(i, e) : t.extend(i)),
          t(this).each(function () {
            var e = t(this),
              i = ["ff-container", "ff-responsive"];
            e.addClass("ff-setup ff-image");
            var n = t(
                '<div class="ff-overlay"><div class="ff-control">GIF</div></div>'
              ).insertBefore(e),
              o = t("<canvas />", { class: "ff-canvas" })
                .attr({ width: 0, height: 0 })
                .insertBefore(e);
            e
              .add(n)
              .add(o)
              .wrapAll(
                t("<div />", { class: i.join(" ") + " " + e[0].classList })
              ),
              n.on("click", function () {
                var e = t(this),
                  i = t(e).siblings("canvas");
                t(i).hasClass("ff-canvas-active")
                  ? (t(e).removeClass("ff-container-active"),
                    t(i)
                      .removeClass("ff-canvas-active")
                      .addClass("ff-canvas-ready"))
                  : (t(e).addClass("ff-container-active"),
                    t(i)
                      .removeClass("ff-canvas-ready")
                      .addClass("ff-canvas-active"));
              }),
              e.imagesLoaded().progress(function (e, i) {
                var n = t(i.img).siblings("canvas"),
                  o =
                    "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
                  s = t(i.img).width(),
                  a = t(i.img).height();
                n.attr({ width: s, height: a }),
                  n[0].getContext("2d").drawImage(t(i.img).get(0), 0, 0, s, a),
                  n.addClass("ff-canvas-ready").on(o, function () {
                    t(this).off(o), t(i.img).addClass("ff-image-ready");
                  });
              });
          })
        );
      };
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      t.fn.jowlslider = function (e) {
        var i = {
          items: 5,
          responsive: {
            0: { items: 4, nav: !1 },
            768: { items: 6, nav: !1 },
            1024: { items: 7, nav: !0 },
          },
          margin: 10,
          nav: !0,
          autoplay: !0,
          slideSpeed: 500,
          delay: 5e3,
          rtl: !1,
          thumbnail: ".jeg_slider_thumbnail",
          theme: "jeg_owlslider",
          thumbnail_theme: "jeg_owlslider_thumbnail",
        };
        return (
          (e = e ? t.extend(i, e) : t.extend(i)),
          t(this).each(function () {
            function i(t) {
              var e = t.relatedTarget.relative(t.item.index),
                i = s.find(".owl-stage").children();
              i.removeClass("current"),
                i.eq(t.relatedTarget.normalize(e)).toggleClass("current");
            }
            var n = t(this).addClass("owl-carousel"),
              o = !1,
              s = t(n).parent().find(e.thumbnail).addClass("owl-carousel"),
              a = !1;
            (e.hover = t(n).data("hover-action")),
              (e.autoplay = t(n).data("autoplay")),
              (e.delay = t(n).data("delay")),
              t(n)
                .on("initialized.owl.carousel", function () {
                  n.siblings(".jeg_slider_placeholder").remove(),
                    n.parent().addClass("jeg_slider_wrapper_loaded");
                })
                .owlCarousel({
                  items: 1,
                  autoplay: e.autoplay,
                  autoplaySpeed: e.slideSpeed,
                  autoplayTimeout: e.delay,
                  nav: e.nav,
                  navText: !1,
                  loop: !0,
                  lazyLoad: !0,
                  callbacks: !0,
                  rtl: e.rtl,
                }),
              s
                .on("initialized.owl.carousel", function (t) {
                  i(t), s.addClass("disabled_nav");
                })
                .owlCarousel({
                  nav: !1,
                  navText: !1,
                  dots: !1,
                  navRewind: !1,
                  items: e.items,
                  margin: e.margin,
                  rtl: e.rtl,
                  lazyLoad: !0,
                  responsive: e.responsive,
                }),
              t(n).on("changed.owl.carousel", function (t) {
                var n = t.relatedTarget.relative(t.property.value, !0);
                o ||
                  ((o = !0),
                  s.trigger("to.owl.carousel", [n, e.slideSpeed, !0]),
                  (o = !1)),
                  i(t);
              }),
              s
                .mousedown(function (t) {
                  a = !0;
                })
                .mouseup(function (t) {
                  a = !1;
                }),
              s
                .on("changed.owl.carousel", function (i) {
                  o ||
                    ((o = !0),
                    t(n).trigger(
                      "to.owl.carousel",
                      i.item.index,
                      e.slideSpeed,
                      !0
                    ),
                    (o = !1));
                })
                .on("click", ".owl-item", function (i) {
                  i.preventDefault(),
                    t(n).trigger(
                      "to.owl.carousel",
                      t(this).index(),
                      e.slideSpeed,
                      !0
                    );
                })
                .on("hover", ".owl-item", function (i) {
                  i.preventDefault(),
                    !0 === e.hover &&
                      (a ||
                        t(n).trigger(
                          "to.owl.carousel",
                          t(this).index(),
                          e.slideSpeed,
                          !0
                        ));
                });
          })
        );
      };
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      t.fn.jsticky = function (e) {
        var i = {
          item_offset: ".jeg_header",
          wrapper: ".jeg_navbar_wrapper",
          state_class: ".jeg_sticky_nav",
          mode: "scroll",
          use_translate3d: !0,
          onScrollDown: !1,
          onScrollUp: !1,
          onStickyRemoved: !1,
          broadcast_position: !1,
        };
        return (
          (e = e ? t.extend(i, e) : t.extend(i)),
          t(this).each(function () {
            var i,
              n = 1 == jnewsoption.admin_bar ? 32 : 0,
              o = 0,
              s = 0,
              a = 0,
              r = t(this),
              l = r.outerHeight(),
              c = 0,
              d = 0,
              h = 0,
              u = function () {
                1 == jnewsoption.admin_bar &&
                  (t(window).width() <= 782 && t(window).width() > 600
                    ? (n = 46)
                    : t(window).width() <= 600 && (n = 0)),
                  (i = t(".sticky_blankspace").offset().top);
              };
            u();
            var p = function () {
              if ("normal" !== e.mode) {
                if (
                  ((d = t(this).scrollTop()),
                  (h = Math.abs(d - s)),
                  r.hasClass(e.state_class) || r.addClass("notransition"),
                  d > s)
                ) {
                  if ("scroll" === e.mode) {
                    if (d < i + l) return;
                  } else if (d < i - n) return;
                  r.addClass(e.state_class),
                    "scroll" === e.mode
                      ? (c = a - h) < -l && (c = -l)
                      : "pinned" === e.mode && h > 5 && d > l + n && (c = -l),
                    "function" == typeof e.onScrollDown && e.onScrollDown();
                } else
                  d > i - n
                    ? (r.removeClass("notransition"),
                      "scroll" === e.mode && (c = a + h),
                      (("pinned" === e.mode && h > 5) || c > 0) &&
                        ((c = 0), r.removeClass("notransition")))
                    : (r.removeClass(e.state_class),
                      (c = 0),
                      "function" == typeof e.onStickyRemoved &&
                        e.onStickyRemoved()),
                    "function" == typeof e.onScrollUp && e.onScrollUp();
                (o = d < i - n ? 0 : c + n),
                  r.hasClass(e.state_class)
                    ? e.use_translate3d
                      ? r.css({
                          "-webkit-transform":
                            "translate3d(0px, " + o + "px, 0px)",
                          transform: "translate3d(0px, " + o + "px, 0px)",
                        })
                      : r.css({ top: o + "px" })
                    : e.use_translate3d
                    ? r.css({ "-webkit-transform": "", transform: "" })
                    : r.css({ top: "" }),
                  e.broadcast_position &&
                    t(window).trigger("jnews_additional_sticky_margin", l + o),
                  (a = c),
                  (s = d);
              }
            };
            t(window).on("scroll", p),
              t(window).on("load resize", function () {
                setTimeout(u, 200);
              }),
              t(document).on("ready", u);
          })
        );
      };
    })(jQuery);
  },
  function (t, e, i) {
    var n, o, s;
    !(function (a, r) {
      (o = [i(0)]),
        (n = r),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(0, function (t) {
      function e(t) {
        if (t in d.style) return t;
        for (
          var e = ["Moz", "Webkit", "O", "ms"],
            i = t.charAt(0).toUpperCase() + t.substr(1),
            n = 0;
          n < e.length;
          ++n
        ) {
          var o = e[n] + i;
          if (o in d.style) return o;
        }
      }
      function i(t) {
        return "string" == typeof t && this.parse(t), this;
      }
      function n(t, e, i) {
        !0 === e
          ? t.queue(i)
          : e
          ? t.queue(e, i)
          : t.each(function () {
              i.call(this);
            });
      }
      function o(e) {
        var i = [];
        return (
          t.each(e, function (e) {
            (e = t.camelCase(e)),
              (e = t.transit.propertyMap[e] || t.cssProps[e] || e),
              (e = r(e)),
              h[e] && (e = r(h[e])),
              -1 === t.inArray(e, i) && i.push(e);
          }),
          i
        );
      }
      function s(e, i, n, s) {
        var a = o(e);
        t.cssEase[n] && (n = t.cssEase[n]);
        var r = c(i) + " " + n;
        parseInt(s, 10) > 0 && (r += " " + c(s));
        var l = [];
        return (
          t.each(a, function (t, e) {
            l.push(e + " " + r);
          }),
          l.join(", ")
        );
      }
      function a(e, i) {
        i || (t.cssNumber[e] = !0),
          (t.transit.propertyMap[e] = h.transform),
          (t.cssHooks[e] = {
            get: function (i) {
              return t(i).css("transit:transform").get(e);
            },
            set: function (i, n) {
              var o = t(i).css("transit:transform");
              o.setFromString(e, n), t(i).css({ "transit:transform": o });
            },
          });
      }
      function r(t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      function l(t, e) {
        return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t;
      }
      function c(e) {
        var i = e;
        return (
          "string" != typeof i ||
            i.match(/^[\-0-9\.]+/) ||
            (i = t.fx.speeds[i] || t.fx.speeds._default),
          l(i, "ms")
        );
      }
      t.transit = {
        version: "0.9.12",
        propertyMap: {
          marginLeft: "margin",
          marginRight: "margin",
          marginBottom: "margin",
          marginTop: "margin",
          paddingLeft: "padding",
          paddingRight: "padding",
          paddingBottom: "padding",
          paddingTop: "padding",
        },
        enabled: !0,
        useTransitionEnd: !1,
      };
      var d = document.createElement("div"),
        h = {},
        u = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
      (h.transition = e("transition")),
        (h.transitionDelay = e("transitionDelay")),
        (h.transform = e("transform")),
        (h.transformOrigin = e("transformOrigin")),
        (h.filter = e("Filter")),
        (h.transform3d = (function () {
          return (
            (d.style[h.transform] = ""),
            (d.style[h.transform] = "rotateY(90deg)"),
            "" !== d.style[h.transform]
          );
        })());
      var p = {
          transition: "transitionend",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          WebkitTransition: "webkitTransitionEnd",
          msTransition: "MSTransitionEnd",
        },
        f = (h.transitionEnd = p[h.transition] || null);
      for (var g in h)
        h.hasOwnProperty(g) && void 0 === t.support[g] && (t.support[g] = h[g]);
      return (
        (d = null),
        (t.cssEase = {
          _default: "ease",
          in: "ease-in",
          out: "ease-out",
          "in-out": "ease-in-out",
          snap: "cubic-bezier(0,1,.5,1)",
          easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
          easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
          easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
          easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
          easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
          easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
          easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
          easeOutExpo: "cubic-bezier(.19,1,.22,1)",
          easeInOutExpo: "cubic-bezier(1,0,0,1)",
          easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
          easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
          easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
          easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
          easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
          easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
          easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
          easeOutQuint: "cubic-bezier(.23,1,.32,1)",
          easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
          easeInSine: "cubic-bezier(.47,0,.745,.715)",
          easeOutSine: "cubic-bezier(.39,.575,.565,1)",
          easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
          easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
          easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
          easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
        }),
        (t.cssHooks["transit:transform"] = {
          get: function (e) {
            return t(e).data("transform") || new i();
          },
          set: function (e, n) {
            var o = n;
            o instanceof i || (o = new i(o)),
              "WebkitTransform" !== h.transform || u
                ? (e.style[h.transform] = o.toString())
                : (e.style[h.transform] = o.toString(!0)),
              t(e).data("transform", o);
          },
        }),
        (t.cssHooks.transform = { set: t.cssHooks["transit:transform"].set }),
        (t.cssHooks.filter = {
          get: function (t) {
            return t.style[h.filter];
          },
          set: function (t, e) {
            t.style[h.filter] = e;
          },
        }),
        t.fn.jquery < "1.8" &&
          ((t.cssHooks.transformOrigin = {
            get: function (t) {
              return t.style[h.transformOrigin];
            },
            set: function (t, e) {
              t.style[h.transformOrigin] = e;
            },
          }),
          (t.cssHooks.transition = {
            get: function (t) {
              return t.style[h.transition];
            },
            set: function (t, e) {
              t.style[h.transition] = e;
            },
          })),
        a("scale"),
        a("scaleX"),
        a("scaleY"),
        a("translate"),
        a("rotate"),
        a("rotateX"),
        a("rotateY"),
        a("rotate3d"),
        a("perspective"),
        a("skewX"),
        a("skewY"),
        a("x", !0),
        a("y", !0),
        (i.prototype = {
          setFromString: function (t, e) {
            var n =
              "string" == typeof e
                ? e.split(",")
                : e.constructor === Array
                ? e
                : [e];
            n.unshift(t), i.prototype.set.apply(this, n);
          },
          set: function (t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            this.setter[t]
              ? this.setter[t].apply(this, e)
              : (this[t] = e.join(","));
          },
          get: function (t) {
            return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0;
          },
          setter: {
            rotate: function (t) {
              this.rotate = l(t, "deg");
            },
            rotateX: function (t) {
              this.rotateX = l(t, "deg");
            },
            rotateY: function (t) {
              this.rotateY = l(t, "deg");
            },
            scale: function (t, e) {
              void 0 === e && (e = t), (this.scale = t + "," + e);
            },
            skewX: function (t) {
              this.skewX = l(t, "deg");
            },
            skewY: function (t) {
              this.skewY = l(t, "deg");
            },
            perspective: function (t) {
              this.perspective = l(t, "px");
            },
            x: function (t) {
              this.set("translate", t, null);
            },
            y: function (t) {
              this.set("translate", null, t);
            },
            translate: function (t, e) {
              void 0 === this._translateX && (this._translateX = 0),
                void 0 === this._translateY && (this._translateY = 0),
                null !== t && void 0 !== t && (this._translateX = l(t, "px")),
                null !== e && void 0 !== e && (this._translateY = l(e, "px")),
                (this.translate = this._translateX + "," + this._translateY);
            },
          },
          getter: {
            x: function () {
              return this._translateX || 0;
            },
            y: function () {
              return this._translateY || 0;
            },
            scale: function () {
              var t = (this.scale || "1,1").split(",");
              return (
                t[0] && (t[0] = parseFloat(t[0])),
                t[1] && (t[1] = parseFloat(t[1])),
                t[0] === t[1] ? t[0] : t
              );
            },
            rotate3d: function () {
              for (
                var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0;
                e <= 3;
                ++e
              )
                t[e] && (t[e] = parseFloat(t[e]));
              return t[3] && (t[3] = l(t[3], "deg")), t;
            },
          },
          parse: function (t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, i, n) {
              e.setFromString(i, n);
            });
          },
          toString: function (t) {
            var e = [];
            for (var i in this)
              if (this.hasOwnProperty(i)) {
                if (
                  !h.transform3d &&
                  ("rotateX" === i ||
                    "rotateY" === i ||
                    "perspective" === i ||
                    "transformOrigin" === i)
                )
                  continue;
                "_" !== i[0] &&
                  (t && "scale" === i
                    ? e.push(i + "3d(" + this[i] + ",1)")
                    : t && "translate" === i
                    ? e.push(i + "3d(" + this[i] + ",0)")
                    : e.push(i + "(" + this[i] + ")"));
              }
            return e.join(" ");
          },
        }),
        (t.fn.transition = t.fn.transit =
          function (e, i, o, a) {
            var r = this,
              l = 0,
              d = !0,
              u = t.extend(!0, {}, e);
            "function" == typeof i && ((a = i), (i = void 0)),
              "object" == typeof i &&
                ((o = i.easing),
                (l = i.delay || 0),
                (d = void 0 === i.queue || i.queue),
                (a = i.complete),
                (i = i.duration)),
              "function" == typeof o && ((a = o), (o = void 0)),
              void 0 !== u.easing && ((o = u.easing), delete u.easing),
              void 0 !== u.duration && ((i = u.duration), delete u.duration),
              void 0 !== u.complete && ((a = u.complete), delete u.complete),
              void 0 !== u.queue && ((d = u.queue), delete u.queue),
              void 0 !== u.delay && ((l = u.delay), delete u.delay),
              void 0 === i && (i = t.fx.speeds._default),
              void 0 === o && (o = t.cssEase._default),
              (i = c(i));
            var p = s(u, i, o, l),
              g = t.transit.enabled && h.transition,
              m = g ? parseInt(i, 10) + parseInt(l, 10) : 0;
            if (0 === m) {
              return (
                n(r, d, function (t) {
                  r.css(u), a && a.apply(r), t && t();
                }),
                r
              );
            }
            var _ = {},
              v = function (e) {
                var i = !1,
                  n = function () {
                    i && r.unbind(f, n),
                      m > 0 &&
                        r.each(function () {
                          this.style[h.transition] = _[this] || null;
                        }),
                      "function" == typeof a && a.apply(r),
                      "function" == typeof e && e();
                  };
                m > 0 && f && t.transit.useTransitionEnd
                  ? ((i = !0), r.bind(f, n))
                  : window.setTimeout(n, m),
                  r.each(function () {
                    m > 0 && (this.style[h.transition] = p), t(this).css(u);
                  });
              };
            return (
              n(r, d, function (t) {
                this.offsetWidth, v(t);
              }),
              this
            );
          }),
        (t.transit.getTransitionValue = s),
        t
      );
    });
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      function e(e) {
        return t(this).each(function () {
          var n = t(this),
            o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
            s = n.data("jeg.vidplaylist");
          s || n.data("jeg.vidplaylist", (s = new i(this, o)));
        });
      }
      var i = function (e, i) {
        (this.element = t(e)),
          (this.options = i),
          (this.unique = this.element.data("unique")),
          (this.data = window[this.unique]),
          this.init();
      };
      (i.DEFAULTS = { rtl: !1 }),
        (i.prototype.init = function () {
          var t = this;
          t.element.hasClass("jeg_vertical_playlist")
            ? t.vertical_playlist()
            : t.horizontal_playlist(),
            t.element.find("video").mediaelementplayer(),
            t.bind_click(),
            t.autoload_video();
        }),
        (i.prototype.autoload_video = function () {
          t(".jeg_video_playlist").each(function () {
            var e = t(this);
            e.hasClass("loaded") ||
              e.waypoint({
                handler: function () {
                  if (!e.hasClass("loaded")) {
                    var i = t(this.element),
                      n = i.find(".jeg_video_container"),
                      o = n.children().attr("src");
                    n.html(
                      '<iframe src="' +
                        o +
                        '" allowfullscreen="" height="500" width="700"></iframe>'
                    ),
                      e.find(".jeg_preview_slider_loader").remove(),
                      i.addClass("loaded");
                  }
                },
                offset: "100%",
              });
          });
        }),
        (i.prototype.horizontal_playlist = function () {
          var e = this,
            i = t(e.element).width(),
            n = Math.floor(i / 160),
            o = n - 1,
            s = e.element.hasClass("jeg_dark_playlist") ? "" : 10;
          e.element
            .find(".jeg_video_playlist_list_inner_wrapper")
            .addClass("owl-carousel")
            .owlCarousel({
              rtl: e.options.rtl,
              lazyLoad: !0,
              navText: ["", ""],
              dots: !1,
              loop: !1,
              nav: !0,
              items: n,
              margin: s,
              autoHeight: !0,
              responsive: {
                0: { items: 2 },
                480: { items: 3 },
                568: { items: 4 },
                768: { items: o },
                1024: { items: n },
              },
            });
        }),
        (i.prototype.vertical_playlist = function () {
          var e = this;
          e.element
            .find(".jeg_video_playlist_list_inner_wrapper")
            .jScrollPane();
          var i = e.element
            .find(".jeg_video_playlist_list_inner_wrapper")
            .data("jsp");
          (e.vertical_resize = function (i) {
            var n = e.element.find(".jeg_video_playlist_current"),
              o = e.element.find(".jeg_video_playlist_video_content"),
              s = e.element.find(".jeg_video_playlist_list_inner_wrapper"),
              a = o.height(),
              r = t(window).width();
            if (
              (e.element.hasClass("jeg_col_12") && r > 768) ||
              ((e.element.hasClass("jeg_col_9") ||
                e.element.hasClass("jeg_col_8")) &&
                r > 1024)
            )
              a = o.height() - n.outerHeight();
            else {
              for (
                var l = s.find(".jeg_video_playlist_item"), c = 0, d = 0;
                d < 3;
                d++
              )
                c += t(l[d]).outerHeight();
              a = c;
            }
            s.height(a), i.reinitialise();
          }),
            t(window).on("resize", function () {
              e.vertical_resize(i);
            }),
            t(window).on("load", function () {
              setTimeout(function () {
                e.vertical_resize(i);
              }, 200);
            }),
            e.vertical_resize(i);
        }),
        (i.prototype.load_content = function (e, i) {
          var n = t(e).parent(),
            o = t(n).parents(".jeg_video_playlist_wrapper"),
            s = t(o).find(".jeg_video_holder"),
            a = t(o).find(".jeg_video_playlist_current_info");
          t(s).find(".jeg_preview_slider_loader").remove(),
            t(s).append(i.tag),
            "mediaplayer" === i.type &&
              t(s)
                .find("video")
                .mediaelementplayer({
                  success: function (t) {
                    t.play();
                  },
                });
          var r =
            "<a href='" +
            t(e).attr("href") +
            "'>" +
            t(e).find(".jeg_video_playlist_title").text() +
            "</a>";
          t(s).css("height", "auto"),
            t(a).find("h2").html(r),
            t(a)
              .find("span")
              .text(t(e).find(".jeg_video_playlist_category").text());
        }),
        (i.prototype.bind_click = function () {
          var e = this;
          e.element.find(".jeg_video_playlist_item").on("click", function (i) {
            i.preventDefault();
            var n = this,
              o = t(n).data("id"),
              s = t(n).parent(),
              a = t(s).parents(".jeg_video_playlist_wrapper"),
              r = t(a).find(".jeg_video_holder");
            return (
              t(a).find("a.jeg_video_playlist_item").removeClass("active"),
              t(n).addClass("active"),
              t(r)
                .css("height", t(r).height())
                .html(
                  "<div class='jeg_preview_slider_loader'><div class='jeg_preview_slider_loader_circle'></div></div>"
                ),
              e.load_content(n, e.data[o]),
              !1
            );
          });
        });
      var n = t.fn.jvidplaylist;
      (t.fn.jvidplaylist = e),
        (t.fn.jvidplaylist.Constructor = i),
        (t.fn.jvidplaylist.noConflict = function () {
          return (t.fn.jvidplaylist = n), this;
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      function e(e) {
        return t(this).each(function () {
          var n = t(this),
            o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
            s = n.data("jeg.module");
          s || n.data("jeg.module", (s = new i(this, o)));
        });
      }
      var i = function (e, i) {
        (this.element = t(e)),
          (this.options = i),
          (this.xhr = null),
          (this.xhr_cache = []),
          (this.lock_action = !1),
          (this.unique = this.element.data("unique")),
          (this.data = {
            filter: 0,
            filter_type: "all",
            current_page: 1,
            attribute: window[this.unique],
          }),
          (this.ajax_mode = this.data.attribute.pagination_mode),
          (this.header = this.element.find(".jeg_block_heading")),
          (this.container = this.element.find(".jeg_block_container")),
          (this.nav_block = this.element.find(".jeg_block_navigation")),
          (this.ad_code = this.element.find(".jeg_ad_code").val()),
          (this.nav_next = null),
          (this.nav_prev = null),
          (this.module_overlay = t(e).find(".module-overlay")),
          (this.load_more_block = t(e).find(".jeg_block_loadmore")),
          "nextprev" === this.ajax_mode &&
            ((this.nav_next = this.nav_block.find(".next")),
            (this.nav_prev = this.nav_block.find(".prev")),
            this.nav_next.on("click", t.proxy(this.click_next, this)),
            this.nav_prev.on("click", t.proxy(this.click_prev, this))),
          ("loadmore" !== this.ajax_mode && "scrollload" !== this.ajax_mode) ||
            ((this.nav_next = this.nav_block.find(".jeg_block_loadmore > a")),
            this.nav_next.on("click", t.proxy(this.load_more, this))),
          "scrollload" === this.ajax_mode &&
            ((this.load_limit = this.data.attribute.pagination_scroll_limit),
            this.load_scroll()),
          this.masonry_init(),
          this.init(),
          this.element.trigger("jnews_module_init", [this]);
      };
      (i.DEFAULTS = {}),
        (i.prototype.init = function () {
          var t = this;
          t.element
            .find(".jeg_subcat")
            .okayNav({ swipe_enabled: !1, threshold: 80 }),
            t.assign_header();
        }),
        (i.prototype.load_scroll = function () {
          var t = this;
          t.nav_next.hasClass("disabled") ||
            ((t.load_limit > t.data.current_page || 0 == t.load_limit) &&
              t.nav_next.waypoint(
                function () {
                  (t.data.current_page = t.data.current_page + 1),
                    t.request_ajax("scroll"),
                    this.destroy();
                },
                { offset: "100%", context: window }
              ));
        }),
        (i.prototype.click_next = function (e) {
          var i = this,
            n = i.nav_next;
          e.preventDefault(),
            t(n).hasClass("disabled") ||
              i.lock_action ||
              ((i.data.current_page = i.data.current_page + 1),
              i.request_ajax("next"));
        }),
        (i.prototype.click_prev = function (e) {
          var i = this,
            n = i.nav_prev;
          e.preventDefault(),
            t(n).hasClass("disabled") ||
              i.lock_action ||
              ((i.data.current_page = i.data.current_page - 1),
              i.request_ajax("prev"));
        }),
        (i.prototype.load_more = function (e) {
          var i = this,
            n = i.nav_next;
          e.preventDefault(),
            t(n).hasClass("disabled") ||
              i.lock_action ||
              ((i.data.current_page = i.data.current_page + 1),
              i.request_ajax("more"));
        }),
        (i.prototype.assign_header = function () {
          var e = this;
          t(e.header).on(
            "click",
            ".subclass-filter",
            t.proxy(e.subclass_click, e)
          );
        }),
        (i.prototype.subclass_click = function (e) {
          var i = this,
            n = e.target;
          e.preventDefault(),
            i.lock_action ||
              (this.header.find(".subclass-filter").removeClass("current"),
              t(n).addClass("current"),
              (i.data.filter = t(n).data("id")),
              (i.data.filter_type = t(n).data("type")),
              (i.data.current_page = 1),
              i.request_ajax("subclass"));
        }),
        (i.prototype.request_ajax = function (e) {
          var i = this;
          i.lock_action = !0;
          var n = jnewsoption.module_prefix + i.data.attribute.class,
            o = { action: n, module: !0, data: i.data },
            s = i.cache_get(o);
          s
            ? (i.before_ajax_request(e, !1),
              setTimeout(function () {
                i.load_ajax(e, o, s), i.element.trigger("jnews_module_ajax");
              }, 100))
            : (i.before_ajax_request(e, !0),
              (i.xhr = t.ajax({
                url: jnews_ajax_url,
                type: "post",
                dataType: "json",
                data: o,
                success: function (t) {
                  i.load_ajax(e, o, t),
                    i.cache_save(o, t),
                    i.element.trigger("jnews_module_ajax");
                },
              })));
        }),
        (i.prototype.cache_get = function (t) {
          for (
            var e = this, i = JSON.stringify(t), n = 0;
            n < e.xhr_cache.length;
            n++
          )
            if (e.xhr_cache[n].param == i)
              return e.cache_prepare(e.xhr_cache[n].result);
          return !1;
        }),
        (i.prototype.cache_prepare = function (e) {
          e.content = "<div>" + e.content + "</div>";
          var i = t(e.content);
          return (
            i.find("img").each(function () {
              var e = t(this).data("src");
              t(this)
                .attr("src", e)
                .removeClass("lazyload")
                .addClass("lazyloaded");
            }),
            (e.content = i.html()),
            e
          );
        }),
        (i.prototype.cache_save = function (t, e) {
          var i = this,
            n = JSON.stringify(t);
          i.xhr_cache.push({ param: n, result: e });
        }),
        (i.prototype.load_ajax = function (t, e, i) {
          var n = this;
          switch (((n.lock_action = !1), n.ajax_mode)) {
            case "loadmore":
              n.load_ajax_load_more(i, t);
              break;
            case "scrollload":
              n.load_scroll_more(i, t);
              break;
            case "nextprev":
            default:
              n.load_ajax_next_prev(i, t);
          }
          jnews.like && jnews.like.init(), jnews.share && jnews.share.init();
        }),
        (i.prototype.before_ajax_request = function (t, e) {
          var i = this;
          i.element
            .removeClass("loaded next prev more scroll subclass")
            .addClass("loading"),
            ("next" !== t && "prev" !== t && "subclass" !== t) ||
              !e ||
              i.module_overlay.show(),
            ("more" !== t && "scroll" !== t) ||
              i.load_more_block
                .find("a")
                .text(i.load_more_block.find("a").data("loading"))
                .addClass("active");
        }),
        (i.prototype.after_ajax_request = function (t) {
          var e = this;
          e.element.removeClass("loading").addClass("loaded").addClass(t),
            ("next" !== t && "prev" !== t && "subclass" !== t) ||
              e.module_overlay.hide(),
            ("more" !== t && "scroll" !== t) ||
              (e.load_more_block
                .find("a")
                .text(e.load_more_block.find("a").data("load"))
                .removeClass("active"),
              void 0 !== e.load_more_block.find("a").data("icon") &&
                e.load_more_block
                  .find("a")
                  .html(
                    e.load_more_block.find("a").html() +
                      ' <i class="fa ' +
                      e.load_more_block.find("a").data("icon") +
                      '"></i>'
                  ));
        }),
        (i.prototype.replace_content = function (e) {
          var i = this;
          i.container.children().each(function () {
            t(this).hasClass("module-overlay") || t(this).remove();
          }),
            i.container.prepend(e);
        }),
        (i.prototype.load_ajax_next_prev = function (e, i) {
          var n = this;
          n.replace_content(e.content),
            null !== n.nav_next &&
              (e.next
                ? n.nav_next.removeClass("disabled")
                : n.nav_next.addClass("disabled")),
            null !== n.nav_prev &&
              (e.prev
                ? n.nav_prev.removeClass("disabled")
                : n.nav_prev.addClass("disabled")),
            e.next || e.prev
              ? null !== n.nav_prev &&
                n.nav_next.parent().removeClass("inactive")
              : null !== n.nav_next && n.nav_next.parent().addClass("inactive"),
            n.after_ajax_request(i),
            n.masonry_init(),
            t(window).trigger("resize");
        }),
        (i.prototype.load_ajax_load_more = function (e, i) {
          var n = this,
            o = t(e.content),
            s = 0;
          o.each(function () {
            if (
              (t(this).hasClass("jeg_ad_module") &&
                n.ad_code &&
                t(this).find(".ads-wrapper").html(n.ad_code),
              t(this).hasClass("jeg_post"))
            )
              t(this).addClass("jeg_ajax_loaded anim_" + s);
            else {
              t(this)
                .find(".jeg_post")
                .each(function () {
                  t(this).addClass("jeg_ajax_loaded anim_" + s), s++;
                });
            }
            s++;
          }),
            n.container.find(".jeg_post").removeClass("jeg_ajax_loaded"),
            n.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"),
            1 == n.data.current_page
              ? n.replace_content(o)
              : n.element.find(".jeg_load_more_flag").append(o),
            e.next
              ? n.nav_next.removeClass("disabled")
              : n.nav_next.addClass("disabled"),
            n.after_ajax_request(i),
            n.masonry_load_more(o),
            t(window).trigger("resize");
        }),
        (i.prototype.load_scroll_more = function (e, i) {
          var n = this,
            o = t(e.content),
            s = 0;
          o.each(function () {
            if (t(this).hasClass("jeg_post"))
              t(this).addClass("jeg_ajax_loaded anim_" + s);
            else {
              t(this)
                .find(".jeg_post")
                .each(function () {
                  t(this).addClass("jeg_ajax_loaded anim_" + s), s++;
                });
            }
            s++;
          }),
            n.container.find(".jeg_post").removeClass("jeg_ajax_loaded"),
            n.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"),
            1 == n.data.current_page
              ? n.container.html("").html(o)
              : n.element.find(".jeg_load_more_flag").append(o),
            e.next
              ? n.nav_next.removeClass("disabled")
              : n.nav_next.addClass("disabled"),
            n.after_ajax_request(i),
            n.masonry_load_more(o),
            t(window).trigger("resize"),
            setTimeout(function () {
              n.load_scroll();
            }, 500);
        }),
        (i.prototype.masonry_load_more = function (t) {
          var e = this;
          e.container.find(".jeg_posts_masonry").length &&
            setTimeout(function () {
              e.masonry.isotope("appended", t);
            }, 150);
        }),
        (i.prototype.masonry_init = function () {
          var e = this;
          e.container.find(".jeg_posts_masonry").length &&
            (setTimeout(function () {
              (e.masonry = e.container
                .find(".jeg_posts_masonry .jeg_posts")
                .isotope({ itemSelector: ".jeg_post", layoutMode: "masonry" })),
                e.masonry.imagesLoaded().progress(function () {
                  e.masonry.isotope("layout");
                });
            }, 150),
            t(window).on("resize", function () {
              setTimeout(function () {
                e.masonry.isotope("layout");
              }, 1e3);
            }));
        });
      var n = t.fn.jmodule;
      (t.fn.jmodule = e),
        (t.fn.jmodule.Constructor = i),
        (t.fn.jmodule.noConflict = function () {
          return (t.fn.jmodule = n), this;
        }),
        t(".jeg_module_hook").jmodule();
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      function e(e) {
        return t(e).parents(".elementor-background-video-container");
      }
      function i() {
        t("img").attr("data-pin-no-hover", !0),
          t(
            ".article-content img, .featured img, .thumbnail-container img"
          ).removeAttr("data-pin-no-hover");
      }
      function n() {
        var e = t(".jeg_fs_container"),
          i = e.find(".jeg_fs_content"),
          n = e.find(".jeg_featured_bg"),
          o = e.find(".jeg_fs_scroll"),
          s = function () {
            var e = t(".jeg_header"),
              o = t(".jeg_navbar_mobile");
            if (i.length > 0) {
              var s = e.is(":visible") ? e.outerHeight() : o.outerHeight(),
                a = t(window).height();
              t(i).css({ height: a - s + "px" }),
                t(n).css({ height: a + "px" });
            }
          },
          a = t(".jeg_parallax .jeg_featured_img");
        a.length &&
          a.each(function () {
            t(this).parallax("50%", 0.15);
          }),
          o.on("click", function () {
            var e = t(".jeg_scroll_flag").offset().top;
            t("html, body").animate({ scrollTop: e }, 800);
          });
        var r = function () {
          var i = t(window).scrollTop(),
            n = e.outerHeight(),
            s = 1 - i / n;
          if (t("body").hasClass("jeg_single_tpl_5")) {
            var a = 1 - (i / n) * 0.2;
            e.find(".entry-header .container").css({
              opacity: s,
              "-webkit-transform": "scale(" + a + ")",
              transform: "scale(" + a + ")",
            });
          } else e.find(".entry-header .container").css({ opacity: s });
          o.css("opacity", s - 0.2);
        };
        t(window).on("resize load", s),
          t(document).on("ready", s),
          t(window).on("scroll load resize", r);
      }
      function o() {
        var e = t("a[href*=\\#]:not([href=\\#])");
        e.length &&
          e.each(function (e, i) {
            var n = t(i);
            if (
              void 0 !== n.data("vc-container") ||
              n.hasClass("bp-primary-action") ||
              n.hasClass("jeg_popuplink")
            )
              return !1;
            n.on("click", function (e) {
              var i = t(this).attr("href");
              if (((i = i.split("#")), i.length > 1)) {
                i = i[1];
                var n = t("#" + i);
                0 !== n.length &&
                  t("html, body").animate({ scrollTop: n.offset().top }, 600);
              }
            });
          });
      }
      function s() {
        var e = t(".jscroll-to-top"),
          i = function () {
            t(window).scrollTop() > 400
              ? e.addClass("show")
              : e.removeClass("show");
          };
        e.on("click", function () {
          return t("html, body").animate({ scrollTop: 0 }, 600), !1;
        }),
          t(window).width() > 1024
            ? t(window).on("scroll load", i)
            : t(window).off("scroll load", i);
      }
      function a() {
        t.ajaxSetup({ data: { lang: jnewsoption.language } });
      }
      function r() {
        var e = t(".jnews-cookie-law-policy"),
          i = t.now(),
          n = void 0 === jnewsoption.site_slug ? "/" : jnewsoption.site_slug,
          o =
            void 0 === jnewsoption.site_domain
              ? window.location.hostname
              : jnewsoption.site_domain;
        if (e.length > 0) {
          var s = function (t, e) {
              var s = i + 24 * e * 60 * 60 * 1e3,
                a = new Date();
              a.setTime(s),
                a.toUTCString(),
                console.log(
                  t +
                    "=" +
                    (s || "") +
                    ";expires=" +
                    a +
                    ";path=" +
                    n +
                    ";domain=" +
                    o
                ),
                (document.cookie =
                  t +
                  "=" +
                  (s || "") +
                  ";expires=" +
                  a +
                  ";path=" +
                  n +
                  ";domain=" +
                  o);
            },
            a = (function (t) {
              for (
                var e = t + "=", i = document.cookie.split(";"), n = 0;
                n < i.length;
                n++
              ) {
                for (var o = i[n]; " " == o.charAt(0); )
                  o = o.substring(1, o.length);
                if (0 == o.indexOf(e)) return o.substring(e.length, o.length);
              }
              return null;
            })("jnews_cookie_law");
          a ? parseInt(a) < i && e.fadeIn("slow") : e.fadeIn("slow"),
            e.find(".btn-cookie").on("click", function (e) {
              e.preventDefault();
              var i = t(this);
              s("jnews_cookie_law", i.data("expire")), i.parent().fadeOut();
            });
        }
      }
      function l(e) {
        var i = t(".jeg_progress_container");
        if (i.length > 0) {
          var n = !1,
            o = t(window),
            s = e.height(),
            a = 0.85 * o.height();
          t(window).scroll(function () {
            n = !0;
          }),
            t(window).on("resize", function () {
              (s = e.height()), (a = 0.85 * o.height()), r();
            }),
            void 0 !== window.progressTimer &&
              clearInterval(window.progressTimer),
            (window.progressTimer = setInterval(function () {
              n && ((n = !1), r());
            }, 150));
          var r = function () {
            var t = o.scrollTop(),
              n = e.offset().top,
              r = a - n + t,
              l = 0;
            a > s + n
              ? i.find(".progress-bar").width(0)
              : (r > s
                  ? s < t - n + 0.2 * a
                    ? (i.find(".progress-bar").css("transition", "none"),
                      i.find(".progress-bar").width(0))
                    : (i.find(".progress-bar").css("transition", "none"),
                      i.find(".progress-bar").width("100%"),
                      (l = 100))
                  : r > 0 && (l = (r / s) * 100),
                i.find(".progress-bar").width(l + "%"),
                i.find(".progress-bar").css("transition", "all .12s ease-in"));
          };
        }
      }
      function c() {
        ((t(".jeg_double_sidebar").length > 1 ||
          t(".jeg_double_right_sidebar").length > 1) &&
          t(window).width() < 992) ||
          t(".jeg_sticky_sidebar").theiaStickySidebar({
            additionalMarginTop: 20,
          });
      }
      function d() {
        var e = t(".jnews_author_box_container");
        e.length &&
          e.each(function () {
            var e = t(this);
            e.hasClass("author-truncate") &&
              e.on("click", function () {
                t(this).removeClass("author-truncate");
              });
          });
      }
      function h() {
        var e = t(".jeg_tabpost_widget");
        e.length && e.jtabs(), t("body").jnews_slider();
        var h = t(".featured_gallery");
        h.length &&
          h.owlCarousel({
            rtl: 1 == jnewsoption.rtl,
            nav: !0,
            navText: !1,
            items: 1,
            autoplay: !1,
            autoplayTimeout: 3e3,
            lazyLoad: !0,
          }),
          t("body").jnews_carousel();
        var u = t(".jeg_overlay_slider");
        u.length && u.joverlayslider({ rtl: 1 == jnewsoption.rtl }),
          jnews.hero && jnews.hero.init();
        var f = t(".jeg_news_ticker");
        f.length && f.jnewsticker();
        var g = t(".jeg_video_playlist");
        g.length && g.jvidplaylist({ rtl: 1 == jnewsoption.rtl }),
          n(),
          t(window).width() > 768 &&
            (c(),
            t(".share-float").theiaStickySidebar({
              additionalMarginTop: 20,
              updateSidebarHeight: !1,
            }),
            t(".jeg_parallax_bg").parallax("50%", 0.1));
        var m = t(".jeg_reviewbars");
        if (
          (m.length && m.jskill(),
          s(),
          o(),
          t(
            "select:visible:not(.woocommerce select):not(select.form-control-solid):not(.drts select)"
          ).chosen({ disable_search_threshold: 10 }),
          t.do_media_render(t("body")),
          i(),
          (window.onYouTubeIframeAPIReady = function () {
            var e = t(".jeg_blocklink .jeg_videobg");
            e.length &&
              e.each(function () {
                t(this).jvideo_background();
              });
          }),
          jnewsoption.gif)
        ) {
          t('.content-inner img[src$=".gif"]').jnewsgif();
        }
        p(t("body")),
          t.facebook_page_widget(),
          t.twitter_widget(),
          t.google_plus_widget(),
          t.pinterest_widget(),
          t(document).ajaxComplete(function () {
            t.google_plus_widget(),
              t.twitter_widget(),
              t.facebook_page_widget();
          }),
          a(),
          r();
        var _ = t(".jeg_review_search");
        _.length && _.ajax_review_search(),
          l(t(".entry-content")),
          t(document).on("jnews-autoload-change-id", function (e, i) {
            l(t(".post-autoload[data-id=" + i + "]").find(".entry-content"));
          }),
          d();
      }
      function u(e, o) {
        i(),
          n(),
          t.do_media_render(o),
          t(window).width() > 768 &&
            (t(o)
              .find(".jeg_sticky_sidebar")
              .theiaStickySidebar({ additionalMarginTop: 20 }),
            t(o)
              .find(".share-float")
              .theiaStickySidebar({
                additionalMarginTop: 20,
                updateSidebarHeight: !1,
              }),
            t(o).find(".jeg_parallax_bg").parallax("50%", 0.1)),
          t(o).find("select:visible").chosen({ disable_search_threshold: 10 }),
          t(o).jnews_carousel();
        var s = t(o).find(".featured_gallery");
        s.length &&
          s.owlCarousel({
            rtl: 1 == jnewsoption.rtl,
            nav: !0,
            navText: !1,
            items: 1,
            autoplay: !1,
            autoplayTimeout: 3e3,
            lazyLoad: !0,
          }),
          p(o),
          t(o).find('.content-inner img[src$=".gif"]').jnewsgif();
        var a = t(o).find(".jeg_video_playlist");
        a.length &&
          (a.jvidplaylist({ rtl: 1 == jnewsoption.rtl }),
          setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
          }, 500));
        var r = t(o).find(".jeg_reviewbars");
        r.length && r.jskill(), t(o).jnews_slider();
        var l = t(o).find(".jeg_tabpost_widget");
        l.length && l.jtabs(),
          t(o).find(".jeg_module_hook").jmodule(),
          jnews.widget.popular.init(o),
          jnews.popup.init(o),
          jnews.comment.init(o),
          jnews.mobile.truncate(),
          jQuery().jsplit && t(o).jsplit(),
          t.facebook_page_widget(),
          t.twitter_widget(),
          t.google_plus_widget(),
          t.pinterest_widget();
      }
      function p(e) {
        var i = t(e).find(".jeg_preview_slider");
        i.length &&
          (i.each(function () {
            var e = t(this),
              i = window[e.data("selector")];
            t(e).jpreviewslider(i);
          }),
          setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
          }, 500));
      }
      (t.youtube_parser = function (t) {
        var e =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??&?v?=?([^#\&\?]*).*/,
          i = t.match(e);
        if (i && 11 === i[7].length) return i[7];
        window.alert("Url Incorrect");
      }),
        (t.vimeo_parser = function (t) {
          var e = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
            i = t.match(e);
          return i
            ? i[2]
            : ((e = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/),
              (i = t.match(e)) ? i[2] : void window.alert("not a vimeo url"));
        }),
        (t.dailymotion_parser = function (t) {
          var e =
              /(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/,
            i = t.match(e);
          if (i) return i[2] ? i[2] : i[1];
          window.alert("not a dailymotion url");
        }),
        (t.type_video_youtube = function (e, i, n) {
          var o = t.youtube_parser(t(e).attr("data-src")),
            s = "",
            a = "";
          n
            ? ((s += !0 === i ? "autoplay=1&" : ""),
              (s += !0 === n ? "loop=1&playlist=" + o : ""),
              (a =
                '<iframe width="700" height="500" src="//www.youtube.com/v/' +
                o +
                "?version=3&" +
                s +
                'showinfo=0&theme=light&autohide=1&rel=0&wmode=opaque" frameborder="0" allowfullscreen></iframe>'))
            : ((s += !0 === i ? "autoplay=1&" : ""),
              (a =
                '<iframe width="700" height="500" src="//www.youtube.com/embed/' +
                o +
                "?" +
                s +
                'showinfo=0&theme=light&autohide=1&rel=0&wmode=opaque" frameborder="0" allowfullscreen></iframe>')),
            t(".jeg_video_container", e).append(a);
        }),
        (t.type_video_vimeo = function (e, i, n) {
          var o = t.vimeo_parser(t(e).attr("data-src")),
            s = "";
          (s += !0 === i ? "autoplay=1&" : ""),
            (s += !0 === n ? "loop=1&" : "");
          var a =
            '<iframe src="//player.vimeo.com/video/' +
            o +
            "?" +
            s +
            'title=0&byline=0&portrait=0" width="700" height="500" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>';
          t(".jeg_video_container", e).append(a);
        }),
        (t.type_video_dailymotion = function (e, i) {
          var n = t.dailymotion_parser(t(e).attr("data-src")),
            o = "";
          o += !0 === i ? "autoplay=1&" : "";
          var s =
            '<iframe src="//www.dailymotion.com/embed/video/' +
            n +
            "?" +
            o +
            'ui-start-screen-info=0&ui-theme=light&queue-autoplay-next=0&queue-enable=0&sharing-enable=0&ui-logo=0" width="700" height="500" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>';
          t(".jeg_video_container", e).append(s);
        }),
        (t.type_soundcloud = function (e) {
          var i = t(e).attr("data-src"),
            n =
              '<iframe src="https://w.soundcloud.com/player/?url=' +
              encodeURIComponent(i) +
              '" width="700" height="500" frameborder="0"></iframe>';
          t(".jeg_video_container", e).append(n);
        }),
        (t.type_audio = function (e) {
          var i = "",
            n = "";
          "" !== t(e).data("mp3") &&
            (i = "<source type='audio/mpeg' src='" + t(e).data("mp3") + "' />"),
            "" !== t(e).data("ogg") &&
              (n =
                "<source type='audio/ogg' src='" + t(e).data("ogg") + "' />");
          var o =
            "<audio preload='none' style='width: 100%; visibility: hidden;' controls='controls'>" +
            i +
            n +
            "</audio>";
          t(e).append(o);
          var s = {};
          "undefined" != typeof _wpmejsSettings && (s = _wpmejsSettings),
            (s.success = function (t) {
              var e, i;
              "flash" === t.pluginType &&
                ((e =
                  t.attributes.autoplay && "false" !== t.attributes.autoplay),
                (i = t.attributes.loop && "false" !== t.attributes.loop),
                e &&
                  t.addEventListener(
                    "canplay",
                    function () {
                      t.play();
                    },
                    !1
                  ),
                i &&
                  t.addEventListener(
                    "ended",
                    function () {
                      t.play();
                    },
                    !1
                  ));
            }),
            t(e).find("audio").mediaelementplayer(s);
        }),
        (t.type_video_html5 = function (e, i, n, o) {
          var s = t(e).data("cover");
          n.pauseOtherPlayers = !1;
          var a = "",
            r = "",
            l = "";
          "" !== t(e).data("mp4") &&
            (a = "<source type='video/mp4' src='" + t(e).data("mp4") + "' />"),
            "" !== t(e).data("webm") &&
              (r =
                "<source type='video/webm' src='" + t(e).data("webm") + "' />"),
            "" !== t(e).data("ogg") &&
              (l =
                "<source type='video/ogg' src='" + t(e).data("ogg") + "' />");
          var c = i ? "preload='auto'" : "preload='none'",
            d =
              "<object width='100%' height='100%' type='application/x-shockwave-flash' data='/public/mediaelementjs/flashmediaelement.swf'><param name='movie' value='/public/mediaelementjs/flashmediaelement.swf' /><param name='flashvars' value='controls=true&file=" +
              t(e).data("mp4") +
              "' /><img src='" +
              s +
              "' alt='No video playback capabilities' title='No video playback capabilities' /></object>",
            h =
              "<video id='player' style='width:100%;height:100%;' width='100%' height='100%' poster='" +
              s +
              "' controls='controls' " +
              c +
              ">" +
              a +
              r +
              l +
              d +
              "</video>";
          t(o, e).append(h),
            i &&
              (n.success = function (t) {
                "flash" === t.pluginType
                  ? t.addEventListener(
                      "canplay",
                      function () {
                        t.play();
                      },
                      !1
                    )
                  : t.play();
              }),
            t(e).find("video").mediaelementplayer(n);
        }),
        (t.do_media_render = function (i) {
          t(i).find("[data-type='youtube']").length &&
            t(i)
              .find("[data-type='youtube']")
              .each(function () {
                var e = t(this).data("autoplay"),
                  i = t(this).data("repeat");
                t.type_video_youtube(t(this), e, i);
              }),
            t(i).find("[data-type='vimeo']").length &&
              t(i)
                .find("[data-type='vimeo']")
                .each(function () {
                  var e = t(this).data("autoplay"),
                    i = t(this).data("repeat");
                  t.type_video_vimeo(t(this), e, i);
                }),
            t(i).find("[data-type='dailymotion']").length &&
              t(i)
                .find("[data-type='dailymotion']")
                .each(function () {
                  var e = t(this).data("autoplay");
                  t.type_video_dailymotion(t(this), e);
                }),
            t(i).find("[data-type='soundcloud']").length &&
              t(i)
                .find("[data-type='soundcloud']")
                .each(function () {
                  t.type_soundcloud(t(this));
                }),
            t(i).find("[data-type='audio']").length &&
              t(i)
                .find("[data-type='audio']")
                .each(function () {
                  t.type_audio(t(this));
                }),
            t(i).find("video").length &&
              t(i)
                .find("video")
                .each(function () {
                  e(this) || t(this).mediaelementplayer();
                });
        }),
        (t.fn.jnews_carousel = function () {
          t(this).each(function () {
            var e = t(this).find(
              ".jeg_postblock_carousel_1, .jeg_postblock_carousel_2, .jeg_postblock_carousel_3"
            );
            e.length &&
              e.each(function () {
                var e = t(this),
                  i = e.find(".jeg_carousel_post").addClass("owl-carousel"),
                  n = {
                    nav: i.data("nav"),
                    autoplay: i.data("autoplay"),
                    items: void 0 === i.data("items") ? 3 : i.data("items"),
                    delay: void 0 === i.data("delay") ? 3e3 : i.data("delay"),
                    rtl: i.data("rtl"),
                    margin: void 0 === i.data("margin") ? 20 : i.data("margin"),
                  };
                i.on("initialized.owl.carousel", function () {
                  i.siblings(".jeg_carousel_placeholder").remove(),
                    i.parent().addClass("jeg_carousel_wrapper_loaded");
                }),
                  e.hasClass("jeg_postblock_carousel_1")
                    ? (e.hasClass("jeg_col_12") &&
                        (n.items =
                          void 0 === i.data("items") ? 5 : i.data("items")),
                      i.owlCarousel({
                        rtl: 1 == jnewsoption.rtl,
                        nav: n.nav,
                        margin: n.margin,
                        navText: !1,
                        dots: !1,
                        loop: !0,
                        items: n.items,
                        autoplay: n.autoplay,
                        autoplayTimeout: n.delay,
                        animateOut: "fadeOut",
                        autoHeight: !0,
                        responsive: {
                          0: { items: 1 },
                          321: {
                            items: 2,
                            margin: n.margin > 15 ? 15 : n.margin,
                          },
                          568: {
                            items: 3,
                            margin: n.margin > 15 ? 15 : n.margin,
                          },
                          1024: { items: n.items },
                        },
                      }))
                    : e.hasClass("jeg_postblock_carousel_2")
                    ? ((n.items =
                        void 0 === i.data("items") ? 3 : i.data("items")),
                      (n.responsive = {
                        0: { items: 1 },
                        568: { items: 2 },
                        768: { items: n.items > 3 ? 3 : n.items },
                        1024: { items: n.items },
                      }),
                      i.owlCarousel({
                        rtl: 1 == jnewsoption.rtl,
                        nav: n.nav,
                        margin: n.margin,
                        navText: !1,
                        dots: !1,
                        loop: !0,
                        items: n.items,
                        autoplay: n.autoplay,
                        autoplayTimeout: n.delay,
                        animateOut: "fadeOut",
                        autoHeight: !1,
                        responsive: n.responsive,
                      }))
                    : e.hasClass("jeg_postblock_carousel_3") &&
                      (e.hasClass("jeg_col_12")
                        ? ((n.items =
                            void 0 === i.data("items") ? 3 : i.data("items")),
                          (n.responsive = {
                            0: { items: 1 },
                            568: { items: 2 },
                            768: { items: n.items > 3 ? 3 : n.items },
                            1024: { items: n.items },
                          }))
                        : e.hasClass("jeg_col_6") ||
                          e.hasClass("jeg_col_7") ||
                          e.hasClass("jeg_col_8")
                        ? ((n.items =
                            void 0 === i.data("items") ? 2 : i.data("items")),
                          (n.responsive = {
                            0: { items: 1 },
                            568: { items: 2 },
                            1024: { items: n.items > 2 ? 2 : n.items },
                          }))
                        : ((n.items = 1),
                          (n.responsive = {
                            0: { items: 1 },
                            568: { items: 2 },
                            768: { items: n.items },
                          })),
                      i.owlCarousel({
                        rtl: 1 == jnewsoption.rtl,
                        nav: n.nav,
                        margin: n.margin,
                        navText: !1,
                        dots: !1,
                        loop: !0,
                        items: n.items,
                        autoplay: n.autoplay,
                        autoplayTimeout: n.delay,
                        animateOut: "fadeOut",
                        autoHeight: !0,
                        responsive: n.responsive,
                      }));
              });
          });
        }),
        (t.fn.jtabs = function () {
          t(this).each(function () {
            var e = t(this),
              i = t(".jeg_tabpost_nav li.active", e),
              n = function (i) {
                var n = t(i).data("tab-content");
                t(".jeg_tabpost_nav li.active", e).removeClass("active"),
                  t(i).addClass("active"),
                  t(".jeg_tabpost_item.active", e).removeClass("active"),
                  t('.jeg_tabpost_item[id="' + n + '"]', e).addClass("active");
              };
            if (i.length) n(i);
            else {
              var o = t(".jeg_tabpost_nav li", e).first();
              n(o);
            }
            t(".jeg_tabpost_nav li", e).on("click", function () {
              t(this).hasClass("active") || n(this);
            });
          });
        }),
        (t.fn.jskill = function () {
          return t(this).each(function () {
            var e = t(this);
            e.waypoint(
              function (i) {
                var n = e.find("li"),
                  o = e.data("scoretype");
                e.addClass("show"),
                  n.each(function (e) {
                    var i = t(this).find(".barbg"),
                      n = t(this).find(".reviewscore"),
                      s = i.attr("data-width");
                    window.setTimeout(function () {
                      n.prop("Counter", 0).animate(
                        { Counter: s },
                        {
                          duration: 600,
                          easing: "swing",
                          step: function (e) {
                            var n = "";
                            (n =
                              "point" === o
                                ? Math.ceil(0.1 * e)
                                : Math.ceil(e) + "%"),
                              t(this).text(n),
                              i.css("width", e + "%");
                          },
                        }
                      );
                    }, 250 * e);
                  }),
                  this.destroy();
              },
              { offset: "80%", context: window }
            );
          });
        }),
        (t.fn.jvideo_background = function () {
          function e(t) {
            var e = i(t.parents(".jeg_block_container"), "zoom");
            t.css({
              height: e[0],
              width: e[1],
              left: e[2] + "px",
              top: e[3] + "px",
              "max-width": "inherit",
            });
          }
          function i(e, i) {
            var n,
              o,
              s,
              a,
              r = 9 / 16,
              l = t(e).height(),
              c = t(e).width(),
              d = l / c,
              h = function () {
                return (
                  (o = c),
                  (n = c * r),
                  (a = (c - o) / 2),
                  (s = (l - n) / 2),
                  [n, o, a, s]
                );
              },
              u = function () {
                return (
                  (o = l / r),
                  (n = l),
                  (a = (c - o) / 2),
                  (s = (l - n) / 2),
                  [n, o, a, s]
                );
              };
            return "fit" === i
              ? d > r
                ? h()
                : u()
              : "zoom" === i
              ? d > r
                ? u()
                : h()
              : "fitNoUpscale" === i
              ? 9 > l || 16 > c
                ? t.new_get_image_container_size(img, e, "fit")
                : (function () {
                    return (
                      (o = 16),
                      (n = 9),
                      (a = (c - o) / 2),
                      (s = (l - n) / 2),
                      [n, o, a, s]
                    );
                  })()
              : void 0;
          }
          t(this).each(function () {
            var i = t(this),
              n = i.parent(".jeg_videowrapper"),
              o = i.get(0),
              s = i.data("youtubeid");
            new YT.Player(o, {
              width: "100%",
              height: "100%",
              videoId: s,
              playerVars: {
                playlist: s,
                iv_load_policy: 3,
                enablejsapi: 1,
                disablekb: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                loop: 1,
                wmode: "transparent",
              },
              events: {
                onReady: function (t) {
                  t.target.mute().setLoop(!0);
                },
              },
            }),
              e(n),
              jQuery(window).on("resize", function () {
                e(n);
              });
          });
        }),
        (t.fn.jnews_slider = function () {
          t(this).each(function () {
            var e = t(this),
              i = t(e).find(".jeg_slider_type_1");
            i.length && i.jowlslider({ rtl: 1 == jnewsoption.rtl });
            var n = t(e).find(".jeg_slider_type_2");
            n.length &&
              n.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay");
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !1,
                    items: 1,
                    autoplay: i,
                    autoplayTimeout: n,
                    loop: !0,
                  });
              });
            var o = t(e).find(".jeg_slider_type_3");
            o.length &&
              o.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay"),
                  o = t(e).data("items"),
                  s = t(e).parent(".jeg_slider_wrapper"),
                  a = o,
                  r = o < 3 ? o : 3,
                  l = o < 2 ? o : 2;
                s.hasClass("jeg_col_2o3")
                  ? a > 3 && 1024 == t(window).width() && (a = 3)
                  : s.hasClass("jeg_col_1o3") &&
                    ((r = 1), t(window).width() >= 1024 && (a = 1)),
                  t(e)
                    .on("initialized.owl.carousel", function () {
                      e.siblings(".jeg_slider_placeholder").remove(),
                        e.parent().addClass("jeg_slider_wrapper_loaded");
                    })
                    .owlCarousel({
                      rtl: 1 == jnewsoption.rtl,
                      nav: !0,
                      navText: !1,
                      dots: !1,
                      loop: !0,
                      stagePadding: 35,
                      margin: 5,
                      autoplay: i,
                      autoplayTimeout: n,
                      lazyLoad: !0,
                      responsive: {
                        0: { items: 1 },
                        568: { items: l },
                        768: { items: r },
                        1024: { items: a },
                      },
                    });
              });
            var s = t(e).find(".jeg_slider_type_4");
            s.length &&
              s.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay");
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !0,
                    navText: !1,
                    items: 1,
                    loop: !0,
                    autoplay: i,
                    autoplayTimeout: n,
                    animateOut: "fadeOut",
                  });
              });
            var a = t(e).find(".jeg_slider_type_5");
            a.length &&
              a.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay");
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !0,
                    items: 1,
                    navText: !1,
                    dots: !1,
                    autoplay: i,
                    autoplayTimeout: n,
                    loop: !0,
                  });
              });
            var r = t(e).find(".jeg_slider_type_6");
            r.length &&
              r.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay");
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !0,
                    navigation: !0,
                    navText: [t(e).data("nav-prev"), t(e).data("nav-next")],
                    items: 1,
                    dots: !1,
                    autoplay: i,
                    autoplayTimeout: n,
                    loop: !0,
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                  });
              });
            var l = t(e).find(".jeg_slider_type_7");
            l.length &&
              l.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = t(e).data("autoplay"),
                  n = t(e).data("delay");
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    items: 1,
                    dots: !1,
                    mouseDrag: !1,
                    touchDrag: !1,
                    pullDrag: !1,
                    autoplay: i,
                    autoplayTimeout: n,
                    loop: !0,
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                    smartSpeed: 500,
                  }),
                  t(e)
                    .find(".jeg_block_nav a")
                    .on("click", function (i) {
                      i.preventDefault(),
                        t(this).hasClass("next")
                          ? t(e).trigger("next.owl.carousel")
                          : t(e).trigger("prev.owl.carousel");
                    });
              });
            var c = t(e).find(".jeg_slider_type_8");
            c.length &&
              c.each(function () {
                var e = t(this),
                  i = e.data("autoplay"),
                  n = e.data("delay"),
                  o = e.data("items"),
                  s = e.parent(".jeg_slider_wrapper"),
                  a = o,
                  r = o < 3 ? o : 3,
                  l = o < 2 ? o : 2;
                s.hasClass("jeg_col_2o3")
                  ? a > 3 && 1024 == t(window).width() && (a = 3)
                  : s.hasClass("jeg_col_1o3") &&
                    ((r = 1), t(window).width() >= 1024 && (a = 1));
                var c = function () {
                  var i = t(s).find(".owl-nav > div");
                  if (t(i).length) {
                    var n = e.find(".thumbnail-container"),
                      o = t(n[0]).outerHeight();
                    t(i).each(function () {
                      var e = t(this),
                        i = e.outerHeight(),
                        n = 0.5 * o - 0.5 * i;
                      e.css("top", n + "px");
                    });
                  }
                };
                e
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !0,
                    navText: !1,
                    dots: !1,
                    loop: !0,
                    stagePadding: 30,
                    margin: 0,
                    lazyLoad: !0,
                    autoplay: i,
                    autoplayTimeout: n,
                    responsive: {
                      0: { items: 1 },
                      568: { items: l },
                      768: { items: r },
                      1024: { items: a, stagePadding: a > 1 ? 50 : 30 },
                    },
                    onInitialized: function () {
                      c();
                    },
                  }),
                  t(this).on("resized.owl.carousel", function (t) {
                    c();
                  });
              });
            var d = t(e).find(".jeg_slider_type_9");
            d.length &&
              d.each(function () {
                var e = t(this).addClass("owl-carousel"),
                  i = e.data("autoplay"),
                  n = e.data("delay"),
                  o = e.parent();
                t(e)
                  .on("initialized.owl.carousel", function () {
                    e.siblings(".jeg_slider_placeholder").remove(),
                      e.parent().addClass("jeg_slider_wrapper_loaded");
                  })
                  .owlCarousel({
                    rtl: 1 == jnewsoption.rtl,
                    nav: !1,
                    items: 1,
                    autoplay: i,
                    autoplayTimeout: n,
                    loop: !0,
                    mouseDrag: !1,
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                  }),
                  o
                    .find(".jeg_slider_type_9_thumb article")
                    .on("click", function (i) {
                      i.preventDefault();
                      var n = t(this),
                        o = n.data("index");
                      e.trigger("to.owl.carousel", o, 200);
                    });
              });
          });
        }),
        (t.fn.ajax_review_search = function () {
          return t(this).each(function () {
            var e = this,
              i = t(e).find('input[name="action"]'),
              n = t(e).find('input[name="page"]'),
              o = t(e).find('select[name="category"]'),
              s = t(e).find(".search_keyword"),
              a = t(e).find('select[name="sort"]'),
              r = t(e).find(".jeg_review_search_result_holder"),
              l = t(e).find(".module-overlay"),
              c = t(e).find(".review-search-form"),
              d = t(e).data("id"),
              h = window[d],
              u = null,
              p = null,
              f = function () {
                t(n).val(1);
              },
              g = function () {
                t(l).stop().fadeIn(),
                  (h.action = t(i).val()),
                  (h.keyword = t(s).val()),
                  (h.category = t(o).val()),
                  (h.sort = t(a).val()),
                  (h.page = t(n).val()),
                  null !== p && p.abort(),
                  (p = t.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "html",
                    data: h,
                    success: function (e) {
                      t(r).html(e), t(l).stop().fadeOut();
                    },
                  }));
              },
              m = function () {
                u && clearTimeout(u),
                  (u = setTimeout(function () {
                    g();
                  }, 250));
              },
              _ = function () {
                f(), m();
              };
            t(s).on("input", function () {
              (t(s).val().length > 2 || 0 == t(s).val().length) && _();
            }),
              t(o).on("change", function () {
                _();
              }),
              t(a).on("change", function () {
                _();
              }),
              t(e).on("click", ".jeg_navigation a", function (e) {
                e.preventDefault(), t(n).val(t(this).data("id")), m();
              }),
              t(c).on("submit", function (t) {
                t.preventDefault(), _();
              });
          });
        }),
        (t.facebook_page_widget = function () {
          t(".fb-page").length &&
            (t("#facebook-jssdk").length
              ? "undefined" != typeof FB && FB.XFBML.parse()
              : t(".fb-page").waypoint({
                  handler: function () {
                    var e = "&appId=" + t(".fb-page").attr("data-id");
                    !(function (t, i, n) {
                      var o,
                        s = t.getElementsByTagName(i)[0];
                      t.getElementById(n) ||
                        ((o = t.createElement(i)),
                        (o.id = n),
                        (o.src =
                          "//connect.facebook.net/" +
                          jnewsoption.language +
                          "/sdk.js#xfbml=1&version=v2.8" +
                          e),
                        s.parentNode.insertBefore(o, s));
                    })(document, "script", "facebook-jssdk");
                  },
                  offset: "100%",
                }));
        }),
        (t.twitter_widget = function () {
          var e = t(".twitter-timeline"),
            i = !1;
          e.length &&
            e.waypoint({
              handler: function () {
                i ||
                  (!(function () {
                    var t = document.createElement("script");
                    (t.type = "text/javascript"),
                      (t.async = !0),
                      (t.src = "//platform.twitter.com/widgets.js"),
                      (
                        document.getElementsByTagName("head")[0] ||
                        document.getElementsByTagName("body")[0]
                      ).appendChild(t);
                  })(),
                  (i = !0));
              },
              offset: "100%",
            });
        }),
        (t.google_plus_widget = function () {
          var e = t(".jeg_google_plus_widget"),
            i = !1;
          e.length &&
            (e.waypoint({
              handler: function () {
                i ||
                  (!(function () {
                    var t = document.createElement("script");
                    (t.type = "text/javascript"),
                      (t.async = !0),
                      (t.src = "//apis.google.com/js/platform.js"),
                      (
                        document.getElementsByTagName("head")[0] ||
                        document.getElementsByTagName("body")[0]
                      ).appendChild(t);
                  })(),
                  (i = !0));
              },
              offset: "100%",
            }),
            e.each(function () {
              var e = t(this).width(),
                i = t(this).find("div").attr("data-width");
              ("true" === t(this).find("div").attr("data-fit") || e < i) &&
                t(this).find("div").attr("data-width", e);
            }));
        }),
        (t.pinterest_widget = function () {
          var e = t(".jeg_pinterest_widget"),
            i = !1;
          e.length &&
            e.waypoint({
              handler: function () {
                i ||
                  (!(function () {
                    var t = document.createElement("script");
                    (t.type = "text/javascript"),
                      (t.async = !0),
                      (t.src = "//assets.pinterest.com/js/pinit.js"),
                      (
                        document.getElementsByTagName("head")[0] ||
                        document.getElementsByTagName("body")[0]
                      ).appendChild(t);
                  })(),
                  (i = !0));
              },
              offset: "100%",
            });
        }),
        t(document).on("ready", h),
        t(window).load(function () {
          if (
            -1 !== navigator.userAgent.indexOf("MSIE") ||
            navigator.appVersion.indexOf("Trident/") > 0
          ) {
            var t = document.createEvent("UIEvents");
            t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t);
          } else window.dispatchEvent(new Event("resize"));
        }),
        t(document).on("jnews-ajax-load", u),
        t(document).on("jnews_after_split_content_ajax", function (t, e) {
          p(e);
        });
    })(jQuery),
      (function (t) {
        "use strict";
        (window.jnews = window.jnews || {}),
          (window.jnews.menu = {
            newsfeed_xhr: null,
            search_length_word: 3,
            search_timeout: null,
            search_xhr: null,
            init: function (e) {
              var i = this;
              void 0 === e && (e = t("body")),
                e.find(".jeg_menu").each(function () {
                  var e = t(this).attr("data-animation");
                  "slide" === e
                    ? t(this).superfish({
                        animationType: e,
                        popUpSelector: "ul,.sub-menu",
                        speed: 150,
                        animationOut: 100,
                        onShow: function () {
                          t(this).find(".jeg_newsfeed").length &&
                            i.mega_menu_init(this, i);
                        },
                      })
                    : "animateTransform" === e
                    ? t(this).superfish({
                        animationType: e,
                        popUpSelector: "ul,.sub-menu",
                        disableHI: !0,
                        speed: 200,
                        delay: 0,
                        onShow: function () {
                          t(this).find(".jeg_newsfeed").length &&
                            i.mega_menu_init(this, i);
                        },
                      })
                    : "none" === e
                    ? t(this).superfish({
                        animationType: e,
                        popUpSelector: "ul,.sub-menu",
                        delay: 0,
                        disableHI: !0,
                        animation: { opacity: "show" },
                        speed: 1,
                        onShow: function () {
                          t(this).find(".jeg_newsfeed").length &&
                            i.mega_menu_init(this, i);
                        },
                      })
                    : t(this).superfish({
                        popUpSelector: "ul,.sub-menu",
                        delay: 250,
                        speed: "fast",
                        animation: { opacity: "show" },
                        onShow: function () {
                          t(this).find(".jeg_newsfeed").length &&
                            i.mega_menu_init(this, i);
                        },
                      });
                }),
                i.search(e),
                i.meganav(e);
            },
            meganav: function (e) {
              var i = e.find(".jeg_meganav_bar");
              i.find(".current_title").on("click", function () {
                i.toggleClass("nav-open");
              }),
                t(document).mouseup(function (e) {
                  i.hasClass("nav-open") &&
                    !t(e.target).parents(".jeg_meganav_bar").length > 0 &&
                    i.removeClass("nav-open");
                });
            },
            search: function (t) {
              var e = this;
              e.search_toggle(t), e.live_search(t);
            },
            search_toggle: function (e) {
              e.find(".jeg_search_toggle").on("click", function (e) {
                e.preventDefault();
                var i = t(this).parent(".jeg_search_wrapper"),
                  n = t(this).parents(".jeg_container, .jeg_container_full"),
                  o = i.hasClass("jeg_search_fullwidth_expand")
                    ? "hide_navbar_items"
                    : "";
                n.toggleClass("jeg_search_expanded " + o),
                  t("i.fa", t(this)).toggleClass("fa-close fa-search"),
                  t(".jeg_search_input", i).focus();
              });
            },
            live_search: function (e) {
              var i = this;
              jnewsoption.live_search &&
                (e
                  .find(".jeg_search_wrapper .jeg_search_input")
                  .each(function () {
                    var e = null,
                      n = t(this),
                      o = t(this).parents(".jeg_search_wrapper");
                    t(this).on("keyup", function () {
                      if (!t(o).hasClass("jeg_search_modal_expand")) {
                        var s = t(this).val();
                        s.trim().length >= i.search_length_word && s !== e
                          ? ((e = s), i.do_live_search(s, n))
                          : s.trim().length < i.search_length_word &&
                            i.hide_live_search();
                      }
                    });
                  }),
                e.find(".search-all-button").on("click", function (e) {
                  e.preventDefault();
                  var i = t(this).parents(".jeg_search_wrapper");
                  t(i).find("form").submit();
                }));
            },
            do_live_search: function (e, i) {
              var n = this;
              clearTimeout(n.search_timeout),
                (n.search_timeout = setTimeout(function () {
                  null !== n.search_xhr && n.search_xhr.abort(),
                    n.loading_search(i),
                    (n.search_xhr = t.ajax({
                      url: jnews_ajax_url,
                      type: "post",
                      dataType: "html",
                      data: { s: e, action: "jnews_ajax_live_search" },
                      success: t.proxy(n.load_search, n, i),
                    }));
                }, 200));
            },
            loading_search: function (e) {
              var i = t(e).parents(".jeg_search_wrapper");
              t(i)
                .find(".jeg_search_button .fa")
                .removeClass("fa-search")
                .addClass("fa-spinner fa-spin");
            },
            remove_loading_search: function (e) {
              var i = t(e).parents(".jeg_search_wrapper");
              t(i)
                .find(".jeg_search_button .fa")
                .removeClass("fa-spinner fa-spin")
                .addClass("fa-search");
            },
            load_search: function (e, i) {
              var n = this,
                o = t(e).parents(".jeg_search_wrapper");
              "" === i
                ? (t(o).find(".search-result-wrapper").html(""),
                  n.search_no_data(o))
                : (t(o).find(".search-result-wrapper").html("").append(i),
                  n.search_data_exist(o)),
                n.remove_loading_search(e);
            },
            search_no_data: function (e) {
              t(e).find(".jeg_search_result").removeClass("jeg_search_hide"),
                t(e)
                  .find(".jeg_search_result")
                  .removeClass("with_result")
                  .addClass("no_result");
            },
            search_data_exist: function (e) {
              t(e).find(".jeg_search_result").removeClass("jeg_search_hide"),
                t(e)
                  .find(".jeg_search_result")
                  .addClass("with_result")
                  .removeClass("no_result");
            },
            hide_live_search: function () {
              t(".jeg_search_result").addClass("jeg_search_hide");
            },
            sticky_menu: function (e) {
              void 0 === e && (e = t("body"));
              var i = e.find(".jeg_stickybar");
              if (i.length) {
                i.jsticky({
                  item_offset: ".jeg_header",
                  mode: i.data("mode"),
                  state_class: "jeg_sticky_nav",
                  wrapper: ".jeg_stickybar",
                  broadcast_position: !0,
                });
              }
            },
            mega_menu_init: function (e, i) {
              var n = t(e).parents(".jeg_megamenu");
              if (n.hasClass("ajaxload") && !n.hasClass("loaded")) {
                var o = n.data("category"),
                  s = "jnews_build_mega_category_1",
                  a = n.data("number"),
                  r = "";
                n.hasClass("category_2") &&
                  ((s = "jnews_build_mega_category_2"), (r = n.data("tags"))),
                  null !== i.newsfeed_xhr && i.newsfeed_xhr.abort(),
                  (i.newsfeed_xhr = t.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "html",
                    data: { cat_id: o, action: s, number: a, tags: r },
                    success: function (t) {
                      n.find(".jeg_newsfeed .newsfeed_overlay").remove(),
                        n.find(".jeg_newsfeed").append(t),
                        i.create_menu_carousel(e),
                        i.attach_mouseenter_subcategory(e, i),
                        n.addClass("loaded");
                    },
                  }));
              } else
                i.create_menu_carousel(e),
                  i.attach_mouseenter_subcategory(e, i);
            },
            create_menu_carousel: function (e) {
              var i = t(".newsfeed_carousel", e);
              i.on("initialized.owl.carousel", function (i) {
                t(".jeg_newsfeed_list", e).addClass("loaded");
              });
              var n = 4,
                o = t(e).parents(".jeg_megamenu").data("item-row");
              (n =
                "default" === o
                  ? i.hasClass("with_subcat")
                    ? e.parents(".jeg_header.full").length
                      ? 5
                      : 3
                    : e.parents(".jeg_header.full").length
                    ? 6
                    : 4
                  : o),
                i.owlCarousel({
                  rtl: 1 == jnewsoption.rtl,
                  nav: !0,
                  navText: !0,
                  dots: !1,
                  loop: !1,
                  margin: 20,
                  lazyLoad: !0,
                  items: n,
                });
            },
            attach_mouseenter_subcategory: function (e, i) {
              t(e)
                .find(".jeg_newsfeed_subcat li")
                .on("mouseenter", function () {
                  i.menu_load_newsfeed(this, i);
                });
            },
            menu_loaded: function (t) {
              t.addClass("loaded"), t.height("auto");
            },
            menu_load_newsfeed: function (e, i) {
              if (!t(e).hasClass("active")) {
                var n = t(e).parents(".jeg_newsfeed"),
                  o = t(n).find(".jeg_newsfeed_list"),
                  s = t(o).height();
                o.height(s);
                var a = t(e).data("cat-id"),
                  r = o.find(
                    ".jeg_newsfeed_container[data-cat-id='" + a + "']"
                  );
                if (r.length)
                  o.removeClass("loaded"),
                    o
                      .find(".jeg_newsfeed_container")
                      .removeClass("active")
                      .hide(),
                    o
                      .find(".jeg_newsfeed_container[data-cat-id='" + a + "']")
                      .fadeIn(function () {
                        i.menu_loaded(o);
                      });
                else {
                  null !== i.newsfeed_xhr && i.newsfeed_xhr.abort();
                  var l = t(e).parents(".jeg_megamenu"),
                    c = t(l).data("number"),
                    d = "jnews_mega_category_1";
                  t(l).hasClass("category_2") && (d = "jnews_mega_category_2"),
                    o.removeClass("loaded"),
                    (i.newsfeed_xhr = t.ajax({
                      url: jnews_ajax_url,
                      type: "post",
                      dataType: "html",
                      data: { cat_id: a, action: d, number: c },
                      success: function (t) {
                        o.find(".jeg_newsfeed_container").hide(),
                          o.append(t),
                          (r = o.find(
                            ".jeg_newsfeed_container[data-cat-id='" + a + "']"
                          )),
                          i.create_menu_carousel(r),
                          i.menu_loaded(o);
                      },
                    }));
                }
                t(e).addClass("active").siblings().removeClass("active");
              }
            },
          }),
          jnews.menu.init(),
          jnews.menu.sticky_menu(),
          (window.jnews.loginregister = {
            xhr: null,
            captcha: [],
            validateCaptcha: !1,
            show_popup: function (e) {
              var i = this;
              e.length > 0 &&
                e.magnificPopup({
                  type: "inline",
                  removalDelay: 500,
                  midClick: !0,
                  callbacks: {
                    beforeOpen: function () {
                      (this.st.mainClass = "mfp-zoom-out"),
                        t("body").removeClass("jeg_show_menu");
                    },
                    change: function () {
                      var e = this.content.find(".g-recaptcha"),
                        n = this.content.find("form").data("type"),
                        o = e.data("sitekey");
                      this.content.find(".form-message p").remove(),
                        (i.validateCaptcha = !1),
                        1 == jnewsoption.recaptcha &&
                          (e.hasClass("loaded")
                            ? grecaptcha.reset(i.captcha[n])
                            : ((i.captcha[n] = grecaptcha.render(e.get(0), {
                                sitekey: o,
                                callback: i.validateResponse.bind(i),
                              })),
                              t(e).addClass("loaded")));
                    },
                  },
                });
            },
            validateResponse: function (t) {
              "" !== t && (this.validateCaptcha = !0);
            },
            init: function () {
              var e = t(".jeg_popuplink");
              this.show_popup(e);
              var i = t(".jeg_popuplink_parent a");
              this.show_popup(i);
            },
            validateForm: function (e) {
              var i = t(e).find(".form-message"),
                n = t(e).data("type");
              if ("register" === n) {
                if ("" === t(e).find('[name="email"]').val())
                  return (
                    i.html(
                      "<p class='alert alert-error'>" +
                        jnewsoption.lang.empty_email +
                        "</p>"
                    ),
                    !1
                  );
              }
              if ("login" === n || "register" === n) {
                if ("" === t(e).find('[name="username"]').val())
                  return (
                    i.html(
                      "<p class='alert alert-error'>" +
                        jnewsoption.lang.empty_username +
                        "</p>"
                    ),
                    !1
                  );
              }
              if ("login" === n) {
                if ("" === t(e).find('[name="password"]').val())
                  return (
                    i.html(
                      "<p class='alert alert-error'>" +
                        jnewsoption.lang.empty_password +
                        "</p>"
                    ),
                    !1
                  );
              }
              if ("forgot" === n) {
                if ("" === t(e).find('[name="user_login"]').val())
                  return (
                    i.html(
                      "<p class='alert alert-error'>" +
                        jnewsoption.lang.empty_username +
                        "</p>"
                    ),
                    !1
                  );
              }
              return (
                !(1 == jnewsoption.recaptcha && !this.validateCaptcha) ||
                (i.html(
                  "<p class='alert alert-error'>" +
                    jnewsoption.lang.invalid_recaptcha +
                    "</p>"
                ),
                !1)
              );
            },
            hook_form: function () {
              var e = this;
              t(".jeg_popupform.jeg_popup_account > form").each(function () {
                var i = this,
                  n = t(i).find(".form-message");
                t(i).on("submit", function (o) {
                  o.preventDefault(),
                    e.validateForm(i) &&
                      (n.html(""),
                      t(i)
                        .find(".button")
                        .val(t(i).find(".button").data("process")),
                      null !== e.xhr && e.xhr.abort(),
                      (e.xhr = t
                        .post(jnews_ajax_url, {
                          action: "jnews_refresh_nonce",
                          refresh_action_nonce: "jnews_nonce",
                        })
                        .always(function (o) {
                          o.jnews_nonce &&
                            (t(i)
                              .find('input[name="jnews_nonce"]')
                              .val(o.jnews_nonce),
                            (e.xhr = t.ajax({
                              url: jnews_ajax_url,
                              type: "post",
                              dataType: "json",
                              data: t(i).serialize(),
                              success: function (e) {
                                1 == e.response &&
                                  (n.html(
                                    "<p class='alert alert-success'>" +
                                      e.string +
                                      "</p>"
                                  ),
                                  1 == e.refresh &&
                                    (window.location =
                                      jnewsoption.login_reload)),
                                  0 == e.response &&
                                    n.html(
                                      "<p class='alert alert-error'>" +
                                        e.string +
                                        "</p>"
                                    ),
                                  t(i)
                                    .find(".button")
                                    .val(t(i).find(".button").data("string")),
                                  t(i).trigger("reset");
                              },
                            })));
                        })));
                });
              });
            },
          }),
          (window.jnews.mobile = {
            init: function () {
              (this.navmobile = t(".jeg_navbar_mobile")),
                (this.mobilemenu = t(".jeg_mobile_menu")),
                this.menu(),
                this.search(),
                this.truncate();
            },
            truncate: function () {
              t(".content-inner.mobile-truncate").on("click", function () {
                t(this).removeClass("mobile-truncate"),
                  t(this).trigger("resize");
              });
            },
            show_menu: function (e) {
              e.preventDefault(), t("body").toggleClass("jeg_show_menu");
            },
            hide_menu: function (e) {
              e.preventDefault(), t("body").removeClass("jeg_show_menu");
            },
            menu: function () {
              var e = this;
              e.mobilemenu.superfish(),
                t(".jeg_mobile_toggle")
                  .off("click", e.show_menu)
                  .on("click", e.show_menu),
                t(".jeg_menu_close")
                  .off("click", e.hide_menu)
                  .on("click", e.hide_menu),
                t(document).mouseup(function (e) {
                  t("body").hasClass("jeg_show_menu") &&
                    !t(e.target).parents(".jeg_mobile_wrapper").length > 0 &&
                    t("body").removeClass("jeg_show_menu");
                }),
                e.navmobile.jsticky({
                  mode: e.navmobile.data("mode"),
                  item_offset: ".jeg_navbar_mobile",
                  state_class: "jeg_sticky_nav",
                  wrapper: ".jeg_navbar_mobile_wrapper",
                  use_translate3d: !0,
                  broadcast_position: !1,
                });
            },
            search: function () {
              t(".jeg_mobile_search").on("click", function (e) {
                e.preventDefault(),
                  t("body").toggleClass("jeg_search_expanded"),
                  t("i.fa", t(this)).toggleClass("fa-close fa-search"),
                  t(".jeg_navbar_mobile_wrapper .jeg_search_input")
                    .val("")
                    .focus();
              });
            },
          }),
          jnews.mobile.init(),
          (window.jnews.first_load = {
            data: null,
            init: function () {
              t(".jeg_popup_account").length &&
                (jnews.loginregister.init(), jnews.loginregister.hook_form()),
                jfla.length &&
                  this.do_ajax({
                    action: "jnews_first_load_action",
                    jnews_id: jnewsoption.postid,
                    load_action: jfla,
                  });
            },
            update_counter: function () {
              var e = this,
                i = {
                  total_view: t(".jeg_share_stats .jeg_views_count .counts"),
                  total_share: t(".jeg_share_stats .jeg_share_count .counts"),
                  total_comment: t(".jeg_meta_comment a span"),
                };
              t.each(e.data.counter, function (t, e) {
                i[t].length && i[t].text(e);
              });
            },
            do_ajax: function (e) {
              var i = this;
              t.ajax({
                url: jnews_ajax_url,
                type: "post",
                dataType: "json",
                data: e,
                success: function (t) {
                  (i.data = t), t.counter && i.update_counter();
                },
              });
            },
          }),
          jnews.first_load.init(),
          (window.jnews.deprecated = {
            init: function (e) {
              void 0 === e && (e = t("body"));
              var i = e.find(
                "[class*=google-plus].removed, [class*=google_plus].removed, [class*=googleplus].removed "
              );
              i.length &&
                i
                  .off("click.share click")
                  .on("click", function (t) {
                    t.preventDefault;
                  })
                  .on("click", function () {
                    return !1;
                  });
            },
          }),
          jnews.deprecated.init(),
          (window.jnews.widget = {}),
          (window.jnews.widget.popular = {
            init: function (e) {
              void 0 === e && (e = t("body"));
              var i = e.find(".widget_jnews_popular .socialshare_list a");
              i.length &&
                i.on("click", function (e) {
                  var i = t(this);
                  e.preventDefault();
                  var n = i.attr("href");
                  window.open(n, "", "height=570,width=750");
                });
            },
          }),
          jnews.widget.popular.init(),
          (window.jnews.popup = {
            popupcontainer: null,
            container: null,
            init: function (e) {
              var i = this;
              (i.container = void 0 === e ? t("body") : e),
                (this.popupcontainer = t(".pswp").get(0)),
                "photoswipe" === jnewsoption.popup_script
                  ? this.popup_photoswipe()
                  : "magnific" === jnewsoption.popup_script &&
                    this.popup_magnific();
            },
            expand_photoswipe: function (t, e) {
              var i = this,
                n = {
                  index: e,
                  history: !1,
                  focus: !1,
                  showAnimationDuration: 0,
                  hideAnimationDuration: 0,
                  barsSize: { top: 44, bottom: 0 },
                };
              new PhotoSwipe(
                i.popupcontainer,
                PhotoSwipeUI_Default,
                t,
                n
              ).init();
            },
            expand_single_featured: function (e) {
              var i = this,
                n = t(e).find("img"),
                o = [
                  {
                    src: t(e).attr("href"),
                    w: parseInt(t(n).data("full-width"), 10),
                    h: parseInt(t(n).data("full-height"), 10),
                    title: t(n).attr("alt"),
                  },
                ];
              i.expand_photoswipe(o, 0);
            },
            expand_featured_gallery: function (e) {
              var i = this,
                n = t(e).parents(".featured_gallery"),
                o = t(e).parents(".owl-item"),
                s = t(o).index(".owl-item"),
                a = [],
                r = t(n).owlCarousel({ rtl: 1 == jnewsoption.rtl });
              t(n)
                .find("a")
                .each(function (e) {
                  var i = this,
                    n = t(i).find("img");
                  t(i)
                    .find(".thumbnail-container")
                    .hasClass("thumbnail-background")
                    ? (a[e] = {
                        src: t(i).attr("href"),
                        w: parseInt(
                          t(i)
                            .find(".thumbnail-container > div")
                            .data("full-width"),
                          10
                        ),
                        h: parseInt(
                          t(i)
                            .find(".thumbnail-container > div")
                            .data("full-height"),
                          10
                        ),
                        title: t(i)
                          .find(".thumbnail-container > div")
                          .attr("alt"),
                      })
                    : (a[e] = {
                        src: t(i).attr("href"),
                        w: parseInt(t(n).data("full-width"), 10),
                        h: parseInt(t(n).data("full-height"), 10),
                        title: t(n).attr("alt"),
                      });
                });
              var l = {
                  index: s,
                  history: !1,
                  focus: !1,
                  showAnimationDuration: 0,
                  hideAnimationDuration: 0,
                },
                c = new PhotoSwipe(
                  i.popupcontainer,
                  PhotoSwipeUI_Default,
                  a,
                  l
                );
              c.listen("afterChange", function () {
                var t = c.getCurrentIndex();
                r.trigger("to.owl.carousel", [t, 300]);
              }),
                c.init();
            },
            expand_wp_gallery: function (e) {
              var i = this,
                n = t(e).parents(".gallery"),
                o = t(e).parents("figure"),
                s = t(o).index("figure"),
                a = [];
              t(n)
                .find("a")
                .each(function (e) {
                  var i = this,
                    n = t(i).find("img"),
                    o = t(i)
                      .parents(".gallery-item")
                      .find(".wp-caption-text")
                      .text();
                  a[e] = {
                    src: t(i).attr("href"),
                    w: parseInt(t(n).data("full-width"), 10),
                    h: parseInt(t(n).data("full-height"), 10),
                    title: o,
                  };
                }),
                i.expand_photoswipe(a, s);
            },
            expand_single_image_caption: function (e) {
              var i = this,
                n = t(e).parent(),
                o = t(n).find("a").attr("href"),
                s = t(n).find(".wp-caption-text").text();
              t(e).addClass("load-image");
              var a = new Image();
              (a.onload = function () {
                t(e).removeClass("load-image");
                var n = [
                  {
                    src: o,
                    w: parseInt(a.width, 10),
                    h: parseInt(a.height, 10),
                    title: s,
                  },
                ];
                i.expand_photoswipe(n, 0);
              }),
                (a.src = o);
            },
            expand_single_image: function (e) {
              var i = this,
                n = t(e).find("img");
              t(e).addClass("load-image");
              var o = new Image();
              (o.onload = function () {
                t(e).removeClass("load-image");
                var s = [
                  {
                    src: t(e).attr("href"),
                    w: parseInt(o.width, 10),
                    h: parseInt(o.height, 10),
                    title: t(n).attr("alt"),
                  },
                ];
                i.expand_photoswipe(s, 0);
              }),
                (o.src = t(e).attr("href"));
            },
            popup_photoswipe: function () {
              var e = this;
              t(e.container)
                .find(".jeg_featured.featured_image a")
                .on("click", function (t) {
                  t.preventDefault(), e.expand_single_featured(this);
                }),
                t(e.container)
                  .find(".featured_gallery a")
                  .on("click", function (t) {
                    t.preventDefault(), e.expand_featured_gallery(this);
                  }),
                t(e.container)
                  .find(".content-inner .gallery")
                  .find(
                    "a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']"
                  )
                  .on("click", function (t) {
                    t.preventDefault(), e.expand_wp_gallery(this);
                  }),
                t(e.container)
                  .find(".content-inner figure.wp-caption")
                  .find(
                    "a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']"
                  )
                  .find("img")
                  .each(function () {
                    var i = t(this).parent();
                    t(i).on("click", function (t) {
                      t.preventDefault(), e.expand_single_image_caption(this);
                    });
                  }),
                t(e.container)
                  .find(".content-inner")
                  .find(
                    "a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']"
                  )
                  .find("img[class*='align']")
                  .each(function () {
                    var i = t(this).parent();
                    t(i).on("click", function (t) {
                      t.preventDefault(), e.expand_single_image(this);
                    });
                  });
            },
            expand_magnific: function (e) {
              t(e).magnificPopup({
                gallery: { enabled: !0 },
                type: "image",
                closeOnContentClick: !0,
                closeBtnInside: !1,
                fixedContentPos: !0,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                  verticalFit: !0,
                  titleSrc: function (t) {
                    return "FIGURE" === t.el.parent().prop("tagName")
                      ? t.el.parent().find("figcaption").text()
                      : t.el.parents(".gallery-item").find(".wp-caption-text")
                          .length
                      ? t.el
                          .parents(".gallery-item")
                          .find(".wp-caption-text")
                          .text()
                      : t.el.find("img").attr("alt");
                  },
                },
              });
            },
            expand_magnific_gallery: function (t) {
              this.expand_magnific(t);
            },
            popup_magnitif_single_gallery: function (e) {
              var i = this,
                n = [];
              t(i.container)
                .find(e)
                .each(function () {
                  var e = t(this).prop("tagName"),
                    i = this;
                  "IMG" === e
                    ? n.push(t(i).parent().get(0))
                    : n.push(t(i).get(0));
                }),
                i.expand_magnific(n),
                i.expand_magnific_gallery(".featured_gallery a");
            },
            popup_magnitif_normal: function (e) {
              var i = this;
              t(i.container)
                .find(e)
                .each(function () {
                  var e = t(this).prop("tagName"),
                    n = this;
                  "IMG" === e
                    ? i.expand_magnific(t(n).parent().get(0))
                    : i.expand_magnific(t(n).get(0));
                }),
                i.expand_magnific_gallery(".featured_gallery a");
            },
            popup_magnific: function () {
              var t = this,
                e =
                  ".content-inner figure.wp-caption > a > img,.content-inner a[href$='.gif'] > img[class*='wp-image'],.content-inner a[href$='.jpg'] > img[class*='wp-image'],.content-inner a[href$='.png'] > img[class*='wp-image'],.content-inner a[href$='.bmp'] > img[class*='wp-image'],.content-inner a[href$='.gif'] > img[class*='align'],.content-inner a[href$='.jpg'] > img[class*='align'],.content-inner a[href$='.png'] > img[class*='align'],.content-inner a[href$='.bmp'] > img[class*='align'],.jeg_featured.featured_image a,.content-inner .gallery a";
              "1" === jnewsoption.single_gallery
                ? t.popup_magnitif_single_gallery(e)
                : t.popup_magnitif_normal(e);
            },
          }),
          jnews.popup.init(),
          (window.jnews.comment = {
            container: null,
            init: function (e) {
              var i = this;
              (i.container = void 0 === e ? t("body") : e),
                this.create(i.container);
              var n = t(i.container).find(".ajax_comment_button");
              n.length &&
                n.on("click", function () {
                  var e = t(this),
                    n = e.data("id"),
                    o = e.data("post-type"),
                    s = e.data("loading");
                  e.find("span").text(s),
                    t.ajax({
                      url: jnews_ajax_url,
                      type: "post",
                      dataType: "html",
                      data: {
                        action: "jnews_ajax_comment",
                        post_id: n,
                        post_type: o,
                      },
                      success: function (t) {
                        e.after(t).remove(), i.create(i.container);
                      },
                    });
                });
            },
            create: function () {
              var e = t("#comments");
              if (e.length) {
                var i = e.attr("data-type"),
                  n = e.attr("data-id");
                if ("disqus" == i)
                  t("#disqus-script").length
                    ? DISQUS.reset({ reload: !0 })
                    : (t("#disqus-script").remove(),
                      (function () {
                        var t = document.createElement("script");
                        (t.id = "disqus-script"),
                          (t.type = "text/javascript"),
                          (t.async = !0),
                          (t.src = "//" + n + ".disqus.com/embed.js"),
                          (
                            document.getElementsByTagName("head")[0] ||
                            document.getElementsByTagName("body")[0]
                          ).appendChild(t);
                      })());
                else if ("facebook" == i)
                  if (t("#facebook-jssdk").length)
                    "undefined" != typeof FB && FB.XFBML.parse();
                  else if ("facebook" == i) {
                    var o = n ? "&appId=" + n : "";
                    !(function (t, e, i) {
                      var n,
                        s = t.getElementsByTagName(e)[0];
                      t.getElementById(i) ||
                        ((n = t.createElement(e)),
                        (n.id = i),
                        (n.src =
                          "//connect.facebook.net/" +
                          jnewsoption.language +
                          "/sdk.js#xfbml=1&version=v2.8" +
                          o),
                        s.parentNode.insertBefore(n, s));
                    })(document, "script", "facebook-jssdk");
                  }
              }
            },
          }),
          jnews.comment.init(),
          (window.jnews.ajax_analytic = {
            update: function (t, e) {
              this.google_analytics(window.location.pathname, document.title),
                this.track_jnews(e);
            },
            get_nonce: function (t) {},
            google_analytics: function (t, e) {
              ("undefined" == typeof pageTracker &&
                "undefined" == typeof _gaq &&
                "undefined" == typeof ga &&
                "undefined" == typeof __gaTracker &&
                "undefined" == typeof gaplusu) ||
                ("undefined" != typeof pageTracker &&
                  null !== pageTracker &&
                  pageTracker._trackPageview(t),
                "undefined" != typeof _gaq &&
                  null !== _gaq &&
                  (void 0 !== e &&
                    null !== e &&
                    _gaq.push(["_set", "title", e]),
                  _gaq.push(["_trackPageview", t])),
                "undefined" != typeof ga &&
                  null !== ga &&
                  (void 0 !== e && null !== e && ga("set", "title", e),
                  ga("send", "pageview", t)),
                "undefined" != typeof __gaTracker &&
                  null !== __gaTracker &&
                  __gaTracker("send", "pageview", t),
                "undefined" != typeof gaplusu &&
                  null !== gaplusu &&
                  (void 0 !== e && null !== e && gaplusu("set", "title", e),
                  gaplusu("send", "pageview", t)));
            },
            track_jnews: function (t) {
              jfla.indexOf("view_counter") > -1 &&
                jnews.first_load.do_ajax({
                  action: "jnews_first_load_action",
                  load_action: ["view_counter"],
                  jnews_id: t,
                });
            },
          }),
          (window.jnews.menu_drop = {
            init: function () {
              (this.menu_drop = t(".menu-item-has-children")),
                t(window).width() <= 1024 && this.newEvent();
            },
            newEvent: function () {
              this.menu_drop.on("click", function () {
                t(this).hasClass("sfHover")
                  ? (t(this).removeClass("sfHover"),
                    t(this).find(".sub-menu").attr("style", "display: none"))
                  : t(this).find(".sub-menu").attr("style", "display: block");
              });
            },
          }),
          jnews.menu_drop.init(),
          (window.jnews.edit_account = {
            init: function () {
              this.changeHandler();
            },
            changeHandler: function () {
              var e = t("#fname"),
                i = t("#lname");
              e.on("change", function (e) {
                var i = this.value,
                  n = t("#lname").val(),
                  o = t("#dname");
                o.append("<option>" + i + "</option>"),
                  o.append("<option>" + i + " " + n + "</option>"),
                  o.append("<option>" + n + " " + i + "</option>"),
                  o.chosen("destroy").chosen();
              }),
                i.on("change", function (e) {
                  var i = t("#fname").val(),
                    n = this.value,
                    o = t("#dname");
                  o.append("<option>" + n + "</option>"),
                    o.append("<option>" + i + " " + n + "</option>"),
                    o.append("<option>" + n + " " + i + "</option>"),
                    o.chosen("destroy").chosen();
                });
            },
          }),
          jnews.edit_account.init();
      })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (window.jnews.ajax_cart_detail = window.jnews.ajax_cart_detail || {}),
        (window.jnews.cart = window.jnews.cart || {}),
        (window.jnews.ajax_cart_detail = {
          init: function () {
            var e = this;
            t(document).bind(
              "added_to_cart removed_from_cart wc_fragments_refreshed",
              function () {
                e.ajaxCart();
              }
            );
          },
          ajaxCart: function () {
            var e = { action: "jnews_ajax_cart_detail" };
            t.ajax({
              url: jnews_ajax_url,
              type: "post",
              dataType: "json",
              data: e,
              success: function (e) {
                t(".cartlink").html(e);
              },
            });
          },
        }),
        (window.jnews.cart = {
          init: function (e) {
            void 0 === e && (e = t("body")),
              e.find(".jeg_cart").each(function () {
                t(this).hover(
                  function () {
                    t(this).addClass("open");
                  },
                  function () {
                    t(this).removeClass("open");
                  }
                );
              });
          },
        }),
        t(document).on("ready", function () {
          jnews.cart.init(), jnews.ajax_cart_detail.init();
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (window.jnews.floating_video = window.jnews.floating_video || {}),
        (window.jnews.floating_video = {
          container: null,
          element: null,
          wrapper: null,
          videoBottom: null,
          closeButton: null,
          closed: !1,
          ww: null,
          following: !1,
          position: "bottom_right",
          sidebar: null,
          offset: null,
          width: null,
          left: null,
          init: function (e) {
            (this.container = void 0 !== e ? e : t("body")),
              (this.element = t(this.container).find(
                ".jeg_featured.featured_video"
              )),
              this.element.length &&
                ((this.following = this.element.attr("data-following")),
                (this.position = this.element.attr("data-position")),
                "1" === this.following &&
                  ((this.wrapper = t(this.element).find(
                    ".jeg_featured_video_wrapper"
                  )),
                  (this.closeButton = t(this.element).find(".floating_close")),
                  this.resize(),
                  t(window).on("scroll", this.scroll.bind(this)),
                  t(window).on("ready resize", this.resize.bind(this)),
                  t(this.closeButton).on("click", this.close.bind(this))));
          },
          unbind: function () {
            t(window).off("scroll", this.scroll.bind(this)),
              t(window).off("ready resize", this.resize.bind(this)),
              t(this.closeButton).off("click", this.close.bind(this));
          },
          close: function () {
            (this.closed = !0), this.element.removeClass("floating");
          },
          resize: function () {
            this.element.length &&
              ((this.videoBottom =
                this.element.outerHeight() + this.element.offset().top),
              (this.ww = t(window).width()),
              (this.sidebar = t(".jeg_sidebar"))),
              this.sidebar.length > 0 &&
                ((this.offset = this.sidebar.offset()),
                (this.width = this.sidebar.width()),
                (this.left =
                  parseInt(this.sidebar.css("padding-left")) +
                  parseInt(this.sidebar.css("margin-left"))));
          },
          scroll: function () {
            if (!this.closed && "1" === this.following) {
              t(window).scrollTop() > this.videoBottom
                ? (this.element.addClass("floating"),
                  "sidebar" === this.position &&
                    this.sidebar.length > 0 &&
                    this.wrapper
                      .width(this.width + 20)
                      .css({
                        top: 100,
                        left: this.offset.left + this.left - 10,
                      }))
                : (this.element.removeClass("floating"),
                  this.wrapper.removeAttr("style"));
            }
          },
        }),
        t(document).on("jnews-ajax-load", function (t, e) {
          jnews.floating_video.init(e);
        }),
        t(document).on("ready", function () {
          jnews.floating_video.init();
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (window.jnews.zoom = window.jnews.zoom || {}),
        (window.jnews.zoom = {
          init: function () {
            var e = this;
            (e.container = t("body")),
              (e.refresh = !1),
              (e.is_enable =
                void 0 !== jnewsoption.zoom_button
                  ? jnewsoption.zoom_button
                  : 0),
              (e.is_rtl =
                void 0 !== jnewsoption.zoom_button
                  ? parseInt(jnewsoption.rtl)
                  : 0),
              (e.transform_origin = e.is_rtl ? "top right" : "0 0"),
              (e.zoomContainer = e.container.find(".jeg_meta_zoom")),
              ((e.is_enable && e.zoomContainer.length > 0) ||
                e.zoomContainer.length > 0) &&
                ((e.zoomOut = e.zoomContainer.find(".zoom-out")),
                (e.zoomReset = e.zoomContainer.find(".zoom-reset")),
                (e.zoomIn = e.zoomContainer.find(".zoom-in")),
                (e.zoomInStep = e.zoomContainer.attr("data-in-step")),
                (e.zoomOutStep = 10 - e.zoomContainer.attr("data-out-step")),
                (e.zoomLevel = 1),
                (e.progressBar = e.zoomContainer.find(".zoom-bar")),
                e.zoomEvent(),
                null !== e.getZoomCookie("zoom_position") &&
                  e.updateZoomCookie(e.getZoomCookie("zoom_position")));
          },
          setSizeContent: function (e, i) {
            var n = this,
              o = e,
              s = n.container.find(".content-inner");
            1 != e
              ? n.container.addClass("jnews_zoom_activated")
              : n.container.removeClass("jnews_zoom_activated"),
              s.length > 0 &&
                s.each(function (e, i) {
                  var n = t(i),
                    s =
                      null === n.parents(".jeg_inner_content").width()
                        ? n.parents(".jeg_custom_content_wrapper").width()
                        : n.parents(".jeg_inner_content").width(),
                    a = n.parents(".entry-content"),
                    r = n.parents(".with-share"),
                    l = parseInt(n.css("marginLeft").replace("px", "")),
                    c = parseInt(n.css("marginRight").replace("px", "")),
                    d = n.height(),
                    h = n[0].getBoundingClientRect().height,
                    u = h > d ? d : h,
                    p = h > d ? h : d,
                    f = o >= 1 ? p : u,
                    g = f - f / o,
                    m = r.length > 0 ? l + c : 0,
                    _ = o >= 1 ? s / o - m : s / o - 2 * m;
                  (_ = 1 == o ? "" : _),
                    a.length > 0
                      ? (a.css({ height: parseInt(f) + "px" }),
                        n.css({ width: _ }),
                        n.find(" > *").css({ maxWidth: _ }))
                      : (n.css({ marginBottom: g + 30 }),
                        n.css({ width: _ }),
                        n.find(" > *").css({ maxWidth: _ }));
                }),
              i &&
                setTimeout(function () {
                  n.setSizeContent(e, !1);
                }, 150);
          },
          resetZoom: function () {
            var e = this;
            (e.zoomLevel = 1),
              e.updateProgressBar(1),
              (document.cookie = "zoom_position=" + e.zoomLevel + "; path=/;"),
              e.setSizeContent(e.zoomLevel, !0);
            var i = e.container.find(".content-inner"),
              n = i.parents(".entry-content");
            i.length > 0 &&
              i.each(function (o, s) {
                e.refresh = !0;
                var a = t(s);
                a.find(" > *").css({ maxWidth: "" }),
                  a
                    .css({
                      "-ms-zoom": "",
                      "-ms-transform": "",
                      "-ms-transform-origin": "",
                      "-moz-transform": "",
                      "-moz-transform-origin": "",
                      "-o-transform": "",
                      "-o-transform-origin": "",
                      "-webkit-transform": "",
                      "-webkit-transform-origin": "",
                      overflow: "",
                      width: "",
                    })
                    .trigger("containerchange"),
                  n.length > 0
                    ? n.css({ height: "" })
                    : i.css({ marginBottom: "" });
              });
          },
          updateZoomCookie: function (e) {
            var i = this;
            i.updateProgressBar(e);
            var n = i.container.find(".content-inner"),
              o = "scale(" + e + ")",
              s = e,
              a = i.transform_origin,
              r = "hidden";
            1 == e && ((o = ""), (s = ""), (a = ""), (r = "")),
              n.length &&
                n.each(function (e, n) {
                  (i.refresh = !0),
                    t(n)
                      .css({
                        "-ms-zoom": s,
                        "-ms-transform": o,
                        "-ms-transform-origin": a,
                        "-moz-transform": o,
                        "-moz-transform-origin": a,
                        "-o-transform": o,
                        "-o-transform-origin": a,
                        "-webkit-transform": o,
                        "-webkit-transform-origin": a,
                        overflow: r,
                      })
                      .trigger("containerchange");
                }),
              i.setSizeContent(e, !0);
          },
          updateZoom: function (e) {
            var i = this;
            (i.zoomLevel += e),
              (i.zoomLevel =
                i.zoomLevel > 1 + i.zoomInStep / 10
                  ? 1 + i.zoomInStep / 10
                  : i.zoomLevel),
              (i.zoomLevel =
                i.zoomLevel < i.zoomOutStep / 10
                  ? i.zoomOutStep / 10
                  : i.zoomLevel),
              i.updateProgressBar(i.zoomLevel),
              (document.cookie = "zoom_position=" + i.zoomLevel + "; path=/;");
            var n = "scale(" + i.zoomLevel + ")",
              o = i.zoomLevel,
              s = i.transform_origin,
              a = "hidden";
            1 == i.zoomLevel && ((n = ""), (o = ""), (s = ""), (a = ""));
            var r = i.container.find(".content-inner");
            r.length &&
              r.each(function (e, r) {
                (i.refresh = !0),
                  t(r)
                    .css({
                      "-ms-zoom": o,
                      "-ms-transform": n,
                      "-ms-transform-origin": s,
                      "-moz-transform": n,
                      "-moz-transform-origin": s,
                      "-o-transform": n,
                      "-o-transform-origin": s,
                      "-webkit-transform": n,
                      "-webkit-transform-origin": s,
                      overflow: a,
                    })
                    .trigger("containerchange");
              }),
              i.setSizeContent(i.zoomLevel, !0);
          },
          getZoomCookie: function (t) {
            var e = document.cookie.match("(^|;) ?" + t + "=([^;]*)(;|$)");
            return e ? e[2] : null;
          },
          updateProgressBar: function (e) {
            var i = this,
              n = t(i.progressBar),
              o = (100 * (e - 0.8)) / 0.5 + 0,
              s = o + "%";
            o <= 100 ? n.width(s) : o > 100 && n.width("100%");
          },
          zoomEvent: function () {
            var e = this,
              i = e.container.find(".content-inner");
            (e.width = t(window).width()),
              (e.height = t(window).height()),
              e.zoomOut.on("click", function () {
                e.updateZoom(-0.1);
              }),
              e.zoomIn.on("click", function () {
                e.updateZoom(0.1);
              }),
              e.zoomReset.on("click", function () {
                e.resetZoom();
              }),
              i.length &&
                i.each(function (i, n) {
                  var o = (e.getZoomCookie("zoom_position"), t(n));
                  o.off(
                    "containerchange DOMSubtreeModified changed.owl.carousel refreshed.owl.carousel"
                  ).on(
                    "containerchange DOMSubtreeModified changed.owl.carousel refreshed.owl.carousel",
                    function (i) {
                      var n = t(this),
                        s = n.parents(".post-autoload").length
                          ? n.parents(".post-autoload").data("id")
                          : 0,
                        a = n;
                      if (s) {
                        a = e.container
                          .find('.post-autoload[data-id="' + s + '"]')
                          .find(".content-inner");
                      }
                      if (e.refresh) {
                        e.refresh = !1;
                        var r = a.find(".owl-carousel");
                        setTimeout(function () {
                          r.each(function (e, i) {
                            t(i).data("owl.carousel").onResize(),
                              o.trigger("contaianerchange");
                          });
                        }, 1500);
                      }
                      setTimeout(
                        function () {
                          var i = t(this),
                            n = e.getZoomCookie("zoom_position"),
                            o = i.parents(".entry-content"),
                            s = i.parents(".post-autoload").length
                              ? i.parents(".post-autoload").data("id")
                              : 0,
                            a = i;
                          if (s) {
                            a = e.container
                              .find('.post-autoload[data-id="' + s + '"]')
                              .find(".content-inner");
                          }
                          var r = a.height(),
                            l = a[0].getBoundingClientRect().height,
                            c = l > r ? r : l,
                            d = l > r ? l : r,
                            h = n >= 1 ? d : c;
                          o.length > 0 && o.css({ height: parseInt(h) + "px" });
                        }.bind(this),
                        1e3
                      );
                    }
                  );
                }),
              t(window).resize(function () {
                (t(window).width() === e.width &&
                  t(window).height() === e.height) ||
                  ((e.width = t(window).width()),
                  (e.height = t(window).height()),
                  e.resetZoom());
              });
          },
        }),
        t(document).on("jnews-ajax-load", function (t, e) {
          jnews.zoom.init();
        }),
        t(document).on("ready", function () {
          jnews.zoom.init();
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (window.jnews.popuppost = window.jnews.popuppost || {}),
        (window.jnews.popuppost = {
          container: null,
          content: null,
          element: null,
          init: function (e) {
            var i = this;
            if (
              ((i.container = void 0 === e ? t("body") : e),
              (i.element = i.container.find(".jeg_popup_post")),
              i.element.length > 0)
            ) {
              var n = t(i.element).parents(".post-wrap");
              (i.content = t(n).find(".entry-content")),
                i.element.find(".jeg_popup_close").on("click", function (t) {
                  t.preventDefault(),
                    i.element.removeClass("active").addClass("closed");
                }),
                t(window).width() > 1024
                  ? t(window).on(
                      "on scroll resize load",
                      t.proxy(i.dispatch, i)
                    )
                  : t(window).off("scroll resize load", t.proxy(i.dispatch, i));
            }
          },
          dispatch: function () {
            var e = this,
              i = e.element.hasClass("closed"),
              n = t(window).scrollTop(),
              o = 0.5 * t(window).height();
            n >
              Math.abs(e.content.offset().top + e.content.outerHeight() - o) &&
            !i
              ? e.element.addClass("active")
              : e.element.removeClass("active");
          },
        }),
        t(document).on("jnews-ajax-load", function (t, e) {
          jnews.popuppost.init(e);
        }),
        t(document).on("ready", function () {
          jnews.popuppost.init();
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      function e() {
        var e = t(".sidecontent_postwrapper");
        if (e.length) {
          e.jScrollPane({ mouseWheelSpeed: 50 });
          var i = e.data("jsp"),
            n = 1 == jnewsoption.admin_bar ? 32 : 0,
            o = function () {
              t(window).width() > 1024
                ? e.css(
                    "height",
                    t(window).height() -
                      t(".jeg_side_heading").outerHeight() -
                      n
                  )
                : (t("#jeg_sidecontent").css(
                    "height",
                    t(window).height() -
                      t(".jeg_navbar_mobile_wrapper").outerHeight()
                  ),
                  e.css(
                    "height",
                    t(window).height() -
                      t(".jeg_side_heading").outerHeight() -
                      t(".jeg_navbar_mobile_wrapper").outerHeight()
                  )),
                i.reinitialise();
            };
          t(window).on("resize load", o);
        }
      }
      function i() {
        var i = t("#jeg_sidecontent");
        if (i.length) {
          var n,
            o,
            s,
            a = t(".jeg_header.full").outerHeight() || 0,
            r = t(".jeg_stickybar"),
            l = 0,
            c = 0;
          e();
          var d = function () {
            (c = t(window).scrollTop()),
              (l = 1 == jnewsoption.admin_bar ? 32 : 0),
              r.length &&
                ((n =
                  r.css("-webkit-transform") ||
                  r.css("-moz-transform") ||
                  r.css("-ms-transform") ||
                  r.css("-o-transform") ||
                  r.css("transform")),
                (o = n.replace(/[^0-9\-.,]/g, "").split(",")),
                (s = o[13] || o[5])),
              c > a
                ? (i.addClass("fixed"),
                  t(".jeg_header").hasClass("full") &&
                    s > 0 &&
                    r.length &&
                    (l += r.outerHeight()))
                : (i.removeClass("fixed"), (l = a + l)),
              i.css({ top: l });
          };
          t(window).width() > 1024
            ? t(window).on("scroll load", d)
            : t(window).off("scroll load", d);
        }
      }
      (window.jnews.sidefeed = window.jnews.sidefeed || {}),
        (window.jnews.sidefeed = {
          init: function () {
            var e = this;
            (e.container = t("#jeg_sidecontent")),
              e.container.length &&
                ((e.variable = window.side_feed),
                (e.xhr = null),
                (e.xhr_cache = []),
                (e.lock_action = !1),
                (e.current_post_id = jnewsoption.postid),
                (e.min_prev_sidefeed = 5),
                (e.post_xhr = null),
                (e.post_xhr_cache = []),
                (e.tab = e.container.find(".jeg_side_tabs > li")),
                (e.menu = e.container.find(".jeg_filter_menu a")),
                (e.loadbutton = e.container.find(".sidefeed_loadmore button")),
                (e.sidefeed = e.container.find(".jeg_sidefeed")),
                (e.overlay_loader = e.container.find(".jeg_sidefeed_overlay")),
                (e.sectionwrap = t(".post-wrapper")),
                (e.postoverlay = t(".post-ajax-overlay")),
                e.bind_autoload(),
                e.bind_tab(),
                e.bind_menu(),
                e.bind_load_button(),
                jnewsoption.sidefeed_ajax && e.bind_ajax());
          },
          load_first_item: function () {
            var e = this,
              i = e.sidefeed.find(".jeg_post").first();
            i && t(i).find("a.ajax").trigger("click");
          },
          load_ajax: function (e, i, n) {
            var o = this;
            "append" === e
              ? t(o.sidefeed).append(n.content)
              : "replace" === e && o.sidefeed.html(n.content),
              o.after_ajax_request(e, i, n);
          },
          cache_get: function (t) {
            for (
              var e = this, i = JSON.stringify(t), n = 0;
              n < e.xhr_cache.length;
              n++
            )
              if (e.xhr_cache[n].param == i) return e.xhr_cache[n].result;
            return !1;
          },
          cache_save: function (t, e) {
            var i = this,
              n = JSON.stringify(t);
            i.xhr_cache.push({ param: n, result: e });
          },
          before_ajax_request: function (e) {
            var i = this;
            "append" === e
              ? i.loadbutton
                  .addClass("btn-loading")
                  .text(t(i.loadbutton).data("loading"))
              : "replace" === e && i.overlay_loader.show(),
              (i.lock_action = !0);
          },
          after_ajax_request: function (e, i, n) {
            var o = this;
            o.loadbutton
              .removeClass("btn-end")
              .text(t(o.loadbutton).data("loadmore")),
              n.next
                ? o.loadbutton.text(t(o.loadbutton).data("loadmore"))
                : o.loadbutton
                    .addClass("btn-end")
                    .text(t(o.loadbutton).data("end")),
              "append" === e
                ? o.loadbutton.removeClass("loading")
                : "replace" === e &&
                  (o.overlay_loader.hide(),
                  o.load_first_item(),
                  o.active_state_feed(o.current_post_id)),
              (o.lock_action = !1),
              o.cache_save(i, n),
              o.reinitialize_view();
          },
          load_content: function (e) {
            var i = this;
            i.before_ajax_request(e);
            var n = { action: "jnews_newsfeed_load", data: i.variable },
              o = i.cache_get(n);
            i.xhr && i.xhr.abort(),
              o
                ? i.load_ajax(e, n, o)
                : (i.xhr = t.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "json",
                    data: n,
                    success: t.proxy(i.load_ajax, i, e, n),
                  }));
          },
          bind_autoload: function () {
            var e = this;
            t(document).on("jnews-autoload-change-id", function (t, i) {
              (e.current_post_id = i), e.active_state_feed(i);
            });
          },
          bind_tab: function () {
            var e = this;
            e.tab.on("click", function (i) {
              i.preventDefault(),
                e.lock_action ||
                  (e.tab.removeClass("active"),
                  t(this).addClass("active"),
                  (e.variable.sort_by = t(this).data("sort")),
                  (e.variable.paged = 1),
                  e.load_content("replace"));
            });
          },
          bind_menu: function () {
            var e = this;
            e.menu.on("click", function (i) {
              i.preventDefault(),
                e.lock_action ||
                  (e.menu.removeClass("active"),
                  t(this).addClass("active"),
                  (e.variable.include_category = t(this).data("id")),
                  (e.variable.paged = 1),
                  e.load_content("replace"));
            });
          },
          bind_load_button: function () {
            var t = this;
            t.loadbutton.on("click", function (e) {
              e.preventDefault(),
                t.lock_action ||
                  t.loadbutton.hasClass("btn-end") ||
                  ((t.variable.paged = t.variable.paged + 1),
                  t.load_content("append"));
            });
          },
          bind_ajax: function () {
            var e = this;
            jnewsoption.isblog &&
              window.history &&
              window.history.pushState &&
              e.ajax_dispatch(),
              window.history.pushState &&
                !jnewsoption.ismobile &&
                t(window).on("popstate", t.proxy(e.popstate, e));
          },
          popstate: function (t) {
            var e = this;
            if (void 0 !== t.originalEvent) {
              var i = t.originalEvent.state,
                n = location.href;
              "sidefeed" === i.type &&
                ((e.current_post_id = i.postid),
                e.active_state_feed(e.current_post_id),
                e.do_request(n, !0));
            }
          },
          ajax_dispatch: function () {
            var e = this;
            e.sidefeed.on("click", "a.ajax", function (i) {
              i.preventDefault();
              var n = t(this).parents(".jeg_post"),
                o = t(n).data("id"),
                s = t(this).attr("href");
              o == e.current_post_id ||
                (t("body")
                  .removeClass("menu-active")
                  .removeClass("push-content-right"),
                (e.current_post_id = o),
                e.set_side_active(n),
                e.do_request(s, !1));
            });
          },
          do_request: function (e, i) {
            var n = this;
            n.postoverlay.fadeIn(500, function () {
              t(document).trigger("jnews-sidefeed-ajax-begin"),
                n.sectionwrap.height(t(window).height()),
                n.sectionwrap.find(".post-wrap").remove(),
                t("html, body").scrollTop(0),
                n.fetch_content(e, n.current_post_id, i);
            });
          },
          active_state_feed: function (t) {
            var e = this;
            e.sidefeed.find(".jeg_post").removeClass("active");
            var i = e.sidefeed
              .find(".jeg_post[data-id=" + t + "]")
              .addClass("active");
            e.load_sidefeed_content(i), e.scroll_to_view(i);
          },
          load_sidefeed_content: function (t) {
            for (var e = this, i = 0; i < e.min_prev_sidefeed; i++)
              t.length && (t = t.next());
            0 === t.length && e.try_load_sidefeed_content();
          },
          try_load_sidefeed_content: function () {
            this.loadbutton.trigger("click");
          },
          close_curtain: function () {
            var t = this;
            t.postoverlay.fadeOut(500), t.sectionwrap.css({ height: "auto" });
          },
          fetch_content: function (e, i, n) {
            var o = this;
            null !== o.post_xhr && o.post_xhr.abort(),
              (o.post_xhr = t.ajax({
                url: e,
                type: "get",
                dataType: "html",
                success: function (t) {
                  n ||
                    window.history.pushState(
                      { postid: i, type: "sidefeed" },
                      "",
                      e
                    ),
                    jnews.ajax_analytic.update(e, i),
                    o.set_meta_data(t),
                    o.setup_content(t, i);
                },
                timeout: function () {
                  window.location = e;
                },
              }));
          },
          set_side_active: function (e) {
            var i = this;
            i.sidefeed.find(".jeg_post").removeClass("active"),
              t(e).addClass("active"),
              i.load_sidefeed_content(e),
              i.scroll_to_view(e);
          },
          reinitialize_view: function () {
            t(".sidecontent_postwrapper").data("jsp").reinitialise(),
              setTimeout(function () {
                window.dispatchEvent(new Event("resize"));
              }, 500);
          },
          scroll_to_view: function (e) {
            if (t(e).length) {
              var i = t(".sidecontent_postwrapper"),
                n = i.data("jsp"),
                o = t(e).position().top,
                s = i.height(),
                a = t(".jspPane").position().top,
                r = o + a,
                l = t(e).height();
              if (r < 0 || r > s - l) {
                var c = 0;
                (c = r < 0 ? o - 20 : o - s + l + 50), n.scrollTo(0, c);
              }
            }
          },
          set_meta_data: function (e) {
            var i = t(e).filter("title").text(),
              n = t(e).filter("meta[name=keyword]").attr("content"),
              o = t(e).filter("meta[name=description]").attr("content");
            t("meta[name=description]").attr("content", o),
              t("meta[name=keyword]").attr("content", n),
              (document.title = i);
          },
          setup_content: function (e, i) {
            var n = this,
              o = t(e).find(".post-wrap");
            n.sectionwrap.append(o);
            var s = t(e).find("#post-body-class").attr("class");
            t("body").attr("class", s),
              n.close_curtain(),
              t(document).trigger("jnews-sidefeed-ajax", [i]),
              t(document).trigger("jnews-ajax-load", [o]);
          },
        }),
        t(document).on("ready", function () {
          i(), jnews.sidefeed.init();
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      function e(e) {
        if (e.is(":checked")) {
          n.addClass("jnews-dark-mode"), n.trigger("tinymce-add-dm");
          for (var i = 0; i < 4; i++)
            v[i].find(".jeg_logo_img").attr({ src: u[i], srcset: p[i] }),
              v[i].find(".footer_logo img").each(function (e, n) {
                t(n).attr({
                  src: m[i][e],
                  srcset: _[i][e],
                  "data-srcset": _[i][e],
                });
              });
          document.cookie = "darkmode = true;path = " + o + ";domain = " + s;
        } else if (!e.is(":checked")) {
          n.removeClass("jnews-dark-mode"), n.trigger("tinymce-remove-dm");
          for (var i = 0; i < 4; i++)
            v[i].find(".jeg_logo_img").attr({ src: d[i], srcset: h[i] }),
              v[i].find(".footer_logo img").each(function (e, n) {
                t(n).attr({
                  src: f[i][e],
                  srcset: g[i][e],
                  "data-srcset": g[i][e],
                });
              });
          document.cookie = "darkmode = false;path = " + o + ";domain = " + s;
        }
      }
      const i = t(".jeg_dark_mode_toggle"),
        n = t("body");
      for (
        var o = void 0 === jnewsoption.site_slug ? "/" : jnewsoption.site_slug,
          s =
            void 0 === jnewsoption.site_domain
              ? window.location.hostname
              : jnewsoption.site_domain,
          a = window.location,
          r = new URL(a),
          l = r.searchParams.get("vc_editable"),
          c = r.searchParams.get("elementor-preview"),
          d = [],
          h = [],
          u = [],
          p = [],
          f = [],
          g = [],
          m = [],
          _ = [],
          v = [
            t(".jeg_header_wrapper"),
            t(".jeg_header_sticky"),
            t(".jeg_navbar_mobile_wrapper"),
            t(".jeg_about"),
          ],
          y = (function (t) {
            var e = document.cookie.match("(^|;) ?" + t + "=([^;]*)(;|$)");
            return e ? e[2] : null;
          })("darkmode"),
          w = new Date().getHours(),
          b = 0;
        b < 4;
        b++
      )
        (d[b] = v[b].find("img.jeg_logo_img").attr("data-light-src")),
          (h[b] = v[b].find("img.jeg_logo_img").attr("data-light-srcset")),
          (u[b] = v[b].find("img.jeg_logo_img").attr("data-dark-src")),
          (p[b] = v[b].find("img.jeg_logo_img").attr("data-dark-srcset")),
          v[b].find(".footer_logo img").each(function (e, i) {
            (f[b] = void 0 === f[b] ? [] : f[b]),
              (g[b] = void 0 === g[b] ? [] : g[b]),
              (m[b] = void 0 === m[b] ? [] : m[b]),
              (_[b] = void 0 === _[b] ? [] : _[b]),
              (f[b][e] = t(i).attr("data-light-src")),
              (g[b][e] = t(i).attr("data-light-srcset")),
              (m[b][e] = t(i).attr("data-dark-src")),
              (_[b][e] = t(i).attr("data-dark-srcset"));
          });
      if (
        (n.hasClass("jeg_toggle_dark") &&
          (i.on("change", function () {
            null === l && null === c && e(t(this));
          }),
          i.click(function () {
            t(this).is(":checked")
              ? i.each(function () {
                  t(this).prop("checked", !0).trigger("change");
                })
              : t(this).is(":checked") ||
                i.each(function () {
                  t(this).prop("checked", !1).trigger("change");
                });
          })),
        n.hasClass("jeg_full_dark") &&
          (n.addClass("jnews-dark-mode"), n.trigger("tinymce-add-dm")),
        n.hasClass("jeg_timed_dark"))
      )
        if (w >= 18 || w <= 6) {
          n.addClass("jnews-dark-mode"), n.trigger("tinymce-add-dm");
          for (var b = 0; b < 4; b++)
            v[b].find(".jeg_logo_img").attr({ src: u[b], srcset: p[b] }),
              v[b].find(".footer_logo img").each(function (e, i) {
                t(i).attr({
                  src: m[b][e],
                  srcset: _[b][e],
                  "data-srcset": _[b][e],
                });
              });
          document.cookie = "darkmode = true;path = " + o + ";domain = " + s;
        } else {
          n.removeClass("jnews-dark-mode"), n.trigger("tinymce-remove-dm");
          for (var b = 0; b < 4; b++)
            v[b].find(".jeg_logo_img").attr({ src: d[b], srcset: h[b] }),
              v[b].find(".footer_logo img").each(function (e, i) {
                t(i).attr({
                  src: f[b][e],
                  srcset: g[b][e],
                  "data-srcset": g[b][e],
                });
              });
          document.cookie = "darkmode = false;path = " + o + ";domain = " + s;
        }
      "true" === y
        ? (i.prop("checked", !0).trigger("change"),
          (document.cookie = "darkmode = true;path = " + o + ";domain = " + s))
        : "false" === y &&
          (i.prop("checked", !1).trigger("change"),
          (document.cookie =
            "darkmode = false;path = " + o + ";domain = " + s)),
        t(document).on(
          "tinymce-editor-init",
          function (e, i) {
            n.on("tinymce-add-dm", function () {
              t(i.getBody()).addClass("jnews-dark-mode");
            }),
              n.on("tinymce-remove-dm", function () {
                t(i.getBody()).removeClass("jnews-dark-mode");
              }),
              "true" === y
                ? n.trigger("tinymce-add-dm")
                : n.trigger("tinymce-remove-dm");
          }
            .bind(n)
            .bind(y)
        );
    })(jQuery);
  },
]);
!(function (a) {
  var b;
  if (
    ("function" == typeof define && define.amd && (define(a), (b = !0)),
    "object" == typeof exports && ((module.exports = a()), (b = !0)),
    !b)
  ) {
    var c = window.Cookies,
      d = (window.Cookies = a());
    d.noConflict = function () {
      return (window.Cookies = c), d;
    };
  }
})(function () {
  function a() {
    for (var a = 0, b = {}; a < arguments.length; a++) {
      var c = arguments[a];
      for (var d in c) b[d] = c[d];
    }
    return b;
  }
  function b(a) {
    return a.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  function c(d) {
    function e() {}
    function f(b, c, f) {
      if ("undefined" != typeof document) {
        (f = a({ path: "/" }, e.defaults, f)),
          "number" == typeof f.expires &&
            (f.expires = new Date(1 * new Date() + 864e5 * f.expires)),
          (f.expires = f.expires ? f.expires.toUTCString() : "");
        try {
          var g = JSON.stringify(c);
          /^[\{\[]/.test(g) && (c = g);
        } catch (h) {}
        (c = d.write
          ? d.write(c, b)
          : encodeURIComponent(String(c)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (b = encodeURIComponent(String(b))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var i = "";
        for (var j in f)
          f[j] &&
            ((i += "; " + j), f[j] !== !0 && (i += "=" + f[j].split(";")[0]));
        return (document.cookie = b + "=" + c + i);
      }
    }
    function g(a, c) {
      if ("undefined" != typeof document) {
        for (
          var e = {},
            f = document.cookie ? document.cookie.split("; ") : [],
            g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g].split("="),
            i = h.slice(1).join("=");
          c || '"' !== i.charAt(0) || (i = i.slice(1, -1));
          try {
            var j = b(h[0]);
            if (((i = (d.read || d)(i, j) || b(i)), c))
              try {
                i = JSON.parse(i);
              } catch (k) {}
            if (((e[j] = i), a === j)) break;
          } catch (k) {}
        }
        return a ? e[a] : e;
      }
    }
    return (
      (e.set = f),
      (e.get = function (a) {
        return g(a, !1);
      }),
      (e.getJSON = function (a) {
        return g(a, !0);
      }),
      (e.remove = function (b, c) {
        f(b, "", a(c, { expires: -1 }));
      }),
      (e.defaults = {}),
      (e.withConverter = c),
      e
    );
  }
  return c(function () {});
}),
  jQuery(document).ready(function (a) {}),
  jQuery(document).ready(function (a) {
    a(
      '[data-aawp-click-tracking="true"] a, a[data-aawp-click-tracking="true"]'
    ).on("click", function (b) {
      var c = a(this);
      if ("undefined" == typeof c.data("aawp-prevent-click-tracking")) {
        var d = a(this).attr("data-aawp-click-tracking")
            ? a(this)
            : a(this).closest('[data-aawp-click-tracking="true"]'),
          e = !1;
        if (
          ("undefined" != typeof d.data("aawp-product-id") &&
            (e = d.data("aawp-product-id")),
          "undefined" != typeof d.data("aawp-product-title") &&
            (e = d.data("aawp-product-title")),
          e)
        ) {
          var f = "amazon-link",
            g = "click";
          "function" == typeof gtag
            ? gtag("event", g, { event_category: f, event_label: e })
            : "undefined" != typeof ga
            ? ga("send", "event", f, g, e)
            : "undefined" != typeof _gaq
            ? _gaq.push(["_trackEvent", f, g, e])
            : "undefined" != typeof __gaTracker
            ? __gaTracker("send", "event", f, g, e)
            : "undefined" != typeof _paq
            ? _paq.push(["trackEvent", f, g, e])
            : "undefined" != typeof dataLayer &&
              dataLayer.push({
                event: "amazon-affiliate-link-click",
                category: f,
                action: g,
                label: e,
              });
        }
      }
    });
  }),
  jQuery(document).ready(function (a) {
    function b() {
      (x = x.toLowerCase()),
        s.hasOwnProperty(x) &&
          ((w = s[x]),
          (w === v && p === !1) ||
            (t.hasOwnProperty(w) && ((y = t[w]), g(v, w, y))));
    }
    function c() {
      "geoip-db" === q ? d() : "ipinfo" === q ? e() : "dbip" === q ? f() : d();
    }
    function d() {
      var a = "https://geolocation-db.com/jsonp/";
      o && (a = "https://geolocation-db.com/jsonp/" + o),
        jQuery.ajax({
          url: a,
          jsonpCallback: "callback",
          dataType: "jsonp",
          success: function (a) {
            "undefined" != typeof a.IPv4 &&
              "undefined" != typeof a.country_code &&
              ((x = a.country_code), l(x)),
              b();
          },
        });
    }
    function e() {
      var a = "https://ipinfo.io/json/";
      o && (a = "https://ipinfo.io/" + o + "/json/"),
        jQuery.ajax({
          url: a,
          jsonpCallback: "callback",
          dataType: "jsonp",
          success: function (a) {
            "undefined" != typeof a.ip &&
              "undefined" != typeof a.country &&
              ((x = a.country), l(x)),
              b();
          },
        });
    }
    function f() {
      var a = "https://api.db-ip.com/v2/free/self/";
      o && (a = "https://api.db-ip.com/v2/free/" + o + "/"),
        jQuery.ajax({
          url: a,
          dataType: "json",
          crossDomain: !0,
          success: function (a) {
            "undefined" != typeof a.ipAddress &&
              "undefined" != typeof a.countryCode &&
              ((x = a.countryCode), l(x)),
              b();
          },
        });
    }
    function g(b, c, d) {
      null !== d &&
        a(
          "a[href*='/amazon'], a[href*='/www.amazon'], a[href*='/amzn'], a[href*='/www.amzn']"
        ).each(function (e) {
          var f = a(this).data("aawp-geotargeting");
          if (!f) {
            var g = a(this)
              .closest("*[data-aawp-product-id]")
              .data("aawp-geotargeting");
            if (!g) return;
          }
          var k = a(this).attr("href");
          "asin" === u || k.indexOf("prime") != -1
            ? (k = i(k, b, c))
            : "title" === u && (k = h(a(this), k, b, c)),
            void 0 !== k && ((k = j(k, "tag", d)), a(this).attr("href", k));
        });
    }
    function h(b, c, d, e) {
      var f = b.data("aawp-product-title");
      return (
        f ||
          (f = b
            .parents()
            .filter(function () {
              return a(this).data("aawp-product-title");
            })
            .eq(0)
            .data("aawp-product-title")),
        f &&
          ((f = k(f, 5)),
          (c =
            "https://www.amazon." +
            e +
            "/s/?field-keywords=" +
            encodeURIComponent(f))),
        c
      );
    }
    function i(a, b, c) {
      var d = !1,
        e = !1;
      if (
        (a.indexOf("amzn." + v) != -1 && (d = !0),
        a.indexOf("amazon." + v) != -1 && (e = !0),
        (d || e) && a.indexOf("tag=") != -1)
      )
        return (a =
          "com" == b && d
            ? a.replace("amzn." + b, "amazon." + c + "/dp")
            : "com" == c
            ? a.replace("amazon." + b, "amzn." + c)
            : a.replace("amazon." + b, "amazon." + c));
    }
    function j(a, b, c) {
      null == c && (c = "");
      var d = new RegExp("\\b(" + b + "=).*?(&|$)");
      return a.search(d) >= 0
        ? a.replace(d, "$1" + c + "$2")
        : a + (a.indexOf("?") > 0 ? "&" : "?") + b + "=" + c;
    }
    function k(a, b) {
      return a.split(/\s+/).slice(0, b).join(" ");
    }
    function l(a) {
      p || (a && z.set("aawp-geotargeting", a));
    }
    function m() {
      var a = {};
      return (
        window.location.href
          .replace(location.hash, "")
          .replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function (b, c, d) {
            a[c] = void 0 !== d ? d : "";
          }),
        !!a.aawp_debug_geotargeting
      );
    }
    function n() {
      var a = {};
      return (
        window.location.href
          .replace(location.hash, "")
          .replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function (b, c, d) {
            a[c] = void 0 !== d ? d : "";
          }),
        a.aawp_debug_geotargeting_ip ? a.aawp_debug_geotargeting_ip : ""
      );
    }
    if (
      "undefined" != typeof aawp_geotargeting_settings &&
      "undefined" != typeof aawp_geotargeting_localized_stores &&
      "undefined" != typeof aawp_geotargeting_tracking_ids
    ) {
      var o = n(),
        p = m(),
        q =
          "undefined" != typeof aawp_geotargeting_api
            ? aawp_geotargeting_api
            : "",
        r = aawp_geotargeting_settings,
        s = aawp_geotargeting_localized_stores,
        t = aawp_geotargeting_tracking_ids;
      if (!r.hasOwnProperty("store")) return;
      var u = r.hasOwnProperty("mode") ? r.mode : "mode",
        v = r.store,
        w = "",
        x = "",
        y = "",
        z = Cookies.noConflict(),
        A = z.get("aawp-geotargeting");
      void 0 !== A && p === !1 ? ((x = A), b()) : c();
    }
  });
!(function (e) {
  "use strict";
  (window.jnews.like = window.jnews.like || {}),
    (window.jnews.like = {
      init: function (i) {
        var a = this;
        (a.container = void 0 === i ? e("body") : i),
          a.container
            .find(".jeg_meta_like > a")
            .off("click")
            .on("click", function (i) {
              i.preventDefault(),
                e(this).hasClass("clicked") ||
                  ((a.element = e(this)),
                  (a.parent = a.element.parent()),
                  (a.like = a.parent.find(".like")),
                  (a.dislike = a.parent.find(".dislike")),
                  a.ajax_request());
            });
      },
      ajax_request: function () {
        var i = this;
        i.parent.addClass("clicked").find(".fa").addClass("fa-pulse"),
          e
            .ajax({
              url: jnews_ajax_url,
              type: "post",
              dataType: "json",
              data: {
                post_id: i.element.attr("data-id"),
                type: i.element.attr("data-type"),
                action: "like_handler",
              },
            })
            .done(function (a) {
              -1 === a.response
                ? (e("#jeg_loginform form").find("h3").html(a.message),
                  window.jnews.loginregister.init(),
                  window.jnews.loginregister.hook_form(),
                  e.magnificPopup.open({
                    removalDelay: 500,
                    midClick: !0,
                    mainClass: "mfp-zoom-out",
                    type: "inline",
                    items: { src: "#jeg_loginform" },
                  }))
                : (1 === a.value &&
                    (i.like.html(
                      "<i class='fa fa-thumbs-up'></i> <span>" +
                        a.like +
                        "</span>"
                    ),
                    i.dislike.html(
                      "<i class='fa fa-thumbs-o-down fa-flip-horizontal'></i> <span>" +
                        a.dislike +
                        "</span>"
                    )),
                  -1 === a.value &&
                    (i.like.html(
                      "<i class='fa fa-thumbs-o-up'></i> <span>" +
                        a.like +
                        "</span>"
                    ),
                    i.dislike.html(
                      "<i class='fa fa-thumbs-down fa-flip-horizontal'></i> <span>" +
                        a.dislike +
                        "</span>"
                    )),
                  0 === a.value &&
                    (i.like.html(
                      "<i class='fa fa-thumbs-o-up'></i> <span>" +
                        a.like +
                        "</span>"
                    ),
                    i.dislike.html(
                      "<i class='fa fa-thumbs-o-down fa-flip-horizontal'></i> <span>" +
                        a.dislike +
                        "</span>"
                    )));
            })
            .fail(function (e, i, a) {
              "error" === i
                ? alert(a.toString())
                : "timeout" === i && alert("Execution Timeout");
            })
            .always(function (e, a, n) {
              i.element.attr("data-message", e.message),
                i.parent
                  .removeClass("clicked")
                  .find(".fa")
                  .removeClass("fa-pulse");
            });
      },
    }),
    e(document).on("ready jnews-ajax-load", function (e, i) {
      jnews.like.init();
    });
})(jQuery);
!(function (n) {
  "use strict";
  (window.jnews.socialLogin = window.jnews.socialLogin || {}),
    (window.jnews.socialLogin = {
      init: function () {
        (this.xhr = null),
          (this.container = n(".social-login-wrapper")),
          (this.button = {
            facebook: this.container.find(".social-login-item .btn-facebook"),
            google: this.container.find(".social-login-item .btn-google"),
            linkedin: this.container.find(".social-login-item .btn-linkedin"),
          }),
          this.setEvent();
      },
      setEvent: function () {
        var i = this;
        for (var o in i.button)
          i.button[o].length > 0 &&
            n(i.button[o]).on("click", function (o) {
              o.preventDefault();
              var t = n(this).attr("class").split(/\s+/)[1].substr(4);
              null !== i.xhr && (i.xhr.abort(), (i.xhr = null)), i.doAjax(t);
            });
      },
      doAjax: function (i) {
        this.xhr = n
          .ajax({
            url: jnews_ajax_url,
            type: "post",
            dataType: "json",
            data: { action: "social_login", login_type: i },
          })
          .done(function (n) {
            !1 !== n.url && (window.location.href = n.url);
          });
      },
    }),
    n(document).on("ready", function () {
      jnews.socialLogin.init();
    });
})(jQuery);
var jnews_select_share = { is_customize_preview: "" };
!(function (e) {
  "use strict";
  (window.jnews.selectShare = window.jnews.selectShare || {}),
    (window.jnews.share = window.jnews.share || {}),
    (window.jnews.selectShare = {
      init: function (t) {
        let n = this;
        (n.container = void 0 === t ? e("body") : t),
          (n.menu = e("#selectShareContainer")),
          (n.menuInner = n.menu.find(".selectShare-inner")),
          (n.menuButton = n.menuInner.find("button")),
          (n.selected_text = ""),
          this.setEvent();
      },
      setEvent: function () {
        let t = this;
        t.container.on("mousedown vmousedown", function (e) {
          t.handleMouseDown(e);
        }),
          t.container.on("mouseup vmouseup", function () {
            t.handleSelection();
          }),
          document.addEventListener(
            "selectionchange",
            function () {
              t.hasGetSelection();
            },
            !1
          ),
          t.menuButton.on("click", function (n) {
            n.preventDefault(), t.buttonClick(e(this));
          });
      },
      buttonClick: function (e) {
        var t = e.attr("class").split(" ")[1].replace("jeg_btn-", ""),
          n = e.attr("data-url").replace("[selected_text]", this.selected_text);
        jnews_select_share.is_customize_preview ||
          window.open(
            n,
            t,
            "width=575,height=430,toolbar=false,menubar=false,location=false,status=false"
          );
      },
      handleMouseDown: function (t) {
        1 != e(t.target).parents(".content-inner").length &&
          1 != e(t.target).parents(".entry-header").length &&
          (window.getSelection().empty && window.getSelection().empty(),
          window.getSelection().removeAllRanges &&
            window.getSelection().removeAllRanges());
      },
      replaceData: function () {
        this.menuButton.each(function () {
          var t = e(this).attr("data-post-url")
              ? e(this).attr("data-post-url")
              : null,
            n = e(this).attr("data-image-url")
              ? e(this).attr("data-image-url")
              : null,
            a =
              (e(this).attr("data-title") && e(this).attr("data-title"),
              e(this).attr("data-url"));
          a.indexOf("[image_url]") &&
            (e(this).attr("data-url", a.replace("[image_url]", n)),
            (a = e(this).attr("data-url"))),
            a.indexOf("[url]") &&
              (e(this).attr("data-url", a.replace("[url]", t)),
              (a = e(this).attr("data-url")));
        });
      },
      handleSelection: function () {
        let t = this;
        var n;
        if (
          (window.getSelection
            ? (n = window.getSelection())
            : document.selection && (n = document.selection.createRange()),
          !(n.rangeCount <= 0))
        ) {
          var a = n.getRangeAt(0);
          if (a && n.toString()) {
            if (
              ((t.selected_text = encodeURIComponent(n.toString())),
              t.replaceData(),
              1 !=
                e(n.baseNode || n.anchorNode).parents(".content-inner").length)
            )
              return;
            var i = a.getBoundingClientRect();
            if (i.left || i.top)
              return (
                t.menuInner
                  .css({
                    left: i.left + i.width / 2 - t.menuInner.width() / 2,
                    top: i.top + window.pageYOffset - t.menuInner.height() - 11,
                    display: "block",
                    opacity: 0,
                  })
                  .animate({ opacity: 1 }, 100),
                void setTimeout(function () {
                  t.menuInner.addClass("select_share_menu_animate");
                }, 10)
              );
          }
          t.menuInner.animate({ opacity: 0 }, function () {
            t.menuInner.hide().removeClass("select_share_menu_animate");
          });
        }
      },
      hasGetSelection: function () {
        let e = this;
        var t = window.getSelection().toString();
        "" != t && (e.selected_text = t);
      },
    }),
    (window.jnews.share = {
      init: function (t) {
        void 0 === t && (t = e("body")),
          t
            .find(".jeg_sharelist a, .jeg_post_share a")
            .off("click.share")
            .on("click.share", function (t) {
              var n = e(this);
              if (
                !n.hasClass("jeg_btn-email") &&
                !n.hasClass("jeg_btn-whatsapp") &&
                !n.hasClass("jeg_btn-line")
              ) {
                t.preventDefault();
                var a = n.attr("href");
                if (n.hasClass("jeg_btn-toggle"))
                  e(this)
                    .parents(".jeg_share_button")
                    .toggleClass("show-secondary");
                else
                  n.hasClass("jeg_btn-stumbleupon")
                    ? window.open(a, "", "height=730,width=560")
                    : n.hasClass("jeg_btn-qrcode") ||
                      n.hasClass("jeg_btn-wechat")
                    ? e.magnificPopup.open({
                        items: [{ src: a }],
                        type: "image",
                      })
                    : window.open(a, "", "height=570,width=750");
              }
            });
      },
    }),
    e(document).on("jnews-ajax-load", function (e, t) {
      jnews.share.init(t), jnews.selectShare.init(t);
    }),
    e(document).on("ready", function () {
      jnews.share.init(), jnews.selectShare.init();
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
