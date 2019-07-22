module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    // Create a new Note

    //app.post('/categories', categories.create);

    // Affiche toutes les categories
    app.get('/api/categories', categories.findAll);

    //app.post('/category', categories.create);

    // Affiche toutes les categories
    app.get('/api/categories', categories.findOne({"name":name, "slug":slug}));

    // Affiche toutes les subcategories
    app.get('/api/categories/subcategories', categories.findAll);

    // Affiche toutes les subcategories
     app.get('/api/categories/:products', categories.findAll);


    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}