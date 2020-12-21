import PhotoSize from "../core/PhotoSize";
import MaskPosition from "../stickers/MaskPosition";

/**
 * This object represents a sticker.
 */
export default class Sticker {
  
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  
  /**
   * Sticker width
   */
  width: number;
  
  /**
   * Sticker height
   */
  height: number;
  
  /**
   * true, if the sticker is animated
   */
  is_animated: boolean;
  
  
  /**
   * Optional. Sticker thumbnail in the .WEBP or .JPG format
   */
  thumb?: PhotoSize;
  
  /**
   * Optional. Emoji associated with the sticker
   */
  emoji?: string;
  
  /**
   * Optional. Name of the sticker set to which the sticker belongs
   */
  set_name?: string;
  
  /**
   * Optional. For mask stickers, the position where the mask should be placed
   */
  mask_position?: MaskPosition;
  
  /**
   * Optional. File size
   */
  file_size?: number;
  
  constructor(
    file_id: string,
    file_unique_id: string,
    width: number,
    height: number,
    is_animated: boolean,
    
    thumb?: PhotoSize,
    emoji?: string,
    set_name?: string,
    mask_position?: MaskPosition,
    file_size?: number,
    
  ){
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
}