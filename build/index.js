!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("webToaster", [], e)
    : "object" == typeof exports
    ? (exports.webToaster = e())
    : (t.webToaster = e());
})(this, () =>
  (() => {
    "use strict";
    var t = {
        d: (e, o) => {
          for (var r in o)
            t.o(o, r) &&
              !t.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      },
      e = {};
    function o(t) {
      return (
        (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        o(t)
      );
    }
    function r(t, e) {
      for (var o = 0; o < e.length; o++) {
        var r = e[o];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, u(r.key), r);
      }
    }
    function n(t, e, o) {
      return (
        e && r(t.prototype, e),
        o && r(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function i(t, e, o) {
      return (
        (e = u(e)) in t
          ? Object.defineProperty(t, e, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = o),
        t
      );
    }
    function u(t) {
      var e = (function (t, e) {
        if ("object" !== o(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, "string");
          if ("object" !== o(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" === o(e) ? e : String(e);
    }
    t.d(e, { default: () => f });
    const f = n(function t(e) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        i(this, "position", "top-right"),
        i(this, "timeout", 3e3),
        (this.position = e.position),
        (this.timeout = e.timeout);
    });
    return e.default;
  })()
);
