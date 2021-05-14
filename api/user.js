let mapper = require('../mappers/user')
let User = require('../models/user')
let service = require('../service/user')



exports.create = async (body) => {
    let entity = await service.create(body)
    return mapper.toModel(entity)
}

exports.login = async (body) => {
    let entity = await service.login(body)
    return mapper.toModel(entity)
}
