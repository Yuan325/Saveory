
var myH1;
function grabTitle() {
	var h1s = document.getElementsByTagName("h1");
	if(h1s.length  > 1){
		myH1 = h1s[1].innerHTML;
		console.log(myH1);

	} else {
		console.log('title not found');
	}
}

var link = "";

function onWindowLoad() {
	link = window.location.toString();
	if (link.includes("?ps=1")) {
		grabTitle();

		var style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = "chrome-extension://amejifdccflcjabhckcmecocikckafll/sidebar.css";
		document.head.appendChild(style);

		var javascript = document.createElement("script");
		javascript.src = "chrome-extension://amejifdccflcjabhckcmecocikckafll/sidebar.js";
		document.head.appendChild(javascript);

		var div = document.createElement("div");
		div.id = "sidebar";
		document.body.appendChild(div);
		chrome.runtime.sendMessage({ cmd: "read_file" }, function (html) {
			$("#sidebar").html(html);
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
