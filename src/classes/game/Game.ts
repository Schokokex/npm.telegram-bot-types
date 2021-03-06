import MessageEntity from "../core/MessageEntity";
import PhotoSize from "../core/PhotoSize";
import Animation from "../core/Animation";

/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 */
export default class Game {

  /**
   * Title of the game
   */
  title: string;

  /**
   * Description of the game
   */
  description: string;

  /**
   * Photo that will be displayed in the game message in chats.
   */
  photo: PhotoSize[];


  /**
   * Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
   */
  text?: string;

  /**
   * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   */
  text_entities?: MessageEntity[];

  /**
   * Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
   */
  animation?: Animation;

  constructor(
    title: string,
    description: string,
    photo: PhotoSize[],

    text?: string,
    text_entities?: MessageEntity[],
    animation?: Animation,

  ){
    this.title = title;
    this.description = description;
    this.photo = photo;

    this.text = text;
    this.text_entities = text_entities;
    this.animation = animation;

  }
}
