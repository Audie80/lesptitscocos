const Shops = require('../models/shops.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

   // Create a Note
    const shops = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        mail: req.body.mail,
        num_client: req.body.num_client,
        article_favori: req.body.article_favori,
        boutique_favorite: req.body.boutique_favorite,
    });

    // Save Note in the database
    shops.save()
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
        Shops.find()
        .then(shops => {
            res.send(shops);
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

