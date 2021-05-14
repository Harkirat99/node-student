let mapper = require('../mappers/student')
let Student = require('../models/student')
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
    if (model.age) {
        entity.age = model.age
    }
}

exports.create = async (body) => {
    let entity = new Student({})
    await set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.update = async (id, body) => {
    let entity = await Student.findById(id).populate('class')
    await set(entity, body)
    await entity.save()
    return mapper.toModel(entity)
}

exports.get = async (id) => {
    let entity = await Student.findById(id).populate('class')
    return mapper.toModel(entity)
}

exports.search = async (query) => {
    where = {}

    if (query.name) {
        where.name = query.name
    }

    if (query.age) {
        where.age = query.age
    }

    if (query.class) {
        where.class = await classService.get(query.class)
    }

    let entities = await Student.find(where).populate('class')
    return mapper.toSearchModel(entities)
}

exports.delete = async (id) => {
    let entity = await Student.findByIdAndDelete(id).populate('class')
    if (entity) {
        return 'Deleted Successfully'
    } else {
        return 'Unable to Delete'
    }

}