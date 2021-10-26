(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RandomNormalizedArray = void 0;
    var RandomNormalizedArray = /** @class */ (function () {
        /**
         * The constructor of {@link RandomNormalizedArray} class gets an integer itemCount as an input. Creates an array of
         * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
         * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
         *
         * @param itemCount integer input defining array size.
         */
        function RandomNormalizedArray(itemCount) {
            var sum = 0.0;
            this.array = new Array(itemCount);
            for (var i = 0; i < itemCount; i++) {
                this.array[i] = Math.random();
                sum += this.array[i];
            }
            for (var i = 0; i < itemCount; i++) {
                this.array[i] /= sum;
            }
        }
        /**
         * Getter for the double {@link Array}.
         *
         * @return the double {@link Array}.
         */
        RandomNormalizedArray.prototype.get = function () {
            return this.array;
        };
        return RandomNormalizedArray;
    }());
    exports.RandomNormalizedArray = RandomNormalizedArray;
});
//# sourceMappingURL=RandomNormalizedArray.js.map