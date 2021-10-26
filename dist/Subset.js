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
    exports.Subset = void 0;
    var Subset = /** @class */ (function () {
        /**
         * The constructor of {@link Subset} class which takes 3 integer inputs; rangeStart, rangeEnd, and elementCount.
         * It initializes variables rangeEnd and elementCount with given inputs, creates 2 arrays; set and multiset with the
         * size of given elementCount and multisetCount, which is derived from elementCount, respectively. Then, it assigns
         * rangeStart+i to each ith element of set {@link Array}.
         *
         * @param rangeStart   integer input defining start range.
         * @param rangeEnd     integer input defining ending range.
         * @param elementCount integer input element count.
         */
        function Subset(rangeStart, rangeEnd, elementCount) {
            this.rangeEnd = rangeEnd;
            this.elementCount = elementCount;
            this.set = new Array(elementCount);
            for (var i = 0; i < elementCount; i++) {
                this.set[i] = rangeStart + i;
            }
        }
        /**
         * Getter for the set {@link Array}.
         *
         * @return the set {@link Array}.
         */
        Subset.prototype.get = function () {
            return this.set;
        };
        /**
         * The next method generates the next subset.
         *
         * @return true if next subset generation is possible, false otherwise.
         */
        Subset.prototype.next = function () {
            var i;
            for (i = this.elementCount - 1; i > -1; i--) {
                this.set[i]++;
                if (this.set[i] <= this.rangeEnd - this.elementCount + i + 1) {
                    break;
                }
            }
            if (i == -1) {
                return false;
            }
            for (var j = i + 1; j < this.elementCount; j++) {
                this.set[j] = this.set[j - 1] + 1;
            }
            return true;
        };
        return Subset;
    }());
    exports.Subset = Subset;
});
//# sourceMappingURL=Subset.js.map