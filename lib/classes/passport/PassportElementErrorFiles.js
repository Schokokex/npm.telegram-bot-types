"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
var PassportElementErrorFiles = /** @class */ (function () {
    function PassportElementErrorFiles(source, type, file_hashes, message) {
        this.source = source;
        this.type = type;
        this.file_hashes = file_hashes;
        this.message = message;
    }
    return PassportElementErrorFiles;
}());
exports.default = PassportElementErrorFiles;
