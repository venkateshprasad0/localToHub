"use strict";
exports.__esModule = true;
exports.Numbers = void 0;
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_variable = 14;
        console.log("Local variable :" + local_variable);
    };
    Numbers.static_val = 10;
    return Numbers;
}());
exports.Numbers = Numbers;
console.log("Global num: " + global_num);
var obj = new Numbers();
console.log("Class num: " + obj.num_val);
obj.storeNum();
Numbers.static_val = 409;
console.log("static numbers: " + Numbers.static_val);
