var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function (event) {
    console.log(event);
    Content = event.result[0][0].transcript;
    if (Content == "Selfie.") {
        speak()
    }
}

var imgId

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
     
    setTimeout(function () {
        imgId = "self1"
        takeSelf()
        speakData = "Tirando sua selfie em 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    },5000);

    setTimeout(function () {
        imgId = "self2"
        takeSelf()
        speakData = "Tirando sua selfie em 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    },10000);

    setTimeout(function () {
        imgId = "self3"
        takeSelf()
    },15000);

};

function takeSelf() {
    Webcam.snap(function (data_uri) {
        if (imgId =="self1") {
            document.getElementById("result1").innerHTML ='<img id="selfie1" src="'+data_uri+'"/>';
        }

        if (imgId =="self2") {
            document.getElementById("result2").innerHTML ='<img id="selfie2" src="'+data_uri+'"/>';
        }

        if (imgId =="self3") {
            document.getElementById("result3").innerHTML ='<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}
