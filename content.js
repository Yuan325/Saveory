
function grabTitle(){
	var h1s = document.getElementsByTagName("h1");
	var myH1;
	if(h1s.length  > 1){
		myH1 = h1s[1];
		console.log(myH1);
	}else{
		console.log('title not found');
	}
}


function onWindowLoad(){
	console.log("welcome here!");

	var link= window.location.toString();
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
			
		console.log('not in the page');
	}
}

window.onload = onWindowLoad;
window.addEventListener("click", function(){ onWindowLoad(); });
