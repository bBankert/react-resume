import React,{Suspense,lazy} from 'react';
import './App.css';
//has to be synchronous since this is the fallback component
import Loading from './components/loading/loading';

import Choose from './components/conditional-components/choose-component';
import When from './components/conditional-components/when-component';

import { useGetInformationQuery } from './slices/api-slice';
import Otherwise from './components/conditional-components/otherwise-component';

const Header = lazy(() => import('./containers/header'));
const Content = lazy(() => import('./containers/content'));
const Footer = lazy(() => import('./containers/footer/footer'));

const App = () => {

  const { data, isLoading, isError,error } = useGetInformationQuery();


  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Choose>
          <When expression={isLoading}>
            <Loading />
          </When>
          <When expression={isError}>
            <p>I am sorry, it looks like an error occurred...</p>
          </When>
          <Otherwise>
            {isLoading ? 
              //There is a time period between when "isLoading" is false and when the data
              //is actually populated... so this handles the error
              <></> :
              <React.Fragment>
                  <Header header={data.Navigation}/>
                  <Content data={data}/>
                  <Footer footer={data.Footer} />
                </React.Fragment>
            }
            
          </Otherwise>
        </Choose>
      </Suspense>
    </div>
  );
};

export default App;
