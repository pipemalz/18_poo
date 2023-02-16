<?php 
    require_once('car.php');
    require_once('account.php');
    require_once('uberX.php');
    require_once('card.php');
    
    // $uberX = new UberX("X9S0F9", new Account("Andres Herrera", "103649210"),"Chevrolet", "Spark");
    // $uberX->printDataCar();

    $masterCard = new Card('1223','34i287623984732','091', '09/20/28');

    echo "ID: {$masterCard->id}, Number: {$masterCard->number}, CVV: {$masterCard->cvv}, Exp Date: {$masterCard->expDate}"
?>