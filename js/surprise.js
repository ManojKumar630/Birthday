document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bgMusic");
    let savedTime = localStorage.getItem("musicTime"); // Get saved music position

    // Resume Music at the Stored Timestamp
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
    
    // Play Music (if not already playing)
    audio.play().catch((error) => {
        console.log("Autoplay blocked. Waiting for user interaction.");
    });

    // Save Music Time Before Leaving Page
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("musicTime", audio.currentTime);
    });
});
(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());
