document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle (Light/Dark Mode)
    const themeBtn = document.getElementById("theme-toggle");
    console.log("Theme button found:", themeBtn);

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            console.log("Dark mode button clicked!");
        });
    } else {
        console.error("Theme toggle button NOT found! Check index.html for id='theme-toggle'");
    }

    // 2. Mobile Navigation Toggle
    const menuBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            if (navMenu.style.display === "none" || navMenu.style.display === "") {
                navMenu.style.display = "block";
            } else {
                navMenu.style.display = "none";
            }
        });
    }
});