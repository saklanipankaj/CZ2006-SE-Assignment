<?php

/**
  *This class implements the Rate entity
  *with attribute startTime, endTime and price
  *
  */
class Rate{
  /**
   * Represents a Rate
   * Rate entity attribute are declared in the constructor
   * @constructor
   */

    private $startTime;
    private $endTime;
    private $prices;

    public function __construct() {
        $this->startTime = 0;
        $this->endTime = 0;
        $this->prices = null;
    }

    public function getStartTime() {
        return $this->startTime;
    }
    /**
     *
     * @param {number} startTime - startTime of parking
     */
    public function setStartTime($startTime) {
        $this->startTime = $startTime;
    }

    public function getEndTime() {
        return $this->endTime;
    }
    /**
     *
     * @param {number} endTime  - endTime of parking
     */
    public function setEndTime($endTime) {
        $this->endTime = $endTime;
    }

    public function getPrices() {
        return $this->prices;
    }
    /**
     *
     * @param {Array} prices - list of prices
     */
    
    public function setPrices($prices) {
        $this->prices = $prices;
    }

}

?>