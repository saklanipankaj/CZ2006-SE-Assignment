/**
  *This class implements the carpark entity
  *with attribute name, avaliableLots and location
  *
  */
class Carpark{
  /**
   * Represents a Carpark.
   * Carpark entity attribute are declared in the constructor
   * @constructor
   */
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
     * @param {string} name - name of carpark
     */
    setName(name) {
        this.name = name;
    };
    getAvaliableLots() {
        return this.avaliableLots;
    };
    /**
     *
     * @param {number} avaliableLots - avaliablelots in carpark
     */
    setAvaliableLots(avaliableLots) {
        this.avaliableLots = avaliableLots;
    };
    getLocation() {
        return this.location;
    };

	 /**
     *
     * @param {string} location - location of carpark
     */
    setLocation(location) {
        this.location = location;
    }

    dictionary<String, ArrayList<Rate>> getRates() {
        return this.rate;
    };


	 /**
     *
     * @param {string} rates - carpark rate
     */
    setRates(dictionary<String, ArrayList<Rate>> rates) {
        this.rate = rate;
    };

    /**
     *
     * @param {string} startTime - startTime of parking
     * @param {string} endTime - endTime of parking
     */
    calculateParkingFee(startTime, endTime) {
        //
    };

}
