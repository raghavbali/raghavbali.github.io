document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            if (!backToTopBtn.classList.contains('show')) {
                backToTopBtn.classList.add('show');
            }
        } else {
            if (backToTopBtn.classList.contains('show')) {
                backToTopBtn.classList.remove('show');
            }
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
