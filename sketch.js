let bird;
let mic;
let vol;
let soundClassifier;
let resultP;
//results paragraph
function preload() {
  bird = loadSound('Canary01.mp3');
  //options variable
  let options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options)
  //name of the model, pass the options into the classifier as the 2nd argument
}

function setup() {
  createCanvas(400, 400);
  //callback
  resultP = createP('waiting...')
  resultP.style('font-size', '32pt')
  soundClassifier.classify(gotResults);
  //telling the sound classifier to classify using the mic

}

function gotResults(error, results) {
  //ml5 callback requires 2 function
  if (error){   
    //run this function based on a confidence level
    console.log('somethings wrong');
  console.error(error);
}
resultP.html(`${results[0].label} : ${results[0].confidence}`);
//turn these results into a string with a string literal
}
