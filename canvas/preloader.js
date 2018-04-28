window.onload = start;

var preloader;

function start(){
  preloader = document.getElementById('preloader').getContext('2d');  // - getContext для Canvas-a активирует режим рисования
  //documentation - developer mozilla
  preloader.strokeStyle = 'rgba(100,255,100,0.75)';
  preloader.lineWidth = 7;

  //preloader.beginPath(); //начало новой фигруы
  //preloader.arc(200,200 , 50, 0, 0.02 * Math.PI);
  //preloader.stroke();

  //preloader.beginPath();
  //preloader.arc(200,200 , 50, 0 + 0.2, 0.02 * Math.PI + 0.2);
  //preloader.stroke();

  //2*Math.PI - полный круг
var begin = 0;

setInterval( function(){ drawFrame(begin); begin+=0.1;}, 50)

setTimeout( function(){hide()}, 3000);

function hide(){
  var canvas = document.getElementById('preloader');
  canvas.className = 'hide';
}


function drawFrame( begin ){
  preloader.clearRect(100,100,200,200);
  for(x = 0; x < 2 * Math.PI; x+=0.1){
    var i = x / 20 * Math.PI;
    preloader.strokeStyle = `rgba(100,255,100,${i})`;
    if(Math.random() < 0.1){
      preloader.lineWidth = 20 * i * Math.random();
    } else {
      preloader.lineWidth = 7 * i;
    }
    preloader.beginPath();
    preloader.arc(200,200 , 50, 0 + x + begin, 0.01 * Math.PI + x + begin);
    preloader.stroke();
  }
}

}
