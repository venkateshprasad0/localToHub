function User(name){
    this.name = name;
}

User.prototype.sayHi = function(){
    console.log(this.name);
};

var user = new User("John");
user.sayHi();