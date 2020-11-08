var foodName;
function grabTitle() {
	var h1s = document.getElementsByTagName("h1");
	if(h1s.length  > 1){
		foodName = h1s[1].innerHTML;
		console.log(foodName);

		browseRecipe(foodName);

	} else {
		console.log('title not found');
	}
}

async function browseRecipe( foodName ){
	let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&number=1"
	url += "&query="+ foodName.split(" ").join("");
	let responseid = await fetch(url);
	let jsonid = await responseid.json();
	let recipeid = jsonid['results'][0].id;

	let searchUrl = "https://api.spoonacular.com/recipes/" + recipeid + "/information?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&includeNutrition=false";
	console.log(searchUrl);
	let response = await fetch(searchUrl); 
	let json = await response.json();


	let image=json.image;
	let title=json.title;
	let price=json.pricePerServing;
	price = price/100;
	price = parseFloat(price).toFixed(2);
	let instruction = json.analyzedInstructions[0].steps;
	var insList = "<ol>";
	for(ins of instruction){
		insList+= "<li>" + ins["step"] + "</li>";
	}
	insList+="</ol>";

	let ingredients = json.extendedIngredients;

	var ing;
	var food="";
	for(ing of ingredients){
		food += ing['measures']['us']['amount'];
		food += " " + ing['measures']['us']['unitShort'];
		food += " " + ing['name'] + "<br>";
	}
	
	console.log("title: " + title);
	console.log("price: " + price);
	console.log("instruction " + insList);
	console.log("ingredients " + food);
	console.log("food image path: " + image);


}

var link = "";

function onWindowLoad() {
	link = window.location.toString();
	if (link.includes("?ps=1")) {
		grabTitle();

		var style = document.createElement("link");
		style.rel = "stylesheet";
		//style.href = "chrome-extension://amejifdccflcjabhckcmecocikckafll/sidebar.css";
		style.href = "chrome-extension://kijkgialngobgddnhoalinmjegeafmce/sidebar.css";
		document.head.appendChild(style);

		var javascript = document.createElement("script");
		//javascript.src = "chrome-extension://amejifdccflcjabhckcmecocikckafll/sidebar.js";
		javascript.src = "chrome-extension://kijkgialngobgddnhoalinmjegeafmce/sidebar.js";
		document.head.appendChild(javascript);

		var div = document.createElement("div");
		div.id = "sidebar";
		document.body.appendChild(div);
		chrome.runtime.sendMessage({ cmd: "read_file" }, function (html) {
			$("#sidebar").html(html);

		});

		//browseRecipe(foodName);
		//var rTitle= document.getElementById("rTitle");
		//rTitle.innerHTML=foodName;

	} else {
		var modal = document.getElementById("myModal");
		if (modal != null) {
			modal.style.display = "none";
		}
	}


}

window.onload = onWindowLoad;
window.addEventListener("click", function () {
	var newLink = window.location.toString();
	if (link != newLink) {
		onWindowLoad();
	}
});
