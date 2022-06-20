function Country(name, independenceOn){
    this.name = name
    this.independenceOn = independenceOn;

    this.describe = function(){
        console.log(`${this.name} got its independence on ${this.independenceOn}`);
    }
}

const India = new Country('The country India',1947);

India.describe();