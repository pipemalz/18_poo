<?php
    require_once('payment.php');

    class Card extends Payment{
        public $number;
        public $cvv;
        public $expDate;

        public function __construct($id, $number, $cvv, $expDate){
            parent::__construct($id);
            $this->number = $number;
            $this->cvv = $cvv;
            $this->expDate = $expDate;
        }
    }
?>