window.onload = function () {
    var hideClass = "hide";
    var filmViewerTallClass = "film-viewer-tall";
    var offscreenClass = "offscreen";
    var hideNavTxt = "Hide Navigation";
    var showNavTxt = "Show Navigation";
    var arrowDown = "expand_more";
    var arrowUp = "expand_less";

    let iconsLinkCss = document.createElement('link');
    iconsLinkCss.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    iconsLinkCss.rel = "stylesheet";

    let arrowDiv = document.createElement('div');
    arrowDiv.classList.add('arrow-div');
    arrowDiv.innerHTML = `<i class="material-icons">${arrowDown}</i>`

    let toggleNavBtn = document.createElement('button');
    toggleNavBtn.classList.add('fs-button');
    toggleNavBtn.innerText = hideNavTxt;

    let customToggleDiv = document.createElement('div');
    customToggleDiv.classList.add("custom-toggles");
    customToggleDiv.appendChild(toggleNavBtn);

    let fsViewerFs = document.createElement('div');
    fsViewerFs.classList.add('fs-viewer-fullscreen-dropdown');
    fsViewerFs.appendChild(customToggleDiv);
    fsViewerFs.appendChild(arrowDiv);

    let body = document.querySelector('body');
    body.appendChild(fsViewerFs);
    let header = document.querySelector('header');
    header.appendChild(iconsLinkCss);

    // var navigation = document.querySelector('#global-header');
    var navigation = document.querySelector('header');
    var subNav = document.querySelector('.fs-subnav__container');
    var filmViewer = document.querySelector('.film-viewer');
    var filmViewerHeader = document.querySelector('.openSDHeader');

    if (filmViewer != null && filmViewerHeader != null) {

        toggleNavBtn.onclick = (e) => {
            if (navigation.classList.contains(hideClass) && subNav.classList.contains(hideClass)) {
                navigation.classList.remove(hideClass)
                subNav.classList.remove(hideClass);
                filmViewerHeader.classList.remove(hideClass);
                filmViewer.style.top = "112px";
                e.target.innerText = hideNavTxt;
            } else {
                navigation.classList.add(hideClass);
                subNav.classList.add(hideClass);
                filmViewerHeader.classList.add(hideClass);
                filmViewer.style.top = "0px";
                e.target.innerText = showNavTxt;
            }
        };
    }
}