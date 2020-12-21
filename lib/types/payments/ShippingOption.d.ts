import { LabeledPrice } from "../payments/LabeledPrice";
/**
 * This object represents one shipping option.
 */
export declare type ShippingOption = {
    /**
     * Shipping option identifier
     */
    id: string;
    /**
     * Option title
     */
    title: string;
    /**
     * List of price portions
     */
    prices: LabeledPrice[];
};
