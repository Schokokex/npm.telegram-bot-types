
/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 */
export default class PassportElementErrorTranslationFiles {

  /**
   * Error source, must be translation_files
   */
  source: string;

  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  type: string;

  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];

  /**
   * Error message
   */
  message: string;


  constructor(
    source: string,
    type: string,
    file_hashes: string[],
    message: string,


  ){
    this.source = source;
    this.type = type;
    this.file_hashes = file_hashes;
    this.message = message;


  }
}
