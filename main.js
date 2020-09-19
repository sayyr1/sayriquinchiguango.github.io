let daynames= [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let months= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
let d= newDate();
let dayName= daynames[d.getDay()];
let monthName= months[d.getMonth()];
let year= d.getFullYear();
let fullDate= dayName+", "+monthName+ " " +d.getDate()+", "+ year;
document.getElementById('date').textContent=fullDate;
