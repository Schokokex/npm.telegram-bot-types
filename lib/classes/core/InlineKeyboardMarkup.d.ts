import InlineKeyboardButton from "../core/InlineKeyboardButton";
/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export default class InlineKeyboardMarkup {
    /**
     * Array of button rows, each represented by an Array of InlineKeyboardButton objects
     */
    inline_keyboard: InlineKeyboardButton[][];
    constructor(inline_keyboard: InlineKeyboardButton[][]);
}
