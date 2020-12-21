"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 */
var PassportElementErrorTranslationFile = /** @class */ (function () {
    function PassportElementErrorTranslationFile(source, type, file_hash, message) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
    }
    return PassportElementErrorTranslationFile;
}());
exports.default = PassportElementErrorTranslationFile;
