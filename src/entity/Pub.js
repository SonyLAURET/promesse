export class Pub {
    constructor(pub) {
        this._name = pub.name;
        this._openday=pub.openDay;
        this.owner(pub.owner);
        this.openHour(pub.openHour);
        this._beers=pub.beers;
    }
    openHour(openHour){
        this._start=openHour.start;
        this._end=openHour.end;
    }
    owner(owner){
        this._firstname=owner.firstName;
        this._lastname=owner.lastName;
        this._mail=owner.mail;
    }
}