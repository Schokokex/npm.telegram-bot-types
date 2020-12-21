/**
 * This object contains information about one answer option in a poll.
 */
export default class PollOption {
    /**
     * Option text, 1-100 characters
     */
    text: string;
    /**
     * Number of users that voted for this option
     */
    voter_count: number;
    constructor(text: string, voter_count: number);
}
