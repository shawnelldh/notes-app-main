


import React from "react";
import {
  BrowserRouter as Router,
 Route,
  
} from "react-router-dom";
import React from "react";

import NotesPage from './pages/NotesPage';
import Header from './components/Header';
import Notes from './pages/Note';


function App() {
 return (
   <Router>
   <div className="App">
   <Header/>
   <Route component={NotesPage} path='/' exact />
   <Route component={NotePage} path='/note/: id'  />
   </div>
   </Router>
   
     
 );

}

export default  App;