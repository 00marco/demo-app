const { Property, User } = require('../models');
const uuidParse = require('uuid-parse');

exports.getProperty = async(req, res) => {
    res.send({
        message: 'Property is working!',
    })
}

exports.createProperty = async(req, res) => {
    const { userId, street, city, state, zip, rent } = req.body
    
    try {
        const user = await User.findOne( {where: { id: userId }});
        const property = await Property.create(
            {   
                street,
                city,
                state,
                zip, 
                rent, 
                userId: user.id
            },
            {
                include: "user" 
            }
        )
        property.save();
        return res.json(property);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
