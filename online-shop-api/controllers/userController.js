const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};

const createUser = async (req, res) => {
  try {
    let user = new User(req.body);
    user = await user.save();

    res
      .status(201)
      .location(`/api/users/${user._id}`)
      .send();
  } catch (err) {
    return res.status(400).send({err: err.toString()});
  }
};