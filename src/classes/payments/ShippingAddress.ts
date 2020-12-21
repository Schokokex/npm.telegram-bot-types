
/**
 * This object represents a shipping address.
 */
export default class ShippingAddress {
  
  /**
   * ISO 3166-1 alpha-2 country code
   */
  country_code: string;
  
  /**
   * State, if applicable
   */
  state: string;
  
  /**
   * City
   */
  city: string;
  
  /**
   * First line for the address
   */
  street_line1: string;
  
  /**
   * Second line for the address
   */
  street_line2: string;
  
  /**
   * Address post code
   */
  post_code: string;
  
  
  constructor(
    country_code: string,
    state: string,
    city: string,
    street_line1: string,
    street_line2: string,
    post_code: string,
    
    
  ){
    this.country_code = country_code;
    this.state = state;
    this.city = city;
    this.street_line1 = street_line1;
    this.street_line2 = street_line2;
    this.post_code = post_code;
    
    
  }
}
