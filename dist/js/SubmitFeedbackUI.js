myApp.onPageInit('feedback', function (page) {
    if(carparkFeedback){
        fromdisplaycp();
        carparkFeedback=false;
    }
});

//submitFeedback
function submitFeedback(){
    myApp.alert('Thank you!', 'Feedback Submitted!');
    resetfb();
    userController.submitFeedback();
    mainView.router.back();
}

//createFeedback
function submitFeedback(async){
	var response;

	$.ajax({
		url: "backend/server.php",
		method: "POST",
		data: {'Action': 'SUBMIT_FEEDBACK' },
		dataType: 'json',
		async: false,
		success:function(data,response)
		{
			console.log(data);
			submitFeedback = data;
			response = data;
		},
		error:function(jqXHR, text, errorThrown)
		{
			console.log(jqXHR);
			console.log(text);
			console.log(errorThrown);
		}
	});

	return response;
	
}

//return to previous page
function goBack(){
    resetfb();
    mainView.router.back();
}


function resetfb() {
    //var myApp = new Framework7();
    var fbtitle = document.getElementById('fbtitle');
    var fbtext = document.getElementById('fbtext');
    var fbname = document.getElementById('fbname');
    var fbcontact = document.getElementById('fbcontact');
    var fbemail = document.getElementById('fbemail');
    var option = document.getElementById("feedbacktype");
    var defaultoption = document.getElementById('fbtypedefault');
    var tryclear = document.getElementById('tryclear');

    fbtitle.value = "";
    fbtext.value = "";
    fbname.value = "";
    fbcontact.value = "";
    fbemail.value = "";
    option.value = "suggestion"
    defaultoption.selected = true;


    var parentdiv = document.getElementById('parentdiv');
    while (parentdiv.hasChildNodes()) {
        parentdiv.removeChild(parentdiv.lastChild);
    }

    while (tryclear.hasChildNodes()) {
        tryclear.removeChild(tryclear.lastChild);
    }

    var div1 = document.createElement('div');
    div1.className="item-title";
    div1.innerHTML = "Type";

    var div2 = document.createElement('div');
    div2.className = "item-after";
    div2.innerHTML = "Suggestion";

    console.log(tryclear.appendChild(div1));
    console.log(tryclear.appendChild(div2));

}


function fromdisplaycp(){
    //document.getElementById('changethisnow').href = "#displayCP";
    //console.log(document.getElementById('changethisnow').href);
    //document.getElementById('changethislater').href = "#home";
    document.getElementById('changethislater').style.zIndex = '100000000000';
    resetfb();
    var parentdiv = document.getElementById('parentdiv');
    var option = document.getElementById("feedbacktype").value;

    var titlediv = document.createElement('div');
    titlediv.className = "content-block-title";
    titlediv.setAttribute("style","padding-left:10px");
    titlediv.innerHTML = "Select Carpark";
    titlediv.id = "searchcptitle";

    var licontdiv = document.createElement('div');
    licontdiv.className = "list-block";

    var ul = document.createElement('ul');

    var licont = document.createElement('li');
    licont.className = "item-content";

    var innerdiv = document.createElement('div');
    innerdiv.className = "item-inner";
    innerdiv.setAttribute("style","width:60%");

    var p = document.createElement('p');
    //p.css("width","100%");
    //p.css("text-align","left");
    p.setAttribute("style","width:100%; text-align:left;");
    p.id = "xferback1";

    var inputdiv = document.createElement('div');
    inputdiv.className = "item-inner";
    //inputdiv.css("width","40%");
    //inputdiv.css("margin","0 auto");
    inputdiv.setAttribute("style","width:40%; margin: 0 auto;");
    
    var a = document.createElement('a');
    a.href = "views/SearchCarparkUI.html";
    a.setAttribute("style","margin-left:auto;");
    a.innerHTML="Search";

    //set feedback type
    var tryclear = document.getElementById('tryclear');

    while (tryclear.hasChildNodes()) {
        tryclear.removeChild(tryclear.lastChild);
    }
    var defaultoption = document.getElementById('fbtypedefault2');
    defaultoption.selected = true;
    option.value = "incorrectcp"
    var div1 = document.createElement('div');
    div1.className="item-title";
    div1.innerHTML = "Type";

    var div2 = document.createElement('div');
    div2.className = "item-after";
    div2.innerHTML = "Incorrect Carpark Information";

    tryclear.appendChild(div1);
    tryclear.appendChild(div2);

    //pass over the title

    inputdiv.appendChild(a);

    innerdiv.appendChild(p);

    licont.appendChild(innerdiv);
    licont.appendChild(inputdiv);

    ul.appendChild(licont);

    licontdiv.appendChild(ul);

    parentdiv.appendChild(titlediv);
    parentdiv.appendChild(licontdiv);

    document.getElementById('xferback1').innerHTML = document.getElementById('carparkname').innerHTML;
}