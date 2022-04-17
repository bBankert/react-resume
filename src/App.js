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

  async function LoadData(){
    try{
      const responseData = await fetch(window.location + "/data/data.json");
      const jsonData = await responseData.json();
      setData(() => ({
        Navigation: jsonData.Navigation,
        Introduction: jsonData.Introduction,
        Content: jsonData.Content,
        Footer: jsonData.Footer
      }));
      setLoading(false);
    }
    catch(error){
      console.log(error);
    }
    

  }

  useEffect(()=>{
      (async () => {
        await LoadData();
      })();
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
    </div>
  );
};

export default App;
