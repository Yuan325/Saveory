
function onWindowLoad(){
	console.log("welcome here!");

	var div=document.createElement("div");
	div.id="sidebar";
	document.body.appendChild(div);
	chrome.runtime.sendMessage({cmd: "read_file"}, function(html){
    $("#sidebar").html(html);
	});
	//$("#test").load("chrome://extensions/kijkgialngobgddnhoalinmjegeafmce/test.html");

}


window.onload = onWindowLoad;
