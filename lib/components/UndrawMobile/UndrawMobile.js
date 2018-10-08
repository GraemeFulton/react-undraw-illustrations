"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndrawMobile = function UndrawMobile(props) {
  return _react2.default.createElement(
    "svg",
    {
      style: { height: props.height, width: '100%' },
      className: props.class,
      id: "e040bbb4-af39-4832-90eb-f6c83b79a36e",
      "data-name": "Layer 1",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 392.94 715"
    },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "linearGradient",
        {
          id: "014c1da1-8fbc-4b78-b7b6-4af1b8694bf8",
          x1: 196.47,
          y1: 715,
          x2: 196.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", { offset: 0.01, stopColor: "gray", stopOpacity: 0.25 }),
        _react2.default.createElement("stop", { offset: 0.54, stopColor: "gray", stopOpacity: 0.12 }),
        _react2.default.createElement("stop", { offset: 1, stopColor: "gray", stopOpacity: 0.1 })
      )
    ),
    _react2.default.createElement(
      "title",
      null,
      "mobile"
    ),
    _react2.default.createElement("rect", {
      width: 392.94,
      height: 715,
      rx: 24.73,
      ry: 24.73,
      fill: "url(#014c1da1-8fbc-4b78-b7b6-4af1b8694bf8)"
    }),
    _react2.default.createElement("rect", {
      x: 9.05,
      y: 9.95,
      width: 374.84,
      height: 688.43,
      rx: 24.73,
      ry: 24.73,
      fill: "#fff"
    }),
    _react2.default.createElement("rect", { x: 51.37, y: 58.61, width: 290.2, height: 560.24, fill: props.primaryColor }),
    _react2.default.createElement("ellipse", { cx: 196.47, cy: 659.21, rx: 23.14, ry: 23.74, fill: "#dbdbdb" }),
    _react2.default.createElement("ellipse", { cx: 152.51, cy: 32.5, rx: 4.63, ry: 4.75, fill: "#dbdbdb" }),
    _react2.default.createElement("rect", {
      x: 173.33,
      y: 28.94,
      width: 71.73,
      height: 7.12,
      rx: 1.5,
      ry: 1.5,
      fill: "#dbdbdb"
    })
  );
};

UndrawMobile.propTypes = {
  /**
   * Hex color
   */
  primaryColor: _propTypes2.default.string,
  /**
   * percentage
   */
  height: _propTypes2.default.string,
  /**
   * custom class for svg
   */
  class: _propTypes2.default.string
};

UndrawMobile.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

exports.default = UndrawMobile;