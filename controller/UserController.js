
class UserController{

    constructor() {
        this.User = null;
        this.localCarparkList = null;
        this.startdate = null;
    }
    getUser() {
        return this.User;
    };
    setUser(user) {
        this.user = user;
    };
    getStartDate() {
        return this.startdate;
    };
    setStartDate(startdate) {
        this.startdate = startdate;
    };
    getLocalCarparkList() {
        return this.localCarparkList;
    };
    setLocalCarparkList(localCarparkList) {
        this.localCarparkList = localCarparkList;
    };
}
