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
function explorertoggle() {
    const explorer = document.getElementById('explorer');
    explorer.classList.toggle('windowshow');
}
function settingstoggle() {
    const settings = document.getElementById('settings');
    settings.classList.toggle('windowshow');
}
function photoshoptoggle() {
    const photoshop = document.getElementById('photoshop');
    photoshop.classList.toggle('windowshow');
}
function ylighttoggle() {
    const ylight = document.getElementById('ylight');
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
	btn1.classList.toggle('controlbtnclk');
}
function controlbtn2toggle() {
	const btn2 = document.getElementById('cbtn2');
	btn2.classList.toggle('controlbtnclk');

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

