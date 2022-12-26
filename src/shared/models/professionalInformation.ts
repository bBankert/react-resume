import { ITechnology } from "./technology";

export interface IProfessionalInformation {
    id: number,
    company: string,
    title: string,
    details: string[],
    technologies: ITechnology[]
}