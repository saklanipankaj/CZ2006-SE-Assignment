class AdminController {

	/**
	 *
	 * @param userName
	 * @param password
	 */
	autheticate(userName, password) {
		// TODO - implement AdminController.autheticate
		return boolean;
	}
	getFeedback(id) {
		// TODO - implement AdminController.viewFeedback
		//return ArrayList<id:String, title:String, message:String, email:String, contactNo:int>
	}

	closeFeedback(feedback) {
		// TODO - implement AdminController.viewFeedback
		return boolean;
	}


	/**
	 *
	 * @param c
	 */
	addCarpark(name,addr,lat,long,rates) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}

	/**
	 *
	 * @param c
	 */
	editCarpark(id,name,lat,long,rates) {
		// TODO - implement AdminController.editCarpark
		return  ArrayList<name:String, addr:String, rates:String>
	}

	/**
	 *
	 * @param c
	 */
  	deleteCarpark(carpark) {
		// TODO - implement AdminController.deleteCarpark
		return boolean
	}

	/**
	 *
	 * @param c
	 */
	searchCarpark(name) {
		// TODO - implement AdminController.searchCarpark
		return string;
	}

	retrieveFeedback(title) {
		// TODO - implement AdminController.retrieveFeedback
		return  Feedback;
	}

  	retrieveFeedback() {
		// TODO - implement AdminController.retrieveFeedback
		//return  ArrayList<Feedback>;
	}

	updateFeedback(feedback) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}
//addCarpark(name,addr,lat,long,rates) {
		// TODO - implement AdminController.updateFeedback
	//	return boolean;
	//}
	checkExistingCarpark(name) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}
	getAllFeedback() {
		// TODO - implement AdminController.updateFeedback
		return ArrayList<id:String, title: String>;
	}
	setFeedbackClosed(id) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}

}
