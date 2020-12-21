"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a chat photo.
 */
var ChatPhoto = /** @class */ (function () {
    function ChatPhoto(small_file_id, small_file_unique_id, big_file_id, big_file_unique_id) {
        this.small_file_id = small_file_id;
        this.small_file_unique_id = small_file_unique_id;
        this.big_file_id = big_file_id;
        this.big_file_unique_id = big_file_unique_id;
    }
    return ChatPhoto;
}());
exports.default = ChatPhoto;
