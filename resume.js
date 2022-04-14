document.getElementById("call").onclick = function() {
    window.open("tel:william.exe@sip.linphone.org")
}
document.getElementById("body").onload = function() {
    document.getElementById("side").style.animationName = "slide";
    document.getElementById("body").style.animationName = "fadein";
}
var turningpoint = document.getElementById("xp").getBoundingClientRect();
window.onscroll = function() {
    while (turningpoint.top >= 0 && turningpoint.left >= 0 && turningpoint.right <= window.innerWidth && turningpoint.bottom <= window.innerHeight) {
        var read = 1
    }
    if (read = 1) {
        document.getElementById("bigchungus").style.animationName = "fadein";
    } else {
        document.getElementById("bigchungus").style.opacity = "0.9";
    }
}