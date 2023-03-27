function startmenutoggle() {
    const start = document.getElementById('startmenu');
    start.classList.toggle('startshow');
}
function quicksettingstoggle() {
    const quick = document.getElementById('quicksettings');
    quick.classList.toggle('quicksettingsshow');
}
function winatglancetoggle() {
    const winatglance = document.getElementById('winatglance');
    winatglance.classList.toggle('quicksettingsshow');
}
function calendertoggle() {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('quicksettingsshow');
}
function edgetoggle() {
    const edge = document.getElementById('edge');
    edge.classList.toggle('windowshow');
}
function edgeminimizetoggle() {
    const edge = document.getElementById('edge');
    const close = document.getElementById('edgeclose')
    edge.classList.toggle('minimize');
    close.classList.add('closebtn-minimize');
    document.getElementById('edgemini').style.display = 'block';
    document.getElementById('edgemaxi').style.display = 'none';
}
function edgemaximizetoggle() {
    const edge = document.getElementById('edge');
    const close = document.getElementById('edgeclose')
    edge.classList.toggle('minimize');
    close.classList.remove('closebtn-minimize');
    document.getElementById('edgemini').style.display = 'none';
    document.getElementById('edgemaxi').style.display = 'block';
}
// function explorertoggle() {
//     const explorer = document.getElementById('explorer');
//     explorer.classList.toggle('windowshow');
// }
function shohidefolderlist(){
    document.getElementById('folderslist1').classList.toggle('hidefolder');
    document.getElementById('folderslist2').classList.toggle('hidefolder');
    document.getElementById('folderslist3').classList.toggle('hidefolder');
    document.getElementById('folderslist4').classList.toggle('hidefolder');
    document.getElementById('folderslist5').classList.toggle('hidefolder');
    document.getElementById('folderslist6').classList.toggle('hidefolder');
    document.getElementById('folderslist7').classList.toggle('hidefolder');
    document.getElementById('downsidelisticons').classList.toggle('hidefolder');
    document.getElementById('rightsidelisticons').classList.toggle('rightsidelisticonshow');
    
}
// function explorerminimizetoggle(){
//     document.getElementById('explorer').style.height = '50vh';
//     document.getElementById('explorermaincont').style.height = '50vh'
// }
function settingstoggle() {
    const settings = document.getElementById('settings');
    settings.classList.toggle('windowshow');
}
function photoshoptoggle() {
    const photoshop = document.getElementById('photoshop');
    photoshop.classList.toggle('windowshow');
}
function photoshopminimizetoggle() {
    const photoshop = document.getElementById('photoshop');
    const close = document.getElementById('photoshopclose');
    photoshop.classList.toggle('minimize');
    close.classList.add('closebtn-minimize');
    document.getElementById('photoshopmini').style.display = 'block';
    document.getElementById('photoshopmaxi').style.display = 'none';
}
function photoshopmaximizetoggle() {
    const photoshop = document.getElementById('photoshop');
    const close = document.getElementById('photoshopclose');
    photoshop.classList.toggle('minimize');
    close.classList.remove('closebtn-minimize');
    document.getElementById('photoshopmini').style.display = 'none';
    document.getElementById('photoshopmaxi').style.display = 'block';
}
function ylighttoggle() {
    const ylight = document.getElementById('ylight');
    ylight.classList.toggle('windowshow');
}
function ylightminimizetoggle() {
    const ylight = document.getElementById('ylight');
    const close = document.getElementById('ylightclose');
    ylight.classList.toggle('minimize');
    close.classList.add('closebtn-minimize');
    document.getElementById('ylightmini').style.display = 'block';
    document.getElementById('ylightmaxi').style.display = 'none';
        
}
function ylightmaximizetoggle() {
    const ylight = document.getElementById('ylight');
    const close = document.getElementById('ylightclose');
    ylight.classList.toggle('minimize');
    close.classList.remove('closebtn-minimize');
    document.getElementById('ylightmini').style.display = 'none';
    document.getElementById('ylightmaxi').style.display = 'block';
}
function storetoggle() {
    const ylight = document.getElementById('microsoftstore');
    ylight.classList.toggle('windowshow');
}
function livewallpapertoggle() {
    const ylight = document.getElementById('livewallpaper');
    ylight.classList.toggle('windowshow');
}
function revillagetoggle() {
    const village = document.getElementById('revillage');
    village.classList.toggle('windowshow');
	document.getElementById('revillageframe').src = "https://kasim393.github.io/Resident-Evil-Village-UI-Clone/";
	
}
function phonedesktoptoggle() {
    const desktop = document.getElementById('desktop');
    const phone = document.getElementById('phone');
	desktop.style.display = "block";
	phone.style.display = "none";
}
function controlbtntoggle() {
	const btn1 = document.getElementById('cbtn1');
	btn1.classList.toggle('controlbtnclk-off');
    // Wifi Status
    const WifiStatus = document.getElementById('wifistatus')
    if (WifiStatus.innerHTML === 'Connected') {
        WifiStatus.innerHTML = "Wifi is Off";
    } else {
        WifiStatus.innerHTML = "Connected";
    }
    // Wifi SSID 
    const Wifissid = document.getElementById('wifissid')
    if (Wifissid.innerHTML === 'Xstream Fiber') {
        Wifissid.innerHTML = "Not Connected";
    } else {
        Wifissid.innerHTML = "Xstream Fiber";
    }
}
function controlbtn2toggle() {
	const btn2 = document.getElementById('cbtn2');
	btn2.classList.toggle('controlbtnclk');
    // Bluetooth Status 
    const Bluestatus = document.getElementById('bluestatus')
    if (Bluestatus.innerHTML === 'Turned Off') {
        Bluestatus.innerHTML = "Turned On"
    } else {
        Bluestatus.innerHTML = "Turned Off"
    }
}
function controlbtn3toggle() {
	const btn3 = document.getElementById('cbtn3');
	btn3.classList.toggle('controlbtnclk');

}

batStatus();

const cs = document.getElementById("charge-status");
const csa = document.getElementById("charge-status-ani");
const cp = document.getElementById('charge-path');

function batStatus(){

	navigator.getBattery()
		.then(function(battery){

		const status = document.getElementById("status-info");
		const chargePath = document.getElementById('charge-path');

		let batLevel = battery.level * 100,

			// something to do with the height of the battery? i think?
			batPercent = battery.level * 281;

		//set battery status color
		batColors();

		// full charge width = 281
		cs.setAttribute('data-full', batPercent );
		csa.setAttribute('to', batPercent);
		cs.setAttribute('width', batPercent);


		battery.charging ? chargePath.classList.toggle('hidden') : '';

		// show hide the charging indicator
		updateCharge();

		function updateCharge(){

			battery.charging ? cp.classList.remove('hidden') : cp.classList.add('hidden');

		}

		function levelChange(){

			cs.setAttribute('width', batPercent);

			cs.classList.add('bat-change');

			setTimeout(function(){
				cs.classList.remove('bat-change');
			},300);

		}

		function batColors() {

			switch( true ) {
				case (batPercent <= 56):
					cs.setAttribute('fill', '#c0392b');
					break;

				case (batPercent  >= 56 && batPercent <= 125):
					cs.setAttribute('fill', '#f39c12');
					break;

				case (batPercent > 125):
					cs.setAttribute('fill', '#2ecc71');
			}
		}

		battery.addEventListener('chargingchange', updateCharge);
		//battery.addEventListener('levelchange', levelChange);


	}
);
}



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



var d=new Date,month=new Array;month[0]="January",month[1]="February",month[2]="March",month[3]="April",month[4]="May",month[5]="June",month[6]="July",month[7]="August",month[8]="September",month[9]="October",month[10]="November",month[11]="December";var month_name=month[d.getMonth()],day_of_month=d.getDate(),current_year=d.getFullYear(),dayOfMonthElement=document.getElementById("current_day"),currentMonthElement=document.getElementById("current_month"),currentYearElement=document.getElementById("current_year");!function(){currentMonthElement.innerHTML=month_name,dayOfMonthElement.innerHTML=day_of_month,currentYearElement.innerHTML=current_year}();



function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}


function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
  // ? compute what is the mouse position relative to the container element (scope)
  let {
    left: scopeOffsetX,
    top: scopeOffsetY,
  } = scope.getBoundingClientRect();
  
  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
 
  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  // ? check if the element will go out of bounds
  const outOfBoundsOnX =
    scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY =
    scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  // ? normalize on X
  if (outOfBoundsOnX) {
    normalizedX =
      scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    normalizedY =
      scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }

  return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.classList.remove("visible");

  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});

scope.addEventListener("click", (e) => {
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});

// Lively Wallpaper Engine 

function wallpaper1() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Boat-Water-Lilies_pE7cDOtX8.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909319591';
}
function wallpaper2() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Comfy-Rain__J4Linnfm.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909201162';
}
function wallpaper3() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Cyberpunk-Apartment_5fdTjJplH.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909344997';
}
function wallpaper4() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/King-Wash_zjBLHuGt-.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909240938';
}
function wallpaper5() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Lofi-Vending-Machines_5G2nuwKB1.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909338361';
}
function wallpaper6() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Snowfall-in-Forest_cXTxA9NVM.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662908766139';
}
function wallpaper7() {
    document.getElementById("mainwallpaper").src = 'https://ik.imagekit.io/fth7wfgzc/Townscaper_eiXCmb4MJ.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662909343174';
}



// mouse over state - Wallpaper engine 

function showbtn1() {
    document.getElementById("wallbtn1").style.display = "block";
}
function hidebtn1() {
    document.getElementById("wallbtn1").style.display = "none";
}
function showbtn2() {
    document.getElementById("wallbtn2").style.display = "block";
}
function hidebtn2() {
    document.getElementById("wallbtn2").style.display = "none";
}
function showbtn3() {
    document.getElementById("wallbtn3").style.display = "block";
}
function hidebtn3() {
    document.getElementById("wallbtn3").style.display = "none";
}
function showbtn4() {
    document.getElementById("wallbtn4").style.display = "block";
}
function hidebtn4() {
    document.getElementById("wallbtn4").style.display = "none";
}
function showbtn5() {
    document.getElementById("wallbtn5").style.display = "block";
}
function hidebtn5() {
    document.getElementById("wallbtn5").style.display = "none";
}
function showbtn6() {
    document.getElementById("wallbtn6").style.display = "block";
}
function hidebtn6() {
    document.getElementById("wallbtn6").style.display = "none";
}
function showbtn7() {
    document.getElementById("wallbtn7").style.display = "block";
}
function hidebtn7() {
    document.getElementById("wallbtn7").style.display = "none";
}



// preloader

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

// Align Taskbar Left side 
// function Leftsidetaskbar() {
//     document.getElementById('taskbar').style.justifyContent = 'Left';
//     document.getElementById('startmenu').style.marginLeft = '17px';
// }

// Align Taskbar Center 
// function Centertaskbar() {
//     document.getElementById('taskbar').style.justifyContent = 'center';
//     document.getElementById('startmenu').style.marginLeft = 'auto';
// }



let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 30;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);