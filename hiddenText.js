var gabe = "infoGabe";
var blue = "infoBluestar";
var jay = "infoJay";
var nurse = "infoNurse";
var sammy = "infoSammy";
var green = "infoGreenstar";
var nathan = "infoNathan";

function aboutInfo(num) {
    
    var x = document.getElementById("divInfo");
    const y = num;

    switch(y){
        case(0):
        x = document.getElementById(gabe);
        break;
        case(1):
        x = document.getElementById(blue);
        break;
        case(2):
        x = document.getElementById(jay);
        break;
        case(3):
        x = document.getElementById(nurse);
        break;
        case(4):
        x = document.getElementById(sammy);
        break;
        case(5):
        x = document.getElementById(green);
        break;
        case(6):
        x = document.getElementById(nathan);
        break;

        default: x = document.getElementById("divInfo");
    }

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 