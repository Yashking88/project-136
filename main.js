status = "";

function setup()
{
    canvas = createCanvas(380, 380);
    canavs.center();
    video = createCapture(VIDEO);
    video.size(3580, 380);
    video.hide();
}

function Start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
}

function modelLoaded()
{
    onsole.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 640, 420);
}