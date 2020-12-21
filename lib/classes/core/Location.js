"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a point on the map.
 */
var Location = /** @class */ (function () {
    function Location(longitude, latitude, horizontal_accuracy, live_period, heading, proximity_alert_radius) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.horizontal_accuracy = horizontal_accuracy;
        this.live_period = live_period;
        this.heading = heading;
        this.proximity_alert_radius = proximity_alert_radius;
    }
    return Location;
}());
exports.default = Location;
