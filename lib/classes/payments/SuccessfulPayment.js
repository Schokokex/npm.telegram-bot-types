"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains basic information about a successful payment.
 */
var SuccessfulPayment = /** @class */ (function () {
    function SuccessfulPayment(currency, total_amount, invoice_payload, telegram_payment_charge_id, provider_payment_charge_id, shipping_option_id, order_info) {
        this.currency = currency;
        this.total_amount = total_amount;
        this.invoice_payload = invoice_payload;
        this.telegram_payment_charge_id = telegram_payment_charge_id;
        this.provider_payment_charge_id = provider_payment_charge_id;
        this.shipping_option_id = shipping_option_id;
        this.order_info = order_info;
    }
    return SuccessfulPayment;
}());
exports.default = SuccessfulPayment;
