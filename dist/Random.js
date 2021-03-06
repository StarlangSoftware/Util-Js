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
    exports.Random = void 0;
    var Random = /** @class */ (function () {
        function Random(seed) {
            this.seed = 0;
            if (seed != undefined) {
                this.seed = seed;
            }
        }
        Random.prototype.nextRandom = function () {
            this.seed = (1664525 * this.seed + 1013904223) % Number.MAX_SAFE_INTEGER;
        };
        Random.prototype.nextDouble = function (min, max) {
            this.nextRandom();
            if (min != undefined && max != undefined) {
                return min + (this.seed / Number.MAX_SAFE_INTEGER) * (max - min);
            }
            return this.seed / Number.MAX_SAFE_INTEGER;
        };
        Random.prototype.nextInt = function (maxRange) {
            this.nextRandom();
            return this.seed % maxRange;
        };
        Random.prototype.shuffle = function (array) {
            var _a;
            for (var i = array.length - 1; i > 0; i--) {
                var randomIndex = this.nextInt(i + 1);
                _a = [array[randomIndex], array[i]], array[i] = _a[0], array[randomIndex] = _a[1];
            }
        };
        return Random;
    }());
    exports.Random = Random;
});
//# sourceMappingURL=Random.js.map