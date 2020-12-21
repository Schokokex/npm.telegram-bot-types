"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
 */
var ReplyKeyboardMarkup = /** @class */ (function () {
    function ReplyKeyboardMarkup(keyboard, resize_keyboard, one_time_keyboard, selective) {
        this.keyboard = keyboard;
        this.resize_keyboard = resize_keyboard;
        this.one_time_keyboard = one_time_keyboard;
        this.selective = selective;
    }
    return ReplyKeyboardMarkup;
}());
exports.default = ReplyKeyboardMarkup;
