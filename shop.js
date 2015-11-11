function Shop(location, minCustHr, maxCustHr, avgDonutsCust){
	this.location = location;
	this.minCustHr = minCustHr;
	this.maxCustHr = maxCustHr;
	this.avgDonutsCust = avgDonutsCust;

	this.customers = function (){

	}

}

var downtown = new Shop('Downtown', 8, 43, 4.5);
var capHill = new Shop('Capitol Hill', 4, 37, 2);
var southLU = new Shop('South Lake Union', 9, 23, 6.33);
var wedge = new Shop('Wedgewood', 2, 28, 1.25);
var bal = new Shop('Ballard', 8, 58, 3.75);

console.log(downtown);
console.log(capHill);
console.log(southLU);
console.log(wedge);
console.log(bal);