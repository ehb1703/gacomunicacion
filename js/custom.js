
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

        $('#cobertura-list ul li').on('click',function(){
            medios.event($(this).attr('id'));
        });
        
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

var medios ={
    event:function(op){
        $('.modal-body2').html('');
        $('.modal-title2').html('');
        switch(op){
            case '9':
                $('.modal-title2').html('Medios de CDMX');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Universal</li>\n\
                                            <li class="list-group-item list-group-item-info">Reforma</li> \n\
                                            <li class="list-group-item list-group-item-info">El Economista</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada De Mexico</li> \n\
                                            <li class="list-group-item list-group-item-info">El Financiero</li> \n\
                                            <li class="list-group-item list-group-item-info">Excélsior</li> \n\
                                            <li class="list-group-item list-group-item-info">Milenio</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de México</li> \n\
                                            <li class="list-group-item list-group-item-info">La Razón</li> \n\
                                            <li class="list-group-item list-group-item-info">La Crónica</li> \n\
                                            <li class="list-group-item list-group-item-info">Rumbo</li> \n\
                                            <li class="list-group-item list-group-item-info">Más por Más</li> \n\
                                            <li class="list-group-item list-group-item-info">Punto Crítico</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario DF</li> \n\
                                            <li class="list-group-item list-group-item-info">Mundo Expres</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Oficial de la Federación</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de México</li> \n\
                                            <li class="list-group-item list-group-item-info">La Prensa</li> \n\
                                            <li class="list-group-item list-group-item-info">La Crónica de Hoy</li> \n\
                                            <li class="list-group-item list-group-item-info">Esto</li> \n\
                                            <li class="list-group-item list-group-item-info">Record DF</li> \n\
                                            <li class="list-group-item list-group-item-info">Publimetro</li> \n\
                                            <li class="list-group-item list-group-item-info">El Gráfico</li> \n\
                                            <li class="list-group-item list-group-item-info">Ovaciones</li> \n\
                                            <li class="list-group-item list-group-item-info">24 Horas</li> \n\
                                            <li class="list-group-item list-group-item-info">Portadas OEM</li> \n\
                                            <li class="list-group-item list-group-item-info">Metro</li> \n\
                                            <li class="list-group-item list-group-item-info">La Razón</li> \n\
                                            <li class="list-group-item list-group-item-info">Reporte Índigo</li> \n\
                                            <li class="list-group-item list-group-item-info">Nosotros Diario</li> \n\
                                            <li class="list-group-item list-group-item-info">El Nuevo Mexicano</li> \n\
                                            <li class="list-group-item list-group-item-info">Impacto</li> \n\
                                        </ul>');

            break;
            case '15':
             $('.modal-title2').html('Medios de Toluca');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Toluca</li>\n\
                                            <li class="list-group-item list-group-item-info">Heraldo de Toluca</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Toluca</li> \n\
                                            <li class="list-group-item list-group-item-info">Milenio Edomex</li> \n\
                                            <li class="list-group-item list-group-item-info">El Mañana Edomex</li> \n\
                                            <li class="list-group-item list-group-item-info">Alfa Diario</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol Mexiquense de  Medio Día</li> \n\
                                            <li class="list-group-item list-group-item-info">Capital Toluca</li> \n\
                                            <li class="list-group-item list-group-item-info">Imagen de México</li> \n\
                                            <li class="list-group-item list-group-item-info">El Informante</li> \n\
                                        </ul>');
            break;
            case  '19':
                $('.modal-title2').html('Medios de Monterrey');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Norte</li>\n\
                                            <li class="list-group-item list-group-item-info">Milenio Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">El Regio</li> \n\
                                            <li class="list-group-item list-group-item-info">El Porvenir</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">Publimetro Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">El Tren de Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">Metro Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">Reporte Índigo Monterrey</li> \n\
                                            <li class="list-group-item list-group-item-info">Horizonte de Monterrey</li> \n\
                                        </ul>');
            break;
            case '14':
                 $('.modal-title2').html('Medios de Guadalajara');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Informador</li>\n\
                                            <li class="list-group-item list-group-item-info">El Mural</li> \n\
                                            <li class="list-group-item list-group-item-info">Ocho Columnas</li> \n\
                                            <li class="list-group-item list-group-item-info">El Occidental</li> \n\
                                            <li class="list-group-item list-group-item-info">Milenio Guadalajara</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada Jalisco</li> \n\
                                            <li class="list-group-item list-group-item-info">Meridiano</li> \n\
                                            <li class="list-group-item list-group-item-info">Noticias de la Provincia</li> \n\
                                            <li class="list-group-item list-group-item-info">Metro</li> \n\
                                            <li class="list-group-item list-group-item-info">El Tren</li> \n\
                                            <li class="list-group-item list-group-item-info">La Prensa de Jalisco</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Guadalajara</li> \n\
                                            <li class="list-group-item list-group-item-info">Esto</li> \n\
                                            <li class="list-group-item list-group-item-info">Vallarta Opina</li> \n\
                                            <li class="list-group-item list-group-item-info">Publimetro Guadalajara</li> \n\
                                            <li class="list-group-item list-group-item-info">Reporte Índigo Guadalajara</li> \n\
                                            <li class="list-group-item list-group-item-info">Encuentro Laboral</li> \n\
                                            <li class="list-group-item list-group-item-info">I Periódico</li> \n\
                                            <li class="list-group-item list-group-item-info">Página 24 Jalisco</li> \n\
                                            <li class="list-group-item list-group-item-info">El Gratuito</li> \n\
                                        </ul>');
            break;
            case '13':
                 $('.modal-title2').html('Medios de Querétaro');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Diario de Querétaro</li>\n\
                                            <li class="list-group-item list-group-item-info">El Sol de San Juan del Rio</li> \n\
                                            <li class="list-group-item list-group-item-info">Capital Querétaro</li> \n\
                                            <li class="list-group-item list-group-item-info">Noticias Querétaro</li> \n\
                                            <li class="list-group-item list-group-item-info">Plaza de Armas</li> \n\
                                            <li class="list-group-item list-group-item-info">AM de Querétaro</li> \n\
                                            <li class="list-group-item list-group-item-info">El Universal Querétaro</li> \n\
                                            <li class="list-group-item list-group-item-info">Financiero Bajío</li> \n\
                                            <li class="list-group-item list-group-item-info">Rotativo</li> \n\
                                            <li class="list-group-item list-group-item-info">El Economista Querétaro</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Rotativo</li> \n\
                                        </ul>');
            break;
            case '22':
                 $('.modal-title2').html('Medios de Puebla');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Milenio Puebla</li>\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">El Heraldo de Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">Síntesis de Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">Intolerancia</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada de Oriente Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">La Opinión de Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">Puebla Sin Fronteras</li> \n\
                                            <li class="list-group-item list-group-item-info">Cambio de Puebla</li> \n\
                                            <li class="list-group-item list-group-item-info">Capital Puebla</li> \n\
                                        </ul>');
            break;
             case '30':
                 $('.modal-title2').html('Medios de Veracruz');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Córdoba</li>\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Orizaba</li> \n\
                                            <li class="list-group-item list-group-item-info">Imagen</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Xalapa</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Xalapa</li> \n\
                                            <li class="list-group-item list-group-item-info">La Opinión de Poza Rica</li> \n\
                                            <li class="list-group-item list-group-item-info">Imagen de Veracruz</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario del Istmo</li> \n\
                                            <li class="list-group-item list-group-item-info">Dictamen de Veracruz</li> \n\
                                            <li class="list-group-item list-group-item-info">Notiver</li> \n\
                                            <li class="list-group-item list-group-item-info">Crónica de Xalapa</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Acayucan</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Poza Rica</li> \n\
                                            <li class="list-group-item list-group-item-info">El Herededo de Coatzacoalcos</li> \n\
                                            <li class="list-group-item list-group-item-info">El Diario Martinense</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Tuxpan</li> \n\
                                            <li class="list-group-item list-group-item-info">El Heraldo de Coatzacoalcos</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Tantoyuca</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Los Tuxtlas</li> \n\
                                            <li class="list-group-item list-group-item-info">Noreste de Poza Rica</li> \n\
                                        </ul>');
            break;
            case '31':
                 $('.modal-title2').html('Medios de Mérida');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Punto Medio</li>\n\
                                            <li class="list-group-item list-group-item-info">La Verdad de Yucatán</li> \n\
                                            <li class="list-group-item list-group-item-info">Milenio Novedades</li> \n\
                                            <li class="list-group-item list-group-item-info">El Diario de Yucatán</li> \n\
                                            <li class="list-group-item list-group-item-info">De Peso Mérida</li> \n\
                                            <li class="list-group-item list-group-item-info">Por Esto Yucatán</li> \n\
                                            <li class="list-group-item list-group-item-info">Síntesis de Mérida</li> \n\
                                            <li class="list-group-item list-group-item-info">La I de Yucatán</li> \n\
                                            <li class="list-group-item list-group-item-info">Al Chile</li> \n\
                                            <li class="list-group-item list-group-item-info">Sipse</li> \n\
                                            <li class="list-group-item list-group-item-info">Artículo 7</li> \n\
                                        </ul>');
            break;
            default :
                console.log('default');
            break;

        }
        $('#myModal2').modal('show');
    },
    modal:function(){

    }
}
