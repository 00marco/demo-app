const { User } = require('../models');
const { sequelize } = require('../models');

exports.getUser = async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findOne({
      where: {
        id,
      },
    });
  
    if (!user) {
      return res.status(400).send({
        message: `No user found with the id ${id}`,
      });
    }
  
    return res.send(user);
  };

exports.createUser = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    let newUser = await User.create({
        firstName,
        lastName,
    });
    newUser.save();
    return res.send({newUser});
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.createRandomUser = async (req, res) => {
  try {
    let newUser = await User.create({
      firstName: 'User',
      lastName: Math.random().toString(),
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.getProperty = async(req, res) => {
    res.send({
        message: 'Property is working!',
    })
}
