import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICommonInformation } from "../models/commonInformation";
import { IDashboardInformation } from "../models/dashboardInformation";
import { IEducationDashboardInformation } from "../models/educationDashboardInformation";
import { IProfessionalInformation } from "../models/professionalInformation";
import { IProjectDashboardInformation } from "../models/projectDashboardInformation";

// Define a service using a base URL and expected endpoints
export const informationApi = createApi({
  reducerPath: "informationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getDashboardInformation: builder.query<IDashboardInformation, null>({
      query: () => `/react-resume/data/dashboardData.json`,
    }),
    getCommonInformation: builder.query<ICommonInformation, null>({
      query: () =>  `/react-resume/data/commonData.json`,
    }),
    getProfessionalInformation: builder.query<IProfessionalInformation[],null>({
      query: () =>  `/react-resume/data/professionalData.json`,
    }),
    getProjectInformation: builder.query<IProjectDashboardInformation,null>({
      query: () =>  `/react-resume/data/projectData.json`,
    }),
    getEducationInformation: builder.query<IEducationDashboardInformation[],null>({
      query: () =>  `/react-resume/data/educationData.json`,
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetDashboardInformationQuery,
  useGetCommonInformationQuery,
  useGetProfessionalInformationQuery,
  useGetProjectInformationQuery,
  useGetEducationInformationQuery
} = informationApi;
