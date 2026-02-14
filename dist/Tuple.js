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
    exports.Tuple = void 0;
    class Tuple {
        /**
         * The constructor of {@link Tuple} class which takes two integer inputs and initializes first and last variables
         * with given inputs.
         *
         * @param first integer input.
         * @param last  integer input.
         */
        constructor(first, last) {
            this.first = first;
            this.last = last;
        }
        /**
         * Getter for the first item at {@link Tuple}.
         *
         * @return the first item.
         */
        getFirst() {
            return this.first;
        }
        /**
         * Getter for the last item at {@link Tuple}.
         *
         * @return the last item.
         */
        getLast() {
            return this.last;
        }
    }
    exports.Tuple = Tuple;
});
//# sourceMappingURL=Tuple.js.map