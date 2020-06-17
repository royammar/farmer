// const logger = require('../../services/logger.service')
const productService = require('./product.service')
 
// TODO: needs error handling! try, catch

async function getProducts(req, res) {
   
    try {
        const products = await productService.query(req.query)
        
        res.send(products)
        
    } catch (err) {
        // logger.error('Cannot get products', err);
        res.status(500).send({ error: 'cannot get products' })
        
    }
}

async function deleteProduct(req, res) {
    await productService.remove(req.params.id)
    res.end()
}

async function addProduct(req, res) {
    var product = req.body;
    console.log(product,'rpror');
    
    product = await productService.add(product)

    res.send(product)
}



async function updateProduct(req,res) {

    let product = req.body;
    await productService.update(product)
    res.send(product)

}

module.exports = {
    getProducts,
    deleteProduct,
    addProduct,
    updateProduct
}