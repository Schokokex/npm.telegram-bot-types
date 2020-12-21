"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a video to be sent.
 */
var InputMediaVideo = /** @class */ (function () {
    function InputMediaVideo(type, media, thumb, caption, parse_mode, caption_entities, width, height, duration, supports_streaming) {
        this.type = type;
        this.media = media;
        this.thumb = thumb;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.supports_streaming = supports_streaming;
    }
    return InputMediaVideo;
}());
exports.default = InputMediaVideo;
