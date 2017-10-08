
class Location{

    constructor() {
        this.latitude = null;
        this.longtitude = null;
    }
    getLatitude() {
        return this.latitude;
    };
    /**
     *
     * @param {string} latitude
     */
    setLatitude(latitude) {
        this.latitude = latitude;
    };
    getLongtitude() {
        return this.longtitude;
    };
    /**
     *
     * @param {string} longtitude
     */
    setLongtitude(longtitude) {
        this.longtitude = longtitude;
    };
    
}