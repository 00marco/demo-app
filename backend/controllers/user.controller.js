const db = require('../models');
const User = db.rest.models.user;

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
    return res.send(newUser);
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
