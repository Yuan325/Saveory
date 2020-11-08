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
