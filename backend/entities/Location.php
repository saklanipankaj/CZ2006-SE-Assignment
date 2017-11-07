<?php

require_once('Object.php');

class Location extends Object{
  /**
   * Represents a location.
   * Location entity attribute are declared in the constructor
   * @constructor
   */

    private $latitude;
    private $longtitude;
    private $id;

    public function __construct(int $id,string $latitude,string $longtitude) {
        $this->id = $id;
        $this->latitude = $latitude;
        $this->longtitude = $longtitude;
    }

    public function getLatitude() : string {
        return $this->latitude;
    }
    /**
     *
     * @param {string} latitude - latitude on map
     */
    public function setLatitude(string $latitude) : void{
        $this->latitude = $latitude;
    }
    
    public function getLongtitude() : string {
        return $this->longtitude;
    }
    /**
     *
     * @param {string} longtitude - longtitude on map
     */
    public function setLongtitude(string $longtitude) : void {
        $this->longtitude = $longtitude;
    }

    public function getId() : int
    {
        return $this->id;
    }

    public function setId(int $id) : void
    {
        $this->id = $id;
    }

}

?>