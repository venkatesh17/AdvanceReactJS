import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Container from "./Bootstrap/containers"
import Gridbasic from "./Bootstrap/gridbasic";
import Typography from "./Bootstrap/Typography";
import Colors from "./Bootstrap/colors";
import Table from "./Bootstrap/table";
import Images from "./Bootstrap/images";
import Jumbtron from "./Bootstrap/jumbotran";
import Alert from "./Bootstrap/alert";
import Button from "./Bootstrap/buttons";
import Glyphicon from "./Bootstrap/Glyphicon";
import Badges from "./Bootstrap/badges_labels";
import Progressbar from './Bootstrap/progressbar';
import Spinners from "./Bootstrap/spinners";
import Pagination from "./Bootstrap/pagination";
import Listgroup from "./Bootstrap/listgroup";
import Cards from './Bootstrap/card';
import Dropdown from './Bootstrap/dropdown';
import Collapse from './Bootstrap/collapse';
import Nav from './Bootstrap/nav';
import Navbar from './Bootstrap/navbar';


function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
         <ul className="navbar-nav"> 
         <li className="nav-item"><Link className="nav-link" to="/container">Container</Link></li>
         <li className="nav-item"><Link className="nav-link" to='/gridbasic'>GridBasic</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/typography">Typography</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/colors">Colors</Link></li>
         <li className="nav-item"><Link className="nav-link" to ="/table">Table</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/image">Images</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/jumbotron">Jumbotron</Link></li>
         <li className="na-item">
           <Link className="nav-link" to="/alert">Alert</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/buttons">Buttons</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/glyphicon">Glyphicon</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/badges">Badges</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/progress">Progressbar</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/spinners">Spinners</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/pagination">Pagination</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/listgroup">Listgroup</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/cards">Cards</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/dropdown">Dropdown</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/collapse">Collapse</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/nav">Nav</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/navbar">Navbar</Link>
         </li>
       </ul>
       </div>
       </nav>
       <Switch>
         <Route exact path="/container" component={Container } />
         <Route path="/gridbasic" component={Gridbasic} />
         <Route path="/typography" component={Typography} />
         <Route path="/colors" component={Colors} />
         <Route path="/table" component={Table} />
         <Route path="/image" component={Images} />
         <Route path="/jumbotron" component={Jumbtron} />
         <Route path="/alert" component={Alert} />
         <Route path="/buttons" component={Button} />
         <Route path="/glyphicon" component={Glyphicon} />
         <Route path="/badges" component={Badges} />
         <Route path="/progress" component={Progressbar} />
         <Route path='/spinners' component={Spinners} />
         <Route path="/pagination" component={Pagination} />
         <Route path="/listgroup" component={Listgroup} />
         <Route path="/cards" component={Cards} />
         <Route path='/dropdown' component={Dropdown} />
         <Route path='/collapse' component={Collapse} />
         <Route path="/nav" component={Nav} />
         <Route path='/navbar' component={Navbar} />

       </Switch>
       </Router>
    </div>
  );
}

export default App;
