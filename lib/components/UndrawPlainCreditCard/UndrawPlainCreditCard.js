"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndrawPlainCreditCard = function UndrawPlainCreditCard(props) {
  return _react2.default.createElement(
    "svg",
    {
      style: { height: props.height, width: '100%' },
      className: props.class,
      id: "8bff179c-1faf-47a9-9e8a-5b508d385747",
      "data-name": "Layer 1",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 910 574.86"
    },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "linearGradient",
        {
          id: "94384564-366c-4d85-8a1d-9e0c25ad5384",
          x1: 455,
          y1: 574.86,
          x2: 455,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", { offset: 0.01, stopColor: "gray", stopOpacity: 0.25 }),
        _react2.default.createElement("stop", { offset: 0.54, stopColor: "gray", stopOpacity: 0.12 }),
        _react2.default.createElement("stop", { offset: 1, stopColor: "gray", stopOpacity: 0.1 })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "55ddaad6-e9a0-468f-b733-86575c08a5df",
          x1: 187,
          y1: 491.9,
          x2: 187,
          y2: 398,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", { offset: 0, stopColor: "#b3b3b3", stopOpacity: 0.25 }),
        _react2.default.createElement("stop", { offset: 0.54, stopColor: "#b3b3b3", stopOpacity: 0.1 }),
        _react2.default.createElement("stop", { offset: 1, stopColor: "#b3b3b3", stopOpacity: 0.05 })
      )
    ),
    _react2.default.createElement(
      "title",
      null,
      "plain credit card"
    ),
    _react2.default.createElement("rect", {
      width: 910,
      height: 574.86,
      rx: 16.5,
      ry: 16.5,
      fill: "url(#94384564-366c-4d85-8a1d-9e0c25ad5384)"
    }),
    _react2.default.createElement("rect", {
      x: 12.41,
      y: 8.56,
      width: 877.18,
      height: 543.02,
      rx: 16.5,
      ry: 16.5,
      fill: "#fff"
    }),
    _react2.default.createElement("rect", { x: 12.41, y: 121.93, width: 877.18, height: 119.34, fill: props.primaryColor }),
    _react2.default.createElement("rect", { x: 134.74, y: 293.49, width: 641.48, height: 53.7, fill: "#e0e0e0" }),
    _react2.default.createElement("rect", { x: 315.25, y: 403.89, width: 356.54, height: 26.85, fill: props.primaryColor }),
    _react2.default.createElement("rect", { x: 315.25, y: 445.66, width: 140.23, height: 26.85, fill: props.primaryColor }),
    _react2.default.createElement("rect", { x: 531.56, y: 445.66, width: 140.23, height: 26.85, fill: props.primaryColor }),
    _react2.default.createElement("rect", {
      x: 127,
      y: 398,
      width: 120,
      height: 93.9,
      rx: 18.5,
      ry: 18.5,
      fill: "url(#55ddaad6-e9a0-468f-b733-86575c08a5df)"
    }),
    _react2.default.createElement("rect", {
      x: 134.74,
      y: 403.89,
      width: 104.43,
      height: 82.05,
      rx: 18.5,
      ry: 18.5,
      fill: "#64ffda"
    })
  );
};

UndrawPlainCreditCard.propTypes = {
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

UndrawPlainCreditCard.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

exports.default = UndrawPlainCreditCard;