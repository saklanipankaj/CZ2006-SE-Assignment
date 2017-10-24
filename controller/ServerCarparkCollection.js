
class ServerCarparkCollection extends DAO {

    carparkList;

	getCarparkList() {
		return this.carparkList;
	}

	/**
	 * 
	 * @param carparkList
	 */
	setCarparkList(carparkList) {
		this.carparkList = carparkList;
	}
}
