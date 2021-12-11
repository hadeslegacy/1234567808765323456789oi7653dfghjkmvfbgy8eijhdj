//https://teachablemachine.withgoogle.com/models/jULVBR-yS/


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 91
});

camera = document.getElementById("camera");

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_image' src= '" + data_uri + "'>"
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jULVBR-yS/model.json ', model_loaded);

function model_loaded() {
    console.log("it is load")
}

prediction_1 = ""

function speak() {
    synth = window.speechSynthesis;
    speak_Data1 = "da first prediction iz" + prediction_1
    utterThis = new SpeechSynthesisUtterance(speak_Data1 + "yes lol happy face")
    synth.speak(utterThis);
}