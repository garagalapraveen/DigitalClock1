function clock()
{
    var date=new Date()
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM"
        if(hh>12){
            hh=hh-12;
        }
    }
    if(hh==0){
        hh=12;
    }
    
    if(mo==0){
        mo="Jan"
    }
    else if(mo==1){
        mo="Feb"
    }
    else if(mo==2){
        mo="Mar"
    }
    else if(mo==3){
        mo="Apr"
    }
    else if(mo==4){
        mo="May"
    }
    else if(mo==5){
        mo="Jun"
    }
    else if(mo==6){
        mo="Jul"
    }
    else if(mo==7){
        mo="Aug"
    }
    else if(mo==8){
        mo="Sep"
    }
     else if(mo==9){
        mo="Oct"
    }
    else if(mo==10){
        mo="Nov"
    }
    else{
        mo="Dec"
    }
    console.log(mo);
    switch(day){
        case 0:day="Sunday"
        document.body.style.backgroundImage="url(./hd1.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./hd2.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
        
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./hd3.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./hd4.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
        
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./hd5.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
    
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./hd6.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
    
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./hd7.jpeg)"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="100% 100vh"
        
    
        }
        console.log(day)
        document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`
        document.getElementById("date").innerHTML=`${dd}:${mo}:${yy}`
        document.getElementById("day").innerHTML=day
        document.getElementById("sec").innerHTML=ss
        setTimeout(clock,1000)
    }
clock();
var audio=new Audio()
audio.src="./alarm.mp3"
function alarmFunction(){
    var date=new Date()
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var userGivhh=document.getElementById("userHours").value
    var userGivmm=document.getElementById("userMin").value
    var userGivAm_Pm=document.getElementById("userAm_Pm").value
    if(hh==userGivhh && mm==userGivmm && am_pm==userGivAm_Pm){
        audio.play()
        audio.loop=Infinity
    }
    else{
        audio.pause()
    }
    setTimeout(alarmFunction,1000)
}
function closeWindow(){
    document.getElementById("alarmContainer").style.display="none"
}
function openWindow(){
    document.getElementById("alarmContainer").style.display="flex"
}