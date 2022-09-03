(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RandomArray = void 0;
    var Random_1 = require("./Random");
    var RandomArray = /** @class */ (function () {
        function RandomArray() {
        }
        /**
         * The constructor of {@link RandomArray} class gets an integer itemCount as an input. Creates an array of
         * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
         * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
         *
         * @param itemCount integer input defining array size.
         */
        RandomArray.normalizedArray = function (itemCount) {
            var sum = 0.0;
            var array = new Array(itemCount);
            for (var i = 0; i < itemCount; i++) {
                array[i] = Math.random();
                sum += array[i];
            }
            for (var i = 0; i < itemCount; i++) {
                array[i] /= sum;
            }
            return array;
        };
        RandomArray.indexArray = function (itemCount, seed) {
            var array = new Array(itemCount);
            for (var i = 0; i < itemCount; i++) {
                array[i] = i;
            }
            var random = new Random_1.Random(seed);
            random.shuffle(array);
            return array;
        };
        return RandomArray;
    }());
    exports.RandomArray = RandomArray;
});
//# sourceMappingURL=RandomArray.js.map