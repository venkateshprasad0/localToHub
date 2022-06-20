var global_num  = 12

export class Numbers{

    num_val = 13;
    public static static_val = 10;

    storeNum():void {
        var local_variable = 14;
        console.log("Local variable :" + local_variable);
    }

}

console.log("Global num: " + global_num);

var obj  = new Numbers();
console.log("Class num: " + obj.num_val);
obj.storeNum();
Numbers.static_val = 409;
console.log("static numbers: " + Numbers.static_val);
