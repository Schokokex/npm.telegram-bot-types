"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
var InputContactMessageContent = /** @class */ (function () {
    function InputContactMessageContent(phone_number, first_name, last_name, vcard) {
        this.phone_number = phone_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.vcard = vcard;
    }
    return InputContactMessageContent;
}());
exports.default = InputContactMessageContent;
