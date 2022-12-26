import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { informationApi } from "../../shared/services/informationApi";
import { setupApiStore } from "../../testing-utils/api-store-utils";
import { server } from '../../mocks/server';
import { MemoryRouter, Navigate, Route, Routes } from "react-router";
import { rest } from "msw";
import ProfessionalExperienceDetail from '../professionalExperienceDetail';
import { IProfessionalInformation } from "../../shared/models/professionalInformation";


describe('professionalExperienceDetail',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: IProfessionalInformation[] = [
        {
            id: 1,
            company: "Company 1",
            title: "Title 1",
            details: [
                "Detail 1",
                "Detail 2",
                "Detail 3",
            ],
            technologies: [
                {
                    name: "Technology 1",
                    link: "https://test.com"
                },
                {
                    name: "Technology 2",
                    link: "https://test2.com"
                }
            ]
        },
    ]
    
    describe('when the fetch returns an error', () => {
        it('displays the error message',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/professionalData.json',
                (req,res,ctx) => {
                    return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                })
            );

            render(
                <MemoryRouter>
                <ProfessionalExperienceDetail />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Error.../i)).toBeInTheDocument();
            })
            
        })
    })

    describe('when the fetch returns successfully', () => {
        beforeAll(() => {
            server.use(
                rest.get(
                    '/react-resume/data/professionalData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );
        })

        it('displays the company name',async () => {

            render(
                <MemoryRouter initialEntries={['/explore/1']}>
                    <Routes>
                        <Route path="/explore/:professionalExperienceId" element={<ProfessionalExperienceDetail />} />
                    </Routes>
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Company 1/i)).toBeInTheDocument();
            })
            
        });

        it('should display the title',async () => {

            render(
                <MemoryRouter initialEntries={['/explore/1']}>
                    <Routes>
                        <Route path="/explore/:professionalExperienceId" element={<ProfessionalExperienceDetail />} />
                    </Routes>
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Title 1/i)).toBeInTheDocument();
            })
            
        });

        it('should render all the details',async () => {

            render(
                <MemoryRouter initialEntries={['/explore/1']}>
                    <Routes>
                        <Route path="/explore/:professionalExperienceId" element={<ProfessionalExperienceDetail />} />
                    </Routes>
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Detail 1/i)).toBeInTheDocument();
                expect(screen.queryByText(/Detail 2/i)).toBeInTheDocument();
                expect(screen.queryByText(/Detail 3/i)).toBeInTheDocument();
            })
            
        });

        it('should render all the technology links',async () => {

            render(
                <MemoryRouter initialEntries={['/explore/1']}>
                    <Routes>
                        <Route path="/explore/:professionalExperienceId" element={<ProfessionalExperienceDetail />} />
                    </Routes>
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Technology 1/i)).toBeInTheDocument();
                expect(screen.queryByText(/Technology 2/i)).toBeInTheDocument();
            })
            
        });
    })
    
})