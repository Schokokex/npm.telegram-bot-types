"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 */
var InlineKeyboardButton = /** @class */ (function () {
    function InlineKeyboardButton(text, url, login_url, callback_data, switch_inline_query, switch_inline_query_current_chat, callback_game, pay) {
        this.text = text;
        this.url = url;
        this.login_url = login_url;
        this.callback_data = callback_data;
        this.switch_inline_query = switch_inline_query;
        this.switch_inline_query_current_chat = switch_inline_query_current_chat;
        this.callback_game = callback_game;
        this.pay = pay;
    }
    return InlineKeyboardButton;
}());
exports.default = InlineKeyboardButton;
