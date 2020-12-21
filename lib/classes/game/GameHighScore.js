"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one row of the high scores table for a game.
 */
var GameHighScore = /** @class */ (function () {
    function GameHighScore(position, user, score) {
        this.position = position;
        this.user = user;
        this.score = score;
    }
    return GameHighScore;
}());
exports.default = GameHighScore;
