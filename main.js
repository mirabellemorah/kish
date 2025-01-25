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