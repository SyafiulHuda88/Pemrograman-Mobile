const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Data produk dummy
const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 4.99,
    description: "7 pcs, Priceg",
    imageUrl: "/images/organic-bananas.png"
  },
  {
    id: 2,
    name: "Red Apple",
    price: 4.99,
    description: "1 kg, Priceg",
    imageUrl: "/images/red-apple.png"
  },
  {
    id: 3,
    name: "Bell Pepper Red",
    price: 4.99,
    description: "1 kg, Priceg",
    imageUrl: "/images/bell-pepper-red.png"
  }
];

// Get all products
router.get('/products', (req, res) => {
  res.json(products);
});

// Get product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

module.exports = router;