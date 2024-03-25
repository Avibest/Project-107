function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = nl5.soundClassifier('https://teachablemachine.withgoogle.com/models/M53X3na19/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
    }
}