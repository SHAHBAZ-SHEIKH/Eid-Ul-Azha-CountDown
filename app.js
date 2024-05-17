function eidCount(){
    var dayhtml = document.getElementById("day")
    var hourhtml = document.getElementById("hour")
    var minhtml = document.getElementById("min")
    var sechtml = document.getElementById("sec")

    var EidUlDate = new Date("june 16,2024")
    var currentDate = new Date()

    var differBoth = (EidUlDate - currentDate)
    var days = Math.floor(differBoth/86400000)
    var hour = Math.floor(differBoth/(3600*1000)%24)
    var min = Math.floor(differBoth/(1000*60) %60)
    var sec = Math.floor(differBoth/(1000) %60)
    if(sec<10){
        sec = "0" + sec
    }
    if(hour<10){
        hour = "0" +hour
    }
    if(min<10){
        min  ="0"+ min
    }
    if(days<10){
        days="0" +days
    }

    dayhtml.innerHTML = days
    hourhtml.innerHTML=hour
    minhtml.innerHTML=min
    sechtml.innerHTML=sec




}
setInterval(() =>{
    eidCount()
},1000)