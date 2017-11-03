/**
  *This class implements the feedback entity
  *with attribute title, category, message, email,
  *contactNo, currentStatus and id
  *
  */
class Feedback{
  /**
   * Represents a Feedback.
   * Feedback entity attribute are declared in the constructor
   * @constructor
   */
    constructor() {
        this.id = 0;
        this.title = null;
        this.category = null;
        this.message = null;
        this.email = null;
        this.contactNo = null;
        this.currentStatus = null;
    }
    getTitle() {
        return this.title;
    };
    /**
     *
     * @param {string} title - title of feedback
     */
    setTitle(title) {
        this.title = title;
    };
    getCategory() {
        return this.category;
    };
    /**
     *
     * @param {string} category - category of feedback
     */
    setCategory(category) {
        this.category = category;
    };
    getMessage() {
        return this.message;
    };
    /**
     *
     * @param {string} message - message in the feedback
     */
    setMessage(message) {
        this.message = message;
    };
    getEmail() {
        return this.email;
    };
    /**
     *
     * @param {string} email - email of the person who send the feedback
     */
    setEmail(email) {
        this.email = email;
    };
    getContactNo() {
        return this.contactNo;
    };
    /**
     *
     * @param {string} contactNo - contactNo of the person who send the feedback
     */
    setContactNo(contactNo) {
        this.contactNo = contactNo;
    };
    getCurrentStatus() {
        return this.currentStatus;
    };
    /**
     *
     * @param {string} currentStatus - status of feedback
     */
    setCurrentStatus(currentStatus) {
        this.currentStatus = currentStatus;
    };
    getId() {
        return this.id;
    };
    /**
     *
     * @param {number} id - id to identify each feedback
     */
    setId(id) {
        this.id = id;
    };

}
