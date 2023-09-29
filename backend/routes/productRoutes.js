import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js";

//route to get all products
router.route('/').get(getProducts);
//route to get a single product
router.route('/:id').get(getProductById);

export default router;