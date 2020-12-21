"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents an incoming update.At most one of the optional parameters can be present in any given update.
 */
var Update = /** @class */ (function () {
    function Update(update_id, message, edited_message, channel_post, edited_channel_post, inline_query, chosen_inline_result, callback_query, shipping_query, pre_checkout_query, poll, poll_answer) {
        this.update_id = update_id;
        this.message = message;
        this.edited_message = edited_message;
        this.channel_post = channel_post;
        this.edited_channel_post = edited_channel_post;
        this.inline_query = inline_query;
        this.chosen_inline_result = chosen_inline_result;
        this.callback_query = callback_query;
        this.shipping_query = shipping_query;
        this.pre_checkout_query = pre_checkout_query;
        this.poll = poll;
        this.poll_answer = poll_answer;
    }
    return Update;
}());
exports.default = Update;
