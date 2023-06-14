import _typeof from "@babel/runtime/helpers/typeof";
import _inherits from "@babel/runtime/helpers/inherits";
import _setPrototypeOf from "@babel/runtime/helpers/setPrototypeOf";
var _match$groups, _match$groups2, _match$groups3;
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { var i = g[name]; if ("number" == typeof i) groups[name] = result[i];else { for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++; groups[name] = result[i[k]]; } return groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) { result.groups = buildGroups(result, this); var indices = result.indices; indices && (indices.groups = buildGroups(indices, this)); } return result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { var group = groups[name]; return "$" + (Array.isArray(group) ? group.join("$") : group); })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }
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