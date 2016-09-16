
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {
    setTimeout (medios.modal(), 4000); 
     if(screen.width < 990){
               Page.pantallaChica();
            }else{
                Page.pantallaGde();
            }

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
      /*  var map = new GMaps({
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

        $('#cover-map').html(map);*/

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
 function tooltipHtml(n, d, e){ /* FUNCION PARA MOSTRAR EL NOMBRE DEL ESTADO EN EL MAPA :s */
                                    return "<h4>"+n+ " ("+e+") Emisoras</h4>";
                        }
 function tooltipHtml_impresos(n, d, e, m){ /* FUNCION PARA MOSTRAR EL NOMBRE DEL ESTADO EN EL MAPA :s */
            return "<h4>"+n+ " ("+m+") Medios</h4>";
}




var sampleData ={};
            [ "SN", "VZ", "CHP", "OAX", "GRO", "TAB", "MIC", "PUE", "MOR", "EMX", "COL", "CAM", "JAL", "DF", "TLA", "HID",
            "GUA", "QUE", "YUC", "ZAC", "SLP", "AGU", "QROO", "NY", "DG", "NL", "COA", "SIN", "CH", "BCS", "BCN", "TAM"
            ].forEach(function(d){
                var low=Math.round(100*Math.random()),
                mid=Math.round(100*Math.random()),
                high=Math.round(100*Math.random());

                sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]),
                    avg:Math.round((low+mid+high)/3), alter_color:d3.interpolate("#002B32", "#002B32")(low/100) , color:d3.interpolate("#D1D2D4", "#D1D2D4")(low/100)};
            });


var Page ={
    pantallaChica:function(){
        $('#inicio').html('').html('<div id="home" class="textAv">\n\
            <div class="row" id="home-row">\n\
                <div class="row" id="logo-row">\n\
                    <div id="logo-col" class="col-md-offset-1 col-md-4">\n\
                        <img id="logo-img" class="img-responsive centered" src="img/LOGOwebHEADER.png">\n\
                    </div>\n\
                </div>\n\
                 <div class="row" id="login-modal-col">\n\
                    <div id="login-modal" class="row" >\n\
                          <div class="modal-content" >\n\
                            <div class="modal-body">\n\
                                <h4 class="modal-title">Acceso a clientes</h4>\n\
                                  <div id="formContainer">\n\
                                      <form class="form-signin-xs" id="login" role="form">\n\
                                            <input type="email" class="form-control" name="loginEmail" id="loginEmail" placeholder="Nombre de Usuario" required>\n\
                                            <input type="password" class="form-control" name="loginPass" id="loginPass" placeholder="Contraseña" required>\n\
                                            <button class="btn btn-primary btn-block btn-xs" type="submit">Ingresar</button>\n\
                                      </form>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
    </div>\n\
    <div class="row" id="text-divs"> \n\
                    <div class="col-md-6" id="intro-div">\n\
                        <h3 class="text-left" >VISIÓN</h3>\n\
                        <p>\n\
                           Proyectar a GA Comunicación como empresa líder, competitiva y rentable en el monitoreo y análisis de información mediática; enfrentamos los retos de manera innovadora, aprovechando con actitud, la experiencia y fortaleza de cada uno de nuestros colaboradores, para generar una respuesta eficaz con información estratégica, oportuna y de calidad.\n\
                        </p>\n\
                    </div>\n\
                     <div class="col-md-6" id="intro-div-2">\n\
                        <h3 class="text-right" >MISIÓN</h3>\n\
                        <p>\n\
                            Informar real, objetiva y oportunamente los sucesos y acontecimientos difundidos en los medios de comunicación, con el objetivo de proporcionar productos con la información necesaria y especializada que sirva para fortalecer la toma de decisiones.\n\
                        </p>\n\
                    </div>\n\
                </div>\n\
    </div>');
                $('#clients').html('').html('<div id="sub-client">\n\
                                             <div class="row" id="clientes1">\n\
                                                <div id="indice-clientes" class="col-md-4" style="padding-top:0;padding-bottom: 10%;">\n\
                                                     <img class="img-responsive" src="img/CLIENTES 2.png"/>\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" ">\n\
                                                    <img class="img-responsive" src="img/PRESIDENCIA.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/SEGOB.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/CONAGUA.png"  />\n\
                                                </div> \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/CONADIC.png" />\n\
                                                </div>     \n\
                                            </div>\n\
                                            <div class="row" id="clientes1">\n\
                                                <div class="col-md-2 col-sm-6" ">\n\
                                                    <img class="img-responsive" src="img/COFEPRIS.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/PEMEX.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/SENADO.png"  />\n\
                                                </div> \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/CONAGO.png" />\n\
                                                </div>   \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/JALISCO.png" />\n\
                                                </div>   \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/SONORA.png" />\n\
                                                </div>   \n\
                                            </div>\n\
                                            <div class="row" id="clientes2">\n\
                                                <div class="col-md-2 col-sm-6" ">\n\
                                                    <img class="img-responsive" src="img/EDOMEX.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/SEDESA.png" />\n\
                                                </div>\n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/BANAMEX.png"  />\n\
                                                </div> \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/MVS.png" />\n\
                                                </div>   \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/AEROMEXICO.png" />\n\
                                                </div>   \n\
                                                <div class="col-md-2 col-sm-6" >\n\
                                                     <img class="img-responsive" src="img/SAMBORNS.png" />\n\
                                                </div>   \n\
                                            </div>\n\
                                        </div>\n\
                                        <section id="contact">\n\
        <div class="row">\n\
            <div class="col-md-12" id="cobertura-div">\n\
               <img src="img/PLECAcontacto.png"  style="width:100%;height:4px;"/>\n\
            </div>\n\
        </div>\n\
        <div class="row">\n\
            <div class="col-md-12">\n\
               <img src="img/HEADERcontacto.png" class="img-responsive header-cobertura" id="header-services" >\n\
            </div>\n\
        </div>\n\
        <div class="row" id="row-contact">\n\
            <div class="col-md-8">\n\
            <div class="row" id="text-area">\n\
                <div class="col-md-9" id="presentacion">\n\
                <p class="info-text">Para nosotros es muy importante tu opinión.</p>\n\
                <p class="info-text">Agradeceremos todos tus comentarios y sugerencias</p>\n\
                <p class="gacom">G.A. Comunicación, SC.</p>\n\
                <p class="info-address">La Capilla No. 86, Los Pastores</p>\n\
                <p class="info-address">Naucalpan, Estado de México C.P. 53340</p>\n\
                <a href="tel:5553739889">(55) 5373 9889</a></p>\n\
                <p id="mail" class="info-text"><strong></strong> <a href="mailto:contacto@gacomunicacion.com">contacto@gacomunicacion.com</a></p>\n\
            </div>\n\
             <div class="col-md-3" >\n\
                    <img src="img/GAlogoSINfondo.png" class="img-responsive" id="logo">\n\
            </div>\n\
            </div>\n\
            </div>\n\
        </div>\n\
    </section>\n\
    ');
    },
    pantallaGde:function(){
        $('#inicio').html('').html('<div id="home" class="textAv">\n\
        <div class="row" id="home-row">\n\
             <div class="col-md-3 col-xs-6" id="login-modal-col">\n\
                    <div id="login-modal" class="row" >\n\
                      <div class="modal-content" >\n\
                        <div class="modal-body">\n\
                            <h4 class="modal-title">Acceso a clientes</h4>\n\
                              <div id="formContainer">\n\
                                  <form class="form-signin-xs" id="login" role="form">\n\
                                        <input type="email" class="form-control" name="loginEmail" id="loginEmail" placeholder="Nombre de Usuario" required>\n\
                                        <input type="password" class="form-control" name="loginPass" id="loginPass" placeholder="Contraseña" required>\n\
                                        <button class="btn btn-primary btn-block btn-xs" type="submit">Ingresar</button>\n\
                                  </form>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="row" id="logo-row">\n\
                    <div id="logo-col" class="col-md-offset-1 col-md-4">\n\
                        <img id="logo-img" class="img-responsive centered" src="img/LOGOwebHEADER.png">\n\
                    </div>\n\
                </div>\n\
                 <div class="row" id="text">\n\
                    <div class="col-md-offset-3 col-md-6 col-md-offset-3 text-center" id="title-text">\n\
                        <!--<span>GA Comunicación</span><br>-->\n\
                        <!--<span> es pionera en el monitoreo de radio y televisión<br> con 30 años de experiencia</span>-->\n\
                    </div>\n\
                </div>\n\
                \n\
            \n\
    </div>\n\
    <div class="row" id="text-divs"> \n\
                    <div class="col-md-6" id="intro-div">\n\
                        <h3 class="text-left" >VISIÓN</h3>\n\
                        <p>\n\
                           Proyectar a GA Comunicación como empresa líder, competitiva y rentable en el monitoreo y análisis de información mediática; enfrentamos los retos de manera innovadora, aprovechando con actitud, la experiencia y fortaleza de cada uno de nuestros colaboradores, para generar una respuesta eficaz con información estratégica, oportuna y de calidad.\n\
                        </p>\n\
                    </div>\n\
                     <div class="col-md-6" id="intro-div-2">\n\
                        <h3 class="text-right" >MISIÓN</h3>\n\
                        <p>\n\
                            Informar real, objetiva y oportunamente los sucesos y acontecimientos difundidos en los medios de comunicación, con el objetivo de proporcionar productos con la información necesaria y especializada que sirva para fortalecer la toma de decisiones.\n\
                        </p>\n\
                    </div>\n\
                </div>\n\
    </div>');
         $('.map-iframe').css('display','block');
                $('#cobertura-list').css('display','none');
                $('#clients').html('').html('<div id="clients">\n\
            <div id="sub-client">\n\
                <div class="row" >\n\
                    <div id="indice-clientes" class="col-md-12">\n\
                         <img class="img-responsive" src="img/PLECAmarcas.png"/>\n\
                    </div>  \n\
                </div>\n\
                <div class="row" >\n\
                    <div id="indice-clientes2" class="col-md-offset-4 col-md-4">\n\
                         <img class="img-responsive" src="img/CLIENTES 2.png"/>\n\
                    </div>  \n\
                </div>\n\
                 <div class="row" id="clientes1">\n\
                    <div class="col-md-2 col-sm-6" >\n\
                        <img class="img-responsive" src="img/PRESIDENCIA.png"/>\n\
                    </div>\n\
                    <div class="col-md-2 col-sm-6">\n\
                    <img class="img-responsive" src="img/SEGOB.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                         <img class="img-responsive" src="img/CONAGUA.png"/>\n\
                    </div> \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                         <img class="img-responsive" src="img/CONADIC.png"/>\n\
                    </div>\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/COFEPRIS.png"/>\n\
                    </div>     \n\
                </div>\n\
                <div class="row" id="clientes1">\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/PEMEX.png"/>\n\
                    </div>\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/SENADO.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/CONAGO.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/JALISCO.png"/>\n\
                    </div>  \n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/SONORA.png"/>\n\
                    </div> \n\
                </div>\n\
                <div class="row" id="clientes1">\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/EDOMEX.png"/>\n\
                    </div>\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/SEDESA.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/BANAMEX.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/MVS.png"/>\n\
                    </div>  \n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/AEROMEXICO.png"/>\n\
                    </div> \n\
                </div>\n\
                <div class="row" id="clientes2">\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/SAMBORNS.png"/>\n\
                    </div>\n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/MONTEPIO.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/PLACENCIA.png"/>\n\
                    </div>  \n\
                    <div class="col-md-offset-1 col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/UNIVA.png"/>\n\
                    </div>  \n\
                    <div class="col-md-2 col-sm-6">\n\
                        <img class="img-responsive" src="img/QUICKLEARNING.png"/>\n\
                    </div> \n\
                </div>\n\
            </div>\n\
            </div>\n\
        </div>\n\
        <section id="contact">\n\
        <div class="row">\n\
            <div class="col-md-12" id="cobertura-div">\n\
               <img src="img/PLECAcontacto.png"  style="width:100%;height:4px;"/>\n\
            </div>\n\
        </div>\n\
        <div class="row">\n\
            <div class="col-md-12">\n\
               <img src="img/HEADERcontacto.png" class="img-responsive header-cobertura" id="header-services" >\n\
            </div>\n\
        </div>\n\
        <div class="row" id="row-contact">\n\
            <div class="col-md-8">\n\
            <div class="row" id="text-area">\n\
                <div class="col-md-9" id="presentacion">\n\
                <p class="info-text">Para nosotros es muy importante tu opinión.</p>\n\
                <p class="info-text">Agradeceremos todos tus comentarios y sugerencias</p>\n\
                <p class="gacom">G.A. Comunicación, SC.</p>\n\
                <p class="info-address">La Capilla No. 86, Los Pastores</p>\n\
                <p class="info-address">Naucalpan, Estado de México C.P. 53340</p>\n\
                <a href="tel:5553739889">(55) 5373 9889</a></p>\n\
                <p id="mail" class="info-text"><strong></strong> <a href="mailto:contacto@gacomunicacion.com">contacto@gacomunicacion.com</a></p>\n\
            </div>\n\
             <div class="col-md-3" >\n\
                    <img src="img/GAlogoSINfondo.png" class="img-responsive" id="logo">\n\
            </div>\n\
            </div>\n\
            </div>\n\
        </div>\n\
    </section>\n\
        ');
    }
}

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
        $( "#modal-login" ).show( 'slide' );
    },
    electronicos:function(){
        $('#title').html('').html('<span>Monitoreo de Noticias Medios Eléctronicos</span>');
        $('#body').html('').css({
                            'background-color': '#3e6571',
                            'color': 'white'
                            }).html('<ol style="list-style-type: circle; padding-left: 2em;"><li >\n\
                                     Publicación en página web personalizada de la totalidad de información transmitida con los audios y videos originales dentro de los 5 minutos siguientes al término de la nota.\n\
                                    </li>\n\
                                    <li>\n\
                                     Consultas y reportes con acceso a base de datos sobre temas y personajes, que permiten interactividad con información histórica desde 2002 (cualitativa, cuantitativa y graficada). \n\
                                    </li>\n\
                                    <li>\n\
                                     Documento para impresión de notas.\n\
                                    </li>\n\
                                    <li>\n\
                                     Transportación de información a Excel con acceso al testigo original de las notas.\n\
                                    </li>\n\
                                    <li>\n\
                                     “Administración” de audios y videos originales (copiar a disco duro, Cd, Dvd o reenviar vía correo electrónico).  \n\
                                    </li>\n\
                                    <li>\n\
                                     De las 05:30 a las 00:00 envío de información. \n\
                                    </li>\n\
                                    <li>\n\
                                     “Alertas informativas” mediante envío de audios y videos a teléfono celular y correos electrónicos, a más tardar a los cinco minutos de terminada su transmisión. \n\
                                    </li>\n\
                                    <li>\n\
                                     Transcripción textual de información a solicitud expresa. \n\
                                    </li>\n\
                                     <li>\n\
                                     CD mensual con información transmitida –audios y videos-. \n\
                                    </li>\n\
                                     <li>\n\
                                     Medios en línea. - Casi en “tiempo real” acceso a la totalidad de la información transmitida en los noticiarios monitoreados.\n\
                                    </li></ol>\n\
                                    <p><span class="title-bold">COBERTURA.</span> - Notas emitidas en 4 mil 402 horas por 2 mil 716 sistemas noticiosos mensuales y analizadas por 96 profesionales en la materia, lo cual da como resultado un reporte objetivo y oportuno sobre el acontecer nacional e internacional. </p>\n\
                                    ' );
        $('#footer').html('');
        $('#myModal2').modal('show');
       //  uStates.draw("#statesvg", sampleData, tooltipHtml_impresos);
    },
    impresos:function(){
        var map='';
 if(screen.width > 990){
     map += '<section class="content map-iframe" >\n\
            <div class="box box-solid">\n\
                <div id="map">\n\
                    <div id="tooltip"></div> <!-- aqui se despliegan los nombres de los estados -->\n\
                    <svg width="100%" height="450" id="statesvg" style="margin-left:8%;"></svg> <!-- area de dibujo -->\n\
                </div>\n\
            </div>\n\
        </section>';

 }else{
     map += '<div class="col-md-12" id="cobertura-list">\n\
               <ul class="list-group">\n\
                  <li id="9" class="list-group-item">30 CDMX</li>\n\
                  <li id="15" class="list-group-item">2 &nbsp&nbspAguascalientes</li>\n\
                  <li id="19" class="list-group-item">7 &nbsp&nbspBaja California</li>\n\
                  <li id="14" class="list-group-item">2 &nbsp&nbspBaja California Sur</li>\n\
                  <li id="13" class="list-group-item">2 &nbsp&nbspCampeche</li>\n\
                  <li id="22" class="list-group-item">17 Chiapas</li>\n\
                  <li id="21" class="list-group-item">6  &nbsp&nbspChihuahua</li>\n\
                  <li id="30" class="list-group-item">7  &nbsp&nbspCoahuila</li>\n\
                  <li id="31" class="list-group-item">6  &nbsp&nbspColima</li>\n\
                  <li id="2" class="list-group-item">5  &nbsp&nbspDurango</li>\n\
                  <li id="27" class="list-group-item">16 Edomex</li>\n\
                  <li id="12" class="list-group-item">15 Guanajuato</li>\n\
                  <li id="16" class="list-group-item">12 Guerrero</li>\n\
                  <li id="17" class="list-group-item">7  &nbsp&nbspHidalgo</li>\n\
                  <li id="11" class="list-group-item">16 Jalisco</li>\n\
                  <li id="24" class="list-group-item">4  &nbsp&nbspMichoacán</li>\n\
                  <li id="20" class="list-group-item">4  &nbsp&nbspMorelos</li>\n\
                  <li id="8" class="list-group-item">5  &nbsp&nbspNayarit</li>\n\
                  <li id="23" class="list-group-item">9  &nbsp&nbspNuevo León</li>\n\
                  <li id="23" class="list-group-item">8  &nbsp&nbspOaxaca</li>\n\
                  <li id="23" class="list-group-item">7  &nbsp&nbspPuebla</li>\n\
                  <li id="23" class="list-group-item">7  &nbsp&nbspQuerétaro</li>\n\
                  <li id="23" class="list-group-item">14 Quintana Roo</li>\n\
                  <li id="23" class="list-group-item">8  &nbsp&nbspSan Luis Potosí</li>\n\
                  <li id="23" class="list-group-item">14 Sinaloa</li>\n\
                  <li id="23" class="list-group-item">15 Sonora</li>\n\
                  <li id="23" class="list-group-item">5  &nbsp&nbspTabasco</li>\n\
                  <li id="23" class="list-group-item">16 Tamaulipas</li>\n\
                  <li id="23" class="list-group-item">2  &nbsp&nbspTlaxcala</li>\n\
                  <li id="23" class="list-group-item">11 Veracruz</li>\n\
                  <li id="23" class="list-group-item">8  &nbsp&nbspYucatán</li>\n\
                  <li id="23" class="list-group-item">4  &nbsp&nbspZacatecas</li>\n\
                </ul> \n\
            </div>';
 }
        $('#title').html('').append('Monitoreo de Noticias Medios Impresos');
        $('#body').html('').css({
                                'background-color': '#3e6571',
                                'color': 'white'
                            }).html('<ol style="list-style-type: circle; padding-left: 2em;"><li>\n\
                                    Acceso a página web con posibilidad de navegar sin abandonar la propia aplicación.\n\
                                    </li>\n\
                                    <li>\n\
                                     Consulta de testigos originales (texto e imagen).\n\
                                    </li>\n\
                                    <li>\n\
                                     Monitoreo de 154 diarios de las 32 entidades federativas, 20 Revistas y principales Portales en Internet. La revisión de diarios se realiza sobre la <strong>PUBLICACIÓN ORIGINAL IMPRESA</strong> -no versiones en internet-.\n\
                                    </li>\n\
                                    <li>\n\
                                     Envío de documento PDF por correo electrónico a las 6:30 horas de diarios de la CDMX, a las 8:30 horas del resto de los estados y publicación en página web desde las 00:30 horas.\n\
                                    </li>\n\
                                    <li>\n\
                                     Reporte Gráfico Cuantitativo con el número de publicaciones por categoría (Primeras Planas, Columnas, Cartones, etc), analizando la información por fecha y personaje con consulta histórica. \n\
                                    </li>\n\
                                    <li>\n\
                                    Número de publicaciones diarias por periódico.\n\
                                    </li>\n\
                                    <li>\n\
                                     Consulta de la totalidad de información publicada en los diarios auditados.\n\
                                    </li>\n\
                                    <li>\n\
                                     Mapa de la República Mexicana regionalizado ubicando el número de notas publicadas por entidad. \n\
                                    </li></ol>\n\
                                    '+map);
        $('#footer').html('');
        $('#myModal2').modal('show');
         uStates.draw("#statesvg", sampleData, tooltipHtml_impresos);
    },
    campanas:function(){
var map='';
console.log(screen.width);
 if(screen.width > 990){
     map += '<section class="content map-iframe" >\n\
            <div class="box box-solid">\n\
                <div id="map">\n\
                    <div id="tooltip"></div> <!-- aqui se despliegan los nombres de los estados -->\n\
                    <svg width="100%" height="450" id="statesvg" style="margin-left:8%;"></svg> <!-- area de dibujo -->\n\
                </div>\n\
            </div>\n\
        </section>';

 }else{
     map += '<div class="col-md-12" id="cobertura-list">\n\
               <ul class="list-group">\n\
                  <li id="9" class="list-group-item">63 CDMX</li>\n\
                  <li id="15" class="list-group-item">44 Cable</li>\n\
                  <li id="15" class="list-group-item">11 Toluca</li>\n\
                  <li id="15" class="list-group-item">18 Hermosillo</li>\n\
                  <li id="19" class="list-group-item">40 Monterrey</li>\n\
                  <li id="14" class="list-group-item">50 Guadalajara</li>\n\
                  <li id="13" class="list-group-item">8 Pachuca</li>\n\
                  <li id="22" class="list-group-item">19 Querétaro</li>\n\
                  <li id="21" class="list-group-item">15 Puebla</li>\n\
                  <li id="30" class="list-group-item">21 Veracruz</li>\n\
                  <li id="31" class="list-group-item">19 Mérida</li>\n\
                  <li id="2" class="list-group-item">19 Tijuana</li>\n\
                  <li id="27" class="list-group-item">22 Villahermosa</li>\n\
                  <li id="12" class="list-group-item">15 Morelia</li>\n\
                  <li id="16" class="list-group-item">15 Acapulco</li>\n\
                  <li id="17" class="list-group-item">18 Cuernavaca</li>\n\
                  <li id="11" class="list-group-item">15 León</li>\n\
                  <li id="24" class="list-group-item">20 San Luis Potosí</li>\n\
                  <li id="20" class="list-group-item">14 Oaxaca</li>\n\
                  <li id="8" class="list-group-item">10 Chihuahua</li>\n\
                  <li id="23" class="list-group-item">10 Cancún</li>\n\
                </ul> \n\
            </div>';
 }
        $('#title').html('').append('Monitoreo de Campañas (Spots)');
        $('#body').html('').css({
                                'background-color': '#3e6571',
                                'color': 'white'
                            }).html('<p>\n\
                                    Servicio personalizado que tiene como objeto mantenerlo informado sobre el comportamiento de las campañas institucionales y/o comerciales (transmisión de spots), tanto del cliente como de su competencia.\n\
                                    </p><ol style="list-style-type: circle; padding-left: 2em;">\n\
                                    <li>\n\
                                     Monitoreo simultaneo y en “tiempo real” de estaciones de radio y televisión abierta disponibles en cada plaza.\n\
                                    </li>\n\
                                    <li>\n\
                                     Reconocimiento de emisiones en 3 segundos.\n\
                                    </li>\n\
                                    <li>\n\
                                     “Testigo” auditivo de la transmisión original (3 segundos previos y posteriores al spot auditado)\n\
                                    </li>\n\
                                    <li>\n\
                                     Generación de información, reportes y gráficos “en línea”.\n\
                                    </li>\n\
                                    <li>\n\
                                    Detección de inconsistencias en pautas contratadas.\n\
                                    </li>\n\
                                    <li>\n\
                                     Consulta por ciudad, hora, empresa, versión y grupo emisor.\n\
                                    </li>\n\
                                    <li>\n\
                                     Auditoría de transmisiones 24 x 7 x 365. \n\
                                    </li>\n\
                                     <li>\n\
                                     Posibilidad de realizar “búsquedas históricas” de información. \n\
                                    </li>\n\
                                     <li>\n\
                                     Grabación en audio -24 horas- de transmisión de emisoras.\n\
                                    </li></ol>\n\
                                    '+map);
        $('#footer').html('');
        $('#myModal2').modal('show');
         uStates.draw("#statesvg", sampleData, tooltipHtml);
    },
     redes:function(){
        $('#title').html('').append('Monitoreo de Redes Sociales');
        $('#body').html('').css({
                                    'background-color': '#3e6571',
                                    'color': 'white'
                                }).html('<p>\n\
                                    Servicio que tiene como objetivo monitorear la tendencia de los textos vinculados con los temas o personajes de interés, y que son emitidos dentro de redes sociales (Twitter). Este servicio pretende dar seguimiento a las cuentas de tweeter indicadas, mostrando el número de tweets, alcance, impactos, actividad de las cuentas, términos destacados alrededor de estas cuentas, cuentas, hashtags, tweets e imágenes destacadas.\n\
                                    <p>Beneficios: Tener un panorama claro del impacto que tienen cada una de las cuentas monitoreadas en tweeter, así como los usuarios que están en contacto con ellas constantemente y las palabras más utilizadas alrededor de estos temas.</p>\n\
                                    </p>\n\
                                    <p><strong>Características</strong></p>\n\
                                    <ol style="list-style-type: circle; padding-left: 2em;"><li>\n\
                                     Seguimiento personalizado las 24 horas del día por cuenta monitoreada\n\
                                    </li>\n\
                                    <li>\n\
                                     Evaluación de tweets, indicando número de tweets, alcance e impactos generados.\n\
                                    </li>\n\
                                    <li>\n\
                                     Estructura y contenidos diseñados a las necesidades del cliente.\n\
                                    </li>\n\
                                    <li>\n\
                                     Gráficas a través del portal de internet con acceso mediante usuario y password.\n\
                                    </li>\n\
                                    <li>\n\
                                    Envío de reportes quincenales de forma electrónica con la información arriba mencionada, incluyendo gráficas.\n\
                                    </li>\n\
                                    <li>\n\
                                     Entrega mensual de Cd conteniendo los reportes del periodo.\n\
                                    </li></ol>\n\
                                    ');
        $('#footer').html('');
        $('#myModal2').modal('show');
    },
     app:function(){
        $('#title').html('').append('Aplicación para Dispositivos Móviles');
        $('#body').html('').css({
                                'background-color': '#3e6571',
                                'color': 'white'
                            }).html('<p>\n\
                                    Independientemente de página web para consulta de información y “alertas informativas”, se cuenta con una aplicación para dispositivos móviles (iPad / iPhone).\n\
                                    </p>\n\
                                    <p>Acceso a página web con posibilidad de navegar desde los dispositivos antes señalados, sin necesidad de abandonar la propia aplicación.</p>\n\
                                    <p>Generación de Gráficos y Reportes Ejecutivos “en línea” considerando los parámetros siguientes:</p>\n\
                                    <ol style="list-style-type: circle; padding-left: 2em;"><li>\n\
                                     Reporte gráfico sobre el análisis cuantitativo, cualitativo y tiempo asignado a las noticias sobre los temas y/o personajes monitoreados, hasta 30 días anteriores.\n\
                                    </li>\n\
                                    <li>\n\
                                     Posibilidad de elegir la información de un día, tema y/o personaje en particular a graficar.\n\
                                    </li>\n\
                                    <li>\n\
                                     Reporte cualitativo con acceso directo a los testigos originales (audio, video, notas publicadas, spot y menciones en redes).\n\
                                    </li>\n\
                                    <li>\n\
                                     Tipo de información transmitida.\n\
                                    </li>\n\
                                    <li>\n\
                                    Ubicación de las notas.\n\
                                    </li>\n\
                                    <li>\n\
                                     Reporte de Tendencia Informativa (Comportamiento histórico de la información –mensual, quincenal, semanal o diario-).\n\
                                    </li>\n\
                                    <li>\n\
                                     Calificación y número de menciones por sistema informativo.\n\
                                    </li></ol>\n\
                                    ');
        $('#footer').html('');
        $('#myModal2').modal('show');
    },
    
}
