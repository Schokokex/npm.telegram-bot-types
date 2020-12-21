"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object describes the position on faces where a mask should be placed by default.
 */
var MaskPosition = /** @class */ (function () {
    function MaskPosition(point, x_shift, y_shift, scale) {
        this.point = point;
        this.x_shift = x_shift;
        this.y_shift = y_shift;
        this.scale = scale;
    }
    return MaskPosition;
}());
exports.default = MaskPosition;
