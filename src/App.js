import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './containers/header';
import Content from  './containers/content';
import Footer from './containers/footer';

const App = () => {

  const [data,setData] = useState({
    Navigation: [],
    Introduction: {},
    Content: {},
  });


  useEffect(()=>{
      //live version
      fetch("./data/data.json")
      .then(res => res.json())
      .then(json => {
      setData(() => ({
        Navigation: json.Navigation,
        Introduction: json.Introduction,
        Content: json.Content,
      }));
    })
    .catch(() => {
      //dev version
      fetch("/react-resume/data/data.json")
      .then(res => res.json())
      .then(json => {
      setData(() => ({
        Navigation: json.Navigation,
        Introduction: json.Introduction,
        Content: json.Content,
      }));
    });
    });
    
  },[]);

  return (
    <div>
      <Header header={data.Navigation}/>
      <Content data={data}/>
      <Footer/>
    </div>
  );
};

export default App;
