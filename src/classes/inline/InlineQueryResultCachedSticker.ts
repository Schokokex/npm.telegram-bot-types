import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 */
export default class InlineQueryResultCachedSticker {

  /**
   * Type of the result, must be sticker
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier of the sticker
   */
  sticker_file_id: string;


  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the sticker
   */
  input_message_content?: InputMessageContent;

  constructor(
    type: string,
    id: string,
    sticker_file_id: string,

    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,

  ){
    this.type = type;
    this.id = id;
    this.sticker_file_id = sticker_file_id;

    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;

  }
}
