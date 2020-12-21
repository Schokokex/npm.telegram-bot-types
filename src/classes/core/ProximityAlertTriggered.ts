import User from "../core/User";

/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 */
export default class ProximityAlertTriggered {
  
  /**
   * User that triggered the alert
   */
  traveler: User;
  
  /**
   * User that set the alert
   */
  watcher: User;
  
  /**
   * The distance between the users
   */
  distance: number;
  
  
  constructor(
    traveler: User,
    watcher: User,
    distance: number,
    
    
  ){
    this.traveler = traveler;
    this.watcher = watcher;
    this.distance = distance;
    
    
  }
}
