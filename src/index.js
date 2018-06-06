var pubService = require('./services/pubs.services.js');
const fs = require('fs-extra');

function getListPub() {
    console.log(pubService.recupereJSON());
}

function getListPubOpen() {
    console.log(pubService.OpenDay());
};

fs.emptyDir('./temp').then(() => {
    console.log('success!');
    getListPub();
}).catch(err => {
    console.error(err)
}).then(fs.copyFile('mocks/pubs.json', 'temp/pubs.json'))
    .then(fs.watchFile('mocks/pubs.json', (curr, prev) => {
        console.log(`the current mtime is: ${curr.mtime}`);
        console.log(`the previous mtime was: ${prev.mtime}`);
        fs.readFile('mocks/pubs.json', "utf8", function (err, data) {
            console.log(data);
        });
    }));


module.exports = {
    services: {
        getListPub: getListPub,
        getListPubOpen: getListPubOpen
    }
}