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
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
        this.prices = null;
    }
    getStartTime() {
        return this.startTime;
    };
    /**
     *
     * @param {number} startTime - startTime of parking
     */
    setStartTime(startTime) {
        this.startTime = startTime;
    };
    getEndTime() {
        return this.endTime;
    };
    /**
     *
     * @param {number} endTime  - endTime of parking
     */
    setEndTime(endTime) {
        this.endTime = endTime;
    };
    getPrices() {
        return this.prices;
    };
    /**
     *
     * @param {Array} prices - list of prices
     */
    setPrices(prices) {
        this.prices = prices;
    };

}
