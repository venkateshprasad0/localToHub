const person = {
    name1: 'Sara',
    age:25,
    gender: 'female'
}

let { name1, age, gender} = person;

console.log(name1,age, gender);


//array destruturing 
const arrValue = ['one', 'two', 'three'];
const [x, y, z] = arrValue;
console.log(x,y,z);