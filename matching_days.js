function myFunction() {    
    
    var dat1 = document.getElementById("date1").value;
    var dat2 = document.getElementById("date2").value;     

    var d1 = new Date(dat1);
    var d2 = new Date(dat2);
    var weekday = new Array(7);
    weekday[0] = document.getElementById("sunday");
    weekday[1] = document.getElementById("monday");
    weekday[2] = document.getElementById("tuesday");
    weekday[3] = document.getElementById("wednesday");
    weekday[4] = document.getElementById("thursday");
    weekday[5] = document.getElementById("friday");
    weekday[6] = document.getElementById("saturday");     


    var n1 = weekday[d1.getDay()]; 
    var n2 = weekday[d2.getDay()]; 
    
    for (var i = 0; i < weekday.length; i++){
     weekday[i].classList.remove("highlight1","highlight3","highlight2");
    }    
    
    if (n1 === n2){        
        n1.classList.add("highlight3");        
    }
    
    n1.classList.add("highlight1")     
    n2.classList.add("highlight2")

   
     
 }
