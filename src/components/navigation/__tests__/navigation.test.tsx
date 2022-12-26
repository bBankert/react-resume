import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { ICommonInformation } from "../../../shared/models/commonInformation";
import { informationApi } from "../../../shared/services/informationApi";
import { setupApiStore } from "../../../testing-utils/api-store-utils";
import Navigation from "../navigation";
import { server } from '../../../mocks/server';
import { MemoryRouter } from "react-router";
import { rest } from "msw";

jest.mock('../../../containers/appBar/appBar');

// jest.mock('react-router-dom');

describe('navigation',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: ICommonInformation = {
        navLinks: {
            professionalExperience: [
                {
                    id: 1,
                    title: "Work 1"
                },
            ],
            dashboardLinks: []
        },
        email: "test@email.com",
        phone: "1111111"
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
                <Navigation />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/It looks like we had an error loading the navigation.../i)).toBeInTheDocument();
            })
            
        })
    })

    describe('when the fetch returns successfully', () => {
        it('displays the work example',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/commonData.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                <Navigation />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/work 1/i)).toBeInTheDocument();
            })
            
        })
    })
    
})