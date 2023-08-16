import React from 'react';
import {useRoutes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import routes from './routes';


const App = () => {
  let router = useRoutes(routes)
  return (
    <>
      <Navigation />
      {router}
    </>

  )
}

export default App