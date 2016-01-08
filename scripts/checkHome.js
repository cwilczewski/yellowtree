$(document).ready(function () {

    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {


    } else if (sUsrAg.indexOf("Safari") > -1) {


    } else if (sUsrAg.indexOf("Opera") > -1) {


    } else if (sUsrAg.indexOf("Firefox") > -1) {
        //nav
        document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";

    } else if (sUsrAg.indexOf("MSIE") > -1) {


    }
})