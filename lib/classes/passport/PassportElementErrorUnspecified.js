"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 */
var PassportElementErrorUnspecified = /** @class */ (function () {
    function PassportElementErrorUnspecified(source, type, element_hash, message) {
        this.source = source;
        this.type = type;
        this.element_hash = element_hash;
        this.message = message;
    }
    return PassportElementErrorUnspecified;
}());
exports.default = PassportElementErrorUnspecified;
