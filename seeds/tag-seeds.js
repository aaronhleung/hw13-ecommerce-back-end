const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'mens',
    },
    {
        tag_name: 'womens',
    },
    {
        tag_name: 'sale',
    },
    {
        tag_name: 'sale-exempt',
    },
    {
        tag_name: 'non-refundable',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;