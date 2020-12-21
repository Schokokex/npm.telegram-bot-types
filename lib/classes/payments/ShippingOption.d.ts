import LabeledPrice from "../payments/LabeledPrice";
/**
 * This object represents one shipping option.
 */
export default class ShippingOption {
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
    constructor(id: string, title: string, prices: LabeledPrice[]);
}
