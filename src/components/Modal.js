import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import '../App.css'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <div className="modal">
                            
                                    <h1>Item added to cart</h1>
                                    <img src={img} alt="product"></img>
                                    {title}
                                    <p>${price}</p>
                                    <Link to="/" onClick={() => closeModal()}>back to home</Link>
                                    <Link to="/cart" onClick={() => closeModal()}>go to cart</Link>
                  
                            </div>
                        )
                    }

                }}
            </ProductConsumer>
        )
    }
}

