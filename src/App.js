


import React from "react";
import {
  BrowserRouter as Router,
 Route,
  
} from "react-router-dom";
import React from "react";

import NotesPage from './pages/NotesPage';
import Header from './components/Header';


function App() {
 return (
   <Router>
   <div className="App">
   <Header/>
   <Route component={NotesPage} path='/' exact />
   </div>
   </Router>
   
     
 );

}

export default  App;