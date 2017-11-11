class ViewFactory{
    createView(view) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", view, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               mainView.router.loadContent(this.responseText);
            }
        };
    }
}
