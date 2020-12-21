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
 * Represents the content of a text message to be sent as the result of an inline query.
 */
var InputTextMessageContent = /** @class */ (function (_super) {
    __extends(InputTextMessageContent, _super);
    function InputTextMessageContent(message_text, parse_mode, entities, disable_web_page_preview) {
        var _this = _super.call(this) || this;
        _this.message_text = message_text;
        _this.parse_mode = parse_mode;
        _this.entities = entities;
        _this.disable_web_page_preview = disable_web_page_preview;
        return _this;
    }
    return InputTextMessageContent;
}(InputMessageContent_1.default));
exports.default = InputTextMessageContent;
