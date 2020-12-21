"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains information about one answer option in a poll.
 */
var PollOption = /** @class */ (function () {
    function PollOption(text, voter_count) {
        this.text = text;
        this.voter_count = voter_count;
    }
    return PollOption;
}());
exports.default = PollOption;
