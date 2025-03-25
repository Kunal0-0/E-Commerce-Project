const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// Create Cart
router.post("/", async (req, res) => {
    try {
        const { user_id, products } = req.body;
        const cart = new Cart({ user_id, products });
        await cart.save();
        res.status(201).json({ message: "Cart created", cart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read All Carts
router.get("/", async (req, res) => {
    try {
        const carts = await Cart.find().populate("user_id").populate("products");
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read Cart by User ID
router.get("/:user_id", async (req, res) => {
    try {
        const cart = await Cart.findOne({ user_id: req.params.user_id }).populate("products");
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Cart by User ID
router.put("/:user_id", async (req, res) => {
    try {
        const updatedCart = await Cart.findOneAndUpdate(
            { user_id: req.params.user_id },
            { products: req.body.products },
            { new: true }
        );
        if (!updatedCart) return res.status(404).json({ message: "Cart not found" });
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Cart by User ID
router.delete("/:user_id", async (req, res) => {
    try {
        const deletedCart = await Cart.findOneAndDelete({ user_id: req.params.user_id });
        if (!deletedCart) return res.status(404).json({ message: "Cart not found" });
        res.status(200).json({ message: "Cart deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
