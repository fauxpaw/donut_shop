

function Shop(location, minCustHr, maxCustHr, avgDonutsCust){
	this.location = location;
	this.minCustHr = minCustHr;
	this.maxCustHr = maxCustHr;
	this.avgDonutsCust = avgDonutsCust;
	this.hoursOpen = 12;
	this.hourlySold = [];
	this.counter;
	this.dayTotal = dayTotal;
	


	this.customers = function (){
		 return Math.floor(Math.random() * (maxCustHr - minCustHr + 1)) + minCustHr;
	
	};
	this.donutsBought = function (){
		
		return this.customers() * this.avgDonutsCust;
	};
	this.hourlyTotal = function (){
		this.counter = 0;
		this.dayTotal=0;
		
		for (i = 0; i < this.hoursOpen; i++){
			this.counter = this.donutsBought();
			this.dayTotal += this.counter;
			this.hourlySold.push(this.counter);
		};

	}
	this.hoursChange = function (newHours){
		
		
	};
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

console.log(downtown.customers());
console.log(downtown.donutsBought());
console.log(downtown.hourlyTotal());
console.log(downtown.hourlySold);
console.log(downtown.dayTotal);
