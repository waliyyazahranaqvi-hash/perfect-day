```javascript
// =========================
// EXPLORE BUTTON
// =========================

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    document.getElementById("day").scrollIntoView({
        behavior: "smooth"
    });

});


// =========================
// PERFECT DAY BUTTON
// =========================

const perfectButton = document.getElementById("perfectButton");
const message = document.getElementById("message");

const messages = [
    "A day filled with your favorite people sounds pretty perfect. 💛",

    "Maybe all you need is sunshine, good music and zero stress. ☀️",

    "Don't forget to leave some room for spontaneous adventures. ✨",

    "Your perfect day doesn't have to be extraordinary — it just has to feel like you. 🌸",

    "Sometimes the smallest moments become our favorite memories. 🌙"
];


perfectButton.addEventListener("click", function () {

    const randomNumber = Math.floor(
        Math.random() * messages.length
    );

    message.textContent = messages[randomNumber];

});


// =========================
// SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(
    ".day-card, .moment"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});
```
