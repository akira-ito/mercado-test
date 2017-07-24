import React from 'react';
import { Link } from 'react-router-dom'
import Item from './Item.jsx';
import _ from 'lodash'
import './Items.scss'

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }
    componentWillReceiveProps(nextProps){
        this.state = {
            items: nextProps.items
        }
    }
  	render() {
        let { items } = this.state;

        if (_.isEmpty(items))
            return (
                <section className="Items">
                    Carregando..
                </section>
            )

    	return (
            <section className="Items">
                { items.map((item, i) => (
                    <Link to={`/items/${item.id}`} key={item.id}>
                        {i>0 && <div className="Items-Line"></div>}
                        <Item {...item} />
                    </Link>
                )) }
            </section>
    	);
  	}
}