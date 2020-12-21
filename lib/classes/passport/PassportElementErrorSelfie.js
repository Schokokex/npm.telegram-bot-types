"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 */
var PassportElementErrorSelfie = /** @class */ (function () {
    function PassportElementErrorSelfie(source, type, file_hash, message) {
        this.source = source;
        this.type = type;
        this.file_hash = file_hash;
        this.message = message;
    }
    return PassportElementErrorSelfie;
}());
exports.default = PassportElementErrorSelfie;
