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
    exports.Permutation = void 0;
    var Permutation = /** @class */ (function () {
        /**
         * A constructor of {@link Permutation} class which creates a new {@link Array} and assigns integer
         * numbers starting from 0 to given input n.
         *
         * @param n integer input.
         */
        function Permutation(n) {
            this.n = n;
            this.a = new Array(n);
            for (var i = 0; i < this.a.length; i++) {
                this.a[i] = i;
            }
        }
        /**
         * The get method returns the {@link Array} a.
         *
         * @return Array a.
         */
        Permutation.prototype.get = function () {
            return this.a;
        };
        /**
         * The next method generates next permutation for the {@link Array} a.
         *
         * @return true if next permutation is possible, false otherwise.
         */
        Permutation.prototype.next = function () {
            var i = this.n - 2;
            while (i >= 0 && this.a[i] >= this.a[i + 1]) {
                i--;
            }
            if (i == -1) {
                return false;
            }
            var j = this.n - 1;
            while (this.a[i] >= this.a[j]) {
                j--;
            }
            var tmp = this.a[i];
            this.a[i] = this.a[j];
            this.a[j] = tmp;
            var k = i + 1;
            j = this.n - 1;
            while (k < j) {
                tmp = this.a[k];
                this.a[k] = this.a[j];
                this.a[j] = tmp;
                k++;
                j--;
            }
            return true;
        };
        return Permutation;
    }());
    exports.Permutation = Permutation;
});
//# sourceMappingURL=Permutation.js.map