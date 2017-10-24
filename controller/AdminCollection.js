
class AdminCollection extends DAO{

    var feedbackList;

	getFeedbackList() {
		return this.feedbackList;
	}

	/**
	 * 
	 * @param feedbackList
	 */
	setFeedbackList(feedbackList) {
		this.feedbackList = feedbackList;
	}
	
}
