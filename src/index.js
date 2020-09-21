import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Layout/TopBar/Topbar';
import SearchBar from './Layout/TopBar/NavSearch';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
     <Topbar/>

   <Router>
     <SearchBar />
      <div>
       <App /> 
     </div> 
    </Router>
   </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
