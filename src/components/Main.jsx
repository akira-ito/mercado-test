import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Details from './Details.jsx'
import List from './List.jsx'
import NoFound from './NotFound.jsx'
import Index from './Index.jsx'
import './Main.scss'

export default class Header extends React.Component {
  	render() {
    	return (
            <main className="Main">
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/items" component={List}/>
                    <Route exact path="/items/:id" component={Details}/>
                    <Route component={NoFound}/>
                </Switch>
            </main>
    	);
  	}
}