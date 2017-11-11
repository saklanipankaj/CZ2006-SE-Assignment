/**
  *This class implements the AdminController
  *with attribute adminList
  *
  */
class AdminController {

	/**
   * Represents AdminController.
   * AdminController attribute are declared in the constructor
   * @constructor
	 * @param {String}userName - admin user name
	 * @param {String}password - admin password
	 */
	autheticate(userName, password) {
		// TODO - implement AdminController.autheticate
		return boolean;
	}
	/**
	 * @param {int} id - id of feedback
	 */
	getFeedback(id) {
		// TODO - implement AdminController.viewFeedback
		//return ArrayList<id:String, title:String, message:String, email:String, contactNo:int>
	}
	/**
	 * @param {FeedBack} feedback - feedback object
	 */
	closeFeedback(feedback) {
		// TODO - implement AdminController.viewFeedback
		return boolean;
	}

	/**
	 * @param {string} name - name of carpark
	 * @param {string} addr - address of carpark
	 * @param {string} lat - latitude of carpark on map
	 * @param {string} long - longtitude of carpark on map
	 * @param {string} rates - parking rates
	 */
	addCarpark(name,addr,lat,long,rates) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}

	 /**
 	 * @param {string} id - id of carpark
 	 * @param {string} name - name of carpark
 	 * @param {string} lat - latitude of carpark on map
 	 * @param {string} long - longtitude of carpark on map
 	 * @param {string} rates - parking rates
 	 */
	editCarpark(id,name,lat,long,rates) {
		// TODO - implement AdminController.editCarpark
		return  ArrayList<name:String, addr:String, rates:String>
	}

	/**
	 * @param {Carpark} carpark- carpark object
	 */
  	deleteCarpark(carpark) {
		// TODO - implement AdminController.deleteCarpark
		return boolean
	}

	/**
	 * @param {string} name- carpark name
	 */
	searchCarpark(name) {
		// TODO - implement AdminController.searchCarpark
		return string;
	}
	/**
	 * @param {string} title- title of feedback
	 */
	retrieveFeedback(title) {
		// TODO - implement AdminController.retrieveFeedback
		return  Feedback;
	}

  	retrieveFeedback() {
		// TODO - implement AdminController.retrieveFeedback
		//return  ArrayList<Feedback>;
	}
	/**
	 * @param {FeedBack} feedback- feedback object
	 */
	updateFeedback(feedback) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}
//addCarpark(name,addr,lat,long,rates) {
		// TODO - implement AdminController.updateFeedback
	//	return boolean;
	//}
	/**
	 * @param {string} name- name of carpark
	 */
	checkExistingCarpark(name) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}
	getAllFeedback() {
		// TODO - implement AdminController.updateFeedback
		return ArrayList<id:String, title: String>;
	}
	/**
	 * @param {int} id- id of feedback
	 */
	setFeedbackClosed(id) {
		// TODO - implement AdminController.updateFeedback
		return boolean;
	}

}
