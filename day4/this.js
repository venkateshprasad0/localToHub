function Country(name, independenceOn) {
    this.name = name;
    this.independenceOn = independenceOn;
    this.describe = function () {
        console.log("".concat(this.name, " got its independence on ").concat(this.independenceOn));
    };
}
var India = new Country('The country India', 1947);
India.describe();
