

class Admin{

    constructor() {
        this.userName = null;
        this.password = null;
    }
	
    getUserName() {
        return this.userName;
    };
    /**
     *
     * @param {string} userName
     */
	setUserName(userName) {
        this.userName = userName;
    };
    getPassword() {
        return this.password;
    };
    /**
     *
     * @param {string} password
     */
    setPassword(password) {
        this.password = password;
    };
   
}

