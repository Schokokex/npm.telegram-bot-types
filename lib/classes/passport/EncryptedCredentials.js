"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 */
var EncryptedCredentials = /** @class */ (function () {
    function EncryptedCredentials(data, hash, secret) {
        this.data = data;
        this.hash = hash;
        this.secret = secret;
    }
    return EncryptedCredentials;
}());
exports.default = EncryptedCredentials;
