"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a Telegram user or bot.
 */
var User = /** @class */ (function () {
    function User(id, is_bot, first_name, last_name, username, language_code, can_join_groups, can_read_all_group_messages, supports_inline_queries) {
        this.id = id;
        this.is_bot = is_bot;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.language_code = language_code;
        this.can_join_groups = can_join_groups;
        this.can_read_all_group_messages = can_read_all_group_messages;
        this.supports_inline_queries = supports_inline_queries;
    }
    return User;
}());
exports.default = User;
