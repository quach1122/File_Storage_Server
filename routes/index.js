var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//router.get('/files',function(req,res){
//  res.status(200).json({message: 'IMPL_101'});
//});
//
router.post('/files', function (req, res) {
    console.log(req.files);
    var file = req.files.file1.name.split(".")[0];
    console.log('files ' + file);
    res.status(201).json({message: file});

});

var fs = require('fs');

var dir = './uploads/';
var data = {};

router.get('/', function (req, res) {
    fs.readdir(dir, function (err, files) {
        files.forEach(function (file) {
            console.log(file);
            fs.readFile(dir + file, 'base64', function (err, html) {
                if (err) throw err;
                //data[file]="data:image/jpeg;base64," + new Buffer(html).toString('base64');
                data[file] = html;
                console.log('-----------------------------------------------------------------------------------');
                console.log(data);
                console.log('-----------------------------------------------------------------------------------');
            });
        });
    });
    res.setHeader("Content-Type", "image/jpeg");
    res.send(data);
    //res.status(200).json({message: 'get success'});
});
module.exports = router;
