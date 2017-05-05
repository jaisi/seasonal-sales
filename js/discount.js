console.log("i am in discount.js file");

var discount = document.getElementById("season");
console.log("discount", discount);
var season;
		discount.addEventListener = ("change", function(event){	
		season = event.target.value;
		console.log("season", season);
		console.log("select list changed");
	
		})