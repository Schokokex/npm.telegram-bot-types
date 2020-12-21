"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a chat.
 */
var Chat = /** @class */ (function () {
    function Chat(id, type, title, username, first_name, last_name, photo, bio, description, invite_link, pinned_message, permissions, slow_mode_delay, sticker_set_name, can_set_sticker_set, linked_chat_id, location) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.photo = photo;
        this.bio = bio;
        this.description = description;
        this.invite_link = invite_link;
        this.pinned_message = pinned_message;
        this.permissions = permissions;
        this.slow_mode_delay = slow_mode_delay;
        this.sticker_set_name = sticker_set_name;
        this.can_set_sticker_set = can_set_sticker_set;
        this.linked_chat_id = linked_chat_id;
        this.location = location;
    }
    return Chat;
}());
exports.default = Chat;
