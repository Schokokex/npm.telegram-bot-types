import PhotoSize from "../core/PhotoSize";

/**
 * This object represent a user's profile pictures.
 */
export default class UserProfilePhotos {

  /**
   * Total number of profile pictures the target user has
   */
  total_count: number;

  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: PhotoSize[][];


  constructor(
    total_count: number,
    photos: PhotoSize[][],


  ){
    this.total_count = total_count;
    this.photos = photos;


  }
}
