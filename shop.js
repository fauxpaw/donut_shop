

function Shop(locationz, minCustHr, maxCustHr, avgDonutsCust){
	this.locationz = locationz;
	this.minCustHr = minCustHr;
	this.maxCustHr = maxCustHr;
	this.avgDonutsCust = avgDonutsCust;
	this.hoursOpen = 12;
	this.hourlySold = [];
	this.counter;
	
	


	this.customers = function (){
		 return Math.floor(Math.random() * (maxCustHr - minCustHr + 1)) + minCustHr;
	
	};
	this.donutsBought = function (){
		
		return this.customers() * this.avgDonutsCust;
	};
	this.hourlyTotal = function (){
		this.counter = 0;
		this.dayTotal = 0;
		
		for (i = 0; i < this.hoursOpen; i++){
			this.counter = this.donutsBought();
			this.dayTotal += this.counter;
			this.hourlySold.push(this.counter);
		};

	}
	this.hoursChange = function (newHours){
		
		
	};

	Shop.prototype.render = function(){
		console.log(this.dayTotal);
		var row = document.createElement('tr');
		var data = document.createElement('th');
		data.textContent = this.locationz;
		row.appendChild(data);

		for(i=0; i < this.hoursOpen; i++){
			data = document.createElement('td');
			data.textContent = this.hourlySold[i];
			row.appendChild(data);
		}

		data = document.createElement('th');
		data.textContent = this.dayTotal;
		row.appendChild(data);

document.getElementById('tbody').appendChild(row);
	};
}



	var downtown = new Shop('Downtown', 8, 43, 4.5);
	var capHill = new Shop('Capitol Hill', 4, 37, 2);
	var southLU = new Shop('South Lake Union', 9, 23, 6.33);
	var wedge = new Shop('Wedgewood', 2, 28, 1.25);
	var bal = new Shop('Ballard', 8, 58, 3.75);



var allshops = [downtown, capHill, southLU, wedge, bal];






downtown.hourlyTotal();
capHill.hourlyTotal();
southLU.hourlyTotal();
wedge.hourlyTotal();
bal.hourlyTotal();

downtown.render();
capHill.render();
southLU.render();
wedge.render();
bal.render();







