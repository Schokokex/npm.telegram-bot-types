"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 */
var ChosenInlineResult = /** @class */ (function () {
    function ChosenInlineResult(result_id, from, query, location, inline_message_id) {
        this.result_id = result_id;
        this.from = from;
        this.query = query;
        this.location = location;
        this.inline_message_id = inline_message_id;
    }
    return ChosenInlineResult;
}());
exports.default = ChosenInlineResult;
