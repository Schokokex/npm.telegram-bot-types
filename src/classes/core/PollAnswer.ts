import User from "../core/User";

/**
 * This object represents an answer of a user in a non-anonymous poll.
 */
export default class PollAnswer {

  /**
   * Unique poll identifier
   */
  poll_id: string;

  /**
   * The user, who changed the answer to the poll
   */
  user: User;

  /**
   * 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.
   */
  option_ids: number[];


  constructor(
    poll_id: string,
    user: User,
    option_ids: number[],


  ){
    this.poll_id = poll_id;
    this.user = user;
    this.option_ids = option_ids;


  }
}
