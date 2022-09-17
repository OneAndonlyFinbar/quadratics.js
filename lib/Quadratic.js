"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadratic = void 0;
var Quadratic = /** @class */ (function () {
    function Quadratic() {
    }
    /**
     * @param {string} equation
     * @returns {this}
     */
    Quadratic.prototype.fromString = function (equation) {
        //make sure input has a b and c terms
        this.a = parseInt(RegExp.$1);
        this.b = parseInt(RegExp.$2);
        this.c = parseInt(RegExp.$3);
        return this;
    };
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @returns {this}
     */
    Quadratic.prototype.fromInt = function (a, b, c) {
        if (a === null || b === null || c === null)
            throw new Error('Missing terms.');
        this.a = a;
        this.b = b;
        this.c = c;
        return this;
    };
    /**
     * @param {{a: number, b: number, c: number}} obj
     * @returns {this}
     */
    Quadratic.prototype.fromObject = function (obj) {
        if (['a', 'b', 'c'].some(function (key) { return !obj.hasOwnProperty(key); }))
            throw new Error('Invalid object. Must have properties a, b, and c');
        this.a = obj.a;
        this.b = obj.b;
        this.c = obj.c;
        return this;
    };
    /**
     * @return {string[] || number[]}
     */
    Quadratic.prototype.solve = function () {
        if (this.a === null || this.b === null || this.c === null)
            throw new Error('Missing terms, call #fromString #fromInt #fromObject before solving.');
        var plus, minus;
        this.includesImaginary = isNaN(Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c)));
        if (!this.includesImaginary) {
            plus = ((-1 * this.b) + Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c))) / (2 * this.a);
            minus = ((-1 * this.b) - Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c))) / (2 * this.a);
        }
        else {
            var sqrtValue = Math.abs(Math.pow(this.b, 2) - 4 * (this.a * this.c));
            var real = (-1 * this.b) / (2 * this.a);
            var imaginary = (Math.sqrt(sqrtValue) / (2 * this.a)) + 'i';
            minus = "".concat(real, "-").concat(imaginary);
            plus = "".concat(real, "+").concat(imaginary);
        }
        return [plus, minus].sort(function (a, b) { return a - b; });
    };
    return Quadratic;
}());
exports.Quadratic = Quadratic;
