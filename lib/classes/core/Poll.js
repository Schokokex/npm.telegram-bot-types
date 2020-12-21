"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains information about a poll.
 */
var Poll = /** @class */ (function () {
    function Poll(id, question, options, total_voter_count, is_closed, is_anonymous, type, allows_multiple_answers, correct_option_id, explanation, explanation_entities, open_period, close_date) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.total_voter_count = total_voter_count;
        this.is_closed = is_closed;
        this.is_anonymous = is_anonymous;
        this.type = type;
        this.allows_multiple_answers = allows_multiple_answers;
        this.correct_option_id = correct_option_id;
        this.explanation = explanation;
        this.explanation_entities = explanation_entities;
        this.open_period = open_period;
        this.close_date = close_date;
    }
    return Poll;
}());
exports.default = Poll;
