var foodName;
function grabTitle() {
	var h1s = document.getElementsByTagName("h1");
	if(h1s.length  > 1){
		foodName = h1s[1].innerHTML;
		browseRecipe(foodName);
		return true;
	} else {
		console.log('title not found');
		return false;
	}
}
var title="";
var price="";
var insList="";
var food="";
var image="";
async function browseRecipe( foodName ){
	let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&number=1"
	//url += "&query="+ foodName.split(" ").join("");
	url += "&query=" + foodName;
	console.log(url);
	let responseid = await fetch(url);
	let jsonid = await responseid.json();
	let exist = jsonid['results'];

	if(exist.length > 0){
		let recipeid = jsonid['results'][0].id;
		let searchUrl = "https://api.spoonacular.com/recipes/" + recipeid + "/information?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&includeNutrition=false";
		let response = await fetch(searchUrl); 
		let json = await response.json();

		image=json.image;
		title=json.title;
		price=json.pricePerServing;
		price = price/100;
		price = parseFloat(price).toFixed(2);
		let instruction = json.analyzedInstructions[0].steps;
		insList = "";
		for(ins of instruction){
			insList+= ins["step"] + "<br><br>";
		}

		let ingredients = json.extendedIngredients;

		var ing;
		food="";
		for(ing of ingredients){
			food += ing['measures']['us']['amount'];
			food += " " + ing['measures']['us']['unitShort'];
			food += " " + ing['name'] + "<br>";
		}
		console.log(title);
	}else{
		title="";
		price="";
		insList="";
		food="";
		image="";
		console.log("no recipe in store!")
	}
	if(title != ""){
		var rTitle = document.getElementById("rTitle");
		rTitle.innerHTML = title;
		rTitle.style.display="block";

		var rImage=document.getElementById("rImage");
		rImage.src=image;
		rImage.style.display="block";

		var rPrice = document.getElementById("rPrice");
		rPrice.innerHTML="$ " + price + " per serving"
		rPrice.style.display="block";

		var rIng = document.getElementById("rIng");
		rIng.innerHTML=food;

		var rIns = document.getElementById("rIns");
		rIns.innerHTML=insList;

		var rDesc=document.getElementById("rDesc");
		rDesc.innerHTML="We have a recipe for you!";
		rDesc.style.display="block";

	}else{
		var rTitle = document.getElementById("rTitle");
		rTitle.style.display = "none";

		var rImage=document.getElementById("rImage");
		rImage.src="chrome-extension://kijkgialngobgddnhoalinmjegeafmce/logo.png"

		var rPrice = document.getElementById("rPrice");
		rPrice.style.display="none";

		var rIng = document.getElementById("rIng");
		rIng.innerHTML="Sorry we can't find a matching recipe";

		var rIns = document.getElementById("rIns");
		rIns.style.display="Sorry we can't find a matching recipe";

		var rDesc=document.getElementById("rDesc");
		rDesc.innerHTML="Sorry we can't find a matching recipe";
	}
}

var link = "";

function onWindowLoad() {
	link = window.location.toString();
	if (link.includes("?ps=1")) {

		var div = document.createElement("div");
		div.id = "sidebar";
		document.body.appendChild(div);

		chrome.runtime.sendMessage({ cmd: "read_file" }, function (html) {
			$("#sidebar").html(html);
			grabTitle();
		});
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
