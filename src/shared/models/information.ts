import { ICardContent } from "./card-content";
import { IFooter } from "./footer";
import { IIntroduction } from "./introduction";

export interface IInformation {
    navigation: string[],
    introduction: IIntroduction,
    content: ICardContent[],
    footer: IFooter
}