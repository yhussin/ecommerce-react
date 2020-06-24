import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
            <div className="container">
                <ProductConsumer>
                    {(value) => (
                        <div className="card">
                        <h1>{title}</h1>
                        <div onClick={() => {
                            value.handleDetail(id)
                        }} >

                            <Link to="/details">
                                <img src={img} alt="product" className="image"></img>
                            </Link>
                            <button
                                className="cart-btn"
                                disabled={inCart}
                                onClick={() => {
                                    value.addToCart(id)
                                }}
                            >
                                {inCart ? (
                                    <p disabled>
                                        {" "}
                              in cart</p>
                                ) : (
                                        <p>Buy me!</p>
                                    )}
                            </button>
                        </div>
                        <h3>${price}</h3>
                        </div>
                    )}

                </ProductConsumer>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}