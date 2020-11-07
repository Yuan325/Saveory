var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("model-close-button");

// Get the <img> element for the logo
var logo = document.createElement('modal-logo');
var logoURL = chrome.extension.getURL('temp_logo.png');
logo.src = logoURL;

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log('click button');
  modal.style.display = "none";
}

// When the user clicks on <div>, open the modal
function myFunction() {
  var md = document.getElementById("myModal");
  md.classList.toggle("show");
  console.log("hi");
}
