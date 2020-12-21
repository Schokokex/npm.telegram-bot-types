"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 */
var VideoNote = /** @class */ (function () {
    function VideoNote(file_id, file_unique_id, length, duration, thumb, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.length = length;
        this.duration = duration;
        this.thumb = thumb;
        this.file_size = file_size;
    }
    return VideoNote;
}());
exports.default = VideoNote;
