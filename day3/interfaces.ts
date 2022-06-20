interface Person {
    name: string;
    age?: number;
    kids: number;
    calcPets:() => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
}

var personImplementation: Person = {
    name:'John',
    age: 40,
    kids: 4,
    calcPets: function(){
        return this.kids*2;
    },
    makeYounger: function (years:number){
        this.age-= years;
    },
    greet: function (msg: string){
        return msg + ', ' + this.name;
    }
};

var pets = personImplementation.calcPets();
console.log('pets = ' + pets);

personImplementation.makeYounger(10);
var newAge = personImplementation.age;
console.log('new age = ' + newAge);

var msg = personImplementation.greet('Good day');
console.log(msg);