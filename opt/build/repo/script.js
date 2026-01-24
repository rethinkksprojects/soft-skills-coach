// All JavaScript code is AI-generated //
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. SMOOTH SCROLLING FOR NAVIGATION ==========
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply smooth scrolling for same-page anchors
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            // External links will behave normally
        });
    });

    // ========== START AT TOP ==========
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // One more check after everything loads

    let userHasScrolled = false;
    window.addEventListener('load', function() {
        if(window.pageYOffset > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', function() {
            if(!userHasScrolled && window.pageYOffset > 10) {
                userHasScrolled = true;
                document.body.classList.add('user-has-scrolled');
            }
            }, { passive: true });

        window.addEventListener('scroll', function() {
            if(!userHasScrolled && window.pageYOffset > 10) {
                userHasScrolled = true;
                document.body.classList.add('user-has-scrolled');
            }
        }, { passive: true });

        // Reset scroll position after embed loads
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 1000); // Give embed time to load

        // Reset scroll position after embed loads
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 1000); // Give embed time to load

        setTimeout(() => {
            scrollLock = false;
        }, 2000);

    });

    
    
    // Rest of your existing code...

    // ========== 2. ANIMATED SCENARIO CARDS ==========
    const scenarioCards = document.querySelectorAll('.grid-item');
    
    // Add hover animation to scenario cards
    scenarioCards.forEach(card => {
        // Add initial state
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 12px 24px rgba(255, 133, 133, 0.3)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'rgb(255, 133, 133) 4px 8px 16px';
            this.style.zIndex = '1';
        });
    });

    // ========== 3. STAGGERED FADE-IN ANIMATION ==========
    // Add fade-in class to body for smooth page load
    document.body.classList.add('fade-in');
    
    // Create CSS for fade-in (we'll inject it)
    const fadeInCSS = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in * {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
        }
        
        .heading * { animation-delay: 0.1s; }
        h3:nth-of-type(1) { animation-delay: 0.3s; }
        .methods { animation-delay: 0.4s; }
        h3:nth-of-type(2) { animation-delay: 0.5s; }
        .scenarios .grid-item:nth-child(1) { animation-delay: 0.6s; }
        .scenarios .grid-item:nth-child(2) { animation-delay: 0.7s; }
        .scenarios .grid-item:nth-child(3) { animation-delay: 0.8s; }
        .scenarios .grid-item:nth-child(4) { animation-delay: 0.9s; }
        .scenarios .grid-item:nth-child(5) { animation-delay: 1.0s; }
        .scenarios .grid-item:nth-child(6) { animation-delay: 1.1s; }
        .scenarios .grid-item:nth-child(7) { animation-delay: 1.2s; }
        .scenarios .grid-item:nth-child(8) { animation-delay: 1.3s; }
        .scenarios .grid-item:nth-child(9) { animation-delay: 1.4s; }
        h3:nth-of-type(3) { animation-delay: 1.5s; }
        .methodology { animation-delay: 1.6s; }
        h3:nth-of-type(4) { animation-delay: 1.7s; }
        .character-ai-embed { animation-delay: 1.8s; }
    `;
    
    // Inject the CSS
    const style = document.createElement('style');
    style.textContent = fadeInCSS;
    document.head.appendChild(style);

    // ========== 4. NAVIGATION BAR SCROLL EFFECT ==========
    const navigationBar = document.querySelector('.navigation');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Hide nav on scroll down, show on scroll up
        if(currentScrollY > lastScrollY && currentScrollY > 100) {
            navigationBar.style.transform = 'translateY(-100%)';
        } else {
            navigationBar.style.transform = 'translateY(0)';
        }
        
        // Add shadow when scrolled
        if(currentScrollY > 10) {
            navigationBar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navigationBar.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // ========== 5. INTERACTIVE MILO IMAGE ==========
    const miloImage = document.querySelector('.milo-image');
    
    if(miloImage) {
        miloImage.style.transition = 'transform 0.5s ease';
        miloImage.style.cursor = 'pointer';
        
        miloImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        miloImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        miloImage.addEventListener('click', function() {
            // Gentle bounce effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 150);
        });
    }

    // ========== 6. EMBED IFRAME ENHANCEMENT ==========
    const characterEmbed = document.querySelector('.character-ai-embed');
    
    if(characterEmbed) {
        // Add loading state
        characterEmbed.style.opacity = '0';
        characterEmbed.style.transition = 'opacity 0.5s ease';
        
        // Simulate loading (since embed loads externally)
        setTimeout(() => {
            characterEmbed.style.opacity = '1';
        }, 500);
        
        // Add border animation
        characterEmbed.style.borderRadius = '12px';
        characterEmbed.style.overflow = 'hidden';
        characterEmbed.style.boxShadow = '0 10px 40px rgba(157, 155, 255, 0.3)';
        
        // Pulsing border effect
        setInterval(() => {
            characterEmbed.style.boxShadow = 
                `0 10px 40px ${Date.now() % 2000 < 1000 ? 
                    'rgba(157, 155, 255, 0.4)' : 
                    'rgba(255, 133, 133, 0.4)'}`;
        }, 2000);
    }

    // ========== 7. TYPEWRITER EFFECT FOR MAIN TITLE ==========
    const mainTitle = document.querySelector('.Title');
    
    if(mainTitle && !sessionStorage.getItem('titleAnimated')) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if(i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                sessionStorage.setItem('titleAnimated', 'true');
            }
        }
        
        // Start typing after page loads
        setTimeout(typeWriter, 800);
    }

    // ========== 8. SCROLL PROGRESS INDICATOR ==========
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Add CSS for progress bar
    const progressCSS = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(to right, #9d9bff, #ff8585);
            z-index: 10000;
            transition: width 0.1s;
        }
    `;
    
    const progressStyle = document.createElement('style');
    progressStyle.textContent = progressCSS;
    document.head.appendChild(progressStyle);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ========== 9. INTERACTIVE BACKGROUND PATTERN ==========
    // Add subtle floating shapes in background
    const backgroundShapes = document.createElement('div');
    backgroundShapes.className = 'background-shapes';
    document.body.insertBefore(backgroundShapes, document.body.firstChild);
    
    const shapesCSS = `
        .background-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        
        .background-shapes::before,
        .background-shapes::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
            animation: float 20s infinite linear;
        }
        
        .background-shapes::before {
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, #9d9bff, #ff8585);
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }
        
        .background-shapes::after {
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #ff8585, #9d9bff);
            bottom: 10%;
            right: 10%;
            animation-delay: -10s;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -20px) rotate(90deg); }
            50% { transform: translate(0, -40px) rotate(180deg); }
            75% { transform: translate(-20px, -20px) rotate(270deg); }
        }
    `;
    
    const shapesStyle = document.createElement('style');
    shapesStyle.textContent = shapesCSS;
    document.head.appendChild(shapesStyle);

    // ========== 10. RESPONSIVE EMBED ADJUSTMENT ==========
    function adjustEmbedSize() {
        if(window.innerWidth < 1100) {
            characterEmbed.width = Math.min(800, window.innerWidth - 40);
            characterEmbed.height = 500;
        } else {
            characterEmbed.width = 1000;
            characterEmbed.height = 700;
        }
    }
    
    // Adjust on load and resize
    window.addEventListener('load', adjustEmbedSize);
    window.addEventListener('resize', adjustEmbedSize);

    // ========== 11. COPY SCENARIO TEXT ON CLICK ==========
    scenarioCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            const textToCopy = this.textContent;
            const scenarioInfo = {
                'Polite Refusals': 'Practice saying "no" while maintaining relationships',
                'Asking For Help': 'Learn to request assistance clearly and confidently',
                'Giving Compliments': 'Master specific, genuine praise',
                'Setting Boundaries': 'Communicate personal limits respectfully',
                'Communication Skills': 'Active listening and clear expression',
                'Emotional Intelligence': 'Understanding and managing emotions',
                'Building Rapport': 'Creating connections with others',
                'Professional Scenarios': 'Workplace communication and etiquette',
                'Personal Development': 'Self-awareness and growth'
            };
            
            const message = `Try practicing "${textToCopy}" with Milo!\n${scenarioInfo[textToCopy] || ''}`;
            
            // Copy to clipboard
            navigator.clipboard.writeText(message).then(() => {
                // Visual feedback
                const originalText = this.textContent;
                this.textContent = 'Copied! ✓';
                this.style.background = 'linear-gradient(to bottom, #c8ffc8, #90ee90)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'linear-gradient(to bottom, rgb(255, 234, 234), rgb(255, 151, 151))';
                }, 1500);
            });
        });
    });

    // ========== 12. PAGE VISIT COUNTER (LOCAL) ==========
    if(localStorage.getItem('miloVisits')) {
        const visits = parseInt(localStorage.getItem('miloVisits')) + 1;
        localStorage.setItem('miloVisits', visits.toString());
    } else {
        localStorage.setItem('miloVisits', '1');
    }
    
    // Optional: Display in console
    console.log(`👋 Welcome to Milo's Soft Skills Chatbot! Visit #${localStorage.getItem('miloVisits')}`);

    // ========== COMPLETE SCROLL CONTROL ==========
(function() {
    // Disable all scrolling initially
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Store original scroll position
    let originalScrollTop = window.pageYOffset;
    
    // Force stay at top every 100ms for first 3 seconds
    const scrollInterval = setInterval(() => {
        if(window.pageYOffset > 10) {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    }, 100);
    
    // Re-enable scrolling after page is stable
    const enableScrolling = () => {
        clearInterval(scrollInterval);
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Enable after 3 seconds OR when user tries to scroll
    setTimeout(enableScrolling, 3000);
    
    window.addEventListener('wheel', enableScrolling, { once: true });
    window.addEventListener('touchmove', enableScrolling, { once: true });
    window.addEventListener('keydown', enableScrolling, { once: true });
})();

    // Debug: Log what's causing scroll events
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if(currentScroll > lastScrollTop + 50) { // Large jump detected
        console.log('Large scroll detected! From:', lastScrollTop, 'to:', currentScroll);
        
        // Check what element is at that position
        const elements = document.elementsFromPoint(0, currentScroll);
        console.log('Elements at scroll position:', elements);
    }
    
    lastScrollTop = currentScroll;
});

// Check for elements that might be auto-focusing
document.addEventListener('focusin', function(e) {
    console.log('Element focused:', e.target);
    if(e.target.tagName === 'IFRAME') {
        console.warn('Iframe focused - this might cause scrolling!');
    }
});

// ========== COMPLETE SCROLL CONTROL ==========
(function() {
    // Disable all scrolling initially
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Store original scroll position
    let originalScrollTop = window.pageYOffset;
    
    // Force stay at top every 100ms for first 3 seconds
    const scrollInterval = setInterval(() => {
        if(window.pageYOffset > 10) {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    }, 100);
    
    // Re-enable scrolling after page is stable
    const enableScrolling = () => {
        clearInterval(scrollInterval);
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Enable after 3 seconds OR when user tries to scroll
    setTimeout(enableScrolling, 3000);
    
    window.addEventListener('wheel', enableScrolling, { once: true });
    window.addEventListener('touchmove', enableScrolling, { once: true });
    window.addEventListener('keydown', enableScrolling, { once: true });
})();

// ========== FIX AUTO-SCROLL TO BOTTOM ==========
// 1. Start at top
window.scrollTo(0, 0);

// 2. Wait for DOM, then lock scroll
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    
    // 3. Reset any iframe-related scroll
    const iframe = document.querySelector('.character-ai-embed');
    if(iframe) {
        iframe.addEventListener('load', function() {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }, 500);
        });
    }
    
    // 4. Re-enable scrolling after everything settles
    setTimeout(() => {
        document.body.style.overflow = 'auto';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
});

// 5. Catch any late scroll events
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        console.log('Unexpected scroll detected, resetting...');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

});

// ========== 13. ADDITIONAL CSS ENHANCEMENTS (INJECTED) ==========
const additionalCSS = `
    /* Enhanced navigation */
    .navigation {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    
    .navigation a {
        position: relative;
        transition: color 0.3s ease;
    }
    
    .navigation a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #ff8585, #9d9bff);
        transition: width 0.3s ease;
    }
    
    .navigation a:hover::after {
        width: 100%;
    }
    
    /* Enhanced headings */
    h3 {
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
    }
    
    h3::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(to right, #9d9bff, #ff8585);
        border-radius: 2px;
    }
    
    /* Better list styling */
    .methods li, .methodology li {
        transition: transform 0.3s ease, padding-left 0.3s ease;
        margin-bottom: 8px;
    }
    
    .methods li:hover, .methodology li:hover {
        transform: translateX(5px);
        padding-left: 5px;
    }
    
    /* Print styles */
    @media print {
        .navigation, .scroll-progress, .background-shapes {
            display: none !important;
        }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

// Inject additional CSS
const additionalStyle = document.createElement('style');
additionalStyle.textContent = additionalCSS;
document.head.appendChild(additionalStyle);

// ========== 14. CONSOLE GREETING ==========
console.log(`
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║   🎭 MILO - Soft Skills Chatbot                 ║
    ║   🤖 Character.ai Integration                   ║
    ║   💬 Practice social skills with AI             ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
    
    Thanks for checking out Milo! Try clicking on the
    scenario cards or hovering over Milo's image!
`);