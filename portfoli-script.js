// ===================================
// PARTICLE ANIMATION BACKGROUND
// ===================================

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.connectionDistance = 150;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Move particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
            this.ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[j].x - particle.x;
                const dy = this.particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    const opacity = (1 - distance / this.connectionDistance) * 0.3;
                    this.ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
const particleCanvas = document.getElementById('particles');
if (particleCanvas) {
    new ParticleSystem(particleCanvas);
}

// ===================================
// NAVIGATION
// ===================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll detection for nav background
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed nav
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// VERSION SELECTOR (CHOOSE YOUR VERSION)
// ===================================

const versionTabs = document.querySelectorAll('.version-tab');
const versionPanels = document.querySelectorAll('.version-panel');

versionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetVersion = tab.dataset.version;
        
        // Remove active class from all tabs and panels
        versionTabs.forEach(t => t.classList.remove('active'));
        versionPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        document.getElementById(targetVersion).classList.add('active');
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.glass-card, .section-header, .metric-card');
animatedElements.forEach(el => {
    el.classList.add('observe-animation');
    observer.observe(el);
});

// ===================================
// ANIMATED COUNTERS FOR METRICS
// ===================================

class Counter {
    constructor(element) {
        this.element = element;
        this.target = parseInt(element.dataset.target);
        this.current = 0;
        this.duration = 2000;
        this.hasAnimated = false;
    }
    
    animate() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;
        
        const increment = this.target / (this.duration / 16);
        const timer = setInterval(() => {
            this.current += increment;
            if (this.current >= this.target) {
                this.current = this.target;
                clearInterval(timer);
            }
            this.element.textContent = Math.round(this.current);
        }, 16);
    }
}

// Initialize counters
const metricValues = document.querySelectorAll('.metric-value');
const counters = Array.from(metricValues).map(el => new Counter(el));

// Trigger counters when metrics section comes into view
const metricsSection = document.querySelector('.metrics');
if (metricsSection) {
    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => counter.animate());
                metricsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    metricsObserver.observe(metricsSection);
}

// ===================================
// SKILL BARS ANIMATION
// ===================================

const skillBars = document.querySelectorAll('.skill-fill');
const skillsSection = document.querySelector('.skills');

if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In production, you would send this to a backend endpoint:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
});

// ===================================
// DOWNLOAD CV FUNCTIONALITY
// ===================================

const downloadCVButtons = document.querySelectorAll('#downloadCV, .btn-secondary[href="#contact"]');

downloadCVButtons.forEach(button => {
    if (button.textContent.includes('Download CV')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In production, this would link to an actual CV file
            alert('CV download functionality would be implemented here. Please link to your actual CV file.');
            
            // Example of how to trigger a download:
            // const link = document.createElement('a');
            // link.href = '/path/to/your/cv.pdf';
            // link.download = 'Charles_Orukpe_CV.pdf';
            // link.click();
        });
    }
});

// ===================================
// CURSOR TRAIL EFFECT (SUBTLE)
// ===================================

class CursorTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.dotCount = 8;
        
        this.init();
        this.animate();
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    init() {
        for (let i = 0; i < this.dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: rgba(0, 217, 255, ${0.5 - i * 0.05});
                pointer-events: none;
                z-index: 9999;
                transition: opacity 0.3s;
            `;
            document.body.appendChild(dot);
            this.dots.push({
                element: dot,
                x: 0,
                y: 0
            });
        }
    }
    
    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;
        
        this.dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;
            
            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';
            
            x = dot.x;
            y = dot.y;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cursor trail only on desktop
if (window.innerWidth > 1024) {
    new CursorTrail();
}

// ===================================
// PARALLAX SCROLL EFFECT
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(el => {
        const speed = 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// CARD TILT EFFECT ON HOVER
// ===================================

const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ===================================

class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.originalText = element.textContent;
    }
    
    type() {
        if (this.index < this.text.length) {
            this.element.textContent = this.text.substring(0, this.index + 1);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
    
    start() {
        this.element.textContent = '';
        this.type();
    }
}

// Uncomment to enable typing effect on hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const typewriter = new TypeWriter(heroSubtitle, heroSubtitle.textContent, 50);
//     window.addEventListener('load', () => {
//         setTimeout(() => typewriter.start(), 500);
//     });
// }

// ===================================
// THEME TOGGLE (OPTIONAL - LIGHT/DARK)
// ===================================

// This is optional and not implemented in the HTML
// You can add a theme toggle button and implement this functionality

class ThemeToggle {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.applyTheme();
    }
    
    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }
    
    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
    }
}

// const themeToggle = new ThemeToggle();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images if any are added
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        width: 0%;
        z-index: 10000;
        transition: width 0.1s;
        box-shadow: 0 0 10px var(--accent-glow);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// ===================================
// EASTER EGG - KONAMI CODE
// ===================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activate easter egg
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 10000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add rainbow animation to CSS dynamically
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ===================================
// INITIALIZATION
// ===================================

console.log('%c💻 Portfolio Website Loaded Successfully', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #9ca3af; font-size: 12px;');
console.log('%c🚀 Try the Konami Code for a surprise!', 'color: #00d9ff; font-size: 12px;');