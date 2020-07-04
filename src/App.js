import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import Nav from './Nav';

function App(){
  useEffect(e =>{
    console.log('hi');
  }
  );
  const [recipes, setRecipes] = useState([{}]);

  return (
   <Router>
     <div>
       <Nav/>
       <Switch>
         <Route path="/chicken">
           <Recipe title="chicken" />

          </Route>
          <Route path="/app">
           <App />
           
          </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
