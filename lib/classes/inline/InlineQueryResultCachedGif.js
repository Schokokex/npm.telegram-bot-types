"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 */
var InlineQueryResultCachedGif = /** @class */ (function () {
    function InlineQueryResultCachedGif(type, id, gif_file_id, title, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.gif_file_id = gif_file_id;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedGif;
}());
exports.default = InlineQueryResultCachedGif;
