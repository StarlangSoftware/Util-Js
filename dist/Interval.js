"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
const Tuple_js_1 = require("./Tuple.js");
class Interval {
    list;
    /**
     * A constructor of {@link Interval} class which creates a new {@link Array} list.
     */
    constructor() {
    }
    /**
     * The add method adds a new {@link Tuple} with given inputs to the list.
     *
     * @param start first element of {@link Tuple}.
     * @param end   second element of {@link Tuple}.
     */
    add(start, end) {
        this.list.push(new Tuple_js_1.Tuple(start, end));
    }
    /**
     * The getFirst method returns the first element at the list {@link Array}'s given index.
     *
     * @param index to use at getting tuple from {@link Array}.
     * @return the first element at the list {@link Array}'s given index.
     */
    getFirst(index) {
        return this.list[index].getFirst();
    }
    /**
     * The getLast method returns the last element at the list {@link Array}'s given index.
     *
     * @param index to use at getting tuple from {@link Array}.
     * @return the last element at the list {@link Array}'s given index.
     */
    getLast(index) {
        return this.list[index].getFirst();
    }
    /**
     * The size method returns the size of the list {@link Array}.
     *
     * @return size of the list {@link Array}.
     */
    size() {
        return this.list.length;
    }
}
exports.Interval = Interval;
//# sourceMappingURL=Interval.js.map