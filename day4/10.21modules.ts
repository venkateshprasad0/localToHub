import { IEmployee } from "./10.2modules";

export class Employee implements IEmployee{
    getFN(): void {
        console.log("Ahrim");
    }
    getLN(): void {
        console.log("Jain");
    }
    
}

let a = new Employee();
a.getFN();
a.getLN()