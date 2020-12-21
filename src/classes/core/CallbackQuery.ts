import User from "../core/User";
import Message from "../core/Message";

/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 */
export default class CallbackQuery {
  
  /**
   * Unique identifier for this query
   */
  id: string;
  
  /**
   * Sender
   */
  from: User;
  
  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
   */
  chat_instance: string;
  
  
  /**
   * Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old
   */
  message?: Message;
  
  /**
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string;
  
  /**
   * Optional. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.
   */
  data?: string;
  
  /**
   * Optional. Short name of a Game to be returned, serves as the unique identifier for the game
   */
  game_short_name?: string;
  
  constructor(
    id: string,
    from: User,
    chat_instance: string,
    
    message?: Message,
    inline_message_id?: string,
    data?: string,
    game_short_name?: string,
    
  ){
    this.id = id;
    this.from = from;
    this.chat_instance = chat_instance;
    
    this.message = message;
    this.inline_message_id = inline_message_id;
    this.data = data;
    this.game_short_name = game_short_name;
    
  }
}
