"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/setPrototypeOf"));

var _match$groups, _match$groups2, _match$groups3;

function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), (0, _setPrototypeOf2["default"])(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null)); } return (0, _inherits2["default"])(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); return result && (result.groups = buildGroups(result, this)), result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }

var reDate = /*#__PURE__*/_wrapRegExp(/([0-9]{4})\x2D([0-9]{2})\x2D([0-9]{2})/, {
  year: 1,
  month: 2,
  day: 3
}),
    match = reDate.exec('2018-04-30'),
    year = match === null || match === void 0 ? void 0 : (_match$groups = match.groups) === null || _match$groups === void 0 ? void 0 : _match$groups.year,
    // 2018
month = match === null || match === void 0 ? void 0 : (_match$groups2 = match.groups) === null || _match$groups2 === void 0 ? void 0 : _match$groups2.month,
    // 04
day = match === null || match === void 0 ? void 0 : (_match$groups3 = match.groups) === null || _match$groups3 === void 0 ? void 0 : _match$groups3.day; // 30


console.log(year, month, day);