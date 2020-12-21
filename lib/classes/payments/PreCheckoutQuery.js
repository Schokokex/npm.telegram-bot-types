"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains information about an incoming pre-checkout query.
 */
var PreCheckoutQuery = /** @class */ (function () {
    function PreCheckoutQuery(id, from, currency, total_amount, invoice_payload, shipping_option_id, order_info) {
        this.id = id;
        this.from = from;
        this.currency = currency;
        this.total_amount = total_amount;
        this.invoice_payload = invoice_payload;
        this.shipping_option_id = shipping_option_id;
        this.order_info = order_info;
    }
    return PreCheckoutQuery;
}());
exports.default = PreCheckoutQuery;
