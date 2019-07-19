module.exports = (app) => {
    const products = require('../controllers/products.controller.js');

    // Create a new Note
    //app.post('/products', products.create);

    // Retrieve all Notes
    app.get('/api/produits/:products', products.findAll);


    // Retrieve all Notes
    app.get('/api/produits/:products/:subcategory', products.findAll);


    app.get( "/api/recherche/:search", products.findAll);
    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}