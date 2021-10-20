
import React from "react";

class Goods extends React.Component {
    constructor (props) {
        super(props);

        this.setProducts = this.setProducts.bind(this);
        this.onBuy = this.onBuy.bind(this);

        this.state = {
            products: [],
            summ: 0
        }
    }
    setProducts(data) {

        this.setState({
            products: data
        })
    }
    componentDidMount() {
        const URL = 'https://fakestoreapi.com/products';
        fetch(URL).then((item) => item.json()).then(data => this.setProducts(data));
    }

    onBuy(e) {
        console.log(e.target.value);
        let {summ} = this.state;
        summ = +summ+(+e.target.value)
        summ = summ.toFixed(2);
        this.setState ({
            summ: summ
        })
    }

    render() {
        const prods = this.state.products;
        const summ = this.state.summ;
        return (
            <>
            
            <div className='container d-flex flex-wrap justify-content-evenly' style={{zIndex: '1'}}>
            <div style={{width: '300px', position: 'fixed', right: '0', zIndex: '99', background: 'white'}}>
                <h3>Всего куплено на :{summ} $</h3>
            </div>
                {prods?.map(item => 
                                        <div className="card" style={{width: '18rem'}}>
                                        <img src={item.image} className="card-img-top" alt={item.description} style={{width: '50px'}}/> 
                                        <h3 style={{border: '1px red solid', width: '150px'}}>{item.price}$</h3>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <button onClick={(e)=>this.onBuy(e)} className="btn btn-primary" value={item.price}>Add to cart</button>
                                            
                                        </div>
                                        </div>
                                    )}
            </div>
            
            </>
        )
    }
}

export default Goods;