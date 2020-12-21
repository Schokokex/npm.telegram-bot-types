"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents one shipping option.
 */
var ShippingOption = /** @class */ (function () {
    function ShippingOption(id, title, prices) {
        this.id = id;
        this.title = title;
        this.prices = prices;
    }
    return ShippingOption;
}());
exports.default = ShippingOption;
