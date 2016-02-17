$(document).ready(function () {
    
    console.log(page);
    var sBrowser, sUsrAg = navigator.userAgent;
    
    
        $('#menu').on('touchstart click', function () {
            document.getElementById("slide").style.transform = ("translateX(0%)");
        });

        $('#close').on('touchstart click', function () {
            document.getElementById("slide").style.transform = ("translateX(100%)");
        });
    
    if (page == "home") {
        if (sUsrAg.indexOf("Firefox") > -1) {
            //nav
            document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";

        } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
            //nav
            document.getElementById("navdetect").style.height = "80px";
        }

        var edge = sUsrAg.indexOf('Edge/'); //...Edge
        if (edge > 0) {
            document.getElementById("navdetect").style.height = "80px";
        };
        
    } else if (page == "testimonial") {
        if (sUsrAg.indexOf("Firefox") > -1) {
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

        var edge = sUsrAg.indexOf('Edge/'); //...Edge
        if (edge > 0) {
            document.getElementById("navdetect").style.height = "80px";
            document.getElementById("two").style.width = "50%";
            document.getElementById("four").style.width = "50%";
            document.getElementById("text-one").style.width = "50%";
            document.getElementById("text-two").style.width = "50%";
            document.getElementById("text-three").style.width = "50%";
            document.getElementById("text-four").style.width = "50%";
        }

    } else if (page == "about") {
        if (sUsrAg.indexOf("Firefox") > -1) {
            //nav
            document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
            //showroom
            document.getElementById("about-hero").style.clipPath = "url('#hero-shape')";
            document.getElementById("employees").style.clipPath = "url('#emps-shape')";

        } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
            //nav
            document.getElementById("navdetect").style.height = "80px";
        }

        var edge = sUsrAg.indexOf('Edge/'); //...Edge
        if (edge > 0) {
            document.getElementById("navdetect").style.height = "80px";
        }
                $('#menu').on('click', function () {
            document.getElementById("slide").style.transform = ("translateX(0%)");
        });

        $('#close').on('click', function () {
            document.getElementById("slide").style.transform = ("translateX(100%)");
        });
    } else if (page == "showroom") {
        if (sUsrAg.indexOf("Firefox") > -1) {
            //nav
            document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
            //showroom
            document.getElementById("showroom-hero").style.clipPath = "url('#hero-shape')";
            document.getElementById("size").style.clipPath = "url('#size-shape')";
            document.getElementById("map").style.clipPath = "url('#map-shape')";

        } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
            //nav
            document.getElementById("navdetect").style.height = "80px";
        }

        var edge = sUsrAg.indexOf('Edge/'); //...Edge
        if (edge > 0) {
            document.getElementById("navdetect").style.height = "80px";
        }
    } else if (page == "contact") {
        if (sUsrAg.indexOf("Firefox") > -1) {
            //nav
            document.getElementById("navdetect").style.clipPath = "url('#nav-shape')";
            //showroom
            document.getElementById("sontact-hero").style.clipPath = "url('#hero-shape')";
            document.getElementById("something").style.clipPath = "url('#pintrest-shape')";

        } else if (sUsrAg.indexOf("Trident/") > -1) { //IE11
            //nav
            document.getElementById("navdetect").style.height = "80px";
        }

        var edge = sUsrAg.indexOf('Edge/'); //...Edge
        if (edge > 0) {
            document.getElementById("navdetect").style.height = "80px";
        }
    }
});