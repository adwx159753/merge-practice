let topicsArray=[
    "【魔法少女】霞",
    "【情人節】【復課】靜流",
    "【公主】貪吃配可",
    "【夏日】【復課】咲戀",
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,3);