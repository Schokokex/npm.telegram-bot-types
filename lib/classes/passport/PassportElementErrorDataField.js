"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 */
var PassportElementErrorDataField = /** @class */ (function () {
    function PassportElementErrorDataField(source, type, field_name, data_hash, message) {
        this.source = source;
        this.type = type;
        this.field_name = field_name;
        this.data_hash = data_hash;
        this.message = message;
    }
    return PassportElementErrorDataField;
}());
exports.default = PassportElementErrorDataField;
