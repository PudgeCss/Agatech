import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { MainPage } from './components/mainPage/mainPage';

const App = (props) => {
  return (
    <div className='app-wrapper' id='top'>
      <a href='#top' className='top'><img alt="top" src='assets/img/top.png' /></a>
      {/* {isShown ? <ModalWindow /> : null} */}
      <Header />
      <div className='app-wrapper-content '>
        <Route path='/' exact render={() => <MainPage />} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
