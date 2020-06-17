import React from 'react'
import ProductPreview from '../cmps/ProductPreview'

export default function ProductList({ products,listMode,setEditMode}) {
    return (
        <ul className="list container" >{products.map((product) =>
            <ProductPreview listMode={listMode} setEditMode={setEditMode} key={product._id} product={product}></ProductPreview>)
        }</ul>
    )
}
