import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";
/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 */
export default class InlineQueryResultCachedVideo {
    /**
     * Type of the result, must be video
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;
    /**
     * A valid file identifier for the video file
     */
    video_file_id: string;
    /**
     * Title for the result
     */
    title: string;
    /**
     * Optional. Short description of the result
     */
    description?: string;
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
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;
    /**
     * Optional. Content of the message to be sent instead of the video
     */
    input_message_content?: InputMessageContent;
    constructor(type: string, id: string, video_file_id: string, title: string, description?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: InputMessageContent);
}
