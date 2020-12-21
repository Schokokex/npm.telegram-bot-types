"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InputMessageContent_1 = __importDefault(require("./InputMessageContent"));
/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
var InputContactMessageContent = /** @class */ (function (_super) {
    __extends(InputContactMessageContent, _super);
    function InputContactMessageContent(phone_number, first_name, last_name, vcard) {
        var _this = _super.call(this) || this;
        _this.phone_number = phone_number;
        _this.first_name = first_name;
        _this.last_name = last_name;
        _this.vcard = vcard;
        return _this;
    }
    return InputContactMessageContent;
}(InputMessageContent_1.default));
exports.default = InputContactMessageContent;
