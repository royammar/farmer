const dbService = require('../../services/db.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById,
    update,
    // getByEmail,
    // remove,
    add
}



async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('shop')
    try {
        const shops = await collection.find(criteria).toArray();
        shops.forEach(shop => delete shop.password);

        return shops
    } catch (err) {
        console.log('ERROR: cannot find shops')
        throw err;
    }
}

async function getById(shopId) {
    // console.log('shopid',shopId)
    const collection = await dbService.getCollection('shop')
    try {
        const shop = await collection.findOne({"_id":ObjectId(shopId)})
        // delete shop.password

        // shop.givenReviews = await reviewService.query({byshopId: ObjectId(shop._id) })
        // shop.givenReviews = shop.givenReviews.map(review => {
        //     delete review.byshop
        //     return review
        // })
     
        return shop
    } catch (err) {
        console.log(`ERROR: while finding shop ${shopId}`)
        throw err;
    }
    }


    async function update(shop) {
        const collection = await dbService.getCollection('shop')
        shop._id = ObjectId(shop._id);
    
        try {
            await collection.replaceOne({"_id":shop._id}, {$set : shop})
            return shop
        } catch (err) {
            console.log(`ERROR: cannot update shop ${shop._id}`)
            throw err;
        }
    }

    async function add(shop) {
        const collection = await dbService.getCollection('shop')
        try {
            await collection.insert(shop);
            return shop;
        } catch (err) {
            console.log(`ERROR: cannot insert shop`)
            throw err;
        }
    }


// async function getByEmail(email) {
//     const collection = await dbService.getCollection('shop')
//     try {
//         const shop = await collection.findOne({email})
//         return shop
//     } catch (err) {
//         console.log(`ERROR: while finding shop ${email}`)
//         throw err;
//     }
// }

// async function remove(shopId) {
//     const collection = await dbService.getCollection('shop')
//     try {
//         await collection.deleteOne({"_id":ObjectId(shopId)})
//     } catch (err) {
//         console.log(`ERROR: cannot remove shop ${shopId}`)
//         throw err;
//     }
// }


// async function add(shop) {
//     const collection = await dbService.getCollection('shop')
//     try {
//         await collection.insertOne(shop);
//         return shop;
//     } catch (err) {
//         console.log(`ERROR: cannot insert shop`)
//         throw err;
//     }
// }

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.shopname = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = {$gte : +filterBy.minBalance}
    }
    return criteria;
}


