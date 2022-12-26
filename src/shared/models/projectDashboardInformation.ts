import { IProject } from "./project";

export interface IProjectDashboardInformation {
    previousProjects: IProject[];
    upcomingProjects: IProject[];
}