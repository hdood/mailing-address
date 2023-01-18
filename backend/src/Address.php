<?php

require "Db.php"; 



class Address {

    private $address;
    private $address2;
    private $city;
    private $state;
    private $zip;

    private $connection;
    

    public function __construct($address, $address2, $city, $state, $zip)
    {
        $this->connection = Db::connect(); 

        $this->address = $address; 
        $this->address2 = $address2;
        $this->city  = $city;
        $this->state = $state; 
        $this->zip = $zip; 

        
    }

    public function save(){
        
        if($this->addressExists()){
            echo "exists";
            return;
        }


        $query = "INSERT INTO `address` (`address`, `address2`, `city`, `state`, `zip`) VALUES (?, ?, ?, ?, ?)"; 

        $statment = $this->connection->prepare($query);
        
        $res = $statment->execute([$this->address, $this->address2, $this->city, $this->state, $this->zip]); 
        echo $res; 
    }

    public function addressExists(){
        
        $query = "SELECT `id` FROM `address` WHERE `address` = ? AND `address2` = ? AND `state`= ? AND `city` = ? AND `zip` = ?";

        $statment = $this->connection->prepare($query); 

        $statment->execute([$this->address, $this->address2, $this->state, $this->city, $this->zip]); 

        if($statment->rowCount() == 0){
            return false;

        }
        return true;
    }
}