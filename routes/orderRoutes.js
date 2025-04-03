const express = require("express")
const router = express.Router()
const { createOrder, getUserOrders, getOrderDetails, updateOrderStatus, deleteOrder } = require("../controllers/order")

// Create a new order
router.post("/", createOrder);

// Get all orders for a specific user
router.get("/:userId", getUserOrders);

// Get details of a single order
router.get("/details/:id", getOrderDetails);

// Update order status
router
    .route("/:id")
    .put(updateOrderStatus)
    .delete(deleteOrder)
    
module.exports = router;