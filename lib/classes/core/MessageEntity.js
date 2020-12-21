"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
var MessageEntity = /** @class */ (function () {
    function MessageEntity(type, offset, length, url, user, language) {
        this.type = type;
        this.offset = offset;
        this.length = length;
        this.url = url;
        this.user = user;
        this.language = language;
    }
    return MessageEntity;
}());
exports.default = MessageEntity;
