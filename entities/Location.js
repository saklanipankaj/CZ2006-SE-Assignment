/**
  *This class implements the location entity
  *with attribute latitude and longtitude
  *
  */
class Location{
  /**
   * Represents a location.
   * Location entity attribute are declared in the constructor
   * @constructor
   */
    constructor() {
        this.latitude = null;
        this.longtitude = null;
    }
    getLatitude() {
        return this.latitude;
    };
    /**
     *
     * @param {string} latitude - latitude on map
     */
    setLatitude(latitude) {
        this.latitude = latitude;
    };
    getLongtitude() {
        return this.longtitude;
    };
    /**
     *
     * @param {string} longtitude - longtitude on map
     */
    setLongtitude(longtitude) {
        this.longtitude = longtitude;
    };

}
