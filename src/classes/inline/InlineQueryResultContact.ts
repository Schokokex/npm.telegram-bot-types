import Message from "../core/Message";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 */
export default class InlineQueryResultContact {
  
  /**
   * Type of the result, must be contact
   */
  type: string;
  
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  
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
  
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;
  
  /**
   * Optional. Content of the message to be sent instead of the contact
   */
  input_message_content?: InputMessageContent;
  
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
    phone_number: string,
    first_name: string,
    
    last_name?: string,
    vcard?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number,
    
  ){
    this.type = type;
    this.id = id;
    this.phone_number = phone_number;
    this.first_name = first_name;
    
    this.last_name = last_name;
    this.vcard = vcard;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;
    this.thumb_url = thumb_url;
    this.thumb_width = thumb_width;
    this.thumb_height = thumb_height;
    
  }
}
