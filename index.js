$(document).ready(function() {
    function btn() {
        $(".se2").addClass("show");
    }

    function btn1() {
        $(".se2").removeClass("show");
    }

    // Attach functions to global scope
    window.btn = btn;
    window.btn1 = btn1;
});




$(document).ready(function() {
    function btn2() {
        $(".se3").addClass("show");
    }

    function btn3() {
        $(".se3").removeClass("show");
    }

    // Attach functions to global scope
    window.btn2 = btn2;
    window.btn3 = btn3;
});

$(document).ready(function() {
    function btn4() {
        $(".se4").addClass("show");
    }

    function btn5() {
        $(".se4").removeClass("show");
    }

    // Attach functions to global scope
    window.btn4 = btn4;
    window.btn5 = btn5;
});



$(document).ready(function() {
    function btn6() {
        $(".se5").addClass("show");
    }

    function btn7() {
        $(".se5").removeClass("show");
    }

    // Attach functions to global scope
    window.btn6 = btn6;
    window.btn7 = btn7;
});

$(document).ready(function() {
    function btn8() {
        $(".se6").addClass("show");
    }

    function btn9() {
        $(".se6").removeClass("show");
    }

    // Attach functions to global scope
    window.btn8 = btn8;
    window.btn9 = btn9;
});

$(document).ready(function() {
    function btn10() {
        $(".se7").addClass("show");
    }

    function btn11() {
        $(".se7").removeClass("show");
    }

    // Attach functions to global scope
    window.btn10 = btn10;
    window.btn11 = btn11;
});



$(document).ready(function() {
    $("#btn").mouseenter(function() {
        // Slide up the element immediately
        $("#MyGif").stop(true, true).slideUp(0, function() {
            // Once it's slid up, slide it down
            $("#MyGif").slideDown(500);
        });
    });
});


$(document).ready(function() {
    $("#btn2").mouseenter(function() {
        // Reset the position to off-screen to the top and stop any ongoing animations
        $("#MyGif1").stop(true, true).css("top", "-10%").animate({
            top: "0%"
        }, 500);
    });
});




$(document).ready(function() {
    $("#btn3").mouseenter(function() {
        // Reset the position to off-screen to the left and stop any ongoing animations
        $("#MyGif2").stop(true, true).css("left", "-10%").animate({
            left: "0%"
        }, 500);
    });
});



$(document).ready(function() {
    $("#btn4").mouseenter(function() {
        // Slide up the element immediately
        $(".MyGif5").stop(true, true).slideUp(0, function() {
            // Once it's slid up, slide it down
            $(".MyGif5").slideDown(500);
        });
    });
});



$(document).ready(function() {
    $("#btn5").mouseenter(function() {
        // Reset the position to off-screen at the bottom and stop any ongoing animations
        $("#MyGif7").stop(true, true).css("top", "10%").animate({
            top: "0%"
        }, 500);
    });
});



$(document).ready(function() {
    $("#btn6").mouseenter(function() {
        // Reset the position to off-screen at the bottom and stop any ongoing animations
        $("#MyGif8").stop(true, true).css("top", "10%").animate({
            top: "0%"
        }, 500);
    });
});



// $(document).ready(function() {
//     $("#btn").mouseenter(function() {
//         // Reset the position to off-screen to the left and stop any ongoing animations
//         $("#MyGif").stop(true, true).css("left", "-100%").animate({
//             left: "0%"
//         }, 1000);
//     });
// });







