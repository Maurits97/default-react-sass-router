import React from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom'

import Mainpage from './components/Mainpage'
import Detailpage from './components/Detailpage'
import NavContainer from './components/NavContainer'

function App() {
  return (
      <HashRouter basename="/#">
          <NavContainer />  

          <Route exact path="/" component={Mainpage}/>
          <Route path='/detail' component={Detailpage} />
      </HashRouter>
  );
}

export default App;
