"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains basic information about an invoice.
 */
var Invoice = /** @class */ (function () {
    function Invoice(title, description, start_parameter, currency, total_amount) {
        this.title = title;
        this.description = description;
        this.start_parameter = start_parameter;
        this.currency = currency;
        this.total_amount = total_amount;
    }
    return Invoice;
}());
exports.default = Invoice;
