"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains information about an incoming shipping query.
 */
var ShippingQuery = /** @class */ (function () {
    function ShippingQuery(id, from, invoice_payload, shipping_address) {
        this.id = id;
        this.from = from;
        this.invoice_payload = invoice_payload;
        this.shipping_address = shipping_address;
    }
    return ShippingQuery;
}());
exports.default = ShippingQuery;
