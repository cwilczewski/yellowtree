$(document).ready(function(){
    
    var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    //nav
    document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
    //testimonials
    document.getElementById("one").style.clipPath = "url('#tes-one-shape')";
    document.getElementById("two").style.clipPath = "url('#tes-two-shape')";
    document.getElementById("three").style.clipPath = "url('#tes-one-shape')";
    document.getElementById("four").style.clipPath = "url('#tes-two-shape')";
    //showroom
    document.getElementById("showroom-hero").style.clipPath = "url('#hero-shape')";
    document.getElementById("size").style.clipPath = "url('#size-shape')";
    document.getElementById("map").style.clipPath = "url('#map-shape')";
    
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}
})