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

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }


    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }


    /**
     *
     * @param {string} name - name of carpark
     */

    public function getAvaliableLots() {
        return $this->avaliablelots;
    }

    /**
     *
     * @param {number} avaliableLots - avaliablelots in carpark
     */
    
    public function setAvaliableLots($avaliableLots) {
        $this->avaliableLots = $avaliableLots;
    }

    public function getLocation() {
        return $this->location;
    }

     /**
     *
     * @param {string} location - location of carpark
     */
    public function setLocation($location) {
        $this->location = $location;
    }

    public function getRates() {
        return $this->rates;
    }


     /**
     *
     * @param {string} rates - carpark rate
     */
    public function setRates($rates) {
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