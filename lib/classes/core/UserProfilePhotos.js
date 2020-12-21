"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represent a user's profile pictures.
 */
var UserProfilePhotos = /** @class */ (function () {
    function UserProfilePhotos(total_count, photos) {
        this.total_count = total_count;
        this.photos = photos;
    }
    return UserProfilePhotos;
}());
exports.default = UserProfilePhotos;
