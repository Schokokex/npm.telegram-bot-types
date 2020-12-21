import User from "../core/User";

/**
 * This object contains information about one member of a chat.
 */
export default class ChatMember {

  /**
   * Information about the user
   */
  user: User;

  /**
   * The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
   */
  status: string;


  /**
   * Optional. Owner and administrators only. Custom title for this user
   */
  custom_title?: string;

  /**
   * Optional. Owner and administrators only. true, if the user's presence in the chat is hidden
   */
  is_anonymous?: boolean;

  /**
   * Optional. Administrators only. true, if the bot is allowed to edit administrator privileges of that user
   */
  can_be_edited?: boolean;

  /**
   * Optional. Administrators only. true, if the administrator can post in the channel; channels only
   */
  can_post_messages?: boolean;

  /**
   * Optional. Administrators only. true, if the administrator can edit messages of other users and can pin messages; channels only
   */
  can_edit_messages?: boolean;

  /**
   * Optional. Administrators only. true, if the administrator can delete messages of other users
   */
  can_delete_messages?: boolean;

  /**
   * Optional. Administrators only. true, if the administrator can restrict, ban or unban chat members
   */
  can_restrict_members?: boolean;

  /**
   * Optional. Administrators only. true, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
   */
  can_promote_members?: boolean;

  /**
   * Optional. Administrators and restricted only. true, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info?: boolean;

  /**
   * Optional. Administrators and restricted only. true, if the user is allowed to invite new users to the chat
   */
  can_invite_users?: boolean;

  /**
   * Optional. Administrators and restricted only. true, if the user is allowed to pin messages; groups and supergroups only
   */
  can_pin_messages?: boolean;

  /**
   * Optional. Restricted only. true, if the user is a member of the chat at the moment of the request
   */
  is_member?: boolean;

  /**
   * Optional. Restricted only. true, if the user is allowed to send text messages, contacts, locations and venues
   */
  can_send_messages?: boolean;

  /**
   * Optional. Restricted only. true, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
   */
  can_send_media_messages?: boolean;

  /**
   * Optional. Restricted only. true, if the user is allowed to send polls
   */
  can_send_polls?: boolean;

  /**
   * Optional. Restricted only. true, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages?: boolean;

  /**
   * Optional. Restricted only. true, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews?: boolean;

  /**
   * Optional. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time
   */
  until_date?: number;

  constructor(
    user: User,
    status: string,

    custom_title?: string,
    is_anonymous?: boolean,
    can_be_edited?: boolean,
    can_post_messages?: boolean,
    can_edit_messages?: boolean,
    can_delete_messages?: boolean,
    can_restrict_members?: boolean,
    can_promote_members?: boolean,
    can_change_info?: boolean,
    can_invite_users?: boolean,
    can_pin_messages?: boolean,
    is_member?: boolean,
    can_send_messages?: boolean,
    can_send_media_messages?: boolean,
    can_send_polls?: boolean,
    can_send_other_messages?: boolean,
    can_add_web_page_previews?: boolean,
    until_date?: number,

  ){
    this.user = user;
    this.status = status;

    this.custom_title = custom_title;
    this.is_anonymous = is_anonymous;
    this.can_be_edited = can_be_edited;
    this.can_post_messages = can_post_messages;
    this.can_edit_messages = can_edit_messages;
    this.can_delete_messages = can_delete_messages;
    this.can_restrict_members = can_restrict_members;
    this.can_promote_members = can_promote_members;
    this.can_change_info = can_change_info;
    this.can_invite_users = can_invite_users;
    this.can_pin_messages = can_pin_messages;
    this.is_member = is_member;
    this.can_send_messages = can_send_messages;
    this.can_send_media_messages = can_send_media_messages;
    this.can_send_polls = can_send_polls;
    this.can_send_other_messages = can_send_other_messages;
    this.can_add_web_page_previews = can_add_web_page_previews;
    this.until_date = until_date;

  }
}
