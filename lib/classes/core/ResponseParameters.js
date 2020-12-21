"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains information about why a request was unsuccessful.
 */
var ResponseParameters = /** @class */ (function () {
    function ResponseParameters(migrate_to_chat_id, retry_after) {
        this.migrate_to_chat_id = migrate_to_chat_id;
        this.retry_after = retry_after;
    }
    return ResponseParameters;
}());
exports.default = ResponseParameters;
