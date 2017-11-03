<?php

/**
  *This class implements the ParkingSession entity
  *with attribute startTime, endTime, lotPicture and lotDescription
  *
  */
class ParkingSession{
  /**
   * Represents a ParkingSession
   * ParkingSession entity attribute are declared in the constructor
   * @constructor
   */

    private $startTime;
    private $endTime;
    private $lotPicture;
    private $lotDescription;

    public function __construct() {
        $this->startTime = null;
        $this->endTime = null;
        $this->lotPicture = null;
        $this->lotDescription = null;
    }
    
    public function getStartTime() {
        return $this->startTime;
    }
    /**
     *
     * @param {string} startTime - startTime of parking session
     */
    public function setStartTime($startTime) {
        $this->startTime = startTime;
    }
    
    public function getEndTime() {
        return $this->endTime;
    }
    /**
     *
     * @param {string} endTime - endTime of parking session
     */
   
    public function setEndTime($endTime) {
        $this->endTime = $endTime;
    }
   
    public function getLotPicture() {
        return $this->lotPicture;
    }

    /**
     *
     * @param {string} lotPicture - picture of parking session
     */
    public function setLotPicture($lotPicture) {
        $this->lotPicture = $lotPicture;
    }

    public getLotDescription() {
        return $this->lotDescription;
    }
    /**
     *
     * @param {string} lotDescription - comment on parking session
     */
    
    public setLotDescription($lotDescription) {
        $this->lotDescription = $lotDescription;
    }

    // calculateElaspedTime() {
    //     //
    // }
}

?>