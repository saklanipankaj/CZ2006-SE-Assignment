
class Carpark{

    constructor() {
        this.name = null;
        this.avaliableLots = 0;
        this.location = null;
		this.dictionary<String, ArrayList<Rate>> rates = null;
    }
    getName() {
        return this.name;
    };
    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    };
    getAvaliableLots() {
        return this.avaliableLots;
    };
    /**
     *
     * @param {number} avaliableLots
     */
    setAvaliableLots(avaliableLots) {
        this.avaliableLots = avaliableLots;
    };
    getLocation() {
        return this.location;
    };
	
	 /**
     *
     * @param {string} dictionary
     */
    setLocation(location) {
        this.location = location;
    };
	
	  /**
     *
     * @param {string} location
     */
    dictionary<String, ArrayList<Rate>> getRates() {
        return this.rate;
    };
	
	
	 /**
     *
     * @param {string} rates
     */
    setRates(dictionary<String, ArrayList<Rate>> rates) {
        this.rate = rate;
    };
	
    /**
     *
     * @param {string} startTime
     * @param {string} endTime
     */
    calculateParkingFee(startTime, endTime) {
        //
    };
    
}
