const router = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require('../serverAuth.js').verifyToken;

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:userId',verifyToken, userController.getUser);

router.put('/:userId',verifyToken, userController.updateUser);

router.post('/login',userController.loginUser);

module.exports = router;