"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 */
var InlineQuery = /** @class */ (function () {
    function InlineQuery(id, from, query, offset, location) {
        this.id = id;
        this.from = from;
        this.query = query;
        this.offset = offset;
        this.location = location;
    }
    return InlineQuery;
}());
exports.default = InlineQuery;
