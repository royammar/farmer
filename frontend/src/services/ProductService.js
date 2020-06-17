import HttpService from './HttpService';

export default {
    add,
    query,
    put,
    remove
};


async function query(filterBy = null) {
    let str=''
    if ( (!filterBy.label||filterBy.label.length===0 )  && !filterBy.title) {
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
}


function remove(productId) {

    return HttpService.delete(`product/${productId}`);
}






async function put(editedproduct) {
    
    const productToEdit = await HttpService.put(`product/${editedproduct._id}`, editedproduct);
    return productToEdit
}


async function add(newProduct) {
    
    const product = await HttpService.post('product', newProduct);

    return product

}