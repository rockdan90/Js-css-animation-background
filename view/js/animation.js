var lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 / 30;
function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowX - y) * friction;
    var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    document.getElementById("contenedor-imagen").setAttribute("style", "-webkit-transform:" + translate);
    document.getElementById("contenedor-imagen").setAttribute("style", "-moz-transform:" + translate);
    document.getElementById("contenedor-imagen").setAttribute("style", "transform:" + translate);
    window.requestAnimationFrame(moveBackground);
}
onmousemove = function (e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
};
moveBackground();
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);
