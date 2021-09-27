"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _counterSlice = _interopRequireWildcard(require("./counterSlice"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('counter reducer', function () {
  var initialState = {
    value: 3,
    status: 'idle'
  };
  it('should handle initial state', function () {
    expect((0, _counterSlice["default"])(undefined, {
      type: 'unknown'
    })).toEqual({
      value: 0,
      status: 'idle'
    });
  });
  it('should handle increment', function () {
    var actual = (0, _counterSlice["default"])(initialState, (0, _counterSlice.increment)());
    expect(actual.value).toEqual(4);
  });
  it('should handle decrement', function () {
    var actual = (0, _counterSlice["default"])(initialState, (0, _counterSlice.decrement)());
    expect(actual.value).toEqual(2);
  });
  it('should handle incrementByAmount', function () {
    var actual = (0, _counterSlice["default"])(initialState, (0, _counterSlice.incrementByAmount)(2));
    expect(actual.value).toEqual(5);
  });
});