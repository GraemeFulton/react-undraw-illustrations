"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndrawPhoto = function UndrawPhoto(props) {
  return _react2.default.createElement(
    "svg",
    {
      style: { height: props.height, width: '100%' },
      className: props.class,
      id: "e939d086-638f-4996-87fc-c8f8e2e76ed8",
      "data-name": "Layer 1",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 887.82 625.36"
    },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "linearGradient",
        {
          id: "54559514-f8bf-4b72-8b13-4037efd0578e",
          x1: 600,
          y1: 754.02,
          x2: 600,
          y2: 145.98,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", { offset: 0, stopColor: "gray", stopOpacity: 0.25 }),
        _react2.default.createElement("stop", { offset: 0.54, stopColor: "gray", stopOpacity: 0.12 }),
        _react2.default.createElement("stop", { offset: 1, stopColor: "gray", stopOpacity: 0.1 })
      ),
      _react2.default.createElement("linearGradient", {
        id: "e6455490-a92e-4492-9f58-af2cf304751a",
        x1: 437.25,
        y1: 574.51,
        x2: 437.25,
        y2: 36.62,
        xlinkHref: "#54559514-f8bf-4b72-8b13-4037efd0578e"
      }),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b627ac0e-a25e-4e67-ba10-e4156399602a",
          transform: "translate(-163.46 -145.98)"
        },
        _react2.default.createElement("rect", {
          x: 216.65,
          y: 194.98,
          width: 767.31,
          height: 510.36,
          rx: 8.85,
          ry: 8.85,
          fill: "#fff"
        })
      )
    ),
    _react2.default.createElement(
      "title",
      null,
      "photo"
    ),
    _react2.default.createElement("path", {
      d: "M1036,734.86A19.06,19.06,0,0,1,1017,754H183a19.06,19.06,0,0,1-19-19.16V165.14A19.06,19.06,0,0,1,183,146H1017a19.06,19.06,0,0,1,19,19.16",
      transform: "translate(-163.46 -145.98)",
      fill: "url(#54559514-f8bf-4b72-8b13-4037efd0578e)"
    }),
    _react2.default.createElement("path", {
      d: "M1026.19,725.54a18.52,18.52,0,0,1-18.52,18.52H192.93a18.52,18.52,0,0,1-18.52-18.52V174.78a18.52,18.52,0,0,1,18.52-18.52h814.74a18.52,18.52,0,0,1,18.52,18.52",
      transform: "translate(-163.46 -145.98)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      { id: "5f7f4fba-1df4-4c9b-ab6f-3f66810cb66e", "data-name": "<Rectangle>" },
      _react2.default.createElement("rect", {
        x: 43.49,
        y: 36.62,
        width: 787.52,
        height: 537.89,
        rx: 8.85,
        ry: 8.85,
        fill: "url(#e6455490-a92e-4492-9f58-af2cf304751a)"
      })
    ),
    _react2.default.createElement("rect", {
      x: 53.19,
      y: 49,
      width: 767.31,
      height: 510.36,
      rx: 8.85,
      ry: 8.85,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      { clipPath: "url(#b627ac0e-a25e-4e67-ba10-e4156399602a)" },
      _react2.default.createElement("path", {
        d: "M174,700.66,388.21,455.19a42.64,42.64,0,0,1,60.34-3.94l60,52.93a42.64,42.64,0,0,0,55.65.67L747.52,350.73a42.64,42.64,0,0,1,59,4l225,247.64a42.64,42.64,0,0,1,10.91,24.9l8.68,97.69a42.64,42.64,0,0,1-42.48,46.42H206.11A42.64,42.64,0,0,1,163.48,730h0A42.64,42.64,0,0,1,174,700.66Z",
        transform: "translate(-163.46 -145.98)",
        fill: props.primaryColor
      })
    ),
    _react2.default.createElement("circle", { cx: 145.58, cy: 130.83, r: 47.52, fill: "#ff5252" })
  );
};

UndrawPhoto.propTypes = {
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

UndrawPhoto.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};

exports.default = UndrawPhoto;