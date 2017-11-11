/**
  *This class implements the Admin entity
  *with attribute username and password
  *
  */

class Admin{
  /**
   * Represents Admin.
   * admin entity attribute are declared in the constructor
   * @constructor
   */
    constructor() {
        this.userName = null;
        this.password = null;
    }

    getUserName() {
        return this.userName;
    };
    /**
     *
     * @param {string} userName- admin account username
     */
	setUserName(userName) {
        this.userName = userName;
    };
    getPassword() {
        return this.password;
    };
    /**
     *
     * @param {string} password - admin account password
     */
    setPassword(password) {
        this.password = password;
    };

}
