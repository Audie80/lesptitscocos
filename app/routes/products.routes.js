module.exports = (app) => {
    const products = require('../controllers/products.controller.js');

    // find a new category
    app.get('/products', products.findAll);
/*
    // Retrieve all Notes
    app.get('/api/produits/:products', products.findAll);

    // Retrieve all Notes
    app.get('/api/produits/:productsid', products.findAll);


    // Retrieve all Notes
    app.get('/api/produits/:products/:subcategory', products.findAll);


    app.get( "/api/recherche/:search", products.findAll);

    // find all shops
    app.get('/api/admin/produits/categories', products.findAll);

    // create a shops
    app.create('/api/admin/produits/categories/create', products.create);

    // update a shops
    app.put('/api/admin/produits/categories/update', products.update);

    // delete a shops
    app.delete('/api/admin/produits/categories/delete', products.delete);

    // admin show a shops
    app.get('/api/admin/produits', products.findAll);

    // create a shops
    app.create('/api/admin/produits/create', products.create);

    // update a shops
    app.put('/api/admin/produits/update', products.update);

    // delete a shops
    app.delete('/api/admin/produits/delete', products.delete);

    // find product of a shop
    app.get('/api/commercant', products.findAll);

    // find product of a shop
    app.post('/api/commercant', products.findAll);

    // Affiche toutes les subcategories
    app.get('/api/categories/sous_categories', categories.findAll);

    // Affiche toutes les subcategories
    app.get('/api/categories/:products', categories.findAll);

    //
    app.get('/api/admin/produits/categories/:sous_categories', categories.findAll);

    //
    app.create('/api/admin/produits/categories/sous_categories/create', categories.create);

    //
    app.put('/api/admin/produits/categories/sous_categories/update', categories.update);

    //
    app.delete('/api/admin/produits/categories/sous_categories/delete', categories.delete);
*/



    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}