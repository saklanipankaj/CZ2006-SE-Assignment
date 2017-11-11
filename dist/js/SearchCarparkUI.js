myApp.onPageInit('search', function (page) {
});

function displayCarparkList(async) {
	var response;

	$.ajax({
		url: "backend/server.php",
		method: "POST",
		data: {'Action': 'GET_CARPARKLIST' },
		dataType: 'json',
		async: false,
		success:function(data,response)
		{
			console.log(data);
			carparkList = data;
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
	
function searchCarpark() {
    var parentdiv = document.getElementById('parentdiv');
    var option = document.getElementById("feedbacktype").value;
    console.log(option);

    var titlediv = document.createElement('div');
    titlediv.className = "content-block-title";
    titlediv.setAttribute("style","padding-left:10px");
    titlediv.innerHTML = "Select Carpark";
    titlediv.id = "searchcptitle";

//    <!-- <div class="list-block"> -->
    var licontdiv = document.createElement('div');
    licontdiv.className = "list-block";

//    <!-- <ul> -->
    var ul = document.createElement('ul');

    <!-- <li class="item-content"> -->
    var licont = document.createElement('li');
    licont.className = "item-content";

    <!-- <div class="item-inner" style="width: 60%;"> -->
    var innerdiv = document.createElement('div');
    innerdiv.className = "item-inner";
    innerdiv.setAttribute("style","width:60%");

<!-- <p style="margin:auto; width:100%; text-align:left;" id="xferback"></p> -->
    var p = document.createElement('p');
    //p.css("width","100%");
    //p.css("text-align","left");
    p.setAttribute("style","width:100%; text-align:left;");
    p.id = "xferback";

    <!-- <div class="item-inner" style="width: 40%; margin:0 auto;"> -->
    var inputdiv = document.createElement('div');
    inputdiv.className = "item-inner";
    //inputdiv.css("width","40%");
    //inputdiv.css("margin","0 auto");
    inputdiv.setAttribute("style","width:40%; margin: 0 auto;");

<!-- <a href="#search" style="margin-left: auto">Search</a> -->
    var a = document.createElement('a');
    a.href = "views/SearchCarparkUI.html";
    a.setAttribute("style","margin-left:auto;");
    a.innerHTML="Search";

    /*
    <!-- <div class="content-block-title">Select Carpark:</div> -->
    <!-- <div class="list-block"> -->
        <!-- <ul> -->
            <!-- <li class="item-content"> -->
              <!-- <div class="item-inner" style="width: 60%;"> -->
                <!-- <p style="margin:auto; width:100%; text-align:left;" id="xferback"></p> -->
              <!-- </div> -->
              <!-- <div class="item-inner" style="width: 40%; margin:0 auto;"> -->
                    <!-- <a href="#search" style="margin-left: auto">Search</a> -->
            <!-- </div> -->
            <!-- </li> -->
        <!-- </ul> -->
    <!-- </div> -->
    */

    if(option == "incorrectcp") {
        //console.log("show");

        //create div

    <!-- <div class="content-block-title">Select Carpark:</div> -->

        inputdiv.appendChild(a);

        innerdiv.appendChild(p);

        licont.appendChild(innerdiv);
        licont.appendChild(inputdiv);

        ul.appendChild(licont);

        licontdiv.appendChild(ul);

        parentdiv.appendChild(titlediv);
        parentdiv.appendChild(licontdiv);
    }
    else {
        //console.log("hide");
        //parentdiv.removeChild(titlediv);
        //parentdiv.removeChild(licontdiv);

        while (parentdiv.hasChildNodes()) {
            parentdiv.removeChild(parentdiv.lastChild);
        }
    }
}
