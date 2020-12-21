"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents an answer of a user in a non-anonymous poll.
 */
var PollAnswer = /** @class */ (function () {
    function PollAnswer(poll_id, user, option_ids) {
        this.poll_id = poll_id;
        this.user = user;
        this.option_ids = option_ids;
    }
    return PollAnswer;
}());
exports.default = PollAnswer;
