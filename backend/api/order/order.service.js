const dbService = require('../../services/db.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    update,
    add
 
}

async function add(order) {
    const collection = await dbService.getCollection('order')
    try {
        await collection.insertOne(order);
        return order;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}


async function query(shopId) {
    const criteria = {"fromShop.id":`${shopId}`}
    console.log('criteria',criteria);
    
    const collection = await dbService.getCollection('order')
    try {
        const orders = await collection.find(criteria).toArray();
        return orders
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }
}


async function update(order) {
    const collection = await dbService.getCollection('order')
    order._id = ObjectId(order._id);

    try {
        await collection.replaceOne({"_id":order._id}, {$set : order})
        return order
    } catch (err) {
        console.log(`ERROR: cannot update order ${order._id}`)
        throw err;
    }
}




