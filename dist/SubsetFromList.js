var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Subset"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubsetFromList = void 0;
    var Subset_1 = require("./Subset");
    var SubsetFromList = /** @class */ (function (_super) {
        __extends(SubsetFromList, _super);
        /**
         * A constructor of {@link SubsetFromList} class takes an integer list and an integer elementCount as inputs. It initializes
         * elementList and elementCount variables with given inputs, then creates 3 arrays; set,indexList, and multiset with the
         * size of given elementCount and multisetCount, which is derived from elementCount, respectively. Then, it assigns
         * i to each ith element of indexList {@link Array} and use this index to point at elementList and
         * assigns to set {@link Array}.
         *
         * @param list         {@link java.lang.reflect.Array} type input.
         * @param elementCount integer input element count.
         */
        function SubsetFromList(list, elementCount) {
            var _this = _super.call(this, 0, 0, 0) || this;
            _this.elementList = list;
            _this.elementCount = elementCount;
            _this.set = new Array(elementCount);
            _this.indexList = new Array(elementCount);
            for (var i = 0; i < elementCount; i++) {
                _this.indexList[i] = i;
                _this.set[i] = _this.elementList[_this.indexList[i]];
            }
            return _this;
        }
        /**
         * The next method generates the next subset from list.
         *
         * @return true if next subset generation from list is possible, false otherwise.
         */
        SubsetFromList.prototype.next = function () {
            var i;
            for (i = this.elementCount - 1; i > -1; i--) {
                this.indexList[i]++;
                if (this.indexList[i] < this.elementList.length - this.elementCount + i + 1)
                    break;
            }
            if (i == -1)
                return false;
            this.set[i] = this.elementList[this.indexList[i]];
            for (var j = i + 1; j < this.elementCount; j++) {
                this.indexList[j] = this.indexList[j - 1] + 1;
                this.set[j] = this.elementList[this.indexList[j]];
            }
            return true;
        };
        return SubsetFromList;
    }(Subset_1.Subset));
    exports.SubsetFromList = SubsetFromList;
});
//# sourceMappingURL=SubsetFromList.js.map