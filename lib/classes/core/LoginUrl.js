"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
Sample bot: @discussbot

Telegram apps support these buttons as of version 5.7.

  

This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 */
var LoginUrl = /** @class */ (function () {
    function LoginUrl(url, forward_text, bot_username, request_write_access) {
        this.url = url;
        this.forward_text = forward_text;
        this.bot_username = bot_username;
        this.request_write_access = request_write_access;
    }
    return LoginUrl;
}());
exports.default = LoginUrl;
