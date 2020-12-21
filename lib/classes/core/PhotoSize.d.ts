/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 */
export default class PhotoSize {
    /**
     * Identifier for this file, which can be used to download or reuse the file
     */
    file_id: string;
    /**
     * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
     */
    file_unique_id: string;
    /**
     * Photo width
     */
    width: number;
    /**
     * Photo height
     */
    height: number;
    /**
     * Optional. File size
     */
    file_size?: number;
    constructor(file_id: string, file_unique_id: string, width: number, height: number, file_size?: number);
}
