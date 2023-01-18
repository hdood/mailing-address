<?php



class Db {


    public static function connect(){
        try {

            $connection = new PDO("mysql:host=localhost;dbname=test", "root", ""); 

        }catch(PDOException $e){
            echo $e->getMessage(); 
        }

        return $connection;
    }
}