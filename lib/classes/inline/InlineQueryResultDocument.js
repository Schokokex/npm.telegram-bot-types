"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 */
var InlineQueryResultDocument = /** @class */ (function () {
    function InlineQueryResultDocument(type, id, title, document_url, mime_type, caption, parse_mode, caption_entities, description, reply_markup, input_message_content, thumb_url, thumb_width, thumb_height) {
        this.type = type;
        this.id = id;
        this.title = title;
        this.document_url = document_url;
        this.mime_type = mime_type;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.description = description;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
        this.thumb_url = thumb_url;
        this.thumb_width = thumb_width;
        this.thumb_height = thumb_height;
    }
    return InlineQueryResultDocument;
}());
exports.default = InlineQueryResultDocument;
