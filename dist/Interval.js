(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Tuple.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interval = void 0;
    var Tuple_js_1 = require("./Tuple.js");
    var Interval = /** @class */ (function () {
        /**
         * A constructor of {@link Interval} class which creates a new {@link Array} list.
         */
        function Interval() {
        }
        /**
         * The add method adds a new {@link Tuple} with given inputs to the list.
         *
         * @param start first element of {@link Tuple}.
         * @param end   second element of {@link Tuple}.
         */
        Interval.prototype.add = function (start, end) {
            this.list.push(new Tuple_js_1.Tuple(start, end));
        };
        /**
         * The getFirst method returns the first element at the list {@link Array}'s given index.
         *
         * @param index to use at getting tuple from {@link Array}.
         * @return the first element at the list {@link Array}'s given index.
         */
        Interval.prototype.getFirst = function (index) {
            return this.list[index].getFirst();
        };
        /**
         * The getLast method returns the last element at the list {@link Array}'s given index.
         *
         * @param index to use at getting tuple from {@link Array}.
         * @return the last element at the list {@link Array}'s given index.
         */
        Interval.prototype.getLast = function (index) {
            return this.list[index].getFirst();
        };
        /**
         * The size method returns the size of the list {@link Array}.
         *
         * @return size of the list {@link Array}.
         */
        Interval.prototype.size = function () {
            return this.list.length;
        };
        return Interval;
    }());
    exports.Interval = Interval;
});
//# sourceMappingURL=Interval.js.map