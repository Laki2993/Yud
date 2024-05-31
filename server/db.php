<?php 

$servername = "Calc"; 
$username = "root"; 
$password = ""; 
$dbname = "bd calc"; 

$connect = mysqli_connect($servername, $username, $password, $dbname); 



if (!$connect) {
    die("Неудачная попытка отправки запроса". mysqli_connect_error()); 
} 
else {
    header("Location: /Профиль/Profile.html"); 
} 