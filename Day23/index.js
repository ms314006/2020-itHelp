var printParam = function (param) { return console.log(param); };
printParam('string');
printParam(1234);
var Car = /** @class */ (function () {
    function Car(color) {
        this.model = 'GQSM-X';
        this.color = color;
    }
    Car.prototype.printDescription = function () {
        console.log("\u578B\u865F\u662F\uFF1A" + this.model + "\uFF08" + this.color + "\uFF09");
    };
    return Car;
}());
var redCar = new Car('Red');
var blueCar = new Car('Blue');
redCar.printDescription(); // 型號是：GQSM-X（Red）
blueCar.printDescription(); // 型號是：GQSM-X（Blue）
