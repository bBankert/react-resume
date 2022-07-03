import React,{Suspense,lazy} from 'react';
import './App.css';
//has to be synchronous since this is the fallback component
import Loading from './components/loading/loading';

import { useGetInformationQuery } from './slices/api-slice';

const Header = lazy(() => import('./containers/header'));
const Content = lazy(() => import('./containers/content'));
const Footer = lazy(() => import('./containers/footer/footer'));

const App = () => {

  const { data, isLoading, isError } = useGetInformationQuery(null);


  return (
    <React.Fragment>
      <Suspense fallback={<Loading/>}>
        {isLoading ?
          <Loading /> :
          isError ?
          <p>I am sorry, it looks like an error occurred...</p> :
          <React.Fragment>
            <Header navigation={data.navigation}/>
            <Content 
              content={data.content} 
              introduction={data.introduction}/>
            <Footer 
              email={data.footer.email} 
              phone={data.footer.phone} />
          </React.Fragment> 
        }
      </Suspense>
    </React.Fragment>
  );
};

export default App;
