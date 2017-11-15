var canvas;

var playing = false;
var sound;
var button;

var mcnt = 0; // counter for button creation

var sounds = [];


var medias = [
  {
    "title": "alternative_bankruptcy(GetAwayWithIt)",
    "soundpath": "./media/sound/alternative_bankruptcy(GetAwayWithIt).wav",
    "imgpath": "./media/img/alternative_bankruptcy(getawaywithit)cover.png",
  },
  {
    "title": "gmf-demo-11-10-17",
    "soundpath": "./media/sound/gmf-demo-11-10-17.wav",
    "imgpath": "./media/img/gmf-demo-spectrocrop.png",
  },
  {
    "title": "dogs1(shy)",
    "soundpath": "./media/sound/Dog1(Shy).wav",
    "imgpath": "./media/img/dogs1(shy).png",
  },
]

function preload(){
  // load sound files into array
  var i = 0;
  for (media of medias){
    sounds[i] = loadSound(media.soundpath);
    i = i  + 1;
  }
  build_medias()
}


function setup() {
  console.log(sounds);
  soundFormats('mp3', 'ogg');

  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  //canvas = createCanvas(400, 600);
  //canvas.parent('container');
  //canvas.class("p5canvas");

  // build_medias()
}

function build_medias(){
  for (m of medias) {
    console.log('mcnt: ', mcnt);
    
    sound = sounds[mcnt];

    media_container = createElement('div')
      .class('medias')
      .parent('container');


    media_img = createImg(src=m.imgpath)
      .parent(media_container)
      .class('media_img');


    playing = createElement('div')
      .parent(media_container)
      .id('m'+mcnt)
      .class('playing');


    btn = createButton('play')
      .parent(media_container)
      .class('btn')
      .id(mcnt)
      .mousePressed(
          function(event){
            console.log(event)
            
            var id = event.srcElement.id
            var sound = sounds[id];

            console.log('id->', id);

            if (sound.isPlaying()) {
              sound.stop();
              document.getElementById('m'+id).style.backgroundColor = 'red';
              console.log('stopping sound: ', id);
            } else {
              document.getElementById('m'+id).style.backgroundColor = 'green';
              sound.play();      
              console.log('playing sound: ', id);
            }
          }
      )

    media_title = createElement('div', m.title)
      .parent(media_container)
      .class('media_title');

    mcnt = mcnt + 1;
  }
}

function draw() {
  
}
