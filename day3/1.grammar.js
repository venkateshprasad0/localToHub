"use strict";
exports.__esModule = true;
var _1_grammar_1 = require("./1.grammar");
var demo123;
(function (demo123) {
    var x = 1;
    var y;
    var firstName = 'John';
    var lastName = 'Papa';
    var num1 = 100;
    var num2 = 20;
    var a = function (n1, n2, n3) {
        var result = n1 + n2 + n3;
        var msg = 'Sum is = ' + result;
        console.log(msg);
    };
    a(num1, num2, 7);
    console.log(_1_grammar_1.Numbers.static_val);
})(demo123 || (demo123 = {}));
