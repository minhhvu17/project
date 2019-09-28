
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

var header = document.getElementById("head");
var filmName = document.getElementById("film_name");

button1.onclick = function(){
    header.style.background = "url('haiphuong.jpg') 0 0 no-repeat"
    filmName.innerHTML = "Hai Phượng"
    header.style.backgroundSize = "cover"
    // header.style.webkitAnimationTimingFunction = "linear"
    // header.style.animationTimingFunction = "linear"
};

button2.onclick = function(){
    header.style.background = "url('ngbattu.jpg') 0 0 no-repeat"
    filmName.innerHTML = "Người bất tử"
    header.style.backgroundSize = "cover"
    // header.style.webkitAnimationTimingFunction = "linear"
    // header.style.animationTimingFunction = "linear"
};

button3.onclick = function(){
    header.style.background = "url('trangquinh2.jpg') 0 0 no-repeat"
    filmName.innerHTML = "Trạng Quỳnh"
    header.style.backgroundSize = "cover"
    // header.style.webkitAnimationTimingFunction = "linear"
    // header.style.animationTimingFunction = "linear"
};

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });