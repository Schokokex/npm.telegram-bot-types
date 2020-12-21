"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
var InlineQueryResultGif = /** @class */ (function () {
    function InlineQueryResultGif(type, id, gif_url, thumb_url, gif_width, gif_height, gif_duration, thumb_mime_type, title, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.gif_url = gif_url;
        this.thumb_url = thumb_url;
        this.gif_width = gif_width;
        this.gif_height = gif_height;
        this.gif_duration = gif_duration;
        this.thumb_mime_type = thumb_mime_type;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultGif;
}());
exports.default = InlineQueryResultGif;
