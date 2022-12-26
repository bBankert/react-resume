import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { ICommonInformation } from "../../../shared/models/commonInformation";
import { informationApi } from "../../../shared/services/informationApi";
import { setupApiStore } from "../../../testing-utils/api-store-utils";
import { server } from '../../../mocks/server';
import { MemoryRouter } from "react-router";
import { rest } from "msw";
import Footer from '../footer';

jest.mock('../../../containers/appBar/appBar');

// jest.mock('react-router-dom');

describe('footer',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: ICommonInformation = {
        navLinks: {
            education: [
                {
                    index: 1,
                    title: "School 1"
                }
            ],
            professionalExperience: [
                {
                    index: 1,
                    title: "Work 1"
                },
            ],
            personalProjects: [
                {
                    index: 1,
                    title: "Project 1"
                },
            ]
        },
        email: "test@email.com",
        phone: "1111111111"
    }
    
    describe('when the fetch returns an error', () => {
        it('displays the error message',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/commonData.json',
                (req,res,ctx) => {
                    return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                })
            );

            render(
                <MemoryRouter>
                <Footer />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/It looks like there was an error loading the footer.../i)).toBeInTheDocument();
            })
            
        })
    })

    describe('when the fetch returns successfully', () => {
        it('displays the formatted phone number',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/commonData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/\(111\) 111-1111/i)).toBeInTheDocument();
            })
            
        });

        it('displays the email link',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/commonData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/email me/i)).toBeInTheDocument();
            })
            
        });
    })
    
})