import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
export default class InlineQueryResultCachedAudio {

  /**
   * Type of the result, must be audio
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the audio file
   */
  audio_file_id: string;


  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the audio
   */
  input_message_content?: InputMessageContent;

  constructor(
    type: string,
    id: string,
    audio_file_id: string,

    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,

  ){
    this.type = type;
    this.id = id;
    this.audio_file_id = audio_file_id;

    this.caption = caption;
    this.parse_mode = parse_mode;
    this.caption_entities = caption_entities;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;

  }
}
