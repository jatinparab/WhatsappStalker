var tabID;
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    var opt = {
        type: "basic",
        title: "Whatsapp Stalker 1.0",
        message: response,
        iconUrl: "icon.png"
    };
    tabID = sender.tab.id;
    chrome.notifications.create('notify1',opt, creationCallback);
});

function creationCallback(){
}

function sendData(){
    chrome.tabs.update(tabID,{active:true});
    chrome.tabs.get(tabID, function(tabData){
        alert(tabData.active);
    });
}

//window.setInterval(sendData,10000);