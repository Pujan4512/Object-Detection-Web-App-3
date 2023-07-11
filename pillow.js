objects = [];
status = "";

function preload(){
    img = loadImg("Img_1.jpg");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    status = true;
    object_Detector.detect(img, gotResults);
}

function gotResults(results){
    console.log(results);

    objects = results;
}

function draw(){
    image(img, 0, 0, 380, 380);

    if(status != ""){
        for(i=0;i<objects.length;i++){
            percent = floor(objects[i].confidence * 100 + "%");
            console.log(percent);
            text(objects[i].label + " " + percent, objects[i].x+15, objects[i].y+15);
            
            stroke("#FF0000");
            fill("#FF0000");
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}