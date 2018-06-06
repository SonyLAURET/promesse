'use strict';

var _Pub = require('../entity/Pub.js');

var json = require('../../mocks/pubs.json');
var moment = require('moment');


function recupereJSON() {
    var tab = [];
    tab.forEach(function (element) {
        element = new _Pub.Pub(_Pub.Pub);
        tab.push(element);
    });
    return json;
}

function OpenDay() {
    var day = moment().format("dddd");
    var tab = [];
    json.forEach(function (element) {
        if (element['openDays'].includes(day)) {
            tab.push(element['name']);
        }
    });
    return tab;
}
module.exports = {
    recupereJSON: recupereJSON,
    OpenDay: OpenDay
};