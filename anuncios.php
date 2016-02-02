<?php
require './con2.php';
$fechaUno=$_POST['fechaUno'];
$fechaFinal=$_POST['fechaFinal'];

echo "<div style='position: relative;
width: 100%;
background-color: rgb(214, 214, 214);
padding: 3px 1px 0px 3px;'>";
foreach ($_POST['periodicos'] as $value) {
    echo "<span   ><img src='../APP/img/AHportadas/".ucfirst(medio($value)).".png' style='width: 60px;'></span>";
}
//echo"<span   style='float: right;' onclick='javascript:peticiones.buscarReporte();'><img src='../APP/img/AHportadas/".ucfirst($value).".png' style='width: 60px;' >BUSCAR</span></div>";
?>
<span   style='float: right;' onclick="javascript:peticiones.buscarReporte('<?php echo $fechaUno ?>','<?php echo $fechaFinal ?>');"><img src='../APP/img/AHcategorias/buscar.png' style='width: 60px;' > </span></div>
 <?php
$query="SELECT 
  distinct(c.Categoria) as Categoria,
  c.idCategoria,
  count(1) as Veces,
  a.Fecha
FROM 
  anunciosDia a,
  categoriasPeriodicos c 
WHERE 
  c.idCategoria=a.Categoria AND 
  DATe(fecha) BETWEEN DATE('2015-07-03') and DATE('2015-07-03') 
GROUP BY 
  categoria";

//echo "<br><br>".$query."<br><br>";
$data= mysql_query($query);
if(mysql_affected_rows()){
    while ($row = mysql_fetch_array($data)) {
?>
   
<article class="articuloCategoria"    >
    <img src='../APP/img/AHcategorias/<?php echo strtolower(preg_replace('[\s+]',"", (quitaAcentos($row['Categoria']))));?>.png' style='width: 90px;'>
    <span id='divisor'></span>
    <span class="tituloPortadas"><?php echo utf8_encode(ucwords($row['Categoria'])); ?></span>
    <span class="periodicoFecha"><?php echo mostrar_fecha_completa($row['Fecha']); ?></span>
    <input type="hidden" value="<?php echo utf8_encode(ucwords($row['Categoria'])); ?>">
    <input type="checkbox" id="<?php echo$cadena = preg_replace('[\s+]',"", (quitaAcentos($row['Categoria']).$row['Veces']));?>" value="<?php echo $row['idCategoria'];?>" name="trash" class="selecion" /> 
</article>    
    
<?php
}
       
}else{
    
}
function quitaAcentos($cadena){
    $cadena=  str_replace("ó", "o", utf8_encode($cadena));
    $cadena=  str_replace("á", "a", utf8_encode($cadena));
    $cadena=  str_replace("í", "i", utf8_encode($cadena));
    return $cadena;
}
function mostrar_fecha_completa($fecha)
{
    $subfecha=split("-",$fecha); 
   for($i=0;$subfecha[$i];$i++); 
    $año=$subfecha[0];
    $mes=$subfecha[1];
    $dia=$subfecha[2];

    $dia2=date( "d", mktime(0,0,0,$mes,$dia,$año));
    $mes2=date( "m", mktime(0,0,0,$mes,$dia,$año));
    $año2=date( "Y", mktime(0,0,0,$mes,$dia,$año));
    $dia_sem=date( "w", mktime(0,0,0,$mes,$dia,$año));

   switch($dia_sem)
   { 
       case "0":   // Bloque 1 
         $dia_sem3='Domingo'; 
       break; 
       
       case "1":   // Bloque 1 
         $dia_sem3='Lunes'; 
       break; 
       
       case "2":   // Bloque 1 
         $dia_sem3='Martes'; 
       break; 
   
       case "3":   // Bloque 1 
         $dia_sem3='Miercoles'; 
       break; 
       
       case "4":   // Bloque 1 
         $dia_sem3='Jueves'; 
       break;
   
       case "5":   // Bloque 1 
         $dia_sem3='Viernes'; 
       break; 
   
       case "6":   // Bloque 1 
         $dia_sem3='Sabado'; 
       break; 
   
      default:   // Bloque 3 
    };
   
    switch($mes2) 
    { 
        case "1":   // Bloque 1 
            $mes3='Enero'; 
        break; 
    
        case "2":   // Bloque 1 
            $mes3='Febrero';
        break; 
    
        case "3":   // Bloque 1 
            $mes3='Marzo';
        break; 
    
        case "4":   // Bloque 1 
            $mes3='Abril'; 
        break;  
        
        case "5":   // Bloque 1 
            $mes3='Mayo';
        break;   
        
        case "6":   // Bloque 1 
            $mes3='Junio';    
        break; 
        
        case "7":   // Bloque 1 
            $mes3='Julio';
        break; 
    
        case "8":   // Bloque 1 
            $mes3='Agosto';
        break; 
    
        case "9":   // Bloque 1 
            $mes3='Septiembre';
        break; 
    
        case "10":   // Bloque 1 
            $mes3='Octubre';
        break; 
    
        case "11":   // Bloque 1 
            $mes3='Noviembre';
        break;           
    
        case "12":   // Bloque 1 
            $mes3='Diciembre';  
        break; 
    
        default:   // Bloque 3 
     break; 
  }; 
     
$fecha_texto=$dia_sem3.' '.$dia2.' '.'de'.' '.$mes3.' '.'de'.' '.$año2;

return $fecha_texto;
} 



function medio($indicePeriodico){
$medio="Error";
  switch ($indicePeriodico) {
    case 33:
      $medio="El Informador";
    break;

    case 31:
      $medio="Mural";
    break;

    case 57:
      $medio="Milenio Jalisco";
    break;
    
    case 55:
      $medio="El Occidental";
    break;

    case 73:
      $medio="La Jornada Jalisco";
    break;
    
    case 285:
      $medio="Publimetro Guadalajara";
    break;
  }
  return $medio;
}
?>
