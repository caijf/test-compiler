import _typeof from "@babel/runtime/helpers/typeof";
import _inherits from "@babel/runtime/helpers/inherits";
import _setPrototypeOf from "@babel/runtime/helpers/setPrototypeOf";

var _match$groups, _match$groups2, _match$groups3;

function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (_typeof(args[args.length - 1]) !== "object") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

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
export {};