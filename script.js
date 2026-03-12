/* COUNTER ANIMATION */
function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
        const target = +el.dataset.target;
        let count = 0;
        const step = target / 50;
        const t = setInterval(() => {
            count += step;
            if (count >= target) {
                el.textContent = target + '+';
                clearInterval(t);
            } else {
                el.textContent = Math.ceil(count);
            }
        }, 30);
    });
}

const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCounters();
            statsObs.disconnect();
        }
    });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObs.observe(statsEl);


/* FADE UP ON SCROLL */
const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));


/* HAMBURGER MENU */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('open');
    });
});


/* NAVBAR SHADOW ON SCROLL */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});


/* CONTACT FORM */
function handleFormSubmit() {
    alert('Thank you for your message! I will get back to you soon.');
}