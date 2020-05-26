
import StorageService from '../services/StorageService'
import HttpService from '../services/HttpService'
export default {
    toggleItemToCart,
    itemFromCart,
    getCart,
    saveOrder
}

async function toggleItemToCart(item) {
    let itemToToggle=await itemFromCart(item._id)
 
  let updatedItem= await (!itemToToggle)? StorageService.post('cart',item) : StorageService.put('cart',item)
  
  
 return updatedItem

}


async function getCart(){

    let cart=await StorageService.query('cart')
    return cart

}

 
 function itemFromCart(itemId) {
    const item=StorageService.get('cart',itemId)
    return item
    } 


    
async function saveOrder(order) {
    const savedOrder = await HttpService.post('order', order)
    return savedOrder
}