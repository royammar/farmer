const express = require('express')
// const {getUser, getUsers, deleteUser, updateUser} = require('./item.controller')
const {getShop,updateShop,addShop} = require('./shop.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.get('/', getShops)
router.get('/:id', getShop)
router.put('/:id',updateShop)
router.post('/',addShop)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router