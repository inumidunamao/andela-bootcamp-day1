var Robot = function (name, type){
	this.name = (name) ? name : 'Red ax-100';
	this.type = (!name) ? 'Ordinary Bot' : (
		(type != null || type != undefined) 
		&& type.constructor === String) ? type : 'Special Bot';
	
	this.numOfLegs = (this.type.split(' ').indexOf('Motor') != -1) ? 'Motor' : 2;
	if (this.numOfLegs === 'Motor') {
		this.speed = '0 km/h';
	}
	this.numOfHands = (this.type && this.type.split(' ').indexOf('Octo') != -1) ? 8 : 2;
}

Robot.prototype.drive = function (x) {
	if ((x === null || x === undefined) || x.constructor != Number) return false;
	if (this.type.split(' ').indexOf('Motor') != -1) {
		this.speed = (this.type.split(' ').indexOf('Slow') != -1) ? (x*11)+' km/h':(x*30)+' km/h';
	}
	return this;
}

Robot.prototype.speak = function(){
	if (this.type.split(' ').indexOf('Talking') === -1) return false; 
	if (arguments[0] === 'German') {
		return 'Mein nein ist '+this.name;
	} else if(arguments[0] === undefined || arguments[0] === "English"){
		return 'My name is '+this.name;
	} else {
		return null;
	}
}
module.exports = {Robot : Robot}