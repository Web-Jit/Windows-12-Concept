function startmenutoggle() {
    const start = document.getElementById('startmenu');
    start.classList.toggle('startshow');
}
function quicksettingstoggle() {
    const quick = document.getElementById('quicksettings');
    quick.classList.toggle('quicksettingsshow');
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