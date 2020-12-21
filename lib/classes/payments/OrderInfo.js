"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents information about an order.
 */
var OrderInfo = /** @class */ (function () {
    function OrderInfo(name, phone_number, email, shipping_address) {
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.shipping_address = shipping_address;
    }
    return OrderInfo;
}());
exports.default = OrderInfo;
