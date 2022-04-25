function startmenutoggle() {
    const startmenu = document.getElementById('startmenu');
    startmenu.classList.toggle('taskshow');
}


function volumehubtoggle() {
    const volume = document.getElementById('volumehud');
    volume.classList.toggle('volumeshow');
}

function edgetoggle() {
    const edge = document.getElementById('edge');
    edge.classList.toggle('windowshow');
}

function pshoptoggle() {
    const shop = document.getElementById('photoshop');
    shop.classList.toggle('windowshow');
}
function vscodetoggle() {
    const code = document.getElementById('vscode');
    code.classList.toggle('windowshow');
}
function pctoggle() {
    const pc = document.getElementById('pc');
    pc.classList.toggle('windowshow');
}
function bbenchtoggle() {
    const bench = document.getElementById('bbench');
    bench.classList.toggle('windowshow');
}
function patataptoggle() {
    const patatap = document.getElementById('patatap');
    patatap.classList.toggle('windowshow');
}
function searchmenutoogle() {
    const searchmenu = document.getElementById('searchmenu');
    searchmenu.classList.toggle('taskshow');
}
function revillagetoggle() {
    const village = document.getElementById('revillage');
    village.classList.toggle('windowshow');
}
function revillagemainscreentoggle() {
    const game = document.getElementById('gamescreen');
    game.classList.toggle('windowshow');
}
function thispcminimize() {
    const thispc = document.getElementById('pc')  ;
    thispc.classList.toggle('minimize');
}
function patatapminimize() {
    const thispc = document.getElementById('patatap')  ;
    thispc.classList.toggle('minimize');
}
// 

              (function(d, s, id) {
                  if (d.getElementById(id)) {
                      if (window.__TOMORROW__) {
                          window.__TOMORROW__.renderWidget();
                      }
                      return;
                  }
                  const fjs = d.getElementsByTagName(s)[0];
                  const js = d.createElement(s);
                  js.id = id;
                  js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";
      
                  fjs.parentNode.insertBefore(js, fjs);
              })(document, 'script', 'tomorrow-sdk');

            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// Music Player 

const title = document.querySelector('.name');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const audio = document.querySelector('audio');

// List 
const songList = [
    {
        path: "/music/M-1.mp3",
        songName: "Imagine Dragons - Believer"
    }
]
 let song_Playing = false;

 function playSong(){
    song_Playing = true;
    audio.play();
    play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Pause</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zM320 96h16v320h-16z"/></svg>';
 }

 function pauseSong(){
    song_Playing = false;
    audio.pause();
    play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Play</title><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>';
 }

 play.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));


    function loadSong(songList){
        title.textContent = songList.songName;
        audio.src = songList.path;
    }

    let i = 0;
    loadSong(songList[i])


    $(document).ready(function(){
        $(document).bind('contextmenu', function(event){
            $("#contextmenu").css({"top": event.pageY + "px", "left": event.pageX + "px"}).show();
            event.preventDefault();
        });
        $(document).bind('click', function(){
            $("#contextmenu").hide();
        })
    });



