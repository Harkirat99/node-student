let Customer = require('../models/customer')

const set = function (entity, model) {
    if (model.firstname) {
        entity.firstname = model.firstname
    }
    if (model.lastname) {
        entity.lastname = model.lastname
    }
    if (model.email) {
        entity.email = model.email
    }
    if (model.country) {
        entity.country = model.country
    }
    if (model.state) {
        entity.state = model.state
    }
    if (model.city) {
        entity.city = model.city
    }
    if (model.phonenumber) {
        entity.phonenumber = model.phonenumber
    }
}

exports.create = async (model) => {
    let entity = new Customer({})
    await set(entity, model)
    await entity.save()
    return entity   
}

exports.update = async (id, model) => {
    let entity = await Customer.findById(id)
    await  set(entity, model)
    await entity.save()
    return entity
}

exports.get = (id) => {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        return Customer.findById(id)
    } else {
        return Customer.findOne({
            name: id
        })
    }
}
