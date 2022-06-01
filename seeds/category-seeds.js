const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Clothing',
    },
    {
        category_name: 'Sports',
    },
    {
        category_name: 'Electronics',
    },
    {
        category_name: 'Kitchenware',
    },
    {
        category_name: 'Hygiene',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;