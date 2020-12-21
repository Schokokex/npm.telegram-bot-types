import ShippingAddress from "../payments/ShippingAddress";

/**
 * This object represents information about an order.
 */
export default class OrderInfo {
  
  
  /**
   * Optional. User name
   */
  name?: string;
  
  /**
   * Optional. User's phone number
   */
  phone_number?: string;
  
  /**
   * Optional. User email
   */
  email?: string;
  
  /**
   * Optional. User shipping address
   */
  shipping_address?: ShippingAddress;
  
  constructor(
    
    name?: string,
    phone_number?: string,
    email?: string,
    shipping_address?: ShippingAddress,
    
  ){
    
    this.name = name;
    this.phone_number = phone_number;
    this.email = email;
    this.shipping_address = shipping_address;
    
  }
}
