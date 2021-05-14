let mapper = require('../mappers/class')
let Class = require('../models/class')
let service = require('../service/class')

exports.create = async (body) => {
    let entity = await service.create(body)
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await service.update(id, body)
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await service.get(id)
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    let entities = await Class.find(query)
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Class.findByIdAndDelete(id)
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Deleted'
    }

}