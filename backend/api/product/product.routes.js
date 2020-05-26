const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addProduct, getProducts, deleteProduct,updateProduct} = require('./product.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getProducts)
router.post('/',  requireAuth, addProduct)
router.delete('/:id',  requireAuth, deleteProduct)
router.put('/:id',updateProduct)

module.exports = router