import HttpService from './HttpService';

export default {
    get,
    getProductsByShop
}

async function get(shopId){
    const shop = await HttpService.get(`shop/${shopId}`)
    return shop
}

function getProductsByShop(itemOwner='') {
    if (itemOwner !== '') {
        return HttpService.get(`product?itemOwner=${itemOwner}`);
    }
    
}