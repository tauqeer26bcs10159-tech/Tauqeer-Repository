const STORAGE_KEY = "theme";

const savedTheme = localStorage.getItem(STORAGE_KEY);

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

document.addEventListener("DOMContentLoaded", function () {

    const toggleButton = document.getElementById("th-change");

    function updateButtonText(button) {
        const isDark = document.body.classList.contains("dark-theme");
        button.textContent = isDark ? "Light mode" : "Dark mode";
    }

    updateButtonText(toggleButton);

    toggleButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");

        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");

        updateButtonText(toggleButton);

    });

});
