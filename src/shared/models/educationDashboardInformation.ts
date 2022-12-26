import { IRelevantCourse } from "./relevantCourse";

export interface IEducationDashboardInformation {
    id: number;
    name: string;
    gpa: string;
    degree: string;
    relevantCourses: IRelevantCourse[];
}