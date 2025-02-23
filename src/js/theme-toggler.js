function setTheme() {
    if (localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (localStorage.theme === "light") {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'system');
    }
}

// Function to switch to light mode
function setLightMode() {
    localStorage.theme = "light";
    setTheme();
}

// Function to switch to dark mode
function setDarkMode() {
    localStorage.theme = "dark";
    setTheme();
}

// Function to reset to system default preference
function setSystemMode() {
    localStorage.removeItem("theme");
    setTheme();
}

// Initialize theme based on localStorage or system preference
setTheme();
