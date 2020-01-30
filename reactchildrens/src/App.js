import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Parent from './Parent';
import Slideshow from './slideshow';
import Reversedname from './HOC/medium'
import Hellomessage from './components/simplecomponent';


import Simple from './Routing/simple'
import Html from './Routing/html';
import Children from './Routing/children';
import Advanced from "./Routing/advancetopic"


function App() {
  return (
    <div>
      <Router>
           <h1>Welcome to ReactJs Examples</h1>
           <nav className="navbar navbar-expand-sm bg-dark ">
              <ul className="navbar-nav">

                  <li className="nav-item"><Link className="nav-link" to="/sample">Simple</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/html">HTML</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/children">Children</Link> </li>
                  <li className="nav-item"><Link className="nav-link" to="/advance">Advance</Link></li>
              </ul>
           </nav>
           <h3>Please select a option: </h3>  
           <div>
              <Switch>
        
                    <Route path="/sample" component={Simple} />
                    <Route path="/html" component={Html} />
                    <Route path="/children" component={Children} />
                    <Route path="/advance" component={Advanced}/>
 
                </Switch>
           </div>
                   
      </Router>
      
    </div>
  );
}

export default App;
