let step = 0;
let texts = [
    "🎊It's a special day for me🎉🥳💫✨",
    "Enter your DOB to proceed🎂🎈"
];

let music = document.getElementById("bgMusic");
    music.volume = 0; // Start at zero volume
    music.play()
        .then(() => {
            let fadeInInterval = setInterval(() => {
                if (music.volume < 1) {
                    music.volume += 0.05; // Increase volume gradually
                } else {
                    clearInterval(fadeInInterval); // Stop interval when fully faded in
                }
            }, 200); // Increase volume every 200ms
        })
        .catch(error => console.error("Music error:", error));
    
document.body.addEventListener("click", () => {
    let textElement = document.getElementById("text");
    
    // Fade out old text
    textElement.style.opacity = "0";

    setTimeout(() => {
        if (step < texts.length) {
            textElement.innerHTML = texts[step]; // Change text
            textElement.style.opacity = "1"; // Fade in new text
            step++;
        } else {
            // Show DOB input and Proceed button
            document.getElementById("dobInput").classList.remove("hidden");
            document.getElementById("proceedBtn").classList.remove("hidden");
        }
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    let textContainer = document.getElementById("textContainer");

    // Add new text on click
    textContainer.addEventListener("click", () => {
        textContainer.innerHTML = `<p id="text2">It's a special day for me...</p>`;
    });
});

document.getElementById("proceedBtn").addEventListener("click", () => {
    let enteredDOB = document.getElementById("dobInput").value;
    let correctDOB = "01032004"; // Set your actual DOB (DDMMYYYY)

    if (enteredDOB === correctDOB) {
        window.location.href = "gift-box.html"; // Go to last page
    } else {
        alert("Oops! Wrong DOB. Try again.");
    }
});
