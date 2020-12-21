"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
var ProximityAlertTriggered = /** @class */ (function () {
    function ProximityAlertTriggered(traveler, watcher, distance) {
        this.traveler = traveler;
        this.watcher = watcher;
        this.distance = distance;
    }
    return ProximityAlertTriggered;
}());
exports.default = ProximityAlertTriggered;
