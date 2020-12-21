"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
var InlineQueryResultCachedAudio = /** @class */ (function () {
    function InlineQueryResultCachedAudio(type, id, audio_file_id, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.audio_file_id = audio_file_id;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedAudio;
}());
exports.default = InlineQueryResultCachedAudio;
