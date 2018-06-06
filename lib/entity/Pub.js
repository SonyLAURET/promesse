"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function () {
    function Pub(pub) {
        _classCallCheck(this, Pub);

        this._name = pub.name;
        this._openday = pub.openDay;
        this.owner(pub.owner);
        this.openHour(pub.openHour);
        this._beers = pub.beers;
    }

    _createClass(Pub, [{
        key: "openHour",
        value: function openHour(_openHour) {
            this._start = _openHour.start;
            this._end = _openHour.end;
        }
    }, {
        key: "owner",
        value: function owner(_owner) {
            this._firstname = _owner.firstName;
            this._lastname = _owner.lastName;
            this._mail = _owner.mail;
        }
    }]);

    return Pub;
}();

exports.Pub = Pub;