"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains information about one member of a chat.
 */
var ChatMember = /** @class */ (function () {
    function ChatMember(user, status, custom_title, is_anonymous, can_be_edited, can_post_messages, can_edit_messages, can_delete_messages, can_restrict_members, can_promote_members, can_change_info, can_invite_users, can_pin_messages, is_member, can_send_messages, can_send_media_messages, can_send_polls, can_send_other_messages, can_add_web_page_previews, until_date) {
        this.user = user;
        this.status = status;
        this.custom_title = custom_title;
        this.is_anonymous = is_anonymous;
        this.can_be_edited = can_be_edited;
        this.can_post_messages = can_post_messages;
        this.can_edit_messages = can_edit_messages;
        this.can_delete_messages = can_delete_messages;
        this.can_restrict_members = can_restrict_members;
        this.can_promote_members = can_promote_members;
        this.can_change_info = can_change_info;
        this.can_invite_users = can_invite_users;
        this.can_pin_messages = can_pin_messages;
        this.is_member = is_member;
        this.can_send_messages = can_send_messages;
        this.can_send_media_messages = can_send_media_messages;
        this.can_send_polls = can_send_polls;
        this.can_send_other_messages = can_send_other_messages;
        this.can_add_web_page_previews = can_add_web_page_previews;
        this.until_date = until_date;
    }
    return ChatMember;
}());
exports.default = ChatMember;
