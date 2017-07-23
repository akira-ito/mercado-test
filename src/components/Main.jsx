import React from 'react';
import { Route } from 'react-router-dom'
import QueryString from 'query-string'
import axios from 'axios'
import Items from './Items.jsx'

import './Main.scss'

class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            author: {},
            categories: [],
            items: []
        }
        this._lastQuery = '';
    }
    componentDidMount(){
        let query = QueryString.parse(location.search);
        if (this._lastQuery == query.search) return; 

        this._lastQuery = query.search;
        axios.get(`http://localhost:3000/api/items?search=${this._lastQuery}`)
            .then(res => {
                this.setState(res.data)
            });
    }
    componentWillReceiveProps({location}){
        let query = QueryString.parse(location.search);
        if (this._lastQuery == query.search) return; 

        this._lastQuery = query.search;
        axios.get(`http://localhost:3000/api/items?search=${this._lastQuery}`)
            .then(res => {
                this.setState(res.data)
            });
    }
    render() {
        return (
            <div className="Main-Content content">
                <section className="Main-Breadcrumbs">{this.state.categories.join(' > ')}</section>
                <Items items={this.state.items}/>
            </div>
        );
    }
}

export default class Header extends React.Component {
  	render() {
    	return (
            <main className="Main">
                <Route exact path="/items" component={List}/>
            </main>
    	);
  	}
}