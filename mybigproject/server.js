/**
 * Created by Kat on 24.06.2016.
 */
//var express = require('express'); //фреймвок на node
//var cors = require('cors'); //для кроссдоменных запросов
//var bodyParser = require('body-parser'); //для получения боди постзапроса
//var app = express(); //инициализируем express сервер
//
//app.use(bodyParser.json()); //подключаем bodyParser
//app.use(bodyParser.urlencoded({
//    extended: false
//}));
//
//app.use(cors());
//
//
//app.use('/', express.static('public/'));
//app.set('views', __dirname + '/public');
//
//app.get('/', function(req, res) {
//    res.sendFile('index.html', {root: app.settings.views});
//});
//
//
//app.get('/books', function(req, res) {
//    res.send(books);
//});
//
//app.post('/books', function(req, res) {
//
//    books.push({
//        name: req.body.name //мы прочитываем пост запрос и записываем name body -тело запроса
//    });
//    res.sendStatus(200);  //на этот запрос ответить 200
//});
//
//
//var server = app.listen(8008, function() {
//    console.log('we started on 8008 port');
//});