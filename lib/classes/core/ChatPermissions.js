"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */
var ChatPermissions = /** @class */ (function () {
    function ChatPermissions(can_send_messages, can_send_media_messages, can_send_polls, can_send_other_messages, can_add_web_page_previews, can_change_info, can_invite_users, can_pin_messages) {
        this.can_send_messages = can_send_messages;
        this.can_send_media_messages = can_send_media_messages;
        this.can_send_polls = can_send_polls;
        this.can_send_other_messages = can_send_other_messages;
        this.can_add_web_page_previews = can_add_web_page_previews;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_pin_messages = can_pin_messages;
    }
    return ChatPermissions;
}());
exports.default = ChatPermissions;
