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
    const fs = require("fs");
    class FileContents {
        constructor(fileName) {
            let data = fs.readFileSync(fileName, 'utf8');
            this.contents = data.split("\n");
            this.filePointer = 0;
        }
        readLine() {
            if (this.filePointer < this.contents.length) {
                let s = this.contents[this.filePointer];
                this.filePointer++;
                return s;
            }
            return "";
        }
        hasNextLine() {
            return this.filePointer < this.contents.length;
        }
    }
    exports.FileContents = FileContents;
});
//# sourceMappingURL=FileContents.js.map