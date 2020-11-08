async function getRecipe(){ 
	let url = "https://api.spoonacular.com/recipes/random?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&number=1&tags=meat"
	let response = await fetch(url);
	console.log(response);
	
	let json = await response.json();


	let image=json['recipes'][0].image;
	let title=json['recipes'][0].title;
	let price=json['recipes'][0].pricePerServing;
	price = price/100;
	price = parseFloat(price).toFixed(2);
	let instruction = json['recipes'][0].analyzedInstructions[0].steps;
	var insList = "<ol>";
	for(ins of instruction){
		insList+= "<li>" + ins["step"] + "</li>";
	}
	insList+="</ol>";

	let ingredients = json['recipes'][0].extendedIngredients;

	var ing;
	var food="";
	for(ing of ingredients){
		food += ing['measures']['us']['amount'];
		food += " " + ing['measures']['us']['unitShort'];
		food += " " + ing['name'] + "<br>";
	}

	var titlediv=document.getElementById("recipeTitle");
	titlediv.innerHTML=title;
	titlediv.style.display="block";

	var recipePrice=document.getElementById("recipePrice");
	recipePrice.innerHTML="$ " + price.toString() + " per serving";
	recipePrice.style.display="inline-block";

	var priceImg=document.getElementById("priceImg");
	priceImg.style.display="inline-block";

	var ingredientdiv=document.getElementById("ingredientsList");
	ingredientdiv.innerHTML=food;
	ingredientdiv.style.display="block";

	var instrucdiv=document.getElementById("recipeInstruc");
	instrucdiv.innerHTML=insList;
	instrucdiv.style.display="block";

	var line1=document.getElementById("line1");
	line1.style.display="block";

	var recipeImg=document.getElementById("recipeImg");
	recipeImg.src=image;
	recipeImg.style.display="block";

};

let randomButton = document.getElementById("randomRecipe");
console.log("got into js");
randomButton.onclick=getRecipe;
