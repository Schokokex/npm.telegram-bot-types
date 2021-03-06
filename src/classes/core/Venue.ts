import Location from "../core/Location";

/**
 * This object represents a venue.
 */
export default class Venue {

  /**
   * Venue location. Can't be a live location
   */
  location: Location;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;


  /**
   * Optional. Foursquare identifier of the venue
   */
  foursquare_id?: string;

  /**
   * Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type?: string;

  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_id?: string;

  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string;

  constructor(
    location: Location,
    title: string,
    address: string,

    foursquare_id?: string,
    foursquare_type?: string,
    google_place_id?: string,
    google_place_type?: string,

  ){
    this.location = location;
    this.title = title;
    this.address = address;

    this.foursquare_id = foursquare_id;
    this.foursquare_type = foursquare_type;
    this.google_place_id = google_place_id;
    this.google_place_type = google_place_type;

  }
}
