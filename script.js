ScrollReveal({
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false  // اجعل true لو تريد تكرار التأثير عند كل تمرير
  });
  
  // عناصر الهيدر
  ScrollReveal().reveal('header .logo', { origin: 'top' });
  ScrollReveal().reveal('.nav-links li', { origin: 'bottom', interval: 100 });
  
  // قسم البانر
  ScrollReveal().reveal('.hero-content h2', { origin: 'right' });
  ScrollReveal().reveal('.hero-content p', { origin: 'left', delay: 300 });
  ScrollReveal().reveal('.btn', { origin: 'bottom', delay: 400 });
  
  // الفوتر
  ScrollReveal().reveal('footer', { origin: 'bottom', delay: 500 });
  