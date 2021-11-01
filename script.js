function DisplayTime(){
	var currentTime = new Date();
	var hour = currentTime.getHours();
	var minute = currentTime.getMinutes();
	var second = currentTime.getSeconds();
	if(hour==12){
		hour = 0;
	}
	else if(hour>12){
		hour = hour -12;
	}
	
	//next three if statements are for displaying a 0 in front of the time if 
	//the hours, minutes, or seconds are belowing 10
	
	if(hour<10){
		hour = "0" + hour;
	}
	if(minute<10){
		minute = "0" + minute;
	}
	if(second < 10){
		second = "0" + second;
	}
	
	var myClock = document.getElementById("clockDisplay");
	myclock.textContent = hour + ":" + minute + ":" + second;
	myClock.innerText = hour + ":" + minute + ":" + second;
	
	setTimeout("DisplayTime()", 1000);
	
}
DisplayTime();