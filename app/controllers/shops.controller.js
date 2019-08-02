const Shops = require('../models/shops.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

   // Create a Note
    const shops = new Shops({
        name: req.body.name,
        slug: req.body.slug,
        img: req.body.img,
        description: req.body.description,
        address: req.body.address,
        city: req.body.city,
        district: req.body.district,
        tel: req.body.tel,
        zipcode: req.body.zipcode,
        email: req.body.email,
        site: req.body.site,
        facebook: req.body.facebook,
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


// Trouver un shop // 

exports.findShops = (req, res) => {
    Shops.find({'category.slug': req.params.shops})
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.shops
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.shops
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.shops
            });
        });

};


// Trouver un commerce par shopId // 

exports.findShopsid = (req, res) => {
    Shops.findById(req.params.shopsid)
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.shopsid
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.shopsid
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.shopsid
            });
        });

};


// update un type de commerce // 

exports.update = (req, res) => {
    Shops.updateOne(req.params.types_commerces)
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.types_commerces
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.types_commerces
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.types_commerces
            });
        });

};

// delete un type de commerce//

exports.delete = (req, res) => {
    Shops.deleteOne(req.params.types_commerces)
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.types_commerces
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.types_commerces
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.types_commerces
            });
        });

};

// update une boutique // 

exports.update = (req, res) => {
    Shops.updateOne(req.params.boutiques)
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.boutiques
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.boutiques
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.boutiques
            });
        });

};

// delete une boutique//

exports.delete = (req, res) => {
    Shops.deleteOne({'slug':req.params.boutiques})
        .then(shop => {
            if (!shop) {
                return res.status(404).send({
                    message: "shop not found with id " + req.params.boutiques
                });
            }
            res.send(shop);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "shops not found with id " + req.params.boutiques
                });
            }
            return res.status(500).send({
                message: "Error retrieving shops with id " + req.params.boutiques
            });
        });

};
