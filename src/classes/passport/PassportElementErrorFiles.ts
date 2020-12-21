
/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
export default class PassportElementErrorFiles {

  /**
   * Error source, must be files
   */
  source: string;

  /**
   * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
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
