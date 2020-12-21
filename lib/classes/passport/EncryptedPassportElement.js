"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
 */
var EncryptedPassportElement = /** @class */ (function () {
    function EncryptedPassportElement(type, hash, data, phone_number, email, files, front_side, reverse_side, selfie, translation) {
        this.type = type;
        this.hash = hash;
        this.data = data;
        this.phone_number = phone_number;
        this.email = email;
        this.files = files;
        this.front_side = front_side;
        this.reverse_side = reverse_side;
        this.selfie = selfie;
        this.translation = translation;
    }
    return EncryptedPassportElement;
}());
exports.default = EncryptedPassportElement;
