"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 */
var PhotoSize = /** @class */ (function () {
    function PhotoSize(file_id, file_unique_id, width, height, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.file_size = file_size;
    }
    return PhotoSize;
}());
exports.default = PhotoSize;
