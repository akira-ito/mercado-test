import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header.jsx'
import Main from './Main.jsx'
import './App.scss'

export default class App extends React.Component {
  	render() {
    	return (
    		<div className="App">
				<Router>
				    <div>
						<Header/>
						<Main />
				    </div>
			  	</Router>
		  	</div>
    	);
  	}
}