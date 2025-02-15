//BANNER, DAY OF MEETING
const bannerMessage = (day)=>{
	const meet = document.querySelector(".meet");
	const banner = document.createElement("h3");
	banner.innerText = `Come join us for the chamber meet and greet ${day} at 7:00 p.m.`
	meet.appendChild(banner)
}

const dayName = new Date();
switch (dayName.getDay()){
	case 1:
		bannerMessage("Wednesday")
		break;
	case 2:
		bannerMessage("Wednesday") 
		break;
}
//---------END OF BANNER-----------------------------------------

//---------VISITS-------------------------------------------------------------


/*
const visits = document.querySelector(".visits");


const FACTOR = 1000 * 60 * 60 * 24;

last_v = (window.localStorage.getItem('last_visit') ) ? new Date().getTime() : window.localStorage.getItem('last_visit');
new_v = new Date().getTime();

let daysBetween = Math.round((new_v - last_v) / FACTOR)

days_message = (window.localStorage.getItem('last_visit') ) ? ', Welcome by First Time!' : ', Last Visited: ' + daysBetween + ' day(s) ago.';

visits.textContent = visits.textContent = 'Num Visits: ' + window.localStorage.getItem('visits') + days_message;

window.localStorage.setItem('last_visit', new_v);*/
