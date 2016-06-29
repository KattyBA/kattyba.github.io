/**
 * Created by Kat on 24.06.2016.
 */
var Dogs = require('../models/dogs');

module.exports = function(app) {
    app.get('/dogs', function(req, res) {
        res.json({dog: Dogs.all()});
    });

    app.get('/dogs/:id', function(req, res) {
        var dogId = parseInt(req.param('id'), 10);
        res.json(Dogs.get(dogId) || {});
    });
};