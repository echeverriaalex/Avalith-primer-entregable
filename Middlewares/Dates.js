const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December']

function myDate(req, res, next){
    req.date = new Date();
    next();
}

function Hour(req, res, next){
    let today = req.date;
    let hour = today.getHours();
    req.hour = hour < 10? "0" + hour : hour;
    next();
}

function Minutes(req, res, next){
    let today = req.date;
    let minutes = today.getMinutes();
    req.minutes = minutes < 10? "0" + minutes : minutes;
    next();
}

function Number(req, res, next){

    let today = req.date;
    req.number = today.getDate();
    next();
}

function Today(req, res, next){
    let today = req.date;
    req.today = today.getDay();
    next();
}

function Mounth(req, res, next){
    let today = req.date;
    req.mounth = today.getMonth();
    next();
}

function Year(req, res, next){
    let today = req.date;
    req.year = today.getFullYear();
    next();
}

function displayFullDate(req, res, next){
    console.log(`URL: ${req.url}`);
    console.log(`It's ${req.hour} : ${req.minutes} ${days[req.today]} ${req.number} ${months[req.mounth]} ${req.year}`);
    next();
}

let Dates = {

    myDate,
    Hour,
    Minutes,
    Number,
    Today,
    Mounth,
    Year,
    displayFullDate,
    days,
    months
}

module.exports = Dates;