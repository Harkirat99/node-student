let mapper = require('../mappers/customer')
let Customer = require('../models/customer')
let service = require('../service/customer')

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
    let entities = await Customer.find(query)
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Customer.findByIdAndDelete(id)
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Deleted'
    }

}