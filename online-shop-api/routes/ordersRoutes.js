const router = require("express").Router();
const orderController = require("../controllers/orderController");


router.get('/', orderController.getOrders);

router.post('/', orderController.createOrder);

router.get('/:orderId',orderController.getOrder);

module.exports = router;