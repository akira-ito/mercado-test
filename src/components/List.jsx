import React from 'react';
import QueryString from 'query-string'
import Items from './Items.jsx'
import * as ItemsService from '../services/Items'

export default class List extends React.Component {

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
        this._search(this.props);
    }
    componentWillReceiveProps(nextProps){
        this._search(nextProps);
    }
    render() {
        return (
            <div className="Main-Content content">
                <section className="Main-Breadcrumbs">{this.state.categories.join(' > ')}</section>
                <Items items={this.state.items}/>
            </div>
        );
    }
    _search({location}){
        let query = QueryString.parse(location.search);
        if (this._lastQuery == query.search) return; 

        this._lastQuery = query.search;
        ItemsService.search(this._lastQuery, 4)
            .then(res => {
                this.setState(res.data)
            }).catch(err => {

                if (err.response.status == 400){
                    //show Modal erro de validação
                } else {
                    // Aviso "não foi possivel"
                }
            });
    }
}