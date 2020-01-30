import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import SaasExample from '../SassEx/index';
import ContextExample from "../Context/index";
import RefExample from "../Ref";
import Responsivedesign from "../ResponsiveWebsite";




const SecondTab = ({ match }) => {
    return (
        <div>
             {/* <Route exact path={match.url} render={()=>(
                <h3>Please select a section: </h3>
            )} /> */}
            <ul>
                <li><Link to={`${match.url}/saasexamples`}>Saas Examples</Link></li>
                <li>
                    <Link to={`${match.url}/contextexample`}>Context Example</Link>
                </li>
                <li>
                    <Link to={`${match.url}/refexample`}>Ref Example</Link>
                </li>
                <li><Link to={`${match.url}/responsivedesign`}>Responsivedesign</Link></li>
                
            </ul>
            <Route path={`${match.url}/saasexamples`} component={SaasExample} />
            <Route path={`${match.url}/contextexample`} component={ContextExample} />
            <Route path={`${match.url}/refexample`} component={RefExample} />
            <Route path={`${match.url}/responsivedesign`} component={Responsivedesign} />
           
        </div>
    )
};

export default SecondTab;