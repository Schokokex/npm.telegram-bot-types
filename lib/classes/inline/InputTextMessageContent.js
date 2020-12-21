"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the content of a text message to be sent as the result of an inline query.
 */
var InputTextMessageContent = /** @class */ (function () {
    function InputTextMessageContent(message_text, parse_mode, entities, disable_web_page_preview) {
        this.message_text = message_text;
        this.parse_mode = parse_mode;
        this.entities = entities;
        this.disable_web_page_preview = disable_web_page_preview;
    }
    return InputTextMessageContent;
}());
exports.default = InputTextMessageContent;
