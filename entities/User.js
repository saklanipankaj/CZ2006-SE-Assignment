
class User{

    constructor() {
        this.parkingSession = null;
        this.currentLocation = null;
        this.favouriteList = null;
        this.profile = null;
    }
    getProfile() {
        return profile;
    };
    /**
     *
     * @param {*} profile
     */
    setProfile(profile) {
        this.profile = profile;
    };
    getParkingSession() {
        return this.parkingSession;
    };
    /**
     *
     * @param {*} parkingSession
     */
    setParkingSession(parkingSession) {
        this.parkingSession = parkingSession;
    };
    getCurrentLocation() {
        return this.currentLocation;
    };
    /**
     *
     * @param {*} currentLocation
     */
    setCurrentLocation(currentLocation) {
        this.currentLocation = currentLocation;
    };
    getFavouriteList() {
        return this.favouriteList;
    };
    /**
     *
     * @param {*} favouriteList
     */
    setFavouriteList(favouriteList) {
        this.favouriteList = favouriteList;
    };
   
}
