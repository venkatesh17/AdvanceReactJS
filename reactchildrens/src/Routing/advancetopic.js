import React from 'react';
import { Route, Link } from 'react-router-dom';

import Webhooksexample from '../ReactWebhooks'
import Highlightwords from '../ReactHighlighter/Highlighter';

import Timesheet from '../Timesheet';
import Websocketexample from '../websocket/App'
import EditingLive from '../Codepenexamples/EditingLive'


const Advancetopic = ({ match })=>{
    return(
        <div className="container">
            <ul>
                <li><Link to={`${match.url}/timesheet`}>Bill Payments</Link></li>
                <li><Link to={`${match.url}/webhooks`}>Webhooks</Link></li>
                <li><Link to={`${match.url}/highlightwords`}>Highlightwords</Link></li>
                <li><Link to={`${match.url}/websocket`}>Websocket Example</Link></li>
                <li><Link to={`${match.url}/editlive`}>Edit Live</Link></li>
            </ul>
            <Route path={`${match.url}/webhooks`} component={Webhooksexample}/>
            <Route path={`${match.url}/highlightwords`} component={Highlightwords} />
            <Route path={`${match.url}/websocket`} component={Websocketexample} />
            <Route path={`${match.url}/timesheet`} component={Timesheet} />
            <Route path={`${match.url}/editlive`} component={EditingLive} />
        </div>
    )
}

export default Advancetopic;
