
// ELEMENTS

const intro = document.getElementById("intro");
const website = document.getElementById("website");

const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// OPEN SURPRISE

openBtn.addEventListener("click", async () => {

    intro.classList.add("hidden");
    website.classList.remove("hidden");

    musicBtn.classList.remove("hidden");

    window.scrollTo(0, 0);

    try {

        await music.play();
        musicBtn.textContent = "♫ MUSIC ON";

    } catch(error) {

        musicBtn.textContent = "♫ PLAY MUSIC";
        console.log("Music could not play:", error);

    }

});


// MUSIC CONTROL


musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {
            music.volume = 0.4; // Music volume 40%
            await music.play();

            musicBtn.textContent = "♫ MUSIC ON";

        } catch(error) {
            console.log("Music error:", error);
        }

    } else {

        music.pause();
        musicBtn.textContent = "♫ MUSIC OFF";

    }

});

// BACKGROUND STARS

const stars = document.getElementById("stars");

for(let i = 0; i < 65; i++) {

    const star = document.createElement("span");

    star.className = "star";
    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (Math.random() * 12 + 5) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);

}


// OPEN LETTER

const letterBtn = document.getElementById("letterBtn");
const letterBox = document.getElementById("letterBox");

letterBtn.addEventListener("click", () => {

    letterBox.classList.toggle("hidden");

    if(letterBox.classList.contains("hidden")) {

        letterBtn.textContent = "OPEN YOUR LETTER 💗";

    } else {

        letterBtn.textContent = "CLOSE YOUR LETTER 💌";

        letterBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});


// PHOTO GALLERY

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");
const bigPhoto = document.getElementById("bigPhoto");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        bigPhoto.src = photo.src;
        bigPhoto.alt = photo.alt;

        lightbox.classList.add("active");

    });

});


// CLOSE PHOTO

document.getElementById("closePhoto")
.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", event => {

    if(event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

document.addEventListener("keydown", event => {

    if(event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});


// CONFETTI CELEBRATION

function celebrate() {

    const colors = [
        "#ff9ed2",
        "#b69aff",
        "#ffffff",
        "#ffdbef",
        "#d6bbff"
    ];

    for(let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.width = "8px";
        piece.style.height = "12px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        piece.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4500);

    }

}


// WISH BUTTON

document.getElementById("celebrateBtn")
.addEventListener("click", () => {

    celebrate();

});

