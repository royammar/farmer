import React, {useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList';
import ShopService from '../services/ShopService';
import ShopHeader from '../cmps/ShopHeader'
import ProductEdit from '../cmps/ProductEdit';
import ProductService from '../services/ProductService';

import { ProductContext } from '../contexts/ProductContext';
export default function Shop(props) {
    
    const [shop, setShop] = useState('')
    const [shopProducts, setShopProducts] = useState([])
    const [product,setProduct]=useState('')
    const {products, dispatch } = useContext(ProductContext)
    
    let { id } = props.match.params

    async function loadShop() {
        try {
            let curShop = await ShopService.get(id)
            setShop(curShop)
        }
        catch (err) {
            console.log('ProductActions: err in loadShop', err);
        }
    }

    async function loadShopProducts() {
        try {
            let shopProducts = await ShopService.getProductsByShop(id)

            setShopProducts(shopProducts)
        }
        catch (err) {
            console.log('ProductActions: err in loadShopProducts', err);
        }
    }


    useEffect(() => {
        loadShop()
        loadShopProducts()
        return () => {
        }
    }, [products])


    function setEditMode(product) {
        setProduct(product)
    }

    async function saveProduct(currProduct) {
        try {
            let updatedProduct = await  ProductService.put(currProduct)
            console.log('ro1y',updatedProduct);
            
            dispatch({ type:'PRODUCT_UPDATE',updatedProduct})
            
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="shop container flex1 top-padding">
            {shop !== '' && <ShopHeader shop={shop} ></ShopHeader>}
            <ProductList listMode='shop' setEditMode={setEditMode}  products={shopProducts}></ProductList>
            {product&&<ProductEdit  saveProduct={saveProduct} setEditMode={setEditMode} product={product}></ProductEdit>}
        </div>
    )
}


