/**
  *This class implements the ServerCarparkCollection extends DAO
  *with attribute carparkList
  *
  */
class ServerCarparkCollection extends DAO {

    carparkList;


	getAllCarparks() {
		return this.carparkList;
	}
  /**
   * @param {ArrayList<Carpark>} carparkList - list of carpark objects
   */
	setCarparkList(carparkList) {
		this.carparkList = carparkList;
	}
  /**
   * @param {string} addr - address of carpark
   */
	getAddrCarparkList(addr) {
		//todo
		//return ArrayList<Carpark>;
	}
  /**
   * @param {string} name - name of carpark
   */
	getNameCarparkList(name) {
		//todo
		//return ArrayList<Carpark>;
	}
  /**
   * @param {string} name - name of carpark
   */
	getCarpark(name) {
		//todo
		return Carpark>;
	}
  /**
   * @param {string} name - name of carpark
   */
	checkCarparkExists(name) {
		//todo
		return boolean;
	}
  /**
   * @param {string} name - name of carpark
   */
	addCarpark(name) {
		//todo
		return boolean;
	}
  /**
   * @param {carpark} carpark - carpark object
   */
	editCarpark(name,loc,rates) {
		//todo
		return carpark;
	}
}
