
class Feedback{

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
     * @param {string} title
     */
    setTitle(title) {
        this.title = title;
    };
    getCategory() {
        return this.category;
    };
    /**
     *
     * @param {string} category
     */
    setCategory(category) {
        this.category = category;
    };
    getMessage() {
        return this.message;
    };
    /**
     *
     * @param {string} message
     */
    setMessage(message) {
        this.message = message;
    };
    getEmail() {
        return this.email;
    };
    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    };
    getContactNo() {
        return this.contactNo;
    };
    /**
     *
     * @param {string} contactNo
     */
    setContactNo(contactNo) {
        this.contactNo = contactNo;
    };
    getCurrentStatus() {
        return this.currentStatus;
    };
    /**
     *
     * @param {string} currentStatus
     */
    setCurrentStatus(currentStatus) {
        this.currentStatus = currentStatus;
    };
    getId() {
        return this.id;
    };
    /**
     *
     * @param {number} id
     */
    setId(id) {
        this.id = id;
    };
    
}
