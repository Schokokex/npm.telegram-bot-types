"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 */
var InlineQueryResultCachedSticker = /** @class */ (function () {
    function InlineQueryResultCachedSticker(type, id, sticker_file_id, reply_markup, input_message_content) {
        this.type = type;
        this.id = id;
        this.sticker_file_id = sticker_file_id;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
    }
    return InlineQueryResultCachedSticker;
}());
exports.default = InlineQueryResultCachedSticker;
