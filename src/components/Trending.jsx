import React from 'react'
import "./index.css"
import ProductItem from "./ProductItem"

export default function Trending() {
    return (
        <div className='trending'>
            <h1>Trending Products</h1>
            <div className="products">
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <ProductItem type="item"/>
                <button>View All Products</button>
            </div>
        </div>
    )
}
