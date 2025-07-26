// Aurora Network - Modern Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollEffects();
    setupAnimations();
    addInteractiveElements();
    enhanceAccessibility();
    addScrollRevealAnimations();
    trackPerformance();
    addConsoleMessages();
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Scroll effects and header behavior
function setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class for styling
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-card, .tech-card, .hero-text, .about-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add interactive elements
function addInteractiveElements() {
    // Card hover effects
    const cards = document.querySelectorAll('.section-card, .tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Enhanced performance monitoring
function trackPerformance() {
    // Performance monitoring
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Aurora Network loaded in ${loadTime.toFixed(2)}ms`);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Aurora Network Error:', e.message);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
    
    if (e.key === 'Escape') {
        const activeMobileMenu = document.querySelector('.nav-links.active');
        if (activeMobileMenu) {
            activeMobileMenu.classList.remove('active');
            document.querySelector('.mobile-menu-btn').classList.remove('active');
        }
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Accessibility improvements
function enhanceAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        el.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

// Smooth reveal animations on scroll
function addScrollRevealAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            animation: rippleEffect 0.6s linear;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-blue);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-blue);
            outline-offset: 2px;
        }
        
        .header {
            transition: transform 0.3s ease;
        }
        
        .header.scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
        }
        
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid var(--gray-200);
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Console branding
function addConsoleMessages() {
    console.log('%c🧠 Aurora Network', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cRevolutionizing neurosurgical treatment', 'color: #6b7280; font-size: 14px;');
}

// Utility functions for backward compatibility
function scrollToSections() {
    document.getElementById('sections').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToDevtools() {
    document.getElementById('devtools').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Scroll effects and header behavior
function setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class for styling
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-card, .tech-card, .hero-text, .about-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add interactive elements
function addInteractiveElements() {
    // Card hover effects
    const cards = document.querySelectorAll('.section-card, .tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Utility functions for section interactions
function scrollToSections() {
    document.getElementById('sections').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToDevtools() {
    document.getElementById('devtools').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Enhanced performance monitoring
function trackPerformance() {
    // Performance monitoring
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Aurora Network loaded in ${loadTime.toFixed(2)}ms`);
        
        // Track Core Web Vitals
        if ('web-vital' in window) {
            // This would integrate with a real analytics service
            console.log('Core Web Vitals tracking initialized');
        }
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Aurora Network Error:', e.message);
    // In production, this would send errors to a monitoring service
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Enhanced accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
    
    // Escape key handling
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => modal.classList.remove('active'));
        
        const activeMobileMenu = document.querySelector('.nav-links.active');
        if (activeMobileMenu) {
            activeMobileMenu.classList.remove('active');
            document.querySelector('.mobile-menu-btn').classList.remove('active');
        }
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Initialize performance tracking
trackPerformance();

// Console branding
console.log('%c🧠 Aurora Network', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cRevolutionizing neurosurgical treatment', 'color: #6b7280; font-size: 14px;');

// Accessibility improvements
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Improve focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        el.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

// Initialize accessibility enhancements
enhanceAccessibility();

// Smooth reveal animations on scroll
function addScrollRevealAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            animation: rippleEffect 0.6s linear;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-blue);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-blue);
            outline-offset: 2px;
        }
        
        .header {
            transition: transform 0.3s ease;
        }
        
        .header.scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add scroll reveal animations
addScrollRevealAnimations();

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Section card interactions
function setupSectionInteractions() {
    const sectionCards = document.querySelectorAll('.section-card');
    
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            addGlowEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            removeGlowEffect(this);
        });
    });
}

// Retro terminal-like effects
function setupRetroEffects() {
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        typeWriter(heroTitle);
    }
    
    // Add matrix-like background effect
    createMatrixBackground();
    
    // Setup terminal cursor effect
    setupTerminalCursor();
}

// Typing effect for hero title
function typeWriter(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add blinking cursor effect
            element.innerHTML += '<span class="cursor">|</span>';
            blinkCursor();
        }
    }
    
    setTimeout(type, 1000);
}

// Blinking cursor effect
function blinkCursor() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// Matrix-like background effect
function createMatrixBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = canvas.width / 20;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    const chars = '01';
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Terminal cursor setup
function setupTerminalCursor() {
    const style = document.createElement('style');
    style.textContent = `
        .cursor {
            color: #00ff41;
            font-weight: bold;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Add glow effect to elements
function addGlowEffect(element) {
    element.style.boxShadow = '0 0 25px rgba(0, 255, 65, 0.4)';
    element.style.border = '2px solid #00ff41';
}

// Remove glow effect
function removeGlowEffect(element) {
    element.style.boxShadow = '';
    element.style.border = '2px solid #333333';
}

// Navigation highlight based on scroll position
function setupNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Add active state styling
    const style = document.createElement('style');
    style.textContent = `
        .nav a.active {
            color: #00ff41 !important;
            border: 1px solid #00ff41 !important;
            box-shadow: 0 0 10px #00ff41 !important;
            background: rgba(0, 255, 65, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Button click handlers
function scrollToSections() {
    document.getElementById('sections').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToDevtools() {
    document.getElementById('devtools').scrollIntoView({
        behavior: 'smooth'
    });
}

function viewSection(sectionType) {
    // Create modal or detailed view for each section
    showSectionModal(sectionType);
}

// Section modal functionality
function showSectionModal(sectionType) {
    const sectionData = getSectionData(sectionType);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'section-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${sectionData.title}</h2>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p class="section-description">${sectionData.description}</p>
                <div class="conditions-detail">
                    <h3>CONDITIONS TREATED:</h3>
                    <div class="conditions-grid">
                        ${sectionData.conditions.map(condition => `
                            <div class="condition-item">
                                <h4>${condition.name}</h4>
                                <p>${condition.description}</p>
                                <div class="treatment-status">
                                    <span class="status-badge ${condition.status}">
                                        ${condition.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="devtools-section">
                    <h3>SPECIALIZED DEVELOPMENT TOOLS:</h3>
                    <div class="tools-list">
                        ${sectionData.tools.map(tool => `
                            <div class="tool-item">
                                <span class="tool-name">${tool}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .section-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: #111111;
            border: 2px solid #00ff41;
            max-width: 90%;
            max-height: 90%;
            overflow-y: auto;
            border-radius: 0;
            box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #333;
            background: linear-gradient(90deg, #1a1a1a, #111111);
        }
        
        .modal-header h2 {
            color: #00ff41;
            font-family: 'IBM Plex Mono', monospace;
            margin: 0;
        }
        
        .close-btn {
            background: none;
            border: none;
            color: #00ff41;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .section-description {
            color: #999;
            margin-bottom: 30px;
            font-size: 1.1rem;
            line-height: 1.6;
        }
        
        .conditions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .condition-item {
            background: #0a0a0a;
            border: 1px solid #333;
            padding: 15px;
            transition: all 0.3s ease;
        }
        
        .condition-item:hover {
            border-color: #00ff41;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }
        
        .condition-item h4 {
            color: #00ff41;
            margin-bottom: 10px;
            font-size: 1rem;
        }
        
        .condition-item p {
            color: #ccc;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        
        .status-badge {
            padding: 4px 8px;
            font-size: 0.8rem;
            font-weight: bold;
            border: 1px solid;
        }
        
        .status-badge.cured {
            color: #00ff41;
            border-color: #00ff41;
            background: rgba(0, 255, 65, 0.1);
        }
        
        .status-badge.treating {
            color: #ffaa00;
            border-color: #ffaa00;
            background: rgba(255, 170, 0, 0.1);
        }
        
        .status-badge.researching {
            color: #00aaff;
            border-color: #00aaff;
            background: rgba(0, 170, 255, 0.1);
        }
        
        .tools-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .tool-item {
            background: rgba(0, 255, 65, 0.1);
            border: 1px solid #00ff41;
            padding: 8px 12px;
            color: #00ff41;
            font-size: 0.9rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    // Add styles if not already added
    if (!document.getElementById('modal-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'modal-styles';
        styleElement.textContent = modalStyles;
        document.head.appendChild(styleElement);
    }
    
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.section-modal');
    if (modal) {
        modal.remove();
    }
}

// Section data for modals
function getSectionData(sectionType) {
    const sectionData = {
        congenital: {
            title: 'SECTION I: CONGENITAL DISORDERS',
            description: 'Comprehensive treatment solutions for congenital neurological conditions present from birth.',
            conditions: [
                { name: 'Chiari Malformation', description: 'Brain tissue extending into spinal canal', status: 'cured' },
                { name: 'Spina Bifida', description: 'Neural tube defect affecting spinal cord development', status: 'cured' },
                { name: 'Hydrocephalus (Congenital)', description: 'Accumulation of cerebrospinal fluid in brain', status: 'cured' },
                { name: 'Dandy-Walker Malformation', description: 'Congenital brain malformation', status: 'treating' },
                { name: 'Encephalocele', description: 'Neural tube defect with brain herniation', status: 'cured' },
                { name: 'Arachnoid Cysts', description: 'Fluid-filled sacs in arachnoid membrane', status: 'cured' },
                { name: 'Craniosynostosis', description: 'Premature fusion of skull sutures', status: 'cured' },
                { name: 'Tethered Cord Syndrome', description: 'Spinal cord abnormally attached', status: 'treating' }
            ],
            tools: ['Neural Development Mapper', 'Fetal Brain Simulator', 'Genetic Analysis Engine', 'Surgical Planning AI']
        },
        cerebovascular: {
            title: 'SECTION II: CEREBOVASCULAR DISORDERS',
            description: 'Advanced treatment protocols for blood vessel-related brain conditions.',
            conditions: [
                { name: 'Aneurysms', description: 'Weakened blood vessel walls in brain', status: 'cured' },
                { name: 'Arteriovenous Malformations', description: 'Abnormal blood vessel connections', status: 'cured' },
                { name: 'Cavernous Malformations', description: 'Blood-filled cavities in brain', status: 'treating' },
                { name: 'Moyamoya Disease', description: 'Progressive blood vessel narrowing', status: 'treating' },
                { name: 'Stroke (Ischemic/Hemorrhagic)', description: 'Brain tissue damage from blood flow disruption', status: 'cured' },
                { name: 'Carotid Artery Stenosis', description: 'Narrowing of carotid arteries', status: 'cured' },
                { name: 'Dural Arteriovenous Fistulas', description: 'Abnormal connections in dura mater', status: 'treating' }
            ],
            tools: ['Vascular Flow Analyzer', 'Aneurysm Coiling Simulator', 'Stroke Prevention AI', 'Blood Flow Optimizer']
        },
        traumatic: {
            title: 'SECTION III: TRAUMATIC BRAIN & SPINE INJURIES',
            description: 'Emergency and long-term care solutions for traumatic neurological injuries.',
            conditions: [
                { name: 'Traumatic Brain Injury', description: 'Brain damage from external force', status: 'cured' },
                { name: 'Skull Fractures', description: 'Broken bones in the skull', status: 'cured' },
                { name: 'Intracranial Hematomas', description: 'Blood accumulation inside skull', status: 'cured' },
                { name: 'Spinal Cord Injury', description: 'Damage to spinal cord nerves', status: 'treating' },
                { name: 'Vertebral Fractures', description: 'Broken vertebrae in spine', status: 'cured' },
                { name: 'Penetrating Head Injuries', description: 'Object penetration through skull', status: 'cured' }
            ],
            tools: ['Trauma Assessment AI', 'Spinal Reconstruction Engine', 'Neural Recovery Tracker', 'Emergency Response System']
        },
        neoplastic: {
            title: 'SECTION IV: NEOPLASTIC (TUMOR) CONDITIONS',
            description: 'Cutting-edge oncological treatments for brain and spinal tumors.',
            conditions: [
                { name: 'Glioblastoma', description: 'Aggressive brain tumor', status: 'treating' },
                { name: 'Meningioma', description: 'Tumor arising from meninges', status: 'cured' },
                { name: 'Pituitary Adenoma', description: 'Tumor in pituitary gland', status: 'cured' },
                { name: 'Medulloblastoma', description: 'Cerebellar tumor, often in children', status: 'treating' },
                { name: 'Ependymoma', description: 'Tumor arising from ependymal cells', status: 'treating' },
                { name: 'Primary CNS Lymphoma', description: 'Lymphoma originating in brain', status: 'researching' },
                { name: 'Craniopharyngioma', description: 'Tumor near pituitary gland', status: 'cured' }
            ],
            tools: ['Tumor Mapping AI', 'Radiation Planning Engine', 'Chemotherapy Optimizer', 'Genetic Profiler']
        },
        spinal: {
            title: 'SECTION V: SPINAL DISORDERS',
            description: 'Comprehensive spinal care from degenerative conditions to deformities.',
            conditions: [
                { name: 'Herniated Disc', description: 'Displaced intervertebral disc', status: 'cured' },
                { name: 'Spinal Stenosis', description: 'Narrowing of spinal canal', status: 'cured' },
                { name: 'Spondylolisthesis', description: 'Vertebra slipping over another', status: 'cured' },
                { name: 'Degenerative Disc Disease', description: 'Disc deterioration with age', status: 'cured' },
                { name: 'Scoliosis', description: 'Sideways curvature of spine', status: 'cured' },
                { name: 'Kyphosis', description: 'Forward curvature of spine', status: 'cured' },
                { name: 'Compression Fractures', description: 'Collapsed vertebrae', status: 'cured' }
            ],
            tools: ['Spinal Alignment AI', 'Disc Regeneration Kit', 'Fusion Planning Engine', 'Biomechanics Analyzer']
        },
        functional: {
            title: 'SECTION VI: FUNCTIONAL NEUROSURGICAL DISORDERS',
            description: 'Precision treatments for movement and functional brain disorders.',
            conditions: [
                { name: 'Parkinson\'s Disease', description: 'Progressive movement disorder', status: 'cured' },
                { name: 'Essential Tremor', description: 'Involuntary shaking movements', status: 'cured' },
                { name: 'Dystonia', description: 'Involuntary muscle contractions', status: 'treating' },
                { name: 'Trigeminal Neuralgia', description: 'Severe facial pain', status: 'cured' },
                { name: 'Refractory Epilepsy', description: 'Drug-resistant seizure disorder', status: 'treating' },
                { name: 'Chronic Pain Syndromes', description: 'Persistent pain conditions', status: 'treating' },
                { name: 'Spasticity', description: 'Muscle stiffness and spasms', status: 'cured' }
            ],
            tools: ['Deep Brain Stimulator', 'Seizure Prediction AI', 'Pain Management System', 'Movement Tracker']
        },
        infectious: {
            title: 'SECTION VII: INFECTIOUS & INFLAMMATORY CONDITIONS',
            description: 'Advanced antimicrobial and anti-inflammatory neurological treatments.',
            conditions: [
                { name: 'Brain Abscess', description: 'Pus-filled infection in brain', status: 'cured' },
                { name: 'Epidural Abscess', description: 'Infection in epidural space', status: 'cured' },
                { name: 'Subdural Empyema', description: 'Pus collection under dura', status: 'cured' },
                { name: 'Spinal Osteomyelitis', description: 'Bone infection in spine', status: 'cured' },
                { name: 'Tuberculoma', description: 'Tuberculous infection in brain', status: 'treating' },
                { name: 'Neurocysticercosis', description: 'Parasitic infection in brain', status: 'cured' }
            ],
            tools: ['Pathogen Identifier', 'Antibiotic Optimizer', 'Immune Response Modulator', 'Infection Tracker']
        },
        hydrocephalus: {
            title: 'SECTION VIII: HYDROCEPHALUS & CSF DISORDERS',
            description: 'Specialized treatments for cerebrospinal fluid circulation disorders.',
            conditions: [
                { name: 'Normal Pressure Hydrocephalus', description: 'CSF accumulation with normal pressure', status: 'cured' },
                { name: 'Obstructive Hydrocephalus', description: 'Blocked CSF circulation', status: 'cured' },
                { name: 'Pseudotumor Cerebri', description: 'Increased intracranial pressure', status: 'treating' },
                { name: 'CSF Leaks', description: 'Cerebrospinal fluid leakage', status: 'cured' },
                { name: 'Slit Ventricle Syndrome', description: 'Collapsed brain ventricles', status: 'treating' },
                { name: 'Shunt Malfunction', description: 'CSF shunt system failure', status: 'cured' }
            ],
            tools: ['CSF Flow Analyzer', 'Shunt Optimizer', 'Pressure Monitor', 'Ventricular Mapper']
        },
        peripheral: {
            title: 'SECTION IX: PERIPHERAL NERVE DISORDERS',
            description: 'Comprehensive care for peripheral nervous system conditions.',
            conditions: [
                { name: 'Carpal Tunnel Syndrome', description: 'Median nerve compression', status: 'cured' },
                { name: 'Ulnar Nerve Entrapment', description: 'Ulnar nerve compression', status: 'cured' },
                { name: 'Brachial Plexus Injury', description: 'Nerve network damage in shoulder', status: 'treating' },
                { name: 'Peroneal Nerve Palsy', description: 'Foot drop from nerve damage', status: 'cured' },
                { name: 'Morton\'s Neuroma', description: 'Nerve thickening in foot', status: 'cured' },
                { name: 'Peripheral Nerve Tumors', description: 'Tumors affecting peripheral nerves', status: 'treating' }
            ],
            tools: ['Nerve Conduction Analyzer', 'Microsurgery Simulator', 'Nerve Regeneration Kit', 'Function Tracker']
        },
        cranial: {
            title: 'SECTION X: CRANIAL NERVE DISORDERS',
            description: 'Specialized treatments for cranial nerve dysfunction and disorders.',
            conditions: [
                { name: 'Trigeminal Neuralgia', description: 'Severe facial pain from cranial nerve V', status: 'cured' },
                { name: 'Hemifacial Spasm', description: 'Involuntary facial muscle contractions', status: 'cured' },
                { name: 'Glossopharyngeal Neuralgia', description: 'Pain from cranial nerve IX', status: 'treating' },
                { name: 'Vestibular Schwannoma', description: 'Tumor on cranial nerve VIII', status: 'cured' }
            ],
            tools: ['Cranial Nerve Mapper', 'Gamma Knife System', 'Facial Function Tracker', 'Hearing Preservation Kit']
        }
    };
    
    return sectionData[sectionType] || {};
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Esc key to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl/Cmd + number keys to jump to sections
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const sectionNumber = parseInt(e.key);
        const sections = document.querySelectorAll('.section-card');
        if (sections[sectionNumber - 1]) {
            sections[sectionNumber - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add terminal-like console messages
console.log('%c🧠 AURORA NETWORK INITIALIZED', 'color: #00ff41; font-size: 16px; font-weight: bold;');
console.log('%cNeurosurgical Development Platform Active', 'color: #00ff41; font-family: monospace;');
console.log('%c10 Medical Sections Loaded Successfully', 'color: #00aaff; font-family: monospace;');
console.log('%cAdvanced DevTools Ready', 'color: #ff6600; font-family: monospace;');

// Create floating particles effect
function createFloatingParticles() {
    const particleCount = 50;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        body.appendChild(particle);
        
        // Remove particle after animation
        particle.addEventListener('animationend', () => {
            particle.remove();
            // Create new particle to maintain count
            setTimeout(createParticle, Math.random() * 1000);
        });
    }
}

// Add status indicators to sections
function addStatusIndicators() {
    const sectionCards = document.querySelectorAll('.section-card');
    
    sectionCards.forEach(card => {
        const header = card.querySelector('.section-header h4');
        if (header) {
            const indicator = document.createElement('span');
            indicator.className = 'status-indicator online';
            indicator.title = 'System Online';
            header.insertBefore(indicator, header.firstChild);
        }
    });
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('%cAURORA NETWORK ERROR:', 'color: #ff0000; font-weight: bold;', e.message);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`%cAURORA NETWORK loaded in ${loadTime.toFixed(2)}ms`, 'color: #00ff41; font-family: monospace;');
});

// Add keyboard navigation hints
document.addEventListener('keydown', function(e) {
    if (e.key === 'F1') {
        e.preventDefault();
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    alert(`AURORA NETWORK - Keyboard Shortcuts:
    
ESC - Close modal dialogs
Ctrl/Cmd + 1-9 - Jump to sections
F1 - Show this help
Arrow Keys - Navigate sections
Enter - Activate focused element`);
}
