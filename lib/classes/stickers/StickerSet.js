"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a sticker set.
 */
var StickerSet = /** @class */ (function () {
    function StickerSet(name, title, is_animated, contains_masks, stickers, thumb) {
        this.name = name;
        this.title = title;
        this.is_animated = is_animated;
        this.contains_masks = contains_masks;
        this.stickers = stickers;
        this.thumb = thumb;
    }
    return StickerSet;
}());
exports.default = StickerSet;
