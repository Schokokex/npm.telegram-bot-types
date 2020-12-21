"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
var Audio = /** @class */ (function () {
    function Audio(file_id, file_unique_id, duration, performer, title, file_name, mime_type, file_size, thumb) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.duration = duration;
        this.performer = performer;
        this.title = title;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
        this.thumb = thumb;
    }
    return Audio;
}());
exports.default = Audio;
