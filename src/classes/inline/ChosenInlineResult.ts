import User from "../core/User";
import Location from "../core/Location";

/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 */
export default class ChosenInlineResult {
  
  /**
   * The unique identifier for the result that was chosen
   */
  result_id: string;
  
  /**
   * The user that chose the result
   */
  from: User;
  
  /**
   * The query that was used to obtain the result
   */
  query: string;
  
  
  /**
   * Optional. Sender location, only for bots that require user location
   */
  location?: Location;
  
  /**
   * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
   */
  inline_message_id?: string;
  
  constructor(
    result_id: string,
    from: User,
    query: string,
    
    location?: Location,
    inline_message_id?: string,
    
  ){
    this.result_id = result_id;
    this.from = from;
    this.query = query;
    
    this.location = location;
    this.inline_message_id = inline_message_id;
    
  }
}
