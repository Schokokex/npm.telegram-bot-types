"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 */
var Document = /** @class */ (function () {
    function Document(file_id, file_unique_id, thumb, file_name, mime_type, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.thumb = thumb;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
    }
    return Document;
}());
exports.default = Document;
