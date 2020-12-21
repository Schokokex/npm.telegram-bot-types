"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one button of the reply keyboard. For simple text buttons string can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
 */
var KeyboardButton = /** @class */ (function () {
    function KeyboardButton(text, request_contact, request_location, request_poll) {
        this.text = text;
        this.request_contact = request_contact;
        this.request_location = request_location;
        this.request_poll = request_poll;
    }
    return KeyboardButton;
}());
exports.default = KeyboardButton;
