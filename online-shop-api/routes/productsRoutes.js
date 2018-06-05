const productRouter = require("express").Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.getProducts);

productRouter.post("/", productController.createProduct);

productRouter.get("/:productId", productController.getProduct);

productRouter.put("/:productId", productController.updateProduct);

productRouter.delete("/:productId", productController.deleteProduct);

module.exports = productRouter;