// Mobile menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Simple scroll animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "0.7s ease";

    observer.observe(section);

});