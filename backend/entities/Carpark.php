<?php

/**
  *This class implements the carpark entity
  *with attribute name, avaliableLots and location
  *
  */

require_once('Object.php');

class Carpark extends Object{
  /**
   * Represents a Carpark.
   * Carpark entity attribute are declared in the constructor
   * @constructor
   */

    private $id = 0;
    private $name = '';
    private $avaliablelots = 0;
    private $location = NULL;
    private $rates = NULL;

    public function __construct(int $id = NULL,string $name = NULL,int $lots = NULL,Location $location = NULL,array $rates = NULL) {
        $this->name = $name;
        $this->avaliablelots = $lots;
        $this->location = $location;
        $this->rates = $rates;
        $this->id = $id;
    }

    public function getId() : int
    {
        return $this->id;
    }

    public function setId(int $id) : void
    {
        $this->id = $id;
    }


    public function getName() : String{
        return $this->name;
    }

    public function setName(string $name) : void {
        $this->name = $name;
    }

    public function getAvaliableLots() : int {
        return $this->avaliablelots;
    }
    
    public function setAvaliableLots(int $avaliableLots) : void {
        $this->avaliableLots = $avaliableLots;
    }

    public function getLocation() : Location {
        return $this->location;
    }

     /**
     *
     * @param {string} location - location of carpark
     */
    public function setLocation(Location $location) : void {
        $this->location = $location;
    }

    public function getRates() : array {
        return $this->rates;
    }


     /**
     *
     * @param {string} rates - carpark rate
     */
    public function setRates(array $rates) : void {
        $this->rates = $rates;
    }

    /**
     *
     * @param {string} startTime - startTime of parking
     * @param {string} endTime - endTime of parking
     */
    // calculateParkingFee($startTime, $endTime) {
    //     //
    // };

}

?>