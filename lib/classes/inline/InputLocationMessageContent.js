"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
var InputLocationMessageContent = /** @class */ (function () {
    function InputLocationMessageContent(latitude, longitude, horizontal_accuracy, live_period, heading, proximity_alert_radius) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.horizontal_accuracy = horizontal_accuracy;
        this.live_period = live_period;
        this.heading = heading;
        this.proximity_alert_radius = proximity_alert_radius;
    }
    return InputLocationMessageContent;
}());
exports.default = InputLocationMessageContent;
