"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getFN = function () {
        console.log("Ahrim");
    };
    Employee.prototype.getLN = function () {
        console.log("Jain");
    };
    return Employee;
}());
exports.Employee = Employee;
var a = new Employee();
a.getFN();
a.getLN();
