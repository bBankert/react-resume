//import React from 'react';
import { setupApiStore } from './testing-utils/api-store-utils';
import App from './App';
import fetchMock from 'jest-fetch-mock'
import { informationApi, useGetInformationQuery } from './slices/api-slice';
import { render, waitFor,screen, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
//given that all of the logic happens here in the app.js (fetching data)
//alot of the actual tests are going to be here


describe('App data fetching tests',() => {

  
  //setup the store for redux
  const storeRef = setupApiStore(informationApi,{ });

  
  const data = {
    Navigation: ["nav-link"],
    Introduction:{"Name":"name","Title":"title","Image":"/path/to/img.png"},
    Content : 
    [
      {
        "Header":"header",
        "Subsections":
        [
          {
            "Subheading":"subheading",
            "Details":
            [
              "text 1",
              "text 2",
              "text 3"
            ],
            "Link":"mylink.com"
          }
        ]
      },
    ],
    Footer: {"Email":"email@test.com","Phone":"1234567890"}
    };

  beforeEach(() => {
    //mock response
    fetchMock.mockResponse(JSON.stringify(data));

  });

  afterEach(() => {
    fetchMock.resetMocks();
  })

  it('Requests the data json file', async () => {
    return storeRef.store
      .dispatch<any>(
        informationApi.endpoints.getInformation.initiate(undefined)
      )
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1);
        const request = fetchMock.mock.calls[0][0] as Request;

        expect(request.method).toBe('GET');
        expect(request.url).toContain('data.json');
      })
    
  });


  it('Returns a successful response and renders the navigation', async () => {

    render(<App />, { wrapper: storeRef.wrapper});
    await waitFor(() => {
      expect(screen.queryByText(/Loading, Please Wait.../i)).not.toBeInTheDocument();
    })
    
    expect(screen.queryByText(/nav-link/i)).toBeInTheDocument();
  });

  it('Returns a successful response and renders the content', async () => {
    
    render(<App />, { wrapper: storeRef.wrapper});
    await waitFor(() => {
      expect(screen.queryByText(/Loading, Please Wait.../i)).not.toBeInTheDocument();
    })
    
    expect(screen.queryByText(/header/i)).toBeInTheDocument();
    expect(screen.queryByText(/subheading/i)).toBeInTheDocument();
    expect(screen.queryByText(/text 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/text 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/text 3/i)).toBeInTheDocument();
  });

  it('Returns a successful response and renders the footer', async () => {
    
    render(<App />, { wrapper: storeRef.wrapper});
    await waitFor(() => {
      expect(screen.queryByText(/Loading, Please Wait.../i)).not.toBeInTheDocument();
    })
    
    //get all links and filter
    const links = screen.getAllByRole("link") as HTMLAnchorElement[];

    const emailLink = links
    .filter(link => link.textContent === 'Email me' && link.href === encodeURI('mailto:email@test.com?subject=Resume Site Contact'));
    expect(emailLink.length).toBe(1);
    expect(links.filter(link => link.href === 'tel:1234567890').length).toBe(1);
  });
})