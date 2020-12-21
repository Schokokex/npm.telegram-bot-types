"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a sticker.
 */
var Sticker = /** @class */ (function () {
    function Sticker(file_id, file_unique_id, width, height, is_animated, thumb, emoji, set_name, mask_position, file_size) {
        this.file_id = file_id;
        this.file_unique_id = file_unique_id;
        this.width = width;
        this.height = height;
        this.is_animated = is_animated;
        this.thumb = thumb;
        this.emoji = emoji;
        this.set_name = set_name;
        this.mask_position = mask_position;
        this.file_size = file_size;
    }
    return Sticker;
}());
exports.default = Sticker;
