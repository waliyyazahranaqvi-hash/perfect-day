// Explore My Day button
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    document.getElementById("day").scrollIntoView({
        behavior: "smooth"
    });
});


// Tell Me button
const perfectButton = document.getElementById("perfectButton");
const message = document.getElementById("message");

const messages = [
    "A day with your favorite people sounds pretty perfect! 💛",
    "Sunshine, good music and zero stress. ☀️",
    "Sometimes the simplest days become the best memories. ✨",
    "A perfect day is one that makes you smile. 🌸",
    "Good people + good moments = a pretty perfect day! 🌙"
];

perfectButton.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * messages.length);

    message.textContent = messages[randomIndex];

});
