"use strict";
exports.__esModule = true;
function exeOperation(func) {
    if (func === void 0) { func = Math.floor; }
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += func(n[i]);
    }
    return sum;
}
exports.exeOperation = exeOperation;
