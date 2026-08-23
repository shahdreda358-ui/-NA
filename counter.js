const startDate = new Date("2021-03-14T00:00:00");


function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();

    let months = now.getMonth() - startDate.getMonth();

    let days = now.getDate() - startDate.getDate();

    let hours = now.getHours() - startDate.getHours();

    let minutes = now.getMinutes() - startDate.getMinutes();

    let seconds = now.getSeconds() - startDate.getSeconds();


    // Seconds
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }


    // Minutes
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }


    // Hours
    if (hours < 0) {
        hours += 24;
        days--;
    }


    // Days
    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }


    // Months
    if (months < 0) {
        months += 12;
        years--;
    }


    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;
}


// Run immediately
updateCounter();


// Update every second
setInterval(updateCounter, 1000); 
