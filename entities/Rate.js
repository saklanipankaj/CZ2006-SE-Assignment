
class Rate{

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
     * @param {number} startTime
     */
    setStartTime(startTime) {
        this.startTime = startTime;
    };
    getEndTime() {
        return this.endTime;
    };
    /**
     *
     * @param {number} endTime
     */
    setEndTime(endTime) {
        this.endTime = endTime;
    };
    getPrices() {
        return this.prices;
    };
    /**
     *
     * @param {Array} prices
     */
    setPrices(prices) {
        this.prices = prices;
    };
 
}
