"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 */
var PassportElementErrorFile = /** @class */ (function () {
    function PassportElementErrorFile(source, type, file_hash, message) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
    }
    return PassportElementErrorFile;
}());
exports.default = PassportElementErrorFile;
