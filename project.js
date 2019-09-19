
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3")

var header = document.getElementById("head");
var filmName = document.getElementById("film_name");

button1.onclick = function(){
    header.style.background = "url('haiphuong.jpg') 0 0 no-repeat"
    filmName.innerHTML = "Hai Phượng"
};

button2.onclick = function(){
    header.style.background = "url('ngbattu.jpg') 0 0 no-repeat"
    filmName.innerHTML = "Người bất tử"
};

button3.onclick = function(){
    header.style.background = "url('') 0 0 no-repeat"
    filmName.innerHTML = ""
};