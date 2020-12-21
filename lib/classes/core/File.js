"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Maximum file size to download is 20 MB
 *
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 */
var File = /** @class */ (function () {
    function File(file_id, file_unique_id, file_size, file_path) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.file_size = file_size;
        this.file_path = file_path;
    }
    return File;
}());
exports.default = File;
