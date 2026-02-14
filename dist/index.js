var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Interval", "./Permutation", "./Subset", "./SubsetFromList", "./Tuple", "./Random", "./FileContents", "./FileUtils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Interval"), exports);
    __exportStar(require("./Permutation"), exports);
    __exportStar(require("./Subset"), exports);
    __exportStar(require("./SubsetFromList"), exports);
    __exportStar(require("./Tuple"), exports);
    __exportStar(require("./Random"), exports);
    __exportStar(require("./FileContents"), exports);
    __exportStar(require("./FileUtils"), exports);
});
//# sourceMappingURL=index.js.map