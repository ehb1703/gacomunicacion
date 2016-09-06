
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {
        $( "#modal-login" ).show( 'slide', {}, 10000 );
        
    // Script de Scroll 
        $('.scroll-me a').bind('click', function (event) {
        var $anchor = $(this);
        var x= $($anchor.attr('href')).offset();
        var _top = x.top-50;
        $('html, body').stop().animate({
            scrollTop: _top
        }, 1000, 'easeInOutQuad');

        event.preventDefault();
        });

    // Inicializacion del mapa de covertura
        var map = new GMaps({
            div: '#cover-map',
            lat: -12.043333,
            lng: -77.028333
        });

        map.addMarker({
          lat: -12.043333,
          lng: -77.028333,
          title: 'Lima',
          click: function(e) {
            alert('You clicked in this marker');
          }
        });

        $('#cover-map').html(map);

            // Checking for CSS 3D transformation support
    $.support.css3d = supportsCSS3D();
    
    var formContainer = $('#formContainer');
    
    formContainer.find('form').submit(function(e){
        // Preventing form submissions. If you implement
        // a backend, you might want to remove this code
        e.preventDefault();
    });
    
    // A helper function that checks for the 
    // support of the 3D CSS3 transformations.
    function supportsCSS3D() {
        var props = [
            'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
        ], testDom = document.createElement('a');
          
        for(var i=0; i<props.length; i++){
            if(props[i] in testDom.style){
                return true;
            }
        }
        
        return false;
    }
});


