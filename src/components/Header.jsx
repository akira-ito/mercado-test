import React from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash'
import imgLogo from '../public/img/logo.png'
import imgSearch from '../public/img/search.png'
import './Header.scss'

export default class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	search: ''
	    };
	    this.handleChange = this.handleChange.bind(this);
  	}
  	handleChange(e){
  		let search = _.trim(e.target.value);
  		this.setState({search});
  	}
  	render() {
  		let {search} = this.state;
    	return (
    		<header className="Header">
    			<div className="Header-Content content">
    				<div className="Header-Logo">
    					<img src={imgLogo} />
    				</div>
    				<form className="Header-Form">
    					<div className="Header-Form-Input">
							<input type="text" name="search" onChange={this.handleChange} />
    					</div>
						
						<Link to={ search.length==0 ? '/' : `/items?search=${search}`}>
							<button className="Header-Form-Search">
								<img src={imgSearch} />
							</button>
						</Link>
    				</form>
    			</div>
    		</header>
    	);
  	}
}