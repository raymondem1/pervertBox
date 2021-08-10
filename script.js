window.saveDataAcrossSessions = true;

const LOOK_DELAY = 1000;
/*
const LEFT_CUTOFF = (window.innerWidth / 4) + 50;
const RIGHT_CUTOFF = (window.innerWidth - window.innerWidth / 4) - 300;
const TOP_CUTOFF = (window.innerHeight / 4) + 210;
const BOTTOM_CUTOFF = (window.innerHeight - window.innerHeight / 4) + 77;
*/

const LEFT_CUTOFF = 650;
const RIGHT_CUTOFF = 910;
const TOP_CUTOFF = 460;
const BOTTOM_CUTOFF = 520;

const LEFT_CUTOFF1 = 675;
const RIGHT_CUTOFF1 = 805;
const TOP_CUTOFF1 = 225;
const BOTTOM_CUTOFF1 = 270;

//we back

const LEFT_CUTOFF2 = 540;
const RIGHT_CUTOFF2 = 875;
const TOP_CUTOFF2 = 275;
const BOTTOM_CUTOFF2 = 335;

const LEFT_CUTOFF3 = 650;
const RIGHT_CUTOFF3 = 860;
const TOP_CUTOFF3 = 460;
const BOTTOM_CUTOFF3 = 520;


const LEFT_CUTOFF4 = 540;
const RIGHT_CUTOFF4 = 555;
const TOP_CUTOFF4 = 310;
const BOTTOM_CUTOFF4 = 380;


const LEFT_CUTOFF5 = 610;
const RIGHT_CUTOFF5 = 540 +160;
const TOP_CUTOFF5 = 310;
const BOTTOM_CUTOFF5 = 375;


const LEFT_CUTOFF6 = 545 +160;
const RIGHT_CUTOFF6 = 645 +160;
const TOP_CUTOFF6 = 275;
const BOTTOM_CUTOFF6 = 352;


const LEFT_CUTOFF7 = 470 +160;
const RIGHT_CUTOFF7 = 641 +160;
const TOP_CUTOFF7 = 385;
const BOTTOM_CUTOFF7 = 450;


const LEFT_CUTOFF8 = 452 +160;
const RIGHT_CUTOFF8 = 640 +160;
const TOP_CUTOFF8 = 385;
const BOTTOM_CUTOFF8 = 450;


const LEFT_CUTOFF9 = 570 +160;
const RIGHT_CUTOFF9 = 645 +160;
const TOP_CUTOFF9 = 295;
const BOTTOM_CUTOFF9 = 388;

const LEFT_CUTOFF10 = 528 +160;
const RIGHT_CUTOFF10 = 640 +160;
const TOP_CUTOFF10 = 250;
const BOTTOM_CUTOFF10 = 300;


const LEFT_CUTOFF11 = 505 +160;
const RIGHT_CUTOFF11 = 665 +160;
const TOP_CUTOFF11 = 337;
const BOTTOM_CUTOFF11 = 370;


const LEFT_CUTOFF12 = 540 +160;
const RIGHT_CUTOFF12 = 660 +160;
const TOP_CUTOFF12 = 300;
const BOTTOM_CUTOFF12 = 390;


const LEFT_CUTOFF13 = 540 +160;
const RIGHT_CUTOFF13 = 660 +160;
const TOP_CUTOFF13 = 300;
const BOTTOM_CUTOFF13 = 390;

const LEFT_CUTOFF14 = 456 +160;
const RIGHT_CUTOFF14 = 630 +160;
const TOP_CUTOFF14 = 365;
const BOTTOM_CUTOFF14 = 495;


const LEFT_CUTOFF15 = 480 +160;
const RIGHT_CUTOFF15 = 640 +160;
const TOP_CUTOFF15 = 425;
const BOTTOM_CUTOFF15 = 500;

//end of round 1

let startLookTime = Number.POSITIVE_INFINITY;
let lookDirection = null;
var i = 0;
var r = 0;
var t = 0;
//r2
var h = 1;
var audio = new Audio('NewHotStuff.mp3');


function timeFunction() {
    audio.play();
    setTimeout(function(){ 
        i = 1;
        nextImage();
    
    }, 10000);
   }

function changeimg(){
    setTimeout(function(){ 
        if( r < 14){
        r++; 
        }
        if(r ==14){
            h--;
        }
        if(r <= 14 && h ==0){
            h++;
            round2();
        }
        nextImage();
    }, 1000);
   }



   function round2() {
    setTimeout(function(){ 
        r++;
        nextImage();
    }, 7000);
   }

   function r2change(){
    setTimeout(function(){ 
        r++;
        nextImage();
    }, 1000);
   }

function nextImage(){
    if(r<14){
    changeimg();
    }

    if( r > 14){
        r2change();
    }
    var x = document.getElementById("image1");
    var x1 = document.getElementById("image2");
    var x2 = document.getElementById("image3");
    var x3 = document.getElementById("image4");
    var x4 = document.getElementById("image5");
    var x5 = document.getElementById("image6");
    var x6 = document.getElementById("image7");
    var x7 = document.getElementById("image8");
    var x8 = document.getElementById("image9");
    var x9 = document.getElementById("image10");
    var x10 = document.getElementById("image11");    
    var x11 = document.getElementById("image12");    
    var x12 = document.getElementById("image13");    
    var x13 = document.getElementById("image14");    
    var x14 = document.getElementById("image15");    
    var x15 = document.getElementById("image16");
    var x16 = document.getElementById("image17");
    var x17 = document.getElementById("image18");
    var x18 = document.getElementById("image19");   
    var x19 = document.getElementById("image20");   
    var x20 = document.getElementById("image21");    
    var x21 = document.getElementById("image22");
    var x22 = document.getElementById("image23"); 
    var x23 = document.getElementById("image24");           
    var x24 = document.getElementById("image25");    
    var x25 = document.getElementById("image26");    
    var x26 = document.getElementById("image27");
    var x27 = document.getElementById("image28");        
    var x28 = document.getElementById("image29");    
    var x29 = document.getElementById("image30");    

    if(r == 1){
        i++;
        if(document.getElementById("img1").src.match("farquad.png")){
         x.style.display = "none";
         x1.style.display = "block";
        }
}

if(r == 16){
    i++;
     x15.style.display = "none";
     x16.style.display = "block";
    
}

if(r == 2){
    i++;
    if(document.getElementById("img2").src.match("kermit.jpg")){
     x1.style.display = "none";
     x2.style.display = "block";
    }
}
if(r == 17){
    i++;
     x16.style.display = "none";
     x17.style.display = "block";
    
}

if(r == 18){
    i++;
     x17.style.display = "none";
     x18.style.display = "block";
}

if(r == 19){
    i++;
     x18.style.display = "none";
     x19.style.display = "block";
}

if(r == 20){
    i++;
     x19.style.display = "none";
     x20.style.display = "block";
}

if(r == 21){
    i++;
     x20.style.display = "none";
     x21.style.display = "block";
}

if(r == 22){
    i++;
     x21.style.display = "none";
     x22.style.display = "block";
}

if(r == 23){
    i++;
     x22.style.display = "none";
     x23.style.display = "block";
}

if(r == 24){
    i++;
     x23.style.display = "none";
     x24.style.display = "block";
}

if(r == 25){
    i++;
     x24.style.display = "none";
     x25.style.display = "block";
}

if(r == 26){
    i++;
     x25.style.display = "none";
     x26.style.display = "block";
}

if(r == 27){
    i++;
     x26.style.display = "none";
     x27.style.display = "block";
}

if(r == 28){
    i++;
     x27.style.display = "none";
     x28.style.display = "block";
}

if(r == 29){
    i++;
     x28.style.display = "none";
     x29.style.display = "block";
}

if(r == 3){
    i++;
    if(document.getElementById("img3").src.match("mine.jpg")){
     x2.style.display = "none";
     x3.style.display = "block";
    }
}
if(r == 4){
    i++;
    if(document.getElementById("img4").src.match("buffShrek.jpg")){
     x3.style.display = "none";
     x4.style.display = "block";
    }
}
if(r == 5){
    i++;
    if(document.getElementById("img5").src.match("burrito.png")){
     x4.style.display = "none";
     x5.style.display = "block";
    }
}
if(r == 6){
    i++;
    if(document.getElementById("img6").src.match("burger.png")){
     x5.style.display = "none";
     x6.style.display = "block";
    }
}
if(r == 7){
    i++;
    if(document.getElementById("img7").src.match("doof.png")){
     x6.style.display = "none";
     x7.style.display = "block";
    }
}
if(r == 8){
    i++;
    if(document.getElementById("img8").src.match("ender.jpg")){
     x7.style.display = "none";
     x8.style.display = "block";
    }
}
if(r == 9){
    i++;
    if(document.getElementById("img9").src.match("kfc.jpg")){
     x8.style.display = "none";
     x9.style.display = "block";
    }
}
if(r == 10){
    i++;
    if(document.getElementById("img10").src.match("king.jpg")){
     x9.style.display = "none";
     x10.style.display = "block";
    }
}
if(r == 11){
    i++;
    if(document.getElementById("img11").src.match("nugget.jpg")){
     x10.style.display = "none";
     x11.style.display = "block";
    }
}
if(r == 12){
    i++;
    if(document.getElementById("img12").src.match("pac.png")){
     x11.style.display = "none";
     x12.style.display = "block";
    }
}

if(r == 13){
    i++;
    if(document.getElementById("img13").src.match("perry.jpg")){
     x12.style.display = "none";
     x13.style.display = "block";
    }
}
if(r == 14){
    i++;
    if(document.getElementById("img14").src.match("ricardo.jpg")){
     x13.style.display = "none";
     x14.style.display = "block";
    }
}

if(r == 15){
    i++;
    if(document.getElementById("img15").src.match("tenor.gif")){
     x14.style.display = "none";
     x15.style.display = "block";
    }
}


}

webgazer
  .setGazeListener((data, timestamp) => {
    if(data == null ){
        return;
    }
    if(i ==1){
        console.log(data, timestamp);

        /*
        daya y < topcutoff is top of screen 
        saying if it is within the boundaries and within the top of the screen

        this will handle the top boundary
    && data.y > TOP_CUTOFF
        data y > bottom cutoff is saying if it is in the bottom of the screen
        */
    if(data.x > LEFT_CUTOFF && data.x < RIGHT_CUTOFF &&  data.y < BOTTOM_CUTOFF && data.y > TOP_CUTOFF && lookDirection != 'Inside'){

    
        document.getElementById("F3").submit();
        startLookTime = timestamp; 
        lookDirection = 'Inside';
    }
    

   if(data.x > LEFT_CUTOFF && data.x < RIGHT_CUTOFF && data.y < BOTTOM_CUTOFF && data.y > TOP_CUTOFF && lookDirection != 'Inside'){
        startLookTime = timestamp; 
         lookDirection = 'Inside';
        }else{
       lookDirection = null;
   }
}

if(i ==2){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF1 && data.x < RIGHT_CUTOFF1 &&  data.y < BOTTOM_CUTOFF1 && data.y > TOP_CUTOFF1 && lookDirection != 'Inside'){

    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF1 && data.x < RIGHT_CUTOFF1 && data.y < BOTTOM_CUTOFF1 && data.y > TOP_CUTOFF1 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==3){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF2 && data.x < RIGHT_CUTOFF2 &&  data.y < BOTTOM_CUTOFF2 && data.y > TOP_CUTOFF2 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF2 && data.x < RIGHT_CUTOFF2 && data.y < BOTTOM_CUTOFF2 && data.y > TOP_CUTOFF2 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==4){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF3 && data.x < RIGHT_CUTOFF3 &&  data.y < BOTTOM_CUTOFF3 && data.y > TOP_CUTOFF3 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF3 && data.x < RIGHT_CUTOFF3 && data.y < BOTTOM_CUTOFF3 && data.y > TOP_CUTOFF3 && lookDirection != 'Inside'){
    startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}
if(i ==5){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF4 && data.x < RIGHT_CUTOFF4 &&  data.y < BOTTOM_CUTOFF4 && data.y > TOP_CUTOFF4 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF4 && data.x < RIGHT_CUTOFF4 && data.y < BOTTOM_CUTOFF4 && data.y > TOP_CUTOFF4 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==6){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF5 && data.x < RIGHT_CUTOFF5 &&  data.y < BOTTOM_CUTOFF5 && data.y > TOP_CUTOFF5 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF5 && data.x < RIGHT_CUTOFF5 && data.y < BOTTOM_CUTOFF5 && data.y > TOP_CUTOFF5 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==7){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF6 && data.x < RIGHT_CUTOFF6 &&  data.y < BOTTOM_CUTOFF6 && data.y > TOP_CUTOFF6 && lookDirection != 'Inside'){
     document.getElementById("F3").submit(); 
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF6 && data.x < RIGHT_CUTOFF6 && data.y < BOTTOM_CUTOFF6 && data.y > TOP_CUTOFF6 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==8){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF7 && data.x < RIGHT_CUTOFF7 &&  data.y < BOTTOM_CUTOFF7 && data.y > TOP_CUTOFF7 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF7 && data.x < RIGHT_CUTOFF7 && data.y < BOTTOM_CUTOFF7 && data.y > TOP_CUTOFF7 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==9){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF8 && data.x < RIGHT_CUTOFF8 &&  data.y < BOTTOM_CUTOFF8 && data.y > TOP_CUTOFF8 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF8 && data.x < RIGHT_CUTOFF8 && data.y < BOTTOM_CUTOFF8 && data.y > TOP_CUTOFF8 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==10){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF9 && data.x < RIGHT_CUTOFF9 &&  data.y < BOTTOM_CUTOFF9 && data.y > TOP_CUTOFF9 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF9 && data.x < RIGHT_CUTOFF9 && data.y < BOTTOM_CUTOFF9 && data.y > TOP_CUTOFF9 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==11){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF10 && data.x < RIGHT_CUTOFF10 &&  data.y < BOTTOM_CUTOFF10 && data.y > TOP_CUTOFF104 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF10 && data.x < RIGHT_CUTOFF10 && data.y < BOTTOM_CUTOFF10 && data.y > TOP_CUTOFF10 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==12){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF11 && data.x < RIGHT_CUTOFF11 &&  data.y < BOTTOM_CUTOFF11 && data.y > TOP_CUTOFF11 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF11 && data.x < RIGHT_CUTOFF11 && data.y < BOTTOM_CUTOFF11 && data.y > TOP_CUTOFF11 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==13){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF12 && data.x < RIGHT_CUTOFF12 &&  data.y < BOTTOM_CUTOFF12 && data.y > TOP_CUTOFF12 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF12 && data.x < RIGHT_CUTOFF12 && data.y < BOTTOM_CUTOFF12 && data.y > TOP_CUTOFF12 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==14){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF13 && data.x < RIGHT_CUTOFF13 &&  data.y < BOTTOM_CUTOFF13 && data.y > TOP_CUTOFF13 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF13 && data.x < RIGHT_CUTOFF13 && data.y < BOTTOM_CUTOFF13 && data.y > TOP_CUTOFF13 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==15){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF14 && data.x < RIGHT_CUTOFF14 &&  data.y < BOTTOM_CUTOFF14 && data.y > TOP_CUTOFF14 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF14 && data.x < RIGHT_CUTOFF14 && data.y < BOTTOM_CUTOFF14 && data.y > TOP_CUTOFF14 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==16){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF15 && data.x < RIGHT_CUTOFF15 &&  data.y < BOTTOM_CUTOFF15 && data.y > TOP_CUTOFF15 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF15 && data.x < RIGHT_CUTOFF15 && data.y < BOTTOM_CUTOFF15 && data.y > TOP_CUTOFF15 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==17){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF && data.x < RIGHT_CUTOFF &&  data.y < BOTTOM_CUTOFF && data.y > TOP_CUTOFF && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF && data.x < RIGHT_CUTOFF && data.y < BOTTOM_CUTOFF && data.y > TOP_CUTOFF && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==18){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF1 && data.x < RIGHT_CUTOFF1 &&  data.y < BOTTOM_CUTOFF1 && data.y > TOP_CUTOFF1 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF1 && data.x < RIGHT_CUTOFF1 && data.y < BOTTOM_CUTOFF1 && data.y > TOP_CUTOFF1 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==19){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF2 && data.x < RIGHT_CUTOFF2 &&  data.y < BOTTOM_CUTOFF28 && data.y > TOP_CUTOFF2 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF2 && data.x < RIGHT_CUTOFF2 && data.y < BOTTOM_CUTOFF2 && data.y > TOP_CUTOFF2 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}
if(i ==20){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF3 && data.x < RIGHT_CUTOFF3 &&  data.y < BOTTOM_CUTOFF3 && data.y > TOP_CUTOFF3 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF3 && data.x < RIGHT_CUTOFF3 && data.y < BOTTOM_CUTOFF3 && data.y > TOP_CUTOFF3 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==21){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF4 && data.x < RIGHT_CUTOFF4 &&  data.y < BOTTOM_CUTOFF4 && data.y > TOP_CUTOFF4 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF4 && data.x < RIGHT_CUTOFF4 && data.y < BOTTOM_CUTOFF4 && data.y > TOP_CUTOFF4 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==22){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF5 && data.x < RIGHT_CUTOFF5 &&  data.y < BOTTOM_CUTOFF5 && data.y > TOP_CUTOFF5 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF5 && data.x < RIGHT_CUTOFF5 && data.y < BOTTOM_CUTOFF5 && data.y > TOP_CUTOFF5 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==23){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF6 && data.x < RIGHT_CUTOFF6 &&  data.y < BOTTOM_CUTOFF6 && data.y > TOP_CUTOFF6 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF6 && data.x < RIGHT_CUTOFF6 && data.y < BOTTOM_CUTOFF6 && data.y > TOP_CUTOFF6 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==24){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF7 && data.x < RIGHT_CUTOFF7 &&  data.y < BOTTOM_CUTOFF7 && data.y > TOP_CUTOFF7 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF7 && data.x < RIGHT_CUTOFF7 && data.y < BOTTOM_CUTOFF7 && data.y > TOP_CUTOFF7 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==25){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF8 && data.x < RIGHT_CUTOFF8 &&  data.y < BOTTOM_CUTOFF8 && data.y > TOP_CUTOFF8 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF8 && data.x < RIGHT_CUTOFF8 && data.y < BOTTOM_CUTOFF8 && data.y > TOP_CUTOFF8 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==26){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF9 && data.x < RIGHT_CUTOFF9 &&  data.y < BOTTOM_CUTOFF9 && data.y > TOP_CUTOFF9 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF9 && data.x < RIGHT_CUTOFF9 && data.y < BOTTOM_CUTOFF9 && data.y > TOP_CUTOFF9 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==27){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF10 && data.x < RIGHT_CUTOFF10 &&  data.y < BOTTOM_CUTOFF10 && data.y > TOP_CUTOFF10 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF10 && data.x < RIGHT_CUTOFF10 && data.y < BOTTOM_CUTOFF10 && data.y > TOP_CUTOFF10 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==28){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF11 && data.x < RIGHT_CUTOFF11 &&  data.y < BOTTOM_CUTOFF11 && data.y > TOP_CUTOFF11 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF11 && data.x < RIGHT_CUTOFF11 && data.y < BOTTOM_CUTOFF11 && data.y > TOP_CUTOFF11 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==29){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF12 && data.x < RIGHT_CUTOFF12 &&  data.y < BOTTOM_CUTOFF12 && data.y > TOP_CUTOFF12 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF12 && data.x < RIGHT_CUTOFF12 && data.y < BOTTOM_CUTOFF12 && data.y > TOP_CUTOFF12 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==30){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF13 && data.x < RIGHT_CUTOFF13 &&  data.y < BOTTOM_CUTOFF13 && data.y > TOP_CUTOFF13 && lookDirection != 'Inside'){
     document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF13 && data.x < RIGHT_CUTOFF13 && data.y < BOTTOM_CUTOFF13 && data.y > TOP_CUTOFF13 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==31){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFF
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF14 && data.x < RIGHT_CUTOFF14 &&  data.y < BOTTOM_CUTOFF14 && data.y > TOP_CUTOFF14 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF14 && data.x < RIGHT_CUTOFF14 && data.y < BOTTOM_CUTOFF14 && data.y > TOP_CUTOFF14 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

if(i ==32){
    console.log(data, timestamp);

    /*
    daya y < topcutoff is top of screen 
    saying if it is within the boundaries and within the top of the screen

    this will handle the top boundary
&& data.y > TOP_CUTOFFa
    data y > bottom cutoff is saying if it is in the bottom of the screen
    */
if(data.x > LEFT_CUTOFF15 && data.x < RIGHT_CUTOFF15 &&  data.y < BOTTOM_CUTOFF15 && data.y > TOP_CUTOFF15 && lookDirection != 'Inside'){
    document.getElementById("F3").submit();
    startLookTime = timestamp; 
    lookDirection = 'Inside';
}


if(data.x > LEFT_CUTOFF15 && data.x < RIGHT_CUTOFF15 && data.y < BOTTOM_CUTOFF15 && data.y > TOP_CUTOFF15 && lookDirection != 'Inside'){
     startLookTime = timestamp; 
     lookDirection = 'Inside';
    }else{
   lookDirection = null;
}
}

   if (startLookTime + LOOK_DELAY < timestamp){
}
})
.begin()
