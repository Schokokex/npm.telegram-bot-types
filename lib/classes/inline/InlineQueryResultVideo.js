"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
var InlineQueryResultVideo = /** @class */ (function () {
    function InlineQueryResultVideo(type, id, video_url, mime_type, thumb_url, title, caption, parse_mode, caption_entities, video_width, video_height, video_duration, description, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.video_url = video_url;
        this.mime_type = mime_type;
        this.thumb_url = thumb_url;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.video_width = video_width;
        this.video_height = video_height;
        this.video_duration = video_duration;
        this.description = description;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultVideo;
}());
exports.default = InlineQueryResultVideo;
