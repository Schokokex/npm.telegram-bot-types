"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 */
var InlineQueryResultContact = /** @class */ (function () {
    function InlineQueryResultContact(type, id, phone_number, first_name, last_name, vcard, reply_markup, input_message_content, thumb_url, thumb_width, thumb_height) {
        this.type = type;
        this.id = id;
        this.phone_number = phone_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.vcard = vcard;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
        this.thumb_url = thumb_url;
        this.thumb_width = thumb_width;
        this.thumb_height = thumb_height;
    }
    return InlineQueryResultContact;
}());
exports.default = InlineQueryResultContact;
