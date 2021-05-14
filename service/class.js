let Class = require('../models/class')

const set = function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
}

exports.create = async (model) => {
    let entity = new Class({})
    await set(entity, model)
    await entity.save()
    return entity   
}

exports.update = async (id, model) => {
    let entity = await Class.findById(id)
    await  set(entity, model)
    await entity.save()
    return entity
}

exports.get = (id) => {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        return Class.findById(id)
    } else {
        return Class.findOne({
            name: id
        })
    }
}
