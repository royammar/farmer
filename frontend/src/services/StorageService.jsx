

export default {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    clearStorage,
    getwishlist
}

async function query(entityType) {
    let entities = await JSON.parse(localStorage.getItem(entityType)) || []
    return entities
}


async function post(entityType, newEntity) {
    let entities = await query(entityType)
    // newEntity._id = _makeId() //// turned off because it changes the item id(roy)    
    entities.push(newEntity);
    _save(entityType, entities)
    return newEntity;
}


async function get(entityType, entityId) {
let entities=await query(entityType)
       let item= entities.find(entity => entity._id === entityId)
       return item
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            entities.push(...newEntities);
            _save(entityType, entities)
            return entities;
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity;
        })
}

async function remove(entityType, entityId) {
    let entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId);
    entities.splice(idx, 1)
    _save(entityType, entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}


function clearStorage(entity) {
    localStorage.removeItem(entity);

}

function getwishlist(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return entities
}

// function _makeId(length = 5) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// }