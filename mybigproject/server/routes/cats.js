/**
 * Created by Kat on 28.06.2016.
 */
var Cats = require('../models/cats');

module.exports = function(app) {
    app.get('/cats', function (req, res) {
        res.json({cats: Cats.all()});
    });
}