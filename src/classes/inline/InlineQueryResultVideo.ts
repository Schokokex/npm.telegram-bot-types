import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 *
 * If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.
 *
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
export default class InlineQueryResultVideo {
  /**
   * Type of the result, must be video
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the embedded video player or video file
   */
  video_url: string;

  /**
   * Mime type of the content of video url, “text/html” or “video/mp4”
   */
  mime_type: string;

  /**
   * URL of the thumbnail (jpeg only) for the video
   */
  thumb_url: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: MessageEntity[];

  /**
   * Optional. Video width
   */
  video_width?: number;

  /**
   * Optional. Video height
   */
  video_height?: number;

  /**
   * Optional. Video duration in seconds
   */
  video_duration?: number;

  /**
   * Optional. Short description of the result
   */
  description?: string;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
   */
  input_message_content?: InputMessageContent;

  constructor(
    type: string,
    id: string,
    video_url: string,
    mime_type: string,
    thumb_url: string,
    title: string,

    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    video_width?: number,
    video_height?: number,
    video_duration?: number,
    description?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
  ) {
    this.type = type;
    this.id = id;
    this.video_url = video_url;
    this.mime_type = mime_type;
    this.thumb_url = thumb_url;
    this.title = title;

    this.caption = caption;
    this.parse_mode = parse_mode;
    this.caption_entities = caption_entities;
    this.video_width = video_width;
    this.video_height = video_height;
    this.video_duration = video_duration;
    this.description = description;
    this.reply_markup = reply_markup;
    this.input_message_content = input_message_content;
  }
}
