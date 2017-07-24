import React from 'react';
import * as ItemsService from '../services/Items'
import NumberFormat  from 'react-number-format'
import './Details.scss'

export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author: {},
            condition: "",
            description: "",
            free_shipping: false,
            id: "",
            picture: "",
            price: {},
            sold_quantity: null,
            title: "",
            isLoading: false,
            isNotFound: false
        }
    }
    componentDidMount(){
        this.setState({isLoading: true});
        ItemsService.get(this.props.match.params.id )
            .then(res => {
                this.setState(res.data)
                this.setState({isLoading: false});
            }).catch(err => {
                this.setState({isLoading: false});

                if (err.response.status == 404){
                    this.setState({isNotFound: true});
                } else if (err.response.status == 400){
                    // show aviso de validação
                } else {
                    // erro não foi possivel
                }
            });
    }
    render() {
        let { id = "", picture, condition, sold_quantity, title, price, description, categories=[], isLoading, isNotFound } = this.state;

        if (isLoading)
            return (
                <div className="content" key={id}>
                    <div> Buscando...</div>
                </div>
            );
        else if  (isNotFound)
            return (
                <div className="content" key={id}>
                    <h2>
                        Não encontramos o seu produto. :(
                    </h2>
                </div>
            );
        return (
            <div className="content" key={id}>
                <section className="Main-Breadcrumbs">{categories.join(' > ')}</section>
                <section className="Main-Details">
                    <div className="Details-Root">
                        <div className="Details-Picture">
                            {picture && <img src={picture} />}
                            {!picture && <div style={{width: '680px', height: '400px'}}/>}
                        </div>
                        <div className="Details-Specification">
                            <div className="Condition">
                                {condition} {condition && '-'} {sold_quantity} vendidos
                            </div>
                            <div className="Title">
                                {title}
                            </div>
                            <div className="Amount">
                                <NumberFormat value={price.amount} displayType={'text'} prefix={`${price.currency} `} decimalPrecision={price.decimals} />
                            </div>
                            <div className="Comprar">
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="Details-Description">
                        <div className="Title">
                            Descrição do Produto
                        </div>
                        <div className="Text">
                            {description}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}