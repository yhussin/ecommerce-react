import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
<ProductConsumer>
    {value => {
        const {id, company, img, info, price, title, inCart } = value.detailProduct
        return (
            <>
            <div>
                <p>Model: {title}</p>
                <img src={img} alt="product"></img>
                {company}
            </div>
            <Link to="/">
                <button>Back to Home</button></Link>
            <button
            disabled={inCart}
            onClick={() => {
                value.addToCart(id)
            }}
            >{inCart ? "inCart" : "Add to Cart"}</button>
            </>
        )
    }}
</ProductConsumer>
        )
    }
}
