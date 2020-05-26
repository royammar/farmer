import React, {useEffect, useContext, useState } from 'react';


export default function ProductEdit({product,setEditMode,saveProduct}) {
  
    const [currProduct,setCurrProduct]=useState('')

    function handleChange(ev) {
    setCurrProduct({...currProduct,[ev.target.name]:ev.target.value})
    }


    async function handleSave() {
        saveProduct(currProduct)
        setEditMode('')
        console.log('roy');
        
    }

    useEffect(() => {
        setCurrProduct(product)
        return () => {
            setCurrProduct('')
        }
    }, [product])




    return (
        <div className="edit flex column align-center">
            <button onClick={()=>setEditMode('')}>X</button>
            <label>Title</label>
            <input type='txt' name="title" onChange={handleChange} value={currProduct.title}></input>
            <label>Price</label>
            <input type='txt' name="price" onChange={handleChange} value={currProduct.price}></input>
            <label>Description</label>
            <input type='txt' name="description" onChange={handleChange} value={currProduct.description}></input>
            <label>Image</label>
            <input type='txt' name="img" onChange={handleChange} value={currProduct.img}></input>
            <img className="product-img" src={product.img}></img>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}
