const { Product } = require('../models');

const productData = [
    {
        product_name: 'T-Shirt',
        price: 6.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: 'Baseball Bat',
        price: 39.99,
        stock: 12,
        category_id: 2,
    },
    {
        product_name: 'Playstation 5',
        price: 499.99,
        stock: 0,
        category_id: 3,
    },
    {
        product_name: 'Frying Pan',
        price: 39.99,
        stock: 25,
        category_id: 4,
    },
    {
        product_name: 'Shampoo',
        price: 9.99,
        stock: 22,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;