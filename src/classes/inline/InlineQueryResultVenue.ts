import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 */
export default class InlineQueryResultVenue {

  /**
   * Type of the result, must be venue
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Latitude of the venue location in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue location in degrees
   */
  longitude: number;

  /**
   * Title of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;


  /**
   * Optional. Foursquare identifier of the venue if known
   */
  foursquare_id?: string;

  /**
   * Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type?: string;

  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_id?: string;

  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the venue
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
    latitude: number,
    longitude: number,
    title: string,
    address: string,

    foursquare_id?: string,
    foursquare_type?: string,
    google_place_id?: string,
    google_place_type?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number,

  ){
    this.type = type;
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.title = title;
    this.address = address;

    this.foursquare_id = foursquare_id;
    this.foursquare_type = foursquare_type;
    this.google_place_id = google_place_id;
    this.google_place_type = google_place_type;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;
    this.thumb_url = thumb_url;
    this.thumb_width = thumb_width;
    this.thumb_height = thumb_height;

  }
}
