module.exports = (app) => {
    const shops = require('../controllers/shops.controller.js');

    // Create a new Note
    //app.post('/api/commerces/:shops', shops.create);

    // Retrieve all Notes
    app.get('/api/commerces/:shops', shops.findAll);

    // Retrieve all Notes
    app.get('/api/commerces/:shops/:shopid', shops.findAll);

    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}