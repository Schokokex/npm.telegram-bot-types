import EncryptedPassportElement from "../passport/EncryptedPassportElement";
import EncryptedCredentials from "../passport/EncryptedCredentials";

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
export default class PassportData {
  
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: EncryptedPassportElement[];
  
  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;
  
  
  constructor(
    data: EncryptedPassportElement[],
    credentials: EncryptedCredentials,
    
    
  ){
    this.data = data;
    this.credentials = credentials;
    
    
  }
}
