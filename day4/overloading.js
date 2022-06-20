var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (a, b) {
        var stringParameter;
        var numberParameter;
        if (typeof a === 'string') {
            stringParameter = a;
        }
        else {
            numberParameter = a;
            if (typeof b === 'string') {
                stringParameter = b;
            }
        }
        console.log("String Parameter: " + stringParameter);
        console.log("Number Parameter: " + numberParameter);
    };
    return Calculator;
}());
var calc = new Calculator();
calc.Add("Mark");
calc.Add(23, "Luke");
