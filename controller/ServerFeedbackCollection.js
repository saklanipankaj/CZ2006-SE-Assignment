
class ServerFeedbackCollection extends DAO {

    feedbackList;

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
