import Message from "../core/Message";
import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 */
export default class InlineQueryResultAudio {
  
  /**
   * Type of the result, must be audio
   */
  type: string;
  
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  
  /**
   * A valid URL for the audio file
   */
  audio_url: string;
  
  /**
   * Title
   */
  title: string;
  
  
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
   * Optional. Performer
   */
  performer?: string;
  
  /**
   * Optional. Audio duration in seconds
   */
  audio_duration?: number;
  
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
    audio_url: string,
    title: string,
    
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    performer?: string,
    audio_duration?: number,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    
  ){
    this.type = type;
    this.id = id;
    this.audio_url = audio_url;
    this.title = title;
    
    this.caption = caption;
    this.parse_mode = parse_mode;
    this.caption_entities = caption_entities;
    this.performer = performer;
    this.audio_duration = audio_duration;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;
    
  }
}
