'use strict';

var pubService = require('./services/pubs.services.js');
var fs = require('fs-extra');

function getListPub() {
    console.log(pubService.recupereJSON());
}

function getListPubOpen() {
    console.log(pubService.OpenDay());
};

fs.emptyDir('./temp').then(function () {
    console.log('success!');
    getListPub();
}).catch(function (err) {
    console.error(err);
}).then(fs.copyFile('mocks/pubs.json', 'temp/pubs.json')).then(fs.watchFile('mocks/pubs.json', function (curr, prev) {
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
    fs.readFile('mocks/pubs.json', "utf8", function (err, data) {
        console.log(data);
    });
}));

module.exports = {
    services: {
        getListPub: getListPub,
        getListPubOpen: getListPubOpen
    }
};