"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 */
var InlineQueryResultVenue = /** @class */ (function () {
    function InlineQueryResultVenue(type, id, latitude, longitude, title, address, foursquare_id, foursquare_type, google_place_id, google_place_type, reply_markup, input_message_content, thumb_url, thumb_width, thumb_height) {
        this.type = type;
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.address = address;
        this.foursquare_id = foursquare_id;
        this.foursquare_type = foursquare_type;
        this.google_place_id = google_place_id;
        this.google_place_type = google_place_type;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
        this.thumb_url = thumb_url;
        this.thumb_width = thumb_width;
        this.thumb_height = thumb_height;
    }
    return InlineQueryResultVenue;
}());
exports.default = InlineQueryResultVenue;
