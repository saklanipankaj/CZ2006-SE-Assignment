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
     * @param {string} startTime - startTime of parking session
     */
    setStartTime(startTime) {
        this.startTime = startTime;
    };
    getEndTime() {
        return this.endTime;
    };
    /**
     *
     * @param {string} endTime - endTime of parking session
     */
    setEndTime(endTime) {
        this.endTime = endTime;
    };
    getLotPicture() {
        return this.lotPicture;
    };
    /**
     *
     * @param {string} lotPicture - picture of parking session
     */
    setLotPicture(lotPicture) {
        this.lotPicture = lotPicture;
    };
    getLotDescription() {
        return this.lotDescription;
    };
    /**
     *
     * @param {string} lotDescription - comment on parking session
     */
    setLotDescription(lotDescription) {
        this.lotDescription = lotDescription;
    };
    calculateElaspedTime() {
        //
    };
}
