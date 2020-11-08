var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("model-close-button");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "sidebar.css";
  myFunction();
}

// When the user clicks on <div>, open the modal
function myFunction() {
  var md = document.getElementById("myModal");
  md.classList.toggle("show");
  console.log("hi");
  grabTitle();
}

function grabTitle() {
	var h1s = document.getElementsByTagName("h1");
	var myH1;
	if(h1s.length  > 1){
		myH1 = h1s[1].innerHTML;
		console.log(myH1);
    getRecipe();
  
  } else {
		console.log('title not found');
	}
}

async function getRecipe() {
	console.log("getting recipe");
	let url = "https://api.spoonacular.com/recipes/random?apiKey=dbb3a7d09dac4219b02c7ffd6a1098a5&number=1&tags=meat"
	let response = await fetch(url);
	console.log(response);
	
	let json = await response.json();
}