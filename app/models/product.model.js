const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    description: String,
    balise_title: String,
    balise_description: String,
    weight: Number,
    weight_price: Number,
    price: Number,
    origin: String,
    nutritional: String,
    anti_wasting: Boolean,
    stock: Number,
    quantity: Number,
    labels: Array,
    category: Object,
    shop: Object,
    favorite: Array,
    shopping_cart: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);