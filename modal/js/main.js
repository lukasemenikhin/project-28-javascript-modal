$(document).ready(function () {
    $('#modal').on('click', function () {
        $('.modal').fadeIn(500);
        // show
    })

    $('#close-modal').on('click', function () {
        $('.modal').fadeOut(500);
        // hide
    })
})