
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = {}) {

    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('product')
    try {
        let products;
        products = await collection.find(criteria).toArray();

        return products
    } catch (err) {
        console.log('ERROR: cannot find products')
        throw err;
    }
}

async function remove(productId) {
    const collection = await dbService.getCollection('product')
    try {
        await collection.deleteOne({ "_id": ObjectId(productId) })
    } catch (err) {
        console.log(`ERROR: cannot remove product ${productId}`)
        throw err;
    }
}


async function add(product) {
    product.byUserId = ObjectId(product.byUserId);
    product.aboutUserId = ObjectId(product.aboutUserId);

    const collection = await dbService.getCollection('product')
    try {
        await collection.insertOne(product);
        return product;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


async function update(product) {
    const collection = await dbService.getCollection('product')
    product._id = ObjectId(product._id);

    try {
        await collection.replaceOne({ "_id": product._id }, { $set: product })
        return product

    } catch (err) {
        console.log(`ERROR: cannot update item ${product._id}`)
        throw err;
    }
}


function _buildCriteria(filterBy) {

    console.log('roy',filterBy);
    
    let criteria = {};
    let filters = []

    if (filterBy.title) {
        console.log('txt',criteria)
        criteria["$or"] = [{ 'title': { $regex: filterBy.title} }]
    }

    if (Array.isArray(filterBy.label)) {
        filterBy.label.forEach(value => {

            filters.push({ 'labels': value })
        })
        criteria["$or"] = filters
        return criteria;

    }
    if (filterBy.label !== undefined) criteria = ({ 'labels': filterBy.label })
    if (filterBy.itemOwner) criteria['itemOwner.id'] = filterBy.itemOwner
    
    return criteria;
}

module.exports = {
    query,
    remove,
    add,
    update
}


