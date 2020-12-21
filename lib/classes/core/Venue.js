"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a venue.
 */
var Venue = /** @class */ (function () {
    function Venue(location, title, address, foursquare_id, foursquare_type, google_place_id, google_place_type) {
        this.location = location;
        this.title = title;
        this.address = address;
        this.foursquare_id = foursquare_id;
        this.foursquare_type = foursquare_type;
        this.google_place_id = google_place_id;
        this.google_place_type = google_place_type;
    }
    return Venue;
}());
exports.default = Venue;
