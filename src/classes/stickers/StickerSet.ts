import PhotoSize from "../core/PhotoSize";
import Sticker from "../stickers/Sticker";

/**
 * This object represents a sticker set.
 */
export default class StickerSet {
  
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
  
  constructor(
    name: string,
    title: string,
    is_animated: boolean,
    contains_masks: boolean,
    stickers: Sticker[],
    
    thumb?: PhotoSize,
    
  ){
    this.name = name;
    this.title = title;
    this.is_animated = is_animated;
    this.contains_masks = contains_masks;
    this.stickers = stickers;
    
    this.thumb = thumb;
    
  }
}
