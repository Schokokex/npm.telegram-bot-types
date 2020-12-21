"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a Game.
 */
var InlineQueryResultGame = /** @class */ (function () {
    function InlineQueryResultGame(type, id, game_short_name, reply_markup) {
        this.type = type;
        this.id = id;
        this.game_short_name = game_short_name;
        this.reply_markup = reply_markup;
    }
    return InlineQueryResultGame;
}());
exports.default = InlineQueryResultGame;
