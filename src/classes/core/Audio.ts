import PhotoSize from "../core/PhotoSize";

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export default class Audio {

  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;


  /**
   * Optional. Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;

  /**
   * Optional. Title of the audio as defined by sender or by audio tags
   */
  title?: string;

  /**
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

  /**
   * Optional. Thumbnail of the album cover to which the music file belongs
   */
  thumb?: PhotoSize;

  constructor(
    file_id: string,
    file_unique_id: string,
    duration: number,

    performer?: string,
    title?: string,
    file_name?: string,
    mime_type?: string,
    file_size?: number,
    thumb?: PhotoSize,

  ){
    this.file_id = file_id;
    this.file_unique_id = file_unique_id;
    this.duration = duration;

    this.performer = performer;
    this.title = title;
    this.file_name = file_name;
    this.mime_type = mime_type;
    this.file_size = file_size;
    this.thumb = thumb;

  }
}
