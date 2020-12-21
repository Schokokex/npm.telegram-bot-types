"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 */
var ForceReply = /** @class */ (function () {
    function ForceReply(force_reply, selective) {
        this.force_reply = force_reply;
        this.selective = selective;
    }
    return ForceReply;
}());
exports.default = ForceReply;
