
/**
 * Contains information about why a request was unsuccessful.
 */
export default interface ResponseParameters {
  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
   */
  retry_after?: number;

}
