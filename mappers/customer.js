const customerMapper = require('./customer')

exports.toModel = function (entity) {
    let model = {
        id: entity.id,
        firstname: entity.firstname,
        lastname: entity.lastname,
        email: entity.email,
        country: entity.country,
        state: entity.state,
        city: entity.city,
        phonenumber:entity.phonenumber
    }
    return model
}

exports.toSearchModel = function (entities) {
    let models = []
    for (const entity of entities) {
        models.push(this.toModel(entity))
    }
    return models

}