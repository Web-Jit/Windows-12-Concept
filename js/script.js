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