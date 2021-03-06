const db = require('../models');
const Property = db.rest.models.property;

exports.getProperty = async(req, res) => {
    res.send({
        message: 'Property is working!',
    })
}
