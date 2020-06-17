import React, { useEffect, useContext, useState } from 'react';


export default function ProductEdit({ product, setEditMode, saveProduct }) {

    const [currProduct, setCurrProduct] = useState('')

    function handleChange(ev) {
        if (ev.target.name==='labels') setCurrProduct({...currProduct,labels:[ev.target.value]})

        else setCurrProduct({ ...currProduct, [ev.target.name]: ev.target.value })
    }


    async function handleSave() {
        saveProduct(currProduct)
        setEditMode('')

    }

    useEffect(() => {
        setCurrProduct(product)
        return () => {
            setCurrProduct('')
        }
    }, [product])

    return (
        <div className="edit flex column align-center">
            <button className="close" onClick={() => setEditMode('')}>X</button>
            <label  className='edit-item-name'>Title</label>
            <input type='txt' name="title" placeholder="Product Name" onChange={handleChange} value={currProduct.title}></input>
            <label  className='edit-item-name'>Price</label>
            <input type='txt' name="price" placeholder="Price" onChange={handleChange} value={currProduct.price}></input>
            <label  className='edit-item-name'>Image</label>
            <input type='txt' name="img"  placeholder="Image URL" onChange={handleChange} value={currProduct.img}></input>
            <label  className='edit-item-name' htmlFor="select">Category</label>
            <select name="labels" id="select" onChange={handleChange}>
                <option value="fruits" selected>fruits</option>
                <option value="vegtabels">vegtabels</option>
                <option value="herb">herb</option>
                <option value="special">special</option>
            </select>
            <img className="product-img" src={currProduct.img}></img>
            <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
    )
}



