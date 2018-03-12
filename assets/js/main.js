var onResize = function() {
    //Soluciona el problema de FixedTop
    //Aplicamos dinamicamente a la parte superior del body un padding acorde a la altura del menu
    $("body").css("padding-top", $(".navbar").height());
};


$(document).ready(function(){
    //Llamamos esta funcion cuando la pagina a cargado correctamente
    $(function() {
        onResize();
    });

    // Añadimos efecto al scroll de los links , para que el movimiento sea mas suave
    $("a").on('click', function(event) {

        // El hash lo que hace es leer el atributo HREF de 'a' y si encuentra alguna '#'
        // coge el elemento que empieza por '#'
        if (this.hash !== "") {
            // Previene el comportamiento "natural" de los enlaces
            event.preventDefault();

            // Guardamos el hash
            var hash = this.hash;

            // Usamos la funcion animate de JQuery para hacer que el scroll sea mas suave
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Modifica la URL cuando acaba el Scroll (ver url)
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