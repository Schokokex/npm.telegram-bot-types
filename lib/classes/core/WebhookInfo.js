"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains information about the current status of a webhook.
 */
var WebhookInfo = /** @class */ (function () {
    function WebhookInfo(url, has_custom_certificate, pending_update_count, ip_address, last_error_date, last_error_message, max_connections, allowed_updates) {
        this.url = url;
        this.has_custom_certificate = has_custom_certificate;
        this.pending_update_count = pending_update_count;
        this.ip_address = ip_address;
        this.last_error_date = last_error_date;
        this.last_error_message = last_error_message;
        this.max_connections = max_connections;
        this.allowed_updates = allowed_updates;
    }
    return WebhookInfo;
}());
exports.default = WebhookInfo;
