"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
var InlineQueryResultCachedPhoto = /** @class */ (function () {
    function InlineQueryResultCachedPhoto(type, id, photo_file_id, title, description, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.photo_file_id = photo_file_id;
        this.title = title;
        this.description = description;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedPhoto;
}());
exports.default = InlineQueryResultCachedPhoto;
