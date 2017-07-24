import React from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash'
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
    					<Link to='/'>
    						<div className="Img" />
    					</Link>
    				</div>
    				<form className="Header-Form">
    					<div className="Header-Form-Input">
							<input type="text" name="search" onChange={this.handleChange} />
    					</div>
						
						<Link to={ search.length==0 ? '/' : `/items?search=${search}`}>
							<button className="Header-Form-Search">
								<div className="Img" />
							</button>
						</Link>
    				</form>
    			</div>
    		</header>
    	);
  	}
}