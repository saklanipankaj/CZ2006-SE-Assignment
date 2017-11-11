
//Loading
myApp.onPageInit('displayCP', function (page) {
    displayCarparkInformation(selectedCarpark);
});

//function to populate the Display Carpark Page
function displayCarparkInformation(carparkId) {
    var carpark = json[carparkId];
    var weekdayDiv = document.getElementById("weekdayDiv");
    var saturdayDiv = document.getElementById("saturdayDiv");
    var sundayDiv = document.getElementById("sundayDiv");
    var weekdayRateUL = document.getElementById("weekDayRate");
    var saturdayRateUL = document.getElementById("saturdayRate");
    var sundayRateUL = document.getElementById("sundayRate");
    weekdayRateUL.innerHTML='';
    saturdayRateUL.innerHTML='';
    sundayRateUL.innerHTML='';


    console.log(carpark['Rates']['Weekday'][0]['pricePerHalfHour']);
    //There is a Weekday Rate

    if(carpark['Rates']['Weekday']!=null){
        weekdayDiv.style.display = "inline";
        var weekday = carpark['Rates']['Weekday'];
        for(rate in weekday){
            //Used to Poulate the List
            var weekdayRate = '<li class="item-content">\n' +
                '<div class="item-inner"id = "satfee">\n';
            var start = weekday[rate]['startHour'];
            var startTime = moment().hours(start);
            startTime.minutes((start*100)%100);
            var end = weekday[rate]['endHour'];
            var endTime = moment().hours(end);
            endTime.minutes((end*100)%100);

            weekdayRate+="Start :"+startTime.format('HHmm')+" - "+endTime.format('HHmm')+"<br>";
            var prices = weekday[rate]['pricePerHalfHour'];
            //per entry display
            if(prices[1]==0)
                weekdayRate += "Per Entry:$"+prices[0];
            else{
                //1St Hour and subsequent Hour
                if(prices.length>2){
                    var prev = prices[0];
                    for(var i=1;i<prices.length;i++){
                        if(prices[i]!=prev){
                            weekdayRate += "Price 1st h: $"+prev*2+", ";
                            prev = prices[i];
                        }
                    }
                    weekdayRate += " Subsequent 1/2 h: $"+prev;
                }
                else{
                    weekdayRate += " Price per 1/2 h: $"+prices[0];
                }
            }
            weekdayRate += '</div>\n</li>';
            //console.log(weekdayRate);
            weekdayRateUL.innerHTML+=weekdayRate;
        }
    }
    else{
        weekdayDiv.style.display = "none";
    }
    //There is a Saturday Rate
    if(carpark['Rates']['Saturday']!=null){
        var Saturday = carpark['Rates']['Saturday'];
        saturdayDiv.style.display = "inline";

        for(rate in Saturday){
            //Used to Poulate the List
            var saturdayRate = '<li class="item-content">\n' +
                '<div class="item-inner"id = "satfee">\n';

            var start = Saturday[rate]['startHour'];
            var startTime = moment().hours(start);
            startTime.day(5);
            startTime.minutes((start*100)%100);
            var end = Saturday[rate]['endHour'];
            var endTime = moment().hours(end);
            endTime.day(5);
            endTime.minutes((end*100)%100);

            saturdayRate+="Start :"+startTime.format('HHmm')+" - "+endTime.format('HHmm')+"<br>";
            var prices = Saturday[rate]['pricePerHalfHour'];
            //per entry display
            if(prices[1]==0)
                saturdayRate += "Per Entry:$"+prices[0]+"<br>";
            else{
                //1St Hour and subsequent Hour
                if(prices.length>2){
                    var prev = prices[0];
                    for(var i=1;i<prices.length;i++){
                        if(prices[i]!=prev){
                            saturdayRate += "Price 1st h: $"+prev*2+", ";
                            prev = prices[i];
                        }
                    }
                    saturdayRate += " Subsequent 1/2 h: $"+prev;
                }
                else{
                    saturdayRate += " Price per 1/2 h: $"+prices[0];
                }
            }
            saturdayRate += '</div>\n</li>';
            saturdayRateUL.innerHTML+=saturdayRate;
        }
    }else{
        saturdayDiv.style.display = "none";
    }
    //There is a Saturday Rate
    if(carpark['Rates']['Sunday']!=null){
        var Sunday = carpark['Rates']['Sunday'];
        sundayDiv.style.display = "inline";

        for(rate in Sunday){
            //Used to Poulate the List
            var sundayRate = '<li class="item-content">\n' +
                '<div class="item-inner"id = "satfee">\n';
            var start = Sunday[rate]['startHour'];
            var startTime = moment().hours(start);
            startTime.minutes((start*100)%100);
            startTime.day(6);
            var end = Sunday[rate]['endHour'];
            var endTime = moment().hours(end);
            endTime.day(6);
            endTime.minutes((end*100)%100);

            sundayRate+="Start :"+startTime.format('HHmm')+" - "+endTime.format('HHmm')+"<br>";
            var prices = Sunday[rate]['pricePerHalfHour'];
            //per entry display
            if(prices[1]==0)
                sundayRate += "Per Entry:$"+prices[0]+"<br>";
            else{
                //1St Hour and subsequent Hour
                if(prices.length>2){
                    var prev = prices[0];
                    for(var i=1;i<prices.length;i++){
                        if(prices[i]!=prev){
                            sundayRate += "Price 1st h: $"+prev*2+"<br>";
                            prev = prices[i];
                        }
                    }
                    sundayRate += " Subsequent 1/2 h: $"+prev+"<br>";
                }
                else{
                    sundayRate += " Price per 1/2 h: $"+prices[0]+"<br>";
                }
            }
            sundayRate += '</div>\n</li>';
            sundayRateUL.innerHTML+=sundayRate;
        }
    }else{
        sundayDiv.style.display = "none";
    }


    document.getElementById('displayCPname').innerHTML = carparkId;
    document.getElementById('carparkname').innerHTML = carparkId;

    var lots = "Not Available";
    //console.log(carparkId, json[carparkId].id, apiLots["Data"][json[carparkId].id]);
    if(json[carparkId].id !== undefined){
        lots = apiLots["Data"][json[carparkId].id];
    }
    document.getElementById('displaylots').innerHTML = lots;
}

function calculateCost(elapsedTime){
    var carpark = json[selectedCarpark];
    var now = moment();
    var end = moment().add(document.getElementById('slideroutput').innerHTML=elapsedTime, 'h');
    var total = 0;
    var count =0;
    document.getElementById('slideroutput').innerHTML=elapsedTime+"Hours";
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