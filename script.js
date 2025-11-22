// ============================
// Global Variables
// ============================

let lastScrollTop = 0;
let ticking = false;

// ============================
// Smooth Scroll Handler
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================
// Navigation Active State
// ============================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 300) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================
// Scroll Reveal Animation
// ============================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// ============================
// Theme Toggle
// ============================

const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to update lord-icon colors based on theme
function updateIconColors() {
    const isLightTheme = document.body.classList.contains('light-theme');
    const iconColor = isLightTheme ? '#1a1a1a' : '#ffffff';
    const accentColor = '#00a8ff';
    
    // Update all lord-icons
    document.querySelectorAll('lord-icon').forEach(icon => {
        const currentColors = icon.getAttribute('colors');
        if (currentColors) {
            // Check if it's an accent color icon (checkmarks in service features)
            if (currentColors.includes('primary:#00a8ff')) {
                // Keep accent color for checkmarks
                icon.setAttribute('colors', `primary:${accentColor}`);
            } else {
                // Update regular icons
                icon.setAttribute('colors', `primary:${iconColor}`);
            }
        }
    });
}

// Load saved theme or use system preference (default: dark)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
}
// Default is dark theme, no need to add class

// Update icon colors on initial load
updateIconColors();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Save preference
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    
    // Update icon colors
    updateIconColors();
    
    // Add animation
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
});

// ============================
// Service Cards Interaction
// ============================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ============================
// Parallax Effect for Decorations
// ============================

function parallaxEffect() {
    const decorations = document.querySelectorAll('.decoration');
    const scrolled = window.pageYOffset;
    
    decorations.forEach((decoration, index) => {
        const speed = (index + 1) * 0.05;
        const yPos = -(scrolled * speed);
        decoration.style.transform = `translateY(${yPos}px)`;
    });
}

// ============================
// Typing Effect for Hero Title (Optional)
// ============================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============================
// Counter Animation for Stats (if needed)
// ============================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// ============================
// Intersection Observer for Animations
// ============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Animate counters if any
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
            });
        }
    });
}, observerOptions);

// Observe all service cards and feature cards
document.querySelectorAll('.service-card, .feature-card').forEach(card => {
    card.classList.add('scroll-reveal');
    observer.observe(card);
});

// ============================
// Scroll Event Handler
// ============================

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            revealOnScroll();
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// ============================
// Resize Handler
// ============================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate positions if needed
        updateActiveNav();
    }, 250);
});

// ============================
// Page Load Animations
// ============================

window.addEventListener('load', () => {
    // Initial checks
    updateActiveNav();
    revealOnScroll();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroElements = document.querySelectorAll('.hero .animate-in');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
});

// ============================
// Keyboard Navigation
// ============================

document.addEventListener('keydown', (e) => {
    // Escape key to close any modals or overlays
    if (e.key === 'Escape') {
        // Handle escape key if needed
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ============================
// Focus Management for Accessibility
// ============================

// Add focus visible only for keyboard users
document.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
    }
});

// ============================
// Performance Optimization
// ============================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================
// Lazy Loading Images (if needed)
// ============================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================
// Add Ripple Effect to Buttons
// ============================

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    body.using-mouse *:focus {
        outline: none;
    }
`;
document.head.appendChild(rippleStyle);

// ============================
// Easter Egg: Konami Code
// ============================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }
});



// ============================
// Console Message
// ============================

console.log('%c🚀 Senior Blockchain Company', 'font-size: 20px; color: #00a8ff; font-weight: bold;');
console.log('%cWelcome to our website! Looking for talented developers?', 'font-size: 14px; color: #00c9a7;');
console.log('%cContact us at: info@sbc.om', 'font-size: 12px; color: #b0b0b0;');

// ============================
// Export for Testing (if needed)
// ============================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateActiveNav,
        revealOnScroll,
        animateCounter,
        debounce,
        throttle
    };
}
