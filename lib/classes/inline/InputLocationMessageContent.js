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
 * Represents the content of a location message to be sent as the result of an inline query.
 */
var InputLocationMessageContent = /** @class */ (function (_super) {
    __extends(InputLocationMessageContent, _super);
    function InputLocationMessageContent(latitude, longitude, horizontal_accuracy, live_period, heading, proximity_alert_radius) {
        var _this = _super.call(this) || this;
        _this.latitude = latitude;
        _this.longitude = longitude;
        _this.horizontal_accuracy = horizontal_accuracy;
        _this.live_period = live_period;
        _this.heading = heading;
        _this.proximity_alert_radius = proximity_alert_radius;
        return _this;
    }
    return InputLocationMessageContent;
}(InputMessageContent_1.default));
exports.default = InputLocationMessageContent;
