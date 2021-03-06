(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Temp = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var getDefaultStyle$j = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Audio = function Audio(_a) {
      var _b = _a.height,
          height = _b === void 0 ? '100' : _b,
          _c = _a.width,
          width = _c === void 0 ? '100' : _c,
          _d = _a.color,
          color = _d === void 0 ? 'blue' : _d,
          _e = _a.ariaLabel,
          ariaLabel = _e === void 0 ? 'audio-loading' : _e,
          _f = _a.wrapperStyle,
          wrapperStyle = _f === void 0 ? {} : _f,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$j(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "audio-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        height: "" + height,
        width: "" + width,
        fill: color,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": ariaLabel,
        "data-testid": "audio-svg"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        transform: "matrix(1 0 0 -1 0 80)"
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        width: "10",
        height: "20",
        rx: "3"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "4.3s",
        values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "15",
        width: "10",
        height: "80",
        rx: "3"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "80;55;33;5;75;23;73;33;12;14;60;80",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "30",
        width: "10",
        height: "50",
        rx: "3"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1.4s",
        values: "50;34;78;23;56;23;34;76;80;54;21;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "45",
        width: "10",
        height: "30",
        rx: "3"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "30;45;13;80;56;72;45;76;34;23;67;30",
        calcMode: "linear",
        repeatCount: "indefinite"
      })))));
    };

    var getDefaultStyle$i = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var BallTriangle = function BallTriangle(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 100 : _b,
          _c = _a.width,
          width = _c === void 0 ? 100 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 5 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'blue' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'ball-triangle-loading' : _f,
          wrapperClass = _a.wrapperClass,
          wrapperStyle = _a.wrapperStyle,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$i(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "ball-triangle-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        height: height,
        width: width,
        stroke: color,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "ball-triangle-svg",
        "aria-label": ariaLabel
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        transform: "translate(1 1)",
        strokeWidth: "2"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "5",
        cy: "50",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;5;50;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        values: "5;27;49;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "27",
        cy: "5",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        from: "5",
        to: "5",
        values: "5;50;50;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        from: "27",
        to: "27",
        values: "27;49;5;27",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "49",
        cy: "50",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;50;5;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "cx",
        from: "49",
        to: "49",
        begin: "0s",
        dur: "2.2s",
        values: "49;5;27;49",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))))));
    };

    var getDefaultStyle$h = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Bars = function Bars(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.color,
          color = _d === void 0 ? 'blue' : _d,
          _e = _a.ariaLabel,
          ariaLabel = _e === void 0 ? 'bars-loading' : _e,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _f = _a.visible,
          visible = _f === void 0 ? true : _f;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$h(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "bars-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        fill: color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "bars-svg",
        "aria-label": ariaLabel
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$g = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Circles = function Circles(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.color,
          color = _d === void 0 ? 'green' : _d,
          _e = _a.ariaLabel,
          ariaLabel = _e === void 0 ? 'circles-loading' : _e,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _f = _a.visible,
          visible = _f === void 0 ? true : _f;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$g(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "circles-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: color,
        "aria-label": ariaLabel,
        "data-testid": "circles-svg"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 67 67",
        to: "-360 67 67",
        dur: "2.5s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 67 67",
        to: "360 67 67",
        dur: "8s",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$f = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var CirclesWithBar = function CirclesWithBar(_a) {
      var _b = _a.wrapperStyle,
          wrapperStyle = _b === void 0 ? {} : _b,
          _c = _a.visible,
          visible = _c === void 0 ? true : _c,
          _d = _a.wrapperClass,
          wrapperClass = _d === void 0 ? '' : _d,
          _e = _a.height,
          height = _e === void 0 ? 100 : _e,
          _f = _a.width,
          width = _f === void 0 ? 100 : _f,
          _g = _a.color,
          color = _g === void 0 ? 'red' : _g,
          outerCircleColor = _a.outerCircleColor,
          innerCircleColor = _a.innerCircleColor,
          barColor = _a.barColor;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$f(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "circles-with-bar-wrapper"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        version: "1.1",
        id: "L1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        height: "" + height,
        width: "" + width,
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "data-testid": "circles-with-bar-svg"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: "none",
        stroke: "" + (outerCircleColor || color),
        strokeWidth: "6",
        strokeMiterlimit: "15",
        strokeDasharray: "14.2472,14.2472",
        cx: "50",
        cy: "50",
        r: "47",
        "data-testid": "circles-with-bar-svg-outer-circle"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "5s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: "none",
        stroke: "" + (innerCircleColor || color),
        strokeWidth: "1",
        strokeMiterlimit: "10",
        strokeDasharray: "10,10",
        cx: "50",
        cy: "50",
        r: "39",
        "data-testid": "circles-with-bar-svg-inner-circle"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "5s",
        from: "0 50 50",
        to: "-360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "" + (barColor || color),
        "data-testid": "circles-with-bar-svg-bar"
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "30",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.1"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "40",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.2"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "50",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.3"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "60",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.4"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "70",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.5"
      })))));
    };

    var FallingLines = function FallingLines(_a) {
      var _b = _a.color,
          color = _b === void 0 ? 'grey' : _b,
          _c = _a.width,
          width = _c === void 0 ? '100' : _c,
          _d = _a.visible,
          visible = _d === void 0 ? true : _d;
      return visible ? /*#__PURE__*/React__default['default'].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: width,
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        y: "25",
        width: "10",
        height: "50",
        rx: "4",
        ry: "4",
        fill: color
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "x",
        values: "10;100",
        dur: "1.2s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 10 70",
        to: "-60 100 70",
        dur: "1.2s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "opacity",
        values: "0;1;0",
        dur: "1.2s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        y: "25",
        width: "10",
        height: "50",
        rx: "4",
        ry: "4",
        fill: color
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "x",
        values: "10;100",
        dur: "1.2s",
        begin: "0.4s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 10 70",
        to: "-60 100 70",
        dur: "1.2s",
        begin: "0.4s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "opacity",
        values: "0;1;0",
        dur: "1.2s",
        begin: "0.4s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        y: "25",
        width: "10",
        height: "50",
        rx: "4",
        ry: "4",
        fill: color
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "x",
        values: "10;100",
        dur: "1.2s",
        begin: "0.8s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 10 70",
        to: "-60 100 70",
        dur: "1.2s",
        begin: "0.8s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "opacity",
        values: "0;1;0",
        dur: "1.2s",
        begin: "0.8s",
        repeatCount: "indefinite"
      }))) : null;
    };

    var getDefaultStyle$e = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Grid = function Grid(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 12.5 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'grid-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$e(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "grid-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 105 105",
        fill: color,
        "aria-label": ariaLabel,
        "data-testid": "grid-svg"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "12.5",
        cy: "12.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "12.5",
        cy: "52.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "100ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "52.5",
        cy: "12.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "300ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "52.5",
        cy: "52.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "600ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "92.5",
        cy: "12.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "800ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "92.5",
        cy: "52.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "400ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "12.5",
        cy: "92.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "700ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "52.5",
        cy: "92.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "500ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "92.5",
        cy: "92.5",
        r: "" + radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "200ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$d = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Hearts = function Hearts(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.color,
          color = _d === void 0 ? 'green' : _d,
          _e = _a.ariaLabel,
          ariaLabel = _e === void 0 ? 'hearts-loading' : _e,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _f = _a.visible,
          visible = _f === void 0 ? true : _f;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$d(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "hearts-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: color,
        "aria-label": ariaLabel,
        "data-testid": "hearts-svg"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
        attributeName: "fill-opacity",
        from: "0",
        to: ".5"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
        attributeName: "fill-opacity",
        from: "0",
        to: ".5"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        begin: "0.7s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
      })));
    };

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    /** @license React v17.0.2
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    if("function"===typeof Symbol&&Symbol.for){var x$1=Symbol.for;x$1("react.element");x$1("react.portal");x$1("react.fragment");x$1("react.strict_mode");x$1("react.profiler");x$1("react.provider");x$1("react.context");x$1("react.forward_ref");x$1("react.suspense");x$1("react.suspense_list");x$1("react.memo");x$1("react.lazy");x$1("react.block");x$1("react.server.block");x$1("react.fundamental");x$1("react.debug_trace_mode");x$1("react.legacy_hidden");}

    var reactIs_development$1 = createCommonjsModule(function (module, exports) {

    {
      (function() {

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      symbolFor('react.scope');
      symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    }
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }

      return false;
    }
    function isConcurrentMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }

      return false;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    });
    reactIs_development$1.ContextConsumer;
    reactIs_development$1.ContextProvider;
    reactIs_development$1.Element;
    reactIs_development$1.ForwardRef;
    reactIs_development$1.Fragment;
    reactIs_development$1.Lazy;
    reactIs_development$1.Memo;
    reactIs_development$1.Portal;
    reactIs_development$1.Profiler;
    reactIs_development$1.StrictMode;
    reactIs_development$1.Suspense;
    reactIs_development$1.isAsyncMode;
    reactIs_development$1.isConcurrentMode;
    reactIs_development$1.isContextConsumer;
    reactIs_development$1.isContextProvider;
    reactIs_development$1.isElement;
    reactIs_development$1.isForwardRef;
    reactIs_development$1.isFragment;
    reactIs_development$1.isLazy;
    reactIs_development$1.isMemo;
    reactIs_development$1.isPortal;
    reactIs_development$1.isProfiler;
    reactIs_development$1.isStrictMode;
    reactIs_development$1.isSuspense;
    reactIs_development$1.isValidElementType;
    reactIs_development$1.typeOf;

    var reactIs$1 = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development$1;
    }
    });
    reactIs$1.ContextConsumer;
    reactIs$1.ContextProvider;
    reactIs$1.Element;
    reactIs$1.ForwardRef;
    reactIs$1.Fragment;
    reactIs$1.Lazy;
    reactIs$1.Memo;
    reactIs$1.Portal;
    reactIs$1.Profiler;
    reactIs$1.StrictMode;
    reactIs$1.Suspense;
    reactIs$1.isAsyncMode;
    reactIs$1.isConcurrentMode;
    reactIs$1.isContextConsumer;
    reactIs$1.isContextProvider;
    var reactIs_16 = reactIs$1.isElement;
    reactIs$1.isForwardRef;
    reactIs$1.isFragment;
    reactIs$1.isLazy;
    reactIs$1.isMemo;
    reactIs$1.isPortal;
    reactIs$1.isProfiler;
    reactIs$1.isStrictMode;
    reactIs$1.isSuspense;
    var reactIs_25 = reactIs$1.isValidElementType;
    var reactIs_26 = reactIs$1.typeOf;

    function stylis_min (W) {
      function M(d, c, e, h, a) {
        for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
          g = e.charCodeAt(l);
          l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

          if (0 === b + n + v + m) {
            if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
              switch (g) {
                case 32:
                case 9:
                case 59:
                case 13:
                case 10:
                  break;

                default:
                  f += e.charAt(l);
              }

              g = 59;
            }

            switch (g) {
              case 123:
                f = f.trim();
                q = f.charCodeAt(0);
                k = 1;

                for (t = ++l; l < B;) {
                  switch (g = e.charCodeAt(l)) {
                    case 123:
                      k++;
                      break;

                    case 125:
                      k--;
                      break;

                    case 47:
                      switch (g = e.charCodeAt(l + 1)) {
                        case 42:
                        case 47:
                          a: {
                            for (u = l + 1; u < J; ++u) {
                              switch (e.charCodeAt(u)) {
                                case 47:
                                  if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                    l = u + 1;
                                    break a;
                                  }

                                  break;

                                case 10:
                                  if (47 === g) {
                                    l = u + 1;
                                    break a;
                                  }

                              }
                            }

                            l = u;
                          }

                      }

                      break;

                    case 91:
                      g++;

                    case 40:
                      g++;

                    case 34:
                    case 39:
                      for (; l++ < J && e.charCodeAt(l) !== g;) {
                      }

                  }

                  if (0 === k) break;
                  l++;
                }

                k = e.substring(t, l);
                0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

                switch (q) {
                  case 64:
                    0 < r && (f = f.replace(N, ''));
                    g = f.charCodeAt(1);

                    switch (g) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        r = c;
                        break;

                      default:
                        r = O;
                    }

                    k = M(c, r, k, g, a + 1);
                    t = k.length;
                    0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                    if (0 < t) switch (g) {
                      case 115:
                        f = f.replace(da, ea);

                      case 100:
                      case 109:
                      case 45:
                        k = f + '{' + k + '}';
                        break;

                      case 107:
                        f = f.replace(fa, '$1 $2');
                        k = f + '{' + k + '}';
                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                        break;

                      default:
                        k = f + k, 112 === h && (k = (p += k, ''));
                    } else k = '';
                    break;

                  default:
                    k = M(c, X(c, f, I), k, h, a + 1);
                }

                F += k;
                k = I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
                break;

              case 125:
              case 59:
                f = (0 < r ? f.replace(N, '') : f).trim();
                if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                  case 0:
                    break;

                  case 64:
                    if (105 === g || 99 === g) {
                      G += f + e.charAt(l);
                      break;
                    }

                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
                I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
            }
          }

          switch (g) {
            case 13:
            case 10:
              47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
              0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
              z = 1;
              D++;
              break;

            case 59:
            case 125:
              if (0 === b + n + v + m) {
                z++;
                break;
              }

            default:
              z++;
              y = e.charAt(l);

              switch (g) {
                case 9:
                case 32:
                  if (0 === n + m + b) switch (x) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = '';
                      break;

                    default:
                      32 !== g && (y = ' ');
                  }
                  break;

                case 0:
                  y = '\\0';
                  break;

                case 12:
                  y = '\\f';
                  break;

                case 11:
                  y = '\\v';
                  break;

                case 38:
                  0 === n + b + m && (r = I = 1, y = '\f' + y);
                  break;

                case 108:
                  if (0 === n + b + m + E && 0 < u) switch (l - u) {
                    case 2:
                      112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                    case 8:
                      111 === K && (E = K);
                  }
                  break;

                case 58:
                  0 === n + b + m && (u = l);
                  break;

                case 44:
                  0 === b + v + n + m && (r = 1, y += '\r');
                  break;

                case 34:
                case 39:
                  0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                  break;

                case 91:
                  0 === n + b + v && m++;
                  break;

                case 93:
                  0 === n + b + v && m--;
                  break;

                case 41:
                  0 === n + b + m && v--;
                  break;

                case 40:
                  if (0 === n + b + m) {
                    if (0 === q) switch (2 * x + 3 * K) {
                      case 533:
                        break;

                      default:
                        q = 1;
                    }
                    v++;
                  }

                  break;

                case 64:
                  0 === b + v + n + m + u + k && (k = 1);
                  break;

                case 42:
                case 47:
                  if (!(0 < n + m + v)) switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;

                        case 220:
                          t = l, b = 42;
                      }

                      break;

                    case 42:
                      47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                  }
              }

              0 === b && (f += y);
          }

          K = x;
          x = g;
          l++;
        }

        t = p.length;

        if (0 < t) {
          r = c;
          if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
          p = r.join(',') + '{' + p + '}';

          if (0 !== w * E) {
            2 !== w || L(p, 2) || (E = 0);

            switch (E) {
              case 111:
                p = p.replace(ha, ':-moz-$1') + p;
                break;

              case 112:
                p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
            }

            E = 0;
          }
        }

        return G + p + F;
      }

      function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length,
            m = d.length;

        switch (m) {
          case 0:
          case 1:
            var b = 0;

            for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
              c[b] = Z(d, c[b], e).trim();
            }

            break;

          default:
            var v = b = 0;

            for (c = []; b < a; ++b) {
              for (var n = 0; n < m; ++n) {
                c[v++] = Z(d[n] + ' ', h[b], e).trim();
              }
            }

        }

        return c;
      }

      function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));

        switch (h) {
          case 38:
            return c.replace(F, '$1' + d.trim());

          case 58:
            return d.trim() + c.replace(F, '$1' + d.trim());

          default:
            if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }

        return d + c;
      }

      function P(d, c, e, h) {
        var a = d + ';',
            m = 2 * c + 3 * e + 4 * h;

        if (944 === m) {
          d = a.indexOf(':', 9) + 1;
          var b = a.substring(d, a.length - 1).trim();
          b = a.substring(0, d).trim() + b + ';';
          return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
        }

        if (0 === w || 2 === w && !L(a, 1)) return a;

        switch (m) {
          case 1015:
            return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

          case 951:
            return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

          case 963:
            return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

          case 1009:
            if (100 !== a.charCodeAt(4)) break;

          case 969:
          case 942:
            return '-webkit-' + a + a;

          case 978:
            return '-webkit-' + a + '-moz-' + a + a;

          case 1019:
          case 983:
            return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

          case 883:
            if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
            if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
            break;

          case 932:
            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
              case 103:
                return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

              case 115:
                return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

              case 98:
                return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
            }
            return '-webkit-' + a + '-ms-' + a + a;

          case 964:
            return '-webkit-' + a + '-ms-flex-' + a + a;

          case 1023:
            if (99 !== a.charCodeAt(8)) break;
            b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

          case 1005:
            return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

          case 1e3:
            b = a.substring(13).trim();
            c = b.indexOf('-') + 1;

            switch (b.charCodeAt(0) + b.charCodeAt(c)) {
              case 226:
                b = a.replace(G, 'tb');
                break;

              case 232:
                b = a.replace(G, 'tb-rl');
                break;

              case 220:
                b = a.replace(G, 'lr');
                break;

              default:
                return a;
            }

            return '-webkit-' + a + '-ms-' + b + a;

          case 1017:
            if (-1 === a.indexOf('sticky', 9)) break;

          case 975:
            c = (a = d).length - 10;
            b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

            switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
              case 203:
                if (111 > b.charCodeAt(8)) break;

              case 115:
                a = a.replace(b, '-webkit-' + b) + ';' + a;
                break;

              case 207:
              case 102:
                a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
            }

            return a + ';';

          case 938:
            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

              default:
                return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
            }
            break;

          case 973:
          case 989:
            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

          case 931:
          case 953:
            if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
            break;

          case 962:
            if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }

        return a;
      }

      function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'),
            h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
      }

      function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
      }

      function H(d, c, e, h, a, m, b, v, n, q) {
        for (var g = 0, x = c, w; g < A; ++g) {
          switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;

            default:
              x = w;
          }
        }

        if (x !== c) return x;
      }

      function T(d) {
        switch (d) {
          case void 0:
          case null:
            A = S.length = 0;
            break;

          default:
            if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            } else Y = !!d | 0;
        }

        return T;
      }

      function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
      }

      function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [V];

        if (0 < A) {
          var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
          void 0 !== h && 'string' === typeof h && (c = h);
        }

        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
      }

      var ca = /^\0+/g,
          N = /[\0\r\f]/g,
          aa = /: */g,
          ka = /zoo|gra/,
          ma = /([,: ])(transform)/g,
          ia = /,\r+?/g,
          F = /([\t\r\n ])*\f?&/g,
          fa = /@(k\w+)\s*(\S*)\s*/,
          Q = /::(place)/g,
          ha = /:(read-only)/g,
          G = /[svh]\w+-[tblr]{2}/,
          da = /\(\s*(.*)\s*\)/g,
          oa = /([\s\S]*?);/g,
          ba = /-self|flex-/g,
          na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          la = /stretch|:\s*\w+\-(?:conte|avail)/,
          ja = /([^-])(image-set\()/,
          z = 1,
          D = 1,
          E = 0,
          w = 1,
          O = [],
          S = [],
          A = 0,
          R = null,
          Y = 0,
          V = '';
      B.use = T;
      B.set = U;
      void 0 !== W && U(W);
      return B;
    }

    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

    var index = memoize(function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
      /* o */
      && prop.charCodeAt(1) === 110
      /* n */
      && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
    );

    var reactIs_development = createCommonjsModule(function (module, exports) {



    {
      (function() {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    });
    reactIs_development.AsyncMode;
    reactIs_development.ConcurrentMode;
    reactIs_development.ContextConsumer;
    reactIs_development.ContextProvider;
    reactIs_development.Element;
    reactIs_development.ForwardRef;
    reactIs_development.Fragment;
    reactIs_development.Lazy;
    reactIs_development.Memo;
    reactIs_development.Portal;
    reactIs_development.Profiler;
    reactIs_development.StrictMode;
    reactIs_development.Suspense;
    reactIs_development.isAsyncMode;
    reactIs_development.isConcurrentMode;
    reactIs_development.isContextConsumer;
    reactIs_development.isContextProvider;
    reactIs_development.isElement;
    reactIs_development.isForwardRef;
    reactIs_development.isFragment;
    reactIs_development.isLazy;
    reactIs_development.isMemo;
    reactIs_development.isPortal;
    reactIs_development.isProfiler;
    reactIs_development.isStrictMode;
    reactIs_development.isSuspense;
    reactIs_development.isValidElementType;
    reactIs_development.typeOf;

    var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
    });

    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

    function getStatics(component) {
      // React v16.11 and below
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      } // React v16.12 and above


      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);

          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];

          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

            try {
              // Avoid failures from read-only properties
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }

      return targetComponent;
    }

    var hoistNonReactStatics_cjs = hoistNonReactStatics;

    function y(){return (y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs_26(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return ((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e);},M="style["+N+'][data-styled-version="5.3.3"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},Y=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.3");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};var re=te("5.3.3"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"==="development",this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default['default'].createContext();ce.Consumer;var le=React__default['default'].createContext(),de=(le.Consumer,new X),he=ae();function pe(){return React.useContext(ce)||de}function fe(){return React.useContext(le)||he}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return "";if(_(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return reactIs_16(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){{var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},React.useRef(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}finally{console.error=r;}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return "string"==typeof e&&(e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t;}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&ze(e,i[a],a);}return e}var Me=React__default['default'].createContext();Me.Consumer;var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.3"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,v=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;React.useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Oe(t,React.useContext(Me),a)||w,t,o),v=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return React.useDebugValue(i),!t&&r&&r(i),i}(i,r,v,e.warnTooManyClasses),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?y({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,index,_):!N||index(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=y({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,React.createElement(_,C)}(C,e,t,P)};return O.displayName=v,(C=React__default['default'].forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=v,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:N,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t;}}),(Pe(v,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(v,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIs_25(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));function We(e){"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);

    var len = 242.776657104492;
    var time = 1.6;
    var anim = We(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), len * 0.14, len, len * 0.11, len * 0.35, len, len * 0.35, len * 0.01, len, len * 0.99);
    var Path$1 = qe.path(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), len * 0.01, len, anim, time);

    var InfinitySpin = function InfinitySpin(_a) {
      var _b = _a.color,
          color = _b === void 0 ? '#f28f3b' : _b,
          _c = _a.width,
          width = _c === void 0 ? '200' : _c;
      return /*#__PURE__*/React__default['default'].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "" + width,
        height: "" + Number(width) * 0.5,
        viewBox: "0 0 " + width + " " + Number(200 * 0.5)
      }, /*#__PURE__*/React__default['default'].createElement(Path$1, {
        stroke: color,
        fill: "none",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
      }), /*#__PURE__*/React__default['default'].createElement("path", {
        opacity: "0.07",
        fill: "none",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
      }));
    };
    var templateObject_1$3, templateObject_2$3;

    var getDefaultStyle$c = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var LineWave = function LineWave(_a) {
      var _b = _a.wrapperStyle,
          wrapperStyle = _b === void 0 ? {} : _b,
          _c = _a.visible,
          visible = _c === void 0 ? true : _c,
          _d = _a.wrapperClass,
          wrapperClass = _d === void 0 ? '' : _d,
          _e = _a.height,
          height = _e === void 0 ? 100 : _e,
          _f = _a.width,
          width = _f === void 0 ? 100 : _f,
          _g = _a.color,
          color = _g === void 0 ? 'red' : _g,
          _h = _a.ariaLabel,
          ariaLabel = _h === void 0 ? 'line-wave' : _h,
          firstLineColor = _a.firstLineColor,
          middleLineColor = _a.middleLineColor,
          lastLineColor = _a.lastLineColor;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$c(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "line-wave-wrapper"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        version: "1.1",
        height: "" + height,
        width: "" + width,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 0 0",
        xmlSpace: "preserve",
        "aria-label": ariaLabel,
        "data-testid": "line-wave-svg"
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "20",
        y: "50",
        width: "4",
        height: "10",
        fill: firstLineColor || color,
        "data-testid": "line-wave-svg-first-line"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "30",
        y: "50",
        width: "4",
        height: "10",
        fill: middleLineColor || color,
        "data-testid": "line-wave-svg-middle-line"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.2s",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "40",
        y: "50",
        width: "4",
        height: "10",
        fill: lastLineColor || color,
        "data-testid": "line-wave-svg-last-line"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.4s",
        dur: "0.6s",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$b = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var MutatingDots = function MutatingDots(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 90 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 12.5 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.secondaryColor,
          secondaryColor = _f === void 0 ? 'blue' : _f,
          _g = _a.ariaLabel,
          ariaLabel = _g === void 0 ? 'mutating-dots-loading' : _g,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _h = _a.visible,
          visible = _h === void 0 ? true : _h;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$b(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "mutating-dots-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        id: "goo-loader",
        width: width,
        height: height,
        "aria-label": ariaLabel,
        "data-testid": "mutating-dots-svg"
      }, /*#__PURE__*/React__default['default'].createElement("filter", {
        id: "fancy-goo"
      }, /*#__PURE__*/React__default['default'].createElement("feGaussianBlur", {
        "in": "SourceGraphic",
        stdDeviation: "6",
        result: "blur"
      }), /*#__PURE__*/React__default['default'].createElement("feColorMatrix", {
        "in": "blur",
        mode: "matrix",
        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
        result: "goo"
      }), /*#__PURE__*/React__default['default'].createElement("feComposite", {
        "in": "SourceGraphic",
        in2: "goo",
        operator: "atop"
      })), /*#__PURE__*/React__default['default'].createElement("g", {
        filter: "url(#fancy-goo)"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        id: "mainAnim",
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: "0 50 50",
        to: "359 50 50",
        dur: "1.2s",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "50%",
        cy: "40",
        r: radius,
        fill: color
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        id: "cAnim1",
        attributeType: "XML",
        attributeName: "cy",
        dur: "0.6s",
        begin: "0;cAnim1.end+0.2s",
        calcMode: "spline",
        values: "40;20;40",
        keyTimes: "0;0.3;1",
        keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "50%",
        cy: "60",
        r: radius,
        fill: secondaryColor
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        id: "cAnim2",
        attributeType: "XML",
        attributeName: "cy",
        dur: "0.6s",
        begin: "0.4s;cAnim2.end+0.2s",
        calcMode: "spline",
        values: "60;80;60",
        keyTimes: "0;0.3;1",
        keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
      })))));
    };

    var getDefaultStyle$a = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var RADIUS = 20;

    var getPath = function getPath(radius) {
      return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-');
    };

    var getViewBoxSize = function getViewBoxSize(strokeWidth, secondaryStrokeWidth, radius) {
      var maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
      var startingPoint = -radius - maxStrokeWidth / 2 + 1;
      var endpoint = radius * 2 + maxStrokeWidth;
      return [startingPoint, startingPoint, endpoint, endpoint].join(' ');
    };

    var Oval = function Oval(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.color,
          color = _d === void 0 ? 'green' : _d,
          _e = _a.secondaryColor,
          secondaryColor = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'oval-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g,
          _h = _a.strokeWidth,
          strokeWidth = _h === void 0 ? 2 : _h,
          strokeWidthSecondary = _a.strokeWidthSecondary;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign(__assign({}, getDefaultStyle$a(visible)), wrapperStyle), {
          padding: 3
        }),
        className: wrapperClass,
        "data-testid": "oval-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: getViewBoxSize(Number(strokeWidth), Number(strokeWidthSecondary || strokeWidth), RADIUS),
        xmlns: "http://www.w3.org/2000/svg",
        stroke: color,
        "data-testid": "oval-svg",
        "aria-label": ariaLabel
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        transform: "translate(1 1)",
        strokeWidth: Number(strokeWidthSecondary || strokeWidth)
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        strokeOpacity: ".5",
        cx: "0",
        cy: "0",
        r: RADIUS,
        stroke: secondaryColor,
        strokeWidth: strokeWidth
      }), /*#__PURE__*/React__default['default'].createElement("path", {
        d: getPath(RADIUS)
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 0 0",
        to: "360 0 0",
        dur: "1s",
        repeatCount: "indefinite"
      }))))));
    };

    var loaderSpin = We(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
    var loaderPath = We(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"], ["\n  0% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n  50% {\n    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;\n  }\n  100% {\n    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;\n  }\n"])));
    var SVG$1 = qe.svg(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ", ";\n  -webkit-animation: 1.4s linear infinite ", ";\n"], ["\n  width: 230px;\n  height: 230px;\n  transform-origin: 115px 115px;\n  animation: 1.4s linear infinite ", ";\n  -webkit-animation: 1.4s linear infinite ", ";\n"])), loaderSpin, loaderSpin);
    var Path = qe.path(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  animation: 1.4s ease-in-out infinite ", ";\n  -webkit-animation: 1.4s ease-in-out infinite ", ";\n"], ["\n  animation: 1.4s ease-in-out infinite ", ";\n  -webkit-animation: 1.4s ease-in-out infinite ", ";\n"])), loaderPath, loaderPath);

    var getDefaultStyle$9 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Plane = function Plane(_a) {
      var _b = _a.color,
          color = _b === void 0 ? 'green' : _b,
          _c = _a.secondaryColor,
          secondaryColor = _c === void 0 ? 'blue' : _c,
          _d = _a.ariaLabel,
          ariaLabel = _d === void 0 ? 'plane-loading' : _d,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _e = _a.visible,
          visible = _e === void 0 ? true : _e;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$9(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "plane-loading"
      }, /*#__PURE__*/React__default['default'].createElement(SVG$1, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "230",
        height: "230",
        "aria-label": ariaLabel,
        "data-testid": "plane-svg"
      }, /*#__PURE__*/React__default['default'].createElement("desc", null, "Plane animation. Loading "), /*#__PURE__*/React__default['default'].createElement(Path, {
        style: {
          stroke: secondaryColor
        },
        d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
        fill: "none",
        stroke: "#0099cc",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "10 10 10 10 10 10 10 432",
        strokeDashoffset: "77"
      }), /*#__PURE__*/React__default['default'].createElement("path", {
        style: {
          fill: color
        },
        d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
        fill: "#000033"
      })));
    };
    var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4;

    var getDefaultStyle$8 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Puff = function Puff(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 1 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'puff-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$8(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "puff-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: color,
        "aria-label": ariaLabel,
        "data-testid": "puff-svg"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        strokeWidth: "2"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "22",
        cy: "22",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "0s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "22",
        cy: "22",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      })))));
    };

    var getDefaultStyle$7 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var RevolvingDot = function RevolvingDot(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 6 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'revolving-dot-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$7(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "revolving-dot-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        version: "1.1",
        width: width,
        height: height,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "aria-label": ariaLabel,
        "data-testid": "revolving-dot-svg"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: "none",
        stroke: color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: Number("" + radius) + 38,
        style: {
          opacity: 0.5
        }
      }), /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: color,
        stroke: color,
        strokeWidth: "3",
        cx: "8",
        cy: "54",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 48",
        to: "360 50 52",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$6 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Rings = function Rings(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 6 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'rings-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$6(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "rings-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: color,
        "aria-label": ariaLabel,
        "data-testid": "rings-svg"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1)",
        strokeWidth: "2"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "22",
        cy: "22",
        r: radius,
        strokeOpacity: "0"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        begin: "1.5s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "stroke-opacity",
        begin: "1.5s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "stroke-width",
        begin: "1.5s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "22",
        cy: "22",
        r: radius,
        strokeOpacity: "0"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        begin: "3s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "strokeOpacity",
        begin: "3s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "strokeWidth",
        begin: "3s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "22",
        cy: "22",
        r: Number(radius) + 2
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.5s",
        values: "6;1;2;3;4;5;6",
        calcMode: "linear",
        repeatCount: "indefinite"
      })))));
    };

    /**
     * Returns the value of `props[path]` or `defaultValue`
     * @example
     * import styled from "styled-components";
     * import { prop } from "styled-tools";
     *
     * const Button = styled.button`
     *   color: ${prop("color", "red")};
     * `;
     */
    var prop = function prop(path, defaultValue) {
      return function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (typeof props[path] !== "undefined") {
          return props[path];
        }

        if (path && path.indexOf(".") > 0) {
          var paths = path.split(".");
          var length = paths.length;
          var object = props[paths[0]];
          var index = 1;

          while (object != null && index < length) {
            object = object[paths[index]];
            index += 1;
          }

          if (typeof object !== "undefined") {
            return object;
          }
        }

        return defaultValue;
      };
    };

    var spin = We(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
    var POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    var Svg = qe.svg(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), spin, prop('speed', '0.75'));
    var Polyline = qe.polyline(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), function (props) {
      return props.width;
    });
    function RotatingLines(_a) {
      var _b = _a.strokeColor,
          strokeColor = _b === void 0 ? 'grey' : _b,
          _c = _a.strokeWidth,
          strokeWidth = _c === void 0 ? '5' : _c,
          _d = _a.animationDuration,
          animationDuration = _d === void 0 ? '0.75' : _d,
          _e = _a.width,
          width = _e === void 0 ? '96' : _e,
          _f = _a.visible,
          visible = _f === void 0 ? true : _f;
      var lines = React.useCallback(function () {
        return POINTS.map(function (point) {
          return /*#__PURE__*/React__default['default'].createElement(Polyline, {
            key: point,
            points: "24,12 24,4",
            width: strokeWidth,
            transform: "rotate(" + point + ", 24, 24)"
          });
        });
      }, [strokeWidth]);
      return !visible ? null : /*#__PURE__*/React__default['default'].createElement(Svg, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: width,
        stroke: strokeColor,
        speed: animationDuration,
        role: "status",
        "data-testid": "rotating-lines-svg"
      }, lines());
    }
    var templateObject_1$1, templateObject_2$1, templateObject_3$1;

    var getDefaultStyle$5 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var RotatingSquare = function RotatingSquare(_a) {
      var _b = _a.wrapperClass,
          wrapperClass = _b === void 0 ? '' : _b,
          _c = _a.color,
          color = _c === void 0 ? 'red' : _c,
          _d = _a.height,
          height = _d === void 0 ? 100 : _d,
          _e = _a.width,
          width = _e === void 0 ? 100 : _e,
          _f = _a.strokeWidth,
          strokeWidth = _f === void 0 ? 4 : _f,
          _g = _a.ariaLabel,
          ariaLabel = _g === void 0 ? 'rotating-square-loading' : _g,
          _h = _a.wrapperStyle,
          wrapperStyle = _h === void 0 ? {} : _h,
          _j = _a.visible,
          visible = _j === void 0 ? true : _j;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$5(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "rotating-square-wrapper"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        height: "" + height,
        width: "" + width,
        "aria-label": ariaLabel,
        "data-testid": "rotating-square-svg",
        xmlSpace: "preserve"
      }, /*#__PURE__*/React__default['default'].createElement("rect", {
        fill: "none",
        stroke: color,
        strokeWidth: strokeWidth,
        x: "25",
        y: "25",
        width: "50",
        height: "50"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "0.5s",
        from: "0 50 50",
        to: "180 50 50",
        type: "rotate",
        id: "strokeBox",
        attributeType: "XML",
        begin: "rectBox.end"
      })), /*#__PURE__*/React__default['default'].createElement("rect", {
        x: "27",
        y: "27",
        fill: color,
        width: "46",
        height: "50"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "height",
        dur: "1.3s",
        attributeType: "XML",
        from: "50",
        to: "0",
        id: "rectBox",
        fill: "freeze",
        begin: "0s;strokeBox.end"
      }))));
    };

    var getDefaultStyle$4 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var TailSpin = function TailSpin(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 1 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'tail-spin-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$4(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "tail-spin-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": ariaLabel,
        "data-testid": "tail-spin-svg"
      }, /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("linearGradient", {
        x1: "8.042%",
        y1: "0%",
        x2: "65.682%",
        y2: "23.865%",
        id: "a"
      }, /*#__PURE__*/React__default['default'].createElement("stop", {
        stopColor: color,
        stopOpacity: "0",
        offset: "0%"
      }), /*#__PURE__*/React__default['default'].createElement("stop", {
        stopColor: color,
        stopOpacity: ".631",
        offset: "63.146%"
      }), /*#__PURE__*/React__default['default'].createElement("stop", {
        stopColor: color,
        offset: "100%"
      }))), /*#__PURE__*/React__default['default'].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__default['default'].createElement("g", {
        transform: "translate(1 1)"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18",
        id: "Oval-2",
        stroke: color,
        strokeWidth: "2"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: "#fff",
        cx: "36",
        cy: "18",
        r: radius
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      }))))));
    };

    var getDefaultStyle$3 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var ThreeCircles = function ThreeCircles(_a) {
      var _b = _a.wrapperStyle,
          wrapperStyle = _b === void 0 ? {} : _b,
          _c = _a.visible,
          visible = _c === void 0 ? true : _c,
          _d = _a.wrapperClass,
          wrapperClass = _d === void 0 ? '' : _d,
          _e = _a.height,
          height = _e === void 0 ? 100 : _e,
          _f = _a.width,
          width = _f === void 0 ? 100 : _f,
          _g = _a.color,
          color = _g === void 0 ? 'red' : _g,
          _h = _a.ariaLabel,
          ariaLabel = _h === void 0 ? 'rotating-three-circles' : _h,
          outerCircleColor = _a.outerCircleColor,
          innerCircleColor = _a.innerCircleColor,
          middleCircleColor = _a.middleCircleColor;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$3(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "three-circles-wrapper"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        version: "1.1",
        height: "" + height,
        width: "" + width,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "data-testid": "three-circles-svg",
        "aria-label": ariaLabel
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        fill: outerCircleColor || color,
        "data-testid": "three-circles-svg-outer-circle",
        d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "2s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("path", {
        fill: middleCircleColor || color,
        "data-testid": "three-circles-svg-middle-circle",
        d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "1s",
        from: "0 50 50",
        to: "-360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("path", {
        fill: innerCircleColor || color,
        "data-testid": "three-circles-svg-inner-circle",
        d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n  L82,35.7z"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "2s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      }))));
    };

    var getDefaultStyle$2 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var ThreeDots = function ThreeDots(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 9 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'three-dots-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle$2(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "three-dots-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: color,
        "aria-label": ariaLabel,
        "data-testid": "three-dots-svg"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "15",
        cy: "15",
        r: Number(radius) + 6
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "60",
        cy: "15",
        r: radius,
        attributeName: "fill-opacity",
        from: "1",
        to: "0.3"
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("circle", {
        cx: "105",
        cy: "15",
        r: Number(radius) + 6
      }, /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /*#__PURE__*/React__default['default'].createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      }))));
    };

    var dash = We(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
    var Polygon = qe.polygon(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), dash);
    var SVG = qe.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));

    var getDefaultStyle$1 = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Triangle = function Triangle(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.color,
          color = _d === void 0 ? 'green' : _d,
          _e = _a.ariaLabel,
          ariaLabel = _e === void 0 ? 'triangle-loading' : _e,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _f = _a.visible,
          visible = _f === void 0 ? true : _f;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        role: "presentation",
        style: __assign(__assign({}, getDefaultStyle$1(visible)), wrapperStyle),
        className: "" + wrapperClass,
        "data-testid": "triangle-loading"
      }, /*#__PURE__*/React__default['default'].createElement(SVG, {
        id: "triangle",
        width: width,
        height: height,
        viewBox: "-3 -4 39 39",
        "aria-label": ariaLabel,
        "data-testid": "triangle-svg"
      }, /*#__PURE__*/React__default['default'].createElement(Polygon, {
        fill: "transparent",
        stroke: color,
        strokeWidth: "1",
        points: "16,0 32,32 0,32"
      })));
    };
    var templateObject_1, templateObject_2, templateObject_3;

    var getDefaultStyle = function getDefaultStyle(visible) {
      return {
        display: visible ? 'flex' : 'none'
      };
    };

    var Watch = function Watch(_a) {
      var _b = _a.height,
          height = _b === void 0 ? 80 : _b,
          _c = _a.width,
          width = _c === void 0 ? 80 : _c,
          _d = _a.radius,
          radius = _d === void 0 ? 48 : _d,
          _e = _a.color,
          color = _e === void 0 ? 'green' : _e,
          _f = _a.ariaLabel,
          ariaLabel = _f === void 0 ? 'watch-loading' : _f,
          wrapperStyle = _a.wrapperStyle,
          wrapperClass = _a.wrapperClass,
          _g = _a.visible,
          visible = _g === void 0 ? true : _g;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle),
        className: wrapperClass,
        "data-testid": "watch-loading"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        version: "1.1",
        id: "L2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "aria-label": ariaLabel,
        "data-testid": "watch-svg"
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        fill: "none",
        stroke: color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: radius
      }), /*#__PURE__*/React__default['default'].createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "85",
        y2: "50.5"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/React__default['default'].createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "49.5",
        y2: "74"
      }, /*#__PURE__*/React__default['default'].createElement("animateTransform", {
        attributeName: "transform",
        dur: "15s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      }))));
    };

    exports.Audio = Audio;
    exports.BallTriangle = BallTriangle;
    exports.Bars = Bars;
    exports.Circles = Circles;
    exports.CirclesWithBar = CirclesWithBar;
    exports.FallingLines = FallingLines;
    exports.Grid = Grid;
    exports.Hearts = Hearts;
    exports.InfinitySpin = InfinitySpin;
    exports.LineWave = LineWave;
    exports.MutatingDots = MutatingDots;
    exports.Oval = Oval;
    exports.Plane = Plane;
    exports.Puff = Puff;
    exports.RevolvingDot = RevolvingDot;
    exports.Rings = Rings;
    exports.RotatingLines = RotatingLines;
    exports.RotatingSquare = RotatingSquare;
    exports.TailSpin = TailSpin;
    exports.ThreeCircles = ThreeCircles;
    exports.ThreeDots = ThreeDots;
    exports.Triangle = Triangle;
    exports.Watch = Watch;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-loader-spinner.umd.development.js.map
