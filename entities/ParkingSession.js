
class ParkingSession{

    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.lotPicture = null;
        this.lotDescription = null;
    }
    getStartTime() {
        return this.startTime;
    };
    /**
     *
     * @param {string} startTime
     */
    setStartTime(startTime) {
        this.startTime = startTime;
    };
    getEndTime() {
        return this.endTime;
    };
    /**
     *
     * @param {string} endTime
     */
    setEndTime(endTime) {
        this.endTime = endTime;
    };
    getLotPicture() {
        return this.lotPicture;
    };
    /**
     *
     * @param {string} lotPicture
     */
    setLotPicture(lotPicture) {
        this.lotPicture = lotPicture;
    };
    getLotDescription() {
        return this.lotDescription;
    };
    /**
     *
     * @param {string} lotDescription
     */
    setLotDescription(lotDescription) {
        this.lotDescription = lotDescription;
    };
    calculateElaspedTime() {
        //
    };
	
	setLotDescription(lotDescription) {
        this.lotDescription = lotDescription;
    };

}
