import React from 'react';
import Item from './Item.jsx';
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
    	return (
            <section className="Items">
                { this.state.items.map((item, i) => (
                    <div key={item.id}>
                        {i>0 && <div className="Items-Line"></div>}
                        <Item {...item} />
                    </div>
                )) }
            </section>
    	);
  	}
}