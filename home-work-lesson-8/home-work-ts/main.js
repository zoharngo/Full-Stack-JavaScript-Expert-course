"use strict";
exports.__esModule = true;
var operations_1 = require("./operations");
console.log(operations_1.exeOperation(undefined, 8.5, 7.9, 3.1));
console.log(operations_1.exeOperation(function (num) {
    return Math.pow(num, 2);
}, 8));
