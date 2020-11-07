
function grabTitle(){
	var h1s = document.getElementsByTagName("h1");
	var myH1;
	if(h1s.length  > 1){
		myH1 = h1s[1].innerHTML;
		console.log(myH1);
	}else{
		console.log('title not found');
	}
}

var link="";

function onWindowLoad(){
	link= window.location.toString();
	if (link.includes("?ps=1")){
		grabTitle();

		var style=document.createElement("link");
		style.rel="stylesheet";
		style.href="chrome-extension://kijkgialngobgddnhoalinmjegeafmce/sidebar.css";
		document.head.appendChild(style);

		var javascript=document.createElement("script");
		javascript.src="chrome-extension://kijkgialngobgddnhoalinmjegeafmce/sidebar.js";
		document.head.appendChild(javascript);

		var div=document.createElement("div");
		div.id="sidebar";
		document.body.appendChild(div);
		chrome.runtime.sendMessage({cmd: "read_file"}, function(html){
			$("#sidebar").html(html);
		});

	}else{
		var modal = document.getElementById("myModal");
		if (modal != null){
			modal.style.display="none";
		}
	}

	//API Request information
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.spoonacular.com/recipes/complexSearch', true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		if (request.status >= 200 && request.status < 400){
			data.forEach((result) => {
				console.log(title);
			})
		}
		else{
			console.log("Error displaying recipes.");
		}
	}
}

request.send();
window.onload = onWindowLoad;
window.addEventListener("click", function(){
	var newLink = window.location.toString();
	if(link != newLink){
		onWindowLoad(); 
	}
});
