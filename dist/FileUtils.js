(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileUtils = void 0;
    const fs = require("fs");
    class FileUtils {
        static readHashMap(fileName) {
            let result = new Map();
            let data = fs.readFileSync(fileName, 'utf8');
            let lines = data.split("\n");
            for (let line of lines) {
                let list = line.split(" ");
                if (list.length == 2) {
                    result.set(list[0], list[1]);
                }
            }
            return result;
        }
    }
    exports.FileUtils = FileUtils;
});
//# sourceMappingURL=FileUtils.js.map