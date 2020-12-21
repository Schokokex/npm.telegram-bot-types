"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
var InputVenueMessageContent = /** @class */ (function () {
    function InputVenueMessageContent(latitude, longitude, title, address, foursquare_id, foursquare_type, google_place_id, google_place_type) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.address = address;
        this.foursquare_id = foursquare_id;
        this.foursquare_type = foursquare_type;
        this.google_place_id = google_place_id;
        this.google_place_type = google_place_type;
    }
    return InputVenueMessageContent;
}());
exports.default = InputVenueMessageContent;
