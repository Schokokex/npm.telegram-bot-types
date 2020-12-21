import { InputTextMessageContent } from "./InputTextMessageContent";
import { InputLocationMessageContent } from "./InputLocationMessageContent";
import { InputVenueMessageContent } from "./InputVenueMessageContent";
import { InputContactMessageContent } from "./InputContactMessageContent";

export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent;
