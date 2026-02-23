
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.3 });

    // Select all intro divs to animate
    document.querySelectorAll('#content > div').forEach(div => {
        observer.observe(div);
    });