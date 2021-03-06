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
    constructor(type: string, id: string, title: string, input_message_content: InputMessageContent, reply_markup?: InlineKeyboardMarkup, url?: string, hide_url?: boolean, description?: string, thumb_url?: string, thumb_width?: number, thumb_height?: number);
}
