"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a link to an article or web page.
 */
var InlineQueryResultArticle = /** @class */ (function () {
    function InlineQueryResultArticle(type, id, title, input_message_content, reply_markup, url, hide_url, description, thumb_url, thumb_width, thumb_height) {
        this.type = type;
        this.id = id;
        this.title = title;
        this.input_message_content = input_message_content;
        this.reply_markup = reply_markup;
        this.url = url;
        this.hide_url = hide_url;
        this.description = description;
        this.thumb_url = thumb_url;
        this.thumb_width = thumb_width;
        this.thumb_height = thumb_height;
    }
    return InlineQueryResultArticle;
}());
exports.default = InlineQueryResultArticle;
