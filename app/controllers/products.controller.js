const Products = require('../models/products.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

   // Create a Note
    const products = new Products({
        name: req.body.name,
        slug: req.body.slug,
        img: req.body.img,
        description: req.body.description,
        weight: req.body.weight,
        weight_price: req.body.weight_price,
        price: req.body.price,
        origin: req.body.origin,
        nutritional: req.body.nutritional,
        quantity: req.body.quantity,
        anti_wasting: req.body.anti_wasting,
        stock: req.body.stock,
        labels: req.body.labels,
        category: req.body.category,
        subcategory: req.body.subcategory,
    });

    // Save Note in the database
    products.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
        Products.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};

// Find a single note with a noteId
//exports.findOne = (req, res) => {

//};

// Update a note identified by the noteId in the request
//exports.update = (req, res) => {

//};

// Delete a note with the specified noteId in the request
//exports.delete = (req, res) => {

//};

