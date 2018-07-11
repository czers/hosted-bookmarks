document.addEventListener("DOMContentLoaded", function(event) {
    var nav = document.getElementById("bookmarks-root");
    var lastMouseOver = null;
    var lastTimeoutSet = 0;

    nav.addEventListener("mouseover", function(event) {
        lastMouseOver = event.target;
        clearTimeout(lastTimeoutSet);
        lastTimeoutSet = setTimeout(function() {
            if (lastMouseOver === event.target) {
                event.target.focus();
            }
        }, 250);
    });
    // there's some problem with initial focus on page reload when dev tools are open
    // nav.focus(); 
});