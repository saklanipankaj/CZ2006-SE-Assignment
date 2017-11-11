
var countDownDate;
myApp.onPageInit('recordCP', function (page) {
});

//For RecordCPInfo
function calculateCost1(elapsedTime){

    var carpark = json[selectedCarpark];
    var now = moment();
    console.log(elapsedTime);
    var end = moment().add(elapsedTime, 'm');
    var total = 0;
    var count =0;
    console.log(now.format("HHmm"));
    while(!now.isSameOrAfter(end)){
        if(carpark['Rates']==null)
            break;

        if(count>2){
            console.log("INFINTE LOOP/ CARPARK NO 24H Parking");
            break;
        }
        count++;

        if(now.day()!=0 && now.day()!=6){
            if(carpark['Rates']['Weekday']!=null){
                var weekday = carpark['Rates']['Weekday'];
                for(rate in weekday){
                    //used for 2 loops where day could have changed to weekends
                    if(now.day()==0 && now.day()==6)
                        break;

                    var start = weekday[rate]['startHour'];
                    var startTime = moment(now).hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = weekday[rate]['endHour'];
                    var endTime = moment(now).hours(end2);
                    endTime.minutes((end2*100)%100);
                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }

                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;

                    var prices = weekday[rate]['pricePerHalfHour'];
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                console.log('First Loop');
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                console.log('Subsequent Loop');
                                total+=last;
                                now.add(30,'m');
                            }
                            console.log("Subsequent Loop Exited");
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }

                    }
                }
            }
        }
        else if(now.day()==6){
            if(carpark['Rates']['Saturday']!=null){
                var saturday = carpark['Rates']['Saturday'];
                for(rate in saturday){
                    //used for 2 loops where day could have changed to weekends
                    if(now.day()!=6)
                        break;

                    var start = saturday[rate]['startHour'];
                    var startTime = moment(now).hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = saturday[rate]['endHour'];
                    var endTime = moment(now).hours(end2);
                    endTime.minutes((end2*100)%100);

                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }

                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;
                    var prices = saturday[rate]['pricePerHalfHour'];
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=last;
                                now.add(30,'m');
                            }
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }
                    }
                }

            }
        }
        else{
            if(carpark['Rates']['Sunday']!=null){
                var sunday = carpark['Rates']['Sunday'];
                for(rate in sunday){
                    if(now.day()!=0)
                        break;

                    var start = sunday[rate]['startHour'];
                    var startTime = moment().hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = sunday[rate]['endHour'];
                    var endTime = moment().hours(end2);

                    if(now.isBefore(start)&&rate==0)
                        now.add(-1,'d');

                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }
                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;

                    var prices = sunday[rate]['pricePerHalfHour'];
                    //per entry display
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=last;
                                now.add(30,'m');
                            }
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById('fee').innerHTML = "$"+total/100;
}


function calculateCost(elapsedTime){
    document.getElementById('slideroutput').innerHTML=elapsedTime +"Hour";
    var carpark = json[selectedCarpark];
    var now = moment();
    var end = moment().add(document.getElementById('slideroutput').innerHTML=elapsedTime, 'h');
    var total = 0;
    var count =0;
    while(!now.isSameOrAfter(end)){
        if(carpark['Rates']==null)
            break;

        if(count>2){
            console.log("INFINTE LOOP/ CARPARK NO 24H Parking");
            break;
        }
        count++;

        if(now.day()!=0 && now.day()!=6){
            if(carpark['Rates']['Weekday']!=null){
                var weekday = carpark['Rates']['Weekday'];
                for(rate in weekday){
                    //used for 2 loops where day could have changed to weekends
                    if(now.day()==0 && now.day()==6)
                        break;

                    var start = weekday[rate]['startHour'];
                    var startTime = moment(now).hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = weekday[rate]['endHour'];
                    var endTime = moment(now).hours(end2);
                    endTime.minutes((end2*100)%100);
                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }

                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;

                    var prices = weekday[rate]['pricePerHalfHour'];
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                console.log('First Loop');
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                console.log('Subsequent Loop');
                                total+=last;
                                now.add(30,'m');
                            }
                            console.log("Subsequent Loop Exited");
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }

                    }
                }
            }
        }
        else if(now.day()==6){
            if(carpark['Rates']['Saturday']!=null){
                var saturday = carpark['Rates']['Saturday'];
                for(rate in saturday){
                    //used for 2 loops where day could have changed to weekends
                    if(now.day()!=6)
                        break;

                    var start = saturday[rate]['startHour'];
                    var startTime = moment(now).hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = saturday[rate]['endHour'];
                    var endTime = moment(now).hours(end2);
                    endTime.minutes((end2*100)%100);

                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }

                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;
                    var prices = saturday[rate]['pricePerHalfHour'];
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=last;
                                now.add(30,'m');
                            }
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }
                    }
                }

            }
        }
        else{
            if(carpark['Rates']['Sunday']!=null){
                var sunday = carpark['Rates']['Sunday'];
                for(rate in sunday){
                    if(now.day()!=0)
                        break;

                    var start = sunday[rate]['startHour'];
                    var startTime = moment().hours(start);
                    startTime.minutes((start*100)%100);
                    var end2 = sunday[rate]['endHour'];
                    var endTime = moment().hours(end2);

                    if(now.isBefore(start)&&rate==0)
                        now.add(-1,'d');

                    if(endTime.isBefore(startTime)){
                        endTime.add(1,'d');
                        console.log("EndTime day Added!");
                    }
                    if(!now.isBetween(startTime,endTime,null,'[]'))
                        continue;

                    var prices = sunday[rate]['pricePerHalfHour'];
                    //per entry display
                    if(prices[1]==0){
                        if(total==0)
                            total+= prices[0]*100;

                        if(endTime.isBefore(end))
                            now = endTime;
                        else
                            now = end;

                        now.add(1,'m');
                    }
                    else{
                        //1St Hour and subsequent Hour
                        if(prices.length>2){
                            var i, last;
                            for(i=0;i<prices.length;i++){
                                total+=(prices[i]*100);
                                now.add(30,'m');
                                last=prices[i]*100;
                                if(!now.isBetween(startTime,endTime,null,'[]')||now.isSameOrAfter(end))
                                    break;
                            }
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=last;
                                now.add(30,'m');
                            }
                        }
                        else{
                            while(now.isBetween(startTime,endTime,null,'[]')&&!now.isSameOrAfter(end)){
                                total+=prices[0]*100;
                                now.add(30,'m');
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById('calculatefee').innerHTML = "$"+total/100;
}




function resetTimer()
{
    // Set the date we're counting down to
    countDownDate = new Date().getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance =  now - countDownDate;

        // Time calculations for , hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = ("0" + hours).slice(-2) + "h:" + ("0" + minutes).slice(-2) + "m:" + ("0" + seconds).slice(-2)+"s";

        // change the price
        if(seconds==1&&hours==0&&minutes==0)
            calculateCost1(1);

        if(hours>1&&minutes==0&&seconds==0)
            calculateCost1(minutes);

    }, 1000);
}
function selectCarpark()
{
        var response;

        $.ajax({
            url: "backend/selectCarpark.php",
            method: "POST",
            data: {'Action': 'GET_selectCarpark' },
            dataType: 'json',
            async: false,
            success:function(data,response)
            {
                console.log(data);
                selected_carpark = data;
                reponse = data;
            },
            error:function(jqXHR, text, errorThrown)
            {
                console.log(jqXHR);
                console.log(text);
                console.log(errorThrown);
            }
        });

        return reponse;
}
function save()
{

    var response;

        $.ajax({
            url: "backend/save.php",
            data: {'Action': 'GET_SelectedCarpark' },
            dataType: 'json',
            async: false,
            success:function(data,response)
            {
                console.log(data);
                selected_carpark = data;
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

