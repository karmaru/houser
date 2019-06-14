import React from 'react';
import Dashboard from '../src/components/Dashboard/Dashboard'
import Header from '../src/components/Header/Header'
import House from '../src/components/House/House'
import Wizard from '../src/components/Wizard/Wizard'
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";

import './App.css';

function App() {
  return (
  <HashRouter>
    <div className="App">
      <Header/>
      {routes}
    </div>
  </HashRouter>
  );
}

export default App;
