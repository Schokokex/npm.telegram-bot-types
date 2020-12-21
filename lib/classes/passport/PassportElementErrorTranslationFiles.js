"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 */
var PassportElementErrorTranslationFiles = /** @class */ (function () {
    function PassportElementErrorTranslationFiles(source, type, file_hashes, message) {
        this.source = source;
        this.type = type;
        this.file_hashes = file_hashes;
        this.message = message;
    }
    return PassportElementErrorTranslationFiles;
}());
exports.default = PassportElementErrorTranslationFiles;
