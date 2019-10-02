"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v1_1 = __importDefault(require("uuid/v1"));
var car = {
    carContent: [],
    getCurrentCar: function () { return car.carContent; },
    addProdToCar: function (name, count) {
        var workCar = __spreadArrays(car.getCurrentCar());
        workCar.push({ id: v1_1.default(), name: name, count: count });
        return workCar;
    },
};
exports.default = car;
