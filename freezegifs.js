function setGif(freeze) {
    let freezeGif = JSON.stringify(freeze);
    localStorage.setItem('freeze', freezeGif);
}
function freezegifs() {
    setGif('freezegif');
    console.log(localStorage.getItem('freeze'));
    
    if(localStorage.getItem('freeze')==='"freezegif"'){ 
        console.log('equal');
        var x = document.querySelectorAll('.freeze img, img.freeze');
        for(var i=0; i<x.length; i++) {
            x[i].src = x[i].src.slice(0, -3) + 'png' ;}}
    else{
        console.log('not equal');
        var x = document.querySelectorAll('.freeze img, img.freeze'); 
        for(var i=0; i<x.length; i++) {
        x[i].src = x[i].src.slice(0, -3) + 'gif' ;}
    }
    
}
function resumegifs() {
    setGif('resumegifs');
    console.log(localStorage.getItem('freeze'));

    if(localStorage.getItem('freeze') === '"resumegifs"'){
        console.log('equal');
        var x = document.querySelectorAll('.freeze img, img.freeze'); 
        for(var i=0; i<x.length; i++) {
            x[i].src = x[i].src.slice(0, -3) + 'gif' ;}}
    else{
        console.log('not equal');
        var x = document.querySelectorAll('.freeze img, img.freeze');
        for(var i=0; i<x.length; i++) {
        x[i].src = x[i].src.slice(0, -3) + 'png' ;}
    }
}
(function(){
    if(localStorage.getItem('freeze')==='"freezegif"'){
        var x = document.querySelectorAll('.freeze img, img.freeze');
        for(var i=0; i<x.length; i++) {
            x[i].src = x[i].src.slice(0, -3) + 'png' ;}
    }else{
        var x = document.querySelectorAll('.freeze img, img.freeze'); 
        for(var i=0; i<x.length; i++) {
            x[i].src = x[i].src.slice(0, -3) + 'gif' ;}
    }
})();
