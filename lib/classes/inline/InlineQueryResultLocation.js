"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 */
var InlineQueryResultLocation = /** @class */ (function () {
    function InlineQueryResultLocation(type, id, latitude, longitude, title, horizontal_accuracy, live_period, heading, proximity_alert_radius, reply_markup, input_message_content, thumb_url, thumb_width, thumb_height) {
        this.type = type;
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.horizontal_accuracy = horizontal_accuracy;
        this.live_period = live_period;
        this.heading = heading;
        this.proximity_alert_radius = proximity_alert_radius;
        this.reply_markup = reply_markup;
        this.input_message_content = input_message_content;
        this.thumb_url = thumb_url;
        this.thumb_width = thumb_width;
        this.thumb_height = thumb_height;
    }
    return InlineQueryResultLocation;
}());
exports.default = InlineQueryResultLocation;
