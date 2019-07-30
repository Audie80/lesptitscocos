const Product = require('../models/product.model.js');



// Create and Save a new Note
exports.create = (req, res) => {

   // creation d'une categorie //
    const product = new Product({
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
        subcategory: req.body.subcategory
    });

    // Save Note in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Recupere et montre toutes les categories de la BDD // 
exports.findAll = (req, res) => {
        Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};

<<<<<<< HEAD


// Supprime les sous categorie avec l'id specifié //

exports.delete = (req, res) => {
    Product.deleteOne({'subcategory': req.params.sous_categories})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Sous categorie non trouvé avec cet ID" + req.params.sous_categories
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Sous categories avec l'id non trouvé " + req.params.sous_categories
            });
        }
        return res.status(500).send({
            message: "Impossible de supprimer la sous categorie avec cet id " + req.params.sous_categories
        });
    });

}

// Trouve un produit //

exports.findAllcategory = (req, res) => {
    Product.find({'category':req.params.products})
    .then(product => {
        if(!product) {
=======
// Trouve un produit //

exports.findProducts = (req, res) => {
    Product.findById(req.params.products)
    .then(product => {
        if (!product) {
>>>>>>> 80da059f8e5cd0fd1cb08ee7cd2ddf277431357a
            return res.status(404).send({
                message: "produits not found with id " + req.params.products
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.products
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.products
        });
    });

};

// Trouver un produit par id //

<<<<<<< HEAD
exports.findAllproductsid = (req, res) => {
    Product.findById(req.params.productsid)
    .then(product => {
        if(!product) {
=======
exports.findProductsid = (req, res) => {
    Product.findById(req.params.productsid)
    .then(product => {
        if (!product) {
>>>>>>> 80da059f8e5cd0fd1cb08ee7cd2ddf277431357a
            return res.status(404).send({
                message: "produits not found with id " + req.params.productsid
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productsid
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.productsid
        });
    });

};

// Trouve les produits par une sous categorie // 

<<<<<<< HEAD
exports.findAllsubcategory = (req, res) => {
=======
exports.findSubcategory = (req, res) => {
>>>>>>> 80da059f8e5cd0fd1cb08ee7cd2ddf277431357a
    Product.findAll(req.params.subcategory)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.subcategory
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.subcategory
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.subcategory
        });
    });

};

// requete search //

<<<<<<< HEAD
exports.findAllsearch = (req, res) => {
=======
exports.findSearch = (req, res) => {
>>>>>>> 80da059f8e5cd0fd1cb08ee7cd2ddf277431357a
    Product.findAll(req.params.search)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.search
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.search
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.search
        });
    });

};

// Update d'une categorie //

exports.update = (req, res) => {
    Product.updateOne(req.params.categories)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.categories
            });
        }
        res.send(note);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.categories
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.categories
        });
    });

};

// Supprime une categorie avec l'id specifié //

exports.delete = (req, res) => {
    Product.deleteOne(req.params.categories)
        .then(product => {
            if (!product) {
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

// Update d'un produit //

exports.update = (req, res) => {
    Product.updateOne(req.params.produits)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.produits
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.produits
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.produits
        });
    });

};

// Supprime un produit avec l'id specifié //

exports.delete = (req, res) => {
    Product.deleteOne(req.params.produits)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.produits
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous categories avec l'id non trouvé " + req.params.produits
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.produits
            });
        });

};

// FInd product d'une categorie //

exports.findProductscat = (req, res) => {
    Product.findAll(req.params.products)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.products
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.products
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.products
        });
    });

};

// FInd sous categorie //

exports.findSous_categories = (req, res) => {
    Product.findAll(req.params.sous_categories)
    .then(product => {
        if (!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.sous_categories
            });
        }
        res.send(product);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.sous_categories
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.sous_categories
        });
    });

};


// Update les sous categorie avec l'id specifié //

exports.update = (req, res) => {
    Product.updateOne({
            'subcategory': req.params.sous_categories
        })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Sous categorie non trouvé avec cet ID" + req.params.sous_categories
                });
            }
            res.send({
                message: "Note deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Sous categories avec l'id non trouvé " + req.params.sous_categories
                });
            }
            return res.status(500).send({
                message: "Impossible de supprimer la sous categorie avec cet id " + req.params.sous_categories
            });
        });

};


// Supprime les sous categorie avec l'id specifié //

exports.delete = (req, res) => {
    Product.deleteOne({'subcategory': req.params.sous_categories})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Sous categorie non trouvé avec cet ID" + req.params.sous_categories
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Sous categories avec l'id non trouvé " + req.params.sous_categories
            });
        }
        return res.status(500).send({
            message: "Impossible de supprimer la sous categorie avec cet id " + req.params.sous_categories
        });
    });

};










