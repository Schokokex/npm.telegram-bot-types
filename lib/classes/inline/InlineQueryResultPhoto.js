"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
var InlineQueryResultPhoto = /** @class */ (function () {
    function InlineQueryResultPhoto(type, id, photo_url, thumb_url, photo_width, photo_height, title, description, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.photo_url = photo_url;
        this.thumb_url = thumb_url;
        this.photo_width = photo_width;
        this.photo_height = photo_height;
        this.title = title;
        this.description = description;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultPhoto;
}());
exports.default = InlineQueryResultPhoto;
