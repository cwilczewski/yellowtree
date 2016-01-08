$(document).ready(function () {

    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {


    } else if (sUsrAg.indexOf("Safari") > -1) {


    } else if (sUsrAg.indexOf("Opera") > -1) {


    } else if (sUsrAg.indexOf("Firefox") > -1) {
        //nav
        document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
        //showroom
        document.getElementById("showroom-hero").style.clipPath = "url('#hero-shape')";
        document.getElementById("size").style.clipPath = "url('#size-shape')";
        document.getElementById("map").style.clipPath = "url('#map-shape')";

    } else if (sUsrAg.indexOf("MSIE") > -1) {


    }
})