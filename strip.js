var sc = document.getElementById("strip-container");
var slc = document.getElementById("slider-container");


var x = 0, pos = 0;
var Mid = (slc.clientWidth /2) + slc.offsetLeft;

sc.addEventListener("mousemove", myFunction); 
sc.addEventListener("mouseenter", myFunct); 
sc.addEventListener("mouseleave", myMoveNot);

function myFunction(e) {
    x = e.clientX; 
    var y = e.clientY;
    midL = Math.round((Mid - x)/100);
    midR = Math.round((Math.abs(Mid - x))/100);
   }

function myFunct() {
    elem = document.getElementById("strip");
    id = setInterval(frame, 20);
    function frame() {
        if (x < Mid && pos <= 0){
            pos += midL * midL;
            elem.style.left = pos + 'px';
        } else if (x > Mid && pos >= -850) {
            pos -= midR * midR;
            elem.style.left = pos + 'px';
        }
    }
}

function myMoveNot() {
    clearInterval(id);
}

function changeSource(src) {
    var video = document.getElementById('video');
    var source = document.getElementById('source');

        video.pause();

        source.src = "http://www.markvanbeem.com/movs/"+ src +".mp4";

        video.load();
        video.play();
}


//////