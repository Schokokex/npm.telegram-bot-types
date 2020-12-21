"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 */
var InlineQueryResultCachedDocument = /** @class */ (function () {
    function InlineQueryResultCachedDocument(type, id, title, document_file_id, description, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.title = title;
        this.document_file_id = document_file_id;
        this.description = description;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedDocument;
}());
exports.default = InlineQueryResultCachedDocument;
