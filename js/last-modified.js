const lastmod = document.querySelector('#lastmodified')
lastmod.textContent = `Last Modified: ${document.lastModified}`;


/*HAM BUTTON*/ 

function toogleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toogleMenu

//date now
// select the elements to manipulate (output to)
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;





//-----HIDDEN MESSAGE------------------
let month = currentTime.getMonth();
let date = `${month}/${day}/${year}`;
let time = `${currentTime.getMonth()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

let dateTime = `${date}${time}`;

const hidden_date = document.querySelector("[name='date']");
if(hidden_date){
    hidden_date.value = dateTime;
}
