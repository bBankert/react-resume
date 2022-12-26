import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { informationApi } from "../../shared/services/informationApi";
import { setupApiStore } from "../../testing-utils/api-store-utils";
import { server } from '../../mocks/server';
import { MemoryRouter } from "react-router";
import { rest } from "msw";
import ProjectDashboard from '../projectDashboard';
import { IProjectDashboardInformation } from "../../shared/models/projectDashboardInformation";


describe('projectDashboard',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: IProjectDashboardInformation = {
        previousProjects: [
            {
                id: 1,
                name: 'previous project 1',
                description: 'previous project description 1',
                liveLink: 'http://test.com',
                sourceLink: 'http://test-source.com'
            },
            {
                id: 2,
                name: 'no link show',
                description: 'should not show link',
            }
        ],
        upcomingProjects: [
            {
                id: 1,
                name: 'upcoming project name',
                description: 'upcoming project description',
            },
        ]
    }
    
    describe('when the fetch returns an error', () => {
        describe('previous projects',() => {
            it('displays the error message',async () => {
                server.use(
                    rest.get(
                        '/react-resume/data/projectData.json',
                    (req,res,ctx) => {
                        return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                    })
                );
    
                render(
                    <MemoryRouter>
                    <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/Something went wrong loading the previous project information/i)).toBeInTheDocument();
                })
                
            })
        })

        describe('upcoming projects',() => {
            it('displays the error message',async () => {
                server.use(
                    rest.get(
                        '/react-resume/data/projectData.json',
                    (req,res,ctx) => {
                        return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                    })
                );
    
                render(
                    <MemoryRouter>
                    <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/Something went wrong loading the upcoming project information/i)).toBeInTheDocument();
                })
                
            })
        })
        
    })

    describe('when the fetch returns successfully', () => {
        beforeAll(() => {
            server.use(
                rest.get(
                    '/react-resume/data/projectData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );
        })

        describe('previous projects',() => {
            it('should render the title of the project',async () => {
                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/previous project 1/i)).toBeInTheDocument();
                })
                
            });

            it('should render the description of the project',async () => {

                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/previous project description 1/i)).toBeInTheDocument();
                })
                
            });

            it('should render the live link if available',async () => {
    
                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    const element = screen.queryByText(/live link/i);
                    expect(element?.getAttribute('href')).toEqual('http://test.com');
                })
                
            });

            it('should render the source link if available',async () => {
    
                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    const element = screen.queryByText(/source code/i);
                    expect(element?.getAttribute('href')).toEqual('http://test-source.com');
                })
                
            });
        })

        describe('upcoming projects',() => {
            it('should render the title of the project',async () => {
    
                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/upcoming project name/i)).toBeInTheDocument();
                })
                
            });

            it('should render the description of the project',async () => {
    
                render(
                    <MemoryRouter>
                        <ProjectDashboard />
                    </MemoryRouter>, { wrapper: storeRef.wrapper });
    
                await waitFor(() => {
                    expect(screen.queryByText(/upcoming project description/i)).toBeInTheDocument();
                })
                
            });
        })
    })
    
})