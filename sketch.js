var canvas;

var playing = false;
var sound;
var button;

var sounds = [];


var medias = [
  {
    "title": "alternative_bankruptcy(GetAwayWithIt)",
    "soundpath": "./media/sound/alternative_bankruptcy(GetAwayWithIt).wav",
    "imgpath": "./media/img/alternative_bankruptcy(getawaywithit)cover.png",
  },
]

function preload(){
  // load sound files into array
  var i = 0;
  for (media of medias){
    sounds[i] = loadSound(media.soundpath);
    i = i  + 1;
  }

}

function setup() {
  console.log(sounds);
  soundFormats('mp3', 'ogg');

  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  //canvas = createCanvas(400, 600);
  //canvas.parent('container');
  //canvas.class("p5canvas");

  build_medias()
}

function build_medias(){
  var j = 0;
  for(media of medias){

    sound = sounds[j];
    media_container = createElement('div')
      .class('medias')
      .parent('container');


    media_img = createImg(src=media.imgpath)
      .parent(media_container)
      .class('media_img');

    playing = createElement('div')
      .parent(media_container)
      .id('m1')
      .class('playing');


    btn = createButton('play2')
      .parent(media_container)
      .class('btn')
      //.mousePressed(toggle(sound) );
      // .mousePressed(toggle2(j) );
      .mousePressed(
        function(j){
          for (s in sounds){
            // console.log(typeof(sounds[s]))
            // console.log(sounds[s])
            if (sounds[s].isPlaying() ) {
              sounds[s].stop();
              document.getElementById('m1').style.backgroundColor = 'red';
            } else {
              document.getElementById('m1').style.backgroundColor = 'green'
              sounds[s].play();
            }
          }
        }
      )

    media_title = createElement('div', media.title)
      .parent(media_container)
      .class('media_title');

    j = j + 1;
  }
}

function draw() {
}
