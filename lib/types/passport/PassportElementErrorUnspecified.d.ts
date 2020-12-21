/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 */
export declare type PassportElementErrorUnspecified = {
    /**
     * Error source, must be unspecified
     */
    source: string;
    /**
     * Type of element of the user's Telegram Passport which has the issue
     */
    type: string;
    /**
     * Base64-encoded element hash
     */
    element_hash: string;
    /**
     * Error message
     */
    message: string;
};
