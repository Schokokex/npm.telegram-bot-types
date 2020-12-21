"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
var InlineQueryResultMpeg4Gif = /** @class */ (function () {
    function InlineQueryResultMpeg4Gif(type, id, mpeg4_url, thumb_url, mpeg4_width, mpeg4_height, mpeg4_duration, thumb_mime_type, title, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.mpeg4_url = mpeg4_url;
        this.thumb_url = thumb_url;
        this.mpeg4_width = mpeg4_width;
        this.mpeg4_height = mpeg4_height;
        this.mpeg4_duration = mpeg4_duration;
        this.thumb_mime_type = thumb_mime_type;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultMpeg4Gif;
}());
exports.default = InlineQueryResultMpeg4Gif;
