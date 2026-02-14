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
    class Random {
        constructor(seed) {
            this.seed = 0;
            if (seed != undefined) {
                this.seed = seed;
            }
        }
        nextRandom() {
            this.seed = (1664525 * this.seed + 1013904223) % Number.MAX_SAFE_INTEGER;
        }
        nextDouble(min, max) {
            this.nextRandom();
            if (min != undefined && max != undefined) {
                return min + (this.seed / Number.MAX_SAFE_INTEGER) * (max - min);
            }
            return this.seed / Number.MAX_SAFE_INTEGER;
        }
        nextInt(maxRange) {
            this.nextRandom();
            return this.seed % maxRange;
        }
        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let randomIndex = this.nextInt(i + 1);
                [array[i], array[randomIndex]] =
                    [array[randomIndex], array[i]];
            }
        }
    }
    exports.Random = Random;
});
//# sourceMappingURL=Random.js.map