console.log("i am here");

var Products = (function (taco) {
  var products = {};
  var categories = {};
  
    taco.loadProducts=function () {
      var productLoader = new XMLHttpRequest();

      productLoader.addEventListener("load", function () {
      products = JSON.parse(this.responseText);
      console.log("products is loaded", products);

          var categoriesLoader = new XMLHttpRequest();

          categoriesLoader.addEventListener("load", function () {
            categories = JSON.parse(this.responseText);
            console.log("categories is loaded", categories);
            taco.displayProducts(products,categories);
          });

          categoriesLoader.addEventListener("error", function () {
          console.log("oh no!!!!");
          });

          categoriesLoader.open("GET",  "categories.json");
          categoriesLoader.send();
      });

      productLoader.addEventListener("error", function () {
      console.log("oh no!!!!");
      });

      productLoader.open("GET",  "products.json");
      productLoader.send();
    }  
    return taco;

})(Products || {});

Products.loadProducts();








 	

