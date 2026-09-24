/* =====================================================
   MELOVIA
   EVENTS PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   COUNTDOWN FUNCTION
===================================================== */

function startCountdown(element, isHero) {

    const dateString = element.getAttribute("data-date");

    const targetDate = new Date(dateString).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = targetDate - now;


        /* Event has already happened */

        if (difference <= 0) {

            if (isHero) {

                element.querySelector(".c-days").textContent = "00";

                element.querySelector(".c-hours").textContent = "00";

                element.querySelector(".c-minutes").textContent = "00";

                element.querySelector(".c-seconds").textContent = "00";

            } else {

                element.querySelector(
                    ".mini-countdown"
                ).textContent = "Happening now";

            }

            return;
        }


        /* Calculate time */

        const days = Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


        const minutes = Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


        const seconds = Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


        /* Hero countdown */

        if (isHero) {

            element.querySelector(
                ".c-days"
            ).textContent =
                String(days).padStart(2, "0");


            element.querySelector(
                ".c-hours"
            ).textContent =
                String(hours).padStart(2, "0");


            element.querySelector(
                ".c-minutes"
            ).textContent =
                String(minutes).padStart(2, "0");


            element.querySelector(
                ".c-seconds"
            ).textContent =
                String(seconds).padStart(2, "0");

        }


        /* Small countdown */

        else {

            element.querySelector(
                ".mini-countdown"
            ).textContent =
                `${days}d ${hours}h ${minutes}m left`;

        }


        /* Update every second */

        setTimeout(updateCountdown, 1000);
    }


    updateCountdown();
}



/* =====================================================
   START HERO COUNTDOWN
===================================================== */

const heroEvent =
    document.querySelector(".hero-event");


if (heroEvent) {

    startCountdown(
        heroEvent,
        true
    );

}



/* =====================================================
   START EVENT COUNTDOWNS
===================================================== */

const eventRows =
    document.querySelectorAll(".event-row");


eventRows.forEach(function (row) {

    startCountdown(
        row,
        false
    );

});



/* =====================================================
   DAY / NIGHT MODE
===================================================== */

const themeButton =
    document.getElementById("theme-btn");


const themeIcon =
    document.getElementById("theme-icon");


const themeLabel =
    document.getElementById("theme-label");


const body =
    document.body;



/* Restore saved theme */

const savedTheme =
    localStorage.getItem("melovia-theme");


if (savedTheme === "day") {

    body.setAttribute(
        "data-theme",
        "day"
    );

    themeIcon.textContent = "🌙";

    themeLabel.textContent =
        "Night mode";

}



/* Theme button */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const isDay =
                body.getAttribute(
                    "data-theme"
                ) === "day";


            if (isDay) {

                /* Change to night */

                body.removeAttribute(
                    "data-theme"
                );

                themeIcon.textContent =
                    "☀️";

                themeLabel.textContent =
                    "Day mode";

                localStorage.setItem(
                    "melovia-theme",
                    "night"
                );

            } else {

                /* Change to day */

                body.setAttribute(
                    "data-theme",
                    "day"
                );

                themeIcon.textContent =
                    "🌙";

                themeLabel.textContent =
                    "Night mode";

                localStorage.setItem(
                    "melovia-theme",
                    "day"
                );

            }

        }
    );

}



/* =====================================================
   TICKET BUTTONS
===================================================== */

const ticketButtons =
    document.querySelectorAll(
        ".btn-tickets"
    );


ticketButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            alert(
                "Ticket booking will be available soon!"
            );

        }
    );

});