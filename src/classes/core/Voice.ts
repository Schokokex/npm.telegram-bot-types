
/**
 * This object represents a voice note.
 */
export default class Voice {
  
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  
  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;
  
  
  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;
  
  /**
   * Optional. File size
   */
  file_size?: number;
  
  constructor(
    file_id: string,
    file_unique_id: string,
    duration: number,
    
    mime_type?: string,
    file_size?: number,
    
  ){
    this.file_id = file_id;
    this.file_unique_id = file_unique_id;
    this.duration = duration;
    
    this.mime_type = mime_type;
    this.file_size = file_size;
    
  }
}
