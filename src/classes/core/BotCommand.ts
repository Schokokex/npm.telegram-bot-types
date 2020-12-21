
/**
 * This object represents a bot command.
 */
export default class BotCommand {

  /**
   * Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   */
  command: string;

  /**
   * Description of the command, 3-256 characters.
   */
  description: string;


  constructor(
    command: string,
    description: string,


  ){
    this.command = command;
    this.description = description;


  }
}
