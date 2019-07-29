module.exports = (app) => {
    const shops = require('../controllers/shops.controller.js');
    
    //test//
    //app.get('/api/shops', shops.findAll);
    
   // Retrieve all Notes
    app.get('/api/commerces/:shops', shops.findShops);

    // Retrieve all Notes
    app.get('/api/commerces/shops/:shopid', shops.findShopsid);


    // Retrieve all Notes
    app.get('/api/admin/commerces/types_commerces', shops.findAll);

    // Create a new Note
    app.post('/api/admin/commerces/types_commerces/create', shops.create);

    // Update a new Note
    app.put('/api/admin/commerces/:types_commerces/update', shops.update);

    // delete a new Note
    app.post('/api/admin/commerces/:types_commerces/delete', shops.delete);

    // find all
    app.get('/api/admin/commerces/boutiques', shops.findAll);

    // create a new shops
    app.post('/api/commerces/boutiques/create', shops.create);

    // update a new shops
    app.put('/api/commerces/:boutiques/update', shops.update);

    // delete a new shops
    app.post('/api/commerces/:boutiques/delete', shops.delete);


}