import React from 'react'
import "./index.css"
import ProductItem from './ProductItem'

export default function ShopCategory() {
    return (
        <div className='shop-cat'>
            <h1>Shop Category</h1>
            <div className="categoies">
                <ProductItem type="cat" />
                <ProductItem type="cat" />
                <ProductItem type="cat" />
                <ProductItem type="cat" />
                <ProductItem type="cat" />
                <ProductItem type="cat" />
            </div>
        </div>
    )
}
