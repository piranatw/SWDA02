document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone-number");
    const age = document.getElementById("age");
    const classSelect = document.getElementById("classes");
    const timeSlot = document.getElementById("time-slot");
    const date = document.getElementById("date");
    const confirmation = document.getElementById("confirmation");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayString = `${year}-${month}-${day}`;
    date.min = todayString;

    form.addEventListener("submit", function (event) {

        const experience = document.querySelector(
            'input[name="experience"]:checked'
        );
        if (fullName.value.trim() === "") {
            alert("Please enter your full name.");
            fullName.focus();
            event.preventDefault();
            return;
        }

        if (phoneNumber.value.trim() === "") {
            alert("Please enter your phone number.");
            phoneNumber.focus();
            event.preventDefault();
            return;
        }

        if (email.value.trim() === "") {
            alert("Please enter your email.");
            email.focus();
            event.preventDefault();
            return;
        }

         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            email.focus();
            event.preventDefault();
            return;
        }

        if (age.value.trim() === "") {
            alert("Please enter your age.");
            age.focus();
            event.preventDefault();
            return;
        }

        const ageNumber = Number(age.value);
        if (
            isNaN(ageNumber) ||
            ageNumber < 15 ||
            ageNumber > 100
        ) {
            alert("Please enter an age between 15 and 100.");
            age.focus();
            event.preventDefault();
            return;
        }

        if (classSelect.value === "") {
            alert("Please select an exercise class.");
            classSelect.focus();
            event.preventDefault();
            return;
        }

        if (date.value === "") {

            alert("Please select a class date.");
            date.focus();
            event.preventDefault();
            return;
        }

        if (date.value < todayString) {
            alert("Please don't select past date");
            date.focus();
            event.preventDefault();
            return;
        }

        if (timeSlot.value === "") {
            alert("Please select a time slot.");
            timeSlot.focus();
            event.preventDefault();
            return;
        }

        if (!experience) {
            alert("Please select your experience level.");
            event.preventDefault();
            return;
        }

        if (!confirmation.checked) {
            alert("Please check the box to accept the consent");
            confirmation.focus();
            event.preventDefault();
            return;
        }
        alert("Booking information submitted successfully!");
    })
})