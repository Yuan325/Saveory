var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("model-close-button");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	console.log('click button');
  modal.style.display = "none";
}
