// ==================== THEME DARK/LIGHT ====================
const themeToggle = document.getElementById('themeToggle');
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', document.body.classList.contains('dark-mode') ? 'true' : 'false');
    writeToStorage('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}
themeToggle.addEventListener('click', toggleTheme);
const storedTheme = readFromStorage('theme');
if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'true');
}

