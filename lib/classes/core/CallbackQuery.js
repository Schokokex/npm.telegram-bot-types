"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 */
var CallbackQuery = /** @class */ (function () {
    function CallbackQuery(id, from, chat_instance, message, inline_message_id, data, game_short_name) {
        this.id = id;
        this.from = from;
        this.chat_instance = chat_instance;
        this.message = message;
        this.inline_message_id = inline_message_id;
        this.data = data;
        this.game_short_name = game_short_name;
    }
    return CallbackQuery;
}());
exports.default = CallbackQuery;
