import React from 'react';
import {useRoutes } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';
import Footer from './components/Footer/Footer';


const App = () => {
  let router = useRoutes(routes)
  return (
    <>
      <Header />
      {router} 
      <Footer/>
    </>

  )
}

export default App  