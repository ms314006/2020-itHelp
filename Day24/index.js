"use strict";
exports.__esModule = true;
var Car_1 = require("./class/Car");
var AirPlane_1 = require("./class/AirPlane");
var printParam = function (param) { return console.log(param); };
printParam('string');
printParam(1234);
var redCar = new Car_1["default"]('Red');
var airplane = new AirPlane_1["default"]();
var startMove = function (transportation) {
    console.log("\u958B\u59CB" + transportation.move());
};
startMove(redCar); // 開始出發前進！
startMove(airplane); // 開始飛行前進！
