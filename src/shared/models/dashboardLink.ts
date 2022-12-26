import { INavLink } from "./navLink";

export interface IDashboardLink extends INavLink {
    dashboardRoute: string;
}