// ================= THEME TOGGLE =================

const themeButton = document.getElementById("theme-toggle");

let darkMode = true;

themeButton.addEventListener("click", function () {

    darkMode = !darkMode;

    if (darkMode) {

        document.body.style.background = "#0a0a0a";
        document.body.style.color = "#ffffff";

        themeButton.textContent = "🌙";

    } else {

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111111";

        themeButton.textContent = "☀️";

    }

});


// ================= PAGE LOADED =================

console.log("Sujal's Portfolio Website Loaded Successfully!");

// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing-text");

const words = [
    "CSE Student",
    "Java Developer",
    "Python Learner",
    "Web Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeAnimation() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeAnimation, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeAnimation,
        deleting ? 60 : 100
    );
}


typeAnimation();
// ================= MOBILE MENU =================

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});
// ================= SCROLL ANIMATION =================

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .about-container, .internship"
    );


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    observer.observe(element);

});