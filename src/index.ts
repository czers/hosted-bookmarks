import './style.css';

document.addEventListener("DOMContentLoaded", function(event) {

    function addListeners() {
        var nav = document.getElementById("bookmarks-root");
        var lastMouseOver: EventTarget | null = null;
        var lastTimeoutSet = 0;

        if (nav === null) {
            // something's wrong, postponing for 100ms
            setTimeout(addListeners, 100);
            return;
        }

        nav.addEventListener("mouseover", function(event) {
            lastMouseOver = event.target;
            clearTimeout(lastTimeoutSet);
            lastTimeoutSet = setTimeout(function() {
                if (lastMouseOver === event.target) {
                    (event.target as HTMLElement).focus();
                }
            }, 250);
        });
    }

    addListeners();
    // there's some problem with initial focus on page reload when dev tools are open
    // nav.focus();
});
