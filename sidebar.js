var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("model-close-button");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  myFunction();
}

// When the user clicks on <div>, open the modal
function myFunction() {
  var md = document.getElementById("myModal");
  md.classList.toggle("show");
  console.log("hi");
  getRecipe();
}

var myH1;
async function getRecipe(){
    let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=d0a7d07b344b4d6a8d5704629d211616&query=";
    url += myH1 + "&number=1&instructionsRequired=true";
    let response = await fetch(url);
    console.log(response);
      
    let json = await response.json(); 

}