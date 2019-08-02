module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    //Create a new Note
    app.post('/api/categories', categories.create);

    // Affiche toutes les categories
    app.get('/api/categories', categories.findAll);

    // Delete a Note with noteId
    app.post('/api/categories/:categories', categories.delete);

    // Liste les infos d'une categorie //
    app.get('/api/categories/:category', categories.findCategory);

    // Liste toutes les categories et leurs sous-categorie //
    app.get('/api/categories/subcategories', categories.findSubcategories);


}