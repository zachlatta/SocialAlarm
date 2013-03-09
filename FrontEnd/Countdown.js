var date = new Date("10/10/2014"); //todo.
function countDown(date){
	//to do! Assuming that date is of type Date object as of now.
	var today = new Date();
	timeNow = today.getTime();
	timeAlarm = date.getTime();
	if(timeAlarm<timeNow){
		//beep();
		return;
	}
	timeDiff = timeAlarm - timeNow;
	//Convert milliseconds to seconds.
	timeDiff = timeDiff/1000;
	//3600 seconds in an hour.
	hours = timeDiff/3600;
	//Number of minutes left.
	minutes = timeDiff%3600/60;
	seconds = (timeDiff%3600)%60;
	return [hours,minutes,seconds];
}

function updateClock(){
	var a = countDown(date);
	if(a){
		$(".clock-hours").html(Math.floor(a[0]));  
		$(".clock-minutes").html(Math.floor(a[1])); 
		$(".clock-seconds").html(Math.floor(a[2]));
 	}
 	else{
 		beep();
 	}
	setTimeout(updateClock,1000);
}

function beep(){
	var snd = new Audio("file.wav"); // buffers automatically when created
	snd.play();
}
updateClock()
