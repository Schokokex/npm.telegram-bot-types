"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an audio file to be treated as music to be sent.
 */
var InputMediaAudio = /** @class */ (function () {
    function InputMediaAudio(type, media, thumb, caption, parse_mode, caption_entities, duration, performer, title) {
        this.type = type;
        this.media = media;
        this.thumb = thumb;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.duration = duration;
        this.performer = performer;
        this.title = title;
    }
    return InputMediaAudio;
}());
exports.default = InputMediaAudio;
