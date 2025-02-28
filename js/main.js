function startExperience() {
    const logoWrapper = document.getElementById("logoWrapper");
    const sound = document.getElementById("netflixSound");

    // Apply zoom-out animation
    logoWrapper.style.animation = "zoomOut 4s ease-in-out forwards";
    sound.play();

    setTimeout(() => {
        window.location.href = "pages/intro.html";
    }, 4000);
}
