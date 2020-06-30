import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './containers/header';
import Content from  './containers/content';
import Loading from './components/loading/loading';
import $ from 'jquery';

const App = () => {

  const [loading,setLoading] = useState(1);
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
      }));
      setLoading(0);
    })

    
    
  },[loading]);


  return (
    <div>
      {loading == 1 ? <Loading/> : <React.Fragment><Header header={data.Navigation}/>
      <Content data={data}/></React.Fragment>}
      <Loading/>
    </div>
  );
};

export default App;
