
alert("Welcome!!")

function showTime(){
    var date = new Date();
    var hour = date.getHours(); 
    var min = date.getMinutes(); 
    var sec = date.getSeconds(); 
    var session = "AM";
 
    // Condition check for AM or PM
    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("Display").innerText = time;
    document.getElementById("Display").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();