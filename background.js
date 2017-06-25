var script = "document.getElementsByClassName(\"audio_page_player_ctrl audio_page_player_btns\")[0].innerHTML += '<a id=downloadLink download class=\"audio_page_player_btn audio_page_player_repeat _audio_page_player_repeat\" onclick=\"this.href=getAudioPlayer().getCurrentAudio()[2];\">Download</a>';";
var checkDownloadLinkPresence = "document.getElementById(\"downloadLink\") === null";

chrome.tabs.onUpdated.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: checkDownloadLinkPresence
    }, function (result) {
        console.log(result);
        if (result[0] === true) {
            chrome.tabs.executeScript({
                code: script
            });
        }
    });
});