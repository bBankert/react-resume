import React,{useState,useEffect,Suspense,lazy} from 'react';
import './App.css';
//has to be synchronous since this is the fallback component
import Loading from './components/loading/loading';

import { useGetInformationQuery } from './slices/api-slice';

const Header = lazy(() => import('./containers/header'));
const Content = lazy(() => import('./containers/content'));
const Footer = lazy(() => import('./containers/footer/footer'));

const App = () => {

  const { data, isLoading } = useGetInformationQuery();

  return (
    <div>
      <Suspense fallback={<Loading/>}>
        {isLoading ? 
          <Loading/> : 
          <React.Fragment>
            <Header header={data.Navigation}/>
            <Content data={data}/>
            <Footer footer={data.Footer} />
          </React.Fragment>
        }
      </Suspense>
    </div>
  );
};

export default App;
