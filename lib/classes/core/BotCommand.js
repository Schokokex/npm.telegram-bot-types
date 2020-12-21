"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a bot command.
 */
var BotCommand = /** @class */ (function () {
    function BotCommand(command, description) {
        this.command = command;
        this.description = description;
    }
    return BotCommand;
}());
exports.default = BotCommand;
