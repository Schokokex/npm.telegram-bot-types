import { PhotoSize } from "../core/PhotoSize";
import { Sticker } from "../stickers/Sticker";


/**
 * This object represents a sticker set.
 */
export type StickerSet = {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title
   */
  title: string;

  /**
   * true, if the sticker set contains animated stickers
   */
  is_animated: boolean;

  /**
   * true, if the sticker set contains masks
   */
  contains_masks: boolean;

  /**
   * List of all set stickers
   */
  stickers: Sticker[];

  /**
   * Optional. Sticker set thumbnail in the .WEBP or .TGS format
   */
  thumb?: PhotoSize;

}
