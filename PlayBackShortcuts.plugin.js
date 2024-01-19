/**
 * @name PlayBackShortcuts
 * @description Adds hotkeys for changing playback speed. Shift+<(To decrease playback speed) and Shift+>(To increase playback speed).
 * @updateUrl https://raw.githubusercontent.com/REVENGE977/PlayBackShortcuts/main/PlayBackShortcuts.plugin.js
 * @version 1.0.0
 * @author REVENGE977
 */

window.addEventListener('popstate', () => {
    let playbackSpeedMenu = document.getElementById("playbackSpeedMenu")
    if(!playbackSpeedMenu) return;

    let scope = angular.element(playbackSpeedMenu).scope();
    let availableRates = scope.rates;

    document.addEventListener("keyup", (e) => {
        if(e.shiftKey && e.key === '<') {
            let currentRate = scope.currentRate;
            let index = availableRates.indexOf(currentRate);
            
            if((availableRates.length - 1) != index) {
                let newPlaybackSpeed = scope.rates[index + 1];
                console.log(`[ PlayBackShortcuts ] Decreasing playback speed to ${newPlaybackSpeed}`)
                scope.changeSpeed(newPlaybackSpeed);
            }
        } else if(e.shiftKey && e.key === '>') {
            let currentRate = scope.currentRate;
            let index = availableRates.indexOf(currentRate);
            
            if(availableRates[0] != currentRate) {
                let newPlaybackSpeed = scope.rates[index - 1];
                console.log(`[ PlayBackShortcuts ] Increasing playback speed to ${newPlaybackSpeed}`);

                scope.changeSpeed(scope.rates[index - 1]);
            }
        }
    })
});
