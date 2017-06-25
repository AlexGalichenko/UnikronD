var script = "document.getElementsByClassName(\"audio_page_player_ctrl audio_page_player_btns\")[0].innerHTML += '<a id=downloadLink download class=\"downloadLink\" onclick=\"this.href=getAudioPlayer().getCurrentAudio()[2];\">Download</a>';";
var checkDownloadLinkPresence = "document.getElementById(\"downloadLink\") === null";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status === "complete") {
        chrome.tabs.executeScript({
            code: checkDownloadLinkPresence
        }, function (result) {
            if (result[0] === true) {
                chrome.tabs.executeScript({
                    code: script
                });
            }
        });
    }

});