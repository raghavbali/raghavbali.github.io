(function() {
    var themeToggle = null;
    
    function getPreferredTheme() {
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        var hour = new Date().getHours();
        var isNight = hour >= 19 || hour < 7;
        var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return (isNight || systemDark) ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
            document.body.classList.remove('dark-theme');
        }
        updateToggleIcon(theme);
    }

    function updateToggleIcon(theme) {
        if (!themeToggle) return;
        var icon = themeToggle.querySelector('i');
        if (!icon) return;
        
        if (theme === 'dark') {
            icon.className = 'bi bi-sun';
            themeToggle.title = 'Switch to Light Theme';
            themeToggle.setAttribute('aria-label', 'Switch to Light Theme');
        } else {
            icon.className = 'bi bi-moon-stars';
            themeToggle.title = 'Switch to Dark Theme';
            themeToggle.setAttribute('aria-label', 'Switch to Dark Theme');
        }
    }

    function init() {
        themeToggle = document.getElementById('theme-toggle');
        
        var currentTheme = getPreferredTheme();
        applyTheme(currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                var current = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
                var nextTheme = current === 'dark' ? 'light' : 'dark';
                
                localStorage.setItem('theme', nextTheme);
                applyTheme(nextTheme);
            });
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                // Only adapt if user hasn't explicitly set a preference
                if (!localStorage.getItem('theme')) {
                    applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Run on DOMContentLoaded or immediately if body already exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
