import OrderInfo from "../payments/OrderInfo";

/**
 * This object contains basic information about a successful payment.
 */
export default class SuccessfulPayment {

  /**
   * Three-letter ISO 4217 currency code
   */
  currency: string;

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;

  /**
   * Bot specified invoice payload
   */
  invoice_payload: string;

  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;

  /**
   * Provider payment identifier
   */
  provider_payment_charge_id: string;


  /**
   * Optional. Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string;

  /**
   * Optional. Order info provided by the user
   */
  order_info?: OrderInfo;

  constructor(
    currency: string,
    total_amount: number,
    invoice_payload: string,
    telegram_payment_charge_id: string,
    provider_payment_charge_id: string,

    shipping_option_id?: string,
    order_info?: OrderInfo,

  ){
    this.currency = currency;
    this.total_amount = total_amount;
    this.invoice_payload = invoice_payload;
    this.telegram_payment_charge_id = telegram_payment_charge_id;
    this.provider_payment_charge_id = provider_payment_charge_id;

    this.shipping_option_id = shipping_option_id;
    this.order_info = order_info;

  }
}
