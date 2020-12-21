"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a phone contact.
 */
var Contact = /** @class */ (function () {
    function Contact(phone_number, first_name, last_name, user_id, vcard) {
        this.phone_number = phone_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_id = user_id;
        this.vcard = vcard;
    }
    return Contact;
}());
exports.default = Contact;
