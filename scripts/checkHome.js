$(document).ready(function () {

    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {


    } else if (sUsrAg.indexOf("Safari") > -1) {


    } else if (sUsrAg.indexOf("Opera") > -1) {


    } else if (sUsrAg.indexOf("Firefox") > -1) {
        //nav
        document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
        
    } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
        //nav
        document.getElementById("navdetect").style.height = "80px";
    }
    
    var edge = sUsrAg.indexOf('Edge/');//...Edge
    if (edge > 0) {
        document.getElementById("navdetect").style.height = "80px";
    };
    
    
   $('#menu').on('click', function(){
        document.getElementById("slide").style.transform = ("translateX(0%)");
    });
    
    $('#close').on('click', function(){
        document.getElementById("slide").style.transform = ("translateX(100%)");
    });
});
