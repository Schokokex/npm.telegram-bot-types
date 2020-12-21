import InputMessageContent from "./InputMessageContent";

/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
export default class InputContactMessageContent implements InputMessageContent {

  /**
   * Contact's phone number
   */
  phone_number: string;

  /**
   * Contact's first name
   */
  first_name: string;


  /**
   * Optional. Contact's last name
   */
  last_name?: string;

  /**
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;

  constructor(
    phone_number: string,
    first_name: string,

    last_name?: string,
    vcard?: string,

  ){
    this.phone_number = phone_number;
    this.first_name = first_name;

    this.last_name = last_name;
    this.vcard = vcard;

  }
}
