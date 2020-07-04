import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

function Nav(){
    return(
        <div>
            <Router>
            <menu>
            
                <li><Link to="/App.js">Home</Link></li>
                
                <li>About</li>
                <li>Recipes</li>
                <li>Contanct</li>
            </menu>
            </Router>
        </div>
    )
}

export default Nav;