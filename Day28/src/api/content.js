"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContent = function () { return (fetch('https://httpbin.org/get')
    .then(function (response) { return response.json(); })); };
