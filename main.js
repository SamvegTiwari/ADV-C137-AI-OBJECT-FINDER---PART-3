
Status1="";
Value="";
Objects=[];


function setup(){
canvas=createCanvas(500,500)
canvas.position(300,330)
video=createCapture(VIDEO);
video.hide();
}


function Stugart(){
    console.log("I'M SMART");
    //objectDetector=ml5.objectDetector('cocossd', model_loaded);
//document.getElementById("Statuss").innerHTML="Status:Detecting Objects";
//Value=document.getElementById("Input").value;
}


function model_loaded(){
    console.log("Model has loaded");
    Status1=true;
}

function got_results(error, results){
    if(error){
     console.error(error);
    }
    else{
        console.log(results);
        Objects=results;
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
   
}
