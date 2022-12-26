import { render, waitFor,screen } from "@testing-library/react";
import React from "react";
import { informationApi } from "../../shared/services/informationApi";
import { setupApiStore } from "../../testing-utils/api-store-utils";
import { server } from '../../mocks/server';
import { MemoryRouter } from "react-router";
import { rest } from "msw";
import Dashboard from '../dashboard';
import { IDashboardInformation } from "../../shared/models/dashboardInformation";


describe('dashboard',() => {
    const storeRef = setupApiStore(informationApi, {});

    const data: IDashboardInformation = {
        introduction: {
            name: "Tom Test",
            title: "Cool guy",
            image: "my-image-path.png"
          }
    }
    
    describe('when the fetch returns an error', () => {
        it('displays the error message',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/dashboard.json',
                (req,res,ctx) => {
                    return res(ctx.status(500),ctx.json({ message: 'Internal Server Error' }))
                })
            );

            render(
                <MemoryRouter>
                <Dashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Something went wrong loading the dashboard/i)).toBeInTheDocument();
            })
            
        })
    })

    describe('when the fetch returns successfully', () => {
        it('displays the name',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/dashboard.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Tom Test/i)).toBeInTheDocument();
            })
            
        });

        it('displays the title',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/dashboard.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                expect(screen.queryByText(/Cool Guy/i)).toBeInTheDocument();
            })
            
        });

        it('displays the image',async () => {
            server.use(
                rest.get(
                    '/react-resume/data/dashboard.json',
                (req,res,ctx) => {
                    return res(ctx.status(200),ctx.json(data))
                })
            );

            render(
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>, { wrapper: storeRef.wrapper });

            await waitFor(() => {
                const image = screen.queryByTestId(/image/i);
                expect(image).toBeInTheDocument();
                expect(image?.getAttribute('src')).toEqual('my-image-path.png')
            })
            
        });
    })
    
})