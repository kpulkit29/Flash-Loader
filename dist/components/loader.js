"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./loader.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFlashMode(mode, open) {
    if (open === false || typeof open != "boolean") {
        return "";
    }

    switch (mode) {
        case "runbarry":
            return _react2.default.createElement("div", { className: "flash" });
        case "rotate":
            return _react2.default.createElement("div", { className: "rotate" });
        case "jump":
            return _react2.default.createElement("div", { className: "jump" });
        default:
            return _react2.default.createElement("div", { className: "flash" });
    }
}

var FlashLoader = function FlashLoader(_ref) {
    var _ref$open = _ref.open,
        open = _ref$open === undefined ? false : _ref$open,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? "flash" : _ref$type;
    return getFlashMode(type, open);
};

exports.default = FlashLoader;