

function grabTitle(){
	var h1s = document.getElementsByTagName("h1");
	var myH1;
	if(h1s.length  > 1){
		myH1 = h1s[1];
		console.log(myH1);

		var unirest = require("unirest");

		var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search");

		req.query({
			"query": myH1
		});

		req.headers({
			"x-rapidapi-key": "b803d108d1mshfb0db75b581d34dp11f869jsn4cc93cab1d05",
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"useQueryString": true
		});


		req.end(function (res) {
			if (res.error) throw new Error(res.error);
			console.log(res.body);
		});
	
	}else{
		console.log('title not found');
	}
}

var link="";

function onWindowLoad(){
	console.log("welcome here!");
	link= window.location.toString();
	console.log(link);
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
		console.log('not in the page');
	}
	

}


window.onload = onWindowLoad;
window.addEventListener("click", function(){
	var newLink = window.location.toString();
	if(link != newLink){
		onWindowLoad(); 
	}
});
