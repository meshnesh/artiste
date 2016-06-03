$(document).foundation()
$(function () {

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function (e) {
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});


setTimeout(function (i) {
    showElements($('#parent'));
}, 5000);

function showElements(element) {
    element.children('div').each(function () {
                if ($(this).is(':hidden')) {
                    $(this).fadeIn();
                    setTimeout(function () {
                        showElements(element)
                    }, 5000);
                    return false;
                }