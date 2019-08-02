const Category = require('../models/category.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    // Create a Note
    const category = new Category({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    });

    // Save Note in the database
    category.save()
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
        Category.find()
        .then(category => {
            res.send(category);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};

// Route delete une categorie // 

exports.delete = (req, res) => {
    Category.findOne({'slug': req.params.categories})
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.categories
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous categories avec l'id non trouvé " + req.params.categories
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.categories
            });
        });

};

exports.findCategory = (req, res) => {
    Category.find({'slug':req.params.category})
        .then(category => {
            if (!category) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.category
                });
            }
            res.send(category);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.category
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.category
            });
        });

};

exports.findSubcategories = (req, res) => {
    Category.find()
        .then(category => {
            res.send(category);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

            });
        });
};


// Update a note identified by the noteId in the request
//exports.update = (req, res) => {



//};







// Find a single note with a noteId
//exports.findOne = (req, res) => {

//};