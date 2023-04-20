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
    exports.FileContents = void 0;
    var fs = require("fs");
    var FileContents = /** @class */ (function () {
        function FileContents(fileName) {
            var data = fs.readFileSync(fileName, 'utf8');
            this.contents = data.split("\n");
            this.filePointer = 0;
        }
        FileContents.prototype.readLine = function () {
            if (this.filePointer < this.contents.length) {
                var s = this.contents[this.filePointer];
                this.filePointer++;
                return s;
            }
            return "";
        };
        return FileContents;
    }());
    exports.FileContents = FileContents;
});
//# sourceMappingURL=FileContents.js.map