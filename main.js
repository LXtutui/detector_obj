var video="";
var Status="";
var canvas;
var detector_obj;
var objects=[];
var confidence;

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
    if(Status!=""){
        detector_obj.detect(video, dados_obtidos);
        for(var i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status: objetos detectados"
            document.getElementById("num").innerHTML="quantidade de objetos detectados: "+ objects.length;
            fill("purple");
            confidence=floor(objects[i].confidence*100);
            text(objects[i].label+" "+confidence+"%", objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("purple");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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

function dados_obtidos(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        objects=results;
    }

}