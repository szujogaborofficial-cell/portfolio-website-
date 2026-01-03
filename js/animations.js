// ============================================
// ANIMATIONS.JS - GSAP Animations
// ============================================

// Wait for GSAP and DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Animation ---
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5
        })
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.5')
        .from('.hero-cta .btn', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.4')
        .from('.hero-image-wrapper', {
            opacity: 0,
            scale: 0.95,
            duration: 1
        }, '-=0.8');

    // --- Scroll Indicator Animation ---
    gsap.to('.scroll-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
    });

    // --- Stats Counter Animation ---
    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection) {
        gsap.from('.stat-item', {
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15
        });
    }

    // --- Work Cards Reveal ---
    const workCards = document.querySelectorAll('.work-card');
    
    workCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.1
        });
    });

    // --- Service Cards Animation ---
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15
        });
    });

    // --- Testimonials Slide In ---
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8
        });
    });

    // --- Section Titles Reveal ---
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8
        });
    });

    // --- CTA Section Animation ---
    const ctaSection = document.querySelector('.cta-section');
    
    if (ctaSection) {
        gsap.from('.cta-content > *', {
            scrollTrigger: {
                trigger: ctaSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2
        });
    }

    // --- Parallax Effect for Hero Image ---
    const heroImage = document.querySelector('.hero-image-wrapper');
    
    if (heroImage) {
        gsap.to(heroImage, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            ease: 'none'
        });
    }

    // --- Footer Fade In ---
    const footer = document.querySelector('.footer');
    
    if (footer) {
        gsap.from('.footer-col', {
            scrollTrigger: {
                trigger: footer,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15
        });
    }

    // --- Hover Animations for Cards ---
    const interactiveCards = document.querySelectorAll('.work-card, .service-card, .testimonial-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // --- Button Hover Animation ---
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // --- Image Reveal Effect ---
    const imageWrappers = document.querySelectorAll('.work-image, .hero-image-wrapper');
    
    imageWrappers.forEach(wrapper => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--accent);
            z-index: 1;
        `;
        
        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';
        wrapper.appendChild(overlay);
        
        gsap.from(overlay, {
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scaleX: 1,
            transformOrigin: 'left',
            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => overlay.remove()
        });
    });

    // --- Stagger Animation for Lists ---
    const lists = document.querySelectorAll('.nav-menu, .footer-links');
    
    lists.forEach(list => {
        gsap.from(list.children, {
            scrollTrigger: {
                trigger: list,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1
        });
    });

    // --- Smooth Scroll (Optional Enhancement) ---
    // Uncomment if you want smoother scrolling behavior
    /*
    gsap.to(window, {
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        ease: 'power1.inOut'
    });
    */

    // --- Custom Cursor (Optional) ---
    // Uncomment for custom cursor effect
    /*
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.3
        });
    });
    
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
    */

    console.log('✨ GSAP animations loaded!');
});
