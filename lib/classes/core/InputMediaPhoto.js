"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a photo to be sent.
 */
var InputMediaPhoto = /** @class */ (function () {
    function InputMediaPhoto(type, media, caption, parse_mode, caption_entities) {
        this.type = type;
        this.media = media;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
    }
    return InputMediaPhoto;
}());
exports.default = InputMediaPhoto;
