class Car {
   public Color: string;
    constructor(color: string) {
        this.Color = color;
    }
}

class Benz extends Car {

    Price: number;
    constructor(color: string, price: number) {
        super(color);
        this.Price = price;
    }

    display(): void {
        console.log("Color of Benz car:" + super.Color);
        console.log("Price of Benz car: " + this.Price);
    }
}
let obj2 = new Benz(" White", 54000000);
obj2.display();