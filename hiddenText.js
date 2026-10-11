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

        document.getElementById(blue).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(1):
        x = document.getElementById(blue);

        document.getElementById(gabe).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(2):
        x = document.getElementById(jay);

        document.getElementById(blue).style.display = "none";
        document.getElementById(gabe).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(3):
        x = document.getElementById(nurse);

        document.getElementById(blue).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(gabe).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(4):
        x = document.getElementById(sammy);

        document.getElementById(blue).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(gabe).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(5):
        x = document.getElementById(green);

        document.getElementById(blue).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(gabe).style.display = "none";
        document.getElementById(nathan).style.display = "none";
        break;
        case(6):
        x = document.getElementById(nathan);

        document.getElementById(blue).style.display = "none";
        document.getElementById(jay).style.display = "none";
        document.getElementById(nurse).style.display = "none";
        document.getElementById(sammy).style.display = "none";
        document.getElementById(green).style.display = "none";
        document.getElementById(gabe).style.display = "none";
        break;

        default: x = document.getElementById("divInfo");
    }

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 