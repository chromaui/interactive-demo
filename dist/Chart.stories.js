"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Chart = _interopRequireDefault(require("./Chart"));

// WARNING: Best not to change anyting in here. The place that depends on this
// component in the Chromatic codebase depends on the values defined here
// (title, story name, etc.) so changing that will break the integration.
var _default = {
  title: 'Chart'
};
exports["default"] = _default;

var Base = function Base() {
  return /*#__PURE__*/_react["default"].createElement(_Chart["default"], null);
};

exports.Base = Base;