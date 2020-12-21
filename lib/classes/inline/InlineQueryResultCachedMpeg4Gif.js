"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
var InlineQueryResultCachedMpeg4Gif = /** @class */ (function () {
    function InlineQueryResultCachedMpeg4Gif(type, id, mpeg4_file_id, title, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.mpeg4_file_id = mpeg4_file_id;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedMpeg4Gif;
}());
exports.default = InlineQueryResultCachedMpeg4Gif;
