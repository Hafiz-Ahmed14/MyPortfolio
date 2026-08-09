
(function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        backToTop.classList.toggle('active', window.scrollY > 300);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.pageYOffset >= sec.offsetTop - 220) {
                current = sec.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === '#' + current);
        });
    });

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));

    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(i) {
        heroSlides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }, 4500);

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        this.reset();
    });
})();
