import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { informationApi } from "../../shared/services/informationApi";
import { setupApiStore } from "../../testing-utils/api-store-utils";
import { server } from '../../mocks/server';
import { MemoryRouter } from "react-router";
import { rest } from "msw";
import EducationDashboard from '../educationDashboard';
import { IEducationDashboardInformation } from "../../shared/models/educationDashboardInformation";


describe('educationDashboard',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: IEducationDashboardInformation[] = [
        {
            id: 1,
            name: 'university',
            gpa: '100',
            degree: 'cool degree',
            relevantCourses: [
                {
                    id: 1,
                    title: 'my relevant course'
                }
            ]
        }
    ]
    
    describe('when the fetch returns an error', () => {
        it('displays the error message',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/educationData.json',
                (req,res,ctx) => {
                    return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                })
            );

            render(
                <MemoryRouter>
                <EducationDashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Something went wrong loading the education information/i)).toBeInTheDocument();
            })
            
        })
        
    })

    describe('when the fetch returns successfully', () => {
        beforeAll(() => {
            server.use(
                rest.get(
                    '/react-resume/data/educationData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );
        })


        it('displays the school name',async () => {

            render(
                <MemoryRouter>
                <EducationDashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/university/i)).toBeInTheDocument();
            })
        });

        it('displays the degree and gpa',async () => {

            render(
                <MemoryRouter>
                <EducationDashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/cool degree - GPA: 100/i)).toBeInTheDocument();
            })
        })

        it('displays the relevant courses',async () => {

            render(
                <MemoryRouter>
                <EducationDashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/cool degree - GPA: 100/i)).toBeInTheDocument();
            })
        })
    })
    
})