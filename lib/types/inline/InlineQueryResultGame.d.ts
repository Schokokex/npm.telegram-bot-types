import { InlineKeyboardMarkup } from "../core/InlineKeyboardMarkup";
/**
 * Represents a Game.
 */
export declare type InlineQueryResultGame = {
    /**
     * Type of the result, must be game
     */
    type: string;
    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;
    /**
     * Short name of the game
     */
    game_short_name: string;
    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;
};
