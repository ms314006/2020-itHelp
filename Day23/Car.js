var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.model = 'GQSM-X';
        this.color = color;
    }
    Car.prototype.getDescription = function () {
        return "\u578B\u865F\u662F\uFF1A" + this.model + "\uFF08" + this.color + "\uFF09";
    };
    return Car;
}());
// CarII 繼承了 Car
var CarII = /** @class */ (function (_super) {
    __extends(CarII, _super);
    function CarII() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarII.getComment = function () {
        return '我是車';
    };
    CarII.prototype.getModel = function () {
        return this.model;
    };
    CarII.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + "\uFF08II\uFF09";
    };
    return CarII;
}(Car));
var redCar = new Car('Red');
var blueCar = new Car('Blue');
console.log(redCar.getDescription());
// 型號是：GQSM-X（Red）
console.log(blueCar.getDescription());
// 型號是：GQSM-X（Blue）
// console.log(redCar.model) // 試圖取得私有屬性，會造成無法編譯
var redCarII = new CarII('Red');
console.log(redCarII.getDescription());
// 執行結果：
// 型號是：GQSM-X（Red）（II）
console.log(redCarII.getModel);
// GQSM-X
console.log(CarII.getComment());
