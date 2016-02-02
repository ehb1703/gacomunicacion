<?php
require_once ('/var/www/external/services/mail/JPGraph/jpgraph.php');
require_once ('/var/www/external/services/mail/JPGraph/jpgraph_pie.php');
require '/var/www/external/services/mail/conexion.php';
mysql_query("set names 'utf8'");
$rangoFechas = "";
$fechaCorte = "";
//Conseguir rango de fechas a buscar
switch(date('N'))
{
case 1:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 2 DAY) AND CURDATE()";
break;
case 2:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 3 DAY) AND CURDATE()";
break;
case 3:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 4 DAY) AND CURDATE()";
break;
case 4:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 5 DAY) AND CURDATE()";
break;
case 5:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 6 DAY) AND CURDATE()";
break;
case 6:
$rangoFechas = "Fecha = CURDATE()";
break;
case 7:
$rangoFechas = "Fecha BETWEEN DATE_SUB(CURDATE(),INTERVAL 1 DAY) AND CURDATE()";
break;
}
//Query Corte de Notas Aristoteles
$qryCorte = "SELECT
                p.Nombre,
                COUNT(DISTINCT(n.idEditorial)) AS 'Total',
                GROUP_CONCAT(DISTINCT(idEditorial) SEPARATOR ',') AS 'idNotas',
                GROUP_CONCAT(NumeroPagina SEPARATOR ',') AS 'PDF'
            FROM
                (SELECT idEditorial,Periodico,Activo,Texto,Titulo,Encabezado,PieFoto,Autor,Fecha,NumeroPagina FROM noticiasDia WHERE $rangoFechas
                UNION ALL
                SELECT idEditorial,Periodico,Activo,Texto,Titulo,Encabezado,PieFoto,Autor,Fecha,NumeroPagina FROM noticiasSemana WHERE $rangoFechas) n,
                periodicos p,
                ordenGeneraljalisco o
            WHERE
                p.idPeriodico=n.Periodico AND
                p.idPeriodico=o.periodico AND
                n.Activo = 1 AND
                $rangoFechas AND (
        Texto like '%Jorge Aristoteles Sandoval Diaz%' OR
        Texto like '%Jorge Aristoteles Sandoval%' OR
        Texto like '%Jorge Sandoval Diaz%' OR
        Texto like '%Aristoteles Sandoval Diaz%' OR
        Texto like '%Aristoteles Sandoval%' OR
        Texto like '%gobernador del estado de jalisco%' OR
        Texto like '%gobernador de jalisco%' OR
        Texto like '%gobernador del estado Aristoteles Sandoval Diaz%'OR

        Titulo like '%Jorge Aristoteles Sandoval Diaz%' OR
        Titulo like '%Jorge Aristoteles Sandoval%' OR
        Titulo like '%Jorge Sandoval Diaz%' OR
        Titulo like '%Aristoteles Sandoval Diaz%' OR
        Titulo like '%Aristoteles Sandoval%' OR
        Titulo like '%gobernador del estado de jalisco%' OR
        Titulo like '%gobernador de jalisco%' OR
        Titulo like '%gobernador del estado Aristoteles Sandoval Diaz%' OR

        Encabezado like '%Jorge Aristoteles Sandoval Diaz%' OR
        Encabezado like '%Jorge Aristoteles Sandoval%' OR
        Encabezado like '%Jorge Sandoval Diaz%' OR
        Encabezado like '%Aristoteles Sandoval Diaz%' OR
        Encabezado like '%Aristoteles Sandoval%' OR
        Encabezado like '%gobernador del estado de jalisco%' OR
        Encabezado like '%gobernador de jalisco%' OR
        Encabezado like '%gobernador del estado Aristoteles Sandoval Diaz%' OR

        PieFoto like '%Jorge Aristoteles Sandoval Diaz%' OR
        PieFoto like '%Jorge Aristoteles Sandoval%' OR
        PieFoto like '%Jorge Sandoval Diaz%' OR
        PieFoto like '%Aristoteles Sandoval Diaz%' OR
        PieFoto like '%Aristoteles Sandoval%' OR
        PieFoto like '%gobernador del estado de jalisco%' OR
        PieFoto like '%gobernador de jalisco%' OR
        PieFoto like '%gobernador del estado Aristoteles Sandoval Diaz%' OR

        Autor like '%Jorge Aristoteles Sandoval Diaz%' OR
        Autor like '%Jorge Aristoteles Sandoval%' OR
        Autor like '%Jorge Sandoval Diaz%' OR
        Autor like '%Aristoteles Sandoval Diaz%' OR
        Autor like '%Aristoteles Sandoval%' OR
        Autor like '%gobernador del estado de jalisco%' OR
        Autor like '%gobernador de jalisco%' OR
        Autor like '%gobernador del estado Aristoteles Sandoval Diaz %' OR

        /*** Secretaria General de Gobierno***/

        Texto like '%secrearia general de jalisco%' OR
        Texto like '%secretaria general jalisco%' OR
        Texto like '%secretaria general del estado de jalisco%' OR
        Texto like '%roberto lopez lara%' OR
        Texto like '%chino Lopez%' OR

        Titulo like '%secrearia general de jalisco%' OR
        Titulo like '%secretaria general jalisco%' OR
        Titulo like '%secretaria general del estado de jalisco%' OR
        Titulo like '%roberto lopez lara%' OR
        Titulo like '%chino lopez%' OR

        Encabezado like '%secrearia general de jalisco%' OR
        Encabezado like '%secretaria general jalisco%' OR
        Encabezado like '%secretaria general del estado de jalisco%' OR
        Encabezado like '%roberto lopez lara%' OR
        Encabezado like '%chino lopez%' OR

        PieFoto like '%secrearia general de jalisco%' OR
        PieFoto like '%secretaria general jalisco%' OR
        PieFoto like '%secretaria general del estado de jalisco%' OR
        PieFoto like '%roberto lopez lara%' OR
        PieFoto like '%chino lopez%' OR

        /**** Miguel Castro SEDIS ****/

        Texto like '%Secretaria de Desarrollo e Integracion Social Jalisco%' OR
        Texto like '%Secretaria de Desarrollo e Integracion Social de Jalisco%' OR
        Texto like '%Miguel Castro%' OR
        Texto like '%Secretaria de Desarrollo e Integracion Social del estado de jalisco%' OR
        Texto like '%Daviel Trujillo Cuevas%' OR

        Titulo like '%Secretaria de Desarrollo e Integracion Social Jalisco%' OR
        Titulo like '%Miguel Castro%' OR
        Titulo like '%Secretaria de Desarrollo e Integracion Social de Jalisco%' OR
        Titulo like '%Secretaria de Desarrollo e Integracion Social del estado de jalisco%' OR
        Titulo like '%Daviel Trujillo Cuevas%' OR

        Encabezado like '%Secretaria de Desarrollo e Integracion Social Jalisco%' OR
        Encabezado like '%Secretaria de Desarrollo e Integracion Social del estado de jalisco%' OR
        Encabezado like '%Secretaria de Desarrollo e Integracion Social de Jalisco%' OR
        Encabezado like '%Daviel Trujillo Cuevas%' OR

        PieFoto like '%Secretaria de Desarrollo e Integracion Social Jalisco%' OR
        PieFoto like '%Secretaria de Desarrollo e Integracion Social de Jalisco%' OR
        PieFoto like '%Secretaria de Desarrollo e Integracion Social del estado de jalisco%' OR
        PieFoto like '%Daviel Trujillo Cuevas%' OR

        Autor like '%Secretaria de Desarrollo e Integracion Social Jalisco%' OR
        Autor like '%Secretaria de Desarrollo e Integracion Social de Jalisco%' OR
        Autor like '%Secretaria de Desarrollo e Integracion Social del estado de jalisco%' OR
        Autor like '%Daviel Trujillo Cuevas%' OR

        Texto like '%(SEDIS)%'  OR
        Titulo like '%(SEDIS)%'  OR
        Encabezado like '%(SEDIS)%'  OR
        PieFoto like '%(SEDIS)%'    OR
        Autor like '%(SEDIS)%' OR

        Texto like '% SEDIS %'  OR
        Titulo like '% SEDIS %'  OR
        Encabezado like '% SEDIS %'  OR
        PieFoto like '% SEDIS %'    OR
        Autor like '% SEDIS %' OR

        Texto like '%Secretaria de administracion, planeacion y finanzas%' OR
        Texto like '%Secretaria de administracion, planeacion y finanzas de Jalisco%' OR
        Texto like '%Secretaria de administracion, planeacion y finanzas del estado de Jalisco%' OR
        Texto like '%Hector Rafael Perez Partida%' OR
        Texto like '%Rafael Perez Partida%' OR

        Titulo like '%Secretaria de administracion, planeacion y finanzas%' OR
        Titulo like '%Secretaria de administracion, planeacion y finanzas de Jalisco%' OR
        Titulo like '%Secretaria de administracion, planeacion y finanzas del estado de Jalisco%' OR
        Titulo like '%Hector Rafael Perez Partida%' OR
        Titulo like '%Rafael Perez Partida%' OR

        Encabezado like '%Secretaria de administracion, planeacion y finanzas%' OR
        Encabezado like '%Secretaria de administracion, planeacion y finanzas de Jalisco%' OR
        Encabezado like '%Secretaria de administracion, planeacion y finanzas del estado de Jalisco%' OR
        Encabezado like '%Héctor Rafael Pérez Partida%' OR
        Encabezado like '%Rafael Perez Partida%' OR

        PieFoto like '%Secretaria de administracion, planeacion y finanzas%' OR
        PieFoto like '%Secretaria de administracion, planeacion y finanzas de Jalisco%' OR
        PieFoto like '%Secretaria de administracion, planeacion y finanzas del estado de Jalisco%' OR
        PieFoto like '%Héctor Rafael Pérez Partida%' OR
        PieFoto like '%Rafael Perez Partida%' OR

        Autor like '%Secretaria de administracion, planeacion y finanzas%' OR
        Autor like '%Secretaria de administracion, planeacion y finanzas de Jalisco%' OR
        Autor like '%Secretaria de administracion, planeacion y finanzas del estado de Jalisco%' OR
        Autor like '%Héctor Rafael Pérez Partida%' OR
        Autor like '%Rafael Perez Partida%' OR

        Texto like '%(SEPAF)%'  OR
        Titulo like '%(SEPAF)%'  OR
        Encabezado like '%(SEPAF)%'  OR
        PieFoto like '%(SEPAF)%'    OR
        Autor like '%(SEPAF)%' OR

        Texto like '% SEPAF %'  OR
        Titulo like '% SEPAF %'  OR
        Encabezado like '% SEPAF %'  OR
        PieFoto like '% SEPAF %'    OR
        Autor like '% SEPAF %' OR

        /**** SIOP ****/

        Texto like '%Secretaria de infraestructura y obra publica jalisco%' OR
        Texto like '%Secretaria de infraestructura y obra publica de jalisco%' OR
        Texto like '%Secretaria de infraestructura y obra publica del estado de jalisco%' OR
        Texto like '%Roberto Davalos Lopez%' OR

        Titulo like '%Secretaria de infraestructura y obra publica jalisco%' OR
        Titulo like '%Secretaria de infraestructura y obra publica de jalisco%' OR
        Titulo like '%Secretaria de infraestructura y obra publica del estado de jalisco%' OR
        Titulo like '%Roberto Davalos Lopez%' OR

        Encabezado like '%Secretaria de infraestructura y obra publica jalisco%' OR
        Encabezado like '%Secretaria de infraestructura y obra publica de jalisco%' OR
        Encabezado like '%Secretaria de infraestructura y obra publica del estado de jalisco%' OR
        Encabezado like '%Roberto Davalos Lopez%' OR

        PieFoto like '%Secretaria de infraestructura y obra publica jalisco%' OR
        PieFoto like '%Secretaria de infraestructura y obra publica de jalisco%' OR
        PieFoto like '%Secretaria de infraestructura y obra publica del estado de jalisco%' OR
        PieFoto like '%Roberto Davalos Lopez%' OR

        Autor like '%Secretaria de infraestructura y obra publica jalisco%' OR
        Autor like '%Secretaria de infraestructura y obra publica de jalisco%' OR
        Autor like '%Secretaria de infraestructura y obra publica del estado de jalisco%' OR
        Autor like '%Roberto Davalos Lopez%'  OR

        Texto like '%(SIOP)%'  OR
        Titulo like '%(SIOP)%'  OR
        Encabezado like '%(SIOP)%'  OR
        PieFoto like '%(SIOP)%'    OR
        Autor like '%(SIOP)%' OR

        Texto like '% SIOP %'  OR
        Titulo like '% SIOP %'  OR
        Encabezado like '% SIOP %'  OR
        PieFoto like '% SIOP %'    OR
        Autor like '% SIOP %' OR
        
        /*** STPS ***/
        
        Texto LIKE '%secrearia del trabajo y prevision social de jalisco%' OR
        Texto LIKE '%secretaria del trabajo y prevision social jalisco%' OR
        Texto LIKE '%secretaria del trabajo y prevision social del estado de jalisco%' OR
        Texto LIKE '%Hector Pizano Ramos%' OR
        Texto LIKE '%Hector Pizano%' OR
        Texto LIKE '%Pizano Ramos%' OR

        Titulo LIKE '%secrearia del trabajo y prevision social de jalisco%' OR
        Titulo LIKE '%secretaria del trabajo y prevision social jalisco%' OR
        Titulo LIKE '%secretaria del trabajo y prevision social del estado de jalisco%' OR
        Titulo LIKE '%Hector Pizano Ramos%' OR
        Titulo LIKE '%Hector Pizano%' OR
        Titulo LIKE '%Pizano Ramos%' OR

        Encabezado LIKE '%secrearia del trabajo y prevision social de jalisco%' OR
        Encabezado LIKE '%secretaria del trabajo y prevision social jalisco%' OR
        Encabezado LIKE '%secretaria del trabajo y prevision social del estado de jalisco%' OR
        Encabezado LIKE '%Hector Pizano Ramos%' OR
        Encabezado LIKE '%Hector Pizano%' OR
        Encabezado LIKE '%Pizano Ramos%' OR

        PieFoto LIKE '%secrearia del trabajo y prevision social de jalisco%' OR
        PieFoto LIKE '%secretaria del trabajo y prevision social jalisco%' OR
        PieFoto LIKE '%secretaria del trabajo y prevision social del estado de jalisco%' OR
        PieFoto LIKE '%Hector Pizano Ramos%' OR
        PieFoto LIKE '%Hector Pizano%' OR
        PieFoto LIKE '%Pizano Ramos%' OR

        Texto LIKE '% stps jalisco %' OR
        Titulo LIKE '% stps jalisco %' OR
        Encabezado LIKE '% stps jalisco %' OR
        PieFoto LIKE '% stps jalisco %' OR
        Autor LIKE '% stps jalisco %' OR

        /*** SALUD ***/
        Texto like '%Secretaria salud jalisco%' OR
        Texto like '%Secretaria de salud Jalisco%' OR
        Texto like '%Secretaria de salud de Jalisco%' OR
        Texto like '%Secretaria de salud del estado de jalisco%' OR
        Texto like '%Jaime Agustin Gonzalez alvarez%' OR
        Texto like '%Jaime Gonzalez alvarez%' OR
        Texto like '%Jaime A Gonzalez alvarez%' OR

        Titulo like '%Secretaria salud jalisco%' OR
        Titulo like '%Secretaria de salud Jalisco%' OR
        Titulo like '%Secretaria de salud de Jalisco%' OR
        Titulo like '%Secretaria de salud del estado de jalisco%' OR
        Titulo like '%Jaime Agustin Gonzalez alvarez%' OR
        Titulo like '%Jaime Gonzalez alvarez%' OR
        Titulo like '%Jaime A Gonzalez alvarez%' OR

        Encabezado like '%Secretaria salud jalisco%' OR
        Encabezado like '%Secretaria de salud Jalisco%' OR
        Encabezado like '%Secretaria de salud de Jalisco%' OR
        Encabezado like '%Secretaria de salud del estado de jalisco%' OR
        Encabezado like '%Jaime Agustin Gonzalez alvarez%' OR
        Encabezado like '%Jaime Gonzalez alvarez%' OR
        Encabezado like '%Jaime A Gonzalez alvarez%' OR

        PieFoto like '%Secretaria salud jalisco%' OR
        PieFoto like '%Secretaria de salud Jalisco%' OR
        PieFoto like '%Secretaria de salud de Jalisco%' OR
        PieFoto like '%Secretaria de salud del estado de jalisco%' OR
        PieFoto like '%Jaime Agustin Gonzalez alvarez%' OR
        PieFoto like '%Jaime Gonzalez alvarez%' OR
        PieFoto like '%Jaime A Gonzalez alvarez%' OR

        Autor like '%Secretaria salud jalisco%' OR
        Autor like '%Secretaria de salud Jalisco%' OR
        Autor like '%Secretaria de salud de Jalisco%' OR
        Autor like '%Secretaria de salud del estado de jalisco%' OR
        Autor like '%Jaime Agustin Gonzalez alvarez%' OR
        Autor like '%Jaime Gonzalez alvarez%' OR
        Autor like '%Jaime A Gonzalez alvarez%' OR

        /*** EDUCACION ***/

        Texto like '%Secretaria de Educacion Jalisco%' OR
        Texto like '%Secretaria de Educacion de Jalisco%' OR
        Texto like '%Secretaria de Educacion del estado de jalisco%' OR
        Texto like '%Francisco Ayon lopez%' OR
        Texto like '%Paco Ayon lopez%' OR
        Texto like '%papayon lopez%' OR

        Titulo like '%Secretaria de Educacion Jalisco%' OR
        Titulo like '%Secretaria de Educacion de Jalisco%' OR
        Titulo like '%Secretaria de Educacion del estado de jalisco%' OR
        Titulo like '%Francisco Ayon lopez%' OR
        Titulo like '%Paco Ayon lopez%' OR
        Titulo like '%papayon lopez%' OR

        Encabezado like '%Secretaria de Educacion Jalisco%' OR
        Encabezado like '%Secretaria de Educacion de Jalisco%' OR
        Encabezado like '%Secretaria de Educacion del estado de jalisco%' OR
        Encabezado like '%Francisco Ayon lopez%' OR
        Encabezado like '%Paco Ayon lopez%' OR
        Encabezado like '%papayon lopez%' OR

        PieFoto like '%Secretaria de Educacion Jalisco%' OR
        PieFoto like '%Secretaria de Educacion de Jalisco%' OR
        PieFoto like '%Secretaria de Educacion del estado de jalisco%' OR
        PieFoto like '%Francisco Ayon lopez%' OR
        PieFoto like '%Paco Ayon lopez%' OR
        PieFoto like '%papayon lopez%' OR

        Autor like '%Secretaria de Educacion Jalisco%' OR
        Autor like '%Secretaria de Educacion de Jalisco%' OR
        Autor like '%Secretaria de Educacion del estado de jalisco%' OR
        Autor like '%Francisco Ayon lopez%' OR
        Autor like '%Paco Ayon lopez%' OR
        Autor like '%papayon lopez%' OR

        (Texto like '% SEJ %' and Texto like '%Jalisco%' )OR
        (Titulo like '% SEJ %' AND Titulo like '%jalisco%') OR
        (Encabezado like '% SEJ %' AND Encabezado like '%jalisco%') OR
        (PieFoto like '% SEJ %'  and PieFoto like '%jalisco%')  OR
        (Autor like '% SEJ %'  and Autor like '%jalisco%' )  OR
    
        /*** Desarrollo Economico ***/
        Texto like '%secretaria de desarrollo economico de jalisco%' OR
        Texto like'%secretaria de desarrollo economico jalisco%' OR
        Texto like'%secretaria de desarrollo economico del estado de jalisco%' OR
        Texto like'%jose palacios jimenez%' OR

        Titulo like '%secretaria de desarrollo economico de jalisco%' OR
        Titulo like'%secretaria de desarrollo economico jalisco%' OR
        Titulo like'%secretaria de desarrollo economico del estado de jalisco%' OR
        Titulo like'%jose palacios jimenez%' OR

        Encabezado like '%secretaria de desarrollo economico de jalisco%' OR
        Encabezado like'%secretaria de desarrollo economico jalisco%' OR
        Encabezado like'%secretaria de desarrollo economico del estado de jalisco%' OR
        Encabezado like'%jose palacios jimenez%' OR
                    
        PieFoto like '%secretaria de desarrollo economico de jalisco%' OR
        PieFoto like'%secretaria de desarrollo economico jalisco%' OR
        PieFoto like'%secretaria de desarrollo economico del estado de jalisco%' OR
        PieFoto like'%jose palacios jimenez%' OR

        Texto like '%(SEDECO)%'  OR
        Titulo like '%(SEDECO)%'  OR
        Encabezado like '%(SEDECO)%'  OR
        PieFoto like '%(SEDECO)%'    OR
        Autor like '%(SEDECO)%' OR

        Texto like '% SEDECO %'  OR
        Titulo like '% SEDECO %'  OR
        Encabezado like '% SEDECO %'  OR
        PieFoto like '% SEDECO %'    OR
        Autor like '% SEDECO %' OR 


        /*** TURISMO ***/
        Texto like '%Secretaria de Turismo Jalisco%' OR
        Texto like '%Secretaria de Turismo de Jalisco%' OR
        Texto like '%Secretaria de Turismo del estado de jalisco%' OR
        Texto like '%Jesus Enrique Ramos Flores%' OR
        Texto like '%Jesus e Ramos Flores%' OR
        Texto like '%Enrique Ramos Flores%' OR

        Titulo like '%Secretaria de Turismo Jalisco%' OR
        Titulo like '%Secretaria de Turismo de Jalisco%' OR
        Titulo like '%Secretaria de Turismo del estado de jalisco%' OR
        Titulo like '%Jesus Enrique Ramos Flores%' OR
        Titulo like '%Jesus e Ramos Flores%' OR
        Titulo like '%Enrique Ramos Flores%' OR

        Encabezado like '%Secretaria de Turismo Jalisco%' OR
        Encabezado like '%Secretaria de Turismo del estado de jalisco%' OR
        Encabezado like '%Secretaria de Turismo de Jalisco%' OR
        Encabezado like '%Jesus Enrique Ramos Flores%' OR
        Encabezado like '%Jesus e Ramos Flores%' OR
        Encabezado like '%Enrique Ramos Flores%' OR

        PieFoto like '%Secretaria de Turismo Jalisco%' OR
        PieFoto like '%Secretaria de Turismo de Jalisco%' OR
        PieFoto like '%Secretaria de Turismo del estado de jalisco%' OR
        PieFoto like '%Jesus Enrique Ramos Flores%' OR
        PieFoto like '%Jesus e Ramos Flores%' OR
        PieFoto like '%Enrique Ramos Flores%' OR

        Autor like '%Secretaria de Turismo Jalisco%' OR
        Autor like '%Secretaria de Turismo de Jalisco%' OR
        Autor like '%Secretaria de Turismo del estado de jalisco%' OR
        Autor like '%Jesus Enrique Ramos Flores%' OR
        Autor like '%Jesus e Ramos Flores%' OR
        Autor like '%Enrique Ramos Flores%' OR

        Texto like '%(SECTUR)%'  OR
        Titulo like '%(SECTUR)%'  OR
        Encabezado like '%(SECTUR)%'  OR
        PieFoto like '%(SECTUR)%'    OR
        Autor like '%(SEDIS)%' OR

        Texto like '% SECTUR %'  OR
        Titulo like '% SECTUR %'  OR
        Encabezado like '% SECTUR %'  OR
        PieFoto like '% SECTUR %'    OR
        Autor like '% SECTUR %' OR

        /*** SEDER ***/
        Texto like '%Secretaria de Desarrollo Rural Jalisco%' OR
        Texto like '%Secretaria de Desarrollo Rural de Jalisco%' OR
        Texto like '%Secretaria de Desarrollo Rural del estado de jalisco%' OR
        Texto like '%Hector Padilla Gutierrez%' OR

        Titulo like '%Secretaria de Desarrollo Rural Jalisco%' OR
        Titulo like '%Secretaria de Desarrollo Rural de Jalisco%' OR
        Titulo like '%Secretaria de Desarrollo Rural del estado de jalisco%' OR
        Titulo like '%Hector Padilla Gutierrez%' OR

        Encabezado like '%Secretaria de Desarrollo Rural Jalisco%' OR
        Encabezado like '%Secretaria de Desarrollo Rural del estado de jalisco%' OR
        Encabezado like '%Secretaria de Desarrollo Rural de Jalisco%' OR
        Encabezado like '%Hector Padilla Gutierrez%' OR

        PieFoto like '%Secretaria de Desarrollo Rural Jalisco%' OR
        PieFoto like '%Secretaria de Desarrollo Rural de Jalisco%' OR
        PieFoto like '%Secretaria de Desarrollo Rural del estado de jalisco%' OR
        PieFoto like '%Hector Padilla Gutierrez%' OR

        Autor like '%Secretaria de Desarrollo Rural Jalisco%' OR
        Autor like '%Secretaria de Desarrollo Rural de Jalisco%' OR
        Autor like '%Secretaria de Desarrollo Rural del estado de jalisco%' OR
        Autor like '%Hector Padilla Gutierrez%' OR

        Texto like '%(SEDER)%'  OR
        Titulo like '%(SEDER)%'  OR
        Encabezado like '%(SEDER)%'  OR
        PieFoto like '%(SEDER)%'    OR
        Autor like '%(SEDER)%' OR

        Texto like '% SEDER %'  OR
        Titulo like '% SEDER %'  OR
        Encabezado like '% SEDER %'  OR
        PieFoto like '% SEDER %'    OR
        Autor like '% SEDER %' OR


        /*** Desarrollo Territorial ***/

        Texto like '%Secretaria de Medio Ambiente y Desarrollo Territorial Jalisco%' OR
        Texto like '%Secretaria de Medio Ambiente y Desarrollo Territorial de Jalisco%' OR
        Texto like '%Secretaria de Medio Ambiente y Desarrollo Territorial del estado de jalisco%' OR
        Texto like '%Maria Magdalena Ruiz Mejia%' OR
        Texto like '%Magdalena Ruiz Mejia%' OR

        Titulo like '%Secretaria de Medio Ambiente y Desarrollo Territorial Jalisco%' OR
        Titulo like '%Secretaria de Medio Ambiente y Desarrollo Territorial de Jalisco%' OR
        Titulo like '%Secretaria de Medio Ambiente y Desarrollo Territorial del estado de jalisco%' OR
        Titulo like '%Maria Magdalena Ruiz Mejia%' OR
        Titulo like '%Magdalena Ruiz Mejia%' OR

        Encabezado like '%Secretaria de Medio Ambiente y Desarrollo Territorial Jalisco%' OR
        Encabezado like '%Secretaria de Medio Ambiente y Desarrollo Territorial del estado de jalisco%' OR
        Encabezado like '%Secretaria de Medio Ambiente y Desarrollo Territorial de Jalisco%' OR
        Encabezado like '%Maria Magdalena Ruiz Mejia%' OR
        Encabezado like '%Magdalena Ruiz Mejia%' OR

        PieFoto like '%Secretaria de Medio Ambiente y Desarrollo Territorial Jalisco%' OR
        PieFoto like '%Secretaria de Medio Ambiente y Desarrollo Territorial de Jalisco%' OR
        PieFoto like '%Secretaria de Medio Ambiente y Desarrollo Territorial del estado de jalisco%' OR
        PieFoto like '%Maria Magdalena Ruiz Mejia%' OR
        PieFoto like '%Magdalena Ruiz Mejia%' OR

        Autor like '%Secretaria de Medio Ambiente y Desarrollo Territorial Jalisco%' OR
        Autor like '%Secretaria de Medio Ambiente y Desarrollo Territorial de Jalisco%' OR
        Autor like '%Secretaria de Medio Ambiente y Desarrollo Territorial del estado de jalisco%' OR
        Autor like '%Maria Magdalena Ruiz Mejia%' OR
        Autor like '%Magdalena Ruiz Mejia%' OR

      Texto like '%(SEMADET)%'  OR
        Titulo like '%(SEMADET)%'  OR
        Encabezado like '%(SEMADET)%'  OR
        PieFoto like '%(SEMADET)%'    OR
        Autor like '%(SEMADET)%' OR

        Texto like '% SEMADET %'  OR
        Titulo like '% SEMADET %'  OR
        Encabezado like '% SEMADET %'  OR
        PieFoto like '% SEMADET %'    OR
        Autor like '% SEMADET %' OR
    
        /*** Ciencia y Tecnologia ***/  
        
        Texto like '%Secretaria de Innovacion, Ciencia y Tecnologia Jalisco%' OR
        Texto like '%Secretaria de Innovacion, Ciencia y Tecnologia de Jalisco%' OR
        Texto like '%Secretaria de Innovacion, Ciencia y Tecnologia del estado de jalisco%' OR
        Texto like '%Jaime Reyes Robles%' OR

        Titulo like '%Secretaria de Innovacion, Ciencia y Tecnologia Jalisco%' OR
        Titulo like '%Secretaria de Innovacion, Ciencia y Tecnologia de Jalisco%' OR
        Titulo like '%Secretaria de Innovacion, Ciencia y Tecnologia del estado de jalisco%' OR
        Titulo like '%Jaime Reyes Robles%' OR

        Encabezado like '%Secretaria de Innovacion, Ciencia y Tecnologia Jalisco%' OR
        Encabezado like '%Secretaria de Innovacion, Ciencia y Tecnologia del estado de jalisco%' OR
        Encabezado like '%Secretaria de Innovacion, Ciencia y Tecnologia de Jalisco%' OR
        Encabezado like '%Jaime Reyes Robles%' OR

        PieFoto like '%Secretaria de Innovacion, Ciencia y Tecnologia Jalisco%' OR
        PieFoto like '%Secretaria de Innovacion, Ciencia y Tecnologia de Jalisco%' OR
        PieFoto like '%Secretaria de Innovacion, Ciencia y Tecnologia del estado de jalisco%' OR
        PieFoto like '%Jaime Reyes Robles%' OR

        Autor like '%Secretaria de Innovacion, Ciencia y Tecnologia Jalisco%' OR
        Autor like '%Secretaria de Innovacion, Ciencia y Tecnologia de Jalisco%' OR
        Autor like '%Secretaria de Innovacion, Ciencia y Tecnologia del estado de jalisco%' OR
        Autor like '%Jaime Reyes Robles%' OR

        Texto like '%(SICYT)%'  OR
        Titulo like '%(SICYT)%'  OR
        Encabezado like '%(SICYT)%'  OR
        PieFoto like '%(SICYT)%'    OR
        Autor like '%(SICYT)%' OR

        Texto like '% SICYT %'  OR
        Titulo like '% SICYT %'  OR
        Encabezado like '% SICYT %'  OR
        PieFoto like '% SICYT %'    OR
        Autor like '% SICYT %' OR

        
        /*** Cultura ***/   
    
        Texto like '%Secretaria de Cultura Jalisco%' OR
        Texto like '%Secretaria de Cultura de Jalisco%' OR
        Texto like '%Secretaria de Cultura del estado de jalisco%' OR
        Texto like '%Myriam Vachez Plagnol%' OR
        Texto like '%Vachez Plagnol%' OR
        Texto like '%Myriam Vachez%' OR

        Titulo like '%Secretaria de Cultura Jalisco%' OR
        Titulo like '%Secretaria de Cultura de Jalisco%' OR
        Titulo like '%Secretaria de Cultura del estado de jalisco%' OR
        Titulo like '%Myriam Vachez Plagnol%' OR
        Titulo like '%Vachez Plagnol%' OR
        Titulo like '%Myriam Vachez%' OR

        Encabezado like '%Secretaria de Cultura Jalisco%' OR
        Encabezado like '%Secretaria de Cultura del estado de jalisco%' OR
        Encabezado like '%Secretaria de Cultura de Jalisco%' OR
        Encabezado like '%Myriam Vachez Plagnol%' OR
        Encabezado like '%Vachez Plagnol%' OR
        Encabezado like '%Myriam Vachez%' OR

        PieFoto like '%Secretaria de Cultura Jalisco%' OR
        PieFoto like '%Secretaria de Cultura de Jalisco%' OR
        PieFoto like '%Secretaria de Cultura del estado de jalisco%' OR
        PieFoto like '%Myriam Vachez Plagnol%' OR
        PieFoto like '%Vachez Plagnol%' OR
        PieFoto like '%Myriam Vachez%' OR

        Autor like '%Secretaria de Cultura Jalisco%' OR
        Autor like '%Secretaria de Cultura de Jalisco%' OR
        Autor like '%Secretaria de Cultura del estado de jalisco%' OR
        Autor like '%Myriam Vachez Plagnol%' OR
        Autor like '%Vachez Plagnol%' OR
        Autor like '%Myriam Vachez%' OR

        /*** Movilidad ***/

        Texto LIKE '%secretaria de movilidad de jalisco%'
        OR Texto LIKE '%movilidad jalisco%'
        OR Texto LIKE '%secretaria de movilidad jalisco%'
        OR Texto LIKE '%secretaria de movilidad del estado de jalisco%'
        OR Texto LIKE '%Servando Sepulveda Enriquez%'
        OR Texto LIKE '%Servando Sepulveda%'
        OR Texto LIKE '%Sepulveda Enriquez%'

        OR Titulo LIKE '%secretaria de movilidad de jalisco%'
        OR Titulo LIKE '%movilidad jalisco%'
        OR Titulo LIKE '%secretaria de movilidad jalisco%'
        OR Titulo LIKE '%secretaria de movilidad del estado de jalisco%'
        OR Titulo LIKE '%Servando Sepulveda Enriquez%'
        OR Titulo LIKE '%Servando Sepulveda%'
        OR Titulo LIKE '%Sepulveda Enriquez%'

        OR Encabezado LIKE '%secretaria de movilidad de jalisco%'
        OR Encabezado LIKE '%movilidad jalisco%'
        OR Encabezado LIKE '%secretaria de movilidad jalisco%'
        OR Encabezado LIKE '%secretaria de movilidad del estado de jalisco%'
        OR Encabezado LIKE '%Servando Sepulveda Enriquez%'
        OR Encabezado LIKE '%Servando Sepulveda%'
        OR Encabezado LIKE '%Sepulveda Enriquez%'

        OR PieFoto LIKE '%secrearia de movilidad de jalisco%'
        OR PieFoto LIKE '%movilidad jalisco%'
        OR PieFoto LIKE '%secretaria de movilidad jalisco%'
        OR PieFoto LIKE '%secretaria de movilidad del estado de jalisco%'
        OR PieFoto LIKE '%Servando Sepulveda Enriquez%'
        OR PieFoto LIKE '%Servando Sepulveda%'
        OR PieFoto LIKE '%Sepulveda Enriquez%'

        OR Texto LIKE '%(SEMOV)%'
        OR Titulo LIKE '%(SEMOV)%'
        OR Encabezado LIKE '%(SEMOV)%'
        OR PieFoto LIKE '%(SEMOV)%'
        OR Autor LIKE '%(SEMOV)%'
        OR Texto LIKE '% SEMOV %'
        OR Titulo LIKE '% SEMOV %'
        OR Encabezado LIKE '% SEMOV %'
        OR PieFoto LIKE '% SEMOV %'
        OR Autor LIKE '% SEMOV %' OR

        /*** Procuraduria Socuial ***/      

        Texto like '%procuraduria social de jalisco%'
        OR
        Texto like'%procuraduria social jalisco%'
        OR
        Texto like'%procuraduria social del estado de jalisco%'
        OR
        Texto like'%felicitas velazquez serrano%'

        OR
        Titulo like '%procuraduria social de jalisco%'
        OR
        Titulo like'%procuraduria social jalisco%'
        OR
        Titulo like'%procuraduria social del estado de jalisco%'
        OR
        Titulo like'%felicitas velazquez serrano%'

        OR
        Encabezado like '%procuraduria social de jalisco%'
        OR
        Encabezado like'%procuraduria social jalisco%'
        OR
        Encabezado like'%procuraduria social del estado de jalisco%'
        OR
        Encabezado like'%felicitas velazquez serrano%'

        OR
        PieFoto like '%procuraduria social de jalisco%'
        OR
        PieFoto like'%procuraduria social jalisco%'
        OR
        PieFoto like'%procuraduria social del estado de jalisco%'
        OR
        PieFoto like'%felicitas velazquez serrano%' OR

        Texto like '%(PROSOC)%'  OR
        Titulo like '%(PROSOC)%'  OR
        Encabezado like '%(PROSOC)%'  OR
        PieFoto like '%(PROSOC)%'    OR
        Autor like '%(PROSOC)%' OR

        Texto like '% PROSOC %'  OR
        Titulo like '% PROSOC %'  OR
        Encabezado like '% PROSOC %'  OR
        PieFoto like '% PROSOC %'    OR
        Autor like '% PROSOC %' OR

        /*** Contraloria del Estado ***/

        Texto like '%contraloria del estado de jalisco%'
        OR
        Texto like'%contraloria de jalisco%'
        OR
        Texto like'%juan jose bañuelos guardado%'
        OR
        Texto like'%juan jose bañuelos%'
        OR
        Texto like'%contraloria jalisco%'

        OR
        Titulo like '%contraloria del estado de jalisco%'
        OR
        Titulo like'%contraloria de jalisco%'
        OR
        Titulo like'%juan jose bañuelos guardado%'
        OR
        Titulo like'%juan jose bañuelos%'

        OR
        Encabezado like '%contraloria del estado de jalisco%'
        OR
        Encabezado like'%contraloria de jalisco%'
        OR
        Encabezado like'%juan jose bañuelos guardado%'
        OR
        Encabezado like'%juan jose bañuelos%'

        OR
        PieFoto like '%contraloria del estado de jalisco%'
        OR
        PieFoto like'%contraloria de jalisco%'
        OR
        PieFoto like'%juan jose bañuelos guardado%'
        OR
        PieFoto like'%juan jose bañuelos%' OR

        /*** Fiscalia ***/

        Texto like '%fiscalia general del estado de jalisco%'
        OR
        Texto like'%fiscalia general jalisco%'
        OR
        Texto like '%fiscalia jalisco%'
        OR
        Texto like'%Jesus Eduardo Almaguer Ramirez%'
        OR
        Texto like'%Eduardo Almaguer%'
        OR
        Texto like '%Eduardo Almauer Ramirez%'
        OR
        Texto like '%Almaguer Ramirez%'

        OR
        Titulo like '%fiscalia general del estado de jalisco%'
        OR
        Titulo like'%fiscalia general jalisco%'
        OR
        Titulo like '%fiscalia jalisco%'
        OR
        Titulo like'%Jesus Eduardo Almaguer Ramirez%'
        OR
        Titulo like'%Eduardo Almaguer%'
        OR
        Titulo like '%Eduardo Almauer Ramirez%'
        OR
        Titulo like '%Almaguer Ramirez%'

        OR
        Encabezado like '%fiscalia general del estado de jalisco%'
        OR
        Encabezado like'%fiscalia general jalisco%'
        OR
        Encabezado like '%fiscalia jalisco%'
        OR
        Encabezado like'%Jesus Eduardo Almaguer Ramirez%'
        OR
        Encabezado like'%Eduardo Almaguer%'
        OR
        Encabezado like '%Eduardo Almauer Ramirez%'
        OR
        Encabezado like '%Almaguer Ramirez%'

        OR
        PieFoto like '%fiscalia general del estado de jalisco%'
        OR
        PieFoto like'%fiscalia general jalisco%'
        OR
        PieFoto like '%fiscalia jalisco%'
        OR
        PieFoto like'%Jesus Eduardo Almaguer Ramirez%'
        OR
        PieFoto like'%Eduardo Almaguer%'
        OR
        PieFoto like '%Eduardo Almauer Ramirez%'
        OR
        PieFoto like '%Almaguer Ramirez%' OR

        /*** Comunicacion Social ***/

        Texto like '%comunicacion social del estado de Jalisco%' OR
        Texto like '%comunicacion social de Jalisco%' OR
        Texto like '%comunicacion social  jalisco%' OR
        Texto like '%gonzalo sanchez garcia%' OR

        Titulo like '%comunicacion social del estado de Jalisco%' OR
        Titulo like '%comunicacion social de Jalisco%' OR
        Titulo like '%comunicacion social jalisco%' OR
        Titulo like '%gonzalo sanchez garcia%' OR

        Encabezado like '%comunicacion social del estado de Jalisco%' OR
        Encabezado like '%comunicacion social de Jalisco%' OR
        Encabezado like '%comunicacion social Jalisco%' OR
        Encabezado like '%gonzalo sanchez garcia%' OR

        PieFoto like '%comunicacion social del estado de Jalisco%' OR
        PieFoto like '%comunicacion social de Jalisco%' OR
        PieFoto like '%comunicacion social Jalisco%' OR
        PieFoto like '%gonzalo sanchez garcia%' OR

        Autor like '%comunicacion social del estado de Jalisco%' OR
        Autor like '%comunicacion social de Jalisco%' OR
        Autor like '%comunicacion social Jalisco%' OR
        Autor like '%gonzalo sanchez garcia%' OR

        /*** Jefe de Gabinete ***/

        
        Texto like '%Jefe de gabinete%' OR
        Texto like '%netzahualcoyotl ornelas plascencia%' OR
        Texto like '%netzahualcóyotl ornelas%' OR
        Texto like '%ornelas plascencia%' OR

        Titulo like '%Jefe de gabinete%' OR
        Titulo like '%netzahualcoyotl ornelas plascencia%' OR
        Titulo like '%netzahualcóyotl ornelas%' OR
        Titulo like '%ornelas plascencia%' OR

        Encabezado like '%Jefe de gabinete%' OR
        Encabezado like '%netzahualcoyotl ornelas plascencia%' OR
        Encabezado like '%netzahualcóyotl ornelas%' OR
        Encabezado like '%ornelas plascencia%' OR

        Autor like '%Jefe de gabinete%' OR
        Autor like '%netzahualcoyotl ornelas plascencia%' OR
        Autor like '%netzahualcóyotl ornelas%' OR
        Autor like '%ornelas plascencia%' OR

        PieFoto like '%Jefe de gabinete%' OR
        PieFoto like '%netzahualcoyotl ornelas plascencia%' OR
        PieFoto like '%netzahualcóyotl ornelas%' OR
        PieFoto like '%ornelas plascencia%'
            
      )
      GROUP BY n.Periodico
ORDER BY Total DESC";
$NotasGobernador = mysql_query($qryCorte);



/************Fin de Querys***************/

$Medios;
while ($row = mysql_fetch_array($NotasGobernador)){
    array_push($Medios, array ($row['Nombre']=>$row['Total']))
}


foreach ($Medios as $value) {
    echo "<br>".$value;
}





// Create the Pie Graph.
$graph = new PieGraph(800,550);
$graph->SetShadow();

// Set A title for the plot
//$graph->title->Set("Notas Precandidatos Guadalajara");
$graph->title->SetColor("brown");

// Create pie plot
$p1 = new PiePlot($data);

//$p1->SetTheme("sand");
$p1->SetLabelPos(0.6);
$p1->SetSize(0.3);
$p1->SetLegends(array("Gobernador","Secretaria General","SDIS","SEPAF","SIOP","STPS","Salud","Educación","SEDECO","Turismo","Desarrollo Rural","Desarrollo Territorial","Ciencia y Tecnologia","Cultura","Movilidad","Procuraduría Social","Contralor","Fiscalia","Comunicacion Social","Jefe de Gabiente"));
$graph->legend->Pos(0.07,0.8);

// Set how many pixels each slice should explode
$p1->Explode(array(3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3));
$graph->Add($p1);
$p1->SetSliceColors(array('#8E0000','#F57921','#017CC2','#A3A3A3','#FFFF00','#8E0000','#F57921','#017CC2','#A3A3A3','#FFFF00','#8E0000','#F57921','#017CC2','#A3A3A3','#FFFF00','#8E0000','#F57921','#017CC2','#A3A3A3','#FFFF00'));
$gdImgHandler = $graph->Stroke(_IMG_HANDLER);

// Stroke image to a file and browser
// Default is PNG so use ".png" as suffix
//$fileName = "/var/www/external/rvl/img/graficaVillanuevaCorte.png";
$fileName = "/var/www/external/services/jalisco/img/graficaGobiernoCorte.png";
$graph->img->Stream($fileName);

// Send it back to browser
//$graph->img->Headers();
//$graph->img->Stream();
?>