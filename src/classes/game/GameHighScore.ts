import User from "../core/User";

/**
 * This object represents one row of the high scores table for a game.
 */
export default class GameHighScore {
  
  /**
   * Position in high score table for the game
   */
  position: number;
  
  /**
   * User
   */
  user: User;
  
  /**
   * Score
   */
  score: number;
  
  
  constructor(
    position: number,
    user: User,
    score: number,
    
    
  ){
    this.position = position;
    this.user = user;
    this.score = score;
    
    
  }
}
