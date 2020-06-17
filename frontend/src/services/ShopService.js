import HttpService from './HttpService';

export default {
    get,
    getProductsByShop,
    put,
    add
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



async function put(shop){
    const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
    return shopUpdate
}

async function add(loggedInUser){
    let shop=createShop(loggedInUser)
    const NewShop = await HttpService.post('shop', shop)
    console.log('newShop',NewShop);
    return NewShop
}


function createShop(user){
let shop=
{
    "info" : {
        "name" : "Your Shop",
        "description" : "Your shop description",
        "instagram" : "https://www.instagram.com/?hl=en",
        "facebook" : "https://www.instagram.com/?hl=en"
    },
    "owner" : {
        "id" : user._id,
        "name" : user.username
    },
    "style" : {
        "coverImgUrl" : "https://www.pikpng.com/pngl/m/77-774659_the-ground-round-logo-png-transparent-ground-round.png",
        "logoUrl" : "https://cdn.freebiesupply.com/logos/large/2x/the-ground-round-logo-png-transparent.png"
    }
}

return shop
}