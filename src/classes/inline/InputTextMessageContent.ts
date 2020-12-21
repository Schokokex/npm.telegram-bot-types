import InputMessageContent from "./InputMessageContent";
import MessageEntity from "../core/MessageEntity";

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
export default class InputTextMessageContent implements InputMessageContent {

  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;


  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: MessageEntity[];

  /**
   * Optional. Disables link previews for links in the sent message
   */
  disable_web_page_preview?: boolean;

  constructor(
    message_text: string,

    parse_mode?: string,
    entities?: MessageEntity[],
    disable_web_page_preview?: boolean,

  ){
    this.message_text = message_text;

    this.parse_mode = parse_mode;
    this.entities = entities;
    this.disable_web_page_preview = disable_web_page_preview;

  }
}
