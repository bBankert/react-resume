import React,{useState,useEffect,Suspense,lazy} from 'react';
import './App.css';
//has to be synchronous since this is the fallback component
import Loading from './components/loading/loading';

const Header = lazy(() => import('./containers/header'));
const Content = lazy(() => import('./containers/content'));
const Footer = lazy(() => import('./containers/footer/footer'));

const App = () => {

  const [loading,setLoading] = useState(true);
  const [data,setData] = useState({
    Navigation: [],
    Introduction: {},
    Content: {},
  });


  useEffect(()=>{
      //live version
      fetch(window.location + "/data/data.json")
      .then(res => res.json())
      .then(json => {
        setData(() => ({
          Navigation: json.Navigation,
          Introduction: json.Introduction,
          Content: json.Content,
          Footer: json.Footer
        }))
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    });
    
    
  },[loading]);


  return (
    <div>
      <Suspense fallback={<Loading/>}>
        {loading ? 
          <Loading/> : 
          <React.Fragment>
            <Header header={data.Navigation}/>
            <Content data={data}/>
            <Footer footer={data.Footer} />
          </React.Fragment>
        }
      </Suspense>
      <Loading/>
    </div>
  );
};

export default App;
