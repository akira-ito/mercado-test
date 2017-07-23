import React from 'react';
import imgShipping from '../public/img/shipping.png'
import './Item.scss'

export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = props
    }
  	render() {
        let {id, picture, price, title, free_shipping} = this.state;

    	return (
            <div className="Item">
                <div className="Item-Picture">
                    <div className="Item-Picture-Img" style={{backgroundImage: `url(${picture})`}}/>
                </div>
                <div className="Item-Description">
                    <div className="Item-Description-Amount">
                        <div className="Item-Description-Price">
                            {price.currency} {price.amount}
                            {free_shipping && <img src={imgShipping} />}
                        </div>
                        <div className="Item-Description-State">Capital Federal</div>
                    </div>
                    <div className="Item-Description-Title">{title}</div>
                </div>
            </div>
    	);
  	}
}