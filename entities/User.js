/**
  *This class implements the User entity
  *with attribute profile, parkingSession,currentLocation and favouriteList
  *
  */
class User{
  /**
   * Represents a User
   * User entity attribute are declared in the constructor
   * @constructor
   */
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
     * @param {*} profile - profile of User
     */
    setProfile(profile) {
        this.profile = profile;
    };
    getParkingSession() {
        return this.parkingSession;
    };
    /**
     *
     * @param {*} parkingSession - parking session of user
     */
    setParkingSession(parkingSession) {
        this.parkingSession = parkingSession;
    };
    getCurrentLocation() {
        return this.currentLocation;
    };
    /**
     *
     * @param {*} currentLocation - location of user
     */
    setCurrentLocation(currentLocation) {
        this.currentLocation = currentLocation;
    };
    getFavouriteList() {
        return this.favouriteList;
    };
    /**
     *
     * @param {*} favouriteList - user's favourite list
     */
    setFavouriteList(favouriteList) {
        this.favouriteList = favouriteList;
    };

}
