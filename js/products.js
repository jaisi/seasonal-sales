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
		var discount = document.getElementById("season");
		discount.addEventListener = ("change", function(event){	
			console.log("select list changed");
	
		})

	};
	return taco;

})(Products || {});



