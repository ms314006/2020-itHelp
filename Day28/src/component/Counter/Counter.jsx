"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Counter = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (<div data-testid="counterBlock">
      <span data-testid="counter">
        {count}
      </span>
      <button type="button" onClick={function () { setCount(count + 1); }} data-testid="addCountBtn">
        點我加 1
      </button>
    </div>);
};
exports.default = Counter;
