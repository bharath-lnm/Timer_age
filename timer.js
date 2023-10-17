function displayAgeWithCountingTime() {
    const birthdate = new Date('04-23-2002'); // Your date of birth
    const timeOfBirthHours = 8; // Replace with the hours of your time of birth
    const timeOfBirthMinutes = 25; // Replace with the minutes of your time of birth
    const timeOfBirthSeconds = 0; // Replace with the seconds of your time of birth

    function updateAge() {
        const now = new Date();
        const ageInMilliseconds = now - birthdate;
        const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
        const ageMinutes = Math.floor(ageInSeconds / 60);
        const ageHours = Math.floor(ageMinutes / 60);

        // Calculate the days and months more accurately
        const ageDays = Math.floor(ageHours / 24);
        const ageMonths = Math.floor(ageDays / 30.44); // Average days in a month
        const ageYears = Math.floor(ageMonths / 12);

        document.getElementById('years').textContent = ageYears;
        document.getElementById('months').textContent = ageMonths % 12;
        document.getElementById('days').textContent = ageDays % 30;
        document.getElementById('hours').textContent = ageHours % 24;
        document.getElementById('minutes').textContent = ageMinutes % 60;
        document.getElementById('seconds').textContent = ageInSeconds % 60;
    }

    birthdate.setHours(timeOfBirthHours, timeOfBirthMinutes, timeOfBirthSeconds);
    updateAge(); // Initial display
    setInterval(updateAge, 1000); // Update every second
}

displayAgeWithCountingTime();





