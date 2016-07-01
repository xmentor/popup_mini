function loadCSS(filename) {
    'use strict';
    var newElement = document.createElement("link");
    newElement.setAttribute("rel", "stylesheet");
    newElement.setAttribute("href", filename);
    if (typeof newElement !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(newElement);
    } else {
        window.console.log("Load file: " + filename + " - FAIL");
    }
}
loadCSS("css/style.css");
    
function PopUpNew(time) {
    'use strict';
    this.time = time;
    this.Create();
}
PopUpNew.prototype = {
    Create: function () {
        'use strict';
        setTimeout(function () {
            document.querySelector(".container-popup").classList.add("fade-in");
        }, this.time);
        this.Delete();
    },
    Delete: function () {
        'use strict';
        document.getElementById("close-popup").addEventListener("click", function () {
            this.parentNode.remove();
        }, false);
    }
};