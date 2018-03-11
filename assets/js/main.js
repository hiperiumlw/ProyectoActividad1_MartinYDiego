var onResize = function() {
    // apply dynamic padding at the top of the body according to the fixed navbar height
    $("body").css("padding-top", $(".navbar").height());
};


$(document).ready(function(){
    // call it also when the page is ready after load or reload
    $(function() {
        onResize();
    });
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(".fixed-top").autoHidingNavbar({

    disableAutohide: false// defaults to false, set this to true if you want to show/hide the navbar programmatically.
    ,showOnUpscroll: true// defaults to 'true', the navbar shows up when scrolling the page upwards (otherwise it shows only when scroll is on page's top).
    ,showOnBottom: true// defaults to 'true', the navbar shows up when scroll reaches the page's end.
// defaults to 'auto', hides the navbar after scrolling that much pixel. Auto means the navbar's height.
,animationDuration: 500// defaults to '200', is the duration of the show and hide animations in milliseconds.
    ,navbarOffset: 0// defaults to '0', the navbar doesn't hide that many pixels from the bottom.

});