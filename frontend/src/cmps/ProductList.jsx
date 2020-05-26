import React from 'react'
import ProductPreview from '../cmps/ProductPreview'

export default function ProductList({ products,listMode,setEditMode}) {
    return (
        <ul className="list" >{products.map((product) =>
            <ProductPreview listMode={listMode} setEditMode={setEditMode} product={product}></ProductPreview>)
        }</ul>
    )
}
