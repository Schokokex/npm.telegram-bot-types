import User from "../core/User";
import Location from "../core/Location";

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 */
export default class InlineQuery {

  /**
   * Unique identifier for this query
   */
  id: string;

  /**
   * Sender
   */
  from: User;

  /**
   * Text of the query (up to 256 characters)
   */
  query: string;

  /**
   * Offset of the results to be returned, can be controlled by the bot
   */
  offset: string;


  /**
   * Optional. Sender location, only for bots that request user location
   */
  location?: Location;

  constructor(
    id: string,
    from: User,
    query: string,
    offset: string,

    location?: Location,

  ){
    this.id = id;
    this.from = from;
    this.query = query;
    this.offset = offset;

    this.location = location;

  }
}
