
/**
  *This class implements the AdminCollection controller
  *with attribute adminList
  *
  */
class AdminCollection extends DAO{

    adminList;

	getAdminList() {
		return this.AdminList;
	}

	/**
	 *
	 * @param {ArrayList} AdminList - list of admin objects
	 */
	setAdminList(AdminList) {
		this.AdminList = AdminList;
	}

}
