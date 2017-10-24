
class UserController{

    User;
    localCarparkList;
    startdate;

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

    searchCarparkAddr(addr) {
        //todo
        return ArrayList<String, String>;
    };

    searchCarparkName(name) {
        //todo
        return ArrayList<String, String>;
    };
    submitFeedbackl(title,cat,msg,email,contact) {
        //todo
        return boolean;
    };
    submitFeedbackl(title,cat,msg,email,contact,carparkID) {
        //todo
        return bolean;
    };
    getCarparkInformation() {
        //todo
        return ArrayList<String, double, double>;
    };
    getCarparkInformation() {
        //todo
        return string;
    };
    savePicture(picture file) {
        //todo
        return boolean;
    };
    saveCarparkLotInformation(desc) {
        //todo
        return boolean;
    };
    addFavourite(carparkID) {
        //todo
        return boolean;
    };
}
