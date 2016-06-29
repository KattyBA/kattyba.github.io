/**
 * Created by Kat on 24.06.2016.
 */
var express = require('express');
//create our app
var app = express();

require('./expressConfig')(app, express);

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: app.settings.views});
});

require('./routes/dogs')(app);
require('./routes/cats')(app);

module.exports = app;