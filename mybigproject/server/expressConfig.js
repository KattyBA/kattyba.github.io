/**
 * Created by Kat on 24.06.2016.
 */
var bodyParser = require('body-parser');

module.exports = function(app, express) {

    //Serve static assets from app folder. This enable things like javascript and stylesheets to be loaded as expected
    app.use('/', express.static('public/'));

    //set thr view directory, this enables us to use the .render method inside routes
    app.set('views', __dirname + '/public');

    app.use(bodyParser.json()); //подключаем bodyParser

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({
        extended: false
    }));
};