import express from "express";
const router = express.Router();
//asyncHandler middleware is used to wrap asynchronous functions and handle errors.
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//route to get all '/' products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

//route to get a single product
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        return res.json(product);
    }

    res.status(404).json({message: 'Product not found'})
}));

export default router;