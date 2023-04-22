function updateTime() {

    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let LosAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = LosAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    
// New York
let NewYorkElement = document.querySelector("#new-york");
let NewYorkDateElement = NewYorkElement.querySelector(".date");
let NewYorkTimeElement = NewYorkElement.querySelector(".time");
let NewYorkTime = moment().tz("America/New_York");

NewYorkDateElement.innerHTML = NewYorkTime.format("MMMM Do YYYY");
NewYorkTimeElement.innerHTML = NewYorkTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);