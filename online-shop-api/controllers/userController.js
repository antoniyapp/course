const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (err) {
    return res.status(400).send({ err: err.toString() });
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
    return res.status(400).send({ err: err.toString() });
  }
};

const getUser = async (req, res) => {
  try {
    let userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({message: "User not found!"});
    }

    res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ err: err.toString() });
  }
};

const updateUser = async (req, res) => {
  try{
    
  }catch(err){
    return res.status(400).send({err: err.toString()});
  }
}