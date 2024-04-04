

const currentDate = new Date();

console.log(currentDate);


const createDate = new Date(2024,0,1,0,0,1);
console.log(createDate);


const year = currentDate.getFullYear();
console.log("year :"+year);

const second = currentDate.getSeconds();
console.log("Seconds"+second);

const month = currentDate.getMonth();
console.log("Months "+month);

const day = currentDate.getDay();
console.log("Day "+day);

const hours = currentDate.getHours();
console.log("hours "+hours);

const millisecond = currentDate.getMilliseconds();
console.log("milliseconds "+millisecond);

const minutes = currentDate.getMinutes();
console.log("minutes "+minutes);


// Add one day to the current date
currentDate.setDate(currentDate.getDate() + 1);

// Subtract one month from the current date
currentDate.setMonth(currentDate.getMonth() - 1);

// Compare two dates
const date1 = new Date(2022, 0, 1);
const date2 = new Date(2022, 1, 1);
if (date1 < date2) {
    console.log("date1 is earlier than date2");
}


const dateString = currentDate.toDateString();
console.log("toDateString : "+dateString);

const timeString = currentDate.toTimeString();
console.log("toDateString : "+timeString);

const localDateString = currentDate.toTimeString();
console.log("toDateString : "+localDateString);

const localTimeString = currentDate.toTimeString();
console.log("toDateString : "+localTimeString);