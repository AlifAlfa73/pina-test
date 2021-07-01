const db = require("../data/db.js");


async function createType(data) {
    const id_type = await db.insert({
      type_name: data.type_name,
    }).into('type')
      .returning('id_type');
    
    return { id_type: id_type[0] };
}

async function updateType(typeId, data) {
    const result = await db.table('type')
        .where({
            id_type: typeId
        })
        .update({
            type_name: data.type_name
        });
    
    return result;
}

async function deleteType(typeId) {
    const result = await db.table('type')
        .where({
            id_type: typeId
        })
        .del();
    
    return result;
}



module.exports = {
    createType,
    updateType,
    deleteType,
};