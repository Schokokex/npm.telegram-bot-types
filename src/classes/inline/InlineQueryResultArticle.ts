import Message from "../core/Message";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an article or web page.
 */
export default class InlineQueryResultArticle {
  
  /**
   * Type of the result, must be article
   */
  type: string;
  
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  
  /**
   * Title of the result
   */
  title: string;
  
  /**
   * Content of the message to be sent
   */
  input_message_content: InputMessageContent;
  
  
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;
  
  /**
   * Optional. URL of the result
   */
  url?: string;
  
  /**
   * Optional. Pass true, if you don't want the URL to be shown in the message
   */
  hide_url?: boolean;
  
  /**
   * Optional. Short description of the result
   */
  description?: string;
  
  /**
   * Optional. Url of the thumbnail for the result
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
    input_message_content: InputMessageContent,
    
    reply_markup?: InlineKeyboardMarkup,
    url?: string,
    hide_url?: boolean,
    description?: string,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number,
    
  ){
    this.type = type;
    this.id = id;
    this.title = title;
    this.input_message_content = input_message_content;
    
    this.reply_markup = reply_markup;
    this.url = url;
    this.hide_url = hide_url;
    this.description = description;
    this.thumb_url = thumb_url;
    this.thumb_width = thumb_width;
    this.thumb_height = thumb_height;
    
  }
}
