$(".gallery1 img").on("click", function (ev) {
    ev.preventDefault(); // Prevent default behavior if needed

    // Fade in the modal
    $(".modal").fadeIn(500);

    // Get the src of the clicked image
    var imgSrc = $(this).attr("src");

    // Set the modal content to the clicked image

    $(".modal-content").html('<img src="' + imgSrc + '" alt="Lightbox Image" style="width:100%; height:100%; object-fit:contain;">');

    //$(".modal-content").html('<img src="' + imgSrc + '" alt="Lightbox Image" style="width:100%; height:100%; object-fit:contain;">');
});

$(".modal-background, .modal-close").on("click", function (ev) {
    $(".modal").fadeOut(500);
    ev.preventDefault();
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("blue-mode");
    } else if (body.classList.contains("blue-mode")) {
        body.classList.remove("blue-mode"); // Goes back to default (dark mode)
    } else {
        body.classList.add("light-mode");
    }

    // Also toggle hero images if needed
    document.querySelector(".hero-img-wrapper").classList.toggle("light-mode", body.classList.contains("light-mode"));
    document.querySelector(".hero-img-wrapper").classList.toggle("blue-mode", body.classList.contains("blue-mode"));

    document.querySelector(".hero-img2-wrapper").classList.toggle("light-mode", body.classList.contains("light-mode"));
    document.querySelector(".hero-img2-wrapper").classList.toggle("blue-mode", body.classList.contains("blue-mode"));
});

/* //color change

$(document).on("scroll", function () {

    var pixelsFromTop = $(document).scrollTop()

    $(".progress .bar").html(pixelsFromTop + " pixels from top");

    if (pixelsFromTop > 50) {
        $("header").addClass("hidden");
    } else {
        $("header").removeClass("hidden");
    }

    console.log("pixelsFromTop");

    if (pixelsFromTop < 400) {
        $("body").css("background-color", "#000");

    } else if (pixelsFromTop < 1500) {
        $("body").css("background-color", "orange");
    }

    else {
        $("body").css("background-color", "#000");
    }

    // here we join the number of % scrolled with % symbol otherwise 
    //assume we are talking about pixels


    var documentHeight = $(document).height();

    var windowHeight = $(window).height();

    var difference = documentHeight - windowHeight;

    var percentage = 100 * pixelsFromTop / difference;

    $(".bar").css("width", percentage + "%");

}) */
