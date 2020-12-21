import PhotoSize from "../core/PhotoSize";

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 */
export default class VideoNote {
  
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  
  /**
   * Video width and height (diameter of the video message) as defined by sender
   */
  length: number;
  
  /**
   * Duration of the video in seconds as defined by sender
   */
  duration: number;
  
  
  /**
   * Optional. Video thumbnail
   */
  thumb?: PhotoSize;
  
  /**
   * Optional. File size
   */
  file_size?: number;
  
  constructor(
    file_id: string,
    file_unique_id: string,
    length: number,
    duration: number,
    
    thumb?: PhotoSize,
    file_size?: number,
    
  ){
    this.file_id = file_id;
    this.file_unique_id = file_unique_id;
    this.length = length;
    this.duration = duration;
    
    this.thumb = thumb;
    this.file_size = file_size;
    
  }
}
