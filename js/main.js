/*function loadCSS(filename) {
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
loadCSS("css/style.css");*/
/*  
function PopUpNew(time, click_bool) {
    'use strict';
    this.time = time;
    this.click_bool = click_bool;
    this.init();
}
*/
var PopUpNew = {
    options: {
        delaytime: 500, // only if click is set to false
        click: false
    },
    not_click: function () {
        'use strict';
        setTimeout(function () {
            document.querySelector(".container-popup").classList.add("fade-in");
        }, PopUpNew.options.delaytime);
        this.Delete();
    },
    Delete: function () {
        'use strict';
        document.getElementById("close-popup").addEventListener("click", function () {
            this.parentNode.classList.remove("fade-in");
        }, false);
    },
    click: function () {
        'use strict';
        var show_popUp = document.querySelectorAll(".click-popup");
        for (var popUp of show_popUp) {
            popUp.addEventListener("click", function () {
                document.querySelector(".container-popup").classList.add("fade-in");
            }, false);
        }
        this.Delete();
    },
    init: function (e) {
        'use strict';
        for (var i in e) PopUpNew.options[i] = e[i];
        if (PopUpNew.options.click) {
           this.click(); 
        } else {
            this.not_click(); 
        }
    }
};