let mapper = require('../mappers/teacher')
let Teacher = require('../models/teacher')
let classService = require('../service/class')

const set = async function (entity, model) {
    if (model.name) {
        entity.name = model.name
    }
    if (model.class) {
        entity.class = await classService.get(model.class.id)
        if (!entity.class) {
            throw new Error("Class not found")
        }
    }
}

exports.create = async (body) => {
    let entity = new Teacher({})
    await set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await Teacher.findById(id).populate('class')
    await set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await Teacher.findById(id).populate('class')
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    where = {}

    if (query.name) {
        where.name = query.name
    }

    if (query.class) {
        where.class = await classService.get(query.class)
    }

    let entities = await Teacher.find(where).populate('class')
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Teacher.findByIdAndDelete(id).populate('class')
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Delete'
    }

}