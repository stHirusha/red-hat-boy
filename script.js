function k(event) {

   if (event.which == 13) {

      if (rw == 0) {
         fid = f();
         rw = setInterval(run, 100);
         rs.play();
         bw = setInterval(back, 100);
         sw = setInterval(score, 100);
         fw = setInterval(move, 100);
      }
   }

   if (event.which == 32) {
      
      if(rw != 0 ){
         if (jw == 0) {
            clearInterval(rw);
            rs.pause();
            rw = -1;
            jw = setInterval(jump, 100);
            js.play();
         }
      }

   }

}

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");


var fid = 0;
var a = 800;

function f() {

   for (y = 0; y < 10; y++) {

      var i = document.createElement("img");
      i.src = "flame.gif";
      i.className = "f";
      i.style.marginLeft = a + "px";

      if (y <= 4) {
         a = a + 700;

      }
      if (y >= 5) {
         a = a + 400;

      }

      i.id = "v" + y;
      document.getElementById("d").appendChild(i);

   }
}

var brml = 1400
var brw = 0;

var rw = 0;
var r = 1;

function run() {

   var ring = document.getElementById("boy");

   r = r + 1;

   if (r == 9) {

      r = 1;

   }

   ring.src = "Run (" + r + ").png";

   clearInterval(idlw)
   document.getElementById("start").style.visibility ="hidden";
   document.getElementById("start").style.transitionDuration = "0.3s"

}

var b = 0;
var bw = 0;

function back() {

   b = b - 20;
   document.getElementById("d").style.backgroundPositionX = b + "px";

}

var u = 0;
var sw = 0;

function score() {

   u = u + 1;

   document.getElementById("score").innerHTML = u;

}

var fw = 0;

function move() {

   for (y = 0; y < 10; y++) {

      var z = getComputedStyle(document.getElementById("v" + y));
      var p = parseInt(z.marginLeft) - 20;
      document.getElementById("v" + y).style.marginLeft = p + "px";

      if (p>20 & p<140) {

         if (mt > 290) {

            clearInterval(rw);
            rs.pause();
            clearInterval(jw);
            jw = -1;
            clearInterval(fw);
            clearInterval(bw);
            clearInterval(sw);
            dw = setInterval(dead, 100);
            ds.play();
            clearInterval(moveBirdWorker);
            clearInterval(birdWorker);

         }

      }

   }

}

jw = 0;
var j = 1;
var mt = 352;

function jump() {

   var jimg = document.getElementById("boy");

   if (j <= 6) {

      mt = mt - 30;

   }

   if (j >= 7) {

      mt = mt + 30;

   }

   jimg.style.marginTop = mt + "px";

   j = j + 1;

   if (j == 13) {
      j = 1;
      clearInterval(jw);
      jw = 0;
      rw = setInterval(run,100);
      rs.play();

   }

   jimg.src = "Jump (" + j + ").png";

}

var dw = 0;
var d = 0;

function dead() {

   var dimg = document.getElementById("boy");

   d = d + 1;

   if (d == 11) {
      d = 10;

      dimg.style.marginTop = "352px";

      document.getElementById("end").style.visibility = "visible";

      document.getElementById("endscore").innerHTML = u;

   }

   dimg.src = "Dead (" + d + ").png";

}

function re() {
   location.reload();

}
var idlnum = 1;
var idlw = 0;
function runidle(){
   idlw = setInterval(idle,100);
   birdWorker = bird();
   moveBirdWorker = setInterval(moveBird, 100);

}

function idle(){

   idimg = document.getElementById("boy"); 
   idlnum = idlnum +1;
   if(idlnum == 11){
      
      idlnum = 1;

   }

   idimg.src = "Idle (" + idlnum + ").png";

}
var birdMargin =1400;
var birdWorker =0;

function bird(){

   for(x = 0;x < 20;x++){
      var bird = document.createElement("img");
      bird.src ="bird.gif";
      bird.className ="bird";
      bird.style.marginLeft =birdMargin+"px";
      birdMargin = birdMargin +1700;

      document.getElementById("d").appendChild(bird);
      bird.id = "bird "+ x;
   }

}
var moveBirdWorker =0;

function moveBird(){

   for (x =0; x < 20; x++){

      var birdStyle = getComputedStyle(document.getElementById("bird "+ x));
      var birdMarginLeft = parseInt(birdStyle.marginLeft) - 20;
      document.getElementById("bird "+x).style.marginLeft = birdMarginLeft + "px";
   }

}
