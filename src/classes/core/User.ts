
/**
 * This object represents a Telegram user or bot.
 */
export default class User {

  /**
   * Unique identifier for this user or bot
   */
  id: number;

  /**
   * true, if this user is a bot
   */
  is_bot: boolean;

  /**
   * User's or bot's first name
   */
  first_name: string;


  /**
   * Optional. User's or bot's last name
   */
  last_name?: string;

  /**
   * Optional. User's or bot's username
   */
  username?: string;

  /**
   * Optional. IETF language tag of the user's language
   */
  language_code?: string;

  /**
   * Optional. true, if the bot can be invited to groups. Returned only in getMe.
   */
  can_join_groups?: boolean;

  /**
   * Optional. true, if privacy mode is disabled for the bot. Returned only in getMe.
   */
  can_read_all_group_messages?: boolean;

  /**
   * Optional. true, if the bot supports inline queries. Returned only in getMe.
   */
  supports_inline_queries?: boolean;

  constructor(
    id: number,
    is_bot: boolean,
    first_name: string,

    last_name?: string,
    username?: string,
    language_code?: string,
    can_join_groups?: boolean,
    can_read_all_group_messages?: boolean,
    supports_inline_queries?: boolean,

  ){
    this.id = id;
    this.is_bot = is_bot;
    this.first_name = first_name;

    this.last_name = last_name;
    this.username = username;
    this.language_code = language_code;
    this.can_join_groups = can_join_groups;
    this.can_read_all_group_messages = can_read_all_group_messages;
    this.supports_inline_queries = supports_inline_queries;

  }
}
