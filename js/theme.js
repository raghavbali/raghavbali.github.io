(function() {
    function updateTheme() {
        var hour = new Date().getHours();
        var isNight = hour >= 19 || hour < 7;
        var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (isNight || systemDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Run on load (assumes script is defer or at end of body, or run immediately if in head to set class asap to avoid flash, but body must exist)
    // If in head, we might need to wait for body.
    if (document.body) {
        updateTheme();
    } else {
        document.addEventListener('DOMContentLoaded', updateTheme);
    }
})();
