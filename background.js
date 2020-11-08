var foodName="";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "read_file") {
        $.ajax({
            url: chrome.extension.getURL("sidebar.html"),
            dataType: "html",
            success: sendResponse
        });
				foodName = request.foodName;
       return true;
    }
})

