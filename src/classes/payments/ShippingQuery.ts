import User from "../core/User";
import ShippingAddress from "../payments/ShippingAddress";

/**
 * This object contains information about an incoming shipping query.
 */
export default class ShippingQuery {

  /**
   * Unique query identifier
   */
  id: string;

  /**
   * User who sent the query
   */
  from: User;

  /**
   * Bot specified invoice payload
   */
  invoice_payload: string;

  /**
   * User specified shipping address
   */
  shipping_address: ShippingAddress;


  constructor(
    id: string,
    from: User,
    invoice_payload: string,
    shipping_address: ShippingAddress,


  ){
    this.id = id;
    this.from = from;
    this.invoice_payload = invoice_payload;
    this.shipping_address = shipping_address;


  }
}
