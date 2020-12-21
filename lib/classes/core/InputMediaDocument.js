"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a general file to be sent.
 */
var InputMediaDocument = /** @class */ (function () {
    function InputMediaDocument(type, media, thumb, caption, parse_mode, caption_entities, disable_content_type_detection) {
        this.type = type;
        this.media = media;
        this.thumb = thumb;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.disable_content_type_detection = disable_content_type_detection;
    }
    return InputMediaDocument;
}());
exports.default = InputMediaDocument;
