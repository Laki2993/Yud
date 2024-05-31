<?php

require_once("db.php"); 
$email = $_POST['email'];

if(empty($email) ){
    echo("Заполните поле") ;
    $connect -> error;
}
else{
    $sql = "INSERT INTO InfoUser (email) VALUES ('$email')";
    
    $connect -> query($sql); 

}
