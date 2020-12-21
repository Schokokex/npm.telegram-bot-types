import { InputMediaAnimation } from "./InputMediaAnimation";
import { InputMediaDocument } from "./InputMediaDocument";
import { InputMediaAudio } from "./InputMediaAudio";
import { InputMediaPhoto } from "./InputMediaPhoto";
import { InputMediaVideo } from "./InputMediaVideo";

export type InputMedia = InputMediaAnimation
| InputMediaDocument
| InputMediaAudio
| InputMediaPhoto
| InputMediaVideo