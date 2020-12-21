import { KeyboardButton } from "../core/KeyboardButton";
import { InlineKeyboardButton } from "../core/InlineKeyboardButton";


/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export type InlineKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   */
  inline_keyboard: InlineKeyboardButton[][];

}
