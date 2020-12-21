
/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 */
export default class PassportElementErrorDataField {
  
  /**
   * Error source, must be data
   */
  source: string;
  
  /**
   * The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
   */
  type: string;
  
  /**
   * Name of the data field which has the error
   */
  field_name: string;
  
  /**
   * Base64-encoded data hash
   */
  data_hash: string;
  
  /**
   * Error message
   */
  message: string;
  
  
  constructor(
    source: string,
    type: string,
    field_name: string,
    data_hash: string,
    message: string,
    
    
  ){
    this.source = source;
    this.type = type;
    this.field_name = field_name;
    this.data_hash = data_hash;
    this.message = message;
    
    
  }
}
