<?php

/**
  *This class implements the Rate entity
  *with attribute startTime, endTime and price
  *
  */
require_once('Object.php');

class Rate extends Object{
  /**
   * Represents a Rate
   * Rate entity attribute are declared in the constructor
   * @constructor
   */

    private $startTime;
    private $endTime;
    private $prices;

    public function __construct(string $startTime = '0',string $endTime = '0',string $prices = '') {
        $this->startTime = $startTime;
        $this->endTime = $endTime;
        $this->prices = $prices;
    }

    public function getStartTime() : string {
        return $this->startTime;
    }
    /**
     *
     * @param {number} startTime - startTime of parking
     */
    public function setStartTime(string $startTime) : void {
        $this->startTime = $startTime;
    }

    public function getEndTime() : string {
        return $this->endTime;
    }
    /**
     *
     * @param {number} endTime  - endTime of parking
     */
    public function setEndTime(string $endTime) : void{
        $this->endTime = $endTime;
    }

    public function getPrices() : string {
        return $this->prices;
    }
    /**
     *
     * @param {Array} prices - list of prices
     */
    
    public function setPrices(string $prices) : void {
        $this->prices = $prices;
    }

}

?>