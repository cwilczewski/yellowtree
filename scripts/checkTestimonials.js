$(document).ready(function () {

    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {


    } else if (sUsrAg.indexOf("Safari") > -1) {


    } else if (sUsrAg.indexOf("Opera") > -1) {


    } else if (sUsrAg.indexOf("Firefox") > -1) {
        //nav
        document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
        //testimonials
        document.getElementById("one").style.clipPath = "url('#tes-one-shape')";
        document.getElementById("two").style.clipPath = "url('#tes-two-shape')";
        document.getElementById("three").style.clipPath = "url('#tes-one-shape')";
        document.getElementById("four").style.clipPath = "url('#tes-two-shape')";

    } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
        //nav
        document.getElementById("navdetect").style.height = "80px";
        document.getElementById("two").style.width = "50%";
        document.getElementById("four").style.width = "50%";
        document.getElementById("text-one").style.width = "50%";
        document.getElementById("text-two").style.width = "50%";
        document.getElementById("text-three").style.width = "50%";
        document.getElementById("text-four").style.width = "50%";
    }
    
    var edge = sUsrAg.indexOf('Edge/');//...Edge
    if (edge > 0) {
        document.getElementById("navdetect").style.height = "80px";
        document.getElementById("two").style.width = "50%";
        document.getElementById("four").style.width = "50%";
        document.getElementById("text-one").style.width = "50%";
        document.getElementById("text-two").style.width = "50%";
        document.getElementById("text-three").style.width = "50%";
        document.getElementById("text-four").style.width = "50%";
    }
})