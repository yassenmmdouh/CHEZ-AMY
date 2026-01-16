
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

