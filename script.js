ScrollReveal({
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false
});

// Header elements
ScrollReveal().reveal('header .logo', { origin: 'top' });
ScrollReveal().reveal('.nav-links li', { origin: 'bottom', interval: 100 });

// Hero section
ScrollReveal().reveal('.hero-content h2', { origin: 'right' });
ScrollReveal().reveal('.hero-content p', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.btn', { origin: 'bottom', delay: 400 });

// New Arrivals section
ScrollReveal().reveal('.new-arrivals h2', { origin: 'top' });
ScrollReveal().reveal('.new-arrivals .product-item', { origin: 'bottom', interval: 200 });

// Categories section
ScrollReveal().reveal('.categories h2', { origin: 'top' });
ScrollReveal().reveal('.categories .category-card', { origin: 'bottom', interval: 200 });

// Product listing page
ScrollReveal().reveal('.product-listing h2', { origin: 'top' });
ScrollReveal().reveal('.product-listing .product-item', { origin: 'bottom', interval: 200 });

// About us page
ScrollReveal().reveal('.about-us h2', { origin: 'top' });
ScrollReveal().reveal('.about-us p', { origin: 'bottom', interval: 200 });

// Contact page
ScrollReveal().reveal('.contact-page h2', { origin: 'top' });
ScrollReveal().reveal('.contact-page p', { origin: 'bottom', interval: 200 });
//ScrollReveal().reveal('.contact-form', { origin: 'bottom', delay: 400 }); // Removed form reveal


// Footer
ScrollReveal().reveal('footer', { origin: 'bottom', delay: 500 });
