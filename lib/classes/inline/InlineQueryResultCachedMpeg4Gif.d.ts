import MessageEntity from "../core/MessageEntity";
import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
export default class InlineQueryResultCachedMpeg4Gif {
    /**
     * Type of the result, must be mpeg4_gif
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;
    /**
     * A valid file identifier for the MP4 file
     */
    mpeg4_file_id: string;
    /**
     * Optional. Title for the result
     */
    title?: string;
    /**
     * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
     */
    caption?: string;
    /**
     * Optional. Mode for parsing entities in the caption. See formatting options for more details.
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
     * Optional. Content of the message to be sent instead of the video animation
     */
    input_message_content?: InputMessageContent;
    constructor(type: string, id: string, mpeg4_file_id: string, title?: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[], reply_markup?: InlineKeyboardMarkup, input_message_content?: InputMessageContent);
}
