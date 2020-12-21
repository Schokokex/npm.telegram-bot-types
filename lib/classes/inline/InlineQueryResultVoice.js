"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 */
var InlineQueryResultVoice = /** @class */ (function () {
    function InlineQueryResultVoice(type, id, voice_url, title, caption, parse_mode, caption_entities, voice_duration, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.voice_url = voice_url;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.voice_duration = voice_duration;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultVoice;
}());
exports.default = InlineQueryResultVoice;
