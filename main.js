function preload() {
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YSiVVfUpG/model.json",model_Loaded);
}
function model_Loaded() {
 console.log("model loaded");
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,got_Result);
}
function got_Result(error,results) {
 if (error) {
     console.log(error);
 }
 else {
     console.log(results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
     
 }
}