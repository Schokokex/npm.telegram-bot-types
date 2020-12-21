import { EncryptedPassportElement } from "../passport/EncryptedPassportElement";
import { EncryptedCredentials } from "../passport/EncryptedCredentials";


/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
export type PassportData = {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: EncryptedPassportElement[];

  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;

}
