import MessageEntity from "../core/MessageEntity";
/**
 * Represents a photo to be sent.
 */
export default class InputMediaPhoto {
    /**
     * Type of the result, must be photo
     */
    type: string;
    /**
     * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files »
     */
    media: string;
    /**
     * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
     */
    caption?: string;
    /**
     * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
     */
    parse_mode?: string;
    /**
     * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
     */
    caption_entities?: MessageEntity[];
    constructor(type: string, media: string, caption?: string, parse_mode?: string, caption_entities?: MessageEntity[]);
}
