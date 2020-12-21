"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a video file.
 */
var Video = /** @class */ (function () {
    function Video(file_id, file_unique_id, width, height, duration, thumb, file_name, mime_type, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.thumb = thumb;
        this.file_name = file_name;
        this.mime_type = mime_type;
        this.file_size = file_size;
    }
    return Video;
}());
exports.default = Video;
