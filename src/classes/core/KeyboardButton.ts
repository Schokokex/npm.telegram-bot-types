import KeyboardButtonPollType from "../core/KeyboardButtonPollType";

/**
 * This object represents one button of the reply keyboard. For simple text buttons string can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
 */
export default class KeyboardButton {

  /**
   * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
   */
  text: string;


  /**
   * Optional. If true, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
   */
  request_contact?: boolean;

  /**
   * Optional. If true, the user's current location will be sent when the button is pressed. Available in private chats only
   */
  request_location?: boolean;

  /**
   * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
   */
  request_poll?: KeyboardButtonPollType;

  constructor(
    text: string,

    request_contact?: boolean,
    request_location?: boolean,
    request_poll?: KeyboardButtonPollType,

  ){
    this.text = text;

    this.request_contact = request_contact;
    this.request_location = request_location;
    this.request_poll = request_poll;

  }
}
