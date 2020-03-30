var slideInterval = 3;
function getFigures() {
    return document.getElementById('slideshow').getElementsByTagName('figure');
}
function moveForward() {
    var pointer = 0;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = 'hidden';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();