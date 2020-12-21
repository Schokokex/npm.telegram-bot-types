
/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 */
export default class PassportElementErrorFrontSide {
  
  /**
   * Error source, must be front_side
   */
  source: string;
  
  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
   */
  type: string;
  
  /**
   * Base64-encoded hash of the file with the front side of the document
   */
  file_hash: string;
  
  /**
   * Error message
   */
  message: string;
  
  
  constructor(
    source: string,
    type: string,
    file_hash: string,
    message: string,
    
    
  ){
    this.source = source;
    this.type = type;
    this.file_hash = file_hash;
    this.message = message;
    
    
  }
}
