<?php

require_once('Object.php');

class Location extends Object{
  /**
   * Represents a location.
   * Location entity attribute are declared in the constructor
   * @constructor
   */

    private $username;
    private $password;

    public __construct(string $username, $password){
    	$this->username = $username;
    	$this->password = $password;
    }

    public function getUsername() : string {
        return $this->username;
    }

    public function setUsername(string $latitude) : void{
    	$this->username = $username;
    }
    
    public function getPassword() : string {
        return $this->password;
    }

    public function setPassword(string $longtitude) : void {
    	$this->password = $password;
    }


}

?>