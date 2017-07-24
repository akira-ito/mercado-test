import React from 'react';
import NumberFormat  from 'react-number-format'
import './Item.scss'

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = props
    }
  	render() {
        let {id, picture, price, title, free_shipping, state_name} = this.state;

    	return (
            <div className="Item">
                <div className="Item-Picture">
                    <div className="Item-Picture-Img" style={{backgroundImage: `url(${picture})`}}/>
                </div>
                <div className="Item-Description">
                    <div className="Item-Description-Amount">
                        <div className="Item-Description-Price">
                            <NumberFormat value={price.amount} displayType={'text'} prefix={`${price.currency} `} decimalPrecision={price.decimals} />
                            {free_shipping && <span className="Img" />}
                        </div>
                        <div className="Item-Description-State">{state_name}</div>
                    </div>
                    <div className="Item-Description-Title">{title}</div>
                </div>
            </div>
    	);
  	}
}