import React,{Component} from 'react';

import './App.css';
import Header from './containers/header';
import Content from  './containers/content';
import Footer from './containers/footer';

const App = () => {


  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
