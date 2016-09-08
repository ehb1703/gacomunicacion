
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
             case '2':
                 $('.modal-title2').html('Medios de Tijuana');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Mexicano de Tijuana</li>\n\
                                            <li class="list-group-item list-group-item-info">La Frontera de Tijuana</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Tijuana</li> \n\
                                            <li class="list-group-item list-group-item-info">La Voz de la Frontera</li> \n\
                                            <li class="list-group-item list-group-item-info">El Vigia</li> \n\
                                            <li class="list-group-item list-group-item-info">Monitor Ecónomico</li> \n\
                                            <li class="list-group-item list-group-item-info">Esto de las Californias</li> \n\
                                            <li class="list-group-item list-group-item-info">Ciudad Real Hoy</li> \n\
                                        </ul>');
            break;
            case '27':
                 $('.modal-title2').html('Medios de Tabasco');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Novedades de Tabasco</li>\n\
                                            <li class="list-group-item list-group-item-info">Milenio Villahermosa</li> \n\
                                            <li class="list-group-item list-group-item-info">Tabasco Hoy</li> \n\
                                            <li class="list-group-item list-group-item-info">Presente de Tabasco</li> \n\
                                            <li class="list-group-item list-group-item-info">Rumbo Nuevo</li> \n\
                                            <li class="list-group-item list-group-item-info">Presencia Sureste</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Olmeca</li> \n\
                                            <li class="list-group-item list-group-item-info">Tabasco al Día</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol del Sureste</li> \n\
                                            <li class="list-group-item list-group-item-info">Heraldo de Tabasco</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Tabasco</li> \n\
                                        </ul>');
            break;
            case '16':
                 $('.modal-title2').html('Medios de Morelia');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">La Voz de Michoacán</li>\n\
                                            <li class="list-group-item list-group-item-info">Provincia de Michoacán</li> \n\
                                            <li class="list-group-item list-group-item-info">Cambio de Michoacán</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada Michoacán</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Morelia</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Zamora</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Michoacán</li> \n\
                                            <li class="list-group-item list-group-item-info">La Opinión de Michoacán</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Morelia</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Apatzingan</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Lazaro</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Morelia</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Uruapan</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Zihuatanejo</li> \n\
                                            <li class="list-group-item list-group-item-info">ABC de Zamora</li> \n\
                                            <li class="list-group-item list-group-item-info">La Opinión de Uruapan</li> \n\
                                            <li class="list-group-item list-group-item-info">El Independiente</li> \n\
                                            <li class="list-group-item list-group-item-info">Michoacán al Día</li> \n\
                                            <li class="list-group-item list-group-item-info">Quadrantin</li> \n\
                                        </ul>');
            break;
            case '12':
                 $('.modal-title2').html('Medios de Acapulco');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Acapulco</li>\n\
                                            <li class="list-group-item list-group-item-info">Vértice</li> \n\
                                            <li class="list-group-item list-group-item-info">Novedades de Acapulco</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Chilpancingo</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario 21 de Iguala</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Objetivo</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sur</li> \n\
                                            <li class="list-group-item list-group-item-info">Redes del Sur</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada Guerrero</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario 17</li> \n\
                                            <li class="list-group-item list-group-item-info">Acontencer</li> \n\
                                            <li class="list-group-item list-group-item-info">Despertar de la Costa</li> \n\
                                            <li class="list-group-item list-group-item-info">Despertar del Sur</li> \n\
                                            <li class="list-group-item list-group-item-info">Región Norte</li> \n\
                                        </ul>');
            break;
            case '17':
                 $('.modal-title2').html('Medios de Morelos');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">EL Sol de Cuautla</li>\n\
                                            <li class="list-group-item list-group-item-info">El Sol de Cuernavaca</li> \n\
                                            <li class="list-group-item list-group-item-info">7 Días</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Morelos</li> \n\
                                            <li class="list-group-item list-group-item-info">Capital Morelos</li> \n\
                                            <li class="list-group-item list-group-item-info">La Unión de Morelos</li> \n\
                                            <li class="list-group-item list-group-item-info">El Regional del Sur</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada Morelos</li> \n\
                                            <li class="list-group-item list-group-item-info">Miled Morelos</li> \n\
                                        </ul>');
            break;
            case '11':
                 $('.modal-title2').html('Medios de León');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Correo de Guanajuato</li>\n\
                                            <li class="list-group-item list-group-item-info">El Diario de Irapuato</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol del Bajío</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Irapuato</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Salamanca</li> \n\
                                            <li class="list-group-item list-group-item-info">EL Sol de León</li> \n\
                                            <li class="list-group-item list-group-item-info">Noticias Vespertinas del Sol de León</li> \n\
                                            <li class="list-group-item list-group-item-info">Milenio León</li> \n\
                                            <li class="list-group-item list-group-item-info">Heraldo León</li> \n\
                                            <li class="list-group-item list-group-item-info">AM de León</li> \n\
                                            <li class="list-group-item list-group-item-info">La Prensa Del Bajío</li> \n\
                                            <li class="list-group-item list-group-item-info">Al Día</li> \n\
                                            <li class="list-group-item list-group-item-info">El Heraldo del Bajío</li> \n\
                                            <li class="list-group-item list-group-item-info">AM de Guanajuato</li> \n\
                                            <li class="list-group-item list-group-item-info">Publimetro León</li> \n\
                                        </ul>');
            break;
            case '24':
                 $('.modal-title2').html('Medios de San Luís Potosí');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Pulso San Luis Potosi</li>\n\
                                            <li class="list-group-item list-group-item-info">San Luis Hoy</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de San Luis</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada San Luis</li> \n\
                                            <li class="list-group-item list-group-item-info">La Prensa del Centro</li> \n\
                                            <li class="list-group-item list-group-item-info">Esto del Centro</li> \n\
                                            <li class="list-group-item list-group-item-info">La Razón de San Luis</li> \n\
                                        </ul>');
            break;
             case '24':
                 $('.modal-title2').html('Medios de San Luís Potosí');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Pulso San Luis Potosi</li>\n\
                                            <li class="list-group-item list-group-item-info">San Luis Hoy</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de San Luis</li> \n\
                                            <li class="list-group-item list-group-item-info">La Jornada San Luis</li> \n\
                                            <li class="list-group-item list-group-item-info">La Prensa del Centro</li> \n\
                                            <li class="list-group-item list-group-item-info">Esto del Centro</li> \n\
                                            <li class="list-group-item list-group-item-info">La Razón de San Luis</li> \n\
                                        </ul>');
            break;
            case '20':
                 $('.modal-title2').html('Medios de Oaxaca');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">Noticias</li>\n\
                                            <li class="list-group-item list-group-item-info">A Diario</li> \n\
                                            <li class="list-group-item list-group-item-info">El Imparcial de Oaxaca</li> \n\
                                            <li class="list-group-item list-group-item-info">Noticias Cuenca</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol del Istmo</li> \n\
                                            <li class="list-group-item list-group-item-info">Tiempo</li> \n\
                                            <li class="list-group-item list-group-item-info">Despertar</li> \n\
                                            <li class="list-group-item list-group-item-info">Capital Oaxaca</li> \n\
                                            <li class="list-group-item list-group-item-info">NSS Oaxaca</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario Oaxaca</li> \n\
                                        </ul>');
            break;
            case '8':
                 $('.modal-title2').html('Medios de Chihuahua');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">El Diario de Juárez</li>\n\
                                            <li class="list-group-item list-group-item-info">El Heraldo de Chihuahua</li> \n\
                                            <li class="list-group-item list-group-item-info">El Sol de Parral</li> \n\
                                            <li class="list-group-item list-group-item-info">El Mexicano</li> \n\
                                            <li class="list-group-item list-group-item-info">Norte de Ciudad Juárez</li> \n\
                                            <li class="list-group-item list-group-item-info">El Pueblo</li> \n\
                                            <li class="list-group-item list-group-item-info">EL Norte Digital</li> \n\
                                            <li class="list-group-item list-group-item-info">El Diario de Chihuahua</li> \n\
                                            <li class="list-group-item list-group-item-info">El Diario de Delicias</li> \n\
                                        </ul>');
            break;
            case '23':
                 $('.modal-title2').html('Medios de Cancún');
                $('.modal-body2').html('<ul class="list-group text-center">\n\
                                            <li class="list-group-item list-group-item-info">La Verdad de Quintana Roo</li>\n\
                                            <li class="list-group-item list-group-item-info">Quequi</li> \n\
                                            <li class="list-group-item list-group-item-info">Últimas Noticias</li> \n\
                                            <li class="list-group-item list-group-item-info">Novedades de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">El Periódico de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">Diario de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">El Quintanarroense</li> \n\
                                            <li class="list-group-item list-group-item-info">Imagen de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">De Peso Cancún</li> \n\
                                            <li class="list-group-item list-group-item-info">La Voz de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">Respuesta</li> \n\
                                            <li class="list-group-item list-group-item-info">Por Esto! de Quintana Roo</li> \n\
                                            <li class="list-group-item list-group-item-info">Al Momento</li> \n\
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
