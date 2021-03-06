import InputMessageContent from "./InputMessageContent";

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
export default class InputVenueMessageContent implements InputMessageContent {

  /**
   * Latitude of the venue in degrees
   */
  latitude: number;

  /**
   * Longitude of the venue in degrees
   */
  longitude: number;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;


  /**
   * Optional. Foursquare identifier of the venue, if known
   */
  foursquare_id?: string;

  /**
   * Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
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
    latitude: number,
    longitude: number,
    title: string,
    address: string,

    foursquare_id?: string,
    foursquare_type?: string,
    google_place_id?: string,
    google_place_type?: string,

  ){
    this.latitude = latitude;
    this.longitude = longitude;
    this.title = title;
    this.address = address;

    this.foursquare_id = foursquare_id;
    this.foursquare_type = foursquare_type;
    this.google_place_id = google_place_id;
    this.google_place_type = google_place_type;

  }
}
