const shopService = require('./shop.service')
  
// async function getShops(req, res) {
//     console.log(req.query);
//     const shops = await shopService.query(req.query)
//     res.send(shops)
// }

async function getShop(req, res) {
    const shop = await shopService.getById(req.params.id)
    res.send(shop)
}


async function updateShop(req, res) {
    const shop = req.body;
    await shopService.update(shop)
    res.send(shop)
}

async function addShop(req, res) {
    
    let shop = req.body;
    
    shop = await shopService.add(shop)
    
    console.log('shop',shop);
    res.send(shop)
}



module.exports = {
    // getShops,
    getShop,
    updateShop,
    addShop
}