
import StorageService from '../services/StorageService'
export default {
    toggleWishList,
    itemFromWishList,
    getWishList
}

async function toggleWishList(item) {
    let itemToToggle=await itemFromWishList(item._id)
    console.log('ser',itemToToggle);
    
 
  let updatedItem= await (!itemToToggle)? StorageService.post('wishlist',item) : StorageService.remove('wishlist',item._id)
  
  
 return updatedItem

}

 
 function itemFromWishList(itemId) {
    const item=StorageService.get('wishlist',itemId)
    return item
 } 

 async function getWishList(){
    let wishList=await StorageService.query('wishlist')
    return wishList

 }