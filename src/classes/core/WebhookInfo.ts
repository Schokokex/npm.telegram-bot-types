
/**
 * Contains information about the current status of a webhook.
 */
export default class WebhookInfo {
  
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;
  
  /**
   * true, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;
  
  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;
  
  
  /**
   * Optional. Currently used webhook IP address
   */
  ip_address?: string;
  
  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number;
  
  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_message?: string;
  
  /**
   * Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: number;
  
  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types
   */
  allowed_updates?: string[];
  
  constructor(
    url: string,
    has_custom_certificate: boolean,
    pending_update_count: number,
    
    ip_address?: string,
    last_error_date?: number,
    last_error_message?: string,
    max_connections?: number,
    allowed_updates?: string[],
    
  ){
    this.url = url;
    this.has_custom_certificate = has_custom_certificate;
    this.pending_update_count = pending_update_count;
    
    this.ip_address = ip_address;
    this.last_error_date = last_error_date;
    this.last_error_message = last_error_message;
    this.max_connections = max_connections;
    this.allowed_updates = allowed_updates;
    
  }
}
