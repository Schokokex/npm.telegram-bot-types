"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
var PassportData = /** @class */ (function () {
    function PassportData(data, credentials) {
        this.data = data;
        this.credentials = credentials;
    }
    return PassportData;
}());
exports.default = PassportData;
