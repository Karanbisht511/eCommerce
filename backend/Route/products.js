const express = require("express");
const products = require("../Controller/products");
const { isAuthenticated } = require("../Controller/JWTAuthMiddleware");

const router = express.Router();

const { getAllProducts, getProduct, add, remove, update } = products;

router.post("/getAllProducts", getAllProducts);
router.get("/Product", getProduct);
router.post("/add", isAuthenticated, add);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);

module.exports = router;
