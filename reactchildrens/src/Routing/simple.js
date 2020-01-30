import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import Increment from '../LifeCycle/increment'
import Content from  "../LifeCycle/content"
import Timer from '../components/Statefulcomponent'
import Star from "../components/starrating"

import Calendar from '../calnder/monthcalnder';
import Thisvsthisstate from '../components/thisvsthisState';
import ButtonClick from '../HOC/clickIncrement';
import MouseOver from '../HOC/hoverincrement';
import Reactfreagments from '../Fragments';
import Purecomponents from '../PureComponents';

const FirstTab = ({ match }) => {
    return (
        <div className="m-5">
            <ul>
                <li><Link to={`${match.url}/lifecycle`}>Life Cycle</Link></li>
                <li><Link to={`${match.url}/content`}>Content</Link></li>
                <li><Link to={`${match.url}/timer`}>Timer</Link></li>
                <li><Link to={`${match.url}/star`}>Star</Link></li>
                <li><Link to={`${match.url}/calender`}>Calendar</Link></li>
                <li><Link to={`${match.url}/thisstate`}>This Concept</Link></li>
                <li><Link to={`${match.url}/buttonclick`}>ButtonClick</Link></li>
                <li><Link to={`${match.url}/mouseover`}>MouseOver</Link></li>
                <li><Link to={`${match.url}/freagments`}>React Freagments</Link></li>
                <li><Link to={`${match.url}/purecomponents`}>Pure Components</Link></li>
                
            </ul>
            
            <Route path={`${match.url}/lifecycle`} component={Increment} />
            <Route path={`${match.url}/content`} component={Content} />
            <Route path={`${match.url}/timer`} component={Timer} />
            <Route path={`${match.url}/star`} component={Star} />
            <Route path={`${match.url}/calender`} component={Calendar} />
            <Route path={`${match.url}/thisstate`} component={Thisvsthisstate} />
            <Route path={`${match.url}/buttonclick`} component={ButtonClick} />
            <Route path={`${match.url}/mouseover`} component={MouseOver} />
            <Route path={`${match.url}/freagments`} component={Reactfreagments} />
            <Route path={`${match.url}/purecomponents`} component={Purecomponents} />

           
        </div>
    )
};

export default FirstTab;