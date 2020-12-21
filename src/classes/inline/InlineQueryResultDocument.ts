import Message from "../core/Message";
import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 */
export default class InlineQueryResultDocument {
  
  /**
   * Type of the result, must be document
   */
  type: string;
  
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  
  /**
   * Title for the result
   */
  title: string;
  
  /**
   * A valid URL for the file
   */
  document_url: string;
  
  /**
   * Mime type of the content of the file, either “application/pdf” or “application/zip”
   */
  mime_type: string;
  
  
  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;
  
  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: string;
  
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];
  
  /**
   * Optional. Short description of the result
   */
  description?: string;
  
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;
  
  /**
   * Optional. Content of the message to be sent instead of the file
   */
  input_message_content?: InputMessageContent;
  
  /**
   * Optional. URL of the thumbnail (jpeg only) for the file
   */
  thumb_url?: string;
  
  /**
   * Optional. Thumbnail width
   */
  thumb_width?: number;
  
  /**
   * Optional. Thumbnail height
   */
  thumb_height?: number;
  
  constructor(
    type: string,
    id: string,
    title: string,
    document_url: string,
    mime_type: string,
    
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    description?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number,
    
  ){
    this.type = type;
    this.id = id;
    this.title = title;
    this.document_url = document_url;
    this.mime_type = mime_type;
    
    this.caption = caption;
    this.parse_mode = parse_mode;
    this.caption_entities = caption_entities;
    this.description = description;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;
    this.thumb_url = thumb_url;
    this.thumb_width = thumb_width;
    this.thumb_height = thumb_height;
    
  }
}
