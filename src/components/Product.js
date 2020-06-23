import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
            <div className="container">
                <h1>{title}</h1>
                <div onClick={() => {
                    console.log("clicked image")
                }} >{img}</div>
                <Link to="/details">
                    <img src={img} alt="product" className="image"></img>
                </Link>
                <button className="cart-btn" disabled={inCart}></button>
            </div>
        )
    }
}
