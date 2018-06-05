const router = require("express").Router();
const userController = require("../controllers/postController");

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:userId', userController.getUser);

router.put('/:userId', userController.updateUser);

module.exports = router;