var e = false;
var flag = false;

chrome.runtime.sendMessage("Whatsapp Stalker is now active.");

function checkStatus(){
    var x = document.getElementsByClassName("pane-header pane-chat-header");
    if (x[0]) {
        var name = x[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].title;
        if (name) {
            if (x[0].childNodes[1].childNodes[1].childNodes[0]) {
                var status = x[0].childNodes[1].childNodes[1].childNodes[0].title;
                if (status){
                    if(status === "online" || (status.splice(0,6)==="typing") ){
                        return true;
                    }
                }
            }else{
                return false;
            }
        }
    }else{
        if(!told){
        alert("Please Open the tab of the person you want to track");
        }
        e = true;
        told = true;
    }
}
var told = false;
function callNow(){
    checkStatus();
    if(e){
        e=false;
        return 0;
    }
    if(checkStatus() && (!flag)){
        flag = true;
        var x = document.getElementsByClassName("pane-header pane-chat-header");
        var name = x[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].title;
        chrome.runtime.sendMessage(name + " is online!");
    }
    if(!checkStatus() && flag){
        var x = document.getElementsByClassName("pane-header pane-chat-header");
        var name = x[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].title;
        flag = false;
        chrome.runtime.sendMessage(name + " went offline");
    }
}

window.setInterval(callNow, 5000);
