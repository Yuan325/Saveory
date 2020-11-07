
function grabTitle() {
	var h1s = document.getElementsByTagName("h1");
	var myH1;
	if (h1s.length > 1) {
		myH1 = h1s[1];
		console.log(myH1);
	} else {
		console.log('title not found');
	}
}

var id = "jemegondjlpbhiknmcdhiiogojomffdf";

function onWindowLoad() {
	console.log("welcome here!");

	var link = window.location.toString();
	if (link.includes("?ps=1")) {
		grabTitle();

		var style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = "chrome-extension://jemegondjlpbhiknmcdhiiogojomffdf/sidebar.css";
		document.head.appendChild(style);

		var javascript = document.createElement("script");
		javascript.src = "chrome-extension://jemegondjlpbhiknmcdhiiogojomffdf/sidebar.js";
		document.head.appendChild(javascript);

		var div = document.createElement("div");
		div.id = "sidebar";
		document.body.appendChild(div);
		chrome.runtime.sendMessage({ cmd: "read_file" }, function (html) {
			$("#sidebar").html(html);
		});

	} else {

		console.log('not in the page');
	}
}

window.onload = onWindowLoad;
window.addEventListener("click", function () { onWindowLoad(); });
