"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InputMessageContent_1 = __importDefault(require("./InputMessageContent"));
/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
var InputVenueMessageContent = /** @class */ (function (_super) {
    __extends(InputVenueMessageContent, _super);
    function InputVenueMessageContent(latitude, longitude, title, address, foursquare_id, foursquare_type, google_place_id, google_place_type) {
        var _this = _super.call(this) || this;
        _this.latitude = latitude;
        _this.longitude = longitude;
        _this.title = title;
        _this.address = address;
        _this.foursquare_id = foursquare_id;
        _this.foursquare_type = foursquare_type;
        _this.google_place_id = google_place_id;
        _this.google_place_type = google_place_type;
        return _this;
    }
    return InputVenueMessageContent;
}(InputMessageContent_1.default));
exports.default = InputVenueMessageContent;
