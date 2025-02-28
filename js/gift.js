document.addEventListener("DOMContentLoaded", function () {
    let giftBox = document.getElementById("giftBox");
    let message = document.getElementById("message");
    let bgMusic = new Audio("assets/music.mp3");
    let secondVideo = document.getElementById("secondVideo");
    let nextPageAllowed = false;

    // Click to open the gift
    giftBox.addEventListener("click", function () {
        this.style.transform = "rotateX(120deg)";
        this.querySelector(".lid").style.transform = "rotateX(-120deg)";
        
        setTimeout(() => {
            message.classList.remove("hidden"); // Show message
            bgMusic.volume = 0;
            bgMusic.play();
            fadeInMusic(bgMusic);
        }, 1000);
    });

    // "Make it even better!" button click
    document.getElementById("nextBtn").addEventListener("click", function () {
        // Hide the initial video
        document.getElementById("bgVideo").classList.add("hidden");
        
        // Show and play the second background video
        secondVideo.classList.remove("hidden");
        secondVideo.play();

        // After 10 seconds, allow user to click anywhere to proceed
        setTimeout(() => {
            nextPageAllowed = true;
        }, 10000);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        // Hide the button after clicking
        this.style.display = "none";
    
        // Hide the first video
        document.getElementById("bgVideo").classList.add("hidden");
    
        // Select the second video
        let secondVideo = document.getElementById("secondBgVideo");
    
        // Ensure second video is visible
        secondVideo.classList.remove("hidden");
    
        // Wait for metadata to load before skipping 15 seconds
        secondVideo.addEventListener("loadedmetadata", function () {
            if (secondVideo.duration > 15) {
                secondVideo.currentTime = 15; // Skip first 15 seconds
            }
            secondVideo.play().catch(error => console.log("Autoplay blocked:", error));
        });
    
        // Allow skipping to the next page after playing for 10 seconds
        setTimeout(() => {
            nextPageAllowed = true;
        }, 10000);
    });
    

    // Touch screen after 10 sec to go to the next page
    document.body.addEventListener("click", function () {
        if (nextPageAllowed) {
            window.location.href = "final-surprise.html";
        }
    });

    // Smoothly fade in the music
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

});
// Select the audio element
let audio = document.getElementById("bgMusic");

// Save the current timestamp when leaving the page
window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", audio.currentTime);
});
