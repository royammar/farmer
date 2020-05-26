const express = require('express')
// const {getUser, getUsers, deleteUser, updateUser} = require('./item.controller')
const {addOrder,getOrders,updateOrder} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.post('/', addOrder)
router.get('/:id', getOrders)
router.put('/:id',updateOrder)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router