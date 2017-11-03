/**
  *This class implements the ViewNearbyCarparkUI extends from UserUI
  *
  *
  */
class ViewNearbyCarparkUI extends UserUI{
  /**
   * Represents ViewNearbyCarparkUI.
   * ViewNearbyCarparkUI attribute are declared in the constructor
   * @constructor
   */
    constructor() {
        this.selectedCarpark = null;
    }
    getSelectedCarpark() {
        return this.selectedCarpark;
    };
    /**
     * @param {Carpark} selectedCarpark - selected carpark object by user
     */
    setSelectedCarpark(selectedCarpark) {
        this.selectedCarpark = selectedCarpark;
    };
    displayCarparkDetail() {
        //todo display
    };
    selectCarpark() {
        //todo select
    };
    getLocation() {
        //todo
        return boolean;
    };
    enterSearchtext() {
        //todo
    };
    displayFoundCarpark() {
        //todo
    };
    planRoute() {
        //todo
    };
    displayCurrentLocation() {
        //todo
    };
    /**
     * @param {string} dest - destination entered by user
     */
    viewNearbyCarpark(dest) {
        //todo
    };
    /**
     * @param {double} radius - define nearby
     */
    viewNearbyCarpark(radius) {
        //todo
    };
}
