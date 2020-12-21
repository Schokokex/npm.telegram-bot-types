"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 */
var Game = /** @class */ (function () {
    function Game(title, description, photo, text, text_entities, animation) {
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.text = text;
        this.text_entities = text_entities;
        this.animation = animation;
    }
    return Game;
}());
exports.default = Game;
