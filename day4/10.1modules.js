"use strict";
exports.__esModule = true;
exports.ZipcodeValidator = void 0;
var ZipcodeValidator = /** @class */ (function () {
    function ZipcodeValidator() {
    }
    ZipcodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5;
    };
    return ZipcodeValidator;
}());
exports.ZipcodeValidator = ZipcodeValidator;
var validator = new ZipcodeValidator();
console.log(validator.isAcceptable("12345"));
