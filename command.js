let birds = [];
let mic;
let vol;
let sound;
let soundClassifier;
let resultP;
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/lj9vmJWx/model.json';

//results paragraph
function preload() {

  for (var i = 0; i < 24; i++) {
    birds[i] = loadSound('sound' + i + '.mp3');
  //options variable
  let options = {
    probabilityThreshold: 0.97
  };
  soundClassifier = ml5.soundClassifier(soundModelURL, options)
  //name of the model, pass the options into the classifier as the 2nd argument
}
}

function setup() {
  createCanvas(400, 400);
  //callback
  textSize(20);
  text('Instructions: Play an Urban Sound', 0, 20);
  resultP = createP('listening...')
  resultP.style('font-size', '32pt')
  soundClassifier.classify(gotCommand);
  r = floor(random(0, birds.length));
  random(loadSound);
  noLoop();
}
  function gotCommand(error, results){
    if (error){
      console.error(error);
    }
    if (birds[19, 20, 21].isPlaying()) {
        results[0].label == false

    } else if (results[0].label == 'Sirens'){
      birds[21].play();
  
    } else if (results[0].label == 'Jackhammer'){
      birds[20].play();

    } else if (results[0].label == 'Horns'){
      birds[21].play();
    
    } else if (results[0].label == 'Engines'){
      birds[22].play();

    } else if (results[0].label == 'Birds'){
      results[0].label == false

    }
    resultP.html(`${results[0].label} : ${results[0].confidence}`);

    }
    
  
  
