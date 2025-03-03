
function getCurrentDate() {
    const today=new Date();

    const daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthsOfYear=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"];

    const dayOfWeek=daysOfWeek[today.getDay()]; 
    const dayOfMonth=today.getDate(); 
    const month=monthsOfYear[today.getMonth()]; 
    const year=today.getFullYear(); 

    
    return `${dayOfWeek}, ${month} ${dayOfMonth} ${year}`;
}


const currentDayElement=document.getElementById("current-day");
const currentDateElement=document.getElementById("current-date");


if (currentDayElement&&currentDateElement) {
    const currentDateString=getCurrentDate();
    const [day, date]=currentDateString.split(", ");
    currentDayElement.innerText=day; 
    currentDateElement.innerText=date; 
}
