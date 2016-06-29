/**
 * Created by Kat on 24.06.2016.
 */
var app = require('./server/routes');

var server = app.listen(8008, function() {
    console.log('Listening on port: ', server.address().port);
});