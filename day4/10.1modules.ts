import { StringValidator } from "./10modules";

export class ZipcodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length ===5;
    }
}

var validator = new ZipcodeValidator();
console.log(validator.isAcceptable("12345"));