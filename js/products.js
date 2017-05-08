console.log("i am in products.js");

var Products = (function(taco){

	taco.displayProducts = function(prod, cat){


		console.log("within displayProducts function", prod, cat);
		var prodArray=[];
		prodArray=prod.products;
		console.log("prodArray",prodArray);
		catArray = cat.categories;
		console.log("catArray",cat);
		var output = document.getElementById("output");
		for ( var i = 0; i < prodArray.length; i++) {
			for(var j=0; j <catArray.length; j++){
				if (prodArray[i].category_id == catArray[j].id){
				
					output.innerHTML += "<div class='row'><div class='col-sm-4'>"
					+ prodArray[i].name + "</div><div class='col-sm-4'>" 
					+ catArray[j].name + "</div><div class='col-sm-4'>" 
					+ prodArray[i].price  + "</div>" 
					+ "</div>";
				}
			}
				
			
		}

		season.addEventListener("change", function(event){
			var x = document.getElementById("season");
			var i = x.selectedIndex;
			var season = x.options[i].text;
			console.log("season", season);
			output.innerHTML = "";
			for ( var i = 0; i < prodArray.length; i++) {
			for(var j=0; j <catArray.length; j++){
				if (prodArray[i].category_id === catArray[j].id && season === catArray[j].season_discount){
					
					var discounted_price = prodArray[i].price - (prodArray[i].price) * (catArray[j].discount);
					discounted_price = discounted_price.toFixed(2);
					console.log(output, catArray[j].season_discount, season, discounted_price);
					output.innerHTML += "<div class='row'><div class='col-sm-4'>"
					+ prodArray[i].name + "</div><div class='col-sm-4'>" 
					+ catArray[j].name + "</div><div class='col-sm-4'>" 
					+ discounted_price + "</div>" 
					+ "</div>";
				} else if (prodArray[i].category_id === catArray[j].id){
					output.innerHTML += "<div class='row'><div class='col-sm-4'>"
					+ prodArray[i].name + "</div><div class='col-sm-4'>" 
					+ catArray[j].name + "</div><div class='col-sm-4'>" 
					+ prodArray[i].price + "</div>" 
					+ "</div>";

				}
			}
				
			
		}

		})
		

	};
	return taco;

})(Products || {});



