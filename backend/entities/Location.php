/**
  *This class implements the location entity
  *with attribute latitude and longtitude
  *
  */

<?php

class Location{
  /**
   * Represents a location.
   * Location entity attribute are declared in the constructor
   * @constructor
   */

    private $latitude;
    private $longtitude;
    private $id;

    public function __construct($id, $latitude, $longtitude) {
        $this->latitude = $latitude;
        $this->longtitude = $longtitude;
    }

    public function getLatitude() {
        return $this->latitude;
    }
    /**
     *
     * @param {string} latitude - latitude on map
     */
    public setLatitude($latitude) {
        $this->latitude = $latitude;
    }
    
    public getLongtitude() {
        return $this->longtitude;
    }
    /**
     *
     * @param {string} longtitude - longtitude on map
     */
    public setLongtitude($longtitude) {
        $this->longtitude = $longtitude;
    }

}

?>