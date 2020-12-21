"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 */
var PassportElementErrorReverseSide = /** @class */ (function () {
    function PassportElementErrorReverseSide(source, type, file_hash, message) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
    }
    return PassportElementErrorReverseSide;
}());
exports.default = PassportElementErrorReverseSide;
