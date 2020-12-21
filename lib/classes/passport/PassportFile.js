"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 */
var PassportFile = /** @class */ (function () {
    function PassportFile(file_id, file_unique_id, file_size, file_date) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.file_size = file_size;
        this.file_date = file_date;
    }
    return PassportFile;
}());
exports.default = PassportFile;
