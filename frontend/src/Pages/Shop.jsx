import React, { useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList';
import ShopService from '../services/ShopService';
import ShopHeader from '../cmps/ShopHeader'
import ProductEdit from '../cmps/ProductEdit';
import ProductService from '../services/ProductService';
import { UserContext } from '../contexts/UserContext'
import { ProductContext } from '../contexts/ProductContext';
export default function Shop(props) {

    const [shop, setShop] = useState('')
    const [shopProducts, setShopProducts] = useState([])
    const [product, setProduct] = useState('')
    const { products, dispatch } = useContext(ProductContext)
    const { loggedInUser, userDispatch } = useContext(UserContext)
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
    }, [products, props.match.params.id, shop])


    function setEditMode(product) {
        setProduct(product)
    }


    async function updateLogo(newShop) {
        updatInfo(newShop)
        shopProducts.map(async (product) => {
            product.itemOwner.logoUrl = shop.style.logoUrl
            await ProductService.put(product)
        })
    }

    async function updatInfo(newShop) {
        let updatedShop = await ShopService.put(newShop)
        setShop(updatedShop)
    }

    async function saveProduct(currProduct) {
        try {
            if (currProduct._id) {
                let updatedProduct = await ProductService.put(currProduct)
                dispatch({ type: 'PRODUCT_UPDATE', updatedProduct })
            }
            else {
                currProduct.itemOwner = { id: shop._id, name: shop.info.name, logoUrl: shop.style.logoUrl, location: 'Tel Aviv' }
                let newProduct = await ProductService.add(currProduct)
                dispatch({ type: 'PRODUCT_ADD', newProduct })
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="shop flex1 top-padding">
            {shop !== '' && <ShopHeader loggedInUser={loggedInUser} shop={shop} updatInfo={updatInfo} updateLogo={updateLogo} ></ShopHeader>}
            {loggedInUser && shop && loggedInUser.shopId === shop._id ? <button className="add-btn" onClick={() => setEditMode({})}>Add ITEM</button> : null}
            <ProductList listMode='shop' setEditMode={setEditMode} products={shopProducts}></ProductList>
            {product && <ProductEdit saveProduct={saveProduct} setEditMode={setEditMode} product={product}></ProductEdit>}
        </div>
    )
}


