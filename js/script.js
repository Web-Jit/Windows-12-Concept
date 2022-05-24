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
function filexplorer() {
    const file = document.getElementById('files')  ;
    file.classList.toggle('windowshow');
}
function minecrafttoggle() {
    const file = document.getElementById('minecraft')  ;
    file.classList.toggle('windowshow');
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

    

//tabbed
function openTab(evt, tabname) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
  }
  function playError() {
    var sound = document.getElementById("audio2");
    sound.play();
  }
  document.getElementById("status1").play();
  // preloader
  $(window).on("load", function () {
    $("#status1").fadeIn().delay(5000).fadeOut();
    $("#status2").delay(5500).fadeIn().delay(1800).fadeOut();
    $("#img_logo").delay(8000).slideDown(2000); //8000
    $("#menu").delay(8400).fadeIn(2000); //11400
  
    $("#preloader").delay(8200).fadeOut("slow");
  });
  
  // continue
  // Get the modal
  var modal = document.getElementById("modal");
  var modal2 = document.getElementById("modal2");
  
  // Get the button that opens the modal
  var btn = document.getElementById("btn");
  
  // Get the <span> element that closes the modal
  var close = document.getElementById("close");
  var close1 = document.getElementById("close1");
  
  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "flex";
  };
  $(document).ready(function () {
    $(".btn").on("click", function () {
      modal2.style.display = "flex";
    });
  });
  // When the user clicks on <span> (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
    var sound = document.getElementById("audio");
    sound.play();
  };
  close1.onclick = function () {
    modal2.style.display = "none";
    var sound = document.getElementById("audio");
    sound.play();
  };
  
  // bonuses
  $(function () {
    $("#home1").on({
      mouseenter: function () {
        $("#img").attr("src", "./images/book.jpg");
      },
      mouseleave: function () {
        $("#img").attr("src", "./images/book.jpg");
      },
    });
    $("#home2").on({
      mouseenter: function () {
        $("#img").attr("src", "./images/extra.png");
      },
      mouseleave: function () {
        $("#img").attr("src", "./images/extra.png");
      },
    });
    $("#home3").on({
      mouseenter: function () {
        $("#img").attr("src", "./images/mv.jpg");
      },
      mouseleave: function () {
        $("#img").attr("src", "./images/mv.jpg");
      },
    });
  });
  
  // hover sound effect
  $("#nav-two li,#save")
    .each(function (i) {
      if (i != 0) {
        $("#beep-two")
          .clone()
          .attr("id", "beep-two" + i)
          .appendTo($(this).parent());
      }
      $(this).data("beeper", i);
    })
    .mouseenter(function () {
      $("#beep-two" + $(this).data("beeper"))[0].play();
    });
  
  $("#beep-two").attr("id", "beep-two0");
  
  // option
  $(function () {
    $("#control").on({
      mouseenter: function () {
        $("#con-table").show();
        $("#cam-table").hide();
        $("#game-table").hide();
        $("#display-table").hide();
        $("#audio-table").hide();
        $("#lan-table").hide();
      },
      mouseleave: function () {
        $("#con-table").show();
      },
    });
    $("#camera").on({
      mouseenter: function () {
        $("#cam-table").show();
        $("#con-table").hide();
        $("#game-table").hide();
        $("#display-table").hide();
        $("#audio-table").hide();
        $("#lan-table").hide();
      },
      mouseleave: function () {
        $("#cam-table").show();
      },
    });
    $("#game-setting").on({
      mouseenter: function () {
        $("#game-table").show();
        $("#con-table").hide();
        $("#cam-table").hide();
        $("#display-table").hide();
        $("#audio-table").hide();
        $("#lan-table").hide();
      },
      mouseleave: function () {
        $("#game-table").show();
      },
    });
    $("#display").on({
      mouseenter: function () {
        $("#display-table").show();
        $("#con-table").hide();
        $("#cam-table").hide();
        $("#game-table").hide();
        $("#audio-table").hide();
        $("#lan-table").hide();
      },
      mouseleave: function () {
        $("#display-table").show();
      },
    });
    $("#audio1").on({
      mouseenter: function () {
        $("#audio-table").show();
        $("#con-table").hide();
        $("#cam-table").hide();
        $("#game-table").hide();
        $("#display-table").hide();
        $("#lan-table").hide();
      },
      mouseleave: function () {
        $("#audio-table").show();
      },
    });
    $("#language").on({
      mouseenter: function () {
        $("#lan-table").show();
        $("#con-table").hide();
        $("#cam-table").hide();
        $("#game-table").hide();
        $("#display-table").hide();
        $("#audio-table").hide();
      },
      mouseleave: function () {
        $("#lan-table").show();
      },
    });
  });
  