// function printThis() {
//     console.log(this);
// }
var _this = this;
// printThis();
// 'use strict'
// function printThis() {
//     console.log(this);
// }
// printThis();
// 
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed 
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj
var myNameIs = {
    // name: 'Venkatesh',
    regularFunction: function () {
        console.log(this.name);
    },
    arrowFunction: function () {
        console.log(_this.name);
    }
};
myNameIs.arrowFunction();
myNameIs.regularFunction();
