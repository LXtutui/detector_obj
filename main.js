var video="";
var Status="";
var canvas;
var detector_obj;
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function iniciar(){
    detector_obj=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status:detectando objetos";
}

function modelLoaded(){
    console.log("modelo carregado");
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}