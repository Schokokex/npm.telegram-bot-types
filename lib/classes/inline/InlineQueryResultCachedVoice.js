"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 */
var InlineQueryResultCachedVoice = /** @class */ (function () {
    function InlineQueryResultCachedVoice(type, id, voice_file_id, title, caption, parse_mode, caption_entities, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.voice_file_id = voice_file_id;
        this.title = title;
        this.caption = caption;
        this.parse_mode = parse_mode;
        this.caption_entities = caption_entities;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedVoice;
}());
exports.default = InlineQueryResultCachedVoice;
