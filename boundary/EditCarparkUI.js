/**
  *This class implements the EditCarparkUI extends from AdminUI
  *with attribute carpark
  *
  */
class EditCarparkUI extends AdminUI {
	/**
	 * Represents EditCarparkUI.
	 * EditCarparkUI attribute are declared in the constructor
	 * @constructor
	 */
	constructor() {
		this.carpark;
    }

	loadCarpark(carpark) {
		// TODO - implement EditCarparkUI.loadCarpark
		return carpark;
	}

	getCarpark() {
		return this.carpark;
	}
	/**
	 * @param {carpark} carpark- carpark object
	 */
	setCarpark(carpark) {
		this.carpark = carpark;
	}
	/**
	 * @param {string} id- carparkID
	 * @param {string} name - name of carpark
	 * @param {double} price - parking rate
	 */
	addCarpark(id,name,price){
		// TODO - implement EditCarparkUI.save
		throw new UnsupportedOperationException();
	}

}
