import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Title name="Our" title="Products" />
                </div>
                <div>
                    <ProductConsumer>
                        {value => {
                            return value.products.map((product) => {
                                return <Product key={product.id}
                                    product={product}
                                />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
            // < Product /> 
        )
    }
}

