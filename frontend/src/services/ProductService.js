import HttpService from './HttpService';

export default {
    //   add,
    query,
    put
    // remove
};


async function query(filterBy = null) {
    let str=''

    console.log(filterBy);
    
    if ( (!filterBy.label||filterBy.label.length===0 )  && !filterBy.title) {
        
        console.log('stop here');
        
        return HttpService.get('product');
    }
  
    if (filterBy.label&&filterBy.label.length>0){
      filterBy.label.forEach((value) => {
        if (str !== '') str += '&'
        str += 'label' + '=' + value
    })
        }

    else if (filterBy.title.length>0)  {
        str += 'title' + '=' + filterBy.title
    } 
 
    
    return HttpService.get(`product?${str}`);
    // const productsToRender=await products
    // return productsToRender
}


// function remove(productId) {
//     return products.filter(product => product._id !== productId)
//     //   return HttpService.delete(`review/${reviewId}`);
// }


// async function add(review) {
//   const addedReview  = await HttpService.post(`review`, review);
//   return  addedReview
// }


async function put(editedproduct) {
    
    const productToEdit = await HttpService.put(`product/${editedproduct._id}`, editedproduct);

    return productToEdit

}