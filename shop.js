var create = document.getElementById('formstruct');
var del = document.getElementById('deleteshop');

function Shop(locationz, minCustHr, maxCustHr, avgDonutsCust){
	this.locationz = locationz;
	this.minCustHr = minCustHr;
	this.maxCustHr = maxCustHr;
	this.avgDonutsCust = avgDonutsCust;
	this.hoursOpen = 12;
	this.hourlySold = [];
	this.counter;
	
	


	//generate customers for each location
	this.customers = function (){
		 return Math.random() * (maxCustHr - minCustHr + 1) + minCustHr;
	
	};
	//generate donuts bought for each location
	this.donutsBought = function (){
		
		return Math.round(this.customers() * this.avgDonutsCust);
	};
	//calulate both donut sales per hour and per day total
	this.hourlyTotal = function (){
		this.counter = 0;
		this.dayTotal = 0;
		
		for (i = 0; i < this.hoursOpen; i++){
			this.counter = this.donutsBought();
			this.dayTotal += this.counter;
			this.hourlySold.push(this.counter);
		};

	}
}

//display data to table
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
	data.className = 'total';
	data.textContent = this.dayTotal;
	row.appendChild(data);
	document.getElementById('tbody').appendChild(row);
};

//take input from fields and append in new row to table
var submitNewShop = function(event){
	event.preventDefault();
	
	if (!event.target.shop.value || !event.target.minCustHr.value || !event.target.maxCustHr.value || !event.target.avgDonutsCust.value) {
		 alert('Fields cannot be empty!');
	}
	else {
		var locale = event.target.shop.value;
		var min = event.target.minCustHr.value;
		var max = event.target.maxCustHr.value;
		var donPerCust = event.target.avgDonutsCust.value;

		var newShop = new Shop(locale, min, max, donPerCust);
		allshops.push(newShop);
		newShop.hourlyTotal();
		newShop.render();
		event.target.shop.value = null;
		event.target.minCustHr.value = null;
		event.target.maxCustHr.value = null;
		event.target.avgDonutsCust.value = null;
	}

};

//remove most recent row from table
var deleteNewShop = function(){

	var elements = document.getElementsByTagName('tr');
	var myEl = elements.length-1;
	var removeEl = document.getElementsByTagName('tr')[myEl];
	var container = removeEl.parentNode;
	container.removeChild(removeEl);
}

var downtown = new Shop('Downtown', 8, 43, 4.5);
var capHill = new Shop('Capitol Hill', 4, 37, 2);
var southLU = new Shop('South Lake Union', 9, 23, 6.33);
var wedge = new Shop('Wedgewood', 2, 28, 1.25);
var bal = new Shop('Ballard', 8, 58, 3.75);
var allshops = [downtown, capHill, southLU, wedge, bal];

create.addEventListener('submit', submitNewShop);
del.addEventListener('click', deleteNewShop);

allshops.forEach(function(place){
	place.hourlyTotal();
	place.render();
});

var ctx = document.getElementById("mychart").getContext("2d");
var data = [
    {
        value: 300,
        color:"#957F58",
        highlight: "#957F58",
        label: "Tan"
    },
    {
        value: 50,
        color: "#1F2630",
        highlight: "#1F2630",
        label: "Dark Blue"
    },
    {
        value: 100,
        color: "#C8CDD1",
        highlight: "#C8CDD1",
        label: "Light Blue"
    },
    {
        value: 175,
        color: "#493628",
        highlight: "#493628",
        label: "Brown"
    },
    {
    	value: 130,
    	color: 'white',
    	highlight: 'white',
    	label: 'White'
    }
]

var myPieChart = new Chart(ctx).Pie(data);




