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
    var fs = require("fs");
    var FileUtils = /** @class */ (function () {
        function FileUtils() {
        }
        FileUtils.readHashMap = function (fileName) {
            var result = new Map();
            var data = fs.readFileSync(fileName, 'utf8');
            var lines = data.split("\n");
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                var list = line.split(" ");
                if (list.length == 2) {
                    result.set(list[0], list[1]);
                }
            }
            return result;
        };
        return FileUtils;
    }());
    exports.FileUtils = FileUtils;
});
//# sourceMappingURL=FileUtils.js.map