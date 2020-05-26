const orderService = require('./order.service')
  
// async function getItems(req, res) {
//     console.log(req.query);
//     const orders = await orderService.query(req.query)
//     res.send(orders)
// }

// async function getItem(req, res) {
//     const order = await orderService.getById(req.params.id)
//     res.send(order)
// }


async function addOrder(req, res) {
    var order = req.body;
    order = await orderService.add(order)
    res.send(order)
}


async function getOrders(req,res) {
    
    const orders = await orderService.query(req.params.id)
    res.send(orders)

}



async function updateOrder(req,res) {
    let order = req.body;
    await orderService.update(order)
    res.send(order)
}

module.exports = {
    addOrder,
    getOrders,
    updateOrder
}