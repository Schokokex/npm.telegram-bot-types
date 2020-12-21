"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a voice note.
 */
var Voice = /** @class */ (function () {
    function Voice(file_id, file_unique_id, duration, mime_type, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.duration = duration;
        this.mime_type = mime_type;
        this.file_size = file_size;
    }
    return Voice;
}());
exports.default = Voice;
