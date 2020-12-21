"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
var InlineQueryResultAudio = /** @class */ (function () {
    function InlineQueryResultAudio(type, id, audio_url, title, caption, parse_mode, caption_entities, performer, audio_duration, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.audio_url = audio_url;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.performer = performer;
        this.audio_duration = audio_duration;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultAudio;
}());
exports.default = InlineQueryResultAudio;
