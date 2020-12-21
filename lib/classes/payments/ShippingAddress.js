"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents a shipping address.
 */
var ShippingAddress = /** @class */ (function () {
    function ShippingAddress(country_code, state, city, street_line1, street_line2, post_code) {
        this.country_code = country_code;
        this.state = state;
        this.city = city;
        this.street_line1 = street_line1;
        this.street_line2 = street_line2;
        this.post_code = post_code;
    }
    return ShippingAddress;
}());
exports.default = ShippingAddress;
