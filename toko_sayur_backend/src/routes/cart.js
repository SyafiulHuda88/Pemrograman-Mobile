const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Dummy data keranjang belanja
let cart = {
  products: []
};

// Get cart
router.get('/cart', (req, res) => {
  res.json(cart);
});

// Add product to cart
router.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = cart.products.find(p => p.productId === productId);
  
  if (product) {
    product.quantity += quantity;
  } else {
    cart.products.push({ productId, quantity });
  }

  res.status(201).json(cart);
});

// Remove product from cart
router.delete('/cart/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  cart.products = cart.products.filter(p => p.productId !== productId);
  res.json(cart);
});

module.exports = router;