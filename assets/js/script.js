// This function toggles the dark theme and saves the theme state in localStorage
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// This function checks the stored theme in localStorage when the page loads
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Load the theme when the document loads
document.addEventListener('DOMContentLoaded', loadTheme);
