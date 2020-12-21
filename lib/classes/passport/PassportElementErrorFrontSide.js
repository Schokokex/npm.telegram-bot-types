"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 */
var PassportElementErrorFrontSide = /** @class */ (function () {
    function PassportElementErrorFrontSide(source, type, file_hash, message) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
    }
    return PassportElementErrorFrontSide;
}());
exports.default = PassportElementErrorFrontSide;
